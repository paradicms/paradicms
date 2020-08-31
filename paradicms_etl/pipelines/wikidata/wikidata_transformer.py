from pathlib import Path
from typing import Generator, Tuple

from rdflib import Graph, RDF

from paradicms_etl._model import _Model
from paradicms_etl._transformer import _Transformer
from paradicms_etl.pipelines.wikidata.wikidata_full_statement import (
    WikidataFullStatement,
)
from paradicms_etl.pipelines.wikidata.wikidata_item import WikidataItem
from paradicms_etl.pipelines.wikidata.wikidata_namespace import WIKIBASE
from paradicms_etl.pipelines.wikidata.wikidata_property_definition import (
    WikidataPropertyDefinition,
)


class WikidataTransformer(_Transformer):
    def __read_items(
        self, graph: Graph, property_definitions: Tuple[WikidataPropertyDefinition, ...]
    ) -> Tuple[WikidataItem, ...]:
        items = []
        for item_subject in graph.subjects(predicate=RDF.type, object=WIKIBASE.Item):
            items.append(
                WikidataItem.parse(
                    graph=graph,
                    logger=self._logger,
                    property_definitions=property_definitions,
                    uri=item_subject,
                )
            )

        # Make another pass on items, substituting a WikidataItem instance for an (internal) URIRef to it
        items_by_uri = {item.uri: item for item in items}

        for item in items:
            for statement in item.statements:
                try:
                    statement.normalized_value = items_by_uri[
                        statement.normalized_value
                    ]
                except KeyError:
                    pass

                try:
                    statement.value = items_by_uri[statement.value]
                except KeyError:
                    pass

                if isinstance(statement, WikidataFullStatement):
                    for qualifier in statement.qualifiers:
                        try:
                            qualifier.normalized_value = items_by_uri[
                                qualifier.normalized_value
                            ]
                        except KeyError:
                            pass

                        try:
                            qualifier.value = items_by_uri[qualifier.value]
                        except KeyError:
                            pass

        # for item in items:
        #     if item.uri not in accounted_for_item_uris:
        #         print("Unaccounted item URI", item.uri)

        return tuple(items)

    def __read_property_definitions(
        self, graph: Graph
    ) -> Tuple[WikidataPropertyDefinition, ...]:
        property_definitions = []
        property_definition_labels = set()
        for property_subject in graph.subjects(
            predicate=RDF.type, object=WIKIBASE.Property
        ):
            property_definition = WikidataPropertyDefinition.parse(
                graph=graph, entity_uri=property_subject
            )
            assert property_definition.label not in property_definition_labels
            property_definitions.append(property_definition)
            property_definition_labels.add(property_definition.label)
        return tuple(property_definitions)

    def transform(
        self, rdf_file_paths: Tuple[Path, ...]
    ) -> Generator[_Model, None, None]:
        graph = Graph()
        for rdf_file_path in rdf_file_paths:
            graph.parse(format="ttl", source=str(rdf_file_path))

        property_definitions = self.__read_property_definitions(graph)
        items = self.__read_items(
            graph=graph, property_definitions=property_definitions
        )

        yield from self._transform_items(items)

    def _transform_items(self, items: Tuple[WikidataItem, ...]):
        raise NotImplementedError("TODO: transform to Objects")
