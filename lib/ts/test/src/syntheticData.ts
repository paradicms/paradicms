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
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix vra: <http://purl.org/vra/> .
@prefix wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

ns1:a29f90d3e215a9e2fdb21a1e8a0d13d62e4340697c36a7f4be7433700de103aa {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:5:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:5:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:5:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:5:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:5> .
}

ns1:f31bca444882f5c03925ffeefb9a8d6817d12e433db30cab02468af685607174 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:103:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:103> .
}

ns1:2fb1dad5e7a698afee90235ac33fc43704c580fdea6c8553e6663b31770b8bfe {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:12:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:12:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:12:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:12:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:12> .
}

ns1:9e9be20cb1588e3149a5f696b0fda7a73427ea7b4a6fd7acdd44861aaa267cda {
    <http://example.com/collection1/work6> a cms:Work ;
        dcterms:alternative "Collection1Work6 alternative title 0",
            "Collection1Work6 alternative title 1" ;
        dcterms:contributor <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:creator <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:description _:N21c85ade17ba4a15b2885b1aafa47a8d ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:concept:16>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:17> ;
        dcterms:identifier "Collection1Work6Id0",
            "Collection1Work6Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:concept:26>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:27> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:concept:46>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:47> ;
        dcterms:provenance "Collection1Work6 provenance 0",
            "Collection1Work6 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:concept:56>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:57> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work6 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:concept:66>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:67> ;
        dcterms:spatial <http://example.com/collection1/work6Location> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:concept:86>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:87> ;
        dcterms:title "Collection1Work6" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:concept:106>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:107> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:concept:6>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:7> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:concept:36>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:37> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:concept:96>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:97> ;
        cms:collection <http://example.com/collection1> ;
        foaf:page <http://example.com/work/6> .

    _:N21c85ade17ba4a15b2885b1aafa47a8d a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:b687548587c35b1e590bb343160ee9fee6f462c197d6435311465dcadabf275d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:75:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:75:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:75:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:75:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:75> .
}

ns1:3d10fb7b3639172ff3732acfe0def4d32f9e58528a4b23e35994c0f7ed9f1087 {
    <http://example.com/freestandingwork8:Image1> foaf:thumbnail <http://example.com/freestandingwork8:Image1:Thumbnail75x75> .

    <http://example.com/freestandingwork8:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/freestandingwork8:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/freestandingwork8> .
}

ns1:e3f896197178db4e4c9d5dcc298e756bec4d56930cd9feb0ed3f51cf8d5d07c8 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:83:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:83:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:83:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:83:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:83> .
}

ns1:e1d834029878bd9ec6a1b67fd81b69db149aa88175f3d2768bdb2aabee56f451 {
    <http://example.com/freestandingwork8:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/freestandingwork8> .
}

ns1:26f4be0fd19eb3d266597d59dfab3f58548f9c2f02bc72266ada8a460642a997 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:65:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:65> .
}

ns1:afd77f1b5a6838347e69e5a344e881a1146791b30829b3c92b78309392b1fe54 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:88:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:88> .
}

ns1:300d4f060933defea450d131712ee359363d1a3ea84a45688765be0a1acf511c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:96:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:96:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:96:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:96:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:96> .
}

ns1:bb0ae6375a8935739ed273b4256eecf22dfe7c0a006ba5efdd4c88dcc5eb6908 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:23:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:23> .
}

ns1:4adb966d5694150afa90a7e7950c43e19ef80accc7ecb4d55985ff18d3c7bb69 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:75> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 5" ;
        skos:prefLabel "Concept 75" .
}

ns1:d516dfd07fb4e6e68cb62504e5e1333f90e11260abb366d25e8950f770b7c936 {
    <http://example.com/freestandingwork10Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:date _:N5d28a4704939431aa56ecf364910f0b4 ;
        dcterms:description _:N527854ab4d2f46e6a6d2472b38097401 ;
        dcterms:spatial <http://example.com/freestandingwork10Location> ;
        dcterms:title "FreestandingWork10 creation" ;
        cms:work <http://example.com/freestandingwork10> .

    _:N527854ab4d2f46e6a6d2472b38097401 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:N5d28a4704939431aa56ecf364910f0b4 a cms:DateTimeDescription ;
        time:day "---22"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns1:98d96424f55bccea14fc81edbd499511317e506dda7e61fa696369ec75b6e696 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:92:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:92> .
}

ns1:ba6217284b7c756eb8a5b4a350ba5efdaeacab95fbd7eaeb7d2827ecadc0bc92 {
    <http://example.com/collection0> a cms:Collection ;
        dcterms:description _:N1c760f1fa0a146c2a6033d93b313a0f8 ;
        dcterms:title "Collection0" .

    _:N1c760f1fa0a146c2a6033d93b313a0f8 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:69bdcd93e7ad081d17639b13824a197c1d74ade545df86d121fb1d89475a1613 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:39> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 9" ;
        skos:prefLabel "Concept 39" .
}

ns1:a3d40e63a9a6899ae3e8fe3f8b3603ffe2d85d067d88978b3f459f96f9ec47a4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:62:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:62:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:62:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:62:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:62> .
}

ns1:4a9ba66963990d21993328ae57627e77571e85cb17d1966f43371b0e544da0b9 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:73:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:73:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:73:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:73:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:73> .
}

ns1:8c128609030dd1a36fb4007c7665e94013413cc31bc2d0879fcd474a9b4130b4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:59:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:59:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:59:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:59:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:59> .
}

ns1:2aa87b41fe51dc02fae9a8c900783281f46200bd3f4d9b7e6d6e2e85862d7215 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:31:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:31:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:31:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:31:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:31> .
}

ns1:33376026d3c1e806e171b3405f5eca4f750c47b242825d68f03ef2f8f8f9aae4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:88:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:88:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:88:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:88:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:88> .
}

ns1:a874ca24c7a96c370532eb151a155070672332c5943d16425885eef30ca180ba {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:40:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:40:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:40:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:40:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:40> .
}

ns1:b7c3660379e5d0e8968a6f1035e25fe4d4a2d549de0fb617234ca847f5225d8a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:89:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:89:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:89:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:89:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:89> .
}

ns1:d3fa061cb650b97b6f6b3be7a925b4ca506650b8e36f32a959538968f0393abb {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:100:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:100:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:100:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:100:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:100> .
}

ns1:173b19f93bb528d07f2cb241c8719aeb19d6d4bf8d2068ef625eb846d724e936 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:3:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:3:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:3:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:3:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:3> .
}

ns1:dcd4673e00994839b34e32b0f97fb89293184ed300d5e41ec500fd362fbfb327 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:54:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:54> .
}

ns1:bf05d72d5261187cda042efbce83a24bfdd7c46a019afde4ede40871a25c7600 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:67:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:67:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:67:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:67:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:67> .
}

ns1:cdffc98c1b057464a40205c50236f67aa7060ac0c09a9aba21a3ea6bcf56aed9 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:27:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:27:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:27:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:27:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:27> .
}

ns1:a746cc87600bc450e9cf0cf9e75483e9f76577339dbd6939cff87b0dc8dc8d51 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:100:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:100> .
}

ns1:c837393375283a47cf83a906d230d3dcd678862c8775f74917e082fa6d79e85b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:108:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:108> .
}

ns1:1077805b9daed15a76f7c37ea9d9825e2f6e0a46b6635769deeca5c2054c4147 {
    <http://example.com/collection1/work5:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work5 image 0 rights holder" ;
        dcterms:title "Collection1Work5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection1/work5> .
}

ns1:41934c8236c446a24f9370acec66f22e5adf9ccb88fdd4528c05614d9c6b8778 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:47:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:47:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:47:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:47:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:47> .
}

ns1:a632e5a540d8c6a8b5befa023189f6447efd4c30cb3c92e52495d10f07e371c5 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:60:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:60> .
}

ns1:2c62e14b51712425ab47e1a40f06af0ebce5b2b4c25472a962a3a83a11fad19e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:103:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:103> .
}

ns1:c62c97e1bdeb1af0d975f98613d6df72cc377fff9c5fa566b8fc0a051eeef229 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:18:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:18> .
}

ns1:4b0220f9fff4844355ecad65b6d37c025bb6c20c4f7f6b1e87adab1e009ef1ad {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:57:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:57> .
}

ns1:7d900539beae00eff521d5480b12daf03836795c9e4bfe26cd7c89c54c3506cc {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:102:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:102:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:102:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:102:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:102> .
}

ns1:b079c2c21ce4dde4c761d4912223bd450ae7f4de294d1834d370c13f994131f0 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:33:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:33:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:33:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:33:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:33> .
}

ns1:9cdcf0275ebe024f9151bc654fa7e5c1abc5733218516878c1e86fa04b6f7447 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:52:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:52> .
}

ns1:f03235a5c5f2fb7901147c9e112aaf256a445aeede170ea4d8b6392b63ec20f5 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:9:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:9:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:9:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:9:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:9> .
}

ns1:fe11e5a2a31b24932ecb450d6eff8ebd832220d04d05cfbc19fd1c3eed7d100d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:18:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:18:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:18:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:18:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:18> .
}

ns1:73138c37c4ff416fc73b4207a29546f5ca0c0346ec619c0c5b8e3ac7a0ad7082 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:71:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:71:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:71:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:71:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:71> .
}

ns1:f078cd5b31df5d503d06cace725e693bed1d8a4f852771a131e0d780ed114269 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:5:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:5:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:5:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:5:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:5> .
}

ns1:512a92d983b5f3e7db955c7d2ea5e71a0d0f09bb27a96f520e1dbd1b68fe50c3 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:44:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:44> .
}

ns1:3092073f0dbb382da7cf9fbd674da57a0e40a40b15b9baa50ccd6f5371430505 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:66> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 6" ;
        skos:prefLabel "Concept 66" .
}

ns1:86178b9014cdf0c4e7df7408668fd1641e8a4f026ee65bbe8134708f73488686 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:86:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:86> .
}

ns1:ba5b7b1d32b530ff656dab3ff2d34bd517b51ff7a7e7b3d0ec4fb0b58b0c1245 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:45:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:45:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:45:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:45:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:45> .
}

ns1:06b3ae4e3e02b0a16f8cd5cd464e51cff84cff15790361f1f7292c913b39ec50 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:8:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:8> .
}

ns1:e60cb91f957a1f3e24735b360a6a1d77113907d7b0d3ec90219bc1245a38ccf2 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:88> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 8" ;
        skos:prefLabel "Concept 88" .
}

ns1:8cc138a3dc04999983c23af7b4a81087e0d0deff1021f310016caf5f047ffea4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:100> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 0" ;
        skos:prefLabel "Concept 100" .
}

ns1:39380211e36354a3d176aefed9c4844c3e50d1cc52528633a9f574b73df7bf60 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:32:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:32> .
}

ns1:110d73386db67703edba192378ecba29dace77c6d9a28b68f0fbac0583c3eb0b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:69> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 9" ;
        skos:prefLabel "Concept 69" .
}

ns1:03844262ce373c812b4f814ea7c2944960c2a0923763f15ae6d628f9aace1c95 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:5> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 5" ;
        skos:prefLabel "Concept 5" .
}

ns1:bd4b36e242be1fd40ee8e50b3804e88e782fd59bf0e9d1131848a2fc23a423cc {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:65:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:65:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:65:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:65:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:65> .
}

ns1:efec5d7a2b96a4d3c1b067d3247364ccde1a354422ad7b71b3f6a765d5d86a6e {
    <http://example.com/collection0/work0:Image0> foaf:thumbnail <http://example.com/collection0/work0:Image0:Thumbnail600x600> .

    <http://example.com/collection0/work0:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work0 image 0 rights holder" ;
        dcterms:title "Collection0Work0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/collection0/work0:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection0/work0> .
}

ns1:9f80cb60f5bfed772d25dd74a9ffd9fb918758a21cb6834cce2e17ae3964733f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:103:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:103:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:103> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:103:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:103:Image0:Thumbnail75x75> .
}

ns1:e0801744e0b1efb6e984ba3608e11d852841f67fe6ade65a6a2bd004c23792f3 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:9> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 9" ;
        skos:prefLabel "Concept 9" .
}

ns1:9ee66c22b74404522a72500b2da5dc81694175447bb731d4f62d12fcf3ab4d76 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:102:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:102:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:102:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:102:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:102> .
}

ns1:afa786f70989d0dcebcd2a2a59823220644cb691f069543003750967a26efb03 {
    <http://example.com/collection0/work1> a cms:Work ;
        dcterms:alternative "Collection0Work1 alternative title 0",
            "Collection0Work1 alternative title 1" ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:concept:11>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:12> ;
        dcterms:identifier "Collection0Work1Id0",
            "Collection0Work1Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:concept:21>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:22> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:concept:41>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:42> ;
        dcterms:provenance "Collection0Work1 provenance 0",
            "Collection0Work1 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:concept:51>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:52> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work1 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:concept:61>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:62> ;
        dcterms:spatial <http://example.com/collection0/work1Location> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:concept:81>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:82> ;
        dcterms:title "Collection0Work1" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:concept:101>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:102> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:concept:1>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:2> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:concept:31>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:32> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:concept:91>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:92> ;
        cms:collection <http://example.com/collection0> .
}

ns1:76d365eefabc889cc84211e446e9c305ddaab2f3dbb8b07831b335d864f06f6c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:14:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:14:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:14:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:14:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:14> .
}

ns1:cba43c81ec776a0007e280dcbd34925ce98efb79a64776cca8e4ff8eae4c93f3 {
    <http://example.com/collection0/work2:Image0> foaf:thumbnail <http://example.com/collection0/work2:Image0:Thumbnail600x600> .

    <http://example.com/collection0/work2:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work2 image 0 rights holder" ;
        dcterms:title "Collection0Work2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/collection0/work2:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection0/work2> .
}

ns1:7c083fbcad8d9a16a7189169f41dd40192963c5e99e604c8f1e9dccedfe5826a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:26:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:26:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:26:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:26:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:26> .
}

ns1:fd9be58bc3745f81bc9900c84f6c81c0525d24ccf2a09d88069c36ff4d750ba8 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:32> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 2" ;
        skos:prefLabel "Concept 32" .
}

ns1:a80f598615f98cf6bcf842dc665395fa1dcd71128da2b886489638ba80439d10 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:94:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:94:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:94:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:94:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:94> .
}

ns1:eb252b0df43b09efb2a33762ff494da3f465169868b430e7be3d040d3e25cd8e {
    <http://example.com/freestandingwork11:Image0> foaf:thumbnail <http://example.com/freestandingwork11:Image0:Thumbnail600x600> .

    <http://example.com/freestandingwork11:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/freestandingwork11:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/freestandingwork11> .
}

ns1:153bbc7c91ccf214de9d0226b862758955de575c505199b34215a85253f58c9c {
    <http://example.com/collection0/work1:Image1> foaf:thumbnail <http://example.com/collection0/work1:Image1:Thumbnail600x600> .

    <http://example.com/collection0/work1:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work1 image 1 rights holder" ;
        dcterms:title "Collection0Work1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/collection0/work1:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection0/work1> .
}

ns1:33ce41991443d2ac179f4a3b1b00a087b4b0728ea1a7540a71b6ec1378997732 {
    <http://example.com/freestandingwork9Location> a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:e5a42397aaaf703658d483ca3b288bef3e18b197bbcebada0199731e5de0e492 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:20:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:20> .
}

ns1:ca39ab01ae0b11b11db521ee985f7d7562438f3c2fcadd3800227bf6cc4b5427 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:30:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:30> .
}

ns1:2dd495d5555b8a4a21580f5e2e9bf97ece6e77266557842f27855aa30d2cfa3c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:104:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:104:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:104:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:104:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:104> .
}

ns1:9087a8b5c1395a598c7a2f3ef10ecdc3880d23e6566a311ee976f2ea179f16a3 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:72:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:72> .
}

ns1:634d7f133d628d7fb6b9a57319b028a877559b413943ab2fd4c5bf43fcc3b54d {
    <http://example.com/collection0/work0> a cms:Work ;
        dcterms:alternative "Collection0Work0 alternative title 0",
            "Collection0Work0 alternative title 1" ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:description _:N405821006a0d42798d1a0cba659ddb5f ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:concept:10>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:11> ;
        dcterms:identifier "Collection0Work0Id0",
            "Collection0Work0Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:concept:20>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:21> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:concept:40>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:41> ;
        dcterms:provenance "Collection0Work0 provenance 0",
            "Collection0Work0 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:concept:50>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:51> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work0 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:concept:60>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:61> ;
        dcterms:spatial <http://example.com/collection0/work0Location> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:concept:80>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:81> ;
        dcterms:title "Collection0Work0" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:concept:100>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:101> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:concept:0>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:1> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:concept:30>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:31> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:concept:90>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:91> ;
        cms:collection <http://example.com/collection0> ;
        foaf:page <http://example.com/work/0> .

    _:N405821006a0d42798d1a0cba659ddb5f a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:3bbf677dd9c856bc0bb86756a160a5acad61195130dceef21da5541cfd1abf66 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:0:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:0:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:0:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:0:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:0> .
}

ns1:f23270b889a1932295c508f6b6dbf6623fdfb5b94bfc782ba346a2b4e9a3286b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:43:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:43:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:43:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:43:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:43> .
}

ns1:b2cb09dd56e76488594542fafd8fbceb9fa019d3854a6912437e56978b56bdd2 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:29:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:29:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:29:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:29:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:29> .
}

ns1:c5fa1dba4c9fef484558ae91677c8e61b678a208489aba3d4716bca5a69e791f {
    <http://example.com/freestandingwork11:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/freestandingwork11> .
}

ns1:deaba020ed8c9ff0e41a58876d88debce7375ef75696e97296cff6d186751bfa {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:93:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:93> .
}

ns1:4b9b22223920be6bbe8969f5d50723f830ab4063ade5cfd33e723ec40100a6bb {
    <http://example.com/collection0/work2Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N2454da231905442e9252f13425044090 ;
        dcterms:spatial _:Nf26cd836ab3e429db2c76f0005499667 ;
        dcterms:title "Collection0Work2 closing" ;
        cms:work <http://example.com/collection0/work2> .

    _:N2454da231905442e9252f13425044090 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:Nf26cd836ab3e429db2c76f0005499667 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:60c1daf1de21d646bd560ce5e1f7e2b45b5c0e81b4233c5c5a07c6130f8f193d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:84> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 4" ;
        skos:prefLabel "Concept 84" .
}

ns1:cddfa3edea03b701c8cbe3506a1a20adc8e960ea4418c021759a42743505595f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:67> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 7" ;
        skos:prefLabel "Concept 67" .
}

ns1:db4715ea9e3ff245074f79217dd56a3b84dda8096e58ab9cdda1714664403e7f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:71:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:71> .
}

ns1:d8b3dd9ea255c557baad3617fac2abbec92a4d614be33248185404163c4367a1 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:11:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:11> .
}

ns1:f316fc83d8724d0a6c35be79a96c73a5588db095b13a6da7aa90d8b1003e0430 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:8:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:8:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:8> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:8:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:8:Image1:Thumbnail75x75> .
}

ns1:14f032736a51f45aac92b29b87ad5304ad6aec8f3944c410e5df9eab16186c6d {
    <http://example.com/collection1/work7:Image0> foaf:thumbnail <http://example.com/collection1/work7:Image0:Thumbnail600x600> .

    <http://example.com/collection1/work7:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work7 image 0 rights holder" ;
        dcterms:title "Collection1Work7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/collection1/work7:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection1/work7> .
}

ns1:df5bef19b2c22ac18f58602a71bdabe719db56f4297a63d9b758e0d26460781b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:5:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:5:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:5> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:5:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:5:Image0:Thumbnail600x600> .
}

ns1:f1ee55bf57b5be3525afa15a754761a81e80a0a9e26d0cd4e5f227c0ed9b18a0 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:1:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:1:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:1:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:1:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:1> .
}

ns1:9888a26d73aa308f9ea375e1a2f76b73604c1676b02868944cc5c4c0a5179494 {
    dcterms:medium a cms:Property ;
        rdfs:label "Medium" ;
        cms:propertyFilterable true ;
        cms:propertyGroup <urn:paradicms_etl:pipeline:synthetic_data:property_group> ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> .
}

ns1:b27b6c7a5fe11b663e6bfdbe862c624eab2f185602163451d0197801c7c2443f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:61> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 1" ;
        skos:prefLabel "Concept 61" .
}

ns1:16c0062a3c388bc9579e0cd44a499371dfa17574cbb3507cb636178f4ecbcd4c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:73:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:73:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:73> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:73:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:73:Image1:Thumbnail600x600> .
}

ns1:b9f3c7bc1d41ab775cdc1f28aabe7309544822ee09044c7efcb42aebebf6236c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:95:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:95:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:95:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:95:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:95> .
}

ns1:6db43dc9e2228838d9601c6f4b836bdb3676263d1788f63898ade64b9b15b8b5 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:6:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:6:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:6:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:6:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:6> .
}

ns1:473de9b842897a97df0fb9b899ab0bc933fe43e2c2cb13c2f7700006169bdb95 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:26:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:26:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:26:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:26:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:26> .
}

ns1:4119e40b620211bef75bb02c567d0f90dc2ec46debaa088f84506411aff1536a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:32:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:32:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:32> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:32:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:32:Image1:Thumbnail600x600> .
}

ns1:60e5268d8fd349c8b1eee103057674e5a1326f6a24ed5f58a0c1a1f69b8af6f5 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:63:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:63:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:63:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:63:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:63> .
}

ns1:ae44e4dc0b88a4906be1725d3c9cee1ddce5813863bbbe79226f4f2c5fe8f2f9 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:69:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:69:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:69:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:69:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:69> .
}

ns1:f26edae618193ac64fd1df8857629b6d22f56354e3ffea4eeea736385a3bf7af {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:14:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:14:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:14> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:14:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:14:Image1:Thumbnail600x600> .
}

ns1:4780e72af239244cababa4c3a6b0c7728fa6e0d20a9f6252132a9fef4889d6d9 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:31> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 1" ;
        skos:prefLabel "Concept 31" .
}

ns1:d5a5df35ce22705bc678f3d7bb33f50f61fa7443266ff2b7d24d700a6a60bf37 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:1> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 1" ;
        skos:prefLabel "Concept 1" .
}

ns1:0db4a38913d76831b481cbc1ddfd035dc69a46ada23eeead253aa67b5c997440 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:17:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:17:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:17:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:17:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:17> .
}

ns1:e3f885a226fdb2511833b6f6ff9d147e5441bd30af185dbcb24981010de60b2e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:19:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:19:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:19:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:19:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:19> .
}

ns1:e53a9fa217860d01695cf91a5bcd5a678db145b11c0cc457f27b01bc621efd5e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:36> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 6" ;
        skos:prefLabel "Concept 36" .
}

ns1:bcc9b2d7a5bfca6f2d0974987125a97b6348bd690636f41413c9d918d77fc696 {
    <http://example.com/collection0/work0Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:date _:Nf3958aee4b034956baeec00eb0d7dc73 ;
        dcterms:description _:N405821006a0d42798d1a0cba659ddb5f ;
        dcterms:spatial <http://example.com/collection0/work0Location> ;
        dcterms:title "Collection0Work0 creation" ;
        cms:work <http://example.com/collection0/work0> .

    _:Nf3958aee4b034956baeec00eb0d7dc73 a cms:DateTimeDescription ;
        time:day "---01"^^xsd:gDay ;
        time:month "--01"^^xsd:gMonth ;
        time:year "2022"^^xsd:gYear .

    _:N405821006a0d42798d1a0cba659ddb5f a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:125b7c04171a3722a9b765033b3ae5a4d049a0c75228ff60738017de9936d2b5 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:38:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:38:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:38:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:38:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:38> .
}

ns1:b471f973c7570a116bcaeea2e2454747ef18907bf663bb586e0b4801de7e6f4a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:20:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:20:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:20:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:20:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:20> .
}

ns1:2dcb7e8437fe3745352877d36fb93d066b52dc9bdaa92c9747a0fe4e9ec6f41b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:61:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:61:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:61:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:61:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:61> .
}

ns1:837a029a91633a4ee9d95367f7fcfd7bd73e14970fa94ada63d5a3f66df25d34 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:12:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:12> .
}

ns1:a9c2014fe535dca47a4b7e18d594787292c79c3787f7a57f65331e5cd76cd302 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:99:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:99> .
}

ns1:be9c731b4d8f9e333bd434b963ebf899ff1e3ae9ab9e35ffc1956eb3a6a726db {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:46> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 6" ;
        skos:prefLabel "Concept 46" .
}

ns1:c6a1e8bd317ee0e276503f11beda7ee5bba22e3c940059e61fe212f6b03ea25a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:90:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:90:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:90:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:90:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:90> .
}

ns1:53a076bd445acce255cd0bcb399d39e29829fb7dd96e4be603cf10cc24933cea {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:55:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:55:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:55:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:55:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:55> .
}

ns1:8466c704f79f6fa743a761ca22a1695d1a29c5c24271bbc7a7f55e9b70d8d746 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:14> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 4" ;
        skos:prefLabel "Concept 14" .
}

ns1:ce1e86441e49569cfb6a2b75e261a2438ca582a68b5c0b0e0688df9ca9a5f032 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:52:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:52:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:52:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:52:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:52> .
}

ns1:a10222847aab08a48c22f929fa0bb256261f5ba0321c6e41b350b009d2d0b697 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:8:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:8:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:8:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:8:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:8> .
}

ns1:7a4aa625ae861091ed3365f9da9ca6f55930d29e35a4303fb10a994c9c2c9a0d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:61:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:61:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:61:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:61:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:61> .
}

ns1:1a2538b96202bcd5881aa2442b2da2dc5c1e59d9f3b0260871b51dadf57a4f1a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:46:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:46:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:46:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:46:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:46> .
}

ns1:26691ff0f9af983cb6fc50fd7e6afa9e12b437ac0ec61b2b70a72f9089e809c6 {
    <http://example.com/collection1:Image0> foaf:thumbnail <http://example.com/collection1:Image0:Thumbnail75x75> .

    <http://example.com/collection1:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1 image 0 rights holder" ;
        dcterms:title "Collection1 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/collection1:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection1> .
}

