# -*- coding: utf-8 -*-

from rdflib import Graph, URIRef
from paradicms_etl.models.creative_commons.creative_commons_license import (
    CreativeCommonsLicense,
)
from paradicms_etl.models.model_singletons import ModelSingletons


class CreativeCommonsLicenses(ModelSingletons):
    _MODEL_CLASS = CreativeCommonsLicense

    BSD = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .

<http://creativecommons.org/licenses/BSD/> a cc:License ;
    cc:legalcode <http://opensource.org/licenses/bsd-license.php> ;
    cc:licenseClass <http://creativecommons.org/license/software> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:requires cc:Notice ;
    dc:identifier "BSD" ;
    dc:title "BSD License",
        "BSD"@en .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/BSD/"))
    )
    GPL_2_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/GPL/2.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/GPL/2.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/software> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:requires cc:Notice,
        cc:ShareAlike,
        cc:SourceCode ;
    dc:creator <http://fsf.org> ;
    dc:identifier "GPL" ;
    dc:title "GNU General Public License"@en ;
    dcterms:hasVersion "2.0" ;
    foaf:logo <http://i.creativecommons.org/l/GPL/2.0/88x62.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/GPL/2.0/"))
    )
    LGPL_2_1 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/LGPL/2.1/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/LGPL/2.1/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/software> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:requires cc:Notice,
        cc:ShareAlike,
        cc:SourceCode ;
    dc:creator <http://fsf.org> ;
    dc:identifier "LGPL" ;
    dc:title "GNU Lesser General Public License"@en ;
    dcterms:hasVersion "2.1" ;
    foaf:logo <http://i.creativecommons.org/l/LGPL/2.1/88x62.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/LGPL/2.1/"))
    )
    MIT = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .

