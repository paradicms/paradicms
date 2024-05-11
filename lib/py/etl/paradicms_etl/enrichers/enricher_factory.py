import importlib
from inspect import isclass, isfunction
from pathlib import Path
from types import ModuleType
from typing import List, Optional

from stringcase import pascalcase

from paradicms_etl.enricher import Enricher
from paradicms_etl.enrichers.creative_commons_licenses_enricher import (
    creative_commons_licenses_enricher,
)
from paradicms_etl.enrichers.getty_enricher import GettyEnricher
from paradicms_etl.enrichers.metmuseum_enricher import MetmuseumEnricher
from paradicms_etl.enrichers.ncsu_enricher import NcsuEnricher
from paradicms_etl.enrichers.rights_statements_dot_org_rights_statements_enricher import (
    rights_statements_dot_org_rights_statements_enricher,
)
from paradicms_etl.enrichers.wikidata_enricher import WikidataEnricher
from paradicms_etl.enrichers.wikimedia_commons_enricher import WikimediaCommonsEnricher
from paradicms_etl.enrichers.yale_enricher import YaleEnricher


class EnricherFactory:
    @staticmethod
    def default_enrichers(*, cache_dir_path: Optional[Path] = None):
        enrichers: List[Enricher] = []
        if cache_dir_path is not None:
            enrichers.extend(
                (
                    GettyEnricher(cache_dir_path=cache_dir_path / "getty"),
                    MetmuseumEnricher(cache_dir_path=cache_dir_path / "metmuseum"),
                    NcsuEnricher(cache_dir_path=cache_dir_path / "ncsu"),
                    YaleEnricher(cache_dir_path=cache_dir_path / "yale"),
                    WikidataEnricher(cache_dir_path=cache_dir_path / "wikidata"),
                    WikimediaCommonsEnricher(
                        cache_dir_path=cache_dir_path / "wikimedia_commons"
                    ),
                )
            )
        enrichers.extend(
            (
                creative_commons_licenses_enricher,
                rights_statements_dot_org_rights_statements_enricher,
            )
        )
        return tuple(enrichers)

    @staticmethod
    def enricher_by_name(enricher_name: str, *, cache_dir_path: Path) -> Enricher:
        enricher_module_qnames = [enricher_name]
        for project in ("etl", "ssg"):
            for enricher_name_suffix in ("", "_enricher"):
                enricher_module_qnames.append(
                    f"paradicms_{project}.enrichers.{enricher_name}{enricher_name_suffix}"
                )

        enricher_module: Optional[ModuleType] = None
        for enricher_module_qname in enricher_module_qnames:
            try:
                enricher_module = importlib.import_module(enricher_module_qname)
                break
            except ImportError:
                pass

        if enricher_module is None:
            raise ValueError("no such enricher " + enricher_name)

        enricher_module_name = enricher_module.__name__.rsplit(".")[-1]

        enricher_type = None
        for enricher_type_name in (
            enricher_module_name,
            pascalcase(enricher_module_name),
        ):
            try:
                enricher_type = getattr(enricher_module, enricher_type_name)
                break
            except AttributeError:
                pass

        if enricher_type is None:
            raise ValueError(
                f"unable to find enricher {enricher_module_name} in {enricher_module.__name__}"
            )

        if isclass(enricher_type):
            return enricher_type(cache_dir_path=cache_dir_path / enricher_name)
        elif isfunction(enricher_type):
            return enricher_type
        else:
            raise TypeError(type(enricher_type))