ns1:fc9d14d87f08d5a4d161e20c2245f774ac07b502e33d2f47bd29ef9f12d990c7 {
    <http://example.com/freestandingwork11:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/freestandingwork11:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/freestandingwork11> .

    <http://example.com/freestandingwork11:Image0> foaf:thumbnail <http://example.com/freestandingwork11:Image0:Thumbnail75x75> .
}

ns1:8d70a90c894513276b6b5b2d8129439c7b5acbcd62bc202a9b896e3ce6e7b85a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:4:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:4:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:4:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:4:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:4> .
}

ns1:a816507ba51c5d85486f8fdb3ffc6a056ca38c310e85d49af3e9de02c8064442 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:48> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 8" ;
        skos:prefLabel "Concept 48" .
}

ns1:1f86583daab0d595da88f4a33180886cb8fbc17c854a42998844af42b5728d7c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:48:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:48> .
}

ns1:318c840551e374aa46b2ea1ca180bb1761a3053254df869002d6837aca4650a5 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:74:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:74> .
}

ns1:26a6ace4855f8033873f6db4fe3f5e4d6b2129ddab074d425c44da3cf7d6f8ce {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:70:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:70> .
}

ns1:14b71e077aff4f4c65b4fcdff56a078b385f5b7cf7f4e7dad37eb9cd19147ec3 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:102:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:102> .
}

ns1:2a43067c97c6844dce3a2c7f58ce21e1a3279309e65276abfc3aa5b73bc7d5d2 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:70:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:70:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:70:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:70:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:70> .
}

ns1:fd1ac64f9a83d815a657c0fa5f48ed439d013d891437853c456c58c955b5b700 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:47> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 7" ;
        skos:prefLabel "Concept 47" .
}

ns1:13e4fa0d1ac4bd06015c2a48d19ec516429bd947bebda145b76ef12a519a2937 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:62:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:62:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:62> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:62:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:62:Image1:Thumbnail600x600> .
}

ns1:518c6f66065bba41bd57a9ef510c2dde18d7d3ce2eba5bce3820f00bc6241cd9 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:39:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:39> .
}

ns1:0686a6866cd03dba061bf65a63fba3f030b33101865766a4d7f49decf1f96648 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:33:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:33:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:33:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:33:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:33> .
}

ns1:c6586d0163e425339620c5ef3e309d8b21bb7a002f999c3fb361548257273e59 {
    <http://example.com/collection1/work4Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:creator <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:date _:N350df0d174234ab580eeab9639b1611d ;
        dcterms:description _:Nc10bbd765b9f4ad3a4704d15c8cefd61 ;
        dcterms:spatial <http://example.com/collection1/work4Location> ;
        dcterms:title "Collection1Work4 creation" ;
        cms:work <http://example.com/collection1/work4> .

    _:N350df0d174234ab580eeab9639b1611d a cms:DateTimeDescription ;
        time:day "---28"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:Nc10bbd765b9f4ad3a4704d15c8cefd61 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:5cf8fff04e9a83942beecd5f9da8e16a399cfe6edccf2eb63d7c4fa487054fed {
    <http://example.com/collection1:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1 image 0 rights holder" ;
        dcterms:title "Collection1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection1> .
}

ns1:16b1832538492b0915cd2802a152ac2867c5334092c3db5ee5681b8d4a054a91 {
    <http://example.com/collection1/work5Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:creator <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:date _:N999b2685473849248c13fb15e73eeb70 ;
        dcterms:spatial <http://example.com/collection1/work5Location> ;
        dcterms:title "Collection1Work5 creation" ;
        cms:work <http://example.com/collection1/work5> .

    _:N999b2685473849248c13fb15e73eeb70 a cms:DateTimeDescription ;
        time:day "---27"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns1:b5ea5f2f04a3aca0b674c43a59f641b6e145e0da3fcabe928b0810ccc6fb8ace {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:63:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:63:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:63:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:63:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:63> .
}

ns1:6d39817dffd1c37bc787ae0a0e41abcdf65c33ba6413bb619e6a822b911aba71 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:43:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:43:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:43:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:43:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:43> .
}

ns1:66866f7b8a6424cb767f92e2068743e2367309a6b21c012d0329c01bacec782e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:92> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 2" ;
        skos:prefLabel "Concept 92" .
}

ns1:60ffae701539a88187b0dab431e1a445e16eb0ee0f0c76156c46e447658898dc {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:82:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:82:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:82:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:82:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:82> .
}

ns1:255319e0aa2e08acfda1476e743b07470b266ade38691deaaf3a6e0e4ca997e4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:17:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:17:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:17:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:17:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:17> .
}

ns1:c9e5bed4bf4c0a16dacc6b0a5f88d306ea60559e24ffe0266bb2cbea927066d8 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:50:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:50:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:50:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:50:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:50> .
}

ns1:3a5155f99c68f40360c56a6ee1e197390237269910870e1c44f2ac4495e23ee9 {
    <http://example.com/collection1/work7Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-25"^^xsd:date ;
        dcterms:spatial _:N05fe288caf7e41de83ee7e56b880fcd2 ;
        dcterms:title "Collection1Work7 opening" ;
        cms:work <http://example.com/collection1/work7> .

    _:N05fe288caf7e41de83ee7e56b880fcd2 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:9cae524af938f54ebf9040cace19e191619dfbb00e686809cbf31f1a317ba84b {
    dcterms:subject a cms:Property ;
        rdfs:label "Subject" ;
        cms:propertyFilterable true ;
        cms:propertyGroup <urn:paradicms_etl:pipeline:synthetic_data:property_group> ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> .
}

ns1:59d7d78e716ea383adb3f3471d9dfb78a79895b784e8c086b3a8a867b8520188 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:19:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:19:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:19:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:19:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:19> .
}

ns1:92947719d740d1623595fa793aa7a9fae0aaacc9e54f7f47f44939ccd3a9acce {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:107:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:107:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:107:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:107:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:107> .
}

ns1:acb1f836e7ee146b6b22a619ce60a2e7d15cf7ac1ff1af740b70232d350b1936 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:14:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:14:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:14:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:14:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:14> .
}

ns1:506f4f14ff7261929077c93023e0efc312277b38dece51b788402d0563954ee3 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:62:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:62> .
}

ns1:f7a9165761eb0221fef9b39c53ff9e557bda897f3d5f0c0c4ce44224adcb0f38 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:42> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 2" ;
        skos:prefLabel "Concept 42" .
}

ns1:82a225565ac1649557bd60c4588b4a0c848d6772a291c4eeca775b8aa77c6ccc {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:16:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:16:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:16:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:16:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:16> .
}

ns1:2b6fc59c027706ba01a70383c4b50b587406511038ba4cf7a47bbe4b0be6d47b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:76> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 6" ;
        skos:prefLabel "Concept 76" .
}

ns1:2c7164112c4718f36ed3ea9ce0fa4b3cd76d4c844c9956e80032b57e553fd0f0 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:22:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:22> .
}

ns1:ad1280577ce33c97e127cadf5b8c65c29e9e73fa404d14e97057de73dd4289e4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:53> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 3" ;
        skos:prefLabel "Concept 53" .
}

ns1:e9b30f8994b4414612a003233214a6cf4c453586c577407128461c77c799749c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:64:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:64:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:64:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:64:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:64> .
}

ns1:d4d222c5dd7c00e41438e98b23f7de886d4efe94ec0a0682d26306643474ba3f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:69:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:69> .
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

ns1:3374753570d497486501fbb5e32280f6e8130642cb0bf014893194296707ac19 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:23> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 3" ;
        skos:prefLabel "Concept 23" .
}

ns1:f998c2d891d3476bf9094023ec9b4ca98a7041ede0a30f2584b5d1ec5cf06c1f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:35:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:35:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:35:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:35:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:35> .
}

ns1:e40b39dc8399e7179f34c586dfe4df279370d75fdd21164aecd108e5bf855328 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:3:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:3> .
}

ns1:695a32f8980090584127c171ed6fd522ba1004795373ff7d1c4af23106201ea3 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:6:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:6:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:6> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:6:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:6:Image0:Thumbnail75x75> .
}

ns1:c52e6b5bf9ced556396012dd00a34795e6e16a8c30d404b4bbdbe7e7b139c165 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:40:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:40:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:40:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:40:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:40> .
}

ns1:fa3fc6771fa8a3e6961c8e61d81e627c2de4edb864ddce5a3bdf5dc1e3c47108 {
    <urn:paradicms_etl:pipeline:synthetic_data:property_group> a cms:PropertyGroup ;
        rdfs:label "Synthetic data properties" .
}

ns1:2c8cf55ba89379cf84fa456e01fcba2e2ddedc0c60450cfd12706ece01d7c958 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:72> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 2" ;
        skos:prefLabel "Concept 72" .
}

ns1:a16969b14c1be386b8d3d64e33b7e4f36b7e34b14e1f1917eaf49ec7ef7af511 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:1:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:1:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:1:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:1:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:1> .
}

ns1:2c5a42f3b0c89dbf92f1f2133e7559e97e3601f6804021d272fc24be5f0b93bd {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:4> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 4" ;
        skos:prefLabel "Concept 4" .
}

ns1:06896ac7e7e51ec744e6bab868102626ec59261474ef19cf7cf14eef8bac5d73 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:77:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:77:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:77:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:77:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:77> .
}

ns1:3ffddf44b13bb57717d6cdc5a193353b8e4077680bd4d804d98d1b6c08456313 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:54:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:54:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:54:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:54:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:54> .
}

ns1:1192b1b226b79dbf1fd9c43e51186116519510bef3c36b93310c6bf3237e45aa {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:108:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:108:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:108:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:108:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:108> .
}

ns1:f036f704168166c49568b51914845855a62b7ec39f97cc7303642430d7726146 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:28:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:28:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:28:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:28:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:28> .
}

ns1:c8b9b869f583d7cf6ad6ce3a00dc38892e04b880262d664e64c583ec869d871a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:84:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:84:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:84:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:84:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:84> .
}

ns1:0eaecaf565f426e7981b8cb0579a6b6eb7e968b879e925cc7f2de391a7136c22 {
    <http://example.com/freestandingwork10:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/freestandingwork10> .
}

ns1:e27f0454ab919182d9e81a005f022ba6b243774c8612ed8fa56531568f8a870f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:97:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:97> .
}

ns1:bcd567583fdff1f3d29f281f85c9ef33686d2af5da62b96bbb1af28d24a26e1f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:50:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:50> .
}

ns1:3eb3cb2c9e99a0bf1f3682789f3222b2784876bbb7fbe3d1e65fdf4c59abc086 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:105:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:105:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:105:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:105:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:105> .
}

ns1:1997354839b1f28d23574df579af07bedfccc68ce0b2565ab25e3761e9f04ec0 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:8:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:8:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:8> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:8:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:8:Image0:Thumbnail75x75> .
}

ns1:d1d6817253daeb6c62b67a3b36d11b7f3287e55cab03ac9ca47cf68584c4fad1 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:22:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:22> .
}

ns1:eff79fc556d584abd25f86be0d4c62e4999c4d34c878b24b7b90efb8fe52cbb0 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:39:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:39:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:39> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:39:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:39:Image1:Thumbnail75x75> .
}

ns1:64d7ed2a09574990854ab9731a75f94fd38dbe5348c6a7c02b0e9036d2e0573f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:97:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:97:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:97> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:97:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:97:Image1:Thumbnail600x600> .
}

ns1:aac168c816e635fb09c7d5cb72adeb323dc8ed1e640fafda26353eeb37cd95b9 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:64:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:64:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:64:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:64:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:64> .
}

ns1:479383ec5e7ab904997078c99d1ac0539dc7e35b5178f1c35548f3ab15412d9f {
    <http://example.com/collection0/work2Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:creator <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:date _:Nd714feb3d7914cdea02c8b1d94691604 ;
        dcterms:description _:N2454da231905442e9252f13425044090 ;
        dcterms:spatial <http://example.com/collection0/work2Location> ;
        dcterms:title "Collection0Work2 creation" ;
        cms:work <http://example.com/collection0/work2> .

    _:Nd714feb3d7914cdea02c8b1d94691604 a cms:DateTimeDescription ;
        time:day "---30"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:N2454da231905442e9252f13425044090 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:4bed082520acc376ae779283d5eac7c57f15b89a49ab752c6b1a76ec720bed1f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:55:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:55:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:55:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:55:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:55> .
}

ns1:5d38497d080b17c0c1d9c279ea5232888840ac92bdc37c27a7f63d9e5a64b0b6 {
    <http://example.com/freestandingwork9Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:date _:N89b1961be5a64064a2106b2dc902755b ;
        dcterms:spatial <http://example.com/freestandingwork9Location> ;
        dcterms:title "FreestandingWork9 creation" ;
        cms:work <http://example.com/freestandingwork9> .

    _:N89b1961be5a64064a2106b2dc902755b a cms:DateTimeDescription ;
        time:day "---23"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns1:03da731f950b87e333695b1d76d35e6b631a44c34025578d5ba84bf086542207 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:55:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:55> .
}

ns1:e35619463485dd7ebe77ca2c877fd81d7f1fa93b71c26d6c300bcd3a9df7c080 {
    <http://example.com/collection1/work5Location> a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:e3ad822213ec026234075e16d5c1b947de4a4bf90fc7772a8f078550160ca734 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:75:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:75:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:75:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:75:Image1:Thumbnail75x75> .
}

ns1:e6a2afe4ea4983153c1ac1eac853da6c474e1cdf5b76a0341b6128cfd7bedde9 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:90:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:90:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:90:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:90:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:90> .
}

ns1:6a513419b2c6a39579cd41577a792d08de2c1d0bc764e00cf362544e24b3744d {
    <http://example.com/person1:Image> a cms:Image ;
        dcterms:creator "Person 1 image creator" ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Person 1 image rights holder" ;
        dcterms:title "Person 1 image" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/person1> .
}

ns1:a92937d339d9ad9d82212faf48f3d8c0d8cbabec65617742f0e2946692f73162 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:87> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 7" ;
        skos:prefLabel "Concept 87" .
}

ns1:d7a29ea6626a51b1d80d120edd92445ad8bd4147fbb7b31d7a4e2ffea10034ae {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:44:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:44:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:44> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:44:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:44:Image0:Thumbnail600x600> .
}

ns1:f281c876ee60d243fff27d5e402e79893c8fee810ef0ec87e1b7e8f7c833e476 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:72:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:72> .
}

ns1:34a5a1f94fe8344c5d803f447216b233f3f01b67a1ebeace5cc292f416e51fe4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:100:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:100> .
}

ns1:8ef8ada0ae478256519dba3d8dcc05044ec591d1f579343c5eb239cd39b96542 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:71> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 1" ;
        skos:prefLabel "Concept 71" .
}

ns1:c1810044720a741a920d53c60ad65ee86cb1cd75be84056866922e95dfe3d3ac {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:81:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:81:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:81:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:81:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:81> .
}

ns1:8e8cc1a5f09deb9884343b233d37e2f54c840af4a0d94ee252181a3c242a5fe4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:42:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:42:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:42:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:42:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:42> .
}

ns1:8d27611da189c6abfee991dc61078238f24fafa1e6816b02bb3cec6ecb8da22a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:97:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:97:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:97:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:97:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:97> .
}

ns1:1c21450795da10bac08d248627b0c218f9508a8d124015a5c1164967fe8627e9 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:68> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 8" ;
        skos:prefLabel "Concept 68" .
}

ns1:8ded798bad0588b6eb04ac18829dc0b6bffa5fa41401159f10efe003e0933d9a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:90:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:90:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:90> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:90:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:90:Image0:Thumbnail600x600> .
}

ns1:4c50235c28de75f706bb55ba2f524271862b829648ebfeadf648c3a492c88016 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:68:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:68:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:68:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:68:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:68> .
}

ns1:23b1f69790daec30328487de4af24af35078fea2a4808f6a0fe74e801765327c {
    <http://example.com/collection1/work7:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work7 image 1 rights holder" ;
        dcterms:title "Collection1Work7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection1/work7> .
}

ns1:fea8ee8997511cde7ccd0ae4981664560407d9bb4513acbecdb0a2952e31e961 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:14:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:14> .
}

ns1:2c332ae18c64b17866916ac60e0a37c5c23504ce11c385244c6c3dc5f128f52d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:17:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:17:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:17> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:17:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:17:Image0:Thumbnail75x75> .
}

ns1:05a96b340f1a9c5ac2948723811996747e4396ee47f96f20030fb17094b520f3 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:108:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:108:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:108> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:108:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:108:Image1:Thumbnail75x75> .
}

ns1:51d3d551d11ef715e3967c1b583f6a1d91e08808d2833d54b1162fc6feff019a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:79:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:79:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:79:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:79:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:79> .
}

ns1:b63ca64c8d48f081d938ea009885f1c922641da40cd616094f525726a60676af {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:15:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:15:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:15:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:15:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:15> .
}

ns1:6625aa82678e9273ff7d11d04bc70977b9a138f11778cb90b9eaeeb4767a8931 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:34:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:34:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:34:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:34:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:34> .
}

ns1:57c965e0d4d035231744ccd84556272ee3010ffcc8eb5ec986984382fd6c0682 {
    <http://example.com/collection0/work3> a cms:Work ;
        dcterms:alternative "Collection0Work3 alternative title 0",
            "Collection0Work3 alternative title 1" ;
        dcterms:contributor <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:creator <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:concept:13>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:14> ;
        dcterms:identifier "Collection0Work3Id0",
            "Collection0Work3Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:concept:23>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:24> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:concept:43>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:44> ;
        dcterms:provenance "Collection0Work3 provenance 0",
            "Collection0Work3 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:concept:53>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:54> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work3 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:concept:63>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:64> ;
        dcterms:spatial <http://example.com/collection0/work3Location> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:concept:83>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:84> ;
        dcterms:title "Collection0Work3" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:concept:103>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:104> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:concept:3>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:4> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:concept:33>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:34> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:concept:93>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:94> ;
        cms:collection <http://example.com/collection0> .
}

ns1:8a00c28b63e58ae741b2acde498724d0b93aeecd6790811aaba26fb65dc030cc {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:27:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:27> .
}

ns1:e7430f9c4bf20b47abf94cec1a2d47ac803f6398fa6f629ff9c455b045b50f2f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:53:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:53:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:53:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:53:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:53> .
}

ns1:77766976a9cfd34338cf4716c3e4aed64a5d56b8e7f68793135aa70f936012e5 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:77:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:77:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:77> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:77:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:77:Image0:Thumbnail600x600> .
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

ns1:07950df9c17951a5b0e30a4534b319c0bf1bfbfdc4d8d807014c90762747096c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:98> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 8" ;
        skos:prefLabel "Concept 98" .
}

ns1:5a31ac76ca962153c2343721045931fd6b8ed8f1d6fbc4142a6a4a11d069717a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:109:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:109:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:109:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:109:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:109> .
}

ns1:28cf8e14e4967614bdf406a2b431e9abbd87ce310507a074c1f496d2be56e094 {
    <http://example.com/freestandingwork10:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/freestandingwork10:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/freestandingwork10> .

    <http://example.com/freestandingwork10:Image0> foaf:thumbnail <http://example.com/freestandingwork10:Image0:Thumbnail75x75> .
}

ns1:fa92152c4ae114167783a01b86aae9db5f5c19212081809384e3ddbebe287a76 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:88:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:88:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:88> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:88:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:88:Image0:Thumbnail600x600> .
}

ns1:b2068202fe3a0ac5cb6f164972404bb4a21becd3dfa416cedb9b61ed8130515e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:85:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:85:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:85:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:85:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:85> .
}

ns1:1c18ec1aae4a53ed082c5abadb327efcc8e50a8f1d28048b29260f4dbe0034c9 {
    <http://example.com/collection0/work2Location> a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:6d91c12d922035f0c8be333775bfaa70ce7ad36d228ab20025a5337a8c98dddc {
    dcterms:description a cms:Property ;
        rdfs:label "Description" ;
        cms:propertyFilterable false ;
        cms:propertyGroup <urn:paradicms_etl:pipeline:synthetic_data:property_group> ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Description> .
}

ns1:ad5de8e9b5b2f988e8d6d572b41c493dcc2aaee265a1542ca58e6967a54e769d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:23:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:23:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:23:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:23:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:23> .
}

ns1:73702d286fa15ffad69500547d958a1218994d41d5865184e55d86d96d9f0fbb {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:98:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:98> .
}

ns1:9b0a1ea7e48494f1a6395f16a17161edf17ee2ae5e5d7c4d502f22aec447cb57 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:15> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 5" ;
        skos:prefLabel "Concept 15" .
}

ns1:6fafc82625facd027c2948a5d48baa92d0c43aedbc7881a63d84bb9914bcca7e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:59:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:59:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:59:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:59:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:59> .
}

ns1:e8e7ad7906898ca33fa3c6e33782034ba5b05b48abe43faa8bd05be175ac6614 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:3:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:3:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:3> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:3:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:3:Image0:Thumbnail75x75> .
}

ns1:e62dc711ded93491b0eb8590398470189a931b5e2c2fbb299d83f9852dab9c7b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:18:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:18> .
}

ns1:e056ffae020ff8f5d3168b87cfb232ce4426edce88695e7ba852c07aec42b692 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:49> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 9" ;
        skos:prefLabel "Concept 49" .
}

ns1:5de067840d26a74734172cbea1c023dbd31743791a43bf2465e6107d328b05c0 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:47:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:47> .
}

ns1:06c6ef85d02f5936937b25594d218454d8bb96b4a65e9c35d9a51ff799dc969f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:80:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:80> .
}

ns1:2face0f9cdf697486ffc04d3541556601311bf15ce9d332a67219f5f2ef596a1 {
    <http://example.com/collection1/work7Location> a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:2cec01d821d82cb285c763fe7ad0bae09f1433aa68a1162828e312f393e19a8c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:28:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:28:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:28:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:28:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:28> .
}

ns1:55327db14b7a205218bde554ceaea5c686744ef8173156a3e2a51006e0cea868 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:71:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:71:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:71> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:71:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:71:Image1:Thumbnail75x75> .
}

ns1:222cd6635931a3f6a3e2211b0cdc6af384dcbff39c8d99ba88ed049516932cea {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:79:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:79:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:79> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:79:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:79:Image1:Thumbnail600x600> .
}

ns1:210bd1e01ec191f919f7b86d1cc614cf53ef689ab4b59db3634c8b635d3b06c1 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:6> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 6" ;
        skos:prefLabel "Concept 6" .
}

ns1:2a4aa1eea6861a472727054ff1487f521ffa592f622104b2cd2359e617b0f11d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:20> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 0" ;
        skos:prefLabel "Concept 20" .
}

ns1:84b4c8043d5e3f307eb22e9eb610f2bcc8dd198f73ee4e683bcc0b344ef3a7ef {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:42:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:42> .
}

ns1:af56a64ffe3ad8890e93a0564b9f562812231d3d54bb1e186206be407ef6bc27 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:67:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:67:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:67> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:67:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:67:Image1:Thumbnail75x75> .
}

ns1:bc64ec8025840c4ca7373fdc262c6aa5bf8f6819920a431e662482e77ff9b33d {
    <http://example.com/collection1/work5:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work5 image 0 rights holder" ;
        dcterms:title "Collection1Work5 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/collection1/work5:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection1/work5> .

    <http://example.com/collection1/work5:Image0> foaf:thumbnail <http://example.com/collection1/work5:Image0:Thumbnail75x75> .
}

ns1:63ea84e4a44ae0fdfeb67637c1718a5564bf8e5617d4fbf757cd0b8b559a927c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:86:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:86> .
}

ns1:2776f439ef6a14fbc060dc39545bd5f087fbab24fdc71fee930f78378f738680 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:94> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 4" ;
        skos:prefLabel "Concept 94" .
}

ns1:6d83e8f1a3c03732d6030da010952bc2ff5748d22df9647f47bea0451f1e7d01 {
    <http://example.com/collection1/work4Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:Nc10bbd765b9f4ad3a4704d15c8cefd61 ;
        dcterms:spatial _:Nd9d07a8dcf614d25bf353e31ce6c5a9d ;
        dcterms:title "Collection1Work4 closing" ;
        cms:work <http://example.com/collection1/work4> .

    _:Nd9d07a8dcf614d25bf353e31ce6c5a9d a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:Nc10bbd765b9f4ad3a4704d15c8cefd61 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:4eed97be1de3e673445c9372a9cd3572807e22d61b33ebd5177f02d95e604693 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:91:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:91:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:91:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:91:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:91> .
}

ns1:d9ca3015775a2f25f06289909fd1a7597bc851067ed55395676fe116e6396f85 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:95> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 5" ;
        skos:prefLabel "Concept 95" .
}

ns1:fdc4fe1deeb47a0a4d39e3f3a30460398194abefc7243450b05ab2f2d1993a66 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:36:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:36:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:36:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:36:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:36> .
}

ns1:30abc090c5ee5a9f9e8f34a7a697e8dad36d9909aa96ea75013b47d74431d9d5 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:46:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:46:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:46:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:46:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:46> .
}

ns1:b6423a6ec170902518dc241219307e43c98586ed2a68443c14d6b9cf9b754416 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:13:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:13> .
}

ns1:f3ab28a514eae102c20534cb4f3d76ea8baf247494cf3d6043a32495e1235377 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:9:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:9> .
}

ns1:a231193b93e27811dc83b53273b8a4e723fc91bc617a1a1a77e60e2d06431cfa {
    <http://example.com/freestandingwork8Location> a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:8b398bc74b6d93810ce1a36bcfdce63db702d372f173238d6ac311f74cb23522 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:21> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 1" ;
        skos:prefLabel "Concept 21" .
}

ns1:4c14ab9ef8178d5a81014fb87e9752d1daf672034d3c28628560d356768a3f43 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:99:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:99:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:99> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:99:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:99:Image0:Thumbnail600x600> .
}

ns1:77e2f8004100e2aeec7e7a792f005c7444e178de698f13dc066c829d780ecf1e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:99:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:99:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:99:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:99:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:99> .
}

ns1:7b815a3edba95219fb7a8dd86ca30025d7ec41398fd76ee4c76424beb7254ecd {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:101:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:101:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:101:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:101:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:101> .
}

ns1:1408b3812224e2a1086629e0ea756fca3d097512fda34b2fe68cf02f41763b30 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:8:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:8> .
}

