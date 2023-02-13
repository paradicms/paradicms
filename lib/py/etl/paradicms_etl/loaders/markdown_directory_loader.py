import logging
from pathlib import Path
from typing import Dict, Optional, Union, Type, Any, Iterable

import yaml
from pathvalidate import sanitize_filename
from rdflib import Graph, Literal, Namespace, RDF, URIRef, BNode
from rdflib.namespace import DefinedNamespace
from rdflib.resource import Resource
from stringcase import snakecase

from paradicms_etl.model import Model
from paradicms_etl.utils.dict_to_resource_transformer import DictToResourceTransformer

logger = logging.getLogger(__name__)


class MarkdownDirectoryLoader:
    def __init__(
        self,
        *,
        loaded_data_dir_path: Path,
        namespaces_by_prefix: Optional[
            Dict[str, Union[Type[DefinedNamespace], Namespace]]
        ] = None,
    ):
        self.__loaded_data_dir_path = loaded_data_dir_path
        if namespaces_by_prefix is None:
            namespaces_by_prefix = (
                DictToResourceTransformer.NAMESPACES_BY_PREFIX_DEFAULT
            )
        self.__namespaces_by_prefix = namespaces_by_prefix.copy()

    def __call__(self, *, models: Iterable[Model]):
        for model in models:
            model_id = model.label
            if model_id is None:
                logger.warning(f"model {getattr(model, 'uri', '<blank>')} has no label")
                continue
            model_type = snakecase(model.__class__.__name__)
            model_graph = Graph()
            model_resource = model.to_rdf(graph=model_graph)
            if isinstance(model_resource.identifier, URIRef):
                # Include the original URI
                model_graph.add(
                    (model_resource.identifier, RDF.subject, model_resource.identifier)
                )

            md_front_matter = self.__transform_model_resource_to_dict(model_resource)

            md_dir_path = self.__loaded_data_dir_path / model_type
            md_dir_path.mkdir(parents=True, exist_ok=True)

            md_file_path = md_dir_path / (str(sanitize_filename(model_id)) + ".md")
            with open(md_file_path, "w+", encoding="utf-8") as md_file:
                md_file.write(
                    f"""\
---
{yaml.dump(md_front_matter).rstrip()}
---
"""
                )

    def __transform_model_resource_to_dict(
        self, model_resource: Resource
    ) -> Dict[str, Any]:
        result: Dict[str, Any] = {}
        for p, o in model_resource.predicate_objects():
            if p.identifier == RDF.type:
                continue
            p_prefix, p_namespace = None, None
            for prefix, namespace in self.__namespaces_by_prefix.items():
                if not str(p.identifier).startswith(str(namespace)):
                    continue
                if p_namespace is None or str(namespace) > len(str(p_namespace)):
                    p_prefix, p_namespace = prefix, namespace
            if p_prefix is None:
                logger.warning(
                    "(%s, %s, object) does not have an associated namespace prefix",
                    model_resource.identifier,
                    p,
                )
                continue
            p_local_name = str(p.identifier)[len(str(p_namespace)) :]

            if isinstance(o, Literal):
                md_o = o.toPython()
                if isinstance(md_o, Literal) or not isinstance(
                    md_o, (float, int, bool, str)
                ):
                    logger.warning("unable to serialize non-scalar literal: %s", md_o)
                    continue
            elif isinstance(o, Resource):
                if isinstance(o.identifier, URIRef):
                    md_o = f"<{str(o.identifier)}>"
                elif isinstance(o.identifier, BNode):
                    md_o = self.__transform_model_resource_to_dict(o)
                else:
                    raise NotImplementedError
            else:
                raise TypeError(type(o))

            result_key = f"{p_prefix}:{p_local_name}"

            existing_result_value = result.get(result_key, None)
            if existing_result_value is None:
                result[result_key] = md_o
            elif isinstance(existing_result_value, list):
                existing_result_value.append(md_o)
            else:
                result[result_key] = [existing_result_value, md_o]
        return result
