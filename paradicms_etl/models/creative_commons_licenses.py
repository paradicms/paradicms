# -*- coding: utf-8 -*-

import rdflib.term

from paradicms_etl.models._model_singletons import _ModelSingletons
from paradicms_etl.models.license import License


class CreativeCommonsLicenses(_ModelSingletons):
    _MODEL_CLASS = License

    BSD = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/BSD/"),
        identifier="BSD",
        title="BSD",
        version=None,
    )
    GPL_2_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/GPL/2.0/"),
        identifier="GPL",
        title="GNU General Public License",
        version="2.0",
    )
    LGPL_2_1 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/LGPL/2.1/"),
        identifier="LGPL",
        title="GNU Lesser General Public License",
        version="2.1",
    )
    MIT = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/MIT/"),
        identifier="MIT",
        title="MIT",
        version=None,
    )
    BY_NC_ND_2_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc-nd/2.0/"),
        identifier="by-nc-nd",
        title="Attribution-NonCommercial-NoDerivs 2.0 Generic",
        version="2.0",
    )
    BY_NC_ND_2_5 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc-nd/2.5/"),
        identifier="by-nc-nd",
        title="Attribution-NonCommercial-NoDerivs 2.5 Generic",
        version="2.5",
    )
    BY_NC_ND_3_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc-nd/3.0/"),
        identifier="by-nc-nd",
        title="Attribution-NonCommercial-NoDerivs 3.0 Unported",
        version="3.0",
    )
    BY_NC_ND_4_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc-nd/4.0/"),
        identifier="by-nc-nd",
        title="Attribution-NonCommercial-NoDerivatives 4.0 International",
        version="4.0",
    )
    BY_NC_SA_1_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc-sa/1.0/"),
        identifier="by-nc-sa",
        title="Attribution-NonCommercial-ShareAlike 1.0 Generic",
        version="1.0",
    )
    BY_NC_SA_2_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc-sa/2.0/"),
        identifier="by-nc-sa",
        title="Attribution-NonCommercial-ShareAlike 2.0 Generic",
        version="2.0",
    )
    BY_NC_SA_2_5 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc-sa/2.5/"),
        identifier="by-nc-sa",
        title="Attribution-NonCommercial-ShareAlike 2.5 Generic",
        version="2.5",
    )
    BY_NC_SA_3_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc-sa/3.0/"),
        identifier="by-nc-sa",
        title="Attribution-NonCommercial-ShareAlike 3.0 Unported",
        version="3.0",
    )
    BY_NC_SA_4_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc-sa/4.0/"),
        identifier="by-nc-sa",
        title="Attribution-NonCommercial-ShareAlike 4.0 International",
        version="4.0",
    )
    BY_NC_1_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc/1.0/"),
        identifier="by-nc",
        title="Attribution-NonCommercial 1.0 Generic",
        version="1.0",
    )
    BY_NC_2_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc/2.0/"),
        identifier="by-nc",
        title="Attribution-NonCommercial 2.0 Generic",
        version="2.0",
    )
    BY_NC_2_5 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc/2.5/"),
        identifier="by-nc",
        title="Attribution-NonCommercial 2.5 Generic",
        version="2.5",
    )
    BY_NC_3_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc/3.0/"),
        identifier="by-nc",
        title="Attribution-NonCommercial 3.0 Unported",
        version="3.0",
    )
    BY_NC_4_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc/4.0/"),
        identifier="by-nc",
        title="Attribution-NonCommercial 4.0 International",
        version="4.0",
    )
    BY_ND_NC_1_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nd-nc/1.0/"),
        identifier="by-nd-nc",
        title="Attribution-NoDerivs-NonCommercial 1.0 Generic",
        version="1.0",
    )
    BY_ND_1_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nd/1.0/"),
        identifier="by-nd",
        title="Attribution-NoDerivs 1.0 Generic",
        version="1.0",
    )
    BY_ND_2_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nd/2.0/"),
        identifier="by-nd",
        title="Attribution-NoDerivs 2.0 Generic",
        version="2.0",
    )
    BY_ND_2_5 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nd/2.5/"),
        identifier="by-nd",
        title="Attribution-NoDerivs 2.5 Generic",
        version="2.5",
    )
    BY_ND_3_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nd/3.0/"),
        identifier="by-nd",
        title="Attribution-NoDerivs 3.0 Unported",
        version="3.0",
    )
    BY_ND_4_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nd/4.0/"),
        identifier="by-nd",
        title="Attribution-NoDerivatives 4.0 International",
        version="4.0",
    )
    BY_SA_1_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-sa/1.0/"),
        identifier="by-sa",
        title="Attribution-ShareAlike 1.0 Generic",
        version="1.0",
    )
    BY_SA_2_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-sa/2.0/"),
        identifier="by-sa",
        title="Attribution-ShareAlike 2.0 Generic",
        version="2.0",
    )
    BY_SA_2_5 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-sa/2.5/"),
        identifier="by-sa",
        title="Attribution-ShareAlike 2.5 Generic",
        version="2.5",
    )
    BY_SA_3_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-sa/3.0/"),
        identifier="by-sa",
        title="Attribution-ShareAlike 3.0 Unported",
        version="3.0",
    )
    BY_SA_4_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-sa/4.0/"),
        identifier="by-sa",
        title="Attribution-ShareAlike 4.0 International",
        version="4.0",
    )
    BY_1_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by/1.0/"),
        identifier="by",
        title="Attribution 1.0 Generic",
        version="1.0",
    )
    BY_2_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by/2.0/"),
        identifier="by",
        title="Attribution 2.0 Generic",
        version="2.0",
    )
    BY_2_5 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by/2.5/"),
        identifier="by",
        title="Attribution 2.5 Generic",
        version="2.5",
    )
    BY_3_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by/3.0/"),
        identifier="by",
        title="Attribution 3.0 Unported",
        version="3.0",
    )
    BY_4_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by/4.0/"),
        identifier="by",
        title="Attribution 4.0 International",
        version="4.0",
    )
    DEVNATIONS_2_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/devnations/2.0/"),
        identifier="devnations",
        title="Developing Nations License",
        version="2.0",
    )
    NC_SA_1_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/nc-sa/1.0/"),
        identifier="nc-sa",
        title="NonCommercial-ShareAlike 1.0 Generic",
        version="1.0",
    )
    NC_SAMPLING_PLUS_1_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/nc-sampling+/1.0/"),
        identifier="nc-sampling+",
        title="NonCommercial Sampling Plus 1.0",
        version="1.0",
    )
    NC_1_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/nc/1.0/"),
        identifier="nc",
        title="NonCommercial 1.0 Generic",
        version="1.0",
    )
    ND_NC_1_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/nd-nc/1.0/"),
        identifier="nd-nc",
        title="NoDerivs-NonCommercial 1.0 Generic",
        version="1.0",
    )
    ND_1_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/nd/1.0/"),
        identifier="nd",
        title="NoDerivs 1.0 Generic",
        version="1.0",
    )
    PUBLICDOMAIN = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/publicdomain/"),
        identifier="publicdomain",
        title="Public Domain",
        version=None,
    )
    SA_1_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/sa/1.0/"),
        identifier="sa",
        title="ShareAlike 1.0 Generic",
        version="1.0",
    )
    SAMPLING_PLUS_1_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/sampling+/1.0/"),
        identifier="sampling+",
        title="Sampling Plus 1.0",
        version="1.0",
    )
    SAMPLING_1_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/sampling/1.0/"),
        identifier="sampling",
        title="Sampling 1.0",
        version="1.0",
    )
    MARK_1_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/publicdomain/mark/1.0/"),
        identifier="mark",
        title="Public Domain Mark 1.0",
        version="1.0",
    )
    CC0_1_0 = License.from_fields(
        uri=rdflib.term.URIRef("http://creativecommons.org/publicdomain/zero/1.0/"),
        identifier="CC0",
        title="CC0 1.0 Universal",
        version="1.0",
    )