ns1:244fa5d40b23072faffceb68119c7b0277c00ab8971823ae70fc8fa32019af60 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:73:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:73> .
}

ns1:ae27119e143b2d58ea99f59dcf32317698b7ba9fc1ffe4dc6b4577a750776901 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:74:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:74:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:74> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:74:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:74:Image0:Thumbnail600x600> .
}

ns1:832f1158ceedf8494ff43aa74a3ceb5068f53f59e7a69eba63f85f8c16ff89ab {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:83:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:83> .
}

ns1:2533917bee26e639fb111a5bcf7b8aa8d4c7f5295207ada9d414b548d10142e8 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:52:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:52:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:52> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:52:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:52:Image1:Thumbnail75x75> .
}

ns1:f7dd0aefd37851ef27871917a491b33e635ba9c2b2fcaf2ba8c921dd199bc8dc {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:11:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:11:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:11> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:11:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:11:Image0:Thumbnail600x600> .
}

ns1:c02be31ccefbb5b4726177e85c7914fcfda8a20487444b82302069a9fd8b29ac {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:24> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 4" ;
        skos:prefLabel "Concept 24" .
}

ns1:fadd2f18fc473b17baf6a1ce75b5df2336eb0f43ae281c7166389bb1fd040919 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:78:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:78> .
}

ns1:ca5ff7b02d57cca0ad7bdb78d1cbfa4128384a59afa630513510f913547b2aac {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:107:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:107> .
}

ns1:e2e303e64f0cf425a590b2a44dfc4186a2cf1d97e396ac3c42e3f9d2f0ed0b39 {
    <http://example.com/collection0/work2> a cms:Work ;
        dcterms:alternative "Collection0Work2 alternative title 0",
            "Collection0Work2 alternative title 1" ;
        dcterms:contributor <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:creator <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:description _:N2454da231905442e9252f13425044090 ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:concept:12>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:13> ;
        dcterms:identifier "Collection0Work2Id0",
            "Collection0Work2Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:concept:22>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:23> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:concept:42>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:43> ;
        dcterms:provenance "Collection0Work2 provenance 0",
            "Collection0Work2 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:concept:52>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:53> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work2 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:concept:62>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:63> ;
        dcterms:spatial <http://example.com/collection0/work2Location> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:concept:82>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:83> ;
        dcterms:title "Collection0Work2" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:concept:102>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:103> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:concept:2>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:3> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:concept:32>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:33> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:concept:92>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:93> ;
        cms:collection <http://example.com/collection0> ;
        foaf:page <http://example.com/work/2> .

    _:N2454da231905442e9252f13425044090 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:ffab4a8ea12134cada547f9c563546e93aebcbc6a77d7fae00b2d7449de8f435 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:93:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:93:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:93> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:93:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:93:Image1:Thumbnail75x75> .
}

ns1:2edac3ca9bfacdb97fe771931ef8a060898945dcffcc14bfba95b5efad7d78ea {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:27:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:27:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:27> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:27:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:27:Image1:Thumbnail75x75> .
}

ns1:3fae59122b74e4cb5088567374eb4715476989f568ad29abc0a01f9c6eaa88af {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:62:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:62:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:62> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:62:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:62:Image0:Thumbnail600x600> .
}

ns1:ef943d5a6ab6c11111dcb2e8a13fe80fe8c8daaf1a6cbc0c68f043ec68596a5b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:16:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:16> .
}

ns1:03b8808ed50c82ec84535a7a513400068be8f0b636ffde95f973268d6d86e5c0 {
    <http://example.com/collection0/work3:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work3 image 0 rights holder" ;
        dcterms:title "Collection0Work3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection0/work3> .
}

ns1:cdb1fc7f0a4bc5dda65fac671ae88d3b3671985f6a026786c0c4ac7396021c46 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:4:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:4> .
}

ns1:848ee525437d61d809c2bf40028510e7c760c38f92d3f56a0aa7f5aae81a4d2b {
    <http://example.com/collection0/work1Location> a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:85d0231528fb7e131f10ce82642ee375fef60ebfbd5f2f91f699d887b2b2b39a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:93:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:93:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:93:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:93:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:93> .
}

ns1:7b46412e248f029bdbbaf7adf5031bba130deef2c8cbc9947a00b9c78354941d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:84:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:84:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:84:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:84:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:84> .
}

ns1:8f4e9116707e787caa8e8de4a352740b779045540a7ccc0c3cd65cc597708fec {
    <http://example.com/freestandingwork10> a cms:Work ;
        dcterms:alternative "FreestandingWork10 alternative title 0",
            "FreestandingWork10 alternative title 1" ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:creator <http://example.com/organization2>,
            <http://example.com/organization3> ;
        dcterms:description _:N527854ab4d2f46e6a6d2472b38097401 ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:concept:10>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:11> ;
        dcterms:identifier "FreestandingWork10Id0",
            "FreestandingWork10Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:concept:20>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:21> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:concept:40>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:41> ;
        dcterms:provenance "FreestandingWork10 provenance 0",
            "FreestandingWork10 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:concept:50>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:51> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:concept:60>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:61> ;
        dcterms:spatial <http://example.com/freestandingwork10Location> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:concept:80>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:81> ;
        dcterms:title "FreestandingWork10" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:concept:100>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:101> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:concept:0>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:1> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:concept:30>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:31> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:concept:90>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:91> ;
        foaf:page <http://example.com/work/10> .

    _:N527854ab4d2f46e6a6d2472b38097401 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:f9f41defe629a034a9534957ffc4e22d4e3f77f95783d6dd5f0a5d9400b3e5ba {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:30:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:30:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:30> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:30:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:30:Image1:Thumbnail75x75> .
}

ns1:53ca740ec78333783ea5b0f11e183300e758fc785c5c1be621786326f8813f57 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:20:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:20:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:20> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:20:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:20:Image0:Thumbnail600x600> .
}

ns1:ece63b445acfc630d79c5ac48fe125bc8a94e6219ad4ae29011a9616fc20d646 {
    <http://example.com/organization3> a cms:Agent,
            cms:Organization ;
        foaf:name "Organization 3" ;
        foaf:page <http://example.com/organization3page> .
}

ns1:196b2af00ee50a581911947206b927b1817df0bfb1bff86bfb0e135358736bef {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:60> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 0" ;
        skos:prefLabel "Concept 60" .
}

ns1:f581b3d50d2c7662725eba0f06b644bc6f1d4f382f441642b8920944f95a5276 {
    <http://example.com/collection0/work3:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work3 image 0 rights holder" ;
        dcterms:title "Collection0Work3 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/collection0/work3:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection0/work3> .

    <http://example.com/collection0/work3:Image0> foaf:thumbnail <http://example.com/collection0/work3:Image0:Thumbnail75x75> .
}

ns1:1824d7b5ee799cc8d3fbf5f5b9a6ace06a4e5b379380e75ba688b7c8f7a334ac {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:105:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:105:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:105> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:105:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:105:Image1:Thumbnail75x75> .
}

ns1:151936f68abff5460ad259130890993c7a575bb3791aeeebcf0f95a8bfba4858 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:68:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:68:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:68:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:68:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:68> .
}

ns1:eb85669b9ffdf6b6d01c3d6b53b9f589a733981ed742b735c7d5af11944c7db2 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:2:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:2:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:2:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:2:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:2> .
}

ns1:18e28f481a7bad0a10f712641b65584241dd45073c57be9ebf11382fc619e5d7 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:57> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 7" ;
        skos:prefLabel "Concept 57" .
}

ns1:ecbb34609552183e86f1b9ee6a0465b6e1af617fa3598f227a57d2edae8b6abc {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:76:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:76:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:76:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:76:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:76> .
}

ns1:4a6aa739215eaf494efcbf8942deccd32fe1f78c840ee7874e7ab2cdd0bee43e {
    <http://example.com/freestandingwork9:Image1> foaf:thumbnail <http://example.com/freestandingwork9:Image1:Thumbnail600x600> .

    <http://example.com/freestandingwork9:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/freestandingwork9:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/freestandingwork9> .
}

ns1:35cc14484e72e99e656c7d09995bd0f72593e8de673381af3c5ec309a1654932 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:1:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:1:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:1> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:1:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:1:Image1:Thumbnail600x600> .
}

ns1:a63ad0f4e335356e028d49e42801d994e789f4636f015eeeee70b85caeeb1e85 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:21:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:21:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:21:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:21:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:21> .
}

ns1:d268198595a254196bc1a4479b3254a3b43b78133ebe50476cd919cbac7d068a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:6:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:6:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:6:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:6:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:6> .
}

ns1:510178f316d13ea6bfda1d7905d2dfba23bb4f2b311dbc7ec08887bf0bea4dc0 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:13> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 3" ;
        skos:prefLabel "Concept 13" .
}

ns1:3ae7a7bacbe79521a005e98a97fbce3e73a649f79ce861f976b73a1a4b304168 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:24:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:24:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:24:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:24:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:24> .
}

ns1:b33ae275422f5032f97e6ac9a54de366f57254ab43748b92e640e9f92483c6b4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:50:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:50:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:50:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:50:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:50> .
}

ns1:182c3aa22e91d302c393b535e4c9e31f85e2f7f0ef3dcc55c0d895d92a05955c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:32:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:32:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:32:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:32:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:32> .
}

ns1:9c6fbff1fa3d871f01ade84ae09246a49c4c9e959fd090ba76f13f93d53b7526 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:48:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:48:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:48:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:48:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:48> .
}

ns1:06b3da174b256f89c8877c8ba46d5fdd3f16bebd3507e41228fd480719ee6676 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:25:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:25:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:25:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:25:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:25> .
}

ns1:bbada700ecb69e22d5347f5cd293acddf1f5f1032964970634d5603e058af471 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:51> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 1" ;
        skos:prefLabel "Concept 51" .
}

ns1:dc69c13fd68df3325c9b2142902e40e4aaf0271c22f80163162c316874f4b998 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:62:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:62> .
}

ns1:d0cd7c411ae6c06e438ae89419f2a5b8aa4bfd72f48dc24f4e168dab1a892db6 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:66:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:66:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:66:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:66:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:66> .
}

ns1:2b36a2dad03141398820e37918be4ee46c81dc728d3ba5643e418133dbe0d466 {
    dcterms:extent a cms:Property ;
        rdfs:label "Extent" ;
        cms:propertyFilterable true ;
        cms:propertyGroup <urn:paradicms_etl:pipeline:synthetic_data:property_group> ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> .
}

ns1:a0ffef7881be07c03577fa7125bd266543e34c62c3b3736977583eb187bafe3a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:73:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:73:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:73:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:73:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:73> .
}

ns1:f8aa784a316c8b29f40de735de613e5b3d4bafbf7c346785485768909283c98e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:93> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 3" ;
        skos:prefLabel "Concept 93" .
}

ns1:7adcd0339853b8046ea6bcb5eb2015dd8cd7aa5f2c414d708896f8b7f36fb0cd {
    <http://example.com/collection1/work5:Image1> foaf:thumbnail <http://example.com/collection1/work5:Image1:Thumbnail600x600> .

    <http://example.com/collection1/work5:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work5 image 1 rights holder" ;
        dcterms:title "Collection1Work5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/collection1/work5:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection1/work5> .
}

ns1:5584826b2801eff4bfc048e04fddeb1ab67bd8dbe9e514483eb9ae7f7ab4b33e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:7:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:7:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:7:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:7:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:7> .
}

ns1:9716847460ed2988139faebde79b90dd5662dbb3b6658e7121afe262eadba06c {
    dcterms:publisher a cms:Property ;
        rdfs:label "Publisher" ;
        cms:propertyFilterable true ;
        cms:propertyGroup <urn:paradicms_etl:pipeline:synthetic_data:property_group> ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> .
}

ns1:c4b35ea6a5e51c8ccbeb112e8c94856d902df60f816f58a115fa1167e66178b8 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:84:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:84> .
}

ns1:25700ad28096271975a9b700bd4ff9dcb2445762383331ac090543df6b9ccd7a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:85:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:85:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:85:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:85:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:85> .
}

ns1:a281d7864ee756af4e0494fa001d68f6d1575f55b0e4219cb28b62aff1d9b17c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:103> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 3" ;
        skos:prefLabel "Concept 103" .
}

ns1:edc3285bb5126902ecf89302409196d669ca348d13d779c7d67a64b4a223e6bc {
    <http://example.com/collection0/work2:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work2 image 0 rights holder" ;
        dcterms:title "Collection0Work2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection0/work2> .
}

ns1:b5d95c33275b276ff93dc0f8e0c066a7f62a4a69074e3025fd7845738b14f55e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:54:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:54:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:54> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:54:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:54:Image1:Thumbnail75x75> .
}

ns1:1f1ac70a2274a972ec643ab1b9c9de198ddc3c97ff1ab018b0ee520399f7bd74 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:69:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:69:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:69> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:69:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:69:Image1:Thumbnail600x600> .
}

ns1:4a0f55595ade9414df0f005b5d333d1cb8e7d999f7fdbc8eb18750172e3835af {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:64:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:64> .
}

ns1:80195622f8dc4d8e6ea2f85f1ad38d8efd75a6d386e548641e3092687baab746 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:79:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:79> .
}

ns1:25c70fc920b4e8900ea1e27de951ba1890b4f2e9b401e6a260ee8daaf5c95405 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:13:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:13:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:13> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:13:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:13:Image1:Thumbnail75x75> .
}

ns1:3d090185273f1fe9ae63095d916833b9e4b50f703103c97bfa51365319379377 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:17:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:17> .
}

ns1:3d8332377862344eee9a8d070bc475d050e612d72a145ce648bbe1f3f7689b39 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:22:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:22:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:22> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:22:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:22:Image1:Thumbnail75x75> .
}

ns1:96a23e616771030274f0d20e4d8178ec22b7da3f6bd850c51315cc3a1feff5ef {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:42:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:42:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:42:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:42:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:42> .
}

ns1:bd045ac9a6c4430330087ac589552977f17bb9a75b591ce69cc66ed19184b854 {
    <http://example.com/collection1/work6Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-26"^^xsd:date ;
        dcterms:description _:N21c85ade17ba4a15b2885b1aafa47a8d ;
        dcterms:spatial _:Na4cbdfe6576049cf9a308346c818af99 ;
        dcterms:title "Collection1Work6 opening" ;
        cms:work <http://example.com/collection1/work6> .

    _:Na4cbdfe6576049cf9a308346c818af99 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N21c85ade17ba4a15b2885b1aafa47a8d a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:bfc71f9a913f2d99bdaf46a2833c42542e7cbef09684d93117a357549a1c3c02 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:90> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 0" ;
        skos:prefLabel "Concept 90" .
}

ns1:2c8da311b9e92453e84a63f285ac8ffbfc629c0c1c76ef5ce119e0aebcb96754 {
    vra:culturalContext a cms:Property ;
        rdfs:label "Cultural context" ;
        cms:propertyFilterable true ;
        cms:propertyGroup <urn:paradicms_etl:pipeline:synthetic_data:property_group> ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> .
}

ns1:78fc2e31202b96946aea0ea283969899dde7e3cb0e76df7d6d4b3ac4418a5c0d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:23:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:23:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:23> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:23:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:23:Image1:Thumbnail75x75> .
}

ns1:a085fde8cacb237edc8e87c9f788c5dccd4527e108ff65535dcf22504009c4f5 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:64:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:64:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:64> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:64:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:64:Image1:Thumbnail600x600> .
}

ns1:d5c359ca091478f808ebfac2c3bb9ad28629158dc78ab2f56e8237059faff45f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:25:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:25> .
}

ns1:ada6332e4147ea092821d8440a9457895fc0e047a7d4508f8b2d23dd43c7f8b4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:7:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:7:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:7:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:7:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:7> .
}

ns1:48f6a47f70dd1c54cbd4d2650cc918b0dadeeaf5a9a3d10af2ee8538fcd4f2aa {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:35> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 5" ;
        skos:prefLabel "Concept 35" .
}

ns1:1eabfef0bc8d544afad12d99c3796f4eaa556c6f9ed023a3d11fe118d4a6d01f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:29:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:29:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:29> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:29:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:29:Image0:Thumbnail600x600> .
}

ns1:e213072febf0b70c57d6361fd576dd385ee0f509e33194ede602a5e9b37b0e7e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:86:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:86:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:86> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:86:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:86:Image0:Thumbnail75x75> .
}

ns1:b96eb746e5fc53a515d6d02890c1c78c66029ce1be19ae0b2adfa34996da9c67 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:96:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:96:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:96:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:96:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:96> .
}

ns1:edf0c2ec26e86e1a9c0f5c9e97a5084bf5ebea507c732981610c96fa6de69a02 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:81:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:81> .
}

ns1:703888eb9c65a92505c082097c7cc932006d3b6f7ccb7d5d945669d51887d5ce {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:70:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:70:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:70> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:70:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:70:Image0:Thumbnail600x600> .
}

ns1:7c63ce95802e6cece33f082496308904f2f97fb0f75402860d92f857d933ddae {
    <http://example.com/organization1> a cms:Agent,
            cms:Organization ;
        foaf:name "Organization 1" ;
        foaf:page <http://example.com/organization1page> .
}

ns1:0c6b976080be3cf5051598a70104bd3e1a6fa15c48cf5dd24becbc50ca0efe84 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:105> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 5" ;
        skos:prefLabel "Concept 105" .
}

ns1:8cf966ce7dc142950f4397a621c6395916eba8df127e5509d42c4c2b9cd34802 {
    <http://example.com/freestandingwork11Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-21"^^xsd:date ;
        dcterms:spatial _:N4ffe690f5bc942d2be881cd3e2872cc7 ;
        dcterms:title "FreestandingWork11 opening" ;
        cms:work <http://example.com/freestandingwork11> .

    _:N4ffe690f5bc942d2be881cd3e2872cc7 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:575464a9162259d941c6cce8753d256552a1e2efc27f20cf8ce88c598329a895 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:98:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:98:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:98:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:98:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:98> .
}

ns1:454e878846d246867b11872a17cee1cc1b961e076ed1b74d11c65b1fa66a6d62 {
    <http://example.com/organization4> a cms:Agent,
            cms:Organization ;
        foaf:name "Organization 4" ;
        foaf:page <http://example.com/organization4page> .
}

ns1:a8d55fd771a7f4c99931d5d9f26f6dbc474a8d7b422b818345321190805548fd {
    <http://example.com/collection0/work2:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work2 image 0 rights holder" ;
        dcterms:title "Collection0Work2 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/collection0/work2:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection0/work2> .

    <http://example.com/collection0/work2:Image0> foaf:thumbnail <http://example.com/collection0/work2:Image0:Thumbnail75x75> .
}

ns1:007c415f39e3b7fc72112111117c68c5ba7d5dced713bf013c7c0ad140410d96 {
    <http://example.com/freestandingwork10:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/freestandingwork10:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/freestandingwork10> .

    <http://example.com/freestandingwork10:Image0> foaf:thumbnail <http://example.com/freestandingwork10:Image0:Thumbnail600x600> .
}

ns1:6e01d5d42ab5ecfe599e069b787a9b0de827865f96cb84a6fc0d89977ed2dd58 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:85:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:85:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:85> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:85:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:85:Image1:Thumbnail600x600> .
}

ns1:edba3c85f0d8748bbc5c3b0288a60217b7bb83bdcd7aeb1a1777f8534932bff2 {
    <http://example.com/freestandingwork8> a cms:Work ;
        dcterms:alternative "FreestandingWork8 alternative title 0",
            "FreestandingWork8 alternative title 1" ;
        dcterms:contributor <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:description _:N1fe77bd9566f42f39f2ff9201de9a5f0 ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:concept:18>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:19> ;
        dcterms:identifier "FreestandingWork8Id0",
            "FreestandingWork8Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:concept:28>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:29> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:concept:48>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:49> ;
        dcterms:provenance "FreestandingWork8 provenance 0",
            "FreestandingWork8 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:concept:58>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:59> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:concept:68>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:69> ;
        dcterms:spatial <http://example.com/freestandingwork8Location> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:concept:88>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:89> ;
        dcterms:title "FreestandingWork8" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:concept:108>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:109> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:concept:8>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:9> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:concept:38>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:39> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:concept:98>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:99> ;
        foaf:page <http://example.com/work/8> .

    _:N1fe77bd9566f42f39f2ff9201de9a5f0 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:3f629fb7d6c606620b9748a9f28736bc8d7a25cd2c2c30d4aa1b5c863220b346 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:25> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 5" ;
        skos:prefLabel "Concept 25" .
}

ns1:1fb6ed032a8d05268a172175b44d865abb79ae9b8b0be3a2438b8219b9fa6d4f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:33:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:33> .
}

ns1:36f636d87488e5b84d1deca206ddd1e0df6696bcc9f4c20c025508c39595047f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:33:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:33:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:33> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:33:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:33:Image1:Thumbnail600x600> .
}

ns1:1de652232de45d3a084468911b7dfddd02689bc1fdc89215ed491cb0ac0eeb17 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:54:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:54:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:54> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:54:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:54:Image0:Thumbnail600x600> .
}

ns1:0c8f024cfb0cc23cce7e7c633ade7e171b2f186b72768ad3a0b1bc8c948d29e1 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:61:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:61> .
}

ns1:a36d25d3cc1081e80fbf4495ff285be533c411c6c1a4a6cef3a06b850dfe5ed6 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:59:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:59> .
}

ns1:84e076082ce9e47584698160093bc9128e5c245f65d3b202b435ec23836dad21 {
    <http://example.com/collection0/work0Location> a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:b083f05a88d08aa69c056423de5c42c4090dd0242afa8fb228f7c6e5d3650be7 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:46:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:46> .
}

ns1:ac4e8eb28f27b03ce1e56a84504fd12494303d77cba6f00e9315ad82b94c6ebb {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:69:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:69> .
}

ns1:223bfcda9e7e081e2e65222de4d3a00b2ec26434e9d3f5e2f20d8b10bdbbe169 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:4:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:4> .
}

ns1:ef758aad5bcd1c1ff769c938541f79490005d35711b0a8b1f22793b704b8dcf6 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:74:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:74:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:74:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:74:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:74> .
}

ns1:53b5a4e3ddd89c543d5e1444f4061700823ef82a3d43d924863f735f21a59722 {
    <http://example.com/freestandingwork8Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N1fe77bd9566f42f39f2ff9201de9a5f0 ;
        dcterms:spatial _:N0eeb9a6c671848c1be7ec10ea4eddc4a ;
        dcterms:title "FreestandingWork8 closing" ;
        cms:work <http://example.com/freestandingwork8> .

    _:N0eeb9a6c671848c1be7ec10ea4eddc4a a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N1fe77bd9566f42f39f2ff9201de9a5f0 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:9ca00f8e9fc6a90f1210a64f1e5a8d1e04ae44d37191df215c07cdce2ddb806d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:15:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:15> .
}

ns1:4f1563db7969a5003660243eff4557073c292608a0e87a57ec1ff76e6626ed8f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:21:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:21> .
}

ns1:e5d114c0e9296ded677bf87bf85fab745d2dadc958dbb1049289e7acbcb97581 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:92:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:92:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:92:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:92:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:92> .
}

ns1:e8d3b4f188ced404504f6a2ee67dc5607c02eda66f7bcf5a010a7a2b3303a005 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:10:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:10> .
}

ns1:1a6d96302a1862777f0267ea165e1ba602b7e76ba3a775afe1f86e74c822db76 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:97:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:97> .
}

ns1:36dfa96348d86746ac11d452e16606a98f6915afa39b0d798e8e721cd41f5500 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:96:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:96> .
}

ns1:90021c94940cb360bb57f1a5d10ed22ee364d4f547ae649bb1aff94a3c227d5f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:64> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 4" ;
        skos:prefLabel "Concept 64" .
}

ns1:dbf16b2cc25efbcd39b9dfafbf8928157e57ec828908ac4a538f1729400468aa {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:50:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:50:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:50> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:50:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:50:Image0:Thumbnail600x600> .
}

ns1:5dd3cd31ca7139abb68e7bf472e81a1c517e35410685e4da249f4edc850bedcb {
    dcterms:spatial a cms:Property ;
        rdfs:label "Spatial" ;
        cms:propertyFilterable true ;
        cms:propertyGroup <urn:paradicms_etl:pipeline:synthetic_data:property_group> ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> .
}

ns1:5bc96456b3a92b764ced460f05d6a2ec8207e27db2400359825d2bf7f52b2ecd {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:52:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:52:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:52> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:52:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:52:Image0:Thumbnail75x75> .
}

ns1:e365968736d70c6091b573fb9f6f57a503fb473544e994df9e47a11b42710780 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:57:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:57:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:57:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:57:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:57> .
}

ns1:64889c4f05e29777613d7b83749df2629b7749d22ea20fffd622b22a9f33e2cf {
    <http://example.com/organization0> a cms:Agent,
            cms:Organization ;
        foaf:name "Organization 0" ;
        foaf:page <http://example.com/organization0page> .
}

ns1:b0e96435afa8c0931d0b89a4b39e634af0ee9bef9fe281bc8e37e700eaa8579d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:96:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:96:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:96> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:96:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:96:Image0:Thumbnail600x600> .
}

ns1:628de8d7a40f35caca90a537a0f75917463a16583220d9b0e189ef1bf3b9ef8a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:35:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:35:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:35> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:35:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:35:Image0:Thumbnail600x600> .
}

ns1:d97dd01fd3522ac30bb641208f2c602e3e5564bf962346d853f5d8659ff3ee65 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:104:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:104:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:104:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:104:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:104> .
}

ns1:4fdca907b10fcc862b7f28622d8bb7ee44aae1985cd5727aeeaab88e3f94bbdb {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:31:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:31:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:31:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:31:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:31> .
}

ns1:d65652293c25590411a787d9dcf13fecebc603170b15641ad671d401ca1aa71a {
    <http://example.com/organization3:Image> a cms:Image ;
        dcterms:creator "Organization 3 image creator" ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Organization 3 image rights holder" ;
        dcterms:title "Organization 3 image" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/organization3> .
}

ns1:52f688e2b798300a0cdb9611561051e10f4c2a1f93dbd5afaa5a52df21bbfff1 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:77:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:77:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:77:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:77:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:77> .
}

