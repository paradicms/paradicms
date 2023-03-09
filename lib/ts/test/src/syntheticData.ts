import {trigStringToDatasetCore} from "./trigStringToDatasetCore";
import {DatasetCore} from "@rdfjs/types";

export const syntheticData: DatasetCore = trigStringToDatasetCore(`
@prefix cc: <http://creativecommons.org/ns#> .
@prefix cms: <http://www.paradicms.org/ns/cms#> .
@prefix contact: <http://www.w3.org/2000/10/swap/pim/contact#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix exif: <http://www.w3.org/2003/12/exif/ns#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix ns1: <urn:paradicms_etl:pipeline:synthetic_data:model:> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix vra: <http://purl.org/vra/> .
@prefix wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

ns1:faf4d8242460bcf5e15f60b7ed05ce6e41b5eaa047c923268ec53213716f218d {
    <https://place-hold.it/1000x1000?text=Material%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Material%201Image0> .

    <https://place-hold.it/600x600?text=Material%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%201Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:31> .
}

ns1:da54f679bc8f78d9f102fde151aefa1a2bab995e7395e6707d8fb1060b6cae11 {
    <https://place-hold.it/1000x1000?text=Language%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:21> .
}

ns1:366ae58f44d4e35504d42149d6aa08b5bcd56a1712e48a34aa005fc29b425066 {
    <https://place-hold.it/1000x1000?text=Source%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Source%201Image1> .

    <https://place-hold.it/600x600?text=Source%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%201Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:61> .
}

ns1:f5e19202fbe28f600bd83cd67d463f0694251b0fb2cb8c89ed0c141177e415dc {
    <https://place-hold.it/1000x1000?text=Subject%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:84> .
}

ns1:966a609539af87f02560b78486b2ac9b83871ca621eb85cbcb49cd4b78850b4f {
    <https://place-hold.it/1000x1000?text=Language%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Language%202Image0> .

    <https://place-hold.it/600x600?text=Language%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%202Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:22> .
}

ns1:ed4801c5c23be0258b66081d82531946ef2652713c5757e8c1fa9c0a854b828f {
    <https://place-hold.it/1000x1000?text=Subject%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:81> .
}

ns1:8755ee8b81e5e3ac862f4053cdd071cafa45bf811a48fbcbf7bdd4c63e070df0 {
    <https://place-hold.it/1000x1000?text=Technique%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%205Image0> .

    <https://place-hold.it/600x600?text=Technique%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%205Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:95> .
}

ns1:c8b6c13703157796fc24d785041f70534d9687829e2d240925521527a7d00c3c {
    <https://place-hold.it/1000x1000?text=Collection1Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Collection1Image0> .

    <https://place-hold.it/600x600?text=Collection1Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1 image 0 rights holder" ;
        dcterms:title "Collection1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection1Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection1> .
}

ns1:16c7c88a5e3e71b889d7aab85172507f7a970f44c273ce4486470ca7a0a672f4 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:40> a cms:NamedValue ;
        dcterms:title "Named value 40" ;
        rdf:predicate dcterms:medium ;
        rdf:value "Medium 0" ;
        skos:prefLabel "Named value 40" .
}

ns1:97f509b782bd5d2f5f0f3cad00ea56bc4a8e31e31367db10c97f8e5e36699397 {
    <https://place-hold.it/1000x1000?text=Material%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Material%207Image0> .

    <https://place-hold.it/75x75?text=Material%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%207Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:37> .
}

ns1:44aa9b6cbe8df26f9b74232305545868e1fdba4fbebc4e8e4a62668cfaa75857 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:93> a cms:NamedValue ;
        dcterms:title "Named value 93" ;
        rdf:predicate vra:technique ;
        rdf:value "Technique 3" ;
        skos:prefLabel "Named value 93" .
}

ns1:2e340d8c33afc6574bd035aa1283734aa64f2a44fe4820d653be7251bad9601b {
    <https://place-hold.it/1000x1000?text=Collection0Work2Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work2 image 1 rights holder" ;
        dcterms:title "Collection0Work2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection0/work2> .
}

ns1:e7a660022317bd029ac293f8690f4d845e68c2f2ccb4ea79d975889268ef334d {
    <https://place-hold.it/1000x1000?text=Cultural%20context%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%209Image0> .

    <https://place-hold.it/600x600?text=Cultural%20context%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%209Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:9> .
}

ns1:2e6892264abfd6c8f963e1060ff49a161e8b176195c7fe48e858a5065c85ab45 {
    <https://place-hold.it/1000x1000?text=Extent%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%206Image1> .

    <https://place-hold.it/600x600?text=Extent%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%206Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:16> .
}

ns1:9d8cf18680c1a0a0b3dc596d69178caa787d9203904b0f17ce3e220e7ccdf209 {
    <https://place-hold.it/1000x1000?text=Language%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:26> .
}

ns1:0f61633beac19e2204adf1ba213259829387b80669f1afb015c021d52688c40f {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:75> a cms:NamedValue ;
        dcterms:title "Named value 75" ;
        rdf:predicate dcterms:spatial ;
        rdf:value "Spatial 5" ;
        skos:prefLabel "Named value 75" .
}

ns1:95d372a9a7617725dfae6ad2c4ae028bffad0502b0658a14f7962a690bc8baef {
    <https://place-hold.it/1000x1000?text=Cultural%20context%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%201Image1> .

    <https://place-hold.it/75x75?text=Cultural%20context%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%201Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:1> .
}

ns1:76d58b75d9514aeaefbcd78dbb8c6efa611ad52adbd2e5e0b58f28d0c51853a5 {
    <https://place-hold.it/1000x1000?text=Source%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Source%200Image1> .

    <https://place-hold.it/75x75?text=Source%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%200Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:60> .
}

ns1:bf21ef59ee20f682b8a65e391787438e988ba12fcd9f3ac6c429527bd4b37264 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%207Image1> .

    <https://place-hold.it/600x600?text=Cultural%20context%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%207Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:7> .
}

ns1:7aa2414729a80e700a93a4b3a08204b0c53a268a16346a0dbb40df81bfa9a992 {
    <https://place-hold.it/1000x1000?text=Publisher%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%204Image1> .

    <https://place-hold.it/600x600?text=Publisher%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%204Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:54> .
}

ns1:ab7e88689f62b1d70613ded839eedb06811c4c348ff6e629703a35fd8fe6fa00 {
    <https://place-hold.it/1000x1000?text=Spatial%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:77> .
}

ns1:a00179682b0a0686100c85ec7423374e5f1802df67b0e2534723708a9fc57c15 {
    <https://place-hold.it/1000x1000?text=Spatial%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%203Image0> .

    <https://place-hold.it/75x75?text=Spatial%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%203Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:73> .
}

ns1:5478bfab125da16a0064c85a12440bb023e305f726d49da79e1313fdbe6a2ff7 {
    <https://place-hold.it/1000x1000?text=Material%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Material%203Image0> .

    <https://place-hold.it/600x600?text=Material%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%203Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:33> .
}

ns1:b0e5d3b8b028ca33abb8a1f601ee50ce55f9d754935178662bd83c8f6f83c7d7 {
    <https://place-hold.it/1000x1000?text=Technique%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%203Image0> .

    <https://place-hold.it/75x75?text=Technique%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%203Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:93> .
}

ns1:a7739398305e7186c56e914308a3cd80584b919bd6804d59b6f28a1450b2994b {
    <https://place-hold.it/1000x1000?text=Type%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Type%208Image1> .

    <https://place-hold.it/600x600?text=Type%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%208Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:108> .
}

ns1:74520a2cd8f4cc967eec41674f2fce9117ef14b893603b6bc8ddf975b6b9b3a2 {
    <https://place-hold.it/1000x1000?text=Extent%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%206Image0> .

    <https://place-hold.it/75x75?text=Extent%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%206Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:16> .
}

ns1:c9a7bfa3d1f10d2f3f3de7661f5b1a79491b9222db338516de36f1ca353e8834 {
    <https://place-hold.it/1000x1000?text=Medium%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:41> .
}

ns1:924766eacd57e3b1180485a7871ff5c990d4738bde2e78ea453e2faa04bc78f9 {
    <https://place-hold.it/1000x1000?text=Extent%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%206Image1> .

    <https://place-hold.it/75x75?text=Extent%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%206Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:16> .
}

ns1:cc82c444856e625e4b62ef8dc751970743799334e56f09945aeb45c1b8e37cf9 {
    <https://place-hold.it/1000x1000?text=Type%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:108> .
}

ns1:edb1d6cdd606a445ad06dc3b052949d71e7429cd6b4f7345d589fb320f8aa299 {
    <https://place-hold.it/1000x1000?text=Technique%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:98> .
}

ns1:3eb3963192b8f2e46f02c2bfcf873fe49cb2ba9247fbf9b63b040924083382d5 {
    <https://place-hold.it/1000x1000?text=Source%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Source%208Image0> .

    <https://place-hold.it/600x600?text=Source%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%208Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:68> .
}

ns1:6efe535f2c7d6b44ff578776752a31d077f255d77b46cdc080333f43f156925b {
    <http://example.com/freestandingwork9Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "FreestandingWork9 closing" ;
        cms:work <http://example.com/freestandingwork9> .
}

ns1:6e9038cb226d276f195e68257510013e495d6738e707b73d4aabd7f3d5281583 {
    <https://place-hold.it/1000x1000?text=Extent%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%205Image1> .

    <https://place-hold.it/600x600?text=Extent%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%205Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:15> .
}

ns1:98fb44765d5db90fda6746208a858bb2a92c095827376c761af3ffda2145c8af {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:78> a cms:NamedValue ;
        dcterms:title "Named value 78" ;
        rdf:predicate dcterms:spatial ;
        rdf:value "Spatial 8" ;
        skos:prefLabel "Named value 78" .
}

ns1:4418c42c2e98889271c2aeddfd2a592aae04797661384e5393167d0e2445a7e9 {
    <http://example.com/collection0/work3Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:creator <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---29"^^xsd:gDay ;
                time:month "--12"^^xsd:gMonth ;
                time:year "2021"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection0Work3 creation" ;
        cms:work <http://example.com/collection0/work3> .
}

ns1:4218db002db32062f072583cb43dbdb8d286ef1e413ce9c101b1a1f19c9d651e {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:84> a cms:NamedValue ;
        dcterms:title "Named value 84" ;
        rdf:predicate dcterms:subject ;
        rdf:value "Subject 4" ;
        skos:prefLabel "Named value 84" .
}

ns1:e7add37f0b81ce4e696b3ea051cd1ea9f8c446160aff65930d4ea29876fed880 {
    <https://place-hold.it/1000x1000?text=Material%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Material%200Image1> .

    <https://place-hold.it/600x600?text=Material%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%200Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:30> .
}

ns1:b1acca5234429222ef5ba7fb4f96510a0967564cfc37c906480c37a45b4a103b {
    <https://place-hold.it/1000x1000?text=Collection0Work1Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Collection0Work1Image1> .

    <https://place-hold.it/600x600?text=Collection0Work1Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work1 image 1 rights holder" ;
        dcterms:title "Collection0Work1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection0Work1Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection0/work1> .
}

ns1:10916e40a5a8ae92e395d526a1afced57b0682bf5f46d6fac8dcf35fd83eac5f {
    <http://rightsstatements.org/vocab/InC-NC/1.0/> a cms:RightsStatement ;
        dcterms:description "This Rights Statement indicates that the Item labeled with this Rights Statement is in copyright but that non-commercial use is allowed without the need to obtain additional permission."@en ;
        dcterms:identifier "InC-NC" ;
        skos:definition """This Item is protected by copyright and/or related rights.

  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use. In addition, no permission is required from the rights-holder(s) for non-commercial uses.

  For other uses you need to obtain permission from the rights-holder(s)."""@en ;
        skos:note "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use."@en,
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available."@en,
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material."@en ;
        skos:prefLabel "In Copyright - Non-Commercial Use Permitted"@en ;
        skos:scopeNote "This Rights Statement can be used only for copyrighted Items for which the organization making the Item available is the rights-holder or has been explicitly authorized by the rights-holder(s) to allow third parties to use their Work(s) for non-commercial purposes without obtaining permission first."@en .
}

ns1:27a05cb3b56b8d6162f2308ae2dad5ac97afbeb422d119ce0ebd0b1801990aa6 {
    <https://place-hold.it/1000x1000?text=Material%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Material%201Image1> .

    <https://place-hold.it/600x600?text=Material%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%201Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:31> .
}

ns1:86ae65e162b3127d1dc10da4dfc3d41e5ceef0a43c021e31ca33eb485edfdb0b {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:14> a cms:NamedValue ;
        dcterms:title "Named value 14" ;
        rdf:predicate dcterms:extent ;
        rdf:value "Extent 4" ;
        skos:prefLabel "Named value 14" .
}

ns1:de92662e627c8d9a961d85ac1384ac63470688a61dab4ec32d6cf426a8e70ae4 {
    <http://creativecommons.org/licenses/by-nc/3.0/> a cc:License,
            cms:License ;
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
}

ns1:761faa15ca4f61dd7f9cf673dd19b13257099c834d38ebbf904ecd98462dc0bb {
    <https://place-hold.it/1000x1000?text=Medium%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%204Image0> .

    <https://place-hold.it/75x75?text=Medium%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%204Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:44> .
}

ns1:a6c2de4128931d44d45cf6951f238f9f9a2177444b221c91ad743a3c1ac93304 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:7> .
}

ns1:e9cf6fd4dccc484718dd39a36e5c075657adba832738b7ba09ac6c476cde4aa1 {
    <https://place-hold.it/1000x1000?text=Extent%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%204Image0> .

    <https://place-hold.it/600x600?text=Extent%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%204Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:14> .
}

ns1:929c227ab34b03653deaa3f06b53ee9e87f4ed7348008570e9136526a44ae143 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:47> a cms:NamedValue ;
        dcterms:title "Named value 47" ;
        rdf:predicate dcterms:medium ;
        rdf:value "Medium 7" ;
        skos:prefLabel "Named value 47" .
}

ns1:db178ed2553710dd260312e7bc3457328bcd0f1623d5282661cc3702a9c53727 {
    <https://place-hold.it/1000x1000?text=Technique%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%206Image0> .

    <https://place-hold.it/600x600?text=Technique%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%206Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:96> .
}

ns1:e1638b41cb6b7314ed308b732aa2e8f613ada99909edede38a01e8f5afddc59b {
    <https://place-hold.it/1000x1000?text=Subject%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:82> .
}

ns1:062b16cb264dde0ae06e672512bbacadb9997f8e169840e19a4a368fda3d28ac {
    <https://place-hold.it/1000x1000?text=Publisher%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%204Image1> .

    <https://place-hold.it/75x75?text=Publisher%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%204Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:54> .
}

ns1:173e2ea79335fe1040eeec2bd6c79f7dbfefd052c36a825bb5f172fb165a0ce2 {
    <https://place-hold.it/1000x1000?text=Spatial%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%209Image1> .

    <https://place-hold.it/75x75?text=Spatial%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%209Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:79> .
}

ns1:d5f656c191eaaf66048ad812b082de6486e108236c7d8dc08d5aa6b133b002f1 {
    <https://place-hold.it/1000x1000?text=Type%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:109> .
}

ns1:3b9161a84b93307d6c8160180fc1e29ef6aa28b0585e8910fa0e94da7c13cf63 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%204Image0> .

    <https://place-hold.it/600x600?text=Cultural%20context%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%204Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:4> .
}

ns1:0c524428dfe21c1e2b270a793ca0278a291b6c6fb742675075905d9c88f79c35 {
    <http://example.com/collection1/work6Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Collection1Work6 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:contributor <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:creator <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---26"^^xsd:gDay ;
                time:month "--12"^^xsd:gMonth ;
                time:year "2021"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection1Work6 creation" ;
        cms:work <http://example.com/collection1/work6> .
}

ns1:2ba5ec2888727d351e81ea6300c89810882482aa78d6a7d9415405e42f3cc51b {
    <https://place-hold.it/1000x1000?text=Subject%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%209Image1> .

    <https://place-hold.it/75x75?text=Subject%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%209Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:89> .
}

ns1:a3082b01c8224974295251c5bb30d01578c5d53b1e72e9e58b934a34a326c4ba {
    <https://place-hold.it/1000x1000?text=Extent%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:16> .
}

ns1:ca50c7567bae55bf0193c8066c383f32cd00f59a6eef9c5faa5fa71f506921c1 {
    <https://place-hold.it/1000x1000?text=Spatial%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%200Image0> .

    <https://place-hold.it/75x75?text=Spatial%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%200Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:70> .
}

ns1:d16e2a38e6482a761e809ac887c51035e5f8b781329e12319b4a32872521cc6b {
    <https://place-hold.it/1000x1000?text=Publisher%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:52> .
}

ns1:feb5ed2b840cadfe5b46f80f536146ab3ff6626a773e576b58bc456dbf670162 {
    <https://place-hold.it/1000x1000?text=Collection1Work5Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Collection1Work5Image0> .

    <https://place-hold.it/600x600?text=Collection1Work5Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work5 image 0 rights holder" ;
        dcterms:title "Collection1Work5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection1Work5Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection1/work5> .
}

ns1:772348fa0ceec2ba2dd1dc6f6f0013e1e4b64f52d8dbe23390e1c4bf3079d069 {
    <https://place-hold.it/1000x1000?text=Subject%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:89> .
}

ns1:3a73c81a580c0a511e68204466f0e5430a98d2f0b092d0b008e2da506182a1a0 {
    <https://place-hold.it/1000x1000?text=Collection1Work5Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work5 image 0 rights holder" ;
        dcterms:title "Collection1Work5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection1/work5> .
}

ns1:207121a5fa28befa4692a61506465837d8c829b8a34e2b83c0032d91596b9ab0 {
    <https://place-hold.it/1000x1000?text=Medium%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:40> .
}

ns1:3f2b50209ae2621d139719d92931c993e3e83d8dfd48c14bb928a4b6a4bb4e94 {
    <http://creativecommons.org/licenses/by/1.0/> a cc:License,
            cms:License ;
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
}

ns1:87620a906fadc6010c6fdbc016ea329d76991abdc36dff73f1e658b930c0eaa2 {
    <http://example.com/collection1/work7Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---25"^^xsd:gDay ;
                time:month "--12"^^xsd:gMonth ;
                time:year "2021"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection1Work7 creation" ;
        cms:work <http://example.com/collection1/work7> .
}

ns1:194090d3caa8ba496719cff71b3b99990aed5c865bce8238830cf67f00c08fbe {
    <https://place-hold.it/1000x1000?text=Technique%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:90> .
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

ns1:f039a5baaa3a54c854e246bd119c1dafa3d4dd0e5fee865806ada12d9b1f3d61 {
    <https://place-hold.it/1000x1000?text=Collection0Work1Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work1 image 0 rights holder" ;
        dcterms:title "Collection0Work1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection0/work1> .
}

ns1:a15e78688995fcc67f08d215d9bde36168817d80dc2d24f8214e97272f112235 {
    <https://place-hold.it/1000x1000?text=Language%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:28> .
}

ns1:ef2bce26b406d26150293c1c580d1ffc020f23eecf0b273f30a2c585090a56bf {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:43> a cms:NamedValue ;
        dcterms:title "Named value 43" ;
        rdf:predicate dcterms:medium ;
        rdf:value "Medium 3" ;
        skos:prefLabel "Named value 43" .
}

ns1:3b69b20ae1d7c26f4f47d7d623c96fdc11aadc5d04e661566569fd63729c0f71 {
    <https://place-hold.it/1000x1000?text=Publisher%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:59> .
}

ns1:a9de44c1661bf0ec080366ffbd948b70605c85419fd0396db623d6acc1512b92 {
    <https://place-hold.it/1000x1000?text=Spatial%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%205Image1> .

    <https://place-hold.it/75x75?text=Spatial%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%205Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:75> .
}

ns1:2f5b4c03b885a67b1d48bb6463018a56f5d47eb882a9e29039d2184e4a334e16 {
    <https://place-hold.it/1000x1000?text=Language%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Language%201Image1> .

    <https://place-hold.it/600x600?text=Language%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%201Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:21> .
}

ns1:e7e71adefc8d1866b3705fbe60dbd6334958307538bdde1afa37574d96ec5cf1 {
    <https://place-hold.it/1000x1000?text=Source%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Source%202Image1> .

    <https://place-hold.it/600x600?text=Source%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%202Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:62> .
}

ns1:96085eafeed3eac288feb5fbcad4b7bb142656233d8e5272f8f45aa87c96929f {
    <https://place-hold.it/1000x1000?text=Type%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Type%208Image0> .

    <https://place-hold.it/75x75?text=Type%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%208Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:108> .
}

ns1:4b02945ca006c9710a38f69a74314493a2f8473ad2eae761b45a0f9b1b37d6b7 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:61> a cms:NamedValue ;
        dcterms:title "Named value 61" ;
        rdf:predicate dcterms:source ;
        rdf:value "Source 1" ;
        skos:prefLabel "Named value 61" .
}

ns1:5c60b18e9c1f244a9297368e3b6524926121f4cf0054b60822ec41bd651aeddf {
    <http://creativecommons.org/licenses/by-nd/2.5/> a cc:License,
            cms:License ;
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
}

ns1:425fd2ea062c26622b764b42206988bcfcc686d673f55d137c432ffe8485fe18 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:80> a cms:NamedValue ;
        dcterms:title "Named value 80" ;
        rdf:predicate dcterms:subject ;
        rdf:value "Subject 0" ;
        skos:prefLabel "Named value 80" .
}

ns1:b12069096d8e72ea9bc70ec63b3b3864ee824e42530af38cb905816e4239206f {
    <https://place-hold.it/1000x1000?text=Technique%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%206Image0> .

    <https://place-hold.it/75x75?text=Technique%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%206Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:96> .
}

ns1:8bb8214e42a43dfc8430ba5d6fb7633306c23d82e91350905d0773a12542d311 {
    <https://place-hold.it/1000x1000?text=Source%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Source%209Image1> .

    <https://place-hold.it/75x75?text=Source%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%209Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:69> .
}

ns1:a42529f8800b2b6ef612b09399260219037048aca1ac7c98ac4174b5382a8f7a {
    <https://place-hold.it/1000x1000?text=FreestandingWork11Image0> foaf:thumbnail <https://place-hold.it/75x75?text=FreestandingWork11Image0> .

    <https://place-hold.it/75x75?text=FreestandingWork11Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=FreestandingWork11Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/freestandingwork11> .
}

ns1:440ec3d17a5bbb5439f215f13e99530a9261ef34a6fb184439e19b417a4386d5 {
    <https://place-hold.it/1000x1000?text=Extent%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%209Image1> .

    <https://place-hold.it/75x75?text=Extent%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%209Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:19> .
}

ns1:e671aecce251aa19eaa36f229dee38dc074ff616a17040c551cb132146b5a3ce {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:36> a cms:NamedValue ;
        dcterms:title "Named value 36" ;
        rdf:predicate vra:material ;
        rdf:value "Material 6" ;
        skos:prefLabel "Named value 36" .
}

ns1:9f49f0427f8e34ec66a18319ed663ac8b02cfc8ef66dfd5d847a0ca9a1126fc5 {
    <https://place-hold.it/1000x1000?text=Spatial%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%202Image1> .

    <https://place-hold.it/75x75?text=Spatial%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%202Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:72> .
}

ns1:1ce1ff9c293d0eb7ffc1d84190d5e6215b560e3e7a26d1f01bfc06f5f4e5615c {
    <https://place-hold.it/1000x1000?text=Spatial%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%201Image1> .

    <https://place-hold.it/600x600?text=Spatial%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%201Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:71> .
}

ns1:9e75095768bc21b1bcc2fcea8fb6553dade0ce12e5590dd13c582bb5b8a1d551 {
    <https://place-hold.it/1000x1000?text=Language%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:23> .
}

ns1:383dd70e543187df11199de14f6257baa89d0925524ba1aba73fdeda21f2f85e {
    <https://place-hold.it/1000x1000?text=Language%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Language%209Image1> .

    <https://place-hold.it/75x75?text=Language%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%209Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:29> .
}

ns1:7a33d569863c5489d215bc344b4fea072ffa7895ed5b98d8b6a9a52bc1d1df79 {
    <https://place-hold.it/1000x1000?text=Medium%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%209Image1> .

    <https://place-hold.it/75x75?text=Medium%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%209Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:49> .
}

ns1:ddc0b463d301250edd897ff2ea167848912e4b09fa21f615e20b43212603241e {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:4> a cms:NamedValue ;
        dcterms:title "Named value 4" ;
        rdf:predicate vra:culturalContext ;
        rdf:value "Cultural context 4" ;
        skos:prefLabel "Named value 4" .
}

ns1:c803bf22aa08e74ec4458401b764d740253a476852feacafd60ccf20b57a70fe {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:6> a cms:NamedValue ;
        dcterms:title "Named value 6" ;
        rdf:predicate vra:culturalContext ;
        rdf:value "Cultural context 6" ;
        skos:prefLabel "Named value 6" .
}

ns1:13c85fe94d434af4a960fa711c0be064cfe269714d180ca79e6abd7360084244 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:7> .
}

ns1:011a4363097398892534ace9e7c47aaef9658508d66ad84c08f2e541c4437db5 {
    <https://place-hold.it/1000x1000?text=Material%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Material%201Image1> .

    <https://place-hold.it/75x75?text=Material%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%201Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:31> .
}

ns1:c16ee64981b59d17f96c605eb8aa696b9bfc38bde6f599c31b01b430c56daa97 {
    <https://place-hold.it/1000x1000?text=FreestandingWork9Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/freestandingwork9> .
}

ns1:ee5f9ff5c799de0aae6a02d6212ecc90d1e6066a47fce135f9bea756d33c4bbe {
    <https://place-hold.it/1000x1000?text=Language%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Language%208Image0> .

    <https://place-hold.it/600x600?text=Language%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%208Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:28> .
}

ns1:220e13204225fceecb4ead2f792a8cdefdfcd44e334326fec973b728603e03a0 {
    <https://place-hold.it/1000x1000?text=Material%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:33> .
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

ns1:5a99b5719178a40b3f8421a630bbe7f7314ec1c9ec4ea3c6576f78d9d8b24af5 {
    <https://place-hold.it/1000x1000?text=Spatial%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%204Image1> .

    <https://place-hold.it/600x600?text=Spatial%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%204Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:74> .
}

ns1:0e64b6423b8b847d7b2ba532a09d6993c0a6d486fedbf9dd70b1711edeffd682 {
    <http://rightsstatements.org/vocab/UND/1.0/> a cms:RightsStatement ;
        dcterms:description "This Rights Statement indicates that the organization that has made the Item available has reviewed the copyright and related rights status of the Item, but was unable to determine the copyright status of the Item."@en ;
        dcterms:identifier "UND" ;
        skos:definition """The copyright and related rights status of this Item has been reviewed by the organization that has made the Item available, but the organization was unable to make a conclusive determination as to the copyright status of the Item.

  Please refer to the organization that has made the Item available for more information.

  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use."""@en ;
        skos:note "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use."@en,
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available."@en,
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material."@en ;
        skos:prefLabel "Copyright Undetermined"@en ;
        skos:scopeNote "This Rights Statement should be used for Items for which the copyright status is unknown and for which the organization that has made the Item available has undertaken an (unsuccessful) effort to determine the copyright status of the underlying Work. Typically, this Rights Statement is used when the organization is missing key facts essential to making an accurate copyright status determination."@en .
}

ns1:21a721145adf59e979420a07a317f48da671a0be20b3298b812d789289cc8f5c {
    <https://place-hold.it/1000x1000?text=Publisher%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%204Image0> .

    <https://place-hold.it/75x75?text=Publisher%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%204Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:54> .
}

ns1:88a9fd5905b9931e6d18c0e669c05f71303e405c38243e362c3edd032420d94e {
    <https://place-hold.it/1000x1000?text=Extent%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%208Image0> .

    <https://place-hold.it/75x75?text=Extent%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%208Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:18> .
}

ns1:66376faaa0244d2fc6b3d9308b98786f7b924a0f797bad18e9d15501beacea11 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:9> a cms:NamedValue ;
        dcterms:title "Named value 9" ;
        rdf:predicate vra:culturalContext ;
        rdf:value "Cultural context 9" ;
        skos:prefLabel "Named value 9" .
}

ns1:1c63c5ef458b7ba53812378f2d8c27887d443f517971a7ad5080f1f405c1353b {
    <https://place-hold.it/1000x1000?text=Publisher%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%206Image0> .

    <https://place-hold.it/75x75?text=Publisher%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%206Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:56> .
}

ns1:248823f612ca203999e96f7ee3ee1881e7fbae4b22e4816ffb8c1d3d3f55057f {
    <http://creativecommons.org/licenses/by-sa/2.0/> a cc:License,
            cms:License ;
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
}

ns1:1c5ad03fe5a0d7516fb2446d24d7a72c6b5e5c35370774c7eaaa949fd922ce17 {
    <https://place-hold.it/1000x1000?text=Extent%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%204Image1> .

    <https://place-hold.it/600x600?text=Extent%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%204Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:14> .
}

ns1:0548fbb6d223e4596c03dc2fe3fcdb9dfee7ed7be3c83c5e750180ab94721d91 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:91> a cms:NamedValue ;
        dcterms:title "Named value 91" ;
        rdf:predicate vra:technique ;
        rdf:value "Technique 1" ;
        skos:prefLabel "Named value 91" .
}

ns1:9d3566a0cc87a2cd4d12656292db11835ed30280da2b1503d0b37c5b0600595b {
    <http://creativecommons.org/licenses/BSD/> a cc:License,
            cms:License ;
        cc:legalcode <http://opensource.org/licenses/bsd-license.php> ;
        cc:licenseClass <http://creativecommons.org/license/software> ;
        cc:permits cc:DerivativeWorks,
            cc:Distribution,
            cc:Reproduction ;
        cc:requires cc:Notice ;
        dc:identifier "BSD" ;
        dc:title "BSD License",
            "BSD"@en .
}

ns1:fc0b3592683195104c02a10e48933095251dd13bbf7c6dbdc5f40335975c7cdb {
    <https://place-hold.it/1000x1000?text=Language%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Language%201Image1> .

    <https://place-hold.it/75x75?text=Language%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%201Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:21> .
}

ns1:3dc9219481f00d495b71bc34463544b8b4a3790a2fc41268ebecc14180ca2cd4 {
    <https://place-hold.it/1000x1000?text=Subject%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%202Image1> .

    <https://place-hold.it/600x600?text=Subject%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%202Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:82> .
}

ns1:b159149c016c7df1c9512c9ebbe0d64bfda2dd6ab41736faf309fa5d0d931152 {
    <https://place-hold.it/1000x1000?text=Publisher%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:58> .
}

ns1:b83436d581e5ef1409e491d9ca6dd02015110f9ec3de4319123256d189325b2a {
    <http://creativecommons.org/licenses/by-sa/2.5/> a cc:License,
            cms:License ;
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
}

ns1:de19f6ca2f4fc48bc8e5976155ed409cf1c81597048222b1a59b14192cdd603d {
    <https://place-hold.it/1000x1000?text=Technique%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%207Image1> .

    <https://place-hold.it/600x600?text=Technique%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%207Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:97> .
}

ns1:ffa8c7dcf03e24e275070fdd9916e5a62449217274a4485cacaaf2dac278f56d {
    <https://place-hold.it/1000x1000?text=Extent%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%200Image1> .

    <https://place-hold.it/75x75?text=Extent%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%200Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:10> .
}

ns1:23e882e2034f9f48f5422bf23e43e67fb912e15a6edb00e7c59fe01ccd68518c {
    <https://place-hold.it/1000x1000?text=Material%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Material%202Image0> .

    <https://place-hold.it/75x75?text=Material%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%202Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:32> .
}

ns1:0b772292bcbd52418333881aeb3b6f9c1ddf03ecefd40ea1ee4e2452c8498a2a {
    <https://place-hold.it/1000x1000?text=Material%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:31> .
}

ns1:7ad32ae267eec1b57cb47c619a34b99b7d005665c032ebcbf52bd9822cbf8331 {
    <https://place-hold.it/1000x1000?text=Subject%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:88> .
}

ns1:bc367dc6f092785be12518fa68e6e3137aaef615db5655d702f242e10371065c {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:97> a cms:NamedValue ;
        dcterms:title "Named value 97" ;
        rdf:predicate vra:technique ;
        rdf:value "Technique 7" ;
        skos:prefLabel "Named value 97" .
}

ns1:26ca4fd5760f1b782fd7a495c08a289d4e51047320b6e8a7017fec376e532f25 {
    <https://place-hold.it/1000x1000?text=Technique%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%208Image1> .

    <https://place-hold.it/600x600?text=Technique%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%208Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:98> .
}

ns1:651988425a0513f345e05cfab4dad2b7f1115bdd44cbfa260c56274eecf13dfb {
    <https://place-hold.it/1000x1000?text=Spatial%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%204Image0> .

    <https://place-hold.it/75x75?text=Spatial%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%204Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:74> .
}

ns1:0b83c39f24ba15495b785be43d83520343b2a85165f0495eecd5b3f988ff98c0 {
    <http://rightsstatements.org/vocab/NoC-OKLR/1.0/> a cms:RightsStatement ;
        dcterms:description "This Rights Statement indicates that the underlying Work is in the Public Domain, but that there are known restrictions imposed by laws other than copyright and/or related rights on the use of the Item by third parties."@en ;
        dcterms:identifier "NoC-OKLR" ;
        skos:definition """Use of this Item is not restricted by copyright and/or related rights.

  In one or more jurisdictions, laws other than copyright are known to impose restrictions on the use of this Item.

  Please refer to the organization that has made the Item available for more information."""@en ;
        skos:note "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use."@en,
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available."@en,
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material."@en ;
        skos:prefLabel "No Copyright - Other Known Legal Restrictions"@en ;
        skos:scopeNote "This Rights Statement should be used for Items that are in the Public Domain but that cannot be freely re-used as the consequence of known legal restrictions that prevent the organization that intends to make the Item available from allowing free re-use of the Item, such as cultural heritage or traditional cultural expression protections. In order for this Rights Statement to be conclusive, the organization that intends to make the Item available should provide a link to a page detailing the legal restrictions that limit re-use of the Item."@en .
}

ns1:d3cd95197039abb5eacc45d7dd64e5496dbbc258f75db84e0445b333933aa085 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:38> a cms:NamedValue ;
        dcterms:title "Named value 38" ;
        rdf:predicate vra:material ;
        rdf:value "Material 8" ;
        skos:prefLabel "Named value 38" .
}

ns1:ece63b445acfc630d79c5ac48fe125bc8a94e6219ad4ae29011a9616fc20d646 {
    <http://example.com/organization3> a cms:Agent,
            cms:Organization ;
        foaf:name "Organization 3" ;
        foaf:page <http://example.com/organization3page> .
}

ns1:40c204041cc6b32953187b2572557b635fe26df1ee27cce7ad6149fa6e17557c {
    <https://place-hold.it/1000x1000?text=Material%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:32> .
}

ns1:c1d21f55af0aa86a37e550581aafde27f2df1b567304e1447ed95078903c5e5d {
    <https://place-hold.it/1000x1000?text=Spatial%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%201Image0> .

    <https://place-hold.it/600x600?text=Spatial%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%201Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:71> .
}

ns1:347e567ccab6741c23e5a68bd05d88d48e771314155c6bd6553bbc2781f98ccf {
    <https://place-hold.it/1000x1000?text=Cultural%20context%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%201Image0> .

    <https://place-hold.it/75x75?text=Cultural%20context%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%201Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:1> .
}

ns1:a9a1a2a4ff751e8a35453626e9eb61c139e8d4f4de76e8f9f2153cde75ef6f2d {
    <https://place-hold.it/1000x1000?text=Publisher%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%200Image0> .

    <https://place-hold.it/600x600?text=Publisher%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%200Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:50> .
}

ns1:3f0c304686afddf33f6e534b2ce55d881664d899cfdf0e046b4b2e1d1d9420b8 {
    <https://place-hold.it/1000x1000?text=Subject%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%201Image1> .

    <https://place-hold.it/600x600?text=Subject%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%201Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:81> .
}

ns1:db7d0ca0f3efef756f6727fb136d5d2acf2ca9d248551d6064b05c11ad22b8fe {
    <https://place-hold.it/1000x1000?text=FreestandingWork9Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/freestandingwork9> .
}

ns1:b45dc335a4a635f193eb3e8ac563f6477e1dbce200b8a59a9ceb4cb2cded28e3 {
    <https://place-hold.it/1000x1000?text=Type%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Type%206Image1> .

    <https://place-hold.it/75x75?text=Type%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%206Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:106> .
}

ns1:235233655189ea03b17262c8da8d1c0886d2d5fdff44583dc9db15af01720564 {
    <https://place-hold.it/1000x1000?text=Medium%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%202Image0> .

    <https://place-hold.it/600x600?text=Medium%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%202Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:42> .
}

ns1:c4fdb5c9649d8b6cde1de6ae1b5a36ade1252cb276aac356739bb5f8b6330128 {
    <https://place-hold.it/1000x1000?text=Collection1Work6Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Collection1Work6Image0> .

    <https://place-hold.it/600x600?text=Collection1Work6Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work6 image 0 rights holder" ;
        dcterms:title "Collection1Work6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection1Work6Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection1/work6> .
}

ns1:a65baafefcf1f121a3d144d5f41a74ffa7afd6971cb4ac4172fd2a4eb90a6d4d {
    <https://place-hold.it/1000x1000?text=Subject%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%202Image0> .

    <https://place-hold.it/75x75?text=Subject%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%202Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:82> .
}

ns1:29b418e78f76511de43ac264a62d3ccd1027ff8df680536e2838d93e958e8642 {
    <https://place-hold.it/1000x1000?text=Medium%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%201Image1> .

    <https://place-hold.it/75x75?text=Medium%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%201Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:41> .
}

ns1:eac0886a1362bd73c61b2ac26ef37b8d2403a43c4ac0cfedf424216d1e6e45dc {
    <https://place-hold.it/1000x1000?text=FreestandingWork9Image0> foaf:thumbnail <https://place-hold.it/600x600?text=FreestandingWork9Image0> .

    <https://place-hold.it/600x600?text=FreestandingWork9Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=FreestandingWork9Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/freestandingwork9> .
}

ns1:5df6c376af52fe9f962cb2216e11f0512f8ef1a7e0606ae7166e532b164b79f9 {
    <http://rightsstatements.org/vocab/collection-ic/1.0/> a cms:RightsStatement ;
        dcterms:identifier "collection-ic" ;
        skos:prefLabel "Statements for works that are in copyright"@en .
}

ns1:ffa81edb4071fc452df305fd4aa77357132d7571db27b4b865e53cb61019d42b {
    <https://place-hold.it/1000x1000?text=Medium%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%200Image1> .

    <https://place-hold.it/600x600?text=Medium%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%200Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:40> .
}

ns1:aba180839cfe63ad44d6da73030440762e4b757665ba67465ff1cbc312dbae11 {
    <https://place-hold.it/1000x1000?text=Spatial%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%209Image0> .

    <https://place-hold.it/600x600?text=Spatial%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%209Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:79> .
}

ns1:f685aede5d7780da0c0585b40cd2422bb62b556d939f4a6ece40b2599317d641 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%205Image0> .

    <https://place-hold.it/75x75?text=Cultural%20context%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%205Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:5> .
}

ns1:d4360a96226facf750f3e2349840f40e9a02b1da199e61c7bda67df9285c50dc {
    <https://place-hold.it/1000x1000?text=Language%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:27> .
}

ns1:2af67f9c2c6d34d53a81a79a2fda9fc130bff8fec9a9c88e66da43e9db0c50f9 {
    <https://place-hold.it/1000x1000?text=Collection1Work5Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Collection1Work5Image1> .

    <https://place-hold.it/600x600?text=Collection1Work5Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work5 image 1 rights holder" ;
        dcterms:title "Collection1Work5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection1Work5Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection1/work5> .
}

ns1:64aa8b45e6f665dcbffa707fa02c1fe3e395a87e05b9c72defa5f27dd57e6cf0 {
    <https://place-hold.it/1000x1000?text=Collection1Work4Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work4 image 1 rights holder" ;
        dcterms:title "Collection1Work4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection1/work4> .
}

ns1:07669652f7876d1fe9d141e74387c2ca4f305d27d9b133be31a8a5977d83f4d1 {
    <https://place-hold.it/1000x1000?text=Language%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Language%203Image1> .

    <https://place-hold.it/75x75?text=Language%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%203Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:23> .
}

ns1:35ba97decb0e20410bd37faa838cda26c9b083534febf9dc90f2bfaf853101c2 {
    <https://place-hold.it/1000x1000?text=Spatial%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:74> .
}

ns1:7bc89e4b841a4f37fc29cfd342129effe309f35b622e507c74d819dd8d8aa3a2 {
    <https://place-hold.it/1000x1000?text=Spatial%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%208Image0> .

    <https://place-hold.it/600x600?text=Spatial%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%208Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:78> .
}

ns1:2150bb16e189481b9fb7fc2083686aae9854ad158655f8b4b2eadeadbee12a14 {
    <https://place-hold.it/1000x1000?text=Medium%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:42> .
}

ns1:db85c2051b05e5bb8aa70e268ecdf8fed21d2a880218964cb964d42afd5b3148 {
    <https://place-hold.it/1000x1000?text=Spatial%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:71> .
}

ns1:be9bc68842075c426ee70585aaf2307430b8f687892a71f58e9c5d1bbe1d9841 {
    <https://place-hold.it/1000x1000?text=Technique%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:94> .
}

ns1:3dd2d632733f968d21454cbaef04747d874bf9bf3211aad78b6f84918724d749 {
    <https://place-hold.it/1000x1000?text=Material%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:37> .
}

ns1:231380e05c17eba840ad33e0c27c77b1d98628682b32b13999dba1886c26aef5 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:90> a cms:NamedValue ;
        dcterms:title "Named value 90" ;
        rdf:predicate vra:technique ;
        rdf:value "Technique 0" ;
        skos:prefLabel "Named value 90" .
}

ns1:949e777524f6987743fde37dbee843843b5174e418404ce5759cc080bb977ea0 {
    <http://creativecommons.org/licenses/sampling+/1.0/> a cc:License,
            cms:License ;
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
}

ns1:c78a3d1c6ee30ca4563cd60968b4c6a6b63cdbc0b140d87403631b60f90dab0c {
    <https://place-hold.it/1000x1000?text=Collection0Work1Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Collection0Work1Image1> .

    <https://place-hold.it/75x75?text=Collection0Work1Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work1 image 1 rights holder" ;
        dcterms:title "Collection0Work1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection0Work1Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection0/work1> .
}

ns1:f5912f4e9f6c5279453c84a45b31adc55f0f5ff65f02b41011cb52f5a3501421 {
    <https://place-hold.it/1000x1000?text=Subject%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:89> .
}

ns1:72c61b02e5bceff4ece803d4fd9da98e0ae605feb382e4fccc3eabbef2b1d344 {
    <https://place-hold.it/1000x1000?text=Spatial%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:73> .
}

ns1:c77fbfd4ae365eaae89cd966f28f540ac6d7b1cebdc4e96e2939be5715accbcc {
    <https://place-hold.it/1000x1000?text=Subject%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%201Image0> .

    <https://place-hold.it/75x75?text=Subject%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%201Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:81> .
}

ns1:aaea4a5cc324054cae1f4e6e03c1ac5b531a95209477db1b9638350e1d89bf7c {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:7> a cms:NamedValue ;
        dcterms:title "Named value 7" ;
        rdf:predicate vra:culturalContext ;
        rdf:value "Cultural context 7" ;
        skos:prefLabel "Named value 7" .
}

ns1:c6586d0163e425339620c5ef3e309d8b21bb7a002f999c3fb361548257273e59 {
    <http://example.com/collection1/work4Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Collection1Work4 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:contributor <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:creator <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---28"^^xsd:gDay ;
                time:month "--12"^^xsd:gMonth ;
                time:year "2021"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection1Work4 creation" ;
        cms:work <http://example.com/collection1/work4> .
}

ns1:5932758d093ba7a0e2b6fb926011b4b338d1fd248ce59b0c44c2a609c720b5c2 {
    <http://creativecommons.org/licenses/by-nc-nd/2.0/> a cc:License,
            cms:License ;
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
}

ns1:5d38497d080b17c0c1d9c279ea5232888840ac92bdc37c27a7f63d9e5a64b0b6 {
    <http://example.com/freestandingwork9Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---23"^^xsd:gDay ;
                time:month "--12"^^xsd:gMonth ;
                time:year "2021"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "FreestandingWork9 creation" ;
        cms:work <http://example.com/freestandingwork9> .
}

ns1:5caf3b8961b74304f3b6ee3430758f0170c75c4578420276336c2661c62519fb {
    <https://place-hold.it/1000x1000?text=Extent%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%202Image0> .

    <https://place-hold.it/600x600?text=Extent%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%202Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:12> .
}

ns1:1007b3a17a3752e882582c4a6ddff0b6f5dd384a8ce3d3c613f14edb87c5de15 {
    <https://place-hold.it/1000x1000?text=Spatial%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:73> .
}

ns1:9a084f103912f8ae3f14d9297d3d573c95ebe864d2a641174852607c34d508ba {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:72> a cms:NamedValue ;
        dcterms:title "Named value 72" ;
        rdf:predicate dcterms:spatial ;
        rdf:value "Spatial 2" ;
        skos:prefLabel "Named value 72" .
}

ns1:a974a0a4de835663d0494b516a02a7d825c720e6fc32392f806c880d3756d946 {
    <https://place-hold.it/1000x1000?text=Medium%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%201Image1> .

    <https://place-hold.it/600x600?text=Medium%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%201Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:41> .
}

ns1:59a65cdf26f1a3f500ffe74cd93ace3e8e6db11153333a9b014da45d5b8822ad {
    <https://place-hold.it/1000x1000?text=Collection1Work6Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work6 image 0 rights holder" ;
        dcterms:title "Collection1Work6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection1/work6> .
}

ns1:7c246556dfdb249a6aea71c957540bdf284189544c882257e67f4470a38f041d {
    <http://creativecommons.org/licenses/sampling/1.0/> a cc:License,
            cms:License ;
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
}

ns1:80db61a30e2f23ce543f3b127a14a69058c60cc0681a0d55a9432dbf4ceb743e {
    <https://place-hold.it/1000x1000?text=Collection1Work5Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work5 image 1 rights holder" ;
        dcterms:title "Collection1Work5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection1/work5> .
}

ns1:694360272cf73f1f29f47dfa3abe41579da96ee44ddc51ebf9e91bf437611405 {
    <https://place-hold.it/1000x1000?text=Medium%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%203Image0> .

    <https://place-hold.it/600x600?text=Medium%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%203Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:43> .
}

ns1:c70876a2f6044bcf4bf6d476a3c1f14acfe4404d352d0e7e4ab640a29ef873c7 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:28> a cms:NamedValue ;
        dcterms:title "Named value 28" ;
        rdf:predicate dcterms:language ;
        rdf:value "Language 8" ;
        skos:prefLabel "Named value 28" .
}

ns1:c5c9a3a3b55a116e27d34fb62e1fdc8a345e8f38131b69136d9b106f0d659906 {
    <https://place-hold.it/1000x1000?text=Technique%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:92> .
}

ns1:fe7b081d6436643274f8c6d9b366699172379002e6df870d0aaab5bbed06fab5 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:76> a cms:NamedValue ;
        dcterms:title "Named value 76" ;
        rdf:predicate dcterms:spatial ;
        rdf:value "Spatial 6" ;
        skos:prefLabel "Named value 76" .
}

ns1:6f5184f55e1b0e8541acdd7153fd0f6b7c9134a413bef1ea0264f5a1e7029f66 {
    <https://place-hold.it/1000x1000?text=Collection0Work3Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Collection0Work3Image1> .

    <https://place-hold.it/600x600?text=Collection0Work3Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work3 image 1 rights holder" ;
        dcterms:title "Collection0Work3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection0Work3Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection0/work3> .
}

ns1:ed408e2cd808a754d2abbda4a6f86792843c131dcf7cff5e5c356616444380ef {
    <https://place-hold.it/1000x1000?text=Medium%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:48> .
}

ns1:1bf813eb7509ba53b133e4ab4a73c411571234ffae81a9a3d64d5fb51c52e23c {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:87> a cms:NamedValue ;
        dcterms:title "Named value 87" ;
        rdf:predicate dcterms:subject ;
        rdf:value "Subject 7" ;
        skos:prefLabel "Named value 87" .
}

ns1:8dec49706c540b3581095418044189a6af68f2745a4f64e0ff6b434c4a20d451 {
    <https://place-hold.it/1000x1000?text=Type%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Type%203Image0> .

    <https://place-hold.it/75x75?text=Type%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%203Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:103> .
}

ns1:20766d0342c41c2ce6c8e7746dad1be81fdeaae09eaae9072ae2da62a9c810c0 {
    <https://place-hold.it/1000x1000?text=Publisher%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:56> .
}

ns1:afa786f70989d0dcebcd2a2a59823220644cb691f069543003750967a26efb03 {
    <http://example.com/collection0/work1> a cms:Work ;
        dcterms:alternative "Collection0Work1 alternative title 0",
            "Collection0Work1 alternative title 1" ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:named_value:11>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:12> ;
        dcterms:identifier "Collection0Work1Id0",
            "Collection0Work1Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:named_value:21>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:22> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:named_value:41>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:42> ;
        dcterms:provenance "Collection0Work1 provenance 0",
            "Collection0Work1 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:named_value:51>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:52> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work1 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:named_value:61>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:62> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:synthetic_data:named_value:71>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:72> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:named_value:81>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:82> ;
        dcterms:title "Collection0Work1" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:named_value:101>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:102> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:named_value:1>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:2> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:named_value:31>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:32> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:named_value:91>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:92> ;
        cms:collection <http://example.com/collection0> .
}

ns1:22e3c659a4a23a7c2a00ba08e8d970b31604f390c00e82d4c26ec0c8477b92bd {
    <https://place-hold.it/1000x1000?text=Technique%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:99> .
}

ns1:f8d6323cc946c8f0ee72b04756031752db41e6ba645ee68e5fa314f1060e1265 {
    <https://place-hold.it/1000x1000?text=Subject%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:83> .
}

ns1:83c8eb3a43ef3d79f20ac89d03e3bac2933d4bcb02f695dfefb419f585dd6b81 {
    <http://example.com/freestandingwork10Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "FreestandingWork10 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:date "2021-12-22"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "FreestandingWork10 opening" ;
        cms:work <http://example.com/freestandingwork10> .
}

ns1:a0b144aa5dc1d6def688b2f547942e54b10bcb82552f5992290fdbfb68a8eb8e {
    <https://place-hold.it/1000x1000?text=Technique%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:98> .
}

ns1:454e878846d246867b11872a17cee1cc1b961e076ed1b74d11c65b1fa66a6d62 {
    <http://example.com/organization4> a cms:Agent,
            cms:Organization ;
        foaf:name "Organization 4" ;
        foaf:page <http://example.com/organization4page> .
}

ns1:3146f3a6339a6608a041d840ced332f5280e300416fe1fc2e6a4d790f49da213 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%202Image0> .

    <https://place-hold.it/75x75?text=Cultural%20context%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%202Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:2> .
}

ns1:5a76db140de017bed203bcc14bcc7d8f21a96c384d2ac2c5f57908b23ac1646b {
    <https://place-hold.it/1000x1000?text=Publisher%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:54> .
}

ns1:118a6df1186c1611c027060203ff055e013f64ceb56b71efeae13608091e8718 {
    <https://place-hold.it/1000x1000?text=Technique%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:94> .
}

ns1:247adb8076559a45af176a86d83c917600c18c45da6b9b9b47b7376c2cb69e67 {
    <https://place-hold.it/1000x1000?text=Medium%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:46> .
}

ns1:dc53fc7fce93b9297634035a6ed7bcc78742c89bbb9529b01bdbf628e1336e8e {
    <https://place-hold.it/1000x1000?text=Spatial%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%205Image1> .

    <https://place-hold.it/600x600?text=Spatial%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%205Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:75> .
}

ns1:55dba9e5b870a8e346f6247614c4e1bbc11912a09461f82c69784b3ecf00337d {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:50> a cms:NamedValue ;
        dcterms:title "Named value 50" ;
        rdf:predicate dcterms:publisher ;
        rdf:value "Publisher 0" ;
        skos:prefLabel "Named value 50" .
}

ns1:a5013cb9be3e7cf72da5640146e0e95f650add3699094f8dc8ecc1e5e156d3b9 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:5> .
}

ns1:42df98a8dfd06fc3e3d921115ad558f594d46e3a91d8f0b393c1c947c9aad2f5 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:27> a cms:NamedValue ;
        dcterms:title "Named value 27" ;
        rdf:predicate dcterms:language ;
        rdf:value "Language 7" ;
        skos:prefLabel "Named value 27" .
}

ns1:9d25d4cb4112950c9598627013a64b2a5a4ec3cc77e41126cd6ba0a7fc20e7a9 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:46> a cms:NamedValue ;
        dcterms:title "Named value 46" ;
        rdf:predicate dcterms:medium ;
        rdf:value "Medium 6" ;
        skos:prefLabel "Named value 46" .
}

ns1:e51c55c04e35b563ee395790299768d8cedceee92552bac1014267c5cb50f494 {
    <https://place-hold.it/1000x1000?text=Subject%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%206Image0> .

    <https://place-hold.it/75x75?text=Subject%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%206Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:86> .
}

ns1:0186aa8a80c735ac5b8d4f3d7fa4d72cfebf1a060b9bf15c9f6b464855d29ed1 {
    <https://place-hold.it/1000x1000?text=Publisher%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%206Image1> .

    <https://place-hold.it/75x75?text=Publisher%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%206Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:56> .
}

ns1:0d375e167d56aa8749a83297b5cc02d5318bb3dd6f5a25149d921b2638c29afb {
    <https://place-hold.it/1000x1000?text=Cultural%20context%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:6> .
}

ns1:e12b7a5ba59111b0f0d01e3f6097e88c38ac6ca28865360f4837f263651330d9 {
    <http://creativecommons.org/licenses/nd/1.0/> a cc:License,
            cms:License ;
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
}

ns1:33f24f329500a2db9154e33ebd0b506281bb8b0e9957c5241960127b4fa5008f {
    <https://place-hold.it/1000x1000?text=Spatial%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:72> .
}

ns1:d22619a79d59bfe51fbfcc365ffb2ceafc11948041cf19196d3537d509a22b97 {
    <https://place-hold.it/1000x1000?text=Extent%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%207Image0> .

    <https://place-hold.it/600x600?text=Extent%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%207Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:17> .
}

ns1:44e6f2a184daeb746c18c07943f32458f61b5ccca2b01cb8b087ef4a8abf57ab {
    <https://place-hold.it/1000x1000?text=Medium%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%202Image1> .

    <https://place-hold.it/600x600?text=Medium%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%202Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:42> .
}

ns1:a26abb81f16c3d6ee3ac4a5c65b40690a576ab18b1f94385e65d597984f21e13 {
    <https://place-hold.it/1000x1000?text=Material%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:37> .
}

ns1:2e28976e8ed28e24db97e6b6124c0d4cc456a109aa298f578981f749a7a1692b {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:95> a cms:NamedValue ;
        dcterms:title "Named value 95" ;
        rdf:predicate vra:technique ;
        rdf:value "Technique 5" ;
        skos:prefLabel "Named value 95" .
}

ns1:33cf8fbca6e4f88eba6a1bb4afe015a92a14a721290c45439a6c18ab27e18505 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%204Image1> .

    <https://place-hold.it/75x75?text=Cultural%20context%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%204Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:4> .
}

ns1:634d7f133d628d7fb6b9a57319b028a877559b413943ab2fd4c5bf43fcc3b54d {
    <http://example.com/collection0/work0> a cms:Work ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Collection0Work0 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:alternative "Collection0Work0 alternative title 0",
            "Collection0Work0 alternative title 1" ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:description "Collection0Work0 description 0",
            "Collection0Work0 description 1",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:named_value:10>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:11> ;
        dcterms:identifier "Collection0Work0Id0",
            "Collection0Work0Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:named_value:20>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:21> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:named_value:40>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:41> ;
        dcterms:provenance "Collection0Work0 provenance 0",
            "Collection0Work0 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:named_value:50>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:51> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work0 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:named_value:60>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:61> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:synthetic_data:named_value:70>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:71> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:named_value:80>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:81> ;
        dcterms:title "Collection0Work0" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:named_value:100>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:101> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:named_value:0>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:1> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:named_value:30>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:31> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:named_value:90>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:91> ;
        cms:collection <http://example.com/collection0> ;
        foaf:page <http://example.com/work/0> .
}

ns1:67bafab3fd66e5ca3be2dfbbd3ab0ad95cbcfdf05806678bdecab0d851f53bdf {
    <http://example.com/collection1/work5> a cms:Work ;
        dcterms:alternative "Collection1Work5 alternative title 0",
            "Collection1Work5 alternative title 1" ;
        dcterms:contributor <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:creator <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:named_value:15>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:16> ;
        dcterms:identifier "Collection1Work5Id0",
            "Collection1Work5Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:named_value:25>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:26> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:named_value:45>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:46> ;
        dcterms:provenance "Collection1Work5 provenance 0",
            "Collection1Work5 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:named_value:55>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:56> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work5 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:named_value:65>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:66> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:synthetic_data:named_value:75>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:76> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:named_value:85>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:86> ;
        dcterms:title "Collection1Work5" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:named_value:105>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:106> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:named_value:5>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:6> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:named_value:35>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:36> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:named_value:95>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:96> ;
        cms:collection <http://example.com/collection1> .
}

ns1:e9a6e726d27ed3b29de8f85bbeb3354595ab3a49e16b1a53d0c51bf5c48dca91 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:2> .
}

ns1:eaea5251ea3d44c8edec58b1b106e9636c1930faa9e52020ccd40e7720404c81 {
    <https://place-hold.it/1000x1000?text=Subject%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%209Image1> .

    <https://place-hold.it/600x600?text=Subject%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%209Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:89> .
}

ns1:d58f549d917339aef43b07c9e3bb83020558d28d1ad294713a462ba08a08a514 {
    <https://place-hold.it/1000x1000?text=Publisher%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%201Image1> .

    <https://place-hold.it/600x600?text=Publisher%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%201Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:51> .
}

ns1:00cecd012fbbaa6e70cb3790a697c01b58ee33ed11e4547fa48b0deeb6840f34 {
    <https://place-hold.it/1000x1000?text=Medium%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%207Image1> .

    <https://place-hold.it/75x75?text=Medium%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%207Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:47> .
}

ns1:0e0139ad565815f13a994de5c7157420fd4594c24afcec867a69c7946aa2f95d {
    <https://place-hold.it/1000x1000?text=Publisher%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%202Image1> .

    <https://place-hold.it/600x600?text=Publisher%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%202Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:52> .
}

ns1:a0e327c59f5fa778cf37dea735b0c6b625acfb082b65fdc91454ec9332708272 {
    <https://place-hold.it/1000x1000?text=Extent%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%203Image0> .

    <https://place-hold.it/600x600?text=Extent%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%203Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:13> .
}

ns1:7688561d3d639f691d45c761b00aef1d40c2ca0be1bb87fdc9ba8839b366f06e {
    <https://place-hold.it/1000x1000?text=Source%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Source%200Image1> .

    <https://place-hold.it/600x600?text=Source%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%200Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:60> .
}

ns1:9d17d6b73adef8bea1d3513f083be539ba6d814aac499615bcbb50a977b3413a {
    <https://place-hold.it/1000x1000?text=Spatial%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%203Image0> .

    <https://place-hold.it/600x600?text=Spatial%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%203Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:73> .
}

ns1:5c9f68bb3d302ea88a532d290ab4a412d2c1bec0b34b5ce334b98770932f1031 {
    <https://place-hold.it/1000x1000?text=Collection0Work3Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Collection0Work3Image1> .

    <https://place-hold.it/75x75?text=Collection0Work3Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work3 image 1 rights holder" ;
        dcterms:title "Collection0Work3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection0Work3Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection0/work3> .
}

ns1:a68eaaf8d7aaf32b1c42e2d682be5c31c6c437d58cb02d7ff2f84adaa09a70cf {
    <https://place-hold.it/1000x1000?text=Type%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Type%204Image0> .

    <https://place-hold.it/75x75?text=Type%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%204Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:104> .
}

ns1:a7adb1a13e867972201a2cd23bc6bd7d8b55f69b238b5c09536dfdd157dc0458 {
    <https://place-hold.it/1000x1000?text=Extent%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:13> .
}

ns1:bce018712a18dafddade3524683aff8478b70621b517c8f0573802b4bce50403 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%205Image1> .

    <https://place-hold.it/75x75?text=Cultural%20context%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%205Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:5> .
}

ns1:60cade12d7afc54230c433441af6e0585c8f05e4e0e9e6382982048027dc33ea {
    <https://place-hold.it/1000x1000?text=Material%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:39> .
}

ns1:ed79e03d8d6651a59ca4797475a7b1e069405404c432bcc4febc826e124c0caa {
    <https://place-hold.it/1000x1000?text=Cultural%20context%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%208Image0> .

    <https://place-hold.it/600x600?text=Cultural%20context%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%208Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:8> .
}

ns1:b9ba020d05c54799435e22e73fe462a46752e96cbf3ca66aa929a636e3604a2f {
    <https://place-hold.it/1000x1000?text=Subject%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%208Image0> .

    <https://place-hold.it/75x75?text=Subject%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%208Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:88> .
}

ns1:5a5ed1886613a1fedf91e24a247ebd21b7c92b959b19edcf2a020a3173046608 {
    <https://place-hold.it/1000x1000?text=Publisher%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%203Image0> .

    <https://place-hold.it/600x600?text=Publisher%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%203Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:53> .
}

ns1:e3ddec8af4d0b3b87529b3df7ae5d0e2d4d9ca8ba1a68073950eb2cff5fc32f2 {
    <https://place-hold.it/1000x1000?text=Type%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Type%201Image0> .

    <https://place-hold.it/600x600?text=Type%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%201Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:101> .
}

ns1:63b58c3f379b67f9e59a3a65a9c36307ef822b58fc4e02fd8a6c6de7eba847a5 {
    <https://place-hold.it/1000x1000?text=Publisher%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%202Image1> .

    <https://place-hold.it/75x75?text=Publisher%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%202Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:52> .
}

ns1:fbcb94082c37178057ca6ec6e1b938bfeb4fbd444c62f0a40f63d867f2990e9b {
    <https://place-hold.it/1000x1000?text=Material%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:36> .
}

ns1:17783d4bea98033efad93ffd5d4fde3851daa156b91ab721ddb187dbefbcbeb8 {
    <https://place-hold.it/1000x1000?text=Extent%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:17> .
}

ns1:44bcbe7c82014751cda8c144cd44365ece58a0cfcfb86aea2520e5559e2e295a {
    <http://example.com/freestandingwork8Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "FreestandingWork8 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:date "2021-12-24"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "FreestandingWork8 opening" ;
        cms:work <http://example.com/freestandingwork8> .
}

ns1:b5f859d9bce30d9275f0fc785b3fa5befabcb51e1579fb5ee676584e2fadc646 {
    <https://place-hold.it/1000x1000?text=FreestandingWork10Image1> foaf:thumbnail <https://place-hold.it/75x75?text=FreestandingWork10Image1> .

    <https://place-hold.it/75x75?text=FreestandingWork10Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=FreestandingWork10Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/freestandingwork10> .
}

ns1:e6ede7fad3e4125f8aa047338ad6fc705fb0d1314613d8a94a20e9b074ea15aa {
    <https://place-hold.it/1000x1000?text=Language%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Language%206Image1> .

    <https://place-hold.it/75x75?text=Language%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%206Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:26> .
}

ns1:89f8f9869f1c6e9e683f28e7679a39b04794505a842c31b3a349440251c29293 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:98> a cms:NamedValue ;
        dcterms:title "Named value 98" ;
        rdf:predicate vra:technique ;
        rdf:value "Technique 8" ;
        skos:prefLabel "Named value 98" .
}

ns1:f45cbac8ec729570499b01f54e2397bf68517fa5e5bf197729070f1a519d92dd {
    <https://place-hold.it/1000x1000?text=Source%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:67> .
}

ns1:112638c707bd2d975f2604d876a8a76e8d17272b35ea434421e485c043973f86 {
    <https://place-hold.it/1000x1000?text=Medium%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%205Image1> .

    <https://place-hold.it/600x600?text=Medium%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%205Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:45> .
}

ns1:ce77ad2ecdf45de39c54adf707ebbaa72da8353835466796344980b2396a7691 {
    <http://example.com/collection0/work1Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-31"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection0Work1 opening" ;
        cms:work <http://example.com/collection0/work1> .
}

ns1:57c965e0d4d035231744ccd84556272ee3010ffcc8eb5ec986984382fd6c0682 {
    <http://example.com/collection0/work3> a cms:Work ;
        dcterms:alternative "Collection0Work3 alternative title 0",
            "Collection0Work3 alternative title 1" ;
        dcterms:contributor <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:creator <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:named_value:13>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:14> ;
        dcterms:identifier "Collection0Work3Id0",
            "Collection0Work3Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:named_value:23>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:24> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:named_value:43>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:44> ;
        dcterms:provenance "Collection0Work3 provenance 0",
            "Collection0Work3 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:named_value:53>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:54> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work3 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:named_value:63>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:64> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:synthetic_data:named_value:73>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:74> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:named_value:83>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:84> ;
        dcterms:title "Collection0Work3" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:named_value:103>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:104> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:named_value:3>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:4> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:named_value:33>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:34> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:named_value:93>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:94> ;
        cms:collection <http://example.com/collection0> .
}

ns1:4e675b026db554c4859211d75449367add1858f601dcc67fed1d061ad2f59cc9 {
    <https://place-hold.it/1000x1000?text=Medium%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%201Image0> .

    <https://place-hold.it/75x75?text=Medium%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%201Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:41> .
}

ns1:9c402c64ce832de6482b6e0335ab418ed430d05e616cd6e0cd2b6c7c152049b4 {
    <https://place-hold.it/1000x1000?text=Publisher%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:53> .
}

ns1:cd9dc2e21a825bcb81dc05d1f5f38ab1b025ea0356c00a545cbc32342eae6e81 {
    <http://creativecommons.org/licenses/by-nd/1.0/> a cc:License,
            cms:License ;
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
}

ns1:5208ebd0778a92ba1a8e9d6044788de7a328429503b2708a6f1316702cd9d872 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:22> a cms:NamedValue ;
        dcterms:title "Named value 22" ;
        rdf:predicate dcterms:language ;
        rdf:value "Language 2" ;
        skos:prefLabel "Named value 22" .
}

ns1:f7bda5572e75476f793fc9854209656a92787bca699dd86607b67415acd715fe {
    <https://place-hold.it/1000x1000?text=Technique%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%208Image1> .

    <https://place-hold.it/75x75?text=Technique%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%208Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:98> .
}

ns1:f0b38afadf3557714df68e0caf4185dbe32207cff64c52bfcd06434d7100d5c0 {
    <https://place-hold.it/1000x1000?text=Extent%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:16> .
}

ns1:368ab43606e6c2649445ae80b24f864ef6f60ae8ff0d51c57d4be95034c7bda2 {
    <https://place-hold.it/1000x1000?text=Language%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Language%209Image0> .

    <https://place-hold.it/75x75?text=Language%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%209Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:29> .
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

ns1:0374e337fe5250e7a25237eb80e51bc09f4f3095b54b37fed6c22293bb081feb {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:81> a cms:NamedValue ;
        dcterms:title "Named value 81" ;
        rdf:predicate dcterms:subject ;
        rdf:value "Subject 1" ;
        skos:prefLabel "Named value 81" .
}

ns1:17310b96b4f95bf4d3816e20d55ec40572266c63a8d6ec3f13f3087b5978602a {
    <https://place-hold.it/1000x1000?text=Language%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Language%205Image1> .

    <https://place-hold.it/75x75?text=Language%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%205Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:25> .
}

ns1:83e6f0076100149a867e4becfb0aa561847fd565dca1a85887ab40f7d4d2e1ef {
    <https://place-hold.it/1000x1000?text=Publisher%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%205Image0> .

    <https://place-hold.it/75x75?text=Publisher%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%205Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:55> .
}

ns1:7efe56013098b6652898806a9e811dcaffe189c82a85589f6476fd04c71330f4 {
    <http://example.com/person1> a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "1, Person" ;
        foaf:familyName "1" ;
        foaf:givenName "Person" ;
        foaf:name "Person 1" .
}

ns1:d565421b2e53c38db09c9f868f25d9e6217488dc60a0d952c0bb8df865399a1d {
    <http://creativecommons.org/licenses/nc-sa/1.0/> a cc:License,
            cms:License ;
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
}

ns1:b4c501d823e74c744525a11df43b7523b90bf7d0f50b1bf948e2d368c8f8df21 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:59> a cms:NamedValue ;
        dcterms:title "Named value 59" ;
        rdf:predicate dcterms:publisher ;
        rdf:value "Publisher 9" ;
        skos:prefLabel "Named value 59" .
}

ns1:d5c2a3ed471b537d3557fcf46be3f3ac7f8c9f59bcdb1f6141e1426fda9d21a4 {
    <https://place-hold.it/1000x1000?text=Language%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Language%201Image0> .

    <https://place-hold.it/600x600?text=Language%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%201Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:21> .
}

ns1:aa051d446c9e3e1db6628db45700c0fa9488f20e1ed6d293f9039a8a01749d23 {
    <https://place-hold.it/1000x1000?text=Material%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Material%201Image0> .

    <https://place-hold.it/75x75?text=Material%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%201Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:31> .
}

ns1:d140c063c272b5e882971c404cf398572658934a89366a7c83e195c6ec3b82b2 {
    <https://place-hold.it/1000x1000?text=FreestandingWork9Image0> foaf:thumbnail <https://place-hold.it/75x75?text=FreestandingWork9Image0> .

    <https://place-hold.it/75x75?text=FreestandingWork9Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=FreestandingWork9Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/freestandingwork9> .
}

ns1:80ed15239e9066ded24617496b595fb357aab61fbc0aa895a67d4a91fce3b03e {
    <https://place-hold.it/1000x1000?text=Source%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Source%205Image1> .

    <https://place-hold.it/600x600?text=Source%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%205Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:65> .
}

ns1:172cc3e3ad58be966ecc343081d9f3ef8000dd9b48f9706929509dd524230b5d {
    <https://place-hold.it/1000x1000?text=Spatial%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%202Image0> .

    <https://place-hold.it/75x75?text=Spatial%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%202Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:72> .
}

ns1:542bdcc4a8582e14183982a0090f01558829acdf605677523d5ea3d1a9bba290 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:86> a cms:NamedValue ;
        dcterms:title "Named value 86" ;
        rdf:predicate dcterms:subject ;
        rdf:value "Subject 6" ;
        skos:prefLabel "Named value 86" .
}

ns1:eff019e3dbe220acb219d0e597c288012fd521875a01ea041f7852fa40908f31 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:21> a cms:NamedValue ;
        dcterms:title "Named value 21" ;
        rdf:predicate dcterms:language ;
        rdf:value "Language 1" ;
        skos:prefLabel "Named value 21" .
}

ns1:db0e4bbf995e2bee9f8d038660a3d9f2ae3467ca9ea11b5198cd88f01db44fb3 {
    <http://example.com/collection1/work5Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-27"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection1Work5 opening" ;
        cms:work <http://example.com/collection1/work5> .
}

ns1:a175f530583c200380280c86f66b62374220ee20285490d620bcc338fc9af71b {
    <https://place-hold.it/1000x1000?text=Technique%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:92> .
}

ns1:7647263ce2e01589150221853e67dd990eb848112b1872cce6d367d169b17099 {
    <https://place-hold.it/1000x1000?text=Collection0Work0Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Collection0Work0Image1> .

    <https://place-hold.it/75x75?text=Collection0Work0Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work0 image 1 rights holder" ;
        dcterms:title "Collection0Work0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection0Work0Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection0/work0> .
}

ns1:f9efe264cec5bb40006f995c4e3dca8d368ddfd92a4011d7ccf89ccd07bf2533 {
    <https://place-hold.it/1000x1000?text=Language%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Language%205Image0> .

    <https://place-hold.it/600x600?text=Language%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%205Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:25> .
}

ns1:72ae8f2ec89af0d0b4bc0b8c77d3d4293ccaba3b5f9808794cb65d8c1dac8fb0 {
    <https://place-hold.it/1000x1000?text=Spatial%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:78> .
}

ns1:f35ad22ea8fec516ba2394c708fa232a4a524392c6f4522c23c11f02f93e5cdc {
    <https://place-hold.it/1000x1000?text=Subject%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%204Image1> .

    <https://place-hold.it/600x600?text=Subject%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%204Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:84> .
}

ns1:4e50c53ee778e45e80d500b81c6a4cd05a92ac96025882357231b1da2d49fa1a {
    <https://place-hold.it/1000x1000?text=Collection0Work1Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work1 image 1 rights holder" ;
        dcterms:title "Collection0Work1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection0/work1> .
}

ns1:361c90674f656c3a35ef39dafbd9710495f5de3d232d8b000b5113792ee21fbf {
    <https://place-hold.it/1000x1000?text=Technique%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%203Image1> .

    <https://place-hold.it/600x600?text=Technique%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%203Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:93> .
}

ns1:8d5e949fde3ed6f857a26e517f2862747b2aa2bc261e92056ee24a3046b50ed0 {
    <https://place-hold.it/1000x1000?text=Type%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:103> .
}

ns1:da85e6c7c4bee25b6e614ae3f3faee1d01f9708a26d40635bb25ba1148aee00b {
    <https://place-hold.it/1000x1000?text=Extent%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:18> .
}

ns1:4cf9c4bc614a5d4ed695eb0a5fb19040f78921b7b6ec90194b6a675c6f5985c9 {
    <https://place-hold.it/1000x1000?text=Technique%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:96> .
}

ns1:8d3d1dc2f22051ac66e69e4a27b4206d904c532963b449744b35d9239df91fec {
    <https://place-hold.it/1000x1000?text=Source%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Source%207Image0> .

    <https://place-hold.it/75x75?text=Source%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%207Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:67> .
}

ns1:42506f30db01d482cc498b2736a8ac0ae9d74798987295116e5f29e628c1c71f {
    <https://place-hold.it/1000x1000?text=Subject%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%208Image1> .

    <https://place-hold.it/600x600?text=Subject%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%208Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:88> .
}

ns1:924517ac3ca1720f73490a2fe04fbb101e400faf9a0bfdc654d46754bec56baa {
    <https://place-hold.it/1000x1000?text=Cultural%20context%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:0> .
}

ns1:3acf8cd9a539aca51a647066a88871774214d48685ea3539d86b09426da741e2 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%200Image0> .

    <https://place-hold.it/75x75?text=Cultural%20context%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%200Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:0> .
}

ns1:5f185b315366134cec6e6940095d9d24190dd216c1bed222ab219a4c9a1d8924 {
    <https://place-hold.it/1000x1000?text=Technique%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%200Image1> .

    <https://place-hold.it/600x600?text=Technique%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%200Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:90> .
}

ns1:bdbceb05aafa6817ad7d59112d2762a958be0f5e5754aab864a32d145952fbc2 {
    <https://place-hold.it/1000x1000?text=Subject%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%207Image0> .

    <https://place-hold.it/600x600?text=Subject%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%207Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:87> .
}

ns1:ed274eed1d7c51ea398cb478a7aeb19406756b666c349118b9972a66a2420ae5 {
    <https://place-hold.it/1000x1000?text=Subject%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%206Image1> .

    <https://place-hold.it/600x600?text=Subject%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%206Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:86> .
}

ns1:9e3264065a4f9444219e3b5612a0713c60a8124b7516091ff5445f98861359e4 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%209Image1> .

    <https://place-hold.it/75x75?text=Cultural%20context%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%209Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:9> .
}

ns1:aadcc3959695b1f8a53c734e77e6b72d9916086bb15835bba457c0a6a1456f39 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:53> a cms:NamedValue ;
        dcterms:title "Named value 53" ;
        rdf:predicate dcterms:publisher ;
        rdf:value "Publisher 3" ;
        skos:prefLabel "Named value 53" .
}

ns1:422e6bf0a60dd762cc7144db5b8998897f09542c204cd055591e8df8c986b579 {
    <http://creativecommons.org/licenses/sa/1.0/> a cc:License,
            cms:License ;
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
}

ns1:3f63e199b2d8b1f9607c818d68cebad105c1692d717ee6d9ed6a8d4dfdc42d9e {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:105> a cms:NamedValue ;
        dcterms:title "Named value 105" ;
        rdf:predicate dcterms:type ;
        rdf:value "Type 5" ;
        skos:prefLabel "Named value 105" .
}

ns1:15a4bc50fa8949e168f7b6b9234592d91b2a0cf2aacbd472f0c00aff6c8ab9bd {
    <https://place-hold.it/1000x1000?text=Type%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:106> .
}

ns1:e0b1a656f6f07d169c23caca9427bf657de0606832cd7705630b798bd2bbdcdb {
    <https://place-hold.it/1000x1000?text=Medium%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%205Image0> .

    <https://place-hold.it/600x600?text=Medium%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%205Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:45> .
}

ns1:736ca44d1b737559f0bdbcd281e94623e00f3792fa85db5094f70f501fb6abcb {
    <https://place-hold.it/1000x1000?text=Material%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Material%200Image0> .

    <https://place-hold.it/600x600?text=Material%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%200Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:30> .
}

ns1:a5dd29e097996dd64836ed02f1e789e23a2c6475bc45d6a6105fb897167c3d43 {
    <https://place-hold.it/1000x1000?text=FreestandingWork8Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/freestandingwork8> .
}

ns1:401bc982b11ab10e1247219c98dd2f049ee69085c0fef80a1d9a52a594c6e0c8 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:23> a cms:NamedValue ;
        dcterms:title "Named value 23" ;
        rdf:predicate dcterms:language ;
        rdf:value "Language 3" ;
        skos:prefLabel "Named value 23" .
}

ns1:d6574ce85166725d3ab1c85b1c3ca8401880ea28992a481809932849ab3c7575 {
    <http://example.com/collection0/work2Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Collection0Work2 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:date "2021-12-30"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection0Work2 opening" ;
        cms:work <http://example.com/collection0/work2> .
}

ns1:531c9e704815de96e2a1947661298c5e553482cfacd6ad469e2f8c04b0962cf0 {
    <https://place-hold.it/1000x1000?text=Type%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Type%203Image1> .

    <https://place-hold.it/600x600?text=Type%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%203Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:103> .
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

ns1:4b7222f2085210a7c64163837243d559df05e5ad4db5cc8c3e9fb8621921c35d {
    <https://place-hold.it/1000x1000?text=Spatial%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:77> .
}

ns1:e3ae06058e30c09fa9fb458d2aed4a21e4a7c885fdc994cead11ada71431f808 {
    <https://place-hold.it/1000x1000?text=Source%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:64> .
}

ns1:4e22679a0070bea8867a78d01993229c4da7727bcd43099073c5996eaed07aa3 {
    <https://place-hold.it/1000x1000?text=FreestandingWork11Image1> foaf:thumbnail <https://place-hold.it/75x75?text=FreestandingWork11Image1> .

    <https://place-hold.it/75x75?text=FreestandingWork11Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=FreestandingWork11Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/freestandingwork11> .
}

ns1:0311c6f235ae550be8247c2d053e168186789e216c11cf7ce70b4ee13c15085d {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:26> a cms:NamedValue ;
        dcterms:title "Named value 26" ;
        rdf:predicate dcterms:language ;
        rdf:value "Language 6" ;
        skos:prefLabel "Named value 26" .
}

ns1:4b0b0cbaf430d2823120210ac1bb15ea74a7bcc5a4d87aa03d3439647c25a306 {
    <https://place-hold.it/1000x1000?text=Source%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:62> .
}

ns1:05b5663e3ee48caf498f9d3b70cdda78948a9727a86050ccd093daf8dfaf91df {
    <https://place-hold.it/1000x1000?text=Material%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Material%203Image0> .

    <https://place-hold.it/75x75?text=Material%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%203Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:33> .
}

ns1:f6e937b4a7bf52d4761cef9269475f4c265256d6de9fdf7b2fdb455f75dba4f0 {
    <https://place-hold.it/1000x1000?text=Type%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:104> .
}

ns1:42d72a7b8b10a1f114e7a9d52d1ce2de46da9d2bc69f03681c48cf745f1f2712 {
    <https://place-hold.it/1000x1000?text=Collection0Work2Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Collection0Work2Image1> .

    <https://place-hold.it/600x600?text=Collection0Work2Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work2 image 1 rights holder" ;
        dcterms:title "Collection0Work2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection0Work2Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection0/work2> .
}

ns1:5420620a55ec31e7f7273bb0afa2facef98e1968a03efa97f019ee7043ba5dc5 {
    <https://place-hold.it/1000x1000?text=Material%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:35> .
}

ns1:f1ce4c4b3db442332329bd4b4450d2dbc06c7f0a7d29c39123c2716065a1b948 {
    <https://place-hold.it/1000x1000?text=Source%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Source%206Image1> .

    <https://place-hold.it/600x600?text=Source%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%206Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:66> .
}

ns1:bfbf003aafc2858b802119dbb5d8247ba964dae29a612b9a4783ccd9a893bd5b {
    <https://place-hold.it/1000x1000?text=Publisher%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:51> .
}

ns1:634b83a8b502f8ae6d5d5278be42b33311fdcd698e594e4b036e3222d7c95bf1 {
    <https://place-hold.it/1000x1000?text=Language%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:26> .
}

ns1:53b194856830466a99378807e540756cd85081a8510b4c762f7a0be276f40594 {
    <https://place-hold.it/1000x1000?text=Publisher%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%203Image1> .

    <https://place-hold.it/600x600?text=Publisher%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%203Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:53> .
}

ns1:ade12c4f383b58fe943a26247b1c8e1b5f8a36454d7d9ab75440507f8f0085ab {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:96> a cms:NamedValue ;
        dcterms:title "Named value 96" ;
        rdf:predicate vra:technique ;
        rdf:value "Technique 6" ;
        skos:prefLabel "Named value 96" .
}

ns1:a6447b6bf1a14f33367b72c63500cdce623255ae09cbd9bbb0789518c6d8be1e {
    <https://place-hold.it/1000x1000?text=Technique%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:97> .
}

ns1:7675c5f0eb0651ab7d2bdb1806097a75d861f9cc9194e2bf4af9dd6a36521c2b {
    <https://place-hold.it/1000x1000?text=Extent%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%201Image0> .

    <https://place-hold.it/75x75?text=Extent%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%201Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:11> .
}

ns1:801b200a91a09aadf21f7725f772063c308db70f1d686c448604cd84ccdb6286 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:32> a cms:NamedValue ;
        dcterms:title "Named value 32" ;
        rdf:predicate vra:material ;
        rdf:value "Material 2" ;
        skos:prefLabel "Named value 32" .
}

ns1:800b143398ea8848e3dff625bf295de4f21a73282dada2f295f29f888095b340 {
    <https://place-hold.it/1000x1000?text=Material%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Material%206Image1> .

    <https://place-hold.it/600x600?text=Material%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%206Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:36> .
}

ns1:ac11930a756ffb9eb8e1c625bc64cf625fe7bca575e77f85cd72f516f9591f02 {
    <https://place-hold.it/1000x1000?text=Subject%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%205Image1> .

    <https://place-hold.it/600x600?text=Subject%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%205Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:85> .
}

ns1:21edf0ef339ccfedd8d03fc3bdf98b4fc5bd240bd634a27c8fddb139b0d58123 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:34> a cms:NamedValue ;
        dcterms:title "Named value 34" ;
        rdf:predicate vra:material ;
        rdf:value "Material 4" ;
        skos:prefLabel "Named value 34" .
}

ns1:ad3752483695f6465bfdc25e35c523b3ad4b4fdf1c64ab2457bf6ee9cce3ddcd {
    <https://place-hold.it/1000x1000?text=Cultural%20context%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%203Image1> .

    <https://place-hold.it/75x75?text=Cultural%20context%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%203Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:3> .
}

ns1:5c84f9e292c61751901f8cf12e0afe3b06e2e7a84013a982e27a319021fcde28 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%200Image1> .

    <https://place-hold.it/75x75?text=Cultural%20context%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%200Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:0> .
}

ns1:0b38142b2a635a9d0da3fab8c3554c43634f9db547e514777ea01279005e4c22 {
    <https://place-hold.it/1000x1000?text=Technique%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%205Image0> .

    <https://place-hold.it/75x75?text=Technique%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%205Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:95> .
}

ns1:3220e2ecce17a9fc383a7e2822fbe8cbb8024be5aff8d966f5e4ae3ca8f2cf8e {
    <https://place-hold.it/1000x1000?text=Extent%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%209Image1> .

    <https://place-hold.it/600x600?text=Extent%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%209Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:19> .
}

ns1:2d3d2d1b68a0961d9f0f1c20d2b10c13383dd1c79493702945d5605669a2a357 {
    <https://place-hold.it/1000x1000?text=Collection0Work0Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Collection0Work0Image1> .

    <https://place-hold.it/600x600?text=Collection0Work0Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work0 image 1 rights holder" ;
        dcterms:title "Collection0Work0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection0Work0Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection0/work0> .
}

ns1:4d8121a24397bf9aadd02e7f2a753b1f45cd2cbd01d9c1a8bb795571dfd01b30 {
    <https://place-hold.it/1000x1000?text=Spatial%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:75> .
}

ns1:36323d07ff088dae3907bff078ee0889ce4bd6a5187d69619b74f5b2763bdf41 {
    <https://place-hold.it/1000x1000?text=Spatial%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%200Image1> .

    <https://place-hold.it/75x75?text=Spatial%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%200Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:70> .
}

ns1:ee4f3fd62ce9eeede875cf32e6c4d8effe42cab8118078c1c73ade99a10babb5 {
    <https://place-hold.it/1000x1000?text=Medium%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%204Image1> .

    <https://place-hold.it/75x75?text=Medium%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%204Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:44> .
}

ns1:be7d09b84847d96b55d5818990384e5aadc3cc45248fbf6ac78bbcfacfa80e36 {
    <http://creativecommons.org/licenses/by-nc-sa/3.0/> a cc:License,
            cms:License ;
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
}

ns1:669ffbe5305264f402b814faabd1269a4363cf5e2cdc340d9e516ade5dc54150 {
    <https://place-hold.it/1000x1000?text=Spatial%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%208Image0> .

    <https://place-hold.it/75x75?text=Spatial%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%208Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:78> .
}

ns1:ca3e7717039696c71c70c3d5ef1bc5d63ef91b98f091132f004c1bb39994a311 {
    <https://place-hold.it/1000x1000?text=Collection1Work5Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Collection1Work5Image0> .

    <https://place-hold.it/75x75?text=Collection1Work5Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work5 image 0 rights holder" ;
        dcterms:title "Collection1Work5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection1Work5Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection1/work5> .
}

ns1:08e6679c6bbdb6e792261d61ef100eb65db6f4f304b2e7aa93422edefd542dcb {
    <https://place-hold.it/1000x1000?text=FreestandingWork9Image1> foaf:thumbnail <https://place-hold.it/75x75?text=FreestandingWork9Image1> .

    <https://place-hold.it/75x75?text=FreestandingWork9Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=FreestandingWork9Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/freestandingwork9> .
}

ns1:84c28692aefd15e8e75b4385e5322424a09f38c7ae6ac30e4827b325ed648713 {
    <https://place-hold.it/1000x1000?text=Medium%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:41> .
}

ns1:9eb332ade5cb47d254904e43fa032eb99e797e12debcf4066ea89c7cdcf2ab55 {
    <https://place-hold.it/1000x1000?text=Source%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Source%207Image1> .

    <https://place-hold.it/75x75?text=Source%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%207Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:67> .
}

ns1:3dc5e6eb0765b42a1a6e719813eb2be0b5635f12abbc7959825300fc9db20265 {
    <https://place-hold.it/1000x1000?text=FreestandingWork8Image0> foaf:thumbnail <https://place-hold.it/600x600?text=FreestandingWork8Image0> .

    <https://place-hold.it/600x600?text=FreestandingWork8Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=FreestandingWork8Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/freestandingwork8> .
}

ns1:6392fb8ef176d307f52bdaa3a4df56e4fee7345be089a632cfcb7ea2fb326a1e {
    <https://place-hold.it/1000x1000?text=Language%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:23> .
}

ns1:e095a30d2f6f3ca3e5b4933968329090f37116237cccad96a552afc3fbc83028 {
    <https://place-hold.it/1000x1000?text=Type%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:108> .
}

ns1:9b8e8824b71f94b22086b1f68c2b4a104c59bbb8e37370f7e19cf0ffb9575783 {
    <https://place-hold.it/1000x1000?text=Collection0Work0Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Collection0Work0Image0> .

    <https://place-hold.it/75x75?text=Collection0Work0Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work0 image 0 rights holder" ;
        dcterms:title "Collection0Work0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection0Work0Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection0/work0> .
}

ns1:3645d93a56b73f82d083424d332208385ce0a7230a3983817fded5843316bc29 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:62> a cms:NamedValue ;
        dcterms:title "Named value 62" ;
        rdf:predicate dcterms:source ;
        rdf:value "Source 2" ;
        skos:prefLabel "Named value 62" .
}

ns1:477b246873a337dd60aeef1f17468aaacd674cf397ca3ed64e67b2bfb2cf8d1a {
    <https://place-hold.it/1000x1000?text=Subject%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:81> .
}

ns1:c46716352397996d0fe2bacd5427bb8beac4cade78cd9ee24c85303a67bea2b1 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:92> a cms:NamedValue ;
        dcterms:title "Named value 92" ;
        rdf:predicate vra:technique ;
        rdf:value "Technique 2" ;
        skos:prefLabel "Named value 92" .
}

ns1:ff2b5690f84b76c098150a958038d981d74201e91047a4c66533c8a03f005620 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%203Image0> .

    <https://place-hold.it/600x600?text=Cultural%20context%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%203Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:3> .
}

ns1:019844f739bc36c6e72facfc1995d27883afc4709d1cebb804d0b3b9dabb7c3c {
    <https://place-hold.it/1000x1000?text=Type%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Type%203Image0> .

    <https://place-hold.it/600x600?text=Type%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%203Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:103> .
}

ns1:1fdfc0ab260fcc2a9498eee4e361afeb2643006ee103cebfdae178bd30470121 {
    <http://example.com/freestandingwork8Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "FreestandingWork8 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:contributor <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---24"^^xsd:gDay ;
                time:month "--12"^^xsd:gMonth ;
                time:year "2021"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "FreestandingWork8 creation" ;
        cms:work <http://example.com/freestandingwork8> .
}

ns1:d8689dac3b57ade40c55e5d078356e0cd412bf486ecdd239ca7fe812212ca377 {
    <https://place-hold.it/1000x1000?text=Technique%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%202Image0> .

    <https://place-hold.it/600x600?text=Technique%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%202Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:92> .
}

ns1:7c09a65d9c1dcf5160555eccbaf4fdbf66cd528ca8d46a374b13db04449c2ea2 {
    <https://place-hold.it/1000x1000?text=Spatial%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%209Image0> .

    <https://place-hold.it/75x75?text=Spatial%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%209Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:79> .
}

ns1:9c48d13a72cda1668494710e2d5fd070cfc13768e94fb1045507b44497870cd4 {
    <https://place-hold.it/1000x1000?text=Spatial%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%208Image1> .

    <https://place-hold.it/75x75?text=Spatial%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%208Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:78> .
}

ns1:a7afdf52f6cbfc3336b583f5212f79c8dea76342e4e55bf8c186e5cf544053ed {
    <https://place-hold.it/1000x1000?text=Technique%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%208Image0> .

    <https://place-hold.it/75x75?text=Technique%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%208Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:98> .
}

ns1:87590570de4b6f2dc34f5a4ef96e963686e9b4cb6e5584695a8117d5b1192398 {
    <https://place-hold.it/1000x1000?text=Subject%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%202Image0> .

    <https://place-hold.it/600x600?text=Subject%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%202Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:82> .
}

ns1:1774b9c1d8ebce02025db639eaf79ddf50f60cc5ffd0d8366c57d41bcbb12a8a {
    <https://place-hold.it/1000x1000?text=Medium%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%202Image1> .

    <https://place-hold.it/75x75?text=Medium%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%202Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:42> .
}

ns1:4059f508a4d2bf3fd04186ea37ce16854bc095a3f35333e956ff138589d25a44 {
    <https://place-hold.it/1000x1000?text=Type%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:102> .
}

ns1:89488fb5b1c4e6e0b9e1f489d0bf4c7f777a7a89228e9b8729aa544f38eb8dae {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:37> a cms:NamedValue ;
        dcterms:title "Named value 37" ;
        rdf:predicate vra:material ;
        rdf:value "Material 7" ;
        skos:prefLabel "Named value 37" .
}

ns1:69896a827c3a324b58fb448ea5fced76ffa0bbd524f0eb7f117650b37473ab4f {
    <https://place-hold.it/1000x1000?text=Cultural%20context%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:5> .
}

ns1:2780bb9db4c1f17584133bff7994f84e26adbe9b0950f57874b119a7ad3f6cca {
    <https://place-hold.it/1000x1000?text=Source%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Source%200Image0> .

    <https://place-hold.it/600x600?text=Source%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%200Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:60> .
}

ns1:5c439e9b72ba2c07407feb1f8f26ab5a6e2c3f654bd0ed95e1d6a39271cd2d57 {
    <https://place-hold.it/1000x1000?text=Collection0Work1Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Collection0Work1Image0> .

    <https://place-hold.it/75x75?text=Collection0Work1Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work1 image 0 rights holder" ;
        dcterms:title "Collection0Work1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection0Work1Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection0/work1> .
}

ns1:71073ee6441ea0c9e06e01188c42246330561bbad8211666340caea251baf581 {
    <https://place-hold.it/1000x1000?text=Publisher%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%208Image1> .

    <https://place-hold.it/75x75?text=Publisher%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%208Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:58> .
}

ns1:5e50bc44df477dd1302610e816fdd0fd79d959b1b86068c6df72574f789e5cbf {
    <https://place-hold.it/1000x1000?text=Cultural%20context%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%203Image0> .

    <https://place-hold.it/75x75?text=Cultural%20context%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%203Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:3> .
}

ns1:431e7107ad4f90bce983a5837d79551ece601306ef3156abb34336de071d1da7 {
    <http://creativecommons.org/licenses/nc-sampling+/1.0/> a cc:License,
            cms:License ;
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
}

ns1:c0dd9176dbb502f042e828da5b68408950a9c9625d76f19fc803b15adba1c7b0 {
    <https://place-hold.it/1000x1000?text=Type%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:100> .
}

ns1:2b6a1021267f4df8efb092e002841aba4a728acf2cf24aca3d8f4c8209081fe7 {
    <https://place-hold.it/1000x1000?text=Extent%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%203Image0> .

    <https://place-hold.it/75x75?text=Extent%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%203Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:13> .
}

ns1:64e494cc3441b1c17fac669c3a89c734e502f464e29314ef0b1df02e8591ec08 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:42> a cms:NamedValue ;
        dcterms:title "Named value 42" ;
        rdf:predicate dcterms:medium ;
        rdf:value "Medium 2" ;
        skos:prefLabel "Named value 42" .
}

ns1:64ef0a752ae1934b13d5ce333bd7c35f392b3db097e8f2dabf78a5ec75ab6953 {
    <https://place-hold.it/1000x1000?text=Material%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Material%206Image1> .

    <https://place-hold.it/75x75?text=Material%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%206Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:36> .
}

ns1:4dd44014f1002e40989a35eddf8036b251c9aa87b7f47b8f7287a48d0bbba068 {
    <https://place-hold.it/1000x1000?text=Source%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Source%207Image0> .

    <https://place-hold.it/600x600?text=Source%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%207Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:67> .
}

ns1:e6ddcd9ccf2ed1d7218eafa662a7ea079efda643bd8c4c84817a2bf3524fb2a4 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%204Image0> .

    <https://place-hold.it/75x75?text=Cultural%20context%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%204Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:4> .
}

ns1:c3cf0fb1ffd77d2e0f2e626dd8396718ee2a398ed9cdda37bca106c01dc6bd96 {
    <https://place-hold.it/1000x1000?text=Subject%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%203Image1> .

    <https://place-hold.it/75x75?text=Subject%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%203Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:83> .
}

ns1:8eab10301397e98f0b207d3e890be10cd713ab41680c2e6b4dd40333ae3ae334 {
    <http://creativecommons.org/licenses/by/2.5/> a cc:License,
            cms:License ;
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
}

ns1:20fec1247d568e70c76c07d89af11b9e13c6ade4f63e26218ac2f08aff8677d3 {
    <https://place-hold.it/1000x1000?text=Material%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Material%204Image1> .

    <https://place-hold.it/600x600?text=Material%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%204Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:34> .
}

ns1:4800cb76f003a83768eb188493e0833ceaba2834e8a77f7bad181c555325dc6c {
    <https://place-hold.it/1000x1000?text=Publisher%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:56> .
}

ns1:8bd0edd73c39e5594a60059c4ff507ac9bae4329280111697c496fd7c69cdfed {
    <https://place-hold.it/1000x1000?text=Medium%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:47> .
}

ns1:74e3a097ec8d94f9a547c5085c4e6c34de4c60b4f9c3a51c98f89d46113fa683 {
    <https://place-hold.it/1000x1000?text=Publisher%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%208Image0> .

    <https://place-hold.it/600x600?text=Publisher%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%208Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:58> .
}

ns1:3ea0afc3876c7f52f870ae8b265a76964dbac6fffc1a840875116f496adfd49b {
    <https://place-hold.it/1000x1000?text=Collection1Work4Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work4 image 0 rights holder" ;
        dcterms:title "Collection1Work4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection1/work4> .
}

ns1:c8179a39fda2abff370eb07b02147e5dae8b403b3afba31c45072c6cb760fe87 {
    <https://place-hold.it/1000x1000?text=Material%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:31> .
}

ns1:e08644050caa75c195316cba555c14a44cb5280f693ba3adb78b441861a86de3 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:19> a cms:NamedValue ;
        dcterms:title "Named value 19" ;
        rdf:predicate dcterms:extent ;
        rdf:value "Extent 9" ;
        skos:prefLabel "Named value 19" .
}

ns1:0ec9fab2cee4a14c23858890f0cf5ed603e6df2b8bc06be11386504a3d522c3d {
    <http://creativecommons.org/licenses/by-sa/1.0/> a cc:License,
            cms:License ;
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
}

ns1:309c78d1e407272d67b857b529c2ba067dfd2400fee25074038428f6c659547f {
    <https://place-hold.it/1000x1000?text=Language%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Language%207Image0> .

    <https://place-hold.it/600x600?text=Language%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%207Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:27> .
}

ns1:ba6217284b7c756eb8a5b4a350ba5efdaeacab95fbd7eaeb7d2827ecadc0bc92 {
    <http://example.com/collection0> a cms:Collection ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Collection0 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:title "Collection0" .
}

ns1:dde774ecb11e048dfe01b2de6d1dd48a8f46cf0ec12fd4a1cb373e36f6b3ec9c {
    <http://creativecommons.org/licenses/by-nd-nc/1.0/> a cc:License,
            cms:License ;
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
}

ns1:8a6ab7f12417269d72a027e604a8c89f278a6173f71e22ba66c4acf6af2853c0 {
    <https://place-hold.it/1000x1000?text=Material%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:33> .
}

ns1:d27ac73a883f4f7a6136800f6e98605cfa5127740e25057612a7f5c29d963f6a {
    <https://place-hold.it/1000x1000?text=Subject%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%200Image1> .

    <https://place-hold.it/75x75?text=Subject%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%200Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:80> .
}

ns1:260a97815e7198cd5f93885b125e35b78f51c1d243e3efb7ab58c77e9a597676 {
    <https://place-hold.it/1000x1000?text=Medium%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:45> .
}

ns1:1848378c5c18de76255c124c685a015f44f13736009e1b29c11d7853ca5cb7d0 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:11> a cms:NamedValue ;
        dcterms:title "Named value 11" ;
        rdf:predicate dcterms:extent ;
        rdf:value "Extent 1" ;
        skos:prefLabel "Named value 11" .
}

ns1:b1514bc60465bd5af4c299de9a9deff864bff48067d05d9edb2dca30598a3e96 {
    <https://place-hold.it/1000x1000?text=Medium%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%209Image0> .

    <https://place-hold.it/600x600?text=Medium%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%209Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:49> .
}

ns1:daa233699983bad5c45e3a81b51e46d9509836e5412c04ee612182d91e8ab8a4 {
    <https://place-hold.it/1000x1000?text=Type%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Type%203Image1> .

    <https://place-hold.it/75x75?text=Type%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%203Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:103> .
}

ns1:3222211e34e73c6c91b8c071f35d5c1fe49fbbc92e1091f0dfec5ab0dd775c44 {
    <http://creativecommons.org/licenses/by-nc/1.0/> a cc:License,
            cms:License ;
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
}

ns1:25bfd77fa698ba3e9f4cf50de58cfdda7c9ea38bf8a3950590c38ae39f3e81cb {
    <https://place-hold.it/1000x1000?text=Subject%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%206Image1> .

    <https://place-hold.it/75x75?text=Subject%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%206Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:86> .
}

ns1:4d5cd078c5b0b24e237b123a737b7efa64e7717659b5618bbb31bb37bd838f4b {
    <https://place-hold.it/1000x1000?text=Extent%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%205Image1> .

    <https://place-hold.it/75x75?text=Extent%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%205Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:15> .
}

ns1:fbe40fe49bb246bbdd0ea86964215564fcc58d262a080c17bed2ad7db3cc1bd7 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:30> a cms:NamedValue ;
        dcterms:title "Named value 30" ;
        rdf:predicate vra:material ;
        rdf:value "Material 0" ;
        skos:prefLabel "Named value 30" .
}

ns1:95c8b6c760ecba5e344ac7521098e3d523e517f8c1b1001983115f0e5f4d2585 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:8> a cms:NamedValue ;
        dcterms:title "Named value 8" ;
        rdf:predicate vra:culturalContext ;
        rdf:value "Cultural context 8" ;
        skos:prefLabel "Named value 8" .
}

ns1:fbb4c81116d32584ad468cbe11051501055c4af70da98a295e8200b0b050e466 {
    <https://place-hold.it/1000x1000?text=Spatial%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%205Image0> .

    <https://place-hold.it/600x600?text=Spatial%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%205Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:75> .
}

ns1:aa30c37200504fda14be2aebad5997a6d4b5ee1d69bc8fe12254f5f05b539361 {
    <https://place-hold.it/1000x1000?text=Type%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:107> .
}

ns1:b800391be47c8ee8c561c0f50a91caebd66a47c461b9af8ff3c7c904440333e6 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:49> a cms:NamedValue ;
        dcterms:title "Named value 49" ;
        rdf:predicate dcterms:medium ;
        rdf:value "Medium 9" ;
        skos:prefLabel "Named value 49" .
}

ns1:cd46f1ae14c3cb266027b086b1dffcb8a7cae4570aa93b3d82af939af76d1d12 {
    <https://place-hold.it/1000x1000?text=Extent%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%205Image0> .

    <https://place-hold.it/600x600?text=Extent%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%205Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:15> .
}

ns1:a06df2fad09e54ea0e7e5521dc79add3ed56627ce04670ee81bcbac62c8ff88d {
    <https://place-hold.it/1000x1000?text=Medium%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%202Image0> .

    <https://place-hold.it/75x75?text=Medium%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%202Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:42> .
}

ns1:ec5cc6f428f427d276ed23a8c3292ae6e3369b9b34d3c541ca2aa0eecabef542 {
    <https://place-hold.it/1000x1000?text=Source%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Source%200Image0> .

    <https://place-hold.it/75x75?text=Source%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%200Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:60> .
}

ns1:4281fe2dc9053745d138f31431ee11358e9af929150b2097cfb2250168a1676d {
    <https://place-hold.it/1000x1000?text=Source%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Source%203Image0> .

    <https://place-hold.it/600x600?text=Source%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%203Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:63> .
}

ns1:d516dfd07fb4e6e68cb62504e5e1333f90e11260abb366d25e8950f770b7c936 {
    <http://example.com/freestandingwork10Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "FreestandingWork10 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---22"^^xsd:gDay ;
                time:month "--12"^^xsd:gMonth ;
                time:year "2021"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "FreestandingWork10 creation" ;
        cms:work <http://example.com/freestandingwork10> .
}

ns1:19175c4713f2de4783595acdc8d17945b30968c7d30722be81597851be723321 {
    <https://place-hold.it/1000x1000?text=Publisher%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:50> .
}

ns1:6d83e8f1a3c03732d6030da010952bc2ff5748d22df9647f47bea0451f1e7d01 {
    <http://example.com/collection1/work4Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Collection1Work4 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection1Work4 closing" ;
        cms:work <http://example.com/collection1/work4> .
}

ns1:68a25d45dcf264550027ca0d1d64f6b656cf2c68b50e871572880513a6c0ad3c {
    <https://place-hold.it/1000x1000?text=Language%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Language%209Image1> .

    <https://place-hold.it/600x600?text=Language%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%209Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:29> .
}

ns1:1b40bb540d38ca30662eac5f9ba484b5e7acf161ef648a9a25a30cf3dbc3ac2e {
    <https://place-hold.it/1000x1000?text=Material%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:30> .
}

ns1:2612491c221da683ef63c70c255d71ac1b3376d1fce406e25cd9996723ebe971 {
    <http://example.com/person2> a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "2, Person" ;
        foaf:familyName "2" ;
        foaf:givenName "Person" ;
        foaf:name "Person 2" ;
        foaf:page <http://example.com/person2page> .
}

ns1:c567d0e39554ac53bfb3051cea200b59245d2996a5e4c9c9b749bdb840679924 {
    <https://place-hold.it/1000x1000?text=Subject%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%204Image0> .

    <https://place-hold.it/75x75?text=Subject%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%204Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:84> .
}

ns1:c64bd6c5cc9b23b7b768de5412fad4d30445b85f35431996c010c7c812a14830 {
    <https://place-hold.it/1000x1000?text=Collection0Work3Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Collection0Work3Image0> .

    <https://place-hold.it/75x75?text=Collection0Work3Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work3 image 0 rights holder" ;
        dcterms:title "Collection0Work3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection0Work3Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection0/work3> .
}

ns1:511a6af726c10794781d384de76b30e7afe3c141d30b4f21eb8378c8887e9462 {
    <https://place-hold.it/1000x1000?text=Subject%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%203Image1> .

    <https://place-hold.it/600x600?text=Subject%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%203Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:83> .
}

ns1:a9476ce327db8bb76f3f23bc4722d9f044b93d2d1318694017c423ee99a39207 {
    <https://place-hold.it/1000x1000?text=Medium%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:43> .
}

ns1:8422ec324d466012924645e5971227455d52a2b5ef34f5615ded0dadc56abcb6 {
    <https://place-hold.it/1000x1000?text=Medium%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:42> .
}

ns1:adcb5e5de832a7b54252ac237981548dfc04708ae6b45d9acd3e23306299fd33 {
    <https://place-hold.it/1000x1000?text=Publisher%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:55> .
}

ns1:933cf83ef5aebf51f15d5d7e2c4f37ca2bfac5d0a6eee89d3f812359059ef3a4 {
    <https://place-hold.it/1000x1000?text=Source%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Source%206Image0> .

    <https://place-hold.it/75x75?text=Source%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%206Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:66> .
}

ns1:4a5848a52447b8e15e37ae18eff4e6074dd113cea31652eded099dfafd45cc23 {
    <https://place-hold.it/1000x1000?text=Material%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:36> .
}

ns1:2f7d63dfc41021a60698169fc2aa83cd469973778849ffd6e8d11a13766413bd {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:103> a cms:NamedValue ;
        dcterms:title "Named value 103" ;
        rdf:predicate dcterms:type ;
        rdf:value "Type 3" ;
        skos:prefLabel "Named value 103" .
}

ns1:b6a8230e9bb684fd6b041529bcf2b82c55b1e1aba9be0f038d772b99a04efe58 {
    <http://rightsstatements.org/vocab/NoC-NC/1.0/> a cms:RightsStatement ;
        dcterms:description "This Rights Statement indicates that the underlying Work is in the Public Domain, but the organization that has published the Item is contractually required to allow only non-commercial use by third parties."@en ;
        dcterms:identifier "NoC-NC" ;
        skos:definition """This Work has been digitized in a public-private partnership. As part of this partnership, the partners have agreed to limit commercial uses of this digital representation of the Work by third parties.

  You can, without permission, copy, modify, distribute, display, or perform the Item, for non-commercial uses. For any other permissible uses, please review the terms and conditions of the organization that has made the Item available."""@en ;
        skos:note "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use."@en,
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available."@en,
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you may use the material."@en ;
        skos:prefLabel "No Copyright - Non-Commercial Use Only"@en ;
        skos:scopeNote "This Rights Statement can only be used for Works that are in the Public Domain and have been digitized in a public-private partnership as part of which, the partners have agreed to limit commercial uses of this digital representation of the Work by third parties. It has been developed specifically to allow the inclusion of Works that have been digitized as part of the partnerships between European Libraries and Google, but can in theory be applied to Items that have been digitized in similar public-private partnerships."@en .
}

ns1:af7089c40b38bb363f63af9b10e31a3d9f67473f9eae63c4e0499152d352aaec {
    <https://place-hold.it/1000x1000?text=Publisher%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%201Image1> .

    <https://place-hold.it/75x75?text=Publisher%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%201Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:51> .
}

ns1:248aa874d46f70ae47ded9bbc5168996c489c59d3b092f11feb930a9fb11d22d {
    <https://place-hold.it/1000x1000?text=Publisher%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%209Image1> .

    <https://place-hold.it/600x600?text=Publisher%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%209Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:59> .
}

ns1:723e027b40282fdf29b16192055c5fff9ec0a6ec15deec1b83b8ba5174ad7ebc {
    <https://place-hold.it/1000x1000?text=Language%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Language%209Image0> .

    <https://place-hold.it/600x600?text=Language%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%209Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:29> .
}

ns1:0196b4ae5ccd28b63f9a62e574a7f801b65f76e40acf13df39f8a69089de9b69 {
    <https://place-hold.it/1000x1000?text=Spatial%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:76> .
}

ns1:2cdd61603d78cf3ae5b901842acf45e096a569a44f317676443d6f516d7c6114 {
    <https://place-hold.it/1000x1000?text=Type%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Type%205Image0> .

    <https://place-hold.it/75x75?text=Type%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%205Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:105> .
}

ns1:ae5830022afbc2866aaf34bb6a2719d69dba3971acbb285ae5938e10cc7033df {
    <https://place-hold.it/1000x1000?text=Medium%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%208Image1> .

    <https://place-hold.it/600x600?text=Medium%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%208Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:48> .
}

ns1:8d0269bd7744a6605d98f128af189f267f246f6146ca3afe8bc641eff061dec8 {
    <https://place-hold.it/1000x1000?text=Material%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Material%209Image1> .

    <https://place-hold.it/600x600?text=Material%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%209Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:39> .
}

ns1:99e01e0d178079022452b3ca5d5facbe8c259973900166aa3b8581f5cc5b8709 {
    <https://place-hold.it/1000x1000?text=Source%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Source%205Image0> .

    <https://place-hold.it/75x75?text=Source%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%205Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:65> .
}

ns1:ae43b9892a64096f5c71fbd09da5e04521c851287e81e06da245ed53fb39d65c {
    <https://place-hold.it/1000x1000?text=Extent%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%200Image0> .

    <https://place-hold.it/75x75?text=Extent%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%200Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:10> .
}

ns1:fdbf96379c5b16fba0fd22ca2e1a34da42112c4210a44c94fd2f37ae3898e79b {
    <https://place-hold.it/1000x1000?text=Source%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:66> .
}

ns1:f9ba32750c65b622e4ca49f627fed5a1b99885dc0511ceb332731e58ebdfc330 {
    <http://creativecommons.org/licenses/by/4.0/> a cc:License,
            cms:License ;
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
}

ns1:2edef32d37ab000a3738d9d98ff8fbc84c7b5392bc452c5bf83b6b08856b7e57 {
    <https://place-hold.it/1000x1000?text=Publisher%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:55> .
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

ns1:e7cfddcbf824903f7c95ecbe9198b1285e8481f61a51314bef66a4506aef48d5 {
    <https://place-hold.it/1000x1000?text=Material%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:32> .
}

ns1:9d75eb77434862de4f183b3d432c747fa51ccbc47c726c4083302bf8913f7cfb {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:16> a cms:NamedValue ;
        dcterms:title "Named value 16" ;
        rdf:predicate dcterms:extent ;
        rdf:value "Extent 6" ;
        skos:prefLabel "Named value 16" .
}

ns1:46ed24bc88ea99cad6ae4e204ab4ca4257da129948a5dfdf54f4180a4aeb152e {
    <https://place-hold.it/1000x1000?text=Spatial%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%204Image1> .

    <https://place-hold.it/75x75?text=Spatial%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%204Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:74> .
}

ns1:0683cddd948ac893747a1ebcb2c78ad0f3fad535ba06742822217fab8411dc72 {
    <https://place-hold.it/1000x1000?text=Language%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:24> .
}

ns1:c055622341e1972825d2e9869ec5b5c8f715d688dd8aaa53cae8411f4683c8e4 {
    <https://place-hold.it/1000x1000?text=Technique%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%201Image1> .

    <https://place-hold.it/75x75?text=Technique%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%201Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:91> .
}

ns1:c679cce75961fb9b016fc92f5d0d620b6f7ed8828e413b630b6b8ff4f4c2b400 {
    <https://place-hold.it/1000x1000?text=Technique%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%209Image1> .

    <https://place-hold.it/600x600?text=Technique%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%209Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:99> .
}

ns1:9c4a9ed02e52900ce6d487b9198d9f82e1e64864248534fda57ddc03620c5517 {
    <https://place-hold.it/1000x1000?text=Subject%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:86> .
}

ns1:218784b99ec88c3414e98502a03b3a009db46eb764ae6e2f638dc9199edc8728 {
    <http://example.com/collection0/work3Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-29"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection0Work3 opening" ;
        cms:work <http://example.com/collection0/work3> .
}

ns1:8ad24aebd7e9dccc9bb3b0ab0ee1f38c05b6c8d60f6b23a49eaaee9073afd44b {
    <http://example.com/collection0/work1Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---31"^^xsd:gDay ;
                time:month "--12"^^xsd:gMonth ;
                time:year "2021"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection0Work1 creation" ;
        cms:work <http://example.com/collection0/work1> .
}

ns1:6180f399bd174c8746e8987782e4b396cff015f3d91c232cca68efe011fd45fa {
    <https://place-hold.it/1000x1000?text=Subject%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%207Image0> .

    <https://place-hold.it/75x75?text=Subject%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%207Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:87> .
}

ns1:bcc9b2d7a5bfca6f2d0974987125a97b6348bd690636f41413c9d918d77fc696 {
    <http://example.com/collection0/work0Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Collection0Work0 abstract rights holder" ;
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
        dcterms:title "Collection0Work0 creation" ;
        cms:work <http://example.com/collection0/work0> .
}

ns1:e71276089ddaae19546f9728314f6c670b5ccf5b461cf6a8db08c5eea49bb54b {
    <https://place-hold.it/1000x1000?text=Collection0Work2Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Collection0Work2Image0> .

    <https://place-hold.it/75x75?text=Collection0Work2Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work2 image 0 rights holder" ;
        dcterms:title "Collection0Work2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection0Work2Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection0/work2> .
}

ns1:113ceeefbd64240b86ee1cc84577de6146aae85e8b58c74ba74e51ae33236306 {
    <https://place-hold.it/1000x1000?text=Type%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:106> .
}

ns1:93dd4693d32899e709d1412a32802880ec6b083f413663636bc961b10751017d {
    <https://place-hold.it/1000x1000?text=FreestandingWork9Image1> foaf:thumbnail <https://place-hold.it/600x600?text=FreestandingWork9Image1> .

    <https://place-hold.it/600x600?text=FreestandingWork9Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=FreestandingWork9Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/freestandingwork9> .
}

ns1:78b82b16a8a7b202155d594d9cb89ff8d4d88d08e0621a13884d6f698ad5fc86 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%207Image1> .

    <https://place-hold.it/75x75?text=Cultural%20context%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%207Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:7> .
}

ns1:880578f90e61e4084dbdf926275418ba91aaff4f9e58297d2c4632d063e69c0f {
    <https://place-hold.it/1000x1000?text=Extent%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:10> .
}

ns1:2dffb769effb22d942b4cd0a4bc43d133c4823a3695665f05003fbc8b4f76221 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:99> a cms:NamedValue ;
        dcterms:title "Named value 99" ;
        rdf:predicate vra:technique ;
        rdf:value "Technique 9" ;
        skos:prefLabel "Named value 99" .
}

ns1:c3efbab8606f8d81fe38217c541d2ed2b961d557e5f0b925b2fa3a41a1d8f964 {
    <https://place-hold.it/1000x1000?text=Publisher%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%202Image0> .

    <https://place-hold.it/75x75?text=Publisher%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%202Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:52> .
}

ns1:b5191a4020318590d517670e7a1b0e2ff9fdbfd77e4a0ce2e31d53d4511e498c {
    <https://place-hold.it/1000x1000?text=Publisher%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:50> .
}

ns1:049aa134e48501827bb5474295a728db515b7d766d8ac7f8af44d80422c3cd7e {
    <https://place-hold.it/1000x1000?text=Type%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Type%202Image0> .

    <https://place-hold.it/600x600?text=Type%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%202Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:102> .
}

ns1:c18f3febf0f24e628ed0c3ac6581a69c0b3d41804d10c6ae8797ff6e4cf4449c {
    <https://place-hold.it/1000x1000?text=Language%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Language%200Image0> .

    <https://place-hold.it/75x75?text=Language%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%200Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:20> .
}

ns1:fb78f918a4b8a42d6ef7decfb5a11f795102730bf38986587ca5c3f6e607fdd7 {
    <https://place-hold.it/1000x1000?text=Source%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:69> .
}

ns1:bcafbf7abacc1bcdbcee67de01d9c1a0a914025813bbf9fb54f7a40537b56c47 {
    <http://example.com/freestandingwork10Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "FreestandingWork10 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "FreestandingWork10 closing" ;
        cms:work <http://example.com/freestandingwork10> .
}

ns1:1a5df52e9717cad41e7aa260b996aa63a38452e5f4ac9af484ac53b3481907b4 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%208Image0> .

    <https://place-hold.it/75x75?text=Cultural%20context%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%208Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:8> .
}

ns1:868af4999fa995164e0932442bb784d11e0e8bf01a42082d746142c18544508c {
    <https://place-hold.it/1000x1000?text=Material%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:30> .
}

ns1:0ea0fb18eba2d36345ee68c6ff75c050e3d8d404af7aa6ef8db266365dec3252 {
    <https://place-hold.it/1000x1000?text=Material%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:35> .
}

ns1:7b5108e9e42867afed9dfe54e995b1d099a410534163d2eb469cabe9d4cf250b {
    <https://place-hold.it/1000x1000?text=Subject%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%204Image0> .

    <https://place-hold.it/600x600?text=Subject%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%204Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:84> .
}

ns1:24aaefe58eb4c0122d2942e7701ab3db2d3c9574d1e3d5afdd5c877aba15c255 {
    <https://place-hold.it/1000x1000?text=Language%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Language%206Image1> .

    <https://place-hold.it/600x600?text=Language%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%206Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:26> .
}

ns1:f04aecd164ea417db181e20f789fd16910b91bdea51b79c63944debbb1e26ae6 {
    <https://place-hold.it/1000x1000?text=Technique%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%208Image0> .

    <https://place-hold.it/600x600?text=Technique%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%208Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:98> .
}

ns1:7ebee97f71ff574a3a40072a9859e17a326723ea8e321e80ad8d0433d99a3d77 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:1> .
}

ns1:b7a9661310f98b14b7fd4d29e89a7fce94f0a68ed6f542b5211a9315ae354e39 {
    <https://place-hold.it/1000x1000?text=Language%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Language%203Image0> .

    <https://place-hold.it/600x600?text=Language%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%203Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:23> .
}

ns1:37721bef4b252d17ec946af7f4bff7f17159db7dfa6063a96b6e31cb8e8beb81 {
    <https://place-hold.it/1000x1000?text=Publisher%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%206Image0> .

    <https://place-hold.it/600x600?text=Publisher%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%206Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:56> .
}

ns1:d41c7141853d44593528b4ddb1356090e2c20534658a72e3085701c304b32125 {
    <https://place-hold.it/1000x1000?text=Extent%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:11> .
}

ns1:3d78589460b8c590b59611402899e9e9a3c8eaaed1d648d8e3a1f05efd199852 {
    <https://place-hold.it/1000x1000?text=Source%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:67> .
}

ns1:5b19f3024646134af9629b8bda1462577d0a918c23654a4116cc3b682a56682e {
    <https://place-hold.it/1000x1000?text=Medium%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%203Image1> .

    <https://place-hold.it/75x75?text=Medium%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%203Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:43> .
}

ns1:5dd8fbbd91d050bc9f76013a0150cfe25c146c07099313526556b435d1eadcc8 {
    <https://place-hold.it/1000x1000?text=Language%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:22> .
}

ns1:e723285c7767debf313365b10015653befcf9e4ac4d5650e5e01a73ca540cf83 {
    <https://place-hold.it/1000x1000?text=Extent%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:12> .
}

ns1:ee1802be125879b1c92f8e901e65258a57022ef6a80363146711722ccb9e39b5 {
    <https://place-hold.it/1000x1000?text=Source%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Source%203Image1> .

    <https://place-hold.it/75x75?text=Source%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%203Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:63> .
}

ns1:eb073d0938a780728a68073402798e910edb547dfc03059f117c279bc9f6c2e6 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%206Image0> .

    <https://place-hold.it/75x75?text=Cultural%20context%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%206Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:6> .
}

ns1:258c2cee97d4babe4782dc1a1632d4d5534d5a76ead0988842f41a95fc9312be {
    <https://place-hold.it/1000x1000?text=Cultural%20context%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%206Image1> .

    <https://place-hold.it/75x75?text=Cultural%20context%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%206Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:6> .
}

ns1:4e33575ce0c0481f052b70f3727f8a59c85e91eaceb44decbf6fe26efd873ba6 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:31> a cms:NamedValue ;
        dcterms:title "Named value 31" ;
        rdf:predicate vra:material ;
        rdf:value "Material 1" ;
        skos:prefLabel "Named value 31" .
}

ns1:e6b74940a0e49d4601c1d8e529c6c19821b2c8faeecaeba38a9aecc86058ec77 {
    <https://place-hold.it/1000x1000?text=Source%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:63> .
}

ns1:c28f115848f01375a7e5d0c0a8d8ddaf00e2fe9dc69ec6896890a193887971dd {
    <https://place-hold.it/1000x1000?text=Language%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Language%204Image1> .

    <https://place-hold.it/75x75?text=Language%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%204Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:24> .
}

ns1:08e68aa72a5821fbcce56b74101403d1c742baf194b8d576dab09984b857a6cd {
    <https://place-hold.it/1000x1000?text=Publisher%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%200Image1> .

    <https://place-hold.it/600x600?text=Publisher%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%200Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:50> .
}

ns1:d320f70d3a1727e3ec7b1c8b1b550a9ca50c66a27ff406c7439d99464ac663e9 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:101> a cms:NamedValue ;
        dcterms:title "Named value 101" ;
        rdf:predicate dcterms:type ;
        rdf:value "Type 1" ;
        skos:prefLabel "Named value 101" .
}

ns1:9ad8a2060191e4a4935ead4147a6b29aac6e4f0a8d2a0b69c378eade02cea03d {
    <https://place-hold.it/1000x1000?text=Cultural%20context%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%202Image1> .

    <https://place-hold.it/75x75?text=Cultural%20context%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%202Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:2> .
}

ns1:7adef132b5781156b4f78bbad4b50c11f6b109dd8a30b1d19750c15ded0cefdf {
    <https://place-hold.it/1000x1000?text=Medium%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%208Image0> .

    <https://place-hold.it/600x600?text=Medium%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%208Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:48> .
}

ns1:6db1e8f228cc97c8824748ad46dd6045f5f1dec05bf76e07b05c086a6af52a56 {
    <https://place-hold.it/1000x1000?text=Spatial%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%202Image0> .

    <https://place-hold.it/600x600?text=Spatial%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%202Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:72> .
}

ns1:863dd4be3b5ecbc349faf2e7d9ffdfabbb11c0c680e9cd2c3b1c056e37163df1 {
    <http://example.com/collection1/work4Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Collection1Work4 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:date "2021-12-28"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection1Work4 opening" ;
        cms:work <http://example.com/collection1/work4> .
}

ns1:084dd9293c9c0a7e26297a9f9cf139a868dd2994a990959e29363957a40dba7b {
    <https://place-hold.it/1000x1000?text=Collection1Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1 image 0 rights holder" ;
        dcterms:title "Collection1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection1> .
}

ns1:32e3e30abe41cd9f3fee2b5c7d824196e9667be7bb1771cee271649a8d5b1bc8 {
    <https://place-hold.it/1000x1000?text=Collection1Work7Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Collection1Work7Image1> .

    <https://place-hold.it/75x75?text=Collection1Work7Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work7 image 1 rights holder" ;
        dcterms:title "Collection1Work7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection1Work7Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection1/work7> .
}

ns1:2f12d601550bb836df25ec16a204a9eecd78a2acf285aeb52f130c1824605954 {
    <https://place-hold.it/1000x1000?text=Material%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:38> .
}

ns1:9e4cfe5136c6b24e95438d716ac3b91a3332821ef2b38a3447c457bb40fcaf07 {
    <https://place-hold.it/1000x1000?text=Source%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Source%209Image0> .

    <https://place-hold.it/600x600?text=Source%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%209Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:69> .
}

ns1:ba65a51b22e5e2b23f76bd4aec37985e5cec5988c672829d9d39e04fea9bf516 {
    <https://place-hold.it/1000x1000?text=Technique%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%207Image0> .

    <https://place-hold.it/75x75?text=Technique%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%207Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:97> .
}

ns1:69ad9f6c143447872397d6d99db1377113b204ed152a8814c63b5318b93b7551 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:73> a cms:NamedValue ;
        dcterms:title "Named value 73" ;
        rdf:predicate dcterms:spatial ;
        rdf:value "Spatial 3" ;
        skos:prefLabel "Named value 73" .
}

ns1:f6a677bc98a5d576175bd341882b44e74a6e424b0bcaf3ccba1d4391ebe90077 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%201Image0> .

    <https://place-hold.it/600x600?text=Cultural%20context%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%201Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:1> .
}

ns1:9e58208e1b279abf48516c07e1949dd1267494cb3b5fe8c41418ac7044ef0df1 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%207Image0> .

    <https://place-hold.it/75x75?text=Cultural%20context%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%207Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:7> .
}

ns1:01a32fc94051095220d20cb0c20e600766a04fb28c78857fff6f436042af841d {
    <https://place-hold.it/1000x1000?text=Collection1Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Collection1Image1> .

    <https://place-hold.it/75x75?text=Collection1Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1 image 1 rights holder" ;
        dcterms:title "Collection1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection1Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection1> .
}

ns1:b7b62551376c64377751ebf9313971e7f205f13b42c1e605f074f653f2f290b4 {
    <https://place-hold.it/1000x1000?text=Extent%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:12> .
}

ns1:edcc1e6f912c9b739900b4bf4b3a9007448974f3acdfc964124b8d76947d52b5 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:15> a cms:NamedValue ;
        dcterms:title "Named value 15" ;
        rdf:predicate dcterms:extent ;
        rdf:value "Extent 5" ;
        skos:prefLabel "Named value 15" .
}

ns1:3bbcc26d2e203312aeda0311c4e772062205d2c3735277f9594a69980a8ab148 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:18> a cms:NamedValue ;
        dcterms:title "Named value 18" ;
        rdf:predicate dcterms:extent ;
        rdf:value "Extent 8" ;
        skos:prefLabel "Named value 18" .
}

ns1:131e703b780573805594f71c0f6d4cdf4915a3eb50a6f7ecbbf99c7a5329e10e {
    <https://place-hold.it/1000x1000?text=Language%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Language%202Image1> .

    <https://place-hold.it/600x600?text=Language%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%202Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:22> .
}

ns1:55cf62ea5904207bea4cd2da8a44217d4ab7cc2da3b52dc839b185e8d99e963b {
    <https://place-hold.it/1000x1000?text=Publisher%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%209Image0> .

    <https://place-hold.it/75x75?text=Publisher%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%209Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:59> .
}

ns1:9813d49d4f59d8f7bdc755c9c9ae5755f38caff04009f112d73db3345dd4aa37 {
    <https://place-hold.it/1000x1000?text=Spatial%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%209Image1> .

    <https://place-hold.it/600x600?text=Spatial%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%209Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:79> .
}

ns1:0f8b4c7554d340007514c9e0bf02ee4700e7edf9fe2cc70e3396e3ae0cd7d675 {
    <https://place-hold.it/1000x1000?text=Extent%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%207Image1> .

    <https://place-hold.it/75x75?text=Extent%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%207Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:17> .
}

ns1:236bff90d80981abddd473efcc14331e5a2d3d766950a6e5222b42cf89dd9ee5 {
    <https://place-hold.it/1000x1000?text=Spatial%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%206Image0> .

    <https://place-hold.it/75x75?text=Spatial%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%206Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:76> .
}

ns1:e437752e5c82a24d901de03be479ca8981babf0c2eb82fc5fbd1c47948aaae4f {
    <https://place-hold.it/1000x1000?text=Source%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:61> .
}

ns1:bc60f7bbea22cc20129f1c5272c6599385df65bfb44080693977648ec62967de {
    <https://place-hold.it/1000x1000?text=Source%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:68> .
}

ns1:6b7c5aed238354b7d4d3caaf71395f50ceb8dd589864672d921b183217bdeef7 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:71> a cms:NamedValue ;
        dcterms:title "Named value 71" ;
        rdf:predicate dcterms:spatial ;
        rdf:value "Spatial 1" ;
        skos:prefLabel "Named value 71" .
}

ns1:8ba651250b4d990894ff567e38878ec436ca31c7ad406c3a21f250d93de31815 {
    <https://place-hold.it/1000x1000?text=Subject%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%201Image1> .

    <https://place-hold.it/75x75?text=Subject%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%201Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:81> .
}

ns1:25cc9f2eea7e7dda9d68cfc69b726d2551ee8d23af02e2fdfa781ad8c7c31aed {
    <https://place-hold.it/1000x1000?text=Subject%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:80> .
}

ns1:df0873c0729b53e2bdb26e990d881ae5e3f11b079c4b99c70660269d375e9fd0 {
    <https://place-hold.it/1000x1000?text=Publisher%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%207Image0> .

    <https://place-hold.it/75x75?text=Publisher%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%207Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:57> .
}

ns1:0ee605f181f21c5a7dfbd4f8af46d9b048da0d2cb0f382af73f6fb8c8ed8e8b6 {
    <https://place-hold.it/1000x1000?text=Subject%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:83> .
}

ns1:f45c4a5103767f0421da4c592260fd5ae8e8ed8eb3f12e30ef89a00b26d6dfd0 {
    <https://place-hold.it/1000x1000?text=Extent%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:14> .
}

ns1:c1eab504d3345a1a08f24955af04e9543cd7d248f9d596c7dd84289eb3f4a25f {
    <https://place-hold.it/1000x1000?text=Type%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Type%202Image1> .

    <https://place-hold.it/600x600?text=Type%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%202Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:102> .
}

ns1:fdbfc0286073eab1c873dc51f744f4850ae587dbb4f59d213f9f766ca6b61e92 {
    <https://place-hold.it/1000x1000?text=Publisher%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%205Image1> .

    <https://place-hold.it/75x75?text=Publisher%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%205Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:55> .
}

ns1:a47c57aa776934b0256e5b400cc420e4c258d2858a3db9843af18cfc393a88ff {
    <https://place-hold.it/1000x1000?text=Material%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Material%202Image1> .

    <https://place-hold.it/600x600?text=Material%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%202Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:32> .
}

ns1:cbf1b35025907cd512704a9ee538f39ca683bd7b86177d126a5f581a8b2a600e {
    <https://place-hold.it/1000x1000?text=Extent%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:19> .
}

ns1:337934a3e1a5eac721a1f74c704f111d156ccec55e86af0d0953ee37b508ee3e {
    <https://place-hold.it/1000x1000?text=Source%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Source%202Image1> .

    <https://place-hold.it/75x75?text=Source%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%202Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:62> .
}

ns1:a4280e22dd6c1cbea6d0a22c9acef7c1fc9476fc74c0841845f3c286185388d7 {
    <https://place-hold.it/1000x1000?text=FreestandingWork8Image1> foaf:thumbnail <https://place-hold.it/600x600?text=FreestandingWork8Image1> .

    <https://place-hold.it/600x600?text=FreestandingWork8Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=FreestandingWork8Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/freestandingwork8> .
}

ns1:53b5a4e3ddd89c543d5e1444f4061700823ef82a3d43d924863f735f21a59722 {
    <http://example.com/freestandingwork8Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "FreestandingWork8 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "FreestandingWork8 closing" ;
        cms:work <http://example.com/freestandingwork8> .
}

ns1:aba17e962bd7775fcc351eacd795ed319e049733b935cd4f31301fa106b352a8 {
    <https://place-hold.it/1000x1000?text=Technique%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:97> .
}

ns1:497509310a97eb4308a5fb186ea54881c62261423a85ea64417739bce53cf426 {
    <https://place-hold.it/1000x1000?text=Medium%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%205Image0> .

    <https://place-hold.it/75x75?text=Medium%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%205Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:45> .
}

ns1:c1133c4b0599b41508b3460dc8938c11a8c8f7cf92b023da8c2fa67b4b8439d6 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:0> .
}

ns1:4163c1b458bce0b6bd743f57fc677c3112c130f884978bc096ecef681c32de02 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:83> a cms:NamedValue ;
        dcterms:title "Named value 83" ;
        rdf:predicate dcterms:subject ;
        rdf:value "Subject 3" ;
        skos:prefLabel "Named value 83" .
}

ns1:a4fa7c7c792c26fea88b40de38503359ca76f15ce8719c96b50084aece2f64af {
    <https://place-hold.it/1000x1000?text=Cultural%20context%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%206Image1> .

    <https://place-hold.it/600x600?text=Cultural%20context%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%206Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:6> .
}

ns1:05cefe608aa76e5e6938c38568a4c215b45f93d967cee0d79e321fc23c1f8d73 {
    <https://place-hold.it/1000x1000?text=Material%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Material%205Image1> .

    <https://place-hold.it/75x75?text=Material%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%205Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:35> .
}

ns1:81854c5b404d27d003b500d8ee6e815a75c1af35b7fb1ca917fe9e871c9d4578 {
    <https://place-hold.it/1000x1000?text=FreestandingWork10Image1> foaf:thumbnail <https://place-hold.it/600x600?text=FreestandingWork10Image1> .

    <https://place-hold.it/600x600?text=FreestandingWork10Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=FreestandingWork10Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/freestandingwork10> .
}

ns1:a8ed66e210c5ed0618697f0cfa8d2af36a525fedbc1d5bc02c37d148c63bd775 {
    <https://place-hold.it/1000x1000?text=Medium%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%206Image1> .

    <https://place-hold.it/75x75?text=Medium%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%206Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:46> .
}

ns1:71c7c9e8e18b39564d520ebd7799d1f4dee95b2759fc407a47c4cd3e1a2198b5 {
    <https://place-hold.it/1000x1000?text=Source%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Source%203Image1> .

    <https://place-hold.it/600x600?text=Source%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%203Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:63> .
}

ns1:140ee7f2feae9bea0f7b5717cccd49f023b614879f0cf456e11666c9bf44f3fd {
    <https://place-hold.it/1000x1000?text=Language%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Language%202Image1> .

    <https://place-hold.it/75x75?text=Language%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%202Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:22> .
}

ns1:01959239da48272c8b233238c289398b7caa73334cd1b882bba1fe924b43aa4b {
    <https://place-hold.it/1000x1000?text=Medium%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%205Image1> .

    <https://place-hold.it/75x75?text=Medium%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%205Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:45> .
}

ns1:0f70fe739d79ad4c594c61d4aeb6a7f8b2fff41c699dad3e9a5b1ffc9ab5f9a7 {
    <https://place-hold.it/1000x1000?text=Subject%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:86> .
}

ns1:ef67424c4aa2a8c5d82961c1d3ea6948d67ed6de11de91d3a38f7960a4d8e597 {
    <https://place-hold.it/1000x1000?text=Technique%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%207Image1> .

    <https://place-hold.it/75x75?text=Technique%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%207Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:97> .
}

ns1:30ab2ea19dce1cc08cc4081bc56d80664d5df2d283259a9cd6ab1c95416795cf {
    <https://place-hold.it/1000x1000?text=Spatial%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%207Image0> .

    <https://place-hold.it/600x600?text=Spatial%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%207Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:77> .
}

ns1:cd64a84fbd6fbd9d09ce3f2666db96d92a62fc2a6509d7e61b26e458f6ab1b99 {
    <http://example.com/collection1/work5Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection1Work5 closing" ;
        cms:work <http://example.com/collection1/work5> .
}

ns1:bb5b04091b4039aa2e453dbd88d71d72da09b4a6e8129cc2dbe717e5ca835130 {
    <https://place-hold.it/1000x1000?text=Publisher%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%205Image0> .

    <https://place-hold.it/600x600?text=Publisher%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%205Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:55> .
}

ns1:42ec0adecd58982505c23e6471bce115ef646e2c4c4deaf8fb2663033b557863 {
    <https://place-hold.it/1000x1000?text=Language%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Language%208Image0> .

    <https://place-hold.it/75x75?text=Language%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%208Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:28> .
}

ns1:e031438a2d975af32bfe8f8a8b6d0c72b87c379404389d809e50ccddd2ce17e1 {
    <https://place-hold.it/1000x1000?text=Source%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Source%204Image1> .

    <https://place-hold.it/600x600?text=Source%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%204Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:64> .
}

ns1:dff72aae0f48578e97fd7ea9d4596badd0c4495e2aed885be4bb20f6e36fd93c {
    <https://place-hold.it/1000x1000?text=Cultural%20context%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%206Image0> .

    <https://place-hold.it/600x600?text=Cultural%20context%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%206Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:6> .
}

ns1:4f44bfef72e53461fb673208810297288d91859f449f2bf9fbdf4a4e5f4c6925 {
    <https://place-hold.it/1000x1000?text=Language%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Language%207Image1> .

    <https://place-hold.it/600x600?text=Language%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%207Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:27> .
}

ns1:f0db589493df495efa5b2ba09d9c32f737d52416d45d0a2af4e0b44a4c7f265d {
    <https://place-hold.it/1000x1000?text=Technique%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%204Image0> .

    <https://place-hold.it/600x600?text=Technique%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%204Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:94> .
}

ns1:1879fe997216e254d78919926d25919c0a4212f50a19d4534ed22c2427795134 {
    <https://place-hold.it/1000x1000?text=Extent%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%205Image0> .

    <https://place-hold.it/75x75?text=Extent%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%205Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:15> .
}

ns1:676834f0caf79007b3c0d79e55044842896763c23a1e48a33b462cfe9f20b249 {
    <https://place-hold.it/1000x1000?text=Language%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Language%201Image0> .

    <https://place-hold.it/75x75?text=Language%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%201Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:21> .
}

ns1:22e0855c722926a5044b44829d666612c24aad499ec93fe678570d7c87857460 {
    <https://place-hold.it/1000x1000?text=Type%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Type%201Image1> .

    <https://place-hold.it/75x75?text=Type%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%201Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:101> .
}

ns1:11206088ae029a569c788d81b8385422214133792e51cef45ef4742793aab1e4 {
    <https://place-hold.it/1000x1000?text=Type%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Type%202Image0> .

    <https://place-hold.it/75x75?text=Type%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%202Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:102> .
}

ns1:3768b7874abf55c969123baf339314cf59679247ce0cf1087a3461df5d6754a3 {
    <http://example.com/collection0/work1Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection0Work1 closing" ;
        cms:work <http://example.com/collection0/work1> .
}

ns1:06296dd9685774a506b577c13bd161076ff7d0f72592cc4259d2cb72ada403cb {
    <https://place-hold.it/1000x1000?text=Collection1Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1 image 1 rights holder" ;
        dcterms:title "Collection1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection1> .
}

ns1:bc075ecf5a91acb59141f58fa4460e1af64e7066311cfc8f076ec9ebc6537170 {
    <https://place-hold.it/1000x1000?text=Medium%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%200Image0> .

    <https://place-hold.it/75x75?text=Medium%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%200Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:40> .
}

ns1:73ee7d3e4028e98a09f0405aa404cb564e77a66f13753e143fcca84793851516 {
    <http://creativecommons.org/licenses/nd-nc/1.0/> a cc:License,
            cms:License ;
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
}

ns1:280672d345923b09b16888785c1bc0a1316b08b77b0fbde0b90693376c05bdb4 {
    <https://place-hold.it/1000x1000?text=Technique%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%202Image1> .

    <https://place-hold.it/600x600?text=Technique%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%202Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:92> .
}

ns1:b90c1a21f49556e8ef43b0b0ef3d862d0f4e4115f0e4b3cd7b1afa57087b7128 {
    <https://place-hold.it/1000x1000?text=Extent%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%203Image1> .

    <https://place-hold.it/600x600?text=Extent%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%203Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:13> .
}

ns1:432af002d1d564f9e85aeb51c3ec6542c354366e2b383de9e1853a7191e92714 {
    <https://place-hold.it/1000x1000?text=Source%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Source%201Image0> .

    <https://place-hold.it/600x600?text=Source%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%201Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:61> .
}

ns1:6357ce5918ee1a94565a6319038fcf897b20aeeb94f33a4237380f121f7d9443 {
    <https://place-hold.it/1000x1000?text=Spatial%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%203Image1> .

    <https://place-hold.it/75x75?text=Spatial%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%203Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:73> .
}

ns1:753071e0535fbea322b07716772c413d0fc2f6ed772d256439ccb57966ad6c53 {
    <http://example.com/freestandingwork9Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-23"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "FreestandingWork9 opening" ;
        cms:work <http://example.com/freestandingwork9> .
}

ns1:aaaff4541b19831e52f54154fb5090b3d19e32c069d63bd1612f9a88858119cb {
    <https://place-hold.it/1000x1000?text=Spatial%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:75> .
}

ns1:234fd03b740a0452dfc203069d0ad882b27b8f37a8d9663beff568838384cc82 {
    <https://place-hold.it/1000x1000?text=Material%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Material%208Image1> .

    <https://place-hold.it/75x75?text=Material%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%208Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:38> .
}

ns1:6ebb50e62f58367d9a83af931ee249252bd209ca1801143b4cbf60ac7acfccbb {
    <http://creativecommons.org/licenses/MIT/> a cc:License,
            cms:License ;
        cc:legalcode <http://opensource.org/licenses/mit-license.php> ;
        cc:licenseClass <http://creativecommons.org/license/software> ;
        cc:permits cc:DerivativeWorks,
            cc:Distribution,
            cc:Reproduction ;
        cc:requires cc:Notice ;
        dc:identifier "MIT" ;
        dc:title "MIT License",
            "MIT"@en .
}

ns1:9432e4382cf354ef40deb8f7e24f93f1dec30be1d588657e38b5bd70801c0308 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:94> a cms:NamedValue ;
        dcterms:title "Named value 94" ;
        rdf:predicate vra:technique ;
        rdf:value "Technique 4" ;
        skos:prefLabel "Named value 94" .
}

ns1:bf99a3eaea36f932d153d17bbbfc1cfe3570f5a5d67eb47f909edcd04ca4bef7 {
    <https://place-hold.it/1000x1000?text=Material%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Material%208Image1> .

    <https://place-hold.it/600x600?text=Material%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%208Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:38> .
}

ns1:b0ffa81475c6b2607bd3da9ad644bff6a43b9718956a6154e1e325e63d068bd8 {
    <https://place-hold.it/1000x1000?text=Technique%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:96> .
}

ns1:c3bb706c788913def486244e9f1fe08d1a5a326053f545362ee41690744d91f0 {
    <https://place-hold.it/1000x1000?text=Subject%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:88> .
}

ns1:d194b6aa5bc2f0bb27e639d065c327e18adfdcdaba344c42b6e8a22552c7057a {
    <https://place-hold.it/1000x1000?text=Type%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Type%205Image0> .

    <https://place-hold.it/600x600?text=Type%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%205Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:105> .
}

ns1:643a8d80fb7080cf296a97b1451d171a2c2c24b857e6c903337187c8667fc7a8 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:4> .
}

ns1:df880d1b31365982e4de3433f1d2af543d488d1fd63d19915f04ec70f8ad5337 {
    <https://place-hold.it/1000x1000?text=Medium%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%201Image0> .

    <https://place-hold.it/600x600?text=Medium%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%201Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:41> .
}

ns1:21979351593730cff676a08c322c5316d4525450bb4f6e0129c620a05578a335 {
    <https://place-hold.it/1000x1000?text=Medium%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:44> .
}

ns1:d4a3140d0bc059cf9d072ad25fa956903594b3b8c4d42689139f3550c082c7b1 {
    <https://place-hold.it/1000x1000?text=Language%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Language%206Image0> .

    <https://place-hold.it/75x75?text=Language%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%206Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:26> .
}

ns1:fb23f7e9abcbd201dae53e49c2c72fc663fd95ddadcac8b2af41d6aa55f835fe {
    <https://place-hold.it/1000x1000?text=Publisher%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:54> .
}

ns1:c5820f4645eda9a7bb2fb16faed5868ce4ff71fac86061869f775978326fad95 {
    <https://place-hold.it/1000x1000?text=Subject%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:82> .
}

ns1:8a14d744ee2f6a23ada79185a2b770741e6e4d7b8bee27de8195d1a0225e1f4b {
    <https://place-hold.it/1000x1000?text=Type%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Type%207Image1> .

    <https://place-hold.it/600x600?text=Type%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%207Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:107> .
}

ns1:479383ec5e7ab904997078c99d1ac0539dc7e35b5178f1c35548f3ab15412d9f {
    <http://example.com/collection0/work2Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Collection0Work2 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:contributor <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:creator <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---30"^^xsd:gDay ;
                time:month "--12"^^xsd:gMonth ;
                time:year "2021"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection0Work2 creation" ;
        cms:work <http://example.com/collection0/work2> .
}

ns1:107e46a6883412f63e1c7f73f562f7d9336d8b05e1b39555b979fe69fed9bd6b {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:20> a cms:NamedValue ;
        dcterms:title "Named value 20" ;
        rdf:predicate dcterms:language ;
        rdf:value "Language 0" ;
        skos:prefLabel "Named value 20" .
}

ns1:228b8fd9a9a443bd71f6985df03e0985b42db76a467587368477d5f28ffbf978 {
    <https://place-hold.it/1000x1000?text=Collection1Work4Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Collection1Work4Image1> .

    <https://place-hold.it/75x75?text=Collection1Work4Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work4 image 1 rights holder" ;
        dcterms:title "Collection1Work4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection1Work4Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection1/work4> .
}

ns1:a228c6d513bf3843da5baa1a26d753cb90d0aa34fdf5c3afa8873f4d3bb672f9 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:45> a cms:NamedValue ;
        dcterms:title "Named value 45" ;
        rdf:predicate dcterms:medium ;
        rdf:value "Medium 5" ;
        skos:prefLabel "Named value 45" .
}

ns1:ae6ec65c7d01c703d3aa9dd0d5ca481847d0d6f9e1c34569b5f001dd3e4adc2e {
    <https://place-hold.it/1000x1000?text=Type%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:105> .
}

ns1:f65082e80694833b1bb8a907073cfeb80db072dad40a85d92440cbac71ea8d25 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:108> a cms:NamedValue ;
        dcterms:title "Named value 108" ;
        rdf:predicate dcterms:type ;
        rdf:value "Type 8" ;
        skos:prefLabel "Named value 108" .
}

ns1:930525d2b2088c48b57703cab9d92c3123fa50affc57c1f4ee8d83188b5d2cfa {
    <https://place-hold.it/1000x1000?text=Spatial%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%207Image1> .

    <https://place-hold.it/75x75?text=Spatial%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%207Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:77> .
}

ns1:babb0a060b008d8aec52e7844f3e79bec75d7d937b3003be1747b355bc250d0f {
    <https://place-hold.it/1000x1000?text=Publisher%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%205Image1> .

    <https://place-hold.it/600x600?text=Publisher%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%205Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:55> .
}

ns1:58c95d4a24cae9beb44c20f09ceb2ad8be42aa3d65ef9ce9c502deac7326a734 {
    <https://place-hold.it/1000x1000?text=Language%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Language%207Image0> .

    <https://place-hold.it/75x75?text=Language%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%207Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:27> .
}

ns1:aa28b77fc89f20363022ef971bf1b18928a9f8676905e6241f2deb124d19c49d {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:74> a cms:NamedValue ;
        dcterms:title "Named value 74" ;
        rdf:predicate dcterms:spatial ;
        rdf:value "Spatial 4" ;
        skos:prefLabel "Named value 74" .
}

ns1:f1ca8ec42d3be8c0cc2d115b1785e7fbbdf6e55c545b927cbe04dcc40352e404 {
    <https://place-hold.it/1000x1000?text=Material%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Material%209Image0> .

    <https://place-hold.it/75x75?text=Material%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%209Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:39> .
}

ns1:8e8b792c7036380e7738e7ffbb6a9d98a473c0406bcb49950ef784f12d9c40aa {
    <https://place-hold.it/1000x1000?text=Extent%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%200Image0> .

    <https://place-hold.it/600x600?text=Extent%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%200Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:10> .
}

ns1:394124806465c615ad3efa326a61f81735f57582ea1ad2be64bec90bcc8594bd {
    <https://place-hold.it/1000x1000?text=Collection1Work7Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work7 image 1 rights holder" ;
        dcterms:title "Collection1Work7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection1/work7> .
}

ns1:dc183dd4c5e8dd41c826da47f2de84890536c0208eb456e6e3a6035907996c8f {
    <https://place-hold.it/1000x1000?text=Subject%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%209Image0> .

    <https://place-hold.it/600x600?text=Subject%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%209Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:89> .
}

ns1:e0db130ed0bf8bd3a762183f183c4c4b8cd34309820d6a5550091bb7c96acf65 {
    <https://place-hold.it/1000x1000?text=Publisher%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:52> .
}

ns1:792637377fdd44f3565fd7d577f2da2adf0b09c9a5cc958f909cb1c2ce4f95a8 {
    <https://place-hold.it/1000x1000?text=Technique%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:93> .
}

ns1:f9340739b5e4bdc20fd516c0b102a719a6350d3a2fd28bd9535111e9c308eb26 {
    <https://place-hold.it/1000x1000?text=Extent%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%204Image0> .

    <https://place-hold.it/75x75?text=Extent%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%204Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:14> .
}

ns1:b25c9406c1953140551bae23c214889d7020351c5d177513d682add05a88a51c {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:107> a cms:NamedValue ;
        dcterms:title "Named value 107" ;
        rdf:predicate dcterms:type ;
        rdf:value "Type 7" ;
        skos:prefLabel "Named value 107" .
}

ns1:91a26c9eef3fbdefe0464a12361a6bc4d45e9e039d030ae2cf5510496af17c87 {
    <https://place-hold.it/1000x1000?text=FreestandingWork10Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/freestandingwork10> .
}

ns1:ba4bb274bd124b99b7f440220ee553358a856b76f2c8b5755aa111bcc4c14401 {
    <https://place-hold.it/1000x1000?text=Material%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Material%203Image1> .

    <https://place-hold.it/600x600?text=Material%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%203Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:33> .
}

ns1:09f950f9d752d9740b85d7342aaef9f22461d362a729b2b178eb82b792b36e59 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%208Image1> .

    <https://place-hold.it/600x600?text=Cultural%20context%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%208Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:8> .
}

ns1:43ca705d887341ce3ab070bae577a352f207a5dc78b1f311c19cb585df6a9289 {
    <https://place-hold.it/1000x1000?text=Spatial%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:70> .
}

ns1:c8388b584b458f012feb16b4c39c1cf29bcc9f3c316208c278ac7a9bc34c46dc {
    <https://place-hold.it/1000x1000?text=Collection0Work2Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work2 image 0 rights holder" ;
        dcterms:title "Collection0Work2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection0/work2> .
}

ns1:3749f27a0c64d8aae4ea6fd9bdbc23bb1b59f947e359755ee461b43d14c41ff2 {
    <https://place-hold.it/1000x1000?text=Source%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Source%204Image0> .

    <https://place-hold.it/600x600?text=Source%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%204Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:64> .
}

ns1:4d3a5add0ab9a966b003a9929c09d41b8e3de40f5dd2d657e47c612296b31d69 {
    <https://place-hold.it/1000x1000?text=Source%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Source%204Image0> .

    <https://place-hold.it/75x75?text=Source%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%204Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:64> .
}

ns1:0d30e0cc9145070cd171ac06334cbb53c5f018605515a184a7399b3998df1cbd {
    <https://place-hold.it/1000x1000?text=Type%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Type%207Image1> .

    <https://place-hold.it/75x75?text=Type%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%207Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:107> .
}

ns1:e1e90315332765ec152204ff7addf44b9d91d3f3c4a2323299f8ab626f6cb493 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:51> a cms:NamedValue ;
        dcterms:title "Named value 51" ;
        rdf:predicate dcterms:publisher ;
        rdf:value "Publisher 1" ;
        skos:prefLabel "Named value 51" .
}

ns1:05e944d54ed028a674d7560e923596ecc7871b369507ae3ed8c3f4b02d91c430 {
    <https://place-hold.it/1000x1000?text=Source%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Source%206Image0> .

    <https://place-hold.it/600x600?text=Source%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%206Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:66> .
}

ns1:ca44a4345bb088f9be6b6212a6763130728969066139f13292763c5bca7e39a9 {
    <https://place-hold.it/1000x1000?text=FreestandingWork10Image0> foaf:thumbnail <https://place-hold.it/75x75?text=FreestandingWork10Image0> .

    <https://place-hold.it/75x75?text=FreestandingWork10Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=FreestandingWork10Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/freestandingwork10> .
}

ns1:83a403f4c48602a922b703afd17bc0f998b2d2a0e9595593c3804b03eac4df00 {
    <https://place-hold.it/1000x1000?text=Source%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Source%207Image1> .

    <https://place-hold.it/600x600?text=Source%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%207Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:67> .
}

ns1:cc416fb02c03e739f08dc805d0d580e7968d3855a324400418a704809917c8a4 {
    <https://place-hold.it/1000x1000?text=Type%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Type%205Image1> .

    <https://place-hold.it/600x600?text=Type%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%205Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:105> .
}

ns1:f3217d2f9c7296ff0c3e9b13103ef99cf8437c7b8daba66eccd3707473fb9585 {
    <https://place-hold.it/1000x1000?text=Extent%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:18> .
}

ns1:65d0fe4ee99fc38bffbe74dbbde7f5c0bb5605352573b057e71cab7130d2b24c {
    <https://place-hold.it/1000x1000?text=Type%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Type%204Image0> .

    <https://place-hold.it/600x600?text=Type%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%204Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:104> .
}

ns1:2ee93c73b9e9322f5f16f18e7b964b05ee65b0a6c19ed8091d43b9c89dd9b8b3 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:100> a cms:NamedValue ;
        dcterms:title "Named value 100" ;
        rdf:predicate dcterms:type ;
        rdf:value "Type 0" ;
        skos:prefLabel "Named value 100" .
}

ns1:a793702f4641997a62e9c52489f94888ab44cfc62615649bed57dadfd375ea78 {
    <https://place-hold.it/1000x1000?text=Subject%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%200Image1> .

    <https://place-hold.it/600x600?text=Subject%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%200Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:80> .
}

ns1:47be36921362fae38798d3529b5bb0dad60a0e56dbd33505d3dafe817d0360cf {
    <https://place-hold.it/1000x1000?text=Extent%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:10> .
}

ns1:71e09c62c3788eb54871319acaef3439850274dd44dbbe8be2d97c3ebb831b53 {
    <https://place-hold.it/1000x1000?text=Language%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:27> .
}

ns1:e3638bce44ec27f2e75c286df6921d5617c29c28c3cc0b7c6105346239aced0a {
    <https://place-hold.it/1000x1000?text=FreestandingWork8Image0> foaf:thumbnail <https://place-hold.it/75x75?text=FreestandingWork8Image0> .

    <https://place-hold.it/75x75?text=FreestandingWork8Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=FreestandingWork8Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/freestandingwork8> .
}

ns1:de3ca9cec54724ba32434ee6c783215064064389c4b2aeab6370da1bdda8bd76 {
    <https://place-hold.it/1000x1000?text=Publisher%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:53> .
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

ns1:572431dc5f78f9b69fe0cd4967d84af263152527d8cd27881f7fa5bc5f97f7b8 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:12> a cms:NamedValue ;
        dcterms:title "Named value 12" ;
        rdf:predicate dcterms:extent ;
        rdf:value "Extent 2" ;
        skos:prefLabel "Named value 12" .
}

ns1:f3e868ba3ccb3594c8694e7b5aae2725f625270a5326c0512ba8da5885628cf7 {
    <https://place-hold.it/1000x1000?text=Technique%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%205Image1> .

    <https://place-hold.it/600x600?text=Technique%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%205Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:95> .
}

ns1:125c334e678a1087e26c7470bc67c71560dd4a9dec2590933a19303f2ad2cb25 {
    <https://place-hold.it/1000x1000?text=Publisher%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%200Image1> .

    <https://place-hold.it/75x75?text=Publisher%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%200Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:50> .
}

ns1:ce49a6e5baa38e8ad737401eb43a78c790ebd59069bb6639dc225cd20b9f91eb {
    <https://place-hold.it/1000x1000?text=Subject%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%209Image0> .

    <https://place-hold.it/75x75?text=Subject%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%209Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:89> .
}

ns1:1e1cb56714069b0fb64dd625bba99e287549438876f1b8e4f3914f0438b9132e {
    <https://place-hold.it/1000x1000?text=Source%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:60> .
}

ns1:985ae090b3da176704cf7a972d790b996079519d619c6b20e14d8975f29590b7 {
    <https://place-hold.it/1000x1000?text=Subject%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%208Image1> .

    <https://place-hold.it/75x75?text=Subject%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%208Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:88> .
}

ns1:7470bacdd41499c63ea7c1e71c5a13b4626ff46b0438eef924704481554213dd {
    <https://place-hold.it/1000x1000?text=Source%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Source%205Image1> .

    <https://place-hold.it/75x75?text=Source%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%205Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:65> .
}

ns1:82ea48f5c89f44648b76ad44dc57208576f85d08a84144fa777c20cec0c39f28 {
    <https://place-hold.it/1000x1000?text=Medium%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%208Image1> .

    <https://place-hold.it/75x75?text=Medium%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%208Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:48> .
}

ns1:b33085f08fbb14097f03dfefb01b07298a52f6c5377c5e95c362dc9473ecd87b {
    <http://creativecommons.org/licenses/by-nd/4.0/> a cc:License,
            cms:License ;
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
}

ns1:e7d23c750b6f72b13a63995eec6493fef42d11074c37899f71d2ce87fcbc3f6a {
    <https://place-hold.it/1000x1000?text=Collection1Work4Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Collection1Work4Image0> .

    <https://place-hold.it/75x75?text=Collection1Work4Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work4 image 0 rights holder" ;
        dcterms:title "Collection1Work4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection1Work4Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection1/work4> .
}

ns1:c381732c16473f41343361a4a788e8c4a93460ebf912c94995f279bf9db0d4ec {
    <https://place-hold.it/1000x1000?text=Extent%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:19> .
}

ns1:c1eed234a67b6ac098ef2180f741fe58a65c8c9d66b70c5ba3b97a2f712dc715 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:33> a cms:NamedValue ;
        dcterms:title "Named value 33" ;
        rdf:predicate vra:material ;
        rdf:value "Material 3" ;
        skos:prefLabel "Named value 33" .
}

ns1:6a908fd0242e25435aa2ed95b3f680a4be9500455657cf8042ee158fdf87da57 {
    <http://rightsstatements.org/vocab/NoC-CR/1.0/> a cms:RightsStatement ;
        dcterms:description "This Rights Statement indicates that the underlying Work is in the Public Domain, but the organization that has published the Item is contractually required to restrict certain forms of use by third parties."@en ;
        dcterms:identifier "NoC-CR" ;
        skos:definition """Use of this Item is not restricted by copyright and/or related rights.

  As part of the acquisition or digitization of this Work, the organization that has made the Item available is contractually required to limit the use of this Item. Limitations may include, but are not limited to, privacy issues, cultural protections, digitization agreements or donor agreements.

  Please refer to the organization that has made the Item available for more information."""@en ;
        skos:note "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use."@en,
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available."@en,
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material."@en ;
        skos:prefLabel "No Copyright - Contractual Restrictions"@en ;
        skos:scopeNote "This Rights Statement can only be used for Items that are in the Public Domain but for which the organization that intends to make the Item available has entered into contractual agreement that requires it to take steps to restrict third party uses of the Item. In order for this Rights Statement to be conclusive, the organization that intends to make the Item available should provide a link to a page detailing the contractual restrictions that apply to the use of the Item."@en .
}

ns1:abe06cd82e85f137f820b8fb1de78a70c4e968643964ab399573f62243372dd3 {
    <https://place-hold.it/1000x1000?text=Material%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Material%202Image0> .

    <https://place-hold.it/600x600?text=Material%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%202Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:32> .
}

ns1:ee29016063be3ad2881936069f567df41c4312cb4315756fcdff31b3abdde241 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:3> .
}

ns1:ebb4212509dc6375ead41b0db12ad16345a287e0f01a944de8fc971f19c8cec8 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%202Image1> .

    <https://place-hold.it/600x600?text=Cultural%20context%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%202Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:2> .
}

ns1:61746ddddf135df1e557ddb84a79f6b638118f43fe54e753771823b7c4df502f {
    <https://place-hold.it/1000x1000?text=Type%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Type%200Image1> .

    <https://place-hold.it/600x600?text=Type%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%200Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:100> .
}

ns1:664b60ab85025123c08acde2f3f31abdee60ba65b1fe4167395b1f0ba3de25f8 {
    <https://place-hold.it/1000x1000?text=Material%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Material%206Image0> .

    <https://place-hold.it/75x75?text=Material%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%206Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:36> .
}

ns1:68e94eae91aa32d68f658f0b2b47c3183d7225d16b26c98f8e5da1a4caaa0e4c {
    <https://place-hold.it/1000x1000?text=Type%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:102> .
}

ns1:c0e0908c935f4de395f981d7f8b5009da3c48159acca5be1e65391fb6f720194 {
    <https://place-hold.it/1000x1000?text=Publisher%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%200Image0> .

    <https://place-hold.it/75x75?text=Publisher%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%200Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:50> .
}

ns1:800e0a1cc73b7c6f59d7d364b5d8ec75ef188125cc899a1ce4bfc035ea7f635a {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:35> a cms:NamedValue ;
        dcterms:title "Named value 35" ;
        rdf:predicate vra:material ;
        rdf:value "Material 5" ;
        skos:prefLabel "Named value 35" .
}

ns1:d29a5f650cb79e3e074c4432cad12010b647b8bb2abc7a8fcd3024819b309c6c {
    <https://place-hold.it/1000x1000?text=Subject%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%207Image1> .

    <https://place-hold.it/600x600?text=Subject%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%207Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:87> .
}

ns1:4c66276dcd9fa206d6d4a450d4c45d3da41dd94b73a9137d7df146141bd8c207 {
    <https://place-hold.it/1000x1000?text=Publisher%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%202Image0> .

    <https://place-hold.it/600x600?text=Publisher%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%202Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:52> .
}

ns1:42a113a8fc9f1f152636e00a441652d8d2ba13f66f6189fd06d224bdd242a79b {
    <https://place-hold.it/1000x1000?text=Technique%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%201Image1> .

    <https://place-hold.it/600x600?text=Technique%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%201Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:91> .
}

ns1:144611b19165d6439e58effc3ee0226a6b0dbd27e1edd0d4a6ec12352276fbf7 {
    <https://place-hold.it/1000x1000?text=Collection1Work7Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Collection1Work7Image0> .

    <https://place-hold.it/600x600?text=Collection1Work7Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work7 image 0 rights holder" ;
        dcterms:title "Collection1Work7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection1Work7Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection1/work7> .
}

ns1:f4b7a3b29a5daaaed8149dd51a55f2fca0d0c96a8109e25438a558cbeee2327c {
    <https://place-hold.it/1000x1000?text=Collection1Work6Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Collection1Work6Image1> .

    <https://place-hold.it/75x75?text=Collection1Work6Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work6 image 1 rights holder" ;
        dcterms:title "Collection1Work6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection1Work6Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection1/work6> .
}

ns1:aa1f7882e199e43dc933eb34ac0d6beb1afa71f2f74ebc94128224d8997ffa82 {
    <https://place-hold.it/1000x1000?text=FreestandingWork11Image0> foaf:thumbnail <https://place-hold.it/600x600?text=FreestandingWork11Image0> .

    <https://place-hold.it/600x600?text=FreestandingWork11Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=FreestandingWork11Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/freestandingwork11> .
}

ns1:6e6b55e1ae419050d0779cb1a41343e448a8125b4f4d430f0403c19a87ec0aac {
    <https://place-hold.it/1000x1000?text=Medium%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%208Image0> .

    <https://place-hold.it/75x75?text=Medium%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%208Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:48> .
}

ns1:ed72f7767f3d4067cdeaa959187b0b63f31cb7453120d13607946e23490a47a8 {
    <https://place-hold.it/1000x1000?text=Extent%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%207Image0> .

    <https://place-hold.it/75x75?text=Extent%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%207Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:17> .
}

ns1:bd045ac9a6c4430330087ac589552977f17bb9a75b591ce69cc66ed19184b854 {
    <http://example.com/collection1/work6Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Collection1Work6 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:date "2021-12-26"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection1Work6 opening" ;
        cms:work <http://example.com/collection1/work6> .
}

ns1:69b71931aaae646f5baa5f8db2f8746552c0f9f411a306ceca3b72c1089e7d89 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:5> a cms:NamedValue ;
        dcterms:title "Named value 5" ;
        rdf:predicate vra:culturalContext ;
        rdf:value "Cultural context 5" ;
        skos:prefLabel "Named value 5" .
}

ns1:2db4f320153528e998a59d4018281b6de98f146951831e2dc7b5e7784dec630e {
    <https://place-hold.it/1000x1000?text=Language%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Language%200Image0> .

    <https://place-hold.it/600x600?text=Language%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%200Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:20> .
}

ns1:726fb9aadee7008b855842d89d10c8df4800a4ae0ae04377a1b12cf971e3db4c {
    <http://creativecommons.org/licenses/by-nc/4.0/> a cc:License,
            cms:License ;
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
}

ns1:8cbf38834fcbca33a2862e3b5704098de4964f49c6d40f726d3875553fefb883 {
    <https://place-hold.it/1000x1000?text=Technique%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%204Image1> .

    <https://place-hold.it/75x75?text=Technique%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%204Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:94> .
}

ns1:e054b9b85c453aafad646ac8a966aa12fe400495d0664313d0d86e180f8d3ae1 {
    <https://place-hold.it/1000x1000?text=Publisher%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%206Image1> .

    <https://place-hold.it/600x600?text=Publisher%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%206Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:56> .
}

ns1:76ec54d8ed57ed4c41338908a59c3a9cb40f6776d58fc3119bfd61dd71da7a5f {
    <https://place-hold.it/1000x1000?text=Material%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:34> .
}

ns1:c41c132168b7d8f85e7b121d8d8dc1eb8a706d20917f0e009ab76199a01f14da {
    <https://place-hold.it/1000x1000?text=Technique%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:99> .
}

ns1:ea6d85af707a00d70f101a3823151871cacdacc2944ad2a882e94cafaaa1a069 {
    <https://place-hold.it/1000x1000?text=Type%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:103> .
}

ns1:3339da2225986a871cbc4bdeadf9946a4ed086658e076689598ad391c2b7b38a {
    <https://place-hold.it/1000x1000?text=Technique%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%204Image1> .

    <https://place-hold.it/600x600?text=Technique%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%204Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:94> .
}

ns1:5e9e6084673a973b365b613b96b2e9d1425e1dc8a314c227022504f201e41f69 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%201Image1> .

    <https://place-hold.it/600x600?text=Cultural%20context%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%201Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:1> .
}

ns1:3b1f012a1e45fd230b5f3dbbe166f303b28f9d47955fe4ed6f138c1247b19a38 {
    <http://creativecommons.org/publicdomain/mark/1.0/> a cc:License,
            cms:License ;
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
}

ns1:c3e2ba7b9eaba691902847fb6e601e87c50309050adb616c8c2d6b64362e5046 {
    <http://example.com/collection1> a cms:Collection ;
        dcterms:title "Collection1" .
}

ns1:c775db84d0d0b2c436a8c041e3849fc827c0f50070feaf12336891e42a200160 {
    <http://example.com/freestandingwork11Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "FreestandingWork11 closing" ;
        cms:work <http://example.com/freestandingwork11> .
}

ns1:26dfa9f603b9f5f796d2f7f5063eadf69318877b1650d10c6c7daa6b9781222e {
    <https://place-hold.it/1000x1000?text=Source%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Source%206Image1> .

    <https://place-hold.it/75x75?text=Source%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%206Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:66> .
}

ns1:bcdd522717cacf28a09390fc499b4290e7ad869f04877d8a8411bf859589f5bf {
    <https://place-hold.it/1000x1000?text=Extent%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:14> .
}

ns1:ac9c60f7b61671fead26c3e23781848027964f6cc3e57b5314cdc48572bf9832 {
    <https://place-hold.it/1000x1000?text=Technique%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%200Image0> .

    <https://place-hold.it/600x600?text=Technique%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%200Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:90> .
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

ns1:72c0f437dd086771a4e309d22d11b3c046d7b5f11e80376304398927be4782f8 {
    <http://creativecommons.org/licenses/LGPL/2.1/> a cc:License,
            cms:License ;
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
}

ns1:b9233a0135fc336eb63060cae519f45610a065638fcdc151705a7bae6869c7f2 {
    <https://place-hold.it/1000x1000?text=Medium%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%207Image1> .

    <https://place-hold.it/600x600?text=Medium%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%207Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:47> .
}

ns1:acb951bc0b684bb4c2476a0cb5f367ebc360805c7691e4e014f8124ddeba76d8 {
    <https://place-hold.it/1000x1000?text=Spatial%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%200Image0> .

    <https://place-hold.it/600x600?text=Spatial%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%200Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:70> .
}

ns1:1d9a4fc68e17bd6bf348b095848f40257f36c876944e30794b2cc7ed660077f5 {
    <https://place-hold.it/1000x1000?text=Type%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Type%208Image1> .

    <https://place-hold.it/75x75?text=Type%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%208Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:108> .
}

ns1:b68eb786606f26b5c176ce8b453d67b243a5be33a0e5ad83424be07e3e84be27 {
    <https://place-hold.it/1000x1000?text=Technique%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:95> .
}

ns1:636658a56bad10abed57e5d965e48352abe0e38fb06621dc044b4cf2de56bb3f {
    <https://place-hold.it/1000x1000?text=Material%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Material%209Image1> .

    <https://place-hold.it/75x75?text=Material%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%209Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:39> .
}

ns1:e3475303e75969489af38422155e220f4b171a9e426b6675c938050b308eab15 {
    <https://place-hold.it/1000x1000?text=Source%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Source%203Image0> .

    <https://place-hold.it/75x75?text=Source%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%203Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:63> .
}

ns1:3a08e45cbc494139f04812923884835d2888956ec677154263d83a0cf0e2bb8d {
    <https://place-hold.it/1000x1000?text=Material%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Material%200Image0> .

    <https://place-hold.it/75x75?text=Material%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%200Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:30> .
}

ns1:ec3bdcdd80e69b034fab7852f4e1a6c383f800bbacb73c3ab6e6ed097237d8a7 {
    <https://place-hold.it/1000x1000?text=Collection0Work3Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Collection0Work3Image0> .

    <https://place-hold.it/600x600?text=Collection0Work3Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work3 image 0 rights holder" ;
        dcterms:title "Collection0Work3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection0Work3Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection0/work3> .
}

ns1:3c46525f40cbdb26a48809b0499757addc846c367ca9a38f7316ab3c5566da22 {
    <http://creativecommons.org/licenses/by-nd/2.0/> a cc:License,
            cms:License ;
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
}

ns1:343226d76a8b06f03be9dbb4f7ad2b0a3ad9ea361b9ab8357f96d84279202392 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:89> a cms:NamedValue ;
        dcterms:title "Named value 89" ;
        rdf:predicate dcterms:subject ;
        rdf:value "Subject 9" ;
        skos:prefLabel "Named value 89" .
}

ns1:1fa7c85e03719364ca682fbde8827d101f091468d6753787e5ade43e30c8539b {
    <https://place-hold.it/1000x1000?text=Material%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Material%208Image0> .

    <https://place-hold.it/75x75?text=Material%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%208Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:38> .
}

ns1:8c87aebee04bdcc9178b6b8e3cab70f1c0cacb15f36bd3509555aff8af8e5b69 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:54> a cms:NamedValue ;
        dcterms:title "Named value 54" ;
        rdf:predicate dcterms:publisher ;
        rdf:value "Publisher 4" ;
        skos:prefLabel "Named value 54" .
}

ns1:131a3f85d5be26f983383b92a732fa029761d8478382c6ffce3e2f079de3dbaa {
    <https://place-hold.it/1000x1000?text=Material%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Material%200Image1> .

    <https://place-hold.it/75x75?text=Material%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%200Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:30> .
}

ns1:de97264f2b555a014d9bf05dd834d5b9d9f7c72442610d7c97d19db75fd9d95f {
    <https://place-hold.it/1000x1000?text=Spatial%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%201Image1> .

    <https://place-hold.it/75x75?text=Spatial%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%201Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:71> .
}

ns1:ccdd0ba1aa409c84410684e61987f9bc9590007fdeaba26124bdac4da5da996c {
    <https://place-hold.it/1000x1000?text=Subject%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%204Image1> .

    <https://place-hold.it/75x75?text=Subject%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%204Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:84> .
}

ns1:29894a4cf8a326f07403b015ce5eb7dbbff962b1f6bf9aa5c66ff65a59510b98 {
    <https://place-hold.it/1000x1000?text=Technique%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%209Image0> .

    <https://place-hold.it/75x75?text=Technique%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%209Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:99> .
}

ns1:9a5528a4abf3ce1c14f8bed3faeafc1ad91eb6893a138a6b9e40ec1d88b53b04 {
    <https://place-hold.it/1000x1000?text=Publisher%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%201Image0> .

    <https://place-hold.it/600x600?text=Publisher%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%201Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:51> .
}

ns1:f63520f86c6e83beb4c7979c52f6ce2cc2b64e4eaa354eae9dc07c45a5ff7b45 {
    <https://place-hold.it/1000x1000?text=Spatial%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%203Image1> .

    <https://place-hold.it/600x600?text=Spatial%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%203Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:73> .
}

ns1:a30276a57f503252f4572b824cdeeca8e8c3022f53b3643158ee37355746e925 {
    <http://creativecommons.org/licenses/GPL/2.0/> a cc:License,
            cms:License ;
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
}

ns1:ad92cc68dbd59e9d515347d013989a72c8bf3fe69c23387039651e56c16626d6 {
    <https://place-hold.it/1000x1000?text=Material%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:38> .
}

ns1:a430ee1a88d01c817202c20b6d11f7182123fc13af6cfe2808f2fcec09b0e07a {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:29> a cms:NamedValue ;
        dcterms:title "Named value 29" ;
        rdf:predicate dcterms:language ;
        rdf:value "Language 9" ;
        skos:prefLabel "Named value 29" .
}

ns1:a2f34e078eff2b6809e050ede9f468ef60b7f670790ec32ef52b1188083f55a2 {
    <http://rightsstatements.org/vocab/CNE/1.0/> a cms:RightsStatement ;
        dcterms:description "This Rights Statement indicates that the organization that has published the Item has not evaluated the copyright and related rights status of the Item."@en ;
        dcterms:identifier "CNE" ;
        skos:definition """The copyright and related rights status of this Item has not been evaluated.

  Please refer to the organization that has made the Item available for more information.

  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use."""@en ;
        skos:note "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use."@en,
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available."@en,
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material."@en ;
        skos:prefLabel "Copyright Not Evaluated"@en ;
        skos:scopeNote "This Rights Statement should be used for Items for which the copyright status is unknown and for which the organization that intends to make the Item available has not undertaken an effort to determine the copyright status of the underlying Work."@en .
}

ns1:178ed4930555671e81dde371ba179e098417e1b4d7b82aba230ff95ccf0db9fd {
    <https://place-hold.it/1000x1000?text=Source%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Source%205Image0> .

    <https://place-hold.it/600x600?text=Source%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%205Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:65> .
}

ns1:099edb6cc9867c912ff05a31e08da4cdd14e36dc666875267d20a8677efe5c8c {
    <http://rightsstatements.org/vocab/InC/1.0/> a cms:RightsStatement ;
        dcterms:description "This Rights Statement indicates that the Item labeled with this Rights Statement is in copyright."@en ;
        dcterms:identifier "InC" ;
        skos:definition """This Item is protected by copyright and/or related rights.

  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use.

  For other uses you need to obtain permission from the rights-holder(s)."""@en ;
        skos:note "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use."@en,
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available."@en,
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material."@en ;
        skos:prefLabel "In Copyright"@en ;
        skos:scopeNote "This Rights Statement can be used for an Item that is in copyright. Using this statement implies that the organization making this Item available has determined that the Item is in copyright and either is the rights-holder, has obtained permission from the rights-holder(s) to make their Work(s) available, or makes the Item available under an exception or limitation to copyright (including Fair Use) that entitles it to make the Item available."@en .
}

ns1:864ae2564549d2a6ab8c8ad9cf19f90dbe6edb04c41e3f9f436e5b4474424ba9 {
    <https://place-hold.it/1000x1000?text=Publisher%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%203Image1> .

    <https://place-hold.it/75x75?text=Publisher%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%203Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:53> .
}

ns1:2e61d81484533d5a9453de22efb0a93fb22a71bc8872ae6b889d1de6daac3925 {
    <https://place-hold.it/1000x1000?text=Type%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Type%200Image0> .

    <https://place-hold.it/75x75?text=Type%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%200Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:100> .
}

ns1:02288d6f3e61fdcd40687828b532fb7536ec33baefd4afdb981099e0d58f6504 {
    <https://place-hold.it/1000x1000?text=Collection1Work7Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Collection1Work7Image0> .

    <https://place-hold.it/75x75?text=Collection1Work7Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work7 image 0 rights holder" ;
        dcterms:title "Collection1Work7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection1Work7Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection1/work7> .
}

ns1:daef80951721bcc710b3fcb833867777b2f984a1e097659608023053dcec5b12 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:4> .
}

ns1:7626516300a9217c380c4224647b6bdaac1efa473d3220cd9aa73e6fdc4fdf50 {
    <http://example.com/collection0/work0Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Collection0Work0 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection0Work0 opening" ;
        cms:work <http://example.com/collection0/work0> .
}

ns1:0927d8cdf1adf2a4eaf871c4e8a1da07ca17f234827aac9a7b9a0c2455858f94 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:65> a cms:NamedValue ;
        dcterms:title "Named value 65" ;
        rdf:predicate dcterms:source ;
        rdf:value "Source 5" ;
        skos:prefLabel "Named value 65" .
}

ns1:4c60411a4787babe9adef5ad2a76b56e914f02c085cbe2059634523f8e1d3d2d {
    <https://place-hold.it/1000x1000?text=Technique%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%206Image1> .

    <https://place-hold.it/75x75?text=Technique%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%206Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:96> .
}

ns1:1b01797016e1c637e4ed1af7e860a6faf46a01e813cc60b91bcbf97ddf01172c {
    <https://place-hold.it/1000x1000?text=Type%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:101> .
}

ns1:129cc2ec7270cda2e2447a6de37101fd971299beceb57ea73a27a38f72fb22e0 {
    <https://place-hold.it/1000x1000?text=Collection0Work1Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Collection0Work1Image0> .

    <https://place-hold.it/600x600?text=Collection0Work1Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work1 image 0 rights holder" ;
        dcterms:title "Collection0Work1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection0Work1Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection0/work1> .
}

ns1:66f41802a5cc6548938ee7b79e18aff5dd032d6243d82689c14a3635761bb66c {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:57> a cms:NamedValue ;
        dcterms:title "Named value 57" ;
        rdf:predicate dcterms:publisher ;
        rdf:value "Publisher 7" ;
        skos:prefLabel "Named value 57" .
}

ns1:48a0e7e38c5988ab6a83c371440405b28f44e7c3c25bee1590d376c020c19a75 {
    <https://place-hold.it/1000x1000?text=Language%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:25> .
}

ns1:e72edd0831bc6872bd42441c8c2f702eabc98b374fb367efe1ca99fdbc5ca503 {
    <https://place-hold.it/1000x1000?text=Type%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Type%204Image1> .

    <https://place-hold.it/600x600?text=Type%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%204Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:104> .
}

ns1:fd5b8b36207733a6bb24010cf5099ba054bac21b4b1d42860aa8351c32519587 {
    <https://place-hold.it/1000x1000?text=Type%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:109> .
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

ns1:f38add18764b4a1d0770718526747487d244e3c667f5513c5db1b2f20bd7eb17 {
    <https://place-hold.it/1000x1000?text=FreestandingWork11Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/freestandingwork11> .
}

ns1:15511b045a30782d8e7dfa13b48c84dec76bc93c658776ee9a27ea115b80aaed {
    <https://place-hold.it/1000x1000?text=Language%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Language%200Image1> .

    <https://place-hold.it/600x600?text=Language%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%200Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:20> .
}

ns1:80960da012291cead51d1e2be0b1cddc1cd86ab97fa4d6e430b64e9bcdc50bcf {
    <http://rightsstatements.org/vocab/InC-OW-EU/1.0/> a cms:RightsStatement ;
        dcterms:description "This Rights Statement indicates that the Item labeled with this Rights Statement has been identified as an ‘Orphan Work’ under the terms of the EU Orphan Works Directive."@en ;
        dcterms:identifier "InC-OW-EU" ;
        skos:definition """This Item has been identified as an orphan work in the country of first publication and in line with Directive 2012/28/EU of the European Parliament and of the Council of 25 October 2012 on certain permitted uses of orphan works.

  For this Item, either (a) no rights-holder(s) have been identified or (b) one or more rights-holder(s) have been identified but none have been located even though a diligent search for the rights-holder(s) has been conducted. The results of the diligent search are available in the EU Orphan Works Database.

  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use."""@en ;
        skos:note "If you have any information that can contribute to identifying or locating the rights-holder(s), please notify the organization that has made the Item available."@en,
            "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use."@en,
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available."@en,
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material."@en ;
        skos:prefLabel "In Copyright - EU Orphan Work"@en ;
        skos:scopeNote "This Rights Statement is intended for use with Items for which the underlying Work has been identified as an Orphan Work in accordance with Directive 2012/28/EU of the European Parliament and of the Council of 25 October 2012 on certain permitted uses of Orphan Works. It can only be applied to Items derived from Works that are covered by the Directive: Works published in the form of books, journals, newspapers, magazines or other writings as well as cinematographic or audiovisual works and phonograms (note: this excludes photography and visual arts). It can only be applied by organizations that are beneficiaries of the Directive: publicly accessible libraries, educational establishments and museums, archives, film or audio heritage institutions and public-service broadcasting organizations, established in one of the EU member states. The beneficiary is also expected to have registered the work in the EU Orphan Works Database maintained by EUIPO."@en .
}

ns1:648ef32ce57334d52f5bae2e9dd9b339cd9baefd4553b3f457000038d570e755 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:0> a cms:NamedValue ;
        dcterms:title "Named value 0" ;
        rdf:predicate vra:culturalContext ;
        rdf:value "Cultural context 0" ;
        skos:prefLabel "Named value 0" .
}

ns1:94d98a6af5b61ac7dbaaa94e1da15b76666103a5f7e37d0f67479c29e4097e52 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:2> a cms:NamedValue ;
        dcterms:title "Named value 2" ;
        rdf:predicate vra:culturalContext ;
        rdf:value "Cultural context 2" ;
        skos:prefLabel "Named value 2" .
}

ns1:ce9ae90d7696e7b098fd49e763a1081a8c0cb63e59c2448dfb1b076cdf836c87 {
    <https://place-hold.it/1000x1000?text=Type%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:101> .
}

ns1:8f4e9116707e787caa8e8de4a352740b779045540a7ccc0c3cd65cc597708fec {
    <http://example.com/freestandingwork10> a cms:Work ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "FreestandingWork10 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:alternative "FreestandingWork10 alternative title 0",
            "FreestandingWork10 alternative title 1" ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:description "FreestandingWork10 description 0",
            "FreestandingWork10 description 1",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:named_value:10>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:11> ;
        dcterms:identifier "FreestandingWork10Id0",
            "FreestandingWork10Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:named_value:20>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:21> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:named_value:40>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:41> ;
        dcterms:provenance "FreestandingWork10 provenance 0",
            "FreestandingWork10 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:named_value:50>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:51> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:named_value:60>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:61> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:synthetic_data:named_value:70>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:71> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:named_value:80>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:81> ;
        dcterms:title "FreestandingWork10" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:named_value:100>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:101> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:named_value:0>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:1> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:named_value:30>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:31> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:named_value:90>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:91> ;
        foaf:page <http://example.com/work/10> .
}

ns1:7debedfbf4c3fea0c91db1ea22104a6d814a6e96b54c12b55540951d2463e07a {
    <https://place-hold.it/1000x1000?text=Technique%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%206Image1> .

    <https://place-hold.it/600x600?text=Technique%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%206Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:96> .
}

ns1:c2fe491d2e87b4abd9c6f8ee287e864b2c45849ce6fab42020b4f91334f49cf9 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:109> a cms:NamedValue ;
        dcterms:title "Named value 109" ;
        rdf:predicate dcterms:type ;
        rdf:value "Type 9" ;
        skos:prefLabel "Named value 109" .
}

ns1:a0ac8e110cf6018f6649392ef6e13edfb1d308c646c1ffe47b245bd394d13f95 {
    <https://place-hold.it/1000x1000?text=FreestandingWork10Image0> foaf:thumbnail <https://place-hold.it/600x600?text=FreestandingWork10Image0> .

    <https://place-hold.it/600x600?text=FreestandingWork10Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=FreestandingWork10Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/freestandingwork10> .
}

ns1:49bad0b1c3391144a65bbd39fb32293cd464360337e5f2c55f6e23909e46691f {
    <https://place-hold.it/1000x1000?text=Medium%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%206Image0> .

    <https://place-hold.it/75x75?text=Medium%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%206Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:46> .
}

ns1:db847b40edfb7c885499dff53e4dab929d876f8621820b582fbc020c9f9b2d8e {
    <https://place-hold.it/1000x1000?text=Material%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Material%202Image1> .

    <https://place-hold.it/75x75?text=Material%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%202Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:32> .
}

ns1:51a0d999051a862cd495c3e0abcb88b02f4ef73be0900e474b848523d86588bf {
    <https://place-hold.it/1000x1000?text=Material%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Material%207Image1> .

    <https://place-hold.it/600x600?text=Material%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%207Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:37> .
}

ns1:2ce8b0a0aeffc8892405fc8ee2dfec2c6aff1a2410b789b4efa5b0cf6e63a356 {
    <https://place-hold.it/1000x1000?text=Medium%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%206Image0> .

    <https://place-hold.it/600x600?text=Medium%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%206Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:46> .
}

ns1:379040a4cd18dbe23f85a68e06109f9db81054ae105f6bceb5bd6e5c83927c91 {
    <https://place-hold.it/1000x1000?text=Spatial%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%200Image1> .

    <https://place-hold.it/600x600?text=Spatial%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%200Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:70> .
}

ns1:ade7d73276fba847a99ffb31abc312ae235c176917a6310c5061fedfb6b11e31 {
    <https://place-hold.it/1000x1000?text=Medium%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%204Image0> .

    <https://place-hold.it/600x600?text=Medium%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%204Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:44> .
}

ns1:ccec28c0af8845ae65ad2de3deb7fabb852d4e17b3f841019101327c5b46aa5e {
    <https://place-hold.it/1000x1000?text=Subject%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:80> .
}

ns1:73c354c5ae54ea836b00863fc158b5037b68cf744753ad26cdad223e78500e6c {
    <https://place-hold.it/1000x1000?text=Source%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Source%209Image1> .

    <https://place-hold.it/600x600?text=Source%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%209Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:69> .
}

ns1:4ecebc83b82a3a47aace4a4560f682fb1a16c598e71ee4cc881299030304eaec {
    <https://place-hold.it/1000x1000?text=Type%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Type%200Image0> .

    <https://place-hold.it/600x600?text=Type%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%200Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:100> .
}

ns1:ab252db506369348a795bee87083d4f11a1d0424f0533efa8a7c34c8301ce5c9 {
    <https://place-hold.it/1000x1000?text=Type%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Type%209Image0> .

    <https://place-hold.it/600x600?text=Type%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%209Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:109> .
}

ns1:a968699fa4f5ff55b36e8d79d8d0f787531629a6ac945600e5f6a544183eec86 {
    <https://place-hold.it/1000x1000?text=Publisher%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%208Image0> .

    <https://place-hold.it/75x75?text=Publisher%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%208Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:58> .
}

ns1:92285104c9cf538efb407da8d03af85448a0ee72b550c640d9954d86914f7842 {
    <https://place-hold.it/1000x1000?text=Subject%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%201Image0> .

    <https://place-hold.it/600x600?text=Subject%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%201Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:81> .
}

ns1:7dae3ee1b81fe465cda5114c8aaa8d78fa0917cc35e9aab5b72e8b1e74267a88 {
    <https://place-hold.it/1000x1000?text=Spatial%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:76> .
}

ns1:93bcf3b687b3031f01aad9583c245e0af791186b9921556ceb1188aca10fd076 {
    <http://creativecommons.org/licenses/by-nc-sa/4.0/> a cc:License,
            cms:License ;
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
}

ns1:43f06cca6e4d7be6b164cc3b9e84afada0ad719a68fbef368b5a348dc961823f {
    <https://place-hold.it/1000x1000?text=Language%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:29> .
}

ns1:069691d1e94b8b94632e6e2405ce0f172982b1d50044b57c26e6dc10dd219c0e {
    <https://place-hold.it/1000x1000?text=Publisher%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%203Image0> .

    <https://place-hold.it/75x75?text=Publisher%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%203Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:53> .
}

ns1:5e38d08bbedce590e23d498ecca89927bef49389170c378e1be6cfad92c0cad1 {
    <https://place-hold.it/1000x1000?text=Language%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Language%204Image0> .

    <https://place-hold.it/600x600?text=Language%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%204Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:24> .
}

ns1:eadb6136779e3e2b4bd0cd03ae3fc96b37ee8813b6aa45693b71502dd19e76d3 {
    <https://place-hold.it/1000x1000?text=Type%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Type%207Image0> .

    <https://place-hold.it/75x75?text=Type%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%207Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:107> .
}

ns1:8aee090dd09ca37f9e16cb226f711b1d7427d81045be9232119025b123bd0585 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:9> .
}

ns1:6f21921a9a67cf5e9961aa470f715cd65616fded917c02ae65cb8bb9c5ad4402 {
    <https://place-hold.it/1000x1000?text=Extent%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%201Image0> .

    <https://place-hold.it/600x600?text=Extent%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%201Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:11> .
}

ns1:426c6a79659e9522b60c1e6b1d06e8622053a3a94606a07bc278ab7d8c3c4093 {
    <https://place-hold.it/1000x1000?text=Publisher%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:59> .
}

ns1:a163113e7cae4794dffcaa19014f29948f37c20426b00a12c68ac245628fdf94 {
    <https://place-hold.it/1000x1000?text=Language%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:20> .
}

ns1:5a6359942382750dacb4054b06b1f654004c81ea5fec749ae62ee76921d2a0b3 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:64> a cms:NamedValue ;
        dcterms:title "Named value 64" ;
        rdf:predicate dcterms:source ;
        rdf:value "Source 4" ;
        skos:prefLabel "Named value 64" .
}

ns1:e341a45111ffd2195f69f47c30b24ec46d96814b2a0c0b577344cce5f57c9a41 {
    <https://place-hold.it/1000x1000?text=Type%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Type%207Image0> .

    <https://place-hold.it/600x600?text=Type%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%207Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:107> .
}

ns1:037d22971d2fceaf1f16139b7c22568ccea664fda7ad12d3d48ab5d96f4a7a9d {
    <https://place-hold.it/1000x1000?text=Material%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Material%209Image0> .

    <https://place-hold.it/600x600?text=Material%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%209Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:39> .
}

ns1:209aeb4ceb71a8b43af342bc1d7202d0c47b5253abad919ea802622a0e75cff7 {
    <https://place-hold.it/1000x1000?text=Medium%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%209Image0> .

    <https://place-hold.it/75x75?text=Medium%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%209Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:49> .
}

ns1:ff0bfb84fe0937aa78c4acd86e9f064e10f896f9e4afede1addfea7d42b871dd {
    <https://place-hold.it/1000x1000?text=Source%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Source%202Image0> .

    <https://place-hold.it/600x600?text=Source%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%202Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:62> .
}

ns1:6c9aa5833b9ca9e0a20c000f60ce1d8f1ce824e722e6bf7c328427159080c790 {
    <https://place-hold.it/1000x1000?text=Material%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Material%207Image0> .

    <https://place-hold.it/600x600?text=Material%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%207Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:37> .
}

ns1:d26b67f0d1c7e81228a81c66bb7268b8e92b62cbee113009674fef9388714f26 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:1> a cms:NamedValue ;
        dcterms:title "Named value 1" ;
        rdf:predicate vra:culturalContext ;
        rdf:value "Cultural context 1" ;
        skos:prefLabel "Named value 1" .
}

ns1:ab51b84b169310e837d8246fd986ddb962d4ccf7600b8bcead69047a69a5217d {
    <https://place-hold.it/1000x1000?text=Medium%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:48> .
}

ns1:f3400d52486275c9bfacecd8430eeded8d08ab71993e74a2e4ad66cf29870476 {
    <https://place-hold.it/1000x1000?text=Source%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Source%202Image0> .

    <https://place-hold.it/75x75?text=Source%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%202Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:62> .
}

ns1:bfe4250c57a92fc4cce04bba25a206996de18971a168d16c33143944617a74af {
    <https://place-hold.it/1000x1000?text=Spatial%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%205Image0> .

    <https://place-hold.it/75x75?text=Spatial%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%205Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:75> .
}

ns1:dc56ac12be4f56ee401d95b853c2f6b0a54cb235cab40a23805e0855ce1c30ac {
    <https://place-hold.it/1000x1000?text=Cultural%20context%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%209Image1> .

    <https://place-hold.it/600x600?text=Cultural%20context%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%209Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:9> .
}

ns1:85efc346867c34b58f1a9a313f992406b2a4a9b38926b9da97181aed16e6eb26 {
    <https://place-hold.it/1000x1000?text=Technique%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%202Image1> .

    <https://place-hold.it/75x75?text=Technique%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%202Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:92> .
}

ns1:5f634ecad936feec03197ec8e0491b9b93368b8d3ccdd339cd083c4956963bbb {
    <https://place-hold.it/1000x1000?text=Language%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Language%203Image0> .

    <https://place-hold.it/75x75?text=Language%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%203Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:23> .
}

ns1:6a880b02192c7161c3b20c52ebc704519407bbc49af121475966140d7fbfeea7 {
    <https://place-hold.it/1000x1000?text=Publisher%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:57> .
}

ns1:ac727278b2c4e66690268159eb76431e0ed37f23490bb84e9f3cddd379866070 {
    <http://creativecommons.org/licenses/by-nc-nd/4.0/> a cc:License,
            cms:License ;
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
}

ns1:a72be38bb9937c1497cf72345d5a74d986fe1f7e22825ba7d4d5af98d466d5ea {
    <https://place-hold.it/1000x1000?text=Language%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Language%202Image0> .

    <https://place-hold.it/75x75?text=Language%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%202Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:22> .
}

ns1:2ade541b0372cfc4a6317df9b9a278027404a1261153b154dd43e5e51ac0c273 {
    <https://place-hold.it/1000x1000?text=Source%208Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Source%208Image0> .

    <https://place-hold.it/75x75?text=Source%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%208Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:68> .
}

ns1:8e516159eeb3c57af00e3311f82df514b806db67ad16d90dbdfc620ebb27d114 {
    <https://place-hold.it/1000x1000?text=Source%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Source%208Image1> .

    <https://place-hold.it/600x600?text=Source%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%208Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:68> .
}

ns1:db68862d2589c20ea89c458b7c38340213647cf9785fb4fe560dd7ef8d589f76 {
    <https://place-hold.it/1000x1000?text=Type%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Type%206Image1> .

    <https://place-hold.it/600x600?text=Type%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%206Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:106> .
}

ns1:6ed39ed61391f437ed30bdb28e33c806d36b24d7cf356ba3b8a54c22e3389df6 {
    <https://place-hold.it/1000x1000?text=Source%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Source%204Image1> .

    <https://place-hold.it/75x75?text=Source%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%204Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:64> .
}

ns1:58765ce97a2ff98368f58af3f75c1d46a9d6dd728990d7ad56ca1da907d844ca {
    <https://place-hold.it/1000x1000?text=Collection1Work4Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Collection1Work4Image1> .

    <https://place-hold.it/600x600?text=Collection1Work4Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work4 image 1 rights holder" ;
        dcterms:title "Collection1Work4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection1Work4Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection1/work4> .
}

ns1:5914c095272068bd3c8e3ccdade634f6c95833d9cbdf52471d8e170acaee1ec4 {
    <https://place-hold.it/1000x1000?text=Collection0Work0Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work0 image 1 rights holder" ;
        dcterms:title "Collection0Work0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection0/work0> .
}

ns1:d85ae77e98001631afc9ada247f69c1e65e0e8dca5003971e7f080f04e79ff3e {
    <https://place-hold.it/1000x1000?text=Material%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Material%204Image1> .

    <https://place-hold.it/75x75?text=Material%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%204Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:34> .
}

ns1:8857937b6f62a846013db932beadeb0d5a706592f34ecc4080aed39c4c6a11e1 {
    <https://place-hold.it/1000x1000?text=Type%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Type%205Image1> .

    <https://place-hold.it/75x75?text=Type%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%205Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:105> .
}

ns1:1da29a7768de49acedfe1bb9418d10c391ca86488e7129fa6caa4524094ab4c0 {
    <https://place-hold.it/1000x1000?text=Collection0Work2Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Collection0Work2Image0> .

    <https://place-hold.it/600x600?text=Collection0Work2Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work2 image 0 rights holder" ;
        dcterms:title "Collection0Work2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection0Work2Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection0/work2> .
}

ns1:084a303d51f27c12b629b6c7110f93cee48e39d7ca6d71fc6898d47dd4b9de29 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%207Image0> .

    <https://place-hold.it/600x600?text=Cultural%20context%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%207Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:7> .
}

ns1:7c63ce95802e6cece33f082496308904f2f97fb0f75402860d92f857d933ddae {
    <http://example.com/organization1> a cms:Agent,
            cms:Organization ;
        foaf:name "Organization 1" ;
        foaf:page <http://example.com/organization1page> .
}

ns1:abaf6689919091cbc57dfd234af3bc057144a4c49be88e0191daf634bbb1fb15 {
    <https://place-hold.it/1000x1000?text=Technique%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%201Image0> .

    <https://place-hold.it/75x75?text=Technique%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%201Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:91> .
}

ns1:a30451826e904ef8b753c4f3740c29be2292339b89707838986ddf5ad5da551f {
    <https://place-hold.it/1000x1000?text=Technique%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%205Image1> .

    <https://place-hold.it/75x75?text=Technique%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%205Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:95> .
}

ns1:954a9d0773830133fd14ca8b76945902380bd5d2e553cf8fffb918b132a99b0a {
    <https://place-hold.it/1000x1000?text=Cultural%20context%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%200Image0> .

    <https://place-hold.it/600x600?text=Cultural%20context%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%200Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:0> .
}

ns1:f1f82280cc3e9d7af0b92d4aa07ee2809a38d689fc2e5e4cc5b6c22c763a008c {
    <https://place-hold.it/1000x1000?text=Medium%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:45> .
}

ns1:6157cf4c0f1c9f14716db1baa58fd675eb81ebbff516964dce4da15d78b07db1 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:8> .
}

ns1:180f77054e14a1d313bc4c79d8e0379bc0398fc2c2bddf02b3490b14ee40ef58 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%205Image0> .

    <https://place-hold.it/600x600?text=Cultural%20context%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%205Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:5> .
}

ns1:40c95207d647acde5eaf3410830f778acce09fbb43ef2b30cf90cda145cb2f8e {
    <https://place-hold.it/1000x1000?text=Material%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Material%205Image1> .

    <https://place-hold.it/600x600?text=Material%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%205Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:35> .
}

ns1:746625ee748ac80e112dfa861a3e61deecc73bcbe1e1892169d15f8f6db17817 {
    <https://place-hold.it/1000x1000?text=Technique%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:91> .
}

ns1:2d820409be7bb7398d8d349ab4236edfdfeb2dbbda7f14a0941eb11fb27d825b {
    <https://place-hold.it/1000x1000?text=Type%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Type%208Image0> .

    <https://place-hold.it/600x600?text=Type%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%208Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:108> .
}

ns1:83adc7ba9296ffa003f1f791e19285807a12e704bf5427685932aa56bc7c36d3 {
    <https://place-hold.it/1000x1000?text=Subject%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%200Image0> .

    <https://place-hold.it/75x75?text=Subject%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%200Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:80> .
}

ns1:64899deb17b0a2a452243a2411b8637baa4f2471926c8b1a16ee93d5324ca35f {
    <http://rightsstatements.org/vocab/NKC/1.0/> a cms:RightsStatement ;
        dcterms:description "This Rights Statement indicates that the organization that has published the Item believes that no copyright or related rights are known to exist for the Item, but that a conclusive determination could not be made."@en ;
        dcterms:identifier "NKC" ;
        skos:definition """The organization that has made the Item available reasonably believes that the Item is not restricted by copyright or related rights, but a conclusive determination could not be made.

  Please refer to the organization that has made the Item available for more information.

  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use."""@en ;
        skos:note "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use."@en,
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available."@en,
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material."@en ;
        skos:prefLabel "No Known Copyright"@en ;
        skos:scopeNote "This Rights Statement should be used for Items for which the copyright status has not been determined conclusively, but for which the organization that intends to make the Item available has reasonable cause to believe that the underlying Work is not covered by copyright or related rights anymore. This Rights Statement should not be used for Orphan Works (which are assumed to be in-copyright) or for Items where the organization that intends to make the Item available has not undertaken an effort to ascertain the copyright status of the underlying Work."@en .
}

ns1:44525bde91f71b227e91a05306079779e2d07c9e4961d36191f207c8ca5ecd23 {
    <http://creativecommons.org/licenses/by-nc/2.0/> a cc:License,
            cms:License ;
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
}

ns1:27f63167b823cd6674f9224b42f6b3b4bffcd941a287f0fe1918e2ec7f5289cc {
    <http://creativecommons.org/licenses/by-nc-nd/2.5/> a cc:License,
            cms:License ;
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
}

ns1:fd63d0b098622d84d50da25e4ae71118e25abda7a82c2fa73ad968fc6428ba65 {
    <https://place-hold.it/1000x1000?text=Type%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:105> .
}

ns1:cb23f7f72f411859ac9b5f60240e9cf76de5779020d46033aa3cd6fd1964a87b {
    <https://place-hold.it/1000x1000?text=Material%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Material%206Image0> .

    <https://place-hold.it/600x600?text=Material%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%206Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:36> .
}

ns1:50ca744dbbb6c4a3a26de25c3a5d25597fa3d34cf1ae648d774460df49b02a99 {
    <https://place-hold.it/1000x1000?text=Subject%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:85> .
}

ns1:64cd84d7378d980849fe4295b89b78be0237dc61f181469fd421cc4221d399f0 {
    <https://place-hold.it/1000x1000?text=Medium%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:46> .
}

ns1:b437455f13d51c51c56ef9acf979e81ab290c5162cb969c641f2d52934206dd9 {
    <https://place-hold.it/1000x1000?text=Language%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Language%207Image1> .

    <https://place-hold.it/75x75?text=Language%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%207Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:27> .
}

ns1:092673032c889ee45c6b3affbcbfbd0f5112374eb97278c9566b2f30312cf8f2 {
    <https://place-hold.it/1000x1000?text=Collection1Work5Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Collection1Work5Image1> .

    <https://place-hold.it/75x75?text=Collection1Work5Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work5 image 1 rights holder" ;
        dcterms:title "Collection1Work5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection1Work5Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection1/work5> .
}

ns1:7badede9b2be7909b8454ffe6a6fc63d0dbdb6b684c82076c43b78dddda55cdb {
    <https://place-hold.it/1000x1000?text=Spatial%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%202Image1> .

    <https://place-hold.it/600x600?text=Spatial%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%202Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:72> .
}

ns1:15d8eebfa990c5e1b271c2c06cee48428dca1f909f5a3b19ffb43fe1553ba5ee {
    <http://creativecommons.org/licenses/by-sa/4.0/> a cc:License,
            cms:License ;
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
}

ns1:562616f846338893de428f11c2c8c164a1600f485fe2ec927c46aaafeff2d7c6 {
    <https://place-hold.it/1000x1000?text=Extent%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%201Image1> .

    <https://place-hold.it/600x600?text=Extent%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%201Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:11> .
}

ns1:02c8f5d1bc244082d4bf947f37f5d5ac9c98b027f948a3ef1d9a60d1c391d03c {
    <https://place-hold.it/1000x1000?text=Source%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Source%208Image1> .

    <https://place-hold.it/75x75?text=Source%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%208Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:68> .
}

ns1:aa0e722c2f82d130732022d3782800da4215cf860b6fd09a9249c2369e2ad31e {
    <https://place-hold.it/1000x1000?text=Subject%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:84> .
}

ns1:59f82f2ee2bfe99409490b2ae5e0e2361b4a5f8113a65708130b139db930c3e9 {
    <https://place-hold.it/1000x1000?text=Source%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Source%201Image0> .

    <https://place-hold.it/75x75?text=Source%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%201Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:61> .
}

ns1:2340d674d46ef3173f99e206b301d50e6625548c9be8b018fa157fe644718e69 {
    <https://place-hold.it/1000x1000?text=Medium%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%204Image1> .

    <https://place-hold.it/600x600?text=Medium%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%204Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:44> .
}

ns1:3be5f6746b7bd9c4130fd29c5632ee65e4e67e020af54d02c7e6b37036622571 {
    <https://place-hold.it/1000x1000?text=Publisher%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%209Image0> .

    <https://place-hold.it/600x600?text=Publisher%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%209Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:59> .
}

ns1:59649248754e27908a4ee184de18e598d96332df69ad3e3de8744c1f725a967a {
    <https://place-hold.it/1000x1000?text=Spatial%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%206Image0> .

    <https://place-hold.it/600x600?text=Spatial%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%206Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:76> .
}

ns1:4dba8592da2c6ec777032e412e4aaa0e5e9710fdcdb1fb54974d64ba6263d33f {
    <https://place-hold.it/1000x1000?text=Type%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Type%209Image0> .

    <https://place-hold.it/75x75?text=Type%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%209Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:109> .
}

ns1:188c5b88e5c0e75d134caeb6cb8e97c56e86acfefdc65a5caaab827b1b8f8b41 {
    <https://place-hold.it/1000x1000?text=Subject%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%205Image0> .

    <https://place-hold.it/600x600?text=Subject%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%205Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:85> .
}

ns1:22bcbd02057befc74472386819f3c9f89d0ff1c912f4d46863f886184205e245 {
    <https://place-hold.it/1000x1000?text=Spatial%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:79> .
}

ns1:4b108eeabc320ae000654c6f353cc0e19f2b8ee3be1f77de52cae91f7982dc3f {
    <http://creativecommons.org/licenses/publicdomain/> a cc:License,
            cms:License ;
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
}

ns1:43f14704901967f2b5f59acd710ae23bd5452dd2002145dd23725ed600254354 {
    <https://place-hold.it/1000x1000?text=Publisher%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:51> .
}

ns1:592efb3ff2b568319cb3f3461faf9d776e507203b1ab26f9959767ec78841bcb {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:77> a cms:NamedValue ;
        dcterms:title "Named value 77" ;
        rdf:predicate dcterms:spatial ;
        rdf:value "Spatial 7" ;
        skos:prefLabel "Named value 77" .
}

ns1:432be5088152970d948729e827c98be24cc0106e2fbf41275932f53d1d7e6a5e {
    <https://place-hold.it/1000x1000?text=Source%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:69> .
}

ns1:b528ecb81d6aa2894e7d1bbbf784ab808929980a666332d98d1fa3198452192e {
    <https://place-hold.it/1000x1000?text=Subject%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%203Image0> .

    <https://place-hold.it/75x75?text=Subject%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%203Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:83> .
}

ns1:cf55a160f877a5ad9f3b986aa90be1cab6fdd9854c5f915e60e99c316a390ddc {
    <https://place-hold.it/1000x1000?text=Publisher%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:57> .
}

ns1:ed86519274a1c988afca3709abf1c667b224e7dd366e9d50eec1d37102d85422 {
    <https://place-hold.it/1000x1000?text=Medium%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%209Image1> .

    <https://place-hold.it/600x600?text=Medium%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%209Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:49> .
}

ns1:6878702a20f6db836592b2d62f3f5ebb4872d2e67a7aa6eb6c27d434ecbc947d {
    <https://place-hold.it/1000x1000?text=Technique%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:91> .
}

ns1:5eed7abfa1de542267a91c3d57f31d652252812899a1e70c864258791071e2b1 {
    <https://place-hold.it/1000x1000?text=Collection1Work6Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Collection1Work6Image0> .

    <https://place-hold.it/75x75?text=Collection1Work6Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work6 image 0 rights holder" ;
        dcterms:title "Collection1Work6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection1Work6Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection1/work6> .
}

ns1:9bcec2931359f8bdde7542f0c7329d482be52d53489de19253b0cc543b78874e {
    <https://place-hold.it/1000x1000?text=Language%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:24> .
}

ns1:110dee1964d5675f9de32e60358f90c60ce547321005944518726a178c31c851 {
    <https://place-hold.it/1000x1000?text=Subject%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%200Image0> .

    <https://place-hold.it/600x600?text=Subject%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%200Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:80> .
}

ns1:7f7af3a79f49ccb55024b4923a1eea1934d4ef9db89a1fc771f29b51e29fca39 {
    <https://place-hold.it/1000x1000?text=Publisher%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:58> .
}

ns1:b541e47c7e350dfe8ca5d2ddef2aa19e7a49b33709f59fc5bcdb9a39423d6c6a {
    <https://place-hold.it/1000x1000?text=Extent%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%204Image1> .

    <https://place-hold.it/75x75?text=Extent%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%204Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:14> .
}

ns1:3a5155f99c68f40360c56a6ee1e197390237269910870e1c44f2ac4495e23ee9 {
    <http://example.com/collection1/work7Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-25"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection1Work7 opening" ;
        cms:work <http://example.com/collection1/work7> .
}

ns1:f527a7327d4931c32dbe7e19f967b8fbeeb656a49db077cff30b03956e63c46d {
    <https://place-hold.it/1000x1000?text=FreestandingWork10Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/freestandingwork10> .
}

ns1:c572f9e39279df0eb154f358789c2d87358f2e3e01c76fa73070fe74ed6dd3c7 {
    <https://place-hold.it/1000x1000?text=Language%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Language%205Image1> .

    <https://place-hold.it/600x600?text=Language%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%205Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:25> .
}

ns1:238a19cdae7115a69c7dd2f06c8124b59b1cc8deb73285b02cc13921ab39feb9 {
    <https://place-hold.it/1000x1000?text=Technique%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%204Image0> .

    <https://place-hold.it/75x75?text=Technique%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%204Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:94> .
}

ns1:231af04819ccf7293e83abe6a1739ac6c085be81ede39318b0150f8c5dd6a5b2 {
    <https://place-hold.it/1000x1000?text=Subject%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%206Image0> .

    <https://place-hold.it/600x600?text=Subject%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%206Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:86> .
}

ns1:abacf2a09a1fe0407abb2961140afd7d0d3476e4f16e00b887cc97bdf2b5e9d1 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:60> a cms:NamedValue ;
        dcterms:title "Named value 60" ;
        rdf:predicate dcterms:source ;
        rdf:value "Source 0" ;
        skos:prefLabel "Named value 60" .
}

ns1:86384b2e9bf7a54e4bcfe8fe13eda101ac50785d1137743fbb45a6f42962d878 {
    <https://place-hold.it/1000x1000?text=Medium%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:49> .
}

ns1:94be0f15453078c3870011f7431122e27654fc074384f3ce203ae24ffcb2ef2d {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:25> a cms:NamedValue ;
        dcterms:title "Named value 25" ;
        rdf:predicate dcterms:language ;
        rdf:value "Language 5" ;
        skos:prefLabel "Named value 25" .
}

ns1:90cfa888c05be7c470aeb08fb3a1c3d699279f8a34425a89178fe3ad4949c416 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%202Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%202Image0> .

    <https://place-hold.it/600x600?text=Cultural%20context%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%202Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:2> .
}

ns1:57865c9b61f13abbe602edeac0c4cefc627b2eeaee23e53da413ce600a87e8b6 {
    <https://place-hold.it/1000x1000?text=Type%209Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Type%209Image1> .

    <https://place-hold.it/600x600?text=Type%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%209Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:109> .
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

ns1:4fbf8fcf90b99d644573bc4a52ac6327e8b97f6c0c91d374cf982314e547e4d6 {
    <https://place-hold.it/1000x1000?text=Publisher%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%207Image1> .

    <https://place-hold.it/75x75?text=Publisher%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%207Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:57> .
}

ns1:00616762eee66c01fd356134b279b9a7e575bbd48835056b6f2a5b2f359e89d7 {
    <https://place-hold.it/1000x1000?text=Subject%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%203Image0> .

    <https://place-hold.it/600x600?text=Subject%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%203Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:83> .
}

ns1:4b9b22223920be6bbe8969f5d50723f830ab4063ade5cfd33e723ec40100a6bb {
    <http://example.com/collection0/work2Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Collection0Work2 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection0Work2 closing" ;
        cms:work <http://example.com/collection0/work2> .
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

ns1:b2a178b65e343d02338366481f2ed75af32c8898e7a2f74a30c17fa327cbb094 {
    <https://place-hold.it/1000x1000?text=Publisher%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%204Image0> .

    <https://place-hold.it/600x600?text=Publisher%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%204Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:54> .
}

ns1:c8dd255f820840086ad9be9f4daf031a17b1ec21801b842ae7b95898aa1f17af {
    <https://place-hold.it/1000x1000?text=Extent%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:11> .
}

ns1:8d1c14e212e1d30d85383beddcf9e45ece71e48d19b87f45a070649cd03f7c7d {
    <https://place-hold.it/1000x1000?text=Subject%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:87> .
}

ns1:584ab08a818a1a6f6448baae29f3f55f16b389b9fa312eb78ce147128b0da88f {
    <https://place-hold.it/1000x1000?text=Language%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Language%208Image1> .

    <https://place-hold.it/600x600?text=Language%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%208Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:28> .
}

ns1:1938db59e539b6360ba3bb11edc4b777752ae030b8db96a8369c2f60bb5fd06d {
    <https://place-hold.it/1000x1000?text=Collection1Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Collection1Image1> .

    <https://place-hold.it/600x600?text=Collection1Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1 image 1 rights holder" ;
        dcterms:title "Collection1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection1Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection1> .
}

ns1:2a6132ae7100bc043c2ba4169cd4e322c944cbfd0ca3f848b52f4561908f7245 {
    <https://place-hold.it/1000x1000?text=Extent%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%206Image0> .

    <https://place-hold.it/600x600?text=Extent%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%206Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:16> .
}

ns1:bc11a48c4396f364ebc6daedd079d79aece1b75a746d2e323fa0f38cf1f745c1 {
    <https://place-hold.it/1000x1000?text=Spatial%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%204Image0> .

    <https://place-hold.it/600x600?text=Spatial%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%204Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:74> .
}

ns1:d2ae2f9938234450f9b9d0cb22ec3feef52bd1394a7309998426376544f7e039 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:48> a cms:NamedValue ;
        dcterms:title "Named value 48" ;
        rdf:predicate dcterms:medium ;
        rdf:value "Medium 8" ;
        skos:prefLabel "Named value 48" .
}

ns1:02a5fa7d9c39be9b5da56a8f31e044680fb47815a84cf4094b479895be8828d4 {
    <https://place-hold.it/1000x1000?text=Type%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Type%201Image0> .

    <https://place-hold.it/75x75?text=Type%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%201Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:101> .
}

ns1:261eaede4865b2578b6d1ef428d49764ec14c0e5a439f3c168faebd37a6e52d6 {
    <http://creativecommons.org/publicdomain/zero/1.0/> a cc:License,
            cms:License ;
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
}

ns1:e5f12ba7554f94d90af93812370c4bc27f4e04cce2a3c2c6974ed6c302853439 {
    <https://place-hold.it/1000x1000?text=Technique%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:93> .
}

ns1:7c5edeeb8fed64056786f9a7b7e4c9420fe784d64e05c91c45c6d15e8f59e456 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%204Image1> .

    <https://place-hold.it/600x600?text=Cultural%20context%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%204Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:4> .
}

ns1:c126474495dd6fd2d50fd2c4291e180f2f2ca157ffa4f8d3457bfea51f9ab709 {
    <https://place-hold.it/1000x1000?text=FreestandingWork11Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/freestandingwork11> .
}

ns1:2bcbb323101c969c77994481382ec5a1dc98db929837a319432b3be34816acfe {
    <https://place-hold.it/1000x1000?text=Cultural%20context%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:3> .
}

ns1:5ab6a140062aca9a719cf25e6088d3b25ffd02aee3365604e34e2df73c10adca {
    <https://place-hold.it/1000x1000?text=Extent%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%203Image1> .

    <https://place-hold.it/75x75?text=Extent%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%203Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:13> .
}

ns1:5d38b0f14358aef92999b201c44322c1455bab5e9de5a780ee02a2a051401078 {
    <https://place-hold.it/1000x1000?text=Extent%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:17> .
}

ns1:09946dcf743efd1ef34fd36fec3255c316a99e36ea557117b722190ab30948b3 {
    <https://place-hold.it/1000x1000?text=Source%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Source%201Image1> .

    <https://place-hold.it/75x75?text=Source%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%201Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:61> .
}

ns1:6874eb9dd4f76a803211a5fd3b3cc922bc3bc4f06766671e36c2fa7e5822d6f8 {
    <https://place-hold.it/1000x1000?text=Source%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:65> .
}

ns1:5b809cc9671b8dc015ee69ebad2c84df42cbaedd72b55452548c69f6dccc0380 {
    <http://example.com/freestandingwork11> a cms:Work ;
        dcterms:alternative "FreestandingWork11 alternative title 0",
            "FreestandingWork11 alternative title 1" ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:named_value:11>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:12> ;
        dcterms:identifier "FreestandingWork11Id0",
            "FreestandingWork11Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:named_value:21>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:22> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:named_value:41>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:42> ;
        dcterms:provenance "FreestandingWork11 provenance 0",
            "FreestandingWork11 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:named_value:51>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:52> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:named_value:61>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:62> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:synthetic_data:named_value:71>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:72> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:named_value:81>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:82> ;
        dcterms:title "FreestandingWork11" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:named_value:101>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:102> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:named_value:1>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:2> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:named_value:31>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:32> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:named_value:91>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:92> .
}

ns1:fde5be7bcac4ff3b30a72ae83b3c3927016d9c4b51e1908f24a6e7dae50d2a10 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:68> a cms:NamedValue ;
        dcterms:title "Named value 68" ;
        rdf:predicate dcterms:source ;
        rdf:value "Source 8" ;
        skos:prefLabel "Named value 68" .
}

ns1:0fdaad984d7444e33f47d4631ff3afb48955f253930aaec103d91a948cc62134 {
    <https://place-hold.it/1000x1000?text=FreestandingWork11Image1> foaf:thumbnail <https://place-hold.it/600x600?text=FreestandingWork11Image1> .

    <https://place-hold.it/600x600?text=FreestandingWork11Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=FreestandingWork11Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/freestandingwork11> .
}

ns1:86a8a510332d3d1df9d5f65e75e954638fa234a1f3d8633fea974f72eb875e6c {
    <https://place-hold.it/1000x1000?text=Language%204Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Language%204Image1> .

    <https://place-hold.it/600x600?text=Language%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%204Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:24> .
}

ns1:d06949ba2d68267bef5c347c841619cfbdda3883178615485d7d198c83898821 {
    <https://place-hold.it/1000x1000?text=Material%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Material%208Image0> .

    <https://place-hold.it/600x600?text=Material%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%208Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:38> .
}

ns1:9122e48e99e48254de03186c5fad85fcd2719df63aaec60d038f57a40e41fc3a {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:52> a cms:NamedValue ;
        dcterms:title "Named value 52" ;
        rdf:predicate dcterms:publisher ;
        rdf:value "Publisher 2" ;
        skos:prefLabel "Named value 52" .
}

ns1:247eda7c589499fc778f0f1548de0c2abd09d2d1f2481b7b704a472708b028b7 {
    <https://place-hold.it/1000x1000?text=Publisher%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%207Image0> .

    <https://place-hold.it/600x600?text=Publisher%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%207Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:57> .
}

ns1:14982abddffaada76c2b9762cb1e9c3eb13465cebf8f5c62be431d85fddcc85e {
    <https://place-hold.it/1000x1000?text=Subject%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Subject%208Image0> .

    <https://place-hold.it/600x600?text=Subject%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%208Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:88> .
}

ns1:939475ecc1f4ad13a04d0bb73190d4a35fbd1303730007e9079039f949609bf7 {
    <https://place-hold.it/1000x1000?text=Extent%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%202Image0> .

    <https://place-hold.it/75x75?text=Extent%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%202Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:12> .
}

ns1:22553f3710fb260a2e9f301356b71a315efd8368c8432feb3cf54d1d29157ede {
    <https://place-hold.it/1000x1000?text=Spatial%206Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%206Image1> .

    <https://place-hold.it/75x75?text=Spatial%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%206Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:76> .
}

ns1:e8cd2b00f2ba37fc0bc5a5e86a0c5205fa182f419ff29480bc769fdcfda3d76a {
    <https://place-hold.it/1000x1000?text=Source%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:62> .
}

ns1:b7e05a9161272d204e228c6367553a08db60b6399d581fed108fcb1fab80f4fc {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:44> a cms:NamedValue ;
        dcterms:title "Named value 44" ;
        rdf:predicate dcterms:medium ;
        rdf:value "Medium 4" ;
        skos:prefLabel "Named value 44" .
}

ns1:786a2088449d6a0b6e27c530774bb89c73b20981883e2569f4b4837cc69d89e0 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:85> a cms:NamedValue ;
        dcterms:title "Named value 85" ;
        rdf:predicate dcterms:subject ;
        rdf:value "Subject 5" ;
        skos:prefLabel "Named value 85" .
}

ns1:f99e240e5262a68b1d7f3cb078b252fb46adaf5ad99117d917e4736a0a75f0b7 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:3> a cms:NamedValue ;
        dcterms:title "Named value 3" ;
        rdf:predicate vra:culturalContext ;
        rdf:value "Cultural context 3" ;
        skos:prefLabel "Named value 3" .
}

ns1:d61c89b8e7cfb11e27c8c9df2b2810832a2f237495875b493739932aed80e956 {
    <https://place-hold.it/1000x1000?text=Publisher%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%207Image1> .

    <https://place-hold.it/600x600?text=Publisher%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%207Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:57> .
}

ns1:598f8f6bffa1a73630faf5bea583ec0a08b247a2678581cc6c100d95fa319a6b {
    <https://place-hold.it/1000x1000?text=Language%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:22> .
}

ns1:ab6daf4a046095419d0802fb7760bfdd6a9c25c02a6b8c87fc47a66786463c04 {
    <http://rightsstatements.org/vocab/collection-nc/1.0/> a cms:RightsStatement ;
        dcterms:identifier "collection-nc" ;
        skos:prefLabel "Statements for works that are not in copyright"@en .
}

ns1:17967568bae5ec4b2d601c882e37367c96de37609946712bdf7aa2602682091f {
    <https://place-hold.it/1000x1000?text=Extent%208Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%208Image0> .

    <https://place-hold.it/600x600?text=Extent%208Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%208Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:18> .
}

ns1:5e78be71ceeda94c91509f7c3c75a44d84728c72e8cb92cdb2312eb2e8a6616d {
    <https://place-hold.it/1000x1000?text=Medium%203Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%203Image0> .

    <https://place-hold.it/75x75?text=Medium%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%203Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:43> .
}

ns1:94556258b163e68e5ffd979a04b2b8062bf723445dd92c15e5433af850cefd8c {
    <https://place-hold.it/1000x1000?text=Material%204Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Material%204Image0> .

    <https://place-hold.it/600x600?text=Material%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%204Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:34> .
}

ns1:112b21ed13fe08a5b01af3de338a37e234de40dffb7760832daa60cdd10c7112 {
    <https://place-hold.it/1000x1000?text=Technique%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%203Image1> .

    <https://place-hold.it/75x75?text=Technique%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%203Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:93> .
}

ns1:09d502ed027360767503592c18fbfc99228edf7c67094e694a7c9cb330516396 {
    <https://place-hold.it/1000x1000?text=Spatial%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%207Image1> .

    <https://place-hold.it/600x600?text=Spatial%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%207Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:77> .
}

ns1:11436c2a37fdf35c2f9970b9b4eebdab251c43828ab19f215bcd191cf7d2e299 {
    <https://place-hold.it/1000x1000?text=Collection1Work4Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Collection1Work4Image0> .

    <https://place-hold.it/600x600?text=Collection1Work4Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work4 image 0 rights holder" ;
        dcterms:title "Collection1Work4 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection1Work4Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection1/work4> .
}

ns1:1c46895ca8a1e3c9d0998112164957779c024c3a61930cbd253f3c086540117e {
    <https://place-hold.it/1000x1000?text=Technique%202Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%202Image0> .

    <https://place-hold.it/75x75?text=Technique%202Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%202Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:92> .
}

ns1:84f7fd74415690bb198813661b5963940d6449f761a4dd1fb53c9cea83433d8c {
    <https://place-hold.it/1000x1000?text=Publisher%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%201Image0> .

    <https://place-hold.it/75x75?text=Publisher%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%201Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:51> .
}

ns1:ecb72327f82ae8dad9fa8ebcc7ccc19674f8338909b8abcd95eb448ef5806529 {
    <https://place-hold.it/1000x1000?text=Collection1Work6Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Collection1Work6Image1> .

    <https://place-hold.it/600x600?text=Collection1Work6Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work6 image 1 rights holder" ;
        dcterms:title "Collection1Work6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection1Work6Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection1/work6> .
}

ns1:3f6b74dcae87cfaea646ab8a36ca487461868d535778d87fc8cc4043eb8e01bc {
    <http://creativecommons.org/licenses/by-nd/3.0/> a cc:License,
            cms:License ;
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
}

ns1:3cfe9674853572621947fa3fe1bb52941c9fcabe984836276d15a1703aeec420 {
    <https://place-hold.it/1000x1000?text=Medium%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%200Image1> .

    <https://place-hold.it/75x75?text=Medium%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%200Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:40> .
}

ns1:100a8fead49b1604c983b283f70e430995e676f4422164cddde4036131602d64 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:102> a cms:NamedValue ;
        dcterms:title "Named value 102" ;
        rdf:predicate dcterms:type ;
        rdf:value "Type 2" ;
        skos:prefLabel "Named value 102" .
}

ns1:854f583797be7a55809d91438f57d725095c55760f82b4c6166844f2f1c69bc5 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:82> a cms:NamedValue ;
        dcterms:title "Named value 82" ;
        rdf:predicate dcterms:subject ;
        rdf:value "Subject 2" ;
        skos:prefLabel "Named value 82" .
}

ns1:0de893e715300776487283d6471310a872030732de45fe9c918120b219b37c53 {
    <https://place-hold.it/1000x1000?text=Technique%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:95> .
}

ns1:cca0d11be8137cf03b8681bdd33761ee78c7f084f97168c0ac78268b71f56ccc {
    <https://place-hold.it/1000x1000?text=Material%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:34> .
}

ns1:382bae6cc0e65d6e9e4eefa65ea802643277c561467871fc79cc81000b24148c {
    <https://place-hold.it/1000x1000?text=Language%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Language%203Image1> .

    <https://place-hold.it/600x600?text=Language%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%203Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:23> .
}

ns1:e8ac70d2d0b140769df42d47d51b27d38ab4e0cfab633e0fbec5cefbefeb203d {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:88> a cms:NamedValue ;
        dcterms:title "Named value 88" ;
        rdf:predicate dcterms:subject ;
        rdf:value "Subject 8" ;
        skos:prefLabel "Named value 88" .
}

ns1:28a0e09c27e6f51a457eb0e0b73744abe4e44051d44db753de7e5ab83107cade {
    <https://place-hold.it/1000x1000?text=Extent%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%209Image0> .

    <https://place-hold.it/75x75?text=Extent%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%209Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:19> .
}

ns1:7ad4730bd724435081793ce90d849085b271a7442bfc51e0f736e8dec551dc92 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:69> a cms:NamedValue ;
        dcterms:title "Named value 69" ;
        rdf:predicate dcterms:source ;
        rdf:value "Source 9" ;
        skos:prefLabel "Named value 69" .
}

ns1:e3693c27ba1948b055e655075b67aa79e9fc7ee9358cb700e311f7d32ccd674a {
    <http://example.com/collection0/work3Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection0Work3 closing" ;
        cms:work <http://example.com/collection0/work3> .
}

ns1:2e03412d32f617cfdf99639c6038ecf37b29d53fcf14755b7d35dd73792d831b {
    <http://example.com/person0> a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "0, Person" ;
        foaf:familyName "0" ;
        foaf:givenName "Person" ;
        foaf:name "Person 0" ;
        foaf:page <http://example.com/person0page> .
}

ns1:84d446a981a1397806dd151b865a59d55d90d340d8858b552f97e85d43873a50 {
    <https://place-hold.it/1000x1000?text=Type%204Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Type%204Image1> .

    <https://place-hold.it/75x75?text=Type%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%204Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:104> .
}

ns1:4221293bd7fb9b804dd3a122f4c7bd1902446e3592e061017d6eb2e0b03ec807 {
    <https://place-hold.it/1000x1000?text=Type%201Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Type%201Image1> .

    <https://place-hold.it/600x600?text=Type%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%201Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:101> .
}

ns1:0bb67c4ceb67c3b029e51e7bffcdc54842a31873c6e87711dfc253611588e567 {
    <https://place-hold.it/1000x1000?text=Collection0Work3Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work3 image 0 rights holder" ;
        dcterms:title "Collection0Work3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection0/work3> .
}

ns1:f0c8ea0242bef4777a6c6842a0cb6a3eec48e12fa93a34cb51fc3f4a16b26397 {
    <https://place-hold.it/1000x1000?text=Material%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Material%207Image1> .

    <https://place-hold.it/75x75?text=Material%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%207Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:37> .
}

ns1:ddd998e778ca6b347038852512d483d9b99f72f13d2e8539119b009261285853 {
    <http://example.com/collection0/work0Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Collection0Work0 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection0Work0 closing" ;
        cms:work <http://example.com/collection0/work0> .
}

ns1:979982b7ff2c3fd4b98042a3cc8ad2171f7ac890d95639d9cd6b309ab271a4d0 {
    <https://place-hold.it/1000x1000?text=Collection1Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Collection1Image0> .

    <https://place-hold.it/75x75?text=Collection1Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1 image 0 rights holder" ;
        dcterms:title "Collection1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection1Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection1> .
}

ns1:efa1f50455a583c351755af545ec5914db4aa44211465729fa508bef1d1e2e6c {
    <https://place-hold.it/1000x1000?text=Subject%207Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%207Image1> .

    <https://place-hold.it/75x75?text=Subject%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%207Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:87> .
}

ns1:08a1d5bdf5c6c2e4d272411cc5ceb0358285095bab0464c634429938e7439818 {
    <http://example.com/collection1/work7> a cms:Work ;
        dcterms:alternative "Collection1Work7 alternative title 0",
            "Collection1Work7 alternative title 1" ;
        dcterms:contributor <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:named_value:17>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:18> ;
        dcterms:identifier "Collection1Work7Id0",
            "Collection1Work7Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:named_value:27>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:28> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:named_value:47>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:48> ;
        dcterms:provenance "Collection1Work7 provenance 0",
            "Collection1Work7 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:named_value:57>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:58> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work7 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:named_value:67>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:68> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:synthetic_data:named_value:77>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:78> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:named_value:87>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:88> ;
        dcterms:title "Collection1Work7" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:named_value:107>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:108> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:named_value:7>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:8> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:named_value:37>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:38> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:named_value:97>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:98> ;
        cms:collection <http://example.com/collection1> .
}

ns1:9774f8336a087553a33db74433308424c2f3d5a7e5f85af91bb8afa897dc2ab3 {
    <https://place-hold.it/1000x1000?text=Type%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:107> .
}

ns1:938924a8a67bf35a7ffd01a09ca307efdcb2f520d224053fdda7e92492db5950 {
    <https://place-hold.it/1000x1000?text=Language%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Language%200Image1> .

    <https://place-hold.it/75x75?text=Language%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%200Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:20> .
}

ns1:8b32f5df119adb1644ba7d6f4e8c9a880385cf4cf4b18e2bbacf8ef59d9f37b6 {
    <https://place-hold.it/1000x1000?text=Spatial%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:74> .
}

ns1:28a2b48756d1d3243de8de523fba700eacb086f78e9f279092316d9485886ecb {
    <http://creativecommons.org/licenses/devnations/2.0/> a cc:License,
            cms:License ;
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
}

ns1:9e9be20cb1588e3149a5f696b0fda7a73427ea7b4a6fd7acdd44861aaa267cda {
    <http://example.com/collection1/work6> a cms:Work ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Collection1Work6 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:alternative "Collection1Work6 alternative title 0",
            "Collection1Work6 alternative title 1" ;
        dcterms:contributor <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:creator <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:description "Collection1Work6 description 0",
            "Collection1Work6 description 1",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:named_value:16>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:17> ;
        dcterms:identifier "Collection1Work6Id0",
            "Collection1Work6Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:named_value:26>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:27> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:named_value:46>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:47> ;
        dcterms:provenance "Collection1Work6 provenance 0",
            "Collection1Work6 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:named_value:56>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:57> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work6 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:named_value:66>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:67> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:synthetic_data:named_value:76>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:77> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:named_value:86>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:87> ;
        dcterms:title "Collection1Work6" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:named_value:106>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:107> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:named_value:6>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:7> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:named_value:36>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:37> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:named_value:96>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:97> ;
        cms:collection <http://example.com/collection1> ;
        foaf:page <http://example.com/work/6> .
}

ns1:bdc1e693ef762a8789893c025b2cf2cea561458e60b34a389fcc62e00291dbcb {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:66> a cms:NamedValue ;
        dcterms:title "Named value 66" ;
        rdf:predicate dcterms:source ;
        rdf:value "Source 6" ;
        skos:prefLabel "Named value 66" .
}

ns1:6cccfd94e1b0d407257aead32db43d29da89182aa90afb6f500c3bbce06e95d8 {
    <http://creativecommons.org/licenses/by/3.0/> a cc:License,
            cms:License ;
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
}

ns1:603f833845fcde3d9341663b0544c6f961a5779a438f7f82e4e0cf38d8a6a944 {
    <https://place-hold.it/1000x1000?text=Language%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:20> .
}

ns1:bf9057ef9bf43699c3d74bf0699fd278828d96ed72c33998a701c51d407d3720 {
    <https://place-hold.it/1000x1000?text=Material%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:39> .
}

ns1:1c8c90b4d89720ae3e70457dedac59d68a2f3a6f6af1f1d3d504f127db9cf1ad {
    <https://place-hold.it/1000x1000?text=Extent%201Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%201Image1> .

    <https://place-hold.it/75x75?text=Extent%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%201Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:11> .
}

ns1:3bffc18386b280d06f7d903d792bbe4933f3c98b79fb73e79a39483b38d05c28 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:67> a cms:NamedValue ;
        dcterms:title "Named value 67" ;
        rdf:predicate dcterms:source ;
        rdf:value "Source 7" ;
        skos:prefLabel "Named value 67" .
}

ns1:5c3d61dbedd7caabb3f5a0b08431efee4bb1b136a99a49e82270dcc48417396d {
    <https://place-hold.it/1000x1000?text=Extent%207Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%207Image1> .

    <https://place-hold.it/600x600?text=Extent%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%207Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:17> .
}

ns1:e971233cd1d3c70707e2ba1b98a8ee8d0bcf61664f7f4fc9fa2f2e7635666d42 {
    <https://place-hold.it/1000x1000?text=Technique%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:90> .
}

ns1:8adaf9dbb247724bdb7d21ea69b7f159aba5e6429227f545088178688a419e78 {
    <https://place-hold.it/1000x1000?text=Technique%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%209Image0> .

    <https://place-hold.it/600x600?text=Technique%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%209Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:99> .
}

ns1:e639484d2417e792425a25952ab956a5c6108b2952d8dc3a94b01c4377312ea1 {
    <https://place-hold.it/1000x1000?text=Collection0Work3Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work3 image 1 rights holder" ;
        dcterms:title "Collection0Work3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection0/work3> .
}

ns1:c40f0f3304e8fec51f0769ace8cdc0c25fa33cda5c2c5aae0fe8fb03e761f149 {
    <https://place-hold.it/1000x1000?text=Language%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:25> .
}

ns1:65d00b0fa764af81e8c7b65f2eff62acc1919f99d00b1e055d52a1d4f9a47131 {
    <https://place-hold.it/1000x1000?text=Collection1Work7Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Collection1Work7Image1> .

    <https://place-hold.it/600x600?text=Collection1Work7Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work7 image 1 rights holder" ;
        dcterms:title "Collection1Work7 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection1Work7Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection1/work7> .
}

ns1:617cd443041e411d9c5959c67e303ce9b93b1885be866fc9e04c67ce73e3e9a6 {
    <https://place-hold.it/1000x1000?text=Language%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Language%205Image0> .

    <https://place-hold.it/75x75?text=Language%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%205Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:25> .
}

ns1:fc832b33454ae54a351a56085c1bc6e877465b907c246d563cefce0b1353c356 {
    <https://place-hold.it/1000x1000?text=Language%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:29> .
}

ns1:281d88cc578c0d448041ba25484c87dde9f4bd3ec556b2f7184b39f976100c0d {
    <http://creativecommons.org/licenses/by-nc/2.5/> a cc:License,
            cms:License ;
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
}

ns1:785b2cf9264cf0695b2b5c511ddc27a2ffc97870db0308fde8d03965f0270798 {
    <http://rightsstatements.org/vocab/NoC-US/1.0/> a cms:RightsStatement ;
        dcterms:description "This Rights Statement indicates that the Item is in the Public Domain under the laws of the United States, but that a determination was not made as to its copyright status under the copyright laws of other countries."@en ;
        dcterms:identifier "NoC-US" ;
        skos:definition """The organization that has made the Item available believes that the Item is in the Public Domain under the laws of the United States, but a determination was not made as to its copyright status under the copyright laws of other countries. The Item may not be in the Public Domain under the laws of other countries.

  Please refer to the organization that has made the Item available for more information."""@en ;
        skos:note "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use."@en,
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available."@en,
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material."@en ;
        skos:prefLabel "No Copyright - United States"@en ;
        skos:scopeNote "This Rights Statement should be used for Items for which the organization that intends to make the Item available has determined are free of copyright under the laws of the United States. This Rights Statement should not be used for Orphan Works (which are assumed to be in-copyright) or for Items where the organization that intends to make the Item available has not undertaken an effort to ascertain the copyright status of the underlying Work."@en .
}

ns1:e11c5638ba096f45d16a07c810cd3cfd6a9387726c69ce3fa12adf143bface49 {
    <https://place-hold.it/1000x1000?text=Subject%207Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:87> .
}

ns1:8bbdc22c258758da479da918340a6fee18d9b06fbbb465916179447c90905524 {
    <https://place-hold.it/1000x1000?text=Type%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Type%200Image1> .

    <https://place-hold.it/75x75?text=Type%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%200Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:100> .
}

ns1:bbf9dfe668f37d98ad7ba73fed01d0bf7d7301fb38677ca43db6eb588d33b314 {
    <https://place-hold.it/1000x1000?text=Type%206Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Type%206Image0> .

    <https://place-hold.it/75x75?text=Type%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%206Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:106> .
}

ns1:2e35d2880a609222a043f19476d7b0e8aea002734b83fa94ed4f0575151f4e69 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:39> a cms:NamedValue ;
        dcterms:title "Named value 39" ;
        rdf:predicate vra:material ;
        rdf:value "Material 9" ;
        skos:prefLabel "Named value 39" .
}

ns1:f3c5c286727744ae33cb73e862aafaee3b2770edb10563cb430cf63844b0e4d7 {
    <https://place-hold.it/1000x1000?text=Collection0Work2Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Collection0Work2Image1> .

    <https://place-hold.it/75x75?text=Collection0Work2Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work2 image 1 rights holder" ;
        dcterms:title "Collection0Work2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection0Work2Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection0/work2> .
}

ns1:58aa0ea8a91daa0198e62d11ed7e46a62bb4eaed2aa60c1fe0d77eb0dd69e27c {
    <https://place-hold.it/1000x1000?text=Source%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:64> .
}

ns1:18e621c559579d332eeab45f710b0f859e2b041e131d1339e05668fc44b498f9 {
    <https://place-hold.it/1000x1000?text=Source%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:68> .
}

ns1:6f9021a8bdfbe3527400e69eec64b42c06105a20a1f14f78aee9602efb070528 {
    <https://place-hold.it/1000x1000?text=Type%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:104> .
}

ns1:91f0ff7a3e045cfa7c84690367768d75cd8db6abbac77501aa3b295af5bba64b {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:63> a cms:NamedValue ;
        dcterms:title "Named value 63" ;
        rdf:predicate dcterms:source ;
        rdf:value "Source 3" ;
        skos:prefLabel "Named value 63" .
}

ns1:47ba8207fae15af3b298ff03ff151104b799ba41328e5bfdbc6ded48563f70e3 {
    <https://place-hold.it/1000x1000?text=Medium%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:43> .
}

ns1:48d5081c9dc301339cba8b775fbe4921bea00ab15722d502b78d5fbcf9cdaa25 {
    <http://creativecommons.org/licenses/by-nc-nd/3.0/> a cc:License,
            cms:License ;
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
}

ns1:d8888a6dd8df362253c84867d67b033c4f2072cdc4d9b42762a7b71ad8ddbf6b {
    <https://place-hold.it/1000x1000?text=Cultural%20context%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:1> .
}

ns1:4b57a1b44ae60fc6708b70f0b32bbae49e0b3513ae851f06402e1381ee0d0849 {
    <https://place-hold.it/1000x1000?text=Spatial%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:78> .
}

ns1:334f77449c03586017fe6dbc66f2a715795523d2ae1e0bb268057495a402c63e {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:104> a cms:NamedValue ;
        dcterms:title "Named value 104" ;
        rdf:predicate dcterms:type ;
        rdf:value "Type 4" ;
        skos:prefLabel "Named value 104" .
}

ns1:92f858a0d8e3a8c0da81604b5481afff870f0f5b8992609af7ea3b68d45e7e58 {
    <http://creativecommons.org/licenses/by-sa/3.0/> a cc:License,
            cms:License ;
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
}

ns1:338e3952eadcb2d17eaad2b4df283aee2c05b39f20a56e8dc951222bf48470a8 {
    <http://example.com/person3> a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "3, Person" ;
        foaf:familyName "3" ;
        foaf:givenName "Person" ;
        foaf:name "Person 3" .
}

ns1:2ef76902bc581f99ca763da6557ff843fe0d657ae51d3fa2e07a40b06634f02b {
    <http://example.com/person4> a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "4, Person" ;
        foaf:familyName "4" ;
        foaf:givenName "Person" ;
        foaf:name "Person 4" ;
        foaf:page <http://example.com/person4page> .
}

ns1:688aa3a7c28c092322c5c6c4459f66fb2cc8ed755426897eaca7d861a317c0ae {
    <https://place-hold.it/1000x1000?text=Medium%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:40> .
}

ns1:11ee2bd102794fbac61587828f0352ae35b843357f0364af57ab52d5452dc4fa {
    <https://place-hold.it/1000x1000?text=FreestandingWork8Image1> foaf:thumbnail <https://place-hold.it/75x75?text=FreestandingWork8Image1> .

    <https://place-hold.it/75x75?text=FreestandingWork8Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=FreestandingWork8Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/freestandingwork8> .
}

ns1:baa52d7b05871daf1a4ae470c33f1b10fa4416d44edca7916233d61dab3c0d5b {
    <http://creativecommons.org/licenses/by-nc-sa/1.0/> a cc:License,
            cms:License ;
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
}

ns1:11e8216d99ac23cffb0b7a3da6cc19dc03e83a9b79b7dc3f6ae631542820467c {
    <https://place-hold.it/1000x1000?text=Cultural%20context%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%200Image1> .

    <https://place-hold.it/600x600?text=Cultural%20context%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%200Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:0> .
}

ns1:80219e050405ee290ce6fe643337cac2389d96f6497e518c542017bdbf56da46 {
    <https://place-hold.it/1000x1000?text=Language%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Language%204Image0> .

    <https://place-hold.it/75x75?text=Language%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%204Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:24> .
}

ns1:c575b8adf0000561b9b773ec0c5e5b64f339070307aa5cd49c8ec7235267f00e {
    <http://example.com/collection1/work7Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection1Work7 closing" ;
        cms:work <http://example.com/collection1/work7> .
}

ns1:65b9a6f59f3b080667b00cc08a76e1ee0b91ca51b37e3982dc8bf140c0e6ff57 {
    <https://place-hold.it/1000x1000?text=Source%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Source%209Image0> .

    <https://place-hold.it/75x75?text=Source%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Source%209Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:69> .
}

ns1:b8578e21e32a83531d5c2b4c8616b6d90b579a1443269e5ed2d8f5d1a7c684ed {
    <https://place-hold.it/1000x1000?text=Type%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:100> .
}

ns1:090201b33d105c5dda2a8f8be338e77fbe92a4a70b9c60869a0c5b9224185793 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:41> a cms:NamedValue ;
        dcterms:title "Named value 41" ;
        rdf:predicate dcterms:medium ;
        rdf:value "Medium 1" ;
        skos:prefLabel "Named value 41" .
}

ns1:caf395f98b967270025ae76b60adcd7beef4243e8e6132b01ec453088251d08d {
    <https://place-hold.it/1000x1000?text=Technique%201Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%201Image0> .

    <https://place-hold.it/600x600?text=Technique%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%201Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:91> .
}

ns1:7515cb1688f459e87a8c1f6845a5ef063bd8ea38aee48666d64ea0ca559f6e1f {
    <https://place-hold.it/1000x1000?text=Extent%200Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%200Image1> .

    <https://place-hold.it/600x600?text=Extent%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%200Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:10> .
}

ns1:d9eca655796cb82e2fcfe37fa7c9fb200009802ddfad7b8a336592568c192436 {
    <https://place-hold.it/1000x1000?text=Extent%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%208Image1> .

    <https://place-hold.it/600x600?text=Extent%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%208Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:18> .
}

ns1:84bc0d650b8acdcef8ad507ad19d06ea34c909cf85b9eb4c4a7b567d81f77a75 {
    <https://place-hold.it/1000x1000?text=Material%203Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Material%203Image1> .

    <https://place-hold.it/75x75?text=Material%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%203Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:33> .
}

ns1:a41bd8cd06f2f2ee5d43cd451d5d65e1d07cee5a61f410538c93adba8e80b2b0 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:58> a cms:NamedValue ;
        dcterms:title "Named value 58" ;
        rdf:predicate dcterms:publisher ;
        rdf:value "Publisher 8" ;
        skos:prefLabel "Named value 58" .
}

ns1:5c4394aab528be02ce5fb6700f5ad5619f7e09dc4e5969b07fea781e4baf319e {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:55> a cms:NamedValue ;
        dcterms:title "Named value 55" ;
        rdf:predicate dcterms:publisher ;
        rdf:value "Publisher 5" ;
        skos:prefLabel "Named value 55" .
}

ns1:44f867c56eaf9e33778ecb4c4bb3ade04519f5b1ec899020883e6aff5c168b1c {
    <https://place-hold.it/1000x1000?text=Technique%200Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%200Image0> .

    <https://place-hold.it/75x75?text=Technique%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%200Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:90> .
}

ns1:64889c4f05e29777613d7b83749df2629b7749d22ea20fffd622b22a9f33e2cf {
    <http://example.com/organization0> a cms:Agent,
            cms:Organization ;
        foaf:name "Organization 0" ;
        foaf:page <http://example.com/organization0page> .
}

ns1:d02dd8107364615134deeb87cd58cff03281adeadab940a64ec211060999572f {
    <https://place-hold.it/1000x1000?text=Collection1Work6Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work6 image 1 rights holder" ;
        dcterms:title "Collection1Work6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection1/work6> .
}

ns1:fb9c9d3af5a818e596365961a89ce129e38ee390b3b636a3c2f94ed935120598 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%209Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%209Image0> .

    <https://place-hold.it/75x75?text=Cultural%20context%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%209Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:9> .
}

ns1:24c59bc8363e15aca9a0dc2fc041a5d8bdf861597869324b067f318fed486541 {
    <https://place-hold.it/1000x1000?text=Type%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Type%202Image1> .

    <https://place-hold.it/75x75?text=Type%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%202Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:102> .
}

ns1:253616a027d5cfd0a00cf8629e17f4df26bf7f306e0875e1ff4f3c0a1ecadba5 {
    <https://place-hold.it/1000x1000?text=Spatial%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%207Image0> .

    <https://place-hold.it/75x75?text=Spatial%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%207Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:77> .
}

ns1:2c0c302c283eca157555f09efc663510eea84a72f5f8716bf4415b7778cd612f {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:24> a cms:NamedValue ;
        dcterms:title "Named value 24" ;
        rdf:predicate dcterms:language ;
        rdf:value "Language 4" ;
        skos:prefLabel "Named value 24" .
}

ns1:35c99bbe239ce1de896c891d6fbe7a11649cf34d009d88774e889ec8712129c5 {
    <https://place-hold.it/1000x1000?text=Extent%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:15> .
}

ns1:6f8689e906efe0db8249c29ade5dae953eec8e716d15b2b71d7f221e69751603 {
    <https://place-hold.it/1000x1000?text=Technique%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%207Image0> .

    <https://place-hold.it/600x600?text=Technique%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%207Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:97> .
}

ns1:19b9589fc9283c284e71572314c10d68b4fefdbbe72297e83e05e268c72d3eab {
    <http://creativecommons.org/licenses/nc/1.0/> a cc:License,
            cms:License ;
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
}

ns1:603602cb92be180e5a22b5885ae55f57c9ff524ae590f2dfe4a016bf5d119da2 {
    <http://creativecommons.org/licenses/by/2.0/> a cc:License,
            cms:License ;
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
}

ns1:57e04a0515f5387975ac460c093a0a0e2b87c35a36b455b8745b29a390829f30 {
    <https://place-hold.it/1000x1000?text=Spatial%201Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Spatial%201Image0> .

    <https://place-hold.it/75x75?text=Spatial%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%201Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:71> .
}

ns1:caf2364de1c975c281b0f4a2efb659a5e0dc7ca84257ac8976e3e35b0ecc3c09 {
    <https://place-hold.it/1000x1000?text=Spatial%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:70> .
}

ns1:aaec60dccde3e92fdab4d0ae9972ae722c513abb8e83b8384f1a0e3f79f0164e {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:79> a cms:NamedValue ;
        dcterms:title "Named value 79" ;
        rdf:predicate dcterms:spatial ;
        rdf:value "Spatial 9" ;
        skos:prefLabel "Named value 79" .
}

ns1:29d268928b88a4fb3d01b69d97ff39b5a370a6aa3e41e48f83dce89aa72cd51e {
    <http://example.com/freestandingwork9> a cms:Work ;
        dcterms:alternative "FreestandingWork9 alternative title 0",
            "FreestandingWork9 alternative title 1" ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:named_value:10>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:19> ;
        dcterms:identifier "FreestandingWork9Id0",
            "FreestandingWork9Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:named_value:20>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:29> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:named_value:40>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:49> ;
        dcterms:provenance "FreestandingWork9 provenance 0",
            "FreestandingWork9 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:named_value:50>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:59> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:named_value:60>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:69> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:synthetic_data:named_value:70>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:79> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:named_value:80>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:89> ;
        dcterms:title "FreestandingWork9" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:named_value:100>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:109> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:named_value:0>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:9> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:named_value:30>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:39> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:named_value:90>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:99> .
}

ns1:0ab4d5459702ea745d79d75a153f0b878a7e7e65b108cc107715af31107aac3c {
    <https://place-hold.it/1000x1000?text=Technique%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%209Image1> .

    <https://place-hold.it/75x75?text=Technique%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%209Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:99> .
}

ns1:36f96ebd202d0bb2dd9ec0bd7a4d11eb52b549c1e3cda2c3ead0f3598fc94db3 {
    <https://place-hold.it/1000x1000?text=Subject%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%202Image1> .

    <https://place-hold.it/75x75?text=Subject%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%202Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:82> .
}

ns1:c6929f92fc3a7b339071c1604a3d1bda96ea13e62605568a1ea382ec817df717 {
    <http://creativecommons.org/licenses/by-nc-sa/2.0/> a cc:License,
            cms:License ;
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
}

ns1:16b1832538492b0915cd2802a152ac2867c5334092c3db5ee5681b8d4a054a91 {
    <http://example.com/collection1/work5Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:creator <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---27"^^xsd:gDay ;
                time:month "--12"^^xsd:gMonth ;
                time:year "2021"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection1Work5 creation" ;
        cms:work <http://example.com/collection1/work5> .
}

ns1:9bb840d067415720c5e65a08210abdc47eb9bedbc495e6ec48065a70ac403cf9 {
    <https://place-hold.it/1000x1000?text=Technique%200Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Technique%200Image1> .

    <https://place-hold.it/75x75?text=Technique%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%200Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:90> .
}

ns1:6628442a615d54b9e92dc5cd8adc38c2b86f3871bb5bd98f330ce1b754c20e3d {
    <https://place-hold.it/1000x1000?text=Spatial%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:71> .
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

ns1:3d9cd1fe731993b56dab7cde762daf00a6905a92d617708ddc6ebeff0ce74ca1 {
    <https://place-hold.it/1000x1000?text=Medium%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%206Image1> .

    <https://place-hold.it/600x600?text=Medium%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%206Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:46> .
}

ns1:8cf966ce7dc142950f4397a621c6395916eba8df127e5509d42c4c2b9cd34802 {
    <http://example.com/freestandingwork11Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-21"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "FreestandingWork11 opening" ;
        cms:work <http://example.com/freestandingwork11> .
}

ns1:997ac3636eb4ac3b19ae961be2c6aa32bb85ef1f87fc914385a500f2cadb2d0b {
    <https://place-hold.it/1000x1000?text=Spatial%206Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%206Image1> .

    <https://place-hold.it/600x600?text=Spatial%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%206Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:76> .
}

ns1:4291ba7cc42a102527de037574565a699682e28bd2c33828af2c36e4cd615e62 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%203Image1> .

    <https://place-hold.it/600x600?text=Cultural%20context%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%203Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:3> .
}

ns1:5a887e2ebb3a965af069f41c53d78f7ba5b83341bb701660475ba1c8904c1331 {
    <https://place-hold.it/1000x1000?text=Language%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:28> .
}

ns1:249a83a1c2cd8ecf905572730ad52cd61290a6df28200fdfab4815468eda1b06 {
    <https://place-hold.it/1000x1000?text=Source%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:63> .
}

ns1:e3a8fe88fb466f9e90e1598050658b6d41a768bd046a917c37ad4511129218f6 {
    <https://place-hold.it/1000x1000?text=Medium%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:49> .
}

ns1:2b56a346b826e92c587a34bdbe402b753f9c94fd6563f61cbe6aa204eef82b73 {
    <https://place-hold.it/1000x1000?text=Source%201Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:61> .
}

ns1:8152eb89b5b15f7dd1a393fc1d9311bb09e7ec432e61553a0372bc2e3ec6235e {
    <https://place-hold.it/1000x1000?text=Cultural%20context%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:9> .
}

ns1:7f6c6a2e8ae8f01381f9daefb5ecdf6c5eb26aaecbfcafa781c853df76dc3f68 {
    <https://place-hold.it/1000x1000?text=Language%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Language%206Image0> .

    <https://place-hold.it/600x600?text=Language%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%206Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:26> .
}

ns1:fc2fb178f6f018ff2ed9d0bf421197361ad7bf5af8d638d4852d50f0358de294 {
    <http://creativecommons.org/licenses/by-nc-sa/2.5/> a cc:License,
            cms:License ;
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
}

ns1:30abb9454adae9fed9a22377b2cbbb24353341e3d2001378a51108c04834011f {
    <https://place-hold.it/1000x1000?text=Extent%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:15> .
}

ns1:666bb59274f77944b7051635c4ddca15299d9b80483798e3e2be6ab8e333e973 {
    <https://place-hold.it/1000x1000?text=Type%206Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Type%206Image0> .

    <https://place-hold.it/600x600?text=Type%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%206Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:106> .
}

ns1:14020f3a032f425f30bb6f01d0267c5400ad57f2002b38b6b827449d4b554128 {
    <https://place-hold.it/1000x1000?text=Material%205Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Material%205Image0> .

    <https://place-hold.it/600x600?text=Material%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%205Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:35> .
}

ns1:d83bc62e338eb09da42bbb2c138527a52ea076faba49c9a0939eca2f1a2de6ef {
    <https://place-hold.it/1000x1000?text=Extent%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%208Image1> .

    <https://place-hold.it/75x75?text=Extent%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%208Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:18> .
}

ns1:c80563ee8f40dbcbdd530b53cd7326d8531db98dfd727feb574392ce7d7db239 {
    <https://place-hold.it/1000x1000?text=Publisher%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Publisher%209Image1> .

    <https://place-hold.it/75x75?text=Publisher%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%209Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:59> .
}

ns1:f9fa4c12af95f1430b49045da572da70deefcb953a4910b5a1c2c6b25309ae72 {
    <https://place-hold.it/1000x1000?text=Subject%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:85> .
}

ns1:13f747870af08fcaabe9b5299cfc9b35cab9363649ebf3594e5e45810eb74c49 {
    <https://place-hold.it/1000x1000?text=Extent%202Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%202Image1> .

    <https://place-hold.it/600x600?text=Extent%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%202Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:12> .
}

ns1:6252a5f42bcb2fc30a8936589e85e0b4248f89f26e06ea389517aa1ddf5dd3c2 {
    <http://example.com/collection1/work6Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Collection1Work6 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "Collection1Work6 closing" ;
        cms:work <http://example.com/collection1/work6> .
}

ns1:129eed28f97a14194afab37d67b0e4fef8bd4ee4d6dba25661814e40088e0a18 {
    <https://place-hold.it/1000x1000?text=Language%201Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:21> .
}

ns1:29f0d62cc6aaaffd94f8b5e5bd9a4f16878620621a6fdd1b83ee6bc2d572707f {
    <http://rightsstatements.org/vocab/collection-other/1.0/> a cms:RightsStatement ;
        dcterms:identifier "collection-other" ;
        skos:prefLabel "Statements for works where the copyright status is unclear"@en .
}

ns1:6723a6bc7e11d0880a4d555bf7c569ad1b8b5fbf6771357a780cc37898bb8ccb {
    <https://place-hold.it/1000x1000?text=Publisher%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Publisher%208Image1> .

    <https://place-hold.it/600x600?text=Publisher%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Publisher%208Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:58> .
}

ns1:3b04717ee60fa6c59bcf14d8b9218d41fb693c6746cbc832509cb1843c2ab0fa {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:10> a cms:NamedValue ;
        dcterms:title "Named value 10" ;
        rdf:predicate dcterms:extent ;
        rdf:value "Extent 0" ;
        skos:prefLabel "Named value 10" .
}

ns1:45ee916ad100d0b74b5b865777302c10cce6eb99f30dce7cc1130d68ada83e47 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:2> .
}

ns1:0583ce526fef55ccaf2e35944dcf713b56638ffcc43ebf19133be1f64635af73 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:106> a cms:NamedValue ;
        dcterms:title "Named value 106" ;
        rdf:predicate dcterms:type ;
        rdf:value "Type 6" ;
        skos:prefLabel "Named value 106" .
}

ns1:0e32e06821df5ea810b3f3647c45d23bb78f5c472b9a0facf94f35d6063bb49d {
    <https://place-hold.it/1000x1000?text=Collection0Work0Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work0 image 0 rights holder" ;
        dcterms:title "Collection0Work0 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection0/work0> .
}

ns1:f3159b81a4c4de84195976bf17e93bb7b4c6d392eee5f919dfaac98e434038e1 {
    <https://place-hold.it/1000x1000?text=Spatial%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:72> .
}

ns1:bac1bb74e351723a6cda166e08af8b71cde612c749ff161a4fc976f92398873a {
    <https://place-hold.it/1000x1000?text=Type%209Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Type%209Image1> .

    <https://place-hold.it/75x75?text=Type%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Type%209Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:109> .
}

ns1:8e4f35e7177322c7d8eb4fc02e4b78aa46344a737b48b466164f3ca8b0c42da5 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%206Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:6> .
}

ns1:945b56496196dc19edab5c0177e11d6dcf314f45f663a4175ce12691e5580cc5 {
    <http://example.com/collection1/work4> a cms:Work ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Collection1Work4 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:alternative "Collection1Work4 alternative title 0",
            "Collection1Work4 alternative title 1" ;
        dcterms:contributor <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:creator <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:description "Collection1Work4 description 0",
            "Collection1Work4 description 1",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:named_value:14>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:15> ;
        dcterms:identifier "Collection1Work4Id0",
            "Collection1Work4Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:named_value:24>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:25> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:named_value:44>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:45> ;
        dcterms:provenance "Collection1Work4 provenance 0",
            "Collection1Work4 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:named_value:54>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:55> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work4 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:named_value:64>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:65> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:synthetic_data:named_value:74>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:75> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:named_value:84>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:85> ;
        dcterms:title "Collection1Work4" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:named_value:104>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:105> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:named_value:4>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:5> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:named_value:34>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:35> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:named_value:94>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:95> ;
        cms:collection <http://example.com/collection1> ;
        foaf:page <http://example.com/work/4> .
}

ns1:422ff0c5a03ee2ef37b9877f04784908c6bc0928d1b43823cde623ceac3ebe57 {
    <https://place-hold.it/1000x1000?text=Medium%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:47> .
}

ns1:d9f6af1237092029e57ea394eae799aaf110d246566abe442346f4ada523aa7c {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:13> a cms:NamedValue ;
        dcterms:title "Named value 13" ;
        rdf:predicate dcterms:extent ;
        rdf:value "Extent 3" ;
        skos:prefLabel "Named value 13" .
}

ns1:00de1132d614ef295d42aca32740f14676fb9d2ef47ac53f2a36c6e03011fec7 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:17> a cms:NamedValue ;
        dcterms:title "Named value 17" ;
        rdf:predicate dcterms:extent ;
        rdf:value "Extent 7" ;
        skos:prefLabel "Named value 17" .
}

ns1:e2e303e64f0cf425a590b2a44dfc4186a2cf1d97e396ac3c42e3f9d2f0ed0b39 {
    <http://example.com/collection0/work2> a cms:Work ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "Collection0Work2 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:alternative "Collection0Work2 alternative title 0",
            "Collection0Work2 alternative title 1" ;
        dcterms:contributor <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:creator <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:description "Collection0Work2 description 0",
            "Collection0Work2 description 1",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:named_value:12>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:13> ;
        dcterms:identifier "Collection0Work2Id0",
            "Collection0Work2Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:named_value:22>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:23> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:named_value:42>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:43> ;
        dcterms:provenance "Collection0Work2 provenance 0",
            "Collection0Work2 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:named_value:52>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:53> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work2 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:named_value:62>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:63> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:synthetic_data:named_value:72>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:73> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:named_value:82>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:83> ;
        dcterms:title "Collection0Work2" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:named_value:102>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:103> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:named_value:2>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:3> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:named_value:32>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:33> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:named_value:92>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:93> ;
        cms:collection <http://example.com/collection0> ;
        foaf:page <http://example.com/work/2> .
}

ns1:7c19cf0826901647dc696c774335c420ff05d6fc2fe08ee29038faf33a706144 {
    <https://place-hold.it/1000x1000?text=Extent%209Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Extent%209Image0> .

    <https://place-hold.it/600x600?text=Extent%209Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%209Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:19> .
}

ns1:930c5d11a2b2e6b9206fff79107176ebcac48a00ab79ae1526018b15a0d0c462 {
    <https://place-hold.it/1000x1000?text=Material%204Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Material%204Image0> .

    <https://place-hold.it/75x75?text=Material%204Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%204Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:34> .
}

ns1:e36fc73adb6f41b738e9c2ecc485480e37e9f9ea42cc24c246b19cf98ee21e5f {
    <https://place-hold.it/1000x1000?text=Subject%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%205Image0> .

    <https://place-hold.it/75x75?text=Subject%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%205Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:85> .
}

ns1:6b503407be61f6702d423df0b3d3f1bcdcf69b196da5de7726f1436f243915da {
    <https://place-hold.it/1000x1000?text=Cultural%20context%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Cultural%20context%208Image1> .

    <https://place-hold.it/75x75?text=Cultural%20context%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%208Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:8> .
}

ns1:7518f1026903ebaf1b58b1f5417895f8a6696e72cc9029bd5d9e90b0603b5a33 {
    <https://place-hold.it/1000x1000?text=Medium%207Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Medium%207Image0> .

    <https://place-hold.it/75x75?text=Medium%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%207Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:47> .
}

ns1:80d0a89734f63df3b094df5bdad0a0d0c26a9763ea38ac1667e2efe1625648d3 {
    <https://place-hold.it/1000x1000?text=Collection0Work0Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Collection0Work0Image0> .

    <https://place-hold.it/600x600?text=Collection0Work0Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work0 image 0 rights holder" ;
        dcterms:title "Collection0Work0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Collection0Work0Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection0/work0> .
}

ns1:89ddca8f7e8e4831fdd849517961cffa21425d8d2904c208f0293bda94e9b307 {
    <http://example.com/organization2> a cms:Agent,
            cms:Organization ;
        foaf:name "Organization 2" ;
        foaf:page <http://example.com/organization2page> .
}

ns1:1a44537543c8bac481bca4c1e59fd0fe5e57dddc45de34410520b60a8f5993eb {
    <https://place-hold.it/1000x1000?text=Medium%207Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%207Image0> .

    <https://place-hold.it/600x600?text=Medium%207Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%207Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:47> .
}

ns1:277cb2087bf89569f7f7ef465af85f616b9945baa0a1790eaf54feed8b502bba {
    <https://place-hold.it/1000x1000?text=Medium%204Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:44> .
}

ns1:e52462df23a31711a12608a9a19f81074109367bda97efedf67dd8778bed4a68 {
    <https://place-hold.it/1000x1000?text=Subject%205Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Subject%205Image1> .

    <https://place-hold.it/75x75?text=Subject%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Subject%205Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:85> .
}

ns1:6143bcf7272ba899544cac3e9a3f494f09eb4b736c88d0e53e590807b38fa21d {
    <https://place-hold.it/1000x1000?text=Medium%200Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%200Image0> .

    <https://place-hold.it/600x600?text=Medium%200Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%200Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:40> .
}

ns1:6b86f247005fad411a59f100782bb3ee5cd95306d942896711faa0168a5da111 {
    <https://place-hold.it/1000x1000?text=Spatial%208Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Spatial%208Image1> .

    <https://place-hold.it/600x600?text=Spatial%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Spatial%208Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:78> .
}

ns1:9a055427148b1ab60186f3928ff2ad8ac09118ff64ec405eb277a4225e24cb82 {
    <https://place-hold.it/1000x1000?text=Spatial%209Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:79> .
}

ns1:e1d85c7a0f2480f548d3da26525420afe329ec94d87683a0bf14f208689bdb30 {
    <https://place-hold.it/1000x1000?text=Cultural%20context%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:8> .
}

ns1:1ca5b04b478c9b635847bc8bf321a7739eda9244169b1f43a585ee796e5c72aa {
    <https://place-hold.it/1000x1000?text=Cultural%20context%205Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Cultural%20context%205Image1> .

    <https://place-hold.it/600x600?text=Cultural%20context%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Cultural%20context%205Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:5> .
}

ns1:ba55d80c62cf3c800ef8703cba09ad3f8d6326847721ab2d75ae9e1ec905e025 {
    <https://place-hold.it/1000x1000?text=Language%208Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Language%208Image1> .

    <https://place-hold.it/75x75?text=Language%208Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Language%208Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:28> .
}

ns1:ec61665f4d898bdbf4be2f11556a18416e6c4e18370e1df45ff9cc037ed5c295 {
    <https://place-hold.it/1000x1000?text=Source%200Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:60> .
}

ns1:452f7ed4cbd5c604632cd33b97f6d59a9d1e8e1639088a2856045327f8ecacfd {
    <https://place-hold.it/1000x1000?text=Medium%203Image1> foaf:thumbnail <https://place-hold.it/600x600?text=Medium%203Image1> .

    <https://place-hold.it/600x600?text=Medium%203Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Medium%203Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:43> .
}

ns1:751a1705b5703df72ba86c189482baea0b6fb4779daeffe9d572ed1e0b5c55cb {
    <https://place-hold.it/1000x1000?text=Source%206Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:66> .
}

ns1:83e0a2c62e341cca67bae00a2339803fd7a6d5b9901185ae8301da6f84a82d31 {
    <https://place-hold.it/1000x1000?text=Technique%203Image0> foaf:thumbnail <https://place-hold.it/600x600?text=Technique%203Image0> .

    <https://place-hold.it/600x600?text=Technique%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 600x600" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Technique%203Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:93> .
}

ns1:da4932ee4a3842637c0bb7a0638a9fd2a759099058961b1fbd49153dff9148c0 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:56> a cms:NamedValue ;
        dcterms:title "Named value 56" ;
        rdf:predicate dcterms:publisher ;
        rdf:value "Publisher 6" ;
        skos:prefLabel "Named value 56" .
}

ns1:440737905f74631459c22ca7c2b8f61ecb2f9805649024fbe6f66cfd2750c8b5 {
    <urn:paradicms_etl:pipeline:synthetic_data:named_value:70> a cms:NamedValue ;
        dcterms:title "Named value 70" ;
        rdf:predicate dcterms:spatial ;
        rdf:value "Spatial 0" ;
        skos:prefLabel "Named value 70" .
}

ns1:53b41e9207f7d9b95103243b28f43dfeec0cb6f4c7198382ddbe4201ca10728f {
    <https://place-hold.it/1000x1000?text=Extent%203Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:13> .
}

ns1:cbfcd6d418f6e2d26bf2d4847331219a9db26da4c3e1cf20b6ed38b9c126b623 {
    <https://place-hold.it/1000x1000?text=Extent%202Image1> foaf:thumbnail <https://place-hold.it/75x75?text=Extent%202Image1> .

    <https://place-hold.it/75x75?text=Extent%202Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Extent%202Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:12> .
}

ns1:7bc8d5c3740ddac9bc19b6c241b0fdf64fb1425d116bb755897dd4e28a50d240 {
    <https://place-hold.it/1000x1000?text=FreestandingWork8Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/freestandingwork8> .
}

ns1:0870171a372523fd5877b3461457f851774ddc7302a86ace8acb099261751582 {
    <https://place-hold.it/1000x1000?text=Collection1Work7Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work7 image 0 rights holder" ;
        dcterms:title "Collection1Work7 image 0" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection1/work7> .
}

ns1:3c15b450d4e893724a3b495a0b7936c0634e16f7ed6fd598ebe0f48753934d1d {
    <http://example.com/freestandingwork11Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:date [ a cms:DateTimeDescription ;
                time:day "---21"^^xsd:gDay ;
                time:month "--12"^^xsd:gMonth ;
                time:year "2021"^^xsd:gYear ] ;
        dcterms:spatial [ a cms:Location ;
                wgs:lat 4.27281e+01 ;
                wgs:long -7.368758e+01 ] ;
        dcterms:title "FreestandingWork11 creation" ;
        cms:work <http://example.com/freestandingwork11> .
}

ns1:edba3c85f0d8748bbc5c3b0288a60217b7bb83bdcd7aeb1a1777f8534932bff2 {
    <http://example.com/freestandingwork8> a cms:Work ;
        dcterms:abstract [ a cms:Text ;
                dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
                dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
                dcterms:rightsHolder "FreestandingWork8 abstract rights holder" ;
                rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ] ;
        dcterms:alternative "FreestandingWork8 alternative title 0",
            "FreestandingWork8 alternative title 1" ;
        dcterms:contributor <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:description "FreestandingWork8 description 0",
            "FreestandingWork8 description 1",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:named_value:18>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:19> ;
        dcterms:identifier "FreestandingWork8Id0",
            "FreestandingWork8Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:named_value:28>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:29> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:named_value:48>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:49> ;
        dcterms:provenance "FreestandingWork8 provenance 0",
            "FreestandingWork8 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:named_value:58>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:59> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:named_value:68>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:69> ;
        dcterms:spatial <urn:paradicms_etl:pipeline:synthetic_data:named_value:78>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:79> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:named_value:88>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:89> ;
        dcterms:title "FreestandingWork8" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:named_value:108>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:109> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:named_value:8>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:9> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:named_value:38>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:39> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:named_value:98>,
            <urn:paradicms_etl:pipeline:synthetic_data:named_value:99> ;
        foaf:page <http://example.com/work/8> .
}

ns1:22eb7c3fa851d68e01a0f3d88a198d644d6e62f40e6903a70097f7a27e257d55 {
    <https://place-hold.it/1000x1000?text=Source%205Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1" ;
        cms:imageCopyable true ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:65> .
}

ns1:d1ea7d38c1413b51ea33da37b8e176df0893486e9810309dbae9845653bc2abb {
    <https://place-hold.it/1000x1000?text=Material%205Image0> foaf:thumbnail <https://place-hold.it/75x75?text=Material%205Image0> .

    <https://place-hold.it/75x75?text=Material%205Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 75x75" ;
        cms:imageCopyable true ;
        cms:thumbnailOf <https://place-hold.it/1000x1000?text=Material%205Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:named_value:35> .
}

ns1:9036bf52e942bfc4dd12dbfabbe572e494b63f51e1f471840cbaf2fa83cae28d {
    <http://rightsstatements.org/vocab/InC-RUU/1.0/> a cms:RightsStatement ;
        dcterms:description "This Rights Statement indicates that the Item labeled with this Rights Statement has been identified as in copyright, but its rights-holder(s) either cannot be identified or cannot be located."@en ;
        dcterms:identifier "InC-RUU" ;
        skos:definition """This Item is protected by copyright and/or related rights. However, for this Item, either (a) no rights-holder(s) have been identified or (b) one or more rights-holder(s) have been identified but none have been located.

  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use."""@en ;
        skos:note "If you have any information that can contribute to identifying or locating the rights-holder(s) please notify the organization that has made the Item available."@en,
            "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use."@en,
            "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available."@en,
            "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material."@en ;
        skos:prefLabel "In Copyright - Rights-holder(s) Unlocatable or Unidentifiable"@en ;
        skos:scopeNote "This Rights Statement is intended for use with an Item that has been identified as in copyright but for which no rights-holder(s) has been identified or located after some reasonable investigation. This Rights Statement should only be used if the organization that intends to make the Item available is reasonably sure that the underlying Work is in copyright. This Rights Statement is not intended for use by EU-based organizations who have identified works as Orphan Works in accordance with the EU Orphan Works Directive (they must use InC-OW-EU instead)."@en .
}
`);
