from rdflib import URIRef

from paradicms_etl.models._model_singletons import _ModelSingletons
from paradicms_etl.models.rights_statement import RightsStatement


class CreativeCommonsRightsStatements(_ModelSingletons):
    _MODEL_CLASS = RightsStatement

    CC0 = RightsStatement(
        definition="""\
The person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law.

You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.        
""",
        identifier="CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
        pref_label="CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
        uri=URIRef("https://creativecommons.org/publicdomain/zero/1.0/"),
    )

    PUBLIC_DOMAIN_MARK = RightsStatement(
        definition="""\
This work has been identified as being free of known restrictions under copyright law, including all related and neighboring rights.

You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.
""",
        identifier="Public Domain Mark 1.0",
        pref_label="Public Domain Mark 1.0",
        uri=URIRef("https://creativecommons.org/publicdomain/mark/1.0/"),
    )