ns1:92109508bf314adb6ed6533a2c9c46f84b2f7fcb7c375720d6972c7086202584 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:41:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:41> .
}

ns1:c506b52470b8370e51b369a4fa229095ef9c01f6003bf11bd3d266eaf7c2c26b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:39:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:39:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:39> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:39:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:39:Image1:Thumbnail600x600> .
}

ns1:ff2ec46b004570c8afc8ddbf09206909e63d4965389c6e309df1d895d8a8019b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:58:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:58> .
}

ns1:a346aa4f935ae075628f3aa4e746074f57a0f6211b8b6b746e2e313a59d3ae5c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:20:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:20> .
}

ns1:10678fd76f20e0f361e0ecdf8b349f37c43996abb13fef9f6d00233f5e0c6c20 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:57:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:57> .
}

ns1:a7fd29cdb25bdaeab2bc00d134e88df25d395c47ef30613d6cdbdcd8d67a5de4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:86:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:86:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:86> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:86:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:86:Image1:Thumbnail75x75> .
}

ns1:da93db80a0713611441caf31d656f963983f6ebfca63007ff7791d49d98ee946 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:99:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:99:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:99> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:99:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:99:Image1:Thumbnail75x75> .
}

ns1:0967f4178eb0e6f2fcbade3b6671a57e35575e08199a77548cf20f3fcc92f0ff {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:40> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 0" ;
        skos:prefLabel "Concept 40" .
}

ns1:048fee03135f55198d7ecfff8ed524d1be6864db54173e9e59951358488364ff {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:79> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 9" ;
        skos:prefLabel "Concept 79" .
}

ns1:0dee8a99b08fd6c5eadf9391b702622b59df43afad953e8e1cb87b534654a0b3 {
    <http://example.com/freestandingwork9:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/freestandingwork9:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/freestandingwork9> .

    <http://example.com/freestandingwork9:Image1> foaf:thumbnail <http://example.com/freestandingwork9:Image1:Thumbnail75x75> .
}

ns1:8eb505657425c13c55d9c9f4821d187f82b9ab0a08a0915867115e00f1cca52d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:5:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:5> .
}

ns1:cb4e44c555078059dcc71796d745582b60a2188cfce9bf901af25442dcd325a9 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:76:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:76:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:76:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:76:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:76> .
}

ns1:6c813d189bf353f468bdd03c06ce61cea704eefb5ee0bad3c809febeec036299 {
    <http://example.com/collection1/work5:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work5 image 0 rights holder" ;
        dcterms:title "Collection1Work5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/collection1/work5:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection1/work5> .

    <http://example.com/collection1/work5:Image0> foaf:thumbnail <http://example.com/collection1/work5:Image0:Thumbnail600x600> .
}

ns1:20c2ce0d046621e741de387f36acdd22b1e341a942ef96b8d1c8c11df1b389e5 {
    <http://example.com/organization4:Image> a cms:Image ;
        dcterms:creator "Organization 4 image creator" ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Organization 4 image rights holder" ;
        dcterms:title "Organization 4 image" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/organization4> .
}

ns1:0954febc46365bfa69dae34efc97eb2679bf810e5f95b8a38a3e8037157188d6 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:65:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:65:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:65> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:65:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:65:Image1:Thumbnail75x75> .
}

ns1:e0dc4b60bdcf81333ed87064374c28ea627ad95a9c496b141693c510a8d3e7c4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:16:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:16> .
}

ns1:ea64f74180343cd0e2b3a9170f59a9e2611e0d8fb14092578365318ae1848bc9 {
    <http://example.com/organization2:Image> a cms:Image ;
        dcterms:creator "Organization 2 image creator" ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Organization 2 image rights holder" ;
        dcterms:title "Organization 2 image" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/organization2> .
}

ns1:73995b83421ab56d77c0851b22aa618d1c5a57b40c1b8263172a7c2803b5eba9 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:70:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:70> .
}

ns1:36fe7eea08920c1673d9a2686569672489e821ab0d5c1f7431e38c47449d76a4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:41:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:41> .
}

ns1:25be50e741d5e65bd9d81978a0e61ebc533b7ff5bfbccfe320bf695724bd6717 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:102:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:102:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:102> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:102:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:102:Image1:Thumbnail75x75> .
}

ns1:d9d938dd59852636df24fefaecbd7522fe82322d5ad2d1344e801ff83b517d93 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:109:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:109:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:109:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:109:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:109> .
}

ns1:8383b19ea4db4ceac7eb05a1163e63af804ba45141190e31cb5b211ce5a02b1a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:25:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:25:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:25:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:25:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:25> .
}

ns1:82fdd88777abc5e4562647e67ed544fb9d0fc7fc3d453837a5cd56d017136cdc {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:63:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:63:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:63> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:63:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:63:Image0:Thumbnail75x75> .
}

ns1:128e19e0500ffb25f77cf9e30c29bed869370d41208a17e0a8945887d5afeda0 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:68:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:68:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:68> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:68:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:68:Image1:Thumbnail600x600> .
}

ns1:347dbdc90a67e4ecf8573afb92bff22b1f5b93a758f44e237cd9590357b3780e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:85:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:85> .
}

ns1:cfd5b71ef787c48f32c3c46a4627fcb742b73ce2c465e692e5c5e70d21aaa775 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:36:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:36:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:36:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:36:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:36> .
}

ns1:23b067f6bcb13dfde77f2b02ac3f15204e7a532b145563d69f754aa537c7d248 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:90:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:90> .
}

ns1:3929519c46f2c48f0db49d7e24947aa6a7145b5b9de4ced87041362f456955d7 {
    <http://example.com/freestandingwork10:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/freestandingwork10> .
}

ns1:e81bc90dde4328c00bc596c0b0bad5c71e1e44ea23bb7962403b677df4e8c2ba {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:15:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:15:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:15:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:15:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:15> .
}

ns1:d6292111437359e76bfd370e11f241a58d6062b22fb49d85cf527dc59cc20695 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:48:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:48:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:48> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:48:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:48:Image1:Thumbnail75x75> .
}

ns1:4642a750ad65d66a4295e24a83a563377f8c4fe19c2e4b7cca34374b36420275 {
    <http://example.com/collection0/work3:Image1> foaf:thumbnail <http://example.com/collection0/work3:Image1:Thumbnail75x75> .

    <http://example.com/collection0/work3:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work3 image 1 rights holder" ;
        dcterms:title "Collection0Work3 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/collection0/work3:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection0/work3> .
}

ns1:fe68eef030d2c6f8b770889c9906a21b8b72316a12369b9fe2c98da93c3d04a2 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:0:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:0> .
}

ns1:284f5565a71231f6e3693d7cb61437bbd9ea77a7debc28f8a9e760409804e8b7 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:108:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:108> .
}

ns1:9bac9870711e8acd63d1137aa79dce15f583de9e1634390bfa06f070d16b575f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:87:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:87> .
}

ns1:068875738137cdcdd310c94590382a44b9507c2e412590088fbf252385909e2a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:34> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 4" ;
        skos:prefLabel "Concept 34" .
}

ns1:7bf6cd3df0abd79760a58da34f446e094dfb3bcc3536f9e4ece97b5e3e532dff {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:14:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:14:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:14> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:14:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:14:Image0:Thumbnail75x75> .
}

ns1:731f5963c93ad4345f0c91e564b7c3e3f15fc06ff98fe484734633a111e8ba58 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:94:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:94> .
}

ns1:4c540aaf9249803c1f295d47579a91fc2128dcad768ec0e78ed6925382585eda {
    <http://example.com/collection1:Image1> foaf:thumbnail <http://example.com/collection1:Image1:Thumbnail600x600> .

    <http://example.com/collection1:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1 image 1 rights holder" ;
        dcterms:title "Collection1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/collection1:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection1> .
}

ns1:06e343ebbd88bdb011479954fb8d67fd7db31ff20361e2f1a26c3f78d7f9759a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:19> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 9" ;
        skos:prefLabel "Concept 19" .
}

ns1:2a5babfb0e19fbd244b88362215ceff41d23abd70f506e36d955647a84569fe3 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:74:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:74:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:74> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:74:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:74:Image0:Thumbnail75x75> .
}

ns1:ddd998e778ca6b347038852512d483d9b99f72f13d2e8539119b009261285853 {
    <http://example.com/collection0/work0Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N405821006a0d42798d1a0cba659ddb5f ;
        dcterms:spatial _:N01c0f3baf35d4217919b2e3baa7f70ed ;
        dcterms:title "Collection0Work0 closing" ;
        cms:work <http://example.com/collection0/work0> .

    _:N01c0f3baf35d4217919b2e3baa7f70ed a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N405821006a0d42798d1a0cba659ddb5f a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:7626516300a9217c380c4224647b6bdaac1efa473d3220cd9aa73e6fdc4fdf50 {
    <http://example.com/collection0/work0Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N405821006a0d42798d1a0cba659ddb5f ;
        dcterms:spatial _:N01c0f3baf35d4217919b2e3baa7f70ed ;
        dcterms:title "Collection0Work0 opening" ;
        cms:work <http://example.com/collection0/work0> .

    _:N01c0f3baf35d4217919b2e3baa7f70ed a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N405821006a0d42798d1a0cba659ddb5f a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:db1bb69fbce47a462ba4619130a3f2627c5904d0d158516a0f29151f4f68f1f1 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:37:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:37> .
}

ns1:dfe65eb7d7dc19896dc86aabd09b39cfdd340936dc859850729b672c2d8661a7 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:41> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 1" ;
        skos:prefLabel "Concept 41" .
}

ns1:ebdfed015356779453716ce0540a2ce1835841820839b567328a27f8e7387f3a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:45> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 5" ;
        skos:prefLabel "Concept 45" .
}

ns1:224712ffa444d59ff3027cf92b056b89c629de84083bd4d5e5721fcb21ad5dbf {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:105:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:105:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:105:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:105:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:105> .
}

ns1:6ea3e9baf5da8ad4a63f749f09b26c07fd0193cf126cb84830c3769f0b1308b7 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:43:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:43:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:43> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:43:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:43:Image1:Thumbnail600x600> .
}

ns1:348bb84546057106c68a324c2ba58ecbd9ba415a86ea36c70eb06f6dfef51a9c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:32:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:32> .
}

ns1:74634f7771a84f3ffc67dbf4473eb75b890ff53c66e489ec4c45c3de4ff6f276 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:33:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:33:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:33> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:33:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:33:Image0:Thumbnail75x75> .
}

ns1:2dc3def1988daacbbde22144f5ae6947e87f27cb402bafd6fb5955db24fd02cf {
    <http://example.com/freestandingwork8:Image0> foaf:thumbnail <http://example.com/freestandingwork8:Image0:Thumbnail75x75> .

    <http://example.com/freestandingwork8:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/freestandingwork8:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/freestandingwork8> .
}

ns1:8d18f8703296aa7319bafaafc5bfca9ef413881d283c024867e710420d6ebd68 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:34:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:34> .
}

ns1:e3693c27ba1948b055e655075b67aa79e9fc7ee9358cb700e311f7d32ccd674a {
    <http://example.com/collection0/work3Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N4b1f7c6dcab045ef83d200614cbff7bb ;
        dcterms:title "Collection0Work3 closing" ;
        cms:work <http://example.com/collection0/work3> .

    _:N4b1f7c6dcab045ef83d200614cbff7bb a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:b421fbbb113d688dea188e2222b9e0849231e94590671256fb7b116b490d02e5 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:22:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:22:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:22> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:22:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:22:Image0:Thumbnail75x75> .
}

ns1:0777e78fa6be7a88de3902a50bc48404936923fcbb8c0323797ecb02e6bdb172 {
    <http://example.com/person3:Image> a cms:Image ;
        dcterms:creator "Person 3 image creator" ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Person 3 image rights holder" ;
        dcterms:title "Person 3 image" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/person3> .
}

ns1:df40c8f1769d4c622afdee4d5b70e5e4a5bcbdafb086a554fdc74e407ce3ffc8 {
    <http://example.com/collection1/work6:Image1> foaf:thumbnail <http://example.com/collection1/work6:Image1:Thumbnail75x75> .

    <http://example.com/collection1/work6:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work6 image 1 rights holder" ;
        dcterms:title "Collection1Work6 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/collection1/work6:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection1/work6> .
}

ns1:0ffee154e7e128f0287e3d1745df3133ad67b020a540493bd050955c4de8e6b7 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:84:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:84> .
}

ns1:fe420568b84e783ae317850c5b0ae984bc26c0f226af9e0d236f696899e02367 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:47:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:47:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:47:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:47:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:47> .
}

ns1:a104baef8c0d2d0947d6c74ed45cf3456f8b809192ff1b61f0588a18e0caceee {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:75:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:75:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:75:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:75:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:75> .
}

ns1:058feee8208d006354b4d14aad626e106dfe380535169f0a264811348bd6f5ff {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:85> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 5" ;
        skos:prefLabel "Concept 85" .
}

ns1:73c3207b3948bb9e031c093df561e2d7be9f926a1afd7e97b702037d286d4779 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:104:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:104:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:104> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:104:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:104:Image1:Thumbnail600x600> .
}

ns1:f2f9dc79a8b1b3ad85f3e1b770c03a7ec02352acba1856c0a0ceec00fc942131 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:27:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:27:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:27> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:27:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:27:Image0:Thumbnail75x75> .
}

ns1:09f36ff4a6b709d002bcdd2f86aadec9c24f83e3117597bbc3552f1a8d84099d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:14:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:14> .
}

ns1:3ca885ef632f908733ec2a23b1c615a92049861b645e45b40b6035866ac07b55 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:5:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:5> .
}

ns1:50e16e11fabc85e764b2d670807bcc941125fb5a71080baa28799660c2e32746 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:54> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 4" ;
        skos:prefLabel "Concept 54" .
}

ns1:cd2a163eb0ebf9f9cbe61d294352a557c6bc050ae9054780c557015180fb3235 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:109:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:109:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:109> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:109:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:109:Image1:Thumbnail75x75> .
}

ns1:6af2417d4758cde643114bf6cea8dd3d86e152c3d73d1b7127cc9ce2d69fbc51 {
    <http://example.com/collection0/work2:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work2 image 1 rights holder" ;
        dcterms:title "Collection0Work2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection0/work2> .
}

ns1:ca9d8fdf86421fe6512bc9a3271e586fb5c2b37b445e648e9ebe548990213643 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:44:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:44:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:44:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:44:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:44> .
}

ns1:b5edfb11037e02bf0100da141ca81ccaccdd0787c71c410adc9bc05cc8e10439 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:72:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:72:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:72> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:72:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:72:Image1:Thumbnail75x75> .
}

ns1:e1fd8c4b3bb16f0dff9256a6826fd0d57f1b7631526f69d7bc5fa75369413286 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:25:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:25:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:25> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:25:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:25:Image1:Thumbnail75x75> .
}

ns1:7be483fc98638f52792beba833c1f46a01bcf72b99f97cc65720640477ce1a16 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:106> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 6" ;
        skos:prefLabel "Concept 106" .
}

ns1:1c1e317f8ba05865590ecede81c8de2659c35887863e5d845c6e94d3ba199324 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:3:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:3> .
}

ns1:ca8a10b19ab2c89b44b758e59761a077ab18217a04a1c5d669451263a1ae67dd {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:41:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:41:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:41> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:41:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:41:Image1:Thumbnail600x600> .
}

ns1:4418c42c2e98889271c2aeddfd2a592aae04797661384e5393167d0e2445a7e9 {
    <http://example.com/collection0/work3Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:creator <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:date _:N8da5549672d249efbf5ee7943f9869ab ;
        dcterms:spatial <http://example.com/collection0/work3Location> ;
        dcterms:title "Collection0Work3 creation" ;
        cms:work <http://example.com/collection0/work3> .

    _:N8da5549672d249efbf5ee7943f9869ab a cms:DateTimeDescription ;
        time:day "---29"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns1:3fe539a8160bc4ef4e54abc415b6fc78eb6d7ed1dceb40e23c8dd095d92ea707 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:68:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:68> .
}

ns1:be9e22ab412ee17cf35577b9385dadc35578066ada3d09d197f99e35e328ceb8 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:108:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:108:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:108> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:108:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:108:Image0:Thumbnail600x600> .
}

ns1:18250c8eeda4408693fc6c044c678c4a0a9a817c18f1bc34db7f475b0fb583fd {
    dcterms:title a cms:Property ;
        rdfs:label "Title" ;
        cms:propertyFilterable false ;
        cms:propertyGroup <urn:paradicms_etl:pipeline:synthetic_data:property_group> ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Title> .
}

ns1:404e4d1995f810aab0173fb1219f4fb137235a03dda9a9ae9769f53435a29e8d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:35:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:35> .
}

ns1:923ed52b418a3d121ed83cae967864933d30fb9302e449ee4aea8cf6b8f3260f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:64:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:64:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:64> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:64:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:64:Image0:Thumbnail75x75> .
}

ns1:6354c1ae9a43a03ba33370accf470cf0ece7f4a157fcac8b69af55d37acc5395 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:3:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:3:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:3> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:3:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:3:Image1:Thumbnail600x600> .
}

ns1:95a1b7a61af5d9f788469eb1985b9f5ffa515ca04a846933aa2e9c92e7ea73a4 {
    vra:technique a cms:Property ;
        rdfs:label "Technique" ;
        cms:propertyFilterable true ;
        cms:propertyGroup <urn:paradicms_etl:pipeline:synthetic_data:property_group> ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> .
}

ns1:c18af22e31a7b0e871d15f72229bc1f6176c196e924a4bb95c952c3850d33965 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:70> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 0" ;
        skos:prefLabel "Concept 70" .
}

ns1:45619639950105c3ee88279956e54d562d9be093f7b30cb288ab27eab9619121 {
    <http://example.com/collection1/work5:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work5 image 1 rights holder" ;
        dcterms:title "Collection1Work5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection1/work5> .
}

ns1:a05b9e9574a8cbe66d40d88541b50b16aeda5ec9c3ecbbcb7c51ef9829c6c2e6 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:52:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:52:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:52> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:52:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:52:Image0:Thumbnail600x600> .
}

ns1:35e045f41547689ff46055c121dd41e623a18e78a215c951ded4305eb2996284 {
    <http://example.com/collection0/work2:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work2 image 1 rights holder" ;
        dcterms:title "Collection0Work2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/collection0/work2:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection0/work2> .

    <http://example.com/collection0/work2:Image1> foaf:thumbnail <http://example.com/collection0/work2:Image1:Thumbnail600x600> .
}

ns1:4154ac0f8ad7837118bac32028815acc7a814f9632772b1455f774b4169a5640 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:23:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:23:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:23> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:23:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:23:Image0:Thumbnail600x600> .
}

ns1:26a4e6a188cd4375cbd1c3223bbb1ff72d7fec890b4af10b00274d8917af1e79 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:72:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:72:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:72> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:72:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:72:Image1:Thumbnail600x600> .
}

ns1:9826aba46c7b5c96a7c38449be89638b91eebe2883cb12e30c7611a435167c19 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:51:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:51:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:51:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:51:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:51> .
}

ns1:f987cf3716c127fd8d72e9b42cc8ea50537ce59da0be8d4576195a51c03983b8 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:89> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 9" ;
        skos:prefLabel "Concept 89" .
}

ns1:0403ef2800238609ba6ab3fed7249edb8cf0ed5121312534297820917db95880 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:71:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:71:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:71> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:71:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:71:Image0:Thumbnail75x75> .
}

ns1:b8664f91aa8ba6cdc3f537a0ae6fb6f3dffb11db30acbc4533c6fce7ce4683dd {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:88:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:88:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:88> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:88:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:88:Image0:Thumbnail75x75> .
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

ns1:6efe535f2c7d6b44ff578776752a31d077f255d77b46cdc080333f43f156925b {
    <http://example.com/freestandingwork9Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:Ned94bb3e62bf4cc4b7fb7e9991093860 ;
        dcterms:title "FreestandingWork9 closing" ;
        cms:work <http://example.com/freestandingwork9> .

    _:Ned94bb3e62bf4cc4b7fb7e9991093860 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:29ffd29e28abd98cec6061c25713424afe1d7f760d0abe5b2f052eb439805add {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:51:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:51> .
}

ns1:74ff7512242a3f1d27bb49d841dba0d0b73891b300bf7f18a351cc9292cff235 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:1:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:1:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:1> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:1:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:1:Image0:Thumbnail75x75> .
}

ns1:d91b605de259f042b534b71eafe777b584e6679de44c1f4e3e94c86ba9797c6d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:13:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:13:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:13:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:13:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:13> .
}

ns1:bcafbf7abacc1bcdbcee67de01d9c1a0a914025813bbf9fb54f7a40537b56c47 {
    <http://example.com/freestandingwork10Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N527854ab4d2f46e6a6d2472b38097401 ;
        dcterms:spatial _:N9c26d7777358437c8b716919713d8ba4 ;
        dcterms:title "FreestandingWork10 closing" ;
        cms:work <http://example.com/freestandingwork10> .

    _:N9c26d7777358437c8b716919713d8ba4 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N527854ab4d2f46e6a6d2472b38097401 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:ade0c6090bcfbafa45757a9dc30782d4c349436b5888b108bb5153d75a2ce1c1 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:79:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:79:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:79> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:79:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:79:Image0:Thumbnail600x600> .
}

ns1:3c15b450d4e893724a3b495a0b7936c0634e16f7ed6fd598ebe0f48753934d1d {
    <http://example.com/freestandingwork11Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:date _:Ndc81774648444ef6b2aa715e446d76f5 ;
        dcterms:spatial <http://example.com/freestandingwork11Location> ;
        dcterms:title "FreestandingWork11 creation" ;
        cms:work <http://example.com/freestandingwork11> .

    _:Ndc81774648444ef6b2aa715e446d76f5 a cms:DateTimeDescription ;
        time:day "---21"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns1:4ecf139c0da33b136b44f1f445b2b3acf8183e85d632715d2867db2b77055bf9 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:71:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:71> .
}

ns1:24bde998f49f6fbae45c585a386ebdade3f1cae4d78d1e377ae85e5a6fc7788f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:9:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:9> .
}

ns1:ee436384d88041cc5112dc6c43ed13762d80de6bb37d2affa930ad0617e6f379 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:67:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:67:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:67:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:67:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:67> .
}

ns1:c575b8adf0000561b9b773ec0c5e5b64f339070307aa5cd49c8ec7235267f00e {
    <http://example.com/collection1/work7Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N05fe288caf7e41de83ee7e56b880fcd2 ;
        dcterms:title "Collection1Work7 closing" ;
        cms:work <http://example.com/collection1/work7> .

    _:N05fe288caf7e41de83ee7e56b880fcd2 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:dd44967db89818d2a61aee89b3e40c1b028454870282bd7e414cd7f48cf2b334 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:105:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:105:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:105> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:105:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:105:Image0:Thumbnail600x600> .
}

ns1:48aa2d57a8914abab6f33b7e27a813540dd6d9360c6c732781e5f3e4b31e2f2d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:95:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:95> .
}

ns1:855f5cf5f2fbaa0c73356d400ff105f1871f4cee9b1f7b11138fdca9c70789fe {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:13:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:13:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:13> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:13:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:13:Image0:Thumbnail600x600> .
}

ns1:a1cbff588b0459467a3a48098f6032576936615150d8b8372e2705eb63bdc328 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:61:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:61> .
}

ns1:aa86ad6574594213edfbbe275dbe119d60ec9530bc0fddbcf018dcee4e23c6ce {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:9:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:9:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:9> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:9:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:9:Image0:Thumbnail75x75> .
}

ns1:61f49a359ccf968450972f273b465772216b200372814ad3aea8e5ff7d63ffb6 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:24:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:24:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:24> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:24:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:24:Image1:Thumbnail600x600> .
}

ns1:f437e62127244c01667ee1f305540d5335d84ee0c246b460f39f6965a9889c02 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:91:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:91:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:91:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:91:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:91> .
}

ns1:b118bb2a1d493167939a47c0f840c2b2f89455578f5cc91d40bfed415b1702e6 {
    <http://example.com/collection1/work7:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work7 image 0 rights holder" ;
        dcterms:title "Collection1Work7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection1/work7> .
}

ns1:24640e4d45e48f16e033aa0e09b0b0d999b95e6fffdd57cbeaff2598309f11c3 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:25:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:25> .
}

ns1:ba32ec83aa8376f5e0b4f2882d3a8b345cf93053b8c0ee9c61f11cb853e76869 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:46:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:46:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:46> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:46:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:46:Image1:Thumbnail75x75> .
}

ns1:79bd88fde85761ee1387e0166294a341b6f3989101b65c5cd56108f032c88476 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:74> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 4" ;
        skos:prefLabel "Concept 74" .
}

ns1:759bf79edb959df36bad64c35ff14b66b2096c9802dd2aed74741196fe8e0bf4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:60:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:60:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:60:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:60:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:60> .
}

ns1:b86a6845f3f5765cddabaebf2dce6e1cd2208b5d2371b504213c20a27637621c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:32:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:32:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:32> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:32:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:32:Image0:Thumbnail600x600> .
}

ns1:7f0a45318b103fba50d683c6cf8b95abba02a00069e51c87e4bbfbae76593851 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:5:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:5:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:5> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:5:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:5:Image1:Thumbnail600x600> .
}

ns1:43a1e59e1be9106e75207d1577328eee1247bb58214bfa039236ef9794277138 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:36:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:36:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:36> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:36:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:36:Image0:Thumbnail75x75> .
}

ns1:3b5031a6efd5bc8b7036bb9c5c3400160737872939e2f6596feb2ebc0c496259 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:12:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:12:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:12:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:12:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:12> .
}

ns1:53d64fa6dff6272bec87c13ef319c4e3c0a32ff04a9d739803346b0ceaa893d8 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:47:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:47:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:47> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:47:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:47:Image1:Thumbnail600x600> .
}

ns1:409ea4995ca8ff5880c59f588d8cceff42d520b3258c75565c1e45dec2973735 {
    <http://example.com/freestandingwork10Location> a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:91c74cb656e7649233a62467d2b1ea4775033c19c88e80af9b0813b64c2e430c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:80:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:80:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:80> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:80:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:80:Image1:Thumbnail600x600> .
}

