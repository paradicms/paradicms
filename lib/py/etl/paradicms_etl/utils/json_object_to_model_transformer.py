from typing import Type, Dict, Any
from urllib.parse import quote

from rdflib import Namespace, URIRef, Graph, Literal
from stringcase import spinalcase

from paradicms_etl.models.resource_backed_model import ResourceBackedModel
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
        root_model_classes_by_name: Dict[str, Type[ResourceBackedModel]],
    ):
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
        model_class: Type[ResourceBackedModel],
        model_id: str,
    ) -> ResourceBackedModel:
        """
        Convert a JSON object into a model.

        :param json_object: JSON object to convert
        :param model_class_name: model class name derived from the directory name (directory format) or the sheet name (spreadsheet format)
        :param model_id: model identifier derived from the file stem (directory format) or the row number (spreadsheet format)
        :return:
        """

        model_uri = self.model_uri(model_class=model_class, model_id=model_id)

        if "@id" not in json_object:
            json_object["@id"] = str(model_uri)

        json_ld_context = safe_dict_update(
            model_class.json_ld_context(), self.__json_ld_context
        )

        graph = Graph()
        graph.parse(data=json_object, context=json_ld_context, format="json-ld")  # type: ignore

        uri_subjects = {
            subject for subject in graph.subjects() if isinstance(subject, URIRef)
        }
        if len(uri_subjects) == 1:
            resource = graph.resource(uri_subjects.pop())
        else:
            raise ValueError(
                f"{model_class.__name__} {model_id} has {len(uri_subjects)} named subjects"
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

        label_property_uri = model_class.label_property_uri()
        if label_property_uri is not None:
            if resource.value(label_property_uri) is None:
                resource.add(label_property_uri, Literal(model_id))

        return model_class.from_rdf(resource)

    def __model_class_namespace(
        self, *, model_class: Type[ResourceBackedModel]
    ) -> Namespace:
        return Namespace(
            f"{self.__pipeline_namespace}{quote(spinalcase(model_class.__name__))}:"
        )

    def model_uri(
        self, *, model_class: Type[ResourceBackedModel], model_id: str
    ) -> URIRef:
        return self.__model_class_namespace(model_class=model_class)[quote(model_id)]

    @property
    def __pipeline_namespace(self) -> Namespace:
        return Namespace(f"urn:paradicms_etl:pipeline:{self.__pipeline_id}:")
