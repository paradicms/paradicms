// Trying to Dataset.parse in the const declaration causes circular dependency issues
export const testDataTrig = `
@prefix cms: <http://www.paradicms.org/ns/cms#> .
@prefix contact: <http://www.w3.org/2000/10/swap/pim/contact#> .
@prefix creativecommons: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix exif: <http://www.w3.org/2003/12/exif/ns#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix ns1: <urn:paradicms_etl:pipeline:test_data:model:> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix vra: <http://purl.org/vra/> .
@prefix wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

ns1:2e61d81484533d5a9453de22efb0a93fb22a71bc8872ae6b889d1de6daac3925 {
    <https://place-hold.it/1000x1000?text=Type%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Type%200Image0> .

    <https://place-hold.it/75x75?text=Type%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:100> .
}

ns1:7688561d3d639f691d45c761b00aef1d40c2ca0be1bb87fdc9ba8839b366f06e {
    <https://place-hold.it/1000x1000?text=Source%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Source%200Image1> .

    <https://place-hold.it/600x600?text=Source%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:60> .
}

ns1:b9ba020d05c54799435e22e73fe462a46752e96cbf3ca66aa929a636e3604a2f {
    <https://place-hold.it/1000x1000?text=Subject%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%208Image0> .

    <https://place-hold.it/75x75?text=Subject%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:88> .
}

ns1:80219e050405ee290ce6fe643337cac2389d96f6497e518c542017bdbf56da46 {
    <https://place-hold.it/1000x1000?text=Language%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Language%204Image0> .

    <https://place-hold.it/75x75?text=Language%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:24> .
}

ns1:15d8eebfa990c5e1b271c2c06cee48428dca1f909f5a3b19ffb43fe1553ba5ee {
    <http://creativecommons.org/licenses/by-sa/4.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:f3e868ba3ccb3594c8694e7b5aae2725f625270a5326c0512ba8da5885628cf7 {
    <https://place-hold.it/1000x1000?text=Technique%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%205Image1> .

    <https://place-hold.it/600x600?text=Technique%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:95> .
}

ns1:609929d6340ef7099c9d94ec277ca61684dde388529158512fd813fd1a28f088 {
    <urn:paradicms_etl:pipeline:test_data:named_value:59> a cms:NamedValue ;
        dcterms:title "Named value 59" ;
        rdf:predicate dcterms:publisher ;
        rdf:value "Publisher 9" .
}

ns1:7efe56013098b6652898806a9e811dcaffe189c82a85589f6476fd04c71330f4 {
    <http://example.com/person1> a cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "1, Person" ;
        foaf:familyName "1" ;
        foaf:givenName "Person" ;
        foaf:name "Person 1" .
}

ns1:3f6b74dcae87cfaea646ab8a36ca487461868d535778d87fc8cc4043eb8e01bc {
    <http://creativecommons.org/licenses/by-nd/3.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:82478719e221461f2a04b67a5136d351a4c1e5d8fa9a9c6e561f057caaf99820 {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork4Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:creator <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork4 rights holder" ;
        dcterms:title "Institution0SharedWork4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution0/shared/work4> .
}

ns1:5a5ed1886613a1fedf91e24a247ebd21b7c92b959b19edcf2a020a3173046608 {
    <https://place-hold.it/1000x1000?text=Publisher%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%203Image0> .

    <https://place-hold.it/600x600?text=Publisher%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:53> .
}

ns1:ed274eed1d7c51ea398cb478a7aeb19406756b666c349118b9972a66a2420ae5 {
    <https://place-hold.it/1000x1000?text=Subject%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%206Image1> .

    <https://place-hold.it/600x600?text=Subject%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:86> .
}

ns1:4c60411a4787babe9adef5ad2a76b56e914f02c085cbe2059634523f8e1d3d2d {
    <https://place-hold.it/1000x1000?text=Technique%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%206Image1> .

    <https://place-hold.it/75x75?text=Technique%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:96> .
}

ns1:ee5f9ff5c799de0aae6a02d6212ecc90d1e6066a47fce135f9bea756d33c4bbe {
    <https://place-hold.it/1000x1000?text=Language%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Language%208Image0> .

    <https://place-hold.it/600x600?text=Language%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:28> .
}

ns1:28a2b48756d1d3243de8de523fba700eacb086f78e9f279092316d9485886ecb {
    <http://creativecommons.org/licenses/devnations/2.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:73c354c5ae54ea836b00863fc158b5037b68cf744753ad26cdad223e78500e6c {
    <https://place-hold.it/1000x1000?text=Source%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Source%209Image1> .

    <https://place-hold.it/600x600?text=Source%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:69> .
}

ns1:eb14469a11712e101e81fea35c81f6a9cc7f6aab8c7da9836ef19255cd9537a5 {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work2Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:creator <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work2 rights holder" ;
        dcterms:title "Institution0Collection0Work2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution0/collection0/work2> .
}

ns1:b72876b075c9f5392eaddd81f1118e794b64ed447282df14c2a2697bde5393b0 {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork4Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:creator <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork4 rights holder" ;
        dcterms:title "Institution0SharedWork4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution0/shared/work4> .
}

ns1:ae4bed13e04cb65d091ec24abcfd522f532c3ef638189f44b02bb06336913eb4 {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work11Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work11 rights holder" ;
        dcterms:title "Institution1Collection0Work11 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution1/collection0/work11> .
}

ns1:aa0e722c2f82d130732022d3782800da4215cf860b6fd09a9249c2369e2ad31e {
    <https://place-hold.it/1000x1000?text=Subject%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:84> .
}

ns1:35a63fb0074fa4f20a201c1927074e4074679cbe35861b8e9350c1c17711e3b6 {
    <urn:paradicms_etl:pipeline:test_data:named_value:62> a cms:NamedValue ;
        dcterms:title "Named value 62" ;
        rdf:predicate dcterms:source ;
        rdf:value "Source 2" .
}

ns1:873c0b675e3bd4977065cc7dfda0bec6e2aeba9086af950ffe0fc64214f30f8a {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work8Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Institution1Collection0Work8Image0> .

    <https://place-hold.it/75x75?text=Institution1Collection0Work8Image0> a cms:Image ;
        dcterms:contributor <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work8 rights holder" ;
        dcterms:title "Institution1Collection0Work8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution1/collection0/work8> .
}

ns1:30abb9454adae9fed9a22377b2cbbb24353341e3d2001378a51108c04834011f {
    <https://place-hold.it/1000x1000?text=Extent%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:15> .
}

ns1:0d375e167d56aa8749a83297b5cc02d5318bb3dd6f5a25149d921b2638c29afb {
    <https://place-hold.it/1000x1000?text=Cultural%20context%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:6> .
}

ns1:258c2cee97d4babe4782dc1a1632d4d5534d5a76ead0988842f41a95fc9312be {
    <https://place-hold.it/1000x1000?text=Cultural%20context%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%206Image1> .

    <https://place-hold.it/75x75?text=Cultural%20context%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:6> .
}

ns1:0683cddd948ac893747a1ebcb2c78ad0f3fad535ba06742822217fab8411dc72 {
    <https://place-hold.it/1000x1000?text=Language%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:24> .
}

ns1:9e58208e1b279abf48516c07e1949dd1267494cb3b5fe8c41418ac7044ef0df1 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%207Image0> .

    <https://place-hold.it/75x75?text=Cultural%20context%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:7> .
}

ns1:65b9a6f59f3b080667b00cc08a76e1ee0b91ca51b37e3982dc8bf140c0e6ff57 {
    <https://place-hold.it/1000x1000?text=Source%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Source%209Image0> .

    <https://place-hold.it/75x75?text=Source%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:69> .
}

ns1:e095a30d2f6f3ca3e5b4933968329090f37116237cccad96a552afc3fbc83028 {
    <https://place-hold.it/1000x1000?text=Type%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:108> .
}

ns1:ade7d73276fba847a99ffb31abc312ae235c176917a6310c5061fedfb6b11e31 {
    <https://place-hold.it/1000x1000?text=Medium%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%204Image0> .

    <https://place-hold.it/600x600?text=Medium%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:44> .
}

ns1:eee052fe317c83344eb1b5a82165216984f85c1d6c2b77350954dda3877434a0 {
    <urn:paradicms_etl:pipeline:test_data:named_value:7> a cms:NamedValue ;
        dcterms:title "Named value 7" ;
        rdf:predicate vra:culturalContext ;
        rdf:value "Cultural context 7" .
}

ns1:ce49a6e5baa38e8ad737401eb43a78c790ebd59069bb6639dc225cd20b9f91eb {
    <https://place-hold.it/1000x1000?text=Subject%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%209Image0> .

    <https://place-hold.it/75x75?text=Subject%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:89> .
}

ns1:27de095670602046c746df48bd23100201dbbcfd19bc3facd058d43eb2313061 {
    <urn:paradicms_etl:pipeline:test_data:named_value:27> a cms:NamedValue ;
        dcterms:title "Named value 27" ;
        rdf:predicate dcterms:language ;
        rdf:value "Language 7" .
}

ns1:e341a45111ffd2195f69f47c30b24ec46d96814b2a0c0b577344cce5f57c9a41 {
    <https://place-hold.it/1000x1000?text=Type%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Type%207Image0> .

    <https://place-hold.it/600x600?text=Type%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:107> .
}

ns1:268eeccc365d9a041a64147cf562db04f16e6494340ce1750f3254173dfa3e25 {
    <urn:paradicms_etl:pipeline:test_data:named_value:11> a cms:NamedValue ;
        dcterms:title "Named value 11" ;
        rdf:predicate dcterms:extent ;
        rdf:value "Extent 1" .
}

ns1:e72edd0831bc6872bd42441c8c2f702eabc98b374fb367efe1ca99fdbc5ca503 {
    <https://place-hold.it/1000x1000?text=Type%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Type%204Image1> .

    <https://place-hold.it/600x600?text=Type%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:104> .
}

ns1:73ee7d3e4028e98a09f0405aa404cb564e77a66f13753e143fcca84793851516 {
    <http://creativecommons.org/licenses/nd-nc/1.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:acb951bc0b684bb4c2476a0cb5f367ebc360805c7691e4e014f8124ddeba76d8 {
    <https://place-hold.it/1000x1000?text=Spatial%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%200Image0> .

    <https://place-hold.it/600x600?text=Spatial%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:70> .
}

ns1:dc536791a94e3711077c45d51f26cd7207f125f69f7749e5a796c138b24dd6d8 {
    <http://example.com/institution1/shared/work14Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Institution1SharedWork14 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:contributor <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:creator <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---15"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Institution1SharedWork14 creation" ;
        cms:work <http://example.com/institution1/shared/work14> .
}

ns1:edb1d6cdd606a445ad06dc3b052949d71e7429cd6b4f7345d589fb320f8aa299 {
    <https://place-hold.it/1000x1000?text=Technique%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:98> .
}

ns1:65c2cd0f271b03ad66df0ff078381fe31c56b9e6397a91bef98da80960f9c7cc {
    <http://example.com/institution0/collection0/work3Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:creator <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---04"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Institution0Collection0Work3 creation" ;
        cms:work <http://example.com/institution0/collection0/work3> .
}

ns1:13c85fe94d434af4a960fa711c0be064cfe269714d180ca79e6abd7360084244 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:7> .
}

ns1:68a25d45dcf264550027ca0d1d64f6b656cf2c68b50e871572880513a6c0ad3c {
    <https://place-hold.it/1000x1000?text=Language%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Language%209Image1> .

    <https://place-hold.it/600x600?text=Language%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:29> .
}

ns1:ed408e2cd808a754d2abbda4a6f86792843c131dcf7cff5e5c356616444380ef {
    <https://place-hold.it/1000x1000?text=Medium%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:48> .
}

ns1:1911760516366b0ee33c0364f09da1cc6b0c8eb45237bbd41775cc7272f4b129 {
    <urn:paradicms_etl:pipeline:test_data:named_value:51> a cms:NamedValue ;
        dcterms:title "Named value 51" ;
        rdf:predicate dcterms:publisher ;
        rdf:value "Publisher 1" .
}

ns1:05e944d54ed028a674d7560e923596ecc7871b369507ae3ed8c3f4b02d91c430 {
    <https://place-hold.it/1000x1000?text=Source%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Source%206Image0> .

    <https://place-hold.it/600x600?text=Source%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:66> .
}

ns1:09f950f9d752d9740b85d7342aaef9f22461d362a729b2b178eb82b792b36e59 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%208Image1> .

    <https://place-hold.it/600x600?text=Cultural%20context%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:8> .
}

ns1:0f8b4c7554d340007514c9e0bf02ee4700e7edf9fe2cc70e3396e3ae0cd7d675 {
    <https://place-hold.it/1000x1000?text=Extent%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%207Image1> .

    <https://place-hold.it/75x75?text=Extent%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:17> .
}

ns1:062b16cb264dde0ae06e672512bbacadb9997f8e169840e19a4a368fda3d28ac {
    <https://place-hold.it/1000x1000?text=Publisher%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%204Image1> .

    <https://place-hold.it/75x75?text=Publisher%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:54> .
}

ns1:603f833845fcde3d9341663b0544c6f961a5779a438f7f82e4e0cf38d8a6a944 {
    <https://place-hold.it/1000x1000?text=Language%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:20> .
}

ns1:abaf6689919091cbc57dfd234af3bc057144a4c49be88e0191daf634bbb1fb15 {
    <https://place-hold.it/1000x1000?text=Technique%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%201Image0> .

    <https://place-hold.it/75x75?text=Technique%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:91> .
}

ns1:383dd70e543187df11199de14f6257baa89d0925524ba1aba73fdeda21f2f85e {
    <https://place-hold.it/1000x1000?text=Language%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Language%209Image1> .

    <https://place-hold.it/75x75?text=Language%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:29> .
}

ns1:ec5cc6f428f427d276ed23a8c3292ae6e3369b9b34d3c541ca2aa0eecabef542 {
    <https://place-hold.it/1000x1000?text=Source%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Source%200Image0> .

    <https://place-hold.it/75x75?text=Source%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:60> .
}

ns1:c7d49e19cbce4de07aa8bc83be7a90da40f7a1e8a9d34c8c5b7a067b621f12bb {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork14Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Institution1SharedWork14Image1> .

    <https://place-hold.it/75x75?text=Institution1SharedWork14Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:creator <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork14 rights holder" ;
        dcterms:title "Institution1SharedWork14 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution1/shared/work14> .
}

ns1:9ed75e1c8f0ec7eda7ce6bdedff6631285d46c752d3261a205a3973ded00136d {
    <http://example.com/institution0/shared/work6Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Institution0SharedWork6 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:contributor <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:creator <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---07"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Institution0SharedWork6 creation" ;
        cms:work <http://example.com/institution0/shared/work6> .
}

ns1:b0ffa81475c6b2607bd3da9ad644bff6a43b9718956a6154e1e325e63d068bd8 {
    <https://place-hold.it/1000x1000?text=Technique%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:96> .
}

ns1:5a76db140de017bed203bcc14bcc7d8f21a96c384d2ac2c5f57908b23ac1646b {
    <https://place-hold.it/1000x1000?text=Publisher%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:54> .
}

ns1:8861c13aa4eacf27378584b543f224f61149e8f61ea2ee9c0eda2c8895f9a85f {
    <https://place-hold.it/1000x1000?text=Organization%201> a cms:Image ;
        dcterms:creator "Organization 1 image creator" ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Organization 1 image rights holder" ;
        dcterms:title "Organization 1 image" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/organization1> .
}

ns1:ebb4212509dc6375ead41b0db12ad16345a287e0f01a944de8fc971f19c8cec8 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%202Image1> .

    <https://place-hold.it/600x600?text=Cultural%20context%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:2> .
}

ns1:aba180839cfe63ad44d6da73030440762e4b757665ba67465ff1cbc312dbae11 {
    <https://place-hold.it/1000x1000?text=Spatial%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%209Image0> .

    <https://place-hold.it/600x600?text=Spatial%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:79> .
}

ns1:d1ef8e2d52f731531ae217432f71a02f5918bfe62f46bce4786449283f1461ed {
    <urn:paradicms_etl:pipeline:test_data:named_value:96> a cms:NamedValue ;
        dcterms:title "Named value 96" ;
        rdf:predicate vra:technique ;
        rdf:value "Technique 6" .
}

ns1:bbf9dfe668f37d98ad7ba73fed01d0bf7d7301fb38677ca43db6eb588d33b314 {
    <https://place-hold.it/1000x1000?text=Type%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Type%206Image0> .

    <https://place-hold.it/75x75?text=Type%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:106> .
}

ns1:c41c132168b7d8f85e7b121d8d8dc1eb8a706d20917f0e009ab76199a01f14da {
    <https://place-hold.it/1000x1000?text=Technique%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:99> .
}

ns1:ee29016063be3ad2881936069f567df41c4312cb4315756fcdff31b3abdde241 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:3> .
}

ns1:c87252b9e5955ab9914acc37ed922b88c9d0fefcf92dbbf3ed663013ef985562 {
    <https://place-hold.it/1000x1000?text=Institution1Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Institution1Image0> .

    <https://place-hold.it/75x75?text=Institution1Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1 rights holder" ;
        dcterms:title "Institution1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution1> .
}

ns1:d9eca655796cb82e2fcfe37fa7c9fb200009802ddfad7b8a336592568c192436 {
    <https://place-hold.it/1000x1000?text=Extent%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%208Image1> .

    <https://place-hold.it/600x600?text=Extent%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:18> .
}

ns1:97f509b782bd5d2f5f0f3cad00ea56bc4a8e31e31367db10c97f8e5e36699397 {
    <https://place-hold.it/1000x1000?text=Material%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Material%207Image0> .

    <https://place-hold.it/75x75?text=Material%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:37> .
}

ns1:2ea1703a4a82c289b37ac5f436d866aa7e262ba3d7632c9aef1308da0937fa1f {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork14Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Institution1SharedWork14Image0> .

    <https://place-hold.it/600x600?text=Institution1SharedWork14Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:creator <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork14 rights holder" ;
        dcterms:title "Institution1SharedWork14 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution1/shared/work14> .
}

ns1:ffa81edb4071fc452df305fd4aa77357132d7571db27b4b865e53cb61019d42b {
    <https://place-hold.it/1000x1000?text=Medium%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%200Image1> .

    <https://place-hold.it/600x600?text=Medium%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:40> .
}

ns1:5ab6a140062aca9a719cf25e6088d3b25ffd02aee3365604e34e2df73c10adca {
    <https://place-hold.it/1000x1000?text=Extent%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%203Image1> .

    <https://place-hold.it/75x75?text=Extent%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:13> .
}

ns1:5c84f9e292c61751901f8cf12e0afe3b06e2e7a84013a982e27a319021fcde28 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%200Image1> .

    <https://place-hold.it/75x75?text=Cultural%20context%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:0> .
}

ns1:bf9057ef9bf43699c3d74bf0699fd278828d96ed72c33998a701c51d407d3720 {
    <https://place-hold.it/1000x1000?text=Material%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:39> .
}

ns1:1c8c90b4d89720ae3e70457dedac59d68a2f3a6f6af1f1d3d504f127db9cf1ad {
    <https://place-hold.it/1000x1000?text=Extent%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%201Image1> .

    <https://place-hold.it/75x75?text=Extent%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:11> .
}

ns1:c1d21f55af0aa86a37e550581aafde27f2df1b567304e1447ed95078903c5e5d {
    <https://place-hold.it/1000x1000?text=Spatial%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%201Image0> .

    <https://place-hold.it/600x600?text=Spatial%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:71> .
}

ns1:bdbceb05aafa6817ad7d59112d2762a958be0f5e5754aab864a32d145952fbc2 {
    <https://place-hold.it/1000x1000?text=Subject%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%207Image0> .

    <https://place-hold.it/600x600?text=Subject%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:87> .
}

ns1:1c63c5ef458b7ba53812378f2d8c27887d443f517971a7ad5080f1f405c1353b {
    <https://place-hold.it/1000x1000?text=Publisher%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%206Image0> .

    <https://place-hold.it/75x75?text=Publisher%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:56> .
}

ns1:c055622341e1972825d2e9869ec5b5c8f715d688dd8aaa53cae8411f4683c8e4 {
    <https://place-hold.it/1000x1000?text=Technique%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%201Image1> .

    <https://place-hold.it/75x75?text=Technique%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:91> .
}

ns1:83e0a2c62e341cca67bae00a2339803fd7a6d5b9901185ae8301da6f84a82d31 {
    <https://place-hold.it/1000x1000?text=Technique%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%203Image0> .

    <https://place-hold.it/600x600?text=Technique%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:93> .
}

ns1:fb9c9d3af5a818e596365961a89ce129e38ee390b3b636a3c2f94ed935120598 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%209Image0> .

    <https://place-hold.it/75x75?text=Cultural%20context%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:9> .
}

ns1:723e027b40282fdf29b16192055c5fff9ec0a6ec15deec1b83b8ba5174ad7ebc {
    <https://place-hold.it/1000x1000?text=Language%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Language%209Image0> .

    <https://place-hold.it/600x600?text=Language%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:29> .
}

ns1:2612491c221da683ef63c70c255d71ac1b3376d1fce406e25cd9996723ebe971 {
    <http://example.com/person2> a cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "2, Person" ;
        foaf:familyName "2" ;
        foaf:givenName "Person" ;
        foaf:name "Person 2" ;
        foaf:page <http://example.com/person2page> .
}

ns1:76d58b75d9514aeaefbcd78dbb8c6efa611ad52adbd2e5e0b58f28d0c51853a5 {
    <https://place-hold.it/1000x1000?text=Source%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Source%200Image1> .

    <https://place-hold.it/75x75?text=Source%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:60> .
}

ns1:0b8671fa6fef8f046b1e11eb9f1948c53643264bd7c92b9c32db725003360241 {
    <http://example.com/institution1/collection0/work8Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Institution1Collection0Work8 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:contributor <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---09"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Institution1Collection0Work8 creation" ;
        cms:work <http://example.com/institution1/collection0/work8> .
}

ns1:75c74a6c40bc379650a854db544e4f3e12dd914226122baa2885618acd69ffce {
    <urn:paradicms_etl:pipeline:test_data:named_value:6> a cms:NamedValue ;
        dcterms:title "Named value 6" ;
        rdf:predicate vra:culturalContext ;
        rdf:value "Cultural context 6" .
}

ns1:22eb7c3fa851d68e01a0f3d88a198d644d6e62f40e6903a70097f7a27e257d55 {
    <https://place-hold.it/1000x1000?text=Source%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:65> .
}

ns1:ceb27b5a06760ce2e3bf28f3e65cf83779e1bd2f8a6abc391f2e02fbfc2c1dc1 {
    <urn:paradicms_etl:pipeline:test_data:named_value:19> a cms:NamedValue ;
        dcterms:title "Named value 19" ;
        rdf:predicate dcterms:extent ;
        rdf:value "Extent 9" .
}

ns1:666bb59274f77944b7051635c4ddca15299d9b80483798e3e2be6ab8e333e973 {
    <https://place-hold.it/1000x1000?text=Type%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Type%206Image0> .

    <https://place-hold.it/600x600?text=Type%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:106> .
}

ns1:049aa134e48501827bb5474295a728db515b7d766d8ac7f8af44d80422c3cd7e {
    <https://place-hold.it/1000x1000?text=Type%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Type%202Image0> .

    <https://place-hold.it/600x600?text=Type%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:102> .
}

ns1:fc832b33454ae54a351a56085c1bc6e877465b907c246d563cefce0b1353c356 {
    <https://place-hold.it/1000x1000?text=Language%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:29> .
}

ns1:89ddca8f7e8e4831fdd849517961cffa21425d8d2904c208f0293bda94e9b307 {
    <http://example.com/organization2> a cms:Organization ;
        foaf:name "Organization 2" ;
        foaf:page <http://example.com/organization2page> .
}

ns1:55058889e6a7c1f38a17a63cfa7da0ee117cbc81a2483fc9db48ff8403c957d4 {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork6Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Institution0SharedWork6Image0> .

    <https://place-hold.it/600x600?text=Institution0SharedWork6Image0> a cms:Image ;
        dcterms:contributor <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:creator <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork6 rights holder" ;
        dcterms:title "Institution0SharedWork6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution0/shared/work6> .
}

ns1:8422ec324d466012924645e5971227455d52a2b5ef34f5615ded0dadc56abcb6 {
    <https://place-hold.it/1000x1000?text=Medium%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:42> .
}

ns1:9735ab8006a08652be43e44dc241208fb538d236aa372dc27bf15de0b7481df9 {
    <urn:paradicms_etl:pipeline:test_data:named_value:41> a cms:NamedValue ;
        dcterms:title "Named value 41" ;
        rdf:predicate dcterms:medium ;
        rdf:value "Medium 1" .
}

ns1:e0b1a656f6f07d169c23caca9427bf657de0606832cd7705630b798bd2bbdcdb {
    <https://place-hold.it/1000x1000?text=Medium%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%205Image0> .

    <https://place-hold.it/600x600?text=Medium%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:45> .
}

ns1:9df788208d7af945fe34a2e3f402e3f0afc2bbf7739ed15694428ddb6b72a21b {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork12Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:creator <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork12 rights holder" ;
        dcterms:title "Institution1SharedWork12 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution1/shared/work12> .
}

ns1:5d38b0f14358aef92999b201c44322c1455bab5e9de5a780ee02a2a051401078 {
    <https://place-hold.it/1000x1000?text=Extent%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:17> .
}

ns1:84ee91ec9c866faf6f26839a7b759742805f50224e95ebb87aff1d166c44d3d2 {
    <http://example.com/institution0> a cms:Institution ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0 rights holder" ;
        foaf:name "Institution0" .
}

ns1:3c9c351700fa5af0a782ec5800bdf82eb75ce0aeb0c3198e0a8352f7b2ff30d3 {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work11Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Institution1Collection0Work11Image0> .

    <https://place-hold.it/600x600?text=Institution1Collection0Work11Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work11 rights holder" ;
        dcterms:title "Institution1Collection0Work11 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution1/collection0/work11> .
}

ns1:1a5df52e9717cad41e7aa260b996aa63a38452e5f4ac9af484ac53b3481907b4 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%208Image0> .

    <https://place-hold.it/75x75?text=Cultural%20context%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:8> .
}

ns1:3b9161a84b93307d6c8160180fc1e29ef6aa28b0585e8910fa0e94da7c13cf63 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%204Image0> .

    <https://place-hold.it/600x600?text=Cultural%20context%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:4> .
}

ns1:7c19cf0826901647dc696c774335c420ff05d6fc2fe08ee29038faf33a706144 {
    <https://place-hold.it/1000x1000?text=Extent%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%209Image0> .

    <https://place-hold.it/600x600?text=Extent%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:19> .
}

ns1:736ca44d1b737559f0bdbcd281e94623e00f3792fa85db5094f70f501fb6abcb {
    <https://place-hold.it/1000x1000?text=Material%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Material%200Image0> .

    <https://place-hold.it/600x600?text=Material%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:30> .
}

ns1:6f21921a9a67cf5e9961aa470f715cd65616fded917c02ae65cb8bb9c5ad4402 {
    <https://place-hold.it/1000x1000?text=Extent%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%201Image0> .

    <https://place-hold.it/600x600?text=Extent%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:11> .
}

ns1:d1ea7d38c1413b51ea33da37b8e176df0893486e9810309dbae9845653bc2abb {
    <https://place-hold.it/1000x1000?text=Material%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Material%205Image0> .

    <https://place-hold.it/75x75?text=Material%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:35> .
}

ns1:ce9ae90d7696e7b098fd49e763a1081a8c0cb63e59c2448dfb1b076cdf836c87 {
    <https://place-hold.it/1000x1000?text=Type%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:101> .
}

ns1:069691d1e94b8b94632e6e2405ce0f172982b1d50044b57c26e6dc10dd219c0e {
    <https://place-hold.it/1000x1000?text=Publisher%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%203Image0> .

    <https://place-hold.it/75x75?text=Publisher%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:53> .
}

ns1:25cc9f2eea7e7dda9d68cfc69b726d2551ee8d23af02e2fdfa781ad8c7c31aed {
    <https://place-hold.it/1000x1000?text=Subject%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:80> .
}

ns1:6628442a615d54b9e92dc5cd8adc38c2b86f3871bb5bd98f330ce1b754c20e3d {
    <https://place-hold.it/1000x1000?text=Spatial%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:71> .
}

ns1:f9ba32750c65b622e4ca49f627fed5a1b99885dc0511ceb332731e58ebdfc330 {
    <http://creativecommons.org/licenses/by/4.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:1857d53f536a7b18c78abf9b77e2a3b68363e81ece533a272155159bb62cb9ae {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work10Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Institution1Collection0Work10Image1> .

    <https://place-hold.it/600x600?text=Institution1Collection0Work10Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work10 rights holder" ;
        dcterms:title "Institution1Collection0Work10 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution1/collection0/work10> .
}

ns1:bc60f7bbea22cc20129f1c5272c6599385df65bfb44080693977648ec62967de {
    <https://place-hold.it/1000x1000?text=Source%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:68> .
}

ns1:baa52d7b05871daf1a4ae470c33f1b10fa4416d44edca7916233d61dab3c0d5b {
    <http://creativecommons.org/licenses/by-nc-sa/1.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:43ca705d887341ce3ab070bae577a352f207a5dc78b1f311c19cb585df6a9289 {
    <https://place-hold.it/1000x1000?text=Spatial%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:70> .
}

ns1:b6dd93b35e77e6519a2c9eef7fe5fcf06be0e4864256ce52153d78c5c0280d2d {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork12Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Institution1SharedWork12Image0> .

    <https://place-hold.it/600x600?text=Institution1SharedWork12Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:creator <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork12 rights holder" ;
        dcterms:title "Institution1SharedWork12 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution1/shared/work12> .
}

ns1:2bcbb323101c969c77994481382ec5a1dc98db929837a319432b3be34816acfe {
    <https://place-hold.it/1000x1000?text=Cultural%20context%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:3> .
}

ns1:84f7fd74415690bb198813661b5963940d6449f761a4dd1fb53c9cea83433d8c {
    <https://place-hold.it/1000x1000?text=Publisher%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%201Image0> .

    <https://place-hold.it/75x75?text=Publisher%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:51> .
}

ns1:17310b96b4f95bf4d3816e20d55ec40572266c63a8d6ec3f13f3087b5978602a {
    <https://place-hold.it/1000x1000?text=Language%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Language%205Image1> .

    <https://place-hold.it/75x75?text=Language%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:25> .
}

ns1:234fd03b740a0452dfc203069d0ad882b27b8f37a8d9663beff568838384cc82 {
    <https://place-hold.it/1000x1000?text=Material%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Material%208Image1> .

    <https://place-hold.it/75x75?text=Material%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:38> .
}

ns1:037d22971d2fceaf1f16139b7c22568ccea664fda7ad12d3d48ab5d96f4a7a9d {
    <https://place-hold.it/1000x1000?text=Material%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Material%209Image0> .

    <https://place-hold.it/600x600?text=Material%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:39> .
}

ns1:5e9e6084673a973b365b613b96b2e9d1425e1dc8a314c227022504f201e41f69 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%201Image1> .

    <https://place-hold.it/600x600?text=Cultural%20context%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:1> .
}

ns1:63b58c3f379b67f9e59a3a65a9c36307ef822b58fc4e02fd8a6c6de7eba847a5 {
    <https://place-hold.it/1000x1000?text=Publisher%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%202Image1> .

    <https://place-hold.it/75x75?text=Publisher%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:52> .
}

ns1:76ec54d8ed57ed4c41338908a59c3a9cb40f6776d58fc3119bfd61dd71da7a5f {
    <https://place-hold.it/1000x1000?text=Material%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:34> .
}

ns1:422ff0c5a03ee2ef37b9877f04784908c6bc0928d1b43823cde623ceac3ebe57 {
    <https://place-hold.it/1000x1000?text=Medium%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:47> .
}

ns1:86a8a510332d3d1df9d5f65e75e954638fa234a1f3d8633fea974f72eb875e6c {
    <https://place-hold.it/1000x1000?text=Language%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Language%204Image1> .

    <https://place-hold.it/600x600?text=Language%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:24> .
}

ns1:ee1802be125879b1c92f8e901e65258a57022ef6a80363146711722ccb9e39b5 {
    <https://place-hold.it/1000x1000?text=Source%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Source%203Image1> .

    <https://place-hold.it/75x75?text=Source%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:63> .
}

ns1:8bb8214e42a43dfc8430ba5d6fb7633306c23d82e91350905d0773a12542d311 {
    <https://place-hold.it/1000x1000?text=Source%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Source%209Image1> .

    <https://place-hold.it/75x75?text=Source%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:69> .
}

ns1:8ba651250b4d990894ff567e38878ec436ca31c7ad406c3a21f250d93de31815 {
    <https://place-hold.it/1000x1000?text=Subject%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%201Image1> .

    <https://place-hold.it/75x75?text=Subject%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:81> .
}

ns1:42506f30db01d482cc498b2736a8ac0ae9d74798987295116e5f29e628c1c71f {
    <https://place-hold.it/1000x1000?text=Subject%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%208Image1> .

    <https://place-hold.it/600x600?text=Subject%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:88> .
}

ns1:83c9e84f12014b4f30d7cf5e5e2a793c11ac03db7e3b2a6d06117c4e760bc442 {
    <http://example.com/institution1/collection0/work9Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---10"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Institution1Collection0Work9 creation" ;
        cms:work <http://example.com/institution1/collection0/work9> .
}

ns1:236bff90d80981abddd473efcc14331e5a2d3d766950a6e5222b42cf89dd9ee5 {
    <https://place-hold.it/1000x1000?text=Spatial%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%206Image0> .

    <https://place-hold.it/75x75?text=Spatial%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:76> .
}

ns1:92f858a0d8e3a8c0da81604b5481afff870f0f5b8992609af7ea3b68d45e7e58 {
    <http://creativecommons.org/licenses/by-sa/3.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:8efde997024432c9e343d3b80371b57bf3ed8075df16a72b874006feda6f97c1 {
    <http://example.com/institution1> a cms:Institution ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1 rights holder" ;
        foaf:name "Institution1" .
}

ns1:c679cce75961fb9b016fc92f5d0d620b6f7ed8828e413b630b6b8ff4f4c2b400 {
    <https://place-hold.it/1000x1000?text=Technique%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%209Image1> .

    <https://place-hold.it/600x600?text=Technique%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:99> .
}

ns1:50bde6b0d06fe592c5bcb1dc0c51229e825eaf81a527d52b73f8b3554545d9f3 {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork12Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Institution1SharedWork12Image1> .

    <https://place-hold.it/75x75?text=Institution1SharedWork12Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:creator <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork12 rights holder" ;
        dcterms:title "Institution1SharedWork12 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution1/shared/work12> .
}

ns1:1b40bb540d38ca30662eac5f9ba484b5e7acf161ef648a9a25a30cf3dbc3ac2e {
    <https://place-hold.it/1000x1000?text=Material%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:30> .
}

ns1:f8d6323cc946c8f0ee72b04756031752db41e6ba645ee68e5fa314f1060e1265 {
    <https://place-hold.it/1000x1000?text=Subject%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:83> .
}

ns1:82ea48f5c89f44648b76ad44dc57208576f85d08a84144fa777c20cec0c39f28 {
    <https://place-hold.it/1000x1000?text=Medium%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%208Image1> .

    <https://place-hold.it/75x75?text=Medium%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:48> .
}

ns1:864ae2564549d2a6ab8c8ad9cf19f90dbe6edb04c41e3f9f436e5b4474424ba9 {
    <https://place-hold.it/1000x1000?text=Publisher%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%203Image1> .

    <https://place-hold.it/75x75?text=Publisher%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:53> .
}

ns1:661b0b90609f60fcb8059e9c417be9bd349d95240e5906e3779de61768b9192f {
    <urn:paradicms_etl:pipeline:test_data:named_value:84> a cms:NamedValue ;
        dcterms:title "Named value 84" ;
        rdf:predicate dcterms:subject ;
        rdf:value "Subject 4" .
}

ns1:985ae090b3da176704cf7a972d790b996079519d619c6b20e14d8975f29590b7 {
    <https://place-hold.it/1000x1000?text=Subject%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%208Image1> .

    <https://place-hold.it/75x75?text=Subject%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:88> .
}

ns1:c6ed3512faaf6f8d9445df635cb0af0b31437b17736facef450c2ece6f905048 {
    <http://example.com/institution0/shared/work7Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---08"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Institution0SharedWork7 creation" ;
        cms:work <http://example.com/institution0/shared/work7> .
}

ns1:a974a0a4de835663d0494b516a02a7d825c720e6fc32392f806c880d3756d946 {
    <https://place-hold.it/1000x1000?text=Medium%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%201Image1> .

    <https://place-hold.it/600x600?text=Medium%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:41> .
}

ns1:13f747870af08fcaabe9b5299cfc9b35cab9363649ebf3594e5e45810eb74c49 {
    <https://place-hold.it/1000x1000?text=Extent%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%202Image1> .

    <https://place-hold.it/600x600?text=Extent%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:12> .
}

ns1:fdbfc0286073eab1c873dc51f744f4850ae587dbb4f59d213f9f766ca6b61e92 {
    <https://place-hold.it/1000x1000?text=Publisher%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%205Image1> .

    <https://place-hold.it/75x75?text=Publisher%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:55> .
}

ns1:6874eb9dd4f76a803211a5fd3b3cc922bc3bc4f06766671e36c2fa7e5822d6f8 {
    <https://place-hold.it/1000x1000?text=Source%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:65> .
}

ns1:caf395f98b967270025ae76b60adcd7beef4243e8e6132b01ec453088251d08d {
    <https://place-hold.it/1000x1000?text=Technique%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%201Image0> .

    <https://place-hold.it/600x600?text=Technique%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:91> .
}

ns1:019844f739bc36c6e72facfc1995d27883afc4709d1cebb804d0b3b9dabb7c3c {
    <https://place-hold.it/1000x1000?text=Type%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Type%203Image0> .

    <https://place-hold.it/600x600?text=Type%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:103> .
}

ns1:ee7145978c5476553bc0423886651007d8014a9fe5f6ab8628fd178cd078732f {
    <urn:paradicms_etl:pipeline:test_data:named_value:90> a cms:NamedValue ;
        dcterms:title "Named value 90" ;
        rdf:predicate vra:technique ;
        rdf:value "Technique 0" .
}

ns1:792637377fdd44f3565fd7d577f2da2adf0b09c9a5cc958f909cb1c2ce4f95a8 {
    <https://place-hold.it/1000x1000?text=Technique%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:93> .
}

ns1:d70904d8d14484b2f5d16a59691ecd50bd912ae99fae8fd1adafe1c88776fd08 {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork13Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Institution1SharedWork13Image1> .

    <https://place-hold.it/600x600?text=Institution1SharedWork13Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:creator <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork13 rights holder" ;
        dcterms:title "Institution1SharedWork13 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution1/shared/work13> .
}

ns1:f3217d2f9c7296ff0c3e9b13103ef99cf8437c7b8daba66eccd3707473fb9585 {
    <https://place-hold.it/1000x1000?text=Extent%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:18> .
}

ns1:a175f530583c200380280c86f66b62374220ee20285490d620bcc338fc9af71b {
    <https://place-hold.it/1000x1000?text=Technique%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:92> .
}

ns1:618dcc35bfddf2fc40257195f6cbc36c96c8e888a82ba302b778783ee6a1274f {
    <urn:paradicms_etl:pipeline:test_data:named_value:35> a cms:NamedValue ;
        dcterms:title "Named value 35" ;
        rdf:predicate vra:material ;
        rdf:value "Material 5" .
}

ns1:b159149c016c7df1c9512c9ebbe0d64bfda2dd6ab41736faf309fa5d0d931152 {
    <https://place-hold.it/1000x1000?text=Publisher%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:58> .
}

ns1:247adb8076559a45af176a86d83c917600c18c45da6b9b9b47b7376c2cb69e67 {
    <https://place-hold.it/1000x1000?text=Medium%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:46> .
}

ns1:f6e937b4a7bf52d4761cef9269475f4c265256d6de9fdf7b2fdb455f75dba4f0 {
    <https://place-hold.it/1000x1000?text=Type%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:104> .
}

ns1:f0b38afadf3557714df68e0caf4185dbe32207cff64c52bfcd06434d7100d5c0 {
    <https://place-hold.it/1000x1000?text=Extent%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:16> .
}

ns1:7ad32ae267eec1b57cb47c619a34b99b7d005665c032ebcbf52bd9822cbf8331 {
    <https://place-hold.it/1000x1000?text=Subject%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:88> .
}

ns1:a38acd312d3e1857d672499f34e05426b011a9636c78bbd4e336f9f5418b4cc0 {
    <urn:paradicms_etl:pipeline:test_data:named_value:32> a cms:NamedValue ;
        dcterms:title "Named value 32" ;
        rdf:predicate vra:material ;
        rdf:value "Material 2" .
}

ns1:634b83a8b502f8ae6d5d5278be42b33311fdcd698e594e4b036e3222d7c95bf1 {
    <https://place-hold.it/1000x1000?text=Language%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:26> .
}

ns1:f5912f4e9f6c5279453c84a45b31adc55f0f5ff65f02b41011cb52f5a3501421 {
    <https://place-hold.it/1000x1000?text=Subject%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:89> .
}

ns1:3339da2225986a871cbc4bdeadf9946a4ed086658e076689598ad391c2b7b38a {
    <https://place-hold.it/1000x1000?text=Technique%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%204Image1> .

    <https://place-hold.it/600x600?text=Technique%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:94> .
}

ns1:f4c5f4b669850761436eca404f04aac0b841f9a8e5c73573c1d27f1f03f5f54d {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work9Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Institution1Collection0Work9Image1> .

    <https://place-hold.it/75x75?text=Institution1Collection0Work9Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work9 rights holder" ;
        dcterms:title "Institution1Collection0Work9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution1/collection0/work9> .
}

ns1:ab252db506369348a795bee87083d4f11a1d0424f0533efa8a7c34c8301ce5c9 {
    <https://place-hold.it/1000x1000?text=Type%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Type%209Image0> .

    <https://place-hold.it/600x600?text=Type%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:109> .
}

ns1:12612d75244f85ed63de828948262f5ebe14c822eb3bbc317f123885c5ccaa09 {
    <http://rightsstatements.org/vocab/InC-EDU/1.0/> a cms:RightsStatement ;
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
}

ns1:bf21ef59ee20f682b8a65e391787438e988ba12fcd9f3ac6c429527bd4b37264 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%207Image1> .

    <https://place-hold.it/600x600?text=Cultural%20context%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:7> .
}

ns1:452f7ed4cbd5c604632cd33b97f6d59a9d1e8e1639088a2856045327f8ecacfd {
    <https://place-hold.it/1000x1000?text=Medium%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%203Image1> .

    <https://place-hold.it/600x600?text=Medium%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:43> .
}

ns1:d26761df6955a0be9da9252982af7a154a6a25869196581687a0dd1b3d045e2e {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork5Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Institution0SharedWork5Image0> .

    <https://place-hold.it/75x75?text=Institution0SharedWork5Image0> a cms:Image ;
        dcterms:contributor <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:creator <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork5 rights holder" ;
        dcterms:title "Institution0SharedWork5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution0/shared/work5> .
}

ns1:43c14ad4e2aa3fa2c719dd5f0e9f3acc7e3dbcd5525db925e93f08f716ec0419 {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work0Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Institution0Collection0Work0Image1> .

    <https://place-hold.it/600x600?text=Institution0Collection0Work0Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work0 rights holder" ;
        dcterms:title "Institution0Collection0Work0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution0/collection0/work0> .
}

ns1:0d30e0cc9145070cd171ac06334cbb53c5f018605515a184a7399b3998df1cbd {
    <https://place-hold.it/1000x1000?text=Type%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Type%207Image1> .

    <https://place-hold.it/75x75?text=Type%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:107> .
}

ns1:b7a9661310f98b14b7fd4d29e89a7fce94f0a68ed6f542b5211a9315ae354e39 {
    <https://place-hold.it/1000x1000?text=Language%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Language%203Image0> .

    <https://place-hold.it/600x600?text=Language%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:23> .
}

ns1:19175c4713f2de4783595acdc8d17945b30968c7d30722be81597851be723321 {
    <https://place-hold.it/1000x1000?text=Publisher%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:50> .
}

ns1:636658a56bad10abed57e5d965e48352abe0e38fb06621dc044b4cf2de56bb3f {
    <https://place-hold.it/1000x1000?text=Material%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Material%209Image1> .

    <https://place-hold.it/75x75?text=Material%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:39> .
}

ns1:c3bb706c788913def486244e9f1fe08d1a5a326053f545362ee41690744d91f0 {
    <https://place-hold.it/1000x1000?text=Subject%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:88> .
}

ns1:2ef76902bc581f99ca763da6557ff843fe0d657ae51d3fa2e07a40b06634f02b {
    <http://example.com/person4> a cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "4, Person" ;
        foaf:familyName "4" ;
        foaf:givenName "Person" ;
        foaf:name "Person 4" ;
        foaf:page <http://example.com/person4page> .
}

ns1:61f91501b344ffb5ef40d1232481eb8e8d709b63b6aeeca350f2c6bbbd28372e {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work9Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Institution1Collection0Work9Image1> .

    <https://place-hold.it/600x600?text=Institution1Collection0Work9Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work9 rights holder" ;
        dcterms:title "Institution1Collection0Work9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution1/collection0/work9> .
}

ns1:c381732c16473f41343361a4a788e8c4a93460ebf912c94995f279bf9db0d4ec {
    <https://place-hold.it/1000x1000?text=Extent%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:19> .
}

ns1:a9476ce327db8bb76f3f23bc4722d9f044b93d2d1318694017c423ee99a39207 {
    <https://place-hold.it/1000x1000?text=Medium%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:43> .
}

ns1:3be5f6746b7bd9c4130fd29c5632ee65e4e67e020af54d02c7e6b37036622571 {
    <https://place-hold.it/1000x1000?text=Publisher%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%209Image0> .

    <https://place-hold.it/600x600?text=Publisher%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:59> .
}

ns1:a9a1a2a4ff751e8a35453626e9eb61c139e8d4f4de76e8f9f2153cde75ef6f2d {
    <https://place-hold.it/1000x1000?text=Publisher%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%200Image0> .

    <https://place-hold.it/600x600?text=Publisher%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:50> .
}

ns1:64342433cd914a3c023bea3d12aad736adc53c8b8a990136311968889bf38938 {
    <urn:paradicms_etl:pipeline:test_data:named_value:100> a cms:NamedValue ;
        dcterms:title "Named value 100" ;
        rdf:predicate dcterms:type ;
        rdf:value "Type 0" .
}

ns1:17967568bae5ec4b2d601c882e37367c96de37609946712bdf7aa2602682091f {
    <https://place-hold.it/1000x1000?text=Extent%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%208Image0> .

    <https://place-hold.it/600x600?text=Extent%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:18> .
}

ns1:c4493473684dbd6fb5ed61ecc63bb7fa11a08b2dc50a666f02c74e0d125fff15 {
    <https://place-hold.it/1000x1000?text=Organization%202> a cms:Image ;
        dcterms:creator "Organization 2 image creator" ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Organization 2 image rights holder" ;
        dcterms:title "Organization 2 image" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/organization2> .
}

ns1:2b6a1021267f4df8efb092e002841aba4a728acf2cf24aca3d8f4c8209081fe7 {
    <https://place-hold.it/1000x1000?text=Extent%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%203Image0> .

    <https://place-hold.it/75x75?text=Extent%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:13> .
}

ns1:3d78589460b8c590b59611402899e9e9a3c8eaaed1d648d8e3a1f05efd199852 {
    <https://place-hold.it/1000x1000?text=Source%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:67> .
}

ns1:d22619a79d59bfe51fbfcc365ffb2ceafc11948041cf19196d3537d509a22b97 {
    <https://place-hold.it/1000x1000?text=Extent%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%207Image0> .

    <https://place-hold.it/600x600?text=Extent%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:17> .
}

ns1:7bc89e4b841a4f37fc29cfd342129effe309f35b622e507c74d819dd8d8aa3a2 {
    <https://place-hold.it/1000x1000?text=Spatial%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%208Image0> .

    <https://place-hold.it/600x600?text=Spatial%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:78> .
}

ns1:02a5fa7d9c39be9b5da56a8f31e044680fb47815a84cf4094b479895be8828d4 {
    <https://place-hold.it/1000x1000?text=Type%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Type%201Image0> .

    <https://place-hold.it/75x75?text=Type%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:101> .
}

ns1:118a6df1186c1611c027060203ff055e013f64ceb56b71efeae13608091e8718 {
    <https://place-hold.it/1000x1000?text=Technique%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:94> .
}

ns1:05cefe608aa76e5e6938c38568a4c215b45f93d967cee0d79e321fc23c1f8d73 {
    <https://place-hold.it/1000x1000?text=Material%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Material%205Image1> .

    <https://place-hold.it/75x75?text=Material%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:35> .
}

ns1:0196b4ae5ccd28b63f9a62e574a7f801b65f76e40acf13df39f8a69089de9b69 {
    <https://place-hold.it/1000x1000?text=Spatial%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:76> .
}

ns1:6157cf4c0f1c9f14716db1baa58fd675eb81ebbff516964dce4da15d78b07db1 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:8> .
}

ns1:09ed3d017ed89349346cb6ee0b9377795aad9492809836a1e82f81d925c03401 {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork14Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Institution1SharedWork14Image0> .

    <https://place-hold.it/75x75?text=Institution1SharedWork14Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:creator <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork14 rights holder" ;
        dcterms:title "Institution1SharedWork14 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution1/shared/work14> .
}

ns1:be9bc68842075c426ee70585aaf2307430b8f687892a71f58e9c5d1bbe1d9841 {
    <https://place-hold.it/1000x1000?text=Technique%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:94> .
}

ns1:e0db130ed0bf8bd3a762183f183c4c4b8cd34309820d6a5550091bb7c96acf65 {
    <https://place-hold.it/1000x1000?text=Publisher%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:52> .
}

ns1:fe281624f0b19b40c77f10f370526d793fcf3af7672ce5f279524a4d24112880 {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork15Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Institution1SharedWork15Image1> .

    <https://place-hold.it/75x75?text=Institution1SharedWork15Image1> a cms:Image ;
        dcterms:contributor <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:creator <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork15 rights holder" ;
        dcterms:title "Institution1SharedWork15 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution1/shared/work15> .
}

ns1:fd63d0b098622d84d50da25e4ae71118e25abda7a82c2fa73ad968fc6428ba65 {
    <https://place-hold.it/1000x1000?text=Type%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:105> .
}

ns1:e1d85c7a0f2480f548d3da26525420afe329ec94d87683a0bf14f208689bdb30 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:8> .
}

ns1:86384b2e9bf7a54e4bcfe8fe13eda101ac50785d1137743fbb45a6f42962d878 {
    <https://place-hold.it/1000x1000?text=Medium%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:49> .
}

ns1:5932758d093ba7a0e2b6fb926011b4b338d1fd248ce59b0c44c2a609c720b5c2 {
    <http://creativecommons.org/licenses/by-nc-nd/2.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:4dba8592da2c6ec777032e412e4aaa0e5e9710fdcdb1fb54974d64ba6263d33f {
    <https://place-hold.it/1000x1000?text=Type%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Type%209Image0> .

    <https://place-hold.it/75x75?text=Type%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:109> .
}

ns1:3c15be0c93a98d6c172201f1115108e9c7d700a1c39cd8d2f25ff914f7084b18 {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work0Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Institution0Collection0Work0Image0> .

    <https://place-hold.it/75x75?text=Institution0Collection0Work0Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work0 rights holder" ;
        dcterms:title "Institution0Collection0Work0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution0/collection0/work0> .
}

ns1:ee75e60f17792d6036e5fbb85edfb9d161b2f7c7781d19f392a82ecc6682e8ac {
    <http://example.com/institution0/collection0/work0Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Institution0Collection0Work0 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---01"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Institution0Collection0Work0 creation" ;
        cms:work <http://example.com/institution0/collection0/work0> .
}

ns1:e7a660022317bd029ac293f8690f4d845e68c2f2ccb4ea79d975889268ef334d {
    <https://place-hold.it/1000x1000?text=Cultural%20context%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%209Image0> .

    <https://place-hold.it/600x600?text=Cultural%20context%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:9> .
}

ns1:d8888a6dd8df362253c84867d67b033c4f2072cdc4d9b42762a7b71ad8ddbf6b {
    <https://place-hold.it/1000x1000?text=Cultural%20context%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:1> .
}

ns1:8a35c5683c8c5435365c12303b059e77f95846653f6e71e66c9b8b2a6f567b4e {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork5Image0> a cms:Image ;
        dcterms:contributor <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:creator <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork5 rights holder" ;
        dcterms:title "Institution0SharedWork5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution0/shared/work5> .
}

ns1:9da20d9e124124ec80739423a62ef96ab51093b241a1e3f664d1f124a1be9242 {
    <http://example.com/institution1/collection0/work10> a cms:Work ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Institution1Collection0Work10 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:alternative "Institution1Collection0Work10 alternative title 0",
            "Institution1Collection0Work10 alternative title 1" ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:created [ a cms:DateTimeDescription ;
                time:day "---11"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:date "2020-07-29",
            "2020-07-30" ;
        dcterms:description "Institution1Collection0Work10 description 0",
            "Institution1Collection0Work10 description 1",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
        dcterms:extent <urn:paradicms_etl:pipeline:test_data:named_value:10>,
            <urn:paradicms_etl:pipeline:test_data:named_value:11> ;
        dcterms:identifier "Institution1Collection0Work10Id0",
            "Institution1Collection0Work10Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:test_data:named_value:20>,
            <urn:paradicms_etl:pipeline:test_data:named_value:21> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:test_data:named_value:40>,
            <urn:paradicms_etl:pipeline:test_data:named_value:41> ;
        dcterms:provenance "Institution1Collection0Work10 provenance 0",
            "Institution1Collection0Work10 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:test_data:named_value:50>,
            <urn:paradicms_etl:pipeline:test_data:named_value:51> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work10 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:test_data:named_value:60>,
            <urn:paradicms_etl:pipeline:test_data:named_value:61> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:test_data:named_value:70>,
            <urn:paradicms_etl:pipeline:test_data:named_value:71> ;
        dcterms:subject <urn:paradicms_etl:pipeline:test_data:named_value:80>,
            <urn:paradicms_etl:pipeline:test_data:named_value:81> ;
        dcterms:title "Institution1Collection0Work10" ;
        dcterms:type <urn:paradicms_etl:pipeline:test_data:named_value:100>,
            <urn:paradicms_etl:pipeline:test_data:named_value:101> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:test_data:named_value:0>,
            <urn:paradicms_etl:pipeline:test_data:named_value:1> ;
        vra:material <urn:paradicms_etl:pipeline:test_data:named_value:30>,
            <urn:paradicms_etl:pipeline:test_data:named_value:31> ;
        vra:technique <urn:paradicms_etl:pipeline:test_data:named_value:90>,
            <urn:paradicms_etl:pipeline:test_data:named_value:91> ;
        cms:collection <http://example.com/institution1/collection0> ;
        cms:institution <http://example.com/institution1> ;
        foaf:page <http://example.com/work/10> .
}

ns1:10fedce822d5c9af5b452ef3826b0c01997f7ca67fe784ea547df4996e3b1b36 {
    <https://place-hold.it/1000x1000?text=Institution1Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Institution1Image1> .

    <https://place-hold.it/600x600?text=Institution1Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1 rights holder" ;
        dcterms:title "Institution1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution1> .
}

ns1:a15e78688995fcc67f08d215d9bde36168817d80dc2d24f8214e97272f112235 {
    <https://place-hold.it/1000x1000?text=Language%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:28> .
}

ns1:89e72d837dd237bf8f158337f2b8055cd4e141ffdddbf87d33355e0e27f791a3 {
    <urn:paradicms_etl:pipeline:test_data:named_value:82> a cms:NamedValue ;
        dcterms:title "Named value 82" ;
        rdf:predicate dcterms:subject ;
        rdf:value "Subject 2" .
}

ns1:a7adb1a13e867972201a2cd23bc6bd7d8b55f69b238b5c09536dfdd157dc0458 {
    <https://place-hold.it/1000x1000?text=Extent%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:13> .
}

ns1:7adef132b5781156b4f78bbad4b50c11f6b109dd8a30b1d19750c15ded0cefdf {
    <https://place-hold.it/1000x1000?text=Medium%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%208Image0> .

    <https://place-hold.it/600x600?text=Medium%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:48> .
}

ns1:669ffbe5305264f402b814faabd1269a4363cf5e2cdc340d9e516ade5dc54150 {
    <https://place-hold.it/1000x1000?text=Spatial%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%208Image0> .

    <https://place-hold.it/75x75?text=Spatial%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:78> .
}

ns1:d16e2a38e6482a761e809ac887c51035e5f8b781329e12319b4a32872521cc6b {
    <https://place-hold.it/1000x1000?text=Publisher%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:52> .
}

ns1:24aaefe58eb4c0122d2942e7701ab3db2d3c9574d1e3d5afdd5c877aba15c255 {
    <https://place-hold.it/1000x1000?text=Language%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Language%206Image1> .

    <https://place-hold.it/600x600?text=Language%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:26> .
}

ns1:2ba5ec2888727d351e81ea6300c89810882482aa78d6a7d9415405e42f3cc51b {
    <https://place-hold.it/1000x1000?text=Subject%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%209Image1> .

    <https://place-hold.it/75x75?text=Subject%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:89> .
}

ns1:de19f6ca2f4fc48bc8e5976155ed409cf1c81597048222b1a59b14192cdd603d {
    <https://place-hold.it/1000x1000?text=Technique%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%207Image1> .

    <https://place-hold.it/600x600?text=Technique%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:97> .
}

ns1:abe06cd82e85f137f820b8fb1de78a70c4e968643964ab399573f62243372dd3 {
    <https://place-hold.it/1000x1000?text=Material%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Material%202Image0> .

    <https://place-hold.it/600x600?text=Material%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:32> .
}

ns1:93bcf3b687b3031f01aad9583c245e0af791186b9921556ceb1188aca10fd076 {
    <http://creativecommons.org/licenses/by-nc-sa/4.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:194090d3caa8ba496719cff71b3b99990aed5c865bce8238830cf67f00c08fbe {
    <https://place-hold.it/1000x1000?text=Technique%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:90> .
}

ns1:aaaff4541b19831e52f54154fb5090b3d19e32c069d63bd1612f9a88858119cb {
    <https://place-hold.it/1000x1000?text=Spatial%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:75> .
}

ns1:7aa2414729a80e700a93a4b3a08204b0c53a268a16346a0dbb40df81bfa9a992 {
    <https://place-hold.it/1000x1000?text=Publisher%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%204Image1> .

    <https://place-hold.it/600x600?text=Publisher%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:54> .
}

ns1:a5013cb9be3e7cf72da5640146e0e95f650add3699094f8dc8ecc1e5e156d3b9 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:5> .
}

ns1:8e8b792c7036380e7738e7ffbb6a9d98a473c0406bcb49950ef784f12d9c40aa {
    <https://place-hold.it/1000x1000?text=Extent%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%200Image0> .

    <https://place-hold.it/600x600?text=Extent%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:10> .
}

ns1:084a303d51f27c12b629b6c7110f93cee48e39d7ca6d71fc6898d47dd4b9de29 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%207Image0> .

    <https://place-hold.it/600x600?text=Cultural%20context%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:7> .
}

ns1:d4e400be948256ee3489289d315ae779c639f01da6380c9f70cd0968886a9b7f {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork4Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Institution0SharedWork4Image1> .

    <https://place-hold.it/75x75?text=Institution0SharedWork4Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:creator <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork4 rights holder" ;
        dcterms:title "Institution0SharedWork4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution0/shared/work4> .
}

ns1:4b0b0cbaf430d2823120210ac1bb15ea74a7bcc5a4d87aa03d3439647c25a306 {
    <https://place-hold.it/1000x1000?text=Source%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:62> .
}

ns1:e9a6e726d27ed3b29de8f85bbeb3354595ab3a49e16b1a53d0c51bf5c48dca91 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:2> .
}

ns1:40c204041cc6b32953187b2572557b635fe26df1ee27cce7ad6149fa6e17557c {
    <https://place-hold.it/1000x1000?text=Material%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:32> .
}

ns1:6f9021a8bdfbe3527400e69eec64b42c06105a20a1f14f78aee9602efb070528 {
    <https://place-hold.it/1000x1000?text=Type%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:104> .
}

ns1:da54f679bc8f78d9f102fde151aefa1a2bab995e7395e6707d8fb1060b6cae11 {
    <https://place-hold.it/1000x1000?text=Language%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:21> .
}

ns1:1879fe997216e254d78919926d25919c0a4212f50a19d4534ed22c2427795134 {
    <https://place-hold.it/1000x1000?text=Extent%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%205Image0> .

    <https://place-hold.it/75x75?text=Extent%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:15> .
}

ns1:db85c2051b05e5bb8aa70e268ecdf8fed21d2a880218964cb964d42afd5b3148 {
    <https://place-hold.it/1000x1000?text=Spatial%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:71> .
}

ns1:ae5830022afbc2866aaf34bb6a2719d69dba3971acbb285ae5938e10cc7033df {
    <https://place-hold.it/1000x1000?text=Medium%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%208Image1> .

    <https://place-hold.it/600x600?text=Medium%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:48> .
}

ns1:17783d4bea98033efad93ffd5d4fde3851daa156b91ab721ddb187dbefbcbeb8 {
    <https://place-hold.it/1000x1000?text=Extent%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:17> .
}

ns1:209aeb4ceb71a8b43af342bc1d7202d0c47b5253abad919ea802622a0e75cff7 {
    <https://place-hold.it/1000x1000?text=Medium%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%209Image0> .

    <https://place-hold.it/75x75?text=Medium%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:49> .
}

ns1:2ade541b0372cfc4a6317df9b9a278027404a1261153b154dd43e5e51ac0c273 {
    <https://place-hold.it/1000x1000?text=Source%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Source%208Image0> .

    <https://place-hold.it/75x75?text=Source%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:68> .
}

ns1:d8982f20298fd3ba55713fd332480b7f7d70a5857e35bd5646f2d12046f5ade0 {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work2Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Institution0Collection0Work2Image1> .

    <https://place-hold.it/75x75?text=Institution0Collection0Work2Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:creator <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work2 rights holder" ;
        dcterms:title "Institution0Collection0Work2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution0/collection0/work2> .
}

ns1:913daaa4e05c965b8963b8523f96b23b8c67eddcd7fa0d577e8bc2047d4526ed {
    <http://example.com/institution0/collection0> a cms:Collection ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Institution0Collection0 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:title "Institution0Collection0" ;
        cms:institution <http://example.com/institution0> .
}

ns1:e51c55c04e35b563ee395790299768d8cedceee92552bac1014267c5cb50f494 {
    <https://place-hold.it/1000x1000?text=Subject%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%206Image0> .

    <https://place-hold.it/75x75?text=Subject%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:86> .
}

ns1:4291ba7cc42a102527de037574565a699682e28bd2c33828af2c36e4cd615e62 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%203Image1> .

    <https://place-hold.it/600x600?text=Cultural%20context%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:3> .
}

ns1:85f3a5b7ab9dafc0788ce91293ad649d16972eaf9a7d4f6a8057f2bbbbc12352 {
    <urn:paradicms_etl:pipeline:test_data:named_value:94> a cms:NamedValue ;
        dcterms:title "Named value 94" ;
        rdf:predicate vra:technique ;
        rdf:value "Technique 4" .
}

ns1:ccec28c0af8845ae65ad2de3deb7fabb852d4e17b3f841019101327c5b46aa5e {
    <https://place-hold.it/1000x1000?text=Subject%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:80> .
}

ns1:ac11930a756ffb9eb8e1c625bc64cf625fe7bca575e77f85cd72f516f9591f02 {
    <https://place-hold.it/1000x1000?text=Subject%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%205Image1> .

    <https://place-hold.it/600x600?text=Subject%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:85> .
}

ns1:6f2842f663265d30657b1455e03bd29f74112c93bd179330613a86536a2ba626 {
    <urn:paradicms_etl:pipeline:test_data:named_value:87> a cms:NamedValue ;
        dcterms:title "Named value 87" ;
        rdf:predicate dcterms:subject ;
        rdf:value "Subject 7" .
}

ns1:84d446a981a1397806dd151b865a59d55d90d340d8858b552f97e85d43873a50 {
    <https://place-hold.it/1000x1000?text=Type%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Type%204Image1> .

    <https://place-hold.it/75x75?text=Type%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:104> .
}

ns1:0da7bde930bf47a842740da5f1f18802e6990de41c7b02b92452de0335752aaa {
    <urn:paradicms_etl:pipeline:test_data:named_value:66> a cms:NamedValue ;
        dcterms:title "Named value 66" ;
        rdf:predicate dcterms:source ;
        rdf:value "Source 6" .
}

ns1:2e03412d32f617cfdf99639c6038ecf37b29d53fcf14755b7d35dd73792d831b {
    <http://example.com/person0> a cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "0, Person" ;
        foaf:familyName "0" ;
        foaf:givenName "Person" ;
        foaf:name "Person 0" ;
        foaf:page <http://example.com/person0page> .
}

ns1:34d03644c2622afdceb2ec2ff9d0f27639cdf2966e5d176dcafea9421903a17b {
    <urn:paradicms_etl:pipeline:test_data:named_value:21> a cms:NamedValue ;
        dcterms:title "Named value 21" ;
        rdf:predicate dcterms:language ;
        rdf:value "Language 1" .
}

ns1:6cbd018a19791a900b403140119feca2722e78399c6f465a12f746bdeaedeabd {
    <urn:paradicms_etl:pipeline:test_data:named_value:102> a cms:NamedValue ;
        dcterms:title "Named value 102" ;
        rdf:predicate dcterms:type ;
        rdf:value "Type 2" .
}

ns1:28a0e09c27e6f51a457eb0e0b73744abe4e44051d44db753de7e5ab83107cade {
    <https://place-hold.it/1000x1000?text=Extent%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%209Image0> .

    <https://place-hold.it/75x75?text=Extent%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:19> .
}

ns1:6180f399bd174c8746e8987782e4b396cff015f3d91c232cca68efe011fd45fa {
    <https://place-hold.it/1000x1000?text=Subject%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%207Image0> .

    <https://place-hold.it/75x75?text=Subject%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:87> .
}

ns1:57e04a0515f5387975ac460c093a0a0e2b87c35a36b455b8745b29a390829f30 {
    <https://place-hold.it/1000x1000?text=Spatial%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%201Image0> .

    <https://place-hold.it/75x75?text=Spatial%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:71> .
}

ns1:97a3f7c8cc2fb99ad0afbf406aab9663c7e172402449b38a29a9471378fed85f {
    <urn:paradicms_etl:pipeline:test_data:named_value:56> a cms:NamedValue ;
        dcterms:title "Named value 56" ;
        rdf:predicate dcterms:publisher ;
        rdf:value "Publisher 6" .
}

ns1:27f63167b823cd6674f9224b42f6b3b4bffcd941a287f0fe1918e2ec7f5289cc {
    <http://creativecommons.org/licenses/by-nc-nd/2.5/> a creativecommons:License,
            cms:License ;
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
}

ns1:de97264f2b555a014d9bf05dd834d5b9d9f7c72442610d7c97d19db75fd9d95f {
    <https://place-hold.it/1000x1000?text=Spatial%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%201Image1> .

    <https://place-hold.it/75x75?text=Spatial%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:71> .
}

ns1:df0873c0729b53e2bdb26e990d881ae5e3f11b079c4b99c70660269d375e9fd0 {
    <https://place-hold.it/1000x1000?text=Publisher%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%207Image0> .

    <https://place-hold.it/75x75?text=Publisher%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:57> .
}

ns1:950c17d0bd5fdffc8f9d28587b3150f02789ab0fb45200e908c94f1a8ae54e24 {
    <urn:paradicms_etl:pipeline:test_data:named_value:85> a cms:NamedValue ;
        dcterms:title "Named value 85" ;
        rdf:predicate dcterms:subject ;
        rdf:value "Subject 5" .
}

ns1:949e777524f6987743fde37dbee843843b5174e418404ce5759cc080bb977ea0 {
    <http://creativecommons.org/licenses/sampling+/1.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:26dfa9f603b9f5f796d2f7f5063eadf69318877b1650d10c6c7daa6b9781222e {
    <https://place-hold.it/1000x1000?text=Source%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Source%206Image1> .

    <https://place-hold.it/75x75?text=Source%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:66> .
}

ns1:2f12d601550bb836df25ec16a204a9eecd78a2acf285aeb52f130c1824605954 {
    <https://place-hold.it/1000x1000?text=Material%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:38> .
}

ns1:f13bdf416b0fbaf7967c70f2dac1d4a4f442f58988df0ce82b645a1ced6a8899 {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work2Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Institution0Collection0Work2Image0> .

    <https://place-hold.it/75x75?text=Institution0Collection0Work2Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:creator <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work2 rights holder" ;
        dcterms:title "Institution0Collection0Work2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution0/collection0/work2> .
}

ns1:faf4d8242460bcf5e15f60b7ed05ce6e41b5eaa047c923268ec53213716f218d {
    <https://place-hold.it/1000x1000?text=Material%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Material%201Image0> .

    <https://place-hold.it/600x600?text=Material%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:31> .
}

ns1:8b891323bcb283501d2401a9b578c577e1e9dc51fd1d4aaa2ba262a9786d8e8a {
    <urn:paradicms_etl:pipeline:test_data:named_value:8> a cms:NamedValue ;
        dcterms:title "Named value 8" ;
        rdf:predicate vra:culturalContext ;
        rdf:value "Cultural context 8" .
}

ns1:129eed28f97a14194afab37d67b0e4fef8bd4ee4d6dba25661814e40088e0a18 {
    <https://place-hold.it/1000x1000?text=Language%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:21> .
}

ns1:daa233699983bad5c45e3a81b51e46d9509836e5412c04ee612182d91e8ab8a4 {
    <https://place-hold.it/1000x1000?text=Type%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Type%203Image1> .

    <https://place-hold.it/75x75?text=Type%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:103> .
}

ns1:c220cfd6eb5412ed85de80d2bd351603dfa89a46b0454a949f8c10fd2dd4095a {
    <https://place-hold.it/1000x1000?text=Organization%200> a cms:Image ;
        dcterms:creator "Organization 0 image creator" ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Organization 0 image rights holder" ;
        dcterms:title "Organization 0 image" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/organization0> .
}

ns1:4cf9c4bc614a5d4ed695eb0a5fb19040f78921b7b6ec90194b6a675c6f5985c9 {
    <https://place-hold.it/1000x1000?text=Technique%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:96> .
}

ns1:933cf83ef5aebf51f15d5d7e2c4f37ca2bfac5d0a6eee89d3f812359059ef3a4 {
    <https://place-hold.it/1000x1000?text=Source%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Source%206Image0> .

    <https://place-hold.it/75x75?text=Source%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:66> .
}

ns1:e7add37f0b81ce4e696b3ea051cd1ea9f8c446160aff65930d4ea29876fed880 {
    <https://place-hold.it/1000x1000?text=Material%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Material%200Image1> .

    <https://place-hold.it/600x600?text=Material%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:30> .
}

ns1:ca50c7567bae55bf0193c8066c383f32cd00f59a6eef9c5faa5fa71f506921c1 {
    <https://place-hold.it/1000x1000?text=Spatial%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%200Image0> .

    <https://place-hold.it/75x75?text=Spatial%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:70> .
}

ns1:924517ac3ca1720f73490a2fe04fbb101e400faf9a0bfdc654d46754bec56baa {
    <https://place-hold.it/1000x1000?text=Cultural%20context%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:0> .
}

ns1:a8ed66e210c5ed0618697f0cfa8d2af36a525fedbc1d5bc02c37d148c63bd775 {
    <https://place-hold.it/1000x1000?text=Medium%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%206Image1> .

    <https://place-hold.it/75x75?text=Medium%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:46> .
}

ns1:68371cc202b67895a1e25ae030d62e7b89f7fcf7beecb0700ae2b39de21c72bb {
    <https://place-hold.it/1000x1000?text=Institution0Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0 rights holder" ;
        dcterms:title "Institution0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution0> .
}

ns1:7dae3ee1b81fe465cda5114c8aaa8d78fa0917cc35e9aab5b72e8b1e74267a88 {
    <https://place-hold.it/1000x1000?text=Spatial%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:76> .
}

ns1:e8d178f19273a33559531675197db010b6a27df366f7f1264d938dfc87495704 {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork4Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Institution0SharedWork4Image1> .

    <https://place-hold.it/600x600?text=Institution0SharedWork4Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:creator <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork4 rights holder" ;
        dcterms:title "Institution0SharedWork4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution0/shared/work4> .
}

ns1:248aa874d46f70ae47ded9bbc5168996c489c59d3b092f11feb930a9fb11d22d {
    <https://place-hold.it/1000x1000?text=Publisher%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%209Image1> .

    <https://place-hold.it/600x600?text=Publisher%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:59> .
}

ns1:0646de62d296d316ccb61d96997cd0ff5ce54a18d5b3e04ee659e4f613c4bea0 {
    <urn:paradicms_etl:pipeline:test_data:named_value:18> a cms:NamedValue ;
        dcterms:title "Named value 18" ;
        rdf:predicate dcterms:extent ;
        rdf:value "Extent 8" .
}

ns1:8cc22f10138deab46c60e51f41cff8119ebe126190b4ea9e05bb7f88b1cc80c2 {
    <urn:paradicms_etl:pipeline:test_data:named_value:55> a cms:NamedValue ;
        dcterms:title "Named value 55" ;
        rdf:predicate dcterms:publisher ;
        rdf:value "Publisher 5" .
}

ns1:c00fbc3b18bd355690e923dd51b7a88284bb3002cfca39084ede830433ea3d62 {
    <urn:paradicms_etl:pipeline:test_data:named_value:42> a cms:NamedValue ;
        dcterms:title "Named value 42" ;
        rdf:predicate dcterms:medium ;
        rdf:value "Medium 2" .
}

ns1:a00179682b0a0686100c85ec7423374e5f1802df67b0e2534723708a9fc57c15 {
    <https://place-hold.it/1000x1000?text=Spatial%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%203Image0> .

    <https://place-hold.it/75x75?text=Spatial%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:73> .
}

ns1:9d3566a0cc87a2cd4d12656292db11835ed30280da2b1503d0b37c5b0600595b {
    <http://creativecommons.org/licenses/BSD/> a creativecommons:License,
            cms:License ;
        creativecommons:legalcode <http://opensource.org/licenses/bsd-license.php> ;
        creativecommons:licenseClass <http://creativecommons.org/license/software> ;
        creativecommons:permits creativecommons:DerivativeWorks,
            creativecommons:Distribution,
            creativecommons:Reproduction ;
        creativecommons:requires creativecommons:Notice ;
        dc:identifier "BSD" ;
        dc:title "BSD License",
            "BSD"@en .
}

ns1:7675c5f0eb0651ab7d2bdb1806097a75d861f9cc9194e2bf4af9dd6a36521c2b {
    <https://place-hold.it/1000x1000?text=Extent%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%201Image0> .

    <https://place-hold.it/75x75?text=Extent%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:11> .
}

ns1:ab51b84b169310e837d8246fd986ddb962d4ccf7600b8bcead69047a69a5217d {
    <https://place-hold.it/1000x1000?text=Medium%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:48> .
}

ns1:1ca5b04b478c9b635847bc8bf321a7739eda9244169b1f43a585ee796e5c72aa {
    <https://place-hold.it/1000x1000?text=Cultural%20context%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%205Image1> .

    <https://place-hold.it/600x600?text=Cultural%20context%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:5> .
}

ns1:5a4e4a4c228a098e549f66a9a7f39f85313178446b3d36025d3887c79954210b {
    <urn:paradicms_etl:pipeline:test_data:named_value:105> a cms:NamedValue ;
        dcterms:title "Named value 105" ;
        rdf:predicate dcterms:type ;
        rdf:value "Type 5" .
}

ns1:cbf1b35025907cd512704a9ee538f39ca683bd7b86177d126a5f581a8b2a600e {
    <https://place-hold.it/1000x1000?text=Extent%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:19> .
}

ns1:5a99b5719178a40b3f8421a630bbe7f7314ec1c9ec4ea3c6576f78d9d8b24af5 {
    <https://place-hold.it/1000x1000?text=Spatial%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%204Image1> .

    <https://place-hold.it/600x600?text=Spatial%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:74> .
}

ns1:b2a178b65e343d02338366481f2ed75af32c8898e7a2f74a30c17fa327cbb094 {
    <https://place-hold.it/1000x1000?text=Publisher%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%204Image0> .

    <https://place-hold.it/600x600?text=Publisher%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:54> .
}

ns1:432af002d1d564f9e85aeb51c3ec6542c354366e2b383de9e1853a7191e92714 {
    <https://place-hold.it/1000x1000?text=Source%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Source%201Image0> .

    <https://place-hold.it/600x600?text=Source%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:61> .
}

ns1:b6a506e97a211f87c15ad3575807a83c358c47170e82168361a88b12d0f5f0f9 {
    <urn:paradicms_etl:pipeline:test_data:named_value:46> a cms:NamedValue ;
        dcterms:title "Named value 46" ;
        rdf:predicate dcterms:medium ;
        rdf:value "Medium 6" .
}

ns1:337934a3e1a5eac721a1f74c704f111d156ccec55e86af0d0953ee37b508ee3e {
    <https://place-hold.it/1000x1000?text=Source%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Source%202Image1> .

    <https://place-hold.it/75x75?text=Source%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:62> .
}

ns1:d58f549d917339aef43b07c9e3bb83020558d28d1ad294713a462ba08a08a514 {
    <https://place-hold.it/1000x1000?text=Publisher%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%201Image1> .

    <https://place-hold.it/600x600?text=Publisher%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:51> .
}

ns1:74e3a097ec8d94f9a547c5085c4e6c34de4c60b4f9c3a51c98f89d46113fa683 {
    <https://place-hold.it/1000x1000?text=Publisher%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%208Image0> .

    <https://place-hold.it/600x600?text=Publisher%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:58> .
}

ns1:c572f9e39279df0eb154f358789c2d87358f2e3e01c76fa73070fe74ed6dd3c7 {
    <https://place-hold.it/1000x1000?text=Language%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Language%205Image1> .

    <https://place-hold.it/600x600?text=Language%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:25> .
}

ns1:84c28692aefd15e8e75b4385e5322424a09f38c7ae6ac30e4827b325ed648713 {
    <https://place-hold.it/1000x1000?text=Medium%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:41> .
}

ns1:21a721145adf59e979420a07a317f48da671a0be20b3298b812d789289cc8f5c {
    <https://place-hold.it/1000x1000?text=Publisher%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%204Image0> .

    <https://place-hold.it/75x75?text=Publisher%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:54> .
}

ns1:617cd443041e411d9c5959c67e303ce9b93b1885be866fc9e04c67ce73e3e9a6 {
    <https://place-hold.it/1000x1000?text=Language%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Language%205Image0> .

    <https://place-hold.it/75x75?text=Language%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:25> .
}

ns1:1b01797016e1c637e4ed1af7e860a6faf46a01e813cc60b91bcbf97ddf01172c {
    <https://place-hold.it/1000x1000?text=Type%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:101> .
}

ns1:9774f8336a087553a33db74433308424c2f3d5a7e5f85af91bb8afa897dc2ab3 {
    <https://place-hold.it/1000x1000?text=Type%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:107> .
}

ns1:aa4bf65f6f5e8211d38cc230cbbae45bdd9cb534ea59f142815d04ee6a18448f {
    <urn:paradicms_etl:pipeline:test_data:named_value:108> a cms:NamedValue ;
        dcterms:title "Named value 108" ;
        rdf:predicate dcterms:type ;
        rdf:value "Type 8" .
}

ns1:98a6fcacc81789ea3f6df69211a64e372b78197ae544b5a6a9f477e387b34bb0 {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork12Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:creator <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork12 rights holder" ;
        dcterms:title "Institution1SharedWork12 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution1/shared/work12> .
}

ns1:e12b7a5ba59111b0f0d01e3f6097e88c38ac6ca28865360f4837f263651330d9 {
    <http://creativecommons.org/licenses/nd/1.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:39b52ba82f5e9562d4340ffed30192b55756b9b5a547edf5c531cfa8d6674d6d {
    <urn:paradicms_etl:pipeline:test_data:named_value:77> a cms:NamedValue ;
        dcterms:title "Named value 77" ;
        rdf:predicate dcterms:spatial ;
        rdf:value "Spatial 7" .
}

ns1:281d88cc578c0d448041ba25484c87dde9f4bd3ec556b2f7184b39f976100c0d {
    <http://creativecommons.org/licenses/by-nc/2.5/> a creativecommons:License,
            cms:License ;
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
}

ns1:080e134b90ff3dfd4edb96691e50c553d26293726591e27f05a89eb5660df6a5 {
    <https://place-hold.it/1000x1000?text=Organization%204> a cms:Image ;
        dcterms:creator "Organization 4 image creator" ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Organization 4 image rights holder" ;
        dcterms:title "Organization 4 image" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/organization4> .
}

ns1:f1ce4c4b3db442332329bd4b4450d2dbc06c7f0a7d29c39123c2716065a1b948 {
    <https://place-hold.it/1000x1000?text=Source%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Source%206Image1> .

    <https://place-hold.it/600x600?text=Source%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:66> .
}

ns1:92285104c9cf538efb407da8d03af85448a0ee72b550c640d9954d86914f7842 {
    <https://place-hold.it/1000x1000?text=Subject%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%201Image0> .

    <https://place-hold.it/600x600?text=Subject%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:81> .
}

ns1:7c09a65d9c1dcf5160555eccbaf4fdbf66cd528ca8d46a374b13db04449c2ea2 {
    <https://place-hold.it/1000x1000?text=Spatial%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%209Image0> .

    <https://place-hold.it/75x75?text=Spatial%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:79> .
}

ns1:4b5dc1e9a5e014726d56a5b7c9c34c0fc1b64303b491df2c691422c968ce43e2 {
    <https://place-hold.it/1000x1000?text=Person%203> a cms:Image ;
        dcterms:creator "Person 3 image creator" ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Person 3 image rights holder" ;
        dcterms:title "Person 3 image" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/person3> .
}

ns1:aa051d446c9e3e1db6628db45700c0fa9488f20e1ed6d293f9039a8a01749d23 {
    <https://place-hold.it/1000x1000?text=Material%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Material%201Image0> .

    <https://place-hold.it/75x75?text=Material%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:31> .
}

ns1:1774b9c1d8ebce02025db639eaf79ddf50f60cc5ffd0d8366c57d41bcbb12a8a {
    <https://place-hold.it/1000x1000?text=Medium%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%202Image1> .

    <https://place-hold.it/75x75?text=Medium%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:42> .
}

ns1:44c3a28212c26e027eba5337e8327a4c0820c480042fb588022fcd5cfb484766 {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work1Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Institution0Collection0Work1Image1> .

    <https://place-hold.it/75x75?text=Institution0Collection0Work1Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work1 rights holder" ;
        dcterms:title "Institution0Collection0Work1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution0/collection0/work1> .
}

ns1:461bac7fa9b5baf67428465134bb9fc2123f2e194085535bf59090ea29931304 {
    <urn:paradicms_etl:pipeline:test_data:named_value:69> a cms:NamedValue ;
        dcterms:title "Named value 69" ;
        rdf:predicate dcterms:source ;
        rdf:value "Source 9" .
}

ns1:317140759abb1e36f6f0dca72651676713f137785ad9c4730ee7e2084c5c848b {
    <urn:paradicms_etl:pipeline:test_data:named_value:9> a cms:NamedValue ;
        dcterms:title "Named value 9" ;
        rdf:predicate vra:culturalContext ;
        rdf:value "Cultural context 9" .
}

ns1:cbfcd6d418f6e2d26bf2d4847331219a9db26da4c3e1cf20b6ed38b9c126b623 {
    <https://place-hold.it/1000x1000?text=Extent%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%202Image1> .

    <https://place-hold.it/75x75?text=Extent%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:12> .
}

ns1:4dd44014f1002e40989a35eddf8036b251c9aa87b7f47b8f7287a48d0bbba068 {
    <https://place-hold.it/1000x1000?text=Source%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Source%207Image0> .

    <https://place-hold.it/600x600?text=Source%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:67> .
}

ns1:c7cf21e78370a13d7ad41a154249bea982de8bdd9c809ee6bb9f15c6355c1a84 {
    <http://example.com/institution0/collection0/work1> a cms:Work ;
        dcterms:alternative "Institution0Collection0Work1 alternative title 0",
            "Institution0Collection0Work1 alternative title 1" ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:created [ a cms:DateTimeDescription ;
                time:day "---02"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:date "2020-08-07",
            "2020-08-08" ;
        dcterms:extent <urn:paradicms_etl:pipeline:test_data:named_value:11>,
            <urn:paradicms_etl:pipeline:test_data:named_value:12> ;
        dcterms:identifier "Institution0Collection0Work1Id0",
            "Institution0Collection0Work1Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:test_data:named_value:21>,
            <urn:paradicms_etl:pipeline:test_data:named_value:22> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:test_data:named_value:41>,
            <urn:paradicms_etl:pipeline:test_data:named_value:42> ;
        dcterms:provenance "Institution0Collection0Work1 provenance 0",
            "Institution0Collection0Work1 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:test_data:named_value:51>,
            <urn:paradicms_etl:pipeline:test_data:named_value:52> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work1 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:test_data:named_value:61>,
            <urn:paradicms_etl:pipeline:test_data:named_value:62> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:test_data:named_value:71>,
            <urn:paradicms_etl:pipeline:test_data:named_value:72> ;
        dcterms:subject <urn:paradicms_etl:pipeline:test_data:named_value:81>,
            <urn:paradicms_etl:pipeline:test_data:named_value:82> ;
        dcterms:title "Institution0Collection0Work1" ;
        dcterms:type <urn:paradicms_etl:pipeline:test_data:named_value:101>,
            <urn:paradicms_etl:pipeline:test_data:named_value:102> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:test_data:named_value:1>,
            <urn:paradicms_etl:pipeline:test_data:named_value:2> ;
        vra:material <urn:paradicms_etl:pipeline:test_data:named_value:31>,
            <urn:paradicms_etl:pipeline:test_data:named_value:32> ;
        vra:technique <urn:paradicms_etl:pipeline:test_data:named_value:91>,
            <urn:paradicms_etl:pipeline:test_data:named_value:92> ;
        cms:collection <http://example.com/institution0/collection0> ;
        cms:institution <http://example.com/institution0> .
}

ns1:80ed15239e9066ded24617496b595fb357aab61fbc0aa895a67d4a91fce3b03e {
    <https://place-hold.it/1000x1000?text=Source%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Source%205Image1> .

    <https://place-hold.it/600x600?text=Source%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:65> .
}

ns1:c55ddff4839b0acba800fa47e781cc5a5b52601db85b56b2a3e9ef91a02a2463 {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork13Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:creator <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork13 rights holder" ;
        dcterms:title "Institution1SharedWork13 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution1/shared/work13> .
}

ns1:22553f3710fb260a2e9f301356b71a315efd8368c8432feb3cf54d1d29157ede {
    <https://place-hold.it/1000x1000?text=Spatial%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%206Image1> .

    <https://place-hold.it/75x75?text=Spatial%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:76> .
}

ns1:ac9c60f7b61671fead26c3e23781848027964f6cc3e57b5314cdc48572bf9832 {
    <https://place-hold.it/1000x1000?text=Technique%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%200Image0> .

    <https://place-hold.it/600x600?text=Technique%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:90> .
}

ns1:e971233cd1d3c70707e2ba1b98a8ee8d0bcf61664f7f4fc9fa2f2e7635666d42 {
    <https://place-hold.it/1000x1000?text=Technique%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:90> .
}

ns1:5f634ecad936feec03197ec8e0491b9b93368b8d3ccdd339cd083c4956963bbb {
    <https://place-hold.it/1000x1000?text=Language%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Language%203Image0> .

    <https://place-hold.it/75x75?text=Language%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:23> .
}

ns1:d537ca10f7f4b57824a95634fbc38f48a22a123a1297307a36e6e3b2f17179da {
    <https://place-hold.it/1000x1000?text=Institution0Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Institution0Image0> .

    <https://place-hold.it/75x75?text=Institution0Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0 rights holder" ;
        dcterms:title "Institution0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution0> .
}

ns1:a0b144aa5dc1d6def688b2f547942e54b10bcb82552f5992290fdbfb68a8eb8e {
    <https://place-hold.it/1000x1000?text=Technique%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:98> .
}

ns1:180f77054e14a1d313bc4c79d8e0379bc0398fc2c2bddf02b3490b14ee40ef58 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%205Image0> .

    <https://place-hold.it/600x600?text=Cultural%20context%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:5> .
}

ns1:e6ede7fad3e4125f8aa047338ad6fc705fb0d1314613d8a94a20e9b074ea15aa {
    <https://place-hold.it/1000x1000?text=Language%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Language%206Image1> .

    <https://place-hold.it/75x75?text=Language%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:26> .
}

ns1:30475419c882e3b6d8ab87c603e617a83aa901b8b71312a38111cbce73fc016a {
    <urn:paradicms_etl:pipeline:test_data:named_value:0> a cms:NamedValue ;
        dcterms:title "Named value 0" ;
        rdf:predicate vra:culturalContext ;
        rdf:value "Cultural context 0" .
}

ns1:45ee916ad100d0b74b5b865777302c10cce6eb99f30dce7cc1130d68ada83e47 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:2> .
}

ns1:a3082b01c8224974295251c5bb30d01578c5d53b1e72e9e58b934a34a326c4ba {
    <https://place-hold.it/1000x1000?text=Extent%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:16> .
}

ns1:7343dbf64eca216f6d9e1f328ea2b597f0a4febdd2ee3f5463257f57fa3d5076 {
    <urn:paradicms_etl:pipeline:test_data:named_value:75> a cms:NamedValue ;
        dcterms:title "Named value 75" ;
        rdf:predicate dcterms:spatial ;
        rdf:value "Spatial 5" .
}

ns1:2f5b4c03b885a67b1d48bb6463018a56f5d47eb882a9e29039d2184e4a334e16 {
    <https://place-hold.it/1000x1000?text=Language%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Language%201Image1> .

    <https://place-hold.it/600x600?text=Language%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:21> .
}

ns1:caf2364de1c975c281b0f4a2efb659a5e0dc7ca84257ac8976e3e35b0ecc3c09 {
    <https://place-hold.it/1000x1000?text=Spatial%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:70> .
}

ns1:a4fa7c7c792c26fea88b40de38503359ca76f15ce8719c96b50084aece2f64af {
    <https://place-hold.it/1000x1000?text=Cultural%20context%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%206Image1> .

    <https://place-hold.it/600x600?text=Cultural%20context%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:6> .
}

ns1:9bb840d067415720c5e65a08210abdc47eb9bedbc495e6ec48065a70ac403cf9 {
    <https://place-hold.it/1000x1000?text=Technique%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%200Image1> .

    <https://place-hold.it/75x75?text=Technique%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:90> .
}

ns1:e9cf6fd4dccc484718dd39a36e5c075657adba832738b7ba09ac6c476cde4aa1 {
    <https://place-hold.it/1000x1000?text=Extent%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%204Image0> .

    <https://place-hold.it/600x600?text=Extent%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:14> .
}

ns1:d194b6aa5bc2f0bb27e639d065c327e18adfdcdaba344c42b6e8a22552c7057a {
    <https://place-hold.it/1000x1000?text=Type%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Type%205Image0> .

    <https://place-hold.it/600x600?text=Type%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:105> .
}

ns1:78b82b16a8a7b202155d594d9cb89ff8d4d88d08e0621a13884d6f698ad5fc86 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%207Image1> .

    <https://place-hold.it/75x75?text=Cultural%20context%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:7> .
}

ns1:2039d69ee08b47fac24c9256be2fe21e1988efffca6504203c7f7a4b4d13fb85 {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work11Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Institution1Collection0Work11Image0> .

    <https://place-hold.it/75x75?text=Institution1Collection0Work11Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work11 rights holder" ;
        dcterms:title "Institution1Collection0Work11 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution1/collection0/work11> .
}

ns1:5cf12122200a6a73a4c4ba19154e9e1a12d6409ccadf450dbf32f0663981eccd {
    <http://example.com/institution1/shared/work13Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:creator <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---14"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Institution1SharedWork13 creation" ;
        cms:work <http://example.com/institution1/shared/work13> .
}

ns1:a30276a57f503252f4572b824cdeeca8e8c3022f53b3643158ee37355746e925 {
    <http://creativecommons.org/licenses/GPL/2.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:1007b3a17a3752e882582c4a6ddff0b6f5dd384a8ce3d3c613f14edb87c5de15 {
    <https://place-hold.it/1000x1000?text=Spatial%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:73> .
}

ns1:dbe0230ba0323b792a3cda431af8f2363c02a44b94b305bafaf2c88440bf9c10 {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work10Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work10 rights holder" ;
        dcterms:title "Institution1Collection0Work10 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution1/collection0/work10> .
}

ns1:df880d1b31365982e4de3433f1d2af543d488d1fd63d19915f04ec70f8ad5337 {
    <https://place-hold.it/1000x1000?text=Medium%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%201Image0> .

    <https://place-hold.it/600x600?text=Medium%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:41> .
}

ns1:74520a2cd8f4cc967eec41674f2fce9117ef14b893603b6bc8ddf975b6b9b3a2 {
    <https://place-hold.it/1000x1000?text=Extent%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%206Image0> .

    <https://place-hold.it/75x75?text=Extent%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:16> .
}

ns1:d41c7141853d44593528b4ddb1356090e2c20534658a72e3085701c304b32125 {
    <https://place-hold.it/1000x1000?text=Extent%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:11> .
}

ns1:95abdcf45fab7f416e6064f8f25db569be7331f177cafaf83b15a16542379685 {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work10Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work10 rights holder" ;
        dcterms:title "Institution1Collection0Work10 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution1/collection0/work10> .
}

ns1:f9fa4c12af95f1430b49045da572da70deefcb953a4910b5a1c2c6b25309ae72 {
    <https://place-hold.it/1000x1000?text=Subject%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:85> .
}

ns1:531c9e704815de96e2a1947661298c5e553482cfacd6ad469e2f8c04b0962cf0 {
    <https://place-hold.it/1000x1000?text=Type%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Type%203Image1> .

    <https://place-hold.it/600x600?text=Type%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:103> .
}

ns1:e1638b41cb6b7314ed308b732aa2e8f613ada99909edede38a01e8f5afddc59b {
    <https://place-hold.it/1000x1000?text=Subject%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:82> .
}

ns1:309c78d1e407272d67b857b529c2ba067dfd2400fee25074038428f6c659547f {
    <https://place-hold.it/1000x1000?text=Language%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Language%207Image0> .

    <https://place-hold.it/600x600?text=Language%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:27> .
}

ns1:3b1f012a1e45fd230b5f3dbbe166f303b28f9d47955fe4ed6f138c1247b19a38 {
    <http://creativecommons.org/publicdomain/mark/1.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:83e6f0076100149a867e4becfb0aa561847fd565dca1a85887ab40f7d4d2e1ef {
    <https://place-hold.it/1000x1000?text=Publisher%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%205Image0> .

    <https://place-hold.it/75x75?text=Publisher%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:55> .
}

ns1:ed72f7767f3d4067cdeaa959187b0b63f31cb7453120d13607946e23490a47a8 {
    <https://place-hold.it/1000x1000?text=Extent%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%207Image0> .

    <https://place-hold.it/75x75?text=Extent%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:17> .
}

ns1:c567d0e39554ac53bfb3051cea200b59245d2996a5e4c9c9b749bdb840679924 {
    <https://place-hold.it/1000x1000?text=Subject%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%204Image0> .

    <https://place-hold.it/75x75?text=Subject%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:84> .
}

ns1:5e38d08bbedce590e23d498ecca89927bef49389170c378e1be6cfad92c0cad1 {
    <https://place-hold.it/1000x1000?text=Language%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Language%204Image0> .

    <https://place-hold.it/600x600?text=Language%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:24> .
}

ns1:44e6f2a184daeb746c18c07943f32458f61b5ccca2b01cb8b087ef4a8abf57ab {
    <https://place-hold.it/1000x1000?text=Medium%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%202Image1> .

    <https://place-hold.it/600x600?text=Medium%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:42> .
}

ns1:22bcbd02057befc74472386819f3c9f89d0ff1c912f4d46863f886184205e245 {
    <https://place-hold.it/1000x1000?text=Spatial%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:79> .
}

ns1:7a33d569863c5489d215bc344b4fea072ffa7895ed5b98d8b6a9a52bc1d1df79 {
    <https://place-hold.it/1000x1000?text=Medium%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%209Image1> .

    <https://place-hold.it/75x75?text=Medium%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:49> .
}

ns1:ea6d85af707a00d70f101a3823151871cacdacc2944ad2a882e94cafaaa1a069 {
    <https://place-hold.it/1000x1000?text=Type%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:103> .
}

ns1:4ecebc83b82a3a47aace4a4560f682fb1a16c598e71ee4cc881299030304eaec {
    <https://place-hold.it/1000x1000?text=Type%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Type%200Image0> .

    <https://place-hold.it/600x600?text=Type%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:100> .
}

ns1:172cc3e3ad58be966ecc343081d9f3ef8000dd9b48f9706929509dd524230b5d {
    <https://place-hold.it/1000x1000?text=Spatial%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%202Image0> .

    <https://place-hold.it/75x75?text=Spatial%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:72> .
}

ns1:df7eb3a432b1337b62ffcf2a5bdd184491a8a0267d4b2eb61dbc0dfdfb318c32 {
    <urn:paradicms_etl:pipeline:test_data:named_value:14> a cms:NamedValue ;
        dcterms:title "Named value 14" ;
        rdf:predicate dcterms:extent ;
        rdf:value "Extent 4" .
}

ns1:e2babfbbb72046de3876af2f9c38b469e97ef7081545561df6f3e9cb5a4e144d {
    <urn:paradicms_etl:pipeline:test_data:named_value:16> a cms:NamedValue ;
        dcterms:title "Named value 16" ;
        rdf:predicate dcterms:extent ;
        rdf:value "Extent 6" .
}

ns1:15511b045a30782d8e7dfa13b48c84dec76bc93c658776ee9a27ea115b80aaed {
    <https://place-hold.it/1000x1000?text=Language%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Language%200Image1> .

    <https://place-hold.it/600x600?text=Language%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:20> .
}

ns1:0a662e904aecec924abfbc4840e496c2a169c4c8f198e651425b20cf0ae6bbfa {
    <urn:paradicms_etl:pipeline:test_data:named_value:99> a cms:NamedValue ;
        dcterms:title "Named value 99" ;
        rdf:predicate vra:technique ;
        rdf:value "Technique 9" .
}

ns1:f04aecd164ea417db181e20f789fd16910b91bdea51b79c63944debbb1e26ae6 {
    <https://place-hold.it/1000x1000?text=Technique%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%208Image0> .

    <https://place-hold.it/600x600?text=Technique%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:98> .
}

ns1:924766eacd57e3b1180485a7871ff5c990d4738bde2e78ea453e2faa04bc78f9 {
    <https://place-hold.it/1000x1000?text=Extent%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%206Image1> .

    <https://place-hold.it/75x75?text=Extent%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:16> .
}

ns1:7518f1026903ebaf1b58b1f5417895f8a6696e72cc9029bd5d9e90b0603b5a33 {
    <https://place-hold.it/1000x1000?text=Medium%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%207Image0> .

    <https://place-hold.it/75x75?text=Medium%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:47> .
}

ns1:8a6ab7f12417269d72a027e604a8c89f278a6173f71e22ba66c4acf6af2853c0 {
    <https://place-hold.it/1000x1000?text=Material%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:33> .
}

ns1:997ac3636eb4ac3b19ae961be2c6aa32bb85ef1f87fc914385a500f2cadb2d0b {
    <https://place-hold.it/1000x1000?text=Spatial%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%206Image1> .

    <https://place-hold.it/600x600?text=Spatial%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:76> .
}

ns1:4d3a5add0ab9a966b003a9929c09d41b8e3de40f5dd2d657e47c612296b31d69 {
    <https://place-hold.it/1000x1000?text=Source%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Source%204Image0> .

    <https://place-hold.it/75x75?text=Source%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:64> .
}

ns1:9a5528a4abf3ce1c14f8bed3faeafc1ad91eb6893a138a6b9e40ec1d88b53b04 {
    <https://place-hold.it/1000x1000?text=Publisher%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%201Image0> .

    <https://place-hold.it/600x600?text=Publisher%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:51> .
}

ns1:2a6132ae7100bc043c2ba4169cd4e322c944cbfd0ca3f848b52f4561908f7245 {
    <https://place-hold.it/1000x1000?text=Extent%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%206Image0> .

    <https://place-hold.it/600x600?text=Extent%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:16> .
}

ns1:44b0d2b7fff39e58f580afb34f69d6bc0851db559b4f2ee87dea1db86f335ab2 {
    <urn:paradicms_etl:pipeline:test_data:named_value:57> a cms:NamedValue ;
        dcterms:title "Named value 57" ;
        rdf:predicate dcterms:publisher ;
        rdf:value "Publisher 7" .
}

ns1:83a403f4c48602a922b703afd17bc0f998b2d2a0e9595593c3804b03eac4df00 {
    <https://place-hold.it/1000x1000?text=Source%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Source%207Image1> .

    <https://place-hold.it/600x600?text=Source%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:67> .
}

ns1:c1eab504d3345a1a08f24955af04e9543cd7d248f9d596c7dd84289eb3f4a25f {
    <https://place-hold.it/1000x1000?text=Type%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Type%202Image1> .

    <https://place-hold.it/600x600?text=Type%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:102> .
}

ns1:ee4f3fd62ce9eeede875cf32e6c4d8effe42cab8118078c1c73ade99a10babb5 {
    <https://place-hold.it/1000x1000?text=Medium%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%204Image1> .

    <https://place-hold.it/75x75?text=Medium%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:44> .
}

ns1:5caf3b8961b74304f3b6ee3430758f0170c75c4578420276336c2661c62519fb {
    <https://place-hold.it/1000x1000?text=Extent%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%202Image0> .

    <https://place-hold.it/600x600?text=Extent%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:12> .
}

ns1:c157f62e4f64a02523a73d74b5d69b8d7bad5cc73884d917fd9e5d2ce13bfd24 {
    <urn:paradicms_etl:pipeline:test_data:named_value:91> a cms:NamedValue ;
        dcterms:title "Named value 91" ;
        rdf:predicate vra:technique ;
        rdf:value "Technique 1" .
}

ns1:2340d674d46ef3173f99e206b301d50e6625548c9be8b018fa157fe644718e69 {
    <https://place-hold.it/1000x1000?text=Medium%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%204Image1> .

    <https://place-hold.it/600x600?text=Medium%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:44> .
}

ns1:51470320241915d59fc29c3d25598318d3035a774936faa9b0aa2b937c9e107a {
    <urn:paradicms_etl:pipeline:test_data:named_value:54> a cms:NamedValue ;
        dcterms:title "Named value 54" ;
        rdf:predicate dcterms:publisher ;
        rdf:value "Publisher 4" .
}

ns1:e8cd2b00f2ba37fc0bc5a5e86a0c5205fa182f419ff29480bc769fdcfda3d76a {
    <https://place-hold.it/1000x1000?text=Source%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:62> .
}

ns1:00616762eee66c01fd356134b279b9a7e575bbd48835056b6f2a5b2f359e89d7 {
    <https://place-hold.it/1000x1000?text=Subject%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%203Image0> .

    <https://place-hold.it/600x600?text=Subject%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:83> .
}

ns1:a438611cf95060d24b967191406cea263ad8861cd1c0e62756c09ea005eae66e {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work9Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work9 rights holder" ;
        dcterms:title "Institution1Collection0Work9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution1/collection0/work9> .
}

ns1:bdb0266e5c492f9390a891d21549d24db2f4123d3694c073fd0766ed4b252955 {
    <urn:paradicms_etl:pipeline:test_data:named_value:101> a cms:NamedValue ;
        dcterms:title "Named value 101" ;
        rdf:predicate dcterms:type ;
        rdf:value "Type 1" .
}

ns1:9a055427148b1ab60186f3928ff2ad8ac09118ff64ec405eb277a4225e24cb82 {
    <https://place-hold.it/1000x1000?text=Spatial%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:79> .
}

ns1:9813d49d4f59d8f7bdc755c9c9ae5755f38caff04009f112d73db3345dd4aa37 {
    <https://place-hold.it/1000x1000?text=Spatial%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%209Image1> .

    <https://place-hold.it/600x600?text=Spatial%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:79> .
}

ns1:9c48d13a72cda1668494710e2d5fd070cfc13768e94fb1045507b44497870cd4 {
    <https://place-hold.it/1000x1000?text=Spatial%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%208Image1> .

    <https://place-hold.it/75x75?text=Spatial%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:78> .
}

ns1:43f14704901967f2b5f59acd710ae23bd5452dd2002145dd23725ed600254354 {
    <https://place-hold.it/1000x1000?text=Publisher%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:51> .
}

ns1:1ec93aa04ab173a61d0acd174a21cb7862ed397dc43e8deebe7c512e83b4f0a9 {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work2Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Institution0Collection0Work2Image1> .

    <https://place-hold.it/600x600?text=Institution0Collection0Work2Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:creator <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work2 rights holder" ;
        dcterms:title "Institution0Collection0Work2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution0/collection0/work2> .
}

ns1:20a6e99fb5adeed8efaa1c312864196d0e372c0460b9f276e47c9c3e0cf29644 {
    <urn:paradicms_etl:pipeline:test_data:named_value:93> a cms:NamedValue ;
        dcterms:title "Named value 93" ;
        rdf:predicate vra:technique ;
        rdf:value "Technique 3" .
}

ns1:57865c9b61f13abbe602edeac0c4cefc627b2eeaee23e53da413ce600a87e8b6 {
    <https://place-hold.it/1000x1000?text=Type%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Type%209Image1> .

    <https://place-hold.it/600x600?text=Type%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:109> .
}

ns1:4800cb76f003a83768eb188493e0833ceaba2834e8a77f7bad181c555325dc6c {
    <https://place-hold.it/1000x1000?text=Publisher%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:56> .
}

ns1:7debedfbf4c3fea0c91db1ea22104a6d814a6e96b54c12b55540951d2463e07a {
    <https://place-hold.it/1000x1000?text=Technique%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%206Image1> .

    <https://place-hold.it/600x600?text=Technique%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:96> .
}

ns1:de92662e627c8d9a961d85ac1384ac63470688a61dab4ec32d6cf426a8e70ae4 {
    <http://creativecommons.org/licenses/by-nc/3.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:598f8f6bffa1a73630faf5bea583ec0a08b247a2678581cc6c100d95fa319a6b {
    <https://place-hold.it/1000x1000?text=Language%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:22> .
}

ns1:ac727278b2c4e66690268159eb76431e0ed37f23490bb84e9f3cddd379866070 {
    <http://creativecommons.org/licenses/by-nc-nd/4.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:42ec0adecd58982505c23e6471bce115ef646e2c4c4deaf8fb2663033b557863 {
    <https://place-hold.it/1000x1000?text=Language%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Language%208Image0> .

    <https://place-hold.it/75x75?text=Language%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:28> .
}

ns1:71073ee6441ea0c9e06e01188c42246330561bbad8211666340caea251baf581 {
    <https://place-hold.it/1000x1000?text=Publisher%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%208Image1> .

    <https://place-hold.it/75x75?text=Publisher%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:58> .
}

ns1:bfbf003aafc2858b802119dbb5d8247ba964dae29a612b9a4783ccd9a893bd5b {
    <https://place-hold.it/1000x1000?text=Publisher%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:51> .
}

ns1:72b4729b26f1fc5ce0891bd1afc9106829d0328038528215f887cb0a7b6f0323 {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork7Image0> a cms:Image ;
        dcterms:contributor <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork7 rights holder" ;
        dcterms:title "Institution0SharedWork7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution0/shared/work7> .
}

ns1:be7d09b84847d96b55d5818990384e5aadc3cc45248fbf6ac78bbcfacfa80e36 {
    <http://creativecommons.org/licenses/by-nc-sa/3.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:38988a804acef281f04ead8539fe2bcee335cdb9609f7d879357cb1aea878488 {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work9Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Institution1Collection0Work9Image0> .

    <https://place-hold.it/75x75?text=Institution1Collection0Work9Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work9 rights holder" ;
        dcterms:title "Institution1Collection0Work9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution1/collection0/work9> .
}

ns1:8248e1b11646c0394fd009820f29488776b6495395c5821c4098ae292a7f989a {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork15Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Institution1SharedWork15Image1> .

    <https://place-hold.it/600x600?text=Institution1SharedWork15Image1> a cms:Image ;
        dcterms:contributor <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:creator <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork15 rights holder" ;
        dcterms:title "Institution1SharedWork15 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution1/shared/work15> .
}

ns1:6c9aa5833b9ca9e0a20c000f60ce1d8f1ce824e722e6bf7c328427159080c790 {
    <https://place-hold.it/1000x1000?text=Material%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Material%207Image0> .

    <https://place-hold.it/600x600?text=Material%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:37> .
}

ns1:47be36921362fae38798d3529b5bb0dad60a0e56dbd33505d3dafe817d0360cf {
    <https://place-hold.it/1000x1000?text=Extent%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:10> .
}

ns1:cc82c444856e625e4b62ef8dc751970743799334e56f09945aeb45c1b8e37cf9 {
    <https://place-hold.it/1000x1000?text=Type%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:108> .
}

ns1:9e4cfe5136c6b24e95438d716ac3b91a3332821ef2b38a3447c457bb40fcaf07 {
    <https://place-hold.it/1000x1000?text=Source%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Source%209Image0> .

    <https://place-hold.it/600x600?text=Source%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:69> .
}

ns1:5a887e2ebb3a965af069f41c53d78f7ba5b83341bb701660475ba1c8904c1331 {
    <https://place-hold.it/1000x1000?text=Language%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:28> .
}

ns1:5e50bc44df477dd1302610e816fdd0fd79d959b1b86068c6df72574f789e5cbf {
    <https://place-hold.it/1000x1000?text=Cultural%20context%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%203Image0> .

    <https://place-hold.it/75x75?text=Cultural%20context%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:3> .
}

ns1:930c5d11a2b2e6b9206fff79107176ebcac48a00ab79ae1526018b15a0d0c462 {
    <https://place-hold.it/1000x1000?text=Material%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Material%204Image0> .

    <https://place-hold.it/75x75?text=Material%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:34> .
}

ns1:00cecd012fbbaa6e70cb3790a697c01b58ee33ed11e4547fa48b0deeb6840f34 {
    <https://place-hold.it/1000x1000?text=Medium%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%207Image1> .

    <https://place-hold.it/75x75?text=Medium%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:47> .
}

ns1:8288ef5dbcae94bc8ffd54848b8cf30fc0d4aa99106d9456bca29003135219ea {
    <urn:paradicms_etl:pipeline:test_data:named_value:60> a cms:NamedValue ;
        dcterms:title "Named value 60" ;
        rdf:predicate dcterms:source ;
        rdf:value "Source 0" .
}

ns1:992b5a78b41b6a3c7735565378ae49f5c03362b0b06b2bf82acc65147f8186a3 {
    <http://example.com/institution0/collection0/work1Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---02"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Institution0Collection0Work1 creation" ;
        cms:work <http://example.com/institution0/collection0/work1> .
}

ns1:5c60b18e9c1f244a9297368e3b6524926121f4cf0054b60822ec41bd651aeddf {
    <http://creativecommons.org/licenses/by-nd/2.5/> a creativecommons:License,
            cms:License ;
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
}

ns1:249a83a1c2cd8ecf905572730ad52cd61290a6df28200fdfab4815468eda1b06 {
    <https://place-hold.it/1000x1000?text=Source%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:63> .
}

ns1:ad92cc68dbd59e9d515347d013989a72c8bf3fe69c23387039651e56c16626d6 {
    <https://place-hold.it/1000x1000?text=Material%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:38> .
}

ns1:338e3952eadcb2d17eaad2b4df283aee2c05b39f20a56e8dc951222bf48470a8 {
    <http://example.com/person3> a cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "3, Person" ;
        foaf:familyName "3" ;
        foaf:givenName "Person" ;
        foaf:name "Person 3" .
}

ns1:140ee7f2feae9bea0f7b5717cccd49f023b614879f0cf456e11666c9bf44f3fd {
    <https://place-hold.it/1000x1000?text=Language%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Language%202Image1> .

    <https://place-hold.it/75x75?text=Language%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:22> .
}

ns1:87590570de4b6f2dc34f5a4ef96e963686e9b4cb6e5584695a8117d5b1192398 {
    <https://place-hold.it/1000x1000?text=Subject%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%202Image0> .

    <https://place-hold.it/600x600?text=Subject%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:82> .
}

ns1:ed86519274a1c988afca3709abf1c667b224e7dd366e9d50eec1d37102d85422 {
    <https://place-hold.it/1000x1000?text=Medium%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%209Image1> .

    <https://place-hold.it/600x600?text=Medium%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:49> .
}

ns1:0f2c86141e60278e739d054d2b7d3e57fe942a144384141999417f8dd52f421f {
    <urn:paradicms_etl:pipeline:test_data:named_value:61> a cms:NamedValue ;
        dcterms:title "Named value 61" ;
        rdf:predicate dcterms:source ;
        rdf:value "Source 1" .
}

ns1:1481f82d2842ef129d5362ac7ce37f3b3e8929b40108e1dc8187e7ffc2aa553b {
    <urn:paradicms_etl:pipeline:test_data:named_value:68> a cms:NamedValue ;
        dcterms:title "Named value 68" ;
        rdf:predicate dcterms:source ;
        rdf:value "Source 8" .
}

ns1:c81844bf0fe0e4b083aae66d300207be7d122a19402b2d33e3cc9cab778f8ac0 {
    <http://example.com/institution0/shared/work5Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:creator <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---06"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Institution0SharedWork5 creation" ;
        cms:work <http://example.com/institution0/shared/work5> .
}

ns1:a6447b6bf1a14f33367b72c63500cdce623255ae09cbd9bbb0789518c6d8be1e {
    <https://place-hold.it/1000x1000?text=Technique%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:97> .
}

ns1:188c5b88e5c0e75d134caeb6cb8e97c56e86acfefdc65a5caaab827b1b8f8b41 {
    <https://place-hold.it/1000x1000?text=Subject%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%205Image0> .

    <https://place-hold.it/600x600?text=Subject%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:85> .
}

ns1:0ad83bec1ded733e416969f48ff9119acc6f54b8c6aa9d171820077b55e7aa97 {
    <urn:paradicms_etl:pipeline:test_data:named_value:48> a cms:NamedValue ;
        dcterms:title "Named value 48" ;
        rdf:predicate dcterms:medium ;
        rdf:value "Medium 8" .
}

ns1:50ca744dbbb6c4a3a26de25c3a5d25597fa3d34cf1ae648d774460df49b02a99 {
    <https://place-hold.it/1000x1000?text=Subject%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:85> .
}

ns1:c68f9b799d316641cb2f2e50d4c085c64dfd99830a345b62d880c57aac1a7f46 {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork15Image0> a cms:Image ;
        dcterms:contributor <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:creator <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork15 rights holder" ;
        dcterms:title "Institution1SharedWork15 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution1/shared/work15> .
}

ns1:cb23f7f72f411859ac9b5f60240e9cf76de5779020d46033aa3cd6fd1964a87b {
    <https://place-hold.it/1000x1000?text=Material%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Material%206Image0> .

    <https://place-hold.it/600x600?text=Material%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:36> .
}

ns1:59f82f2ee2bfe99409490b2ae5e0e2361b4a5f8113a65708130b139db930c3e9 {
    <https://place-hold.it/1000x1000?text=Source%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Source%201Image0> .

    <https://place-hold.it/75x75?text=Source%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:61> .
}

ns1:ebc9c8252a927fa03cf643766e3b3c71cbabcc12c424e0e92556494eb33e942d {
    <urn:paradicms_etl:pipeline:test_data:named_value:106> a cms:NamedValue ;
        dcterms:title "Named value 106" ;
        rdf:predicate dcterms:type ;
        rdf:value "Type 6" .
}

ns1:9ad8a2060191e4a4935ead4147a6b29aac6e4f0a8d2a0b69c378eade02cea03d {
    <https://place-hold.it/1000x1000?text=Cultural%20context%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%202Image1> .

    <https://place-hold.it/75x75?text=Cultural%20context%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:2> .
}

ns1:220e13204225fceecb4ead2f792a8cdefdfcd44e334326fec973b728603e03a0 {
    <https://place-hold.it/1000x1000?text=Material%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:33> .
}

ns1:20fec1247d568e70c76c07d89af11b9e13c6ade4f63e26218ac2f08aff8677d3 {
    <https://place-hold.it/1000x1000?text=Material%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Material%204Image1> .

    <https://place-hold.it/600x600?text=Material%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:34> .
}

ns1:8d3d1dc2f22051ac66e69e4a27b4206d904c532963b449744b35d9239df91fec {
    <https://place-hold.it/1000x1000?text=Source%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Source%207Image0> .

    <https://place-hold.it/75x75?text=Source%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:67> .
}

ns1:46d37b6b733544928668e2a5aae62f5b2fc8ee6fb5123223ba191a681aef019b {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork6Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Institution0SharedWork6Image1> .

    <https://place-hold.it/600x600?text=Institution0SharedWork6Image1> a cms:Image ;
        dcterms:contributor <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:creator <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork6 rights holder" ;
        dcterms:title "Institution0SharedWork6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution0/shared/work6> .
}

ns1:ed4801c5c23be0258b66081d82531946ef2652713c5757e8c1fa9c0a854b828f {
    <https://place-hold.it/1000x1000?text=Subject%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:81> .
}

ns1:3d9cd1fe731993b56dab7cde762daf00a6905a92d617708ddc6ebeff0ce74ca1 {
    <https://place-hold.it/1000x1000?text=Medium%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%206Image1> .

    <https://place-hold.it/600x600?text=Medium%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:46> .
}

ns1:af7089c40b38bb363f63af9b10e31a3d9f67473f9eae63c4e0499152d352aaec {
    <https://place-hold.it/1000x1000?text=Publisher%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%201Image1> .

    <https://place-hold.it/75x75?text=Publisher%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:51> .
}

ns1:d23d01275b36165da927bec1446d91ab3a2327740712782fb95c523bb3da7c2d {
    <https://place-hold.it/1000x1000?text=Institution0Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Institution0Image1> .

    <https://place-hold.it/75x75?text=Institution0Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0 rights holder" ;
        dcterms:title "Institution0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution0> .
}

ns1:c828c1dc85420a795901cd46e059989f2d3c7585e6e745180bace8d94b031400 {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork5Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Institution0SharedWork5Image1> .

    <https://place-hold.it/600x600?text=Institution0SharedWork5Image1> a cms:Image ;
        dcterms:contributor <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:creator <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork5 rights holder" ;
        dcterms:title "Institution0SharedWork5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution0/shared/work5> .
}

ns1:b7b62551376c64377751ebf9313971e7f205f13b42c1e605f074f653f2f290b4 {
    <https://place-hold.it/1000x1000?text=Extent%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:12> .
}

ns1:261eaede4865b2578b6d1ef428d49764ec14c0e5a439f3c168faebd37a6e52d6 {
    <http://creativecommons.org/publicdomain/zero/1.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:5ed50dd886433fddd62e76dfd340af7811ff4b621cf786883b60255a576b65c0 {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork14Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:creator <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork14 rights holder" ;
        dcterms:title "Institution1SharedWork14 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution1/shared/work14> .
}

ns1:11e8216d99ac23cffb0b7a3da6cc19dc03e83a9b79b7dc3f6ae631542820467c {
    <https://place-hold.it/1000x1000?text=Cultural%20context%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%200Image1> .

    <https://place-hold.it/600x600?text=Cultural%20context%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:0> .
}

ns1:a7afdf52f6cbfc3336b583f5212f79c8dea76342e4e55bf8c186e5cf544053ed {
    <https://place-hold.it/1000x1000?text=Technique%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%208Image0> .

    <https://place-hold.it/75x75?text=Technique%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:98> .
}

ns1:7badede9b2be7909b8454ffe6a6fc63d0dbdb6b684c82076c43b78dddda55cdb {
    <https://place-hold.it/1000x1000?text=Spatial%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%202Image1> .

    <https://place-hold.it/600x600?text=Spatial%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:72> .
}

ns1:6c74cec210b6bf52d76a65f89723642bd6778c7013c71934de5c89007d5a0aec {
    <urn:paradicms_etl:pipeline:test_data:named_value:24> a cms:NamedValue ;
        dcterms:title "Named value 24" ;
        rdf:predicate dcterms:language ;
        rdf:value "Language 4" .
}

ns1:ff8aa1bfbde11b514dc8140fdae21970c1ffe03afc221dd47784b016d614eb56 {
    <urn:paradicms_etl:pipeline:test_data:named_value:20> a cms:NamedValue ;
        dcterms:title "Named value 20" ;
        rdf:predicate dcterms:language ;
        rdf:value "Language 0" .
}

ns1:3dd2d632733f968d21454cbaef04747d874bf9bf3211aad78b6f84918724d749 {
    <https://place-hold.it/1000x1000?text=Material%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:37> .
}

ns1:7b5108e9e42867afed9dfe54e995b1d099a410534163d2eb469cabe9d4cf250b {
    <https://place-hold.it/1000x1000?text=Subject%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%204Image0> .

    <https://place-hold.it/600x600?text=Subject%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:84> .
}

ns1:d00a8fc6e3bac5b0e048e59f3c678173acfa1e53a535a07c57182f41f444ea1d {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work3Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:creator <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work3 rights holder" ;
        dcterms:title "Institution0Collection0Work3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution0/collection0/work3> .
}

ns1:ab601c02fed03e33c786e16e4eaf4a9470f7cf420ee971484c40759fd6ec6f78 {
    <https://place-hold.it/1000x1000?text=Person%201> a cms:Image ;
        dcterms:creator "Person 1 image creator" ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Person 1 image rights holder" ;
        dcterms:title "Person 1 image" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/person1> .
}

ns1:36f96ebd202d0bb2dd9ec0bd7a4d11eb52b549c1e3cda2c3ead0f3598fc94db3 {
    <https://place-hold.it/1000x1000?text=Subject%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%202Image1> .

    <https://place-hold.it/75x75?text=Subject%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:82> .
}

ns1:29894a4cf8a326f07403b015ce5eb7dbbff962b1f6bf9aa5c66ff65a59510b98 {
    <https://place-hold.it/1000x1000?text=Technique%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%209Image0> .

    <https://place-hold.it/75x75?text=Technique%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:99> .
}

ns1:1c5ad03fe5a0d7516fb2446d24d7a72c6b5e5c35370774c7eaaa949fd922ce17 {
    <https://place-hold.it/1000x1000?text=Extent%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%204Image1> .

    <https://place-hold.it/600x600?text=Extent%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:14> .
}

ns1:fb23f7e9abcbd201dae53e49c2c72fc663fd95ddadcac8b2af41d6aa55f835fe {
    <https://place-hold.it/1000x1000?text=Publisher%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:54> .
}

ns1:e411589a7af11448a5eaf719a2099995e07ab06d49113c61d209621f2993dd30 {
    <urn:paradicms_etl:pipeline:test_data:named_value:104> a cms:NamedValue ;
        dcterms:title "Named value 104" ;
        rdf:predicate dcterms:type ;
        rdf:value "Type 4" .
}

ns1:c504d7b6d354329d76c6f77fc02c40f4c77c13785dedfb412e23b04a35c570bb {
    <urn:paradicms_etl:pipeline:test_data:named_value:28> a cms:NamedValue ;
        dcterms:title "Named value 28" ;
        rdf:predicate dcterms:language ;
        rdf:value "Language 8" .
}

ns1:96ff3ec9e38ceb056c1e289b452944841db6fca1e0a49f3f744f362ea002d132 {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work2Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:creator <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work2 rights holder" ;
        dcterms:title "Institution0Collection0Work2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution0/collection0/work2> .
}

ns1:f7e8c422737084da65035c4dea777c3dc701972dee104a45b67640562fefd29b {
    <urn:paradicms_etl:pipeline:test_data:named_value:80> a cms:NamedValue ;
        dcterms:title "Named value 80" ;
        rdf:predicate dcterms:subject ;
        rdf:value "Subject 0" .
}

ns1:b26328cf04a3732d84fbadb9f1b0c572a862181169e378259cff26ec6a77a6a9 {
    <urn:paradicms_etl:pipeline:test_data:named_value:70> a cms:NamedValue ;
        dcterms:title "Named value 70" ;
        rdf:predicate dcterms:spatial ;
        rdf:value "Spatial 0" .
}

ns1:1a44537543c8bac481bca4c1e59fd0fe5e57dddc45de34410520b60a8f5993eb {
    <https://place-hold.it/1000x1000?text=Medium%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%207Image0> .

    <https://place-hold.it/600x600?text=Medium%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:47> .
}

ns1:19b9589fc9283c284e71572314c10d68b4fefdbbe72297e83e05e268c72d3eab {
    <http://creativecommons.org/licenses/nc/1.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:e7e71adefc8d1866b3705fbe60dbd6334958307538bdde1afa37574d96ec5cf1 {
    <https://place-hold.it/1000x1000?text=Source%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Source%202Image1> .

    <https://place-hold.it/600x600?text=Source%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:62> .
}

ns1:95d372a9a7617725dfae6ad2c4ae028bffad0502b0658a14f7962a690bc8baef {
    <https://place-hold.it/1000x1000?text=Cultural%20context%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%201Image1> .

    <https://place-hold.it/75x75?text=Cultural%20context%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:1> .
}

ns1:ae43b9892a64096f5c71fbd09da5e04521c851287e81e06da245ed53fb39d65c {
    <https://place-hold.it/1000x1000?text=Extent%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%200Image0> .

    <https://place-hold.it/75x75?text=Extent%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:10> .
}

ns1:3eb3963192b8f2e46f02c2bfcf873fe49cb2ba9247fbf9b63b040924083382d5 {
    <https://place-hold.it/1000x1000?text=Source%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Source%208Image0> .

    <https://place-hold.it/600x600?text=Source%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:68> .
}

ns1:868af4999fa995164e0932442bb784d11e0e8bf01a42082d746142c18544508c {
    <https://place-hold.it/1000x1000?text=Material%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:30> .
}

ns1:651988425a0513f345e05cfab4dad2b7f1115bdd44cbfa260c56274eecf13dfb {
    <https://place-hold.it/1000x1000?text=Spatial%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%204Image0> .

    <https://place-hold.it/75x75?text=Spatial%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:74> .
}

ns1:4d5cd078c5b0b24e237b123a737b7efa64e7717659b5618bbb31bb37bd838f4b {
    <https://place-hold.it/1000x1000?text=Extent%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%205Image1> .

    <https://place-hold.it/75x75?text=Extent%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:15> .
}

ns1:6f8689e906efe0db8249c29ade5dae953eec8e716d15b2b71d7f221e69751603 {
    <https://place-hold.it/1000x1000?text=Technique%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%207Image0> .

    <https://place-hold.it/600x600?text=Technique%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:97> .
}

ns1:de3ca9cec54724ba32434ee6c783215064064389c4b2aeab6370da1bdda8bd76 {
    <https://place-hold.it/1000x1000?text=Publisher%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:53> .
}

ns1:1ce1ff9c293d0eb7ffc1d84190d5e6215b560e3e7a26d1f01bfc06f5f4e5615c {
    <https://place-hold.it/1000x1000?text=Spatial%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%201Image1> .

    <https://place-hold.it/600x600?text=Spatial%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:71> .
}

ns1:db4270faed76e9569e5a1786b4a30037917ff8c1cb3ea41ece81c99afe3edecc {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork13Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Institution1SharedWork13Image0> .

    <https://place-hold.it/75x75?text=Institution1SharedWork13Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:creator <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork13 rights holder" ;
        dcterms:title "Institution1SharedWork13 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution1/shared/work13> .
}

ns1:5674e71f58b50573a95321052fda2c9703b067389604a298a105f6849d2db733 {
    <urn:paradicms_etl:pipeline:test_data:named_value:38> a cms:NamedValue ;
        dcterms:title "Named value 38" ;
        rdf:predicate vra:material ;
        rdf:value "Material 8" .
}

ns1:5dd8fbbd91d050bc9f76013a0150cfe25c146c07099313526556b435d1eadcc8 {
    <https://place-hold.it/1000x1000?text=Language%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:22> .
}

ns1:d530ffbc04a7052f52cef807ee5a30bfb8849e3e1b1066cf3e0778534883170b {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork13Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Institution1SharedWork13Image1> .

    <https://place-hold.it/75x75?text=Institution1SharedWork13Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:creator <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork13 rights holder" ;
        dcterms:title "Institution1SharedWork13 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution1/shared/work13> .
}

ns1:14020f3a032f425f30bb6f01d0267c5400ad57f2002b38b6b827449d4b554128 {
    <https://place-hold.it/1000x1000?text=Material%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Material%205Image0> .

    <https://place-hold.it/600x600?text=Material%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:35> .
}

ns1:dc183dd4c5e8dd41c826da47f2de84890536c0208eb456e6e3a6035907996c8f {
    <https://place-hold.it/1000x1000?text=Subject%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%209Image0> .

    <https://place-hold.it/600x600?text=Subject%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:89> .
}

ns1:90cfa888c05be7c470aeb08fb3a1c3d699279f8a34425a89178fe3ad4949c416 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%202Image0> .

    <https://place-hold.it/600x600?text=Cultural%20context%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:2> .
}

ns1:37721bef4b252d17ec946af7f4bff7f17159db7dfa6063a96b6e31cb8e8beb81 {
    <https://place-hold.it/1000x1000?text=Publisher%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%206Image0> .

    <https://place-hold.it/600x600?text=Publisher%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:56> .
}

ns1:8755ee8b81e5e3ac862f4053cdd071cafa45bf811a48fbcbf7bdd4c63e070df0 {
    <https://place-hold.it/1000x1000?text=Technique%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%205Image0> .

    <https://place-hold.it/600x600?text=Technique%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:95> .
}

ns1:f685aede5d7780da0c0585b40cd2422bb62b556d939f4a6ece40b2599317d641 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%205Image0> .

    <https://place-hold.it/75x75?text=Cultural%20context%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:5> .
}

ns1:07669652f7876d1fe9d141e74387c2ca4f305d27d9b133be31a8a5977d83f4d1 {
    <https://place-hold.it/1000x1000?text=Language%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Language%203Image1> .

    <https://place-hold.it/75x75?text=Language%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:23> .
}

ns1:3cfe9674853572621947fa3fe1bb52941c9fcabe984836276d15a1703aeec420 {
    <https://place-hold.it/1000x1000?text=Medium%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%200Image1> .

    <https://place-hold.it/75x75?text=Medium%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:40> .
}

ns1:6702dc3ceb653e40f1cbc0ecceb09bc1be7cc61956c269570f4ecdc22b32fc9d {
    <urn:paradicms_etl:pipeline:test_data:named_value:47> a cms:NamedValue ;
        dcterms:title "Named value 47" ;
        rdf:predicate dcterms:medium ;
        rdf:value "Medium 7" .
}

ns1:c3a7e9ced2e36397dd625dbc0953d97c4a445c9e38b6ed3604a91878b6b3970e {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work10Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Institution1Collection0Work10Image0> .

    <https://place-hold.it/75x75?text=Institution1Collection0Work10Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work10 rights holder" ;
        dcterms:title "Institution1Collection0Work10 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution1/collection0/work10> .
}

ns1:a565751b28ab86d5caf929b3b16dab618441f6cdec2c47a12afce421c9b6e2ea {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work3Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Institution0Collection0Work3Image1> .

    <https://place-hold.it/600x600?text=Institution0Collection0Work3Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:creator <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work3 rights holder" ;
        dcterms:title "Institution0Collection0Work3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution0/collection0/work3> .
}

ns1:68f81a9ba1883e691bc28c8ca859afed4ba8c0e7fb2231200ba19aa89476803d {
    <urn:paradicms_etl:pipeline:test_data:named_value:26> a cms:NamedValue ;
        dcterms:title "Named value 26" ;
        rdf:predicate dcterms:language ;
        rdf:value "Language 6" .
}

ns1:dc56ac12be4f56ee401d95b853c2f6b0a54cb235cab40a23805e0855ce1c30ac {
    <https://place-hold.it/1000x1000?text=Cultural%20context%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%209Image1> .

    <https://place-hold.it/600x600?text=Cultural%20context%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:9> .
}

ns1:f89be819862f1463d922d57af5ae81e4ec9bb7d0363dc4554818aea29c8215de {
    <urn:paradicms_etl:pipeline:test_data:named_value:65> a cms:NamedValue ;
        dcterms:title "Named value 65" ;
        rdf:predicate dcterms:source ;
        rdf:value "Source 5" .
}

ns1:f45c4a5103767f0421da4c592260fd5ae8e8ed8eb3f12e30ef89a00b26d6dfd0 {
    <https://place-hold.it/1000x1000?text=Extent%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:14> .
}

ns1:b541e47c7e350dfe8ca5d2ddef2aa19e7a49b33709f59fc5bcdb9a39423d6c6a {
    <https://place-hold.it/1000x1000?text=Extent%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%204Image1> .

    <https://place-hold.it/75x75?text=Extent%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:14> .
}

ns1:22e3c659a4a23a7c2a00ba08e8d970b31604f390c00e82d4c26ec0c8477b92bd {
    <https://place-hold.it/1000x1000?text=Technique%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:99> .
}

ns1:09946dcf743efd1ef34fd36fec3255c316a99e36ea557117b722190ab30948b3 {
    <https://place-hold.it/1000x1000?text=Source%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Source%201Image1> .

    <https://place-hold.it/75x75?text=Source%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:61> .
}

ns1:aa30c37200504fda14be2aebad5997a6d4b5ee1d69bc8fe12254f5f05b539361 {
    <https://place-hold.it/1000x1000?text=Type%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:107> .
}

ns1:c8179a39fda2abff370eb07b02147e5dae8b403b3afba31c45072c6cb760fe87 {
    <https://place-hold.it/1000x1000?text=Material%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:31> .
}

ns1:5b19f3024646134af9629b8bda1462577d0a918c23654a4116cc3b682a56682e {
    <https://place-hold.it/1000x1000?text=Medium%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%203Image1> .

    <https://place-hold.it/75x75?text=Medium%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:43> .
}

ns1:d7fa4e1b824c32435527549d3cfbb7808c0fedd673a669da2409e040b8837e05 {
    <urn:paradicms_etl:pipeline:test_data:named_value:74> a cms:NamedValue ;
        dcterms:title "Named value 74" ;
        rdf:predicate dcterms:spatial ;
        rdf:value "Spatial 4" .
}

ns1:59649248754e27908a4ee184de18e598d96332df69ad3e3de8744c1f725a967a {
    <https://place-hold.it/1000x1000?text=Spatial%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%206Image0> .

    <https://place-hold.it/600x600?text=Spatial%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:76> .
}

ns1:8b32f5df119adb1644ba7d6f4e8c9a880385cf4cf4b18e2bbacf8ef59d9f37b6 {
    <https://place-hold.it/1000x1000?text=Spatial%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:74> .
}

ns1:f1f82280cc3e9d7af0b92d4aa07ee2809a38d689fc2e5e4cc5b6c22c763a008c {
    <https://place-hold.it/1000x1000?text=Medium%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:45> .
}

ns1:02c8f5d1bc244082d4bf947f37f5d5ac9c98b027f948a3ef1d9a60d1c391d03c {
    <https://place-hold.it/1000x1000?text=Source%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Source%208Image1> .

    <https://place-hold.it/75x75?text=Source%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:68> .
}

ns1:8eab10301397e98f0b207d3e890be10cd713ab41680c2e6b4dd40333ae3ae334 {
    <http://creativecommons.org/licenses/by/2.5/> a creativecommons:License,
            cms:License ;
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
}

ns1:497509310a97eb4308a5fb186ea54881c62261423a85ea64417739bce53cf426 {
    <https://place-hold.it/1000x1000?text=Medium%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%205Image0> .

    <https://place-hold.it/75x75?text=Medium%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:45> .
}

ns1:021fd10b4e82d85568d1c8e8a7af31cd0c9d568677dd593eed4f539d8b5e1a2a {
    <urn:paradicms_etl:pipeline:test_data:named_value:2> a cms:NamedValue ;
        dcterms:title "Named value 2" ;
        rdf:predicate vra:culturalContext ;
        rdf:value "Cultural context 2" .
}

ns1:7470bacdd41499c63ea7c1e71c5a13b4626ff46b0438eef924704481554213dd {
    <https://place-hold.it/1000x1000?text=Source%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Source%205Image1> .

    <https://place-hold.it/75x75?text=Source%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:65> .
}

ns1:09d502ed027360767503592c18fbfc99228edf7c67094e694a7c9cb330516396 {
    <https://place-hold.it/1000x1000?text=Spatial%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%207Image1> .

    <https://place-hold.it/600x600?text=Spatial%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:77> .
}

ns1:231af04819ccf7293e83abe6a1739ac6c085be81ede39318b0150f8c5dd6a5b2 {
    <https://place-hold.it/1000x1000?text=Subject%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%206Image0> .

    <https://place-hold.it/600x600?text=Subject%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:86> .
}

ns1:4c66276dcd9fa206d6d4a450d4c45d3da41dd94b73a9137d7df146141bd8c207 {
    <https://place-hold.it/1000x1000?text=Publisher%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%202Image0> .

    <https://place-hold.it/600x600?text=Publisher%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:52> .
}

ns1:c135efedcafe7a3f59eb86b1c6e02c6fd0b1c70f2245325cfc4befcae9088a82 {
    <urn:paradicms_etl:pipeline:test_data:named_value:52> a cms:NamedValue ;
        dcterms:title "Named value 52" ;
        rdf:predicate dcterms:publisher ;
        rdf:value "Publisher 2" .
}

ns1:f45cbac8ec729570499b01f54e2397bf68517fa5e5bf197729070f1a519d92dd {
    <https://place-hold.it/1000x1000?text=Source%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:67> .
}

ns1:781f775c184f7c7c7b20d2691a0387f5139879d1fde42cb54c053985f3cce703 {
    <urn:paradicms_etl:pipeline:test_data:named_value:72> a cms:NamedValue ;
        dcterms:title "Named value 72" ;
        rdf:predicate dcterms:spatial ;
        rdf:value "Spatial 2" .
}

ns1:9c4a9ed02e52900ce6d487b9198d9f82e1e64864248534fda57ddc03620c5517 {
    <https://place-hold.it/1000x1000?text=Subject%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:86> .
}

ns1:64889c4f05e29777613d7b83749df2629b7749d22ea20fffd622b22a9f33e2cf {
    <http://example.com/organization0> a cms:Organization ;
        foaf:name "Organization 0" ;
        foaf:page <http://example.com/organization0page> .
}

ns1:3a7132246638896f8e570f09ff7f4db389e47f9207354197898e82ad3217f1de {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork12Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Institution1SharedWork12Image0> .

    <https://place-hold.it/75x75?text=Institution1SharedWork12Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:creator <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork12 rights holder" ;
        dcterms:title "Institution1SharedWork12 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution1/shared/work12> .
}

ns1:bc075ecf5a91acb59141f58fa4460e1af64e7066311cfc8f076ec9ebc6537170 {
    <https://place-hold.it/1000x1000?text=Medium%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%200Image0> .

    <https://place-hold.it/75x75?text=Medium%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:40> .
}

ns1:25bfd77fa698ba3e9f4cf50de58cfdda7c9ea38bf8a3950590c38ae39f3e81cb {
    <https://place-hold.it/1000x1000?text=Subject%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%206Image1> .

    <https://place-hold.it/75x75?text=Subject%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:86> .
}

ns1:20766d0342c41c2ce6c8e7746dad1be81fdeaae09eaae9072ae2da62a9c810c0 {
    <https://place-hold.it/1000x1000?text=Publisher%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:56> .
}

ns1:cca0d11be8137cf03b8681bdd33761ee78c7f084f97168c0ac78268b71f56ccc {
    <https://place-hold.it/1000x1000?text=Material%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:34> .
}

ns1:8d0269bd7744a6605d98f128af189f267f246f6146ca3afe8bc641eff061dec8 {
    <https://place-hold.it/1000x1000?text=Material%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Material%209Image1> .

    <https://place-hold.it/600x600?text=Material%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:39> .
}

ns1:761faa15ca4f61dd7f9cf673dd19b13257099c834d38ebbf904ecd98462dc0bb {
    <https://place-hold.it/1000x1000?text=Medium%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%204Image0> .

    <https://place-hold.it/75x75?text=Medium%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:44> .
}

ns1:b93adcbab97df8125297063e0f40b0babe1ebb13e623a89a9eb9910708ec9185 {
    <http://example.com/institution0/collection0/work3> a cms:Work ;
        dcterms:alternative "Institution0Collection0Work3 alternative title 0",
            "Institution0Collection0Work3 alternative title 1" ;
        dcterms:contributor <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:created [ a cms:DateTimeDescription ;
                time:day "---04"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:creator <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:date "2020-08-05",
            "2020-08-06" ;
        dcterms:extent <urn:paradicms_etl:pipeline:test_data:named_value:13>,
            <urn:paradicms_etl:pipeline:test_data:named_value:14> ;
        dcterms:identifier "Institution0Collection0Work3Id0",
            "Institution0Collection0Work3Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:test_data:named_value:23>,
            <urn:paradicms_etl:pipeline:test_data:named_value:24> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:test_data:named_value:43>,
            <urn:paradicms_etl:pipeline:test_data:named_value:44> ;
        dcterms:provenance "Institution0Collection0Work3 provenance 0",
            "Institution0Collection0Work3 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:test_data:named_value:53>,
            <urn:paradicms_etl:pipeline:test_data:named_value:54> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work3 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:test_data:named_value:63>,
            <urn:paradicms_etl:pipeline:test_data:named_value:64> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:test_data:named_value:73>,
            <urn:paradicms_etl:pipeline:test_data:named_value:74> ;
        dcterms:subject <urn:paradicms_etl:pipeline:test_data:named_value:83>,
            <urn:paradicms_etl:pipeline:test_data:named_value:84> ;
        dcterms:title "Institution0Collection0Work3" ;
        dcterms:type <urn:paradicms_etl:pipeline:test_data:named_value:103>,
            <urn:paradicms_etl:pipeline:test_data:named_value:104> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:test_data:named_value:3>,
            <urn:paradicms_etl:pipeline:test_data:named_value:4> ;
        vra:material <urn:paradicms_etl:pipeline:test_data:named_value:33>,
            <urn:paradicms_etl:pipeline:test_data:named_value:34> ;
        vra:technique <urn:paradicms_etl:pipeline:test_data:named_value:93>,
            <urn:paradicms_etl:pipeline:test_data:named_value:94> ;
        cms:collection <http://example.com/institution0/collection0> ;
        cms:institution <http://example.com/institution0> .
}

ns1:fbcb94082c37178057ca6ec6e1b938bfeb4fbd444c62f0a40f63d867f2990e9b {
    <https://place-hold.it/1000x1000?text=Material%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:36> .
}

ns1:281475110648bc0c12ef40e2ddfec758066c789951f2c913aa44dc6019dc54e5 {
    <http://example.com/institution0/collection0/work2> a cms:Work ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Institution0Collection0Work2 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:alternative "Institution0Collection0Work2 alternative title 0",
            "Institution0Collection0Work2 alternative title 1" ;
        dcterms:contributor <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:created [ a cms:DateTimeDescription ;
                time:day "---03"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:creator <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:date "2020-08-06",
            "2020-08-07" ;
        dcterms:description "Institution0Collection0Work2 description 0",
            "Institution0Collection0Work2 description 1",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
        dcterms:extent <urn:paradicms_etl:pipeline:test_data:named_value:12>,
            <urn:paradicms_etl:pipeline:test_data:named_value:13> ;
        dcterms:identifier "Institution0Collection0Work2Id0",
            "Institution0Collection0Work2Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:test_data:named_value:22>,
            <urn:paradicms_etl:pipeline:test_data:named_value:23> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:test_data:named_value:42>,
            <urn:paradicms_etl:pipeline:test_data:named_value:43> ;
        dcterms:provenance "Institution0Collection0Work2 provenance 0",
            "Institution0Collection0Work2 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:test_data:named_value:52>,
            <urn:paradicms_etl:pipeline:test_data:named_value:53> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work2 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:test_data:named_value:62>,
            <urn:paradicms_etl:pipeline:test_data:named_value:63> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:test_data:named_value:72>,
            <urn:paradicms_etl:pipeline:test_data:named_value:73> ;
        dcterms:subject <urn:paradicms_etl:pipeline:test_data:named_value:82>,
            <urn:paradicms_etl:pipeline:test_data:named_value:83> ;
        dcterms:title "Institution0Collection0Work2" ;
        dcterms:type <urn:paradicms_etl:pipeline:test_data:named_value:102>,
            <urn:paradicms_etl:pipeline:test_data:named_value:103> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:test_data:named_value:2>,
            <urn:paradicms_etl:pipeline:test_data:named_value:3> ;
        vra:material <urn:paradicms_etl:pipeline:test_data:named_value:32>,
            <urn:paradicms_etl:pipeline:test_data:named_value:33> ;
        vra:technique <urn:paradicms_etl:pipeline:test_data:named_value:92>,
            <urn:paradicms_etl:pipeline:test_data:named_value:93> ;
        cms:collection <http://example.com/institution0/collection0> ;
        cms:institution <http://example.com/institution0> ;
        foaf:page <http://example.com/work/2> .
}

ns1:52adf920590c1963a50cee2fc6131d98e0f0a5be994d02d85887e289836ad3e3 {
    <urn:paradicms_etl:pipeline:test_data:named_value:49> a cms:NamedValue ;
        dcterms:title "Named value 49" ;
        rdf:predicate dcterms:medium ;
        rdf:value "Medium 9" .
}

ns1:72c0f437dd086771a4e309d22d11b3c046d7b5f11e80376304398927be4782f8 {
    <http://creativecommons.org/licenses/LGPL/2.1/> a creativecommons:License,
            cms:License ;
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
}

ns1:30e8580d656788c6287bd81f7af1c0b19803e5063d1d9886f69c74019be10f51 {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork7Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Institution0SharedWork7Image1> .

    <https://place-hold.it/75x75?text=Institution0SharedWork7Image1> a cms:Image ;
        dcterms:contributor <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork7 rights holder" ;
        dcterms:title "Institution0SharedWork7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution0/shared/work7> .
}

ns1:2cdd61603d78cf3ae5b901842acf45e096a569a44f317676443d6f516d7c6114 {
    <https://place-hold.it/1000x1000?text=Type%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Type%205Image0> .

    <https://place-hold.it/75x75?text=Type%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:105> .
}

ns1:938924a8a67bf35a7ffd01a09ca307efdcb2f520d224053fdda7e92492db5950 {
    <https://place-hold.it/1000x1000?text=Language%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Language%200Image1> .

    <https://place-hold.it/75x75?text=Language%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:20> .
}

ns1:d5f656c191eaaf66048ad812b082de6486e108236c7d8dc08d5aa6b133b002f1 {
    <https://place-hold.it/1000x1000?text=Type%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:109> .
}

ns1:03cc29046438c17b0a7652774577a134a949093501788eb7ba27c10e44b21ff5 {
    <urn:paradicms_etl:pipeline:test_data:named_value:31> a cms:NamedValue ;
        dcterms:title "Named value 31" ;
        rdf:predicate vra:material ;
        rdf:value "Material 1" .
}

ns1:477b246873a337dd60aeef1f17468aaacd674cf397ca3ed64e67b2bfb2cf8d1a {
    <https://place-hold.it/1000x1000?text=Subject%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:81> .
}

ns1:9eb332ade5cb47d254904e43fa032eb99e797e12debcf4066ea89c7cdcf2ab55 {
    <https://place-hold.it/1000x1000?text=Source%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Source%207Image1> .

    <https://place-hold.it/75x75?text=Source%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:67> .
}

ns1:3f0c304686afddf33f6e534b2ce55d881664d899cfdf0e046b4b2e1d1d9420b8 {
    <https://place-hold.it/1000x1000?text=Subject%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%201Image1> .

    <https://place-hold.it/600x600?text=Subject%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:81> .
}

ns1:01959239da48272c8b233238c289398b7caa73334cd1b882bba1fe924b43aa4b {
    <https://place-hold.it/1000x1000?text=Medium%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%205Image1> .

    <https://place-hold.it/75x75?text=Medium%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:45> .
}

ns1:2e6892264abfd6c8f963e1060ff49a161e8b176195c7fe48e858a5065c85ab45 {
    <https://place-hold.it/1000x1000?text=Extent%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%206Image1> .

    <https://place-hold.it/600x600?text=Extent%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:16> .
}

ns1:30ab2ea19dce1cc08cc4081bc56d80664d5df2d283259a9cd6ab1c95416795cf {
    <https://place-hold.it/1000x1000?text=Spatial%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%207Image0> .

    <https://place-hold.it/600x600?text=Spatial%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:77> .
}

ns1:eae0129197d997a0f61c0fe5db393c7109d98b71e4a47821451fe1eefb084a4e {
    <urn:paradicms_etl:pipeline:test_data:named_value:44> a cms:NamedValue ;
        dcterms:title "Named value 44" ;
        rdf:predicate dcterms:medium ;
        rdf:value "Medium 4" .
}

ns1:53b194856830466a99378807e540756cd85081a8510b4c762f7a0be276f40594 {
    <https://place-hold.it/1000x1000?text=Publisher%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%203Image1> .

    <https://place-hold.it/600x600?text=Publisher%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:53> .
}

ns1:5d4c8b08496a2ef5626fe92a26d84a19d94ed6e01ec54e8422e9a726d5b61229 {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork14Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:creator <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork14 rights holder" ;
        dcterms:title "Institution1SharedWork14 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution1/shared/work14> .
}

ns1:8857937b6f62a846013db932beadeb0d5a706592f34ecc4080aed39c4c6a11e1 {
    <https://place-hold.it/1000x1000?text=Type%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Type%205Image1> .

    <https://place-hold.it/75x75?text=Type%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:105> .
}

ns1:b5e194440dd5b598940ccdda9caab1d29a95517f2b6fdfc4d780e7b8cb96a2a4 {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work0Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Institution0Collection0Work0Image0> .

    <https://place-hold.it/600x600?text=Institution0Collection0Work0Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work0 rights holder" ;
        dcterms:title "Institution0Collection0Work0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution0/collection0/work0> .
}

ns1:6143bcf7272ba899544cac3e9a3f494f09eb4b736c88d0e53e590807b38fa21d {
    <https://place-hold.it/1000x1000?text=Medium%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%200Image0> .

    <https://place-hold.it/600x600?text=Medium%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:40> .
}

ns1:110dee1964d5675f9de32e60358f90c60ce547321005944518726a178c31c851 {
    <https://place-hold.it/1000x1000?text=Subject%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%200Image0> .

    <https://place-hold.it/600x600?text=Subject%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:80> .
}

ns1:5e78be71ceeda94c91509f7c3c75a44d84728c72e8cb92cdb2312eb2e8a6616d {
    <https://place-hold.it/1000x1000?text=Medium%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%203Image0> .

    <https://place-hold.it/75x75?text=Medium%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:43> .
}

ns1:53b41e9207f7d9b95103243b28f43dfeec0cb6f4c7198382ddbe4201ca10728f {
    <https://place-hold.it/1000x1000?text=Extent%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:13> .
}

ns1:71e09c62c3788eb54871319acaef3439850274dd44dbbe8be2d97c3ebb831b53 {
    <https://place-hold.it/1000x1000?text=Language%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:27> .
}

ns1:0e411bf37a47944f4622cd0701e2b1fc0188706cf841764f29b0e1288ad6d49b {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work10Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Institution1Collection0Work10Image0> .

    <https://place-hold.it/600x600?text=Institution1Collection0Work10Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work10 rights holder" ;
        dcterms:title "Institution1Collection0Work10 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution1/collection0/work10> .
}

ns1:f40b00b49002eeb8a0a90d915ac764df1e82b2e00e0994f706a9a78e30a9347d {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork6Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Institution0SharedWork6Image0> .

    <https://place-hold.it/75x75?text=Institution0SharedWork6Image0> a cms:Image ;
        dcterms:contributor <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:creator <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork6 rights holder" ;
        dcterms:title "Institution0SharedWork6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution0/shared/work6> .
}

ns1:7f6c6a2e8ae8f01381f9daefb5ecdf6c5eb26aaecbfcafa781c853df76dc3f68 {
    <https://place-hold.it/1000x1000?text=Language%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Language%206Image0> .

    <https://place-hold.it/600x600?text=Language%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:26> .
}

ns1:eaea5251ea3d44c8edec58b1b106e9636c1930faa9e52020ccd40e7720404c81 {
    <https://place-hold.it/1000x1000?text=Subject%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%209Image1> .

    <https://place-hold.it/600x600?text=Subject%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:89> .
}

ns1:85efc346867c34b58f1a9a313f992406b2a4a9b38926b9da97181aed16e6eb26 {
    <https://place-hold.it/1000x1000?text=Technique%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%202Image1> .

    <https://place-hold.it/75x75?text=Technique%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:92> .
}

ns1:b7ecc1b67b34a23f5c25c0be7acacc1135b26de4dfcf97326a28bd30c5f23135 {
    <http://example.com/institution1/collection0/work11Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---12"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Institution1Collection0Work11 creation" ;
        cms:work <http://example.com/institution1/collection0/work11> .
}

ns1:e754b8dc8c1de43df6e16db824ab8a052cf1a3471febb71e6f6c1a6b19150a88 {
    <urn:paradicms_etl:pipeline:test_data:named_value:4> a cms:NamedValue ;
        dcterms:title "Named value 4" ;
        rdf:predicate vra:culturalContext ;
        rdf:value "Cultural context 4" .
}

ns1:c8dd255f820840086ad9be9f4daf031a17b1ec21801b842ae7b95898aa1f17af {
    <https://place-hold.it/1000x1000?text=Extent%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:11> .
}

ns1:e6ddcd9ccf2ed1d7218eafa662a7ea079efda643bd8c4c84817a2bf3524fb2a4 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%204Image0> .

    <https://place-hold.it/75x75?text=Cultural%20context%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:4> .
}

ns1:f9efe264cec5bb40006f995c4e3dca8d368ddfd92a4011d7ccf89ccd07bf2533 {
    <https://place-hold.it/1000x1000?text=Language%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Language%205Image0> .

    <https://place-hold.it/600x600?text=Language%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:25> .
}

ns1:366ae58f44d4e35504d42149d6aa08b5bcd56a1712e48a34aa005fc29b425066 {
    <https://place-hold.it/1000x1000?text=Source%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Source%201Image1> .

    <https://place-hold.it/600x600?text=Source%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:61> .
}

ns1:253616a027d5cfd0a00cf8629e17f4df26bf7f306e0875e1ff4f3c0a1ecadba5 {
    <https://place-hold.it/1000x1000?text=Spatial%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%207Image0> .

    <https://place-hold.it/75x75?text=Spatial%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:77> .
}

ns1:22157c0c62104d0634dcf8f6cd41ac23eaac0ffe17d3e7168dbda43ffdfad699 {
    <urn:paradicms_etl:pipeline:test_data:named_value:83> a cms:NamedValue ;
        dcterms:title "Named value 83" ;
        rdf:predicate dcterms:subject ;
        rdf:value "Subject 3" .
}

ns1:f2a4cf345ce8a3ea82b895590103d1bee6e848db703bf30c51114a69d1c1c8d3 {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work2Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Institution0Collection0Work2Image0> .

    <https://place-hold.it/600x600?text=Institution0Collection0Work2Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:creator <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work2 rights holder" ;
        dcterms:title "Institution0Collection0Work2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution0/collection0/work2> .
}

ns1:a793702f4641997a62e9c52489f94888ab44cfc62615649bed57dadfd375ea78 {
    <https://place-hold.it/1000x1000?text=Subject%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%200Image1> .

    <https://place-hold.it/600x600?text=Subject%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:80> .
}

ns1:368ab43606e6c2649445ae80b24f864ef6f60ae8ff0d51c57d4be95034c7bda2 {
    <https://place-hold.it/1000x1000?text=Language%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Language%209Image0> .

    <https://place-hold.it/75x75?text=Language%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:29> .
}

ns1:4221293bd7fb9b804dd3a122f4c7bd1902446e3592e061017d6eb2e0b03ec807 {
    <https://place-hold.it/1000x1000?text=Type%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Type%201Image1> .

    <https://place-hold.it/600x600?text=Type%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:101> .
}

ns1:27a05cb3b56b8d6162f2308ae2dad5ac97afbeb422d119ce0ebd0b1801990aa6 {
    <https://place-hold.it/1000x1000?text=Material%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Material%201Image1> .

    <https://place-hold.it/600x600?text=Material%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:31> .
}

ns1:9d8cf18680c1a0a0b3dc596d69178caa787d9203904b0f17ce3e220e7ccdf209 {
    <https://place-hold.it/1000x1000?text=Language%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:26> .
}

ns1:e437752e5c82a24d901de03be479ca8981babf0c2eb82fc5fbd1c47948aaae4f {
    <https://place-hold.it/1000x1000?text=Source%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:61> .
}

ns1:bfe4250c57a92fc4cce04bba25a206996de18971a168d16c33143944617a74af {
    <https://place-hold.it/1000x1000?text=Spatial%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%205Image0> .

    <https://place-hold.it/75x75?text=Spatial%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:75> .
}

ns1:ccdd0ba1aa409c84410684e61987f9bc9590007fdeaba26124bdac4da5da996c {
    <https://place-hold.it/1000x1000?text=Subject%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%204Image1> .

    <https://place-hold.it/75x75?text=Subject%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:84> .
}

ns1:dde774ecb11e048dfe01b2de6d1dd48a8f46cf0ec12fd4a1cb373e36f6b3ec9c {
    <http://creativecommons.org/licenses/by-nd-nc/1.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:84d5a336c0e0142e31f0823dbf7981e1edd6166f141a1d0c970c79777acbdb61 {
    <urn:paradicms_etl:pipeline:test_data:named_value:30> a cms:NamedValue ;
        dcterms:title "Named value 30" ;
        rdf:predicate vra:material ;
        rdf:value "Material 0" .
}

ns1:688aa3a7c28c092322c5c6c4459f66fb2cc8ed755426897eaca7d861a317c0ae {
    <https://place-hold.it/1000x1000?text=Medium%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:40> .
}

ns1:2b56a346b826e92c587a34bdbe402b753f9c94fd6563f61cbe6aa204eef82b73 {
    <https://place-hold.it/1000x1000?text=Source%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:61> .
}

ns1:432be5088152970d948729e827c98be24cc0106e2fbf41275932f53d1d7e6a5e {
    <https://place-hold.it/1000x1000?text=Source%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:69> .
}

ns1:d4b32b145f12f6266969359b0e8a3c31dbb1197dd7456a99a4c90261bd858da4 {
    <urn:paradicms_etl:pipeline:test_data:named_value:34> a cms:NamedValue ;
        dcterms:title "Named value 34" ;
        rdf:predicate vra:material ;
        rdf:value "Material 4" .
}

ns1:f0db589493df495efa5b2ba09d9c32f737d52416d45d0a2af4e0b44a4c7f265d {
    <https://place-hold.it/1000x1000?text=Technique%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%204Image0> .

    <https://place-hold.it/600x600?text=Technique%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:94> .
}

ns1:df5556733e76b77802b63283ce92eda10c4dd77f86046476e0333f2c1f5cfb03 {
    <urn:paradicms_etl:pipeline:test_data:named_value:103> a cms:NamedValue ;
        dcterms:title "Named value 103" ;
        rdf:predicate dcterms:type ;
        rdf:value "Type 3" .
}

ns1:dff72aae0f48578e97fd7ea9d4596badd0c4495e2aed885be4bb20f6e36fd93c {
    <https://place-hold.it/1000x1000?text=Cultural%20context%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%206Image0> .

    <https://place-hold.it/600x600?text=Cultural%20context%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:6> .
}

ns1:ed79e03d8d6651a59ca4797475a7b1e069405404c432bcc4febc826e124c0caa {
    <https://place-hold.it/1000x1000?text=Cultural%20context%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%208Image0> .

    <https://place-hold.it/600x600?text=Cultural%20context%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:8> .
}

ns1:235233655189ea03b17262c8da8d1c0886d2d5fdff44583dc9db15af01720564 {
    <https://place-hold.it/1000x1000?text=Medium%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%202Image0> .

    <https://place-hold.it/600x600?text=Medium%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:42> .
}

ns1:bcdd522717cacf28a09390fc499b4290e7ad869f04877d8a8411bf859589f5bf {
    <https://place-hold.it/1000x1000?text=Extent%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:14> .
}

ns1:e7cfddcbf824903f7c95ecbe9198b1285e8481f61a51314bef66a4506aef48d5 {
    <https://place-hold.it/1000x1000?text=Material%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:32> .
}

ns1:584ab08a818a1a6f6448baae29f3f55f16b389b9fa312eb78ce147128b0da88f {
    <https://place-hold.it/1000x1000?text=Language%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Language%208Image1> .

    <https://place-hold.it/600x600?text=Language%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:28> .
}

ns1:8b119da805ca5c52e079234c3396ee53f48764afa482d7da681d6aca6d35fd6f {
    <urn:paradicms_etl:pipeline:test_data:named_value:5> a cms:NamedValue ;
        dcterms:title "Named value 5" ;
        rdf:predicate vra:culturalContext ;
        rdf:value "Cultural context 5" .
}

ns1:92ac2fa97d421aeb3ec25206e4a5251037d30f03c63e5852f52471babeebe825 {
    <http://example.com/institution0/shared/work6> a cms:Work ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Institution0SharedWork6 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:alternative "Institution0SharedWork6 alternative title 0",
            "Institution0SharedWork6 alternative title 1" ;
        dcterms:contributor <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:created [ a cms:DateTimeDescription ;
                time:day "---07"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:creator <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:date "2020-08-02",
            "2020-08-03" ;
        dcterms:description "Institution0SharedWork6 description 0",
            "Institution0SharedWork6 description 1",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
        dcterms:extent <urn:paradicms_etl:pipeline:test_data:named_value:16>,
            <urn:paradicms_etl:pipeline:test_data:named_value:17> ;
        dcterms:identifier "Institution0SharedWork6Id0",
            "Institution0SharedWork6Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:test_data:named_value:26>,
            <urn:paradicms_etl:pipeline:test_data:named_value:27> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:test_data:named_value:46>,
            <urn:paradicms_etl:pipeline:test_data:named_value:47> ;
        dcterms:provenance "Institution0SharedWork6 provenance 0",
            "Institution0SharedWork6 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:test_data:named_value:56>,
            <urn:paradicms_etl:pipeline:test_data:named_value:57> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork6 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:test_data:named_value:66>,
            <urn:paradicms_etl:pipeline:test_data:named_value:67> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:test_data:named_value:76>,
            <urn:paradicms_etl:pipeline:test_data:named_value:77> ;
        dcterms:subject <urn:paradicms_etl:pipeline:test_data:named_value:86>,
            <urn:paradicms_etl:pipeline:test_data:named_value:87> ;
        dcterms:title "Institution0SharedWork6" ;
        dcterms:type <urn:paradicms_etl:pipeline:test_data:named_value:106>,
            <urn:paradicms_etl:pipeline:test_data:named_value:107> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:test_data:named_value:6>,
            <urn:paradicms_etl:pipeline:test_data:named_value:7> ;
        vra:material <urn:paradicms_etl:pipeline:test_data:named_value:36>,
            <urn:paradicms_etl:pipeline:test_data:named_value:37> ;
        vra:technique <urn:paradicms_etl:pipeline:test_data:named_value:96>,
            <urn:paradicms_etl:pipeline:test_data:named_value:97> ;
        cms:collection <http://example.com/institution0/collection0> ;
        cms:institution <http://example.com/institution0> ;
        foaf:page <http://example.com/work/6> .
}

ns1:c6929f92fc3a7b339071c1604a3d1bda96ea13e62605568a1ea382ec817df717 {
    <http://creativecommons.org/licenses/by-nc-sa/2.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:440ec3d17a5bbb5439f215f13e99530a9261ef34a6fb184439e19b417a4386d5 {
    <https://place-hold.it/1000x1000?text=Extent%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%209Image1> .

    <https://place-hold.it/75x75?text=Extent%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:19> .
}

ns1:b0e5d3b8b028ca33abb8a1f601ee50ce55f9d754935178662bd83c8f6f83c7d7 {
    <https://place-hold.it/1000x1000?text=Technique%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%203Image0> .

    <https://place-hold.it/75x75?text=Technique%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:93> .
}

ns1:811c0844bd75342523af550ea1f23ae1a028a6d6cf935cd77f5c2947be4003b2 {
    <http://example.com/institution0/shared/work5> a cms:Work ;
        dcterms:alternative "Institution0SharedWork5 alternative title 0",
            "Institution0SharedWork5 alternative title 1" ;
        dcterms:contributor <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:created [ a cms:DateTimeDescription ;
                time:day "---06"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:creator <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:date "2020-08-03",
            "2020-08-04" ;
        dcterms:extent <urn:paradicms_etl:pipeline:test_data:named_value:15>,
            <urn:paradicms_etl:pipeline:test_data:named_value:16> ;
        dcterms:identifier "Institution0SharedWork5Id0",
            "Institution0SharedWork5Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:test_data:named_value:25>,
            <urn:paradicms_etl:pipeline:test_data:named_value:26> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:test_data:named_value:45>,
            <urn:paradicms_etl:pipeline:test_data:named_value:46> ;
        dcterms:provenance "Institution0SharedWork5 provenance 0",
            "Institution0SharedWork5 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:test_data:named_value:55>,
            <urn:paradicms_etl:pipeline:test_data:named_value:56> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork5 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:test_data:named_value:65>,
            <urn:paradicms_etl:pipeline:test_data:named_value:66> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:test_data:named_value:75>,
            <urn:paradicms_etl:pipeline:test_data:named_value:76> ;
        dcterms:subject <urn:paradicms_etl:pipeline:test_data:named_value:85>,
            <urn:paradicms_etl:pipeline:test_data:named_value:86> ;
        dcterms:title "Institution0SharedWork5" ;
        dcterms:type <urn:paradicms_etl:pipeline:test_data:named_value:105>,
            <urn:paradicms_etl:pipeline:test_data:named_value:106> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:test_data:named_value:5>,
            <urn:paradicms_etl:pipeline:test_data:named_value:6> ;
        vra:material <urn:paradicms_etl:pipeline:test_data:named_value:35>,
            <urn:paradicms_etl:pipeline:test_data:named_value:36> ;
        vra:technique <urn:paradicms_etl:pipeline:test_data:named_value:95>,
            <urn:paradicms_etl:pipeline:test_data:named_value:96> ;
        cms:collection <http://example.com/institution0/collection0> ;
        cms:institution <http://example.com/institution0> .
}

ns1:b8b051c7ae04542fe8236ace9039dc5033d1c57963b7bf6e2570f5bf7bec629d {
    <https://place-hold.it/1000x1000?text=Person%202> a cms:Image ;
        dcterms:creator "Person 2 image creator" ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Person 2 image rights holder" ;
        dcterms:title "Person 2 image" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/person2> .
}

ns1:e25f0c8b3166e4ee1647f0ae47f2a782e2c1d3c3d0af41fd2617421650f8e1fe {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work8Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Institution1Collection0Work8Image1> .

    <https://place-hold.it/600x600?text=Institution1Collection0Work8Image1> a cms:Image ;
        dcterms:contributor <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work8 rights holder" ;
        dcterms:title "Institution1Collection0Work8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution1/collection0/work8> .
}

ns1:14982abddffaada76c2b9762cb1e9c3eb13465cebf8f5c62be431d85fddcc85e {
    <https://place-hold.it/1000x1000?text=Subject%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%208Image0> .

    <https://place-hold.it/600x600?text=Subject%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:88> .
}

ns1:9e75095768bc21b1bcc2fcea8fb6553dade0ce12e5590dd13c582bb5b8a1d551 {
    <https://place-hold.it/1000x1000?text=Language%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:23> .
}

ns1:7c63ce95802e6cece33f082496308904f2f97fb0f75402860d92f857d933ddae {
    <http://example.com/organization1> a cms:Organization ;
        foaf:name "Organization 1" ;
        foaf:page <http://example.com/organization1page> .
}

ns1:e5f12ba7554f94d90af93812370c4bc27f4e04cce2a3c2c6974ed6c302853439 {
    <https://place-hold.it/1000x1000?text=Technique%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:93> .
}

ns1:6357ce5918ee1a94565a6319038fcf897b20aeeb94f33a4237380f121f7d9443 {
    <https://place-hold.it/1000x1000?text=Spatial%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%203Image1> .

    <https://place-hold.it/75x75?text=Spatial%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:73> .
}

ns1:a0e327c59f5fa778cf37dea735b0c6b625acfb082b65fdc91454ec9332708272 {
    <https://place-hold.it/1000x1000?text=Extent%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%203Image0> .

    <https://place-hold.it/600x600?text=Extent%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:13> .
}

ns1:f0c8ea0242bef4777a6c6842a0cb6a3eec48e12fa93a34cb51fc3f4a16b26397 {
    <https://place-hold.it/1000x1000?text=Material%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Material%207Image1> .

    <https://place-hold.it/75x75?text=Material%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:37> .
}

ns1:c40f0f3304e8fec51f0769ace8cdc0c25fa33cda5c2c5aae0fe8fb03e761f149 {
    <https://place-hold.it/1000x1000?text=Language%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:25> .
}

ns1:6cf22cbabb1952459644283709e6a1bbc8396f0d663af5f2aa5294db433c051d {
    <https://place-hold.it/1000x1000?text=Institution1Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Institution1Image1> .

    <https://place-hold.it/75x75?text=Institution1Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1 rights holder" ;
        dcterms:title "Institution1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution1> .
}

ns1:7565a52d8ea824c3ff477c145233d64f1bd0d6825ff744827e8b9deb5753ef58 {
    <urn:paradicms_etl:pipeline:test_data:named_value:98> a cms:NamedValue ;
        dcterms:title "Named value 98" ;
        rdf:predicate vra:technique ;
        rdf:value "Technique 8" .
}

ns1:8a0b1b0725941b05866e6db82f2dcd9b34806fa646b7c6ffae537f3ef965d98a {
    <http://example.com/institution1/shared/work13> a cms:Work ;
        dcterms:alternative "Institution1SharedWork13 alternative title 0",
            "Institution1SharedWork13 alternative title 1" ;
        dcterms:contributor <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:created [ a cms:DateTimeDescription ;
                time:day "---14"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:creator <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:date "2020-07-26",
            "2020-07-27" ;
        dcterms:extent <urn:paradicms_etl:pipeline:test_data:named_value:13>,
            <urn:paradicms_etl:pipeline:test_data:named_value:14> ;
        dcterms:identifier "Institution1SharedWork13Id0",
            "Institution1SharedWork13Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:test_data:named_value:23>,
            <urn:paradicms_etl:pipeline:test_data:named_value:24> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:test_data:named_value:43>,
            <urn:paradicms_etl:pipeline:test_data:named_value:44> ;
        dcterms:provenance "Institution1SharedWork13 provenance 0",
            "Institution1SharedWork13 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:test_data:named_value:53>,
            <urn:paradicms_etl:pipeline:test_data:named_value:54> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork13 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:test_data:named_value:63>,
            <urn:paradicms_etl:pipeline:test_data:named_value:64> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:test_data:named_value:73>,
            <urn:paradicms_etl:pipeline:test_data:named_value:74> ;
        dcterms:subject <urn:paradicms_etl:pipeline:test_data:named_value:83>,
            <urn:paradicms_etl:pipeline:test_data:named_value:84> ;
        dcterms:title "Institution1SharedWork13" ;
        dcterms:type <urn:paradicms_etl:pipeline:test_data:named_value:103>,
            <urn:paradicms_etl:pipeline:test_data:named_value:104> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:test_data:named_value:3>,
            <urn:paradicms_etl:pipeline:test_data:named_value:4> ;
        vra:material <urn:paradicms_etl:pipeline:test_data:named_value:33>,
            <urn:paradicms_etl:pipeline:test_data:named_value:34> ;
        vra:technique <urn:paradicms_etl:pipeline:test_data:named_value:93>,
            <urn:paradicms_etl:pipeline:test_data:named_value:94> ;
        cms:collection <http://example.com/institution1/collection0> ;
        cms:institution <http://example.com/institution1> .
}

ns1:bce018712a18dafddade3524683aff8478b70621b517c8f0573802b4bce50403 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%205Image1> .

    <https://place-hold.it/75x75?text=Cultural%20context%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:5> .
}

ns1:69896a827c3a324b58fb448ea5fced76ffa0bbd524f0eb7f117650b37473ab4f {
    <https://place-hold.it/1000x1000?text=Cultural%20context%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:5> .
}

ns1:8bd0edd73c39e5594a60059c4ff507ac9bae4329280111697c496fd7c69cdfed {
    <https://place-hold.it/1000x1000?text=Medium%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:47> .
}

ns1:b528ecb81d6aa2894e7d1bbbf784ab808929980a666332d98d1fa3198452192e {
    <https://place-hold.it/1000x1000?text=Subject%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%203Image0> .

    <https://place-hold.it/75x75?text=Subject%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:83> .
}

ns1:0ab4d5459702ea745d79d75a153f0b878a7e7e65b108cc107715af31107aac3c {
    <https://place-hold.it/1000x1000?text=Technique%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%209Image1> .

    <https://place-hold.it/75x75?text=Technique%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:99> .
}

ns1:9f49f0427f8e34ec66a18319ed663ac8b02cfc8ef66dfd5d847a0ca9a1126fc5 {
    <https://place-hold.it/1000x1000?text=Spatial%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%202Image1> .

    <https://place-hold.it/75x75?text=Spatial%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:72> .
}

ns1:a9ee33b9f447edbc99d6edd4ed5ea6e94041a5ff42582d6229557f3ad6452aa0 {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork5Image1> a cms:Image ;
        dcterms:contributor <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:creator <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork5 rights holder" ;
        dcterms:title "Institution0SharedWork5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution0/shared/work5> .
}

ns1:f29fa4f7ac63cbe2863b7f8e95842ae3f8a0fde7dd35a0111ae38ff77f2c01ed {
    <http://example.com/institution1/collection0> a cms:Collection ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Institution1Collection0 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:title "Institution1Collection0" ;
        cms:institution <http://example.com/institution1> .
}

ns1:84bc0d650b8acdcef8ad507ad19d06ea34c909cf85b9eb4c4a7b567d81f77a75 {
    <https://place-hold.it/1000x1000?text=Material%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Material%203Image1> .

    <https://place-hold.it/75x75?text=Material%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:33> .
}

ns1:c3efbab8606f8d81fe38217c541d2ed2b961d557e5f0b925b2fa3a41a1d8f964 {
    <https://place-hold.it/1000x1000?text=Publisher%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%202Image0> .

    <https://place-hold.it/75x75?text=Publisher%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:52> .
}

ns1:18e621c559579d332eeab45f710b0f859e2b041e131d1339e05668fc44b498f9 {
    <https://place-hold.it/1000x1000?text=Source%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:68> .
}

ns1:d8689dac3b57ade40c55e5d078356e0cd412bf486ecdd239ca7fe812212ca377 {
    <https://place-hold.it/1000x1000?text=Technique%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%202Image0> .

    <https://place-hold.it/600x600?text=Technique%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:92> .
}

ns1:d565421b2e53c38db09c9f868f25d9e6217488dc60a0d952c0bb8df865399a1d {
    <http://creativecommons.org/licenses/nc-sa/1.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:cd46f1ae14c3cb266027b086b1dffcb8a7cae4570aa93b3d82af939af76d1d12 {
    <https://place-hold.it/1000x1000?text=Extent%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%205Image0> .

    <https://place-hold.it/600x600?text=Extent%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:15> .
}

ns1:da85e6c7c4bee25b6e614ae3f3faee1d01f9708a26d40635bb25ba1148aee00b {
    <https://place-hold.it/1000x1000?text=Extent%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:18> .
}

ns1:58e3723921760157023d8914f1800984c2fa1dcbee05aedd189dbb2fc3530276 {
    <urn:paradicms_etl:pipeline:test_data:named_value:53> a cms:NamedValue ;
        dcterms:title "Named value 53" ;
        rdf:predicate dcterms:publisher ;
        rdf:value "Publisher 3" .
}

ns1:2edef32d37ab000a3738d9d98ff8fbc84c7b5392bc452c5bf83b6b08856b7e57 {
    <https://place-hold.it/1000x1000?text=Publisher%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:55> .
}

ns1:8bbdc22c258758da479da918340a6fee18d9b06fbbb465916179447c90905524 {
    <https://place-hold.it/1000x1000?text=Type%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Type%200Image1> .

    <https://place-hold.it/75x75?text=Type%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:100> .
}

ns1:23e882e2034f9f48f5422bf23e43e67fb912e15a6edb00e7c59fe01ccd68518c {
    <https://place-hold.it/1000x1000?text=Material%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Material%202Image0> .

    <https://place-hold.it/75x75?text=Material%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:32> .
}

ns1:a968699fa4f5ff55b36e8d79d8d0f787531629a6ac945600e5f6a544183eec86 {
    <https://place-hold.it/1000x1000?text=Publisher%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%208Image0> .

    <https://place-hold.it/75x75?text=Publisher%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:58> .
}

ns1:47531376a598af00ca7f511044c0f7fb5eff9e4a393c0e9af157619e85720735 {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work9Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Institution1Collection0Work9Image0> .

    <https://place-hold.it/600x600?text=Institution1Collection0Work9Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work9 rights holder" ;
        dcterms:title "Institution1Collection0Work9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution1/collection0/work9> .
}

ns1:f403c47ee28157490f6297f4fb378ad43486c29c998a930c49ec191ae32d6015 {
    <urn:paradicms_etl:pipeline:test_data:named_value:43> a cms:NamedValue ;
        dcterms:title "Named value 43" ;
        rdf:predicate dcterms:medium ;
        rdf:value "Medium 3" .
}

ns1:298f06c0c0baa9f741caf6eedc37d5ef03d29c9af185d50ff8123a10af44b86f {
    <urn:paradicms_etl:pipeline:test_data:named_value:22> a cms:NamedValue ;
        dcterms:title "Named value 22" ;
        rdf:predicate dcterms:language ;
        rdf:value "Language 2" .
}

ns1:16a5eb7b90313ce8fc4350ce51571c1a85c0bd2e00149c528ce70fc78c675311 {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work11Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Institution1Collection0Work11Image1> .

    <https://place-hold.it/600x600?text=Institution1Collection0Work11Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work11 rights holder" ;
        dcterms:title "Institution1Collection0Work11 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution1/collection0/work11> .
}

ns1:4b57a1b44ae60fc6708b70f0b32bbae49e0b3513ae851f06402e1381ee0d0849 {
    <https://place-hold.it/1000x1000?text=Spatial%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:78> .
}

ns1:5478bfab125da16a0064c85a12440bb023e305f726d49da79e1313fdbe6a2ff7 {
    <https://place-hold.it/1000x1000?text=Material%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Material%203Image0> .

    <https://place-hold.it/600x600?text=Material%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:33> .
}

ns1:6e6b55e1ae419050d0779cb1a41343e448a8125b4f4d430f0403c19a87ec0aac {
    <https://place-hold.it/1000x1000?text=Medium%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%208Image0> .

    <https://place-hold.it/75x75?text=Medium%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:48> .
}

ns1:f6a677bc98a5d576175bd341882b44e74a6e424b0bcaf3ccba1d4391ebe90077 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%201Image0> .

    <https://place-hold.it/600x600?text=Cultural%20context%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:1> .
}

ns1:35ba97decb0e20410bd37faa838cda26c9b083534febf9dc90f2bfaf853101c2 {
    <https://place-hold.it/1000x1000?text=Spatial%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:74> .
}

ns1:c18f3febf0f24e628ed0c3ac6581a69c0b3d41804d10c6ae8797ff6e4cf4449c {
    <https://place-hold.it/1000x1000?text=Language%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Language%200Image0> .

    <https://place-hold.it/75x75?text=Language%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:20> .
}

ns1:aba17e962bd7775fcc351eacd795ed319e049733b935cd4f31301fa106b352a8 {
    <https://place-hold.it/1000x1000?text=Technique%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:97> .
}

ns1:880578f90e61e4084dbdf926275418ba91aaff4f9e58297d2c4632d063e69c0f {
    <https://place-hold.it/1000x1000?text=Extent%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:10> .
}

ns1:047b323bd8ee8f3c84fbe148a85443c514d931a57ae8ff28b40ac3f6cd927c3c {
    <urn:paradicms_etl:pipeline:test_data:named_value:86> a cms:NamedValue ;
        dcterms:title "Named value 86" ;
        rdf:predicate dcterms:subject ;
        rdf:value "Subject 6" .
}

ns1:c0e0908c935f4de395f981d7f8b5009da3c48159acca5be1e65391fb6f720194 {
    <https://place-hold.it/1000x1000?text=Publisher%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%200Image0> .

    <https://place-hold.it/75x75?text=Publisher%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:50> .
}

ns1:511a6af726c10794781d384de76b30e7afe3c141d30b4f21eb8378c8887e9462 {
    <https://place-hold.it/1000x1000?text=Subject%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%203Image1> .

    <https://place-hold.it/600x600?text=Subject%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:83> .
}

ns1:e6b74940a0e49d4601c1d8e529c6c19821b2c8faeecaeba38a9aecc86058ec77 {
    <https://place-hold.it/1000x1000?text=Source%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:63> .
}

ns1:746625ee748ac80e112dfa861a3e61deecc73bcbe1e1892169d15f8f6db17817 {
    <https://place-hold.it/1000x1000?text=Technique%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:91> .
}

ns1:e56f17658450f7a9cb0020d491d1566925d7e9f8ca49cff463e534eadc2ffc66 {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work1Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Institution0Collection0Work1Image0> .

    <https://place-hold.it/600x600?text=Institution0Collection0Work1Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work1 rights holder" ;
        dcterms:title "Institution0Collection0Work1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution0/collection0/work1> .
}

ns1:131e703b780573805594f71c0f6d4cdf4915a3eb50a6f7ecbbf99c7a5329e10e {
    <https://place-hold.it/1000x1000?text=Language%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Language%202Image1> .

    <https://place-hold.it/600x600?text=Language%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:22> .
}

ns1:726fb9aadee7008b855842d89d10c8df4800a4ae0ae04377a1b12cf971e3db4c {
    <http://creativecommons.org/licenses/by-nc/4.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:e7bf500247d0273f20c845b68d8bc204fe89796b28973719e93a3d8179ea7a7f {
    <https://place-hold.it/1000x1000?text=Person%204> a cms:Image ;
        dcterms:creator "Person 4 image creator" ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Person 4 image rights holder" ;
        dcterms:title "Person 4 image" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/person4> .
}

ns1:efa1f50455a583c351755af545ec5914db4aa44211465729fa508bef1d1e2e6c {
    <https://place-hold.it/1000x1000?text=Subject%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%207Image1> .

    <https://place-hold.it/75x75?text=Subject%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:87> .
}

ns1:d06949ba2d68267bef5c347c841619cfbdda3883178615485d7d198c83898821 {
    <https://place-hold.it/1000x1000?text=Material%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Material%208Image0> .

    <https://place-hold.it/600x600?text=Material%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:38> .
}

ns1:05b5663e3ee48caf498f9d3b70cdda78948a9727a86050ccd093daf8dfaf91df {
    <https://place-hold.it/1000x1000?text=Material%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Material%203Image0> .

    <https://place-hold.it/75x75?text=Material%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:33> .
}

ns1:eadb6136779e3e2b4bd0cd03ae3fc96b37ee8813b6aa45693b71502dd19e76d3 {
    <https://place-hold.it/1000x1000?text=Type%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Type%207Image0> .

    <https://place-hold.it/75x75?text=Type%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:107> .
}

ns1:d405dbc84a99bb765ff8a99ff7e9ae10f72df81817fdcaa559b1038da2b74d5a {
    <http://example.com/institution1/shared/work12Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Institution1SharedWork12 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:contributor <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:creator <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---13"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Institution1SharedWork12 creation" ;
        cms:work <http://example.com/institution1/shared/work12> .
}

ns1:ba65a51b22e5e2b23f76bd4aec37985e5cec5988c672829d9d39e04fea9bf516 {
    <https://place-hold.it/1000x1000?text=Technique%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%207Image0> .

    <https://place-hold.it/75x75?text=Technique%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:97> .
}

ns1:a47c57aa776934b0256e5b400cc420e4c258d2858a3db9843af18cfc393a88ff {
    <https://place-hold.it/1000x1000?text=Material%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Material%202Image1> .

    <https://place-hold.it/600x600?text=Material%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:32> .
}

ns1:6878702a20f6db836592b2d62f3f5ebb4872d2e67a7aa6eb6c27d434ecbc947d {
    <https://place-hold.it/1000x1000?text=Technique%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:91> .
}

ns1:2780bb9db4c1f17584133bff7994f84e26adbe9b0950f57874b119a7ad3f6cca {
    <https://place-hold.it/1000x1000?text=Source%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Source%200Image0> .

    <https://place-hold.it/600x600?text=Source%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:60> .
}

ns1:49bad0b1c3391144a65bbd39fb32293cd464360337e5f2c55f6e23909e46691f {
    <https://place-hold.it/1000x1000?text=Medium%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%206Image0> .

    <https://place-hold.it/75x75?text=Medium%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:46> .
}

ns1:43f06cca6e4d7be6b164cc3b9e84afada0ad719a68fbef368b5a348dc961823f {
    <https://place-hold.it/1000x1000?text=Language%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:29> .
}

ns1:b5191a4020318590d517670e7a1b0e2ff9fdbfd77e4a0ce2e31d53d4511e498c {
    <https://place-hold.it/1000x1000?text=Publisher%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:50> .
}

ns1:cf31251fab25648a6fc03189f83ca482d3db63fb9ca57a14deda3c0805a3cb5d {
    <http://example.com/institution1/shared/work14> a cms:Work ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Institution1SharedWork14 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:alternative "Institution1SharedWork14 alternative title 0",
            "Institution1SharedWork14 alternative title 1" ;
        dcterms:contributor <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:created [ a cms:DateTimeDescription ;
                time:day "---15"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:creator <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:date "2020-07-25",
            "2020-07-26" ;
        dcterms:description "Institution1SharedWork14 description 0",
            "Institution1SharedWork14 description 1",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
        dcterms:extent <urn:paradicms_etl:pipeline:test_data:named_value:14>,
            <urn:paradicms_etl:pipeline:test_data:named_value:15> ;
        dcterms:identifier "Institution1SharedWork14Id0",
            "Institution1SharedWork14Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:test_data:named_value:24>,
            <urn:paradicms_etl:pipeline:test_data:named_value:25> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:test_data:named_value:44>,
            <urn:paradicms_etl:pipeline:test_data:named_value:45> ;
        dcterms:provenance "Institution1SharedWork14 provenance 0",
            "Institution1SharedWork14 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:test_data:named_value:54>,
            <urn:paradicms_etl:pipeline:test_data:named_value:55> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork14 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:test_data:named_value:64>,
            <urn:paradicms_etl:pipeline:test_data:named_value:65> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:test_data:named_value:74>,
            <urn:paradicms_etl:pipeline:test_data:named_value:75> ;
        dcterms:subject <urn:paradicms_etl:pipeline:test_data:named_value:84>,
            <urn:paradicms_etl:pipeline:test_data:named_value:85> ;
        dcterms:title "Institution1SharedWork14" ;
        dcterms:type <urn:paradicms_etl:pipeline:test_data:named_value:104>,
            <urn:paradicms_etl:pipeline:test_data:named_value:105> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:test_data:named_value:4>,
            <urn:paradicms_etl:pipeline:test_data:named_value:5> ;
        vra:material <urn:paradicms_etl:pipeline:test_data:named_value:34>,
            <urn:paradicms_etl:pipeline:test_data:named_value:35> ;
        vra:technique <urn:paradicms_etl:pipeline:test_data:named_value:94>,
            <urn:paradicms_etl:pipeline:test_data:named_value:95> ;
        cms:collection <http://example.com/institution1/collection0> ;
        cms:institution <http://example.com/institution1> ;
        foaf:page <http://example.com/work/14> .
}

ns1:f9340739b5e4bdc20fd516c0b102a719a6350d3a2fd28bd9535111e9c308eb26 {
    <https://place-hold.it/1000x1000?text=Extent%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%204Image0> .

    <https://place-hold.it/75x75?text=Extent%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:14> .
}

ns1:ca64ead79e707da695d22c6491bbd95e09d614230bddae56c9d8bf8c9923c5f4 {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork4Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Institution0SharedWork4Image0> .

    <https://place-hold.it/600x600?text=Institution0SharedWork4Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:creator <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork4 rights holder" ;
        dcterms:title "Institution0SharedWork4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution0/shared/work4> .
}

ns1:3749f27a0c64d8aae4ea6fd9bdbc23bb1b59f947e359755ee461b43d14c41ff2 {
    <https://place-hold.it/1000x1000?text=Source%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Source%204Image0> .

    <https://place-hold.it/600x600?text=Source%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:64> .
}

ns1:3222211e34e73c6c91b8c071f35d5c1fe49fbbc92e1091f0dfec5ab0dd775c44 {
    <http://creativecommons.org/licenses/by-nc/1.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:35c99bbe239ce1de896c891d6fbe7a11649cf34d009d88774e889ec8712129c5 {
    <https://place-hold.it/1000x1000?text=Extent%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:15> .
}

ns1:72c61b02e5bceff4ece803d4fd9da98e0ae605feb382e4fccc3eabbef2b1d344 {
    <https://place-hold.it/1000x1000?text=Spatial%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:73> .
}

ns1:44f867c56eaf9e33778ecb4c4bb3ade04519f5b1ec899020883e6aff5c168b1c {
    <https://place-hold.it/1000x1000?text=Technique%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%200Image0> .

    <https://place-hold.it/75x75?text=Technique%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:90> .
}

ns1:6f5ea2208192f8df1b215c4489ec9d43713b2532539ddca83e2ded3683c09540 {
    <http://example.com/institution1/shared/work12> a cms:Work ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Institution1SharedWork12 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:alternative "Institution1SharedWork12 alternative title 0",
            "Institution1SharedWork12 alternative title 1" ;
        dcterms:contributor <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:created [ a cms:DateTimeDescription ;
                time:day "---13"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:creator <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:date "2020-07-27",
            "2020-07-28" ;
        dcterms:description "Institution1SharedWork12 description 0",
            "Institution1SharedWork12 description 1",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
        dcterms:extent <urn:paradicms_etl:pipeline:test_data:named_value:12>,
            <urn:paradicms_etl:pipeline:test_data:named_value:13> ;
        dcterms:identifier "Institution1SharedWork12Id0",
            "Institution1SharedWork12Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:test_data:named_value:22>,
            <urn:paradicms_etl:pipeline:test_data:named_value:23> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:test_data:named_value:42>,
            <urn:paradicms_etl:pipeline:test_data:named_value:43> ;
        dcterms:provenance "Institution1SharedWork12 provenance 0",
            "Institution1SharedWork12 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:test_data:named_value:52>,
            <urn:paradicms_etl:pipeline:test_data:named_value:53> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork12 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:test_data:named_value:62>,
            <urn:paradicms_etl:pipeline:test_data:named_value:63> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:test_data:named_value:72>,
            <urn:paradicms_etl:pipeline:test_data:named_value:73> ;
        dcterms:subject <urn:paradicms_etl:pipeline:test_data:named_value:82>,
            <urn:paradicms_etl:pipeline:test_data:named_value:83> ;
        dcterms:title "Institution1SharedWork12" ;
        dcterms:type <urn:paradicms_etl:pipeline:test_data:named_value:102>,
            <urn:paradicms_etl:pipeline:test_data:named_value:103> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:test_data:named_value:2>,
            <urn:paradicms_etl:pipeline:test_data:named_value:3> ;
        vra:material <urn:paradicms_etl:pipeline:test_data:named_value:32>,
            <urn:paradicms_etl:pipeline:test_data:named_value:33> ;
        vra:technique <urn:paradicms_etl:pipeline:test_data:named_value:92>,
            <urn:paradicms_etl:pipeline:test_data:named_value:93> ;
        cms:collection <http://example.com/institution1/collection0> ;
        cms:institution <http://example.com/institution1> ;
        foaf:page <http://example.com/work/12> .
}

ns1:8a14d744ee2f6a23ada79185a2b770741e6e4d7b8bee27de8195d1a0225e1f4b {
    <https://place-hold.it/1000x1000?text=Type%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Type%207Image1> .

    <https://place-hold.it/600x600?text=Type%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:107> .
}

ns1:8dec49706c540b3581095418044189a6af68f2745a4f64e0ff6b434c4a20d451 {
    <https://place-hold.it/1000x1000?text=Type%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Type%203Image0> .

    <https://place-hold.it/75x75?text=Type%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:103> .
}

ns1:3146f3a6339a6608a041d840ced332f5280e300416fe1fc2e6a4d790f49da213 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%202Image0> .

    <https://place-hold.it/75x75?text=Cultural%20context%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:2> .
}

ns1:cd9dc2e21a825bcb81dc05d1f5f38ab1b025ea0356c00a545cbc32342eae6e81 {
    <http://creativecommons.org/licenses/by-nd/1.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:b83436d581e5ef1409e491d9ca6dd02015110f9ec3de4319123256d189325b2a {
    <http://creativecommons.org/licenses/by-sa/2.5/> a creativecommons:License,
            cms:License ;
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
}

ns1:1fc4f9cff4c5acf1e1c83eacc9374f80f5d8dd5bd7d0c822587286d43ef0deb0 {
    <urn:paradicms_etl:pipeline:test_data:named_value:109> a cms:NamedValue ;
        dcterms:title "Named value 109" ;
        rdf:predicate dcterms:type ;
        rdf:value "Type 9" .
}

ns1:b68eb786606f26b5c176ce8b453d67b243a5be33a0e5ad83424be07e3e84be27 {
    <https://place-hold.it/1000x1000?text=Technique%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:95> .
}

ns1:247eda7c589499fc778f0f1548de0c2abd09d2d1f2481b7b704a472708b028b7 {
    <https://place-hold.it/1000x1000?text=Publisher%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%207Image0> .

    <https://place-hold.it/600x600?text=Publisher%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:57> .
}

ns1:8cbf38834fcbca33a2862e3b5704098de4964f49c6d40f726d3875553fefb883 {
    <https://place-hold.it/1000x1000?text=Technique%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%204Image1> .

    <https://place-hold.it/75x75?text=Technique%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:94> .
}

ns1:3c46525f40cbdb26a48809b0499757addc846c367ca9a38f7316ab3c5566da22 {
    <http://creativecommons.org/licenses/by-nd/2.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:422e6bf0a60dd762cc7144db5b8998897f09542c204cd055591e8df8c986b579 {
    <http://creativecommons.org/licenses/sa/1.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:4fbf8fcf90b99d644573bc4a52ac6327e8b97f6c0c91d374cf982314e547e4d6 {
    <https://place-hold.it/1000x1000?text=Publisher%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%207Image1> .

    <https://place-hold.it/75x75?text=Publisher%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:57> .
}

ns1:2150bb16e189481b9fb7fc2083686aae9854ad158655f8b4b2eadeadbee12a14 {
    <https://place-hold.it/1000x1000?text=Medium%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:42> .
}

ns1:fc2fb178f6f018ff2ed9d0bf421197361ad7bf5af8d638d4852d50f0358de294 {
    <http://creativecommons.org/licenses/by-nc-sa/2.5/> a creativecommons:License,
            cms:License ;
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
}

ns1:e52462df23a31711a12608a9a19f81074109367bda97efedf67dd8778bed4a68 {
    <https://place-hold.it/1000x1000?text=Subject%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%205Image1> .

    <https://place-hold.it/75x75?text=Subject%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:85> .
}

ns1:f35ad22ea8fec516ba2394c708fa232a4a524392c6f4522c23c11f02f93e5cdc {
    <https://place-hold.it/1000x1000?text=Subject%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%204Image1> .

    <https://place-hold.it/600x600?text=Subject%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:84> .
}

ns1:f0b24e7525f7cdd3ef0001a2533a1c4f36b8ff46f24ec732f1f6874e19fc3d08 {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork13Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Institution1SharedWork13Image0> .

    <https://place-hold.it/600x600?text=Institution1SharedWork13Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:creator <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork13 rights holder" ;
        dcterms:title "Institution1SharedWork13 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution1/shared/work13> .
}

ns1:011a4363097398892534ace9e7c47aaef9658508d66ad84c08f2e541c4437db5 {
    <https://place-hold.it/1000x1000?text=Material%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Material%201Image1> .

    <https://place-hold.it/75x75?text=Material%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:31> .
}

ns1:96085eafeed3eac288feb5fbcad4b7bb142656233d8e5272f8f45aa87c96929f {
    <https://place-hold.it/1000x1000?text=Type%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Type%208Image0> .

    <https://place-hold.it/75x75?text=Type%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:108> .
}

ns1:73658281644f74c84186b63b476fdb1237bcd4ad83bdfffbf4c779114810c98a {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work0Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work0 rights holder" ;
        dcterms:title "Institution0Collection0Work0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution0/collection0/work0> .
}

ns1:3251a9e677b5940fb2909766b30b4c2f0966ff6e3d9c8ee8396ce633b18e7ea2 {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork6Image0> a cms:Image ;
        dcterms:contributor <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:creator <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork6 rights holder" ;
        dcterms:title "Institution0SharedWork6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution0/shared/work6> .
}

ns1:fc8e48cc86cf8d279cae0992bcd344971b30d6c9f2aebb540b4ac3ab1c931f96 {
    <https://place-hold.it/1000x1000?text=Institution1Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Institution1Image0> .

    <https://place-hold.it/600x600?text=Institution1Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1 rights holder" ;
        dcterms:title "Institution1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution1> .
}

ns1:098a7e28b01170c2f6d3cad2cbf5169482531fa6c1c2f947020e9ea9078241cd {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork15Image1> a cms:Image ;
        dcterms:contributor <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:creator <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork15 rights holder" ;
        dcterms:title "Institution1SharedWork15 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution1/shared/work15> .
}

ns1:1fa7c85e03719364ca682fbde8827d101f091468d6753787e5ade43e30c8539b {
    <https://place-hold.it/1000x1000?text=Material%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Material%208Image0> .

    <https://place-hold.it/75x75?text=Material%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:38> .
}

ns1:a26abb81f16c3d6ee3ac4a5c65b40690a576ab18b1f94385e65d597984f21e13 {
    <https://place-hold.it/1000x1000?text=Material%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:37> .
}

ns1:431e7107ad4f90bce983a5837d79551ece601306ef3156abb34336de071d1da7 {
    <http://creativecommons.org/licenses/nc-sampling+/1.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:eb073d0938a780728a68073402798e910edb547dfc03059f117c279bc9f6c2e6 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%206Image0> .

    <https://place-hold.it/75x75?text=Cultural%20context%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:6> .
}

ns1:8e4f35e7177322c7d8eb4fc02e4b78aa46344a737b48b466164f3ca8b0c42da5 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:6> .
}

ns1:664b60ab85025123c08acde2f3f31abdee60ba65b1fe4167395b1f0ba3de25f8 {
    <https://place-hold.it/1000x1000?text=Material%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Material%206Image0> .

    <https://place-hold.it/75x75?text=Material%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:36> .
}

ns1:a163113e7cae4794dffcaa19014f29948f37c20426b00a12c68ac245628fdf94 {
    <https://place-hold.it/1000x1000?text=Language%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:20> .
}

ns1:c80563ee8f40dbcbdd530b53cd7326d8531db98dfd727feb574392ce7d7db239 {
    <https://place-hold.it/1000x1000?text=Publisher%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%209Image1> .

    <https://place-hold.it/75x75?text=Publisher%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:59> .
}

ns1:b12069096d8e72ea9bc70ec63b3b3864ee824e42530af38cb905816e4239206f {
    <https://place-hold.it/1000x1000?text=Technique%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%206Image0> .

    <https://place-hold.it/75x75?text=Technique%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:96> .
}

ns1:403a3dead418e2d14d7f9b9d46817672c87b54dab68c5d36c710af6b0c78e927 {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork4Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Institution0SharedWork4Image0> .

    <https://place-hold.it/75x75?text=Institution0SharedWork4Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:creator <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork4 rights holder" ;
        dcterms:title "Institution0SharedWork4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution0/shared/work4> .
}

ns1:e8bdcf27ddae6a30932ccb1125ed8cd703221c9e8d8acc6f9f1e75b0bf16f434 {
    <http://example.com/institution0/shared/work4Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Institution0SharedWork4 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:contributor <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:creator <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---05"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Institution0SharedWork4 creation" ;
        cms:work <http://example.com/institution0/shared/work4> .
}

ns1:7a7ec271f6be39990ad6954a1f7f7cf2624949f40dfb65a973e33677ffbd2a8a {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork7Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Institution0SharedWork7Image1> .

    <https://place-hold.it/600x600?text=Institution0SharedWork7Image1> a cms:Image ;
        dcterms:contributor <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork7 rights holder" ;
        dcterms:title "Institution0SharedWork7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution0/shared/work7> .
}

ns1:64cd84d7378d980849fe4295b89b78be0237dc61f181469fd421cc4221d399f0 {
    <https://place-hold.it/1000x1000?text=Medium%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:46> .
}

ns1:c1214b3fb033c4c728aa834b9fbfc19fe73701bc3b7822befeda3a63cb8a28c8 {
    <urn:paradicms_etl:pipeline:test_data:named_value:67> a cms:NamedValue ;
        dcterms:title "Named value 67" ;
        rdf:predicate dcterms:source ;
        rdf:value "Source 7" .
}

ns1:fb010919df638ce1f125fd501423c782de9abc8d931f2cc2abf1c4d932d188c5 {
    <urn:paradicms_etl:pipeline:test_data:named_value:71> a cms:NamedValue ;
        dcterms:title "Named value 71" ;
        rdf:predicate dcterms:spatial ;
        rdf:value "Spatial 1" .
}

ns1:e3ae06058e30c09fa9fb458d2aed4a21e4a7c885fdc994cead11ada71431f808 {
    <https://place-hold.it/1000x1000?text=Source%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:64> .
}

ns1:930525d2b2088c48b57703cab9d92c3123fa50affc57c1f4ee8d83188b5d2cfa {
    <https://place-hold.it/1000x1000?text=Spatial%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%207Image1> .

    <https://place-hold.it/75x75?text=Spatial%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:77> .
}

ns1:fb78f918a4b8a42d6ef7decfb5a11f795102730bf38986587ca5c3f6e607fdd7 {
    <https://place-hold.it/1000x1000?text=Source%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:69> .
}

ns1:36c7c716f9f98b90615d22f2722b90e899a35d93c2da6c08999793b1b2878c65 {
    <urn:paradicms_etl:pipeline:test_data:named_value:97> a cms:NamedValue ;
        dcterms:title "Named value 97" ;
        rdf:predicate vra:technique ;
        rdf:value "Technique 7" .
}

ns1:48d5081c9dc301339cba8b775fbe4921bea00ab15722d502b78d5fbcf9cdaa25 {
    <http://creativecommons.org/licenses/by-nc-nd/3.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:ff2b5690f84b76c098150a958038d981d74201e91047a4c66533c8a03f005620 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%203Image0> .

    <https://place-hold.it/600x600?text=Cultural%20context%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:3> .
}

ns1:df4110ee887c650f0d91a1016aa68c9ecc856369da8eaf21bd49c2a2720c8c30 {
    <urn:paradicms_etl:pipeline:test_data:named_value:81> a cms:NamedValue ;
        dcterms:title "Named value 81" ;
        rdf:predicate dcterms:subject ;
        rdf:value "Subject 1" .
}

ns1:2ce8b0a0aeffc8892405fc8ee2dfec2c6aff1a2410b789b4efa5b0cf6e63a356 {
    <https://place-hold.it/1000x1000?text=Medium%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%206Image0> .

    <https://place-hold.it/600x600?text=Medium%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:46> .
}

ns1:112b21ed13fe08a5b01af3de338a37e234de40dffb7760832daa60cdd10c7112 {
    <https://place-hold.it/1000x1000?text=Technique%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%203Image1> .

    <https://place-hold.it/75x75?text=Technique%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:93> .
}

ns1:643a8d80fb7080cf296a97b1451d171a2c2c24b857e6c903337187c8667fc7a8 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:4> .
}

ns1:daef80951721bcc710b3fcb833867777b2f984a1e097659608023053dcec5b12 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:4> .
}

ns1:d7ee7ba435dd3c2e991646b7429bcacc7b8694f1c8ad599b0f968ea887ba0663 {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork7Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Institution0SharedWork7Image0> .

    <https://place-hold.it/600x600?text=Institution0SharedWork7Image0> a cms:Image ;
        dcterms:contributor <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork7 rights holder" ;
        dcterms:title "Institution0SharedWork7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution0/shared/work7> .
}

ns1:cf5d3e316e9e848936c0e295d42660081350d0f00bfec518f5cde277f2582095 {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work8Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Institution1Collection0Work8Image1> .

    <https://place-hold.it/75x75?text=Institution1Collection0Work8Image1> a cms:Image ;
        dcterms:contributor <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work8 rights holder" ;
        dcterms:title "Institution1Collection0Work8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution1/collection0/work8> .
}

ns1:0ec9fab2cee4a14c23858890f0cf5ed603e6df2b8bc06be11386504a3d522c3d {
    <http://creativecommons.org/licenses/by-sa/1.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:178ed4930555671e81dde371ba179e098417e1b4d7b82aba230ff95ccf0db9fd {
    <https://place-hold.it/1000x1000?text=Source%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Source%205Image0> .

    <https://place-hold.it/600x600?text=Source%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:65> .
}

ns1:f9b584eac1f009d084bb72bbe5fd9366733be7fa2915220992ce21d16c686593 {
    <urn:paradicms_etl:pipeline:test_data:named_value:45> a cms:NamedValue ;
        dcterms:title "Named value 45" ;
        rdf:predicate dcterms:medium ;
        rdf:value "Medium 5" .
}

ns1:f7bda5572e75476f793fc9854209656a92787bca699dd86607b67415acd715fe {
    <https://place-hold.it/1000x1000?text=Technique%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%208Image1> .

    <https://place-hold.it/75x75?text=Technique%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:98> .
}

ns1:6db1e8f228cc97c8824748ad46dd6045f5f1dec05bf76e07b05c086a6af52a56 {
    <https://place-hold.it/1000x1000?text=Spatial%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%202Image0> .

    <https://place-hold.it/600x600?text=Spatial%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:72> .
}

ns1:b8578e21e32a83531d5c2b4c8616b6d90b579a1443269e5ed2d8f5d1a7c684ed {
    <https://place-hold.it/1000x1000?text=Type%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:100> .
}

ns1:246da173f9cb22a1c73dce96535a510dfdfc94682f8126d7bed1b67b1c05ecbe {
    <http://example.com/institution1/collection0/work10Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Institution1Collection0Work10 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---11"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Institution1Collection0Work10 creation" ;
        cms:work <http://example.com/institution1/collection0/work10> .
}

ns1:04782b8a5b520e0a74e4918ec350f158857bdb642d69cf29016ed2d7d116f2aa {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork15Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Institution1SharedWork15Image0> .

    <https://place-hold.it/600x600?text=Institution1SharedWork15Image0> a cms:Image ;
        dcterms:contributor <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:creator <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork15 rights holder" ;
        dcterms:title "Institution1SharedWork15 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution1/shared/work15> .
}

ns1:cf55a160f877a5ad9f3b986aa90be1cab6fdd9854c5f915e60e99c316a390ddc {
    <https://place-hold.it/1000x1000?text=Publisher%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:57> .
}

ns1:6392fb8ef176d307f52bdaa3a4df56e4fee7345be089a632cfcb7ea2fb326a1e {
    <https://place-hold.it/1000x1000?text=Language%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:23> .
}

ns1:0ee605f181f21c5a7dfbd4f8af46d9b048da0d2cb0f382af73f6fb8c8ed8e8b6 {
    <https://place-hold.it/1000x1000?text=Subject%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:83> .
}

ns1:9d17d6b73adef8bea1d3513f083be539ba6d814aac499615bcbb50a977b3413a {
    <https://place-hold.it/1000x1000?text=Spatial%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%203Image0> .

    <https://place-hold.it/600x600?text=Spatial%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:73> .
}

ns1:1d9a4fc68e17bd6bf348b095848f40257f36c876944e30794b2cc7ed660077f5 {
    <https://place-hold.it/1000x1000?text=Type%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Type%208Image1> .

    <https://place-hold.it/75x75?text=Type%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:108> .
}

ns1:fd5b8b36207733a6bb24010cf5099ba054bac21b4b1d42860aa8351c32519587 {
    <https://place-hold.it/1000x1000?text=Type%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:109> .
}

ns1:8adaf9dbb247724bdb7d21ea69b7f159aba5e6429227f545088178688a419e78 {
    <https://place-hold.it/1000x1000?text=Technique%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%209Image0> .

    <https://place-hold.it/600x600?text=Technique%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:99> .
}

ns1:ba4bb274bd124b99b7f440220ee553358a856b76f2c8b5755aa111bcc4c14401 {
    <https://place-hold.it/1000x1000?text=Material%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Material%203Image1> .

    <https://place-hold.it/600x600?text=Material%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:33> .
}

ns1:bbc1d7f14d95c92994a83a6aa86227a728fd68caf010dba8c675cb1f4006e1f8 {
    <https://place-hold.it/1000x1000?text=Institution0Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Institution0Image1> .

    <https://place-hold.it/600x600?text=Institution0Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0 rights holder" ;
        dcterms:title "Institution0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution0> .
}

ns1:64b0d81bcea3f858ee41fd6fe08a3437ffcc1e743ccf601788df16a6674bcd8b {
    <urn:paradicms_etl:pipeline:test_data:named_value:63> a cms:NamedValue ;
        dcterms:title "Named value 63" ;
        rdf:predicate dcterms:source ;
        rdf:value "Source 3" .
}

ns1:bac1bb74e351723a6cda166e08af8b71cde612c749ff161a4fc976f92398873a {
    <https://place-hold.it/1000x1000?text=Type%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Type%209Image1> .

    <https://place-hold.it/75x75?text=Type%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:109> .
}

ns1:800b143398ea8848e3dff625bf295de4f21a73282dada2f295f29f888095b340 {
    <https://place-hold.it/1000x1000?text=Material%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Material%206Image1> .

    <https://place-hold.it/600x600?text=Material%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:36> .
}

ns1:ad3752483695f6465bfdc25e35c523b3ad4b4fdf1c64ab2457bf6ee9cce3ddcd {
    <https://place-hold.it/1000x1000?text=Cultural%20context%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%203Image1> .

    <https://place-hold.it/75x75?text=Cultural%20context%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:3> .
}

ns1:c28f115848f01375a7e5d0c0a8d8ddaf00e2fe9dc69ec6896890a193887971dd {
    <https://place-hold.it/1000x1000?text=Language%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Language%204Image1> .

    <https://place-hold.it/75x75?text=Language%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:24> .
}

ns1:81ade98d4eb755a2335dedc6b78a99ffbc0b857be6702211b6212096119ccfab {
    <urn:paradicms_etl:pipeline:test_data:named_value:10> a cms:NamedValue ;
        dcterms:title "Named value 10" ;
        rdf:predicate dcterms:extent ;
        rdf:value "Extent 0" .
}

ns1:d4360a96226facf750f3e2349840f40e9a02b1da199e61c7bda67df9285c50dc {
    <https://place-hold.it/1000x1000?text=Language%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:27> .
}

ns1:1c46895ca8a1e3c9d0998112164957779c024c3a61930cbd253f3c086540117e {
    <https://place-hold.it/1000x1000?text=Technique%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%202Image0> .

    <https://place-hold.it/75x75?text=Technique%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:92> .
}

ns1:352bd9fc010e32d9bac2d358f21ae055ad11f63fdd0efc09973dfa2d331edcb3 {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work8Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Institution1Collection0Work8Image0> .

    <https://place-hold.it/600x600?text=Institution1Collection0Work8Image0> a cms:Image ;
        dcterms:contributor <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work8 rights holder" ;
        dcterms:title "Institution1Collection0Work8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution1/collection0/work8> .
}

ns1:93e050f7fddac7e5efc91a513a175b3043efee33f0fbbf60899fde8cb46cdf37 {
    <http://example.com/institution1/shared/work15Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:creator <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---16"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Institution1SharedWork15 creation" ;
        cms:work <http://example.com/institution1/shared/work15> .
}

ns1:4f44bfef72e53461fb673208810297288d91859f449f2bf9fbdf4a4e5f4c6925 {
    <https://place-hold.it/1000x1000?text=Language%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Language%207Image1> .

    <https://place-hold.it/600x600?text=Language%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:27> .
}

ns1:ffa8c7dcf03e24e275070fdd9916e5a62449217274a4485cacaaf2dac278f56d {
    <https://place-hold.it/1000x1000?text=Extent%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%200Image1> .

    <https://place-hold.it/75x75?text=Extent%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:10> .
}

ns1:716271d40754b042dbb4f074c6368544cd50dda88304e13dec1eb29f36a46da2 {
    <urn:paradicms_etl:pipeline:test_data:named_value:76> a cms:NamedValue ;
        dcterms:title "Named value 76" ;
        rdf:predicate dcterms:spatial ;
        rdf:value "Spatial 6" .
}

ns1:86a74eb6d4ea1a8433bd94036aba63fd4b5256c79e4ccf005553a088d24d99b7 {
    <urn:paradicms_etl:pipeline:test_data:named_value:95> a cms:NamedValue ;
        dcterms:title "Named value 95" ;
        rdf:predicate vra:technique ;
        rdf:value "Technique 5" .
}

ns1:babb0a060b008d8aec52e7844f3e79bec75d7d937b3003be1747b355bc250d0f {
    <https://place-hold.it/1000x1000?text=Publisher%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%205Image1> .

    <https://place-hold.it/600x600?text=Publisher%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:55> .
}

ns1:0e1c42e245d546e8d4f78c27b6545e8f04d97aa0057c18b2576898ddef23ca40 {
    <urn:paradicms_etl:pipeline:test_data:named_value:79> a cms:NamedValue ;
        dcterms:title "Named value 79" ;
        rdf:predicate dcterms:spatial ;
        rdf:value "Spatial 9" .
}

ns1:13a48508beffc63f7d8168e3c9cc9b155a6f19ec2cb24cdce2000395dc0ea990 {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork5Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Institution0SharedWork5Image0> .

    <https://place-hold.it/600x600?text=Institution0SharedWork5Image0> a cms:Image ;
        dcterms:contributor <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:creator <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork5 rights holder" ;
        dcterms:title "Institution0SharedWork5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution0/shared/work5> .
}

ns1:47c09dc6540146281cf76e00133996de055c057c145ba05ae6846033911b0e5d {
    <urn:paradicms_etl:pipeline:test_data:named_value:1> a cms:NamedValue ;
        dcterms:title "Named value 1" ;
        rdf:predicate vra:culturalContext ;
        rdf:value "Cultural context 1" .
}

ns1:42a113a8fc9f1f152636e00a441652d8d2ba13f66f6189fd06d224bdd242a79b {
    <https://place-hold.it/1000x1000?text=Technique%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%201Image1> .

    <https://place-hold.it/600x600?text=Technique%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:91> .
}

ns1:ec61665f4d898bdbf4be2f11556a18416e6c4e18370e1df45ff9cc037ed5c295 {
    <https://place-hold.it/1000x1000?text=Source%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:60> .
}

ns1:d83bc62e338eb09da42bbb2c138527a52ea076faba49c9a0939eca2f1a2de6ef {
    <https://place-hold.it/1000x1000?text=Extent%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%208Image1> .

    <https://place-hold.it/75x75?text=Extent%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:18> .
}

ns1:ff948f1bc92de6988256048a730ef2836df6e1feeee3db9bfcc9f8bd6798392c {
    <https://place-hold.it/1000x1000?text=Organization%203> a cms:Image ;
        dcterms:creator "Organization 3 image creator" ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Organization 3 image rights holder" ;
        dcterms:title "Organization 3 image" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/organization3> .
}

ns1:8aee090dd09ca37f9e16cb226f711b1d7427d81045be9232119025b123bd0585 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:9> .
}

ns1:d85ae77e98001631afc9ada247f69c1e65e0e8dca5003971e7f080f04e79ff3e {
    <https://place-hold.it/1000x1000?text=Material%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Material%204Image1> .

    <https://place-hold.it/75x75?text=Material%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:34> .
}

ns1:0b772292bcbd52418333881aeb3b6f9c1ddf03ecefd40ea1ee4e2452c8498a2a {
    <https://place-hold.it/1000x1000?text=Material%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:31> .
}

ns1:4e675b026db554c4859211d75449367add1858f601dcc67fed1d061ad2f59cc9 {
    <https://place-hold.it/1000x1000?text=Medium%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%201Image0> .

    <https://place-hold.it/75x75?text=Medium%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:41> .
}

ns1:e054b9b85c453aafad646ac8a966aa12fe400495d0664313d0d86e180f8d3ae1 {
    <https://place-hold.it/1000x1000?text=Publisher%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%206Image1> .

    <https://place-hold.it/600x600?text=Publisher%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:56> .
}

ns1:96639f4b730d3f19fd77e02779c0b89c119f7e3bdd0fc22421930c3976f4a5c8 {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork6Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Institution0SharedWork6Image1> .

    <https://place-hold.it/75x75?text=Institution0SharedWork6Image1> a cms:Image ;
        dcterms:contributor <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:creator <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork6 rights holder" ;
        dcterms:title "Institution0SharedWork6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution0/shared/work6> .
}

ns1:0b38142b2a635a9d0da3fab8c3554c43634f9db547e514777ea01279005e4c22 {
    <https://place-hold.it/1000x1000?text=Technique%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%205Image0> .

    <https://place-hold.it/75x75?text=Technique%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:95> .
}

ns1:4a5848a52447b8e15e37ae18eff4e6074dd113cea31652eded099dfafd45cc23 {
    <https://place-hold.it/1000x1000?text=Material%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:36> .
}

ns1:ab7e88689f62b1d70613ded839eedb06811c4c348ff6e629703a35fd8fe6fa00 {
    <https://place-hold.it/1000x1000?text=Spatial%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:77> .
}

ns1:99e01e0d178079022452b3ca5d5facbe8c259973900166aa3b8581f5cc5b8709 {
    <https://place-hold.it/1000x1000?text=Source%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Source%205Image0> .

    <https://place-hold.it/75x75?text=Source%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:65> .
}

ns1:5c3d61dbedd7caabb3f5a0b08431efee4bb1b136a99a49e82270dcc48417396d {
    <https://place-hold.it/1000x1000?text=Extent%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%207Image1> .

    <https://place-hold.it/600x600?text=Extent%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:17> .
}

ns1:08e68aa72a5821fbcce56b74101403d1c742baf194b8d576dab09984b857a6cd {
    <https://place-hold.it/1000x1000?text=Publisher%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%200Image1> .

    <https://place-hold.it/600x600?text=Publisher%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:50> .
}

ns1:c259e5c5765f92f2c9534d96da504f4d1082eafb30a5ac2843340f769e8dcaf0 {
    <urn:paradicms_etl:pipeline:test_data:named_value:64> a cms:NamedValue ;
        dcterms:title "Named value 64" ;
        rdf:predicate dcterms:source ;
        rdf:value "Source 4" .
}

ns1:22e0855c722926a5044b44829d666612c24aad499ec93fe678570d7c87857460 {
    <https://place-hold.it/1000x1000?text=Type%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Type%201Image1> .

    <https://place-hold.it/75x75?text=Type%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:101> .
}

ns1:4b7222f2085210a7c64163837243d559df05e5ad4db5cc8c3e9fb8621921c35d {
    <https://place-hold.it/1000x1000?text=Spatial%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:77> .
}

ns1:6ebb50e62f58367d9a83af931ee249252bd209ca1801143b4cbf60ac7acfccbb {
    <http://creativecommons.org/licenses/MIT/> a creativecommons:License,
            cms:License ;
        creativecommons:legalcode <http://opensource.org/licenses/mit-license.php> ;
        creativecommons:licenseClass <http://creativecommons.org/license/software> ;
        creativecommons:permits creativecommons:DerivativeWorks,
            creativecommons:Distribution,
            creativecommons:Reproduction ;
        creativecommons:requires creativecommons:Notice ;
        dc:identifier "MIT" ;
        dc:title "MIT License",
            "MIT"@en .
}

ns1:088bca8d2bee5db556962c7102a89110577ecd53bb4f583a348defeaf20b9c09 {
    <https://place-hold.it/1000x1000?text=Person%200> a cms:Image ;
        dcterms:creator "Person 0 image creator" ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Person 0 image rights holder" ;
        dcterms:title "Person 0 image" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/person0> .
}

ns1:ae6ec65c7d01c703d3aa9dd0d5ca481847d0d6f9e1c34569b5f001dd3e4adc2e {
    <https://place-hold.it/1000x1000?text=Type%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:105> .
}

ns1:260a97815e7198cd5f93885b125e35b78f51c1d243e3efb7ab58c77e9a597676 {
    <https://place-hold.it/1000x1000?text=Medium%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:45> .
}

ns1:a68eaaf8d7aaf32b1c42e2d682be5c31c6c437d58cb02d7ff2f84adaa09a70cf {
    <https://place-hold.it/1000x1000?text=Type%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Type%204Image0> .

    <https://place-hold.it/75x75?text=Type%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:104> .
}

ns1:3c66dc47f17b2bd5c423e87ed566e2fdd1408acb3bad719f10f8a7e8f5a57172 {
    <http://example.com/institution1/collection0/work9> a cms:Work ;
        dcterms:alternative "Institution1Collection0Work9 alternative title 0",
            "Institution1Collection0Work9 alternative title 1" ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:created [ a cms:DateTimeDescription ;
                time:day "---10"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:creator <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:date "2020-07-30",
            "2020-07-31" ;
        dcterms:extent <urn:paradicms_etl:pipeline:test_data:named_value:10>,
            <urn:paradicms_etl:pipeline:test_data:named_value:19> ;
        dcterms:identifier "Institution1Collection0Work9Id0",
            "Institution1Collection0Work9Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:test_data:named_value:20>,
            <urn:paradicms_etl:pipeline:test_data:named_value:29> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:test_data:named_value:40>,
            <urn:paradicms_etl:pipeline:test_data:named_value:49> ;
        dcterms:provenance "Institution1Collection0Work9 provenance 0",
            "Institution1Collection0Work9 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:test_data:named_value:50>,
            <urn:paradicms_etl:pipeline:test_data:named_value:59> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work9 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:test_data:named_value:60>,
            <urn:paradicms_etl:pipeline:test_data:named_value:69> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:test_data:named_value:70>,
            <urn:paradicms_etl:pipeline:test_data:named_value:79> ;
        dcterms:subject <urn:paradicms_etl:pipeline:test_data:named_value:80>,
            <urn:paradicms_etl:pipeline:test_data:named_value:89> ;
        dcterms:title "Institution1Collection0Work9" ;
        dcterms:type <urn:paradicms_etl:pipeline:test_data:named_value:100>,
            <urn:paradicms_etl:pipeline:test_data:named_value:109> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:test_data:named_value:0>,
            <urn:paradicms_etl:pipeline:test_data:named_value:9> ;
        vra:material <urn:paradicms_etl:pipeline:test_data:named_value:30>,
            <urn:paradicms_etl:pipeline:test_data:named_value:39> ;
        vra:technique <urn:paradicms_etl:pipeline:test_data:named_value:90>,
            <urn:paradicms_etl:pipeline:test_data:named_value:99> ;
        cms:collection <http://example.com/institution1/collection0> ;
        cms:institution <http://example.com/institution1> .
}

ns1:07ae88f18e37d965833a8bf7de6929adfdb4995887d30fdfe39571bb5ab169d6 {
    <urn:paradicms_etl:pipeline:test_data:named_value:29> a cms:NamedValue ;
        dcterms:title "Named value 29" ;
        rdf:predicate dcterms:language ;
        rdf:value "Language 9" .
}

ns1:ff0bfb84fe0937aa78c4acd86e9f064e10f896f9e4afede1addfea7d42b871dd {
    <https://place-hold.it/1000x1000?text=Source%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Source%202Image0> .

    <https://place-hold.it/600x600?text=Source%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:62> .
}

ns1:280672d345923b09b16888785c1bc0a1316b08b77b0fbde0b90693376c05bdb4 {
    <https://place-hold.it/1000x1000?text=Technique%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%202Image1> .

    <https://place-hold.it/600x600?text=Technique%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:92> .
}

ns1:68e94eae91aa32d68f658f0b2b47c3183d7225d16b26c98f8e5da1a4caaa0e4c {
    <https://place-hold.it/1000x1000?text=Type%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:102> .
}

ns1:48a0e7e38c5988ab6a83c371440405b28f44e7c3c25bee1590d376c020c19a75 {
    <https://place-hold.it/1000x1000?text=Language%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:25> .
}

ns1:29b418e78f76511de43ac264a62d3ccd1027ff8df680536e2838d93e958e8642 {
    <https://place-hold.it/1000x1000?text=Medium%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%201Image1> .

    <https://place-hold.it/75x75?text=Medium%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:41> .
}

ns1:5420620a55ec31e7f7273bb0afa2facef98e1968a03efa97f019ee7043ba5dc5 {
    <https://place-hold.it/1000x1000?text=Material%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:35> .
}

ns1:6e9038cb226d276f195e68257510013e495d6738e707b73d4aabd7f3d5281583 {
    <https://place-hold.it/1000x1000?text=Extent%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%205Image1> .

    <https://place-hold.it/600x600?text=Extent%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:15> .
}

ns1:db178ed2553710dd260312e7bc3457328bcd0f1623d5282661cc3702a9c53727 {
    <https://place-hold.it/1000x1000?text=Technique%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%206Image0> .

    <https://place-hold.it/600x600?text=Technique%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:96> .
}

ns1:9c7cd0b5664fb8231ff35c39e00eae40626e129189edc5251544c045bd6bcfd5 {
    <http://example.com/institution0/collection0/work2Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Institution0Collection0Work2 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:contributor <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:creator <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---03"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Institution0Collection0Work2 creation" ;
        cms:work <http://example.com/institution0/collection0/work2> .
}

ns1:5b13098cdddf876eba7d0e94d0d3e3dc07f9f746f14b16949e215018961861f1 {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork6Image1> a cms:Image ;
        dcterms:contributor <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:creator <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork6 rights holder" ;
        dcterms:title "Institution0SharedWork6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution0/shared/work6> .
}

ns1:772348fa0ceec2ba2dd1dc6f6f0013e1e4b64f52d8dbe23390e1c4bf3079d069 {
    <https://place-hold.it/1000x1000?text=Subject%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:89> .
}

ns1:8e1b88661ffaa2ecb228439e90126bca6b838c2f2473a88eca7448da91854cf1 {
    <https://place-hold.it/1000x1000?text=Institution1Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1 rights holder" ;
        dcterms:title "Institution1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution1> .
}

ns1:173e2ea79335fe1040eeec2bd6c79f7dbfefd052c36a825bb5f172fb165a0ce2 {
    <https://place-hold.it/1000x1000?text=Spatial%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%209Image1> .

    <https://place-hold.it/75x75?text=Spatial%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:79> .
}

ns1:207121a5fa28befa4692a61506465837d8c829b8a34e2b83c0032d91596b9ab0 {
    <https://place-hold.it/1000x1000?text=Medium%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:40> .
}

ns1:9bcec2931359f8bdde7542f0c7329d482be52d53489de19253b0cc543b78874e {
    <https://place-hold.it/1000x1000?text=Language%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:24> .
}

ns1:9c402c64ce832de6482b6e0335ab418ed430d05e616cd6e0cd2b6c7c152049b4 {
    <https://place-hold.it/1000x1000?text=Publisher%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:53> .
}

ns1:2340e5ff164c8e94adda8581cdaddd426985f1888b969de3e24feb19f0c624b1 {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work0Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work0 rights holder" ;
        dcterms:title "Institution0Collection0Work0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution0/collection0/work0> .
}

ns1:0d5941f206125e3d0d33f28baaa4362e0657d54f12bc9caa626641d25bdff87d {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work9Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work9 rights holder" ;
        dcterms:title "Institution1Collection0Work9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution1/collection0/work9> .
}

ns1:60cade12d7afc54230c433441af6e0585c8f05e4e0e9e6382982048027dc33ea {
    <https://place-hold.it/1000x1000?text=Material%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:39> .
}

ns1:c758d2123c65b26734fbc9747e12a8eb420bbeffaac740a219ac72708fe74bb1 {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork7Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Institution0SharedWork7Image0> .

    <https://place-hold.it/75x75?text=Institution0SharedWork7Image0> a cms:Image ;
        dcterms:contributor <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork7 rights holder" ;
        dcterms:title "Institution0SharedWork7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution0/shared/work7> .
}

ns1:0f70fe739d79ad4c594c61d4aeb6a7f8b2fff41c699dad3e9a5b1ffc9ab5f9a7 {
    <https://place-hold.it/1000x1000?text=Subject%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:86> .
}

ns1:7c5edeeb8fed64056786f9a7b7e4c9420fe784d64e05c91c45c6d15e8f59e456 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%204Image1> .

    <https://place-hold.it/600x600?text=Cultural%20context%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:4> .
}

ns1:b90c1a21f49556e8ef43b0b0ef3d862d0f4e4115f0e4b3cd7b1afa57087b7128 {
    <https://place-hold.it/1000x1000?text=Extent%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%203Image1> .

    <https://place-hold.it/600x600?text=Extent%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:13> .
}

ns1:954a9d0773830133fd14ca8b76945902380bd5d2e553cf8fffb918b132a99b0a {
    <https://place-hold.it/1000x1000?text=Cultural%20context%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%200Image0> .

    <https://place-hold.it/600x600?text=Cultural%20context%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:0> .
}

ns1:112638c707bd2d975f2604d876a8a76e8d17272b35ea434421e485c043973f86 {
    <https://place-hold.it/1000x1000?text=Medium%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%205Image1> .

    <https://place-hold.it/600x600?text=Medium%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:45> .
}

ns1:e031438a2d975af32bfe8f8a8b6d0c72b87c379404389d809e50ccddd2ce17e1 {
    <https://place-hold.it/1000x1000?text=Source%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Source%204Image1> .

    <https://place-hold.it/600x600?text=Source%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:64> .
}

ns1:e52bf8556263449989b4a0e0786aba71914a0dff41755c7f82c2446fadcba37f {
    <urn:paradicms_etl:pipeline:test_data:named_value:89> a cms:NamedValue ;
        dcterms:title "Named value 89" ;
        rdf:predicate dcterms:subject ;
        rdf:value "Subject 9" .
}

ns1:4d8121a24397bf9aadd02e7f2a753b1f45cd2cbd01d9c1a8bb795571dfd01b30 {
    <https://place-hold.it/1000x1000?text=Spatial%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:75> .
}

ns1:35c8adef8ed18ee70d98d3d9822a421e87923da15e370c1faafb8acd31d2874b {
    <http://example.com/institution1/collection0/work8> a cms:Work ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Institution1Collection0Work8 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:alternative "Institution1Collection0Work8 alternative title 0",
            "Institution1Collection0Work8 alternative title 1" ;
        dcterms:contributor <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:created [ a cms:DateTimeDescription ;
                time:day "---09"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:date "2020-07-31",
            "2020-08-01" ;
        dcterms:description "Institution1Collection0Work8 description 0",
            "Institution1Collection0Work8 description 1",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
        dcterms:extent <urn:paradicms_etl:pipeline:test_data:named_value:18>,
            <urn:paradicms_etl:pipeline:test_data:named_value:19> ;
        dcterms:identifier "Institution1Collection0Work8Id0",
            "Institution1Collection0Work8Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:test_data:named_value:28>,
            <urn:paradicms_etl:pipeline:test_data:named_value:29> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:test_data:named_value:48>,
            <urn:paradicms_etl:pipeline:test_data:named_value:49> ;
        dcterms:provenance "Institution1Collection0Work8 provenance 0",
            "Institution1Collection0Work8 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:test_data:named_value:58>,
            <urn:paradicms_etl:pipeline:test_data:named_value:59> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work8 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:test_data:named_value:68>,
            <urn:paradicms_etl:pipeline:test_data:named_value:69> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:test_data:named_value:78>,
            <urn:paradicms_etl:pipeline:test_data:named_value:79> ;
        dcterms:subject <urn:paradicms_etl:pipeline:test_data:named_value:88>,
            <urn:paradicms_etl:pipeline:test_data:named_value:89> ;
        dcterms:title "Institution1Collection0Work8" ;
        dcterms:type <urn:paradicms_etl:pipeline:test_data:named_value:108>,
            <urn:paradicms_etl:pipeline:test_data:named_value:109> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:test_data:named_value:8>,
            <urn:paradicms_etl:pipeline:test_data:named_value:9> ;
        vra:material <urn:paradicms_etl:pipeline:test_data:named_value:38>,
            <urn:paradicms_etl:pipeline:test_data:named_value:39> ;
        vra:technique <urn:paradicms_etl:pipeline:test_data:named_value:98>,
            <urn:paradicms_etl:pipeline:test_data:named_value:99> ;
        cms:collection <http://example.com/institution1/collection0> ;
        cms:institution <http://example.com/institution1> ;
        foaf:page <http://example.com/work/8> .
}

ns1:a5196790e4aa4d7fcb128ec59ccc67ada0a495df75a9047742d02c9ba05d875c {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work1Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work1 rights holder" ;
        dcterms:title "Institution0Collection0Work1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution0/collection0/work1> .
}

ns1:b1c7820c39978d1065d2cc637629e9c57565ce2f3dc71aef71d1ddb870108c15 {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work3Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Institution0Collection0Work3Image0> .

    <https://place-hold.it/600x600?text=Institution0Collection0Work3Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:creator <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work3 rights holder" ;
        dcterms:title "Institution0Collection0Work3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution0/collection0/work3> .
}

ns1:2d820409be7bb7398d8d349ab4236edfdfeb2dbbda7f14a0941eb11fb27d825b {
    <https://place-hold.it/1000x1000?text=Type%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Type%208Image0> .

    <https://place-hold.it/600x600?text=Type%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:108> .
}

ns1:e2d2b958900e6170931954167bc5b053434fa617ef0f0f9a3b403392038331e1 {
    <http://example.com/institution1/shared/work15> a cms:Work ;
        dcterms:alternative "Institution1SharedWork15 alternative title 0",
            "Institution1SharedWork15 alternative title 1" ;
        dcterms:contributor <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:created [ a cms:DateTimeDescription ;
                time:day "---16"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:creator <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:date "2020-07-24",
            "2020-07-25" ;
        dcterms:extent <urn:paradicms_etl:pipeline:test_data:named_value:15>,
            <urn:paradicms_etl:pipeline:test_data:named_value:16> ;
        dcterms:identifier "Institution1SharedWork15Id0",
            "Institution1SharedWork15Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:test_data:named_value:25>,
            <urn:paradicms_etl:pipeline:test_data:named_value:26> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:test_data:named_value:45>,
            <urn:paradicms_etl:pipeline:test_data:named_value:46> ;
        dcterms:provenance "Institution1SharedWork15 provenance 0",
            "Institution1SharedWork15 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:test_data:named_value:55>,
            <urn:paradicms_etl:pipeline:test_data:named_value:56> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork15 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:test_data:named_value:65>,
            <urn:paradicms_etl:pipeline:test_data:named_value:66> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:test_data:named_value:75>,
            <urn:paradicms_etl:pipeline:test_data:named_value:76> ;
        dcterms:subject <urn:paradicms_etl:pipeline:test_data:named_value:85>,
            <urn:paradicms_etl:pipeline:test_data:named_value:86> ;
        dcterms:title "Institution1SharedWork15" ;
        dcterms:type <urn:paradicms_etl:pipeline:test_data:named_value:105>,
            <urn:paradicms_etl:pipeline:test_data:named_value:106> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:test_data:named_value:5>,
            <urn:paradicms_etl:pipeline:test_data:named_value:6> ;
        vra:material <urn:paradicms_etl:pipeline:test_data:named_value:35>,
            <urn:paradicms_etl:pipeline:test_data:named_value:36> ;
        vra:technique <urn:paradicms_etl:pipeline:test_data:named_value:95>,
            <urn:paradicms_etl:pipeline:test_data:named_value:96> ;
        cms:collection <http://example.com/institution1/collection0> ;
        cms:institution <http://example.com/institution1> .
}

ns1:15a4bc50fa8949e168f7b6b9234592d91b2a0cf2aacbd472f0c00aff6c8ab9bd {
    <https://place-hold.it/1000x1000?text=Type%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:106> .
}

ns1:72ae8f2ec89af0d0b4bc0b8c77d3d4293ccaba3b5f9808794cb65d8c1dac8fb0 {
    <https://place-hold.it/1000x1000?text=Spatial%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:78> .
}

ns1:d29a5f650cb79e3e074c4432cad12010b647b8bb2abc7a8fcd3024819b309c6c {
    <https://place-hold.it/1000x1000?text=Subject%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%207Image1> .

    <https://place-hold.it/600x600?text=Subject%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:87> .
}

ns1:507aed1b7e5582bce118946d6e4ec62de132ae39e350ff36866122d761ca3290 {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork5Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Institution0SharedWork5Image1> .

    <https://place-hold.it/75x75?text=Institution0SharedWork5Image1> a cms:Image ;
        dcterms:contributor <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:creator <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork5 rights holder" ;
        dcterms:title "Institution0SharedWork5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution0/shared/work5> .
}

ns1:61746ddddf135df1e557ddb84a79f6b638118f43fe54e753771823b7c4df502f {
    <https://place-hold.it/1000x1000?text=Type%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Type%200Image1> .

    <https://place-hold.it/600x600?text=Type%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:100> .
}

ns1:4ba7de5410f3980694b5c72d2fc42c0342e72f4ee22c7757a523785fe6e5eeea {
    <urn:paradicms_etl:pipeline:test_data:named_value:15> a cms:NamedValue ;
        dcterms:title "Named value 15" ;
        rdf:predicate dcterms:extent ;
        rdf:value "Extent 5" .
}

ns1:36323d07ff088dae3907bff078ee0889ce4bd6a5187d69619b74f5b2763bdf41 {
    <https://place-hold.it/1000x1000?text=Spatial%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%200Image1> .

    <https://place-hold.it/75x75?text=Spatial%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:70> .
}

ns1:ef67424c4aa2a8c5d82961c1d3ea6948d67ed6de11de91d3a38f7960a4d8e597 {
    <https://place-hold.it/1000x1000?text=Technique%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%207Image1> .

    <https://place-hold.it/75x75?text=Technique%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:97> .
}

ns1:7f7af3a79f49ccb55024b4923a1eea1934d4ef9db89a1fc771f29b51e29fca39 {
    <https://place-hold.it/1000x1000?text=Publisher%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:58> .
}

ns1:5f185b315366134cec6e6940095d9d24190dd216c1bed222ab219a4c9a1d8924 {
    <https://place-hold.it/1000x1000?text=Technique%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%200Image1> .

    <https://place-hold.it/600x600?text=Technique%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:90> .
}

ns1:ff10980a718adf99588794dca1a45d7029b5a0c4903ecbea35ed9afc32ec5ba1 {
    <urn:paradicms_etl:pipeline:test_data:named_value:92> a cms:NamedValue ;
        dcterms:title "Named value 92" ;
        rdf:predicate vra:technique ;
        rdf:value "Technique 2" .
}

ns1:113ceeefbd64240b86ee1cc84577de6146aae85e8b58c74ba74e51ae33236306 {
    <https://place-hold.it/1000x1000?text=Type%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:106> .
}

ns1:d5c2a3ed471b537d3557fcf46be3f3ac7f8c9f59bcdb1f6141e1426fda9d21a4 {
    <https://place-hold.it/1000x1000?text=Language%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Language%201Image0> .

    <https://place-hold.it/600x600?text=Language%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:21> .
}

ns1:64ef0a752ae1934b13d5ce333bd7c35f392b3db097e8f2dabf78a5ec75ab6953 {
    <https://place-hold.it/1000x1000?text=Material%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Material%206Image1> .

    <https://place-hold.it/75x75?text=Material%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:36> .
}

ns1:46ed24bc88ea99cad6ae4e204ab4ca4257da129948a5dfdf54f4180a4aeb152e {
    <https://place-hold.it/1000x1000?text=Spatial%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%204Image1> .

    <https://place-hold.it/75x75?text=Spatial%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:74> .
}

ns1:e36fc73adb6f41b738e9c2ecc485480e37e9f9ea42cc24c246b19cf98ee21e5f {
    <https://place-hold.it/1000x1000?text=Subject%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%205Image0> .

    <https://place-hold.it/75x75?text=Subject%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:85> .
}

ns1:a9113bcfb189f240bbc6976b612c5cde18d908476b5722529d73fb8800437ecb {
    <urn:paradicms_etl:pipeline:test_data:named_value:107> a cms:NamedValue ;
        dcterms:title "Named value 107" ;
        rdf:predicate dcterms:type ;
        rdf:value "Type 7" .
}

ns1:31e491fd7bade2eacfa2528ef6e6f4f0a78b8ba75a16c2da2c3f7719159fba89 {
    <urn:paradicms_etl:pipeline:test_data:named_value:40> a cms:NamedValue ;
        dcterms:title "Named value 40" ;
        rdf:predicate dcterms:medium ;
        rdf:value "Medium 0" .
}

ns1:e53ca71c8b60fcd0842e8bc45f1791d02a8511ddc2f1a0861c0cd2b4b3a4661d {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work0Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Institution0Collection0Work0Image1> .

    <https://place-hold.it/75x75?text=Institution0Collection0Work0Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work0 rights holder" ;
        dcterms:title "Institution0Collection0Work0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution0/collection0/work0> .
}

ns1:6cccfd94e1b0d407257aead32db43d29da89182aa90afb6f500c3bbce06e95d8 {
    <http://creativecommons.org/licenses/by/3.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:44525bde91f71b227e91a05306079779e2d07c9e4961d36191f207c8ca5ecd23 {
    <http://creativecommons.org/licenses/by-nc/2.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:e3475303e75969489af38422155e220f4b171a9e426b6675c938050b308eab15 {
    <https://place-hold.it/1000x1000?text=Source%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Source%203Image0> .

    <https://place-hold.it/75x75?text=Source%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:63> .
}

ns1:dc53fc7fce93b9297634035a6ed7bcc78742c89bbb9529b01bdbf628e1336e8e {
    <https://place-hold.it/1000x1000?text=Spatial%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%205Image1> .

    <https://place-hold.it/600x600?text=Spatial%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:75> .
}

ns1:131a3f85d5be26f983383b92a732fa029761d8478382c6ffce3e2f079de3dbaa {
    <https://place-hold.it/1000x1000?text=Material%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Material%200Image1> .

    <https://place-hold.it/75x75?text=Material%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:30> .
}

ns1:21979351593730cff676a08c322c5316d4525450bb4f6e0129c620a05578a335 {
    <https://place-hold.it/1000x1000?text=Medium%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:44> .
}

ns1:426c6a79659e9522b60c1e6b1d06e8622053a3a94606a07bc278ab7d8c3c4093 {
    <https://place-hold.it/1000x1000?text=Publisher%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:59> .
}

ns1:47ba8207fae15af3b298ff03ff151104b799ba41328e5bfdbc6ded48563f70e3 {
    <https://place-hold.it/1000x1000?text=Medium%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:43> .
}

ns1:83adc7ba9296ffa003f1f791e19285807a12e704bf5427685932aa56bc7c36d3 {
    <https://place-hold.it/1000x1000?text=Subject%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%200Image0> .

    <https://place-hold.it/75x75?text=Subject%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:80> .
}

ns1:fbb4c81116d32584ad468cbe11051501055c4af70da98a295e8200b0b050e466 {
    <https://place-hold.it/1000x1000?text=Spatial%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%205Image0> .

    <https://place-hold.it/600x600?text=Spatial%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:75> .
}

ns1:33cf8fbca6e4f88eba6a1bb4afe015a92a14a721290c45439a6c18ab27e18505 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%204Image1> .

    <https://place-hold.it/75x75?text=Cultural%20context%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:4> .
}

ns1:6b86f247005fad411a59f100782bb3ee5cd95306d942896711faa0168a5da111 {
    <https://place-hold.it/1000x1000?text=Spatial%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%208Image1> .

    <https://place-hold.it/600x600?text=Spatial%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:78> .
}

ns1:bf99a3eaea36f932d153d17bbbfc1cfe3570f5a5d67eb47f909edcd04ca4bef7 {
    <https://place-hold.it/1000x1000?text=Material%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Material%208Image1> .

    <https://place-hold.it/600x600?text=Material%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:38> .
}

ns1:33f24f329500a2db9154e33ebd0b506281bb8b0e9957c5241960127b4fa5008f {
    <https://place-hold.it/1000x1000?text=Spatial%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:72> .
}

ns1:11206088ae029a569c788d81b8385422214133792e51cef45ef4742793aab1e4 {
    <https://place-hold.it/1000x1000?text=Type%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Type%202Image0> .

    <https://place-hold.it/75x75?text=Type%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:102> .
}

ns1:cc416fb02c03e739f08dc805d0d580e7968d3855a324400418a704809917c8a4 {
    <https://place-hold.it/1000x1000?text=Type%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Type%205Image1> .

    <https://place-hold.it/600x600?text=Type%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:105> .
}

ns1:72d6e350a0f97378876b4a3c332a8ef48838b18e3a16fa211c1edceffb4a494b {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work8Image1> a cms:Image ;
        dcterms:contributor <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work8 rights holder" ;
        dcterms:title "Institution1Collection0Work8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution1/collection0/work8> .
}

ns1:db847b40edfb7c885499dff53e4dab929d876f8621820b582fbc020c9f9b2d8e {
    <https://place-hold.it/1000x1000?text=Material%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Material%202Image1> .

    <https://place-hold.it/75x75?text=Material%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:32> .
}

ns1:63211832f19669b5c2813240f3483853d860f83e0098f14a31da0d1560bfe9fc {
    <urn:paradicms_etl:pipeline:test_data:named_value:37> a cms:NamedValue ;
        dcterms:title "Named value 37" ;
        rdf:predicate vra:material ;
        rdf:value "Material 7" .
}

ns1:63c1855d18733c41b4180ef83487d104b7a19ab0c49d0c01bc3279042b6f1f87 {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork15Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Institution1SharedWork15Image0> .

    <https://place-hold.it/75x75?text=Institution1SharedWork15Image0> a cms:Image ;
        dcterms:contributor <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:creator <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork15 rights holder" ;
        dcterms:title "Institution1SharedWork15 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution1/shared/work15> .
}

ns1:382bae6cc0e65d6e9e4eefa65ea802643277c561467871fc79cc81000b24148c {
    <https://place-hold.it/1000x1000?text=Language%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Language%203Image1> .

    <https://place-hold.it/600x600?text=Language%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:23> .
}

ns1:adcb5e5de832a7b54252ac237981548dfc04708ae6b45d9acd3e23306299fd33 {
    <https://place-hold.it/1000x1000?text=Publisher%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:55> .
}

ns1:238a19cdae7115a69c7dd2f06c8124b59b1cc8deb73285b02cc13921ab39feb9 {
    <https://place-hold.it/1000x1000?text=Technique%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%204Image0> .

    <https://place-hold.it/75x75?text=Technique%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:94> .
}

ns1:d61c89b8e7cfb11e27c8c9df2b2810832a2f237495875b493739932aed80e956 {
    <https://place-hold.it/1000x1000?text=Publisher%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%207Image1> .

    <https://place-hold.it/600x600?text=Publisher%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:57> .
}

ns1:ba775a15c67b4592d62d48a0a4e7621f2640063d9086a469e1ec8905030bdc48 {
    <urn:paradicms_etl:pipeline:test_data:named_value:78> a cms:NamedValue ;
        dcterms:title "Named value 78" ;
        rdf:predicate dcterms:spatial ;
        rdf:value "Spatial 8" .
}

ns1:e3a8fe88fb466f9e90e1598050658b6d41a768bd046a917c37ad4511129218f6 {
    <https://place-hold.it/1000x1000?text=Medium%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:49> .
}

ns1:277cb2087bf89569f7f7ef465af85f616b9945baa0a1790eaf54feed8b502bba {
    <https://place-hold.it/1000x1000?text=Medium%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:44> .
}

ns1:444b571fb56d909986c9479d1b72a1aed28ae6dc11bdcf1a85a552c0c15a0efb {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work3Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Institution0Collection0Work3Image1> .

    <https://place-hold.it/75x75?text=Institution0Collection0Work3Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:creator <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work3 rights holder" ;
        dcterms:title "Institution0Collection0Work3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution0/collection0/work3> .
}

ns1:dde9e9bb49bdcdf663df1727dba8246d89403f7af4e128c00891ff5c5d3ef964 {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work8Image0> a cms:Image ;
        dcterms:contributor <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work8 rights holder" ;
        dcterms:title "Institution1Collection0Work8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution1/collection0/work8> .
}

ns1:3dc9219481f00d495b71bc34463544b8b4a3790a2fc41268ebecc14180ca2cd4 {
    <https://place-hold.it/1000x1000?text=Subject%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%202Image1> .

    <https://place-hold.it/600x600?text=Subject%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:82> .
}

ns1:8e516159eeb3c57af00e3311f82df514b806db67ad16d90dbdfc620ebb27d114 {
    <https://place-hold.it/1000x1000?text=Source%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Source%208Image1> .

    <https://place-hold.it/600x600?text=Source%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:68> .
}

ns1:de1f9590da8129579f140f431999565650806ead102b06247ae5d419003a1182 {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork14Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Institution1SharedWork14Image1> .

    <https://place-hold.it/600x600?text=Institution1SharedWork14Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:creator <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork14 rights holder" ;
        dcterms:title "Institution1SharedWork14 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution1/shared/work14> .
}

ns1:4281fe2dc9053745d138f31431ee11358e9af929150b2097cfb2250168a1676d {
    <https://place-hold.it/1000x1000?text=Source%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Source%203Image0> .

    <https://place-hold.it/600x600?text=Source%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:63> .
}

ns1:c77fbfd4ae365eaae89cd966f28f540ac6d7b1cebdc4e96e2939be5715accbcc {
    <https://place-hold.it/1000x1000?text=Subject%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%201Image0> .

    <https://place-hold.it/75x75?text=Subject%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:81> .
}

ns1:24c59bc8363e15aca9a0dc2fc041a5d8bdf861597869324b067f318fed486541 {
    <https://place-hold.it/1000x1000?text=Type%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Type%202Image1> .

    <https://place-hold.it/75x75?text=Type%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:102> .
}

ns1:1e1cb56714069b0fb64dd625bba99e287549438876f1b8e4f3914f0438b9132e {
    <https://place-hold.it/1000x1000?text=Source%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:60> .
}

ns1:94556258b163e68e5ffd979a04b2b8062bf723445dd92c15e5433af850cefd8c {
    <https://place-hold.it/1000x1000?text=Material%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Material%204Image0> .

    <https://place-hold.it/600x600?text=Material%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:34> .
}

ns1:3a08e45cbc494139f04812923884835d2888956ec677154263d83a0cf0e2bb8d {
    <https://place-hold.it/1000x1000?text=Material%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Material%200Image0> .

    <https://place-hold.it/75x75?text=Material%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:30> .
}

ns1:d5ec5ff530a4c54682afeb0f73593a76ac3eb70f46ba237f41a2d135d4d73f4e {
    <urn:paradicms_etl:pipeline:test_data:named_value:3> a cms:NamedValue ;
        dcterms:title "Named value 3" ;
        rdf:predicate vra:culturalContext ;
        rdf:value "Cultural context 3" .
}

ns1:b33085f08fbb14097f03dfefb01b07298a52f6c5377c5e95c362dc9473ecd87b {
    <http://creativecommons.org/licenses/by-nd/4.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:e723285c7767debf313365b10015653befcf9e4ac4d5650e5e01a73ca540cf83 {
    <https://place-hold.it/1000x1000?text=Extent%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:12> .
}

ns1:7c985fd0fa91d80ae620a98c97c7f8b7a648646456cff0ff597effcb365ef153 {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork12Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Institution1SharedWork12Image1> .

    <https://place-hold.it/600x600?text=Institution1SharedWork12Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:creator <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork12 rights holder" ;
        dcterms:title "Institution1SharedWork12 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution1/shared/work12> .
}

ns1:51a0d999051a862cd495c3e0abcb88b02f4ef73be0900e474b848523d86588bf {
    <https://place-hold.it/1000x1000?text=Material%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Material%207Image1> .

    <https://place-hold.it/600x600?text=Material%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:37> .
}

ns1:1e5a017e053309b9e06960ed08a3b09c6fddf684a21f4b75c0e0b9b6b142f674 {
    <urn:paradicms_etl:pipeline:test_data:named_value:33> a cms:NamedValue ;
        dcterms:title "Named value 33" ;
        rdf:predicate vra:material ;
        rdf:value "Material 3" .
}

ns1:603602cb92be180e5a22b5885ae55f57c9ff524ae590f2dfe4a016bf5d119da2 {
    <http://creativecommons.org/licenses/by/2.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:526ecd924b63844f2aab966dafbde5ed3f22f76542f55cbf058ac417da51da5b {
    <urn:paradicms_etl:pipeline:test_data:named_value:25> a cms:NamedValue ;
        dcterms:title "Named value 25" ;
        rdf:predicate dcterms:language ;
        rdf:value "Language 5" .
}

ns1:b9233a0135fc336eb63060cae519f45610a065638fcdc151705a7bae6869c7f2 {
    <https://place-hold.it/1000x1000?text=Medium%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%207Image1> .

    <https://place-hold.it/600x600?text=Medium%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:47> .
}

ns1:0ea0fb18eba2d36345ee68c6ff75c050e3d8d404af7aa6ef8db266365dec3252 {
    <https://place-hold.it/1000x1000?text=Material%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:35> .
}

ns1:f63520f86c6e83beb4c7979c52f6ce2cc2b64e4eaa354eae9dc07c45a5ff7b45 {
    <https://place-hold.it/1000x1000?text=Spatial%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%203Image1> .

    <https://place-hold.it/600x600?text=Spatial%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:73> .
}

ns1:5e75c5ff18a12e367ab6c4120e72e8a98a5da4d430bc997c4262cec4d27a9940 {
    <http://example.com/institution1/collection0/work11> a cms:Work ;
        dcterms:alternative "Institution1Collection0Work11 alternative title 0",
            "Institution1Collection0Work11 alternative title 1" ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:created [ a cms:DateTimeDescription ;
                time:day "---12"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:date "2020-07-28",
            "2020-07-29" ;
        dcterms:extent <urn:paradicms_etl:pipeline:test_data:named_value:11>,
            <urn:paradicms_etl:pipeline:test_data:named_value:12> ;
        dcterms:identifier "Institution1Collection0Work11Id0",
            "Institution1Collection0Work11Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:test_data:named_value:21>,
            <urn:paradicms_etl:pipeline:test_data:named_value:22> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:test_data:named_value:41>,
            <urn:paradicms_etl:pipeline:test_data:named_value:42> ;
        dcterms:provenance "Institution1Collection0Work11 provenance 0",
            "Institution1Collection0Work11 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:test_data:named_value:51>,
            <urn:paradicms_etl:pipeline:test_data:named_value:52> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work11 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:test_data:named_value:61>,
            <urn:paradicms_etl:pipeline:test_data:named_value:62> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:test_data:named_value:71>,
            <urn:paradicms_etl:pipeline:test_data:named_value:72> ;
        dcterms:subject <urn:paradicms_etl:pipeline:test_data:named_value:81>,
            <urn:paradicms_etl:pipeline:test_data:named_value:82> ;
        dcterms:title "Institution1Collection0Work11" ;
        dcterms:type <urn:paradicms_etl:pipeline:test_data:named_value:101>,
            <urn:paradicms_etl:pipeline:test_data:named_value:102> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:test_data:named_value:1>,
            <urn:paradicms_etl:pipeline:test_data:named_value:2> ;
        vra:material <urn:paradicms_etl:pipeline:test_data:named_value:31>,
            <urn:paradicms_etl:pipeline:test_data:named_value:32> ;
        vra:technique <urn:paradicms_etl:pipeline:test_data:named_value:91>,
            <urn:paradicms_etl:pipeline:test_data:named_value:92> ;
        cms:collection <http://example.com/institution1/collection0> ;
        cms:institution <http://example.com/institution1> .
}

ns1:454e878846d246867b11872a17cee1cc1b961e076ed1b74d11c65b1fa66a6d62 {
    <http://example.com/organization4> a cms:Organization ;
        foaf:name "Organization 4" ;
        foaf:page <http://example.com/organization4page> .
}

ns1:9f5c8f98847c420c274b0fdedb0e94bf0aa8694fbf62c77b32f54d44cbe90560 {
    <https://place-hold.it/1000x1000?text=Institution1Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1 rights holder" ;
        dcterms:title "Institution1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution1> .
}

ns1:f3159b81a4c4de84195976bf17e93bb7b4c6d392eee5f919dfaac98e434038e1 {
    <https://place-hold.it/1000x1000?text=Spatial%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:72> .
}

ns1:28442b8e4e8a656d16e1e6422b6409b6c15310539d9f538b448479a62887b6f5 {
    <urn:paradicms_etl:pipeline:test_data:named_value:13> a cms:NamedValue ;
        dcterms:title "Named value 13" ;
        rdf:predicate dcterms:extent ;
        rdf:value "Extent 3" .
}

ns1:694360272cf73f1f29f47dfa3abe41579da96ee44ddc51ebf9e91bf437611405 {
    <https://place-hold.it/1000x1000?text=Medium%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%203Image0> .

    <https://place-hold.it/600x600?text=Medium%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:43> .
}

ns1:6b503407be61f6702d423df0b3d3f1bcdcf69b196da5de7726f1436f243915da {
    <https://place-hold.it/1000x1000?text=Cultural%20context%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%208Image1> .

    <https://place-hold.it/75x75?text=Cultural%20context%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:8> .
}

ns1:40c95207d647acde5eaf3410830f778acce09fbb43ef2b30cf90cda145cb2f8e {
    <https://place-hold.it/1000x1000?text=Material%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Material%205Image1> .

    <https://place-hold.it/600x600?text=Material%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:35> .
}

ns1:3f2b50209ae2621d139719d92931c993e3e83d8dfd48c14bb928a4b6a4bb4e94 {
    <http://creativecommons.org/licenses/by/1.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:2db4f320153528e998a59d4018281b6de98f146951831e2dc7b5e7784dec630e {
    <https://place-hold.it/1000x1000?text=Language%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Language%200Image0> .

    <https://place-hold.it/600x600?text=Language%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:20> .
}

ns1:0de893e715300776487283d6471310a872030732de45fe9c918120b219b37c53 {
    <https://place-hold.it/1000x1000?text=Technique%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:95> .
}

ns1:6a880b02192c7161c3b20c52ebc704519407bbc49af121475966140d7fbfeea7 {
    <https://place-hold.it/1000x1000?text=Publisher%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:57> .
}

ns1:751a1705b5703df72ba86c189482baea0b6fb4779daeffe9d572ed1e0b5c55cb {
    <https://place-hold.it/1000x1000?text=Source%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:66> .
}

ns1:a9de44c1661bf0ec080366ffbd948b70605c85419fd0396db623d6acc1512b92 {
    <https://place-hold.it/1000x1000?text=Spatial%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%205Image1> .

    <https://place-hold.it/75x75?text=Spatial%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:75> .
}

ns1:e11c5638ba096f45d16a07c810cd3cfd6a9387726c69ce3fa12adf143bface49 {
    <https://place-hold.it/1000x1000?text=Subject%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:87> .
}

ns1:a65baafefcf1f121a3d144d5f41a74ffa7afd6971cb4ac4172fd2a4eb90a6d4d {
    <https://place-hold.it/1000x1000?text=Subject%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%202Image0> .

    <https://place-hold.it/75x75?text=Subject%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:82> .
}

ns1:2e9a68e9f30fa879c3fe9af2b7951357fda8925080e3d14ef92f3733722dba1a {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work3Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:creator <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work3 rights holder" ;
        dcterms:title "Institution0Collection0Work3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution0/collection0/work3> .
}

ns1:26ca4fd5760f1b782fd7a495c08a289d4e51047320b6e8a7017fec376e532f25 {
    <https://place-hold.it/1000x1000?text=Technique%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%208Image1> .

    <https://place-hold.it/600x600?text=Technique%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:98> .
}

ns1:53bfb427574b9cb3f9eb0b5986fbbd68ccf8ca5dfcece372285a43a912b84bed {
    <urn:paradicms_etl:pipeline:test_data:named_value:12> a cms:NamedValue ;
        dcterms:title "Named value 12" ;
        rdf:predicate dcterms:extent ;
        rdf:value "Extent 2" .
}

ns1:a06df2fad09e54ea0e7e5521dc79add3ed56627ce04670ee81bcbac62c8ff88d {
    <https://place-hold.it/1000x1000?text=Medium%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%202Image0> .

    <https://place-hold.it/75x75?text=Medium%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:42> .
}

ns1:ee8680e7808ceabccf5b2f419fa92351863653021629cb77b920c26c91ab2b5a {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work11Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work11 rights holder" ;
        dcterms:title "Institution1Collection0Work11 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution1/collection0/work11> .
}

ns1:4ee1d1171a8f6d2e3b96f4efa3e6b11bade3e355ddfddd06cff5cd400437e952 {
    <http://example.com/institution0/collection0/work0> a cms:Work ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Institution0Collection0Work0 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:alternative "Institution0Collection0Work0 alternative title 0",
            "Institution0Collection0Work0 alternative title 1" ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:created [ a cms:DateTimeDescription ;
                time:day "---01"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:date "2020-08-08",
            "2020-08-09" ;
        dcterms:description "Institution0Collection0Work0 description 0",
            "Institution0Collection0Work0 description 1",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
        dcterms:extent <urn:paradicms_etl:pipeline:test_data:named_value:10>,
            <urn:paradicms_etl:pipeline:test_data:named_value:11> ;
        dcterms:identifier "Institution0Collection0Work0Id0",
            "Institution0Collection0Work0Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:test_data:named_value:20>,
            <urn:paradicms_etl:pipeline:test_data:named_value:21> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:test_data:named_value:40>,
            <urn:paradicms_etl:pipeline:test_data:named_value:41> ;
        dcterms:provenance "Institution0Collection0Work0 provenance 0",
            "Institution0Collection0Work0 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:test_data:named_value:50>,
            <urn:paradicms_etl:pipeline:test_data:named_value:51> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work0 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:test_data:named_value:60>,
            <urn:paradicms_etl:pipeline:test_data:named_value:61> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:test_data:named_value:70>,
            <urn:paradicms_etl:pipeline:test_data:named_value:71> ;
        dcterms:subject <urn:paradicms_etl:pipeline:test_data:named_value:80>,
            <urn:paradicms_etl:pipeline:test_data:named_value:81> ;
        dcterms:title "Institution0Collection0Work0" ;
        dcterms:type <urn:paradicms_etl:pipeline:test_data:named_value:100>,
            <urn:paradicms_etl:pipeline:test_data:named_value:101> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:test_data:named_value:0>,
            <urn:paradicms_etl:pipeline:test_data:named_value:1> ;
        vra:material <urn:paradicms_etl:pipeline:test_data:named_value:30>,
            <urn:paradicms_etl:pipeline:test_data:named_value:31> ;
        vra:technique <urn:paradicms_etl:pipeline:test_data:named_value:90>,
            <urn:paradicms_etl:pipeline:test_data:named_value:91> ;
        cms:collection <http://example.com/institution0/collection0> ;
        cms:institution <http://example.com/institution0> ;
        foaf:page <http://example.com/work/0> .
}

ns1:d4a3140d0bc059cf9d072ad25fa956903594b3b8c4d42689139f3550c082c7b1 {
    <https://place-hold.it/1000x1000?text=Language%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Language%206Image0> .

    <https://place-hold.it/75x75?text=Language%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:26> .
}

ns1:cacd4ace3f1012d9570422b8c5d9562c4d3820824a3e0d1c93d7fd6728e3592e {
    <urn:paradicms_etl:pipeline:test_data:named_value:36> a cms:NamedValue ;
        dcterms:title "Named value 36" ;
        rdf:predicate vra:material ;
        rdf:value "Material 6" .
}

ns1:c0dd9176dbb502f042e828da5b68408950a9c9625d76f19fc803b15adba1c7b0 {
    <https://place-hold.it/1000x1000?text=Type%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:100> .
}

ns1:51192fd67d3fd705829e9c7a0e6ae7e72aae3ddf507fbe17b27e441fb6eb9548 {
    <urn:paradicms_etl:pipeline:test_data:named_value:39> a cms:NamedValue ;
        dcterms:title "Named value 39" ;
        rdf:predicate vra:material ;
        rdf:value "Material 9" .
}

ns1:c5c9a3a3b55a116e27d34fb62e1fdc8a345e8f38131b69136d9b106f0d659906 {
    <https://place-hold.it/1000x1000?text=Technique%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:92> .
}

ns1:97064b28d2a46b78e918478263f7f510f5fd90697bd052647f62966eaeea2a00 {
    <urn:paradicms_etl:pipeline:test_data:named_value:73> a cms:NamedValue ;
        dcterms:title "Named value 73" ;
        rdf:predicate dcterms:spatial ;
        rdf:value "Spatial 3" .
}

ns1:3acf8cd9a539aca51a647066a88871774214d48685ea3539d86b09426da741e2 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%200Image0> .

    <https://place-hold.it/75x75?text=Cultural%20context%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:0> .
}

ns1:7c246556dfdb249a6aea71c957540bdf284189544c882257e67f4470a38f041d {
    <http://creativecommons.org/licenses/sampling/1.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:c9a7bfa3d1f10d2f3f3de7661f5b1a79491b9222db338516de36f1ca353e8834 {
    <https://place-hold.it/1000x1000?text=Medium%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:41> .
}

ns1:379040a4cd18dbe23f85a68e06109f9db81054ae105f6bceb5bd6e5c83927c91 {
    <https://place-hold.it/1000x1000?text=Spatial%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%200Image1> .

    <https://place-hold.it/600x600?text=Spatial%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:70> .
}

ns1:8152eb89b5b15f7dd1a393fc1d9311bb09e7ec432e61553a0372bc2e3ec6235e {
    <https://place-hold.it/1000x1000?text=Cultural%20context%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:9> .
}

ns1:f3400d52486275c9bfacecd8430eeded8d08ab71993e74a2e4ad66cf29870476 {
    <https://place-hold.it/1000x1000?text=Source%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Source%202Image0> .

    <https://place-hold.it/75x75?text=Source%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:62> .
}

ns1:2bd5a89897e5c11c2b1d8b8b5453e5f5f4cdc0d41ae51b5cec692dc8d75a08c2 {
    <https://place-hold.it/1000x1000?text=Institution0SharedWork7Image1> a cms:Image ;
        dcterms:contributor <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork7 rights holder" ;
        dcterms:title "Institution0SharedWork7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution0/shared/work7> .
}

ns1:0186aa8a80c735ac5b8d4f3d7fa4d72cfebf1a060b9bf15c9f6b464855d29ed1 {
    <https://place-hold.it/1000x1000?text=Publisher%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%206Image1> .

    <https://place-hold.it/75x75?text=Publisher%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:56> .
}

ns1:8121fffbcf376fefe750d7a954d25bcf474f084c3195bd01f7ffaa0020b1ab84 {
    <http://example.com/institution0/shared/work4> a cms:Work ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Institution0SharedWork4 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:alternative "Institution0SharedWork4 alternative title 0",
            "Institution0SharedWork4 alternative title 1" ;
        dcterms:contributor <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:created [ a cms:DateTimeDescription ;
                time:day "---05"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:creator <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:date "2020-08-04",
            "2020-08-05" ;
        dcterms:description "Institution0SharedWork4 description 0",
            "Institution0SharedWork4 description 1",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
        dcterms:extent <urn:paradicms_etl:pipeline:test_data:named_value:14>,
            <urn:paradicms_etl:pipeline:test_data:named_value:15> ;
        dcterms:identifier "Institution0SharedWork4Id0",
            "Institution0SharedWork4Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:test_data:named_value:24>,
            <urn:paradicms_etl:pipeline:test_data:named_value:25> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:test_data:named_value:44>,
            <urn:paradicms_etl:pipeline:test_data:named_value:45> ;
        dcterms:provenance "Institution0SharedWork4 provenance 0",
            "Institution0SharedWork4 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:test_data:named_value:54>,
            <urn:paradicms_etl:pipeline:test_data:named_value:55> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork4 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:test_data:named_value:64>,
            <urn:paradicms_etl:pipeline:test_data:named_value:65> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:test_data:named_value:74>,
            <urn:paradicms_etl:pipeline:test_data:named_value:75> ;
        dcterms:subject <urn:paradicms_etl:pipeline:test_data:named_value:84>,
            <urn:paradicms_etl:pipeline:test_data:named_value:85> ;
        dcterms:title "Institution0SharedWork4" ;
        dcterms:type <urn:paradicms_etl:pipeline:test_data:named_value:104>,
            <urn:paradicms_etl:pipeline:test_data:named_value:105> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:test_data:named_value:4>,
            <urn:paradicms_etl:pipeline:test_data:named_value:5> ;
        vra:material <urn:paradicms_etl:pipeline:test_data:named_value:34>,
            <urn:paradicms_etl:pipeline:test_data:named_value:35> ;
        vra:technique <urn:paradicms_etl:pipeline:test_data:named_value:94>,
            <urn:paradicms_etl:pipeline:test_data:named_value:95> ;
        cms:collection <http://example.com/institution0/collection0> ;
        cms:institution <http://example.com/institution0> ;
        foaf:page <http://example.com/work/4> .
}

ns1:8d1c14e212e1d30d85383beddcf9e45ece71e48d19b87f45a070649cd03f7c7d {
    <https://place-hold.it/1000x1000?text=Subject%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:87> .
}

ns1:58c95d4a24cae9beb44c20f09ceb2ad8be42aa3d65ef9ce9c502deac7326a734 {
    <https://place-hold.it/1000x1000?text=Language%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Language%207Image0> .

    <https://place-hold.it/75x75?text=Language%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:27> .
}

ns1:58aa0ea8a91daa0198e62d11ed7e46a62bb4eaed2aa60c1fe0d77eb0dd69e27c {
    <https://place-hold.it/1000x1000?text=Source%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:64> .
}

ns1:db68862d2589c20ea89c458b7c38340213647cf9785fb4fe560dd7ef8d589f76 {
    <https://place-hold.it/1000x1000?text=Type%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Type%206Image1> .

    <https://place-hold.it/600x600?text=Type%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:106> .
}

ns1:d9c142c223c7ff762e3b05bcfbb5793473bd458a94bd5df434e70b20c5b67254 {
    <urn:paradicms_etl:pipeline:test_data:named_value:23> a cms:NamedValue ;
        dcterms:title "Named value 23" ;
        rdf:predicate dcterms:language ;
        rdf:value "Language 3" .
}

ns1:fc0b3592683195104c02a10e48933095251dd13bbf7c6dbdc5f40335975c7cdb {
    <https://place-hold.it/1000x1000?text=Language%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Language%201Image1> .

    <https://place-hold.it/75x75?text=Language%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:21> .
}

ns1:c3cf0fb1ffd77d2e0f2e626dd8396718ee2a398ed9cdda37bca106c01dc6bd96 {
    <https://place-hold.it/1000x1000?text=Subject%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%203Image1> .

    <https://place-hold.it/75x75?text=Subject%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:83> .
}

ns1:cf66d132b358fade527a2ab9c657adaece312f438039d0677747a75863efef47 {
    <https://place-hold.it/1000x1000?text=Institution0Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0 rights holder" ;
        dcterms:title "Institution0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution0> .
}

ns1:55cf62ea5904207bea4cd2da8a44217d4ab7cc2da3b52dc839b185e8d99e963b {
    <https://place-hold.it/1000x1000?text=Publisher%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%209Image0> .

    <https://place-hold.it/75x75?text=Publisher%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:59> .
}

ns1:a7739398305e7186c56e914308a3cd80584b919bd6804d59b6f28a1450b2994b {
    <https://place-hold.it/1000x1000?text=Type%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Type%208Image1> .

    <https://place-hold.it/600x600?text=Type%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:108> .
}

ns1:a30451826e904ef8b753c4f3740c29be2292339b89707838986ddf5ad5da551f {
    <https://place-hold.it/1000x1000?text=Technique%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%205Image1> .

    <https://place-hold.it/75x75?text=Technique%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:95> .
}

ns1:b1514bc60465bd5af4c299de9a9deff864bff48067d05d9edb2dca30598a3e96 {
    <https://place-hold.it/1000x1000?text=Medium%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%209Image0> .

    <https://place-hold.it/600x600?text=Medium%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:49> .
}

ns1:9c70739eeabb484d8d8f94c3450672d373d601ef9ab7416024c0b7025f344d3e {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work1Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Institution0Collection0Work1Image0> .

    <https://place-hold.it/75x75?text=Institution0Collection0Work1Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work1 rights holder" ;
        dcterms:title "Institution0Collection0Work1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution0/collection0/work1> .
}

ns1:65d0fe4ee99fc38bffbe74dbbde7f5c0bb5605352573b057e71cab7130d2b24c {
    <https://place-hold.it/1000x1000?text=Type%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Type%204Image0> .

    <https://place-hold.it/600x600?text=Type%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:104> .
}

ns1:adc57538ea5351fa3063a4e6e881a23f75ec50272e1017017ab81627cb443669 {
    <urn:paradicms_etl:pipeline:test_data:named_value:17> a cms:NamedValue ;
        dcterms:title "Named value 17" ;
        rdf:predicate dcterms:extent ;
        rdf:value "Extent 7" .
}

ns1:0e0139ad565815f13a994de5c7157420fd4594c24afcec867a69c7946aa2f95d {
    <https://place-hold.it/1000x1000?text=Publisher%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%202Image1> .

    <https://place-hold.it/600x600?text=Publisher%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:52> .
}

ns1:ade570c27b7f76cb09914e82f4da81fa2a85a4171db64a711daa1346c20c1187 {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work1Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work1 rights holder" ;
        dcterms:title "Institution0Collection0Work1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution0/collection0/work1> .
}

ns1:a72be38bb9937c1497cf72345d5a74d986fe1f7e22825ba7d4d5af98d466d5ea {
    <https://place-hold.it/1000x1000?text=Language%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Language%202Image0> .

    <https://place-hold.it/75x75?text=Language%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:22> .
}

ns1:248823f612ca203999e96f7ee3ee1881e7fbae4b22e4816ffb8c1d3d3f55057f {
    <http://creativecommons.org/licenses/by-sa/2.0/> a creativecommons:License,
            cms:License ;
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
}

ns1:c1133c4b0599b41508b3460dc8938c11a8c8f7cf92b023da8c2fa67b4b8439d6 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:0> .
}

ns1:a6c2de4128931d44d45cf6951f238f9f9a2177444b221c91ad743a3c1ac93304 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:7> .
}

ns1:9e3264065a4f9444219e3b5612a0713c60a8124b7516091ff5445f98861359e4 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%209Image1> .

    <https://place-hold.it/75x75?text=Cultural%20context%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:9> .
}

ns1:939475ecc1f4ad13a04d0bb73190d4a35fbd1303730007e9079039f949609bf7 {
    <https://place-hold.it/1000x1000?text=Extent%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%202Image0> .

    <https://place-hold.it/75x75?text=Extent%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:12> .
}

ns1:6723a6bc7e11d0880a4d555bf7c569ad1b8b5fbf6771357a780cc37898bb8ccb {
    <https://place-hold.it/1000x1000?text=Publisher%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%208Image1> .

    <https://place-hold.it/600x600?text=Publisher%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:58> .
}

ns1:e4f9e8f04e14bafdbe16865bcc35ef3368127ba8322767bb4523381c14fecee3 {
    <urn:paradicms_etl:pipeline:test_data:named_value:88> a cms:NamedValue ;
        dcterms:title "Named value 88" ;
        rdf:predicate dcterms:subject ;
        rdf:value "Subject 8" .
}

ns1:e3ddec8af4d0b3b87529b3df7ae5d0e2d4d9ca8ba1a68073950eb2cff5fc32f2 {
    <https://place-hold.it/1000x1000?text=Type%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Type%201Image0> .

    <https://place-hold.it/600x600?text=Type%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:101> .
}

ns1:4059f508a4d2bf3fd04186ea37ce16854bc095a3f35333e956ff138589d25a44 {
    <https://place-hold.it/1000x1000?text=Type%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:102> .
}

ns1:71c7c9e8e18b39564d520ebd7799d1f4dee95b2759fc407a47c4cd3e1a2198b5 {
    <https://place-hold.it/1000x1000?text=Source%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Source%203Image1> .

    <https://place-hold.it/600x600?text=Source%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:63> .
}

ns1:f5e19202fbe28f600bd83cd67d463f0694251b0fb2cb8c89ed0c141177e415dc {
    <https://place-hold.it/1000x1000?text=Subject%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:84> .
}

ns1:ece63b445acfc630d79c5ac48fe125bc8a94e6219ad4ae29011a9616fc20d646 {
    <http://example.com/organization3> a cms:Organization ;
        foaf:name "Organization 3" ;
        foaf:page <http://example.com/organization3page> .
}

ns1:966a609539af87f02560b78486b2ac9b83871ca621eb85cbcb49cd4b78850b4f {
    <https://place-hold.it/1000x1000?text=Language%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Language%202Image0> .

    <https://place-hold.it/600x600?text=Language%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:22> .
}

ns1:ba55d80c62cf3c800ef8703cba09ad3f8d6326847721ab2d75ae9e1ec905e025 {
    <https://place-hold.it/1000x1000?text=Language%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Language%208Image1> .

    <https://place-hold.it/75x75?text=Language%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:28> .
}

ns1:3b69b20ae1d7c26f4f47d7d623c96fdc11aadc5d04e661566569fd63729c0f71 {
    <https://place-hold.it/1000x1000?text=Publisher%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:59> .
}

ns1:125c334e678a1087e26c7470bc67c71560dd4a9dec2590933a19303f2ad2cb25 {
    <https://place-hold.it/1000x1000?text=Publisher%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%200Image1> .

    <https://place-hold.it/75x75?text=Publisher%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:50> .
}

ns1:8d5e949fde3ed6f857a26e517f2862747b2aa2bc261e92056ee24a3046b50ed0 {
    <https://place-hold.it/1000x1000?text=Type%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:103> .
}

ns1:562616f846338893de428f11c2c8c164a1600f485fe2ec927c46aaafeff2d7c6 {
    <https://place-hold.it/1000x1000?text=Extent%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%201Image1> .

    <https://place-hold.it/600x600?text=Extent%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:11> .
}

ns1:b45dc335a4a635f193eb3e8ac563f6477e1dbce200b8a59a9ceb4cb2cded28e3 {
    <https://place-hold.it/1000x1000?text=Type%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Type%206Image1> .

    <https://place-hold.it/75x75?text=Type%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:106> .
}

ns1:347e567ccab6741c23e5a68bd05d88d48e771314155c6bd6553bbc2781f98ccf {
    <https://place-hold.it/1000x1000?text=Cultural%20context%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%201Image0> .

    <https://place-hold.it/75x75?text=Cultural%20context%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:1> .
}

ns1:f1ca8ec42d3be8c0cc2d115b1785e7fbbdf6e55c545b927cbe04dcc40352e404 {
    <https://place-hold.it/1000x1000?text=Material%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Material%209Image0> .

    <https://place-hold.it/75x75?text=Material%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:39> .
}

ns1:7515cb1688f459e87a8c1f6845a5ef063bd8ea38aee48666d64ea0ca559f6e1f {
    <https://place-hold.it/1000x1000?text=Extent%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%200Image1> .

    <https://place-hold.it/600x600?text=Extent%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:10> .
}

ns1:fdbf96379c5b16fba0fd22ca2e1a34da42112c4210a44c94fd2f37ae3898e79b {
    <https://place-hold.it/1000x1000?text=Source%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:66> .
}

ns1:7744b628bb8b33c3d6f9d9264b6792132556b141aa7879e6c818d752a21bc263 {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work11Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Institution1Collection0Work11Image1> .

    <https://place-hold.it/75x75?text=Institution1Collection0Work11Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work11 rights holder" ;
        dcterms:title "Institution1Collection0Work11 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution1/collection0/work11> .
}

ns1:361c90674f656c3a35ef39dafbd9710495f5de3d232d8b000b5113792ee21fbf {
    <https://place-hold.it/1000x1000?text=Technique%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%203Image1> .

    <https://place-hold.it/600x600?text=Technique%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:93> .
}

ns1:08aa6a878664c5d0769371b17fab42d3cb73da3f726f6d2b79fc7284d1f8ea85 {
    <http://example.com/institution0/shared/work7> a cms:Work ;
        dcterms:alternative "Institution0SharedWork7 alternative title 0",
            "Institution0SharedWork7 alternative title 1" ;
        dcterms:contributor <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:created [ a cms:DateTimeDescription ;
                time:day "---08"^^xsd:gDay ;
                time:month "--01"^^xsd:gMonth ;
                time:year "2022"^^xsd:gYear ] ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:date "2020-08-01",
            "2020-08-02" ;
        dcterms:extent <urn:paradicms_etl:pipeline:test_data:named_value:17>,
            <urn:paradicms_etl:pipeline:test_data:named_value:18> ;
        dcterms:identifier "Institution0SharedWork7Id0",
            "Institution0SharedWork7Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:test_data:named_value:27>,
            <urn:paradicms_etl:pipeline:test_data:named_value:28> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:test_data:named_value:47>,
            <urn:paradicms_etl:pipeline:test_data:named_value:48> ;
        dcterms:provenance "Institution0SharedWork7 provenance 0",
            "Institution0SharedWork7 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:test_data:named_value:57>,
            <urn:paradicms_etl:pipeline:test_data:named_value:58> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0SharedWork7 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:test_data:named_value:67>,
            <urn:paradicms_etl:pipeline:test_data:named_value:68> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:test_data:named_value:77>,
            <urn:paradicms_etl:pipeline:test_data:named_value:78> ;
        dcterms:subject <urn:paradicms_etl:pipeline:test_data:named_value:87>,
            <urn:paradicms_etl:pipeline:test_data:named_value:88> ;
        dcterms:title "Institution0SharedWork7" ;
        dcterms:type <urn:paradicms_etl:pipeline:test_data:named_value:107>,
            <urn:paradicms_etl:pipeline:test_data:named_value:108> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:test_data:named_value:7>,
            <urn:paradicms_etl:pipeline:test_data:named_value:8> ;
        vra:material <urn:paradicms_etl:pipeline:test_data:named_value:37>,
            <urn:paradicms_etl:pipeline:test_data:named_value:38> ;
        vra:technique <urn:paradicms_etl:pipeline:test_data:named_value:97>,
            <urn:paradicms_etl:pipeline:test_data:named_value:98> ;
        cms:collection <http://example.com/institution0/collection0> ;
        cms:institution <http://example.com/institution0> .
}

ns1:bc11a48c4396f364ebc6daedd079d79aece1b75a746d2e323fa0f38cf1f745c1 {
    <https://place-hold.it/1000x1000?text=Spatial%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%204Image0> .

    <https://place-hold.it/600x600?text=Spatial%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:74> .
}

ns1:3237b181c9bfd9a5bd94fa34f6f40ea398403cb9ef23439bb4cc76407b49d897 {
    <urn:paradicms_etl:pipeline:test_data:named_value:58> a cms:NamedValue ;
        dcterms:title "Named value 58" ;
        rdf:predicate dcterms:publisher ;
        rdf:value "Publisher 8" .
}

ns1:6ed39ed61391f437ed30bdb28e33c806d36b24d7cf356ba3b8a54c22e3389df6 {
    <https://place-hold.it/1000x1000?text=Source%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Source%204Image1> .

    <https://place-hold.it/75x75?text=Source%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:64> .
}

ns1:c5820f4645eda9a7bb2fb16faed5868ce4ff71fac86061869f775978326fad95 {
    <https://place-hold.it/1000x1000?text=Subject%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:82> .
}

ns1:7e3514d2ad98ed8ccd44f4e4b6abbbc3a93f66e8e8d33cbeeea264e968c5a37c {
    <urn:paradicms_etl:pipeline:test_data:named_value:50> a cms:NamedValue ;
        dcterms:title "Named value 50" ;
        rdf:predicate dcterms:publisher ;
        rdf:value "Publisher 0" .
}

ns1:f2b9756af10815c9ac284bbf4f52d2a1ef8993e322cd9c3bf70b9d781c762aa5 {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work3Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Institution0Collection0Work3Image0> .

    <https://place-hold.it/75x75?text=Institution0Collection0Work3Image0> a cms:Image ;
        dcterms:contributor <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:creator <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work3 rights holder" ;
        dcterms:title "Institution0Collection0Work3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution0/collection0/work3> .
}

ns1:e758d76e0fd5bded9a111cb1f5f05afd3747da43a3df9192a3a09903046f098f {
    <https://place-hold.it/1000x1000?text=Institution0Collection0Work1Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Institution0Collection0Work1Image1> .

    <https://place-hold.it/600x600?text=Institution0Collection0Work1Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0Collection0Work1 rights holder" ;
        dcterms:title "Institution0Collection0Work1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution0/collection0/work1> .
}

ns1:88a9fd5905b9931e6d18c0e669c05f71303e405c38243e362c3edd032420d94e {
    <https://place-hold.it/1000x1000?text=Extent%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%208Image0> .

    <https://place-hold.it/75x75?text=Extent%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:18> .
}

ns1:3220e2ecce17a9fc383a7e2822fbe8cbb8024be5aff8d966f5e4ae3ca8f2cf8e {
    <https://place-hold.it/1000x1000?text=Extent%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%209Image1> .

    <https://place-hold.it/600x600?text=Extent%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:19> .
}

ns1:4e61b1ec1daaaec8adbe3d702e62a2c3b51d0b3ec53c1bebfe170ee616293b87 {
    <https://place-hold.it/1000x1000?text=Institution1SharedWork13Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:creator <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1SharedWork13 rights holder" ;
        dcterms:title "Institution1SharedWork13 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/institution1/shared/work13> .
}

ns1:676834f0caf79007b3c0d79e55044842896763c23a1e48a33b462cfe9f20b249 {
    <https://place-hold.it/1000x1000?text=Language%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Language%201Image0> .

    <https://place-hold.it/75x75?text=Language%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:21> .
}

ns1:b437455f13d51c51c56ef9acf979e81ab290c5162cb969c641f2d52934206dd9 {
    <https://place-hold.it/1000x1000?text=Language%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Language%207Image1> .

    <https://place-hold.it/75x75?text=Language%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:27> .
}

ns1:c9cb207c4957b211a80d7a7966311f225c8e3e2ffdcb301037da7a8cf8bc2f4b {
    <https://place-hold.it/1000x1000?text=Institution1Collection0Work10Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Institution1Collection0Work10Image1> .

    <https://place-hold.it/75x75?text=Institution1Collection0Work10Image1> a cms:Image ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution1Collection0Work10 rights holder" ;
        dcterms:title "Institution1Collection0Work10 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/institution1/collection0/work10> .
}

ns1:a854760d057a62dfb6c2d540cf5a16d1d8886ad0857a4deea9f2fb8c9486ab7b {
    <https://place-hold.it/1000x1000?text=Institution0Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Institution0Image0> .

    <https://place-hold.it/600x600?text=Institution0Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Institution0 rights holder" ;
        dcterms:title "Institution0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/institution0> .
}

ns1:bb5b04091b4039aa2e453dbd88d71d72da09b4a6e8129cc2dbe717e5ca835130 {
    <https://place-hold.it/1000x1000?text=Publisher%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%205Image0> .

    <https://place-hold.it/600x600?text=Publisher%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:55> .
}

ns1:4b108eeabc320ae000654c6f353cc0e19f2b8ee3be1f77de52cae91f7982dc3f {
    <http://creativecommons.org/licenses/publicdomain/> a creativecommons:License,
            cms:License ;
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
}

ns1:d27ac73a883f4f7a6136800f6e98605cfa5127740e25057612a7f5c29d963f6a {
    <https://place-hold.it/1000x1000?text=Subject%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%200Image1> .

    <https://place-hold.it/75x75?text=Subject%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:80> .
}

ns1:7ebee97f71ff574a3a40072a9859e17a326723ea8e321e80ad8d0433d99a3d77 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Property definition rights holder" ;
        dcterms:title "Cultural context 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:test_data:named_value:1> .
}
`;