ns1:50af8e454c8508e517a7a27ace3eef84fe77bea637a301873004c1e667c4f880 {
    <http://example.com/collection0/work1:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work1 image 1 rights holder" ;
        dcterms:title "Collection0Work1 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/collection0/work1:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection0/work1> .

    <http://example.com/collection0/work1:Image1> foaf:thumbnail <http://example.com/collection0/work1:Image1:Thumbnail75x75> .
}

ns1:14080d46e55c66865c46509a2ef74b7837a9f4a6adcee7ceb1ff2652f275ffdc {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:28:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:28:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:28> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:28:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:28:Image0:Thumbnail600x600> .
}

ns1:6120cbd1e7637b362e5ad65e0bab6183329786d29b1f0970939e0951eee0ba15 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:37:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:37:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:37:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:37:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:37> .
}

ns1:3c088c0c2c85bac32e873fb7e3cc034c21ce2281172adf0ad1bf418ed05fca50 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:77:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:77> .
}

ns1:bb7266a1a8b4f39e34aec78d62fd64daab8989986ce503efe14173f0ddf392ae {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:45:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:45:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:45> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:45:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:45:Image0:Thumbnail75x75> .
}

ns1:86a7c53fa2b2c6b58562282470ad6b31ebdb4b2261e97835e0fa6e14155b4618 {
    <http://example.com/collection1/work7:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work7 image 1 rights holder" ;
        dcterms:title "Collection1Work7 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/collection1/work7:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection1/work7> .

    <http://example.com/collection1/work7:Image1> foaf:thumbnail <http://example.com/collection1/work7:Image1:Thumbnail75x75> .
}

ns1:ef927282a42e55de35c7cb72ad658152530a7ff7e45e57d1d2d681a7bd7e7473 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:97:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:97:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:97> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:97:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:97:Image0:Thumbnail75x75> .
}

ns1:a3feeae21fc62c602a5ff7fb4044007f0c4469056af92782452f5f45981b13f7 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:92:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:92> .
}

ns1:26f32d69ae483d98c883c171eca3e077d7d3f0ae0c564e5987465ed81adf5c3e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:75:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:75> .
}

ns1:6070f9944353925b4145c5df149fe349fb4d76c393b83725f3af6b9f06860950 {
    <http://example.com/organization1:Image> a cms:Image ;
        dcterms:creator "Organization 1 image creator" ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Organization 1 image rights holder" ;
        dcterms:title "Organization 1 image" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/organization1> .
}

ns1:ed260fd0f520635851e892a4254e24d38da35a3c9fb2a5547e7df6f6192a595f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:43:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:43> .
}

ns1:1e0093001c9aaa6e508fe4e3abaf3dcb6b20242755e301f4e9c30e44775e5b4d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:10:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:10:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:10:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:10:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:10> .
}

ns1:fa46bf568f274e10f4fb746b0a6664b0e2e15b1495aefab2a1a4357f81a7df8f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:22> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 2" ;
        skos:prefLabel "Concept 22" .
}

ns1:e9402097f7b2902e3f284d2256e752d05850b18e97fabd7703f60ae71a8599e1 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:78> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 8" ;
        skos:prefLabel "Concept 78" .
}

ns1:22075a8c7d92b8ac76afc9206a66e3c2e8bb0995becf66213dbfbf46a52edd22 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:103:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:103:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:103> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:103:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:103:Image1:Thumbnail600x600> .
}

ns1:ce77ad2ecdf45de39c54adf707ebbaa72da8353835466796344980b2396a7691 {
    <http://example.com/collection0/work1Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-31"^^xsd:date ;
        dcterms:spatial _:N0ddb5151df014a219315e3ff7ef46953 ;
        dcterms:title "Collection0Work1 opening" ;
        cms:work <http://example.com/collection0/work1> .

    _:N0ddb5151df014a219315e3ff7ef46953 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:b0e63dbe953dcefc7d746be00e021eab314eb6486f9fc7d55432b0e7a0e07c44 {
    <http://example.com/collection1/work5:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work5 image 1 rights holder" ;
        dcterms:title "Collection1Work5 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/collection1/work5:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection1/work5> .

    <http://example.com/collection1/work5:Image1> foaf:thumbnail <http://example.com/collection1/work5:Image1:Thumbnail75x75> .
}

ns1:30f31d3210cab8a85ceca8723dae02eb6c5249013e9df771c36177f21aa8cb91 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:59:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:59:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:59> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:59:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:59:Image0:Thumbnail600x600> .
}

ns1:22d5e16b18065249b05bf06a1e1c89813e9c7e327f906c724c45f9c14938ac05 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:103:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:103:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:103> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:103:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:103:Image0:Thumbnail600x600> .
}

ns1:b2c9b0bdcea00cfa667c5f3a03907d4ae89e2a6aa9e44ffdea68d5ef44e627ab {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:57:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:57:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:57> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:57:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:57:Image0:Thumbnail75x75> .
}

ns1:8d3960d11cd58212256996b150d1ae6e341d1eabf85e39c7e62a5afc4c22d782 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:82> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 2" ;
        skos:prefLabel "Concept 82" .
}

ns1:e9f034faa0d7ea64d6e424f84cea36ba8530e5d305b306f209c91494c4be60ae {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:80:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:80:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:80:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:80:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:80> .
}

ns1:37515e22eb8ef35c87f5de55eb3d6439aa051d1c349fc2bd4b3083f9b19f0281 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:63:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:63> .
}

ns1:b9aa0a7e416359e4f893988e5aef3583314a14f7c432815e6fa93965892f0275 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:45:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:45:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:45:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:45:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:45> .
}

ns1:e569bd66fac52b2b9611db4ec7ad9e7eed83a89e3706d88ddc1bc8e6c9613842 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:55:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:55> .
}

ns1:47d8d6d2ed76777f882c5f6b94977f54c696a608eb9986517443f6591cc774f9 {
    <http://example.com/collection1:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1 image 1 rights holder" ;
        dcterms:title "Collection1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection1> .
}

ns1:187453bcb2ba3d3c9416b7ddd14479300ac9e2aa42574c1f02372b57400cc7c0 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:89:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:89:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:89> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:89:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:89:Image1:Thumbnail600x600> .
}

ns1:dee6f67b20b69b567e2bad1881fb224051551b144b393b22051c75726ac99109 {
    <http://example.com/person4:Image> a cms:Image ;
        dcterms:creator "Person 4 image creator" ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Person 4 image rights holder" ;
        dcterms:title "Person 4 image" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/person4> .
}

ns1:de79ec5260ca817da76ab7bed2f234fdfd7e1c1d79a1efd1ce6658a889610f44 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:4:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:4:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:4> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:4:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:4:Image1:Thumbnail75x75> .
}

ns1:091ca13ec4fe53ad8b1895fd27d3053f1d3b2bb2c461c1d6dacc24b5d13c8b64 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:26:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:26:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:26> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:26:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:26:Image0:Thumbnail75x75> .
}

ns1:1f9200bdebfe4b85540ba6e9b7dbcb2052b6738474aae9ae516c9a3402776766 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:76:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:76> .
}

ns1:51fbc6315523cb33d26e0e0597118f19a07a491125e5b1e24b8e06a532ea0d5b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:81:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:81:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:81:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:81:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:81> .
}

ns1:984bc4cdae463571278910afa5d694c9eaa0aed521cb7e33a0807f022009f018 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:21:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:21> .
}

ns1:b352550902dbde80c334f47a3e0f67b43246dbe7ab04ed548edf654a306c5f25 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:100:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:100:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:100> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:100:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:100:Image0:Thumbnail600x600> .
}

ns1:d99ff04ebd384523682d512255fa6a14debb91848862399deff55ba97cc7cfdf {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:29:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:29:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:29:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:29:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:29> .
}

ns1:9ce7bf41e0a83b4a7b3a980f34a57b8ad5efa3b84827d5d0d42be5742d3cc640 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:49:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:49:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:49:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:49:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:49> .
}

ns1:59fa76ab6011336b102889440a459b2b5ca2e06c81b5118e699cb0f62a73a3e3 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:94:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:94:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:94:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:94:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:94> .
}

ns1:fc77c83a2772376d6fb034b83cf6b6357cc8b7e275d59fe2aabfe402c8c8a1fb {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:2:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:2> .
}

ns1:51d229504257f2e7c6ed99cb8b067124132ed8b108b12b4fcee45d18f52f242a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:30:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:30:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:30> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:30:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:30:Image1:Thumbnail600x600> .
}

ns1:feb77e605528d99015dbe4bc67abea09241e97047a62b04df603b6751318eb93 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:7:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:7> .
}

ns1:a30388540ce85f04562939900123801c7e8ac21d1274027d7e6f15ed0d90a15c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:70:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:70:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:70> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:70:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:70:Image1:Thumbnail75x75> .
}

ns1:ff3c735fcdf06098d6ac1204372f6d55cba9069e29b07364f6c5314d87ee0e1f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:21:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:21:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:21> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:21:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:21:Image0:Thumbnail600x600> .
}

ns1:083397a79c56e73254a129dcee355c999e0ea4be1b5548d59d8ecfe1ab84f0cd {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:23:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:23:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:23> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:23:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:23:Image1:Thumbnail600x600> .
}

ns1:87a118532a8f06c51e22d7d1f1bd5db085404c547052d4dbe770851bb7a22a21 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:37:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:37:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:37> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:37:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:37:Image0:Thumbnail75x75> .
}

ns1:c30f9e3e269827f4ac4074806f5f07220fbd593d4613da02f08b0eb6753791a1 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:24:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:24> .
}

ns1:902502f97d7205079771ba5c1128a4f8236d5249b80cdf5a2d7a319102d13589 {
    <http://example.com/collection1/work6:Image0> foaf:thumbnail <http://example.com/collection1/work6:Image0:Thumbnail75x75> .

    <http://example.com/collection1/work6:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work6 image 0 rights holder" ;
        dcterms:title "Collection1Work6 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/collection1/work6:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection1/work6> .
}

ns1:be66ae193b568feee0f62da2e276d8180e5b967257104a93b008343b0a54e6a5 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:83> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 3" ;
        skos:prefLabel "Concept 83" .
}

ns1:0645f5b42210add9efd6d2b2b435969091e4da06458ef356a2d573adb025bb20 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:43:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:43> .
}

ns1:5b66b250b0e49c7929768764ee24bb637c35719c0d92be5038eee163e4b0f63a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:6:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:6> .
}

ns1:3a8d74fce4c6e7a900fcfce279768d7b90791b78022bdb76cd27fb9d143661ad {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:80> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 0" ;
        skos:prefLabel "Concept 80" .
}

ns1:84a21501796a042de6c3be962d4c980f483b7bcd83525bb8e4b886893b8292c6 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:106:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:106> .
}

ns1:7adb8a59ced751e55900a315a899b8ab9cbb01e2f0fbcb1b691d0f38aef105c4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:38:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:38> .
}

ns1:33f93038d6e25e02e365e86dc7e3a27ae1abb8a68da6d2cd02a2a496d53b6cc0 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:97> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 7" ;
        skos:prefLabel "Concept 97" .
}

ns1:bdbd9ee2f086f25f09f2fcad4ff5fb468eca3f5227a87c89bdd9ec291272ae7c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:23:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:23> .
}

ns1:588b0b1123b56b0b4d1c341606a629f24653cfc1ac68300e62273212c36ea5a5 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:69:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:69:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:69> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:69:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:69:Image0:Thumbnail75x75> .
}

ns1:0f4cc361efa4f17583ecc64bb79a3b0585e90c20763bf9878fb692affe0888ef {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:48:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:48:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:48> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:48:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:48:Image0:Thumbnail75x75> .
}

ns1:52553a9d363a8b30f266d3680c0b11ad973cdbd63087851199d6abd80989515c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:94:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:94:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:94> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:94:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:94:Image1:Thumbnail600x600> .
}

ns1:1209563883b49c02a1d4d8ed2011a11b4be03ff8946897d57f20bd58cc5abce7 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:27:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:27> .
}

ns1:5007728a18a38d6a5d0f1c509f8174f945b921b054c0b7248d1b2e7812f13495 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:8:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:8:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:8> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:8:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:8:Image1:Thumbnail600x600> .
}

ns1:986cb4035d57fbc6c7f75978c9db1d4292d45581c6f4f0461f6ba372add4d9cf {
    <http://example.com/collection1:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1 image 1 rights holder" ;
        dcterms:title "Collection1 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/collection1:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection1> .

    <http://example.com/collection1:Image1> foaf:thumbnail <http://example.com/collection1:Image1:Thumbnail75x75> .
}

ns1:945b56496196dc19edab5c0177e11d6dcf314f45f663a4175ce12691e5580cc5 {
    <http://example.com/collection1/work4> a cms:Work ;
        dcterms:alternative "Collection1Work4 alternative title 0",
            "Collection1Work4 alternative title 1" ;
        dcterms:contributor <http://example.com/organization4>,
            <http://example.com/person0> ;
        dcterms:creator <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:description _:Nc10bbd765b9f4ad3a4704d15c8cefd61 ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:concept:14>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:15> ;
        dcterms:identifier "Collection1Work4Id0",
            "Collection1Work4Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:concept:24>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:25> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:concept:44>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:45> ;
        dcterms:provenance "Collection1Work4 provenance 0",
            "Collection1Work4 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:concept:54>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:55> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work4 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:concept:64>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:65> ;
        dcterms:spatial <http://example.com/collection1/work4Location> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:concept:84>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:85> ;
        dcterms:title "Collection1Work4" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:concept:104>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:105> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:concept:4>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:5> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:concept:34>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:35> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:concept:94>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:95> ;
        cms:collection <http://example.com/collection1> ;
        foaf:page <http://example.com/work/4> .

    _:Nc10bbd765b9f4ad3a4704d15c8cefd61 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:708e987357ceb4f34da407b2d0deae504dee53fb5cc5ed1e914ce08389ffae0d {
    <http://example.com/freestandingwork8:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/freestandingwork8:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/freestandingwork8> .

    <http://example.com/freestandingwork8:Image1> foaf:thumbnail <http://example.com/freestandingwork8:Image1:Thumbnail600x600> .
}

ns1:138bd25917aa6b42b80beb8563c0c1749d0cde53b75dd3cdec48261c3ef0097b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:2:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:2:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:2> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:2:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:2:Image0:Thumbnail75x75> .
}

ns1:28b7a52d9ba83c5f275cf705d3f0a608e334233724ccb9603f6665c4de12fa06 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:0:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:0:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:0:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:0:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:0> .
}

ns1:9acea5b1688bfaa3f50a430bc1a0848263c45ea2e7dce6aa84baf2f37b6608ec {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:80:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:80:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:80> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:80:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:80:Image1:Thumbnail75x75> .
}

ns1:6964cc76145aa90e0b0d653a11e09187ec1d624f346b4a94ce7d425af4a9e026 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:44:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:44> .
}

ns1:e70708bf922b96f2de130317208d64ec44424d655e44bf6bc1fa015baa6167a1 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:20:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:20:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:20> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:20:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:20:Image1:Thumbnail75x75> .
}

ns1:d0640b48fc542187a4c66b1f740f11720b3857b3ee172a34b799d5f8ee5c0080 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:49:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:49> .
}

ns1:4555cf8397c6a1e725b22a014fe5c73f9dc81d687878ac7b09e3ee3669b4bbd9 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:60:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:60:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:60> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:60:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:60:Image0:Thumbnail600x600> .
}

ns1:fb368e2d4ccf800886a7dd38902b91e40d8281e46da3db9fabb1aebbd3135157 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:94:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:94> .
}

ns1:ed2217562577454414f730e0aa55a8e2da9a9204bf788b5f838620dea51cd992 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:11:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:11:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:11> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:11:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:11:Image0:Thumbnail75x75> .
}

ns1:aa7893babf3f4d95f0f17f9373b8b2996dd08dea7209b8b763ad20146d49b14f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:11:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:11> .
}

ns1:5cad21a729ba72d9d8654391563c64367d14a1403887b3085717acb1e28f710e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:26:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:26> .
}

ns1:d623259b8ee018b1857061658cc3de01058f8025c6d89f81d01b8b639652028e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:87:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:87:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:87:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:87:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:87> .
}

ns1:dca6ffc1806723190df91abac652fe1d2d6def8ea09eb7810bd881328cc1c0bb {
    <http://example.com/collection1/work7:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work7 image 1 rights holder" ;
        dcterms:title "Collection1Work7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/collection1/work7:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection1/work7> .

    <http://example.com/collection1/work7:Image1> foaf:thumbnail <http://example.com/collection1/work7:Image1:Thumbnail600x600> .
}

ns1:59a504a3b038ce3e8cfcc2966cd3d149552c4f81ba68aa7fe2f2d6d28bffbe2e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:71:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:71:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:71> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:71:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:71:Image1:Thumbnail600x600> .
}

ns1:ba175e55deec12afc2da184c063a017337d7ecc870f1f6889cb9fc162096e952 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:104:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:104> .
}

ns1:6ea36e20339c424527b25770cf3aed0368a9a71931f80337ed896f3912376171 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:108:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:108:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:108> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:108:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:108:Image1:Thumbnail600x600> .
}

ns1:b500b765c045c2f650318f738f04e355b8993a88a6a300171ff39802432cd540 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:67:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:67> .
}

ns1:87fc35c742cd79784bcba0a85c3719c682622a976bb03d5ea8aeed8a1d90f97e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:58:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:58:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:58:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:58:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:58> .
}

ns1:2d0c5d1bb6fd3b53f0fbc236bc72501c53d636924d846c2e3d14db51f690e1d3 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:53:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:53:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:53> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:53:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:53:Image0:Thumbnail75x75> .
}

ns1:990cf848a74c9ed31e208fc740fce257bdea0901412d5215da04ad2b3107299f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:83:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:83> .
}

ns1:beacd1c97cdb7af60da5f80e3ff2d5f863f580d423653662ca8de61bdb7e4f26 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:102:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:102> .
}

ns1:aed55770d52ddd0bbb24099378a8b90e3e92ca258b23d1528e975ac907985fa3 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:8> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 8" ;
        skos:prefLabel "Concept 8" .
}

ns1:2d73d1779eb18cf6825a0e27444f252e4158995acee32d7ce9ab8645b10f32ab {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:50> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 0" ;
        skos:prefLabel "Concept 50" .
}

ns1:afdf3ee60ef57484297fae068ed2141d44d7edb0a69966cace2f1fbb1339ace0 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:11:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:11:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:11> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:11:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:11:Image1:Thumbnail600x600> .
}

ns1:de25c4169c4b23b423a524927c099277589ac65cf865f3071e272fe58f69d890 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:76:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:76:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:76> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:76:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:76:Image1:Thumbnail600x600> .
}

ns1:05a927c90c383b6ca25befbb78fedcd1161d9ce1ce44e25c5f09280d295e8947 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:57:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:57:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:57> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:57:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:57:Image0:Thumbnail600x600> .
}

ns1:287814987f0c7af4fda81643ee543b70a5120ff5086835d57998ea166a508ba4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:84:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:84:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:84> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:84:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:84:Image1:Thumbnail75x75> .
}

ns1:14a90c659494d8bb1169eec8152ccbbf0ec3cd828a6c6c437affd87c4b5f7bcd {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:7:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:7> .
}

ns1:18ee2424cbd26d8a432f4fadac468ed0735a1be37fd8c8d0ffb5d346466f406f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:17> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 7" ;
        skos:prefLabel "Concept 17" .
}

ns1:730839347797ac2001f4c5ffd654495e32e45f37635c087a306b76e9519bf77d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:101:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:101:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:101> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:101:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:101:Image1:Thumbnail600x600> .
}

ns1:3e967ea42ae981b25e59959a0c475544842a7bac2e629d4a09b792f22d891ef0 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:42:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:42:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:42> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:42:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:42:Image0:Thumbnail75x75> .
}

ns1:6d51fa1781acd480d0b21dba01cc1aca771bbfa70810f37dfe32ff04fab2e978 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:10> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 0" ;
        skos:prefLabel "Concept 10" .
}

ns1:c914c78f3c7e76b69ad11239b73f7f31da47727e06be2011c7ea11089cf6f904 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:16:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:16:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:16> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:16:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:16:Image0:Thumbnail600x600> .
}

ns1:0e8025181cbe171851fc1c9a1053b6514c7a6e5be5b1b4858baa342584e86afb {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:55:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:55:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:55> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:55:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:55:Image0:Thumbnail600x600> .
}

ns1:89ddca8f7e8e4831fdd849517961cffa21425d8d2904c208f0293bda94e9b307 {
    <http://example.com/organization2> a cms:Agent,
            cms:Organization ;
        foaf:name "Organization 2" ;
        foaf:page <http://example.com/organization2page> .
}

ns1:f3fdcd1e8e263cfc0a2718ca557233f58e6a5de72ec5f3e8edd8fb2668a846e8 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:35:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:35:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:35:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:35:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:35> .
}

ns1:6dd9ac52e62d02cb414ffac77741dc7bb9eef0a5ed8b7646b91a54636473b47e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:109:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:109:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:109> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:109:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:109:Image0:Thumbnail75x75> .
}

ns1:1bc678ee0b9ef0cc6bde62585b36e31d38c1bc92d7d28c90ee026bb49c8e0cb7 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:98:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:98:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:98> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:98:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:98:Image0:Thumbnail75x75> .
}

ns1:04b5cbeaad327afd872833a7bd96d5a07b168005725ae37b92aa467c0e4fa894 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:87:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:87:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:87> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:87:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:87:Image1:Thumbnail75x75> .
}

ns1:863dd4be3b5ecbc349faf2e7d9ffdfabbb11c0c680e9cd2c3b1c056e37163df1 {
    <http://example.com/collection1/work4Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-28"^^xsd:date ;
        dcterms:description _:Nc10bbd765b9f4ad3a4704d15c8cefd61 ;
        dcterms:spatial _:Nd9d07a8dcf614d25bf353e31ce6c5a9d ;
        dcterms:title "Collection1Work4 opening" ;
        cms:work <http://example.com/collection1/work4> .

    _:Nd9d07a8dcf614d25bf353e31ce6c5a9d a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:Nc10bbd765b9f4ad3a4704d15c8cefd61 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:84a77e090b48035937811675f38feb49a91581b24075a44d65f66ff2f864ffa1 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:7:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:7:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:7> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:7:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:7:Image0:Thumbnail75x75> .
}

ns1:f42b6c9d6f1d380298e6a4014cae9c05a9fc2c137eacf9c7ffccf81965f55616 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:38:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:38> .
}

ns1:6550575fd1ef51903619448fbbedec576fc3de80d51e134aa8d77df88cc62890 {
    vra:material a cms:Property ;
        rdfs:label "Material" ;
        cms:propertyFilterable true ;
        cms:propertyGroup <urn:paradicms_etl:pipeline:synthetic_data:property_group> ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> .
}

ns1:8f560cbf5feee4d8c7397eb498bd0820654b92a37d53270d1f48ac295484bf3b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:36:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:36> .
}

ns1:5b809cc9671b8dc015ee69ebad2c84df42cbaedd72b55452548c69f6dccc0380 {
    <http://example.com/freestandingwork11> a cms:Work ;
        dcterms:alternative "FreestandingWork11 alternative title 0",
            "FreestandingWork11 alternative title 1" ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:concept:11>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:12> ;
        dcterms:identifier "FreestandingWork11Id0",
            "FreestandingWork11Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:concept:21>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:22> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:concept:41>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:42> ;
        dcterms:provenance "FreestandingWork11 provenance 0",
            "FreestandingWork11 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:concept:51>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:52> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:concept:61>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:62> ;
        dcterms:spatial <http://example.com/freestandingwork11Location> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:concept:81>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:82> ;
        dcterms:title "FreestandingWork11" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:concept:101>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:102> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:concept:1>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:2> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:concept:31>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:32> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:concept:91>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:92> .
}

ns1:b439e86f3d04c559181238571bcc21e0433a8efe9e8bbfe64994afd50267ed22 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:29:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:29> .
}

ns1:c320d9fa6fab2dad99b5182b48c8f0d96eeb4b384730baeda4d39caa8320e89b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:66:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:66:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:66> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:66:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:66:Image0:Thumbnail75x75> .
}

ns1:9d13e1369d98e3758dc55d376062b9d0f469e382287a31b1b6b28655e6aad865 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:86:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:86:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:86> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:86:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:86:Image0:Thumbnail600x600> .
}

ns1:fe9b5ab791be93c400c62534d3cc58609b4aa3272f1a697747eae12cc4413779 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:12:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:12:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:12> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:12:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:12:Image0:Thumbnail75x75> .
}

ns1:0c8f3ee42facd29f0dce344ec1229a5cb895e68e8052820ddece1d68a273c360 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:15:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:15:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:15> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:15:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:15:Image0:Thumbnail75x75> .
}

ns1:64b6b8a797b6477a630c6b595ec41d4cc955f4ec2e5c77aa9bb343aa497002fb {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:51:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:51> .
}

ns1:218784b99ec88c3414e98502a03b3a009db46eb764ae6e2f638dc9199edc8728 {
    <http://example.com/collection0/work3Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-29"^^xsd:date ;
        dcterms:spatial _:N4b1f7c6dcab045ef83d200614cbff7bb ;
        dcterms:title "Collection0Work3 opening" ;
        cms:work <http://example.com/collection0/work3> .

    _:N4b1f7c6dcab045ef83d200614cbff7bb a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:ea41f57c9bc6ac3e360bfdb28ebeefe89675ff615cc55cf5a407ef60b11448d1 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:102:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:102:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:102> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:102:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:102:Image0:Thumbnail75x75> .
}

ns1:4e393e6dcc7bfa9a86eb0fc08236e46f639c066e2009c03feee96dede921f4f9 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:39:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:39> .
}

ns1:732f495552d35a6953a7941d395b0f71e53bb72bcc8b1c3e87a76745ed6afae4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:97:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:97:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:97> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:97:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:97:Image1:Thumbnail75x75> .
}

ns1:8204b33156be28b5ad5ca056ec799466b96e0be444c4f6d3ab8eb4afa7ab6b1c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:106:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:106:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:106> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:106:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:106:Image0:Thumbnail75x75> .
}

