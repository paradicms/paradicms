import logging
from collections.abc import Iterable

from rdflib import URIRef

from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.utils.clone_graph import clone_graph
from paradicms_etl.utils.rewrite_graph_uris import rewrite_graph_uris

logger = logging.getLogger(__name__)


def merge_same_as_models(  # noqa: PLR0912
    models_by_uri: dict[URIRef, ResourceBackedModel]
) -> Iterable[ResourceBackedModel]:
    """
    Simple agglomerative algorithm for merging models that are sameAs each other.
    """

    # Put each model in its own group
    model_groups_by_model_uri: dict[URIRef, dict[URIRef, ResourceBackedModel]] = {}
    for model in models_by_uri.values():
        model_groups_by_model_uri[model.uri] = {model.uri: model}

    # For each (this, sameAs, that), "pull" that's model group into "this's" model group and adjust the pointers
    for model in models_by_uri.values():
        model_group = model_groups_by_model_uri[model.uri]
        for same_as_uri in model.same_as_uris:
            same_as_model = models_by_uri.get(same_as_uri)
            if same_as_model is None:
                logger.warning(
                    "model %s sameAs missing model %s", model.uri, same_as_uri
                )
                continue
            same_as_model_group = model_groups_by_model_uri[same_as_model.uri]
            for same_as_model_group_model in same_as_model_group.values():
                # If the same_as_model is not already in model_group, pull it in
                if same_as_model_group_model.uri not in model_group:
                    model_group[
                        same_as_model_group_model.uri
                    ] = same_as_model_group_model
                # Point same_as_model's group to the group it was pulled into
                model_groups_by_model_uri[same_as_model_group_model.uri] = model_group

    # Identify unique model groups
    unique_model_groups_by_id: dict[int, dict[URIRef, ResourceBackedModel]] = {}
    for model_group in model_groups_by_model_uri.values():
        unique_model_groups_by_id[id(model_group)] = model_group

    merged_models: list[ResourceBackedModel] = []
    rewrite_uris: dict[URIRef, URIRef] = {}
    for model_group in unique_model_groups_by_id.values():
        if len(model_group) == 1:
            # Model had no sameAs to or from it
            merged_models.extend(model_group.values())
            continue

        assert model_group
        # Merge sameAs models
        # Assume all of the models have the same type
        same_as_model_types = {
            type(same_as_model) for same_as_model in model_group.values()
        }
        assert len(same_as_model_types) == 1, same_as_model_types
        same_as_model_type = next(iter(same_as_model_types))

        # Merge the models under a single URI
        # Use a heuristic to pick which model's URI to reuse
        # Rewrite the other URIs
        models_with_no_same_as_uris: list[ResourceBackedModel] = []
        models_with_same_as_uris: list[ResourceBackedModel] = []
        for model in model_group.values():
            if model.same_as_uris:
                models_with_same_as_uris.append(model)  # type: ignore
            else:
                models_with_no_same_as_uris.append(model)  # type: ignore
        assert models_with_same_as_uris

        # Reuse a model that points at the other model(s)
        merged_graph = clone_graph(models_with_same_as_uris[0].resource.graph)
        reuse_model_uri = models_with_same_as_uris[0].uri

        # Merge the model graphs
        for other_model in models_with_same_as_uris[1:] + models_with_no_same_as_uris:
            for triple in other_model.resource.graph:
                if triple[0] == other_model.uri:
                    merged_graph.add((reuse_model_uri, triple[1], triple[2]))
                else:
                    merged_graph.add(triple)
            rewrite_uris[other_model.uri] = reuse_model_uri

        # Remove sameAs triples
        same_as_triples = tuple(
            merged_graph.triples(
                (None, same_as_model_type.same_as_property_uri(), None)
            )
        )
        assert same_as_triples
        for same_as_triple in same_as_triples:
            merged_graph.remove(same_as_triple)

        merged_models.append(same_as_model_type(merged_graph.resource(reuse_model_uri)))

    if rewrite_uris:
        for merged_model in merged_models:
            rewritten_graph = rewrite_graph_uris(
                graph=merged_model.resource.graph, uri_map=rewrite_uris
            )
            yield merged_model.__class__(rewritten_graph.resource(merged_model.uri))
    else:
        yield from merged_models
