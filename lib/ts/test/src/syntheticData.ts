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
@prefix ns1: <urn:paradicms_etl:pipeline:synthetic_data:concept:> .
@prefix ns10: <http://example.com/> .
@prefix ns100: <urn:paradicms_etl:pipeline:synthetic_data:concept:79:CmsImage0:> .
@prefix ns101: <urn:paradicms_etl:pipeline:synthetic_data:concept:67:CmsImage0:> .
@prefix ns102: <urn:paradicms_etl:pipeline:synthetic_data:concept:65:CmsImage1:> .
@prefix ns103: <urn:paradicms_etl:pipeline:synthetic_data:concept:27:CmsImage0:> .
@prefix ns104: <urn:paradicms_etl:pipeline:synthetic_data:concept:39:CmsImage0:> .
@prefix ns105: <urn:paradicms_etl:pipeline:synthetic_data:concept:14:CmsImage0:> .
@prefix ns106: <urn:paradicms_etl:pipeline:synthetic_data:concept:3:CmsImage0:> .
@prefix ns107: <http://example.com/organization3:CmsImage0:> .
@prefix ns108: <urn:paradicms_etl:pipeline:synthetic_data:concept:62:CmsImage0:> .
@prefix ns109: <urn:paradicms_etl:pipeline:synthetic_data:concept:102:CmsImage0:> .
@prefix ns11: <http://purl.org/dc/terms/description:CmsImage0:> .
@prefix ns110: <urn:paradicms_etl:pipeline:synthetic_data:concept:51:> .
@prefix ns111: <urn:paradicms_etl:pipeline:synthetic_data:concept:18:CmsImage0:> .
@prefix ns112: <urn:paradicms_etl:pipeline:synthetic_data:concept:91:CmsImage1:> .
@prefix ns113: <http://example.com/collection1/work6:CmsImage0:> .
@prefix ns114: <urn:paradicms_etl:pipeline:synthetic_data:concept:93:> .
@prefix ns115: <urn:paradicms_etl:pipeline:synthetic_data:concept:80:CmsImage0:> .
@prefix ns116: <urn:paradicms_etl:pipeline:synthetic_data:concept:54:CmsImage0:> .
@prefix ns117: <urn:paradicms_etl:pipeline:synthetic_data:concept:93:CmsImage0:> .
@prefix ns118: <http://purl.org/dc/terms/language:> .
@prefix ns119: <urn:paradicms_etl:pipeline:synthetic_data:concept:33:CmsImage0:> .
@prefix ns12: <urn:paradicms_etl:pipeline:synthetic_data:concept:32:CmsImage0:> .
@prefix ns120: <urn:paradicms_etl:pipeline:synthetic_data:concept:74:CmsImage0:> .
@prefix ns121: <urn:paradicms_etl:pipeline:synthetic_data:concept:24:CmsImage0:> .
@prefix ns122: <urn:paradicms_etl:pipeline:synthetic_data:concept:20:CmsImage0:> .
@prefix ns123: <http://purl.org/dc/terms/spatial:> .
@prefix ns124: <urn:paradicms_etl:pipeline:synthetic_data:concept:13:> .
@prefix ns125: <urn:paradicms_etl:pipeline:synthetic_data:concept:83:CmsImage1:> .
@prefix ns126: <urn:paradicms_etl:pipeline:synthetic_data:property_group:CmsImage0:> .
@prefix ns127: <urn:paradicms_etl:pipeline:synthetic_data:concept:60:CmsImage0:> .
@prefix ns128: <urn:paradicms_etl:pipeline:synthetic_data:concept:7:CmsImage1:> .
@prefix ns129: <urn:paradicms_etl:pipeline:synthetic_data:concept:67:> .
@prefix ns13: <urn:paradicms_etl:pipeline:synthetic_data:concept:6:CmsImage1:> .
@prefix ns130: <http://purl.org/dc/terms/publisher:> .
@prefix ns131: <urn:paradicms_etl:pipeline:synthetic_data:concept:11:CmsImage1:> .
@prefix ns132: <urn:paradicms_etl:pipeline:synthetic_data:concept:89:CmsImage1:> .
@prefix ns133: <urn:paradicms_etl:pipeline:synthetic_data:concept:3:CmsImage1:> .
@prefix ns134: <urn:paradicms_etl:pipeline:synthetic_data:concept:109:CmsImage0:> .
@prefix ns135: <urn:paradicms_etl:pipeline:synthetic_data:concept:37:CmsImage1:> .
@prefix ns136: <urn:paradicms_etl:pipeline:synthetic_data:concept:69:CmsImage1:> .
@prefix ns137: <urn:paradicms_etl:pipeline:synthetic_data:concept:14:CmsImage1:> .
@prefix ns138: <urn:paradicms_etl:pipeline:synthetic_data:concept:63:CmsImage0:> .
@prefix ns139: <urn:paradicms_etl:pipeline:synthetic_data:concept:94:CmsImage1:> .
@prefix ns14: <urn:paradicms_etl:pipeline:synthetic_data:concept:64:CmsImage1:> .
@prefix ns140: <http://purl.org/dc/terms/description:> .
@prefix ns141: <urn:paradicms_etl:pipeline:synthetic_data:concept:4:CmsImage0:> .
@prefix ns142: <urn:paradicms_etl:pipeline:synthetic_data:concept:105:CmsImage1:> .
@prefix ns143: <urn:paradicms_etl:pipeline:synthetic_data:concept:62:CmsImage1:> .
@prefix ns144: <http://purl.org/dc/terms/description:CmsImage1:> .
@prefix ns145: <urn:paradicms_etl:pipeline:synthetic_data:concept:100:CmsImage1:> .
@prefix ns146: <http://purl.org/dc/terms/medium:> .
@prefix ns147: <http://purl.org/dc/terms/spatial:CmsImage1:> .
@prefix ns148: <urn:paradicms_etl:pipeline:synthetic_data:concept:74:CmsImage1:> .
@prefix ns149: <http://purl.org/dc/terms/title:CmsImage0:> .
@prefix ns15: <urn:paradicms_etl:pipeline:synthetic_data:concept:16:> .
@prefix ns150: <urn:paradicms_etl:pipeline:synthetic_data:concept:15:> .
@prefix ns151: <http://example.com/person0:> .
@prefix ns152: <http://example.com/collection1/work5:CmsImage0:> .
@prefix ns153: <urn:paradicms_etl:pipeline:synthetic_data:concept:29:> .
@prefix ns154: <urn:paradicms_etl:pipeline:synthetic_data:concept:90:CmsImage0:> .
@prefix ns155: <urn:paradicms_etl:pipeline:synthetic_data:concept:15:CmsImage1:> .
@prefix ns156: <urn:paradicms_etl:pipeline:synthetic_data:property_group:> .
@prefix ns157: <http://example.com/person1:> .
@prefix ns158: <http://example.com/person0:CmsImage1:> .
@prefix ns159: <http://example.com/collection1/work5:CmsImage1:> .
@prefix ns16: <http://example.com/freestandingwork10:CmsImage0:> .
@prefix ns160: <urn:paradicms_etl:pipeline:synthetic_data:concept:11:CmsImage0:> .
@prefix ns161: <urn:paradicms_etl:pipeline:synthetic_data:concept:23:CmsImage0:> .
@prefix ns162: <urn:paradicms_etl:pipeline:synthetic_data:concept:96:CmsImage1:> .
@prefix ns163: <urn:paradicms_etl:pipeline:synthetic_data:concept:73:CmsImage0:> .
@prefix ns164: <urn:paradicms_etl:pipeline:synthetic_data:concept:86:CmsImage1:> .
@prefix ns165: <http://example.com/collection0/work2:CmsImage1:> .
@prefix ns166: <urn:paradicms_etl:pipeline:synthetic_data:concept:108:CmsImage0:> .
@prefix ns167: <urn:paradicms_etl:pipeline:synthetic_data:concept:43:CmsImage0:> .
@prefix ns168: <http://example.com/collection1/work7:CmsImage0:> .
@prefix ns169: <urn:paradicms_etl:pipeline:synthetic_data:concept:108:> .
@prefix ns17: <urn:paradicms_etl:pipeline:synthetic_data:concept:86:> .
@prefix ns170: <urn:paradicms_etl:pipeline:synthetic_data:concept:46:CmsImage0:> .
@prefix ns171: <http://example.com/collection1/work7:CmsImage1:> .
@prefix ns172: <http://example.com/freestandingwork11:CmsImage1:> .
@prefix ns173: <http://example.com/freestandingwork8:CmsImage0:> .
@prefix ns174: <http://example.com/organization0:> .
@prefix ns175: <urn:paradicms_etl:pipeline:synthetic_data:concept:50:CmsImage1:> .
@prefix ns176: <urn:paradicms_etl:pipeline:synthetic_data:concept:8:CmsImage0:> .
@prefix ns177: <http://purl.org/dc/terms/type:CmsImage0:> .
@prefix ns178: <urn:paradicms_etl:pipeline:synthetic_data:concept:33:CmsImage1:> .
@prefix ns179: <urn:paradicms_etl:pipeline:synthetic_data:concept:43:> .
@prefix ns18: <urn:paradicms_etl:pipeline:synthetic_data:concept:74:> .
@prefix ns180: <http://example.com/organization2:> .
@prefix ns181: <urn:paradicms_etl:pipeline:synthetic_data:concept:5:CmsImage0:> .
@prefix ns182: <urn:paradicms_etl:pipeline:synthetic_data:concept:35:CmsImage1:> .
@prefix ns183: <http://purl.org/dc/terms/publisher:CmsImage0:> .
@prefix ns184: <urn:paradicms_etl:pipeline:synthetic_data:concept:34:> .
@prefix ns185: <urn:paradicms_etl:pipeline:synthetic_data:concept:66:CmsImage1:> .
@prefix ns186: <urn:paradicms_etl:pipeline:synthetic_data:concept:28:CmsImage0:> .
@prefix ns187: <urn:paradicms_etl:pipeline:synthetic_data:concept:68:CmsImage0:> .
@prefix ns188: <urn:paradicms_etl:pipeline:synthetic_data:concept:56:> .
@prefix ns189: <urn:paradicms_etl:pipeline:synthetic_data:concept:20:CmsImage1:> .
@prefix ns19: <http://example.com/collection1/> .
@prefix ns190: <urn:paradicms_etl:pipeline:synthetic_data:concept:52:CmsImage1:> .
@prefix ns191: <urn:paradicms_etl:pipeline:synthetic_data:concept:75:CmsImage1:> .
@prefix ns192: <http://example.com/organization0:CmsImage1:> .
@prefix ns193: <urn:paradicms_etl:pipeline:synthetic_data:concept:0:CmsImage0:> .
@prefix ns194: <urn:paradicms_etl:pipeline:synthetic_data:concept:78:CmsImage1:> .
@prefix ns195: <http://example.com/person4:> .
@prefix ns196: <http://purl.org/dc/terms/medium:CmsImage0:> .
@prefix ns197: <http://example.com/organization3:> .
@prefix ns198: <urn:paradicms_etl:pipeline:synthetic_data:concept:82:> .
@prefix ns199: <urn:paradicms_etl:pipeline:synthetic_data:concept:34:CmsImage1:> .
@prefix ns2: <urn:paradicms_etl:pipeline:synthetic_data:concept:98:CmsImage0:> .
@prefix ns20: <http://purl.org/dc/terms/source:CmsImage0:> .
@prefix ns200: <urn:paradicms_etl:pipeline:synthetic_data:concept:10:CmsImage0:> .
@prefix ns201: <urn:paradicms_etl:pipeline:synthetic_data:concept:29:CmsImage0:> .
@prefix ns202: <urn:paradicms_etl:pipeline:synthetic_data:concept:72:CmsImage1:> .
@prefix ns203: <urn:paradicms_etl:pipeline:synthetic_data:concept:109:> .
@prefix ns204: <urn:paradicms_etl:pipeline:synthetic_data:concept:53:CmsImage1:> .
@prefix ns205: <http://purl.org/dc/terms/spatial:CmsImage0:> .
@prefix ns206: <urn:paradicms_etl:pipeline:synthetic_data:concept:7:CmsImage0:> .
@prefix ns207: <http://example.com/person2:CmsImage0:> .
@prefix ns208: <urn:paradicms_etl:pipeline:synthetic_data:concept:75:> .
@prefix ns209: <http://example.com/collection1:CmsImage0:> .
@prefix ns21: <http://example.com/collection0/work1:CmsImage1:> .
@prefix ns210: <urn:paradicms_etl:pipeline:synthetic_data:concept:61:CmsImage0:> .
@prefix ns211: <urn:paradicms_etl:pipeline:synthetic_data:concept:27:CmsImage1:> .
@prefix ns212: <urn:paradicms_etl:pipeline:synthetic_data:concept:99:CmsImage1:> .
@prefix ns213: <urn:paradicms_etl:pipeline:synthetic_data:concept:52:CmsImage0:> .
@prefix ns214: <urn:paradicms_etl:pipeline:synthetic_data:concept:52:> .
@prefix ns215: <http://purl.org/dc/terms/medium:CmsImage1:> .
@prefix ns216: <urn:paradicms_etl:pipeline:synthetic_data:concept:34:CmsImage0:> .
@prefix ns217: <urn:paradicms_etl:pipeline:synthetic_data:concept:23:> .
@prefix ns218: <urn:paradicms_etl:pipeline:synthetic_data:concept:70:CmsImage0:> .
@prefix ns219: <urn:paradicms_etl:pipeline:synthetic_data:concept:68:CmsImage1:> .
@prefix ns22: <urn:paradicms_etl:pipeline:synthetic_data:concept:57:CmsImage1:> .
@prefix ns220: <urn:paradicms_etl:pipeline:synthetic_data:concept:103:> .
@prefix ns221: <urn:paradicms_etl:pipeline:synthetic_data:concept:8:CmsImage1:> .
@prefix ns222: <http://purl.org/vra/material:> .
@prefix ns223: <urn:paradicms_etl:pipeline:synthetic_data:concept:21:CmsImage0:> .
@prefix ns224: <urn:paradicms_etl:pipeline:synthetic_data:concept:30:CmsImage0:> .
@prefix ns225: <urn:paradicms_etl:pipeline:synthetic_data:concept:6:> .
@prefix ns226: <http://purl.org/dc/terms/language:CmsImage1:> .
@prefix ns227: <http://example.com/freestandingwork10:CmsImage1:> .
@prefix ns228: <http://example.com/organization4:> .
@prefix ns229: <urn:paradicms_etl:pipeline:synthetic_data:concept:66:> .
@prefix ns23: <urn:paradicms_etl:pipeline:synthetic_data:concept:85:CmsImage0:> .
@prefix ns230: <urn:paradicms_etl:pipeline:synthetic_data:concept:23:CmsImage1:> .
@prefix ns231: <urn:paradicms_etl:pipeline:synthetic_data:concept:48:CmsImage0:> .
@prefix ns232: <http://example.com/organization2:CmsImage1:> .
@prefix ns233: <urn:paradicms_etl:pipeline:synthetic_data:concept:22:> .
@prefix ns234: <urn:paradicms_etl:pipeline:synthetic_data:concept:47:CmsImage0:> .
@prefix ns235: <urn:paradicms_etl:pipeline:synthetic_data:concept:80:CmsImage1:> .
@prefix ns236: <http://purl.org/dc/terms/language:CmsImage0:> .
@prefix ns237: <http://example.com/collection0/> .
@prefix ns238: <urn:paradicms_etl:pipeline:synthetic_data:concept:67:CmsImage1:> .
@prefix ns239: <http://purl.org/vra/culturalContext:CmsImage1:> .
@prefix ns24: <urn:paradicms_etl:pipeline:synthetic_data:concept:97:CmsImage1:> .
@prefix ns240: <urn:paradicms_etl:pipeline:synthetic_data:concept:99:CmsImage0:> .
@prefix ns241: <urn:paradicms_etl:pipeline:synthetic_data:concept:1:CmsImage1:> .
@prefix ns242: <urn:paradicms_etl:pipeline:synthetic_data:concept:101:CmsImage0:> .
@prefix ns243: <urn:paradicms_etl:pipeline:synthetic_data:concept:56:CmsImage1:> .
@prefix ns244: <urn:paradicms_etl:pipeline:synthetic_data:concept:95:CmsImage0:> .
@prefix ns245: <urn:paradicms_etl:pipeline:synthetic_data:concept:7:> .
@prefix ns246: <urn:paradicms_etl:pipeline:synthetic_data:concept:30:CmsImage1:> .
@prefix ns247: <urn:paradicms_etl:pipeline:synthetic_data:concept:16:CmsImage0:> .
@prefix ns248: <urn:paradicms_etl:pipeline:synthetic_data:concept:35:> .
@prefix ns249: <http://example.com/organization0:CmsImage0:> .
@prefix ns25: <http://example.com/collection0/work3:CmsImage1:> .
@prefix ns250: <urn:paradicms_etl:pipeline:synthetic_data:concept:101:> .
@prefix ns251: <urn:paradicms_etl:pipeline:synthetic_data:concept:2:CmsImage1:> .
@prefix ns252: <http://purl.org/dc/terms/title:CmsImage1:> .
@prefix ns253: <http://example.com/person4:CmsImage0:> .
@prefix ns254: <urn:paradicms_etl:pipeline:synthetic_data:concept:10:> .
@prefix ns255: <urn:paradicms_etl:pipeline:synthetic_data:property_group:CmsImage1:> .
@prefix ns256: <urn:paradicms_etl:pipeline:synthetic_data:concept:40:CmsImage1:> .
@prefix ns257: <urn:paradicms_etl:pipeline:synthetic_data:concept:49:CmsImage1:> .
@prefix ns258: <http://example.com/freestandingwork11:> .
@prefix ns259: <http://example.com/person4:CmsImage1:> .
@prefix ns26: <http://example.com/organization4:CmsImage0:> .
@prefix ns260: <urn:paradicms_etl:pipeline:synthetic_data:concept:25:CmsImage0:> .
@prefix ns261: <urn:paradicms_etl:pipeline:synthetic_data:concept:28:CmsImage1:> .
@prefix ns262: <urn:paradicms_etl:pipeline:synthetic_data:concept:94:> .
@prefix ns263: <urn:paradicms_etl:pipeline:synthetic_data:concept:95:CmsImage1:> .
@prefix ns264: <http://example.com/person1:CmsImage0:> .
@prefix ns265: <urn:paradicms_etl:pipeline:synthetic_data:concept:98:CmsImage1:> .
@prefix ns266: <urn:paradicms_etl:pipeline:synthetic_data:concept:87:CmsImage1:> .
@prefix ns267: <urn:paradicms_etl:pipeline:synthetic_data:concept:53:CmsImage0:> .
@prefix ns268: <urn:paradicms_etl:pipeline:synthetic_data:concept:84:CmsImage1:> .
@prefix ns269: <urn:paradicms_etl:pipeline:synthetic_data:concept:79:CmsImage1:> .
@prefix ns27: <urn:paradicms_etl:pipeline:synthetic_data:concept:78:CmsImage0:> .
@prefix ns270: <urn:paradicms_etl:pipeline:synthetic_data:concept:71:CmsImage0:> .
@prefix ns271: <urn:paradicms_etl:pipeline:synthetic_data:concept:60:CmsImage1:> .
@prefix ns272: <http://example.com/person3:CmsImage0:> .
@prefix ns273: <urn:paradicms_etl:pipeline:synthetic_data:concept:103:CmsImage0:> .
@prefix ns274: <urn:paradicms_etl:pipeline:synthetic_data:concept:77:CmsImage0:> .
@prefix ns275: <urn:paradicms_etl:pipeline:synthetic_data:concept:107:CmsImage0:> .
@prefix ns276: <http://example.com/organization1:> .
@prefix ns277: <urn:paradicms_etl:pipeline:synthetic_data:concept:41:CmsImage1:> .
@prefix ns278: <urn:paradicms_etl:pipeline:synthetic_data:concept:56:CmsImage0:> .
@prefix ns279: <urn:paradicms_etl:pipeline:synthetic_data:concept:19:CmsImage0:> .
@prefix ns28: <urn:paradicms_etl:pipeline:synthetic_data:concept:107:CmsImage1:> .
@prefix ns280: <urn:paradicms_etl:pipeline:synthetic_data:concept:80:> .
@prefix ns281: <urn:paradicms_etl:pipeline:synthetic_data:concept:31:CmsImage0:> .
@prefix ns282: <urn:paradicms_etl:pipeline:synthetic_data:concept:94:CmsImage0:> .
@prefix ns283: <urn:paradicms_etl:pipeline:synthetic_data:concept:5:> .
@prefix ns284: <urn:paradicms_etl:pipeline:synthetic_data:concept:41:> .
@prefix ns285: <urn:paradicms_etl:pipeline:synthetic_data:concept:75:CmsImage0:> .
@prefix ns286: <http://example.com/collection0/work1:CmsImage0:> .
@prefix ns287: <http://example.com/person0:CmsImage0:> .
@prefix ns288: <urn:paradicms_etl:pipeline:synthetic_data:concept:71:> .
@prefix ns289: <urn:paradicms_etl:pipeline:synthetic_data:concept:38:> .
@prefix ns29: <urn:paradicms_etl:pipeline:synthetic_data:concept:36:CmsImage0:> .
@prefix ns290: <http://purl.org/dc/terms/extent:CmsImage1:> .
@prefix ns291: <urn:paradicms_etl:pipeline:synthetic_data:concept:93:CmsImage1:> .
@prefix ns292: <http://purl.org/dc/terms/extent:CmsImage0:> .
@prefix ns293: <urn:paradicms_etl:pipeline:synthetic_data:concept:90:> .
@prefix ns294: <urn:paradicms_etl:pipeline:synthetic_data:concept:99:> .
@prefix ns295: <urn:paradicms_etl:pipeline:synthetic_data:concept:12:> .
@prefix ns296: <urn:paradicms_etl:pipeline:synthetic_data:concept:50:> .
@prefix ns297: <urn:paradicms_etl:pipeline:synthetic_data:concept:45:CmsImage1:> .
@prefix ns298: <urn:paradicms_etl:pipeline:synthetic_data:concept:76:CmsImage1:> .
@prefix ns299: <http://purl.org/vra/material:CmsImage0:> .
@prefix ns3: <urn:paradicms_etl:pipeline:synthetic_data:concept:33:> .
@prefix ns30: <urn:paradicms_etl:pipeline:synthetic_data:concept:39:CmsImage1:> .
@prefix ns300: <urn:paradicms_etl:pipeline:synthetic_data:concept:24:> .
@prefix ns301: <urn:paradicms_etl:pipeline:synthetic_data:concept:55:CmsImage0:> .
@prefix ns302: <urn:paradicms_etl:pipeline:synthetic_data:concept:83:CmsImage0:> .
@prefix ns303: <http://purl.org/vra/technique:CmsImage1:> .
@prefix ns304: <urn:paradicms_etl:pipeline:synthetic_data:concept:36:CmsImage1:> .
@prefix ns305: <urn:paradicms_etl:pipeline:synthetic_data:concept:51:CmsImage0:> .
@prefix ns306: <http://example.com/person2:> .
@prefix ns307: <http://example.com/collection1:> .
@prefix ns308: <urn:paradicms_etl:pipeline:synthetic_data:concept:50:CmsImage0:> .
@prefix ns309: <urn:paradicms_etl:pipeline:synthetic_data:concept:44:CmsImage1:> .
@prefix ns31: <urn:paradicms_etl:pipeline:synthetic_data:concept:71:CmsImage1:> .
@prefix ns310: <urn:paradicms_etl:pipeline:synthetic_data:concept:77:CmsImage1:> .
@prefix ns311: <http://example.com/freestandingwork8:> .
@prefix ns312: <urn:paradicms_etl:pipeline:synthetic_data:concept:49:> .
@prefix ns313: <urn:paradicms_etl:pipeline:synthetic_data:concept:32:> .
@prefix ns314: <urn:paradicms_etl:pipeline:synthetic_data:concept:88:CmsImage0:> .
@prefix ns315: <urn:paradicms_etl:pipeline:synthetic_data:concept:102:> .
@prefix ns316: <urn:paradicms_etl:pipeline:synthetic_data:concept:65:> .
@prefix ns317: <urn:paradicms_etl:pipeline:synthetic_data:concept:18:> .
@prefix ns318: <urn:paradicms_etl:pipeline:synthetic_data:concept:44:> .
@prefix ns319: <urn:paradicms_etl:pipeline:synthetic_data:concept:11:> .
@prefix ns32: <urn:paradicms_etl:pipeline:synthetic_data:concept:15:CmsImage0:> .
@prefix ns320: <http://example.com/collection0/work3:> .
@prefix ns321: <urn:paradicms_etl:pipeline:synthetic_data:concept:21:CmsImage1:> .
@prefix ns322: <http://example.com/organization1:CmsImage0:> .
@prefix ns323: <urn:paradicms_etl:pipeline:synthetic_data:concept:88:CmsImage1:> .
@prefix ns324: <http://purl.org/dc/terms/title:> .
@prefix ns325: <urn:paradicms_etl:pipeline:synthetic_data:concept:87:CmsImage0:> .
@prefix ns326: <urn:paradicms_etl:pipeline:synthetic_data:concept:104:CmsImage1:> .
@prefix ns327: <urn:paradicms_etl:pipeline:synthetic_data:concept:31:> .
@prefix ns328: <urn:paradicms_etl:pipeline:synthetic_data:concept:2:> .
@prefix ns329: <http://example.com/freestandingwork10:> .
@prefix ns33: <http://example.com/person3:CmsImage1:> .
@prefix ns330: <urn:paradicms_etl:pipeline:synthetic_data:concept:102:CmsImage1:> .
@prefix ns331: <urn:paradicms_etl:pipeline:synthetic_data:concept:86:CmsImage0:> .
@prefix ns332: <urn:paradicms_etl:pipeline:synthetic_data:concept:40:> .
@prefix ns333: <urn:paradicms_etl:pipeline:synthetic_data:concept:107:> .
@prefix ns334: <urn:paradicms_etl:pipeline:synthetic_data:concept:104:> .
@prefix ns335: <urn:paradicms_etl:pipeline:synthetic_data:concept:54:> .
@prefix ns336: <urn:paradicms_etl:pipeline:synthetic_data:concept:81:> .
@prefix ns337: <urn:paradicms_etl:pipeline:synthetic_data:concept:65:CmsImage0:> .
@prefix ns338: <urn:paradicms_etl:pipeline:synthetic_data:concept:12:CmsImage0:> .
@prefix ns339: <urn:paradicms_etl:pipeline:synthetic_data:concept:53:> .
@prefix ns34: <urn:paradicms_etl:pipeline:synthetic_data:concept:58:CmsImage0:> .
@prefix ns340: <http://example.com/collection0/work2:CmsImage0:> .
@prefix ns341: <http://purl.org/dc/terms/subject:CmsImage0:> .
@prefix ns342: <urn:paradicms_etl:pipeline:synthetic_data:concept:9:CmsImage0:> .
@prefix ns343: <urn:paradicms_etl:pipeline:synthetic_data:concept:98:> .
@prefix ns344: <urn:paradicms_etl:pipeline:synthetic_data:concept:59:CmsImage1:> .
@prefix ns345: <urn:paradicms_etl:pipeline:synthetic_data:concept:105:CmsImage0:> .
@prefix ns346: <http://example.com/collection0/work3:CmsImage0:> .
@prefix ns347: <urn:paradicms_etl:pipeline:synthetic_data:concept:77:> .
@prefix ns348: <http://example.com/freestandingwork11:CmsImage0:> .
@prefix ns349: <urn:paradicms_etl:pipeline:synthetic_data:concept:72:> .
@prefix ns35: <urn:paradicms_etl:pipeline:synthetic_data:concept:6:CmsImage0:> .
@prefix ns350: <http://purl.org/dc/terms/type:> .
@prefix ns351: <urn:paradicms_etl:pipeline:synthetic_data:concept:42:CmsImage0:> .
@prefix ns352: <urn:paradicms_etl:pipeline:synthetic_data:concept:96:CmsImage0:> .
@prefix ns353: <urn:paradicms_etl:pipeline:synthetic_data:concept:97:CmsImage0:> .
@prefix ns354: <urn:paradicms_etl:pipeline:synthetic_data:concept:85:> .
@prefix ns355: <urn:paradicms_etl:pipeline:synthetic_data:concept:45:> .
@prefix ns356: <urn:paradicms_etl:pipeline:synthetic_data:concept:26:> .
@prefix ns357: <urn:paradicms_etl:pipeline:synthetic_data:concept:16:CmsImage1:> .
@prefix ns358: <http://example.com/collection0/work0:> .
@prefix ns359: <urn:paradicms_etl:pipeline:synthetic_data:concept:92:CmsImage0:> .
@prefix ns36: <urn:paradicms_etl:pipeline:synthetic_data:concept:32:CmsImage1:> .
@prefix ns360: <urn:paradicms_etl:pipeline:synthetic_data:concept:62:> .
@prefix ns361: <urn:paradicms_etl:pipeline:synthetic_data:concept:47:CmsImage1:> .
@prefix ns362: <urn:paradicms_etl:pipeline:synthetic_data:concept:5:CmsImage1:> .
@prefix ns363: <urn:paradicms_etl:pipeline:synthetic_data:concept:2:CmsImage0:> .
@prefix ns364: <urn:paradicms_etl:pipeline:synthetic_data:concept:106:CmsImage1:> .
@prefix ns365: <urn:paradicms_etl:pipeline:synthetic_data:concept:69:> .
@prefix ns366: <urn:paradicms_etl:pipeline:synthetic_data:concept:48:> .
@prefix ns367: <http://example.com/collection1/work4:CmsImage1:> .
@prefix ns368: <urn:paradicms_etl:pipeline:synthetic_data:concept:89:CmsImage0:> .
@prefix ns369: <urn:paradicms_etl:pipeline:synthetic_data:concept:87:> .
@prefix ns37: <urn:paradicms_etl:pipeline:synthetic_data:concept:38:CmsImage1:> .
@prefix ns370: <urn:paradicms_etl:pipeline:synthetic_data:concept:13:CmsImage0:> .
@prefix ns371: <urn:paradicms_etl:pipeline:synthetic_data:concept:54:CmsImage1:> .
@prefix ns372: <http://example.com/collection0/work0:CmsImage1:> .
@prefix ns373: <urn:paradicms_etl:pipeline:synthetic_data:concept:55:> .
@prefix ns374: <urn:paradicms_etl:pipeline:synthetic_data:concept:95:> .
@prefix ns375: <http://example.com/organization3:CmsImage1:> .
@prefix ns376: <urn:paradicms_etl:pipeline:synthetic_data:concept:76:> .
@prefix ns377: <urn:paradicms_etl:pipeline:synthetic_data:concept:46:> .
@prefix ns378: <urn:paradicms_etl:pipeline:synthetic_data:concept:69:CmsImage0:> .
@prefix ns379: <http://purl.org/vra/technique:CmsImage0:> .
@prefix ns38: <urn:paradicms_etl:pipeline:synthetic_data:concept:37:CmsImage0:> .
@prefix ns380: <urn:paradicms_etl:pipeline:synthetic_data:concept:64:> .
@prefix ns381: <http://example.com/person2:CmsImage1:> .
@prefix ns382: <http://example.com/organization2:CmsImage0:> .
@prefix ns383: <urn:paradicms_etl:pipeline:synthetic_data:concept:79:> .
@prefix ns384: <urn:paradicms_etl:pipeline:synthetic_data:concept:39:> .
@prefix ns385: <urn:paradicms_etl:pipeline:synthetic_data:concept:0:> .
@prefix ns386: <urn:paradicms_etl:pipeline:synthetic_data:concept:28:> .
@prefix ns387: <urn:paradicms_etl:pipeline:synthetic_data:concept:105:> .
@prefix ns388: <urn:paradicms_etl:pipeline:synthetic_data:concept:61:CmsImage1:> .
@prefix ns389: <urn:paradicms_etl:pipeline:synthetic_data:concept:100:> .
@prefix ns39: <urn:paradicms_etl:pipeline:synthetic_data:concept:17:CmsImage1:> .
@prefix ns390: <http://example.com/person3:> .
@prefix ns391: <urn:paradicms_etl:pipeline:synthetic_data:concept:21:> .
@prefix ns392: <http://purl.org/dc/terms/extent:> .
@prefix ns393: <urn:paradicms_etl:pipeline:synthetic_data:concept:57:CmsImage0:> .
@prefix ns394: <urn:paradicms_etl:pipeline:synthetic_data:concept:10:CmsImage1:> .
@prefix ns395: <urn:paradicms_etl:pipeline:synthetic_data:concept:61:> .
@prefix ns396: <urn:paradicms_etl:pipeline:synthetic_data:concept:78:> .
@prefix ns397: <urn:paradicms_etl:pipeline:synthetic_data:concept:3:> .
@prefix ns398: <urn:paradicms_etl:pipeline:synthetic_data:concept:89:> .
@prefix ns399: <urn:paradicms_etl:pipeline:synthetic_data:concept:84:> .
@prefix ns4: <urn:paradicms_etl:pipeline:synthetic_data:concept:55:CmsImage1:> .
@prefix ns40: <urn:paradicms_etl:pipeline:synthetic_data:concept:35:CmsImage0:> .
@prefix ns400: <http://example.com/person1:CmsImage1:> .
@prefix ns401: <urn:paradicms_etl:pipeline:synthetic_data:concept:48:CmsImage1:> .
@prefix ns402: <urn:paradicms_etl:pipeline:synthetic_data:concept:58:CmsImage1:> .
@prefix ns403: <urn:paradicms_etl:pipeline:synthetic_data:concept:17:> .
@prefix ns404: <urn:paradicms_etl:pipeline:synthetic_data:concept:25:> .
@prefix ns405: <http://example.com/collection0/work1:> .
@prefix ns406: <urn:paradicms_etl:pipeline:synthetic_data:concept:58:> .
@prefix ns407: <urn:paradicms_etl:pipeline:synthetic_data:concept:19:CmsImage1:> .
@prefix ns408: <urn:paradicms_etl:pipeline:synthetic_data:concept:47:> .
@prefix ns409: <urn:paradicms_etl:pipeline:synthetic_data:concept:19:> .
@prefix ns41: <urn:paradicms_etl:pipeline:synthetic_data:concept:97:> .
@prefix ns410: <http://purl.org/vra/material:CmsImage1:> .
@prefix ns411: <urn:paradicms_etl:pipeline:synthetic_data:concept:88:> .
@prefix ns412: <urn:paradicms_etl:pipeline:synthetic_data:concept:37:> .
@prefix ns413: <urn:paradicms_etl:pipeline:synthetic_data:concept:81:CmsImage1:> .
@prefix ns414: <http://example.com/collection1/work4:> .
@prefix ns415: <urn:paradicms_etl:pipeline:synthetic_data:concept:92:CmsImage1:> .
@prefix ns416: <urn:paradicms_etl:pipeline:synthetic_data:concept:57:> .
@prefix ns417: <urn:paradicms_etl:pipeline:synthetic_data:concept:43:CmsImage1:> .
@prefix ns418: <urn:paradicms_etl:pipeline:synthetic_data:concept:72:CmsImage0:> .
@prefix ns419: <urn:paradicms_etl:pipeline:synthetic_data:concept:4:CmsImage1:> .
@prefix ns42: <http://example.com/freestandingwork8:CmsImage1:> .
@prefix ns420: <urn:paradicms_etl:pipeline:synthetic_data:concept:27:> .
@prefix ns421: <urn:paradicms_etl:pipeline:synthetic_data:concept:44:CmsImage0:> .
@prefix ns422: <http://purl.org/dc/terms/subject:CmsImage1:> .
@prefix ns423: <urn:paradicms_etl:pipeline:synthetic_data:concept:68:> .
@prefix ns424: <urn:paradicms_etl:pipeline:synthetic_data:concept:59:CmsImage0:> .
@prefix ns425: <urn:paradicms_etl:pipeline:synthetic_data:concept:1:> .
@prefix ns426: <urn:paradicms_etl:pipeline:synthetic_data:concept:109:CmsImage1:> .
@prefix ns427: <http://example.com/collection0/work2:> .
@prefix ns428: <urn:paradicms_etl:pipeline:synthetic_data:concept:83:> .
@prefix ns429: <urn:paradicms_etl:pipeline:synthetic_data:concept:4:> .
@prefix ns43: <http://purl.org/vra/technique:> .
@prefix ns430: <http://purl.org/dc/terms/subject:> .
@prefix ns431: <http://example.com/freestandingwork9:> .
@prefix ns432: <http://purl.org/vra/culturalContext:> .
@prefix ns433: <urn:paradicms_etl:pipeline:synthetic_data:concept:104:CmsImage0:> .
@prefix ns434: <urn:paradicms_etl:pipeline:synthetic_data:concept:14:> .
@prefix ns435: <urn:paradicms_etl:pipeline:synthetic_data:concept:8:> .
@prefix ns436: <http://example.com/collection1/work5:> .
@prefix ns437: <urn:paradicms_etl:pipeline:synthetic_data:concept:91:> .
@prefix ns438: <urn:paradicms_etl:pipeline:synthetic_data:> .
@prefix ns439: <urn:paradicms_etl:pipeline:synthetic_data:concept:42:> .
@prefix ns44: <urn:paradicms_etl:pipeline:synthetic_data:concept:64:CmsImage0:> .
@prefix ns440: <urn:paradicms_etl:pipeline:synthetic_data:concept:73:> .
@prefix ns441: <urn:paradicms_etl:pipeline:synthetic_data:concept:63:> .
@prefix ns442: <urn:paradicms_etl:pipeline:synthetic_data:concept:106:> .
@prefix ns443: <urn:paradicms_etl:pipeline:synthetic_data:concept:70:> .
@prefix ns444: <urn:paradicms_etl:pipeline:synthetic_data:concept:59:> .
@prefix ns445: <urn:paradicms_etl:pipeline:synthetic_data:concept:30:> .
@prefix ns446: <urn:paradicms_etl:pipeline:synthetic_data:concept:9:> .
@prefix ns45: <urn:paradicms_etl:pipeline:synthetic_data:concept:31:CmsImage1:> .
@prefix ns46: <http://example.com/collection1/work6:> .
@prefix ns47: <urn:paradicms_etl:pipeline:synthetic_data:concept:25:CmsImage1:> .
@prefix ns48: <urn:paradicms_etl:pipeline:synthetic_data:concept:22:CmsImage0:> .
@prefix ns49: <urn:paradicms_etl:pipeline:synthetic_data:concept:90:CmsImage1:> .
@prefix ns5: <http://example.com/collection1/work7:> .
@prefix ns50: <http://purl.org/vra/culturalContext:CmsImage0:> .
@prefix ns51: <urn:paradicms_etl:pipeline:synthetic_data:concept:40:CmsImage0:> .
@prefix ns52: <urn:paradicms_etl:pipeline:synthetic_data:concept:41:CmsImage0:> .
@prefix ns53: <urn:paradicms_etl:pipeline:synthetic_data:concept:0:CmsImage1:> .
@prefix ns54: <urn:paradicms_etl:pipeline:synthetic_data:concept:18:CmsImage1:> .
@prefix ns55: <http://purl.org/dc/terms/source:CmsImage1:> .
@prefix ns56: <http://example.com/collection0/work0:CmsImage0:> .
@prefix ns57: <http://example.com/freestandingwork9:CmsImage0:> .
@prefix ns58: <urn:paradicms_etl:pipeline:synthetic_data:concept:26:CmsImage1:> .
@prefix ns59: <urn:paradicms_etl:pipeline:synthetic_data:concept:26:CmsImage0:> .
@prefix ns6: <urn:paradicms_etl:pipeline:synthetic_data:concept:100:CmsImage0:> .
@prefix ns60: <http://purl.org/dc/terms/publisher:CmsImage1:> .
@prefix ns61: <http://example.com/organization1:CmsImage1:> .
@prefix ns62: <urn:paradicms_etl:pipeline:synthetic_data:concept:84:CmsImage0:> .
@prefix ns63: <urn:paradicms_etl:pipeline:synthetic_data:concept:51:CmsImage1:> .
@prefix ns64: <urn:paradicms_etl:pipeline:synthetic_data:concept:29:CmsImage1:> .
@prefix ns65: <urn:paradicms_etl:pipeline:synthetic_data:concept:103:CmsImage1:> .
@prefix ns66: <http://purl.org/dc/terms/source:> .
@prefix ns67: <urn:paradicms_etl:pipeline:synthetic_data:concept:12:CmsImage1:> .
@prefix ns68: <urn:paradicms_etl:pipeline:synthetic_data:concept:91:CmsImage0:> .
@prefix ns69: <urn:paradicms_etl:pipeline:synthetic_data:concept:101:CmsImage1:> .
@prefix ns7: <urn:paradicms_etl:pipeline:synthetic_data:concept:82:CmsImage0:> .
@prefix ns70: <urn:paradicms_etl:pipeline:synthetic_data:concept:73:CmsImage1:> .
@prefix ns71: <urn:paradicms_etl:pipeline:synthetic_data:concept:96:> .
@prefix ns72: <http://example.com/collection1:CmsImage1:> .
@prefix ns73: <urn:paradicms_etl:pipeline:synthetic_data:concept:24:CmsImage1:> .
@prefix ns74: <urn:paradicms_etl:pipeline:synthetic_data:concept:92:> .
@prefix ns75: <urn:paradicms_etl:pipeline:synthetic_data:concept:108:CmsImage1:> .
@prefix ns76: <urn:paradicms_etl:pipeline:synthetic_data:concept:60:> .
@prefix ns77: <urn:paradicms_etl:pipeline:synthetic_data:concept:42:CmsImage1:> .
@prefix ns78: <urn:paradicms_etl:pipeline:synthetic_data:concept:9:CmsImage1:> .
@prefix ns79: <urn:paradicms_etl:pipeline:synthetic_data:concept:22:CmsImage1:> .
@prefix ns8: <http://example.com/collection1/work4:CmsImage0:> .
@prefix ns80: <urn:paradicms_etl:pipeline:synthetic_data:concept:46:CmsImage1:> .
@prefix ns81: <urn:paradicms_etl:pipeline:synthetic_data:concept:17:CmsImage0:> .
@prefix ns82: <urn:paradicms_etl:pipeline:synthetic_data:concept:76:CmsImage0:> .
@prefix ns83: <urn:paradicms_etl:pipeline:synthetic_data:concept:85:CmsImage1:> .
@prefix ns84: <urn:paradicms_etl:pipeline:synthetic_data:concept:106:CmsImage0:> .
@prefix ns85: <http://example.com/freestandingwork9:CmsImage1:> .
@prefix ns86: <urn:paradicms_etl:pipeline:synthetic_data:concept:38:CmsImage0:> .
@prefix ns87: <http://purl.org/dc/terms/type:CmsImage1:> .
@prefix ns88: <http://example.com/collection1/work6:CmsImage1:> .
@prefix ns89: <urn:paradicms_etl:pipeline:synthetic_data:concept:36:> .
@prefix ns9: <urn:paradicms_etl:pipeline:synthetic_data:concept:20:> .
@prefix ns90: <urn:paradicms_etl:pipeline:synthetic_data:concept:1:CmsImage0:> .
@prefix ns91: <urn:paradicms_etl:pipeline:synthetic_data:concept:70:CmsImage1:> .
@prefix ns92: <urn:paradicms_etl:pipeline:synthetic_data:concept:49:CmsImage0:> .
@prefix ns93: <http://example.com/organization4:CmsImage1:> .
@prefix ns94: <urn:paradicms_etl:pipeline:synthetic_data:concept:81:CmsImage0:> .
@prefix ns95: <urn:paradicms_etl:pipeline:synthetic_data:concept:63:CmsImage1:> .
@prefix ns96: <urn:paradicms_etl:pipeline:synthetic_data:concept:66:CmsImage0:> .
@prefix ns97: <urn:paradicms_etl:pipeline:synthetic_data:concept:13:CmsImage1:> .
@prefix ns98: <urn:paradicms_etl:pipeline:synthetic_data:concept:82:CmsImage1:> .
@prefix ns99: <urn:paradicms_etl:pipeline:synthetic_data:concept:45:CmsImage0:> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix vra: <http://purl.org/vra/> .
@prefix wd: <http://www.wikidata.org/entity/> .
@prefix wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

ns1:102 {
    ns1:102 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 2" ;
        skos:prefLabel "CmsConcept 102" .
}

ns2:Thumbnail600x600 {
    ns343:CmsImage0 foaf:thumbnail ns2:Thumbnail600x600 .

    ns2:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns343:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:98 .
}

ns3:CmsImage0 {
    ns3:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:33 .
}

ns4:Thumbnail400x400 {
    ns373:CmsImage1 foaf:thumbnail ns4:Thumbnail400x400 .

    ns4:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns373:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:55 .
}

ns5:CmsImage0 {
    ns5:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns19:work7 .
}

ns6:Thumbnail200x200 {
    ns389:CmsImage0 foaf:thumbnail ns6:Thumbnail200x200 .

    ns6:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns389:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:100 .
}

ns7:Thumbnail600x600 {
    ns198:CmsImage0 foaf:thumbnail ns7:Thumbnail600x600 .

    ns7:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns198:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:82 .
}

ns8:Thumbnail400x400 {
    ns414:CmsImage0 foaf:thumbnail ns8:Thumbnail400x400 .

    ns8:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns414:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns19:work4 .
}

ns9:CmsImage0 {
    ns9:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:20 .
}

ns10:freestandingwork11 {
    ns10:freestandingwork11 a cms:Work ;
        dcterms:alternative "FreestandingWork11 alternative title 0",
            "FreestandingWork11 alternative title 1" ;
        dcterms:contributor _:N10d4fbfe3ca6447b9884458c2fd3ab3d,
            _:Ne04dedf4369140658373399867afd1b5 ;
        dcterms:creator ns10:organization3,
            ns10:organization4 ;
        dcterms:extent ns1:11,
            ns1:12 ;
        dcterms:identifier "FreestandingWork11Id0",
            "FreestandingWork11Id1" ;
        dcterms:language ns1:21,
            ns1:22 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns1:41,
            ns1:42 ;
        dcterms:provenance "FreestandingWork11 provenance 0",
            "FreestandingWork11 provenance 1" ;
        dcterms:publisher ns1:51,
            ns1:52 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 rights holder" ;
        dcterms:source ns1:61,
            ns1:62 ;
        dcterms:spatial ns10:freestandingwork11Location ;
        dcterms:subject ns1:81,
            ns1:82 ;
        dcterms:title "FreestandingWork11" ;
        dcterms:type ns1:101,
            ns1:102 ;
        vra:culturalContext ns1:1,
            ns1:2 ;
        vra:material ns1:31,
            ns1:32 ;
        vra:technique ns1:91,
            ns1:92 ;
        owl:sameAs wd:Q937690 .

    _:N10d4fbfe3ca6447b9884458c2fd3ab3d a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork11 contributor 1" .

    _:Ne04dedf4369140658373399867afd1b5 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork11 contributor 0" .
}

ns11:Thumbnail600x600 {
    ns140:CmsImage0 foaf:thumbnail ns11:Thumbnail600x600 .

    ns11:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Description image 0 rights holder" ;
        dcterms:title "Description image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns140:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:description .
}

ns12:Thumbnail600x600 {
    ns313:CmsImage0 foaf:thumbnail ns12:Thumbnail600x600 .

    ns12:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns313:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:32 .
}

ns13:Thumbnail200x200 {
    ns225:CmsImage1 foaf:thumbnail ns13:Thumbnail200x200 .

    ns13:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns225:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:6 .
}

ns14:Thumbnail800x800 {
    ns380:CmsImage1 foaf:thumbnail ns14:Thumbnail800x800 .

    ns14:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns380:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:64 .
}

ns12:Thumbnail400x400 {
    ns12:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns313:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:32 .

    ns313:CmsImage0 foaf:thumbnail ns12:Thumbnail400x400 .
}

dcterms:spatial {
    dcterms:spatial a cms:Property ;
        rdfs:label "Spatial" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns438:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> .
}

ns15:CmsImage1 {
    ns15:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:16 .
}

ns1:98 {
    ns1:98 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 8" ;
        skos:prefLabel "CmsConcept 98" .
}

ns16:Thumbnail600x600 {
    ns329:CmsImage0 foaf:thumbnail ns16:Thumbnail600x600 .

    ns16:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns329:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:freestandingwork10 .
}

ns17:CmsImage1 {
    ns17:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:86 .
}

ns18:CmsImage1 {
    ns18:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:74 .
}

ns19:work5Location {
    ns19:work5Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns20:Thumbnail400x400 {
    ns66:CmsImage0 foaf:thumbnail ns20:Thumbnail400x400 .

    ns20:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source image 0 rights holder" ;
        dcterms:title "Source image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns66:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:source .
}

ns21:Thumbnail200x200 {
    ns405:CmsImage1 foaf:thumbnail ns21:Thumbnail200x200 .

    ns21:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns405:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns237:work1 .
}

ns22:Thumbnail400x400 {
    ns416:CmsImage1 foaf:thumbnail ns22:Thumbnail400x400 .

    ns22:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns416:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:57 .
}

ns23:Thumbnail600x600 {
    ns354:CmsImage0 foaf:thumbnail ns23:Thumbnail600x600 .

    ns23:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns354:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:85 .
}

ns1:109 {
    ns1:109 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 9" ;
        skos:prefLabel "CmsConcept 109" .
}

ns24:Thumbnail600x600 {
    ns41:CmsImage1 foaf:thumbnail ns24:Thumbnail600x600 .

    ns24:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns41:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:97 .
}

ns25:Thumbnail600x600 {
    ns320:CmsImage1 foaf:thumbnail ns25:Thumbnail600x600 .

    ns25:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns320:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns237:work3 .
}

ns26:Thumbnail400x400 {
    ns228:CmsImage0 foaf:thumbnail ns26:Thumbnail400x400 .

    ns26:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns228:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:organization4 .
}

ns23:Thumbnail200x200 {
    ns23:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns354:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:85 .

    ns354:CmsImage0 foaf:thumbnail ns23:Thumbnail200x200 .
}

ns27:Thumbnail400x400 {
    ns396:CmsImage0 foaf:thumbnail ns27:Thumbnail400x400 .

    ns27:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:78 .
}

ns28:Thumbnail400x400 {
    ns333:CmsImage1 foaf:thumbnail ns28:Thumbnail400x400 .

    ns28:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns333:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:107 .
}

ns29:Thumbnail600x600 {
    ns89:CmsImage0 foaf:thumbnail ns29:Thumbnail600x600 .

    ns29:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns89:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:36 .
}

ns30:Thumbnail600x600 {
    ns384:CmsImage1 foaf:thumbnail ns30:Thumbnail600x600 .

    ns30:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns384:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:39 .
}

ns1:9 {
    ns1:9 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 9" ;
        skos:prefLabel "CmsConcept 9" .
}

ns31:Thumbnail200x200 {
    ns288:CmsImage1 foaf:thumbnail ns31:Thumbnail200x200 .

    ns31:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns288:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:71 .
}

ns1:26 {
    ns1:26 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 6" ;
        skos:prefLabel "CmsConcept 26" .
}

ns32:Thumbnail600x600 {
    ns150:CmsImage0 foaf:thumbnail ns32:Thumbnail600x600 .

    ns32:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns150:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:15 .
}

ns23:Thumbnail400x400 {
    ns23:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns354:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:85 .

    ns354:CmsImage0 foaf:thumbnail ns23:Thumbnail400x400 .
}

ns33:Thumbnail600x600 {
    ns390:CmsImage1 foaf:thumbnail ns33:Thumbnail600x600 .

    ns33:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns390:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:person3 .
}

ns34:Thumbnail400x400 {
    ns406:CmsImage0 foaf:thumbnail ns34:Thumbnail400x400 .

    ns34:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns406:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:58 .
}

ns35:Thumbnail200x200 {
    ns225:CmsImage0 foaf:thumbnail ns35:Thumbnail200x200 .

    ns35:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns225:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:6 .
}

ns36:Thumbnail600x600 {
    ns313:CmsImage1 foaf:thumbnail ns36:Thumbnail600x600 .

    ns36:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns313:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:32 .
}

ns37:Thumbnail600x600 {
    ns289:CmsImage1 foaf:thumbnail ns37:Thumbnail600x600 .

    ns37:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns289:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:38 .
}

ns38:Thumbnail600x600 {
    ns412:CmsImage0 foaf:thumbnail ns38:Thumbnail600x600 .

    ns38:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns412:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:37 .
}

ns39:Thumbnail400x400 {
    ns403:CmsImage1 foaf:thumbnail ns39:Thumbnail400x400 .

    ns39:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:17 .
}

ns23:Thumbnail800x800 {
    ns23:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns354:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:85 .

    ns354:CmsImage0 foaf:thumbnail ns23:Thumbnail800x800 .
}

ns40:Thumbnail800x800 {
    ns248:CmsImage0 foaf:thumbnail ns40:Thumbnail800x800 .

    ns40:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns248:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:35 .
}

ns41:CmsImage1 {
    ns41:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:97 .
}

ns42:Thumbnail200x200 {
    ns311:CmsImage1 foaf:thumbnail ns42:Thumbnail200x200 .

    ns42:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns311:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:freestandingwork8 .
}

ns43:CmsImage1 {
    ns43:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique image 1 rights holder" ;
        dcterms:title "Technique image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts vra:technique .
}

ns44:Thumbnail200x200 {
    ns380:CmsImage0 foaf:thumbnail ns44:Thumbnail200x200 .

    ns44:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns380:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:64 .
}

ns45:Thumbnail600x600 {
    ns327:CmsImage1 foaf:thumbnail ns45:Thumbnail600x600 .

    ns45:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns327:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:31 .
}

ns46:CmsImage0 {
    ns46:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns19:work6 .
}

ns47:Thumbnail600x600 {
    ns404:CmsImage1 foaf:thumbnail ns47:Thumbnail600x600 .

    ns47:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns404:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:25 .
}

ns48:Thumbnail400x400 {
    ns233:CmsImage0 foaf:thumbnail ns48:Thumbnail400x400 .

    ns48:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns233:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:22 .
}

ns22:Thumbnail200x200 {
    ns22:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns416:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:57 .

    ns416:CmsImage1 foaf:thumbnail ns22:Thumbnail200x200 .
}

ns49:Thumbnail400x400 {
    ns293:CmsImage1 foaf:thumbnail ns49:Thumbnail400x400 .

    ns49:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns293:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:90 .
}

ns50:Thumbnail600x600 {
    ns432:CmsImage0 foaf:thumbnail ns50:Thumbnail600x600 .

    ns50:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context image 0 rights holder" ;
        dcterms:title "Cultural context image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns432:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts vra:culturalContext .
}

ns51:Thumbnail800x800 {
    ns332:CmsImage0 foaf:thumbnail ns51:Thumbnail800x800 .

    ns51:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns332:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:40 .
}

ns52:Thumbnail400x400 {
    ns284:CmsImage0 foaf:thumbnail ns52:Thumbnail400x400 .

    ns52:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns284:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:41 .
}

ns53:Thumbnail400x400 {
    ns385:CmsImage1 foaf:thumbnail ns53:Thumbnail400x400 .

    ns53:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:0 .
}

ns54:Thumbnail200x200 {
    ns317:CmsImage1 foaf:thumbnail ns54:Thumbnail200x200 .

    ns54:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns317:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:18 .
}

ns55:Thumbnail800x800 {
    ns66:CmsImage1 foaf:thumbnail ns55:Thumbnail800x800 .

    ns55:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source image 1 rights holder" ;
        dcterms:title "Source image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns66:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:source .
}

ns56:Thumbnail800x800 {
    ns358:CmsImage0 foaf:thumbnail ns56:Thumbnail800x800 .

    ns56:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns358:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns237:work0 .
}

ns57:Thumbnail400x400 {
    ns431:CmsImage0 foaf:thumbnail ns57:Thumbnail400x400 .

    ns57:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns431:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:freestandingwork9 .
}

ns58:Thumbnail400x400 {
    ns356:CmsImage1 foaf:thumbnail ns58:Thumbnail400x400 .

    ns58:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns356:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:26 .
}

ns59:Thumbnail400x400 {
    ns356:CmsImage0 foaf:thumbnail ns59:Thumbnail400x400 .

    ns59:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns356:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:26 .
}

ns60:Thumbnail600x600 {
    ns130:CmsImage1 foaf:thumbnail ns60:Thumbnail600x600 .

    ns60:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher image 1 rights holder" ;
        dcterms:title "Publisher image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns130:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:publisher .
}

ns1:82 {
    ns1:82 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 2" ;
        skos:prefLabel "CmsConcept 82" .
}

ns1:92 {
    ns1:92 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 2" ;
        skos:prefLabel "CmsConcept 92" .
}

ns61:Thumbnail200x200 {
    ns276:CmsImage1 foaf:thumbnail ns61:Thumbnail200x200 .

    ns61:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns276:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:organization1 .
}

ns62:Thumbnail200x200 {
    ns399:CmsImage0 foaf:thumbnail ns62:Thumbnail200x200 .

    ns62:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:84 .
}

ns63:Thumbnail600x600 {
    ns110:CmsImage1 foaf:thumbnail ns63:Thumbnail600x600 .

    ns63:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns110:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:51 .
}

ns64:Thumbnail400x400 {
    ns153:CmsImage1 foaf:thumbnail ns64:Thumbnail400x400 .

    ns64:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns153:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:29 .
}

ns44:Thumbnail800x800 {
    ns44:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns380:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:64 .

    ns380:CmsImage0 foaf:thumbnail ns44:Thumbnail800x800 .
}

ns65:Thumbnail800x800 {
    ns220:CmsImage1 foaf:thumbnail ns65:Thumbnail800x800 .

    ns65:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns220:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:103 .
}

ns66:CmsImage0 {
    ns66:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source image 0 rights holder" ;
        dcterms:title "Source image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:source .
}

ns67:Thumbnail200x200 {
    ns295:CmsImage1 foaf:thumbnail ns67:Thumbnail200x200 .

    ns67:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns295:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:12 .
}

ns16:Thumbnail800x800 {
    ns16:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns329:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:freestandingwork10 .

    ns329:CmsImage0 foaf:thumbnail ns16:Thumbnail800x800 .
}

ns68:Thumbnail200x200 {
    ns437:CmsImage0 foaf:thumbnail ns68:Thumbnail200x200 .

    ns68:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns437:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:91 .
}

ns69:Thumbnail800x800 {
    ns250:CmsImage1 foaf:thumbnail ns69:Thumbnail800x800 .

    ns69:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns250:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:101 .
}

ns1:70 {
    ns1:70 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 0" ;
        skos:prefLabel "CmsConcept 70" .
}

ns1:51 {
    ns1:51 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 1" ;
        skos:prefLabel "CmsConcept 51" .
}

ns70:Thumbnail200x200 {
    ns440:CmsImage1 foaf:thumbnail ns70:Thumbnail200x200 .

    ns70:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns440:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:73 .
}

ns68:Thumbnail400x400 {
    ns68:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns437:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:91 .

    ns437:CmsImage0 foaf:thumbnail ns68:Thumbnail400x400 .
}

ns71:CmsImage1 {
    ns71:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:96 .
}

ns49:Thumbnail800x800 {
    ns49:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns293:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:90 .

    ns293:CmsImage1 foaf:thumbnail ns49:Thumbnail800x800 .
}

ns72:Thumbnail600x600 {
    ns307:CmsImage1 foaf:thumbnail ns72:Thumbnail600x600 .

    ns72:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns307:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:collection1 .
}

ns73:Thumbnail400x400 {
    ns300:CmsImage1 foaf:thumbnail ns73:Thumbnail400x400 .

    ns73:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns300:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:24 .
}

ns74:CmsImage0 {
    ns74:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:92 .
}

ns75:Thumbnail400x400 {
    ns169:CmsImage1 foaf:thumbnail ns75:Thumbnail400x400 .

    ns75:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns169:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:108 .
}

ns27:Thumbnail200x200 {
    ns27:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:78 .

    ns396:CmsImage0 foaf:thumbnail ns27:Thumbnail200x200 .
}

ns60:Thumbnail200x200 {
    ns60:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher image 1 rights holder" ;
        dcterms:title "Publisher image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns130:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:publisher .

    ns130:CmsImage1 foaf:thumbnail ns60:Thumbnail200x200 .
}

ns76:CmsImage1 {
    ns76:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:60 .
}

ns26:Thumbnail800x800 {
    ns26:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns228:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:organization4 .

    ns228:CmsImage0 foaf:thumbnail ns26:Thumbnail800x800 .
}

ns77:Thumbnail800x800 {
    ns439:CmsImage1 foaf:thumbnail ns77:Thumbnail800x800 .

    ns77:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns439:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:42 .
}

ns1:14 {
    ns1:14 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 4" ;
        skos:prefLabel "CmsConcept 14" .
}

ns10:organization0 {
    ns10:organization0 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 0" ;
        foaf:page ns10:organization0page .
}

ns78:Thumbnail800x800 {
    ns446:CmsImage1 foaf:thumbnail ns78:Thumbnail800x800 .

    ns78:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns446:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:9 .
}

ns79:Thumbnail400x400 {
    ns233:CmsImage1 foaf:thumbnail ns79:Thumbnail400x400 .

    ns79:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns233:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:22 .
}

ns80:Thumbnail800x800 {
    ns377:CmsImage1 foaf:thumbnail ns80:Thumbnail800x800 .

    ns80:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns377:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:46 .
}

ns81:Thumbnail800x800 {
    ns403:CmsImage0 foaf:thumbnail ns81:Thumbnail800x800 .

    ns81:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:17 .
}

vra:culturalContext {
    vra:culturalContext a cms:Property ;
        rdfs:label "Cultural context" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns438:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> .
}

ns82:Thumbnail800x800 {
    ns376:CmsImage0 foaf:thumbnail ns82:Thumbnail800x800 .

    ns82:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns376:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:76 .
}

ns83:Thumbnail400x400 {
    ns354:CmsImage1 foaf:thumbnail ns83:Thumbnail400x400 .

    ns83:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns354:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:85 .
}

ns84:Thumbnail800x800 {
    ns442:CmsImage0 foaf:thumbnail ns84:Thumbnail800x800 .

    ns84:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns442:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:106 .
}

ns85:Thumbnail400x400 {
    ns431:CmsImage1 foaf:thumbnail ns85:Thumbnail400x400 .

    ns85:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns431:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:freestandingwork9 .
}

ns70:Thumbnail600x600 {
    ns70:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns440:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:73 .

    ns440:CmsImage1 foaf:thumbnail ns70:Thumbnail600x600 .
}

ns10:collection0 {
    ns10:collection0 a cms:Collection ;
        dcterms:description _:N0783de4ad08e42aa81d01fcff398b9ab ;
        dcterms:title "CmsCollection0" .

    _:N0783de4ad08e42aa81d01fcff398b9ab a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns86:Thumbnail600x600 {
    ns289:CmsImage0 foaf:thumbnail ns86:Thumbnail600x600 .

    ns86:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns289:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:38 .
}

ns87:Thumbnail400x400 {
    ns350:CmsImage1 foaf:thumbnail ns87:Thumbnail400x400 .

    ns87:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type image 1 rights holder" ;
        dcterms:title "Type image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns350:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:type .
}

ns88:Thumbnail800x800 {
    ns46:CmsImage1 foaf:thumbnail ns88:Thumbnail800x800 .

    ns88:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns46:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns19:work6 .
}

ns89:CmsImage1 {
    ns89:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:36 .
}

ns90:Thumbnail400x400 {
    ns425:CmsImage0 foaf:thumbnail ns90:Thumbnail400x400 .

    ns90:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns425:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:1 .
}

ns91:Thumbnail800x800 {
    ns443:CmsImage1 foaf:thumbnail ns91:Thumbnail800x800 .

    ns91:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns443:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:70 .
}

ns92:Thumbnail200x200 {
    ns312:CmsImage0 foaf:thumbnail ns92:Thumbnail200x200 .

    ns92:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns312:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:49 .
}

ns63:Thumbnail800x800 {
    ns63:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns110:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:51 .

    ns110:CmsImage1 foaf:thumbnail ns63:Thumbnail800x800 .
}

ns27:Thumbnail800x800 {
    ns27:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:78 .

    ns396:CmsImage0 foaf:thumbnail ns27:Thumbnail800x800 .
}

ns93:Thumbnail600x600 {
    ns228:CmsImage1 foaf:thumbnail ns93:Thumbnail600x600 .

    ns93:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns228:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:organization4 .
}

ns1:57 {
    ns1:57 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 7" ;
        skos:prefLabel "CmsConcept 57" .
}

ns94:Thumbnail400x400 {
    ns336:CmsImage0 foaf:thumbnail ns94:Thumbnail400x400 .

    ns94:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns336:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:81 .
}

ns95:Thumbnail400x400 {
    ns441:CmsImage1 foaf:thumbnail ns95:Thumbnail400x400 .

    ns95:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns441:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:63 .
}

ns96:Thumbnail400x400 {
    ns229:CmsImage0 foaf:thumbnail ns96:Thumbnail400x400 .

    ns96:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns229:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:66 .
}

ns97:Thumbnail600x600 {
    ns124:CmsImage1 foaf:thumbnail ns97:Thumbnail600x600 .

    ns97:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns124:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:13 .
}

ns98:Thumbnail400x400 {
    ns198:CmsImage1 foaf:thumbnail ns98:Thumbnail400x400 .

    ns98:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns198:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:82 .
}

ns99:Thumbnail400x400 {
    ns355:CmsImage0 foaf:thumbnail ns99:Thumbnail400x400 .

    ns99:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns355:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:45 .
}

ns1:80 {
    ns1:80 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 0" ;
        skos:prefLabel "CmsConcept 80" .
}

ns100:Thumbnail800x800 {
    ns383:CmsImage0 foaf:thumbnail ns100:Thumbnail800x800 .

    ns100:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns383:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:79 .
}

ns101:Thumbnail200x200 {
    ns129:CmsImage0 foaf:thumbnail ns101:Thumbnail200x200 .

    ns101:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns129:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:67 .
}

ns102:Thumbnail600x600 {
    ns316:CmsImage1 foaf:thumbnail ns102:Thumbnail600x600 .

    ns102:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns316:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:65 .
}

ns103:Thumbnail400x400 {
    ns420:CmsImage0 foaf:thumbnail ns103:Thumbnail400x400 .

    ns103:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns420:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:27 .
}

ns104:Thumbnail600x600 {
    ns384:CmsImage0 foaf:thumbnail ns104:Thumbnail600x600 .

    ns104:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns384:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:39 .
}

ns105:Thumbnail600x600 {
    ns434:CmsImage0 foaf:thumbnail ns105:Thumbnail600x600 .

    ns105:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns434:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:14 .
}

ns106:Thumbnail800x800 {
    ns397:CmsImage0 foaf:thumbnail ns106:Thumbnail800x800 .

    ns106:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns397:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:3 .
}

ns107:Thumbnail600x600 {
    ns197:CmsImage0 foaf:thumbnail ns107:Thumbnail600x600 .

    ns107:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns197:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:organization3 .
}

ns108:Thumbnail200x200 {
    ns360:CmsImage0 foaf:thumbnail ns108:Thumbnail200x200 .

    ns108:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns360:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:62 .
}

ns50:Thumbnail400x400 {
    ns50:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context image 0 rights holder" ;
        dcterms:title "Cultural context image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns432:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts vra:culturalContext .

    ns432:CmsImage0 foaf:thumbnail ns50:Thumbnail400x400 .
}

ns109:Thumbnail200x200 {
    ns315:CmsImage0 foaf:thumbnail ns109:Thumbnail200x200 .

    ns109:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns315:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:102 .
}

ns110:CmsImage1 {
    ns110:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:51 .
}

ns111:Thumbnail600x600 {
    ns317:CmsImage0 foaf:thumbnail ns111:Thumbnail600x600 .

    ns111:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns317:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:18 .
}

ns10:freestandingwork10 {
    ns10:freestandingwork10 a cms:Work ;
        dcterms:alternative "FreestandingWork10 alternative title 0",
            "FreestandingWork10 alternative title 1" ;
        dcterms:contributor _:Naa4804dcaecb420e9406225e5097feac,
            _:Nfd23267357a64200a4be9f1ade73992d ;
        dcterms:creator ns10:organization2,
            ns10:organization3 ;
        dcterms:description _:Nb0b286586234435e92539fd3146f4f80 ;
        dcterms:extent ns1:10,
            ns1:11 ;
        dcterms:identifier "FreestandingWork10Id0",
            "FreestandingWork10Id1" ;
        dcterms:language ns1:20,
            ns1:21 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns1:40,
            ns1:41 ;
        dcterms:provenance "FreestandingWork10 provenance 0",
            "FreestandingWork10 provenance 1" ;
        dcterms:publisher ns1:50,
            ns1:51 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 rights holder" ;
        dcterms:source ns1:60,
            ns1:61 ;
        dcterms:spatial ns10:freestandingwork10Location ;
        dcterms:subject ns1:80,
            ns1:81 ;
        dcterms:title "FreestandingWork10" ;
        dcterms:type ns1:100,
            ns1:101 ;
        vra:culturalContext ns1:0,
            ns1:1 ;
        vra:material ns1:30,
            ns1:31 ;
        vra:technique ns1:90,
            ns1:91 ;
        owl:sameAs wd:Q937690 ;
        foaf:page <http://example.com/work/10> .

    _:Naa4804dcaecb420e9406225e5097feac a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork10 contributor 0" .

    _:Nb0b286586234435e92539fd3146f4f80 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:Nfd23267357a64200a4be9f1ade73992d a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork10 contributor 1" .
}

ns112:Thumbnail600x600 {
    ns437:CmsImage1 foaf:thumbnail ns112:Thumbnail600x600 .

    ns112:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns437:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:91 .
}

ns113:Thumbnail400x400 {
    ns113:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns46:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns19:work6 .

    ns46:CmsImage0 foaf:thumbnail ns113:Thumbnail400x400 .
}

ns114:CmsImage0 {
    ns114:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:93 .
}

ns115:Thumbnail400x400 {
    ns280:CmsImage0 foaf:thumbnail ns115:Thumbnail400x400 .

    ns115:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns280:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:80 .
}

ns116:Thumbnail600x600 {
    ns335:CmsImage0 foaf:thumbnail ns116:Thumbnail600x600 .

    ns116:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns335:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:54 .
}

ns117:Thumbnail600x600 {
    ns117:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns114:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:93 .

    ns114:CmsImage0 foaf:thumbnail ns117:Thumbnail600x600 .
}

ns118:CmsImage1 {
    ns118:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language image 1 rights holder" ;
        dcterms:title "Language image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:language .
}

ns119:Thumbnail600x600 {
    ns119:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns3:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:33 .

    ns3:CmsImage0 foaf:thumbnail ns119:Thumbnail600x600 .
}

ns120:Thumbnail400x400 {
    ns18:CmsImage0 foaf:thumbnail ns120:Thumbnail400x400 .

    ns120:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns18:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:74 .
}

ns104:Thumbnail800x800 {
    ns104:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns384:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:39 .

    ns384:CmsImage0 foaf:thumbnail ns104:Thumbnail800x800 .
}

ns121:Thumbnail600x600 {
    ns300:CmsImage0 foaf:thumbnail ns121:Thumbnail600x600 .

    ns121:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns300:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:24 .
}

ns122:Thumbnail800x800 {
    ns122:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns9:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:20 .

    ns9:CmsImage0 foaf:thumbnail ns122:Thumbnail800x800 .
}

ns123:CmsImage0 {
    ns123:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial image 0 rights holder" ;
        dcterms:title "Spatial image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:spatial .
}

ns124:CmsImage1 {
    ns124:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:13 .
}

ns125:Thumbnail800x800 {
    ns428:CmsImage1 foaf:thumbnail ns125:Thumbnail800x800 .

    ns125:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns428:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:83 .
}

ns126:Thumbnail400x400 {
    ns156:CmsImage0 foaf:thumbnail ns126:Thumbnail400x400 .

    ns126:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 0 rights holder" ;
        dcterms:title "Synthetic data properties image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns156:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns438:property_group .
}

_:Nc1fee9b79e3b4b8c8e67cbfa21556a45 {
    _:Nc1fee9b79e3b4b8c8e67cbfa21556a45 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N666d44be377445239b4c5b0223e603a0 ;
        dcterms:title "CmsCollection0CmsWork1 closing" ;
        cms:work ns237:work1 .

    _:N666d44be377445239b4c5b0223e603a0 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns127:Thumbnail800x800 {
    ns76:CmsImage0 foaf:thumbnail ns127:Thumbnail800x800 .

    ns127:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns76:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:60 .
}

ns48:Thumbnail600x600 {
    ns48:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns233:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:22 .

    ns233:CmsImage0 foaf:thumbnail ns48:Thumbnail600x600 .
}

ns112:Thumbnail200x200 {
    ns112:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns437:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:91 .

    ns437:CmsImage1 foaf:thumbnail ns112:Thumbnail200x200 .
}

ns128:Thumbnail400x400 {
    ns245:CmsImage1 foaf:thumbnail ns128:Thumbnail400x400 .

    ns128:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns245:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:7 .
}

ns129:CmsImage0 {
    ns129:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:67 .
}

ns130:CmsImage1 {
    ns130:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher image 1 rights holder" ;
        dcterms:title "Publisher image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:publisher .
}

ns55:Thumbnail200x200 {
    ns55:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source image 1 rights holder" ;
        dcterms:title "Source image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns66:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:source .

    ns66:CmsImage1 foaf:thumbnail ns55:Thumbnail200x200 .
}

ns53:Thumbnail800x800 {
    ns53:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:0 .

    ns385:CmsImage1 foaf:thumbnail ns53:Thumbnail800x800 .
}

ns128:Thumbnail200x200 {
    ns128:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns245:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:7 .

    ns245:CmsImage1 foaf:thumbnail ns128:Thumbnail200x200 .
}

ns131:Thumbnail800x800 {
    ns319:CmsImage1 foaf:thumbnail ns131:Thumbnail800x800 .

    ns131:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns319:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:11 .
}

ns132:Thumbnail400x400 {
    ns398:CmsImage1 foaf:thumbnail ns132:Thumbnail400x400 .

    ns132:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns398:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:89 .
}

ns133:Thumbnail200x200 {
    ns397:CmsImage1 foaf:thumbnail ns133:Thumbnail200x200 .

    ns133:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns397:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:3 .
}

ns134:Thumbnail600x600 {
    ns203:CmsImage0 foaf:thumbnail ns134:Thumbnail600x600 .

    ns134:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns203:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:109 .
}

ns1:34 {
    ns1:34 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 4" ;
        skos:prefLabel "CmsConcept 34" .
}

ns135:Thumbnail600x600 {
    ns412:CmsImage1 foaf:thumbnail ns135:Thumbnail600x600 .

    ns135:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns412:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:37 .
}

ns136:Thumbnail600x600 {
    ns365:CmsImage1 foaf:thumbnail ns136:Thumbnail600x600 .

    ns136:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:69 .
}

ns137:Thumbnail400x400 {
    ns434:CmsImage1 foaf:thumbnail ns137:Thumbnail400x400 .

    ns137:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns434:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:14 .
}

ns138:Thumbnail400x400 {
    ns441:CmsImage0 foaf:thumbnail ns138:Thumbnail400x400 .

    ns138:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns441:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:63 .
}

ns1:15 {
    ns1:15 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 5" ;
        skos:prefLabel "CmsConcept 15" .
}

ns139:Thumbnail200x200 {
    ns262:CmsImage1 foaf:thumbnail ns139:Thumbnail200x200 .

    ns139:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns262:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:94 .
}

ns131:Thumbnail200x200 {
    ns131:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns319:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:11 .

    ns319:CmsImage1 foaf:thumbnail ns131:Thumbnail200x200 .
}

ns140:CmsImage0 {
    ns140:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Description image 0 rights holder" ;
        dcterms:title "Description image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:description .
}

ns141:Thumbnail800x800 {
    ns429:CmsImage0 foaf:thumbnail ns141:Thumbnail800x800 .

    ns141:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns429:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:4 .
}

ns142:Thumbnail600x600 {
    ns387:CmsImage1 foaf:thumbnail ns142:Thumbnail600x600 .

    ns142:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns387:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:105 .
}

ns143:Thumbnail400x400 {
    ns360:CmsImage1 foaf:thumbnail ns143:Thumbnail400x400 .

    ns143:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns360:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:62 .
}

ns144:Thumbnail400x400 {
    ns140:CmsImage1 foaf:thumbnail ns144:Thumbnail400x400 .

    ns144:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Description image 1 rights holder" ;
        dcterms:title "Description image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns140:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:description .
}

ns72:Thumbnail400x400 {
    ns72:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns307:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:collection1 .

    ns307:CmsImage1 foaf:thumbnail ns72:Thumbnail400x400 .
}

ns10:collection1 {
    ns10:collection1 a cms:Collection ;
        dcterms:title "CmsCollection1" .
}

ns79:Thumbnail200x200 {
    ns79:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns233:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:22 .

    ns233:CmsImage1 foaf:thumbnail ns79:Thumbnail200x200 .
}

ns102:Thumbnail400x400 {
    ns102:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns316:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:65 .

    ns316:CmsImage1 foaf:thumbnail ns102:Thumbnail400x400 .
}

ns145:Thumbnail600x600 {
    ns389:CmsImage1 foaf:thumbnail ns145:Thumbnail600x600 .

    ns145:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns389:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:100 .
}

ns146:CmsImage0 {
    ns146:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium image 0 rights holder" ;
        dcterms:title "Medium image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:medium .
}

ns114:CmsImage1 {
    ns114:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:93 .
}

ns147:Thumbnail200x200 {
    ns123:CmsImage1 foaf:thumbnail ns147:Thumbnail200x200 .

    ns147:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial image 1 rights holder" ;
        dcterms:title "Spatial image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns123:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:spatial .
}

ns148:Thumbnail800x800 {
    ns148:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns18:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:74 .

    ns18:CmsImage1 foaf:thumbnail ns148:Thumbnail800x800 .
}

ns103:Thumbnail800x800 {
    ns103:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns420:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:27 .

    ns420:CmsImage0 foaf:thumbnail ns103:Thumbnail800x800 .
}

ns147:Thumbnail600x600 {
    ns147:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial image 1 rights holder" ;
        dcterms:title "Spatial image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns123:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:spatial .

    ns123:CmsImage1 foaf:thumbnail ns147:Thumbnail600x600 .
}

ns149:Thumbnail600x600 {
    ns324:CmsImage0 foaf:thumbnail ns149:Thumbnail600x600 .

    ns149:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Title image 0 rights holder" ;
        dcterms:title "Title image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns324:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:title .
}

ns150:CmsImage0 {
    ns150:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:15 .
}

ns151:CmsImage1 {
    ns151:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:person0 .
}

ns152:Thumbnail200x200 {
    ns436:CmsImage0 foaf:thumbnail ns152:Thumbnail200x200 .

    ns152:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns436:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns19:work5 .
}

ns153:CmsImage0 {
    ns153:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:29 .
}

ns1:43 {
    ns1:43 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 3" ;
        skos:prefLabel "CmsConcept 43" .
}

ns86:Thumbnail800x800 {
    ns86:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns289:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:38 .

    ns289:CmsImage0 foaf:thumbnail ns86:Thumbnail800x800 .
}

ns32:Thumbnail400x400 {
    ns32:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns150:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:15 .

    ns150:CmsImage0 foaf:thumbnail ns32:Thumbnail400x400 .
}

ns154:Thumbnail800x800 {
    ns293:CmsImage0 foaf:thumbnail ns154:Thumbnail800x800 .

    ns154:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns293:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:90 .
}

ns155:Thumbnail200x200 {
    ns150:CmsImage1 foaf:thumbnail ns155:Thumbnail200x200 .

    ns155:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns150:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:15 .
}

ns125:Thumbnail400x400 {
    ns125:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns428:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:83 .

    ns428:CmsImage1 foaf:thumbnail ns125:Thumbnail400x400 .
}

ns156:CmsImage1 {
    ns156:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 1 rights holder" ;
        dcterms:title "Synthetic data properties image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns438:property_group .
}

ns136:Thumbnail400x400 {
    ns136:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:69 .

    ns365:CmsImage1 foaf:thumbnail ns136:Thumbnail400x400 .
}

ns157:CmsImage1 {
    ns157:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:person1 .
}

ns158:Thumbnail800x800 {
    ns158:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns151:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:person0 .

    ns151:CmsImage1 foaf:thumbnail ns158:Thumbnail800x800 .
}

ns159:Thumbnail800x800 {
    ns436:CmsImage1 foaf:thumbnail ns159:Thumbnail800x800 .

    ns159:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns436:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns19:work5 .
}

ns160:Thumbnail600x600 {
    ns319:CmsImage0 foaf:thumbnail ns160:Thumbnail600x600 .

    ns160:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns319:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:11 .
}

ns130:CmsImage0 {
    ns130:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher image 0 rights holder" ;
        dcterms:title "Publisher image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:publisher .
}

ns6:Thumbnail600x600 {
    ns6:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns389:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:100 .

    ns389:CmsImage0 foaf:thumbnail ns6:Thumbnail600x600 .
}

ns126:Thumbnail200x200 {
    ns126:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 0 rights holder" ;
        dcterms:title "Synthetic data properties image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns156:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns438:property_group .

    ns156:CmsImage0 foaf:thumbnail ns126:Thumbnail200x200 .
}

ns1:74 {
    ns1:74 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 4" ;
        skos:prefLabel "CmsConcept 74" .
}

ns161:Thumbnail200x200 {
    ns217:CmsImage0 foaf:thumbnail ns161:Thumbnail200x200 .

    ns161:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns217:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:23 .
}

ns162:Thumbnail600x600 {
    ns162:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns71:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:96 .

    ns71:CmsImage1 foaf:thumbnail ns162:Thumbnail600x600 .
}

ns119:Thumbnail800x800 {
    ns119:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns3:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:33 .

    ns3:CmsImage0 foaf:thumbnail ns119:Thumbnail800x800 .
}

ns50:Thumbnail200x200 {
    ns50:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context image 0 rights holder" ;
        dcterms:title "Cultural context image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns432:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts vra:culturalContext .

    ns432:CmsImage0 foaf:thumbnail ns50:Thumbnail200x200 .
}

ns19:work7Creation {
    ns19:work7Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns10:organization0,
            ns10:person4 ;
        dcterms:date _:Ne8ab5d6ce1964f31b9f779b4f5acaedb ;
        dcterms:spatial ns19:work7Location ;
        dcterms:title "CmsCollection1CmsWork7 creation" ;
        cms:work ns19:work7 .

    _:Ne8ab5d6ce1964f31b9f779b4f5acaedb a cms:DateTimeDescription ;
        time:day "---25"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns163:Thumbnail200x200 {
    ns440:CmsImage0 foaf:thumbnail ns163:Thumbnail200x200 .

    ns163:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns440:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:73 .
}

ns75:Thumbnail800x800 {
    ns75:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns169:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:108 .

    ns169:CmsImage1 foaf:thumbnail ns75:Thumbnail800x800 .
}

ns119:Thumbnail200x200 {
    ns119:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns3:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:33 .

    ns3:CmsImage0 foaf:thumbnail ns119:Thumbnail200x200 .
}

ns164:Thumbnail400x400 {
    ns164:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns17:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:86 .

    ns17:CmsImage1 foaf:thumbnail ns164:Thumbnail400x400 .
}

ns165:Thumbnail200x200 {
    ns427:CmsImage1 foaf:thumbnail ns165:Thumbnail200x200 .

    ns165:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns427:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns237:work2 .
}

ns166:Thumbnail400x400 {
    ns169:CmsImage0 foaf:thumbnail ns166:Thumbnail400x400 .

    ns166:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns169:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:108 .
}

ns167:Thumbnail800x800 {
    ns179:CmsImage0 foaf:thumbnail ns167:Thumbnail800x800 .

    ns167:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns179:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:43 .
}

ns112:Thumbnail400x400 {
    ns112:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns437:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:91 .

    ns437:CmsImage1 foaf:thumbnail ns112:Thumbnail400x400 .
}

ns168:Thumbnail400x400 {
    ns168:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns5:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns19:work7 .

    ns5:CmsImage0 foaf:thumbnail ns168:Thumbnail400x400 .
}

ns169:CmsImage1 {
    ns169:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:108 .
}

ns170:Thumbnail200x200 {
    ns377:CmsImage0 foaf:thumbnail ns170:Thumbnail200x200 .

    ns170:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns377:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:46 .
}

ns171:Thumbnail400x400 {
    ns5:CmsImage1 foaf:thumbnail ns171:Thumbnail400x400 .

    ns171:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns5:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns19:work7 .
}

ns172:Thumbnail600x600 {
    ns258:CmsImage1 foaf:thumbnail ns172:Thumbnail600x600 .

    ns172:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns258:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:freestandingwork11 .
}

ns173:Thumbnail400x400 {
    ns311:CmsImage0 foaf:thumbnail ns173:Thumbnail400x400 .

    ns173:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns311:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:freestandingwork8 .
}

ns174:CmsImage0 {
    ns174:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:organization0 .
}

ns175:Thumbnail400x400 {
    ns296:CmsImage1 foaf:thumbnail ns175:Thumbnail400x400 .

    ns175:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns296:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:50 .
}

ns176:Thumbnail800x800 {
    ns435:CmsImage0 foaf:thumbnail ns176:Thumbnail800x800 .

    ns176:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns435:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:8 .
}

ns177:Thumbnail600x600 {
    ns350:CmsImage0 foaf:thumbnail ns177:Thumbnail600x600 .

    ns177:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type image 0 rights holder" ;
        dcterms:title "Type image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns350:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:type .
}

ns178:Thumbnail400x400 {
    ns3:CmsImage1 foaf:thumbnail ns178:Thumbnail400x400 .

    ns178:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns3:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:33 .
}

ns179:CmsImage0 {
    ns179:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:43 .
}

ns47:Thumbnail400x400 {
    ns47:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns404:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:25 .

    ns404:CmsImage1 foaf:thumbnail ns47:Thumbnail400x400 .
}

ns180:CmsImage1 {
    ns180:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:organization2 .
}

ns113:Thumbnail600x600 {
    ns113:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns46:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns19:work6 .

    ns46:CmsImage0 foaf:thumbnail ns113:Thumbnail600x600 .
}

ns117:Thumbnail800x800 {
    ns117:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns114:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:93 .

    ns114:CmsImage0 foaf:thumbnail ns117:Thumbnail800x800 .
}

ns181:Thumbnail400x400 {
    ns283:CmsImage0 foaf:thumbnail ns181:Thumbnail400x400 .

    ns181:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns283:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:5 .
}

ns182:Thumbnail600x600 {
    ns248:CmsImage1 foaf:thumbnail ns182:Thumbnail600x600 .

    ns182:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns248:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:35 .
}

ns183:Thumbnail400x400 {
    ns183:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher image 0 rights holder" ;
        dcterms:title "Publisher image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns130:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:publisher .

    ns130:CmsImage0 foaf:thumbnail ns183:Thumbnail400x400 .
}

ns184:CmsImage1 {
    ns184:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:34 .
}

ns185:Thumbnail200x200 {
    ns229:CmsImage1 foaf:thumbnail ns185:Thumbnail200x200 .

    ns185:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns229:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:66 .
}

dcterms:medium {
    dcterms:medium a cms:Property ;
        rdfs:label "Medium" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns438:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> .
}

ns32:Thumbnail800x800 {
    ns32:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns150:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:15 .

    ns150:CmsImage0 foaf:thumbnail ns32:Thumbnail800x800 .
}

ns104:Thumbnail200x200 {
    ns104:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns384:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:39 .

    ns384:CmsImage0 foaf:thumbnail ns104:Thumbnail200x200 .
}

ns186:Thumbnail800x800 {
    ns386:CmsImage0 foaf:thumbnail ns186:Thumbnail800x800 .

    ns186:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns386:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:28 .
}

ns30:Thumbnail400x400 {
    ns30:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns384:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:39 .

    ns384:CmsImage1 foaf:thumbnail ns30:Thumbnail400x400 .
}

ns187:Thumbnail200x200 {
    ns423:CmsImage0 foaf:thumbnail ns187:Thumbnail200x200 .

    ns187:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns423:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:68 .
}

ns68:Thumbnail600x600 {
    ns68:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns437:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:91 .

    ns437:CmsImage0 foaf:thumbnail ns68:Thumbnail600x600 .
}

ns10:freestandingwork8Opening {
    ns10:freestandingwork8Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-24"^^xsd:date ;
        dcterms:description _:N1de0a484f7964734b7ddb81d87a5feef ;
        dcterms:spatial _:Nf845656569cc40a1a30af82d95fffdbe ;
        dcterms:title "FreestandingWork8 opening" ;
        cms:work ns10:freestandingwork8 .

    _:N1de0a484f7964734b7ddb81d87a5feef a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:Nf845656569cc40a1a30af82d95fffdbe a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns188:CmsImage1 {
    ns188:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:56 .
}

ns189:Thumbnail400x400 {
    ns9:CmsImage1 foaf:thumbnail ns189:Thumbnail400x400 .

    ns189:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns9:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:20 .
}

ns190:Thumbnail600x600 {
    ns214:CmsImage1 foaf:thumbnail ns190:Thumbnail600x600 .

    ns190:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns214:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:52 .
}

ns191:Thumbnail400x400 {
    ns208:CmsImage1 foaf:thumbnail ns191:Thumbnail400x400 .

    ns191:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns208:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:75 .
}

ns2:Thumbnail200x200 {
    ns2:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns343:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:98 .

    ns343:CmsImage0 foaf:thumbnail ns2:Thumbnail200x200 .
}

ns192:Thumbnail400x400 {
    ns174:CmsImage1 foaf:thumbnail ns192:Thumbnail400x400 .

    ns192:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns174:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:organization0 .
}

ns49:Thumbnail200x200 {
    ns49:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns293:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:90 .

    ns293:CmsImage1 foaf:thumbnail ns49:Thumbnail200x200 .
}

ns170:Thumbnail800x800 {
    ns170:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns377:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:46 .

    ns377:CmsImage0 foaf:thumbnail ns170:Thumbnail800x800 .
}

ns1:76 {
    ns1:76 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 6" ;
        skos:prefLabel "CmsConcept 76" .
}

ns107:Thumbnail200x200 {
    ns107:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns197:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:organization3 .

    ns197:CmsImage0 foaf:thumbnail ns107:Thumbnail200x200 .
}

ns193:Thumbnail200x200 {
    ns385:CmsImage0 foaf:thumbnail ns193:Thumbnail200x200 .

    ns193:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:0 .
}

ns40:Thumbnail200x200 {
    ns40:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns248:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:35 .

    ns248:CmsImage0 foaf:thumbnail ns40:Thumbnail200x200 .
}

ns194:Thumbnail800x800 {
    ns396:CmsImage1 foaf:thumbnail ns194:Thumbnail800x800 .

    ns194:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:78 .
}

ns195:CmsImage0 {
    ns195:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:person4 .
}

ns1:24 {
    ns1:24 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 4" ;
        skos:prefLabel "CmsConcept 24" .
}

ns196:Thumbnail800x800 {
    ns196:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium image 0 rights holder" ;
        dcterms:title "Medium image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns146:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:medium .

    ns146:CmsImage0 foaf:thumbnail ns196:Thumbnail800x800 .
}

ns197:CmsImage1 {
    ns197:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:organization3 .
}

ns81:Thumbnail200x200 {
    ns81:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:17 .

    ns403:CmsImage0 foaf:thumbnail ns81:Thumbnail200x200 .
}

ns198:CmsImage1 {
    ns198:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:82 .
}

ns199:Thumbnail600x600 {
    ns199:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns184:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:34 .

    ns184:CmsImage1 foaf:thumbnail ns199:Thumbnail600x600 .
}

ns45:Thumbnail200x200 {
    ns45:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns327:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:31 .

    ns327:CmsImage1 foaf:thumbnail ns45:Thumbnail200x200 .
}

ns200:Thumbnail200x200 {
    ns254:CmsImage0 foaf:thumbnail ns200:Thumbnail200x200 .

    ns200:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns254:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:10 .
}

ns201:Thumbnail600x600 {
    ns201:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns153:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:29 .

    ns153:CmsImage0 foaf:thumbnail ns201:Thumbnail600x600 .
}

ns202:Thumbnail200x200 {
    ns349:CmsImage1 foaf:thumbnail ns202:Thumbnail200x200 .

    ns202:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns349:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:72 .
}

ns203:CmsImage1 {
    ns203:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:109 .
}

ns172:Thumbnail800x800 {
    ns172:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns258:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:freestandingwork11 .

    ns258:CmsImage1 foaf:thumbnail ns172:Thumbnail800x800 .
}

ns1:106 {
    ns1:106 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 6" ;
        skos:prefLabel "CmsConcept 106" .
}

ns204:Thumbnail200x200 {
    ns339:CmsImage1 foaf:thumbnail ns204:Thumbnail200x200 .

    ns204:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns339:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:53 .
}

ns75:Thumbnail200x200 {
    ns75:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns169:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:108 .

    ns169:CmsImage1 foaf:thumbnail ns75:Thumbnail200x200 .
}

ns143:Thumbnail600x600 {
    ns143:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns360:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:62 .

    ns360:CmsImage1 foaf:thumbnail ns143:Thumbnail600x600 .
}

ns19:work6 {
    ns19:work6 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork6 alternative title 0",
            "CmsCollection1CmsWork6 alternative title 1" ;
        dcterms:contributor _:N2bdabfca538c4a4e91592a279ed833f0,
            _:Ne344e4935e1b4fc487d544f29122f714 ;
        dcterms:creator ns10:person3,
            ns10:person4 ;
        dcterms:description _:Nb6ab2a7cb06c4a8e8b68a369ca0a0b31 ;
        dcterms:extent ns1:16,
            ns1:17 ;
        dcterms:identifier "CmsCollection1CmsWork6Id0",
            "CmsCollection1CmsWork6Id1" ;
        dcterms:language ns1:26,
            ns1:27 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns1:46,
            ns1:47 ;
        dcterms:provenance "CmsCollection1CmsWork6 provenance 0",
            "CmsCollection1CmsWork6 provenance 1" ;
        dcterms:publisher ns1:56,
            ns1:57 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 rights holder" ;
        dcterms:source ns1:66,
            ns1:67 ;
        dcterms:spatial ns19:work6Location ;
        dcterms:subject ns1:86,
            ns1:87 ;
        dcterms:title "CmsCollection1CmsWork6" ;
        dcterms:type ns1:106,
            ns1:107 ;
        vra:culturalContext ns1:6,
            ns1:7 ;
        vra:material ns1:36,
            ns1:37 ;
        vra:technique ns1:96,
            ns1:97 ;
        cms:collection ns10:collection1 ;
        owl:sameAs wd:Q937690 ;
        foaf:page <http://example.com/work/6> .

    _:N2bdabfca538c4a4e91592a279ed833f0 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork6 contributor 1" .

    _:Nb6ab2a7cb06c4a8e8b68a369ca0a0b31 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:Ne344e4935e1b4fc487d544f29122f714 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork6 contributor 0" .
}

ns1:54 {
    ns1:54 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 4" ;
        skos:prefLabel "CmsConcept 54" .
}

ns205:Thumbnail800x800 {
    ns205:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial image 0 rights holder" ;
        dcterms:title "Spatial image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns123:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:spatial .

    ns123:CmsImage0 foaf:thumbnail ns205:Thumbnail800x800 .
}

ns1:100 {
    ns1:100 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 0" ;
        skos:prefLabel "CmsConcept 100" .
}

ns173:Thumbnail200x200 {
    ns173:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns311:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:freestandingwork8 .

    ns311:CmsImage0 foaf:thumbnail ns173:Thumbnail200x200 .
}

ns188:CmsImage0 {
    ns188:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:56 .
}

ns199:Thumbnail200x200 {
    ns199:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns184:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:34 .

    ns184:CmsImage1 foaf:thumbnail ns199:Thumbnail200x200 .
}

ns137:Thumbnail200x200 {
    ns137:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns434:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:14 .

    ns434:CmsImage1 foaf:thumbnail ns137:Thumbnail200x200 .
}

ns206:Thumbnail400x400 {
    ns245:CmsImage0 foaf:thumbnail ns206:Thumbnail400x400 .

    ns206:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns245:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:7 .
}

ns207:Thumbnail400x400 {
    ns306:CmsImage0 foaf:thumbnail ns207:Thumbnail400x400 .

    ns207:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns306:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:person2 .
}

ns208:CmsImage1 {
    ns208:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:75 .
}

ns209:Thumbnail800x800 {
    ns307:CmsImage0 foaf:thumbnail ns209:Thumbnail800x800 .

    ns209:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns307:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:collection1 .
}

ns210:Thumbnail800x800 {
    ns395:CmsImage0 foaf:thumbnail ns210:Thumbnail800x800 .

    ns210:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns395:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:61 .
}

ns211:Thumbnail800x800 {
    ns420:CmsImage1 foaf:thumbnail ns211:Thumbnail800x800 .

    ns211:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns420:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:27 .
}

dcterms:extent {
    dcterms:extent a cms:Property ;
        rdfs:label "Extent" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns438:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> .
}

ns39:Thumbnail200x200 {
    ns39:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:17 .

    ns403:CmsImage1 foaf:thumbnail ns39:Thumbnail200x200 .
}

ns14:Thumbnail600x600 {
    ns14:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns380:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:64 .

    ns380:CmsImage1 foaf:thumbnail ns14:Thumbnail600x600 .
}

ns40:Thumbnail400x400 {
    ns40:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns248:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:35 .

    ns248:CmsImage0 foaf:thumbnail ns40:Thumbnail400x400 .
}

ns212:Thumbnail400x400 {
    ns294:CmsImage1 foaf:thumbnail ns212:Thumbnail400x400 .

    ns212:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns294:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:99 .
}

ns213:Thumbnail800x800 {
    ns214:CmsImage0 foaf:thumbnail ns213:Thumbnail800x800 .

    ns213:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns214:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:52 .
}

ns214:CmsImage0 {
    ns214:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:52 .
}

ns16:Thumbnail400x400 {
    ns16:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns329:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:freestandingwork10 .

    ns329:CmsImage0 foaf:thumbnail ns16:Thumbnail400x400 .
}

ns1:79 {
    ns1:79 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 9" ;
        skos:prefLabel "CmsConcept 79" .
}

ns215:Thumbnail800x800 {
    ns146:CmsImage1 foaf:thumbnail ns215:Thumbnail800x800 .

    ns215:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium image 1 rights holder" ;
        dcterms:title "Medium image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns146:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:medium .
}

ns216:Thumbnail400x400 {
    ns184:CmsImage0 foaf:thumbnail ns216:Thumbnail400x400 .

    ns216:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns184:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:34 .
}

ns217:CmsImage1 {
    ns217:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:23 .
}

ns30:Thumbnail800x800 {
    ns30:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns384:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:39 .

    ns384:CmsImage1 foaf:thumbnail ns30:Thumbnail800x800 .
}

ns218:Thumbnail200x200 {
    ns443:CmsImage0 foaf:thumbnail ns218:Thumbnail200x200 .

    ns218:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns443:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:70 .
}

ns164:Thumbnail200x200 {
    ns164:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns17:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:86 .

    ns17:CmsImage1 foaf:thumbnail ns164:Thumbnail200x200 .
}

ns202:Thumbnail800x800 {
    ns202:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns349:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:72 .

    ns349:CmsImage1 foaf:thumbnail ns202:Thumbnail800x800 .
}

ns54:Thumbnail800x800 {
    ns54:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns317:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:18 .

    ns317:CmsImage1 foaf:thumbnail ns54:Thumbnail800x800 .
}

ns139:Thumbnail600x600 {
    ns139:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns262:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:94 .

    ns262:CmsImage1 foaf:thumbnail ns139:Thumbnail600x600 .
}

ns8:Thumbnail200x200 {
    ns8:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns414:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns19:work4 .

    ns414:CmsImage0 foaf:thumbnail ns8:Thumbnail200x200 .
}

ns95:Thumbnail800x800 {
    ns95:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns441:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:63 .

    ns441:CmsImage1 foaf:thumbnail ns95:Thumbnail800x800 .
}

ns100:Thumbnail600x600 {
    ns100:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns383:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:79 .

    ns383:CmsImage0 foaf:thumbnail ns100:Thumbnail600x600 .
}

ns179:CmsImage1 {
    ns179:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:43 .
}

ns219:Thumbnail600x600 {
    ns423:CmsImage1 foaf:thumbnail ns219:Thumbnail600x600 .

    ns219:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns423:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:68 .
}

ns220:CmsImage1 {
    ns220:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:103 .
}

ns221:Thumbnail600x600 {
    ns435:CmsImage1 foaf:thumbnail ns221:Thumbnail600x600 .

    ns221:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns435:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:8 .
}

ns1:84 {
    ns1:84 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 4" ;
        skos:prefLabel "CmsConcept 84" .
}

ns182:Thumbnail200x200 {
    ns182:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns248:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:35 .

    ns248:CmsImage1 foaf:thumbnail ns182:Thumbnail200x200 .
}

ns222:CmsImage0 {
    ns222:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material image 0 rights holder" ;
        dcterms:title "Material image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts vra:material .
}

ns223:Thumbnail600x600 {
    ns391:CmsImage0 foaf:thumbnail ns223:Thumbnail600x600 .

    ns223:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns391:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:21 .
}

ns224:Thumbnail200x200 {
    ns445:CmsImage0 foaf:thumbnail ns224:Thumbnail200x200 .

    ns224:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns445:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:30 .
}

ns225:CmsImage0 {
    ns225:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:6 .
}

ns226:Thumbnail400x400 {
    ns226:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language image 1 rights holder" ;
        dcterms:title "Language image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns118:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:language .

    ns118:CmsImage1 foaf:thumbnail ns226:Thumbnail400x400 .
}

ns77:Thumbnail600x600 {
    ns77:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns439:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:42 .

    ns439:CmsImage1 foaf:thumbnail ns77:Thumbnail600x600 .
}

ns227:Thumbnail600x600 {
    ns329:CmsImage1 foaf:thumbnail ns227:Thumbnail600x600 .

    ns227:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns329:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:freestandingwork10 .
}

ns228:CmsImage1 {
    ns228:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:organization4 .
}

ns29:Thumbnail200x200 {
    ns29:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns89:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:36 .

    ns89:CmsImage0 foaf:thumbnail ns29:Thumbnail200x200 .
}

ns229:CmsImage1 {
    ns229:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:66 .
}

ns230:Thumbnail600x600 {
    ns230:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns217:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:23 .

    ns217:CmsImage1 foaf:thumbnail ns230:Thumbnail600x600 .
}

ns231:Thumbnail800x800 {
    ns366:CmsImage0 foaf:thumbnail ns231:Thumbnail800x800 .

    ns231:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns366:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:48 .
}

ns232:Thumbnail600x600 {
    ns232:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns180:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:organization2 .

    ns180:CmsImage1 foaf:thumbnail ns232:Thumbnail600x600 .
}

ns106:Thumbnail400x400 {
    ns106:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns397:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:3 .

    ns397:CmsImage0 foaf:thumbnail ns106:Thumbnail400x400 .
}

ns221:Thumbnail800x800 {
    ns221:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns435:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:8 .

    ns435:CmsImage1 foaf:thumbnail ns221:Thumbnail800x800 .
}

ns233:CmsImage0 {
    ns233:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:22 .
}

ns166:Thumbnail600x600 {
    ns166:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns169:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:108 .

    ns169:CmsImage0 foaf:thumbnail ns166:Thumbnail600x600 .
}

ns234:Thumbnail400x400 {
    ns408:CmsImage0 foaf:thumbnail ns234:Thumbnail400x400 .

    ns234:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns408:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:47 .
}

ns235:Thumbnail800x800 {
    ns280:CmsImage1 foaf:thumbnail ns235:Thumbnail800x800 .

    ns235:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns280:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:80 .
}

ns236:Thumbnail200x200 {
    ns118:CmsImage0 foaf:thumbnail ns236:Thumbnail200x200 .

    ns236:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language image 0 rights holder" ;
        dcterms:title "Language image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns118:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:language .
}

ns237:work2 {
    ns237:work2 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork2 alternative title 0",
            "CmsCollection0CmsWork2 alternative title 1" ;
        dcterms:contributor _:N106958c611ee46619fe453b1961ac960,
            _:N531bb9df92ed42c3ab9eefb37498bd91 ;
        dcterms:creator ns10:organization4,
            ns10:person0 ;
        dcterms:description _:Nd90da67f880d4cb4b34c8a51066bdb65 ;
        dcterms:extent ns1:12,
            ns1:13 ;
        dcterms:identifier "CmsCollection0CmsWork2Id0",
            "CmsCollection0CmsWork2Id1" ;
        dcterms:language ns1:22,
            ns1:23 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns1:42,
            ns1:43 ;
        dcterms:provenance "CmsCollection0CmsWork2 provenance 0",
            "CmsCollection0CmsWork2 provenance 1" ;
        dcterms:publisher ns1:52,
            ns1:53 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 rights holder" ;
        dcterms:source ns1:62,
            ns1:63 ;
        dcterms:spatial ns237:work2Location ;
        dcterms:subject ns1:82,
            ns1:83 ;
        dcterms:title "CmsCollection0CmsWork2" ;
        dcterms:type ns1:102,
            ns1:103 ;
        vra:culturalContext ns1:2,
            ns1:3 ;
        vra:material ns1:32,
            ns1:33 ;
        vra:technique ns1:92,
            ns1:93 ;
        cms:collection ns10:collection0 ;
        owl:sameAs wd:Q937690 ;
        foaf:page <http://example.com/work/2> .

    _:N106958c611ee46619fe453b1961ac960 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork2 contributor 0" .

    _:N531bb9df92ed42c3ab9eefb37498bd91 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork2 contributor 1" .

    _:Nd90da67f880d4cb4b34c8a51066bdb65 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns238:Thumbnail200x200 {
    ns129:CmsImage1 foaf:thumbnail ns238:Thumbnail200x200 .

    ns238:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns129:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:67 .
}

ns239:Thumbnail800x800 {
    ns432:CmsImage1 foaf:thumbnail ns239:Thumbnail800x800 .

    ns239:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context image 1 rights holder" ;
        dcterms:title "Cultural context image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns432:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts vra:culturalContext .
}

ns240:Thumbnail200x200 {
    ns294:CmsImage0 foaf:thumbnail ns240:Thumbnail200x200 .

    ns240:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns294:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:99 .
}

ns241:Thumbnail600x600 {
    ns425:CmsImage1 foaf:thumbnail ns241:Thumbnail600x600 .

    ns241:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns425:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:1 .
}

ns86:Thumbnail200x200 {
    ns86:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns289:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:38 .

    ns289:CmsImage0 foaf:thumbnail ns86:Thumbnail200x200 .
}

_:Nae59d01485b54ae8b4ad2fbe5a87a466 {
    _:Nae59d01485b54ae8b4ad2fbe5a87a466 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N03e2561d366649419b01c4a5864bc33f ;
        dcterms:title "FreestandingWork9 closing" ;
        cms:work ns10:freestandingwork9 .

    _:N03e2561d366649419b01c4a5864bc33f a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns242:Thumbnail800x800 {
    ns250:CmsImage0 foaf:thumbnail ns242:Thumbnail800x800 .

    ns242:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns250:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:101 .
}

ns231:Thumbnail400x400 {
    ns231:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns366:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:48 .

    ns366:CmsImage0 foaf:thumbnail ns231:Thumbnail400x400 .
}

ns164:Thumbnail600x600 {
    ns164:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns17:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:86 .

    ns17:CmsImage1 foaf:thumbnail ns164:Thumbnail600x600 .
}

ns207:Thumbnail600x600 {
    ns207:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns306:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:person2 .

    ns306:CmsImage0 foaf:thumbnail ns207:Thumbnail600x600 .
}

ns1:108 {
    ns1:108 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 8" ;
        skos:prefLabel "CmsConcept 108" .
}

ns187:Thumbnail600x600 {
    ns187:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns423:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:68 .

    ns423:CmsImage0 foaf:thumbnail ns187:Thumbnail600x600 .
}

ns177:Thumbnail400x400 {
    ns177:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type image 0 rights holder" ;
        dcterms:title "Type image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns350:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:type .

    ns350:CmsImage0 foaf:thumbnail ns177:Thumbnail400x400 .
}

ns91:Thumbnail400x400 {
    ns91:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns443:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:70 .

    ns443:CmsImage1 foaf:thumbnail ns91:Thumbnail400x400 .
}

ns243:Thumbnail400x400 {
    ns243:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns188:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:56 .

    ns188:CmsImage1 foaf:thumbnail ns243:Thumbnail400x400 .
}

ns244:Thumbnail800x800 {
    ns374:CmsImage0 foaf:thumbnail ns244:Thumbnail800x800 .

    ns244:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns374:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:95 .
}

ns245:CmsImage0 {
    ns245:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:7 .
}

ns54:Thumbnail400x400 {
    ns54:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns317:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:18 .

    ns317:CmsImage1 foaf:thumbnail ns54:Thumbnail400x400 .
}

ns10:freestandingwork11Location {
    ns10:freestandingwork11Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns246:Thumbnail800x800 {
    ns445:CmsImage1 foaf:thumbnail ns246:Thumbnail800x800 .

    ns246:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns445:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:30 .
}

ns247:Thumbnail200x200 {
    ns15:CmsImage0 foaf:thumbnail ns247:Thumbnail200x200 .

    ns247:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns15:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:16 .
}

ns126:Thumbnail800x800 {
    ns126:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 0 rights holder" ;
        dcterms:title "Synthetic data properties image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns156:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns438:property_group .

    ns156:CmsImage0 foaf:thumbnail ns126:Thumbnail800x800 .
}

ns248:CmsImage1 {
    ns248:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:35 .
}

ns249:Thumbnail200x200 {
    ns249:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns174:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:organization0 .

    ns174:CmsImage0 foaf:thumbnail ns249:Thumbnail200x200 .
}

ns250:CmsImage0 {
    ns250:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:101 .
}

ns251:Thumbnail600x600 {
    ns328:CmsImage1 foaf:thumbnail ns251:Thumbnail600x600 .

    ns251:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns328:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:2 .
}

dcterms:type {
    dcterms:type a cms:Property ;
        rdfs:label "Type" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns438:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> .
}

ns252:Thumbnail400x400 {
    ns324:CmsImage1 foaf:thumbnail ns252:Thumbnail400x400 .

    ns252:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Title image 1 rights holder" ;
        dcterms:title "Title image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns324:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:title .
}

ns253:Thumbnail400x400 {
    ns253:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns195:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:person4 .

    ns195:CmsImage0 foaf:thumbnail ns253:Thumbnail400x400 .
}

ns1:31 {
    ns1:31 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 1" ;
        skos:prefLabel "CmsConcept 31" .
}

ns201:Thumbnail200x200 {
    ns201:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns153:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:29 .

    ns153:CmsImage0 foaf:thumbnail ns201:Thumbnail200x200 .
}

ns24:Thumbnail200x200 {
    ns24:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns41:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:97 .

    ns41:CmsImage1 foaf:thumbnail ns24:Thumbnail200x200 .
}

ns254:CmsImage1 {
    ns254:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:10 .
}

ns255:Thumbnail200x200 {
    ns255:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 1 rights holder" ;
        dcterms:title "Synthetic data properties image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns156:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns438:property_group .

    ns156:CmsImage1 foaf:thumbnail ns255:Thumbnail200x200 .
}

ns215:Thumbnail200x200 {
    ns215:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium image 1 rights holder" ;
        dcterms:title "Medium image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns146:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:medium .

    ns146:CmsImage1 foaf:thumbnail ns215:Thumbnail200x200 .
}

ns256:Thumbnail200x200 {
    ns332:CmsImage1 foaf:thumbnail ns256:Thumbnail200x200 .

    ns256:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns332:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:40 .
}

ns257:Thumbnail600x600 {
    ns312:CmsImage1 foaf:thumbnail ns257:Thumbnail600x600 .

    ns257:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns312:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:49 .
}

ns182:Thumbnail400x400 {
    ns182:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns248:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:35 .

    ns248:CmsImage1 foaf:thumbnail ns182:Thumbnail400x400 .
}

ns258:CmsImage0 {
    ns258:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:freestandingwork11 .
}

ns124:CmsImage0 {
    ns124:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:13 .
}

ns259:Thumbnail600x600 {
    ns195:CmsImage1 foaf:thumbnail ns259:Thumbnail600x600 .

    ns259:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns195:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:person4 .
}

ns260:Thumbnail400x400 {
    ns404:CmsImage0 foaf:thumbnail ns260:Thumbnail400x400 .

    ns260:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns404:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:25 .
}

ns261:Thumbnail600x600 {
    ns386:CmsImage1 foaf:thumbnail ns261:Thumbnail600x600 .

    ns261:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns386:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:28 .
}

ns101:Thumbnail600x600 {
    ns101:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns129:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:67 .

    ns129:CmsImage0 foaf:thumbnail ns101:Thumbnail600x600 .
}

ns72:Thumbnail200x200 {
    ns72:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns307:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:collection1 .

    ns307:CmsImage1 foaf:thumbnail ns72:Thumbnail200x200 .
}

ns117:Thumbnail200x200 {
    ns117:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns114:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:93 .

    ns114:CmsImage0 foaf:thumbnail ns117:Thumbnail200x200 .
}

ns262:CmsImage1 {
    ns262:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:94 .
}

ns15:CmsImage0 {
    ns15:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:16 .
}

ns263:Thumbnail800x800 {
    ns374:CmsImage1 foaf:thumbnail ns263:Thumbnail800x800 .

    ns263:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns374:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:95 .
}

ns148:Thumbnail400x400 {
    ns148:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns18:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:74 .

    ns18:CmsImage1 foaf:thumbnail ns148:Thumbnail400x400 .
}

ns264:Thumbnail400x400 {
    ns157:CmsImage0 foaf:thumbnail ns264:Thumbnail400x400 .

    ns264:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns157:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:person1 .
}

ns265:Thumbnail800x800 {
    ns343:CmsImage1 foaf:thumbnail ns265:Thumbnail800x800 .

    ns265:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns343:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:98 .
}

ns266:Thumbnail600x600 {
    ns369:CmsImage1 foaf:thumbnail ns266:Thumbnail600x600 .

    ns266:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns369:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:87 .
}

ns267:Thumbnail400x400 {
    ns339:CmsImage0 foaf:thumbnail ns267:Thumbnail400x400 .

    ns267:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns339:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:53 .
}

ns224:Thumbnail800x800 {
    ns224:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns445:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:30 .

    ns445:CmsImage0 foaf:thumbnail ns224:Thumbnail800x800 .
}

ns235:Thumbnail200x200 {
    ns235:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns280:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:80 .

    ns280:CmsImage1 foaf:thumbnail ns235:Thumbnail200x200 .
}

ns268:Thumbnail800x800 {
    ns399:CmsImage1 foaf:thumbnail ns268:Thumbnail800x800 .

    ns268:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:84 .
}

ns269:Thumbnail200x200 {
    ns383:CmsImage1 foaf:thumbnail ns269:Thumbnail200x200 .

    ns269:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns383:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:79 .
}

ns237:work1Creation {
    ns237:work1Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns10:organization3,
            ns10:organization4 ;
        dcterms:date _:N1fc237f42af64767892476d453b68bb2 ;
        dcterms:spatial ns237:work1Location ;
        dcterms:title "CmsCollection0CmsWork1 creation" ;
        cms:work ns237:work1 .

    _:N1fc237f42af64767892476d453b68bb2 a cms:DateTimeDescription ;
        time:day "---31"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns127:Thumbnail200x200 {
    ns127:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns76:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:60 .

    ns76:CmsImage0 foaf:thumbnail ns127:Thumbnail200x200 .
}

ns61:Thumbnail600x600 {
    ns61:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns276:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:organization1 .

    ns276:CmsImage1 foaf:thumbnail ns61:Thumbnail600x600 .
}

ns190:Thumbnail800x800 {
    ns190:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns214:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:52 .

    ns214:CmsImage1 foaf:thumbnail ns190:Thumbnail800x800 .
}

ns100:Thumbnail200x200 {
    ns100:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns383:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:79 .

    ns383:CmsImage0 foaf:thumbnail ns100:Thumbnail200x200 .
}

ns47:Thumbnail200x200 {
    ns47:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns404:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:25 .

    ns404:CmsImage1 foaf:thumbnail ns47:Thumbnail200x200 .
}

ns270:Thumbnail200x200 {
    ns288:CmsImage0 foaf:thumbnail ns270:Thumbnail200x200 .

    ns270:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns288:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:71 .
}

ns271:Thumbnail200x200 {
    ns271:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns76:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:60 .

    ns76:CmsImage1 foaf:thumbnail ns271:Thumbnail200x200 .
}

ns162:Thumbnail200x200 {
    ns162:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns71:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:96 .

    ns71:CmsImage1 foaf:thumbnail ns162:Thumbnail200x200 .
}

ns272:Thumbnail200x200 {
    ns390:CmsImage0 foaf:thumbnail ns272:Thumbnail200x200 .

    ns272:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns390:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:person3 .
}

ns1:53 {
    ns1:53 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 3" ;
        skos:prefLabel "CmsConcept 53" .
}

ns273:Thumbnail800x800 {
    ns220:CmsImage0 foaf:thumbnail ns273:Thumbnail800x800 .

    ns273:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns220:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:103 .
}

ns57:Thumbnail200x200 {
    ns57:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns431:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:freestandingwork9 .

    ns431:CmsImage0 foaf:thumbnail ns57:Thumbnail200x200 .
}

ns274:Thumbnail200x200 {
    ns347:CmsImage0 foaf:thumbnail ns274:Thumbnail200x200 .

    ns274:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns347:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:77 .
}

ns154:Thumbnail400x400 {
    ns154:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns293:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:90 .

    ns293:CmsImage0 foaf:thumbnail ns154:Thumbnail400x400 .
}

ns275:Thumbnail800x800 {
    ns333:CmsImage0 foaf:thumbnail ns275:Thumbnail800x800 .

    ns275:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns333:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:107 .
}

ns111:Thumbnail200x200 {
    ns111:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns317:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:18 .

    ns317:CmsImage0 foaf:thumbnail ns111:Thumbnail200x200 .
}

ns1:21 {
    ns1:21 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 1" ;
        skos:prefLabel "CmsConcept 21" .
}

ns276:CmsImage0 {
    ns276:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:organization1 .
}

ns1:45 {
    ns1:45 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 5" ;
        skos:prefLabel "CmsConcept 45" .
}

ns277:Thumbnail400x400 {
    ns284:CmsImage1 foaf:thumbnail ns277:Thumbnail400x400 .

    ns277:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns284:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:41 .
}

ns29:Thumbnail400x400 {
    ns29:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns89:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:36 .

    ns89:CmsImage0 foaf:thumbnail ns29:Thumbnail400x400 .
}

ns278:Thumbnail200x200 {
    ns278:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns188:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:56 .

    ns188:CmsImage0 foaf:thumbnail ns278:Thumbnail200x200 .
}

ns115:Thumbnail600x600 {
    ns115:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns280:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:80 .

    ns280:CmsImage0 foaf:thumbnail ns115:Thumbnail600x600 .
}

ns279:Thumbnail800x800 {
    ns409:CmsImage0 foaf:thumbnail ns279:Thumbnail800x800 .

    ns279:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns409:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:19 .
}

ns140:CmsImage1 {
    ns140:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Description image 1 rights holder" ;
        dcterms:title "Description image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:description .
}

ns280:CmsImage1 {
    ns280:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:80 .
}

ns10:person3 {
    ns10:person3 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing> ;
        contact:sortName "3, CmsPerson" ;
        owl:sameAs wd:Q7251 ;
        foaf:familyName "3" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 3" .
}

ns281:Thumbnail400x400 {
    ns327:CmsImage0 foaf:thumbnail ns281:Thumbnail400x400 .

    ns281:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns327:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:31 .
}

ns282:Thumbnail600x600 {
    ns262:CmsImage0 foaf:thumbnail ns282:Thumbnail600x600 .

    ns282:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns262:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:94 .
}

ns283:CmsImage1 {
    ns283:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:5 .
}

ns269:Thumbnail400x400 {
    ns269:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns383:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:79 .

    ns383:CmsImage1 foaf:thumbnail ns269:Thumbnail400x400 .
}

ns264:Thumbnail200x200 {
    ns264:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns157:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:person1 .

    ns157:CmsImage0 foaf:thumbnail ns264:Thumbnail200x200 .
}

ns51:Thumbnail200x200 {
    ns51:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns332:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:40 .

    ns332:CmsImage0 foaf:thumbnail ns51:Thumbnail200x200 .
}

ns284:CmsImage0 {
    ns284:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:41 .
}

ns175:Thumbnail200x200 {
    ns175:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns296:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:50 .

    ns296:CmsImage1 foaf:thumbnail ns175:Thumbnail200x200 .
}

ns48:Thumbnail800x800 {
    ns48:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns233:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:22 .

    ns233:CmsImage0 foaf:thumbnail ns48:Thumbnail800x800 .
}

ns281:Thumbnail800x800 {
    ns281:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns327:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:31 .

    ns327:CmsImage0 foaf:thumbnail ns281:Thumbnail800x800 .
}

ns285:Thumbnail600x600 {
    ns208:CmsImage0 foaf:thumbnail ns285:Thumbnail600x600 .

    ns285:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns208:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:75 .
}

ns218:Thumbnail400x400 {
    ns218:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns443:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:70 .

    ns443:CmsImage0 foaf:thumbnail ns218:Thumbnail400x400 .
}

ns286:Thumbnail200x200 {
    ns405:CmsImage0 foaf:thumbnail ns286:Thumbnail200x200 .

    ns286:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns405:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns237:work1 .
}

ns90:Thumbnail600x600 {
    ns90:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns425:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:1 .

    ns425:CmsImage0 foaf:thumbnail ns90:Thumbnail600x600 .
}

ns70:Thumbnail800x800 {
    ns70:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns440:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:73 .

    ns440:CmsImage1 foaf:thumbnail ns70:Thumbnail800x800 .
}

ns108:Thumbnail400x400 {
    ns108:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns360:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:62 .

    ns360:CmsImage0 foaf:thumbnail ns108:Thumbnail400x400 .
}

ns287:Thumbnail200x200 {
    ns151:CmsImage0 foaf:thumbnail ns287:Thumbnail200x200 .

    ns287:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns151:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:person0 .
}

ns288:CmsImage0 {
    ns288:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:71 .
}

ns209:Thumbnail400x400 {
    ns209:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns307:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:collection1 .

    ns307:CmsImage0 foaf:thumbnail ns209:Thumbnail400x400 .
}

ns289:CmsImage0 {
    ns289:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:38 .
}

ns221:Thumbnail200x200 {
    ns221:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns435:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:8 .

    ns435:CmsImage1 foaf:thumbnail ns221:Thumbnail200x200 .
}

ns290:Thumbnail800x800 {
    ns392:CmsImage1 foaf:thumbnail ns290:Thumbnail800x800 .

    ns290:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent image 1 rights holder" ;
        dcterms:title "Extent image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:extent .
}

ns291:Thumbnail400x400 {
    ns291:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns114:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:93 .

    ns114:CmsImage1 foaf:thumbnail ns291:Thumbnail400x400 .
}

ns239:Thumbnail400x400 {
    ns239:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context image 1 rights holder" ;
        dcterms:title "Cultural context image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns432:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts vra:culturalContext .

    ns432:CmsImage1 foaf:thumbnail ns239:Thumbnail400x400 .
}

_:Nbb15fa660c834ebfb4e46bdbc0285883 {
    _:Nbb15fa660c834ebfb4e46bdbc0285883 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N11483f490aee4bc99110bdfe899f7b25 ;
        dcterms:spatial _:N8b056eeae356497eaf70554de2475a0b ;
        dcterms:title "CmsCollection0CmsWork0 closing" ;
        cms:work ns237:work0 .

    _:N11483f490aee4bc99110bdfe899f7b25 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:N8b056eeae356497eaf70554de2475a0b a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

_:N5a788b9e2ab1401f962fb77904fd357b {
    _:N5a788b9e2ab1401f962fb77904fd357b a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N41d26441f96045c8a6071fca671c6f54 ;
        dcterms:spatial _:N45da903ea5b94eb08c4eaf9464d2b6e0 ;
        dcterms:title "CmsCollection1CmsWork4 closing" ;
        cms:work ns19:work4 .

    _:N41d26441f96045c8a6071fca671c6f54 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:N45da903ea5b94eb08c4eaf9464d2b6e0 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns97:Thumbnail400x400 {
    ns97:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns124:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:13 .

    ns124:CmsImage1 foaf:thumbnail ns97:Thumbnail400x400 .
}

ns292:Thumbnail600x600 {
    ns392:CmsImage0 foaf:thumbnail ns292:Thumbnail600x600 .

    ns292:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent image 0 rights holder" ;
        dcterms:title "Extent image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:extent .
}

ns293:CmsImage1 {
    ns293:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:90 .
}

ns10:freestandingwork10Opening {
    ns10:freestandingwork10Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-22"^^xsd:date ;
        dcterms:description _:Nb0b286586234435e92539fd3146f4f80 ;
        dcterms:spatial _:N9a56cb0062914803bbf3e22e7bbf0084 ;
        dcterms:title "FreestandingWork10 opening" ;
        cms:work ns10:freestandingwork10 .

    _:N9a56cb0062914803bbf3e22e7bbf0084 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:Nb0b286586234435e92539fd3146f4f80 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns33:Thumbnail800x800 {
    ns33:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns390:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:person3 .

    ns390:CmsImage1 foaf:thumbnail ns33:Thumbnail800x800 .
}

ns158:Thumbnail200x200 {
    ns158:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns151:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:person0 .

    ns151:CmsImage1 foaf:thumbnail ns158:Thumbnail200x200 .
}

ns82:Thumbnail400x400 {
    ns82:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns376:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:76 .

    ns376:CmsImage0 foaf:thumbnail ns82:Thumbnail400x400 .
}

ns215:Thumbnail600x600 {
    ns215:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium image 1 rights holder" ;
        dcterms:title "Medium image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns146:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:medium .

    ns146:CmsImage1 foaf:thumbnail ns215:Thumbnail600x600 .
}

ns155:Thumbnail400x400 {
    ns155:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns150:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:15 .

    ns150:CmsImage1 foaf:thumbnail ns155:Thumbnail400x400 .
}

ns256:Thumbnail400x400 {
    ns256:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns332:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:40 .

    ns332:CmsImage1 foaf:thumbnail ns256:Thumbnail400x400 .
}

ns76:CmsImage0 {
    ns76:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:60 .
}

ns78:Thumbnail600x600 {
    ns78:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns446:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:9 .

    ns446:CmsImage1 foaf:thumbnail ns78:Thumbnail600x600 .
}

ns294:CmsImage1 {
    ns294:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:99 .
}

ns295:CmsImage0 {
    ns295:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:12 .
}

ns1:55 {
    ns1:55 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 5" ;
        skos:prefLabel "CmsConcept 55" .
}

ns296:CmsImage1 {
    ns296:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:50 .
}

ns122:Thumbnail200x200 {
    ns122:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns9:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:20 .

    ns9:CmsImage0 foaf:thumbnail ns122:Thumbnail200x200 .
}

ns10:freestandingwork9Opening {
    ns10:freestandingwork9Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-23"^^xsd:date ;
        dcterms:spatial _:N03e2561d366649419b01c4a5864bc33f ;
        dcterms:title "FreestandingWork9 opening" ;
        cms:work ns10:freestandingwork9 .

    _:N03e2561d366649419b01c4a5864bc33f a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns93:Thumbnail200x200 {
    ns93:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns228:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:organization4 .

    ns228:CmsImage1 foaf:thumbnail ns93:Thumbnail200x200 .
}

ns1:52 {
    ns1:52 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 2" ;
        skos:prefLabel "CmsConcept 52" .
}

ns297:Thumbnail400x400 {
    ns355:CmsImage1 foaf:thumbnail ns297:Thumbnail400x400 .

    ns297:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns355:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:45 .
}

ns298:Thumbnail800x800 {
    ns376:CmsImage1 foaf:thumbnail ns298:Thumbnail800x800 .

    ns298:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns376:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:76 .
}

ns299:Thumbnail800x800 {
    ns299:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material image 0 rights holder" ;
        dcterms:title "Material image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns222:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts vra:material .

    ns222:CmsImage0 foaf:thumbnail ns299:Thumbnail800x800 .
}

ns300:CmsImage0 {
    ns300:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:24 .
}

ns231:Thumbnail200x200 {
    ns231:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns366:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:48 .

    ns366:CmsImage0 foaf:thumbnail ns231:Thumbnail200x200 .
}

ns202:Thumbnail600x600 {
    ns202:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns349:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:72 .

    ns349:CmsImage1 foaf:thumbnail ns202:Thumbnail600x600 .
}

ns133:Thumbnail400x400 {
    ns133:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns397:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:3 .

    ns397:CmsImage1 foaf:thumbnail ns133:Thumbnail400x400 .
}

ns301:Thumbnail600x600 {
    ns373:CmsImage0 foaf:thumbnail ns301:Thumbnail600x600 .

    ns301:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns373:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:55 .
}

ns302:Thumbnail800x800 {
    ns428:CmsImage0 foaf:thumbnail ns302:Thumbnail800x800 .

    ns302:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns428:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:83 .
}

ns1:32 {
    ns1:32 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 2" ;
        skos:prefLabel "CmsConcept 32" .
}

ns19:work5 {
    ns19:work5 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork5 alternative title 0",
            "CmsCollection1CmsWork5 alternative title 1" ;
        dcterms:contributor _:N05576d8f98a04d5489789af27d3c0143,
            _:N1e1541d7dc074e9cae7f42ae5d065327 ;
        dcterms:creator ns10:person2,
            ns10:person3 ;
        dcterms:extent ns1:15,
            ns1:16 ;
        dcterms:identifier "CmsCollection1CmsWork5Id0",
            "CmsCollection1CmsWork5Id1" ;
        dcterms:language ns1:25,
            ns1:26 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns1:45,
            ns1:46 ;
        dcterms:provenance "CmsCollection1CmsWork5 provenance 0",
            "CmsCollection1CmsWork5 provenance 1" ;
        dcterms:publisher ns1:55,
            ns1:56 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 rights holder" ;
        dcterms:source ns1:65,
            ns1:66 ;
        dcterms:spatial ns19:work5Location ;
        dcterms:subject ns1:85,
            ns1:86 ;
        dcterms:title "CmsCollection1CmsWork5" ;
        dcterms:type ns1:105,
            ns1:106 ;
        vra:culturalContext ns1:5,
            ns1:6 ;
        vra:material ns1:35,
            ns1:36 ;
        vra:technique ns1:95,
            ns1:96 ;
        cms:collection ns10:collection1 ;
        owl:sameAs wd:Q937690 .

    _:N05576d8f98a04d5489789af27d3c0143 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork5 contributor 1" .

    _:N1e1541d7dc074e9cae7f42ae5d065327 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork5 contributor 0" .
}

ns1:89 {
    ns1:89 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 9" ;
        skos:prefLabel "CmsConcept 89" .
}

ns171:Thumbnail800x800 {
    ns171:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns5:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns19:work7 .

    ns5:CmsImage1 foaf:thumbnail ns171:Thumbnail800x800 .
}

ns303:Thumbnail400x400 {
    ns303:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique image 1 rights holder" ;
        dcterms:title "Technique image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns43:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts vra:technique .

    ns43:CmsImage1 foaf:thumbnail ns303:Thumbnail400x400 .
}

ns18:CmsImage0 {
    ns18:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:74 .
}

ns22:Thumbnail800x800 {
    ns22:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns416:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:57 .

    ns416:CmsImage1 foaf:thumbnail ns22:Thumbnail800x800 .
}

ns304:Thumbnail200x200 {
    ns304:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns89:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:36 .

    ns89:CmsImage1 foaf:thumbnail ns304:Thumbnail200x200 .
}

ns42:Thumbnail400x400 {
    ns42:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns311:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:freestandingwork8 .

    ns311:CmsImage1 foaf:thumbnail ns42:Thumbnail400x400 .
}

ns305:Thumbnail800x800 {
    ns110:CmsImage0 foaf:thumbnail ns305:Thumbnail800x800 .

    ns305:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns110:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:51 .
}

ns306:CmsImage0 {
    ns306:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:person2 .
}

ns276:CmsImage1 {
    ns276:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:organization1 .
}

ns307:CmsImage0 {
    ns307:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:collection1 .
}

ns308:Thumbnail200x200 {
    ns296:CmsImage0 foaf:thumbnail ns308:Thumbnail200x200 .

    ns308:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns296:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:50 .
}

ns163:Thumbnail800x800 {
    ns163:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns440:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:73 .

    ns440:CmsImage0 foaf:thumbnail ns163:Thumbnail800x800 .
}

ns309:Thumbnail600x600 {
    ns318:CmsImage1 foaf:thumbnail ns309:Thumbnail600x600 .

    ns309:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns318:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:44 .
}

ns22:Thumbnail600x600 {
    ns22:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns416:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:57 .

    ns416:CmsImage1 foaf:thumbnail ns22:Thumbnail600x600 .
}

ns19:work5Opening {
    ns19:work5Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-27"^^xsd:date ;
        dcterms:spatial _:Nd3407ea41e374e64afcd0efac8ad4a2f ;
        dcterms:title "CmsCollection1CmsWork5 opening" ;
        cms:work ns19:work5 .

    _:Nd3407ea41e374e64afcd0efac8ad4a2f a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns310:Thumbnail400x400 {
    ns347:CmsImage1 foaf:thumbnail ns310:Thumbnail400x400 .

    ns310:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns347:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:77 .
}

ns311:CmsImage1 {
    ns311:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:freestandingwork8 .
}

ns312:CmsImage1 {
    ns312:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:49 .
}

ns302:Thumbnail600x600 {
    ns302:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns428:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:83 .

    ns428:CmsImage0 foaf:thumbnail ns302:Thumbnail600x600 .
}

ns313:CmsImage0 {
    ns313:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:32 .
}

ns314:Thumbnail200x200 {
    ns411:CmsImage0 foaf:thumbnail ns314:Thumbnail200x200 .

    ns314:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns411:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:88 .
}

ns247:Thumbnail600x600 {
    ns247:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns15:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:16 .

    ns15:CmsImage0 foaf:thumbnail ns247:Thumbnail600x600 .
}

ns315:CmsImage0 {
    ns315:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:102 .
}

ns1:78 {
    ns1:78 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 8" ;
        skos:prefLabel "CmsConcept 78" .
}

ns283:CmsImage0 {
    ns283:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:5 .
}

ns254:CmsImage0 {
    ns254:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:10 .
}

ns165:Thumbnail400x400 {
    ns165:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns427:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns237:work2 .

    ns427:CmsImage1 foaf:thumbnail ns165:Thumbnail400x400 .
}

ns287:Thumbnail600x600 {
    ns287:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns151:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:person0 .

    ns151:CmsImage0 foaf:thumbnail ns287:Thumbnail600x600 .
}

ns108:Thumbnail800x800 {
    ns108:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns360:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:62 .

    ns360:CmsImage0 foaf:thumbnail ns108:Thumbnail800x800 .
}

ns181:Thumbnail600x600 {
    ns181:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns283:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:5 .

    ns283:CmsImage0 foaf:thumbnail ns181:Thumbnail600x600 .
}

ns316:CmsImage1 {
    ns316:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:65 .
}

ns19:work4Location {
    ns19:work4Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns152:Thumbnail600x600 {
    ns152:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns436:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns19:work5 .

    ns436:CmsImage0 foaf:thumbnail ns152:Thumbnail600x600 .
}

ns237:work2Opening {
    ns237:work2Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-30"^^xsd:date ;
        dcterms:description _:Nd90da67f880d4cb4b34c8a51066bdb65 ;
        dcterms:spatial _:N8af83076cbb94f5fb96558ee9a0c89fc ;
        dcterms:title "CmsCollection0CmsWork2 opening" ;
        cms:work ns237:work2 .

    _:N8af83076cbb94f5fb96558ee9a0c89fc a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:Nd90da67f880d4cb4b34c8a51066bdb65 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns304:Thumbnail400x400 {
    ns304:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns89:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:36 .

    ns89:CmsImage1 foaf:thumbnail ns304:Thumbnail400x400 .
}

ns317:CmsImage1 {
    ns317:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:18 .
}

ns139:Thumbnail800x800 {
    ns139:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns262:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:94 .

    ns262:CmsImage1 foaf:thumbnail ns139:Thumbnail800x800 .
}

ns37:Thumbnail200x200 {
    ns37:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns289:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:38 .

    ns289:CmsImage1 foaf:thumbnail ns37:Thumbnail200x200 .
}

ns318:CmsImage0 {
    ns318:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:44 .
}

ns319:CmsImage1 {
    ns319:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:11 .
}

ns7:Thumbnail200x200 {
    ns7:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns198:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:82 .

    ns198:CmsImage0 foaf:thumbnail ns7:Thumbnail200x200 .
}

ns320:CmsImage1 {
    ns320:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns237:work3 .
}

ns249:Thumbnail400x400 {
    ns249:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns174:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:organization0 .

    ns174:CmsImage0 foaf:thumbnail ns249:Thumbnail400x400 .
}

ns209:Thumbnail600x600 {
    ns209:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns307:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:collection1 .

    ns307:CmsImage0 foaf:thumbnail ns209:Thumbnail600x600 .
}

ns321:Thumbnail600x600 {
    ns391:CmsImage1 foaf:thumbnail ns321:Thumbnail600x600 .

    ns321:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns391:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:21 .
}

ns266:Thumbnail400x400 {
    ns266:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns369:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:87 .

    ns369:CmsImage1 foaf:thumbnail ns266:Thumbnail400x400 .
}

ns1:38 {
    ns1:38 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 8" ;
        skos:prefLabel "CmsConcept 38" .
}

ns58:Thumbnail600x600 {
    ns58:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns356:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:26 .

    ns356:CmsImage1 foaf:thumbnail ns58:Thumbnail600x600 .
}

ns242:Thumbnail400x400 {
    ns242:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns250:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:101 .

    ns250:CmsImage0 foaf:thumbnail ns242:Thumbnail400x400 .
}

ns105:Thumbnail200x200 {
    ns105:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns434:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:14 .

    ns434:CmsImage0 foaf:thumbnail ns105:Thumbnail200x200 .
}

ns4:Thumbnail600x600 {
    ns4:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns373:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:55 .

    ns373:CmsImage1 foaf:thumbnail ns4:Thumbnail600x600 .
}

ns91:Thumbnail600x600 {
    ns91:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns443:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:70 .

    ns443:CmsImage1 foaf:thumbnail ns91:Thumbnail600x600 .
}

ns322:Thumbnail200x200 {
    ns322:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns276:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:organization1 .

    ns276:CmsImage0 foaf:thumbnail ns322:Thumbnail200x200 .
}

ns1:101 {
    ns1:101 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 1" ;
        skos:prefLabel "CmsConcept 101" .
}

ns321:Thumbnail400x400 {
    ns321:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns391:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:21 .

    ns391:CmsImage1 foaf:thumbnail ns321:Thumbnail400x400 .
}

ns251:Thumbnail200x200 {
    ns251:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns328:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:2 .

    ns328:CmsImage1 foaf:thumbnail ns251:Thumbnail200x200 .
}

ns323:Thumbnail800x800 {
    ns411:CmsImage1 foaf:thumbnail ns323:Thumbnail800x800 .

    ns323:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns411:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:88 .
}

ns237:work0Location {
    ns237:work0Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns324:CmsImage0 {
    ns324:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Title image 0 rights holder" ;
        dcterms:title "Title image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:title .
}

ns83:Thumbnail800x800 {
    ns83:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns354:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:85 .

    ns354:CmsImage1 foaf:thumbnail ns83:Thumbnail800x800 .
}

ns257:Thumbnail200x200 {
    ns257:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns312:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:49 .

    ns312:CmsImage1 foaf:thumbnail ns257:Thumbnail200x200 .
}

ns181:Thumbnail800x800 {
    ns181:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns283:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:5 .

    ns283:CmsImage0 foaf:thumbnail ns181:Thumbnail800x800 .
}

ns1:16 {
    ns1:16 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 6" ;
        skos:prefLabel "CmsConcept 16" .
}

ns167:Thumbnail200x200 {
    ns167:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns179:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:43 .

    ns179:CmsImage0 foaf:thumbnail ns167:Thumbnail200x200 .
}

ns1:18 {
    ns1:18 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 8" ;
        skos:prefLabel "CmsConcept 18" .
}

ns325:Thumbnail400x400 {
    ns369:CmsImage0 foaf:thumbnail ns325:Thumbnail400x400 .

    ns325:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns369:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:87 .
}

ns273:Thumbnail200x200 {
    ns273:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns220:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:103 .

    ns220:CmsImage0 foaf:thumbnail ns273:Thumbnail200x200 .
}

ns310:Thumbnail600x600 {
    ns310:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns347:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:77 .

    ns347:CmsImage1 foaf:thumbnail ns310:Thumbnail600x600 .
}

ns261:Thumbnail200x200 {
    ns261:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns386:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:28 .

    ns386:CmsImage1 foaf:thumbnail ns261:Thumbnail200x200 .
}

ns326:Thumbnail400x400 {
    ns334:CmsImage1 foaf:thumbnail ns326:Thumbnail400x400 .

    ns326:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns334:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:104 .
}

ns24:Thumbnail800x800 {
    ns24:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns41:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:97 .

    ns41:CmsImage1 foaf:thumbnail ns24:Thumbnail800x800 .
}

ns24:Thumbnail400x400 {
    ns24:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns41:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:97 .

    ns41:CmsImage1 foaf:thumbnail ns24:Thumbnail400x400 .
}

ns28:Thumbnail200x200 {
    ns28:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns333:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:107 .

    ns333:CmsImage1 foaf:thumbnail ns28:Thumbnail200x200 .
}

ns327:CmsImage1 {
    ns327:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:31 .
}

ns73:Thumbnail600x600 {
    ns73:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns300:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:24 .

    ns300:CmsImage1 foaf:thumbnail ns73:Thumbnail600x600 .
}

ns328:CmsImage1 {
    ns328:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:2 .
}

ns206:Thumbnail600x600 {
    ns206:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns245:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:7 .

    ns245:CmsImage0 foaf:thumbnail ns206:Thumbnail600x600 .
}

ns10:freestandingwork9 {
    ns10:freestandingwork9 a cms:Work ;
        dcterms:alternative "FreestandingWork9 alternative title 0",
            "FreestandingWork9 alternative title 1" ;
        dcterms:contributor _:N8b5edc0eb13a473e9fd823fd358bfcaa,
            _:N8e735f4fc6204d4e8f44b499a2d6e4c4 ;
        dcterms:creator ns10:organization1,
            ns10:organization2 ;
        dcterms:extent ns1:10,
            ns1:19 ;
        dcterms:identifier "FreestandingWork9Id0",
            "FreestandingWork9Id1" ;
        dcterms:language ns1:20,
            ns1:29 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns1:40,
            ns1:49 ;
        dcterms:provenance "FreestandingWork9 provenance 0",
            "FreestandingWork9 provenance 1" ;
        dcterms:publisher ns1:50,
            ns1:59 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 rights holder" ;
        dcterms:source ns1:60,
            ns1:69 ;
        dcterms:spatial ns10:freestandingwork9Location ;
        dcterms:subject ns1:80,
            ns1:89 ;
        dcterms:title "FreestandingWork9" ;
        dcterms:type ns1:100,
            ns1:109 ;
        vra:culturalContext ns1:0,
            ns1:9 ;
        vra:material ns1:30,
            ns1:39 ;
        vra:technique ns1:90,
            ns1:99 ;
        owl:sameAs wd:Q937690 .

    _:N8b5edc0eb13a473e9fd823fd358bfcaa a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork9 contributor 1" .

    _:N8e735f4fc6204d4e8f44b499a2d6e4c4 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork9 contributor 0" .
}

ns120:Thumbnail200x200 {
    ns120:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns18:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:74 .

    ns18:CmsImage0 foaf:thumbnail ns120:Thumbnail200x200 .
}

ns1:4 {
    ns1:4 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 4" ;
        skos:prefLabel "CmsConcept 4" .
}

ns278:Thumbnail800x800 {
    ns278:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns188:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:56 .

    ns188:CmsImage0 foaf:thumbnail ns278:Thumbnail800x800 .
}

ns49:Thumbnail600x600 {
    ns49:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns293:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:90 .

    ns293:CmsImage1 foaf:thumbnail ns49:Thumbnail600x600 .
}

ns202:Thumbnail400x400 {
    ns202:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns349:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:72 .

    ns349:CmsImage1 foaf:thumbnail ns202:Thumbnail400x400 .
}

ns35:Thumbnail400x400 {
    ns35:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns225:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:6 .

    ns225:CmsImage0 foaf:thumbnail ns35:Thumbnail400x400 .
}

ns247:Thumbnail800x800 {
    ns247:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns15:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:16 .

    ns15:CmsImage0 foaf:thumbnail ns247:Thumbnail800x800 .
}

ns329:CmsImage1 {
    ns329:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:freestandingwork10 .
}

ns1:61 {
    ns1:61 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 1" ;
        skos:prefLabel "CmsConcept 61" .
}

ns1:35 {
    ns1:35 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 5" ;
        skos:prefLabel "CmsConcept 35" .
}

ns84:Thumbnail200x200 {
    ns84:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns442:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:106 .

    ns442:CmsImage0 foaf:thumbnail ns84:Thumbnail200x200 .
}

ns111:Thumbnail800x800 {
    ns111:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns317:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:18 .

    ns317:CmsImage0 foaf:thumbnail ns111:Thumbnail800x800 .
}

ns330:Thumbnail400x400 {
    ns315:CmsImage1 foaf:thumbnail ns330:Thumbnail400x400 .

    ns330:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns315:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:102 .
}

ns255:Thumbnail800x800 {
    ns255:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 1 rights holder" ;
        dcterms:title "Synthetic data properties image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns156:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns438:property_group .

    ns156:CmsImage1 foaf:thumbnail ns255:Thumbnail800x800 .
}

ns331:Thumbnail800x800 {
    ns17:CmsImage0 foaf:thumbnail ns331:Thumbnail800x800 .

    ns331:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns17:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:86 .
}

ns64:Thumbnail600x600 {
    ns64:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns153:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:29 .

    ns153:CmsImage1 foaf:thumbnail ns64:Thumbnail600x600 .
}

ns159:Thumbnail600x600 {
    ns159:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns436:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns19:work5 .

    ns436:CmsImage1 foaf:thumbnail ns159:Thumbnail600x600 .
}

ns332:CmsImage0 {
    ns332:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:40 .
}

ns333:CmsImage0 {
    ns333:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:107 .
}

ns334:CmsImage1 {
    ns334:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:104 .
}

ns335:CmsImage1 {
    ns335:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:54 .
}

ns6:Thumbnail400x400 {
    ns6:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns389:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:100 .

    ns389:CmsImage0 foaf:thumbnail ns6:Thumbnail400x400 .
}

ns297:Thumbnail600x600 {
    ns297:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns355:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:45 .

    ns355:CmsImage1 foaf:thumbnail ns297:Thumbnail600x600 .
}

ns305:Thumbnail600x600 {
    ns305:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns110:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:51 .

    ns110:CmsImage0 foaf:thumbnail ns305:Thumbnail600x600 .
}

ns336:CmsImage0 {
    ns336:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:81 .
}

ns1:44 {
    ns1:44 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 4" ;
        skos:prefLabel "CmsConcept 44" .
}

ns337:Thumbnail600x600 {
    ns316:CmsImage0 foaf:thumbnail ns337:Thumbnail600x600 .

    ns337:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns316:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:65 .
}

ns73:Thumbnail200x200 {
    ns73:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns300:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:24 .

    ns300:CmsImage1 foaf:thumbnail ns73:Thumbnail200x200 .
}

ns338:Thumbnail800x800 {
    ns338:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns295:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:12 .

    ns295:CmsImage0 foaf:thumbnail ns338:Thumbnail800x800 .
}

ns339:CmsImage1 {
    ns339:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:53 .
}

ns1:46 {
    ns1:46 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 6" ;
        skos:prefLabel "CmsConcept 46" .
}

ns340:Thumbnail600x600 {
    ns427:CmsImage0 foaf:thumbnail ns340:Thumbnail600x600 .

    ns340:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns427:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns237:work2 .
}

ns10:organization1 {
    ns10:organization1 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 1" ;
        foaf:page ns10:organization1page .
}

ns82:Thumbnail600x600 {
    ns82:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns376:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:76 .

    ns376:CmsImage0 foaf:thumbnail ns82:Thumbnail600x600 .
}

ns159:Thumbnail400x400 {
    ns159:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns436:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns19:work5 .

    ns436:CmsImage1 foaf:thumbnail ns159:Thumbnail400x400 .
}

ns148:Thumbnail600x600 {
    ns148:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns18:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:74 .

    ns18:CmsImage1 foaf:thumbnail ns148:Thumbnail600x600 .
}

ns341:Thumbnail400x400 {
    ns430:CmsImage0 foaf:thumbnail ns341:Thumbnail400x400 .

    ns341:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject image 0 rights holder" ;
        dcterms:title "Subject image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns430:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:subject .
}

ns342:Thumbnail400x400 {
    ns446:CmsImage0 foaf:thumbnail ns342:Thumbnail400x400 .

    ns342:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns446:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:9 .
}

dcterms:description {
    dcterms:description a cms:Property ;
        rdfs:label "Description" ;
        cms:propertyFilterable false ;
        cms:propertyGroup ns438:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Description> .
}

ns343:CmsImage0 {
    ns343:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:98 .
}

ns303:Thumbnail800x800 {
    ns303:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique image 1 rights holder" ;
        dcterms:title "Technique image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns43:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts vra:technique .

    ns43:CmsImage1 foaf:thumbnail ns303:Thumbnail800x800 .
}

ns344:Thumbnail400x400 {
    ns444:CmsImage1 foaf:thumbnail ns344:Thumbnail400x400 .

    ns344:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns444:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:59 .
}

ns1:41 {
    ns1:41 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 1" ;
        skos:prefLabel "CmsConcept 41" .
}

ns180:CmsImage0 {
    ns180:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:organization2 .
}

ns345:Thumbnail800x800 {
    ns387:CmsImage0 foaf:thumbnail ns345:Thumbnail800x800 .

    ns345:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns387:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:105 .
}

ns346:Thumbnail600x600 {
    ns320:CmsImage0 foaf:thumbnail ns346:Thumbnail600x600 .

    ns346:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns320:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns237:work3 .
}

ns138:Thumbnail200x200 {
    ns138:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns441:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:63 .

    ns441:CmsImage0 foaf:thumbnail ns138:Thumbnail200x200 .
}

ns347:CmsImage0 {
    ns347:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:77 .
}

ns348:Thumbnail600x600 {
    ns348:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns258:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:freestandingwork11 .

    ns258:CmsImage0 foaf:thumbnail ns348:Thumbnail600x600 .
}

ns186:Thumbnail400x400 {
    ns186:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns386:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:28 .

    ns386:CmsImage0 foaf:thumbnail ns186:Thumbnail400x400 .
}

ns349:CmsImage1 {
    ns349:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:72 .
}

ns350:CmsImage0 {
    ns350:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type image 0 rights holder" ;
        dcterms:title "Type image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:type .
}

ns351:Thumbnail600x600 {
    ns439:CmsImage0 foaf:thumbnail ns351:Thumbnail600x600 .

    ns351:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns439:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:42 .
}

ns90:Thumbnail200x200 {
    ns90:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns425:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:1 .

    ns425:CmsImage0 foaf:thumbnail ns90:Thumbnail200x200 .
}

ns267:Thumbnail200x200 {
    ns267:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns339:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:53 .

    ns339:CmsImage0 foaf:thumbnail ns267:Thumbnail200x200 .
}

ns352:Thumbnail400x400 {
    ns71:CmsImage0 foaf:thumbnail ns352:Thumbnail400x400 .

    ns352:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns71:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:96 .
}

ns212:Thumbnail200x200 {
    ns212:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns294:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:99 .

    ns294:CmsImage1 foaf:thumbnail ns212:Thumbnail200x200 .
}

ns100:Thumbnail400x400 {
    ns100:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns383:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:79 .

    ns383:CmsImage0 foaf:thumbnail ns100:Thumbnail400x400 .
}

ns56:Thumbnail600x600 {
    ns56:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns358:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns237:work0 .

    ns358:CmsImage0 foaf:thumbnail ns56:Thumbnail600x600 .
}

ns54:Thumbnail600x600 {
    ns54:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns317:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:18 .

    ns317:CmsImage1 foaf:thumbnail ns54:Thumbnail600x600 .
}

ns237:work2Location {
    ns237:work2Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns230:Thumbnail800x800 {
    ns230:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns217:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:23 .

    ns217:CmsImage1 foaf:thumbnail ns230:Thumbnail800x800 .
}

ns10:organization4 {
    ns10:organization4 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 4" ;
        foaf:page ns10:organization4page .
}

ns353:Thumbnail400x400 {
    ns41:CmsImage0 foaf:thumbnail ns353:Thumbnail400x400 .

    ns353:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns41:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:97 .
}

ns151:CmsImage0 {
    ns151:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:person0 .
}

ns354:CmsImage0 {
    ns354:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:85 .
}

ns342:Thumbnail600x600 {
    ns342:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns446:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:9 .

    ns446:CmsImage0 foaf:thumbnail ns342:Thumbnail600x600 .
}

ns312:CmsImage0 {
    ns312:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:49 .
}

ns83:Thumbnail200x200 {
    ns83:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns354:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:85 .

    ns354:CmsImage1 foaf:thumbnail ns83:Thumbnail200x200 .
}

ns205:Thumbnail200x200 {
    ns205:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial image 0 rights holder" ;
        dcterms:title "Spatial image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns123:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:spatial .

    ns123:CmsImage0 foaf:thumbnail ns205:Thumbnail200x200 .
}

ns1:63 {
    ns1:63 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 3" ;
        skos:prefLabel "CmsConcept 63" .
}

ns67:Thumbnail400x400 {
    ns67:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns295:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:12 .

    ns295:CmsImage1 foaf:thumbnail ns67:Thumbnail400x400 .
}

ns299:Thumbnail400x400 {
    ns299:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material image 0 rights holder" ;
        dcterms:title "Material image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns222:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts vra:material .

    ns222:CmsImage0 foaf:thumbnail ns299:Thumbnail400x400 .
}

ns275:Thumbnail200x200 {
    ns275:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns333:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:107 .

    ns333:CmsImage0 foaf:thumbnail ns275:Thumbnail200x200 .
}

ns92:Thumbnail400x400 {
    ns92:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns312:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:49 .

    ns312:CmsImage0 foaf:thumbnail ns92:Thumbnail400x400 .
}

ns8:Thumbnail800x800 {
    ns8:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns414:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns19:work4 .

    ns414:CmsImage0 foaf:thumbnail ns8:Thumbnail800x800 .
}

ns355:CmsImage1 {
    ns355:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:45 .
}

ns1:56 {
    ns1:56 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 6" ;
        skos:prefLabel "CmsConcept 56" .
}

ns171:Thumbnail600x600 {
    ns171:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns5:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns19:work7 .

    ns5:CmsImage1 foaf:thumbnail ns171:Thumbnail600x600 .
}

ns352:Thumbnail800x800 {
    ns352:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns71:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:96 .

    ns71:CmsImage0 foaf:thumbnail ns352:Thumbnail800x800 .
}

ns356:CmsImage1 {
    ns356:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:26 .
}

ns344:Thumbnail600x600 {
    ns344:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns444:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:59 .

    ns444:CmsImage1 foaf:thumbnail ns344:Thumbnail600x600 .
}

ns238:Thumbnail600x600 {
    ns238:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns129:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:67 .

    ns129:CmsImage1 foaf:thumbnail ns238:Thumbnail600x600 .
}

ns101:Thumbnail800x800 {
    ns101:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns129:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:67 .

    ns129:CmsImage0 foaf:thumbnail ns101:Thumbnail800x800 .
}

ns262:CmsImage0 {
    ns262:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:94 .
}

ns237:work3Location {
    ns237:work3Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns357:Thumbnail800x800 {
    ns357:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns15:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:16 .

    ns15:CmsImage1 foaf:thumbnail ns357:Thumbnail800x800 .
}

ns77:Thumbnail400x400 {
    ns77:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns439:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:42 .

    ns439:CmsImage1 foaf:thumbnail ns77:Thumbnail400x400 .
}

ns358:CmsImage0 {
    ns358:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns237:work0 .
}

ns17:CmsImage0 {
    ns17:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:86 .
}

ns243:Thumbnail800x800 {
    ns243:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns188:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:56 .

    ns188:CmsImage1 foaf:thumbnail ns243:Thumbnail800x800 .
}

ns68:Thumbnail800x800 {
    ns68:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns437:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:91 .

    ns437:CmsImage0 foaf:thumbnail ns68:Thumbnail800x800 .
}

ns335:CmsImage0 {
    ns335:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:54 .
}

ns313:CmsImage1 {
    ns313:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:32 .
}

ns359:Thumbnail200x200 {
    ns359:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns74:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:92 .

    ns74:CmsImage0 foaf:thumbnail ns359:Thumbnail200x200 .
}

ns1:13 {
    ns1:13 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 3" ;
        skos:prefLabel "CmsConcept 13" .
}

ns310:Thumbnail800x800 {
    ns310:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns347:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:77 .

    ns347:CmsImage1 foaf:thumbnail ns310:Thumbnail800x800 .
}

ns60:Thumbnail800x800 {
    ns60:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher image 1 rights holder" ;
        dcterms:title "Publisher image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns130:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:publisher .

    ns130:CmsImage1 foaf:thumbnail ns60:Thumbnail800x800 .
}

ns168:Thumbnail600x600 {
    ns168:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns5:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns19:work7 .

    ns5:CmsImage0 foaf:thumbnail ns168:Thumbnail600x600 .
}

ns1:17 {
    ns1:17 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 7" ;
        skos:prefLabel "CmsConcept 17" .
}

_:Ne85a14f001c340c5a566928f06fcd38a {
    _:Ne85a14f001c340c5a566928f06fcd38a a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:Ndc336b4aa3c44a319624566d26a0105c ;
        dcterms:title "CmsCollection0CmsWork3 closing" ;
        cms:work ns237:work3 .

    _:Ndc336b4aa3c44a319624566d26a0105c a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns360:CmsImage1 {
    ns360:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:62 .
}

ns361:Thumbnail600x600 {
    ns408:CmsImage1 foaf:thumbnail ns361:Thumbnail600x600 .

    ns361:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns408:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:47 .
}

ns207:Thumbnail800x800 {
    ns207:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns306:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:person2 .

    ns306:CmsImage0 foaf:thumbnail ns207:Thumbnail800x800 .
}

ns362:Thumbnail400x400 {
    ns362:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns283:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:5 .

    ns283:CmsImage1 foaf:thumbnail ns362:Thumbnail400x400 .
}

ns1:81 {
    ns1:81 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 1" ;
        skos:prefLabel "CmsConcept 81" .
}

ns363:Thumbnail200x200 {
    ns328:CmsImage0 foaf:thumbnail ns363:Thumbnail200x200 .

    ns363:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns328:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:2 .
}

ns78:Thumbnail400x400 {
    ns78:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns446:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:9 .

    ns446:CmsImage1 foaf:thumbnail ns78:Thumbnail400x400 .
}

ns352:Thumbnail200x200 {
    ns352:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns71:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:96 .

    ns71:CmsImage0 foaf:thumbnail ns352:Thumbnail200x200 .
}

ns364:Thumbnail400x400 {
    ns442:CmsImage1 foaf:thumbnail ns364:Thumbnail400x400 .

    ns364:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns442:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:106 .
}

ns65:Thumbnail400x400 {
    ns65:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns220:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:103 .

    ns220:CmsImage1 foaf:thumbnail ns65:Thumbnail400x400 .
}

ns248:CmsImage0 {
    ns248:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:35 .
}

ns365:CmsImage0 {
    ns365:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:69 .
}

ns247:Thumbnail400x400 {
    ns247:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns15:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:16 .

    ns15:CmsImage0 foaf:thumbnail ns247:Thumbnail400x400 .
}

ns366:CmsImage0 {
    ns366:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:48 .
}

ns117:Thumbnail400x400 {
    ns117:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns114:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:93 .

    ns114:CmsImage0 foaf:thumbnail ns117:Thumbnail400x400 .
}

ns1:96 {
    ns1:96 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 6" ;
        skos:prefLabel "CmsConcept 96" .
}

ns265:Thumbnail200x200 {
    ns265:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns343:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:98 .

    ns343:CmsImage1 foaf:thumbnail ns265:Thumbnail200x200 .
}

ns367:Thumbnail600x600 {
    ns414:CmsImage1 foaf:thumbnail ns367:Thumbnail600x600 .

    ns367:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns414:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns19:work4 .
}

ns19:work7 {
    ns19:work7 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork7 alternative title 0",
            "CmsCollection1CmsWork7 alternative title 1" ;
        dcterms:contributor _:N71aa125fed634ac3a55b3e7c33ffae55,
            _:Nfb42d45daa2e4b6085bc4c60dc2c6870 ;
        dcterms:creator ns10:organization0,
            ns10:person4 ;
        dcterms:extent ns1:17,
            ns1:18 ;
        dcterms:identifier "CmsCollection1CmsWork7Id0",
            "CmsCollection1CmsWork7Id1" ;
        dcterms:language ns1:27,
            ns1:28 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns1:47,
            ns1:48 ;
        dcterms:provenance "CmsCollection1CmsWork7 provenance 0",
            "CmsCollection1CmsWork7 provenance 1" ;
        dcterms:publisher ns1:57,
            ns1:58 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 rights holder" ;
        dcterms:source ns1:67,
            ns1:68 ;
        dcterms:spatial ns19:work7Location ;
        dcterms:subject ns1:87,
            ns1:88 ;
        dcterms:title "CmsCollection1CmsWork7" ;
        dcterms:type ns1:107,
            ns1:108 ;
        vra:culturalContext ns1:7,
            ns1:8 ;
        vra:material ns1:37,
            ns1:38 ;
        vra:technique ns1:97,
            ns1:98 ;
        cms:collection ns10:collection1 ;
        owl:sameAs wd:Q937690 .

    _:N71aa125fed634ac3a55b3e7c33ffae55 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork7 contributor 0" .

    _:Nfb42d45daa2e4b6085bc4c60dc2c6870 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork7 contributor 1" .
}

ns144:Thumbnail600x600 {
    ns144:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Description image 1 rights holder" ;
        dcterms:title "Description image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns140:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:description .

    ns140:CmsImage1 foaf:thumbnail ns144:Thumbnail600x600 .
}

ns332:CmsImage1 {
    ns332:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:40 .
}

ns240:Thumbnail600x600 {
    ns240:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns294:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:99 .

    ns294:CmsImage0 foaf:thumbnail ns240:Thumbnail600x600 .
}

ns144:Thumbnail800x800 {
    ns144:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Description image 1 rights holder" ;
        dcterms:title "Description image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns140:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:description .

    ns140:CmsImage1 foaf:thumbnail ns144:Thumbnail800x800 .
}

ns1:66 {
    ns1:66 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 6" ;
        skos:prefLabel "CmsConcept 66" .
}

ns10:person0 {
    ns10:person0 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing> ;
        contact:sortName "0, CmsPerson" ;
        owl:sameAs wd:Q7251 ;
        foaf:familyName "0" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 0" ;
        foaf:page ns10:person0page .
}

ns10:freestandingwork10Creation {
    ns10:freestandingwork10Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns10:organization2,
            ns10:organization3 ;
        dcterms:date _:N15d4257426a4404f9eff203db84e87da ;
        dcterms:description _:Nb0b286586234435e92539fd3146f4f80 ;
        dcterms:spatial ns10:freestandingwork10Location ;
        dcterms:title "FreestandingWork10 creation" ;
        cms:work ns10:freestandingwork10 .

    _:N15d4257426a4404f9eff203db84e87da a cms:DateTimeDescription ;
        time:day "---22"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:Nb0b286586234435e92539fd3146f4f80 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns149:Thumbnail800x800 {
    ns149:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Title image 0 rights holder" ;
        dcterms:title "Title image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns324:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:title .

    ns324:CmsImage0 foaf:thumbnail ns149:Thumbnail800x800 .
}

ns135:Thumbnail200x200 {
    ns135:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns412:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:37 .

    ns412:CmsImage1 foaf:thumbnail ns135:Thumbnail200x200 .
}

ns167:Thumbnail600x600 {
    ns167:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns179:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:43 .

    ns179:CmsImage0 foaf:thumbnail ns167:Thumbnail600x600 .
}

ns165:Thumbnail800x800 {
    ns165:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns427:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns237:work2 .

    ns427:CmsImage1 foaf:thumbnail ns165:Thumbnail800x800 .
}

ns330:Thumbnail800x800 {
    ns330:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns315:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:102 .

    ns315:CmsImage1 foaf:thumbnail ns330:Thumbnail800x800 .
}

ns135:Thumbnail800x800 {
    ns135:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns412:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:37 .

    ns412:CmsImage1 foaf:thumbnail ns135:Thumbnail800x800 .
}

ns368:Thumbnail600x600 {
    ns398:CmsImage0 foaf:thumbnail ns368:Thumbnail600x600 .

    ns368:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns398:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:89 .
}

ns111:Thumbnail400x400 {
    ns111:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns317:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:18 .

    ns317:CmsImage0 foaf:thumbnail ns111:Thumbnail400x400 .
}

ns99:Thumbnail800x800 {
    ns99:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns355:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:45 .

    ns355:CmsImage0 foaf:thumbnail ns99:Thumbnail800x800 .
}

ns99:Thumbnail600x600 {
    ns99:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns355:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:45 .

    ns355:CmsImage0 foaf:thumbnail ns99:Thumbnail600x600 .
}

ns369:CmsImage1 {
    ns369:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:87 .
}

ns282:Thumbnail200x200 {
    ns282:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns262:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:94 .

    ns262:CmsImage0 foaf:thumbnail ns282:Thumbnail200x200 .
}

ns230:Thumbnail400x400 {
    ns230:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns217:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:23 .

    ns217:CmsImage1 foaf:thumbnail ns230:Thumbnail400x400 .
}

ns120:Thumbnail600x600 {
    ns120:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns18:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:74 .

    ns18:CmsImage0 foaf:thumbnail ns120:Thumbnail600x600 .
}

ns134:Thumbnail400x400 {
    ns134:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns203:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:109 .

    ns203:CmsImage0 foaf:thumbnail ns134:Thumbnail400x400 .
}

ns43:CmsImage0 {
    ns43:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique image 0 rights holder" ;
        dcterms:title "Technique image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts vra:technique .
}

ns267:Thumbnail800x800 {
    ns267:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns339:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:53 .

    ns339:CmsImage0 foaf:thumbnail ns267:Thumbnail800x800 .
}

ns265:Thumbnail400x400 {
    ns265:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns343:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:98 .

    ns343:CmsImage1 foaf:thumbnail ns265:Thumbnail400x400 .
}

ns370:Thumbnail200x200 {
    ns370:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns124:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:13 .

    ns124:CmsImage0 foaf:thumbnail ns370:Thumbnail200x200 .
}

ns234:Thumbnail200x200 {
    ns234:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns408:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:47 .

    ns408:CmsImage0 foaf:thumbnail ns234:Thumbnail200x200 .
}

ns108:Thumbnail600x600 {
    ns108:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns360:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:62 .

    ns360:CmsImage0 foaf:thumbnail ns108:Thumbnail600x600 .
}

ns343:CmsImage1 {
    ns343:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:98 .
}

ns371:Thumbnail600x600 {
    ns371:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns335:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:54 .

    ns335:CmsImage1 foaf:thumbnail ns371:Thumbnail600x600 .
}

ns372:Thumbnail600x600 {
    ns358:CmsImage1 foaf:thumbnail ns372:Thumbnail600x600 .

    ns372:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns358:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns237:work0 .
}

ns183:Thumbnail600x600 {
    ns183:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher image 0 rights holder" ;
        dcterms:title "Publisher image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns130:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:publisher .

    ns130:CmsImage0 foaf:thumbnail ns183:Thumbnail600x600 .
}

ns210:Thumbnail400x400 {
    ns210:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns395:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:61 .

    ns395:CmsImage0 foaf:thumbnail ns210:Thumbnail400x400 .
}

ns92:Thumbnail600x600 {
    ns92:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns312:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:49 .

    ns312:CmsImage0 foaf:thumbnail ns92:Thumbnail600x600 .
}

ns105:Thumbnail400x400 {
    ns105:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns434:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:14 .

    ns434:CmsImage0 foaf:thumbnail ns105:Thumbnail400x400 .
}

ns208:CmsImage0 {
    ns208:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:75 .
}

ns267:Thumbnail600x600 {
    ns267:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns339:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:53 .

    ns339:CmsImage0 foaf:thumbnail ns267:Thumbnail600x600 .
}

ns168:Thumbnail200x200 {
    ns168:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns5:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns19:work7 .

    ns5:CmsImage0 foaf:thumbnail ns168:Thumbnail200x200 .
}

ns341:Thumbnail600x600 {
    ns341:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject image 0 rights holder" ;
        dcterms:title "Subject image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns430:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:subject .

    ns430:CmsImage0 foaf:thumbnail ns341:Thumbnail600x600 .
}

ns33:Thumbnail400x400 {
    ns33:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns390:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:person3 .

    ns390:CmsImage1 foaf:thumbnail ns33:Thumbnail400x400 .
}

ns63:Thumbnail400x400 {
    ns63:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns110:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:51 .

    ns110:CmsImage1 foaf:thumbnail ns63:Thumbnail400x400 .
}

ns368:Thumbnail400x400 {
    ns368:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns398:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:89 .

    ns398:CmsImage0 foaf:thumbnail ns368:Thumbnail400x400 .
}

ns21:Thumbnail400x400 {
    ns21:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns405:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns237:work1 .

    ns405:CmsImage1 foaf:thumbnail ns21:Thumbnail400x400 .
}

ns106:Thumbnail200x200 {
    ns106:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns397:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:3 .

    ns397:CmsImage0 foaf:thumbnail ns106:Thumbnail200x200 .
}

ns93:Thumbnail400x400 {
    ns93:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns228:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:organization4 .

    ns228:CmsImage1 foaf:thumbnail ns93:Thumbnail400x400 .
}

ns150:CmsImage1 {
    ns150:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:15 .
}

ns121:Thumbnail400x400 {
    ns121:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns300:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:24 .

    ns300:CmsImage0 foaf:thumbnail ns121:Thumbnail400x400 .
}

ns172:Thumbnail400x400 {
    ns172:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns258:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:freestandingwork11 .

    ns258:CmsImage1 foaf:thumbnail ns172:Thumbnail400x400 .
}

ns35:Thumbnail800x800 {
    ns35:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns225:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:6 .

    ns225:CmsImage0 foaf:thumbnail ns35:Thumbnail800x800 .
}

ns272:Thumbnail600x600 {
    ns272:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns390:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:person3 .

    ns390:CmsImage0 foaf:thumbnail ns272:Thumbnail600x600 .
}

ns373:CmsImage1 {
    ns373:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:55 .
}

ns374:CmsImage0 {
    ns374:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:95 .
}

ns1:10 {
    ns1:10 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 0" ;
        skos:prefLabel "CmsConcept 10" .
}

ns375:Thumbnail800x800 {
    ns375:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns197:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:organization3 .

    ns197:CmsImage1 foaf:thumbnail ns375:Thumbnail800x800 .
}

ns61:Thumbnail400x400 {
    ns61:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns276:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:organization1 .

    ns276:CmsImage1 foaf:thumbnail ns61:Thumbnail400x400 .
}

ns55:Thumbnail400x400 {
    ns55:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source image 1 rights holder" ;
        dcterms:title "Source image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns66:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:source .

    ns66:CmsImage1 foaf:thumbnail ns55:Thumbnail400x400 .
}

ns346:Thumbnail200x200 {
    ns346:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns320:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns237:work3 .

    ns320:CmsImage0 foaf:thumbnail ns346:Thumbnail200x200 .
}

ns70:Thumbnail400x400 {
    ns70:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns440:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:73 .

    ns440:CmsImage1 foaf:thumbnail ns70:Thumbnail400x400 .
}

ns167:Thumbnail400x400 {
    ns167:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns179:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:43 .

    ns179:CmsImage0 foaf:thumbnail ns167:Thumbnail400x400 .
}

ns374:CmsImage1 {
    ns374:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:95 .
}

ns205:Thumbnail400x400 {
    ns205:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial image 0 rights holder" ;
        dcterms:title "Spatial image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns123:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:spatial .

    ns123:CmsImage0 foaf:thumbnail ns205:Thumbnail400x400 .
}

ns1:99 {
    ns1:99 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 9" ;
        skos:prefLabel "CmsConcept 99" .
}

ns268:Thumbnail400x400 {
    ns268:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:84 .

    ns399:CmsImage1 foaf:thumbnail ns268:Thumbnail400x400 .
}

ns326:Thumbnail800x800 {
    ns326:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns334:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:104 .

    ns334:CmsImage1 foaf:thumbnail ns326:Thumbnail800x800 .
}

ns266:Thumbnail800x800 {
    ns266:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns369:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:87 .

    ns369:CmsImage1 foaf:thumbnail ns266:Thumbnail800x800 .
}

ns110:CmsImage0 {
    ns110:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:51 .
}

ns257:Thumbnail800x800 {
    ns257:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns312:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:49 .

    ns312:CmsImage1 foaf:thumbnail ns257:Thumbnail800x800 .
}

ns253:Thumbnail200x200 {
    ns253:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns195:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:person4 .

    ns195:CmsImage0 foaf:thumbnail ns253:Thumbnail200x200 .
}

ns321:Thumbnail800x800 {
    ns321:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns391:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:21 .

    ns391:CmsImage1 foaf:thumbnail ns321:Thumbnail800x800 .
}

ns376:CmsImage1 {
    ns376:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:76 .
}

ns377:CmsImage0 {
    ns377:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:46 .
}

ns1:60 {
    ns1:60 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 0" ;
        skos:prefLabel "CmsConcept 60" .
}

ns336:CmsImage1 {
    ns336:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:81 .
}

ns38:Thumbnail200x200 {
    ns38:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns412:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:37 .

    ns412:CmsImage0 foaf:thumbnail ns38:Thumbnail200x200 .
}

ns378:Thumbnail400x400 {
    ns378:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:69 .

    ns365:CmsImage0 foaf:thumbnail ns378:Thumbnail400x400 .
}

ns83:Thumbnail600x600 {
    ns83:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns354:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:85 .

    ns354:CmsImage1 foaf:thumbnail ns83:Thumbnail600x600 .
}

ns330:Thumbnail600x600 {
    ns330:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns315:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:102 .

    ns315:CmsImage1 foaf:thumbnail ns330:Thumbnail600x600 .
}

ns379:Thumbnail200x200 {
    ns379:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique image 0 rights holder" ;
        dcterms:title "Technique image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns43:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts vra:technique .

    ns43:CmsImage0 foaf:thumbnail ns379:Thumbnail200x200 .
}

ns334:CmsImage0 {
    ns334:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:104 .
}

ns20:Thumbnail800x800 {
    ns20:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source image 0 rights holder" ;
        dcterms:title "Source image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns66:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:source .

    ns66:CmsImage0 foaf:thumbnail ns20:Thumbnail800x800 .
}

ns323:Thumbnail400x400 {
    ns323:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns411:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:88 .

    ns411:CmsImage1 foaf:thumbnail ns323:Thumbnail400x400 .
}

ns321:Thumbnail200x200 {
    ns321:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns391:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:21 .

    ns391:CmsImage1 foaf:thumbnail ns321:Thumbnail200x200 .
}

ns380:CmsImage0 {
    ns380:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:64 .
}

ns381:Thumbnail800x800 {
    ns306:CmsImage1 foaf:thumbnail ns381:Thumbnail800x800 .

    ns381:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns306:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:person2 .
}

ns30:Thumbnail200x200 {
    ns30:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns384:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:39 .

    ns384:CmsImage1 foaf:thumbnail ns30:Thumbnail200x200 .
}

ns382:Thumbnail400x400 {
    ns382:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns180:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:organization2 .

    ns180:CmsImage0 foaf:thumbnail ns382:Thumbnail400x400 .
}

ns194:Thumbnail200x200 {
    ns194:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:78 .

    ns396:CmsImage1 foaf:thumbnail ns194:Thumbnail200x200 .
}

ns383:CmsImage0 {
    ns383:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:79 .
}

ns79:Thumbnail800x800 {
    ns79:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns233:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:22 .

    ns233:CmsImage1 foaf:thumbnail ns79:Thumbnail800x800 .
}

ns238:Thumbnail800x800 {
    ns238:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns129:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:67 .

    ns129:CmsImage1 foaf:thumbnail ns238:Thumbnail800x800 .
}

ns337:Thumbnail200x200 {
    ns337:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns316:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:65 .

    ns316:CmsImage0 foaf:thumbnail ns337:Thumbnail200x200 .
}

ns67:Thumbnail600x600 {
    ns67:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns295:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:12 .

    ns295:CmsImage1 foaf:thumbnail ns67:Thumbnail600x600 .
}

ns186:Thumbnail200x200 {
    ns186:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns386:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:28 .

    ns386:CmsImage0 foaf:thumbnail ns186:Thumbnail200x200 .
}

ns1:39 {
    ns1:39 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 9" ;
        skos:prefLabel "CmsConcept 39" .
}

ns219:Thumbnail400x400 {
    ns219:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns423:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:68 .

    ns423:CmsImage1 foaf:thumbnail ns219:Thumbnail400x400 .
}

ns257:Thumbnail400x400 {
    ns257:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns312:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:49 .

    ns312:CmsImage1 foaf:thumbnail ns257:Thumbnail400x400 .
}

ns363:Thumbnail800x800 {
    ns363:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns328:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:2 .

    ns328:CmsImage0 foaf:thumbnail ns363:Thumbnail800x800 .
}

ns1:93 {
    ns1:93 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 3" ;
        skos:prefLabel "CmsConcept 93" .
}

ns201:Thumbnail800x800 {
    ns201:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns153:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:29 .

    ns153:CmsImage0 foaf:thumbnail ns201:Thumbnail800x800 .
}

ns153:CmsImage1 {
    ns153:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:29 .
}

ns237:work3 {
    ns237:work3 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork3 alternative title 0",
            "CmsCollection0CmsWork3 alternative title 1" ;
        dcterms:contributor _:N38a22eb479554628810eebedf9f83c1e,
            _:N8e0a3c6d200d4591bb764282907d2f85 ;
        dcterms:creator ns10:person0,
            ns10:person1 ;
        dcterms:extent ns1:13,
            ns1:14 ;
        dcterms:identifier "CmsCollection0CmsWork3Id0",
            "CmsCollection0CmsWork3Id1" ;
        dcterms:language ns1:23,
            ns1:24 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns1:43,
            ns1:44 ;
        dcterms:provenance "CmsCollection0CmsWork3 provenance 0",
            "CmsCollection0CmsWork3 provenance 1" ;
        dcterms:publisher ns1:53,
            ns1:54 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 rights holder" ;
        dcterms:source ns1:63,
            ns1:64 ;
        dcterms:spatial ns237:work3Location ;
        dcterms:subject ns1:83,
            ns1:84 ;
        dcterms:title "CmsCollection0CmsWork3" ;
        dcterms:type ns1:103,
            ns1:104 ;
        vra:culturalContext ns1:3,
            ns1:4 ;
        vra:material ns1:33,
            ns1:34 ;
        vra:technique ns1:93,
            ns1:94 ;
        cms:collection ns10:collection0 ;
        owl:sameAs wd:Q937690 .

    _:N38a22eb479554628810eebedf9f83c1e a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork3 contributor 0" .

    _:N8e0a3c6d200d4591bb764282907d2f85 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork3 contributor 1" .
}

ns384:CmsImage1 {
    ns384:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:39 .
}

ns93:Thumbnail800x800 {
    ns93:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns228:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:organization4 .

    ns228:CmsImage1 foaf:thumbnail ns93:Thumbnail800x800 .
}

ns98:Thumbnail600x600 {
    ns98:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns198:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:82 .

    ns198:CmsImage1 foaf:thumbnail ns98:Thumbnail600x600 .
}

ns385:CmsImage1 {
    ns385:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:0 .
}

ns346:Thumbnail400x400 {
    ns346:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns320:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns237:work3 .

    ns320:CmsImage0 foaf:thumbnail ns346:Thumbnail400x400 .
}

ns386:CmsImage1 {
    ns386:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:28 .
}

ns127:Thumbnail400x400 {
    ns127:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns76:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:60 .

    ns76:CmsImage0 foaf:thumbnail ns127:Thumbnail400x400 .
}

ns161:Thumbnail400x400 {
    ns161:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns217:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:23 .

    ns217:CmsImage0 foaf:thumbnail ns161:Thumbnail400x400 .
}

ns387:CmsImage1 {
    ns387:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:105 .
}

ns388:Thumbnail800x800 {
    ns395:CmsImage1 foaf:thumbnail ns388:Thumbnail800x800 .

    ns388:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns395:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:61 .
}

ns86:Thumbnail400x400 {
    ns86:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns289:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:38 .

    ns289:CmsImage0 foaf:thumbnail ns86:Thumbnail400x400 .
}

ns263:Thumbnail200x200 {
    ns263:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns374:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:95 .

    ns374:CmsImage1 foaf:thumbnail ns263:Thumbnail200x200 .
}

ns215:Thumbnail400x400 {
    ns215:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium image 1 rights holder" ;
        dcterms:title "Medium image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns146:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:medium .

    ns146:CmsImage1 foaf:thumbnail ns215:Thumbnail400x400 .
}

ns389:CmsImage0 {
    ns389:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:100 .
}

ns109:Thumbnail400x400 {
    ns109:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns315:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:102 .

    ns315:CmsImage0 foaf:thumbnail ns109:Thumbnail400x400 .
}

ns390:CmsImage0 {
    ns390:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:person3 .
}

ns382:Thumbnail200x200 {
    ns382:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns180:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:organization2 .

    ns180:CmsImage0 foaf:thumbnail ns382:Thumbnail200x200 .
}

ns10:organization3 {
    ns10:organization3 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 3" ;
        foaf:page ns10:organization3page .
}

ns226:Thumbnail600x600 {
    ns226:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language image 1 rights holder" ;
        dcterms:title "Language image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns118:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:language .

    ns118:CmsImage1 foaf:thumbnail ns226:Thumbnail600x600 .
}

ns183:Thumbnail800x800 {
    ns183:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher image 0 rights holder" ;
        dcterms:title "Publisher image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns130:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:publisher .

    ns130:CmsImage0 foaf:thumbnail ns183:Thumbnail800x800 .
}

ns230:Thumbnail200x200 {
    ns230:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns217:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:23 .

    ns217:CmsImage1 foaf:thumbnail ns230:Thumbnail200x200 .
}

ns298:Thumbnail400x400 {
    ns298:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns376:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:76 .

    ns376:CmsImage1 foaf:thumbnail ns298:Thumbnail400x400 .
}

ns44:Thumbnail400x400 {
    ns44:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns380:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:64 .

    ns380:CmsImage0 foaf:thumbnail ns44:Thumbnail400x400 .
}

ns194:Thumbnail400x400 {
    ns194:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:78 .

    ns396:CmsImage1 foaf:thumbnail ns194:Thumbnail400x400 .
}

ns391:CmsImage1 {
    ns391:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:21 .
}

ns347:CmsImage1 {
    ns347:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:77 .
}

ns346:Thumbnail800x800 {
    ns346:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns320:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns237:work3 .

    ns320:CmsImage0 foaf:thumbnail ns346:Thumbnail800x800 .
}

ns91:Thumbnail200x200 {
    ns91:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns443:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:70 .

    ns443:CmsImage1 foaf:thumbnail ns91:Thumbnail200x200 .
}

ns281:Thumbnail600x600 {
    ns281:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns327:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:31 .

    ns327:CmsImage0 foaf:thumbnail ns281:Thumbnail600x600 .
}

ns299:Thumbnail200x200 {
    ns299:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material image 0 rights holder" ;
        dcterms:title "Material image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns222:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts vra:material .

    ns222:CmsImage0 foaf:thumbnail ns299:Thumbnail200x200 .
}

ns325:Thumbnail600x600 {
    ns325:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns369:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:87 .

    ns369:CmsImage0 foaf:thumbnail ns325:Thumbnail600x600 .
}

ns314:Thumbnail400x400 {
    ns314:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns411:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:88 .

    ns411:CmsImage0 foaf:thumbnail ns314:Thumbnail400x400 .
}

ns1:48 {
    ns1:48 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 8" ;
        skos:prefLabel "CmsConcept 48" .
}

ns218:Thumbnail800x800 {
    ns218:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns443:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:70 .

    ns443:CmsImage0 foaf:thumbnail ns218:Thumbnail800x800 .
}

ns236:Thumbnail600x600 {
    ns236:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language image 0 rights holder" ;
        dcterms:title "Language image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns118:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:language .

    ns118:CmsImage0 foaf:thumbnail ns236:Thumbnail600x600 .
}

ns357:Thumbnail600x600 {
    ns357:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns15:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:16 .

    ns15:CmsImage1 foaf:thumbnail ns357:Thumbnail600x600 .
}

ns392:CmsImage1 {
    ns392:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent image 1 rights holder" ;
        dcterms:title "Extent image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:extent .
}

ns132:Thumbnail200x200 {
    ns132:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns398:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:89 .

    ns398:CmsImage1 foaf:thumbnail ns132:Thumbnail200x200 .
}

ns135:Thumbnail400x400 {
    ns135:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns412:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:37 .

    ns412:CmsImage1 foaf:thumbnail ns135:Thumbnail400x400 .
}

ns1:97 {
    ns1:97 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 7" ;
        skos:prefLabel "CmsConcept 97" .
}

ns56:Thumbnail400x400 {
    ns56:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns358:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns237:work0 .

    ns358:CmsImage0 foaf:thumbnail ns56:Thumbnail400x400 .
}

ns237:work0 {
    ns237:work0 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork0 alternative title 0",
            "CmsCollection0CmsWork0 alternative title 1" ;
        dcterms:contributor _:N344061648aa84089b7cfb52f3c9775f7,
            _:Nf7553ba801214514ae50f2bd57906a93 ;
        dcterms:creator ns10:organization2,
            ns10:organization3 ;
        dcterms:description _:N11483f490aee4bc99110bdfe899f7b25 ;
        dcterms:extent ns1:10,
            ns1:11 ;
        dcterms:identifier "CmsCollection0CmsWork0Id0",
            "CmsCollection0CmsWork0Id1" ;
        dcterms:language ns1:20,
            ns1:21 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns1:40,
            ns1:41 ;
        dcterms:provenance "CmsCollection0CmsWork0 provenance 0",
            "CmsCollection0CmsWork0 provenance 1" ;
        dcterms:publisher ns1:50,
            ns1:51 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 rights holder" ;
        dcterms:source ns1:60,
            ns1:61 ;
        dcterms:spatial ns237:work0Location ;
        dcterms:subject ns1:80,
            ns1:81 ;
        dcterms:title "CmsCollection0CmsWork0" ;
        dcterms:type ns1:100,
            ns1:101 ;
        vra:culturalContext ns1:0,
            ns1:1 ;
        vra:material ns1:30,
            ns1:31 ;
        vra:technique ns1:90,
            ns1:91 ;
        cms:collection ns10:collection0 ;
        owl:sameAs wd:Q937690 ;
        foaf:page <http://example.com/work/0> .

    _:N344061648aa84089b7cfb52f3c9775f7 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork0 contributor 0" .

    _:Nf7553ba801214514ae50f2bd57906a93 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork0 contributor 1" .

    _:N11483f490aee4bc99110bdfe899f7b25 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns211:Thumbnail400x400 {
    ns211:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns420:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:27 .

    ns420:CmsImage1 foaf:thumbnail ns211:Thumbnail400x400 .
}

ns1:36 {
    ns1:36 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 6" ;
        skos:prefLabel "CmsConcept 36" .
}

ns249:Thumbnail600x600 {
    ns249:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns174:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:organization0 .

    ns174:CmsImage0 foaf:thumbnail ns249:Thumbnail600x600 .
}

ns364:Thumbnail200x200 {
    ns364:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns442:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:106 .

    ns442:CmsImage1 foaf:thumbnail ns364:Thumbnail200x200 .
}

ns325:Thumbnail800x800 {
    ns325:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns369:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:87 .

    ns369:CmsImage0 foaf:thumbnail ns325:Thumbnail800x800 .
}

ns80:Thumbnail400x400 {
    ns80:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns377:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:46 .

    ns377:CmsImage1 foaf:thumbnail ns80:Thumbnail400x400 .
}

ns34:Thumbnail200x200 {
    ns34:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns406:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:58 .

    ns406:CmsImage0 foaf:thumbnail ns34:Thumbnail200x200 .
}

ns344:Thumbnail200x200 {
    ns344:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns444:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:59 .

    ns444:CmsImage1 foaf:thumbnail ns344:Thumbnail200x200 .
}

ns200:Thumbnail400x400 {
    ns200:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns254:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:10 .

    ns254:CmsImage0 foaf:thumbnail ns200:Thumbnail400x400 .
}

ns337:Thumbnail800x800 {
    ns337:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns316:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:65 .

    ns316:CmsImage0 foaf:thumbnail ns337:Thumbnail800x800 .
}

ns372:Thumbnail200x200 {
    ns372:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns358:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns237:work0 .

    ns358:CmsImage1 foaf:thumbnail ns372:Thumbnail200x200 .
}

ns393:Thumbnail600x600 {
    ns416:CmsImage0 foaf:thumbnail ns393:Thumbnail600x600 .

    ns393:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns416:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:57 .
}

ns10:freestandingwork9Creation {
    ns10:freestandingwork9Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns10:organization1,
            ns10:organization2 ;
        dcterms:date _:Nfb1ee667319744b8af8e2955476f101a ;
        dcterms:spatial ns10:freestandingwork9Location ;
        dcterms:title "FreestandingWork9 creation" ;
        cms:work ns10:freestandingwork9 .

    _:Nfb1ee667319744b8af8e2955476f101a a cms:DateTimeDescription ;
        time:day "---23"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns386:CmsImage0 {
    ns386:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:28 .
}

ns394:Thumbnail400x400 {
    ns394:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns254:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:10 .

    ns254:CmsImage1 foaf:thumbnail ns394:Thumbnail400x400 .
}

ns301:Thumbnail200x200 {
    ns301:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns373:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:55 .

    ns373:CmsImage0 foaf:thumbnail ns301:Thumbnail200x200 .
}

ns395:CmsImage0 {
    ns395:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:61 .
}

ns396:CmsImage1 {
    ns396:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:78 .
}

ns397:CmsImage0 {
    ns397:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:3 .
}

ns382:Thumbnail600x600 {
    ns382:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns180:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:organization2 .

    ns180:CmsImage0 foaf:thumbnail ns382:Thumbnail600x600 .
}

ns326:Thumbnail600x600 {
    ns326:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns334:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:104 .

    ns334:CmsImage1 foaf:thumbnail ns326:Thumbnail600x600 .
}

ns87:Thumbnail800x800 {
    ns87:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type image 1 rights holder" ;
        dcterms:title "Type image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns350:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:type .

    ns350:CmsImage1 foaf:thumbnail ns87:Thumbnail800x800 .
}

ns62:Thumbnail600x600 {
    ns62:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:84 .

    ns399:CmsImage0 foaf:thumbnail ns62:Thumbnail600x600 .
}

ns398:CmsImage1 {
    ns398:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:89 .
}

ns399:CmsImage0 {
    ns399:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:84 .
}

ns123:CmsImage1 {
    ns123:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial image 1 rights holder" ;
        dcterms:title "Spatial image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:spatial .
}

dcterms:subject {
    dcterms:subject a cms:Property ;
        rdfs:label "Subject" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns438:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> .
}

ns161:Thumbnail600x600 {
    ns161:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns217:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:23 .

    ns217:CmsImage0 foaf:thumbnail ns161:Thumbnail600x600 .
}

ns359:Thumbnail800x800 {
    ns359:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns74:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:92 .

    ns74:CmsImage0 foaf:thumbnail ns359:Thumbnail800x800 .
}

ns211:Thumbnail200x200 {
    ns211:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns420:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:27 .

    ns420:CmsImage1 foaf:thumbnail ns211:Thumbnail200x200 .
}

ns400:Thumbnail600x600 {
    ns400:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns157:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:person1 .

    ns157:CmsImage1 foaf:thumbnail ns400:Thumbnail600x600 .
}

ns20:Thumbnail200x200 {
    ns20:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source image 0 rights holder" ;
        dcterms:title "Source image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns66:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:source .

    ns66:CmsImage0 foaf:thumbnail ns20:Thumbnail200x200 .
}

ns147:Thumbnail800x800 {
    ns147:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial image 1 rights holder" ;
        dcterms:title "Spatial image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns123:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:spatial .

    ns123:CmsImage1 foaf:thumbnail ns147:Thumbnail800x800 .
}

ns401:Thumbnail200x200 {
    ns366:CmsImage1 foaf:thumbnail ns401:Thumbnail200x200 .

    ns401:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns366:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:48 .
}

ns402:Thumbnail800x800 {
    ns406:CmsImage1 foaf:thumbnail ns402:Thumbnail800x800 .

    ns402:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns406:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:58 .
}

ns26:Thumbnail600x600 {
    ns26:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns228:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:organization4 .

    ns228:CmsImage0 foaf:thumbnail ns26:Thumbnail600x600 .
}

ns232:Thumbnail800x800 {
    ns232:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns180:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:organization2 .

    ns180:CmsImage1 foaf:thumbnail ns232:Thumbnail800x800 .
}

<http://rightsstatements.org/vocab/InC-EDU/1.0/> {
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

ns55:Thumbnail600x600 {
    ns55:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source image 1 rights holder" ;
        dcterms:title "Source image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns66:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:source .

    ns66:CmsImage1 foaf:thumbnail ns55:Thumbnail600x600 .
}

ns10:freestandingwork11Opening {
    ns10:freestandingwork11Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-21"^^xsd:date ;
        dcterms:spatial _:N7fc12851b24940138cef0a4ab13fd2de ;
        dcterms:title "FreestandingWork11 opening" ;
        cms:work ns10:freestandingwork11 .

    _:N7fc12851b24940138cef0a4ab13fd2de a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns56:Thumbnail200x200 {
    ns56:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns358:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns237:work0 .

    ns358:CmsImage0 foaf:thumbnail ns56:Thumbnail200x200 .
}

ns183:Thumbnail200x200 {
    ns183:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher image 0 rights holder" ;
        dcterms:title "Publisher image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns130:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:publisher .

    ns130:CmsImage0 foaf:thumbnail ns183:Thumbnail200x200 .
}

ns42:Thumbnail800x800 {
    ns42:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns311:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:freestandingwork8 .

    ns311:CmsImage1 foaf:thumbnail ns42:Thumbnail800x800 .
}

ns196:Thumbnail600x600 {
    ns196:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium image 0 rights holder" ;
        dcterms:title "Medium image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns146:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:medium .

    ns146:CmsImage0 foaf:thumbnail ns196:Thumbnail600x600 .
}

ns131:Thumbnail600x600 {
    ns131:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns319:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:11 .

    ns319:CmsImage1 foaf:thumbnail ns131:Thumbnail600x600 .
}

ns403:CmsImage1 {
    ns403:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:17 .
}

ns36:Thumbnail200x200 {
    ns36:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns313:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:32 .

    ns313:CmsImage1 foaf:thumbnail ns36:Thumbnail200x200 .
}

ns237:work2Creation {
    ns237:work2Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns10:organization4,
            ns10:person0 ;
        dcterms:date _:N5c0135972c214ac5811eabe52542deed ;
        dcterms:description _:Nd90da67f880d4cb4b34c8a51066bdb65 ;
        dcterms:spatial ns237:work2Location ;
        dcterms:title "CmsCollection0CmsWork2 creation" ;
        cms:work ns237:work2 .

    _:N5c0135972c214ac5811eabe52542deed a cms:DateTimeDescription ;
        time:day "---30"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:Nd90da67f880d4cb4b34c8a51066bdb65 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns64:Thumbnail800x800 {
    ns64:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns153:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:29 .

    ns153:CmsImage1 foaf:thumbnail ns64:Thumbnail800x800 .
}

ns302:Thumbnail200x200 {
    ns302:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns428:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:83 .

    ns428:CmsImage0 foaf:thumbnail ns302:Thumbnail200x200 .
}

ns305:Thumbnail200x200 {
    ns305:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns110:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:51 .

    ns110:CmsImage0 foaf:thumbnail ns305:Thumbnail200x200 .
}

ns402:Thumbnail600x600 {
    ns402:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns406:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:58 .

    ns406:CmsImage1 foaf:thumbnail ns402:Thumbnail600x600 .
}

ns404:CmsImage0 {
    ns404:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:25 .
}

ns206:Thumbnail800x800 {
    ns206:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns245:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:7 .

    ns245:CmsImage0 foaf:thumbnail ns206:Thumbnail800x800 .
}

ns362:Thumbnail200x200 {
    ns362:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns283:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:5 .

    ns283:CmsImage1 foaf:thumbnail ns362:Thumbnail200x200 .
}

ns171:Thumbnail200x200 {
    ns171:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns5:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns19:work7 .

    ns5:CmsImage1 foaf:thumbnail ns171:Thumbnail200x200 .
}

ns405:CmsImage0 {
    ns405:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns237:work1 .
}

ns85:Thumbnail600x600 {
    ns85:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns431:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:freestandingwork9 .

    ns431:CmsImage1 foaf:thumbnail ns85:Thumbnail600x600 .
}

ns193:Thumbnail400x400 {
    ns193:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:0 .

    ns385:CmsImage0 foaf:thumbnail ns193:Thumbnail400x400 .
}

ns1:67 {
    ns1:67 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 7" ;
        skos:prefLabel "CmsConcept 67" .
}

ns274:Thumbnail600x600 {
    ns274:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns347:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:77 .

    ns347:CmsImage0 foaf:thumbnail ns274:Thumbnail600x600 .
}

ns371:Thumbnail200x200 {
    ns371:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns335:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:54 .

    ns335:CmsImage1 foaf:thumbnail ns371:Thumbnail200x200 .
}

ns360:CmsImage0 {
    ns360:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:62 .
}

ns132:Thumbnail600x600 {
    ns132:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns398:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:89 .

    ns398:CmsImage1 foaf:thumbnail ns132:Thumbnail600x600 .
}

ns10:freestandingwork8Creation {
    ns10:freestandingwork8Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns10:organization0,
            ns10:organization1 ;
        dcterms:date _:Ne17768cc26044a5fa19607f8baf2843c ;
        dcterms:description _:N1de0a484f7964734b7ddb81d87a5feef ;
        dcterms:spatial ns10:freestandingwork8Location ;
        dcterms:title "FreestandingWork8 creation" ;
        cms:work ns10:freestandingwork8 .

    _:Ne17768cc26044a5fa19607f8baf2843c a cms:DateTimeDescription ;
        time:day "---24"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:N1de0a484f7964734b7ddb81d87a5feef a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns163:Thumbnail400x400 {
    ns163:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns440:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:73 .

    ns440:CmsImage0 foaf:thumbnail ns163:Thumbnail400x400 .
}

ns396:CmsImage0 {
    ns396:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:78 .
}

ns190:Thumbnail200x200 {
    ns190:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns214:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:52 .

    ns214:CmsImage1 foaf:thumbnail ns190:Thumbnail200x200 .
}

ns406:CmsImage1 {
    ns406:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:58 .
}

ns217:CmsImage0 {
    ns217:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:23 .
}

ns172:Thumbnail200x200 {
    ns172:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns258:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:freestandingwork11 .

    ns258:CmsImage1 foaf:thumbnail ns172:Thumbnail200x200 .
}

ns309:Thumbnail800x800 {
    ns309:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns318:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:44 .

    ns318:CmsImage1 foaf:thumbnail ns309:Thumbnail800x800 .
}

ns407:Thumbnail600x600 {
    ns409:CmsImage1 foaf:thumbnail ns407:Thumbnail600x600 .

    ns407:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns409:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:19 .
}

ns408:CmsImage0 {
    ns408:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:47 .
}

ns373:CmsImage0 {
    ns373:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:55 .
}

ns365:CmsImage1 {
    ns365:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:69 .
}

ns36:Thumbnail800x800 {
    ns36:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns313:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:32 .

    ns313:CmsImage1 foaf:thumbnail ns36:Thumbnail800x800 .
}

ns282:Thumbnail400x400 {
    ns282:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns262:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:94 .

    ns262:CmsImage0 foaf:thumbnail ns282:Thumbnail400x400 .
}

ns285:Thumbnail800x800 {
    ns285:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns208:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:75 .

    ns208:CmsImage0 foaf:thumbnail ns285:Thumbnail800x800 .
}

ns1:88 {
    ns1:88 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 8" ;
        skos:prefLabel "CmsConcept 88" .
}

ns409:CmsImage0 {
    ns409:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:19 .
}

_:N88d47c9b3f324beda90884f8b3b30776 {
    _:N88d47c9b3f324beda90884f8b3b30776 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:Nd3407ea41e374e64afcd0efac8ad4a2f ;
        dcterms:title "CmsCollection1CmsWork5 closing" ;
        cms:work ns19:work5 .

    _:Nd3407ea41e374e64afcd0efac8ad4a2f a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns12:Thumbnail800x800 {
    ns12:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns313:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:32 .

    ns313:CmsImage0 foaf:thumbnail ns12:Thumbnail800x800 .
}

ns410:Thumbnail200x200 {
    ns222:CmsImage1 foaf:thumbnail ns410:Thumbnail200x200 .

    ns410:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material image 1 rights holder" ;
        dcterms:title "Material image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns222:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts vra:material .
}

ns1:104 {
    ns1:104 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 4" ;
        skos:prefLabel "CmsConcept 104" .
}

ns351:Thumbnail200x200 {
    ns351:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns439:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:42 .

    ns439:CmsImage0 foaf:thumbnail ns351:Thumbnail200x200 .
}

_:N4b4d291bdf5e49caa74664b1384e1550 {
    _:N4b4d291bdf5e49caa74664b1384e1550 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N74aad167e2bf447db83867725976c60b ;
        dcterms:title "CmsCollection1CmsWork7 closing" ;
        cms:work ns19:work7 .

    _:N74aad167e2bf447db83867725976c60b a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns216:Thumbnail800x800 {
    ns216:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns184:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:34 .

    ns184:CmsImage0 foaf:thumbnail ns216:Thumbnail800x800 .
}

ns40:Thumbnail600x600 {
    ns40:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns248:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:35 .

    ns248:CmsImage0 foaf:thumbnail ns40:Thumbnail600x600 .
}

ns389:CmsImage1 {
    ns389:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:100 .
}

ns133:Thumbnail600x600 {
    ns133:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns397:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:3 .

    ns397:CmsImage1 foaf:thumbnail ns133:Thumbnail600x600 .
}

ns77:Thumbnail200x200 {
    ns77:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns439:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:42 .

    ns439:CmsImage1 foaf:thumbnail ns77:Thumbnail200x200 .
}

<http://creativecommons.org/licenses/nc/1.0/> {
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

ns322:Thumbnail600x600 {
    ns322:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns276:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:organization1 .

    ns276:CmsImage0 foaf:thumbnail ns322:Thumbnail600x600 .
}

ns349:CmsImage0 {
    ns349:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:72 .
}

ns222:CmsImage1 {
    ns222:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material image 1 rights holder" ;
        dcterms:title "Material image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts vra:material .
}

ns244:Thumbnail600x600 {
    ns244:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns374:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:95 .

    ns374:CmsImage0 foaf:thumbnail ns244:Thumbnail600x600 .
}

ns220:CmsImage0 {
    ns220:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:103 .
}

ns52:Thumbnail200x200 {
    ns52:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns284:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:41 .

    ns284:CmsImage0 foaf:thumbnail ns52:Thumbnail200x200 .
}

ns367:Thumbnail800x800 {
    ns367:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns414:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns19:work4 .

    ns414:CmsImage1 foaf:thumbnail ns367:Thumbnail800x800 .
}

ns1:6 {
    ns1:6 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 6" ;
        skos:prefLabel "CmsConcept 6" .
}

ns286:Thumbnail400x400 {
    ns286:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns405:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns237:work1 .

    ns405:CmsImage0 foaf:thumbnail ns286:Thumbnail400x400 .
}

ns411:CmsImage1 {
    ns411:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:88 .
}

ns1:91 {
    ns1:91 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 1" ;
        skos:prefLabel "CmsConcept 91" .
}

ns363:Thumbnail400x400 {
    ns363:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns328:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:2 .

    ns328:CmsImage0 foaf:thumbnail ns363:Thumbnail400x400 .
}

ns412:CmsImage1 {
    ns412:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:37 .
}

ns149:Thumbnail400x400 {
    ns149:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Title image 0 rights holder" ;
        dcterms:title "Title image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns324:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:title .

    ns324:CmsImage0 foaf:thumbnail ns149:Thumbnail400x400 .
}

ns264:Thumbnail800x800 {
    ns264:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns157:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:person1 .

    ns157:CmsImage0 foaf:thumbnail ns264:Thumbnail800x800 .
}

ns400:Thumbnail200x200 {
    ns400:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns157:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:person1 .

    ns157:CmsImage1 foaf:thumbnail ns400:Thumbnail200x200 .
}

ns275:Thumbnail400x400 {
    ns275:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns333:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:107 .

    ns333:CmsImage0 foaf:thumbnail ns275:Thumbnail400x400 .
}

ns297:Thumbnail800x800 {
    ns297:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns355:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:45 .

    ns355:CmsImage1 foaf:thumbnail ns297:Thumbnail800x800 .
}

ns95:Thumbnail600x600 {
    ns95:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns441:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:63 .

    ns441:CmsImage1 foaf:thumbnail ns95:Thumbnail600x600 .
}

ns19:work5Creation {
    ns19:work5Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns10:person2,
            ns10:person3 ;
        dcterms:date _:Ne95d52ecbc5d425a935db197f8d6af05 ;
        dcterms:spatial ns19:work5Location ;
        dcterms:title "CmsCollection1CmsWork5 creation" ;
        cms:work ns19:work5 .

    _:Ne95d52ecbc5d425a935db197f8d6af05 a cms:DateTimeDescription ;
        time:day "---27"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns46:CmsImage1 {
    ns46:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns19:work6 .
}

ns115:Thumbnail800x800 {
    ns115:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns280:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:80 .

    ns280:CmsImage0 foaf:thumbnail ns115:Thumbnail800x800 .
}

ns265:Thumbnail600x600 {
    ns265:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns343:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:98 .

    ns343:CmsImage1 foaf:thumbnail ns265:Thumbnail600x600 .
}

ns176:Thumbnail200x200 {
    ns176:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns435:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:8 .

    ns435:CmsImage0 foaf:thumbnail ns176:Thumbnail200x200 .
}

ns394:Thumbnail800x800 {
    ns394:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns254:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:10 .

    ns254:CmsImage1 foaf:thumbnail ns394:Thumbnail800x800 .
}

ns413:Thumbnail200x200 {
    ns413:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns336:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:81 .

    ns336:CmsImage1 foaf:thumbnail ns413:Thumbnail200x200 .
}

ns1:11 {
    ns1:11 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 1" ;
        skos:prefLabel "CmsConcept 11" .
}

ns375:Thumbnail400x400 {
    ns375:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns197:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:organization3 .

    ns197:CmsImage1 foaf:thumbnail ns375:Thumbnail400x400 .
}

ns19:work6Location {
    ns19:work6Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

dcterms:language {
    dcterms:language a cms:Property ;
        rdfs:label "Language" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns438:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> .
}

ns362:Thumbnail800x800 {
    ns362:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns283:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:5 .

    ns283:CmsImage1 foaf:thumbnail ns362:Thumbnail800x800 .
}

ns414:CmsImage0 {
    ns414:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns19:work4 .
}

ns274:Thumbnail400x400 {
    ns274:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns347:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:77 .

    ns347:CmsImage0 foaf:thumbnail ns274:Thumbnail400x400 .
}

ns279:Thumbnail600x600 {
    ns279:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns409:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:19 .

    ns409:CmsImage0 foaf:thumbnail ns279:Thumbnail600x600 .
}

ns348:Thumbnail200x200 {
    ns348:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns258:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:freestandingwork11 .

    ns258:CmsImage0 foaf:thumbnail ns348:Thumbnail200x200 .
}

ns308:Thumbnail800x800 {
    ns308:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns296:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:50 .

    ns296:CmsImage0 foaf:thumbnail ns308:Thumbnail800x800 .
}

ns286:Thumbnail800x800 {
    ns286:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns405:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns237:work1 .

    ns405:CmsImage0 foaf:thumbnail ns286:Thumbnail800x800 .
}

ns10:freestandingwork9Location {
    ns10:freestandingwork9Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns161:Thumbnail800x800 {
    ns161:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns217:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:23 .

    ns217:CmsImage0 foaf:thumbnail ns161:Thumbnail800x800 .
}

ns304:Thumbnail600x600 {
    ns304:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns89:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:36 .

    ns89:CmsImage1 foaf:thumbnail ns304:Thumbnail600x600 .
}

ns409:CmsImage1 {
    ns409:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:19 .
}

ns190:Thumbnail400x400 {
    ns190:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns214:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:52 .

    ns214:CmsImage1 foaf:thumbnail ns190:Thumbnail400x400 .
}

ns210:Thumbnail200x200 {
    ns210:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns395:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:61 .

    ns395:CmsImage0 foaf:thumbnail ns210:Thumbnail200x200 .
}

ns344:Thumbnail800x800 {
    ns344:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns444:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:59 .

    ns444:CmsImage1 foaf:thumbnail ns344:Thumbnail800x800 .
}

ns361:Thumbnail200x200 {
    ns361:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns408:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:47 .

    ns408:CmsImage1 foaf:thumbnail ns361:Thumbnail200x200 .
}

ns292:Thumbnail400x400 {
    ns292:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent image 0 rights holder" ;
        dcterms:title "Extent image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:extent .

    ns392:CmsImage0 foaf:thumbnail ns292:Thumbnail400x400 .
}

ns330:Thumbnail200x200 {
    ns330:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns315:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:102 .

    ns315:CmsImage1 foaf:thumbnail ns330:Thumbnail200x200 .
}

ns415:Thumbnail200x200 {
    ns74:CmsImage1 foaf:thumbnail ns415:Thumbnail200x200 .

    ns415:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns74:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:92 .
}

ns168:Thumbnail800x800 {
    ns168:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns5:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns19:work7 .

    ns5:CmsImage0 foaf:thumbnail ns168:Thumbnail800x800 .
}

ns107:Thumbnail800x800 {
    ns107:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns197:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:organization3 .

    ns197:CmsImage0 foaf:thumbnail ns107:Thumbnail800x800 .
}

ns178:Thumbnail600x600 {
    ns178:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns3:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:33 .

    ns3:CmsImage1 foaf:thumbnail ns178:Thumbnail600x600 .
}

ns388:Thumbnail600x600 {
    ns388:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns395:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:61 .

    ns395:CmsImage1 foaf:thumbnail ns388:Thumbnail600x600 .
}

ns88:Thumbnail600x600 {
    ns88:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns46:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns19:work6 .

    ns46:CmsImage1 foaf:thumbnail ns88:Thumbnail600x600 .
}

ns259:Thumbnail800x800 {
    ns259:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns195:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:person4 .

    ns195:CmsImage1 foaf:thumbnail ns259:Thumbnail800x800 .
}

ns311:CmsImage0 {
    ns311:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:freestandingwork8 .
}

ns87:Thumbnail200x200 {
    ns87:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type image 1 rights holder" ;
        dcterms:title "Type image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns350:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:type .

    ns350:CmsImage1 foaf:thumbnail ns87:Thumbnail200x200 .
}

ns53:Thumbnail600x600 {
    ns53:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:0 .

    ns385:CmsImage1 foaf:thumbnail ns53:Thumbnail600x600 .
}

ns416:CmsImage0 {
    ns416:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:57 .
}

ns308:Thumbnail600x600 {
    ns308:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns296:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:50 .

    ns296:CmsImage0 foaf:thumbnail ns308:Thumbnail600x600 .
}

ns263:Thumbnail600x600 {
    ns263:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns374:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:95 .

    ns374:CmsImage1 foaf:thumbnail ns263:Thumbnail600x600 .
}

ns295:CmsImage1 {
    ns295:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:12 .
}

ns338:Thumbnail400x400 {
    ns338:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns295:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:12 .

    ns295:CmsImage0 foaf:thumbnail ns338:Thumbnail400x400 .
}

ns104:Thumbnail400x400 {
    ns104:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns384:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:39 .

    ns384:CmsImage0 foaf:thumbnail ns104:Thumbnail400x400 .
}

ns252:Thumbnail600x600 {
    ns252:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Title image 1 rights holder" ;
        dcterms:title "Title image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns324:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:title .

    ns324:CmsImage1 foaf:thumbnail ns252:Thumbnail600x600 .
}

ns345:Thumbnail600x600 {
    ns345:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns387:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:105 .

    ns387:CmsImage0 foaf:thumbnail ns345:Thumbnail600x600 .
}

ns240:Thumbnail400x400 {
    ns240:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns294:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:99 .

    ns294:CmsImage0 foaf:thumbnail ns240:Thumbnail400x400 .
}

ns136:Thumbnail800x800 {
    ns136:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:69 .

    ns365:CmsImage1 foaf:thumbnail ns136:Thumbnail800x800 .
}

ns5:CmsImage1 {
    ns5:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns19:work7 .
}

ns143:Thumbnail800x800 {
    ns143:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns360:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:62 .

    ns360:CmsImage1 foaf:thumbnail ns143:Thumbnail800x800 .
}

ns10:freestandingwork11Creation {
    ns10:freestandingwork11Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns10:organization3,
            ns10:organization4 ;
        dcterms:date _:N1e0ed3c68289434c849ddd08daa1682f ;
        dcterms:spatial ns10:freestandingwork11Location ;
        dcterms:title "FreestandingWork11 creation" ;
        cms:work ns10:freestandingwork11 .

    _:N1e0ed3c68289434c849ddd08daa1682f a cms:DateTimeDescription ;
        time:day "---21"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns333:CmsImage1 {
    ns333:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:107 .
}

ns417:Thumbnail200x200 {
    ns417:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns179:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:43 .

    ns179:CmsImage1 foaf:thumbnail ns417:Thumbnail200x200 .
}

ns19:work4Opening {
    ns19:work4Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-28"^^xsd:date ;
        dcterms:description _:N41d26441f96045c8a6071fca671c6f54 ;
        dcterms:spatial _:N45da903ea5b94eb08c4eaf9464d2b6e0 ;
        dcterms:title "CmsCollection1CmsWork4 opening" ;
        cms:work ns19:work4 .

    _:N41d26441f96045c8a6071fca671c6f54 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:N45da903ea5b94eb08c4eaf9464d2b6e0 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns353:Thumbnail600x600 {
    ns353:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns41:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:97 .

    ns41:CmsImage0 foaf:thumbnail ns353:Thumbnail600x600 .
}

ns259:Thumbnail200x200 {
    ns259:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns195:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:person4 .

    ns195:CmsImage1 foaf:thumbnail ns259:Thumbnail200x200 .
}

ns193:Thumbnail600x600 {
    ns193:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:0 .

    ns385:CmsImage0 foaf:thumbnail ns193:Thumbnail600x600 .
}

ns246:Thumbnail600x600 {
    ns246:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns445:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:30 .

    ns445:CmsImage1 foaf:thumbnail ns246:Thumbnail600x600 .
}

ns256:Thumbnail600x600 {
    ns256:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns332:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:40 .

    ns332:CmsImage1 foaf:thumbnail ns256:Thumbnail600x600 .
}

ns418:Thumbnail600x600 {
    ns418:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns349:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:72 .

    ns349:CmsImage0 foaf:thumbnail ns418:Thumbnail600x600 .
}

ns192:Thumbnail600x600 {
    ns192:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns174:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:organization0 .

    ns174:CmsImage1 foaf:thumbnail ns192:Thumbnail600x600 .
}

ns42:Thumbnail600x600 {
    ns42:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns311:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:freestandingwork8 .

    ns311:CmsImage1 foaf:thumbnail ns42:Thumbnail600x600 .
}

ns303:Thumbnail600x600 {
    ns303:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique image 1 rights holder" ;
        dcterms:title "Technique image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns43:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts vra:technique .

    ns43:CmsImage1 foaf:thumbnail ns303:Thumbnail600x600 .
}

ns285:Thumbnail400x400 {
    ns285:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns208:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:75 .

    ns208:CmsImage0 foaf:thumbnail ns285:Thumbnail400x400 .
}

ns287:Thumbnail400x400 {
    ns287:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns151:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:person0 .

    ns151:CmsImage0 foaf:thumbnail ns287:Thumbnail400x400 .
}

ns419:Thumbnail200x200 {
    ns429:CmsImage1 foaf:thumbnail ns419:Thumbnail200x200 .

    ns419:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns429:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:4 .
}

ns221:Thumbnail400x400 {
    ns221:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns435:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:8 .

    ns435:CmsImage1 foaf:thumbnail ns221:Thumbnail400x400 .
}

ns420:CmsImage1 {
    ns420:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:27 .
}

ns393:Thumbnail800x800 {
    ns393:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns416:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:57 .

    ns416:CmsImage0 foaf:thumbnail ns393:Thumbnail800x800 .
}

ns410:Thumbnail400x400 {
    ns410:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material image 1 rights holder" ;
        dcterms:title "Material image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns222:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts vra:material .

    ns222:CmsImage1 foaf:thumbnail ns410:Thumbnail400x400 .
}

ns223:Thumbnail200x200 {
    ns223:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns391:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:21 .

    ns391:CmsImage0 foaf:thumbnail ns223:Thumbnail200x200 .
}

ns36:Thumbnail400x400 {
    ns36:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns313:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:32 .

    ns313:CmsImage1 foaf:thumbnail ns36:Thumbnail400x400 .
}

ns418:Thumbnail800x800 {
    ns418:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns349:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:72 .

    ns349:CmsImage0 foaf:thumbnail ns418:Thumbnail800x800 .
}

ns416:CmsImage1 {
    ns416:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:57 .
}

ns233:CmsImage1 {
    ns233:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:22 .
}

ns1:107 {
    ns1:107 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 7" ;
        skos:prefLabel "CmsConcept 107" .
}

ns199:Thumbnail800x800 {
    ns199:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns184:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:34 .

    ns184:CmsImage1 foaf:thumbnail ns199:Thumbnail800x800 .
}

ns31:Thumbnail800x800 {
    ns31:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns288:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:71 .

    ns288:CmsImage1 foaf:thumbnail ns31:Thumbnail800x800 .
}

ns394:Thumbnail200x200 {
    ns394:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns254:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:10 .

    ns254:CmsImage1 foaf:thumbnail ns394:Thumbnail200x200 .
}

ns1:3 {
    ns1:3 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 3" ;
        skos:prefLabel "CmsConcept 3" .
}

ns72:Thumbnail800x800 {
    ns72:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns307:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:collection1 .

    ns307:CmsImage1 foaf:thumbnail ns72:Thumbnail800x800 .
}

ns264:Thumbnail600x600 {
    ns264:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns157:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:person1 .

    ns157:CmsImage0 foaf:thumbnail ns264:Thumbnail600x600 .
}

ns197:CmsImage0 {
    ns197:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:organization3 .
}

ns119:Thumbnail400x400 {
    ns119:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns3:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:33 .

    ns3:CmsImage0 foaf:thumbnail ns119:Thumbnail400x400 .
}

ns296:CmsImage0 {
    ns296:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:50 .
}

ns408:CmsImage1 {
    ns408:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:47 .
}

ns45:Thumbnail400x400 {
    ns45:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns327:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:31 .

    ns327:CmsImage1 foaf:thumbnail ns45:Thumbnail400x400 .
}

ns191:Thumbnail200x200 {
    ns191:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns208:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:75 .

    ns208:CmsImage1 foaf:thumbnail ns191:Thumbnail200x200 .
}

ns1:73 {
    ns1:73 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 3" ;
        skos:prefLabel "CmsConcept 73" .
}

ns326:Thumbnail200x200 {
    ns326:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns334:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:104 .

    ns334:CmsImage1 foaf:thumbnail ns326:Thumbnail200x200 .
}

ns226:Thumbnail200x200 {
    ns226:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language image 1 rights holder" ;
        dcterms:title "Language image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns118:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:language .

    ns118:CmsImage1 foaf:thumbnail ns226:Thumbnail200x200 .
}

ns1:59 {
    ns1:59 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 9" ;
        skos:prefLabel "CmsConcept 59" .
}

ns414:CmsImage1 {
    ns414:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns19:work4 .
}

ns65:Thumbnail200x200 {
    ns65:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns220:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:103 .

    ns220:CmsImage1 foaf:thumbnail ns65:Thumbnail200x200 .
}

ns131:Thumbnail400x400 {
    ns131:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns319:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:11 .

    ns319:CmsImage1 foaf:thumbnail ns131:Thumbnail400x400 .
}

ns236:Thumbnail800x800 {
    ns236:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language image 0 rights holder" ;
        dcterms:title "Language image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns118:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:language .

    ns118:CmsImage0 foaf:thumbnail ns236:Thumbnail800x800 .
}

ns351:Thumbnail400x400 {
    ns351:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns439:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:42 .

    ns439:CmsImage0 foaf:thumbnail ns351:Thumbnail400x400 .
}

ns367:Thumbnail400x400 {
    ns367:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns414:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns19:work4 .

    ns414:CmsImage1 foaf:thumbnail ns367:Thumbnail400x400 .
}

ns291:Thumbnail800x800 {
    ns291:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns114:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:93 .

    ns114:CmsImage1 foaf:thumbnail ns291:Thumbnail800x800 .
}

ns158:Thumbnail600x600 {
    ns158:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns151:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:person0 .

    ns151:CmsImage1 foaf:thumbnail ns158:Thumbnail600x600 .
}

ns351:Thumbnail800x800 {
    ns351:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns439:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:42 .

    ns439:CmsImage0 foaf:thumbnail ns351:Thumbnail800x800 .
}

ns245:CmsImage1 {
    ns245:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:7 .
}

ns419:Thumbnail400x400 {
    ns419:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns429:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:4 .

    ns429:CmsImage1 foaf:thumbnail ns419:Thumbnail400x400 .
}

ns415:Thumbnail800x800 {
    ns415:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns74:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:92 .

    ns74:CmsImage1 foaf:thumbnail ns415:Thumbnail800x800 .
}

ns164:Thumbnail800x800 {
    ns164:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns17:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:86 .

    ns17:CmsImage1 foaf:thumbnail ns164:Thumbnail800x800 .
}

ns381:Thumbnail200x200 {
    ns381:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns306:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:person2 .

    ns306:CmsImage1 foaf:thumbnail ns381:Thumbnail200x200 .
}

ns50:Thumbnail800x800 {
    ns50:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context image 0 rights holder" ;
        dcterms:title "Cultural context image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns432:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts vra:culturalContext .

    ns432:CmsImage0 foaf:thumbnail ns50:Thumbnail800x800 .
}

ns352:Thumbnail600x600 {
    ns352:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns71:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:96 .

    ns71:CmsImage0 foaf:thumbnail ns352:Thumbnail600x600 .
}

ns297:Thumbnail200x200 {
    ns297:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns355:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:45 .

    ns355:CmsImage1 foaf:thumbnail ns297:Thumbnail200x200 .
}

ns280:CmsImage0 {
    ns280:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:80 .
}

ns134:Thumbnail800x800 {
    ns134:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns203:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:109 .

    ns203:CmsImage0 foaf:thumbnail ns134:Thumbnail800x800 .
}

ns1:1 {
    ns1:1 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 1" ;
        skos:prefLabel "CmsConcept 1" .
}

ns192:Thumbnail200x200 {
    ns192:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns174:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:organization0 .

    ns174:CmsImage1 foaf:thumbnail ns192:Thumbnail200x200 .
}

ns1:71 {
    ns1:71 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 1" ;
        skos:prefLabel "CmsConcept 71" .
}

ns205:Thumbnail600x600 {
    ns205:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial image 0 rights holder" ;
        dcterms:title "Spatial image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns123:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:spatial .

    ns123:CmsImage0 foaf:thumbnail ns205:Thumbnail600x600 .
}

ns78:Thumbnail200x200 {
    ns78:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns446:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:9 .

    ns446:CmsImage1 foaf:thumbnail ns78:Thumbnail200x200 .
}

ns106:Thumbnail600x600 {
    ns106:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns397:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:3 .

    ns397:CmsImage0 foaf:thumbnail ns106:Thumbnail600x600 .
}

ns96:Thumbnail800x800 {
    ns96:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns229:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:66 .

    ns229:CmsImage0 foaf:thumbnail ns96:Thumbnail800x800 .
}

ns97:Thumbnail800x800 {
    ns97:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns124:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:13 .

    ns124:CmsImage1 foaf:thumbnail ns97:Thumbnail800x800 .
}

ns142:Thumbnail800x800 {
    ns142:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns387:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:105 .

    ns387:CmsImage1 foaf:thumbnail ns142:Thumbnail800x800 .
}

ns278:Thumbnail400x400 {
    ns278:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns188:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:56 .

    ns188:CmsImage0 foaf:thumbnail ns278:Thumbnail400x400 .
}

ns288:CmsImage1 {
    ns288:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:71 .
}

ns160:Thumbnail400x400 {
    ns160:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns319:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:11 .

    ns319:CmsImage0 foaf:thumbnail ns160:Thumbnail400x400 .
}

ns1:30 {
    ns1:30 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 0" ;
        skos:prefLabel "CmsConcept 30" .
}

ns11:Thumbnail400x400 {
    ns11:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Description image 0 rights holder" ;
        dcterms:title "Description image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns140:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:description .

    ns140:CmsImage0 foaf:thumbnail ns11:Thumbnail400x400 .
}

ns301:Thumbnail800x800 {
    ns301:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns373:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:55 .

    ns373:CmsImage0 foaf:thumbnail ns301:Thumbnail800x800 .
}

ns308:Thumbnail400x400 {
    ns308:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns296:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:50 .

    ns296:CmsImage0 foaf:thumbnail ns308:Thumbnail400x400 .
}

ns287:Thumbnail800x800 {
    ns287:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns151:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:person0 .

    ns151:CmsImage0 foaf:thumbnail ns287:Thumbnail800x800 .
}

ns421:Thumbnail400x400 {
    ns421:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns318:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:44 .

    ns318:CmsImage0 foaf:thumbnail ns421:Thumbnail400x400 .
}

ns154:Thumbnail200x200 {
    ns154:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns293:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:90 .

    ns293:CmsImage0 foaf:thumbnail ns154:Thumbnail200x200 .
}

ns340:Thumbnail400x400 {
    ns340:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns427:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns237:work2 .

    ns427:CmsImage0 foaf:thumbnail ns340:Thumbnail400x400 .
}

ns422:Thumbnail600x600 {
    ns430:CmsImage1 foaf:thumbnail ns422:Thumbnail600x600 .

    ns422:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject image 1 rights holder" ;
        dcterms:title "Subject image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns430:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:subject .
}

ns231:Thumbnail600x600 {
    ns231:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns366:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:48 .

    ns366:CmsImage0 foaf:thumbnail ns231:Thumbnail600x600 .
}

ns371:Thumbnail400x400 {
    ns371:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns335:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:54 .

    ns335:CmsImage1 foaf:thumbnail ns371:Thumbnail400x400 .
}

ns13:Thumbnail600x600 {
    ns13:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns225:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:6 .

    ns225:CmsImage1 foaf:thumbnail ns13:Thumbnail600x600 .
}

ns299:Thumbnail600x600 {
    ns299:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material image 0 rights holder" ;
        dcterms:title "Material image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns222:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts vra:material .

    ns222:CmsImage0 foaf:thumbnail ns299:Thumbnail600x600 .
}

ns423:CmsImage1 {
    ns423:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:68 .
}

ns407:Thumbnail400x400 {
    ns407:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns409:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:19 .

    ns409:CmsImage1 foaf:thumbnail ns407:Thumbnail400x400 .
}

ns241:Thumbnail200x200 {
    ns241:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns425:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:1 .

    ns425:CmsImage1 foaf:thumbnail ns241:Thumbnail200x200 .
}

ns424:Thumbnail800x800 {
    ns444:CmsImage0 foaf:thumbnail ns424:Thumbnail800x800 .

    ns424:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns444:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:59 .
}

ns37:Thumbnail800x800 {
    ns37:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns289:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:38 .

    ns289:CmsImage1 foaf:thumbnail ns37:Thumbnail800x800 .
}

ns417:Thumbnail400x400 {
    ns417:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns179:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:43 .

    ns179:CmsImage1 foaf:thumbnail ns417:Thumbnail400x400 .
}

ns191:Thumbnail600x600 {
    ns191:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns208:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:75 .

    ns208:CmsImage1 foaf:thumbnail ns191:Thumbnail600x600 .
}

ns425:CmsImage1 {
    ns425:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:1 .
}

ns28:Thumbnail600x600 {
    ns28:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns333:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:107 .

    ns333:CmsImage1 foaf:thumbnail ns28:Thumbnail600x600 .
}

ns341:Thumbnail200x200 {
    ns341:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject image 0 rights holder" ;
        dcterms:title "Subject image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns430:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:subject .

    ns430:CmsImage0 foaf:thumbnail ns341:Thumbnail200x200 .
}

ns1:85 {
    ns1:85 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 5" ;
        skos:prefLabel "CmsConcept 85" .
}

ns402:Thumbnail400x400 {
    ns402:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns406:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:58 .

    ns406:CmsImage1 foaf:thumbnail ns402:Thumbnail400x400 .
}

ns175:Thumbnail800x800 {
    ns175:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns296:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:50 .

    ns296:CmsImage1 foaf:thumbnail ns175:Thumbnail800x800 .
}

ns147:Thumbnail400x400 {
    ns147:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial image 1 rights holder" ;
        dcterms:title "Spatial image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns123:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:spatial .

    ns123:CmsImage1 foaf:thumbnail ns147:Thumbnail400x400 .
}

ns268:Thumbnail600x600 {
    ns268:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:84 .

    ns399:CmsImage1 foaf:thumbnail ns268:Thumbnail600x600 .
}

ns189:Thumbnail200x200 {
    ns189:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns9:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:20 .

    ns9:CmsImage1 foaf:thumbnail ns189:Thumbnail200x200 .
}

ns69:Thumbnail600x600 {
    ns69:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns250:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:101 .

    ns250:CmsImage1 foaf:thumbnail ns69:Thumbnail600x600 .
}

ns182:Thumbnail800x800 {
    ns182:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns248:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:35 .

    ns248:CmsImage1 foaf:thumbnail ns182:Thumbnail800x800 .
}

ns128:Thumbnail600x600 {
    ns128:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns245:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:7 .

    ns245:CmsImage1 foaf:thumbnail ns128:Thumbnail600x600 .
}

ns99:Thumbnail200x200 {
    ns99:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns355:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:45 .

    ns355:CmsImage0 foaf:thumbnail ns99:Thumbnail200x200 .
}

ns252:Thumbnail200x200 {
    ns252:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Title image 1 rights holder" ;
        dcterms:title "Title image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns324:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:title .

    ns324:CmsImage1 foaf:thumbnail ns252:Thumbnail200x200 .
}

ns426:Thumbnail200x200 {
    ns426:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns203:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:109 .

    ns203:CmsImage1 foaf:thumbnail ns426:Thumbnail200x200 .
}

ns407:Thumbnail800x800 {
    ns407:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns409:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:19 .

    ns409:CmsImage1 foaf:thumbnail ns407:Thumbnail800x800 .
}

ns413:Thumbnail400x400 {
    ns413:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns336:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:81 .

    ns336:CmsImage1 foaf:thumbnail ns413:Thumbnail400x400 .
}

ns41:CmsImage0 {
    ns41:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:97 .
}

ns1:95 {
    ns1:95 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 5" ;
        skos:prefLabel "CmsConcept 95" .
}

ns89:CmsImage0 {
    ns89:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:36 .
}

ns225:CmsImage1 {
    ns225:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:6 .
}

ns427:CmsImage1 {
    ns427:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns237:work2 .
}

ns19:work6Creation {
    ns19:work6Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns10:person3,
            ns10:person4 ;
        dcterms:date _:Nc0af37b81e0d42feaac7e3a3bc4955a9 ;
        dcterms:description _:Nb6ab2a7cb06c4a8e8b68a369ca0a0b31 ;
        dcterms:spatial ns19:work6Location ;
        dcterms:title "CmsCollection1CmsWork6 creation" ;
        cms:work ns19:work6 .

    _:Nc0af37b81e0d42feaac7e3a3bc4955a9 a cms:DateTimeDescription ;
        time:day "---26"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:Nb6ab2a7cb06c4a8e8b68a369ca0a0b31 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns331:Thumbnail400x400 {
    ns331:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns17:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:86 .

    ns17:CmsImage0 foaf:thumbnail ns331:Thumbnail400x400 .
}

ns194:Thumbnail600x600 {
    ns194:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:78 .

    ns396:CmsImage1 foaf:thumbnail ns194:Thumbnail600x600 .
}

ns191:Thumbnail800x800 {
    ns191:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns208:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:75 .

    ns208:CmsImage1 foaf:thumbnail ns191:Thumbnail800x800 .
}

ns348:Thumbnail800x800 {
    ns348:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns258:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:freestandingwork11 .

    ns258:CmsImage0 foaf:thumbnail ns348:Thumbnail800x800 .
}

ns21:Thumbnail800x800 {
    ns21:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns405:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns237:work1 .

    ns405:CmsImage1 foaf:thumbnail ns21:Thumbnail800x800 .
}

ns20:Thumbnail600x600 {
    ns20:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source image 0 rights holder" ;
        dcterms:title "Source image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns66:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:source .

    ns66:CmsImage0 foaf:thumbnail ns20:Thumbnail600x600 .
}

ns1:8 {
    ns1:8 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 8" ;
        skos:prefLabel "CmsConcept 8" .
}

ns1:37 {
    ns1:37 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 7" ;
        skos:prefLabel "CmsConcept 37" .
}

ns407:Thumbnail200x200 {
    ns407:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns409:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:19 .

    ns409:CmsImage1 foaf:thumbnail ns407:Thumbnail200x200 .
}

ns263:Thumbnail400x400 {
    ns263:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns374:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:95 .

    ns374:CmsImage1 foaf:thumbnail ns263:Thumbnail400x400 .
}

ns290:Thumbnail200x200 {
    ns290:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent image 1 rights holder" ;
        dcterms:title "Extent image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:extent .

    ns392:CmsImage1 foaf:thumbnail ns290:Thumbnail200x200 .
}

ns229:CmsImage0 {
    ns229:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:66 .
}

ns1:62 {
    ns1:62 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 2" ;
        skos:prefLabel "CmsConcept 62" .
}

ns316:CmsImage0 {
    ns316:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:65 .
}

ns187:Thumbnail400x400 {
    ns187:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns423:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:68 .

    ns423:CmsImage0 foaf:thumbnail ns187:Thumbnail400x400 .
}

ns1:75 {
    ns1:75 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 5" ;
        skos:prefLabel "CmsConcept 75" .
}

ns256:Thumbnail800x800 {
    ns256:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns332:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:40 .

    ns332:CmsImage1 foaf:thumbnail ns256:Thumbnail800x800 .
}

ns152:Thumbnail800x800 {
    ns152:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns436:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns19:work5 .

    ns436:CmsImage0 foaf:thumbnail ns152:Thumbnail800x800 .
}

ns224:Thumbnail600x600 {
    ns224:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns445:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:30 .

    ns445:CmsImage0 foaf:thumbnail ns224:Thumbnail600x600 .
}

ns59:Thumbnail600x600 {
    ns59:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns356:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:26 .

    ns356:CmsImage0 foaf:thumbnail ns59:Thumbnail600x600 .
}

ns87:Thumbnail600x600 {
    ns87:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type image 1 rights holder" ;
        dcterms:title "Type image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns350:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:type .

    ns350:CmsImage1 foaf:thumbnail ns87:Thumbnail600x600 .
}

ns384:CmsImage0 {
    ns384:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:39 .
}

ns251:Thumbnail800x800 {
    ns251:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns328:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:2 .

    ns328:CmsImage1 foaf:thumbnail ns251:Thumbnail800x800 .
}

ns10:person4 {
    ns10:person4 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing> ;
        contact:sortName "4, CmsPerson" ;
        owl:sameAs wd:Q7251 ;
        foaf:familyName "4" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 4" ;
        foaf:page ns10:person4page .
}

ns246:Thumbnail400x400 {
    ns246:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns445:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:30 .

    ns445:CmsImage1 foaf:thumbnail ns246:Thumbnail400x400 .
}

ns324:CmsImage1 {
    ns324:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Title image 1 rights holder" ;
        dcterms:title "Title image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:title .
}

ns185:Thumbnail800x800 {
    ns185:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns229:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:66 .

    ns229:CmsImage1 foaf:thumbnail ns185:Thumbnail800x800 .
}

ns1:87 {
    ns1:87 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 7" ;
        skos:prefLabel "CmsConcept 87" .
}

ns19:work7Opening {
    ns19:work7Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-25"^^xsd:date ;
        dcterms:spatial _:N74aad167e2bf447db83867725976c60b ;
        dcterms:title "CmsCollection1CmsWork7 opening" ;
        cms:work ns19:work7 .

    _:N74aad167e2bf447db83867725976c60b a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns32:Thumbnail200x200 {
    ns32:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns150:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:15 .

    ns150:CmsImage0 foaf:thumbnail ns32:Thumbnail200x200 .
}

ns26:Thumbnail200x200 {
    ns26:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns228:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:organization4 .

    ns228:CmsImage0 foaf:thumbnail ns26:Thumbnail200x200 .
}

ns273:Thumbnail400x400 {
    ns273:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns220:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:103 .

    ns220:CmsImage0 foaf:thumbnail ns273:Thumbnail400x400 .
}

ns350:CmsImage1 {
    ns350:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type image 1 rights holder" ;
        dcterms:title "Type image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:type .
}

ns69:Thumbnail200x200 {
    ns69:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns250:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:101 .

    ns250:CmsImage1 foaf:thumbnail ns69:Thumbnail200x200 .
}

ns428:CmsImage1 {
    ns428:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:83 .
}

ns289:CmsImage1 {
    ns289:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:38 .
}

ns1:29 {
    ns1:29 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 9" ;
        skos:prefLabel "CmsConcept 29" .
}

ns156:CmsImage0 {
    ns156:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 0 rights holder" ;
        dcterms:title "Synthetic data properties image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns438:property_group .
}

ns429:CmsImage0 {
    ns429:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:4 .
}

ns105:Thumbnail800x800 {
    ns105:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns434:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:14 .

    ns434:CmsImage0 foaf:thumbnail ns105:Thumbnail800x800 .
}

ns307:CmsImage1 {
    ns307:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:collection1 .
}

ns155:Thumbnail600x600 {
    ns155:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns150:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:15 .

    ns150:CmsImage1 foaf:thumbnail ns155:Thumbnail600x600 .
}

ns169:CmsImage0 {
    ns169:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:108 .
}

ns290:Thumbnail600x600 {
    ns290:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent image 1 rights holder" ;
        dcterms:title "Extent image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:extent .

    ns392:CmsImage1 foaf:thumbnail ns290:Thumbnail600x600 .
}

ns1:50 {
    ns1:50 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 0" ;
        skos:prefLabel "CmsConcept 50" .
}

ns237:work1 {
    ns237:work1 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork1 alternative title 0",
            "CmsCollection0CmsWork1 alternative title 1" ;
        dcterms:contributor _:N5291ff32bdef4c16bff266afc9f31987,
            _:N887cb4ea817d45f7a2076dac5a24da1c ;
        dcterms:creator ns10:organization3,
            ns10:organization4 ;
        dcterms:extent ns1:11,
            ns1:12 ;
        dcterms:identifier "CmsCollection0CmsWork1Id0",
            "CmsCollection0CmsWork1Id1" ;
        dcterms:language ns1:21,
            ns1:22 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns1:41,
            ns1:42 ;
        dcterms:provenance "CmsCollection0CmsWork1 provenance 0",
            "CmsCollection0CmsWork1 provenance 1" ;
        dcterms:publisher ns1:51,
            ns1:52 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 rights holder" ;
        dcterms:source ns1:61,
            ns1:62 ;
        dcterms:spatial ns237:work1Location ;
        dcterms:subject ns1:81,
            ns1:82 ;
        dcterms:title "CmsCollection0CmsWork1" ;
        dcterms:type ns1:101,
            ns1:102 ;
        vra:culturalContext ns1:1,
            ns1:2 ;
        vra:material ns1:31,
            ns1:32 ;
        vra:technique ns1:91,
            ns1:92 ;
        cms:collection ns10:collection0 ;
        owl:sameAs wd:Q937690 .

    _:N5291ff32bdef4c16bff266afc9f31987 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork1 contributor 1" .

    _:N887cb4ea817d45f7a2076dac5a24da1c a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork1 contributor 0" .
}

ns342:Thumbnail800x800 {
    ns342:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns446:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:9 .

    ns446:CmsImage0 foaf:thumbnail ns342:Thumbnail800x800 .
}

ns237:work0Creation {
    ns237:work0Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns10:organization2,
            ns10:organization3 ;
        dcterms:date _:Na5fd650f20074e00aa98810f36a6e2c4 ;
        dcterms:description _:N11483f490aee4bc99110bdfe899f7b25 ;
        dcterms:spatial ns237:work0Location ;
        dcterms:title "CmsCollection0CmsWork0 creation" ;
        cms:work ns237:work0 .

    _:Na5fd650f20074e00aa98810f36a6e2c4 a cms:DateTimeDescription ;
        time:day "---01"^^xsd:gDay ;
        time:month "--01"^^xsd:gMonth ;
        time:year "2022"^^xsd:gYear .

    _:N11483f490aee4bc99110bdfe899f7b25 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns430:CmsImage1 {
    ns430:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject image 1 rights holder" ;
        dcterms:title "Subject image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:subject .
}

ns145:Thumbnail800x800 {
    ns145:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns389:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:100 .

    ns389:CmsImage1 foaf:thumbnail ns145:Thumbnail800x800 .
}

ns370:Thumbnail600x600 {
    ns370:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns124:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:13 .

    ns124:CmsImage0 foaf:thumbnail ns370:Thumbnail600x600 .
}

ns390:CmsImage1 {
    ns390:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:person3 .
}

ns97:Thumbnail200x200 {
    ns97:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns124:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:13 .

    ns124:CmsImage1 foaf:thumbnail ns97:Thumbnail200x200 .
}

ns138:Thumbnail800x800 {
    ns138:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns441:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:63 .

    ns441:CmsImage0 foaf:thumbnail ns138:Thumbnail800x800 .
}

ns115:Thumbnail200x200 {
    ns115:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns280:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:80 .

    ns280:CmsImage0 foaf:thumbnail ns115:Thumbnail200x200 .
}

ns102:Thumbnail800x800 {
    ns102:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns316:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:65 .

    ns316:CmsImage1 foaf:thumbnail ns102:Thumbnail800x800 .
}

ns421:Thumbnail600x600 {
    ns421:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns318:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:44 .

    ns318:CmsImage0 foaf:thumbnail ns421:Thumbnail600x600 .
}

ns401:Thumbnail400x400 {
    ns401:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns366:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:48 .

    ns366:CmsImage1 foaf:thumbnail ns401:Thumbnail400x400 .
}

_:N667d0b6f951b48899bc55046ba67b7cf {
    _:N667d0b6f951b48899bc55046ba67b7cf a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:Nb6ab2a7cb06c4a8e8b68a369ca0a0b31 ;
        dcterms:spatial _:Nc7e04209ad7245ac830c6881fbaf816b ;
        dcterms:title "CmsCollection1CmsWork6 closing" ;
        cms:work ns19:work6 .

    _:Nc7e04209ad7245ac830c6881fbaf816b a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:Nb6ab2a7cb06c4a8e8b68a369ca0a0b31 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns282:Thumbnail800x800 {
    ns282:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns262:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:94 .

    ns262:CmsImage0 foaf:thumbnail ns282:Thumbnail800x800 .
}

ns1:19 {
    ns1:19 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 9" ;
        skos:prefLabel "CmsConcept 19" .
}

ns327:CmsImage0 {
    ns327:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:31 .
}

ns85:Thumbnail800x800 {
    ns85:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns431:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:freestandingwork9 .

    ns431:CmsImage1 foaf:thumbnail ns85:Thumbnail800x800 .
}

ns39:Thumbnail800x800 {
    ns39:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:17 .

    ns403:CmsImage1 foaf:thumbnail ns39:Thumbnail800x800 .
}

ns412:CmsImage0 {
    ns412:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:37 .
}

ns364:Thumbnail600x600 {
    ns364:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns442:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:106 .

    ns442:CmsImage1 foaf:thumbnail ns364:Thumbnail600x600 .
}

ns125:Thumbnail600x600 {
    ns125:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns428:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:83 .

    ns428:CmsImage1 foaf:thumbnail ns125:Thumbnail600x600 .
}

ns51:Thumbnail600x600 {
    ns51:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns332:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:40 .

    ns332:CmsImage0 foaf:thumbnail ns51:Thumbnail600x600 .
}

ns329:CmsImage0 {
    ns329:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:freestandingwork10 .
}

ns84:Thumbnail600x600 {
    ns84:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns442:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:106 .

    ns442:CmsImage0 foaf:thumbnail ns84:Thumbnail600x600 .
}

ns1:2 {
    ns1:2 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 2" ;
        skos:prefLabel "CmsConcept 2" .
}

ns1:42 {
    ns1:42 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 2" ;
        skos:prefLabel "CmsConcept 42" .
}

ns251:Thumbnail400x400 {
    ns251:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns328:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:2 .

    ns328:CmsImage1 foaf:thumbnail ns251:Thumbnail400x400 .
}

ns128:Thumbnail800x800 {
    ns128:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns245:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:7 .

    ns245:CmsImage1 foaf:thumbnail ns128:Thumbnail800x800 .
}

ns381:Thumbnail600x600 {
    ns381:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns306:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:person2 .

    ns306:CmsImage1 foaf:thumbnail ns381:Thumbnail600x600 .
}

ns176:Thumbnail400x400 {
    ns176:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns435:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:8 .

    ns435:CmsImage0 foaf:thumbnail ns176:Thumbnail400x400 .
}

ns294:CmsImage0 {
    ns294:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:99 .
}

ns19:work4Creation {
    ns19:work4Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns10:person1,
            ns10:person2 ;
        dcterms:date _:N64891fc742f94f7a9fba813896073668 ;
        dcterms:description _:N41d26441f96045c8a6071fca671c6f54 ;
        dcterms:spatial ns19:work4Location ;
        dcterms:title "CmsCollection1CmsWork4 creation" ;
        cms:work ns19:work4 .

    _:N64891fc742f94f7a9fba813896073668 a cms:DateTimeDescription ;
        time:day "---28"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:N41d26441f96045c8a6071fca671c6f54 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns393:Thumbnail200x200 {
    ns393:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns416:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:57 .

    ns416:CmsImage0 foaf:thumbnail ns393:Thumbnail200x200 .
}

ns52:Thumbnail600x600 {
    ns52:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns284:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:41 .

    ns284:CmsImage0 foaf:thumbnail ns52:Thumbnail600x600 .
}

ns1:0 {
    ns1:0 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 0" ;
        skos:prefLabel "CmsConcept 0" .
}

ns1:49 {
    ns1:49 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 9" ;
        skos:prefLabel "CmsConcept 49" .
}

ns137:Thumbnail600x600 {
    ns137:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns434:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:14 .

    ns434:CmsImage1 foaf:thumbnail ns137:Thumbnail600x600 .
}

ns372:Thumbnail800x800 {
    ns372:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns358:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns237:work0 .

    ns358:CmsImage1 foaf:thumbnail ns372:Thumbnail800x800 .
}

ns57:Thumbnail800x800 {
    ns57:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns431:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:freestandingwork9 .

    ns431:CmsImage0 foaf:thumbnail ns57:Thumbnail800x800 .
}

ns224:Thumbnail400x400 {
    ns224:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns445:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:30 .

    ns445:CmsImage0 foaf:thumbnail ns224:Thumbnail400x400 .
}

ns234:Thumbnail800x800 {
    ns234:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns408:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:47 .

    ns408:CmsImage0 foaf:thumbnail ns234:Thumbnail800x800 .
}

ns272:Thumbnail400x400 {
    ns272:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns390:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:person3 .

    ns390:CmsImage0 foaf:thumbnail ns272:Thumbnail400x400 .
}

ns410:Thumbnail800x800 {
    ns410:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material image 1 rights holder" ;
        dcterms:title "Material image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns222:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts vra:material .

    ns222:CmsImage1 foaf:thumbnail ns410:Thumbnail800x800 .
}

ns33:Thumbnail200x200 {
    ns33:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns390:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:person3 .

    ns390:CmsImage1 foaf:thumbnail ns33:Thumbnail200x200 .
}

ns10:person1 {
    ns10:person1 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing> ;
        contact:sortName "1, CmsPerson" ;
        owl:sameAs wd:Q7251 ;
        foaf:familyName "1" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 1" .
}

ns341:Thumbnail800x800 {
    ns341:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject image 0 rights holder" ;
        dcterms:title "Subject image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns430:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:subject .

    ns430:CmsImage0 foaf:thumbnail ns341:Thumbnail800x800 .
}

ns174:CmsImage1 {
    ns174:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:organization0 .
}

ns1:64 {
    ns1:64 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 4" ;
        skos:prefLabel "CmsConcept 64" .
}

ns4:Thumbnail800x800 {
    ns4:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns373:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:55 .

    ns373:CmsImage1 foaf:thumbnail ns4:Thumbnail800x800 .
}

ns1:47 {
    ns1:47 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 7" ;
        skos:prefLabel "CmsConcept 47" .
}

ns94:Thumbnail600x600 {
    ns94:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns336:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:81 .

    ns336:CmsImage0 foaf:thumbnail ns94:Thumbnail600x600 .
}

ns279:Thumbnail200x200 {
    ns279:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns409:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:19 .

    ns409:CmsImage0 foaf:thumbnail ns279:Thumbnail200x200 .
}

ns237:work1Opening {
    ns237:work1Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-31"^^xsd:date ;
        dcterms:spatial _:N666d44be377445239b4c5b0223e603a0 ;
        dcterms:title "CmsCollection0CmsWork1 opening" ;
        cms:work ns237:work1 .

    _:N666d44be377445239b4c5b0223e603a0 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns16:Thumbnail200x200 {
    ns16:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns329:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:freestandingwork10 .

    ns329:CmsImage0 foaf:thumbnail ns16:Thumbnail200x200 .
}

ns227:Thumbnail400x400 {
    ns227:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns329:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:freestandingwork10 .

    ns329:CmsImage1 foaf:thumbnail ns227:Thumbnail400x400 .
}

ns431:CmsImage0 {
    ns431:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:freestandingwork9 .
}

ns423:CmsImage0 {
    ns423:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:68 .
}

ns402:Thumbnail200x200 {
    ns402:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns406:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:58 .

    ns406:CmsImage1 foaf:thumbnail ns402:Thumbnail200x200 .
}

ns1:22 {
    ns1:22 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 2" ;
        skos:prefLabel "CmsConcept 22" .
}

ns69:Thumbnail400x400 {
    ns69:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns250:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:101 .

    ns250:CmsImage1 foaf:thumbnail ns69:Thumbnail400x400 .
}

ns235:Thumbnail600x600 {
    ns235:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns280:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:80 .

    ns280:CmsImage1 foaf:thumbnail ns235:Thumbnail600x600 .
}

vra:technique {
    vra:technique a cms:Property ;
        rdfs:label "Technique" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns438:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> .
}

ns319:CmsImage0 {
    ns319:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:11 .
}

ns189:Thumbnail600x600 {
    ns189:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns9:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:20 .

    ns9:CmsImage1 foaf:thumbnail ns189:Thumbnail600x600 .
}

ns426:Thumbnail400x400 {
    ns426:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns203:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:109 .

    ns203:CmsImage1 foaf:thumbnail ns426:Thumbnail400x400 .
}

ns432:CmsImage0 {
    ns432:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context image 0 rights holder" ;
        dcterms:title "Cultural context image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts vra:culturalContext .
}

ns35:Thumbnail600x600 {
    ns35:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns225:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:6 .

    ns225:CmsImage0 foaf:thumbnail ns35:Thumbnail600x600 .
}

ns29:Thumbnail800x800 {
    ns29:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns89:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:36 .

    ns89:CmsImage0 foaf:thumbnail ns29:Thumbnail800x800 .
}

ns1:103 {
    ns1:103 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 3" ;
        skos:prefLabel "CmsConcept 103" .
}

ns19:work7Location {
    ns19:work7Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns322:Thumbnail800x800 {
    ns322:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns276:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:organization1 .

    ns276:CmsImage0 foaf:thumbnail ns322:Thumbnail800x800 .
}

ns152:Thumbnail400x400 {
    ns152:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns436:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns19:work5 .

    ns436:CmsImage0 foaf:thumbnail ns152:Thumbnail400x400 .
}

ns433:Thumbnail200x200 {
    ns433:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns334:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:104 .

    ns334:CmsImage0 foaf:thumbnail ns433:Thumbnail200x200 .
}

ns277:Thumbnail600x600 {
    ns277:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns284:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:41 .

    ns284:CmsImage1 foaf:thumbnail ns277:Thumbnail600x600 .
}

ns176:Thumbnail600x600 {
    ns176:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns435:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:8 .

    ns435:CmsImage0 foaf:thumbnail ns176:Thumbnail600x600 .
}

ns309:Thumbnail400x400 {
    ns309:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns318:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:44 .

    ns318:CmsImage1 foaf:thumbnail ns309:Thumbnail400x400 .
}

ns243:Thumbnail200x200 {
    ns243:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns188:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:56 .

    ns188:CmsImage1 foaf:thumbnail ns243:Thumbnail200x200 .
}

ns300:CmsImage1 {
    ns300:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:24 .
}

ns75:Thumbnail600x600 {
    ns75:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns169:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:108 .

    ns169:CmsImage1 foaf:thumbnail ns75:Thumbnail600x600 .
}

ns38:Thumbnail400x400 {
    ns38:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns412:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:37 .

    ns412:CmsImage0 foaf:thumbnail ns38:Thumbnail400x400 .
}

ns45:Thumbnail800x800 {
    ns45:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns327:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:31 .

    ns327:CmsImage1 foaf:thumbnail ns45:Thumbnail800x800 .
}

ns51:Thumbnail400x400 {
    ns51:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns332:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:40 .

    ns332:CmsImage0 foaf:thumbnail ns51:Thumbnail400x400 .
}

ns155:Thumbnail800x800 {
    ns155:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns150:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:15 .

    ns150:CmsImage1 foaf:thumbnail ns155:Thumbnail800x800 .
}

ns59:Thumbnail200x200 {
    ns59:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns356:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:26 .

    ns356:CmsImage0 foaf:thumbnail ns59:Thumbnail200x200 .
}

ns1:28 {
    ns1:28 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 8" ;
        skos:prefLabel "CmsConcept 28" .
}

ns103:Thumbnail600x600 {
    ns103:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns420:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:27 .

    ns420:CmsImage0 foaf:thumbnail ns103:Thumbnail600x600 .
}

ns92:Thumbnail800x800 {
    ns92:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns312:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:49 .

    ns312:CmsImage0 foaf:thumbnail ns92:Thumbnail800x800 .
}

ns1:105 {
    ns1:105 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 5" ;
        skos:prefLabel "CmsConcept 105" .
}

ns94:Thumbnail200x200 {
    ns94:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns336:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:81 .

    ns336:CmsImage0 foaf:thumbnail ns94:Thumbnail200x200 .
}

ns241:Thumbnail400x400 {
    ns241:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns425:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:1 .

    ns425:CmsImage1 foaf:thumbnail ns241:Thumbnail400x400 .
}

ns13:Thumbnail400x400 {
    ns13:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns225:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:6 .

    ns225:CmsImage1 foaf:thumbnail ns13:Thumbnail400x400 .
}

ns434:CmsImage1 {
    ns434:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:14 .
}

ns393:Thumbnail400x400 {
    ns393:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns416:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:57 .

    ns416:CmsImage0 foaf:thumbnail ns393:Thumbnail400x400 .
}

ns219:Thumbnail800x800 {
    ns219:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns423:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:68 .

    ns423:CmsImage1 foaf:thumbnail ns219:Thumbnail800x800 .
}

ns61:Thumbnail800x800 {
    ns61:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns276:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:organization1 .

    ns276:CmsImage1 foaf:thumbnail ns61:Thumbnail800x800 .
}

ns260:Thumbnail800x800 {
    ns260:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns404:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:25 .

    ns404:CmsImage0 foaf:thumbnail ns260:Thumbnail800x800 .
}

ns9:CmsImage1 {
    ns9:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:20 .
}

ns269:Thumbnail800x800 {
    ns269:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns383:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:79 .

    ns383:CmsImage1 foaf:thumbnail ns269:Thumbnail800x800 .
}

ns277:Thumbnail800x800 {
    ns277:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns284:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:41 .

    ns284:CmsImage1 foaf:thumbnail ns277:Thumbnail800x800 .
}

ns291:Thumbnail200x200 {
    ns291:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns114:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:93 .

    ns114:CmsImage1 foaf:thumbnail ns291:Thumbnail200x200 .
}

ns381:Thumbnail400x400 {
    ns381:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns306:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:person2 .

    ns306:CmsImage1 foaf:thumbnail ns381:Thumbnail400x400 .
}

ns63:Thumbnail200x200 {
    ns63:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns110:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:51 .

    ns110:CmsImage1 foaf:thumbnail ns63:Thumbnail200x200 .
}

ns11:Thumbnail200x200 {
    ns11:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Description image 0 rights holder" ;
        dcterms:title "Description image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns140:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:description .

    ns140:CmsImage0 foaf:thumbnail ns11:Thumbnail200x200 .
}

ns232:Thumbnail400x400 {
    ns232:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns180:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:organization2 .

    ns180:CmsImage1 foaf:thumbnail ns232:Thumbnail400x400 .
}

ns60:Thumbnail400x400 {
    ns60:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher image 1 rights holder" ;
        dcterms:title "Publisher image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns130:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:publisher .

    ns130:CmsImage1 foaf:thumbnail ns60:Thumbnail400x400 .
}

ns244:Thumbnail400x400 {
    ns244:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns374:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:95 .

    ns374:CmsImage0 foaf:thumbnail ns244:Thumbnail400x400 .
}

ns435:CmsImage0 {
    ns435:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:8 .
}

ns19:work6Opening {
    ns19:work6Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-26"^^xsd:date ;
        dcterms:description _:Nb6ab2a7cb06c4a8e8b68a369ca0a0b31 ;
        dcterms:spatial _:Nc7e04209ad7245ac830c6881fbaf816b ;
        dcterms:title "CmsCollection1CmsWork6 opening" ;
        cms:work ns19:work6 .

    _:Nc7e04209ad7245ac830c6881fbaf816b a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:Nb6ab2a7cb06c4a8e8b68a369ca0a0b31 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns148:Thumbnail200x200 {
    ns148:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns18:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:74 .

    ns18:CmsImage1 foaf:thumbnail ns148:Thumbnail200x200 .
}

ns116:Thumbnail200x200 {
    ns116:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns335:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:54 .

    ns335:CmsImage0 foaf:thumbnail ns116:Thumbnail200x200 .
}

ns426:Thumbnail800x800 {
    ns426:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns203:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:109 .

    ns203:CmsImage1 foaf:thumbnail ns426:Thumbnail800x800 .
}

ns14:Thumbnail200x200 {
    ns14:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns380:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:64 .

    ns380:CmsImage1 foaf:thumbnail ns14:Thumbnail200x200 .
}

ns413:Thumbnail600x600 {
    ns413:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns336:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:81 .

    ns336:CmsImage1 foaf:thumbnail ns413:Thumbnail600x600 .
}

ns284:CmsImage1 {
    ns284:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:41 .
}

ns418:Thumbnail200x200 {
    ns418:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns349:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:72 .

    ns349:CmsImage0 foaf:thumbnail ns418:Thumbnail200x200 .
}

ns417:Thumbnail600x600 {
    ns417:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns179:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:43 .

    ns179:CmsImage1 foaf:thumbnail ns417:Thumbnail600x600 .
}

ns249:Thumbnail800x800 {
    ns249:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns174:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:organization0 .

    ns174:CmsImage0 foaf:thumbnail ns249:Thumbnail800x800 .
}

ns395:CmsImage1 {
    ns395:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:61 .
}

ns1:20 {
    ns1:20 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 0" ;
        skos:prefLabel "CmsConcept 20" .
}

ns436:CmsImage1 {
    ns436:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns19:work5 .
}

ns170:Thumbnail600x600 {
    ns170:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns377:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:46 .

    ns377:CmsImage0 foaf:thumbnail ns170:Thumbnail600x600 .
}

ns362:Thumbnail600x600 {
    ns362:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns283:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:5 .

    ns283:CmsImage1 foaf:thumbnail ns362:Thumbnail600x600 .
}

ns1:7 {
    ns1:7 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 7" ;
        skos:prefLabel "CmsConcept 7" .
}

ns235:Thumbnail400x400 {
    ns235:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns280:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:80 .

    ns280:CmsImage1 foaf:thumbnail ns235:Thumbnail400x400 .
}

ns10:person2 {
    ns10:person2 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing> ;
        contact:sortName "2, CmsPerson" ;
        owl:sameAs wd:Q7251 ;
        foaf:familyName "2" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 2" ;
        foaf:page ns10:person2page .
}

ns345:Thumbnail200x200 {
    ns345:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns387:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:105 .

    ns387:CmsImage0 foaf:thumbnail ns345:Thumbnail200x200 .
}

ns154:Thumbnail600x600 {
    ns154:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns293:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:90 .

    ns293:CmsImage0 foaf:thumbnail ns154:Thumbnail600x600 .
}

ns142:Thumbnail200x200 {
    ns142:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns387:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:105 .

    ns387:CmsImage1 foaf:thumbnail ns142:Thumbnail200x200 .
}

ns422:Thumbnail400x400 {
    ns422:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject image 1 rights holder" ;
        dcterms:title "Subject image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns430:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:subject .

    ns430:CmsImage1 foaf:thumbnail ns422:Thumbnail400x400 .
}

ns237:work3Creation {
    ns237:work3Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns10:person0,
            ns10:person1 ;
        dcterms:date _:N9840ff1b9c084e00a4576f39fa182374 ;
        dcterms:spatial ns237:work3Location ;
        dcterms:title "CmsCollection0CmsWork3 creation" ;
        cms:work ns237:work3 .

    _:N9840ff1b9c084e00a4576f39fa182374 a cms:DateTimeDescription ;
        time:day "---29"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns424:Thumbnail400x400 {
    ns424:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns444:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:59 .

    ns444:CmsImage0 foaf:thumbnail ns424:Thumbnail400x400 .
}

ns160:Thumbnail800x800 {
    ns160:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns319:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:11 .

    ns319:CmsImage0 foaf:thumbnail ns160:Thumbnail800x800 .
}

ns107:Thumbnail400x400 {
    ns107:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns197:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:organization3 .

    ns197:CmsImage0 foaf:thumbnail ns107:Thumbnail400x400 .
}

ns322:Thumbnail400x400 {
    ns322:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns276:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:organization1 .

    ns276:CmsImage0 foaf:thumbnail ns322:Thumbnail400x400 .
}

ns58:Thumbnail800x800 {
    ns58:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns356:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:26 .

    ns356:CmsImage1 foaf:thumbnail ns58:Thumbnail800x800 .
}

ns159:Thumbnail200x200 {
    ns159:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns436:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns19:work5 .

    ns436:CmsImage1 foaf:thumbnail ns159:Thumbnail200x200 .
}

ns239:Thumbnail600x600 {
    ns239:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context image 1 rights holder" ;
        dcterms:title "Cultural context image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns432:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts vra:culturalContext .

    ns432:CmsImage1 foaf:thumbnail ns239:Thumbnail600x600 .
}

ns219:Thumbnail200x200 {
    ns219:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns423:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:68 .

    ns423:CmsImage1 foaf:thumbnail ns219:Thumbnail200x200 .
}

ns166:Thumbnail800x800 {
    ns166:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns169:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:108 .

    ns169:CmsImage0 foaf:thumbnail ns166:Thumbnail800x800 .
}

ns37:Thumbnail400x400 {
    ns37:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns289:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:38 .

    ns289:CmsImage1 foaf:thumbnail ns37:Thumbnail400x400 .
}

ns285:Thumbnail200x200 {
    ns285:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns208:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:75 .

    ns208:CmsImage0 foaf:thumbnail ns285:Thumbnail200x200 .
}

ns253:Thumbnail600x600 {
    ns253:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns195:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:person4 .

    ns195:CmsImage0 foaf:thumbnail ns253:Thumbnail600x600 .
}

ns398:CmsImage0 {
    ns398:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:89 .
}

ns320:CmsImage0 {
    ns320:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns237:work3 .
}

ns419:Thumbnail600x600 {
    ns419:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns429:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:4 .

    ns429:CmsImage1 foaf:thumbnail ns419:Thumbnail600x600 .
}

ns331:Thumbnail600x600 {
    ns331:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns17:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:86 .

    ns17:CmsImage0 foaf:thumbnail ns331:Thumbnail600x600 .
}

ns211:Thumbnail600x600 {
    ns211:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns420:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:27 .

    ns420:CmsImage1 foaf:thumbnail ns211:Thumbnail600x600 .
}

ns368:Thumbnail200x200 {
    ns368:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns398:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:89 .

    ns398:CmsImage0 foaf:thumbnail ns368:Thumbnail200x200 .
}

ns281:Thumbnail200x200 {
    ns281:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns327:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:31 .

    ns327:CmsImage0 foaf:thumbnail ns281:Thumbnail200x200 .
}

ns178:Thumbnail800x800 {
    ns178:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns3:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:33 .

    ns3:CmsImage1 foaf:thumbnail ns178:Thumbnail800x800 .
}

ns142:Thumbnail400x400 {
    ns142:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns387:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:105 .

    ns387:CmsImage1 foaf:thumbnail ns142:Thumbnail400x400 .
}

ns370:Thumbnail800x800 {
    ns370:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns124:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:13 .

    ns124:CmsImage0 foaf:thumbnail ns370:Thumbnail800x800 .
}

ns239:Thumbnail200x200 {
    ns239:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context image 1 rights holder" ;
        dcterms:title "Cultural context image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns432:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts vra:culturalContext .

    ns432:CmsImage1 foaf:thumbnail ns239:Thumbnail200x200 .
}

ns317:CmsImage0 {
    ns317:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:18 .
}

ns38:Thumbnail800x800 {
    ns38:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns412:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:37 .

    ns412:CmsImage0 foaf:thumbnail ns38:Thumbnail800x800 .
}

ns246:Thumbnail200x200 {
    ns246:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns445:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:30 .

    ns445:CmsImage1 foaf:thumbnail ns246:Thumbnail200x200 .
}

_:N1a26065160e34c70afe500b7d3e287eb {
    _:N1a26065160e34c70afe500b7d3e287eb a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N1de0a484f7964734b7ddb81d87a5feef ;
        dcterms:spatial _:Nf845656569cc40a1a30af82d95fffdbe ;
        dcterms:title "FreestandingWork8 closing" ;
        cms:work ns10:freestandingwork8 .

    _:Nf845656569cc40a1a30af82d95fffdbe a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N1de0a484f7964734b7ddb81d87a5feef a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns383:CmsImage1 {
    ns383:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:79 .
}

_:Na6174989b0584455bf9566240387b94d {
    _:Na6174989b0584455bf9566240387b94d a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N7fc12851b24940138cef0a4ab13fd2de ;
        dcterms:title "FreestandingWork11 closing" ;
        cms:work ns10:freestandingwork11 .

    _:N7fc12851b24940138cef0a4ab13fd2de a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns122:Thumbnail400x400 {
    ns122:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns9:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:20 .

    ns9:CmsImage0 foaf:thumbnail ns122:Thumbnail400x400 .
}

ns118:CmsImage0 {
    ns118:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language image 0 rights holder" ;
        dcterms:title "Language image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:language .
}

ns149:Thumbnail200x200 {
    ns149:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Title image 0 rights holder" ;
        dcterms:title "Title image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns324:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:title .

    ns324:CmsImage0 foaf:thumbnail ns149:Thumbnail200x200 .
}

ns331:Thumbnail200x200 {
    ns331:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns17:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:86 .

    ns17:CmsImage0 foaf:thumbnail ns331:Thumbnail200x200 .
}

ns242:Thumbnail200x200 {
    ns242:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns250:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:101 .

    ns250:CmsImage0 foaf:thumbnail ns242:Thumbnail200x200 .
}

ns392:CmsImage0 {
    ns392:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent image 0 rights holder" ;
        dcterms:title "Extent image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:extent .
}

ns116:Thumbnail800x800 {
    ns116:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns335:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:54 .

    ns335:CmsImage0 foaf:thumbnail ns116:Thumbnail800x800 .
}

ns400:Thumbnail800x800 {
    ns400:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns157:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:person1 .

    ns157:CmsImage1 foaf:thumbnail ns400:Thumbnail800x800 .
}

ns146:CmsImage1 {
    ns146:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium image 1 rights holder" ;
        dcterms:title "Medium image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:medium .
}

ns415:Thumbnail400x400 {
    ns415:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns74:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:92 .

    ns74:CmsImage1 foaf:thumbnail ns415:Thumbnail400x400 .
}

ns198:CmsImage0 {
    ns198:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:82 .
}

ns226:Thumbnail800x800 {
    ns226:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language image 1 rights holder" ;
        dcterms:title "Language image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns118:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:language .

    ns118:CmsImage1 foaf:thumbnail ns226:Thumbnail800x800 .
}

ns66:CmsImage1 {
    ns66:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source image 1 rights holder" ;
        dcterms:title "Source image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:source .
}

ns201:Thumbnail400x400 {
    ns201:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns153:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:29 .

    ns153:CmsImage0 foaf:thumbnail ns201:Thumbnail400x400 .
}

ns314:Thumbnail600x600 {
    ns314:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns411:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:88 .

    ns411:CmsImage0 foaf:thumbnail ns314:Thumbnail600x600 .
}

ns400:Thumbnail400x400 {
    ns400:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns157:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:person1 .

    ns157:CmsImage1 foaf:thumbnail ns400:Thumbnail400x400 .
}

ns345:Thumbnail400x400 {
    ns345:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns387:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:105 .

    ns387:CmsImage0 foaf:thumbnail ns345:Thumbnail400x400 .
}

ns301:Thumbnail400x400 {
    ns301:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns373:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:55 .

    ns373:CmsImage0 foaf:thumbnail ns301:Thumbnail400x400 .
}

ns196:Thumbnail400x400 {
    ns196:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium image 0 rights holder" ;
        dcterms:title "Medium image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns146:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:medium .

    ns146:CmsImage0 foaf:thumbnail ns196:Thumbnail400x400 .
}

ns4:Thumbnail200x200 {
    ns4:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns373:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:55 .

    ns373:CmsImage1 foaf:thumbnail ns4:Thumbnail200x200 .
}

ns272:Thumbnail800x800 {
    ns272:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns390:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:person3 .

    ns390:CmsImage0 foaf:thumbnail ns272:Thumbnail800x800 .
}

ns120:Thumbnail800x800 {
    ns120:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns18:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:74 .

    ns18:CmsImage0 foaf:thumbnail ns120:Thumbnail800x800 .
}

ns425:CmsImage0 {
    ns425:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:1 .
}

ns359:Thumbnail600x600 {
    ns359:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns74:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:92 .

    ns74:CmsImage0 foaf:thumbnail ns359:Thumbnail600x600 .
}

ns132:Thumbnail800x800 {
    ns132:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns398:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:89 .

    ns398:CmsImage1 foaf:thumbnail ns132:Thumbnail800x800 .
}

ns98:Thumbnail800x800 {
    ns98:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns198:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:82 .

    ns198:CmsImage1 foaf:thumbnail ns98:Thumbnail800x800 .
}

ns273:Thumbnail600x600 {
    ns273:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns220:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:103 .

    ns220:CmsImage0 foaf:thumbnail ns273:Thumbnail600x600 .
}

ns437:CmsImage0 {
    ns437:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:91 .
}

ns260:Thumbnail600x600 {
    ns260:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns404:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:25 .

    ns404:CmsImage0 foaf:thumbnail ns260:Thumbnail600x600 .
}

ns57:Thumbnail600x600 {
    ns57:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns431:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:freestandingwork9 .

    ns431:CmsImage0 foaf:thumbnail ns57:Thumbnail600x600 .
}

ns102:Thumbnail200x200 {
    ns102:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns316:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:65 .

    ns316:CmsImage1 foaf:thumbnail ns102:Thumbnail200x200 .
}

ns1:68 {
    ns1:68 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 8" ;
        skos:prefLabel "CmsConcept 68" .
}

ns388:Thumbnail200x200 {
    ns388:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns395:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:61 .

    ns395:CmsImage1 foaf:thumbnail ns388:Thumbnail200x200 .
}

ns259:Thumbnail400x400 {
    ns259:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns195:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:person4 .

    ns195:CmsImage1 foaf:thumbnail ns259:Thumbnail400x400 .
}

ns47:Thumbnail800x800 {
    ns47:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns404:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:25 .

    ns404:CmsImage1 foaf:thumbnail ns47:Thumbnail800x800 .
}

ns406:CmsImage0 {
    ns406:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:58 .
}

ns177:Thumbnail200x200 {
    ns177:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type image 0 rights holder" ;
        dcterms:title "Type image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns350:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:type .

    ns350:CmsImage0 foaf:thumbnail ns177:Thumbnail200x200 .
}

ns314:Thumbnail800x800 {
    ns314:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns411:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:88 .

    ns411:CmsImage0 foaf:thumbnail ns314:Thumbnail800x800 .
}

ns139:Thumbnail400x400 {
    ns139:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns262:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:94 .

    ns262:CmsImage1 foaf:thumbnail ns139:Thumbnail400x400 .
}

ns234:Thumbnail600x600 {
    ns234:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns408:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:47 .

    ns408:CmsImage0 foaf:thumbnail ns234:Thumbnail600x600 .
}

ns214:CmsImage1 {
    ns214:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:52 .
}

ns31:Thumbnail600x600 {
    ns31:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns288:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:71 .

    ns288:CmsImage1 foaf:thumbnail ns31:Thumbnail600x600 .
}

ns81:Thumbnail400x400 {
    ns81:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:17 .

    ns403:CmsImage0 foaf:thumbnail ns81:Thumbnail400x400 .
}

ns162:Thumbnail800x800 {
    ns162:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns71:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:96 .

    ns71:CmsImage1 foaf:thumbnail ns162:Thumbnail800x800 .
}

ns337:Thumbnail400x400 {
    ns337:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns316:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:65 .

    ns316:CmsImage0 foaf:thumbnail ns337:Thumbnail400x400 .
}

ns2:Thumbnail800x800 {
    ns2:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns343:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:98 .

    ns343:CmsImage0 foaf:thumbnail ns2:Thumbnail800x800 .
}

ns438:property_group {
    ns438:property_group a cms:PropertyGroup ;
        rdfs:label "Synthetic data properties" .
}

ns424:Thumbnail600x600 {
    ns424:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns444:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:59 .

    ns444:CmsImage0 foaf:thumbnail ns424:Thumbnail600x600 .
}

ns216:Thumbnail200x200 {
    ns216:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns184:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:34 .

    ns184:CmsImage0 foaf:thumbnail ns216:Thumbnail200x200 .
}

ns357:Thumbnail400x400 {
    ns357:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns15:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:16 .

    ns15:CmsImage1 foaf:thumbnail ns357:Thumbnail400x400 .
}

ns435:CmsImage1 {
    ns435:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:8 .
}

dcterms:publisher {
    dcterms:publisher a cms:Property ;
        rdfs:label "Publisher" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns438:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> .
}

ns157:CmsImage0 {
    ns157:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:person1 .
}

ns236:Thumbnail400x400 {
    ns236:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language image 0 rights holder" ;
        dcterms:title "Language image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns118:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:language .

    ns118:CmsImage0 foaf:thumbnail ns236:Thumbnail400x400 .
}

_:N2a4070c16cef49e7b2fd606e3ebcb88a {
    _:N2a4070c16cef49e7b2fd606e3ebcb88a a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:Nb0b286586234435e92539fd3146f4f80 ;
        dcterms:spatial _:N9a56cb0062914803bbf3e22e7bbf0084 ;
        dcterms:title "FreestandingWork10 closing" ;
        cms:work ns10:freestandingwork10 .

    _:N9a56cb0062914803bbf3e22e7bbf0084 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:Nb0b286586234435e92539fd3146f4f80 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns193:Thumbnail800x800 {
    ns193:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:0 .

    ns385:CmsImage0 foaf:thumbnail ns193:Thumbnail800x800 .
}

ns80:Thumbnail200x200 {
    ns80:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns377:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:46 .

    ns377:CmsImage1 foaf:thumbnail ns80:Thumbnail200x200 .
}

ns64:Thumbnail200x200 {
    ns64:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns153:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:29 .

    ns153:CmsImage1 foaf:thumbnail ns64:Thumbnail200x200 .
}

ns13:Thumbnail800x800 {
    ns13:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns225:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:6 .

    ns225:CmsImage1 foaf:thumbnail ns13:Thumbnail800x800 .
}

ns428:CmsImage0 {
    ns428:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:83 .
}

ns1:77 {
    ns1:77 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 7" ;
        skos:prefLabel "CmsConcept 77" .
}

ns7:Thumbnail800x800 {
    ns7:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns198:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:82 .

    ns198:CmsImage0 foaf:thumbnail ns7:Thumbnail800x800 .
}

ns439:CmsImage0 {
    ns439:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:42 .
}

ns170:Thumbnail400x400 {
    ns170:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns377:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:46 .

    ns377:CmsImage0 foaf:thumbnail ns170:Thumbnail400x400 .
}

ns141:Thumbnail200x200 {
    ns141:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns429:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:4 .

    ns429:CmsImage0 foaf:thumbnail ns141:Thumbnail200x200 .
}

ns185:Thumbnail400x400 {
    ns185:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns229:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:66 .

    ns229:CmsImage1 foaf:thumbnail ns185:Thumbnail400x400 .
}

ns440:CmsImage0 {
    ns440:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:73 .
}

ns166:Thumbnail200x200 {
    ns166:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns169:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:108 .

    ns169:CmsImage0 foaf:thumbnail ns166:Thumbnail200x200 .
}

ns237:work0Opening {
    ns237:work0Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N11483f490aee4bc99110bdfe899f7b25 ;
        dcterms:spatial _:N8b056eeae356497eaf70554de2475a0b ;
        dcterms:title "CmsCollection0CmsWork0 opening" ;
        cms:work ns237:work0 .

    _:N8b056eeae356497eaf70554de2475a0b a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N11483f490aee4bc99110bdfe899f7b25 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns271:Thumbnail600x600 {
    ns271:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns76:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:60 .

    ns76:CmsImage1 foaf:thumbnail ns271:Thumbnail600x600 .
}

ns411:CmsImage0 {
    ns411:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:88 .
}

ns228:CmsImage0 {
    ns228:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:organization4 .
}

ns434:CmsImage0 {
    ns434:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:14 .
}

ns291:Thumbnail600x600 {
    ns291:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns114:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:93 .

    ns114:CmsImage1 foaf:thumbnail ns291:Thumbnail600x600 .
}

ns232:Thumbnail200x200 {
    ns232:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns180:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:organization2 .

    ns180:CmsImage1 foaf:thumbnail ns232:Thumbnail200x200 .
}

ns27:Thumbnail600x600 {
    ns27:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:78 .

    ns396:CmsImage0 foaf:thumbnail ns27:Thumbnail600x600 .
}

ns440:CmsImage1 {
    ns440:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:73 .
}

ns361:Thumbnail800x800 {
    ns361:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns408:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:47 .

    ns408:CmsImage1 foaf:thumbnail ns361:Thumbnail800x800 .
}

ns185:Thumbnail600x600 {
    ns185:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns229:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:66 .

    ns229:CmsImage1 foaf:thumbnail ns185:Thumbnail600x600 .
}

ns242:Thumbnail600x600 {
    ns242:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns250:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:101 .

    ns250:CmsImage0 foaf:thumbnail ns242:Thumbnail600x600 .
}

ns1:65 {
    ns1:65 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 5" ;
        skos:prefLabel "CmsConcept 65" .
}

ns241:Thumbnail800x800 {
    ns241:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns425:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:1 .

    ns425:CmsImage1 foaf:thumbnail ns241:Thumbnail800x800 .
}

ns298:Thumbnail200x200 {
    ns298:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns376:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:76 .

    ns376:CmsImage1 foaf:thumbnail ns298:Thumbnail200x200 .
}

ns422:Thumbnail200x200 {
    ns422:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject image 1 rights holder" ;
        dcterms:title "Subject image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns430:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:subject .

    ns430:CmsImage1 foaf:thumbnail ns422:Thumbnail200x200 .
}

ns129:CmsImage1 {
    ns129:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:67 .
}

ns367:Thumbnail200x200 {
    ns367:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns414:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns19:work4 .

    ns414:CmsImage1 foaf:thumbnail ns367:Thumbnail200x200 .
}

ns370:Thumbnail400x400 {
    ns370:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns124:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:13 .

    ns124:CmsImage0 foaf:thumbnail ns370:Thumbnail400x400 .
}

ns145:Thumbnail400x400 {
    ns145:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns389:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:100 .

    ns389:CmsImage1 foaf:thumbnail ns145:Thumbnail400x400 .
}

ns34:Thumbnail800x800 {
    ns34:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns406:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:58 .

    ns406:CmsImage0 foaf:thumbnail ns34:Thumbnail800x800 .
}

ns274:Thumbnail800x800 {
    ns274:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns347:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:77 .

    ns347:CmsImage0 foaf:thumbnail ns274:Thumbnail800x800 .
}

ns213:Thumbnail200x200 {
    ns213:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns214:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:52 .

    ns214:CmsImage0 foaf:thumbnail ns213:Thumbnail200x200 .
}

ns266:Thumbnail200x200 {
    ns266:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns369:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:87 .

    ns369:CmsImage1 foaf:thumbnail ns266:Thumbnail200x200 .
}

ns212:Thumbnail600x600 {
    ns212:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns294:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:99 .

    ns294:CmsImage1 foaf:thumbnail ns212:Thumbnail600x600 .
}

ns113:Thumbnail200x200 {
    ns113:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns46:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns19:work6 .

    ns46:CmsImage0 foaf:thumbnail ns113:Thumbnail200x200 .
}

ns261:Thumbnail800x800 {
    ns261:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns386:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:28 .

    ns386:CmsImage1 foaf:thumbnail ns261:Thumbnail800x800 .
}

ns138:Thumbnail600x600 {
    ns138:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns441:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:63 .

    ns441:CmsImage0 foaf:thumbnail ns138:Thumbnail600x600 .
}

ns44:Thumbnail600x600 {
    ns44:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns380:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:64 .

    ns380:CmsImage0 foaf:thumbnail ns44:Thumbnail600x600 .
}

ns186:Thumbnail600x600 {
    ns186:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns386:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:28 .

    ns386:CmsImage0 foaf:thumbnail ns186:Thumbnail600x600 .
}

ns136:Thumbnail200x200 {
    ns136:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:69 .

    ns365:CmsImage1 foaf:thumbnail ns136:Thumbnail200x200 .
}

ns378:Thumbnail600x600 {
    ns378:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:69 .

    ns365:CmsImage0 foaf:thumbnail ns378:Thumbnail600x600 .
}

ns144:Thumbnail200x200 {
    ns144:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Description image 1 rights holder" ;
        dcterms:title "Description image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns140:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:description .

    ns140:CmsImage1 foaf:thumbnail ns144:Thumbnail200x200 .
}

ns210:Thumbnail600x600 {
    ns210:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns395:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:61 .

    ns395:CmsImage0 foaf:thumbnail ns210:Thumbnail600x600 .
}

ns10:freestandingwork8 {
    ns10:freestandingwork8 a cms:Work ;
        dcterms:alternative "FreestandingWork8 alternative title 0",
            "FreestandingWork8 alternative title 1" ;
        dcterms:contributor _:N166af86df121467e9aba3f58b8979897,
            _:N4330522d65d54b5cb382371dc5c7102d ;
        dcterms:creator ns10:organization0,
            ns10:organization1 ;
        dcterms:description _:N1de0a484f7964734b7ddb81d87a5feef ;
        dcterms:extent ns1:18,
            ns1:19 ;
        dcterms:identifier "FreestandingWork8Id0",
            "FreestandingWork8Id1" ;
        dcterms:language ns1:28,
            ns1:29 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns1:48,
            ns1:49 ;
        dcterms:provenance "FreestandingWork8 provenance 0",
            "FreestandingWork8 provenance 1" ;
        dcterms:publisher ns1:58,
            ns1:59 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 rights holder" ;
        dcterms:source ns1:68,
            ns1:69 ;
        dcterms:spatial ns10:freestandingwork8Location ;
        dcterms:subject ns1:88,
            ns1:89 ;
        dcterms:title "FreestandingWork8" ;
        dcterms:type ns1:108,
            ns1:109 ;
        vra:culturalContext ns1:8,
            ns1:9 ;
        vra:material ns1:38,
            ns1:39 ;
        vra:technique ns1:98,
            ns1:99 ;
        owl:sameAs wd:Q937690 ;
        foaf:page <http://example.com/work/8> .

    _:N166af86df121467e9aba3f58b8979897 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork8 contributor 0" .

    _:N4330522d65d54b5cb382371dc5c7102d a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork8 contributor 1" .

    _:N1de0a484f7964734b7ddb81d87a5feef a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns207:Thumbnail200x200 {
    ns207:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns306:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:person2 .

    ns306:CmsImage0 foaf:thumbnail ns207:Thumbnail200x200 .
}

ns369:CmsImage0 {
    ns369:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:87 .
}

_:N72769bc3290c40839c17e79d88783b8f {
    _:N72769bc3290c40839c17e79d88783b8f a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:Nd90da67f880d4cb4b34c8a51066bdb65 ;
        dcterms:spatial _:N8af83076cbb94f5fb96558ee9a0c89fc ;
        dcterms:title "CmsCollection0CmsWork2 closing" ;
        cms:work ns237:work2 .

    _:N8af83076cbb94f5fb96558ee9a0c89fc a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:Nd90da67f880d4cb4b34c8a51066bdb65 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns270:Thumbnail600x600 {
    ns270:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns288:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:71 .

    ns288:CmsImage0 foaf:thumbnail ns270:Thumbnail600x600 .
}

ns303:Thumbnail200x200 {
    ns303:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique image 1 rights holder" ;
        dcterms:title "Technique image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns43:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts vra:technique .

    ns43:CmsImage1 foaf:thumbnail ns303:Thumbnail200x200 .
}

ns387:CmsImage0 {
    ns387:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:105 .
}

ns178:Thumbnail200x200 {
    ns178:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns3:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:33 .

    ns3:CmsImage1 foaf:thumbnail ns178:Thumbnail200x200 .
}

ns103:Thumbnail200x200 {
    ns103:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns420:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:27 .

    ns420:CmsImage0 foaf:thumbnail ns103:Thumbnail200x200 .
}

dcterms:title {
    dcterms:title a cms:Property ;
        rdfs:label "Title" ;
        cms:propertyFilterable false ;
        cms:propertyGroup ns438:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Title> .
}

ns88:Thumbnail200x200 {
    ns88:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns46:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns19:work6 .

    ns46:CmsImage1 foaf:thumbnail ns88:Thumbnail200x200 .
}

ns305:Thumbnail400x400 {
    ns305:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns110:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:51 .

    ns110:CmsImage0 foaf:thumbnail ns305:Thumbnail400x400 .
}

ns34:Thumbnail600x600 {
    ns34:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns406:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:58 .

    ns406:CmsImage0 foaf:thumbnail ns34:Thumbnail600x600 .
}

ns213:Thumbnail400x400 {
    ns213:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns214:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:52 .

    ns214:CmsImage0 foaf:thumbnail ns213:Thumbnail400x400 .
}

ns292:Thumbnail200x200 {
    ns292:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent image 0 rights holder" ;
        dcterms:title "Extent image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:extent .

    ns392:CmsImage0 foaf:thumbnail ns292:Thumbnail200x200 .
}

ns1:83 {
    ns1:83 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 3" ;
        skos:prefLabel "CmsConcept 83" .
}

ns162:Thumbnail400x400 {
    ns162:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns71:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:96 .

    ns71:CmsImage1 foaf:thumbnail ns162:Thumbnail400x400 .
}

ns270:Thumbnail400x400 {
    ns270:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns288:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:71 .

    ns288:CmsImage0 foaf:thumbnail ns270:Thumbnail400x400 .
}

ns98:Thumbnail200x200 {
    ns98:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns198:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:82 .

    ns198:CmsImage1 foaf:thumbnail ns98:Thumbnail200x200 .
}

ns364:Thumbnail800x800 {
    ns364:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns442:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:106 .

    ns442:CmsImage1 foaf:thumbnail ns364:Thumbnail800x800 .
}

ns181:Thumbnail200x200 {
    ns181:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns283:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:5 .

    ns283:CmsImage0 foaf:thumbnail ns181:Thumbnail200x200 .
}

ns158:Thumbnail400x400 {
    ns158:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns151:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:person0 .

    ns151:CmsImage1 foaf:thumbnail ns158:Thumbnail400x400 .
}

ns252:Thumbnail800x800 {
    ns252:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Title image 1 rights holder" ;
        dcterms:title "Title image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns324:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:title .

    ns324:CmsImage1 foaf:thumbnail ns252:Thumbnail800x800 .
}

ns275:Thumbnail600x600 {
    ns275:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns333:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:107 .

    ns333:CmsImage0 foaf:thumbnail ns275:Thumbnail600x600 .
}

ns227:Thumbnail200x200 {
    ns227:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns329:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:freestandingwork10 .

    ns329:CmsImage1 foaf:thumbnail ns227:Thumbnail200x200 .
}

ns379:Thumbnail600x600 {
    ns379:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique image 0 rights holder" ;
        dcterms:title "Technique image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns43:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts vra:technique .

    ns43:CmsImage0 foaf:thumbnail ns379:Thumbnail600x600 .
}

ns19:work4 {
    ns19:work4 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork4 alternative title 0",
            "CmsCollection1CmsWork4 alternative title 1" ;
        dcterms:contributor _:N50fcb8dfcd794839940b193a3dff2f4b,
            _:N563a122fccb140249ed061f7b8779b3e ;
        dcterms:creator ns10:person1,
            ns10:person2 ;
        dcterms:description _:N41d26441f96045c8a6071fca671c6f54 ;
        dcterms:extent ns1:14,
            ns1:15 ;
        dcterms:identifier "CmsCollection1CmsWork4Id0",
            "CmsCollection1CmsWork4Id1" ;
        dcterms:language ns1:24,
            ns1:25 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns1:44,
            ns1:45 ;
        dcterms:provenance "CmsCollection1CmsWork4 provenance 0",
            "CmsCollection1CmsWork4 provenance 1" ;
        dcterms:publisher ns1:54,
            ns1:55 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 rights holder" ;
        dcterms:source ns1:64,
            ns1:65 ;
        dcterms:spatial ns19:work4Location ;
        dcterms:subject ns1:84,
            ns1:85 ;
        dcterms:title "CmsCollection1CmsWork4" ;
        dcterms:type ns1:104,
            ns1:105 ;
        vra:culturalContext ns1:4,
            ns1:5 ;
        vra:material ns1:34,
            ns1:35 ;
        vra:technique ns1:94,
            ns1:95 ;
        cms:collection ns10:collection1 ;
        owl:sameAs wd:Q937690 ;
        foaf:page <http://example.com/work/4> .

    _:N50fcb8dfcd794839940b193a3dff2f4b a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork4 contributor 1" .

    _:N563a122fccb140249ed061f7b8779b3e a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork4 contributor 0" .

    _:N41d26441f96045c8a6071fca671c6f54 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns353:Thumbnail200x200 {
    ns353:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns41:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:97 .

    ns41:CmsImage0 foaf:thumbnail ns353:Thumbnail200x200 .
}

ns126:Thumbnail600x600 {
    ns126:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 0 rights holder" ;
        dcterms:title "Synthetic data properties image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns156:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns438:property_group .

    ns156:CmsImage0 foaf:thumbnail ns126:Thumbnail600x600 .
}

ns441:CmsImage0 {
    ns441:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:63 .
}

ns420:CmsImage0 {
    ns420:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:27 .
}

ns442:CmsImage1 {
    ns442:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:106 .
}

ns427:CmsImage0 {
    ns427:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns237:work2 .
}

ns52:Thumbnail800x800 {
    ns52:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns284:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:41 .

    ns284:CmsImage0 foaf:thumbnail ns52:Thumbnail800x800 .
}

ns385:CmsImage0 {
    ns385:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:0 .
}

ns378:Thumbnail200x200 {
    ns378:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:69 .

    ns365:CmsImage0 foaf:thumbnail ns378:Thumbnail200x200 .
}

ns271:Thumbnail400x400 {
    ns271:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns76:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:60 .

    ns76:CmsImage1 foaf:thumbnail ns271:Thumbnail400x400 .
}

ns292:Thumbnail800x800 {
    ns292:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent image 0 rights holder" ;
        dcterms:title "Extent image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:extent .

    ns392:CmsImage0 foaf:thumbnail ns292:Thumbnail800x800 .
}

ns436:CmsImage0 {
    ns436:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns19:work5 .
}

ns67:Thumbnail800x800 {
    ns67:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns295:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:12 .

    ns295:CmsImage1 foaf:thumbnail ns67:Thumbnail800x800 .
}

ns255:Thumbnail600x600 {
    ns255:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 1 rights holder" ;
        dcterms:title "Synthetic data properties image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns156:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns438:property_group .

    ns156:CmsImage1 foaf:thumbnail ns255:Thumbnail600x600 .
}

ns286:Thumbnail600x600 {
    ns286:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns405:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns237:work1 .

    ns405:CmsImage0 foaf:thumbnail ns286:Thumbnail600x600 .
}

ns376:CmsImage0 {
    ns376:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:76 .
}

ns271:Thumbnail800x800 {
    ns271:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns76:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:60 .

    ns76:CmsImage1 foaf:thumbnail ns271:Thumbnail800x800 .
}

ns218:Thumbnail600x600 {
    ns218:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns443:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:70 .

    ns443:CmsImage0 foaf:thumbnail ns218:Thumbnail600x600 .
}

ns426:Thumbnail600x600 {
    ns426:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns203:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:109 .

    ns203:CmsImage1 foaf:thumbnail ns426:Thumbnail600x600 .
}

ns3:CmsImage1 {
    ns3:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:33 .
}

ns1:23 {
    ns1:23 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 3" ;
        skos:prefLabel "CmsConcept 23" .
}

ns238:Thumbnail400x400 {
    ns238:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns129:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:67 .

    ns129:CmsImage1 foaf:thumbnail ns238:Thumbnail400x400 .
}

ns379:Thumbnail800x800 {
    ns379:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique image 0 rights holder" ;
        dcterms:title "Technique image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns43:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts vra:technique .

    ns43:CmsImage0 foaf:thumbnail ns379:Thumbnail800x800 .
}

ns339:CmsImage0 {
    ns339:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:53 .
}

ns439:CmsImage1 {
    ns439:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:42 .
}

ns95:Thumbnail200x200 {
    ns95:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns441:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:63 .

    ns441:CmsImage1 foaf:thumbnail ns95:Thumbnail200x200 .
}

ns433:Thumbnail400x400 {
    ns433:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns334:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:104 .

    ns334:CmsImage0 foaf:thumbnail ns433:Thumbnail400x400 .
}

ns143:Thumbnail200x200 {
    ns143:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns360:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:62 .

    ns360:CmsImage1 foaf:thumbnail ns143:Thumbnail200x200 .
}

ns113:Thumbnail800x800 {
    ns113:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns46:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns19:work6 .

    ns46:CmsImage0 foaf:thumbnail ns113:Thumbnail800x800 .
}

ns85:Thumbnail200x200 {
    ns85:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns431:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:freestandingwork9 .

    ns431:CmsImage1 foaf:thumbnail ns85:Thumbnail200x200 .
}

ns177:Thumbnail800x800 {
    ns177:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type image 0 rights holder" ;
        dcterms:title "Type image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns350:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:type .

    ns350:CmsImage0 foaf:thumbnail ns177:Thumbnail800x800 .
}

ns31:Thumbnail400x400 {
    ns31:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns288:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:71 .

    ns288:CmsImage1 foaf:thumbnail ns31:Thumbnail400x400 .
}

ns388:Thumbnail400x400 {
    ns388:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns395:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:61 .

    ns395:CmsImage1 foaf:thumbnail ns388:Thumbnail400x400 .
}

ns328:CmsImage0 {
    ns328:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:2 .
}

ns74:CmsImage1 {
    ns74:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:92 .
}

ns424:Thumbnail200x200 {
    ns424:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns444:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:59 .

    ns444:CmsImage0 foaf:thumbnail ns424:Thumbnail200x200 .
}

ns195:CmsImage1 {
    ns195:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:person4 .
}

ns371:Thumbnail800x800 {
    ns371:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns335:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:54 .

    ns335:CmsImage1 foaf:thumbnail ns371:Thumbnail800x800 .
}

ns391:CmsImage0 {
    ns391:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:21 .
}

ns309:Thumbnail200x200 {
    ns309:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns318:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:44 .

    ns318:CmsImage1 foaf:thumbnail ns309:Thumbnail200x200 .
}

ns394:Thumbnail600x600 {
    ns394:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns254:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:10 .

    ns254:CmsImage1 foaf:thumbnail ns394:Thumbnail600x600 .
}

ns1:72 {
    ns1:72 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 2" ;
        skos:prefLabel "CmsConcept 72" .
}

ns441:CmsImage1 {
    ns441:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:63 .
}

ns11:Thumbnail800x800 {
    ns11:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Description image 0 rights holder" ;
        dcterms:title "Description image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns140:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:description .

    ns140:CmsImage0 foaf:thumbnail ns11:Thumbnail800x800 .
}

ns378:Thumbnail800x800 {
    ns378:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:69 .

    ns365:CmsImage0 foaf:thumbnail ns378:Thumbnail800x800 .
}

ns1:33 {
    ns1:33 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 3" ;
        skos:prefLabel "CmsConcept 33" .
}

ns6:Thumbnail800x800 {
    ns6:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns389:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:100 .

    ns389:CmsImage0 foaf:thumbnail ns6:Thumbnail800x800 .
}

ns141:Thumbnail400x400 {
    ns141:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns429:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:4 .

    ns429:CmsImage0 foaf:thumbnail ns141:Thumbnail400x400 .
}

ns443:CmsImage0 {
    ns443:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:70 .
}

ns422:Thumbnail800x800 {
    ns422:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject image 1 rights holder" ;
        dcterms:title "Subject image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns430:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:subject .

    ns430:CmsImage1 foaf:thumbnail ns422:Thumbnail800x800 .
}

ns25:Thumbnail400x400 {
    ns25:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns320:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns237:work3 .

    ns320:CmsImage1 foaf:thumbnail ns25:Thumbnail400x400 .
}

ns173:Thumbnail800x800 {
    ns173:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns311:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:freestandingwork8 .

    ns311:CmsImage0 foaf:thumbnail ns173:Thumbnail800x800 .
}

ns372:Thumbnail400x400 {
    ns372:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns358:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns237:work0 .

    ns358:CmsImage1 foaf:thumbnail ns372:Thumbnail400x400 .
}

ns109:Thumbnail800x800 {
    ns109:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns315:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:102 .

    ns315:CmsImage0 foaf:thumbnail ns109:Thumbnail800x800 .
}

ns419:Thumbnail800x800 {
    ns419:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns429:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:4 .

    ns429:CmsImage1 foaf:thumbnail ns419:Thumbnail800x800 .
}

ns255:Thumbnail400x400 {
    ns255:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 1 rights holder" ;
        dcterms:title "Synthetic data properties image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns156:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns438:property_group .

    ns156:CmsImage1 foaf:thumbnail ns255:Thumbnail400x400 .
}

ns342:Thumbnail200x200 {
    ns342:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns446:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:9 .

    ns446:CmsImage0 foaf:thumbnail ns342:Thumbnail200x200 .
}

ns421:Thumbnail800x800 {
    ns421:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns318:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:44 .

    ns318:CmsImage0 foaf:thumbnail ns421:Thumbnail800x800 .
}

ns65:Thumbnail600x600 {
    ns65:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns220:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:103 .

    ns220:CmsImage1 foaf:thumbnail ns65:Thumbnail600x600 .
}

vra:material {
    vra:material a cms:Property ;
        rdfs:label "Material" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns438:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> .
}

ns310:Thumbnail200x200 {
    ns310:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns347:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:77 .

    ns347:CmsImage1 foaf:thumbnail ns310:Thumbnail200x200 .
}

ns278:Thumbnail600x600 {
    ns278:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns188:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:56 .

    ns188:CmsImage0 foaf:thumbnail ns278:Thumbnail600x600 .
}

ns338:Thumbnail200x200 {
    ns338:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns295:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:12 .

    ns295:CmsImage0 foaf:thumbnail ns338:Thumbnail200x200 .
}

ns203:CmsImage0 {
    ns203:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:109 .
}

ns353:Thumbnail800x800 {
    ns353:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns41:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:97 .

    ns41:CmsImage0 foaf:thumbnail ns353:Thumbnail800x800 .
}

ns53:Thumbnail200x200 {
    ns53:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:0 .

    ns385:CmsImage1 foaf:thumbnail ns53:Thumbnail200x200 .
}

ns1:12 {
    ns1:12 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 2" ;
        skos:prefLabel "CmsConcept 12" .
}

ns397:CmsImage1 {
    ns397:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:3 .
}

ns413:Thumbnail800x800 {
    ns413:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns336:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:81 .

    ns336:CmsImage1 foaf:thumbnail ns413:Thumbnail800x800 .
}

ns368:Thumbnail800x800 {
    ns368:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns398:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:89 .

    ns398:CmsImage0 foaf:thumbnail ns368:Thumbnail800x800 .
}

ns58:Thumbnail200x200 {
    ns58:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns356:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:26 .

    ns356:CmsImage1 foaf:thumbnail ns58:Thumbnail200x200 .
}

ns39:Thumbnail600x600 {
    ns39:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:17 .

    ns403:CmsImage1 foaf:thumbnail ns39:Thumbnail600x600 .
}

ns216:Thumbnail600x600 {
    ns216:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns184:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:34 .

    ns184:CmsImage0 foaf:thumbnail ns216:Thumbnail600x600 .
}

ns306:CmsImage1 {
    ns306:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:person2 .
}

ns173:Thumbnail600x600 {
    ns173:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns311:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:freestandingwork8 .

    ns311:CmsImage0 foaf:thumbnail ns173:Thumbnail600x600 .
}

ns199:Thumbnail400x400 {
    ns199:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns184:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:34 .

    ns184:CmsImage1 foaf:thumbnail ns199:Thumbnail400x400 .
}

ns401:Thumbnail800x800 {
    ns401:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns366:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:48 .

    ns366:CmsImage1 foaf:thumbnail ns401:Thumbnail800x800 .
}

ns270:Thumbnail800x800 {
    ns270:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns288:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:71 .

    ns288:CmsImage0 foaf:thumbnail ns270:Thumbnail800x800 .
}

ns268:Thumbnail200x200 {
    ns268:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:84 .

    ns399:CmsImage1 foaf:thumbnail ns268:Thumbnail200x200 .
}

ns298:Thumbnail600x600 {
    ns298:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns376:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:76 .

    ns376:CmsImage1 foaf:thumbnail ns298:Thumbnail600x600 .
}

ns433:Thumbnail600x600 {
    ns433:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns334:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:104 .

    ns334:CmsImage0 foaf:thumbnail ns433:Thumbnail600x600 .
}

ns261:Thumbnail400x400 {
    ns261:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns386:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:28 .

    ns386:CmsImage1 foaf:thumbnail ns261:Thumbnail400x400 .
}

ns80:Thumbnail600x600 {
    ns80:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns377:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:46 .

    ns377:CmsImage1 foaf:thumbnail ns80:Thumbnail600x600 .
}

ns12:Thumbnail200x200 {
    ns12:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns313:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:32 .

    ns313:CmsImage0 foaf:thumbnail ns12:Thumbnail200x200 .
}

ns302:Thumbnail400x400 {
    ns302:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns428:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:83 .

    ns428:CmsImage0 foaf:thumbnail ns302:Thumbnail400x400 .
}

ns405:CmsImage1 {
    ns405:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns237:work1 .
}

ns212:Thumbnail800x800 {
    ns212:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns294:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:99 .

    ns294:CmsImage1 foaf:thumbnail ns212:Thumbnail800x800 .
}

ns206:Thumbnail200x200 {
    ns206:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns245:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:7 .

    ns245:CmsImage0 foaf:thumbnail ns206:Thumbnail200x200 .
}

ns444:CmsImage0 {
    ns444:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:59 .
}

ns1:86 {
    ns1:86 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 6" ;
        skos:prefLabel "CmsConcept 86" .
}

ns10:freestandingwork8Location {
    ns10:freestandingwork8Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns21:Thumbnail600x600 {
    ns21:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns405:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns237:work1 .

    ns405:CmsImage1 foaf:thumbnail ns21:Thumbnail600x600 .
}

ns25:Thumbnail200x200 {
    ns25:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns320:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns237:work3 .

    ns320:CmsImage1 foaf:thumbnail ns25:Thumbnail200x200 .
}

ns240:Thumbnail800x800 {
    ns240:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns294:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:99 .

    ns294:CmsImage0 foaf:thumbnail ns240:Thumbnail800x800 .
}

ns200:Thumbnail800x800 {
    ns200:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns254:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:10 .

    ns254:CmsImage0 foaf:thumbnail ns200:Thumbnail800x800 .
}

ns401:Thumbnail600x600 {
    ns401:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns366:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:48 .

    ns366:CmsImage1 foaf:thumbnail ns401:Thumbnail600x600 .
}

ns96:Thumbnail200x200 {
    ns96:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns229:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:66 .

    ns229:CmsImage0 foaf:thumbnail ns96:Thumbnail200x200 .
}

ns304:Thumbnail800x800 {
    ns304:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns89:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:36 .

    ns89:CmsImage1 foaf:thumbnail ns304:Thumbnail800x800 .
}

ns187:Thumbnail800x800 {
    ns187:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns423:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:68 .

    ns423:CmsImage0 foaf:thumbnail ns187:Thumbnail800x800 .
}

ns227:Thumbnail800x800 {
    ns227:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns329:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:freestandingwork10 .

    ns329:CmsImage1 foaf:thumbnail ns227:Thumbnail800x800 .
}

ns14:Thumbnail400x400 {
    ns14:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns380:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:64 .

    ns380:CmsImage1 foaf:thumbnail ns14:Thumbnail400x400 .
}

ns141:Thumbnail600x600 {
    ns141:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns429:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:4 .

    ns429:CmsImage0 foaf:thumbnail ns141:Thumbnail600x600 .
}

ns82:Thumbnail200x200 {
    ns82:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns376:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:76 .

    ns376:CmsImage0 foaf:thumbnail ns82:Thumbnail200x200 .
}

ns380:CmsImage1 {
    ns380:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:64 .
}

ns437:CmsImage1 {
    ns437:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:91 .
}

ns116:Thumbnail400x400 {
    ns116:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns335:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:54 .

    ns335:CmsImage0 foaf:thumbnail ns116:Thumbnail400x400 .
}

ns410:Thumbnail600x600 {
    ns410:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material image 1 rights holder" ;
        dcterms:title "Material image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns222:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts vra:material .

    ns222:CmsImage1 foaf:thumbnail ns410:Thumbnail600x600 .
}

ns1:94 {
    ns1:94 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 4" ;
        skos:prefLabel "CmsConcept 94" .
}

ns260:Thumbnail200x200 {
    ns260:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns404:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:25 .

    ns404:CmsImage0 foaf:thumbnail ns260:Thumbnail200x200 .
}

ns62:Thumbnail800x800 {
    ns62:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:84 .

    ns399:CmsImage0 foaf:thumbnail ns62:Thumbnail800x800 .
}

ns48:Thumbnail200x200 {
    ns48:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns233:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:22 .

    ns233:CmsImage0 foaf:thumbnail ns48:Thumbnail200x200 .
}

ns445:CmsImage1 {
    ns445:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:30 .
}

ns356:CmsImage0 {
    ns356:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:26 .
}

ns379:Thumbnail400x400 {
    ns379:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique image 0 rights holder" ;
        dcterms:title "Technique image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns43:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts vra:technique .

    ns43:CmsImage0 foaf:thumbnail ns379:Thumbnail400x400 .
}

ns315:CmsImage1 {
    ns315:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:102 .
}

ns184:CmsImage0 {
    ns184:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:34 .
}

ns137:Thumbnail800x800 {
    ns137:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns434:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:14 .

    ns434:CmsImage1 foaf:thumbnail ns137:Thumbnail800x800 .
}

ns1:25 {
    ns1:25 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 5" ;
        skos:prefLabel "CmsConcept 25" .
}

ns253:Thumbnail800x800 {
    ns253:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns195:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:person4 .

    ns195:CmsImage0 foaf:thumbnail ns253:Thumbnail800x800 .
}

ns223:Thumbnail400x400 {
    ns223:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns391:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:21 .

    ns391:CmsImage0 foaf:thumbnail ns223:Thumbnail400x400 .
}

ns209:Thumbnail200x200 {
    ns209:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns307:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:collection1 .

    ns307:CmsImage0 foaf:thumbnail ns209:Thumbnail200x200 .
}

ns134:Thumbnail200x200 {
    ns134:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns203:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:109 .

    ns203:CmsImage0 foaf:thumbnail ns134:Thumbnail200x200 .
}

ns430:CmsImage0 {
    ns430:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject image 0 rights holder" ;
        dcterms:title "Subject image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:subject .
}

ns196:Thumbnail200x200 {
    ns196:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium image 0 rights holder" ;
        dcterms:title "Medium image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns146:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:medium .

    ns146:CmsImage0 foaf:thumbnail ns196:Thumbnail200x200 .
}

ns59:Thumbnail800x800 {
    ns59:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns356:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:26 .

    ns356:CmsImage0 foaf:thumbnail ns59:Thumbnail800x800 .
}

ns250:CmsImage1 {
    ns250:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:101 .
}

ns101:Thumbnail400x400 {
    ns101:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns129:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:67 .

    ns129:CmsImage0 foaf:thumbnail ns101:Thumbnail400x400 .
}

ns442:CmsImage0 {
    ns442:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:106 .
}

ns1:40 {
    ns1:40 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 0" ;
        skos:prefLabel "CmsConcept 40" .
}

ns84:Thumbnail400x400 {
    ns84:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns442:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:106 .

    ns442:CmsImage0 foaf:thumbnail ns84:Thumbnail400x400 .
}

ns1:69 {
    ns1:69 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 9" ;
        skos:prefLabel "CmsConcept 69" .
}

ns133:Thumbnail800x800 {
    ns133:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns397:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:3 .

    ns397:CmsImage1 foaf:thumbnail ns133:Thumbnail800x800 .
}

ns163:Thumbnail600x600 {
    ns163:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns440:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:73 .

    ns440:CmsImage0 foaf:thumbnail ns163:Thumbnail600x600 .
}

ns363:Thumbnail600x600 {
    ns363:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns328:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:2 .

    ns328:CmsImage0 foaf:thumbnail ns363:Thumbnail600x600 .
}

ns73:Thumbnail800x800 {
    ns73:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns300:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:24 .

    ns300:CmsImage1 foaf:thumbnail ns73:Thumbnail800x800 .
}

ns446:CmsImage0 {
    ns446:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:9 .
}

ns121:Thumbnail200x200 {
    ns121:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns300:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:24 .

    ns300:CmsImage0 foaf:thumbnail ns121:Thumbnail200x200 .
}

ns431:CmsImage1 {
    ns431:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:freestandingwork9 .
}

ns446:CmsImage1 {
    ns446:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:9 .
}

ns290:Thumbnail400x400 {
    ns290:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent image 1 rights holder" ;
        dcterms:title "Extent image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:extent .

    ns392:CmsImage1 foaf:thumbnail ns290:Thumbnail400x400 .
}

ns293:CmsImage0 {
    ns293:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:90 .
}

ns243:Thumbnail600x600 {
    ns243:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns188:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:56 .

    ns188:CmsImage1 foaf:thumbnail ns243:Thumbnail600x600 .
}

ns244:Thumbnail200x200 {
    ns244:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns374:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:95 .

    ns374:CmsImage0 foaf:thumbnail ns244:Thumbnail200x200 .
}

ns358:CmsImage1 {
    ns358:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns237:work0 .
}

ns2:Thumbnail400x400 {
    ns2:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns343:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:98 .

    ns343:CmsImage0 foaf:thumbnail ns2:Thumbnail400x400 .
}

ns403:CmsImage0 {
    ns403:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:17 .
}

ns258:CmsImage1 {
    ns258:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns10:freestandingwork11 .
}

ns160:Thumbnail200x200 {
    ns160:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns319:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:11 .

    ns319:CmsImage0 foaf:thumbnail ns160:Thumbnail200x200 .
}

ns399:CmsImage1 {
    ns399:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:84 .
}

ns415:Thumbnail600x600 {
    ns415:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns74:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:92 .

    ns74:CmsImage1 foaf:thumbnail ns415:Thumbnail600x600 .
}

ns357:Thumbnail200x200 {
    ns357:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns15:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:16 .

    ns15:CmsImage1 foaf:thumbnail ns357:Thumbnail200x200 .
}

ns366:CmsImage1 {
    ns366:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:48 .
}

ns112:Thumbnail800x800 {
    ns112:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns437:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:91 .

    ns437:CmsImage1 foaf:thumbnail ns112:Thumbnail800x800 .
}

ns375:Thumbnail600x600 {
    ns375:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns197:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns10:organization3 .

    ns197:CmsImage1 foaf:thumbnail ns375:Thumbnail600x600 .
}

ns269:Thumbnail600x600 {
    ns269:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns383:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:79 .

    ns383:CmsImage1 foaf:thumbnail ns269:Thumbnail600x600 .
}

ns122:Thumbnail600x600 {
    ns122:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns9:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:20 .

    ns9:CmsImage0 foaf:thumbnail ns122:Thumbnail600x600 .
}

ns445:CmsImage0 {
    ns445:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:30 .
}

ns404:CmsImage1 {
    ns404:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:25 .
}

ns444:CmsImage1 {
    ns444:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:59 .
}

ns382:Thumbnail800x800 {
    ns382:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns180:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:organization2 .

    ns180:CmsImage0 foaf:thumbnail ns382:Thumbnail800x800 .
}

ns90:Thumbnail800x800 {
    ns90:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns425:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:1 .

    ns425:CmsImage0 foaf:thumbnail ns90:Thumbnail800x800 .
}

ns79:Thumbnail600x600 {
    ns79:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns233:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:22 .

    ns233:CmsImage1 foaf:thumbnail ns79:Thumbnail600x600 .
}

ns237:work1Location {
    ns237:work1Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

dcterms:source {
    dcterms:source a cms:Property ;
        rdfs:label "Source" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns438:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> .
}

ns88:Thumbnail400x400 {
    ns88:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns46:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns19:work6 .

    ns46:CmsImage1 foaf:thumbnail ns88:Thumbnail400x400 .
}

ns165:Thumbnail600x600 {
    ns165:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns427:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns237:work2 .

    ns427:CmsImage1 foaf:thumbnail ns165:Thumbnail600x600 .
}

ns418:Thumbnail400x400 {
    ns418:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns349:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:72 .

    ns349:CmsImage0 foaf:thumbnail ns418:Thumbnail400x400 .
}

ns1:90 {
    ns1:90 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 0" ;
        skos:prefLabel "CmsConcept 90" .
}

ns429:CmsImage1 {
    ns429:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:4 .
}

ns277:Thumbnail200x200 {
    ns277:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns284:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:41 .

    ns284:CmsImage1 foaf:thumbnail ns277:Thumbnail200x200 .
}

ns175:Thumbnail600x600 {
    ns175:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns296:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:50 .

    ns296:CmsImage1 foaf:thumbnail ns175:Thumbnail600x600 .
}

ns355:CmsImage0 {
    ns355:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:45 .
}

ns204:Thumbnail600x600 {
    ns204:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns339:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:53 .

    ns339:CmsImage1 foaf:thumbnail ns204:Thumbnail600x600 .
}

ns323:Thumbnail600x600 {
    ns323:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns411:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:88 .

    ns411:CmsImage1 foaf:thumbnail ns323:Thumbnail600x600 .
}

ns443:CmsImage1 {
    ns443:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:70 .
}

ns25:Thumbnail800x800 {
    ns25:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns320:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns237:work3 .

    ns320:CmsImage1 foaf:thumbnail ns25:Thumbnail800x800 .
}

ns421:Thumbnail200x200 {
    ns421:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns318:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:44 .

    ns318:CmsImage0 foaf:thumbnail ns421:Thumbnail200x200 .
}

ns325:Thumbnail200x200 {
    ns325:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns369:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:87 .

    ns369:CmsImage0 foaf:thumbnail ns325:Thumbnail200x200 .
}

ns204:Thumbnail800x800 {
    ns204:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns339:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:53 .

    ns339:CmsImage1 foaf:thumbnail ns204:Thumbnail800x800 .
}

ns377:CmsImage1 {
    ns377:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:46 .
}

ns7:Thumbnail400x400 {
    ns7:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns198:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:82 .

    ns198:CmsImage0 foaf:thumbnail ns7:Thumbnail400x400 .
}

ns204:Thumbnail400x400 {
    ns204:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns339:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:53 .

    ns339:CmsImage1 foaf:thumbnail ns204:Thumbnail400x400 .
}

ns213:Thumbnail600x600 {
    ns213:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns214:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:52 .

    ns214:CmsImage0 foaf:thumbnail ns213:Thumbnail600x600 .
}

ns1:27 {
    ns1:27 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 7" ;
        skos:prefLabel "CmsConcept 27" .
}

ns279:Thumbnail400x400 {
    ns279:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns409:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:19 .

    ns409:CmsImage0 foaf:thumbnail ns279:Thumbnail400x400 .
}

ns200:Thumbnail600x600 {
    ns200:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns254:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:10 .

    ns254:CmsImage0 foaf:thumbnail ns200:Thumbnail600x600 .
}

ns109:Thumbnail600x600 {
    ns109:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns315:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:102 .

    ns315:CmsImage0 foaf:thumbnail ns109:Thumbnail600x600 .
}

ns96:Thumbnail600x600 {
    ns96:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns229:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:66 .

    ns229:CmsImage0 foaf:thumbnail ns96:Thumbnail600x600 .
}

ns359:Thumbnail400x400 {
    ns359:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns74:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:92 .

    ns74:CmsImage0 foaf:thumbnail ns359:Thumbnail400x400 .
}

ns340:Thumbnail200x200 {
    ns340:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns427:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns237:work2 .

    ns427:CmsImage0 foaf:thumbnail ns340:Thumbnail200x200 .
}

ns323:Thumbnail200x200 {
    ns323:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns411:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:88 .

    ns411:CmsImage1 foaf:thumbnail ns323:Thumbnail200x200 .
}

ns432:CmsImage1 {
    ns432:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context image 1 rights holder" ;
        dcterms:title "Cultural context image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts vra:culturalContext .
}

ns81:Thumbnail600x600 {
    ns81:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:17 .

    ns403:CmsImage0 foaf:thumbnail ns81:Thumbnail600x600 .
}

ns121:Thumbnail800x800 {
    ns121:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns300:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:24 .

    ns300:CmsImage0 foaf:thumbnail ns121:Thumbnail800x800 .
}

ns94:Thumbnail800x800 {
    ns94:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns336:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:81 .

    ns336:CmsImage0 foaf:thumbnail ns94:Thumbnail800x800 .
}

ns433:Thumbnail800x800 {
    ns433:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns334:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:104 .

    ns334:CmsImage0 foaf:thumbnail ns433:Thumbnail800x800 .
}

ns237:work3Opening {
    ns237:work3Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-29"^^xsd:date ;
        dcterms:spatial _:Ndc336b4aa3c44a319624566d26a0105c ;
        dcterms:title "CmsCollection0CmsWork3 opening" ;
        cms:work ns237:work3 .

    _:Ndc336b4aa3c44a319624566d26a0105c a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns189:Thumbnail800x800 {
    ns189:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns9:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:20 .

    ns9:CmsImage1 foaf:thumbnail ns189:Thumbnail800x800 .
}

ns125:Thumbnail200x200 {
    ns125:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns428:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:83 .

    ns428:CmsImage1 foaf:thumbnail ns125:Thumbnail200x200 .
}

ns10:organization2 {
    ns10:organization2 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 2" ;
        foaf:page ns10:organization2page .
}

ns28:Thumbnail800x800 {
    ns28:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns333:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:107 .

    ns333:CmsImage1 foaf:thumbnail ns28:Thumbnail800x800 .
}

ns192:Thumbnail800x800 {
    ns192:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns174:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns10:organization0 .

    ns174:CmsImage1 foaf:thumbnail ns192:Thumbnail800x800 .
}

ns145:Thumbnail200x200 {
    ns145:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns389:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:100 .

    ns389:CmsImage1 foaf:thumbnail ns145:Thumbnail200x200 .
}

ns8:Thumbnail600x600 {
    ns8:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns414:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns19:work4 .

    ns414:CmsImage0 foaf:thumbnail ns8:Thumbnail600x600 .
}

ns71:CmsImage0 {
    ns71:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:96 .
}

ns62:Thumbnail400x400 {
    ns62:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:84 .

    ns399:CmsImage0 foaf:thumbnail ns62:Thumbnail400x400 .
}

ns417:Thumbnail800x800 {
    ns417:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns179:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:43 .

    ns179:CmsImage1 foaf:thumbnail ns417:Thumbnail800x800 .
}

ns338:Thumbnail600x600 {
    ns338:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns295:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:12 .

    ns295:CmsImage0 foaf:thumbnail ns338:Thumbnail600x600 .
}

ns318:CmsImage1 {
    ns318:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:44 .
}

ns127:Thumbnail600x600 {
    ns127:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns76:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:60 .

    ns76:CmsImage0 foaf:thumbnail ns127:Thumbnail600x600 .
}

ns375:Thumbnail200x200 {
    ns375:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns197:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns10:organization3 .

    ns197:CmsImage1 foaf:thumbnail ns375:Thumbnail200x200 .
}

ns1:5 {
    ns1:5 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 5" ;
        skos:prefLabel "CmsConcept 5" .
}

ns348:Thumbnail400x400 {
    ns348:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns258:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns10:freestandingwork11 .

    ns258:CmsImage0 foaf:thumbnail ns348:Thumbnail400x400 .
}

ns361:Thumbnail400x400 {
    ns361:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns408:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:47 .

    ns408:CmsImage1 foaf:thumbnail ns361:Thumbnail400x400 .
}

ns354:CmsImage1 {
    ns354:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:85 .
}

ns340:Thumbnail800x800 {
    ns340:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns427:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns237:work2 .

    ns427:CmsImage0 foaf:thumbnail ns340:Thumbnail800x800 .
}

ns223:Thumbnail800x800 {
    ns223:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns391:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:21 .

    ns391:CmsImage0 foaf:thumbnail ns223:Thumbnail800x800 .
}

ns10:freestandingwork10Location {
    ns10:freestandingwork10Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns1:58 {
    ns1:58 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 8" ;
        skos:prefLabel "CmsConcept 58" .
}
`);