ns1:1aac914761a9d5455b44883ba86e09ad43374d80bf9d9a665f14229de908eec7 {
    <http://example.com/collection1/work4Location> a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:cddbc39a4867991047acfcdca78aa933f61c0f66fb4d8e0866c0e8998220caf2 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:28:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:28> .
}

ns1:ea151c6b7b87c2e487a4a3bc15c537104264601ccffd4437dc70d5d0d2effbe3 {
    <http://example.com/freestandingwork9:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/freestandingwork9> .
}

ns1:92164ea74ebe789999713b611e8f438e737843812e6f4747ea7ce8105cdc6817 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:28> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 8" ;
        skos:prefLabel "Concept 28" .
}

ns1:c51df01af949d37ce2f77967204e0e87b40ee44cef73fc8444e623025587a32e {
    <http://example.com/collection1/work6:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work6 image 1 rights holder" ;
        dcterms:title "Collection1Work6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/collection1/work6:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection1/work6> .

    <http://example.com/collection1/work6:Image1> foaf:thumbnail <http://example.com/collection1/work6:Image1:Thumbnail600x600> .
}

ns1:22b670a89cdf0cda8844cae8d0476ab70776fa199913aab0f998a2f8440e3e00 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:40:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:40> .
}

ns1:ed2d34eae203d91ba2eb11a62a8744bd1dbbdf63b1b54e77cfdf292b66af6ada {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:38> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 8" ;
        skos:prefLabel "Concept 38" .
}

ns1:813fa68dbfbf6e2c92c86b595a428452a18bc2a1810fc3901474411148332836 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:81:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:81:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:81> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:81:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:81:Image0:Thumbnail600x600> .
}

ns1:d7af493e3c1208428b17aae8612be71a9f0eadcb67d10c34d58bfe16a4294d87 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:1:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:1> .
}

ns1:3ff9ed32574c3acc5c7633f9d8abb84a8be8c6aac88bdc20d7c8c9240d00bcf1 {
    <http://example.com/collection0/work0:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work0 image 0 rights holder" ;
        dcterms:title "Collection0Work0 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/collection0/work0:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection0/work0> .

    <http://example.com/collection0/work0:Image0> foaf:thumbnail <http://example.com/collection0/work0:Image0:Thumbnail75x75> .
}

ns1:0190013c65ff301e4deaf05236eff1f9339de38c42a8155aedc012a175116a51 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:31:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:31> .
}

ns1:735c5b32bc89e83485e99a7e5d8a6661c515f84ade6a08f6fd51f323c2b7a569 {
    <http://example.com/collection0/work2:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work2 image 1 rights holder" ;
        dcterms:title "Collection0Work2 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/collection0/work2:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection0/work2> .

    <http://example.com/collection0/work2:Image1> foaf:thumbnail <http://example.com/collection0/work2:Image1:Thumbnail75x75> .
}

ns1:55eb52fe5cf4c465df204cd39f5378491fcb8aedd59b9e1f86de726645ad053c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:58:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:58:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:58> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:58:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:58:Image1:Thumbnail75x75> .
}

ns1:dca359e3b814d209fb9a35152f52debf6383b13a3d63c92cfcf09e19d2886ab4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:57:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:57:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:57> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:57:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:57:Image1:Thumbnail600x600> .
}

ns1:56ef0a5cdacbf958884786d669ce69e2b2b7de8bfec77dbbcb63a124db2c7977 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:55:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:55:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:55> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:55:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:55:Image1:Thumbnail75x75> .
}

ns1:f88d95cc699be0d33e5519e79e632bd431bc5e6944f26ffa3cd5533874bc54df {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:68:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:68> .
}

ns1:f69d4424af885f6144b7be00ea281033bf42af8017e06764168738eebfd30f22 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:96:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:96> .
}

ns1:335fe9e5f06380c047530c4684ff9f44359e33d3be817422665c924fde751f8d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:11> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 1" ;
        skos:prefLabel "Concept 11" .
}

ns1:a1fe44b0f20835d268455e131e7a083d862c0edc26f2979a5682b56d7ccca3ba {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:33> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 3" ;
        skos:prefLabel "Concept 33" .
}

ns1:e36c4ddd7605ae1b01131ffd10907fa08a006c22b210cda3aa6dbc8cfb3a4a0a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:95:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:95:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:95> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:95:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:95:Image1:Thumbnail75x75> .
}

ns1:3876029f32f6b25792c425911fb5237eac4df63f3c81eb26f3311dd64467cc9a {
    <http://example.com/collection0/work1:Image0> foaf:thumbnail <http://example.com/collection0/work1:Image0:Thumbnail75x75> .

    <http://example.com/collection0/work1:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work1 image 0 rights holder" ;
        dcterms:title "Collection0Work1 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/collection0/work1:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection0/work1> .
}

ns1:d9e28b4030a16d12eebd47165a8dec4e7332935477d008d59341274ee09bb0c5 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:31:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:31> .
}

ns1:62083eb03fecaa52e70c4e3cb1d33475318ad9e3cab3966d18933e6bc0326ba6 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:74:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:74:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:74> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:74:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:74:Image1:Thumbnail75x75> .
}

ns1:05985e389fa85bce278face8ef5fa4ea0de6e3683d7ec47655e9b5629190d54b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:96> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 6" ;
        skos:prefLabel "Concept 96" .
}

ns1:d84da47c00be0fcd42c1767567d6d6541a502a6176d4a12be24bc75b5c082995 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:36:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:36> .
}

ns1:e993f5b2ef47dd93249337f48ec98585d6ec3a0e96f96b18598889b4fc60539a {
    <http://example.com/collection0/work1:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work1 image 0 rights holder" ;
        dcterms:title "Collection0Work1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection0/work1> .
}

ns1:36cac659cca6e04ee063c5db4c1ef21e19bd18d81a59dd1d72cb88c7d0acc17a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:19:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:19:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:19> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:19:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:19:Image0:Thumbnail75x75> .
}

ns1:773f72bda28c2bedecbab8d1c659e3ecd964cbc0cca8299fc7708c70358f2684 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:44:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:44:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:44> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:44:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:44:Image0:Thumbnail75x75> .
}

ns1:7d4ac01756a79eeb504fc356e0b7bea88f98fa73dc92db7521d92f40cfbed593 {
    <http://example.com/collection1/work4:Image1> foaf:thumbnail <http://example.com/collection1/work4:Image1:Thumbnail75x75> .

    <http://example.com/collection1/work4:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work4 image 1 rights holder" ;
        dcterms:title "Collection1Work4 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/collection1/work4:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection1/work4> .
}

ns1:31395ef56a1427294d8d0805674063eef9b6e7c3b21f673fff2333b056f929d3 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:29:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:29:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:29> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:29:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:29:Image1:Thumbnail75x75> .
}

ns1:74ab6e197ce295be1a1851cc28bab63e3909364b0b54e0a4e0fadf929eb011d3 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:60:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:60:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:60> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:60:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:60:Image1:Thumbnail600x600> .
}

ns1:e89921b6e22b22f485226407f4f377120b7d150b1a0e967602f8b837224cd2ab {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:49:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:49:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:49:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:49:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:49> .
}

ns1:790961e165d78dc4ab80a8a159f2d0263f405fba7b26f893636cd7f4dd3bb1d2 {
    <http://example.com/collection0/work0:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work0 image 0 rights holder" ;
        dcterms:title "Collection0Work0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection0/work0> .
}

ns1:1ae36ebe4ab6742dd4cafdefd6027a26216301c0dbedddbe4835d097be0cbcb7 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:86> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 6" ;
        skos:prefLabel "Concept 86" .
}

ns1:25ef0f562e802a5e3356b3d458261bb134f550276850aaad7cf5f8f8f3993a05 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:56> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 6" ;
        skos:prefLabel "Concept 56" .
}

ns1:4856a81d43ffcc6483e71b7824cbaf1269aefeaa9e95e3858e5bcf2d5b37cbc3 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:69:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:69:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:69> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:69:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:69:Image0:Thumbnail600x600> .
}

ns1:c840a83860116416faf554ea78618814b7dbbee669471247637c493d4b66066e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:88:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:88> .
}

ns1:d843141d3aea443fecbf2eecfdb636069fd0abf5d5fb8f967667989712f503ec {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:37> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 7" ;
        skos:prefLabel "Concept 37" .
}

ns1:7300d9cf6960323c209f346fd33a0bb90cd6bb86f36890010de5887366985f4f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:49:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:49> .
}

ns1:67a94ee0bbdbf1f13426fc01ef5d4c2621139eec8bb2eaeeef21221d00526c0d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:26:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:26:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:26> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:26:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:26:Image1:Thumbnail75x75> .
}

ns1:005b46a95c4b5a26c91964ee660d12c78b2ed1938252ffa41ea974af0abc3bf1 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:104:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:104:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:104> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:104:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:104:Image0:Thumbnail600x600> .
}

ns1:fb2ddcd4127461749704e3be89eadc36c7716db5ae129bdeeb67e7299fe368ef {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:6:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:6:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:6> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:6:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:6:Image1:Thumbnail75x75> .
}

ns1:6a67e33e015ecedd595bf664db8224a8d441325846d1f5c8017c34a7aad0ef36 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:65:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:65:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:65> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:65:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:65:Image0:Thumbnail600x600> .
}

ns1:c8ea53d65e543fe1d5661520a937c4896fb9f57ff0f9f654d330c32520515ca0 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:91:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:91:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:91> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:91:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:91:Image0:Thumbnail75x75> .
}

ns1:0655b35aba8814fb1414f37591b851999008be25f0cb0e05f918d4031c94b075 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:75:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:75:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:75:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:75:Image0:Thumbnail600x600> .
}

ns1:5b26ff55393c05fd473b378579bcbdfb26b553ebb3f56cd61261fd6dceb24558 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:18:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:18:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:18> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:18:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:18:Image1:Thumbnail75x75> .
}

ns1:393b459deb7a235750a5fd9b889c2f6ca410c01d3a179ac3799cc93ec4a6f1f7 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:66:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:66> .
}

ns1:db0e4bbf995e2bee9f8d038660a3d9f2ae3467ca9ea11b5198cd88f01db44fb3 {
    <http://example.com/collection1/work5Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-27"^^xsd:date ;
        dcterms:spatial _:Nfa9f25e103ce4870b6eaa004a0faccc2 ;
        dcterms:title "Collection1Work5 opening" ;
        cms:work <http://example.com/collection1/work5> .

    _:Nfa9f25e103ce4870b6eaa004a0faccc2 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:c838cc21e44e38c9e6f96b0f9d8ace32af1386d683d41a17db121f17ed4c3ab9 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:0:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:0:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:0> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:0:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:0:Image0:Thumbnail600x600> .
}

ns1:a36205957191c8499e0804ae0889e163ca08e52c49849f0aa3e237e65cfbb721 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:61:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:61:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:61> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:61:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:61:Image1:Thumbnail75x75> .
}

ns1:1d3334f83a22383f4337f7bfc05aa20f01c00cfe4d80666c8844b302530a9331 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:80:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:80> .
}

ns1:9544a3096422fe5ab439054780edcaf08487ecfd6a999395360be6adb487b5fd {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:50:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:50> .
}

ns1:abc029db1224a547a9dbd930d4b69bce1bcc1224cfe3153edf9d36bcf92c267c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:46:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:46:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:46> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:46:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:46:Image0:Thumbnail75x75> .
}

ns1:fb90d717ad403b17a8e5154eb65b28fd1b68f22089272cb15fcd547ad8a4d931 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:7> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 7" ;
        skos:prefLabel "Concept 7" .
}

ns1:55f1f890314b88d4e7959599437c17a4c20a46012d45f384087c87c9b39be1dd {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:38:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:38:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:38> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:38:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:38:Image0:Thumbnail75x75> .
}

ns1:296649bfa332baa19e1f23ae4ff0e329968bfdf8a6b20f2dc2711b8a2a7258a5 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:12:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:12:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:12> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:12:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:12:Image1:Thumbnail600x600> .
}

ns1:2cf66b058a14ccc3bba1f1d6252550578f115774d603a9b44a523b6c1e1bdbb5 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:38:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:38:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:38> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:38:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:38:Image0:Thumbnail600x600> .
}

ns1:07eab5ea40c49191f96b4ef024531e0e51626afd460f0bedf74b8747e8fe0ff2 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:13:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:13:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:13> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:13:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:13:Image1:Thumbnail600x600> .
}

ns1:ce0ec80cca50c06e4d0d0bf819bd43bad7c2a0fe53c313c204fb15d998cead39 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:34:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:34:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:34> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:34:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:34:Image0:Thumbnail75x75> .
}

ns1:4c19ce2977936291bfb4dd0bf82f0fd15335d61c3f55f7775900a7100d7c4720 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:89:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:89:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:89:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:89:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:89> .
}

ns1:436c1659b72b4634bc2b0bddfd0c80f821d2c07769e931fbf272913ab4fa738f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:108> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 8" ;
        skos:prefLabel "Concept 108" .
}

ns1:9ca6ea21ecef4c0ff681506013154d2523a8363d72e17fb08c2af8767430361c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:40:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:40:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:40> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:40:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:40:Image0:Thumbnail600x600> .
}

ns1:bcb292ab492dde59873a2f822339fb6bffd606b2c9c9086b6965762bf87be3e6 {
    <http://example.com/collection1/work6:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work6 image 1 rights holder" ;
        dcterms:title "Collection1Work6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection1/work6> .
}

ns1:1267b548cb51ce9855c8ec4563685be7aace0b8b1e7f1e1628be7f0d26b1487b {
    <http://example.com/collection0/work3Location> a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:bd56d88b8c11a14b042b438064d1b48f00d8c8f153e2cb48a72cf78ada415763 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:77:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:77> .
}

ns1:597093fc4a4add72b4b76396f6865fbec9563bf245f392b866161bf719d27341 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:53:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:53> .
}

ns1:6e7058e71b50701fbef2fc153984c5c67c59a4ec09b49865f71c7036955d4a06 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:52> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 2" ;
        skos:prefLabel "Concept 52" .
}

ns1:e11a98ab55ac399edabfed448ffb2b7669616c87ad3e1ec24bedeed6e069e47d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:101:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:101:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:101:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:101:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:101> .
}

ns1:b7382a66e0abc15d4f16cf4721eb6f1080e0fd0ffc0f59dc34eceb34c633c26b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:55> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 5" ;
        skos:prefLabel "Concept 55" .
}

ns1:26d86e785a57ffebb6e5eb713250ba56b37ff28dc451bc93b8596c35c0df344f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:99> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 9" ;
        skos:prefLabel "Concept 99" .
}

ns1:db1fe175f89e65f0fc6919c83e784c8882924f1b63b91d59f941ee24894384ae {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:106:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:106:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:106:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:106:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:106> .
}

ns1:fb3ddacfdfdfc6450db1644d5709a0c67bd4f7e15914341f52f145227448db5b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:73> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 3" ;
        skos:prefLabel "Concept 73" .
}

ns1:c80db7402d598439d724513b20f0851328b3577450dd1b678423f9cb7469be57 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:109:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:109> .
}

ns1:b61eed4574ea44a382fcbb6c80bada33adf9acacc855a498146aae64a8de02fe {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:25:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:25:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:25> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:25:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:25:Image0:Thumbnail600x600> .
}

ns1:0c524428dfe21c1e2b270a793ca0278a291b6c6fb742675075905d9c88f79c35 {
    <http://example.com/collection1/work6Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/person1>,
            <http://example.com/person2> ;
        dcterms:creator <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:date _:Na4da1d7d1e9d4adebd2317d7252ad3d3 ;
        dcterms:description _:N21c85ade17ba4a15b2885b1aafa47a8d ;
        dcterms:spatial <http://example.com/collection1/work6Location> ;
        dcterms:title "Collection1Work6 creation" ;
        cms:work <http://example.com/collection1/work6> .

    _:Na4da1d7d1e9d4adebd2317d7252ad3d3 a cms:DateTimeDescription ;
        time:day "---26"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:N21c85ade17ba4a15b2885b1aafa47a8d a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:074ece2051fb43f31bfe3e35e12065248c51ef86becf20992889f8c5c2d2426d {
    <http://example.com/freestandingwork10:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/freestandingwork10:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/freestandingwork10> .

    <http://example.com/freestandingwork10:Image1> foaf:thumbnail <http://example.com/freestandingwork10:Image1:Thumbnail75x75> .
}

ns1:605745920e726e5ea9a1f99b9d88fa19b85e6020f30cc040db1d7f362f488aca {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:2:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:2:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:2> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:2:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:2:Image0:Thumbnail600x600> .
}

ns1:5b0df0deb61ab8742df3864f2ca585b32f485d9565eeb1caedeaecbfea0cb2aa {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:10:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:10:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:10> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:10:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:10:Image0:Thumbnail600x600> .
}

ns1:b820c48c19aea2ba889f0430108ba580dca3e1903f39263d2d8bd649065ea78e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:22:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:22:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:22> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:22:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:22:Image0:Thumbnail600x600> .
}

ns1:43f79576ee904223686663c2f63c24e968f93e89c8b87e6337ef746a766d87b0 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:82:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:82:Image0:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:82:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:82:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:82> .
}

ns1:cd64a84fbd6fbd9d09ce3f2666db96d92a62fc2a6509d7e61b26e458f6ab1b99 {
    <http://example.com/collection1/work5Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:Nfa9f25e103ce4870b6eaa004a0faccc2 ;
        dcterms:title "Collection1Work5 closing" ;
        cms:work <http://example.com/collection1/work5> .

    _:Nfa9f25e103ce4870b6eaa004a0faccc2 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:fd9f0906066c9c8c9cc0da701ef23790546cce2246e39115a248e1c41b4c521a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:59> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 9" ;
        skos:prefLabel "Concept 59" .
}

ns1:802e5b65d33540c566b0bca3d07cab84a961565ddbd75afd022ce9fa01dc5da8 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:82:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:82:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:82> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:82:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:82:Image1:Thumbnail75x75> .
}

ns1:67bafab3fd66e5ca3be2dfbbd3ab0ad95cbcfdf05806678bdecab0d851f53bdf {
    <http://example.com/collection1/work5> a cms:Work ;
        dcterms:alternative "Collection1Work5 alternative title 0",
            "Collection1Work5 alternative title 1" ;
        dcterms:contributor <http://example.com/person0>,
            <http://example.com/person1> ;
        dcterms:creator <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:concept:15>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:16> ;
        dcterms:identifier "Collection1Work5Id0",
            "Collection1Work5Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:concept:25>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:26> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:concept:45>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:46> ;
        dcterms:provenance "Collection1Work5 provenance 0",
            "Collection1Work5 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:concept:55>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:56> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work5 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:concept:65>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:66> ;
        dcterms:spatial <http://example.com/collection1/work5Location> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:concept:85>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:86> ;
        dcterms:title "Collection1Work5" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:concept:105>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:106> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:concept:5>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:6> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:concept:35>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:36> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:concept:95>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:96> ;
        cms:collection <http://example.com/collection1> .
}

ns1:fc676ce651320e7cb5b710b81e900cb61cd08379bbd22d8afa30c5740d757f87 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:42:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:42:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:42> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:42:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:42:Image1:Thumbnail75x75> .
}

ns1:94911388c957fcb3f2455b8f5bb4f03cbbd4f2d6a30292f1d009c8675d66327a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:39:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:39:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:39> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:39:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:39:Image0:Thumbnail75x75> .
}

ns1:4c2cf0e4d968695901b0d47428f1350f88da4026afeb6baf6748ba66ebca407a {
    <http://example.com/freestandingwork11:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/freestandingwork11> .
}

ns1:9daaacf3d7d42eafcbb01b85a51bcc0166b7846afb8fd43a98a9f5e7060d3c91 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:19:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:19> .
}

ns1:a30673abae640dd67398f795793f3fac60dd12026835196fc5145196803e5942 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:99:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:99:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:99> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:99:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:99:Image0:Thumbnail75x75> .
}

ns1:01572fb45a221c905706461cb57d0e58d4baa3bd7aa557d4fbf82c5b0ba8af18 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:87:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:87:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:87> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:87:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:87:Image1:Thumbnail600x600> .
}

ns1:fcd8c7c4ff72bdbb2be07f1fbec5c6c07a0c671c340a0f868d6e05231e68ef26 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:75:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:75> .
}

ns1:6e9aec1f1a4ef86b849a8a22c1593289968c18d123570f4e29a6c34d671d9a53 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:104:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:104> .
}

ns1:5046a3891a9c5f760a6f37cc18aeca8c36f9663a04e5eca8633c57e054d0dfa6 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:52:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:52> .
}

ns1:f566cfd52bf03933c77882933d2839485a38337f70f6c5a777bb1c8ae88919e8 {
    <http://example.com/person0:Image> a cms:Image ;
        dcterms:creator "Person 0 image creator" ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Person 0 image rights holder" ;
        dcterms:title "Person 0 image" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/person0> .
}

ns1:7aa03bd984da2f738a91dd8fc3ec4c97522fcda176f332556f0e6437088f7fac {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:45:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:45:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:45> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:45:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:45:Image1:Thumbnail75x75> .
}

ns1:b31c54a28ff966f5b9933ed1c9b4f6faa7aa654fbb124f6d57448a54a267d947 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:65:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:65:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:65> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:65:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:65:Image1:Thumbnail600x600> .
}

ns1:053d2bf5a9871c6a2217311df286661f19d44173e0b772b22660d1b9f5faabd9 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:77> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 7" ;
        skos:prefLabel "Concept 77" .
}

ns1:9bfb6ddb96b879c38b18af284c7e3a38b57e9b2f1cab07e692018fc052444525 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:66:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:66> .
}

ns1:746c1537b8c5dcd3cf7124394e9aaca9dc52310119520a64068f50cebe481371 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:78:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:78:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:78> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:78:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:78:Image0:Thumbnail75x75> .
}

ns1:3500958749e1bc1d293cdf45b89a3d7495ee08c9d474de0723afe1437e1c1a12 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:101:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:101:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:101> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:101:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:101:Image0:Thumbnail600x600> .
}

ns1:d3f5093b742513992d9324a8b27b4098ddb49fb0186a0e9141bc5805873af39b {
    <http://example.com/collection1/work6:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work6 image 0 rights holder" ;
        dcterms:title "Collection1Work6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection1/work6> .
}

ns1:d59f6a0c072b783a849c4a844b0ae205a568d1576c6bb9e8bb9c52dec72b1ed6 {
    <http://example.com/collection1/work4:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work4 image 1 rights holder" ;
        dcterms:title "Collection1Work4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection1/work4> .
}

ns1:bc5f0416d470a6a688910eb80be7eba86a23a9285dfe0ac1e6f8df05ad54818f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:107> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 7" ;
        skos:prefLabel "Concept 107" .
}

ns1:77aa8612e7ebafd0533c6e6b21903f9f698600f570f37f8fdcb38955d6bbf3ea {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:56:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:56> .
}

ns1:3f554bba21cf57ff2cbe7dae06b2dd87b7522cf62bf0a8361d037a91bfcecb1a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:101:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:101> .
}

ns1:9457db262afed63c4650a3a4d511a42c90bdfd6da712f35524b90993a8a36134 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:86:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:86:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:86> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:86:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:86:Image1:Thumbnail600x600> .
}

ns1:7d651506d0a9d8f946b9ba3e15a8f5c0582d43abdf02297753c73c62ea6f0626 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:17:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:17> .
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

ns1:603dd49f392716cceb9f9ddddb53fef779fa2c8e6d9ddbc4c20ef8859ce8ed5e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:66:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:66:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:66> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:66:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:66:Image1:Thumbnail600x600> .
}

ns1:597e73b2ad2b9b9ab42767d4eb34e65e9535f6393fde8d882aefb13695cdaffd {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:88:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:88:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:88> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:88:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:88:Image1:Thumbnail600x600> .
}

ns1:e83b07073e8958916acc58ca721e2da518fae21c019836d6777873dd2a20a47c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:109> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 9" ;
        skos:prefLabel "Concept 109" .
}

ns1:6fd43b3400345bfa2104e7ff105ba2028e614797b20d31741bbdf40cfd0a0e52 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:72:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:72:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:72> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:72:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:72:Image0:Thumbnail75x75> .
}

ns1:d807bafecb125fc6076e240fa21eb502b7291d9c4841b50fefa2211aabdcdec4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:33:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:33> .
}

ns1:bcd1a985f6d44697ed155b9550222678ebaea26e8364ae94a4cf64d9579a8050 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:63:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:63> .
}

ns1:7ae5e438ee64555d5370f3db335d678822196c1394020ddcd2b8ecde46fcd545 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:2:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:2> .
}

ns1:1b567d3c18d190eaaa2815df4d33d312aa698f012962c181e9e42c1b35180a28 {
    <http://example.com/collection1/work4:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work4 image 0 rights holder" ;
        dcterms:title "Collection1Work4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection1/work4> .
}

ns1:8b7276f452aafee3025de2cf932171ea825202edf1c98614dfba70dd5355dee4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:107:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:107:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:107> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:107:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:107:Image1:Thumbnail75x75> .
}

ns1:e8da9fc3ac937afb5a94f0dd95becf6a98aef66a4b5b418c0406469aa9637798 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:10:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:10:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:10> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:10:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:10:Image1:Thumbnail600x600> .
}

ns1:a14e51c4ec8121628d848e1c2b463916fd938fb62973ab428921831973dcc6ee {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:18> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 8" ;
        skos:prefLabel "Concept 18" .
}

ns1:337ab92a6ff42a075605fc7296f0fc725b83298fa34509b648469fc1e20db3f4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:12> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 2" ;
        skos:prefLabel "Concept 12" .
}

ns1:df63b6b7f6923ab58eceac9c4abe08d073135f0d49b7e69a485ec88b854fa13d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:94:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:94:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:94> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:94:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:94:Image0:Thumbnail75x75> .
}

ns1:35aa4a53d0702e76a008ccedf9db2cffe881f5719c464a89547d18a64b71aa94 {
    <http://example.com/collection0/work3:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work3 image 0 rights holder" ;
        dcterms:title "Collection0Work3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/collection0/work3:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection0/work3> .

    <http://example.com/collection0/work3:Image0> foaf:thumbnail <http://example.com/collection0/work3:Image0:Thumbnail600x600> .
}

