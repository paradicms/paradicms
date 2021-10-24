// Trying to Dataset.parse in the const declaration causes circular dependency issues
export const testDataTtl = ` 
@prefix contact: <http://www.w3.org/2000/10/swap/pim/contact#> .
@prefix creativecommons: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix exif: <http://www.w3.org/2003/12/exif/ns#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix paradicms: <http://www.paradicms.org/ns#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix vra: <http://purl.org/vra/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<http://creativecommons.org/licenses/BSD/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://opensource.org/licenses/bsd-license.php> ;
    creativecommons:licenseClass <http://creativecommons.org/license/software> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Notice ;
    dc:identifier "BSD" ;
    dc:title "BSD License",
        "BSD"@en .

<http://creativecommons.org/licenses/GPL/2.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/GPL/2.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/software> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Notice,
        creativecommons:ShareAlike,
        creativecommons:SourceCode ;
    dc:creator <http://fsf.org> ;
    dc:identifier "GPL" ;
    dc:title "GNU General Public License"@en ;
    dcterms:hasVersion "2.0" ;
    foaf:logo <http://i.creativecommons.org/l/GPL/2.0/88x62.png> .

<http://creativecommons.org/licenses/LGPL/2.1/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/LGPL/2.1/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/software> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Notice,
        creativecommons:ShareAlike,
        creativecommons:SourceCode ;
    dc:creator <http://fsf.org> ;
    dc:identifier "LGPL" ;
    dc:title "GNU Lesser General Public License"@en ;
    dcterms:hasVersion "2.1" ;
    foaf:logo <http://i.creativecommons.org/l/LGPL/2.1/88x62.png> .

<http://creativecommons.org/licenses/MIT/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://opensource.org/licenses/mit-license.php> ;
    creativecommons:licenseClass <http://creativecommons.org/license/software> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Notice ;
    dc:identifier "MIT" ;
    dc:title "MIT License",
        "MIT"@en .

<http://creativecommons.org/licenses/by-nc-nd/4.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-nc-nd/4.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:prohibits creativecommons:CommercialUse ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc-nd" ;
    dc:title "Attribution-NonCommercial-NoDerivatives 4.0 International"@en ;
    dcterms:hasVersion "4.0" ;
    foaf:logo <http://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png> .

<http://creativecommons.org/licenses/by-nc-sa/1.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-nc-sa/1.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:prohibits creativecommons:CommercialUse ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice,
        creativecommons:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc-sa" ;
    dc:title "Attribution-NonCommercial-ShareAlike 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nc-sa/2.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nc-sa/1.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc-sa/1.0/88x31.png> .

<http://creativecommons.org/licenses/by-nc-sa/4.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:prohibits creativecommons:CommercialUse ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice,
        creativecommons:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc-sa" ;
    dc:title "Attribution-NonCommercial-ShareAlike 4.0 International"@en ;
    dcterms:hasVersion "4.0" ;
    foaf:logo <http://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png> .

<http://creativecommons.org/licenses/by-nc/1.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-nc/1.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:prohibits creativecommons:CommercialUse ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc" ;
    dc:title "Attribution-NonCommercial 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nc/2.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nc/1.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc/1.0/88x31.png> .

<http://creativecommons.org/licenses/by-nc/4.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-nc/4.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:prohibits creativecommons:CommercialUse ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc" ;
    dc:title "Attribution-NonCommercial 4.0 International"@en ;
    dcterms:hasVersion "4.0" ;
    foaf:logo <http://i.creativecommons.org/l/by-nc/4.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc/4.0/88x31.png> .

<http://creativecommons.org/licenses/by-nd-nc/1.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-nd-nc/1.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:prohibits creativecommons:CommercialUse ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nd-nc" ;
    dc:title "Attribution-NoDerivs-NonCommercial 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nc-nd/2.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nd-nc/1.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nd-nc/1.0/88x31.png> .

<http://creativecommons.org/licenses/by-nd/1.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-nd/1.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nd" ;
    dc:title "Attribution-NoDerivs 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nd/2.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nd/1.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nd/1.0/88x31.png> .

<http://creativecommons.org/licenses/by-nd/4.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-nd/4.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nd" ;
    dc:title "Attribution-NoDerivatives 4.0 International"@en ;
    dcterms:hasVersion "4.0" ;
    foaf:logo <http://i.creativecommons.org/l/by-nd/4.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nd/4.0/88x31.png> .

<http://creativecommons.org/licenses/by-sa/1.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-sa/1.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice,
        creativecommons:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-sa" ;
    dc:title "Attribution-ShareAlike 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-sa/2.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by-sa/1.0/80x15.png>,
        <http://i.creativecommons.org/l/by-sa/1.0/88x31.png> .

<http://creativecommons.org/licenses/by-sa/4.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-sa/4.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice,
        creativecommons:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-sa" ;
    dc:title "Attribution-ShareAlike 4.0 International"@en ;
    dcterms:hasVersion "4.0" ;
    foaf:logo <http://i.creativecommons.org/l/by-sa/4.0/80x15.png>,
        <http://i.creativecommons.org/l/by-sa/4.0/88x31.png> .

<http://creativecommons.org/licenses/by/1.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by/1.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by" ;
    dc:title "Attribution 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by/2.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by/1.0/80x15.png>,
        <http://i.creativecommons.org/l/by/1.0/88x31.png> .

<http://creativecommons.org/licenses/by/4.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by/4.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by" ;
    dc:title "Attribution 4.0 International"@en ;
    dcterms:hasVersion "4.0" ;
    foaf:logo <http://i.creativecommons.org/l/by/4.0/80x15.png>,
        <http://i.creativecommons.org/l/by/4.0/88x31.png> .

<http://creativecommons.org/licenses/devnations/2.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:deprecatedOn "2007-06-04"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> ;
    creativecommons:legalcode <http://creativecommons.org/licenses/devnations/2.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:prohibits creativecommons:HighIncomeNationUse ;
    creativecommons:requires creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "devnations" ;
    dc:title "Developing Nations License"@en ;
    dcterms:hasVersion "2.0" ;
    foaf:logo <http://i.creativecommons.org/l/devnations/2.0/80x15.png>,
        <http://i.creativecommons.org/l/devnations/2.0/88x31.png> .

<http://creativecommons.org/licenses/nc-sa/1.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:deprecatedOn "2004-05-25"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> ;
    creativecommons:legalcode <http://creativecommons.org/licenses/nc-sa/1.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:prohibits creativecommons:CommercialUse ;
    creativecommons:requires creativecommons:Notice,
        creativecommons:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "nc-sa" ;
    dc:title "NonCommercial-ShareAlike 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    foaf:logo <http://i.creativecommons.org/l/nc-sa/1.0/88x31.png> .

<http://creativecommons.org/licenses/nc-sampling+/1.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:deprecatedOn "2011-09-09"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> ;
    creativecommons:legalcode <http://creativecommons.org/licenses/nc-sampling+/1.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/sampling/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:prohibits creativecommons:CommercialUse ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "nc-sampling+" ;
    dc:title "NonCommercial Sampling Plus 1.0"@en ;
    dcterms:hasVersion "1.0" ;
    foaf:logo <http://i.creativecommons.org/l/nc-sampling+/1.0/80x15.png>,
        <http://i.creativecommons.org/l/nc-sampling+/1.0/88x31.png> .

<http://creativecommons.org/licenses/nd-nc/1.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:deprecatedOn "2004-05-25"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> ;
    creativecommons:legalcode <http://creativecommons.org/licenses/nd-nc/1.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:prohibits creativecommons:CommercialUse ;
    creativecommons:requires creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "nd-nc" ;
    dc:title "NoDerivs-NonCommercial 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    foaf:logo <http://i.creativecommons.org/l/nd-nc/1.0/88x31.png> .

<http://creativecommons.org/licenses/nd/1.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:deprecatedOn "2004-05-25"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> ;
    creativecommons:legalcode <http://creativecommons.org/licenses/nd/1.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "nd" ;
    dc:title "NoDerivs 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    foaf:logo <http://i.creativecommons.org/l/nd/1.0/88x31.png> .

<http://creativecommons.org/licenses/publicdomain/> a creativecommons:License,
        paradicms:License ;
    creativecommons:deprecatedOn "2010-10-05"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> ;
    creativecommons:legalcode <http://creativecommons.org/licenses/publicdomain/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/publicdomain/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    dc:identifier "publicdomain" ;
    dc:title "Public Domain"@en ;
    foaf:logo <http://i.creativecommons.org/l/publicdomain/80x15.png>,
        <http://i.creativecommons.org/l/publicdomain/88x31.png> .

<http://creativecommons.org/licenses/sa/1.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:deprecatedOn "2004-05-25"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> ;
    creativecommons:legalcode <http://creativecommons.org/licenses/sa/1.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Notice,
        creativecommons:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "sa" ;
    dc:title "ShareAlike 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    foaf:logo <http://i.creativecommons.org/l/sa/1.0/88x31.png> .

<http://creativecommons.org/licenses/sampling+/1.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:deprecatedOn "2011-09-09"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> ;
    creativecommons:legalcode <http://creativecommons.org/licenses/sampling+/1.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/sampling/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Reproduction,
        creativecommons:Sharing ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "sampling+" ;
    dc:title "Sampling Plus 1.0"@en ;
    dcterms:hasVersion "1.0" ;
    foaf:logo <http://i.creativecommons.org/l/sampling+/1.0/80x15.png>,
        <http://i.creativecommons.org/l/sampling+/1.0/88x31.png> .

<http://creativecommons.org/licenses/sampling/1.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:deprecatedOn "2007-06-04"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> ;
    creativecommons:legalcode <http://creativecommons.org/licenses/sampling/1.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/sampling/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "sampling" ;
    dc:title "Sampling 1.0"@en ;
    dcterms:hasVersion "1.0" ;
    foaf:logo <http://i.creativecommons.org/l/sampling/1.0/80x15.png>,
        <http://i.creativecommons.org/l/sampling/1.0/88x31.png> .

<http://creativecommons.org/publicdomain/mark/1.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/publicdomain/zero/1.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/choose/mark/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    dc:identifier "mark" ;
    dc:title "Public Domain Mark 1.0"@en ;
    dcterms:hasVersion "1.0" ;
    foaf:logo <http://i.creativecommons.org/p/mark/1.0/80x15.png>,
        <http://i.creativecommons.org/p/mark/1.0/88x31.png> .

<http://creativecommons.org/publicdomain/zero/1.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/publicdomain/zero/1.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/choose/zero/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    dc:identifier "CC0" ;
    dc:title "CC0 1.0 Universal"@en ;
    dcterms:hasVersion "1.0" ;
    foaf:logo <http://i.creativecommons.org/p/zero/1.0/80x15.png>,
        <http://i.creativecommons.org/p/zero/1.0/88x31.png> .

<http://example.com/person4> a paradicms:Person ;
    contact:sortName "4, Person" ;
    foaf:familyName "4" ;
    foaf:givenName "Person" ;
    foaf:name "Person 4" .

<http://example.com/person5> a paradicms:Person ;
    contact:sortName "5, Person" ;
    foaf:familyName "5" ;
    foaf:givenName "Person" ;
    foaf:name "Person 5" .

<http://example.com/person6> a paradicms:Person ;
    contact:sortName "6, Person" ;
    foaf:familyName "6" ;
    foaf:givenName "Person" ;
    foaf:name "Person 6" .

<http://example.com/person7> a paradicms:Person ;
    contact:sortName "7, Person" ;
    foaf:familyName "7" ;
    foaf:givenName "Person" ;
    foaf:name "Person 7" .

<http://example.com/person8> a paradicms:Person ;
    contact:sortName "8, Person" ;
    foaf:familyName "8" ;
    foaf:givenName "Person" ;
    foaf:name "Person 8" .

<http://example.com/person9> a paradicms:Person ;
    contact:sortName "9, Person" ;
    foaf:familyName "9" ;
    foaf:givenName "Person" ;
    foaf:name "Person 9" .

dcterms:abstract a paradicms:PropertyDefinition ;
    rdfs:label "Abstract" .

dcterms:alternative a paradicms:PropertyDefinition ;
    rdfs:label "Alternative title" .

dcterms:bibliographicCitation a paradicms:PropertyDefinition ;
    rdfs:label "Bibliographic citation" .

dcterms:contributor a paradicms:PropertyDefinition ;
    rdfs:label "Contributor" .

dcterms:coverage a paradicms:PropertyDefinition ;
    rdfs:label "Coverage" .

dcterms:creator a paradicms:PropertyDefinition ;
    rdfs:label "Creator" .

dcterms:date a paradicms:PropertyDefinition ;
    rdfs:label "Date" .

dcterms:dateCreated a paradicms:PropertyDefinition ;
    rdfs:label "Date created" .

dcterms:dateSubmitted a paradicms:PropertyDefinition ;
    rdfs:label "Date submitted" .

dcterms:description a paradicms:PropertyDefinition ;
    rdfs:label "Description" .

dcterms:format a paradicms:PropertyDefinition ;
    rdfs:label "Format" .

dcterms:identifier a paradicms:PropertyDefinition ;
    rdfs:label "Identifier" .

dcterms:isReferencedBy a paradicms:PropertyDefinition ;
    rdfs:label "Referenced by" .

dcterms:license a paradicms:PropertyDefinition ;
    rdfs:label "License" .

dcterms:provenance a paradicms:PropertyDefinition ;
    rdfs:label "Provenance" .

dcterms:references a paradicms:PropertyDefinition ;
    rdfs:label "References" .

dcterms:relation a paradicms:PropertyDefinition ;
    rdfs:label "Relation" .

dcterms:rights a paradicms:PropertyDefinition ;
    rdfs:label "Rights" .

dcterms:rightsHolder a paradicms:PropertyDefinition ;
    rdfs:label "Rights holder" .

dcterms:title a paradicms:PropertyDefinition ;
    rdfs:label "Title" .

vra:earliestDate a paradicms:PropertyDefinition ;
    rdfs:label "Earliest date" .

vra:inscription a paradicms:PropertyDefinition ;
    rdfs:label "Inscription" .

vra:latestDate a paradicms:PropertyDefinition ;
    rdfs:label "Latest date" .

vra:measurements a paradicms:PropertyDefinition ;
    rdfs:label "Measurements" .

vra:stylePeriod a paradicms:PropertyDefinition ;
    rdfs:label "Style Period" .

vra:worktype a paradicms:PropertyDefinition ;
    rdfs:label "Work type" .

<https://place-hold.it/1000x1000?text=Cultural%20context%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:0> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%200Image0>,
        <https://place-hold.it/75x75?text=Cultural%20context%200Image0> .

<https://place-hold.it/1000x1000?text=Cultural%20context%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:0> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%200Image1>,
        <https://place-hold.it/75x75?text=Cultural%20context%200Image1> .

<https://place-hold.it/1000x1000?text=Cultural%20context%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:1> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%201Image0>,
        <https://place-hold.it/75x75?text=Cultural%20context%201Image0> .

<https://place-hold.it/1000x1000?text=Cultural%20context%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:1> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%201Image1>,
        <https://place-hold.it/75x75?text=Cultural%20context%201Image1> .

<https://place-hold.it/1000x1000?text=Cultural%20context%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:2> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%202Image0>,
        <https://place-hold.it/75x75?text=Cultural%20context%202Image0> .

<https://place-hold.it/1000x1000?text=Cultural%20context%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:2> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%202Image1>,
        <https://place-hold.it/75x75?text=Cultural%20context%202Image1> .

<https://place-hold.it/1000x1000?text=Cultural%20context%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:3> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%203Image0>,
        <https://place-hold.it/75x75?text=Cultural%20context%203Image0> .

<https://place-hold.it/1000x1000?text=Cultural%20context%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:3> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%203Image1>,
        <https://place-hold.it/75x75?text=Cultural%20context%203Image1> .

<https://place-hold.it/1000x1000?text=Cultural%20context%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:4> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%204Image0>,
        <https://place-hold.it/75x75?text=Cultural%20context%204Image0> .

<https://place-hold.it/1000x1000?text=Cultural%20context%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:4> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%204Image1>,
        <https://place-hold.it/75x75?text=Cultural%20context%204Image1> .

<https://place-hold.it/1000x1000?text=Cultural%20context%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:5> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%205Image0>,
        <https://place-hold.it/75x75?text=Cultural%20context%205Image0> .

<https://place-hold.it/1000x1000?text=Cultural%20context%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:5> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%205Image1>,
        <https://place-hold.it/75x75?text=Cultural%20context%205Image1> .

<https://place-hold.it/1000x1000?text=Cultural%20context%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:6> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%206Image0>,
        <https://place-hold.it/75x75?text=Cultural%20context%206Image0> .

<https://place-hold.it/1000x1000?text=Cultural%20context%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:6> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%206Image1>,
        <https://place-hold.it/75x75?text=Cultural%20context%206Image1> .

<https://place-hold.it/1000x1000?text=Cultural%20context%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:7> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%207Image0>,
        <https://place-hold.it/75x75?text=Cultural%20context%207Image0> .

<https://place-hold.it/1000x1000?text=Cultural%20context%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:7> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%207Image1>,
        <https://place-hold.it/75x75?text=Cultural%20context%207Image1> .

<https://place-hold.it/1000x1000?text=Cultural%20context%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:8> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%208Image0>,
        <https://place-hold.it/75x75?text=Cultural%20context%208Image0> .

<https://place-hold.it/1000x1000?text=Cultural%20context%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:8> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%208Image1>,
        <https://place-hold.it/75x75?text=Cultural%20context%208Image1> .

<https://place-hold.it/1000x1000?text=Cultural%20context%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:9> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%209Image0>,
        <https://place-hold.it/75x75?text=Cultural%20context%209Image0> .

<https://place-hold.it/1000x1000?text=Cultural%20context%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:9> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%209Image1>,
        <https://place-hold.it/75x75?text=Cultural%20context%209Image1> .

<https://place-hold.it/1000x1000?text=Extent%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:10> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Extent%200Image0>,
        <https://place-hold.it/75x75?text=Extent%200Image0> .

<https://place-hold.it/1000x1000?text=Extent%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:10> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Extent%200Image1>,
        <https://place-hold.it/75x75?text=Extent%200Image1> .

<https://place-hold.it/1000x1000?text=Extent%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:11> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Extent%201Image0>,
        <https://place-hold.it/75x75?text=Extent%201Image0> .

<https://place-hold.it/1000x1000?text=Extent%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:11> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Extent%201Image1>,
        <https://place-hold.it/75x75?text=Extent%201Image1> .

<https://place-hold.it/1000x1000?text=Extent%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:12> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Extent%202Image0>,
        <https://place-hold.it/75x75?text=Extent%202Image0> .

<https://place-hold.it/1000x1000?text=Extent%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:12> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Extent%202Image1>,
        <https://place-hold.it/75x75?text=Extent%202Image1> .

<https://place-hold.it/1000x1000?text=Extent%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:13> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Extent%203Image0>,
        <https://place-hold.it/75x75?text=Extent%203Image0> .

<https://place-hold.it/1000x1000?text=Extent%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:13> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Extent%203Image1>,
        <https://place-hold.it/75x75?text=Extent%203Image1> .

<https://place-hold.it/1000x1000?text=Extent%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:14> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Extent%204Image0>,
        <https://place-hold.it/75x75?text=Extent%204Image0> .

<https://place-hold.it/1000x1000?text=Extent%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:14> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Extent%204Image1>,
        <https://place-hold.it/75x75?text=Extent%204Image1> .

<https://place-hold.it/1000x1000?text=Extent%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:15> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Extent%205Image0>,
        <https://place-hold.it/75x75?text=Extent%205Image0> .

<https://place-hold.it/1000x1000?text=Extent%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:15> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Extent%205Image1>,
        <https://place-hold.it/75x75?text=Extent%205Image1> .

<https://place-hold.it/1000x1000?text=Extent%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:16> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Extent%206Image0>,
        <https://place-hold.it/75x75?text=Extent%206Image0> .

<https://place-hold.it/1000x1000?text=Extent%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:16> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Extent%206Image1>,
        <https://place-hold.it/75x75?text=Extent%206Image1> .

<https://place-hold.it/1000x1000?text=Extent%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:17> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Extent%207Image0>,
        <https://place-hold.it/75x75?text=Extent%207Image0> .

<https://place-hold.it/1000x1000?text=Extent%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:17> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Extent%207Image1>,
        <https://place-hold.it/75x75?text=Extent%207Image1> .

<https://place-hold.it/1000x1000?text=Extent%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:18> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Extent%208Image0>,
        <https://place-hold.it/75x75?text=Extent%208Image0> .

<https://place-hold.it/1000x1000?text=Extent%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:18> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Extent%208Image1>,
        <https://place-hold.it/75x75?text=Extent%208Image1> .

<https://place-hold.it/1000x1000?text=Extent%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:19> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Extent%209Image0>,
        <https://place-hold.it/75x75?text=Extent%209Image0> .

<https://place-hold.it/1000x1000?text=Extent%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:19> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Extent%209Image1>,
        <https://place-hold.it/75x75?text=Extent%209Image1> .

<https://place-hold.it/1000x1000?text=Institution0Collection0Work0Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution0/collection0/work0> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution0Collection0Work0Image0>,
        <https://place-hold.it/75x75?text=Institution0Collection0Work0Image0> .

<https://place-hold.it/1000x1000?text=Institution0Collection0Work0Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution0/collection0/work0> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution0Collection0Work0Image1>,
        <https://place-hold.it/75x75?text=Institution0Collection0Work0Image1> .

<https://place-hold.it/1000x1000?text=Institution0Collection0Work1Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution0/collection0/work1> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution0Collection0Work1Image0>,
        <https://place-hold.it/75x75?text=Institution0Collection0Work1Image0> .

<https://place-hold.it/1000x1000?text=Institution0Collection0Work1Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution0/collection0/work1> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution0Collection0Work1Image1>,
        <https://place-hold.it/75x75?text=Institution0Collection0Work1Image1> .

<https://place-hold.it/1000x1000?text=Institution0Collection0Work2Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution0/collection0/work2> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution0Collection0Work2Image0>,
        <https://place-hold.it/75x75?text=Institution0Collection0Work2Image0> .

<https://place-hold.it/1000x1000?text=Institution0Collection0Work2Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution0/collection0/work2> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution0Collection0Work2Image1>,
        <https://place-hold.it/75x75?text=Institution0Collection0Work2Image1> .

<https://place-hold.it/1000x1000?text=Institution0Collection0Work3Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution0/collection0/work3> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution0Collection0Work3Image0>,
        <https://place-hold.it/75x75?text=Institution0Collection0Work3Image0> .

<https://place-hold.it/1000x1000?text=Institution0Collection0Work3Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution0/collection0/work3> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution0Collection0Work3Image1>,
        <https://place-hold.it/75x75?text=Institution0Collection0Work3Image1> .

<https://place-hold.it/1000x1000?text=Institution0Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution0> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution0Image0>,
        <https://place-hold.it/75x75?text=Institution0Image0> .

<https://place-hold.it/1000x1000?text=Institution0Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution0> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution0Image1>,
        <https://place-hold.it/75x75?text=Institution0Image1> .

<https://place-hold.it/1000x1000?text=Institution0SharedWork0Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution0/shared/work0> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution0SharedWork0Image0>,
        <https://place-hold.it/75x75?text=Institution0SharedWork0Image0> .

<https://place-hold.it/1000x1000?text=Institution0SharedWork0Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution0/shared/work0> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution0SharedWork0Image1>,
        <https://place-hold.it/75x75?text=Institution0SharedWork0Image1> .

<https://place-hold.it/1000x1000?text=Institution0SharedWork1Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution0/shared/work1> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution0SharedWork1Image0>,
        <https://place-hold.it/75x75?text=Institution0SharedWork1Image0> .

<https://place-hold.it/1000x1000?text=Institution0SharedWork1Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution0/shared/work1> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution0SharedWork1Image1>,
        <https://place-hold.it/75x75?text=Institution0SharedWork1Image1> .

<https://place-hold.it/1000x1000?text=Institution0SharedWork2Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution0/shared/work2> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution0SharedWork2Image0>,
        <https://place-hold.it/75x75?text=Institution0SharedWork2Image0> .

<https://place-hold.it/1000x1000?text=Institution0SharedWork2Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution0/shared/work2> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution0SharedWork2Image1>,
        <https://place-hold.it/75x75?text=Institution0SharedWork2Image1> .

<https://place-hold.it/1000x1000?text=Institution0SharedWork3Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution0/shared/work3> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution0SharedWork3Image0>,
        <https://place-hold.it/75x75?text=Institution0SharedWork3Image0> .

<https://place-hold.it/1000x1000?text=Institution0SharedWork3Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution0/shared/work3> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution0SharedWork3Image1>,
        <https://place-hold.it/75x75?text=Institution0SharedWork3Image1> .

<https://place-hold.it/1000x1000?text=Institution1Collection0Work0Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution1/collection0/work0> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution1Collection0Work0Image0>,
        <https://place-hold.it/75x75?text=Institution1Collection0Work0Image0> .

<https://place-hold.it/1000x1000?text=Institution1Collection0Work0Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution1/collection0/work0> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution1Collection0Work0Image1>,
        <https://place-hold.it/75x75?text=Institution1Collection0Work0Image1> .

<https://place-hold.it/1000x1000?text=Institution1Collection0Work1Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution1/collection0/work1> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution1Collection0Work1Image0>,
        <https://place-hold.it/75x75?text=Institution1Collection0Work1Image0> .

<https://place-hold.it/1000x1000?text=Institution1Collection0Work1Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution1/collection0/work1> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution1Collection0Work1Image1>,
        <https://place-hold.it/75x75?text=Institution1Collection0Work1Image1> .

<https://place-hold.it/1000x1000?text=Institution1Collection0Work2Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution1/collection0/work2> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution1Collection0Work2Image0>,
        <https://place-hold.it/75x75?text=Institution1Collection0Work2Image0> .

<https://place-hold.it/1000x1000?text=Institution1Collection0Work2Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution1/collection0/work2> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution1Collection0Work2Image1>,
        <https://place-hold.it/75x75?text=Institution1Collection0Work2Image1> .

<https://place-hold.it/1000x1000?text=Institution1Collection0Work3Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution1/collection0/work3> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution1Collection0Work3Image0>,
        <https://place-hold.it/75x75?text=Institution1Collection0Work3Image0> .

<https://place-hold.it/1000x1000?text=Institution1Collection0Work3Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution1/collection0/work3> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution1Collection0Work3Image1>,
        <https://place-hold.it/75x75?text=Institution1Collection0Work3Image1> .

<https://place-hold.it/1000x1000?text=Institution1Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution1> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution1Image0>,
        <https://place-hold.it/75x75?text=Institution1Image0> .

<https://place-hold.it/1000x1000?text=Institution1Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution1> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution1Image1>,
        <https://place-hold.it/75x75?text=Institution1Image1> .

<https://place-hold.it/1000x1000?text=Institution1SharedWork0Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution1/shared/work0> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution1SharedWork0Image0>,
        <https://place-hold.it/75x75?text=Institution1SharedWork0Image0> .

<https://place-hold.it/1000x1000?text=Institution1SharedWork0Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution1/shared/work0> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution1SharedWork0Image1>,
        <https://place-hold.it/75x75?text=Institution1SharedWork0Image1> .

<https://place-hold.it/1000x1000?text=Institution1SharedWork1Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution1/shared/work1> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution1SharedWork1Image0>,
        <https://place-hold.it/75x75?text=Institution1SharedWork1Image0> .

<https://place-hold.it/1000x1000?text=Institution1SharedWork1Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution1/shared/work1> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution1SharedWork1Image1>,
        <https://place-hold.it/75x75?text=Institution1SharedWork1Image1> .

<https://place-hold.it/1000x1000?text=Institution1SharedWork2Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution1/shared/work2> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution1SharedWork2Image0>,
        <https://place-hold.it/75x75?text=Institution1SharedWork2Image0> .

<https://place-hold.it/1000x1000?text=Institution1SharedWork2Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution1/shared/work2> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution1SharedWork2Image1>,
        <https://place-hold.it/75x75?text=Institution1SharedWork2Image1> .

<https://place-hold.it/1000x1000?text=Institution1SharedWork3Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution1/shared/work3> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution1SharedWork3Image0>,
        <https://place-hold.it/75x75?text=Institution1SharedWork3Image0> .

<https://place-hold.it/1000x1000?text=Institution1SharedWork3Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <http://example.com/institution1/shared/work3> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Institution1SharedWork3Image1>,
        <https://place-hold.it/75x75?text=Institution1SharedWork3Image1> .

<https://place-hold.it/1000x1000?text=Language%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:20> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Language%200Image0>,
        <https://place-hold.it/75x75?text=Language%200Image0> .

<https://place-hold.it/1000x1000?text=Language%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:20> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Language%200Image1>,
        <https://place-hold.it/75x75?text=Language%200Image1> .

<https://place-hold.it/1000x1000?text=Language%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:21> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Language%201Image0>,
        <https://place-hold.it/75x75?text=Language%201Image0> .

<https://place-hold.it/1000x1000?text=Language%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:21> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Language%201Image1>,
        <https://place-hold.it/75x75?text=Language%201Image1> .

<https://place-hold.it/1000x1000?text=Language%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:22> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Language%202Image0>,
        <https://place-hold.it/75x75?text=Language%202Image0> .

<https://place-hold.it/1000x1000?text=Language%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:22> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Language%202Image1>,
        <https://place-hold.it/75x75?text=Language%202Image1> .

<https://place-hold.it/1000x1000?text=Language%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:23> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Language%203Image0>,
        <https://place-hold.it/75x75?text=Language%203Image0> .

<https://place-hold.it/1000x1000?text=Language%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:23> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Language%203Image1>,
        <https://place-hold.it/75x75?text=Language%203Image1> .

<https://place-hold.it/1000x1000?text=Language%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:24> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Language%204Image0>,
        <https://place-hold.it/75x75?text=Language%204Image0> .

<https://place-hold.it/1000x1000?text=Language%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:24> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Language%204Image1>,
        <https://place-hold.it/75x75?text=Language%204Image1> .

<https://place-hold.it/1000x1000?text=Language%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:25> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Language%205Image0>,
        <https://place-hold.it/75x75?text=Language%205Image0> .

<https://place-hold.it/1000x1000?text=Language%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:25> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Language%205Image1>,
        <https://place-hold.it/75x75?text=Language%205Image1> .

<https://place-hold.it/1000x1000?text=Language%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:26> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Language%206Image0>,
        <https://place-hold.it/75x75?text=Language%206Image0> .

<https://place-hold.it/1000x1000?text=Language%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:26> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Language%206Image1>,
        <https://place-hold.it/75x75?text=Language%206Image1> .

<https://place-hold.it/1000x1000?text=Language%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:27> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Language%207Image0>,
        <https://place-hold.it/75x75?text=Language%207Image0> .

<https://place-hold.it/1000x1000?text=Language%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:27> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Language%207Image1>,
        <https://place-hold.it/75x75?text=Language%207Image1> .

<https://place-hold.it/1000x1000?text=Language%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:28> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Language%208Image0>,
        <https://place-hold.it/75x75?text=Language%208Image0> .

<https://place-hold.it/1000x1000?text=Language%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:28> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Language%208Image1>,
        <https://place-hold.it/75x75?text=Language%208Image1> .

<https://place-hold.it/1000x1000?text=Language%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:29> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Language%209Image0>,
        <https://place-hold.it/75x75?text=Language%209Image0> .

<https://place-hold.it/1000x1000?text=Language%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:29> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Language%209Image1>,
        <https://place-hold.it/75x75?text=Language%209Image1> .

<https://place-hold.it/1000x1000?text=Material%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:30> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Material%200Image0>,
        <https://place-hold.it/75x75?text=Material%200Image0> .

<https://place-hold.it/1000x1000?text=Material%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:30> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Material%200Image1>,
        <https://place-hold.it/75x75?text=Material%200Image1> .

<https://place-hold.it/1000x1000?text=Material%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:31> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Material%201Image0>,
        <https://place-hold.it/75x75?text=Material%201Image0> .

<https://place-hold.it/1000x1000?text=Material%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:31> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Material%201Image1>,
        <https://place-hold.it/75x75?text=Material%201Image1> .

<https://place-hold.it/1000x1000?text=Material%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:32> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Material%202Image0>,
        <https://place-hold.it/75x75?text=Material%202Image0> .

<https://place-hold.it/1000x1000?text=Material%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:32> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Material%202Image1>,
        <https://place-hold.it/75x75?text=Material%202Image1> .

<https://place-hold.it/1000x1000?text=Material%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:33> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Material%203Image0>,
        <https://place-hold.it/75x75?text=Material%203Image0> .

<https://place-hold.it/1000x1000?text=Material%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:33> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Material%203Image1>,
        <https://place-hold.it/75x75?text=Material%203Image1> .

<https://place-hold.it/1000x1000?text=Material%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:34> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Material%204Image0>,
        <https://place-hold.it/75x75?text=Material%204Image0> .

<https://place-hold.it/1000x1000?text=Material%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:34> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Material%204Image1>,
        <https://place-hold.it/75x75?text=Material%204Image1> .

<https://place-hold.it/1000x1000?text=Material%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:35> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Material%205Image0>,
        <https://place-hold.it/75x75?text=Material%205Image0> .

<https://place-hold.it/1000x1000?text=Material%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:35> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Material%205Image1>,
        <https://place-hold.it/75x75?text=Material%205Image1> .

<https://place-hold.it/1000x1000?text=Material%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:36> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Material%206Image0>,
        <https://place-hold.it/75x75?text=Material%206Image0> .

<https://place-hold.it/1000x1000?text=Material%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:36> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Material%206Image1>,
        <https://place-hold.it/75x75?text=Material%206Image1> .

<https://place-hold.it/1000x1000?text=Material%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:37> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Material%207Image0>,
        <https://place-hold.it/75x75?text=Material%207Image0> .

<https://place-hold.it/1000x1000?text=Material%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:37> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Material%207Image1>,
        <https://place-hold.it/75x75?text=Material%207Image1> .

<https://place-hold.it/1000x1000?text=Material%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:38> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Material%208Image0>,
        <https://place-hold.it/75x75?text=Material%208Image0> .

<https://place-hold.it/1000x1000?text=Material%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:38> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Material%208Image1>,
        <https://place-hold.it/75x75?text=Material%208Image1> .

<https://place-hold.it/1000x1000?text=Material%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:39> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Material%209Image0>,
        <https://place-hold.it/75x75?text=Material%209Image0> .

<https://place-hold.it/1000x1000?text=Material%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:39> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Material%209Image1>,
        <https://place-hold.it/75x75?text=Material%209Image1> .

<https://place-hold.it/1000x1000?text=Medium%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:40> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Medium%200Image0>,
        <https://place-hold.it/75x75?text=Medium%200Image0> .

<https://place-hold.it/1000x1000?text=Medium%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:40> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Medium%200Image1>,
        <https://place-hold.it/75x75?text=Medium%200Image1> .

<https://place-hold.it/1000x1000?text=Medium%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:41> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Medium%201Image0>,
        <https://place-hold.it/75x75?text=Medium%201Image0> .

<https://place-hold.it/1000x1000?text=Medium%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:41> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Medium%201Image1>,
        <https://place-hold.it/75x75?text=Medium%201Image1> .

<https://place-hold.it/1000x1000?text=Medium%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:42> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Medium%202Image0>,
        <https://place-hold.it/75x75?text=Medium%202Image0> .

<https://place-hold.it/1000x1000?text=Medium%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:42> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Medium%202Image1>,
        <https://place-hold.it/75x75?text=Medium%202Image1> .

<https://place-hold.it/1000x1000?text=Medium%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:43> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Medium%203Image0>,
        <https://place-hold.it/75x75?text=Medium%203Image0> .

<https://place-hold.it/1000x1000?text=Medium%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:43> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Medium%203Image1>,
        <https://place-hold.it/75x75?text=Medium%203Image1> .

<https://place-hold.it/1000x1000?text=Medium%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:44> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Medium%204Image0>,
        <https://place-hold.it/75x75?text=Medium%204Image0> .

<https://place-hold.it/1000x1000?text=Medium%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:44> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Medium%204Image1>,
        <https://place-hold.it/75x75?text=Medium%204Image1> .

<https://place-hold.it/1000x1000?text=Medium%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:45> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Medium%205Image0>,
        <https://place-hold.it/75x75?text=Medium%205Image0> .

<https://place-hold.it/1000x1000?text=Medium%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:45> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Medium%205Image1>,
        <https://place-hold.it/75x75?text=Medium%205Image1> .

<https://place-hold.it/1000x1000?text=Medium%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:46> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Medium%206Image0>,
        <https://place-hold.it/75x75?text=Medium%206Image0> .

<https://place-hold.it/1000x1000?text=Medium%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:46> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Medium%206Image1>,
        <https://place-hold.it/75x75?text=Medium%206Image1> .

<https://place-hold.it/1000x1000?text=Medium%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:47> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Medium%207Image0>,
        <https://place-hold.it/75x75?text=Medium%207Image0> .

<https://place-hold.it/1000x1000?text=Medium%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:47> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Medium%207Image1>,
        <https://place-hold.it/75x75?text=Medium%207Image1> .

<https://place-hold.it/1000x1000?text=Medium%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:48> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Medium%208Image0>,
        <https://place-hold.it/75x75?text=Medium%208Image0> .

<https://place-hold.it/1000x1000?text=Medium%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:48> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Medium%208Image1>,
        <https://place-hold.it/75x75?text=Medium%208Image1> .

<https://place-hold.it/1000x1000?text=Medium%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:49> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Medium%209Image0>,
        <https://place-hold.it/75x75?text=Medium%209Image0> .

<https://place-hold.it/1000x1000?text=Medium%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:49> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Medium%209Image1>,
        <https://place-hold.it/75x75?text=Medium%209Image1> .

<https://place-hold.it/1000x1000?text=Publisher%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:50> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%200Image0>,
        <https://place-hold.it/75x75?text=Publisher%200Image0> .

<https://place-hold.it/1000x1000?text=Publisher%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:50> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%200Image1>,
        <https://place-hold.it/75x75?text=Publisher%200Image1> .

<https://place-hold.it/1000x1000?text=Publisher%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:51> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%201Image0>,
        <https://place-hold.it/75x75?text=Publisher%201Image0> .

<https://place-hold.it/1000x1000?text=Publisher%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:51> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%201Image1>,
        <https://place-hold.it/75x75?text=Publisher%201Image1> .

<https://place-hold.it/1000x1000?text=Publisher%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:52> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%202Image0>,
        <https://place-hold.it/75x75?text=Publisher%202Image0> .

<https://place-hold.it/1000x1000?text=Publisher%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:52> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%202Image1>,
        <https://place-hold.it/75x75?text=Publisher%202Image1> .

<https://place-hold.it/1000x1000?text=Publisher%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:53> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%203Image0>,
        <https://place-hold.it/75x75?text=Publisher%203Image0> .

<https://place-hold.it/1000x1000?text=Publisher%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:53> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%203Image1>,
        <https://place-hold.it/75x75?text=Publisher%203Image1> .

<https://place-hold.it/1000x1000?text=Publisher%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:54> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%204Image0>,
        <https://place-hold.it/75x75?text=Publisher%204Image0> .

<https://place-hold.it/1000x1000?text=Publisher%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:54> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%204Image1>,
        <https://place-hold.it/75x75?text=Publisher%204Image1> .

<https://place-hold.it/1000x1000?text=Publisher%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:55> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%205Image0>,
        <https://place-hold.it/75x75?text=Publisher%205Image0> .

<https://place-hold.it/1000x1000?text=Publisher%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:55> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%205Image1>,
        <https://place-hold.it/75x75?text=Publisher%205Image1> .

<https://place-hold.it/1000x1000?text=Publisher%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:56> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%206Image0>,
        <https://place-hold.it/75x75?text=Publisher%206Image0> .

<https://place-hold.it/1000x1000?text=Publisher%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:56> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%206Image1>,
        <https://place-hold.it/75x75?text=Publisher%206Image1> .

<https://place-hold.it/1000x1000?text=Publisher%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:57> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%207Image0>,
        <https://place-hold.it/75x75?text=Publisher%207Image0> .

<https://place-hold.it/1000x1000?text=Publisher%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:57> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%207Image1>,
        <https://place-hold.it/75x75?text=Publisher%207Image1> .

<https://place-hold.it/1000x1000?text=Publisher%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:58> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%208Image0>,
        <https://place-hold.it/75x75?text=Publisher%208Image0> .

<https://place-hold.it/1000x1000?text=Publisher%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:58> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%208Image1>,
        <https://place-hold.it/75x75?text=Publisher%208Image1> .

<https://place-hold.it/1000x1000?text=Publisher%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:59> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%209Image0>,
        <https://place-hold.it/75x75?text=Publisher%209Image0> .

<https://place-hold.it/1000x1000?text=Publisher%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:59> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%209Image1>,
        <https://place-hold.it/75x75?text=Publisher%209Image1> .

<https://place-hold.it/1000x1000?text=Source%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:60> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Source%200Image0>,
        <https://place-hold.it/75x75?text=Source%200Image0> .

<https://place-hold.it/1000x1000?text=Source%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:60> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Source%200Image1>,
        <https://place-hold.it/75x75?text=Source%200Image1> .

<https://place-hold.it/1000x1000?text=Source%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:61> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Source%201Image0>,
        <https://place-hold.it/75x75?text=Source%201Image0> .

<https://place-hold.it/1000x1000?text=Source%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:61> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Source%201Image1>,
        <https://place-hold.it/75x75?text=Source%201Image1> .

<https://place-hold.it/1000x1000?text=Source%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:62> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Source%202Image0>,
        <https://place-hold.it/75x75?text=Source%202Image0> .

<https://place-hold.it/1000x1000?text=Source%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:62> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Source%202Image1>,
        <https://place-hold.it/75x75?text=Source%202Image1> .

<https://place-hold.it/1000x1000?text=Source%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:63> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Source%203Image0>,
        <https://place-hold.it/75x75?text=Source%203Image0> .

<https://place-hold.it/1000x1000?text=Source%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:63> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Source%203Image1>,
        <https://place-hold.it/75x75?text=Source%203Image1> .

<https://place-hold.it/1000x1000?text=Source%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:64> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Source%204Image0>,
        <https://place-hold.it/75x75?text=Source%204Image0> .

<https://place-hold.it/1000x1000?text=Source%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:64> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Source%204Image1>,
        <https://place-hold.it/75x75?text=Source%204Image1> .

<https://place-hold.it/1000x1000?text=Source%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:65> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Source%205Image0>,
        <https://place-hold.it/75x75?text=Source%205Image0> .

<https://place-hold.it/1000x1000?text=Source%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:65> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Source%205Image1>,
        <https://place-hold.it/75x75?text=Source%205Image1> .

<https://place-hold.it/1000x1000?text=Source%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:66> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Source%206Image0>,
        <https://place-hold.it/75x75?text=Source%206Image0> .

<https://place-hold.it/1000x1000?text=Source%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:66> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Source%206Image1>,
        <https://place-hold.it/75x75?text=Source%206Image1> .

<https://place-hold.it/1000x1000?text=Source%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:67> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Source%207Image0>,
        <https://place-hold.it/75x75?text=Source%207Image0> .

<https://place-hold.it/1000x1000?text=Source%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:67> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Source%207Image1>,
        <https://place-hold.it/75x75?text=Source%207Image1> .

<https://place-hold.it/1000x1000?text=Source%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:68> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Source%208Image0>,
        <https://place-hold.it/75x75?text=Source%208Image0> .

<https://place-hold.it/1000x1000?text=Source%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:68> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Source%208Image1>,
        <https://place-hold.it/75x75?text=Source%208Image1> .

<https://place-hold.it/1000x1000?text=Source%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:69> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Source%209Image0>,
        <https://place-hold.it/75x75?text=Source%209Image0> .

<https://place-hold.it/1000x1000?text=Source%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:69> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Source%209Image1>,
        <https://place-hold.it/75x75?text=Source%209Image1> .

<https://place-hold.it/1000x1000?text=Spatial%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:70> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%200Image0>,
        <https://place-hold.it/75x75?text=Spatial%200Image0> .

<https://place-hold.it/1000x1000?text=Spatial%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:70> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%200Image1>,
        <https://place-hold.it/75x75?text=Spatial%200Image1> .

<https://place-hold.it/1000x1000?text=Spatial%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:71> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%201Image0>,
        <https://place-hold.it/75x75?text=Spatial%201Image0> .

<https://place-hold.it/1000x1000?text=Spatial%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:71> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%201Image1>,
        <https://place-hold.it/75x75?text=Spatial%201Image1> .

<https://place-hold.it/1000x1000?text=Spatial%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:72> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%202Image0>,
        <https://place-hold.it/75x75?text=Spatial%202Image0> .

<https://place-hold.it/1000x1000?text=Spatial%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:72> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%202Image1>,
        <https://place-hold.it/75x75?text=Spatial%202Image1> .

<https://place-hold.it/1000x1000?text=Spatial%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:73> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%203Image0>,
        <https://place-hold.it/75x75?text=Spatial%203Image0> .

<https://place-hold.it/1000x1000?text=Spatial%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:73> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%203Image1>,
        <https://place-hold.it/75x75?text=Spatial%203Image1> .

<https://place-hold.it/1000x1000?text=Spatial%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:74> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%204Image0>,
        <https://place-hold.it/75x75?text=Spatial%204Image0> .

<https://place-hold.it/1000x1000?text=Spatial%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:74> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%204Image1>,
        <https://place-hold.it/75x75?text=Spatial%204Image1> .

<https://place-hold.it/1000x1000?text=Spatial%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:75> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%205Image0>,
        <https://place-hold.it/75x75?text=Spatial%205Image0> .

<https://place-hold.it/1000x1000?text=Spatial%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:75> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%205Image1>,
        <https://place-hold.it/75x75?text=Spatial%205Image1> .

<https://place-hold.it/1000x1000?text=Spatial%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:76> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%206Image0>,
        <https://place-hold.it/75x75?text=Spatial%206Image0> .

<https://place-hold.it/1000x1000?text=Spatial%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:76> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%206Image1>,
        <https://place-hold.it/75x75?text=Spatial%206Image1> .

<https://place-hold.it/1000x1000?text=Spatial%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:77> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%207Image0>,
        <https://place-hold.it/75x75?text=Spatial%207Image0> .

<https://place-hold.it/1000x1000?text=Spatial%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:77> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%207Image1>,
        <https://place-hold.it/75x75?text=Spatial%207Image1> .

<https://place-hold.it/1000x1000?text=Spatial%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:78> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%208Image0>,
        <https://place-hold.it/75x75?text=Spatial%208Image0> .

<https://place-hold.it/1000x1000?text=Spatial%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:78> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%208Image1>,
        <https://place-hold.it/75x75?text=Spatial%208Image1> .

<https://place-hold.it/1000x1000?text=Spatial%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:79> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%209Image0>,
        <https://place-hold.it/75x75?text=Spatial%209Image0> .

<https://place-hold.it/1000x1000?text=Spatial%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:79> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%209Image1>,
        <https://place-hold.it/75x75?text=Spatial%209Image1> .

<https://place-hold.it/1000x1000?text=Subject%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:80> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Subject%200Image0>,
        <https://place-hold.it/75x75?text=Subject%200Image0> .

<https://place-hold.it/1000x1000?text=Subject%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:80> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Subject%200Image1>,
        <https://place-hold.it/75x75?text=Subject%200Image1> .

<https://place-hold.it/1000x1000?text=Subject%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:81> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Subject%201Image0>,
        <https://place-hold.it/75x75?text=Subject%201Image0> .

<https://place-hold.it/1000x1000?text=Subject%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:81> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Subject%201Image1>,
        <https://place-hold.it/75x75?text=Subject%201Image1> .

<https://place-hold.it/1000x1000?text=Subject%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:82> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Subject%202Image0>,
        <https://place-hold.it/75x75?text=Subject%202Image0> .

<https://place-hold.it/1000x1000?text=Subject%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:82> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Subject%202Image1>,
        <https://place-hold.it/75x75?text=Subject%202Image1> .

<https://place-hold.it/1000x1000?text=Subject%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:83> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Subject%203Image0>,
        <https://place-hold.it/75x75?text=Subject%203Image0> .

<https://place-hold.it/1000x1000?text=Subject%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:83> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Subject%203Image1>,
        <https://place-hold.it/75x75?text=Subject%203Image1> .

<https://place-hold.it/1000x1000?text=Subject%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:84> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Subject%204Image0>,
        <https://place-hold.it/75x75?text=Subject%204Image0> .

<https://place-hold.it/1000x1000?text=Subject%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:84> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Subject%204Image1>,
        <https://place-hold.it/75x75?text=Subject%204Image1> .

<https://place-hold.it/1000x1000?text=Subject%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:85> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Subject%205Image0>,
        <https://place-hold.it/75x75?text=Subject%205Image0> .

<https://place-hold.it/1000x1000?text=Subject%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:85> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Subject%205Image1>,
        <https://place-hold.it/75x75?text=Subject%205Image1> .

<https://place-hold.it/1000x1000?text=Subject%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:86> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Subject%206Image0>,
        <https://place-hold.it/75x75?text=Subject%206Image0> .

<https://place-hold.it/1000x1000?text=Subject%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:86> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Subject%206Image1>,
        <https://place-hold.it/75x75?text=Subject%206Image1> .

<https://place-hold.it/1000x1000?text=Subject%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:87> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Subject%207Image0>,
        <https://place-hold.it/75x75?text=Subject%207Image0> .

<https://place-hold.it/1000x1000?text=Subject%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:87> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Subject%207Image1>,
        <https://place-hold.it/75x75?text=Subject%207Image1> .

<https://place-hold.it/1000x1000?text=Subject%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:88> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Subject%208Image0>,
        <https://place-hold.it/75x75?text=Subject%208Image0> .

<https://place-hold.it/1000x1000?text=Subject%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:88> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Subject%208Image1>,
        <https://place-hold.it/75x75?text=Subject%208Image1> .

<https://place-hold.it/1000x1000?text=Subject%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:89> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Subject%209Image0>,
        <https://place-hold.it/75x75?text=Subject%209Image0> .

<https://place-hold.it/1000x1000?text=Subject%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:89> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Subject%209Image1>,
        <https://place-hold.it/75x75?text=Subject%209Image1> .

<https://place-hold.it/1000x1000?text=Technique%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:90> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Technique%200Image0>,
        <https://place-hold.it/75x75?text=Technique%200Image0> .

<https://place-hold.it/1000x1000?text=Technique%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:90> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Technique%200Image1>,
        <https://place-hold.it/75x75?text=Technique%200Image1> .

<https://place-hold.it/1000x1000?text=Technique%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:91> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Technique%201Image0>,
        <https://place-hold.it/75x75?text=Technique%201Image0> .

<https://place-hold.it/1000x1000?text=Technique%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:91> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Technique%201Image1>,
        <https://place-hold.it/75x75?text=Technique%201Image1> .

<https://place-hold.it/1000x1000?text=Technique%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:92> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Technique%202Image0>,
        <https://place-hold.it/75x75?text=Technique%202Image0> .

<https://place-hold.it/1000x1000?text=Technique%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:92> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Technique%202Image1>,
        <https://place-hold.it/75x75?text=Technique%202Image1> .

<https://place-hold.it/1000x1000?text=Technique%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:93> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Technique%203Image0>,
        <https://place-hold.it/75x75?text=Technique%203Image0> .

<https://place-hold.it/1000x1000?text=Technique%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:93> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Technique%203Image1>,
        <https://place-hold.it/75x75?text=Technique%203Image1> .

<https://place-hold.it/1000x1000?text=Technique%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:94> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Technique%204Image0>,
        <https://place-hold.it/75x75?text=Technique%204Image0> .

<https://place-hold.it/1000x1000?text=Technique%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:94> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Technique%204Image1>,
        <https://place-hold.it/75x75?text=Technique%204Image1> .

<https://place-hold.it/1000x1000?text=Technique%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:95> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Technique%205Image0>,
        <https://place-hold.it/75x75?text=Technique%205Image0> .

<https://place-hold.it/1000x1000?text=Technique%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:95> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Technique%205Image1>,
        <https://place-hold.it/75x75?text=Technique%205Image1> .

<https://place-hold.it/1000x1000?text=Technique%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:96> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Technique%206Image0>,
        <https://place-hold.it/75x75?text=Technique%206Image0> .

<https://place-hold.it/1000x1000?text=Technique%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:96> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Technique%206Image1>,
        <https://place-hold.it/75x75?text=Technique%206Image1> .

<https://place-hold.it/1000x1000?text=Technique%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:97> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Technique%207Image0>,
        <https://place-hold.it/75x75?text=Technique%207Image0> .

<https://place-hold.it/1000x1000?text=Technique%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:97> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Technique%207Image1>,
        <https://place-hold.it/75x75?text=Technique%207Image1> .

<https://place-hold.it/1000x1000?text=Technique%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:98> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Technique%208Image0>,
        <https://place-hold.it/75x75?text=Technique%208Image0> .

<https://place-hold.it/1000x1000?text=Technique%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:98> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Technique%208Image1>,
        <https://place-hold.it/75x75?text=Technique%208Image1> .

<https://place-hold.it/1000x1000?text=Technique%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:99> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Technique%209Image0>,
        <https://place-hold.it/75x75?text=Technique%209Image0> .

<https://place-hold.it/1000x1000?text=Technique%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:99> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Technique%209Image1>,
        <https://place-hold.it/75x75?text=Technique%209Image1> .

<https://place-hold.it/1000x1000?text=Temporal%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:100> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Temporal%200Image0>,
        <https://place-hold.it/75x75?text=Temporal%200Image0> .

<https://place-hold.it/1000x1000?text=Temporal%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:100> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Temporal%200Image1>,
        <https://place-hold.it/75x75?text=Temporal%200Image1> .

<https://place-hold.it/1000x1000?text=Temporal%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:101> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Temporal%201Image0>,
        <https://place-hold.it/75x75?text=Temporal%201Image0> .

<https://place-hold.it/1000x1000?text=Temporal%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:101> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Temporal%201Image1>,
        <https://place-hold.it/75x75?text=Temporal%201Image1> .

<https://place-hold.it/1000x1000?text=Temporal%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:102> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Temporal%202Image0>,
        <https://place-hold.it/75x75?text=Temporal%202Image0> .

<https://place-hold.it/1000x1000?text=Temporal%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:102> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Temporal%202Image1>,
        <https://place-hold.it/75x75?text=Temporal%202Image1> .

<https://place-hold.it/1000x1000?text=Temporal%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:103> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Temporal%203Image0>,
        <https://place-hold.it/75x75?text=Temporal%203Image0> .

<https://place-hold.it/1000x1000?text=Temporal%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:103> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Temporal%203Image1>,
        <https://place-hold.it/75x75?text=Temporal%203Image1> .

<https://place-hold.it/1000x1000?text=Temporal%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:104> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Temporal%204Image0>,
        <https://place-hold.it/75x75?text=Temporal%204Image0> .

<https://place-hold.it/1000x1000?text=Temporal%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:104> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Temporal%204Image1>,
        <https://place-hold.it/75x75?text=Temporal%204Image1> .

<https://place-hold.it/1000x1000?text=Temporal%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:105> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Temporal%205Image0>,
        <https://place-hold.it/75x75?text=Temporal%205Image0> .

<https://place-hold.it/1000x1000?text=Temporal%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:105> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Temporal%205Image1>,
        <https://place-hold.it/75x75?text=Temporal%205Image1> .

<https://place-hold.it/1000x1000?text=Temporal%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:106> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Temporal%206Image0>,
        <https://place-hold.it/75x75?text=Temporal%206Image0> .

<https://place-hold.it/1000x1000?text=Temporal%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:106> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Temporal%206Image1>,
        <https://place-hold.it/75x75?text=Temporal%206Image1> .

<https://place-hold.it/1000x1000?text=Temporal%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:107> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Temporal%207Image0>,
        <https://place-hold.it/75x75?text=Temporal%207Image0> .

<https://place-hold.it/1000x1000?text=Temporal%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:107> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Temporal%207Image1>,
        <https://place-hold.it/75x75?text=Temporal%207Image1> .

<https://place-hold.it/1000x1000?text=Temporal%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:108> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Temporal%208Image0>,
        <https://place-hold.it/75x75?text=Temporal%208Image0> .

<https://place-hold.it/1000x1000?text=Temporal%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:108> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Temporal%208Image1>,
        <https://place-hold.it/75x75?text=Temporal%208Image1> .

<https://place-hold.it/1000x1000?text=Temporal%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:109> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Temporal%209Image0>,
        <https://place-hold.it/75x75?text=Temporal%209Image0> .

<https://place-hold.it/1000x1000?text=Temporal%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:109> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Temporal%209Image1>,
        <https://place-hold.it/75x75?text=Temporal%209Image1> .

<https://place-hold.it/1000x1000?text=Type%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:110> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Type%200Image0>,
        <https://place-hold.it/75x75?text=Type%200Image0> .

<https://place-hold.it/1000x1000?text=Type%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:110> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Type%200Image1>,
        <https://place-hold.it/75x75?text=Type%200Image1> .

<https://place-hold.it/1000x1000?text=Type%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:111> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Type%201Image0>,
        <https://place-hold.it/75x75?text=Type%201Image0> .

<https://place-hold.it/1000x1000?text=Type%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:111> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Type%201Image1>,
        <https://place-hold.it/75x75?text=Type%201Image1> .

<https://place-hold.it/1000x1000?text=Type%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:112> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Type%202Image0>,
        <https://place-hold.it/75x75?text=Type%202Image0> .

<https://place-hold.it/1000x1000?text=Type%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:112> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Type%202Image1>,
        <https://place-hold.it/75x75?text=Type%202Image1> .

<https://place-hold.it/1000x1000?text=Type%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:113> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Type%203Image0>,
        <https://place-hold.it/75x75?text=Type%203Image0> .

<https://place-hold.it/1000x1000?text=Type%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:113> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Type%203Image1>,
        <https://place-hold.it/75x75?text=Type%203Image1> .

<https://place-hold.it/1000x1000?text=Type%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:114> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Type%204Image0>,
        <https://place-hold.it/75x75?text=Type%204Image0> .

<https://place-hold.it/1000x1000?text=Type%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:114> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Type%204Image1>,
        <https://place-hold.it/75x75?text=Type%204Image1> .

<https://place-hold.it/1000x1000?text=Type%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:115> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Type%205Image0>,
        <https://place-hold.it/75x75?text=Type%205Image0> .

<https://place-hold.it/1000x1000?text=Type%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:115> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Type%205Image1>,
        <https://place-hold.it/75x75?text=Type%205Image1> .

<https://place-hold.it/1000x1000?text=Type%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:116> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Type%206Image0>,
        <https://place-hold.it/75x75?text=Type%206Image0> .

<https://place-hold.it/1000x1000?text=Type%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:116> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Type%206Image1>,
        <https://place-hold.it/75x75?text=Type%206Image1> .

<https://place-hold.it/1000x1000?text=Type%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:117> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Type%207Image0>,
        <https://place-hold.it/75x75?text=Type%207Image0> .

<https://place-hold.it/1000x1000?text=Type%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:117> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Type%207Image1>,
        <https://place-hold.it/75x75?text=Type%207Image1> .

<https://place-hold.it/1000x1000?text=Type%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:118> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Type%208Image0>,
        <https://place-hold.it/75x75?text=Type%208Image0> .

<https://place-hold.it/1000x1000?text=Type%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:118> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Type%208Image1>,
        <https://place-hold.it/75x75?text=Type%208Image1> .

<https://place-hold.it/1000x1000?text=Type%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:119> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Type%209Image0>,
        <https://place-hold.it/75x75?text=Type%209Image0> .

<https://place-hold.it/1000x1000?text=Type%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 1000 ;
    exif:width 1000 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:119> ;
    foaf:thumbnail <https://place-hold.it/600x600?text=Type%209Image1>,
        <https://place-hold.it/75x75?text=Type%209Image1> .

<http://creativecommons.org/licenses/by-nc-nd/2.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-nc-nd/2.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:prohibits creativecommons:CommercialUse ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc-nd" ;
    dc:title "Attribution-NonCommercial-NoDerivs 2.0 Generic"@en ;
    dcterms:hasVersion "2.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nc-nd/2.5/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nc-nd/2.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc-nd/2.0/88x31.png> .

<http://creativecommons.org/licenses/by-nc-nd/2.5/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-nc-nd/2.5/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:prohibits creativecommons:CommercialUse ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc-nd" ;
    dc:title "Attribution-NonCommercial-NoDerivs 2.5 Generic"@en ;
    dcterms:hasVersion "2.5" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nc-nd/3.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nc-nd/2.5/80x15.png>,
        <http://i.creativecommons.org/l/by-nc-nd/2.5/88x31.png> .

<http://creativecommons.org/licenses/by-nc-nd/3.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-nc-nd/3.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:prohibits creativecommons:CommercialUse ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc-nd" ;
    dc:title "Attribution-NonCommercial-NoDerivs 3.0 Unported"@en ;
    dcterms:hasVersion "3.0" ;
    foaf:logo <http://i.creativecommons.org/l/by-nc-nd/3.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc-nd/3.0/88x31.png> .

<http://creativecommons.org/licenses/by-nc-sa/2.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-nc-sa/2.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:prohibits creativecommons:CommercialUse ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice,
        creativecommons:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc-sa" ;
    dc:title "Attribution-NonCommercial-ShareAlike 2.0 Generic"@en ;
    dcterms:hasVersion "2.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nc-sa/2.5/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nc-sa/2.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc-sa/2.0/88x31.png> .

<http://creativecommons.org/licenses/by-nc-sa/2.5/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-nc-sa/2.5/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:prohibits creativecommons:CommercialUse ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice,
        creativecommons:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc-sa" ;
    dc:title "Attribution-NonCommercial-ShareAlike 2.5 Generic"@en ;
    dcterms:hasVersion "2.5" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nc-sa/3.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nc-sa/2.5/80x15.png>,
        <http://i.creativecommons.org/l/by-nc-sa/2.5/88x31.png> .

<http://creativecommons.org/licenses/by-nc-sa/3.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-nc-sa/3.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:prohibits creativecommons:CommercialUse ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice,
        creativecommons:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc-sa" ;
    dc:title "Attribution-NonCommercial-ShareAlike 3.0 Unported"@en ;
    dcterms:hasVersion "3.0" ;
    foaf:logo <http://i.creativecommons.org/l/by-nc-sa/3.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png> .

<http://creativecommons.org/licenses/by-nc/2.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-nc/2.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:prohibits creativecommons:CommercialUse ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc" ;
    dc:title "Attribution-NonCommercial 2.0 Generic"@en ;
    dcterms:hasVersion "2.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nc/2.5/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nc/2.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc/2.0/88x31.png> .

<http://creativecommons.org/licenses/by-nc/2.5/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-nc/2.5/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:prohibits creativecommons:CommercialUse ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc" ;
    dc:title "Attribution-NonCommercial 2.5 Generic"@en ;
    dcterms:hasVersion "2.5" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nc/3.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nc/2.5/80x15.png>,
        <http://i.creativecommons.org/l/by-nc/2.5/88x31.png> .

<http://creativecommons.org/licenses/by-nc/3.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-nc/3.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:prohibits creativecommons:CommercialUse ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nc" ;
    dc:title "Attribution-NonCommercial 3.0 Unported"@en ;
    dcterms:hasVersion "3.0" ;
    foaf:logo <http://i.creativecommons.org/l/by-nc/3.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nc/3.0/88x31.png> .

<http://creativecommons.org/licenses/by-nd/2.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-nd/2.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nd" ;
    dc:title "Attribution-NoDerivs 2.0 Generic"@en ;
    dcterms:hasVersion "2.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nd/2.5/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nd/2.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nd/2.0/88x31.png> .

<http://creativecommons.org/licenses/by-nd/2.5/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-nd/2.5/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nd" ;
    dc:title "Attribution-NoDerivs 2.5 Generic"@en ;
    dcterms:hasVersion "2.5" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-nd/3.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by-nd/2.5/80x15.png>,
        <http://i.creativecommons.org/l/by-nd/2.5/88x31.png> .

<http://creativecommons.org/licenses/by-nd/3.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-nd/3.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-nd" ;
    dc:title "Attribution-NoDerivs 3.0 Unported"@en ;
    dcterms:hasVersion "3.0" ;
    foaf:logo <http://i.creativecommons.org/l/by-nd/3.0/80x15.png>,
        <http://i.creativecommons.org/l/by-nd/3.0/88x31.png> .

<http://creativecommons.org/licenses/by-sa/2.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-sa/2.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice,
        creativecommons:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-sa" ;
    dc:title "Attribution-ShareAlike 2.0 Generic"@en ;
    dcterms:hasVersion "2.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-sa/2.5/> ;
    foaf:logo <http://i.creativecommons.org/l/by-sa/2.0/80x15.png>,
        <http://i.creativecommons.org/l/by-sa/2.0/88x31.png> .

<http://creativecommons.org/licenses/by-sa/2.5/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-sa/2.5/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice,
        creativecommons:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-sa" ;
    dc:title "Attribution-ShareAlike 2.5 Generic"@en ;
    dcterms:hasVersion "2.5" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by-sa/3.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by-sa/2.5/80x15.png>,
        <http://i.creativecommons.org/l/by-sa/2.5/88x31.png> .

<http://creativecommons.org/licenses/by-sa/3.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by-sa/3.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice,
        creativecommons:ShareAlike ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by-sa" ;
    dc:title "Attribution-ShareAlike 3.0 Unported"@en ;
    dcterms:hasVersion "3.0" ;
    foaf:logo <http://i.creativecommons.org/l/by-sa/3.0/80x15.png>,
        <http://i.creativecommons.org/l/by-sa/3.0/88x31.png> .

<http://creativecommons.org/licenses/by/2.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by/2.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by" ;
    dc:title "Attribution 2.0 Generic"@en ;
    dcterms:hasVersion "2.0" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by/2.5/> ;
    foaf:logo <http://i.creativecommons.org/l/by/2.0/80x15.png>,
        <http://i.creativecommons.org/l/by/2.0/88x31.png> .

<http://creativecommons.org/licenses/by/2.5/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by/2.5/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by" ;
    dc:title "Attribution 2.5 Generic"@en ;
    dcterms:hasVersion "2.5" ;
    dcterms:isReplacedBy <http://creativecommons.org/licenses/by/3.0/> ;
    foaf:logo <http://i.creativecommons.org/l/by/2.5/80x15.png>,
        <http://i.creativecommons.org/l/by/2.5/88x31.png> .

<http://creativecommons.org/licenses/by/3.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:legalcode <http://creativecommons.org/licenses/by/3.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:requires creativecommons:Attribution,
        creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "by" ;
    dc:title "Attribution 3.0 Unported"@en ;
    dcterms:hasVersion "3.0" ;
    foaf:logo <http://i.creativecommons.org/l/by/3.0/80x15.png>,
        <http://i.creativecommons.org/l/by/3.0/88x31.png> .

<https://place-hold.it/600x600?text=Cultural%20context%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:0> .

<https://place-hold.it/600x600?text=Cultural%20context%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:0> .

<https://place-hold.it/600x600?text=Cultural%20context%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:1> .

<https://place-hold.it/600x600?text=Cultural%20context%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:1> .

<https://place-hold.it/600x600?text=Cultural%20context%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:2> .

<https://place-hold.it/600x600?text=Cultural%20context%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:2> .

<https://place-hold.it/600x600?text=Cultural%20context%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:3> .

<https://place-hold.it/600x600?text=Cultural%20context%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:3> .

<https://place-hold.it/600x600?text=Cultural%20context%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:4> .

<https://place-hold.it/600x600?text=Cultural%20context%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:4> .

<https://place-hold.it/600x600?text=Cultural%20context%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:5> .

<https://place-hold.it/600x600?text=Cultural%20context%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:5> .

<https://place-hold.it/600x600?text=Cultural%20context%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:6> .

<https://place-hold.it/600x600?text=Cultural%20context%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:6> .

<https://place-hold.it/600x600?text=Cultural%20context%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:7> .

<https://place-hold.it/600x600?text=Cultural%20context%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:7> .

<https://place-hold.it/600x600?text=Cultural%20context%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:8> .

<https://place-hold.it/600x600?text=Cultural%20context%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:8> .

<https://place-hold.it/600x600?text=Cultural%20context%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:9> .

<https://place-hold.it/600x600?text=Cultural%20context%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:9> .

<https://place-hold.it/600x600?text=Extent%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:10> .

<https://place-hold.it/600x600?text=Extent%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:10> .

<https://place-hold.it/600x600?text=Extent%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:11> .

<https://place-hold.it/600x600?text=Extent%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:11> .

<https://place-hold.it/600x600?text=Extent%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:12> .

<https://place-hold.it/600x600?text=Extent%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:12> .

<https://place-hold.it/600x600?text=Extent%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:13> .

<https://place-hold.it/600x600?text=Extent%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:13> .

<https://place-hold.it/600x600?text=Extent%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:14> .

<https://place-hold.it/600x600?text=Extent%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:14> .

<https://place-hold.it/600x600?text=Extent%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:15> .

<https://place-hold.it/600x600?text=Extent%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:15> .

<https://place-hold.it/600x600?text=Extent%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:16> .

<https://place-hold.it/600x600?text=Extent%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:16> .

<https://place-hold.it/600x600?text=Extent%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:17> .

<https://place-hold.it/600x600?text=Extent%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:17> .

<https://place-hold.it/600x600?text=Extent%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:18> .

<https://place-hold.it/600x600?text=Extent%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:18> .

<https://place-hold.it/600x600?text=Extent%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:19> .

<https://place-hold.it/600x600?text=Extent%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:19> .

<https://place-hold.it/600x600?text=Institution0Collection0Work0Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution0/collection0/work0> .

<https://place-hold.it/600x600?text=Institution0Collection0Work0Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution0/collection0/work0> .

<https://place-hold.it/600x600?text=Institution0Collection0Work1Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution0/collection0/work1> .

<https://place-hold.it/600x600?text=Institution0Collection0Work1Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution0/collection0/work1> .

<https://place-hold.it/600x600?text=Institution0Collection0Work2Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution0/collection0/work2> .

<https://place-hold.it/600x600?text=Institution0Collection0Work2Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution0/collection0/work2> .

<https://place-hold.it/600x600?text=Institution0Collection0Work3Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution0/collection0/work3> .

<https://place-hold.it/600x600?text=Institution0Collection0Work3Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution0/collection0/work3> .

<https://place-hold.it/600x600?text=Institution0Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution0> .

<https://place-hold.it/600x600?text=Institution0Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution0> .

<https://place-hold.it/600x600?text=Institution0SharedWork0Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution0/shared/work0> .

<https://place-hold.it/600x600?text=Institution0SharedWork0Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution0/shared/work0> .

<https://place-hold.it/600x600?text=Institution0SharedWork1Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution0/shared/work1> .

<https://place-hold.it/600x600?text=Institution0SharedWork1Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution0/shared/work1> .

<https://place-hold.it/600x600?text=Institution0SharedWork2Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution0/shared/work2> .

<https://place-hold.it/600x600?text=Institution0SharedWork2Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution0/shared/work2> .

<https://place-hold.it/600x600?text=Institution0SharedWork3Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution0/shared/work3> .

<https://place-hold.it/600x600?text=Institution0SharedWork3Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution0/shared/work3> .

<https://place-hold.it/600x600?text=Institution1Collection0Work0Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution1/collection0/work0> .

<https://place-hold.it/600x600?text=Institution1Collection0Work0Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution1/collection0/work0> .

<https://place-hold.it/600x600?text=Institution1Collection0Work1Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution1/collection0/work1> .

<https://place-hold.it/600x600?text=Institution1Collection0Work1Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution1/collection0/work1> .

<https://place-hold.it/600x600?text=Institution1Collection0Work2Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution1/collection0/work2> .

<https://place-hold.it/600x600?text=Institution1Collection0Work2Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution1/collection0/work2> .

<https://place-hold.it/600x600?text=Institution1Collection0Work3Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution1/collection0/work3> .

<https://place-hold.it/600x600?text=Institution1Collection0Work3Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution1/collection0/work3> .

<https://place-hold.it/600x600?text=Institution1Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution1> .

<https://place-hold.it/600x600?text=Institution1Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution1> .

<https://place-hold.it/600x600?text=Institution1SharedWork0Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution1/shared/work0> .

<https://place-hold.it/600x600?text=Institution1SharedWork0Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution1/shared/work0> .

<https://place-hold.it/600x600?text=Institution1SharedWork1Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution1/shared/work1> .

<https://place-hold.it/600x600?text=Institution1SharedWork1Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution1/shared/work1> .

<https://place-hold.it/600x600?text=Institution1SharedWork2Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution1/shared/work2> .

<https://place-hold.it/600x600?text=Institution1SharedWork2Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution1/shared/work2> .

<https://place-hold.it/600x600?text=Institution1SharedWork3Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution1/shared/work3> .

<https://place-hold.it/600x600?text=Institution1SharedWork3Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <http://example.com/institution1/shared/work3> .

<https://place-hold.it/600x600?text=Language%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:20> .

<https://place-hold.it/600x600?text=Language%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:20> .

<https://place-hold.it/600x600?text=Language%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:21> .

<https://place-hold.it/600x600?text=Language%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:21> .

<https://place-hold.it/600x600?text=Language%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:22> .

<https://place-hold.it/600x600?text=Language%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:22> .

<https://place-hold.it/600x600?text=Language%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:23> .

<https://place-hold.it/600x600?text=Language%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:23> .

<https://place-hold.it/600x600?text=Language%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:24> .

<https://place-hold.it/600x600?text=Language%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:24> .

<https://place-hold.it/600x600?text=Language%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:25> .

<https://place-hold.it/600x600?text=Language%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:25> .

<https://place-hold.it/600x600?text=Language%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:26> .

<https://place-hold.it/600x600?text=Language%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:26> .

<https://place-hold.it/600x600?text=Language%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:27> .

<https://place-hold.it/600x600?text=Language%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:27> .

<https://place-hold.it/600x600?text=Language%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:28> .

<https://place-hold.it/600x600?text=Language%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:28> .

<https://place-hold.it/600x600?text=Language%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:29> .

<https://place-hold.it/600x600?text=Language%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:29> .

<https://place-hold.it/600x600?text=Material%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:30> .

<https://place-hold.it/600x600?text=Material%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:30> .

<https://place-hold.it/600x600?text=Material%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:31> .

<https://place-hold.it/600x600?text=Material%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:31> .

<https://place-hold.it/600x600?text=Material%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:32> .

<https://place-hold.it/600x600?text=Material%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:32> .

<https://place-hold.it/600x600?text=Material%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:33> .

<https://place-hold.it/600x600?text=Material%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:33> .

<https://place-hold.it/600x600?text=Material%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:34> .

<https://place-hold.it/600x600?text=Material%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:34> .

<https://place-hold.it/600x600?text=Material%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:35> .

<https://place-hold.it/600x600?text=Material%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:35> .

<https://place-hold.it/600x600?text=Material%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:36> .

<https://place-hold.it/600x600?text=Material%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:36> .

<https://place-hold.it/600x600?text=Material%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:37> .

<https://place-hold.it/600x600?text=Material%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:37> .

<https://place-hold.it/600x600?text=Material%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:38> .

<https://place-hold.it/600x600?text=Material%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:38> .

<https://place-hold.it/600x600?text=Material%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:39> .

<https://place-hold.it/600x600?text=Material%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:39> .

<https://place-hold.it/600x600?text=Medium%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:40> .

<https://place-hold.it/600x600?text=Medium%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:40> .

<https://place-hold.it/600x600?text=Medium%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:41> .

<https://place-hold.it/600x600?text=Medium%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:41> .

<https://place-hold.it/600x600?text=Medium%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:42> .

<https://place-hold.it/600x600?text=Medium%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:42> .

<https://place-hold.it/600x600?text=Medium%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:43> .

<https://place-hold.it/600x600?text=Medium%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:43> .

<https://place-hold.it/600x600?text=Medium%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:44> .

<https://place-hold.it/600x600?text=Medium%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:44> .

<https://place-hold.it/600x600?text=Medium%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:45> .

<https://place-hold.it/600x600?text=Medium%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:45> .

<https://place-hold.it/600x600?text=Medium%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:46> .

<https://place-hold.it/600x600?text=Medium%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:46> .

<https://place-hold.it/600x600?text=Medium%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:47> .

<https://place-hold.it/600x600?text=Medium%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:47> .

<https://place-hold.it/600x600?text=Medium%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:48> .

<https://place-hold.it/600x600?text=Medium%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:48> .

<https://place-hold.it/600x600?text=Medium%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:49> .

<https://place-hold.it/600x600?text=Medium%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:49> .

<https://place-hold.it/600x600?text=Publisher%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:50> .

<https://place-hold.it/600x600?text=Publisher%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:50> .

<https://place-hold.it/600x600?text=Publisher%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:51> .

<https://place-hold.it/600x600?text=Publisher%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:51> .

<https://place-hold.it/600x600?text=Publisher%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:52> .

<https://place-hold.it/600x600?text=Publisher%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:52> .

<https://place-hold.it/600x600?text=Publisher%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:53> .

<https://place-hold.it/600x600?text=Publisher%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:53> .

<https://place-hold.it/600x600?text=Publisher%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:54> .

<https://place-hold.it/600x600?text=Publisher%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:54> .

<https://place-hold.it/600x600?text=Publisher%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:55> .

<https://place-hold.it/600x600?text=Publisher%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:55> .

<https://place-hold.it/600x600?text=Publisher%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:56> .

<https://place-hold.it/600x600?text=Publisher%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:56> .

<https://place-hold.it/600x600?text=Publisher%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:57> .

<https://place-hold.it/600x600?text=Publisher%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:57> .

<https://place-hold.it/600x600?text=Publisher%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:58> .

<https://place-hold.it/600x600?text=Publisher%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:58> .

<https://place-hold.it/600x600?text=Publisher%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:59> .

<https://place-hold.it/600x600?text=Publisher%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:59> .

<https://place-hold.it/600x600?text=Source%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:60> .

<https://place-hold.it/600x600?text=Source%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:60> .

<https://place-hold.it/600x600?text=Source%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:61> .

<https://place-hold.it/600x600?text=Source%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:61> .

<https://place-hold.it/600x600?text=Source%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:62> .

<https://place-hold.it/600x600?text=Source%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:62> .

<https://place-hold.it/600x600?text=Source%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:63> .

<https://place-hold.it/600x600?text=Source%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:63> .

<https://place-hold.it/600x600?text=Source%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:64> .

<https://place-hold.it/600x600?text=Source%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:64> .

<https://place-hold.it/600x600?text=Source%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:65> .

<https://place-hold.it/600x600?text=Source%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:65> .

<https://place-hold.it/600x600?text=Source%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:66> .

<https://place-hold.it/600x600?text=Source%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:66> .

<https://place-hold.it/600x600?text=Source%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:67> .

<https://place-hold.it/600x600?text=Source%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:67> .

<https://place-hold.it/600x600?text=Source%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:68> .

<https://place-hold.it/600x600?text=Source%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:68> .

<https://place-hold.it/600x600?text=Source%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:69> .

<https://place-hold.it/600x600?text=Source%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:69> .

<https://place-hold.it/600x600?text=Spatial%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:70> .

<https://place-hold.it/600x600?text=Spatial%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:70> .

<https://place-hold.it/600x600?text=Spatial%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:71> .

<https://place-hold.it/600x600?text=Spatial%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:71> .

<https://place-hold.it/600x600?text=Spatial%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:72> .

<https://place-hold.it/600x600?text=Spatial%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:72> .

<https://place-hold.it/600x600?text=Spatial%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:73> .

<https://place-hold.it/600x600?text=Spatial%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:73> .

<https://place-hold.it/600x600?text=Spatial%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:74> .

<https://place-hold.it/600x600?text=Spatial%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:74> .

<https://place-hold.it/600x600?text=Spatial%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:75> .

<https://place-hold.it/600x600?text=Spatial%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:75> .

<https://place-hold.it/600x600?text=Spatial%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:76> .

<https://place-hold.it/600x600?text=Spatial%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:76> .

<https://place-hold.it/600x600?text=Spatial%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:77> .

<https://place-hold.it/600x600?text=Spatial%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:77> .

<https://place-hold.it/600x600?text=Spatial%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:78> .

<https://place-hold.it/600x600?text=Spatial%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:78> .

<https://place-hold.it/600x600?text=Spatial%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:79> .

<https://place-hold.it/600x600?text=Spatial%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:79> .

<https://place-hold.it/600x600?text=Subject%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:80> .

<https://place-hold.it/600x600?text=Subject%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:80> .

<https://place-hold.it/600x600?text=Subject%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:81> .

<https://place-hold.it/600x600?text=Subject%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:81> .

<https://place-hold.it/600x600?text=Subject%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:82> .

<https://place-hold.it/600x600?text=Subject%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:82> .

<https://place-hold.it/600x600?text=Subject%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:83> .

<https://place-hold.it/600x600?text=Subject%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:83> .

<https://place-hold.it/600x600?text=Subject%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:84> .

<https://place-hold.it/600x600?text=Subject%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:84> .

<https://place-hold.it/600x600?text=Subject%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:85> .

<https://place-hold.it/600x600?text=Subject%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:85> .

<https://place-hold.it/600x600?text=Subject%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:86> .

<https://place-hold.it/600x600?text=Subject%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:86> .

<https://place-hold.it/600x600?text=Subject%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:87> .

<https://place-hold.it/600x600?text=Subject%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:87> .

<https://place-hold.it/600x600?text=Subject%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:88> .

<https://place-hold.it/600x600?text=Subject%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:88> .

<https://place-hold.it/600x600?text=Subject%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:89> .

<https://place-hold.it/600x600?text=Subject%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:89> .

<https://place-hold.it/600x600?text=Technique%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:90> .

<https://place-hold.it/600x600?text=Technique%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:90> .

<https://place-hold.it/600x600?text=Technique%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:91> .

<https://place-hold.it/600x600?text=Technique%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:91> .

<https://place-hold.it/600x600?text=Technique%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:92> .

<https://place-hold.it/600x600?text=Technique%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:92> .

<https://place-hold.it/600x600?text=Technique%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:93> .

<https://place-hold.it/600x600?text=Technique%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:93> .

<https://place-hold.it/600x600?text=Technique%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:94> .

<https://place-hold.it/600x600?text=Technique%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:94> .

<https://place-hold.it/600x600?text=Technique%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:95> .

<https://place-hold.it/600x600?text=Technique%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:95> .

<https://place-hold.it/600x600?text=Technique%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:96> .

<https://place-hold.it/600x600?text=Technique%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:96> .

<https://place-hold.it/600x600?text=Technique%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:97> .

<https://place-hold.it/600x600?text=Technique%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:97> .

<https://place-hold.it/600x600?text=Technique%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:98> .

<https://place-hold.it/600x600?text=Technique%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:98> .

<https://place-hold.it/600x600?text=Technique%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:99> .

<https://place-hold.it/600x600?text=Technique%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:99> .

<https://place-hold.it/600x600?text=Temporal%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:100> .

<https://place-hold.it/600x600?text=Temporal%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:100> .

<https://place-hold.it/600x600?text=Temporal%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:101> .

<https://place-hold.it/600x600?text=Temporal%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:101> .

<https://place-hold.it/600x600?text=Temporal%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:102> .

<https://place-hold.it/600x600?text=Temporal%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:102> .

<https://place-hold.it/600x600?text=Temporal%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:103> .

<https://place-hold.it/600x600?text=Temporal%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:103> .

<https://place-hold.it/600x600?text=Temporal%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:104> .

<https://place-hold.it/600x600?text=Temporal%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:104> .

<https://place-hold.it/600x600?text=Temporal%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:105> .

<https://place-hold.it/600x600?text=Temporal%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:105> .

<https://place-hold.it/600x600?text=Temporal%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:106> .

<https://place-hold.it/600x600?text=Temporal%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:106> .

<https://place-hold.it/600x600?text=Temporal%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:107> .

<https://place-hold.it/600x600?text=Temporal%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:107> .

<https://place-hold.it/600x600?text=Temporal%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:108> .

<https://place-hold.it/600x600?text=Temporal%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:108> .

<https://place-hold.it/600x600?text=Temporal%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:109> .

<https://place-hold.it/600x600?text=Temporal%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:109> .

<https://place-hold.it/600x600?text=Type%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:110> .

<https://place-hold.it/600x600?text=Type%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:110> .

<https://place-hold.it/600x600?text=Type%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:111> .

<https://place-hold.it/600x600?text=Type%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:111> .

<https://place-hold.it/600x600?text=Type%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:112> .

<https://place-hold.it/600x600?text=Type%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:112> .

<https://place-hold.it/600x600?text=Type%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:113> .

<https://place-hold.it/600x600?text=Type%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:113> .

<https://place-hold.it/600x600?text=Type%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:114> .

<https://place-hold.it/600x600?text=Type%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:114> .

<https://place-hold.it/600x600?text=Type%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:115> .

<https://place-hold.it/600x600?text=Type%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:115> .

<https://place-hold.it/600x600?text=Type%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:116> .

<https://place-hold.it/600x600?text=Type%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:116> .

<https://place-hold.it/600x600?text=Type%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:117> .

<https://place-hold.it/600x600?text=Type%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:117> .

<https://place-hold.it/600x600?text=Type%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:118> .

<https://place-hold.it/600x600?text=Type%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:118> .

<https://place-hold.it/600x600?text=Type%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:119> .

<https://place-hold.it/600x600?text=Type%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 600 ;
    exif:width 600 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:119> .

<https://place-hold.it/75x75?text=Cultural%20context%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:0> .

<https://place-hold.it/75x75?text=Cultural%20context%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:0> .

<https://place-hold.it/75x75?text=Cultural%20context%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:1> .

<https://place-hold.it/75x75?text=Cultural%20context%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:1> .

<https://place-hold.it/75x75?text=Cultural%20context%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:2> .

<https://place-hold.it/75x75?text=Cultural%20context%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:2> .

<https://place-hold.it/75x75?text=Cultural%20context%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:3> .

<https://place-hold.it/75x75?text=Cultural%20context%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:3> .

<https://place-hold.it/75x75?text=Cultural%20context%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:4> .

<https://place-hold.it/75x75?text=Cultural%20context%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:4> .

<https://place-hold.it/75x75?text=Cultural%20context%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:5> .

<https://place-hold.it/75x75?text=Cultural%20context%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:5> .

<https://place-hold.it/75x75?text=Cultural%20context%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:6> .

<https://place-hold.it/75x75?text=Cultural%20context%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:6> .

<https://place-hold.it/75x75?text=Cultural%20context%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:7> .

<https://place-hold.it/75x75?text=Cultural%20context%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:7> .

<https://place-hold.it/75x75?text=Cultural%20context%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:8> .

<https://place-hold.it/75x75?text=Cultural%20context%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:8> .

<https://place-hold.it/75x75?text=Cultural%20context%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:9> .

<https://place-hold.it/75x75?text=Cultural%20context%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:9> .

<https://place-hold.it/75x75?text=Extent%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:10> .

<https://place-hold.it/75x75?text=Extent%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:10> .

<https://place-hold.it/75x75?text=Extent%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:11> .

<https://place-hold.it/75x75?text=Extent%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:11> .

<https://place-hold.it/75x75?text=Extent%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:12> .

<https://place-hold.it/75x75?text=Extent%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:12> .

<https://place-hold.it/75x75?text=Extent%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:13> .

<https://place-hold.it/75x75?text=Extent%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:13> .

<https://place-hold.it/75x75?text=Extent%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:14> .

<https://place-hold.it/75x75?text=Extent%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:14> .

<https://place-hold.it/75x75?text=Extent%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:15> .

<https://place-hold.it/75x75?text=Extent%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:15> .

<https://place-hold.it/75x75?text=Extent%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:16> .

<https://place-hold.it/75x75?text=Extent%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:16> .

<https://place-hold.it/75x75?text=Extent%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:17> .

<https://place-hold.it/75x75?text=Extent%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:17> .

<https://place-hold.it/75x75?text=Extent%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:18> .

<https://place-hold.it/75x75?text=Extent%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:18> .

<https://place-hold.it/75x75?text=Extent%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:19> .

<https://place-hold.it/75x75?text=Extent%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:19> .

<https://place-hold.it/75x75?text=Institution0Collection0Work0Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution0/collection0/work0> .

<https://place-hold.it/75x75?text=Institution0Collection0Work0Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution0/collection0/work0> .

<https://place-hold.it/75x75?text=Institution0Collection0Work1Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution0/collection0/work1> .

<https://place-hold.it/75x75?text=Institution0Collection0Work1Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution0/collection0/work1> .

<https://place-hold.it/75x75?text=Institution0Collection0Work2Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution0/collection0/work2> .

<https://place-hold.it/75x75?text=Institution0Collection0Work2Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution0/collection0/work2> .

<https://place-hold.it/75x75?text=Institution0Collection0Work3Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution0/collection0/work3> .

<https://place-hold.it/75x75?text=Institution0Collection0Work3Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution0/collection0/work3> .

<https://place-hold.it/75x75?text=Institution0Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution0> .

<https://place-hold.it/75x75?text=Institution0Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution0> .

<https://place-hold.it/75x75?text=Institution0SharedWork0Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution0/shared/work0> .

<https://place-hold.it/75x75?text=Institution0SharedWork0Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution0/shared/work0> .

<https://place-hold.it/75x75?text=Institution0SharedWork1Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution0/shared/work1> .

<https://place-hold.it/75x75?text=Institution0SharedWork1Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution0/shared/work1> .

<https://place-hold.it/75x75?text=Institution0SharedWork2Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution0/shared/work2> .

<https://place-hold.it/75x75?text=Institution0SharedWork2Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution0/shared/work2> .

<https://place-hold.it/75x75?text=Institution0SharedWork3Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution0/shared/work3> .

<https://place-hold.it/75x75?text=Institution0SharedWork3Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution0/shared/work3> .

<https://place-hold.it/75x75?text=Institution1Collection0Work0Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution1/collection0/work0> .

<https://place-hold.it/75x75?text=Institution1Collection0Work0Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution1/collection0/work0> .

<https://place-hold.it/75x75?text=Institution1Collection0Work1Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution1/collection0/work1> .

<https://place-hold.it/75x75?text=Institution1Collection0Work1Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution1/collection0/work1> .

<https://place-hold.it/75x75?text=Institution1Collection0Work2Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution1/collection0/work2> .

<https://place-hold.it/75x75?text=Institution1Collection0Work2Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution1/collection0/work2> .

<https://place-hold.it/75x75?text=Institution1Collection0Work3Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution1/collection0/work3> .

<https://place-hold.it/75x75?text=Institution1Collection0Work3Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution1/collection0/work3> .

<https://place-hold.it/75x75?text=Institution1Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution1> .

<https://place-hold.it/75x75?text=Institution1Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution1> .

<https://place-hold.it/75x75?text=Institution1SharedWork0Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution1/shared/work0> .

<https://place-hold.it/75x75?text=Institution1SharedWork0Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork0 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution1/shared/work0> .

<https://place-hold.it/75x75?text=Institution1SharedWork1Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution1/shared/work1> .

<https://place-hold.it/75x75?text=Institution1SharedWork1Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork1 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution1/shared/work1> .

<https://place-hold.it/75x75?text=Institution1SharedWork2Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution1/shared/work2> .

<https://place-hold.it/75x75?text=Institution1SharedWork2Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork2 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution1/shared/work2> .

<https://place-hold.it/75x75?text=Institution1SharedWork3Image0> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution1/shared/work3> .

<https://place-hold.it/75x75?text=Institution1SharedWork3Image1> a paradicms:Image ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork3 rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <http://example.com/institution1/shared/work3> .

<https://place-hold.it/75x75?text=Language%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:20> .

<https://place-hold.it/75x75?text=Language%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:20> .

<https://place-hold.it/75x75?text=Language%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:21> .

<https://place-hold.it/75x75?text=Language%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:21> .

<https://place-hold.it/75x75?text=Language%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:22> .

<https://place-hold.it/75x75?text=Language%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:22> .

<https://place-hold.it/75x75?text=Language%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:23> .

<https://place-hold.it/75x75?text=Language%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:23> .

<https://place-hold.it/75x75?text=Language%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:24> .

<https://place-hold.it/75x75?text=Language%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:24> .

<https://place-hold.it/75x75?text=Language%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:25> .

<https://place-hold.it/75x75?text=Language%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:25> .

<https://place-hold.it/75x75?text=Language%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:26> .

<https://place-hold.it/75x75?text=Language%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:26> .

<https://place-hold.it/75x75?text=Language%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:27> .

<https://place-hold.it/75x75?text=Language%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:27> .

<https://place-hold.it/75x75?text=Language%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:28> .

<https://place-hold.it/75x75?text=Language%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:28> .

<https://place-hold.it/75x75?text=Language%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:29> .

<https://place-hold.it/75x75?text=Language%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:29> .

<https://place-hold.it/75x75?text=Material%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:30> .

<https://place-hold.it/75x75?text=Material%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:30> .

<https://place-hold.it/75x75?text=Material%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:31> .

<https://place-hold.it/75x75?text=Material%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:31> .

<https://place-hold.it/75x75?text=Material%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:32> .

<https://place-hold.it/75x75?text=Material%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:32> .

<https://place-hold.it/75x75?text=Material%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:33> .

<https://place-hold.it/75x75?text=Material%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:33> .

<https://place-hold.it/75x75?text=Material%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:34> .

<https://place-hold.it/75x75?text=Material%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:34> .

<https://place-hold.it/75x75?text=Material%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:35> .

<https://place-hold.it/75x75?text=Material%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:35> .

<https://place-hold.it/75x75?text=Material%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:36> .

<https://place-hold.it/75x75?text=Material%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:36> .

<https://place-hold.it/75x75?text=Material%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:37> .

<https://place-hold.it/75x75?text=Material%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:37> .

<https://place-hold.it/75x75?text=Material%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:38> .

<https://place-hold.it/75x75?text=Material%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:38> .

<https://place-hold.it/75x75?text=Material%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:39> .

<https://place-hold.it/75x75?text=Material%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:39> .

<https://place-hold.it/75x75?text=Medium%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:40> .

<https://place-hold.it/75x75?text=Medium%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:40> .

<https://place-hold.it/75x75?text=Medium%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:41> .

<https://place-hold.it/75x75?text=Medium%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:41> .

<https://place-hold.it/75x75?text=Medium%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:42> .

<https://place-hold.it/75x75?text=Medium%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:42> .

<https://place-hold.it/75x75?text=Medium%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:43> .

<https://place-hold.it/75x75?text=Medium%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:43> .

<https://place-hold.it/75x75?text=Medium%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:44> .

<https://place-hold.it/75x75?text=Medium%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:44> .

<https://place-hold.it/75x75?text=Medium%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:45> .

<https://place-hold.it/75x75?text=Medium%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:45> .

<https://place-hold.it/75x75?text=Medium%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:46> .

<https://place-hold.it/75x75?text=Medium%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:46> .

<https://place-hold.it/75x75?text=Medium%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:47> .

<https://place-hold.it/75x75?text=Medium%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:47> .

<https://place-hold.it/75x75?text=Medium%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:48> .

<https://place-hold.it/75x75?text=Medium%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:48> .

<https://place-hold.it/75x75?text=Medium%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:49> .

<https://place-hold.it/75x75?text=Medium%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:49> .

<https://place-hold.it/75x75?text=Publisher%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:50> .

<https://place-hold.it/75x75?text=Publisher%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:50> .

<https://place-hold.it/75x75?text=Publisher%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:51> .

<https://place-hold.it/75x75?text=Publisher%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:51> .

<https://place-hold.it/75x75?text=Publisher%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:52> .

<https://place-hold.it/75x75?text=Publisher%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:52> .

<https://place-hold.it/75x75?text=Publisher%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:53> .

<https://place-hold.it/75x75?text=Publisher%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:53> .

<https://place-hold.it/75x75?text=Publisher%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:54> .

<https://place-hold.it/75x75?text=Publisher%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:54> .

<https://place-hold.it/75x75?text=Publisher%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:55> .

<https://place-hold.it/75x75?text=Publisher%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:55> .

<https://place-hold.it/75x75?text=Publisher%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:56> .

<https://place-hold.it/75x75?text=Publisher%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:56> .

<https://place-hold.it/75x75?text=Publisher%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:57> .

<https://place-hold.it/75x75?text=Publisher%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:57> .

<https://place-hold.it/75x75?text=Publisher%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:58> .

<https://place-hold.it/75x75?text=Publisher%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:58> .

<https://place-hold.it/75x75?text=Publisher%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:59> .

<https://place-hold.it/75x75?text=Publisher%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:59> .

<https://place-hold.it/75x75?text=Source%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:60> .

<https://place-hold.it/75x75?text=Source%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:60> .

<https://place-hold.it/75x75?text=Source%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:61> .

<https://place-hold.it/75x75?text=Source%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:61> .

<https://place-hold.it/75x75?text=Source%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:62> .

<https://place-hold.it/75x75?text=Source%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:62> .

<https://place-hold.it/75x75?text=Source%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:63> .

<https://place-hold.it/75x75?text=Source%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:63> .

<https://place-hold.it/75x75?text=Source%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:64> .

<https://place-hold.it/75x75?text=Source%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:64> .

<https://place-hold.it/75x75?text=Source%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:65> .

<https://place-hold.it/75x75?text=Source%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:65> .

<https://place-hold.it/75x75?text=Source%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:66> .

<https://place-hold.it/75x75?text=Source%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:66> .

<https://place-hold.it/75x75?text=Source%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:67> .

<https://place-hold.it/75x75?text=Source%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:67> .

<https://place-hold.it/75x75?text=Source%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:68> .

<https://place-hold.it/75x75?text=Source%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:68> .

<https://place-hold.it/75x75?text=Source%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:69> .

<https://place-hold.it/75x75?text=Source%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:69> .

<https://place-hold.it/75x75?text=Spatial%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:70> .

<https://place-hold.it/75x75?text=Spatial%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:70> .

<https://place-hold.it/75x75?text=Spatial%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:71> .

<https://place-hold.it/75x75?text=Spatial%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:71> .

<https://place-hold.it/75x75?text=Spatial%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:72> .

<https://place-hold.it/75x75?text=Spatial%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:72> .

<https://place-hold.it/75x75?text=Spatial%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:73> .

<https://place-hold.it/75x75?text=Spatial%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:73> .

<https://place-hold.it/75x75?text=Spatial%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:74> .

<https://place-hold.it/75x75?text=Spatial%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:74> .

<https://place-hold.it/75x75?text=Spatial%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:75> .

<https://place-hold.it/75x75?text=Spatial%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:75> .

<https://place-hold.it/75x75?text=Spatial%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:76> .

<https://place-hold.it/75x75?text=Spatial%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:76> .

<https://place-hold.it/75x75?text=Spatial%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:77> .

<https://place-hold.it/75x75?text=Spatial%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:77> .

<https://place-hold.it/75x75?text=Spatial%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:78> .

<https://place-hold.it/75x75?text=Spatial%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:78> .

<https://place-hold.it/75x75?text=Spatial%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:79> .

<https://place-hold.it/75x75?text=Spatial%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:79> .

<https://place-hold.it/75x75?text=Subject%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:80> .

<https://place-hold.it/75x75?text=Subject%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:80> .

<https://place-hold.it/75x75?text=Subject%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:81> .

<https://place-hold.it/75x75?text=Subject%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:81> .

<https://place-hold.it/75x75?text=Subject%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:82> .

<https://place-hold.it/75x75?text=Subject%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:82> .

<https://place-hold.it/75x75?text=Subject%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:83> .

<https://place-hold.it/75x75?text=Subject%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:83> .

<https://place-hold.it/75x75?text=Subject%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:84> .

<https://place-hold.it/75x75?text=Subject%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:84> .

<https://place-hold.it/75x75?text=Subject%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:85> .

<https://place-hold.it/75x75?text=Subject%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:85> .

<https://place-hold.it/75x75?text=Subject%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:86> .

<https://place-hold.it/75x75?text=Subject%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:86> .

<https://place-hold.it/75x75?text=Subject%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:87> .

<https://place-hold.it/75x75?text=Subject%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:87> .

<https://place-hold.it/75x75?text=Subject%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:88> .

<https://place-hold.it/75x75?text=Subject%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:88> .

<https://place-hold.it/75x75?text=Subject%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:89> .

<https://place-hold.it/75x75?text=Subject%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:89> .

<https://place-hold.it/75x75?text=Technique%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:90> .

<https://place-hold.it/75x75?text=Technique%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:90> .

<https://place-hold.it/75x75?text=Technique%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:91> .

<https://place-hold.it/75x75?text=Technique%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:91> .

<https://place-hold.it/75x75?text=Technique%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:92> .

<https://place-hold.it/75x75?text=Technique%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:92> .

<https://place-hold.it/75x75?text=Technique%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:93> .

<https://place-hold.it/75x75?text=Technique%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:93> .

<https://place-hold.it/75x75?text=Technique%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:94> .

<https://place-hold.it/75x75?text=Technique%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:94> .

<https://place-hold.it/75x75?text=Technique%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:95> .

<https://place-hold.it/75x75?text=Technique%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:95> .

<https://place-hold.it/75x75?text=Technique%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:96> .

<https://place-hold.it/75x75?text=Technique%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:96> .

<https://place-hold.it/75x75?text=Technique%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:97> .

<https://place-hold.it/75x75?text=Technique%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:97> .

<https://place-hold.it/75x75?text=Technique%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:98> .

<https://place-hold.it/75x75?text=Technique%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:98> .

<https://place-hold.it/75x75?text=Technique%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:99> .

<https://place-hold.it/75x75?text=Technique%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:99> .

<https://place-hold.it/75x75?text=Temporal%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:100> .

<https://place-hold.it/75x75?text=Temporal%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:100> .

<https://place-hold.it/75x75?text=Temporal%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:101> .

<https://place-hold.it/75x75?text=Temporal%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:101> .

<https://place-hold.it/75x75?text=Temporal%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:102> .

<https://place-hold.it/75x75?text=Temporal%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:102> .

<https://place-hold.it/75x75?text=Temporal%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:103> .

<https://place-hold.it/75x75?text=Temporal%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:103> .

<https://place-hold.it/75x75?text=Temporal%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:104> .

<https://place-hold.it/75x75?text=Temporal%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:104> .

<https://place-hold.it/75x75?text=Temporal%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:105> .

<https://place-hold.it/75x75?text=Temporal%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:105> .

<https://place-hold.it/75x75?text=Temporal%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:106> .

<https://place-hold.it/75x75?text=Temporal%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:106> .

<https://place-hold.it/75x75?text=Temporal%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:107> .

<https://place-hold.it/75x75?text=Temporal%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:107> .

<https://place-hold.it/75x75?text=Temporal%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:108> .

<https://place-hold.it/75x75?text=Temporal%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:108> .

<https://place-hold.it/75x75?text=Temporal%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:109> .

<https://place-hold.it/75x75?text=Temporal%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:109> .

<https://place-hold.it/75x75?text=Type%200Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:110> .

<https://place-hold.it/75x75?text=Type%200Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:110> .

<https://place-hold.it/75x75?text=Type%201Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:111> .

<https://place-hold.it/75x75?text=Type%201Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:111> .

<https://place-hold.it/75x75?text=Type%202Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:112> .

<https://place-hold.it/75x75?text=Type%202Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:112> .

<https://place-hold.it/75x75?text=Type%203Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:113> .

<https://place-hold.it/75x75?text=Type%203Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:113> .

<https://place-hold.it/75x75?text=Type%204Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:114> .

<https://place-hold.it/75x75?text=Type%204Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:114> .

<https://place-hold.it/75x75?text=Type%205Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:115> .

<https://place-hold.it/75x75?text=Type%205Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:115> .

<https://place-hold.it/75x75?text=Type%206Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:116> .

<https://place-hold.it/75x75?text=Type%206Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:116> .

<https://place-hold.it/75x75?text=Type%207Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:117> .

<https://place-hold.it/75x75?text=Type%207Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:117> .

<https://place-hold.it/75x75?text=Type%208Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:118> .

<https://place-hold.it/75x75?text=Type%208Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:118> .

<https://place-hold.it/75x75?text=Type%209Image0> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:119> .

<https://place-hold.it/75x75?text=Type%209Image1> a paradicms:Image ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Property definition rights holder" ;
    paradicms:imageCopyable true ;
    exif:height 75 ;
    exif:width 75 ;
    foaf:depicts <urn:paradicms_etl:pipeline:test_data:property_value:119> .

<http://example.com/institution0/collection0/work0> a paradicms:Work ;
    dcterms:abstract "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:alternative "Institution0Collection0Work0 alternative title 0",
        "Institution0Collection0Work0 alternative title 1" ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:date "2020-08-08",
        "2020-08-09" ;
    dcterms:description "Institution0Collection0Work0 description 0",
        "Institution0Collection0Work0 description 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:extent "Extent 0",
        "Extent 1" ;
    dcterms:identifier "Institution0Collection0Work0Id0",
        "Institution0Collection0Work0Id1" ;
    dcterms:language "Language 0",
        "Language 1" ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:medium "Medium 0",
        "Medium 1" ;
    dcterms:provenance "Institution0Collection0Work0 provenance 0",
        "Institution0Collection0Work0 provenance 1" ;
    dcterms:publisher "Publisher 0",
        "Publisher 1" ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work0 rights holder" ;
    dcterms:source "Source 0",
        "Source 1" ;
    dcterms:spatial "Spatial 0",
        "Spatial 1" ;
    dcterms:subject "Subject 0",
        "Subject 1" ;
    dcterms:temporal "Temporal 0",
        "Temporal 1" ;
    dcterms:title "Institution0Collection0Work0" ;
    dcterms:type "Type 0",
        "Type 1" ;
    vra:culturalContext "Cultural context 0",
        "Cultural context 1" ;
    vra:hasTechnique "Technique 0",
        "Technique 1" ;
    vra:material "Material 0",
        "Material 1" ;
    paradicms:collection <http://example.com/institution0/collection0> ;
    paradicms:institution <http://example.com/institution0> ;
    foaf:page <http://example.com/work/0> .

<http://example.com/institution0/collection0/work1> a paradicms:Work ;
    dcterms:abstract "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:alternative "Institution0Collection0Work1 alternative title 0",
        "Institution0Collection0Work1 alternative title 1" ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:date "2020-08-07",
        "2020-08-08" ;
    dcterms:description "Institution0Collection0Work1 description 0",
        "Institution0Collection0Work1 description 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:extent "Extent 1",
        "Extent 2" ;
    dcterms:identifier "Institution0Collection0Work1Id0",
        "Institution0Collection0Work1Id1" ;
    dcterms:language "Language 1",
        "Language 2" ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:medium "Medium 1",
        "Medium 2" ;
    dcterms:provenance "Institution0Collection0Work1 provenance 0",
        "Institution0Collection0Work1 provenance 1" ;
    dcterms:publisher "Publisher 1",
        "Publisher 2" ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work1 rights holder" ;
    dcterms:source "Source 1",
        "Source 2" ;
    dcterms:spatial "Spatial 1",
        "Spatial 2" ;
    dcterms:subject "Subject 1",
        "Subject 2" ;
    dcterms:temporal "Temporal 1",
        "Temporal 2" ;
    dcterms:title "Institution0Collection0Work1" ;
    dcterms:type "Type 1",
        "Type 2" ;
    vra:culturalContext "Cultural context 1",
        "Cultural context 2" ;
    vra:hasTechnique "Technique 1",
        "Technique 2" ;
    vra:material "Material 1",
        "Material 2" ;
    paradicms:collection <http://example.com/institution0/collection0> ;
    paradicms:institution <http://example.com/institution0> ;
    foaf:page "http://example.com/work/1" .

<http://example.com/institution0/collection0/work2> a paradicms:Work ;
    dcterms:abstract "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:alternative "Institution0Collection0Work2 alternative title 0",
        "Institution0Collection0Work2 alternative title 1" ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:date "2020-08-06",
        "2020-08-07" ;
    dcterms:description "Institution0Collection0Work2 description 0",
        "Institution0Collection0Work2 description 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:extent "Extent 2",
        "Extent 3" ;
    dcterms:identifier "Institution0Collection0Work2Id0",
        "Institution0Collection0Work2Id1" ;
    dcterms:language "Language 2",
        "Language 3" ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:medium "Medium 2",
        "Medium 3" ;
    dcterms:provenance "Institution0Collection0Work2 provenance 0",
        "Institution0Collection0Work2 provenance 1" ;
    dcterms:publisher "Publisher 2",
        "Publisher 3" ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work2 rights holder" ;
    dcterms:source "Source 2",
        "Source 3" ;
    dcterms:spatial "Spatial 2",
        "Spatial 3" ;
    dcterms:subject "Subject 2",
        "Subject 3" ;
    dcterms:temporal "Temporal 2",
        "Temporal 3" ;
    dcterms:title "Institution0Collection0Work2" ;
    dcterms:type "Type 2",
        "Type 3" ;
    vra:culturalContext "Cultural context 2",
        "Cultural context 3" ;
    vra:hasTechnique "Technique 2",
        "Technique 3" ;
    vra:material "Material 2",
        "Material 3" ;
    paradicms:collection <http://example.com/institution0/collection0> ;
    paradicms:institution <http://example.com/institution0> ;
    foaf:page <http://example.com/work/2> .

<http://example.com/institution0/collection0/work3> a paradicms:Work ;
    dcterms:abstract "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:alternative "Institution0Collection0Work3 alternative title 0",
        "Institution0Collection0Work3 alternative title 1" ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:date "2020-08-05",
        "2020-08-06" ;
    dcterms:description "Institution0Collection0Work3 description 0",
        "Institution0Collection0Work3 description 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:extent "Extent 3",
        "Extent 4" ;
    dcterms:identifier "Institution0Collection0Work3Id0",
        "Institution0Collection0Work3Id1" ;
    dcterms:language "Language 3",
        "Language 4" ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:medium "Medium 3",
        "Medium 4" ;
    dcterms:provenance "Institution0Collection0Work3 provenance 0",
        "Institution0Collection0Work3 provenance 1" ;
    dcterms:publisher "Publisher 3",
        "Publisher 4" ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0Collection0Work3 rights holder" ;
    dcterms:source "Source 3",
        "Source 4" ;
    dcterms:spatial "Spatial 3",
        "Spatial 4" ;
    dcterms:subject "Subject 3",
        "Subject 4" ;
    dcterms:temporal "Temporal 3",
        "Temporal 4" ;
    dcterms:title "Institution0Collection0Work3" ;
    dcterms:type "Type 3",
        "Type 4" ;
    vra:culturalContext "Cultural context 3",
        "Cultural context 4" ;
    vra:hasTechnique "Technique 3",
        "Technique 4" ;
    vra:material "Material 3",
        "Material 4" ;
    paradicms:collection <http://example.com/institution0/collection0> ;
    paradicms:institution <http://example.com/institution0> ;
    foaf:page "http://example.com/work/3" .

<http://example.com/institution0/shared/work0> a paradicms:Work ;
    dcterms:abstract "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:alternative "Institution0SharedWork0 alternative title 0",
        "Institution0SharedWork0 alternative title 1" ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:date "2020-08-08",
        "2020-08-09" ;
    dcterms:description "Institution0SharedWork0 description 0",
        "Institution0SharedWork0 description 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:extent "Extent 0",
        "Extent 1" ;
    dcterms:identifier "Institution0SharedWork0Id0",
        "Institution0SharedWork0Id1" ;
    dcterms:language "Language 0",
        "Language 1" ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:medium "Medium 0",
        "Medium 1" ;
    dcterms:provenance "Institution0SharedWork0 provenance 0",
        "Institution0SharedWork0 provenance 1" ;
    dcterms:publisher "Publisher 0",
        "Publisher 1" ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork0 rights holder" ;
    dcterms:source "Source 0",
        "Source 1" ;
    dcterms:spatial "Spatial 0",
        "Spatial 1" ;
    dcterms:subject "Subject 0",
        "Subject 1" ;
    dcterms:temporal "Temporal 0",
        "Temporal 1" ;
    dcterms:title "Institution0SharedWork0" ;
    dcterms:type "Type 0",
        "Type 1" ;
    vra:culturalContext "Cultural context 0",
        "Cultural context 1" ;
    vra:hasTechnique "Technique 0",
        "Technique 1" ;
    vra:material "Material 0",
        "Material 1" ;
    paradicms:collection <http://example.com/institution0/collection0> ;
    paradicms:institution <http://example.com/institution0> ;
    foaf:page <http://example.com/work/0> .

<http://example.com/institution0/shared/work1> a paradicms:Work ;
    dcterms:abstract "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:alternative "Institution0SharedWork1 alternative title 0",
        "Institution0SharedWork1 alternative title 1" ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:date "2020-08-07",
        "2020-08-08" ;
    dcterms:description "Institution0SharedWork1 description 0",
        "Institution0SharedWork1 description 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:extent "Extent 1",
        "Extent 2" ;
    dcterms:identifier "Institution0SharedWork1Id0",
        "Institution0SharedWork1Id1" ;
    dcterms:language "Language 1",
        "Language 2" ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:medium "Medium 1",
        "Medium 2" ;
    dcterms:provenance "Institution0SharedWork1 provenance 0",
        "Institution0SharedWork1 provenance 1" ;
    dcterms:publisher "Publisher 1",
        "Publisher 2" ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork1 rights holder" ;
    dcterms:source "Source 1",
        "Source 2" ;
    dcterms:spatial "Spatial 1",
        "Spatial 2" ;
    dcterms:subject "Subject 1",
        "Subject 2" ;
    dcterms:temporal "Temporal 1",
        "Temporal 2" ;
    dcterms:title "Institution0SharedWork1" ;
    dcterms:type "Type 1",
        "Type 2" ;
    vra:culturalContext "Cultural context 1",
        "Cultural context 2" ;
    vra:hasTechnique "Technique 1",
        "Technique 2" ;
    vra:material "Material 1",
        "Material 2" ;
    paradicms:collection <http://example.com/institution0/collection0> ;
    paradicms:institution <http://example.com/institution0> ;
    foaf:page "http://example.com/work/1" .

<http://example.com/institution0/shared/work2> a paradicms:Work ;
    dcterms:abstract "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:alternative "Institution0SharedWork2 alternative title 0",
        "Institution0SharedWork2 alternative title 1" ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:date "2020-08-06",
        "2020-08-07" ;
    dcterms:description "Institution0SharedWork2 description 0",
        "Institution0SharedWork2 description 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:extent "Extent 2",
        "Extent 3" ;
    dcterms:identifier "Institution0SharedWork2Id0",
        "Institution0SharedWork2Id1" ;
    dcterms:language "Language 2",
        "Language 3" ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:medium "Medium 2",
        "Medium 3" ;
    dcterms:provenance "Institution0SharedWork2 provenance 0",
        "Institution0SharedWork2 provenance 1" ;
    dcterms:publisher "Publisher 2",
        "Publisher 3" ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork2 rights holder" ;
    dcterms:source "Source 2",
        "Source 3" ;
    dcterms:spatial "Spatial 2",
        "Spatial 3" ;
    dcterms:subject "Subject 2",
        "Subject 3" ;
    dcterms:temporal "Temporal 2",
        "Temporal 3" ;
    dcterms:title "Institution0SharedWork2" ;
    dcterms:type "Type 2",
        "Type 3" ;
    vra:culturalContext "Cultural context 2",
        "Cultural context 3" ;
    vra:hasTechnique "Technique 2",
        "Technique 3" ;
    vra:material "Material 2",
        "Material 3" ;
    paradicms:collection <http://example.com/institution0/collection0> ;
    paradicms:institution <http://example.com/institution0> ;
    foaf:page <http://example.com/work/2> .

<http://example.com/institution0/shared/work3> a paradicms:Work ;
    dcterms:abstract "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:alternative "Institution0SharedWork3 alternative title 0",
        "Institution0SharedWork3 alternative title 1" ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:date "2020-08-05",
        "2020-08-06" ;
    dcterms:description "Institution0SharedWork3 description 0",
        "Institution0SharedWork3 description 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:extent "Extent 3",
        "Extent 4" ;
    dcterms:identifier "Institution0SharedWork3Id0",
        "Institution0SharedWork3Id1" ;
    dcterms:language "Language 3",
        "Language 4" ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:medium "Medium 3",
        "Medium 4" ;
    dcterms:provenance "Institution0SharedWork3 provenance 0",
        "Institution0SharedWork3 provenance 1" ;
    dcterms:publisher "Publisher 3",
        "Publisher 4" ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0SharedWork3 rights holder" ;
    dcterms:source "Source 3",
        "Source 4" ;
    dcterms:spatial "Spatial 3",
        "Spatial 4" ;
    dcterms:subject "Subject 3",
        "Subject 4" ;
    dcterms:temporal "Temporal 3",
        "Temporal 4" ;
    dcterms:title "Institution0SharedWork3" ;
    dcterms:type "Type 3",
        "Type 4" ;
    vra:culturalContext "Cultural context 3",
        "Cultural context 4" ;
    vra:hasTechnique "Technique 3",
        "Technique 4" ;
    vra:material "Material 3",
        "Material 4" ;
    paradicms:collection <http://example.com/institution0/collection0> ;
    paradicms:institution <http://example.com/institution0> ;
    foaf:page "http://example.com/work/3" .

<http://example.com/institution1/collection0/work0> a paradicms:Work ;
    dcterms:abstract "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:alternative "Institution1Collection0Work0 alternative title 0",
        "Institution1Collection0Work0 alternative title 1" ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:date "2020-08-08",
        "2020-08-09" ;
    dcterms:description "Institution1Collection0Work0 description 0",
        "Institution1Collection0Work0 description 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:extent "Extent 0",
        "Extent 1" ;
    dcterms:identifier "Institution1Collection0Work0Id0",
        "Institution1Collection0Work0Id1" ;
    dcterms:language "Language 0",
        "Language 1" ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:medium "Medium 0",
        "Medium 1" ;
    dcterms:provenance "Institution1Collection0Work0 provenance 0",
        "Institution1Collection0Work0 provenance 1" ;
    dcterms:publisher "Publisher 0",
        "Publisher 1" ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work0 rights holder" ;
    dcterms:source "Source 0",
        "Source 1" ;
    dcterms:spatial "Spatial 0",
        "Spatial 1" ;
    dcterms:subject "Subject 0",
        "Subject 1" ;
    dcterms:temporal "Temporal 0",
        "Temporal 1" ;
    dcterms:title "Institution1Collection0Work0" ;
    dcterms:type "Type 0",
        "Type 1" ;
    vra:culturalContext "Cultural context 0",
        "Cultural context 1" ;
    vra:hasTechnique "Technique 0",
        "Technique 1" ;
    vra:material "Material 0",
        "Material 1" ;
    paradicms:collection <http://example.com/institution1/collection0> ;
    paradicms:institution <http://example.com/institution1> ;
    foaf:page <http://example.com/work/0> .

<http://example.com/institution1/collection0/work1> a paradicms:Work ;
    dcterms:abstract "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:alternative "Institution1Collection0Work1 alternative title 0",
        "Institution1Collection0Work1 alternative title 1" ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:date "2020-08-07",
        "2020-08-08" ;
    dcterms:description "Institution1Collection0Work1 description 0",
        "Institution1Collection0Work1 description 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:extent "Extent 1",
        "Extent 2" ;
    dcterms:identifier "Institution1Collection0Work1Id0",
        "Institution1Collection0Work1Id1" ;
    dcterms:language "Language 1",
        "Language 2" ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:medium "Medium 1",
        "Medium 2" ;
    dcterms:provenance "Institution1Collection0Work1 provenance 0",
        "Institution1Collection0Work1 provenance 1" ;
    dcterms:publisher "Publisher 1",
        "Publisher 2" ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work1 rights holder" ;
    dcterms:source "Source 1",
        "Source 2" ;
    dcterms:spatial "Spatial 1",
        "Spatial 2" ;
    dcterms:subject "Subject 1",
        "Subject 2" ;
    dcterms:temporal "Temporal 1",
        "Temporal 2" ;
    dcterms:title "Institution1Collection0Work1" ;
    dcterms:type "Type 1",
        "Type 2" ;
    vra:culturalContext "Cultural context 1",
        "Cultural context 2" ;
    vra:hasTechnique "Technique 1",
        "Technique 2" ;
    vra:material "Material 1",
        "Material 2" ;
    paradicms:collection <http://example.com/institution1/collection0> ;
    paradicms:institution <http://example.com/institution1> ;
    foaf:page "http://example.com/work/1" .

<http://example.com/institution1/collection0/work2> a paradicms:Work ;
    dcterms:abstract "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:alternative "Institution1Collection0Work2 alternative title 0",
        "Institution1Collection0Work2 alternative title 1" ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:date "2020-08-06",
        "2020-08-07" ;
    dcterms:description "Institution1Collection0Work2 description 0",
        "Institution1Collection0Work2 description 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:extent "Extent 2",
        "Extent 3" ;
    dcterms:identifier "Institution1Collection0Work2Id0",
        "Institution1Collection0Work2Id1" ;
    dcterms:language "Language 2",
        "Language 3" ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:medium "Medium 2",
        "Medium 3" ;
    dcterms:provenance "Institution1Collection0Work2 provenance 0",
        "Institution1Collection0Work2 provenance 1" ;
    dcterms:publisher "Publisher 2",
        "Publisher 3" ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work2 rights holder" ;
    dcterms:source "Source 2",
        "Source 3" ;
    dcterms:spatial "Spatial 2",
        "Spatial 3" ;
    dcterms:subject "Subject 2",
        "Subject 3" ;
    dcterms:temporal "Temporal 2",
        "Temporal 3" ;
    dcterms:title "Institution1Collection0Work2" ;
    dcterms:type "Type 2",
        "Type 3" ;
    vra:culturalContext "Cultural context 2",
        "Cultural context 3" ;
    vra:hasTechnique "Technique 2",
        "Technique 3" ;
    vra:material "Material 2",
        "Material 3" ;
    paradicms:collection <http://example.com/institution1/collection0> ;
    paradicms:institution <http://example.com/institution1> ;
    foaf:page <http://example.com/work/2> .

<http://example.com/institution1/collection0/work3> a paradicms:Work ;
    dcterms:abstract "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:alternative "Institution1Collection0Work3 alternative title 0",
        "Institution1Collection0Work3 alternative title 1" ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:date "2020-08-05",
        "2020-08-06" ;
    dcterms:description "Institution1Collection0Work3 description 0",
        "Institution1Collection0Work3 description 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:extent "Extent 3",
        "Extent 4" ;
    dcterms:identifier "Institution1Collection0Work3Id0",
        "Institution1Collection0Work3Id1" ;
    dcterms:language "Language 3",
        "Language 4" ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:medium "Medium 3",
        "Medium 4" ;
    dcterms:provenance "Institution1Collection0Work3 provenance 0",
        "Institution1Collection0Work3 provenance 1" ;
    dcterms:publisher "Publisher 3",
        "Publisher 4" ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1Collection0Work3 rights holder" ;
    dcterms:source "Source 3",
        "Source 4" ;
    dcterms:spatial "Spatial 3",
        "Spatial 4" ;
    dcterms:subject "Subject 3",
        "Subject 4" ;
    dcterms:temporal "Temporal 3",
        "Temporal 4" ;
    dcterms:title "Institution1Collection0Work3" ;
    dcterms:type "Type 3",
        "Type 4" ;
    vra:culturalContext "Cultural context 3",
        "Cultural context 4" ;
    vra:hasTechnique "Technique 3",
        "Technique 4" ;
    vra:material "Material 3",
        "Material 4" ;
    paradicms:collection <http://example.com/institution1/collection0> ;
    paradicms:institution <http://example.com/institution1> ;
    foaf:page "http://example.com/work/3" .

<http://example.com/institution1/shared/work0> a paradicms:Work ;
    dcterms:abstract "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:alternative "Institution1SharedWork0 alternative title 0",
        "Institution1SharedWork0 alternative title 1" ;
    dcterms:creator <http://example.com/person0> ;
    dcterms:date "2020-08-08",
        "2020-08-09" ;
    dcterms:description "Institution1SharedWork0 description 0",
        "Institution1SharedWork0 description 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:extent "Extent 0",
        "Extent 1" ;
    dcterms:identifier "Institution1SharedWork0Id0",
        "Institution1SharedWork0Id1" ;
    dcterms:language "Language 0",
        "Language 1" ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:medium "Medium 0",
        "Medium 1" ;
    dcterms:provenance "Institution1SharedWork0 provenance 0",
        "Institution1SharedWork0 provenance 1" ;
    dcterms:publisher "Publisher 0",
        "Publisher 1" ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork0 rights holder" ;
    dcterms:source "Source 0",
        "Source 1" ;
    dcterms:spatial "Spatial 0",
        "Spatial 1" ;
    dcterms:subject "Subject 0",
        "Subject 1" ;
    dcterms:temporal "Temporal 0",
        "Temporal 1" ;
    dcterms:title "Institution1SharedWork0" ;
    dcterms:type "Type 0",
        "Type 1" ;
    vra:culturalContext "Cultural context 0",
        "Cultural context 1" ;
    vra:hasTechnique "Technique 0",
        "Technique 1" ;
    vra:material "Material 0",
        "Material 1" ;
    paradicms:collection <http://example.com/institution1/collection0> ;
    paradicms:institution <http://example.com/institution1> ;
    foaf:page <http://example.com/work/0> .

<http://example.com/institution1/shared/work1> a paradicms:Work ;
    dcterms:abstract "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:alternative "Institution1SharedWork1 alternative title 0",
        "Institution1SharedWork1 alternative title 1" ;
    dcterms:creator <http://example.com/person1> ;
    dcterms:date "2020-08-07",
        "2020-08-08" ;
    dcterms:description "Institution1SharedWork1 description 0",
        "Institution1SharedWork1 description 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:extent "Extent 1",
        "Extent 2" ;
    dcterms:identifier "Institution1SharedWork1Id0",
        "Institution1SharedWork1Id1" ;
    dcterms:language "Language 1",
        "Language 2" ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:medium "Medium 1",
        "Medium 2" ;
    dcterms:provenance "Institution1SharedWork1 provenance 0",
        "Institution1SharedWork1 provenance 1" ;
    dcterms:publisher "Publisher 1",
        "Publisher 2" ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork1 rights holder" ;
    dcterms:source "Source 1",
        "Source 2" ;
    dcterms:spatial "Spatial 1",
        "Spatial 2" ;
    dcterms:subject "Subject 1",
        "Subject 2" ;
    dcterms:temporal "Temporal 1",
        "Temporal 2" ;
    dcterms:title "Institution1SharedWork1" ;
    dcterms:type "Type 1",
        "Type 2" ;
    vra:culturalContext "Cultural context 1",
        "Cultural context 2" ;
    vra:hasTechnique "Technique 1",
        "Technique 2" ;
    vra:material "Material 1",
        "Material 2" ;
    paradicms:collection <http://example.com/institution1/collection0> ;
    paradicms:institution <http://example.com/institution1> ;
    foaf:page "http://example.com/work/1" .

<http://example.com/institution1/shared/work2> a paradicms:Work ;
    dcterms:abstract "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:alternative "Institution1SharedWork2 alternative title 0",
        "Institution1SharedWork2 alternative title 1" ;
    dcterms:creator <http://example.com/person2> ;
    dcterms:date "2020-08-06",
        "2020-08-07" ;
    dcterms:description "Institution1SharedWork2 description 0",
        "Institution1SharedWork2 description 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:extent "Extent 2",
        "Extent 3" ;
    dcterms:identifier "Institution1SharedWork2Id0",
        "Institution1SharedWork2Id1" ;
    dcterms:language "Language 2",
        "Language 3" ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:medium "Medium 2",
        "Medium 3" ;
    dcterms:provenance "Institution1SharedWork2 provenance 0",
        "Institution1SharedWork2 provenance 1" ;
    dcterms:publisher "Publisher 2",
        "Publisher 3" ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork2 rights holder" ;
    dcterms:source "Source 2",
        "Source 3" ;
    dcterms:spatial "Spatial 2",
        "Spatial 3" ;
    dcterms:subject "Subject 2",
        "Subject 3" ;
    dcterms:temporal "Temporal 2",
        "Temporal 3" ;
    dcterms:title "Institution1SharedWork2" ;
    dcterms:type "Type 2",
        "Type 3" ;
    vra:culturalContext "Cultural context 2",
        "Cultural context 3" ;
    vra:hasTechnique "Technique 2",
        "Technique 3" ;
    vra:material "Material 2",
        "Material 3" ;
    paradicms:collection <http://example.com/institution1/collection0> ;
    paradicms:institution <http://example.com/institution1> ;
    foaf:page <http://example.com/work/2> .

<http://example.com/institution1/shared/work3> a paradicms:Work ;
    dcterms:abstract "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:alternative "Institution1SharedWork3 alternative title 0",
        "Institution1SharedWork3 alternative title 1" ;
    dcterms:creator <http://example.com/person3> ;
    dcterms:date "2020-08-05",
        "2020-08-06" ;
    dcterms:description "Institution1SharedWork3 description 0",
        "Institution1SharedWork3 description 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
    dcterms:extent "Extent 3",
        "Extent 4" ;
    dcterms:identifier "Institution1SharedWork3Id0",
        "Institution1SharedWork3Id1" ;
    dcterms:language "Language 3",
        "Language 4" ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:medium "Medium 3",
        "Medium 4" ;
    dcterms:provenance "Institution1SharedWork3 provenance 0",
        "Institution1SharedWork3 provenance 1" ;
    dcterms:publisher "Publisher 3",
        "Publisher 4" ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1SharedWork3 rights holder" ;
    dcterms:source "Source 3",
        "Source 4" ;
    dcterms:spatial "Spatial 3",
        "Spatial 4" ;
    dcterms:subject "Subject 3",
        "Subject 4" ;
    dcterms:temporal "Temporal 3",
        "Temporal 4" ;
    dcterms:title "Institution1SharedWork3" ;
    dcterms:type "Type 3",
        "Type 4" ;
    vra:culturalContext "Cultural context 3",
        "Cultural context 4" ;
    vra:hasTechnique "Technique 3",
        "Technique 4" ;
    vra:material "Material 3",
        "Material 4" ;
    paradicms:collection <http://example.com/institution1/collection0> ;
    paradicms:institution <http://example.com/institution1> ;
    foaf:page "http://example.com/work/3" .

<urn:paradicms_etl:pipeline:test_data:property_value:0> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:culturalContext ;
    rdf:value "Cultural context 0" .

<urn:paradicms_etl:pipeline:test_data:property_value:1> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:culturalContext ;
    rdf:value "Cultural context 1" .

<urn:paradicms_etl:pipeline:test_data:property_value:10> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:extent ;
    rdf:value "Extent 0" .

<urn:paradicms_etl:pipeline:test_data:property_value:100> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:temporal ;
    rdf:value "Temporal 0" .

<urn:paradicms_etl:pipeline:test_data:property_value:101> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:temporal ;
    rdf:value "Temporal 1" .

<urn:paradicms_etl:pipeline:test_data:property_value:102> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:temporal ;
    rdf:value "Temporal 2" .

<urn:paradicms_etl:pipeline:test_data:property_value:103> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:temporal ;
    rdf:value "Temporal 3" .

<urn:paradicms_etl:pipeline:test_data:property_value:104> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:temporal ;
    rdf:value "Temporal 4" .

<urn:paradicms_etl:pipeline:test_data:property_value:105> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:temporal ;
    rdf:value "Temporal 5" .

<urn:paradicms_etl:pipeline:test_data:property_value:106> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:temporal ;
    rdf:value "Temporal 6" .

<urn:paradicms_etl:pipeline:test_data:property_value:107> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:temporal ;
    rdf:value "Temporal 7" .

<urn:paradicms_etl:pipeline:test_data:property_value:108> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:temporal ;
    rdf:value "Temporal 8" .

<urn:paradicms_etl:pipeline:test_data:property_value:109> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:temporal ;
    rdf:value "Temporal 9" .

<urn:paradicms_etl:pipeline:test_data:property_value:11> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:extent ;
    rdf:value "Extent 1" .

<urn:paradicms_etl:pipeline:test_data:property_value:110> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:type ;
    rdf:value "Type 0" .

<urn:paradicms_etl:pipeline:test_data:property_value:111> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:type ;
    rdf:value "Type 1" .

<urn:paradicms_etl:pipeline:test_data:property_value:112> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:type ;
    rdf:value "Type 2" .

<urn:paradicms_etl:pipeline:test_data:property_value:113> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:type ;
    rdf:value "Type 3" .

<urn:paradicms_etl:pipeline:test_data:property_value:114> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:type ;
    rdf:value "Type 4" .

<urn:paradicms_etl:pipeline:test_data:property_value:115> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:type ;
    rdf:value "Type 5" .

<urn:paradicms_etl:pipeline:test_data:property_value:116> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:type ;
    rdf:value "Type 6" .

<urn:paradicms_etl:pipeline:test_data:property_value:117> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:type ;
    rdf:value "Type 7" .

<urn:paradicms_etl:pipeline:test_data:property_value:118> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:type ;
    rdf:value "Type 8" .

<urn:paradicms_etl:pipeline:test_data:property_value:119> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:type ;
    rdf:value "Type 9" .

<urn:paradicms_etl:pipeline:test_data:property_value:12> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:extent ;
    rdf:value "Extent 2" .

<urn:paradicms_etl:pipeline:test_data:property_value:13> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:extent ;
    rdf:value "Extent 3" .

<urn:paradicms_etl:pipeline:test_data:property_value:14> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:extent ;
    rdf:value "Extent 4" .

<urn:paradicms_etl:pipeline:test_data:property_value:15> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:extent ;
    rdf:value "Extent 5" .

<urn:paradicms_etl:pipeline:test_data:property_value:16> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:extent ;
    rdf:value "Extent 6" .

<urn:paradicms_etl:pipeline:test_data:property_value:17> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:extent ;
    rdf:value "Extent 7" .

<urn:paradicms_etl:pipeline:test_data:property_value:18> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:extent ;
    rdf:value "Extent 8" .

<urn:paradicms_etl:pipeline:test_data:property_value:19> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:extent ;
    rdf:value "Extent 9" .

<urn:paradicms_etl:pipeline:test_data:property_value:2> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:culturalContext ;
    rdf:value "Cultural context 2" .

<urn:paradicms_etl:pipeline:test_data:property_value:20> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:language ;
    rdf:value "Language 0" .

<urn:paradicms_etl:pipeline:test_data:property_value:21> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:language ;
    rdf:value "Language 1" .

<urn:paradicms_etl:pipeline:test_data:property_value:22> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:language ;
    rdf:value "Language 2" .

<urn:paradicms_etl:pipeline:test_data:property_value:23> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:language ;
    rdf:value "Language 3" .

<urn:paradicms_etl:pipeline:test_data:property_value:24> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:language ;
    rdf:value "Language 4" .

<urn:paradicms_etl:pipeline:test_data:property_value:25> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:language ;
    rdf:value "Language 5" .

<urn:paradicms_etl:pipeline:test_data:property_value:26> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:language ;
    rdf:value "Language 6" .

<urn:paradicms_etl:pipeline:test_data:property_value:27> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:language ;
    rdf:value "Language 7" .

<urn:paradicms_etl:pipeline:test_data:property_value:28> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:language ;
    rdf:value "Language 8" .

<urn:paradicms_etl:pipeline:test_data:property_value:29> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:language ;
    rdf:value "Language 9" .

<urn:paradicms_etl:pipeline:test_data:property_value:3> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:culturalContext ;
    rdf:value "Cultural context 3" .

<urn:paradicms_etl:pipeline:test_data:property_value:30> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:material ;
    rdf:value "Material 0" .

<urn:paradicms_etl:pipeline:test_data:property_value:31> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:material ;
    rdf:value "Material 1" .

<urn:paradicms_etl:pipeline:test_data:property_value:32> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:material ;
    rdf:value "Material 2" .

<urn:paradicms_etl:pipeline:test_data:property_value:33> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:material ;
    rdf:value "Material 3" .

<urn:paradicms_etl:pipeline:test_data:property_value:34> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:material ;
    rdf:value "Material 4" .

<urn:paradicms_etl:pipeline:test_data:property_value:35> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:material ;
    rdf:value "Material 5" .

<urn:paradicms_etl:pipeline:test_data:property_value:36> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:material ;
    rdf:value "Material 6" .

<urn:paradicms_etl:pipeline:test_data:property_value:37> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:material ;
    rdf:value "Material 7" .

<urn:paradicms_etl:pipeline:test_data:property_value:38> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:material ;
    rdf:value "Material 8" .

<urn:paradicms_etl:pipeline:test_data:property_value:39> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:material ;
    rdf:value "Material 9" .

<urn:paradicms_etl:pipeline:test_data:property_value:4> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:culturalContext ;
    rdf:value "Cultural context 4" .

<urn:paradicms_etl:pipeline:test_data:property_value:40> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:medium ;
    rdf:value "Medium 0" .

<urn:paradicms_etl:pipeline:test_data:property_value:41> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:medium ;
    rdf:value "Medium 1" .

<urn:paradicms_etl:pipeline:test_data:property_value:42> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:medium ;
    rdf:value "Medium 2" .

<urn:paradicms_etl:pipeline:test_data:property_value:43> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:medium ;
    rdf:value "Medium 3" .

<urn:paradicms_etl:pipeline:test_data:property_value:44> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:medium ;
    rdf:value "Medium 4" .

<urn:paradicms_etl:pipeline:test_data:property_value:45> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:medium ;
    rdf:value "Medium 5" .

<urn:paradicms_etl:pipeline:test_data:property_value:46> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:medium ;
    rdf:value "Medium 6" .

<urn:paradicms_etl:pipeline:test_data:property_value:47> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:medium ;
    rdf:value "Medium 7" .

<urn:paradicms_etl:pipeline:test_data:property_value:48> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:medium ;
    rdf:value "Medium 8" .

<urn:paradicms_etl:pipeline:test_data:property_value:49> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:medium ;
    rdf:value "Medium 9" .

<urn:paradicms_etl:pipeline:test_data:property_value:5> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:culturalContext ;
    rdf:value "Cultural context 5" .

<urn:paradicms_etl:pipeline:test_data:property_value:50> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:publisher ;
    rdf:value "Publisher 0" .

<urn:paradicms_etl:pipeline:test_data:property_value:51> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:publisher ;
    rdf:value "Publisher 1" .

<urn:paradicms_etl:pipeline:test_data:property_value:52> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:publisher ;
    rdf:value "Publisher 2" .

<urn:paradicms_etl:pipeline:test_data:property_value:53> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:publisher ;
    rdf:value "Publisher 3" .

<urn:paradicms_etl:pipeline:test_data:property_value:54> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:publisher ;
    rdf:value "Publisher 4" .

<urn:paradicms_etl:pipeline:test_data:property_value:55> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:publisher ;
    rdf:value "Publisher 5" .

<urn:paradicms_etl:pipeline:test_data:property_value:56> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:publisher ;
    rdf:value "Publisher 6" .

<urn:paradicms_etl:pipeline:test_data:property_value:57> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:publisher ;
    rdf:value "Publisher 7" .

<urn:paradicms_etl:pipeline:test_data:property_value:58> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:publisher ;
    rdf:value "Publisher 8" .

<urn:paradicms_etl:pipeline:test_data:property_value:59> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:publisher ;
    rdf:value "Publisher 9" .

<urn:paradicms_etl:pipeline:test_data:property_value:6> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:culturalContext ;
    rdf:value "Cultural context 6" .

<urn:paradicms_etl:pipeline:test_data:property_value:60> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:source ;
    rdf:value "Source 0" .

<urn:paradicms_etl:pipeline:test_data:property_value:61> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:source ;
    rdf:value "Source 1" .

<urn:paradicms_etl:pipeline:test_data:property_value:62> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:source ;
    rdf:value "Source 2" .

<urn:paradicms_etl:pipeline:test_data:property_value:63> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:source ;
    rdf:value "Source 3" .

<urn:paradicms_etl:pipeline:test_data:property_value:64> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:source ;
    rdf:value "Source 4" .

<urn:paradicms_etl:pipeline:test_data:property_value:65> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:source ;
    rdf:value "Source 5" .

<urn:paradicms_etl:pipeline:test_data:property_value:66> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:source ;
    rdf:value "Source 6" .

<urn:paradicms_etl:pipeline:test_data:property_value:67> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:source ;
    rdf:value "Source 7" .

<urn:paradicms_etl:pipeline:test_data:property_value:68> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:source ;
    rdf:value "Source 8" .

<urn:paradicms_etl:pipeline:test_data:property_value:69> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:source ;
    rdf:value "Source 9" .

<urn:paradicms_etl:pipeline:test_data:property_value:7> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:culturalContext ;
    rdf:value "Cultural context 7" .

<urn:paradicms_etl:pipeline:test_data:property_value:70> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:spatial ;
    rdf:value "Spatial 0" .

<urn:paradicms_etl:pipeline:test_data:property_value:71> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:spatial ;
    rdf:value "Spatial 1" .

<urn:paradicms_etl:pipeline:test_data:property_value:72> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:spatial ;
    rdf:value "Spatial 2" .

<urn:paradicms_etl:pipeline:test_data:property_value:73> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:spatial ;
    rdf:value "Spatial 3" .

<urn:paradicms_etl:pipeline:test_data:property_value:74> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:spatial ;
    rdf:value "Spatial 4" .

<urn:paradicms_etl:pipeline:test_data:property_value:75> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:spatial ;
    rdf:value "Spatial 5" .

<urn:paradicms_etl:pipeline:test_data:property_value:76> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:spatial ;
    rdf:value "Spatial 6" .

<urn:paradicms_etl:pipeline:test_data:property_value:77> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:spatial ;
    rdf:value "Spatial 7" .

<urn:paradicms_etl:pipeline:test_data:property_value:78> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:spatial ;
    rdf:value "Spatial 8" .

<urn:paradicms_etl:pipeline:test_data:property_value:79> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:spatial ;
    rdf:value "Spatial 9" .

<urn:paradicms_etl:pipeline:test_data:property_value:8> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:culturalContext ;
    rdf:value "Cultural context 8" .

<urn:paradicms_etl:pipeline:test_data:property_value:80> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:subject ;
    rdf:value "Subject 0" .

<urn:paradicms_etl:pipeline:test_data:property_value:81> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:subject ;
    rdf:value "Subject 1" .

<urn:paradicms_etl:pipeline:test_data:property_value:82> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:subject ;
    rdf:value "Subject 2" .

<urn:paradicms_etl:pipeline:test_data:property_value:83> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:subject ;
    rdf:value "Subject 3" .

<urn:paradicms_etl:pipeline:test_data:property_value:84> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:subject ;
    rdf:value "Subject 4" .

<urn:paradicms_etl:pipeline:test_data:property_value:85> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:subject ;
    rdf:value "Subject 5" .

<urn:paradicms_etl:pipeline:test_data:property_value:86> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:subject ;
    rdf:value "Subject 6" .

<urn:paradicms_etl:pipeline:test_data:property_value:87> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:subject ;
    rdf:value "Subject 7" .

<urn:paradicms_etl:pipeline:test_data:property_value:88> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:subject ;
    rdf:value "Subject 8" .

<urn:paradicms_etl:pipeline:test_data:property_value:89> a paradicms:PropertyValueDefinition ;
    rdf:predicate dcterms:subject ;
    rdf:value "Subject 9" .

<urn:paradicms_etl:pipeline:test_data:property_value:9> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:culturalContext ;
    rdf:value "Cultural context 9" .

<urn:paradicms_etl:pipeline:test_data:property_value:90> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:hasTechnique ;
    rdf:value "Technique 0" .

<urn:paradicms_etl:pipeline:test_data:property_value:91> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:hasTechnique ;
    rdf:value "Technique 1" .

<urn:paradicms_etl:pipeline:test_data:property_value:92> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:hasTechnique ;
    rdf:value "Technique 2" .

<urn:paradicms_etl:pipeline:test_data:property_value:93> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:hasTechnique ;
    rdf:value "Technique 3" .

<urn:paradicms_etl:pipeline:test_data:property_value:94> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:hasTechnique ;
    rdf:value "Technique 4" .

<urn:paradicms_etl:pipeline:test_data:property_value:95> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:hasTechnique ;
    rdf:value "Technique 5" .

<urn:paradicms_etl:pipeline:test_data:property_value:96> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:hasTechnique ;
    rdf:value "Technique 6" .

<urn:paradicms_etl:pipeline:test_data:property_value:97> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:hasTechnique ;
    rdf:value "Technique 7" .

<urn:paradicms_etl:pipeline:test_data:property_value:98> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:hasTechnique ;
    rdf:value "Technique 8" .

<urn:paradicms_etl:pipeline:test_data:property_value:99> a paradicms:PropertyValueDefinition ;
    rdf:predicate vra:hasTechnique ;
    rdf:value "Technique 9" .

<http://example.com/institution0/collection0> a paradicms:Collection ;
    dcterms:title "Institution0Collection0" ;
    paradicms:institution <http://example.com/institution0> .

<http://example.com/institution1/collection0> a paradicms:Collection ;
    dcterms:title "Institution1Collection0" ;
    paradicms:institution <http://example.com/institution1> .

dcterms:extent a paradicms:PropertyDefinition ;
    rdfs:label "Extent" .

dcterms:language a paradicms:PropertyDefinition ;
    rdfs:label "Language" .

dcterms:medium a paradicms:PropertyDefinition ;
    rdfs:label "Medium" .

dcterms:publisher a paradicms:PropertyDefinition ;
    rdfs:label "Publisher" .

dcterms:source a paradicms:PropertyDefinition ;
    rdfs:label "Source" .

dcterms:spatial a paradicms:PropertyDefinition ;
    rdfs:label "Spatial coverage" .

dcterms:subject a paradicms:PropertyDefinition ;
    rdfs:label "Subject" .

dcterms:temporal a paradicms:PropertyDefinition ;
    rdfs:label "Temporal coverage" .

dcterms:type a paradicms:PropertyDefinition ;
    rdfs:label "Type" .

vra:culturalContext a paradicms:PropertyDefinition ;
    rdfs:label "Cultural context" .

vra:hasTechnique a paradicms:PropertyDefinition ;
    rdfs:label "Technique" .

vra:material a paradicms:PropertyDefinition ;
    rdfs:label "Material" .

<http://example.com/institution0> a paradicms:Institution ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution0 rights holder" ;
    foaf:name "Institution0" .

<http://example.com/institution1> a paradicms:Institution ;
    dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
    dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
    dcterms:rightsHolder "Institution1 rights holder" ;
    foaf:name "Institution1" .

<http://example.com/person0> a paradicms:Person ;
    contact:sortName "0, Person" ;
    foaf:familyName "0" ;
    foaf:givenName "Person" ;
    foaf:name "Person 0" .

<http://example.com/person1> a paradicms:Person ;
    contact:sortName "1, Person" ;
    foaf:familyName "1" ;
    foaf:givenName "Person" ;
    foaf:name "Person 1" .

<http://example.com/person2> a paradicms:Person ;
    contact:sortName "2, Person" ;
    foaf:familyName "2" ;
    foaf:givenName "Person" ;
    foaf:name "Person 2" .

<http://example.com/person3> a paradicms:Person ;
    contact:sortName "3, Person" ;
    foaf:familyName "3" ;
    foaf:givenName "Person" ;
    foaf:name "Person 3" .

<http://creativecommons.org/licenses/nc/1.0/> a creativecommons:License,
        paradicms:License ;
    creativecommons:deprecatedOn "2004-05-25"^^<http://www.w3.org/2001/XMLSchema-datatypes#date> ;
    creativecommons:legalcode <http://creativecommons.org/licenses/nc/1.0/legalcode> ;
    creativecommons:licenseClass <http://creativecommons.org/license/> ;
    creativecommons:permits creativecommons:DerivativeWorks,
        creativecommons:Distribution,
        creativecommons:Reproduction ;
    creativecommons:prohibits creativecommons:CommercialUse ;
    creativecommons:requires creativecommons:Notice ;
    dc:creator <http://creativecommons.org> ;
    dc:identifier "nc" ;
    dc:title "NonCommercial 1.0 Generic"@en ;
    dcterms:hasVersion "1.0" ;
    foaf:logo <http://i.creativecommons.org/l/nc/1.0/88x31.png> .

<http://rightsstatements.org/vocab/InC-EDU/1.0/> a paradicms:RightsStatement ;
    dcterms:description "This Rights Statement indicates that the Item labeled with this Rights Statement is in copyright but that educational use is allowed without the need to obtain additional permission."@en ;
    dcterms:identifier "InC-EDU" ;
    skos:definition """This Item is protected by copyright and/or related rights.

  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use. In addition, no permission is required from the rights-holder(s) for educational uses.

  For other uses, you need to obtain permission from the rights-holder(s)."""@en ;
    skos:note "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use."@en,
        "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available."@en,
        "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material."@en ;
    skos:prefLabel "In Copyright - Educational Use Permitted"@en ;
    skos:scopeNote "This Rights Statement can be used only for copyrighted Items for which the organization making the Item available is the rights-holder or has been explicitly authorized by the rights-holder(s) to allow third parties to use their Work(s) for educational purposes without first obtaining permission."@en .
`;
