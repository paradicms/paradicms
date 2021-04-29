# -*- coding: utf-8 -*-

from typing import Tuple

import rdflib.term
from paradicms_etl.models.license import License
from paradicms_etl.models._model_singletons import _ModelSingletons


class CreativeCommonsLicenses(_ModelSingletons):
    _MODEL_CLASS = License

    BSD = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/BSD/"),
        identifier="BSD",
        title="BSD",
    )
    GPL = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/GPL/2.0/"),
        identifier="GPL",
        title="GNU General Public License",
    )
    LGPL = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/LGPL/2.1/"),
        identifier="LGPL",
        title="GNU Lesser General Public License",
    )
    MIT = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/MIT/"),
        identifier="MIT",
        title="MIT",
    )
    BY_NC_ND = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc-nd/2.0/"),
        identifier="by-nc-nd",
        title="Attribution-NonCommercial-NoDerivs 2.0 Generic",
    )
    BY_NC_ND = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc-nd/2.5/"),
        identifier="by-nc-nd",
        title="Attribution-NonCommercial-NoDerivs 2.5 Generic",
    )
    BY_NC_ND = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc-nd/3.0/"),
        identifier="by-nc-nd",
        title="Attribution-NonCommercial-NoDerivs 3.0 Unported",
    )
    BY_NC_ND = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc-nd/4.0/"),
        identifier="by-nc-nd",
        title="Attribution-NonCommercial-NoDerivatives 4.0 International",
    )
    BY_NC_SA = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc-sa/1.0/"),
        identifier="by-nc-sa",
        title="Attribution-NonCommercial-ShareAlike 1.0 Generic",
    )
    BY_NC_SA = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc-sa/2.0/"),
        identifier="by-nc-sa",
        title="Attribution-NonCommercial-ShareAlike 2.0 Generic",
    )
    BY_NC_SA = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc-sa/2.5/"),
        identifier="by-nc-sa",
        title="Attribution-NonCommercial-ShareAlike 2.5 Generic",
    )
    BY_NC_SA = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc-sa/3.0/"),
        identifier="by-nc-sa",
        title="Attribution-NonCommercial-ShareAlike 3.0 Unported",
    )
    BY_NC_SA = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc-sa/4.0/"),
        identifier="by-nc-sa",
        title="Attribution-NonCommercial-ShareAlike 4.0 International",
    )
    BY_NC = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc/1.0/"),
        identifier="by-nc",
        title="Attribution-NonCommercial 1.0 Generic",
    )
    BY_NC = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc/2.0/"),
        identifier="by-nc",
        title="Attribution-NonCommercial 2.0 Generic",
    )
    BY_NC = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc/2.5/"),
        identifier="by-nc",
        title="Attribution-NonCommercial 2.5 Generic",
    )
    BY_NC = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc/3.0/"),
        identifier="by-nc",
        title="Attribution-NonCommercial 3.0 Unported",
    )
    BY_NC = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nc/4.0/"),
        identifier="by-nc",
        title="Attribution-NonCommercial 4.0 International",
    )
    BY_ND_NC = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nd-nc/1.0/"),
        identifier="by-nd-nc",
        title="Attribution-NoDerivs-NonCommercial 1.0 Generic",
    )
    BY_ND = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nd/1.0/"),
        identifier="by-nd",
        title="Attribution-NoDerivs 1.0 Generic",
    )
    BY_ND = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nd/2.0/"),
        identifier="by-nd",
        title="Attribution-NoDerivs 2.0 Generic",
    )
    BY_ND = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nd/2.5/"),
        identifier="by-nd",
        title="Attribution-NoDerivs 2.5 Generic",
    )
    BY_ND = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nd/3.0/"),
        identifier="by-nd",
        title="Attribution-NoDerivs 3.0 Unported",
    )
    BY_ND = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-nd/4.0/"),
        identifier="by-nd",
        title="Attribution-NoDerivatives 4.0 International",
    )
    BY_SA = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-sa/1.0/"),
        identifier="by-sa",
        title="Attribution-ShareAlike 1.0 Generic",
    )
    BY_SA = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-sa/2.0/"),
        identifier="by-sa",
        title="Attribution-ShareAlike 2.0 Generic",
    )
    BY_SA = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-sa/2.5/"),
        identifier="by-sa",
        title="Attribution-ShareAlike 2.5 Generic",
    )
    BY_SA = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-sa/3.0/"),
        identifier="by-sa",
        title="Attribution-ShareAlike 3.0 Unported",
    )
    BY_SA = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by-sa/4.0/"),
        identifier="by-sa",
        title="Attribution-ShareAlike 4.0 International",
    )
    BY = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by/1.0/"),
        identifier="by",
        title="Attribution 1.0 Generic",
    )
    BY = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by/2.0/"),
        identifier="by",
        title="Attribution 2.0 Generic",
    )
    BY = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by/2.5/"),
        identifier="by",
        title="Attribution 2.5 Generic",
    )
    BY = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by/3.0/"),
        identifier="by",
        title="Attribution 3.0 Unported",
    )
    BY = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/by/4.0/"),
        identifier="by",
        title="Attribution 4.0 International",
    )
    DEVNATIONS = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/devnations/2.0/"),
        identifier="devnations",
        title="Developing Nations License",
    )
    NC_SA = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/nc-sa/1.0/"),
        identifier="nc-sa",
        title="NonCommercial-ShareAlike 1.0 Generic",
    )
    NC_SAMPLING_PLUS = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/nc-sampling+/1.0/"),
        identifier="nc-sampling+",
        title="NonCommercial Sampling Plus 1.0",
    )
    NC = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/nc/1.0/"),
        identifier="nc",
        title="NonCommercial 1.0 Generic",
    )
    ND_NC = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/nd-nc/1.0/"),
        identifier="nd-nc",
        title="NoDerivs-NonCommercial 1.0 Generic",
    )
    ND = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/nd/1.0/"),
        identifier="nd",
        title="NoDerivs 1.0 Generic",
    )
    PUBLICDOMAIN = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/publicdomain/"),
        identifier="publicdomain",
        title="Public Domain",
    )
    SA = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/sa/1.0/"),
        identifier="sa",
        title="ShareAlike 1.0 Generic",
    )
    SAMPLING_PLUS = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/sampling+/1.0/"),
        identifier="sampling+",
        title="Sampling Plus 1.0",
    )
    SAMPLING = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/licenses/sampling/1.0/"),
        identifier="sampling",
        title="Sampling 1.0",
    )
    MARK = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/publicdomain/mark/1.0/"),
        identifier="mark",
        title="Public Domain Mark 1.0",
    )
    CC0 = License(
        uri=rdflib.term.URIRef("http://creativecommons.org/publicdomain/zero/1.0/"),
        identifier="CC0",
        title="CC0 1.0 Universal",
    )