ns1:f254df1337d3caf68e3d1ad0c5374283f4aeac1210cc8e77c5e6700577629020 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:2:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:2:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:2> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:2:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:2:Image1:Thumbnail75x75> .
}

ns1:8aad4ec2d87928ffdd2393dab8d7565db8489e45d3f7e5493a083cb2fb4feb41 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:98:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:98:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:98> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:98:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:98:Image0:Thumbnail600x600> .
}

ns1:d61e636f871ffd22d3451eae003026c18fb9fa39a64fd08fefc453bdee2704af {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:106:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:106:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:106> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:106:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:106:Image1:Thumbnail75x75> .
}

ns1:e12431823b0f7c093e7ff9681b8daa636868ee2b1416f1fd4438274c34d835d7 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:98:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:98:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:98> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:98:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:98:Image1:Thumbnail600x600> .
}

ns1:3b6853835af60543cc41bcd59b1eacd4bdfeb090f252cf62ae9feb68a5f26e1c {
    dcterms:type a cms:Property ;
        rdfs:label "Type" ;
        cms:propertyFilterable true ;
        cms:propertyGroup <urn:paradicms_etl:pipeline:synthetic_data:property_group> ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> .
}

ns1:f6036c88cd931f50bf8d0d7b9ea817df68c5ea01e6bddea784c39ba878f67dac {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:59:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:59> .
}

ns1:e371eb285b7a883f8cf5f2ac10c711d2541586d59c65fb9267187973bbada8ea {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:91:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:91:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:91> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:91:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:91:Image1:Thumbnail600x600> .
}

ns1:9c82f1d9bc61533beb5463cb81193658824d0dca3672cfd1da3def7fca60b0dc {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:53:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:53:Image1:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:53:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:53:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:53> .
}

ns1:7eea79fbab6a7e107b834625a5a297055929854cc847e4e82cb3a81e350d115d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:90:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:90> .
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

ns1:5bcdd726b93e5519d0b7089ad4925c50967d08c6231ed7c24d58dbcdd65069fb {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:67:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:67> .
}

ns1:1c58e50211b00dd9000d7875b01386fee7881ef64764e4ee07181d2758147354 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:29:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:29> .
}

ns1:9172cf69fbcbd27226b2dafd2d7c0253f086f232aa7936681bb40a95bfc813c2 {
    <http://example.com/freestandingwork9:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/freestandingwork9> .
}

ns1:2961470a2e67ad4dab01d2623b25bc11c38b548f66c538e58b262b3e7f8d2089 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:59:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:59:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:59> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:59:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:59:Image1:Thumbnail600x600> .
}

ns1:c82b9b892217843dedefee129d71e00f97c0217e32a5b241a9db691940289317 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:12:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:12> .
}

ns1:873c4bd27c04e76407b3fdc811c894aef19a5c46019c2ce01a320a424be50956 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:18:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:18:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:18> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:18:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:18:Image1:Thumbnail600x600> .
}

ns1:87b57a873ef1a44cb04faa3dd5e9151e7886f6720732c10ce761d04743f47bf6 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:79:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:79:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:79> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:79:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:79:Image0:Thumbnail75x75> .
}

ns1:08a1d5bdf5c6c2e4d272411cc5ceb0358285095bab0464c634429938e7439818 {
    <http://example.com/collection1/work7> a cms:Work ;
        dcterms:alternative "Collection1Work7 alternative title 0",
            "Collection1Work7 alternative title 1" ;
        dcterms:contributor <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:concept:17>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:18> ;
        dcterms:identifier "Collection1Work7Id0",
            "Collection1Work7Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:concept:27>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:28> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:concept:47>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:48> ;
        dcterms:provenance "Collection1Work7 provenance 0",
            "Collection1Work7 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:concept:57>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:58> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work7 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:concept:67>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:68> ;
        dcterms:spatial <http://example.com/collection1/work7Location> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:concept:87>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:88> ;
        dcterms:title "Collection1Work7" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:concept:107>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:108> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:concept:7>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:8> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:concept:37>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:38> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:concept:97>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:98> ;
        cms:collection <http://example.com/collection1> .
}

ns1:4f5402b6bbeb0c280b4b4ebe6408e7b779fd57b679a02fd8ad15fbbe82193142 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:19:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:19:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:19> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:19:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:19:Image1:Thumbnail75x75> .
}

ns1:211b1e21f0b5cdd5737763714f258641f6d47f2307d78b827b14ab2973f91502 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:106:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:106> .
}

ns1:ad30e7f17765b7f3e764f1db3ae161b334b1b8dd12b861d791e531976a91389b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:54:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:54> .
}

ns1:3e823c3bcae4825bd27716a05b4c2515f8f437e3d7520856c5df35b55fd15df1 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:95:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:95:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:95> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:95:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:95:Image0:Thumbnail75x75> .
}

ns1:80a45515ec4ef5156aa76a984ce5609a942333863548e0fcdbce516f797fe03b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:30:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:30:Image0:Thumbnail600x600> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:30:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:30:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:30> .
}

ns1:bb4020c218398ecf9bcebe4005ea1c5a66e12957443f115e4ee0599827b18d68 {
    <http://example.com/collection0/work1:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work1 image 1 rights holder" ;
        dcterms:title "Collection0Work1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection0/work1> .
}

ns1:4c1d72286e4293f0e669c9c36b361abaec33eccf990abf0aa3eda53217097a21 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:104> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 4" ;
        skos:prefLabel "Concept 104" .
}

ns1:6252a5f42bcb2fc30a8936589e85e0b4248f89f26e06ea389517aa1ddf5dd3c2 {
    <http://example.com/collection1/work6Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N21c85ade17ba4a15b2885b1aafa47a8d ;
        dcterms:spatial _:Na4cbdfe6576049cf9a308346c818af99 ;
        dcterms:title "Collection1Work6 closing" ;
        cms:work <http://example.com/collection1/work6> .

    _:Na4cbdfe6576049cf9a308346c818af99 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N21c85ade17ba4a15b2885b1aafa47a8d a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:435dcb15a3c9e10b25fa6d94d8a28a7f0840720f30cd8eb3e98c5adb9b7c7842 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:38:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:38:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:38> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:38:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:38:Image1:Thumbnail600x600> .
}

ns1:4584c0f11178470c548f525acdec1390b2d87d2dd0e7afc1819766b502ac679e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:44> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 4" ;
        skos:prefLabel "Concept 44" .
}

ns1:d891e79f5407e2f48e49525b64832426f6f4391658fdef6f7e5533f610c375f4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:10:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:10:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:10> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:10:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:10:Image1:Thumbnail75x75> .
}

ns1:0a3bb41210f9ef66db89025fad2d221ece0d0b34f80036245cacc92a0d3cfa07 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:107:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:107> .
}

ns1:c2e47e22bfdc4ba240669fea8010ab04f8498f36c80d5195079d7790b086f52c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:76:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:76> .
}

ns1:2759596e0b7f9b505b91ba5d32c002c40c8e2ee02457462dab04faa3e6ebca39 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:91:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:91> .
}

ns1:c12254cb432f4ced88141cd95ba46d360f4b46a3540682adffbb8289e15ff323 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:56:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:56:Image1:Thumbnail75x75> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:56:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:56:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:56> .
}

ns1:1892ca51987e37b7d0ced4d497830a89f8732bfde5a3d631f0a635c052fd1de3 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:60:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:60:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:60> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:60:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:60:Image0:Thumbnail75x75> .
}

ns1:8f3ad2ad0580a23724598d1c45cb3ff8946ccc4519e94d9012e186934a7485c6 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:9:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:9:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:9> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:9:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:9:Image0:Thumbnail600x600> .
}

ns1:d84bcc79e615efba38ad45efcc73146e275f29adb54e4ec7e7f498a5cca6af7f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:67:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:67:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:67> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:67:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:67:Image0:Thumbnail75x75> .
}

ns1:66d3fbf2d192efcc026d6e2033b20a85a5f80a278bfda43798471b9887d190bc {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:83:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:83:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:83> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:83:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:83:Image0:Thumbnail75x75> .
}

ns1:03ab13c6afa49aaf98f6643c805079c6b0dff2e9d20d72612ce98abb2710d608 {
    <http://example.com/freestandingwork11:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/freestandingwork11:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/freestandingwork11> .

    <http://example.com/freestandingwork11:Image1> foaf:thumbnail <http://example.com/freestandingwork11:Image1:Thumbnail600x600> .
}

ns1:c775db84d0d0b2c436a8c041e3849fc827c0f50070feaf12336891e42a200160 {
    <http://example.com/freestandingwork11Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N4ffe690f5bc942d2be881cd3e2872cc7 ;
        dcterms:title "FreestandingWork11 closing" ;
        cms:work <http://example.com/freestandingwork11> .

    _:N4ffe690f5bc942d2be881cd3e2872cc7 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:0009d854797bc79ba5e8080448418c5190df0e96c03b70d7ee024f266645ed41 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:51:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:51:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:51> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:51:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:51:Image1:Thumbnail75x75> .
}

ns1:903269973fe8e4eda6f3a6cf9c65792d75e301327019a29d13952c5091c6e572 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:53:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:53:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:53> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:53:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:53:Image1:Thumbnail75x75> .
}

ns1:276f0ef8f1e1fca60086e53970760d387cfe35da8ac2f5f61956a91731d3b213 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:31:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:31:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:31> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:31:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:31:Image0:Thumbnail600x600> .
}

ns1:b954ae6efd79b9011288ebb6c0b375b7b74e6d53da2482e0972e494df86f65c9 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:28:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:28:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:28> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:28:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:28:Image1:Thumbnail75x75> .
}

ns1:ce96f01a96b2e0b63b40e6fe1b34d07989a3503b1e30b45794cdabc735c0ce33 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:78:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:78> .
}

ns1:16363923d01b2f5a4f34ef445223e5f3678c77a4ae8fd288a9a15261f4f07c0c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:58:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:58> .
}

ns1:992d756fc661440fb7f6471a11a07e5496088eeed3049d644a77d55956d42250 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:17:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:17:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:17> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:17:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:17:Image1:Thumbnail75x75> .
}

ns1:cb562de35403266636b64cdfa66f7f06b7fa6a3265ecfab94739f4906b30ba70 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:50:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:50:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:50> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:50:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:50:Image1:Thumbnail600x600> .
}

ns1:4ea866818c9fb8fe1fc73535221b27dae586b1815829840ad8294293b0dd6232 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:27:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:27:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:27> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:27:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:27:Image1:Thumbnail600x600> .
}

ns1:2622c703467506826f1b3a9ad80dd87c07aca65694b9622b1925ac7a6383b08d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:37:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:37> .
}

ns1:88031988267d8483090376076d162293c77106d4cd4d9655100d83639d8d96a8 {
    <http://example.com/freestandingwork8:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/freestandingwork8> .
}

ns1:1896470e46eaf8d433732897b8e766d815956e65923e261573d21a4174c342dd {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:65:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:65> .
}

ns1:d7141254d7258f4d348fb8a443e4fd4fb669272a7db96eac2407874657d5addd {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:43:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:43:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:43> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:43:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:43:Image0:Thumbnail600x600> .
}

ns1:30363c5d5c91b12838e8f9aadae19617f5ed2a47d53f58018613d23cc30c7a3b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:98:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:98> .
}

ns1:af8cca97cfc5e69b34376d289dbc253c9bb679a7b926947ce7f2f057175908d2 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:101> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 1" ;
        skos:prefLabel "Concept 101" .
}

ns1:d85effc3ddb6c1dcc4b99e23be5200c50c790fc9d23c9d5a963f73d778dcd1ac {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:15:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:15> .
}

ns1:4321fb48aed33a7770b2ec0f0b64b24d8c5289b190feec0942276b46bdabd156 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:45:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:45> .
}

ns1:fd68d708ffe6060414e4bbfc76336dfb5dc6bb43a20e5fc3792e8fa02ec1b462 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:39:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:39:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:39> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:39:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:39:Image0:Thumbnail600x600> .
}

ns1:83bb87e2d16e542efc3e5510a4d098db46142819267ef549dd6b631e33d4ced8 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:64:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:64> .
}

ns1:87620a906fadc6010c6fdbc016ea329d76991abdc36dff73f1e658b930c0eaa2 {
    <http://example.com/collection1/work7Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/person2>,
            <http://example.com/person3> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:date _:N3288738e1fae4f2aaf041b4646e062b6 ;
        dcterms:spatial <http://example.com/collection1/work7Location> ;
        dcterms:title "Collection1Work7 creation" ;
        cms:work <http://example.com/collection1/work7> .

    _:N3288738e1fae4f2aaf041b4646e062b6 a cms:DateTimeDescription ;
        time:day "---25"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns1:b245648c1c360c665d83e3a1bdb0e0fb7054ff8441f65fb8b60adf6ea1b8782f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:34:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:34:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:34> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:34:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:34:Image1:Thumbnail600x600> .
}

ns1:f1562eefcdec2e82aaee0687fa1bb832da8548ed2aed9ca2450df7ad99399b76 {
    <http://example.com/collection1:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1 image 0 rights holder" ;
        dcterms:title "Collection1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/collection1:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection1> .

    <http://example.com/collection1:Image0> foaf:thumbnail <http://example.com/collection1:Image0:Thumbnail600x600> .
}

ns1:1fdfc0ab260fcc2a9498eee4e361afeb2643006ee103cebfdae178bd30470121 {
    <http://example.com/freestandingwork8Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/person3>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization0>,
            <http://example.com/organization1> ;
        dcterms:date _:Nb119a2540e9f4c2f9aa603238c4524bf ;
        dcterms:description _:N1fe77bd9566f42f39f2ff9201de9a5f0 ;
        dcterms:spatial <http://example.com/freestandingwork8Location> ;
        dcterms:title "FreestandingWork8 creation" ;
        cms:work <http://example.com/freestandingwork8> .

    _:Nb119a2540e9f4c2f9aa603238c4524bf a cms:DateTimeDescription ;
        time:day "---24"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:N1fe77bd9566f42f39f2ff9201de9a5f0 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:966ef5060f86832e4973c0beb3591d7c87bf5524170112ba3493ed765ccc48de {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:89:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:89> .
}

ns1:614ffce0bc1b83141ba4cafb5a7a25b338b760e9ac6748380a2bf524c643cac3 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:82:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:82> .
}

ns1:1aa64872bb50cddd5a908824fabaf3cf76e3c799ce1cabcaa0216d5fcba42e14 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:45:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:45> .
}

ns1:e7cf6a598d6fb71f11ca8c7106edf1b25d762abc9df2344504a325e98676eed7 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:91:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:91> .
}

ns1:ad0f7ae1f885a8bb5a30b2df4253e81b5360b64b9eca43961663f58823dad29f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:37:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:37:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:37> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:37:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:37:Image1:Thumbnail600x600> .
}

ns1:dd6e9d55ad157de297d0e8ce862812aa71732a8696d157855c25a1eb6da4ffef {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:44:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:44:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:44> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:44:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:44:Image1:Thumbnail75x75> .
}

ns1:81f7ffda5fe2c6b586b810cb5c4188a11161ce8a800be20efbe815aa241926a1 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:61:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:61:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:61> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:61:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:61:Image0:Thumbnail75x75> .
}

ns1:ee9db472419b21d47951ad9ea9c82fdfa07ea4f2d0fb9a2afb27db85a8edf01f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:63:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:63:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:63> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:63:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:63:Image1:Thumbnail75x75> .
}

ns1:0be9548a6ec6c88e561138f4afe2c4882c1508dff807191c17dcba28cf2ce504 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:58:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:58:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:58> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:58:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:58:Image1:Thumbnail600x600> .
}

ns1:8f8b58b7b33378a7152d9ae7d0c5653aa3bdb349076f289bd79082f0bcfab71f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:0:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:0:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:0> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:0:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:0:Image1:Thumbnail75x75> .
}

ns1:560ba8aea5c268323acb784dba7583df67676c0616d86e1f133fcfe37fbe7ccb {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:24:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:24> .
}

ns1:3062d880ad464d0a5b0c72bed11e5565dff821db3997059282ec26e2654f362d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:103:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:103:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:103> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:103:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:103:Image1:Thumbnail75x75> .
}

ns1:7b2a4af9e4b4f5f8fd5c05cfbb7fa840ac327d8c1fa2d7c87db4a920d4a9fb99 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:105:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:105> .
}

ns1:e756b769a99f22eac8d48891876e8d545831c55717311256c5aea5f4169df18b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:49:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:49:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:49> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:49:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:49:Image1:Thumbnail600x600> .
}

ns1:5affcb166115ce9f4591ace0b2b5f38a654a10e2624b0f08540f0e7ebb47745c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:10:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:10> .
}

ns1:76f1e123f9bba2dd9600e5cd4421d47755435cfacb1bb474343fa30488fce207 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:96:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:96:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:96> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:96:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:96:Image1:Thumbnail600x600> .
}

ns1:9b7ac1bdfa8ca11891f818be944dd24df0cb486682020e446183e6de6b030dfd {
    <http://example.com/freestandingwork9:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/freestandingwork9:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/freestandingwork9> .

    <http://example.com/freestandingwork9:Image0> foaf:thumbnail <http://example.com/freestandingwork9:Image0:Thumbnail600x600> .
}

ns1:b118b7cdb9efca38f779e6e35c944c2a5ac254f8bd81219b486df8911a6853d6 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:0:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:0> .
}

ns1:ce91d725c46dde5ec7b6c90cd1f518a1247d2eff199e3019931628ed96af8104 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:92:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:92:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:92> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:92:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:92:Image0:Thumbnail75x75> .
}

ns1:1df991a3f9cd25f62b2003e3e1f8d8ed9838e030a1a1fb84e18719d8ea5b1cd8 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:47:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:47:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:47> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:47:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:47:Image0:Thumbnail600x600> .
}

ns1:d1ab1e2a9782f5e054cc25ae7ac042e37ff0c6ffb4509c96a35b66c5cd26b945 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:91> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 1" ;
        skos:prefLabel "Concept 91" .
}

ns1:56cce927746a5fdcde16faacd0199316d26806aaf950818fd355ffe4b7606c5b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:72:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:72:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:72> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:72:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:72:Image0:Thumbnail600x600> .
}

ns1:adb6d62d97326f76ca44b9516d29928eb7bed4ade3a0f9e06cf4f34d8f30e84a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:107:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:107:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:107> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:107:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:107:Image0:Thumbnail600x600> .
}

ns1:9f542aeee1fc488a2ef7081e8ec152f31f10f735e18e35053200988b0bc3a78f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:15:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:15:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:15> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:15:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:15:Image1:Thumbnail600x600> .
}

ns1:f60a4decc808d082c85bb17eb822efc2228919321c94e1eeabe6893fa78111bb {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:53:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:53> .
}

ns1:7d1de53312a7936500ba252b6a6518cd2b7da73a4cde01e91484b52fb9876fda {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:77:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:77:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:77> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:77:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:77:Image1:Thumbnail75x75> .
}

ns1:4b54180ba51e1808c88de40074da212974f28eed4541d3c6d838e608566bfdae {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:51:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:51:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:51> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:51:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:51:Image1:Thumbnail600x600> .
}

ns1:63cb61ba857df69e5154e87ede11719a4d92c4cb3176e90f4a934349a5fe4772 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:93:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:93:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:93> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:93:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:93:Image0:Thumbnail600x600> .
}

ns1:c33e5109a9187bc9f1ff813bfd5d95c97a50f81265737a5499a3b52c80af5bfd {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:82:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:82:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:82> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:82:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:82:Image0:Thumbnail600x600> .
}

ns1:110a560453a9c40580a256dfc7210959f41837cadf69dcbf2d9448607fe6d3f7 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:20:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:20:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:20> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:20:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:20:Image0:Thumbnail75x75> .
}

ns1:451c0238ca3947984606e575874bb71e05a9db8622b39bde54d1ccc3f74aa503 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:81:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:81:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:81> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:81:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:81:Image1:Thumbnail75x75> .
}

ns1:391dc931ac5dfb50fa0f74926ac22e97cc9a0ebbbf690b01bf5709338b17fbdb {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:37:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:37:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:37> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:37:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:37:Image1:Thumbnail75x75> .
}

ns1:3fa749231632f9a21fa1e79f2fef8517887a173fcdcd75b2cc4d696c90686223 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:41:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:41:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:41> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:41:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:41:Image1:Thumbnail75x75> .
}

ns1:07c6d05e6dd5d03c4288ee0538615fd0399c648c1d5270d0322531572964dc65 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:32:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:32:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:32> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:32:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:32:Image1:Thumbnail75x75> .
}

ns1:71bf704a8a6f3da7751124c96949fd07e897094d3408e8ab53ba306372cea41c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:2> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 2" ;
        skos:prefLabel "Concept 2" .
}

ns1:d6574ce85166725d3ab1c85b1c3ca8401880ea28992a481809932849ab3c7575 {
    <http://example.com/collection0/work2Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-30"^^xsd:date ;
        dcterms:description _:N2454da231905442e9252f13425044090 ;
        dcterms:spatial _:Nf26cd836ab3e429db2c76f0005499667 ;
        dcterms:title "Collection0Work2 opening" ;
        cms:work <http://example.com/collection0/work2> .

    _:Nf26cd836ab3e429db2c76f0005499667 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N2454da231905442e9252f13425044090 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:da1ac8fc77de8c7c56d9592e6486b30f7a181f04f5efb677f25846e18c3bb409 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:4:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:4:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:4> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:4:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:4:Image0:Thumbnail600x600> .
}

ns1:bbe8a2a0ae5b86000ca000fde330e921c6a7ad4fa154b23cc4666e55cb64cae2 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:56:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:56:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:56> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:56:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:56:Image0:Thumbnail600x600> .
}

ns1:629b58228f4bbbb13abc573bc7c09ecf34c26b303b7b8ef262650310886b94a8 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:34:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:34> .
}

ns1:616b0a271a112271c0903bd933d969bf6739c46fb89309e7cb1698e626cd1530 {
    <http://example.com/collection0/work3:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work3 image 1 rights holder" ;
        dcterms:title "Collection0Work3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/collection0/work3:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection0/work3> .

    <http://example.com/collection0/work3:Image1> foaf:thumbnail <http://example.com/collection0/work3:Image1:Thumbnail600x600> .
}

ns1:f0043efcd1b9f5549c9b58aead2e11b292c14b86d8e8fd674d1d69dcc570b1ec {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:109:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:109> .
}

ns1:631f6f95b6f84798310c9a1ddecbb5c77d9bb9b78c01c4092d81c4e4caa5c6f5 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:90:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:90:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:90> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:90:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:90:Image1:Thumbnail75x75> .
}

ns1:cd0777a2f5dc4bbd5e4fdaf2692d336c20c40c500bf5e3c478aca4ed872eaa72 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:48:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:48:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:48> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:48:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:48:Image0:Thumbnail600x600> .
}

ns1:28e180dc9ad75c73b8707d08aee45b44188beb7100d94f81c07bcb80f6837969 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:84:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:84:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:84> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:84:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:84:Image0:Thumbnail75x75> .
}

ns1:1e123516f1873d518c91139fb6905f45e417a6be22c8659863658c835df242d2 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:85:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:85:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:85> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:85:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:85:Image0:Thumbnail75x75> .
}

ns1:83c8eb3a43ef3d79f20ac89d03e3bac2933d4bcb02f695dfefb419f585dd6b81 {
    <http://example.com/freestandingwork10Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-22"^^xsd:date ;
        dcterms:description _:N527854ab4d2f46e6a6d2472b38097401 ;
        dcterms:spatial _:N9c26d7777358437c8b716919713d8ba4 ;
        dcterms:title "FreestandingWork10 opening" ;
        cms:work <http://example.com/freestandingwork10> .

    _:N9c26d7777358437c8b716919713d8ba4 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N527854ab4d2f46e6a6d2472b38097401 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:29b122d25fe183ca1932a8d1ae135ee384b1bf0e46b86c6e4e3320a7e0240c5a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:95:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:95:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:95> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:95:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:95:Image0:Thumbnail600x600> .
}

ns1:44bcbe7c82014751cda8c144cd44365ece58a0cfcfb86aea2520e5559e2e295a {
    <http://example.com/freestandingwork8Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-24"^^xsd:date ;
        dcterms:description _:N1fe77bd9566f42f39f2ff9201de9a5f0 ;
        dcterms:spatial _:N0eeb9a6c671848c1be7ec10ea4eddc4a ;
        dcterms:title "FreestandingWork8 opening" ;
        cms:work <http://example.com/freestandingwork8> .

    _:N0eeb9a6c671848c1be7ec10ea4eddc4a a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N1fe77bd9566f42f39f2ff9201de9a5f0 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns1:31419f71da77d3f2cd8e7520226380309183a5fd884470525156c4016374e0e2 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:89:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:89> .
}

ns1:64facbaa5de774d08d3f3f3454263085e5af46718017ec191077280cc04bd447 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:93:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:93:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:93> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:93:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:93:Image1:Thumbnail600x600> .
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

ns1:756643da8a02c9ebba8b8312404da057183a6566b35b45a9b9f072bd823e091c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:16:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:16:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:16> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:16:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:16:Image1:Thumbnail600x600> .
}

ns1:94cd5108b23c61673b100577408fe092a7b73c4d93a621eb7083b408bc7091f2 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:54:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:54:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:54> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:54:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:54:Image0:Thumbnail75x75> .
}

ns1:cbbd3bd6906d57d1b2343fae8fba7998184e5668fbdbb65e354ba0fb12160acd {
    dcterms:source a cms:Property ;
        rdfs:label "Source" ;
        cms:propertyFilterable true ;
        cms:propertyGroup <urn:paradicms_etl:pipeline:synthetic_data:property_group> ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> .
}

ns1:d841d8d9a664ff02ecdcebf63e4a8b25f0f4ae1480aadd7e612204df3dedd81c {
    <http://example.com/collection1/work4:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work4 image 0 rights holder" ;
        dcterms:title "Collection1Work4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/collection1/work4:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection1/work4> .

    <http://example.com/collection1/work4:Image0> foaf:thumbnail <http://example.com/collection1/work4:Image0:Thumbnail600x600> .
}

