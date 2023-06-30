from pathlib import Path

import pytest
from rdflib import URIRef

from paradicms_etl.enrichers.wikimedia_commons_enricher import WikimediaCommonsEnricher
from paradicms_etl.models.image import Image
from paradicms_etl.models.schema.schema_image_object import SchemaImageObject


@pytest.mark.parametrize(
    "source",
    [
        # Wikimedia Commons File: pages
        "http://commons.wikimedia.org/wiki/File:Babbage_Difference_Engine.jpg",
        "http://commons.wikimedia.org/wiki/File:KnuthAtOpenContentAlliance.jpg",
        "http://commons.wikimedia.org/wiki/File:Lc3_2018_(263682303)_(cropped).jpeg",
        "http://commons.wikimedia.org/wiki/File:SRI_Douglas_Engelbart_1968.jpg",
        "http://commons.wikimedia.org/wiki/File:Sir_Tim_Berners-Lee_(cropped).jpg",
        "https://commons.wikimedia.org/wiki/File:TeX_logo.svg",
        "http://commons.wikimedia.org/wiki/File:Tux.svg",
        "http://commons.wikimedia.org/wiki/File:Visionary_Doug_Engelbart_did_quite_a_bit_more_than_invent_the_mouse,_but_also_pioneered_the_Graphics_User_Interface._His_Stanford_demo_in_1968_%E2%80%9CThe_Mother_of_all_Demos%E2%80%9D_was_groundbreaking_vision_for_(1805321166).jpg",
        "http://commons.wikimedia.org/wiki/File:WWW_logo_by_Robert_Cailliau.svg",
        # Thumbnail image src= from Wikipedia
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Akhilleus_Patroklos_Antikensammlung_Berlin_F2278.jpg/375px-Akhilleus_Patroklos_Antikensammlung_Berlin_F2278.jpg",
        # Thumbnail image link from Wikipedia
        "https://en.wikipedia.org/wiki/File:Judgement_of_Paris_Met_98.8.11_cca2_img_by_Marie-Lan_Nguyen_edited_by_K_Vail.jpg",
        # Special file path from Wikidata wdt:P18
        "http://commons.wikimedia.org/wiki/Special:FilePath/Pilot%20ACE%20computer-2.jpg",
    ],
)
def test_enrich(data_dir_path: Path, source: str):
    unenriched_image = (
        SchemaImageObject.builder(
            uri=URIRef("http://example.com/Image"),
        )
        .set_src(URIRef(source))
        .build()
    )
    assert not unenriched_image.licenses
    assert not unenriched_image.rights_statements
    enriched_models = tuple(
        WikimediaCommonsEnricher(
            cache_dir_path=data_dir_path / "test" / "wikimedia_commons"
        )((unenriched_image,))
    )
    assert len(enriched_models) == 1
    enriched_image = enriched_models[0]
    assert isinstance(enriched_image, Image)
    assert enriched_image.uri == unenriched_image.uri
    assert enriched_image.creators
    assert enriched_image.licenses
    # assert (
    #     enriched_image.rights_statement
    #     == RightsStatementsDotOrgRightsStatements.InC.uri
    # )
