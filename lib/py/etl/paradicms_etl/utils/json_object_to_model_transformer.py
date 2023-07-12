import logging
from typing import Type, Dict, Any
from urllib.parse import quote

from rdflib import Namespace, URIRef, Graph, Literal, RDFS
from stringcase import spinalcase

from paradicms_etl.model import Model
from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.models.stub.stub_model import StubModel
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class JsonObjectToModelTransformer:
    """
    Transform a JSON object to a Model using JSON-LD contexts.

    Used by the DirectoryTransformer and SpreadsheetTransformer.
    """

    def __init__(
        self,
        *,
        pipeline_id: str,
        root_model_classes_by_name: Dict[str, Type[Model]],
    ):
        self.__logger = logging.getLogger(__name__)
        self.__pipeline_id = pipeline_id

        self.__json_ld_context = {}
        namespace_prefixes = ("md", "ss")  # Markdown, Spreadsheet
        for namespace_prefix in namespace_prefixes:
            self.__json_ld_context[namespace_prefix] = str(self.__pipeline_namespace)
        for (
            root_model_class_name,
            root_model_class,
        ) in root_model_classes_by_name.items():
            for namespace_prefix in namespace_prefixes:
                self.__json_ld_context[
                    namespace_prefix + "-" + spinalcase(root_model_class_name)
                ] = str(self.__model_class_namespace(model_class=root_model_class))

    def __call__(
        self,
        *,
        json_object: Dict[str, Any],
        model_class: Type[Model],
        model_id: str,
    ) -> Model:
        """
        Convert a JSON object into a model.

        :param json_object: JSON object to convert
        :param model_class_name: model class name derived from the directory name (directory format) or the sheet name (spreadsheet format)
        :param model_id: model identifier derived from the file stem (directory format) or the row number (spreadsheet format)
        :return:
        """

        json_ld_context = safe_dict_update(
            model_class.json_ld_context(), self.__json_ld_context
        )

        if issubclass(model_class, StubModel):
            if len(json_object) != 1 or "@id" not in json_object:
                raise ValueError(f"expected {model_class.__name__} to only have an @id")

            # Instead of assuming @id is a already an unqualified IRI, construct a dummy JSON-LD object that we can
            # turn into a Graph, then extract the expanded @id from the Graph, so the input @id can incorporate
            # namespace prefixes.
            stub_json_ld_object = {
                "@id": json_object["@id"],
                str(RDFS.label): "dummy statement",
            }
            graph = Graph()
            graph.parse(data=stub_json_ld_object, context=json_ld_context, format="json-ld")  # type: ignore
            assert len(graph) == 1
            expanded_id = tuple(graph.subjects())[0]
            assert isinstance(expanded_id, URIRef)
            return model_class(expanded_id)

        model_uri = self.model_uri(model_class=model_class, model_id=model_id)

        if "@id" not in json_object:
            json_object["@id"] = str(model_uri)

        graph = Graph()
        graph.parse(data=json_object, context=json_ld_context, format="json-ld")  # type: ignore

        resource = graph.resource(
            self.__expand_json_ld_id(
                json_ld_context=json_ld_context, json_ld_id=json_object["@id"]
            )
        )

        # expected_rdf_type = getattr(CMS, model_class.__name__)
        # actual_rdf_type = resource.value(RDF.type)
        # if actual_rdf_type is None:
        #     resource.add(RDF.type, expected_rdf_type)
        # else:
        #     if not isinstance(actual_rdf_type, Resource):
        #         raise ValueError(f"{metadata_file_entry} rdf:type is not a URI")
        #     if actual_rdf_type.identifier != expected_rdf_type:
        #         raise ValueError(
        #             f"{metadata_file_entry} rdf_type is {actual_rdf_type.identifier}, expected {expected_rdf_type}"
        #         )

        if issubclass(model_class, ResourceBackedModel):
            label_property_uri = model_class.label_property_uri()
            if label_property_uri is not None:
                if resource.value(label_property_uri) is None:
                    resource.add(label_property_uri, Literal(model_id))

        return model_class.from_rdf(resource)

    @staticmethod
    def __expand_json_ld_id(
        *, json_ld_context: Dict[str, Any], json_ld_id: str
    ) -> URIRef:
        temp_json_ld_object = {
            "@id": json_ld_id,
            "http://example.com/p": "http://example.com/o",
        }
        temp_graph = Graph()
        temp_graph.parse(data=temp_json_ld_object, context=json_ld_context, format="json-ld")  # type: ignore
        assert len(temp_graph) == 1
        subject = tuple(temp_graph.subjects())[0]
        assert isinstance(subject, URIRef)
        return subject

    def __model_class_namespace(self, *, model_class: Type[Model]) -> Namespace:
        return Namespace(
            f"{self.__pipeline_namespace}{quote(spinalcase(model_class.__name__))}:"
        )

    def model_uri(self, *, model_class: Type[Model], model_id: str) -> URIRef:
        return self.__model_class_namespace(model_class=model_class)[quote(model_id)]

    @property
    def __pipeline_namespace(self) -> Namespace:
        return Namespace(f"urn:paradicms_etl:pipeline:{self.__pipeline_id}:")