ns1:f3f8dba9a46d256332c10b32b7924bfb4eb4efa3bc71bf8728a174dc9f021ef4 {
    <http://example.com/freestandingwork10:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/freestandingwork10:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/freestandingwork10> .

    <http://example.com/freestandingwork10:Image1> foaf:thumbnail <http://example.com/freestandingwork10:Image1:Thumbnail600x600> .
}

ns1:6bc40e9ab1454715aa417bd7db2f2341169e10197b135539cb47d8c649c16b8d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:62:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:62:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:62> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:62:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:62:Image0:Thumbnail75x75> .
}

ns1:5149837841290b9b2fc3fd89fb27a4ff85aa8fa52b3bc0a12468456710bd689e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:30> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 0" ;
        skos:prefLabel "Concept 30" .
}

ns1:6e58fa4b955a7bfbf9127f019fc038f798910237c6db59eb3e4e7369f7b796fb {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:105:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:105> .
}

ns1:48bc0cd75f816a8908affa4fe7d697a8ae6a2fd7e5826ff565bc14e93fb07341 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:82:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:82> .
}

ns1:6677315f18bb6cc88462e6fcfa706de52ce8be34e248908e5d31b798db6f8569 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:73:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:73:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:73> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:73:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:73:Image0:Thumbnail600x600> .
}

ns1:437e602ee9d3b9b0fa18ec95e11c6563dc3c29ad3abadfbbe0ad1cd5cdbfc326 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:100:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:100:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:100> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:100:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:100:Image1:Thumbnail75x75> .
}

ns1:1e508dc7d1453c00c1272847615f7382e757028f73388a4df3b198a4e955c756 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:65> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 5" ;
        skos:prefLabel "Concept 65" .
}

ns1:25a7c69d9b324ade2fa247e0cf5323185772596972f17775faa74689eed9339c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:80:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:80:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:80> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:80:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:80:Image0:Thumbnail75x75> .
}

ns1:2f81b94482541470a0391d52d93f89546b6aa242651255a33c939701eaf5d6ee {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:21:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:21:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:21> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:21:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:21:Image1:Thumbnail600x600> .
}

ns1:e1c1d0aded067b0b6ed130b140c33ea5f3088923b267f0b9ccd8e49ab00ee10f {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:106:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:106:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:106> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:106:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:106:Image0:Thumbnail600x600> .
}

ns1:654744aeaca29e71463c8007393b504f6af08d9fd27f951e514d65f25bfcf8e4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:99:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:99> .
}

ns1:c722f0825e80abd5d7d3792c2d64f9101efefb931fec90227338dba2946d8a1e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:22:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:22:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:22> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:22:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:22:Image1:Thumbnail600x600> .
}

ns1:eafa3af20a4e21f54cbf2c6d7d8b52f1a28477d166c8cc411213d666d70a6f7a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:62> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 2" ;
        skos:prefLabel "Concept 62" .
}

ns1:3fc84a13704a6fd0498208085f02ac47f733e8d4400cbf605ec247c85770bdfa {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:27> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 7" ;
        skos:prefLabel "Concept 27" .
}

ns1:f75e313e0598e8059badb8591d3191aec7ec80fcc68f2ede0bb7741b1d2ea976 {
    <http://example.com/collection1/work4:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work4 image 0 rights holder" ;
        dcterms:title "Collection1Work4 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/collection1/work4:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection1/work4> .

    <http://example.com/collection1/work4:Image0> foaf:thumbnail <http://example.com/collection1/work4:Image0:Thumbnail75x75> .
}

ns1:aa2d793c38cc0b09b448a565cc1dd23a716b15f50ed1ac899c12ec1572546ef7 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:29> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 9" ;
        skos:prefLabel "Concept 29" .
}

ns1:0fa1d04e0128688f237644de8ee91f2f7b6b293c690ff6f7f08a2947e115f539 {
    <http://example.com/freestandingwork8:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/freestandingwork8:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/freestandingwork8> .

    <http://example.com/freestandingwork8:Image0> foaf:thumbnail <http://example.com/freestandingwork8:Image0:Thumbnail600x600> .
}

ns1:26cfc85bf3023b51bdda5d2bed336bbf5d7a41248fc1a38a9def870ba737d495 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:56:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:56:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:56> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:56:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:56:Image1:Thumbnail600x600> .
}

ns1:286ca8083f6bf740aeb743bb898136e6d2214581a2abaeb37ff55b96b00d01a9 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:92:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:92:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:92> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:92:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:92:Image1:Thumbnail600x600> .
}

ns1:a2417ed0cc64b72f31146465ca767ba896823137e91b2d5ddd6dd64193dacb73 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:34:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:34:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:34> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:34:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:34:Image1:Thumbnail75x75> .
}

ns1:e172193a9bd25085205d72eb20e4a263e54733beafe45eceb7dad0a3767a6119 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:70:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:70:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:70> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:70:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:70:Image1:Thumbnail600x600> .
}

ns1:69a19507d031500986fd0eb47492e3370a4f0784acf8e8f9709044ebe021183b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:51:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:51:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:51> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:51:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:51:Image0:Thumbnail600x600> .
}

ns1:394cd71875c636e8ad309d7394159b44d6505f0491be6fc9be7bc3be4510faea {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:16:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:16:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:16> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:16:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:16:Image1:Thumbnail75x75> .
}

ns1:aa0a1be140b444afb249801c94207aa14816b285c0e00091715830c7791398f1 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:26> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 6" ;
        skos:prefLabel "Concept 26" .
}

ns1:1409aed887f5a8cb7691f13694d136a7117544334dfafa298b6c7c72c092ffab {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:83:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:83:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:83> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:83:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:83:Image0:Thumbnail600x600> .
}

ns1:5303c01eb7fa71f1aa76d76b4c668fa9b8cd6c5b524af9654ff0138fbd785dc7 {
    <http://example.com/collection0/work1:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work1 image 0 rights holder" ;
        dcterms:title "Collection0Work1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/collection0/work1:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection0/work1> .

    <http://example.com/collection0/work1:Image0> foaf:thumbnail <http://example.com/collection0/work1:Image0:Thumbnail600x600> .
}

ns1:2179303d8bcf77e92c83c82d242039049c9cae5dc96c6ebacc6973ca10727065 {
    <http://example.com/collection1/work4:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work4 image 1 rights holder" ;
        dcterms:title "Collection1Work4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/collection1/work4:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection1/work4> .

    <http://example.com/collection1/work4:Image1> foaf:thumbnail <http://example.com/collection1/work4:Image1:Thumbnail600x600> .
}

ns1:d85911a7e496db2e8f6a4329fda4ba0528b98536b8661ff5a5353e40abf5aa00 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:28:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:28> .
}

ns1:85b1c9e0bf3fd5e7ef47251f6878d13d331509e6a4b6495410fbf374a239dff5 {
    <http://example.com/collection1/work7:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work7 image 0 rights holder" ;
        dcterms:title "Collection1Work7 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/collection1/work7:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection1/work7> .

    <http://example.com/collection1/work7:Image0> foaf:thumbnail <http://example.com/collection1/work7:Image0:Thumbnail75x75> .
}

ns1:5240383b6b506d70beca32f4568c4e1bbffde376852495e3645f4d1a3994fe17 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:73:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:73> .
}

ns1:000b13a6da70d2f9826c5a9ba76a43dd83f51300eeff7b5dc664c0687afb9fc5 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:56:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:56:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:56> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:56:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:56:Image0:Thumbnail75x75> .
}

ns1:963949121f092986370813b945d85d4a5dc34bc67efcb73a0107ff3739d6e805 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:21:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:21:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:21> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:21:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:21:Image0:Thumbnail75x75> .
}

ns1:032ba6024709a571cf924be277c06b230845052c57813c65453f3c27ab95c5f1 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:87:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:87:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:87> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:87:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:87:Image0:Thumbnail75x75> .
}

ns1:19c10df1c651e21be188d41142ef737767453dec3ec244084ec5cafdba4978fc {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:0> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 0" ;
        skos:prefLabel "Concept 0" .
}

ns1:0a2ea348dd3591f68bc4120eeae0a5b99e2bcc6da6dde359d8c3c664d5cb18a5 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:58:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:58:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:58> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:58:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:58:Image0:Thumbnail75x75> .
}

ns1:3c56814c03b60bf4ebe8d7ee0f454bc5d0a7f8bf17ce3f3eed9c28e28f215a67 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:76:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:76:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:76> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:76:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:76:Image0:Thumbnail75x75> .
}

ns1:31b5ab3a4f2f3872151b0f151c195cad63d775387a38304925ac94886b39119c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:4:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:4:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:4> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:4:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:4:Image1:Thumbnail600x600> .
}

ns1:488908eeb66bd12815f268157e52542b83c64358baa7f47eee4acbaa87f59e71 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:9:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:9:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:9> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:9:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:9:Image1:Thumbnail75x75> .
}

ns1:3768b7874abf55c969123baf339314cf59679247ce0cf1087a3461df5d6754a3 {
    <http://example.com/collection0/work1Closing> a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N0ddb5151df014a219315e3ff7ef46953 ;
        dcterms:title "Collection0Work1 closing" ;
        cms:work <http://example.com/collection0/work1> .

    _:N0ddb5151df014a219315e3ff7ef46953 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:1665a84535ecc69ccb1623e0353a763fe85365d1a03a35450e7ff41b52d7c98c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:35:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:35:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:35> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:35:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:35:Image1:Thumbnail75x75> .
}

ns1:5d9d4e1f2d046d9dfd8659386af998a0c66fe8e85c5e044c3959f5c480d81345 {
    <http://example.com/collection0/work0:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work0 image 1 rights holder" ;
        dcterms:title "Collection0Work0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection0/work0> .
}

ns1:52e8253e3f9d050efefccd5af68a4693d76053aaef4b910a3a79fc7815ad46f3 {
    <http://example.com/person2:Image> a cms:Image ;
        dcterms:creator "Person 2 image creator" ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Person 2 image rights holder" ;
        dcterms:title "Person 2 image" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/person2> .
}

ns1:a4ed6781738cd7f8565a0cf49788ebb02df0bcafbbb48acc94df1f6cf34ccdd7 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:83:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:83:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:83> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:83:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:83:Image1:Thumbnail600x600> .
}

ns1:a548541a9528bcb16587c1c4eb3efbe0a3f2637aeaf4539cba2fdb52a8bb49c6 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:1:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:1> .
}

ns1:394ed2e764aa9afc28a203ba1be659abb6d246386cb07f5ecb74814a316096e8 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:58> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 8" ;
        skos:prefLabel "Concept 58" .
}

ns1:4cce799bc46225b2d644ec6d68104ab867d4ce17395a74998f07627e67932a03 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:40:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:40> .
}

ns1:667bb2c52814d87371bb66192ade064104522cbd0f6350a477147ca190e45d40 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:85:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:85> .
}

ns1:63491264caf76e34c0b605b4257d32eac499be54517b5a69f3f68b6f50ee6302 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:19:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:19> .
}

ns1:022be89bb14baa4e16150801017ceafdf303cc3c7002cc6e2df54133222a0dae {
    <http://example.com/collection0/work0:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work0 image 1 rights holder" ;
        dcterms:title "Collection0Work0 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/collection0/work0:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/collection0/work0> .

    <http://example.com/collection0/work0:Image1> foaf:thumbnail <http://example.com/collection0/work0:Image1:Thumbnail75x75> .
}

ns1:e937691ea5588722c690292100cc1d446b8052c63c2e3e02a623dfc3ccd374de {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:7:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:7:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:7> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:7:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:7:Image1:Thumbnail600x600> .
}

ns1:9507cb91e77dba19d038ecb418856a884e84dc41e9e8a29dd4887ec3f6da314d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:31:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:31:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:31> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:31:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:31:Image1:Thumbnail75x75> .
}

ns1:09b8b12bb0fb9888e5f793e8ced6ba9e73178923e669b1279b654019bb8204e4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:47:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:47> .
}

ns1:5e5b7acdc57f01b49bfe5c736ff9aff87e6d3ed6265462307d8d185189c34b9e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:48:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:48> .
}

ns1:fc3f55e539077bab847eca6af4a8c8e1143bcccd09dd5cdada1dc9ea7ef6d658 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:60:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:60> .
}

ns1:b47266780489fc68d9290800a9665342e2e2690642601901853911ae0da65e50 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:78:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:78:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:78> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:78:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:78:Image0:Thumbnail600x600> .
}

ns1:4cb1cacab3d6e777c6f2d7c556e4b3c0a2da863539934033e74cebd86691a68e {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:68:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:68:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:68> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:68:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:68:Image0:Thumbnail75x75> .
}

ns1:8ea82b6349d6f97011af0f4fd31578dc37eb4feb41b5037b7b27e7267fdf03cb {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:41:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:41:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:41> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:41:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:41:Image0:Thumbnail600x600> .
}

ns1:3b1a3686d70f5a978ffa2dc16d70be1cd7bde5295b0079daf0f9af19fe71dd5c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:93:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:93> .
}

ns1:2e6336629143297d8184a52252013fd1a351d18387993d1fdff53472f8d5a7c8 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:26:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:26> .
}

ns1:b3058768dd15f47e1501ae30bfa83a218661f52f8fba8411fb3ceed6655b62af {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:78:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:78:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:78> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:78:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:78:Image1:Thumbnail600x600> .
}

ns1:18e6ca4c5d6f0342eae38dbfa9b5bec3e38a02975b07d15e61dbf7d26808173a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:41:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:41:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:41> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:41:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:41:Image0:Thumbnail75x75> .
}

ns1:c8a44791c6c2fffcb4a87dc42e0498bedc809950c733111a0eaae69bfb8f3fbd {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:66:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:66:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:66> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:66:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:66:Image1:Thumbnail75x75> .
}

ns1:5aefb6f67310ba6fc413797c615448edd9d30943830e4ca7207e8bddce90a376 {
    <http://example.com/collection1/work6:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection1Work6 image 0 rights holder" ;
        dcterms:title "Collection1Work6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/collection1/work6:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection1/work6> .

    <http://example.com/collection1/work6:Image0> foaf:thumbnail <http://example.com/collection1/work6:Image0:Thumbnail600x600> .
}

ns1:c8a816adfafa86a975361b4cf44d32905282d58403177a33554cf7c087e53880 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:24:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:24:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:24> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:24:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:24:Image0:Thumbnail75x75> .
}

ns1:4c0b4d31c11fbdb94fa68527411d7976992faafd5e670e12ca2a975c30dead5b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:30:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:30> .
}

ns1:c3e2ba7b9eaba691902847fb6e601e87c50309050adb616c8c2d6b64362e5046 {
    <http://example.com/collection1> a cms:Collection ;
        dcterms:title "Collection1" .
}

ns1:4c582db3330d6d15ebb96b99c223b03a644486d75528e4b6a777a18bf78305a4 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:74:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:74> .
}

ns1:112881fa802b2c108b904a3bbaf03876e5cf20c160ee97845a5b6803202a7333 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:40:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:40:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:40> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:40:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:40:Image1:Thumbnail600x600> .
}

ns1:be53f281df3531643d59b8e5e8def9f124d764b6c9ad6a679366f4f94036c167 {
    <http://example.com/freestandingwork11:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/freestandingwork11:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/freestandingwork11> .

    <http://example.com/freestandingwork11:Image1> foaf:thumbnail <http://example.com/freestandingwork11:Image1:Thumbnail75x75> .
}

ns1:835a36f422c176474482604829b47637fccc13e81d93e3438bebbf912a13b70c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:18:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:18:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:18> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:18:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:18:Image0:Thumbnail75x75> .
}

ns1:0d32f7974d9d6db721c04f71924abd21ff11c3c3c9652ec61d3037d858ac6d59 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:42:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:42> .
}

ns1:7b357d1a5f24f4a18c2c07d90c4782b7b94615cfe2cfb2339c9e3940e05866bb {
    <http://example.com/freestandingwork9:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <http://example.com/freestandingwork9:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <http://example.com/freestandingwork9> .

    <http://example.com/freestandingwork9:Image0> foaf:thumbnail <http://example.com/freestandingwork9:Image0:Thumbnail75x75> .
}

ns1:8899dec6f45980ef6fadffba87ee36058760c7fcd6a7e1c0e7c9db8438ef0a89 {
    <http://example.com/collection0/work3:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work3 image 1 rights holder" ;
        dcterms:title "Collection0Work3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <http://example.com/collection0/work3> .
}

ns1:99159868f703c54a70fadaf007ab933dbb2f0dd934fc5ee9203dd211a7426373 {
    dcterms:language a cms:Property ;
        rdfs:label "Language" ;
        cms:propertyFilterable true ;
        cms:propertyGroup <urn:paradicms_etl:pipeline:synthetic_data:property_group> ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> .
}

ns1:5c7359e9df50bf3ba3c28b7f0880368be3664a54a3bcb771a8115a2a444cfdfb {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:79:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:79> .
}

ns1:a86f426c73b6e534e2df9cb0f9fea3df729283a510ef8590b09ea866f4e7d1ba {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:107:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:107:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:107> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:107:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:107:Image0:Thumbnail75x75> .
}

ns1:c1993a8fa7c7d8381178065d490cca4a17599c8d0155251977b126606830e021 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:81:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:81> .
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

ns1:6e65ef47e05ce6069bba3e9871c3445da588717091ceffd81ca40006c079b134 {
    <http://example.com/freestandingwork11Location> a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:a8df9c610f30d8c853b4332bb94f0131c83af6c839dcd16717fd1641ae133fc1 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:6:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:6> .
}

ns1:7a1801dd35757ab6a88742d5cb59be0e70575212ea9b7a0040db8050cb9a3c4b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:56:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:56> .
}

ns1:6817c31a46d7c8a8100afb2f8ff13e5dd9f429beb688e4b7483ab2189803ab13 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:36:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:36:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:36> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:36:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:36:Image1:Thumbnail75x75> .
}

ns1:2f4ed3c7535517731e338488397535609c7bfaa4dac9d5839a72d272ce2fabb1 {
    <http://example.com/organization0:Image> a cms:Image ;
        dcterms:creator "Organization 0 image creator" ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Organization 0 image rights holder" ;
        dcterms:title "Organization 0 image" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/organization0> .
}

ns1:4acc2218a7686bfade78b52c795c63ecc6bbfdeb6b7531a587fa8a4658e7ce1c {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:100:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:100:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:100> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:100:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:100:Image1:Thumbnail600x600> .
}

ns1:b7e1d3cb7d7f8d371a93f3dc0643a1453976b3dc4c2fd7ee8e72f5057e15b599 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:92:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:92:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:92> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:92:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:92:Image0:Thumbnail600x600> .
}

ns1:e00d8890f40880e88e43411d3dd045e114770844b1c74edd364de37f93c6518b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:11:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:11:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:11> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:11:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:11:Image1:Thumbnail75x75> .
}

ns1:8d61ee48a14a2a51607b007e922a266215a739c43a588bf23912e4e1723eb119 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:35:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:35> .
}

ns1:35fa3c856a22c97f6994f57bc5e9189ddf7ffac6eeb5005f5b699aa5214870cc {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:24:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:24:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:24> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:24:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:24:Image0:Thumbnail600x600> .
}

ns1:9d84c01676b6c77004484d8d0b71c4698dbcd8dd2085e01db81330c6c06ad13d {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:3:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:3:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:3> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:3:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:3:Image0:Thumbnail600x600> .
}

ns1:441cf6409b82bd861f70ade4b51058bf03176a81837cf0232fae52d344199226 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:101:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:101> .
}

ns1:8ad24aebd7e9dccc9bb3b0ab0ee1f38c05b6c8d60f6b23a49eaaee9073afd44b {
    <http://example.com/collection0/work1Creation> a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:contributor <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:creator <http://example.com/organization3>,
            <http://example.com/organization4> ;
        dcterms:date _:N5d77f52b2b104fc885896c59c1906eb8 ;
        dcterms:spatial <http://example.com/collection0/work1Location> ;
        dcterms:title "Collection0Work1 creation" ;
        cms:work <http://example.com/collection0/work1> .

    _:N5d77f52b2b104fc885896c59c1906eb8 a cms:DateTimeDescription ;
        time:day "---31"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns1:2a46bd3e3f916d1f824535365b5def8ac02525b40c45dac356290bf9b6c123d3 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:102> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 2" ;
        skos:prefLabel "Concept 102" .
}

ns1:d0b6476ee5204aecdb9f6bbd68a7c7a305301216666f529d63f74c42726e532a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:30:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:30:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:30> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:30:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:30:Image0:Thumbnail75x75> .
}

ns1:753071e0535fbea322b07716772c413d0fc2f6ed772d256439ccb57966ad6c53 {
    <http://example.com/freestandingwork9Opening> a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-23"^^xsd:date ;
        dcterms:spatial _:Ned94bb3e62bf4cc4b7fb7e9991093860 ;
        dcterms:title "FreestandingWork9 opening" ;
        cms:work <http://example.com/freestandingwork9> .

    _:Ned94bb3e62bf4cc4b7fb7e9991093860 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:4a032198ca559670d52991e74495b4ee9e2f75f2266505d034c2c5a562aa5c7a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:43> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 3" ;
        skos:prefLabel "Concept 43" .
}

ns1:14f8ab72f5055e886b6d98934ac1796d0c313be1f89d2113d06e0d183f19dc97 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:89:Image0:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:89:Image0> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:89> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:89:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:89:Image0:Thumbnail600x600> .
}

ns1:1a2b7415cc4dba808e5c6ff01898413abbcd5b146be4ec23ce50a4890e99f7b5 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:16> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 6" ;
        skos:prefLabel "Concept 16" .
}

ns1:91c202cb38033bdae84aa32b22a50846116e06ef5fcb184c2f531a7ce40a3e6b {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:87:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:87> .
}

ns1:38ecbdc664a4e96ee585968fcec422f43e6895342226771612a734b81b86ee62 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:95:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:95> .
}

ns1:09353af7c31b8e8b352b225d06a2e48d27ff14b64e5d40c6b437e5f3005a71ff {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:81> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 1" ;
        skos:prefLabel "Concept 81" .
}

ns1:11a74fa43eb207040c871d34fbdbdff9e7a17bbf010c308de505c22241fc0581 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:63> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 3" ;
        skos:prefLabel "Concept 63" .
}

ns1:8ab5008c4ba5c06b246914f3e608ab03595c029ef4dfa81e4c3aba7dd4b96a48 {
    <http://example.com/collection1/work6Location> a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:7963e7ca329cfd7fcaf0ea774088ac2e8601fb111a79b05d6fd89958461c7756 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:49:Image0:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:49:Image0> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:49> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:49:Image0> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:49:Image0:Thumbnail75x75> .
}

ns1:29d268928b88a4fb3d01b69d97ff39b5a370a6aa3e41e48f83dce89aa72cd51e {
    <http://example.com/freestandingwork9> a cms:Work ;
        dcterms:alternative "FreestandingWork9 alternative title 0",
            "FreestandingWork9 alternative title 1" ;
        dcterms:contributor <http://example.com/organization0>,
            <http://example.com/person4> ;
        dcterms:creator <http://example.com/organization1>,
            <http://example.com/organization2> ;
        dcterms:extent <urn:paradicms_etl:pipeline:synthetic_data:concept:10>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:19> ;
        dcterms:identifier "FreestandingWork9Id0",
            "FreestandingWork9Id1" ;
        dcterms:language <urn:paradicms_etl:pipeline:synthetic_data:concept:20>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:29> ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium <urn:paradicms_etl:pipeline:synthetic_data:concept:40>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:49> ;
        dcterms:provenance "FreestandingWork9 provenance 0",
            "FreestandingWork9 provenance 1" ;
        dcterms:publisher <urn:paradicms_etl:pipeline:synthetic_data:concept:50>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:59> ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 rights holder" ;
        dcterms:source <urn:paradicms_etl:pipeline:synthetic_data:concept:60>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:69> ;
        dcterms:spatial <http://example.com/freestandingwork9Location> ;
        dcterms:subject <urn:paradicms_etl:pipeline:synthetic_data:concept:80>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:89> ;
        dcterms:title "FreestandingWork9" ;
        dcterms:type <urn:paradicms_etl:pipeline:synthetic_data:concept:100>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:109> ;
        vra:culturalContext <urn:paradicms_etl:pipeline:synthetic_data:concept:0>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:9> ;
        vra:material <urn:paradicms_etl:pipeline:synthetic_data:concept:30>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:39> ;
        vra:technique <urn:paradicms_etl:pipeline:synthetic_data:concept:90>,
            <urn:paradicms_etl:pipeline:synthetic_data:concept:99> .
}

ns1:26087dd85ac9ece29d3fb0e5db598d5f713803387e2a44208f2abb159e8fff96 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:46:Image1> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:46> .
}

ns1:549d0a8e7ac306981bc7131689eafc43f8e9f775d6f21218fa322b3d52f59aa9 {
    <http://example.com/collection0/work0:Image1:Thumbnail600x600> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Collection0Work0 image 1 rights holder" ;
        dcterms:title "Collection0Work0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf <http://example.com/collection0/work0:Image1> ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts <http://example.com/collection0/work0> .

    <http://example.com/collection0/work0:Image1> foaf:thumbnail <http://example.com/collection0/work0:Image1:Thumbnail600x600> .
}

ns1:16473829b401a1c5dd668e6128ebd6d6b1bcf49f5fbdd8a2b847781aeb896e94 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:78:Image1:Thumbnail75x75> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 75x75" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/75x75.png" ;
        cms:thumbnailOf <urn:paradicms_etl:pipeline:synthetic_data:concept:78:Image1> ;
        exif:height 75 ;
        exif:width 75 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:78> .

    <urn:paradicms_etl:pipeline:synthetic_data:concept:78:Image1> foaf:thumbnail <urn:paradicms_etl:pipeline:synthetic_data:concept:78:Image1:Thumbnail75x75> .
}

ns1:e637866f11e605af1d28424fb70aec5cfe0c038ab24bc426a1a63c95adc84a1a {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:13:Image0> a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts <urn:paradicms_etl:pipeline:synthetic_data:concept:13> .
}

ns1:d7871fc6bcb1d6b53046dbb309d2ea32c1607919046632a9ccbe6cbb7d90f665 {
    <urn:paradicms_etl:pipeline:synthetic_data:concept:3> a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 3" ;
        skos:prefLabel "Concept 3" .
}
`);