<http://creativecommons.org/licenses/MIT/> a cc:License ;
    cc:legalcode <http://opensource.org/licenses/mit-license.php> ;
    cc:licenseClass <http://creativecommons.org/license/software> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:requires cc:Notice ;
    dc:identifier "MIT" ;
    dc:title "MIT License",
        "MIT"@en .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/MIT/"))
    )
    BY_NC_ND_2_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-nc-nd/2.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-nc-nd/2.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:Distribution,
        cc:Reproduction ;
    cc:prohibits cc:CommercialUse ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc-nd" ;
    dc:title "Attribution-NonCommercial-NoDerivs 2.0 Generic"@en ;
    dcterms:hasVersion "2.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nc-nd/2.5/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nc-nd/2.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc-nd/2.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-nc-nd/2.0/"))
    )
    BY_NC_ND_2_5 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-nc-nd/2.5/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-nc-nd/2.5/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:Distribution,
        cc:Reproduction ;
    cc:prohibits cc:CommercialUse ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc-nd" ;
    dc:title "Attribution-NonCommercial-NoDerivs 2.5 Generic"@en ;
    dcterms:hasVersion "2.5" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nc-nd/3.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nc-nd/2.5/80x15.png>,
        <http://i.creativecommons.org/l/by-nc-nd/2.5/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-nc-nd/2.5/"))
    )
    BY_NC_ND_3_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-nc-nd/3.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-nc-nd/3.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:Distribution,
        cc:Reproduction ;
    cc:prohibits cc:CommercialUse ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc-nd" ;
    dc:title "Attribution-NonCommercial-NoDerivs 3.0 Unported"@en ;
    dcterms:hasVersion "3.0" ;
    foaf:logo <http://i.creativecommons.org/l/by-nc-nd/3.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc-nd/3.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-nc-nd/3.0/"))
    )
    BY_NC_ND_4_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-nc-nd/4.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-nc-nd/4.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:Distribution,
        cc:Reproduction ;
    cc:prohibits cc:CommercialUse ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc-nd" ;
    dc:title "Attribution-NonCommercial-NoDerivatives 4.0 International"@en ;
    dcterms:hasVersion "4.0" ;
    foaf:logo <http://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-nc-nd/4.0/"))
    )
    BY_NC_SA_1_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-nc-sa/1.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-nc-sa/1.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:prohibits cc:CommercialUse ;
    cc:requires cc:Attribution,
        cc:Notice,
        cc:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc-sa" ;
    dc:title "Attribution-NonCommercial-ShareAlike 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nc-sa/2.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nc-sa/1.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc-sa/1.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-nc-sa/1.0/"))
    )
    BY_NC_SA_2_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-nc-sa/2.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-nc-sa/2.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:prohibits cc:CommercialUse ;
    cc:requires cc:Attribution,
        cc:Notice,
        cc:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc-sa" ;
    dc:title "Attribution-NonCommercial-ShareAlike 2.0 Generic"@en ;
    dcterms:hasVersion "2.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nc-sa/2.5/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nc-sa/2.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc-sa/2.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-nc-sa/2.0/"))
    )
    BY_NC_SA_2_5 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-nc-sa/2.5/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-nc-sa/2.5/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:prohibits cc:CommercialUse ;
    cc:requires cc:Attribution,
        cc:Notice,
        cc:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc-sa" ;
    dc:title "Attribution-NonCommercial-ShareAlike 2.5 Generic"@en ;
    dcterms:hasVersion "2.5" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nc-sa/3.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nc-sa/2.5/80x15.png>,
        <http://i.creativecommons.org/l/by-nc-sa/2.5/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-nc-sa/2.5/"))
    )
    BY_NC_SA_3_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-nc-sa/3.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-nc-sa/3.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:prohibits cc:CommercialUse ;
    cc:requires cc:Attribution,
        cc:Notice,
        cc:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc-sa" ;
    dc:title "Attribution-NonCommercial-ShareAlike 3.0 Unported"@en ;
    dcterms:hasVersion "3.0" ;
    foaf:logo <http://i.creativecommons.org/l/by-nc-sa/3.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-nc-sa/3.0/"))
    )
    BY_NC_SA_4_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-nc-sa/4.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:prohibits cc:CommercialUse ;
    cc:requires cc:Attribution,
        cc:Notice,
        cc:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc-sa" ;
    dc:title "Attribution-NonCommercial-ShareAlike 4.0 International"@en ;
    dcterms:hasVersion "4.0" ;
    foaf:logo <http://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-nc-sa/4.0/"))
    )
    BY_NC_1_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-nc/1.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-nc/1.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:prohibits cc:CommercialUse ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc" ;
    dc:title "Attribution-NonCommercial 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nc/2.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nc/1.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc/1.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-nc/1.0/"))
    )
    BY_NC_2_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-nc/2.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-nc/2.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:prohibits cc:CommercialUse ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc" ;
    dc:title "Attribution-NonCommercial 2.0 Generic"@en ;
    dcterms:hasVersion "2.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nc/2.5/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nc/2.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc/2.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-nc/2.0/"))
    )
    BY_NC_2_5 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-nc/2.5/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-nc/2.5/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:prohibits cc:CommercialUse ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc" ;
    dc:title "Attribution-NonCommercial 2.5 Generic"@en ;
    dcterms:hasVersion "2.5" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nc/3.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nc/2.5/80x15.png>,
        <http://i.creativecommons.org/l/by-nc/2.5/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-nc/2.5/"))
    )
    BY_NC_3_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-nc/3.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-nc/3.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:prohibits cc:CommercialUse ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc" ;
    dc:title "Attribution-NonCommercial 3.0 Unported"@en ;
    dcterms:hasVersion "3.0" ;
    foaf:logo <http://i.creativecommons.org/l/by-nc/3.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc/3.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-nc/3.0/"))
    )
    BY_NC_4_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-nc/4.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-nc/4.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:prohibits cc:CommercialUse ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc" ;
    dc:title "Attribution-NonCommercial 4.0 International"@en ;
    dcterms:hasVersion "4.0" ;
    foaf:logo <http://i.creativecommons.org/l/by-nc/4.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc/4.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-nc/4.0/"))
    )
    BY_ND_NC_1_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-nd-nc/1.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-nd-nc/1.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:Distribution,
        cc:Reproduction ;
    cc:prohibits cc:CommercialUse ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nd-nc" ;
    dc:title "Attribution-NoDerivs-NonCommercial 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nc-nd/2.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nd-nc/1.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nd-nc/1.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-nd-nc/1.0/"))
    )
    BY_ND_1_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-nd/1.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-nd/1.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:Distribution,
        cc:Reproduction ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nd" ;
    dc:title "Attribution-NoDerivs 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nd/2.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nd/1.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nd/1.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-nd/1.0/"))
    )
    BY_ND_2_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-nd/2.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-nd/2.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:Distribution,
        cc:Reproduction ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nd" ;
    dc:title "Attribution-NoDerivs 2.0 Generic"@en ;
    dcterms:hasVersion "2.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nd/2.5/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nd/2.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nd/2.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-nd/2.0/"))
    )
    BY_ND_2_5 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-nd/2.5/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-nd/2.5/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:Distribution,
        cc:Reproduction ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nd" ;
    dc:title "Attribution-NoDerivs 2.5 Generic"@en ;
    dcterms:hasVersion "2.5" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nd/3.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nd/2.5/80x15.png>,
        <http://i.creativecommons.org/l/by-nd/2.5/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-nd/2.5/"))
    )
    BY_ND_3_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-nd/3.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-nd/3.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:Distribution,
        cc:Reproduction ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nd" ;
    dc:title "Attribution-NoDerivs 3.0 Unported"@en ;
    dcterms:hasVersion "3.0" ;
    foaf:logo <http://i.creativecommons.org/l/by-nd/3.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nd/3.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-nd/3.0/"))
    )
    BY_ND_4_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-nd/4.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-nd/4.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:Distribution,
        cc:Reproduction ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nd" ;
    dc:title "Attribution-NoDerivatives 4.0 International"@en ;
    dcterms:hasVersion "4.0" ;
    foaf:logo <http://i.creativecommons.org/l/by-nd/4.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nd/4.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-nd/4.0/"))
    )
    BY_SA_1_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-sa/1.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-sa/1.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:requires cc:Attribution,
        cc:Notice,
        cc:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-sa" ;
    dc:title "Attribution-ShareAlike 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-sa/2.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by-sa/1.0/80x15.png>,
        <http://i.creativecommons.org/l/by-sa/1.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-sa/1.0/"))
    )
    BY_SA_2_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-sa/2.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-sa/2.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:requires cc:Attribution,
        cc:Notice,
        cc:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-sa" ;
    dc:title "Attribution-ShareAlike 2.0 Generic"@en ;
    dcterms:hasVersion "2.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-sa/2.5/> ;
    foaf:logo <http://i.creativecommons.org/l/by-sa/2.0/80x15.png>,
        <http://i.creativecommons.org/l/by-sa/2.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-sa/2.0/"))
    )
    BY_SA_2_5 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-sa/2.5/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-sa/2.5/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:requires cc:Attribution,
        cc:Notice,
        cc:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-sa" ;
    dc:title "Attribution-ShareAlike 2.5 Generic"@en ;
    dcterms:hasVersion "2.5" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-sa/3.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by-sa/2.5/80x15.png>,
        <http://i.creativecommons.org/l/by-sa/2.5/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-sa/2.5/"))
    )
    BY_SA_3_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-sa/3.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-sa/3.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:requires cc:Attribution,
        cc:Notice,
        cc:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-sa" ;
    dc:title "Attribution-ShareAlike 3.0 Unported"@en ;
    dcterms:hasVersion "3.0" ;
    foaf:logo <http://i.creativecommons.org/l/by-sa/3.0/80x15.png>,
        <http://i.creativecommons.org/l/by-sa/3.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-sa/3.0/"))
    )
    BY_SA_4_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by-sa/4.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by-sa/4.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:requires cc:Attribution,
        cc:Notice,
        cc:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-sa" ;
    dc:title "Attribution-ShareAlike 4.0 International"@en ;
    dcterms:hasVersion "4.0" ;
    foaf:logo <http://i.creativecommons.org/l/by-sa/4.0/80x15.png>,
        <http://i.creativecommons.org/l/by-sa/4.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by-sa/4.0/"))
    )
    BY_1_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by/1.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by/1.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by" ;
    dc:title "Attribution 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by/2.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by/1.0/80x15.png>,
        <http://i.creativecommons.org/l/by/1.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by/1.0/"))
    )
    BY_2_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by/2.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by/2.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by" ;
    dc:title "Attribution 2.0 Generic"@en ;
    dcterms:hasVersion "2.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by/2.5/> ;
    foaf:logo <http://i.creativecommons.org/l/by/2.0/80x15.png>,
        <http://i.creativecommons.org/l/by/2.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by/2.0/"))
    )
    BY_2_5 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by/2.5/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by/2.5/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by" ;
    dc:title "Attribution 2.5 Generic"@en ;
    dcterms:hasVersion "2.5" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by/3.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by/2.5/80x15.png>,
        <http://i.creativecommons.org/l/by/2.5/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by/2.5/"))
    )
    BY_3_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by/3.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by/3.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by" ;
    dc:title "Attribution 3.0 Unported"@en ;
    dcterms:hasVersion "3.0" ;
    foaf:logo <http://i.creativecommons.org/l/by/3.0/80x15.png>,
        <http://i.creativecommons.org/l/by/3.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by/3.0/"))
    )
    BY_4_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/by/4.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/licenses/by/4.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by" ;
    dc:title "Attribution 4.0 International"@en ;
    dcterms:hasVersion "4.0" ;
    foaf:logo <http://i.creativecommons.org/l/by/4.0/80x15.png>,
        <http://i.creativecommons.org/l/by/4.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/by/4.0/"))
    )
    DEVNATIONS_2_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/devnations/2.0/> a cc:License ;
    cc:deprecatedOn "2007-06-04"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> ;
    cc:legalcode <http://creativecommons.org/licenses/devnations/2.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:prohibits cc:HighIncomeNationUse ;
    cc:requires cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "devnations" ;
    dc:title "Developing Nations License"@en ;
    dcterms:hasVersion "2.0" ;
    foaf:logo <http://i.creativecommons.org/l/devnations/2.0/80x15.png>,
        <http://i.creativecommons.org/l/devnations/2.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/devnations/2.0/"))
    )
    NC_SA_1_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/nc-sa/1.0/> a cc:License ;
    cc:deprecatedOn "2004-05-25"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> ;
    cc:legalcode <http://creativecommons.org/licenses/nc-sa/1.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:prohibits cc:CommercialUse ;
    cc:requires cc:Notice,
        cc:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "nc-sa" ;
    dc:title "NonCommercial-ShareAlike 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    foaf:logo <http://i.creativecommons.org/l/nc-sa/1.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/nc-sa/1.0/"))
    )
    NC_SAMPLING_PLUS_1_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/nc-sampling+/1.0/> a cc:License ;
    cc:deprecatedOn "2011-09-09"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> ;
    cc:legalcode <http://creativecommons.org/licenses/nc-sampling+/1.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/sampling/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:prohibits cc:CommercialUse ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "nc-sampling+" ;
    dc:title "NonCommercial Sampling Plus 1.0"@en ;
    dcterms:hasVersion "1.0" ;
    foaf:logo <http://i.creativecommons.org/l/nc-sampling+/1.0/80x15.png>,
        <http://i.creativecommons.org/l/nc-sampling+/1.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/nc-sampling+/1.0/"))
    )
    NC_1_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/nc/1.0/> a cc:License ;
    cc:deprecatedOn "2004-05-25"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> ;
    cc:legalcode <http://creativecommons.org/licenses/nc/1.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:prohibits cc:CommercialUse ;
    cc:requires cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "nc" ;
    dc:title "NonCommercial 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    foaf:logo <http://i.creativecommons.org/l/nc/1.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/nc/1.0/"))
    )
    ND_NC_1_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/nd-nc/1.0/> a cc:License ;
    cc:deprecatedOn "2004-05-25"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> ;
    cc:legalcode <http://creativecommons.org/licenses/nd-nc/1.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:Distribution,
        cc:Reproduction ;
    cc:prohibits cc:CommercialUse ;
    cc:requires cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "nd-nc" ;
    dc:title "NoDerivs-NonCommercial 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    foaf:logo <http://i.creativecommons.org/l/nd-nc/1.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/nd-nc/1.0/"))
    )
    ND_1_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/nd/1.0/> a cc:License ;
    cc:deprecatedOn "2004-05-25"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> ;
    cc:legalcode <http://creativecommons.org/licenses/nd/1.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:Distribution,
        cc:Reproduction ;
    cc:requires cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "nd" ;
    dc:title "NoDerivs 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    foaf:logo <http://i.creativecommons.org/l/nd/1.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/nd/1.0/"))
    )
    PUBLICDOMAIN = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/publicdomain/> a cc:License ;
    cc:deprecatedOn "2010-10-05"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> ;
    cc:legalcode <http://creativecommons.org/licenses/publicdomain/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/publicdomain/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    dc:identifier "publicdomain" ;
    dc:title "Public Domain"@en ;
    foaf:logo <http://i.creativecommons.org/l/publicdomain/80x15.png>,
        <http://i.creativecommons.org/l/publicdomain/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/publicdomain/"))
    )
    SA_1_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/sa/1.0/> a cc:License ;
    cc:deprecatedOn "2004-05-25"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> ;
    cc:legalcode <http://creativecommons.org/licenses/sa/1.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    cc:requires cc:Notice,
        cc:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "sa" ;
    dc:title "ShareAlike 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    foaf:logo <http://i.creativecommons.org/l/sa/1.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/sa/1.0/"))
    )
    SAMPLING_PLUS_1_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/sampling+/1.0/> a cc:License ;
    cc:deprecatedOn "2011-09-09"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> ;
    cc:legalcode <http://creativecommons.org/licenses/sampling+/1.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/sampling/> ;
    cc:permits cc:DerivativeWorks,
        cc:Reproduction,
        cc:Sharing ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "sampling+" ;
    dc:title "Sampling Plus 1.0"@en ;
    dcterms:hasVersion "1.0" ;
    foaf:logo <http://i.creativecommons.org/l/sampling+/1.0/80x15.png>,
        <http://i.creativecommons.org/l/sampling+/1.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/sampling+/1.0/"))
    )
    SAMPLING_1_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/licenses/sampling/1.0/> a cc:License ;
    cc:deprecatedOn "2007-06-04"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> ;
    cc:legalcode <http://creativecommons.org/licenses/sampling/1.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/license/sampling/> ;
    cc:permits cc:DerivativeWorks,
        cc:Reproduction ;
    cc:requires cc:Attribution,
        cc:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "sampling" ;
    dc:title "Sampling 1.0"@en ;
    dcterms:hasVersion "1.0" ;
    foaf:logo <http://i.creativecommons.org/l/sampling/1.0/80x15.png>,
        <http://i.creativecommons.org/l/sampling/1.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/licenses/sampling/1.0/"))
    )
    MARK_1_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/publicdomain/mark/1.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/publicdomain/zero/1.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/choose/mark/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    dc:identifier "mark" ;
    dc:title "Public Domain Mark 1.0"@en ;
    dcterms:hasVersion "1.0" ;
    foaf:logo <http://i.creativecommons.org/p/mark/1.0/80x15.png>,
        <http://i.creativecommons.org/p/mark/1.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/publicdomain/mark/1.0/"))
    )
    CC0_1_0 = _MODEL_CLASS.from_rdf(
        Graph()
        .parse(
            data=r"""@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://creativecommons.org/publicdomain/zero/1.0/> a cc:License ;
    cc:legalcode <http://creativecommons.org/publicdomain/zero/1.0/legalcode> ;
    cc:licenseClass <http://creativecommons.org/choose/zero/> ;
    cc:permits cc:DerivativeWorks,
        cc:Distribution,
        cc:Reproduction ;
    dc:identifier "CC0" ;
    dc:title "CC0 1.0 Universal"@en ;
    dcterms:hasVersion "1.0" ;
    foaf:logo <http://i.creativecommons.org/p/zero/1.0/80x15.png>,
        <http://i.creativecommons.org/p/zero/1.0/88x31.png> .

""",
            format="ttl",
        )
        .resource(URIRef("http://creativecommons.org/publicdomain/zero/1.0/"))
    )
