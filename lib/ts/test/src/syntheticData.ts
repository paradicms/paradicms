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
@prefix ns1: <http://example.com/> .
@prefix ns10: <http://purl.org/dc/terms/extent:> .
@prefix ns100: <http://purl.org/dc/terms/medium:CmsImage1:> .
@prefix ns101: <urn:paradicms_etl:pipeline:synthetic_data:concept:103:CmsImage0:> .
@prefix ns102: <urn:paradicms_etl:pipeline:synthetic_data:concept:104:CmsImage1:> .
@prefix ns103: <urn:paradicms_etl:pipeline:synthetic_data:concept:76:> .
@prefix ns104: <http://example.com/freestandingwork10:CmsImage0:> .
@prefix ns105: <urn:paradicms_etl:pipeline:synthetic_data:concept:31:CmsImage1:> .
@prefix ns106: <urn:paradicms_etl:pipeline:synthetic_data:concept:3:CmsImage0:> .
@prefix ns107: <urn:paradicms_etl:pipeline:synthetic_data:concept:82:CmsImage1:> .
@prefix ns108: <urn:paradicms_etl:pipeline:synthetic_data:concept:48:CmsImage0:> .
@prefix ns109: <urn:paradicms_etl:pipeline:synthetic_data:concept:88:CmsImage1:> .
@prefix ns11: <urn:paradicms_etl:pipeline:synthetic_data:concept:96:> .
@prefix ns110: <urn:paradicms_etl:pipeline:synthetic_data:concept:63:> .
@prefix ns111: <urn:paradicms_etl:pipeline:synthetic_data:concept:26:CmsImage1:> .
@prefix ns112: <urn:paradicms_etl:pipeline:synthetic_data:concept:73:> .
@prefix ns113: <urn:paradicms_etl:pipeline:synthetic_data:concept:108:> .
@prefix ns114: <urn:paradicms_etl:pipeline:synthetic_data:concept:6:CmsImage0:> .
@prefix ns115: <urn:paradicms_etl:pipeline:synthetic_data:concept:6:CmsImage1:> .
@prefix ns116: <http://example.com/collection1/> .
@prefix ns117: <urn:paradicms_etl:pipeline:synthetic_data:concept:84:> .
@prefix ns118: <http://purl.org/dc/terms/source:> .
@prefix ns119: <http://example.com/person4:> .
@prefix ns12: <urn:paradicms_etl:pipeline:synthetic_data:concept:67:> .
@prefix ns120: <urn:paradicms_etl:pipeline:synthetic_data:property_group:> .
@prefix ns121: <urn:paradicms_etl:pipeline:synthetic_data:concept:29:CmsImage0:> .
@prefix ns122: <urn:paradicms_etl:pipeline:synthetic_data:concept:109:CmsImage0:> .
@prefix ns123: <urn:paradicms_etl:pipeline:synthetic_data:concept:87:> .
@prefix ns124: <urn:paradicms_etl:pipeline:synthetic_data:concept:37:> .
@prefix ns125: <http://purl.org/dc/terms/medium:> .
@prefix ns126: <urn:paradicms_etl:pipeline:synthetic_data:concept:93:> .
@prefix ns127: <urn:paradicms_etl:pipeline:synthetic_data:concept:94:CmsImage0:> .
@prefix ns128: <urn:paradicms_etl:pipeline:synthetic_data:concept:90:> .
@prefix ns129: <urn:paradicms_etl:pipeline:synthetic_data:concept:91:> .
@prefix ns13: <urn:paradicms_etl:pipeline:synthetic_data:concept:73:CmsImage1:> .
@prefix ns130: <urn:paradicms_etl:pipeline:synthetic_data:concept:65:CmsImage0:> .
@prefix ns131: <http://example.com/collection0/> .
@prefix ns132: <http://example.com/person1:CmsImage1:> .
@prefix ns133: <urn:paradicms_etl:pipeline:synthetic_data:concept:17:CmsImage0:> .
@prefix ns134: <urn:paradicms_etl:pipeline:synthetic_data:concept:69:CmsImage1:> .
@prefix ns135: <urn:paradicms_etl:pipeline:synthetic_data:concept:7:CmsImage0:> .
@prefix ns136: <http://example.com/collection0/work0:CmsImage0:> .
@prefix ns137: <urn:paradicms_etl:pipeline:synthetic_data:concept:46:CmsImage1:> .
@prefix ns138: <urn:paradicms_etl:pipeline:synthetic_data:concept:72:> .
@prefix ns139: <urn:paradicms_etl:pipeline:synthetic_data:concept:24:CmsImage0:> .
@prefix ns14: <urn:paradicms_etl:pipeline:synthetic_data:concept:34:> .
@prefix ns140: <urn:paradicms_etl:pipeline:synthetic_data:concept:46:CmsImage0:> .
@prefix ns141: <urn:paradicms_etl:pipeline:synthetic_data:concept:15:CmsImage0:> .
@prefix ns142: <http://purl.org/dc/terms/subject:CmsImage0:> .
@prefix ns143: <urn:paradicms_etl:pipeline:synthetic_data:concept:106:CmsImage1:> .
@prefix ns144: <http://example.com/organization2:CmsImage1:> .
@prefix ns145: <urn:paradicms_etl:pipeline:synthetic_data:concept:85:> .
@prefix ns146: <urn:paradicms_etl:pipeline:synthetic_data:concept:49:CmsImage0:> .
@prefix ns147: <urn:paradicms_etl:pipeline:synthetic_data:concept:48:CmsImage1:> .
@prefix ns148: <http://example.com/freestandingwork11:CmsImage1:> .
@prefix ns149: <urn:paradicms_etl:pipeline:synthetic_data:concept:100:CmsImage1:> .
@prefix ns15: <urn:paradicms_etl:pipeline:synthetic_data:concept:51:CmsImage0:> .
@prefix ns150: <urn:paradicms_etl:pipeline:synthetic_data:concept:4:> .
@prefix ns151: <urn:paradicms_etl:pipeline:synthetic_data:concept:80:CmsImage0:> .
@prefix ns152: <urn:paradicms_etl:pipeline:synthetic_data:concept:100:CmsImage0:> .
@prefix ns153: <urn:paradicms_etl:pipeline:synthetic_data:concept:33:CmsImage1:> .
@prefix ns154: <urn:paradicms_etl:pipeline:synthetic_data:concept:47:CmsImage0:> .
@prefix ns155: <http://example.com/organization4:CmsImage0:> .
@prefix ns156: <urn:paradicms_etl:pipeline:synthetic_data:concept:10:CmsImage0:> .
@prefix ns157: <http://example.com/freestandingwork9:CmsImage0:> .
@prefix ns158: <urn:paradicms_etl:pipeline:synthetic_data:concept:70:CmsImage0:> .
@prefix ns159: <urn:paradicms_etl:pipeline:synthetic_data:concept:103:CmsImage1:> .
@prefix ns16: <urn:paradicms_etl:pipeline:synthetic_data:concept:81:CmsImage1:> .
@prefix ns160: <urn:paradicms_etl:pipeline:synthetic_data:concept:91:CmsImage0:> .
@prefix ns161: <urn:paradicms_etl:pipeline:synthetic_data:concept:39:CmsImage0:> .
@prefix ns162: <http://example.com/collection1/work7:CmsImage0:> .
@prefix ns163: <urn:paradicms_etl:pipeline:synthetic_data:concept:78:CmsImage0:> .
@prefix ns164: <urn:paradicms_etl:pipeline:synthetic_data:concept:54:> .
@prefix ns165: <http://example.com/collection1:> .
@prefix ns166: <urn:paradicms_etl:pipeline:synthetic_data:concept:22:CmsImage1:> .
@prefix ns167: <http://example.com/freestandingwork11:CmsImage0:> .
@prefix ns168: <urn:paradicms_etl:pipeline:synthetic_data:concept:56:CmsImage0:> .
@prefix ns169: <urn:paradicms_etl:pipeline:synthetic_data:concept:83:CmsImage0:> .
@prefix ns17: <urn:paradicms_etl:pipeline:synthetic_data:concept:97:CmsImage0:> .
@prefix ns170: <urn:paradicms_etl:pipeline:synthetic_data:concept:68:CmsImage1:> .
@prefix ns171: <urn:paradicms_etl:pipeline:synthetic_data:concept:18:CmsImage0:> .
@prefix ns172: <urn:paradicms_etl:pipeline:synthetic_data:concept:88:> .
@prefix ns173: <http://example.com/organization3:CmsImage1:> .
@prefix ns174: <urn:paradicms_etl:pipeline:synthetic_data:concept:40:> .
@prefix ns175: <urn:paradicms_etl:pipeline:synthetic_data:concept:38:> .
@prefix ns176: <urn:paradicms_etl:pipeline:synthetic_data:concept:23:CmsImage1:> .
@prefix ns177: <urn:paradicms_etl:pipeline:synthetic_data:concept:74:CmsImage0:> .
@prefix ns178: <urn:paradicms_etl:pipeline:synthetic_data:concept:12:CmsImage0:> .
@prefix ns179: <urn:paradicms_etl:pipeline:synthetic_data:concept:51:CmsImage1:> .
@prefix ns18: <http://example.com/collection1/work5:CmsImage0:> .
@prefix ns180: <urn:paradicms_etl:pipeline:synthetic_data:concept:27:CmsImage0:> .
@prefix ns181: <urn:paradicms_etl:pipeline:synthetic_data:concept:86:CmsImage1:> .
@prefix ns182: <urn:paradicms_etl:pipeline:synthetic_data:concept:19:> .
@prefix ns183: <urn:paradicms_etl:pipeline:synthetic_data:concept:57:> .
@prefix ns184: <http://purl.org/vra/culturalContext:CmsImage0:> .
@prefix ns185: <urn:paradicms_etl:pipeline:synthetic_data:concept:50:CmsImage0:> .
@prefix ns186: <http://example.com/organization1:CmsImage1:> .
@prefix ns187: <urn:paradicms_etl:pipeline:synthetic_data:concept:54:CmsImage0:> .
@prefix ns188: <urn:paradicms_etl:pipeline:synthetic_data:concept:45:CmsImage0:> .
@prefix ns189: <urn:paradicms_etl:pipeline:synthetic_data:concept:0:CmsImage1:> .
@prefix ns19: <urn:paradicms_etl:pipeline:synthetic_data:concept:102:> .
@prefix ns190: <http://example.com/collection1/work6:CmsImage1:> .
@prefix ns191: <http://purl.org/vra/culturalContext:CmsImage1:> .
@prefix ns192: <http://purl.org/dc/terms/description:CmsImage1:> .
@prefix ns193: <urn:paradicms_etl:pipeline:synthetic_data:concept:92:CmsImage0:> .
@prefix ns194: <urn:paradicms_etl:pipeline:synthetic_data:concept:22:> .
@prefix ns195: <urn:paradicms_etl:pipeline:synthetic_data:concept:69:> .
@prefix ns196: <urn:paradicms_etl:pipeline:synthetic_data:concept:54:CmsImage1:> .
@prefix ns197: <http://example.com/collection1/work4:CmsImage1:> .
@prefix ns198: <urn:paradicms_etl:pipeline:synthetic_data:concept:42:CmsImage0:> .
@prefix ns199: <urn:paradicms_etl:pipeline:synthetic_data:concept:62:CmsImage0:> .
@prefix ns2: <urn:paradicms_etl:pipeline:synthetic_data:concept:27:> .
@prefix ns20: <urn:paradicms_etl:pipeline:synthetic_data:concept:44:> .
@prefix ns200: <urn:paradicms_etl:pipeline:synthetic_data:concept:17:CmsImage1:> .
@prefix ns201: <urn:paradicms_etl:pipeline:synthetic_data:concept:58:CmsImage0:> .
@prefix ns202: <urn:paradicms_etl:pipeline:synthetic_data:concept:101:CmsImage1:> .
@prefix ns203: <urn:paradicms_etl:pipeline:synthetic_data:concept:19:CmsImage0:> .
@prefix ns204: <urn:paradicms_etl:pipeline:synthetic_data:concept:108:CmsImage0:> .
@prefix ns205: <urn:paradicms_etl:pipeline:synthetic_data:concept:11:CmsImage0:> .
@prefix ns206: <urn:paradicms_etl:pipeline:synthetic_data:concept:61:CmsImage0:> .
@prefix ns207: <urn:paradicms_etl:pipeline:synthetic_data:concept:33:> .
@prefix ns208: <urn:paradicms_etl:pipeline:synthetic_data:concept:16:> .
@prefix ns209: <urn:paradicms_etl:pipeline:synthetic_data:concept:44:CmsImage1:> .
@prefix ns21: <http://purl.org/dc/terms/spatial:CmsImage0:> .
@prefix ns210: <urn:paradicms_etl:pipeline:synthetic_data:concept:1:CmsImage1:> .
@prefix ns211: <urn:paradicms_etl:pipeline:synthetic_data:concept:95:CmsImage1:> .
@prefix ns212: <http://example.com/person3:CmsImage1:> .
@prefix ns213: <urn:paradicms_etl:pipeline:synthetic_data:concept:67:CmsImage0:> .
@prefix ns214: <urn:paradicms_etl:pipeline:synthetic_data:concept:19:CmsImage1:> .
@prefix ns215: <urn:paradicms_etl:pipeline:synthetic_data:concept:28:CmsImage0:> .
@prefix ns216: <http://purl.org/dc/terms/publisher:CmsImage1:> .
@prefix ns217: <urn:paradicms_etl:pipeline:synthetic_data:concept:32:CmsImage0:> .
@prefix ns218: <urn:paradicms_etl:pipeline:synthetic_data:concept:81:CmsImage0:> .
@prefix ns219: <urn:paradicms_etl:pipeline:synthetic_data:concept:92:> .
@prefix ns22: <urn:paradicms_etl:pipeline:synthetic_data:concept:87:CmsImage1:> .
@prefix ns220: <urn:paradicms_etl:pipeline:synthetic_data:concept:59:> .
@prefix ns221: <urn:paradicms_etl:pipeline:synthetic_data:concept:20:> .
@prefix ns222: <urn:paradicms_etl:pipeline:synthetic_data:concept:63:CmsImage1:> .
@prefix ns223: <http://purl.org/dc/terms/spatial:CmsImage1:> .
@prefix ns224: <http://example.com/freestandingwork8:> .
@prefix ns225: <http://example.com/collection1:CmsImage1:> .
@prefix ns226: <urn:paradicms_etl:pipeline:synthetic_data:concept:66:CmsImage1:> .
@prefix ns227: <urn:paradicms_etl:pipeline:synthetic_data:concept:52:CmsImage0:> .
@prefix ns228: <urn:paradicms_etl:pipeline:synthetic_data:concept:32:> .
@prefix ns229: <urn:paradicms_etl:pipeline:synthetic_data:concept:59:CmsImage0:> .
@prefix ns23: <urn:paradicms_etl:pipeline:synthetic_data:concept:85:CmsImage1:> .
@prefix ns230: <urn:paradicms_etl:pipeline:synthetic_data:concept:101:CmsImage0:> .
@prefix ns231: <http://example.com/collection1/work6:> .
@prefix ns232: <urn:paradicms_etl:pipeline:synthetic_data:concept:8:CmsImage0:> .
@prefix ns233: <urn:paradicms_etl:pipeline:synthetic_data:concept:80:CmsImage1:> .
@prefix ns234: <urn:paradicms_etl:pipeline:synthetic_data:concept:104:> .
@prefix ns235: <urn:paradicms_etl:pipeline:synthetic_data:concept:65:CmsImage1:> .
@prefix ns236: <http://example.com/collection0/work0:> .
@prefix ns237: <urn:paradicms_etl:pipeline:synthetic_data:concept:93:CmsImage1:> .
@prefix ns238: <urn:paradicms_etl:pipeline:synthetic_data:concept:35:> .
@prefix ns239: <urn:paradicms_etl:pipeline:synthetic_data:concept:83:> .
@prefix ns24: <urn:paradicms_etl:pipeline:synthetic_data:concept:43:CmsImage1:> .
@prefix ns240: <http://purl.org/vra/technique:CmsImage1:> .
@prefix ns241: <urn:paradicms_etl:pipeline:synthetic_data:concept:36:CmsImage0:> .
@prefix ns242: <urn:paradicms_etl:pipeline:synthetic_data:concept:99:CmsImage1:> .
@prefix ns243: <urn:paradicms_etl:pipeline:synthetic_data:concept:86:CmsImage0:> .
@prefix ns244: <urn:paradicms_etl:pipeline:synthetic_data:concept:79:CmsImage0:> .
@prefix ns245: <urn:paradicms_etl:pipeline:synthetic_data:concept:5:CmsImage1:> .
@prefix ns246: <http://purl.org/dc/terms/description:CmsImage0:> .
@prefix ns247: <urn:paradicms_etl:pipeline:synthetic_data:concept:21:> .
@prefix ns248: <urn:paradicms_etl:pipeline:synthetic_data:concept:107:CmsImage1:> .
@prefix ns249: <urn:paradicms_etl:pipeline:synthetic_data:concept:102:CmsImage0:> .
@prefix ns25: <urn:paradicms_etl:pipeline:synthetic_data:concept:61:CmsImage1:> .
@prefix ns250: <http://example.com/collection0/work1:CmsImage0:> .
@prefix ns251: <http://purl.org/vra/culturalContext:> .
@prefix ns252: <http://example.com/collection0/work3:CmsImage0:> .
@prefix ns253: <urn:paradicms_etl:pipeline:synthetic_data:concept:72:CmsImage0:> .
@prefix ns254: <urn:paradicms_etl:pipeline:synthetic_data:concept:99:> .
@prefix ns255: <http://example.com/organization2:> .
@prefix ns256: <http://example.com/collection1/work5:> .
@prefix ns257: <urn:paradicms_etl:pipeline:synthetic_data:concept:29:CmsImage1:> .
@prefix ns258: <urn:paradicms_etl:pipeline:synthetic_data:concept:63:CmsImage0:> .
@prefix ns259: <urn:paradicms_etl:pipeline:synthetic_data:concept:44:CmsImage0:> .
@prefix ns26: <urn:paradicms_etl:pipeline:synthetic_data:concept:92:CmsImage1:> .
@prefix ns260: <urn:paradicms_etl:pipeline:synthetic_data:concept:32:CmsImage1:> .
@prefix ns261: <urn:paradicms_etl:pipeline:synthetic_data:concept:16:CmsImage1:> .
@prefix ns262: <urn:paradicms_etl:pipeline:synthetic_data:concept:82:CmsImage0:> .
@prefix ns263: <urn:paradicms_etl:pipeline:synthetic_data:concept:79:CmsImage1:> .
@prefix ns264: <http://example.com/collection1:CmsImage0:> .
@prefix ns265: <http://purl.org/dc/terms/language:CmsImage0:> .
@prefix ns266: <urn:paradicms_etl:pipeline:synthetic_data:concept:0:CmsImage0:> .
@prefix ns267: <urn:paradicms_etl:pipeline:synthetic_data:concept:30:CmsImage0:> .
@prefix ns268: <http://example.com/collection0/work3:CmsImage1:> .
@prefix ns269: <urn:paradicms_etl:pipeline:synthetic_data:concept:15:> .
@prefix ns27: <urn:paradicms_etl:pipeline:synthetic_data:concept:76:CmsImage0:> .
@prefix ns270: <urn:paradicms_etl:pipeline:synthetic_data:concept:14:> .
@prefix ns271: <urn:paradicms_etl:pipeline:synthetic_data:concept:75:CmsImage0:> .
@prefix ns272: <urn:paradicms_etl:pipeline:synthetic_data:concept:62:> .
@prefix ns273: <urn:paradicms_etl:pipeline:synthetic_data:concept:55:CmsImage1:> .
@prefix ns274: <urn:paradicms_etl:pipeline:synthetic_data:concept:59:CmsImage1:> .
@prefix ns275: <urn:paradicms_etl:pipeline:synthetic_data:concept:31:CmsImage0:> .
@prefix ns276: <http://example.com/collection0/work0:CmsImage1:> .
@prefix ns277: <urn:paradicms_etl:pipeline:synthetic_data:concept:24:CmsImage1:> .
@prefix ns278: <urn:paradicms_etl:pipeline:synthetic_data:concept:94:> .
@prefix ns279: <urn:paradicms_etl:pipeline:synthetic_data:concept:34:CmsImage0:> .
@prefix ns28: <urn:paradicms_etl:pipeline:synthetic_data:concept:53:CmsImage1:> .
@prefix ns280: <http://example.com/collection1/work4:> .
@prefix ns281: <urn:paradicms_etl:pipeline:synthetic_data:concept:76:CmsImage1:> .
@prefix ns282: <http://purl.org/dc/terms/language:> .
@prefix ns283: <urn:paradicms_etl:pipeline:synthetic_data:concept:106:CmsImage0:> .
@prefix ns284: <urn:paradicms_etl:pipeline:synthetic_data:concept:57:CmsImage1:> .
@prefix ns285: <http://example.com/collection0/work2:> .
@prefix ns286: <urn:paradicms_etl:pipeline:synthetic_data:concept:10:CmsImage1:> .
@prefix ns287: <urn:paradicms_etl:pipeline:synthetic_data:concept:74:> .
@prefix ns288: <http://example.com/organization4:> .
@prefix ns289: <http://example.com/person1:CmsImage0:> .
@prefix ns29: <urn:paradicms_etl:pipeline:synthetic_data:concept:68:CmsImage0:> .
@prefix ns290: <http://example.com/person3:> .
@prefix ns291: <urn:paradicms_etl:pipeline:synthetic_data:concept:38:CmsImage0:> .
@prefix ns292: <urn:paradicms_etl:pipeline:synthetic_data:concept:58:> .
@prefix ns293: <http://example.com/organization0:CmsImage0:> .
@prefix ns294: <urn:paradicms_etl:pipeline:synthetic_data:concept:17:> .
@prefix ns295: <urn:paradicms_etl:pipeline:synthetic_data:concept:79:> .
@prefix ns296: <urn:paradicms_etl:pipeline:synthetic_data:concept:24:> .
@prefix ns297: <urn:paradicms_etl:pipeline:synthetic_data:concept:52:> .
@prefix ns298: <urn:paradicms_etl:pipeline:synthetic_data:concept:84:CmsImage1:> .
@prefix ns299: <urn:paradicms_etl:pipeline:synthetic_data:concept:28:CmsImage1:> .
@prefix ns3: <urn:paradicms_etl:pipeline:synthetic_data:concept:13:CmsImage1:> .
@prefix ns30: <http://example.com/person0:CmsImage0:> .
@prefix ns300: <urn:paradicms_etl:pipeline:synthetic_data:concept:3:CmsImage1:> .
@prefix ns301: <urn:paradicms_etl:pipeline:synthetic_data:concept:71:CmsImage0:> .
@prefix ns302: <urn:paradicms_etl:pipeline:synthetic_data:concept:64:CmsImage1:> .
@prefix ns303: <http://purl.org/dc/terms/extent:CmsImage0:> .
@prefix ns304: <urn:paradicms_etl:pipeline:synthetic_data:concept:33:CmsImage0:> .
@prefix ns305: <urn:paradicms_etl:pipeline:synthetic_data:concept:51:> .
@prefix ns306: <urn:paradicms_etl:pipeline:synthetic_data:concept:26:> .
@prefix ns307: <urn:paradicms_etl:pipeline:synthetic_data:concept:57:CmsImage0:> .
@prefix ns308: <http://example.com/organization2:CmsImage0:> .
@prefix ns309: <http://example.com/person0:> .
@prefix ns31: <urn:paradicms_etl:pipeline:synthetic_data:concept:66:CmsImage0:> .
@prefix ns310: <urn:paradicms_etl:pipeline:synthetic_data:concept:5:> .
@prefix ns311: <urn:paradicms_etl:pipeline:synthetic_data:concept:23:> .
@prefix ns312: <urn:paradicms_etl:pipeline:synthetic_data:concept:2:CmsImage0:> .
@prefix ns313: <urn:paradicms_etl:pipeline:synthetic_data:concept:15:CmsImage1:> .
@prefix ns314: <urn:paradicms_etl:pipeline:synthetic_data:concept:70:CmsImage1:> .
@prefix ns315: <urn:paradicms_etl:pipeline:synthetic_data:concept:47:> .
@prefix ns316: <urn:paradicms_etl:pipeline:synthetic_data:concept:27:CmsImage1:> .
@prefix ns317: <urn:paradicms_etl:pipeline:synthetic_data:concept:9:CmsImage0:> .
@prefix ns318: <http://example.com/person0:CmsImage1:> .
@prefix ns319: <http://example.com/person1:> .
@prefix ns32: <urn:paradicms_etl:pipeline:synthetic_data:concept:> .
@prefix ns320: <urn:paradicms_etl:pipeline:synthetic_data:concept:41:CmsImage1:> .
@prefix ns321: <urn:paradicms_etl:pipeline:synthetic_data:concept:45:CmsImage1:> .
@prefix ns322: <urn:paradicms_etl:pipeline:synthetic_data:concept:74:CmsImage1:> .
@prefix ns323: <urn:paradicms_etl:pipeline:synthetic_data:concept:99:CmsImage0:> .
@prefix ns324: <http://purl.org/dc/terms/title:CmsImage0:> .
@prefix ns325: <urn:paradicms_etl:pipeline:synthetic_data:concept:78:CmsImage1:> .
@prefix ns326: <urn:paradicms_etl:pipeline:synthetic_data:concept:105:> .
@prefix ns327: <urn:paradicms_etl:pipeline:synthetic_data:concept:43:CmsImage0:> .
@prefix ns328: <urn:paradicms_etl:pipeline:synthetic_data:concept:8:CmsImage1:> .
@prefix ns329: <http://example.com/collection1/work4:CmsImage0:> .
@prefix ns33: <urn:paradicms_etl:pipeline:synthetic_data:concept:67:CmsImage1:> .
@prefix ns330: <urn:paradicms_etl:pipeline:synthetic_data:concept:95:CmsImage0:> .
@prefix ns331: <urn:paradicms_etl:pipeline:synthetic_data:concept:73:CmsImage0:> .
@prefix ns332: <urn:paradicms_etl:pipeline:synthetic_data:concept:77:> .
@prefix ns333: <urn:paradicms_etl:pipeline:synthetic_data:concept:41:> .
@prefix ns334: <urn:paradicms_etl:pipeline:synthetic_data:concept:1:> .
@prefix ns335: <urn:paradicms_etl:pipeline:synthetic_data:concept:46:> .
@prefix ns336: <http://example.com/freestandingwork11:> .
@prefix ns337: <urn:paradicms_etl:pipeline:synthetic_data:concept:7:CmsImage1:> .
@prefix ns338: <urn:paradicms_etl:pipeline:synthetic_data:concept:58:CmsImage1:> .
@prefix ns339: <urn:paradicms_etl:pipeline:synthetic_data:concept:13:> .
@prefix ns34: <urn:paradicms_etl:pipeline:synthetic_data:concept:2:CmsImage1:> .
@prefix ns340: <urn:paradicms_etl:pipeline:synthetic_data:concept:21:CmsImage0:> .
@prefix ns341: <urn:paradicms_etl:pipeline:synthetic_data:concept:97:> .
@prefix ns342: <urn:paradicms_etl:pipeline:synthetic_data:concept:14:CmsImage1:> .
@prefix ns343: <urn:paradicms_etl:pipeline:synthetic_data:concept:38:CmsImage1:> .
@prefix ns344: <urn:paradicms_etl:pipeline:synthetic_data:concept:69:CmsImage0:> .
@prefix ns345: <urn:paradicms_etl:pipeline:synthetic_data:concept:75:> .
@prefix ns346: <urn:paradicms_etl:pipeline:synthetic_data:concept:80:> .
@prefix ns347: <http://example.com/collection0/work1:> .
@prefix ns348: <urn:paradicms_etl:pipeline:synthetic_data:concept:25:CmsImage1:> .
@prefix ns349: <urn:paradicms_etl:pipeline:synthetic_data:concept:50:> .
@prefix ns35: <urn:paradicms_etl:pipeline:synthetic_data:concept:104:CmsImage0:> .
@prefix ns350: <urn:paradicms_etl:pipeline:synthetic_data:concept:48:> .
@prefix ns351: <urn:paradicms_etl:pipeline:synthetic_data:concept:45:> .
@prefix ns352: <http://purl.org/dc/terms/title:CmsImage1:> .
@prefix ns353: <http://purl.org/dc/terms/extent:CmsImage1:> .
@prefix ns354: <urn:paradicms_etl:pipeline:synthetic_data:concept:42:> .
@prefix ns355: <urn:paradicms_etl:pipeline:synthetic_data:concept:98:> .
@prefix ns356: <urn:paradicms_etl:pipeline:synthetic_data:concept:40:CmsImage0:> .
@prefix ns357: <http://example.com/freestandingwork10:CmsImage1:> .
@prefix ns358: <urn:paradicms_etl:pipeline:synthetic_data:concept:56:CmsImage1:> .
@prefix ns359: <http://example.com/organization0:CmsImage1:> .
@prefix ns36: <http://purl.org/vra/material:> .
@prefix ns360: <urn:paradicms_etl:pipeline:synthetic_data:concept:70:> .
@prefix ns361: <urn:paradicms_etl:pipeline:synthetic_data:concept:41:CmsImage0:> .
@prefix ns362: <http://purl.org/dc/terms/source:CmsImage1:> .
@prefix ns363: <urn:paradicms_etl:pipeline:synthetic_data:concept:16:CmsImage0:> .
@prefix ns364: <http://example.com/freestandingwork9:CmsImage1:> .
@prefix ns365: <http://purl.org/dc/terms/publisher:> .
@prefix ns366: <urn:paradicms_etl:pipeline:synthetic_data:concept:10:> .
@prefix ns367: <urn:paradicms_etl:pipeline:synthetic_data:concept:72:CmsImage1:> .
@prefix ns368: <http://purl.org/dc/terms/type:CmsImage1:> .
@prefix ns369: <urn:paradicms_etl:pipeline:synthetic_data:concept:34:CmsImage1:> .
@prefix ns37: <urn:paradicms_etl:pipeline:synthetic_data:concept:25:CmsImage0:> .
@prefix ns370: <urn:paradicms_etl:pipeline:synthetic_data:concept:5:CmsImage0:> .
@prefix ns371: <http://purl.org/dc/terms/source:CmsImage0:> .
@prefix ns372: <http://example.com/organization1:> .
@prefix ns373: <urn:paradicms_etl:pipeline:synthetic_data:concept:6:> .
@prefix ns374: <urn:paradicms_etl:pipeline:synthetic_data:concept:102:CmsImage1:> .
@prefix ns375: <urn:paradicms_etl:pipeline:synthetic_data:concept:107:CmsImage0:> .
@prefix ns376: <urn:paradicms_etl:pipeline:synthetic_data:concept:62:CmsImage1:> .
@prefix ns377: <http://example.com/collection1/work7:> .
@prefix ns378: <http://example.com/person2:> .
@prefix ns379: <urn:paradicms_etl:pipeline:synthetic_data:concept:105:CmsImage0:> .
@prefix ns38: <urn:paradicms_etl:pipeline:synthetic_data:concept:90:CmsImage1:> .
@prefix ns380: <http://example.com/freestandingwork9:> .
@prefix ns381: <urn:paradicms_etl:pipeline:synthetic_data:concept:77:CmsImage0:> .
@prefix ns382: <urn:paradicms_etl:pipeline:synthetic_data:concept:21:CmsImage1:> .
@prefix ns383: <urn:paradicms_etl:pipeline:synthetic_data:concept:107:> .
@prefix ns384: <urn:paradicms_etl:pipeline:synthetic_data:property_group:CmsImage1:> .
@prefix ns385: <urn:paradicms_etl:pipeline:synthetic_data:concept:8:> .
@prefix ns386: <http://example.com/collection0/work2:CmsImage1:> .
@prefix ns387: <urn:paradicms_etl:pipeline:synthetic_data:concept:66:> .
@prefix ns388: <urn:paradicms_etl:pipeline:synthetic_data:concept:83:CmsImage1:> .
@prefix ns389: <urn:paradicms_etl:pipeline:synthetic_data:concept:2:> .
@prefix ns39: <urn:paradicms_etl:pipeline:synthetic_data:concept:30:CmsImage1:> .
@prefix ns390: <urn:paradicms_etl:pipeline:synthetic_data:concept:55:> .
@prefix ns391: <urn:paradicms_etl:pipeline:synthetic_data:concept:35:CmsImage1:> .
@prefix ns392: <urn:paradicms_etl:pipeline:synthetic_data:concept:25:> .
@prefix ns393: <http://purl.org/dc/terms/description:> .
@prefix ns394: <http://purl.org/dc/terms/type:> .
@prefix ns395: <urn:paradicms_etl:pipeline:synthetic_data:concept:20:CmsImage1:> .
@prefix ns396: <http://purl.org/dc/terms/title:> .
@prefix ns397: <urn:paradicms_etl:pipeline:synthetic_data:concept:98:CmsImage1:> .
@prefix ns398: <http://purl.org/dc/terms/medium:CmsImage0:> .
@prefix ns399: <urn:paradicms_etl:pipeline:synthetic_data:concept:12:> .
@prefix ns4: <http://example.com/collection1/work5:CmsImage1:> .
@prefix ns40: <urn:paradicms_etl:pipeline:synthetic_data:concept:9:CmsImage1:> .
@prefix ns400: <urn:paradicms_etl:pipeline:synthetic_data:concept:35:CmsImage0:> .
@prefix ns401: <urn:paradicms_etl:pipeline:synthetic_data:concept:18:> .
@prefix ns402: <urn:paradicms_etl:pipeline:synthetic_data:concept:71:> .
@prefix ns403: <urn:paradicms_etl:pipeline:synthetic_data:concept:109:> .
@prefix ns404: <urn:paradicms_etl:pipeline:synthetic_data:concept:81:> .
@prefix ns405: <urn:paradicms_etl:pipeline:synthetic_data:concept:91:CmsImage1:> .
@prefix ns406: <urn:paradicms_etl:pipeline:synthetic_data:concept:108:CmsImage1:> .
@prefix ns407: <http://example.com/person4:CmsImage1:> .
@prefix ns408: <urn:paradicms_etl:pipeline:synthetic_data:concept:82:> .
@prefix ns409: <http://purl.org/vra/technique:> .
@prefix ns41: <urn:paradicms_etl:pipeline:synthetic_data:concept:84:CmsImage0:> .
@prefix ns410: <urn:paradicms_etl:pipeline:synthetic_data:concept:13:CmsImage0:> .
@prefix ns411: <urn:paradicms_etl:pipeline:synthetic_data:concept:109:CmsImage1:> .
@prefix ns412: <http://example.com/collection1/work6:CmsImage0:> .
@prefix ns413: <http://example.com/collection0/work3:> .
@prefix ns414: <http://example.com/organization0:> .
@prefix ns415: <urn:paradicms_etl:pipeline:synthetic_data:concept:37:CmsImage1:> .
@prefix ns416: <urn:paradicms_etl:pipeline:synthetic_data:concept:89:CmsImage0:> .
@prefix ns417: <urn:paradicms_etl:pipeline:synthetic_data:concept:14:CmsImage0:> .
@prefix ns418: <urn:paradicms_etl:pipeline:synthetic_data:concept:39:CmsImage1:> .
@prefix ns419: <urn:paradicms_etl:pipeline:synthetic_data:concept:78:> .
@prefix ns42: <urn:paradicms_etl:pipeline:synthetic_data:concept:100:> .
@prefix ns420: <urn:paradicms_etl:pipeline:synthetic_data:concept:56:> .
@prefix ns421: <urn:paradicms_etl:pipeline:synthetic_data:concept:30:> .
@prefix ns422: <http://example.com/organization3:> .
@prefix ns423: <urn:paradicms_etl:pipeline:synthetic_data:concept:68:> .
@prefix ns424: <urn:paradicms_etl:pipeline:synthetic_data:concept:60:> .
@prefix ns425: <urn:paradicms_etl:pipeline:synthetic_data:concept:29:> .
@prefix ns426: <urn:paradicms_etl:pipeline:synthetic_data:concept:3:> .
@prefix ns427: <http://purl.org/vra/material:CmsImage1:> .
@prefix ns428: <http://example.com/freestandingwork10:> .
@prefix ns429: <urn:paradicms_etl:pipeline:synthetic_data:> .
@prefix ns43: <http://example.com/collection0/work1:CmsImage1:> .
@prefix ns430: <http://example.com/person2:CmsImage0:> .
@prefix ns431: <urn:paradicms_etl:pipeline:synthetic_data:concept:103:> .
@prefix ns432: <urn:paradicms_etl:pipeline:synthetic_data:concept:60:CmsImage1:> .
@prefix ns433: <urn:paradicms_etl:pipeline:synthetic_data:concept:93:CmsImage0:> .
@prefix ns434: <http://purl.org/dc/terms/spatial:> .
@prefix ns435: <urn:paradicms_etl:pipeline:synthetic_data:concept:86:> .
@prefix ns436: <urn:paradicms_etl:pipeline:synthetic_data:concept:101:> .
@prefix ns437: <urn:paradicms_etl:pipeline:synthetic_data:concept:95:> .
@prefix ns438: <urn:paradicms_etl:pipeline:synthetic_data:concept:49:> .
@prefix ns439: <urn:paradicms_etl:pipeline:synthetic_data:concept:43:> .
@prefix ns44: <urn:paradicms_etl:pipeline:synthetic_data:concept:97:CmsImage1:> .
@prefix ns440: <urn:paradicms_etl:pipeline:synthetic_data:concept:53:> .
@prefix ns441: <urn:paradicms_etl:pipeline:synthetic_data:concept:9:> .
@prefix ns442: <urn:paradicms_etl:pipeline:synthetic_data:concept:106:> .
@prefix ns443: <urn:paradicms_etl:pipeline:synthetic_data:concept:36:> .
@prefix ns444: <urn:paradicms_etl:pipeline:synthetic_data:concept:31:> .
@prefix ns445: <urn:paradicms_etl:pipeline:synthetic_data:concept:28:> .
@prefix ns446: <urn:paradicms_etl:pipeline:synthetic_data:concept:7:> .
@prefix ns45: <urn:paradicms_etl:pipeline:synthetic_data:concept:77:CmsImage1:> .
@prefix ns46: <http://purl.org/dc/terms/publisher:CmsImage0:> .
@prefix ns47: <http://example.com/freestandingwork8:CmsImage0:> .
@prefix ns48: <http://example.com/collection1/work7:CmsImage1:> .
@prefix ns49: <urn:paradicms_etl:pipeline:synthetic_data:concept:26:CmsImage0:> .
@prefix ns5: <urn:paradicms_etl:pipeline:synthetic_data:concept:47:CmsImage1:> .
@prefix ns50: <urn:paradicms_etl:pipeline:synthetic_data:concept:37:CmsImage0:> .
@prefix ns51: <urn:paradicms_etl:pipeline:synthetic_data:concept:1:CmsImage0:> .
@prefix ns52: <http://purl.org/dc/terms/type:CmsImage0:> .
@prefix ns53: <urn:paradicms_etl:pipeline:synthetic_data:concept:18:CmsImage1:> .
@prefix ns54: <urn:paradicms_etl:pipeline:synthetic_data:concept:89:> .
@prefix ns55: <urn:paradicms_etl:pipeline:synthetic_data:concept:96:CmsImage1:> .
@prefix ns56: <urn:paradicms_etl:pipeline:synthetic_data:concept:61:> .
@prefix ns57: <urn:paradicms_etl:pipeline:synthetic_data:concept:20:CmsImage0:> .
@prefix ns58: <http://purl.org/dc/terms/language:CmsImage1:> .
@prefix ns59: <urn:paradicms_etl:pipeline:synthetic_data:concept:22:CmsImage0:> .
@prefix ns6: <urn:paradicms_etl:pipeline:synthetic_data:concept:53:CmsImage0:> .
@prefix ns60: <urn:paradicms_etl:pipeline:synthetic_data:concept:94:CmsImage1:> .
@prefix ns61: <urn:paradicms_etl:pipeline:synthetic_data:concept:64:CmsImage0:> .
@prefix ns62: <http://example.com/collection0/work2:CmsImage0:> .
@prefix ns63: <urn:paradicms_etl:pipeline:synthetic_data:concept:4:CmsImage1:> .
@prefix ns64: <urn:paradicms_etl:pipeline:synthetic_data:concept:49:CmsImage1:> .
@prefix ns65: <urn:paradicms_etl:pipeline:synthetic_data:concept:50:CmsImage1:> .
@prefix ns66: <http://example.com/organization1:CmsImage0:> .
@prefix ns67: <urn:paradicms_etl:pipeline:synthetic_data:concept:11:> .
@prefix ns68: <urn:paradicms_etl:pipeline:synthetic_data:concept:64:> .
@prefix ns69: <urn:paradicms_etl:pipeline:synthetic_data:concept:71:CmsImage1:> .
@prefix ns7: <urn:paradicms_etl:pipeline:synthetic_data:concept:98:CmsImage0:> .
@prefix ns70: <urn:paradicms_etl:pipeline:synthetic_data:concept:96:CmsImage0:> .
@prefix ns71: <urn:paradicms_etl:pipeline:synthetic_data:concept:60:CmsImage0:> .
@prefix ns72: <urn:paradicms_etl:pipeline:synthetic_data:concept:4:CmsImage0:> .
@prefix ns73: <urn:paradicms_etl:pipeline:synthetic_data:concept:36:CmsImage1:> .
@prefix ns74: <urn:paradicms_etl:pipeline:synthetic_data:concept:90:CmsImage0:> .
@prefix ns75: <http://purl.org/dc/terms/subject:CmsImage1:> .
@prefix ns76: <urn:paradicms_etl:pipeline:synthetic_data:concept:42:CmsImage1:> .
@prefix ns77: <urn:paradicms_etl:pipeline:synthetic_data:concept:89:CmsImage1:> .
@prefix ns78: <http://example.com/person3:CmsImage0:> .
@prefix ns79: <urn:paradicms_etl:pipeline:synthetic_data:concept:55:CmsImage0:> .
@prefix ns8: <urn:paradicms_etl:pipeline:synthetic_data:property_group:CmsImage0:> .
@prefix ns80: <urn:paradicms_etl:pipeline:synthetic_data:concept:11:CmsImage1:> .
@prefix ns81: <urn:paradicms_etl:pipeline:synthetic_data:concept:39:> .
@prefix ns82: <urn:paradicms_etl:pipeline:synthetic_data:concept:87:CmsImage0:> .
@prefix ns83: <http://example.com/freestandingwork8:CmsImage1:> .
@prefix ns84: <http://example.com/person4:CmsImage0:> .
@prefix ns85: <http://example.com/organization4:CmsImage1:> .
@prefix ns86: <http://purl.org/dc/terms/subject:> .
@prefix ns87: <http://example.com/organization3:CmsImage0:> .
@prefix ns88: <http://purl.org/vra/technique:CmsImage0:> .
@prefix ns89: <urn:paradicms_etl:pipeline:synthetic_data:concept:52:CmsImage1:> .
@prefix ns9: <urn:paradicms_etl:pipeline:synthetic_data:concept:88:CmsImage0:> .
@prefix ns90: <http://example.com/person2:CmsImage1:> .
@prefix ns91: <urn:paradicms_etl:pipeline:synthetic_data:concept:40:CmsImage1:> .
@prefix ns92: <urn:paradicms_etl:pipeline:synthetic_data:concept:23:CmsImage0:> .
@prefix ns93: <http://purl.org/vra/material:CmsImage0:> .
@prefix ns94: <urn:paradicms_etl:pipeline:synthetic_data:concept:12:CmsImage1:> .
@prefix ns95: <urn:paradicms_etl:pipeline:synthetic_data:concept:75:CmsImage1:> .
@prefix ns96: <urn:paradicms_etl:pipeline:synthetic_data:concept:65:> .
@prefix ns97: <urn:paradicms_etl:pipeline:synthetic_data:concept:105:CmsImage1:> .
@prefix ns98: <urn:paradicms_etl:pipeline:synthetic_data:concept:85:CmsImage0:> .
@prefix ns99: <urn:paradicms_etl:pipeline:synthetic_data:concept:0:> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix vra: <http://purl.org/vra/> .
@prefix wd: <http://www.wikidata.org/entity/> .
@prefix wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

ns1:person1 {
    ns1:person1 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            wd:Q7251 ;
        contact:sortName "1, CmsPerson" ;
        foaf:familyName "1" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 1" .
}

ns1:freestandingwork11Opening {
    ns1:freestandingwork11Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-21"^^xsd:date ;
        dcterms:spatial _:Na9a68ea311bf49188991c470f38eddf0 ;
        dcterms:title "FreestandingWork11 opening" ;
        cms:work ns1:freestandingwork11 .

    _:Na9a68ea311bf49188991c470f38eddf0 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns2:CmsImage1 {
    ns2:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:27 .
}

ns3:Thumbnail600x600 {
    ns339:CmsImage1 foaf:thumbnail ns3:Thumbnail600x600 .

    ns3:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns339:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:13 .
}

ns4:Thumbnail200x200 {
    ns256:CmsImage1 foaf:thumbnail ns4:Thumbnail200x200 .

    ns4:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns256:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns116:work5 .
}

ns5:Thumbnail600x600 {
    ns315:CmsImage1 foaf:thumbnail ns5:Thumbnail600x600 .

    ns5:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns315:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:47 .
}

ns6:Thumbnail600x600 {
    ns440:CmsImage0 foaf:thumbnail ns6:Thumbnail600x600 .

    ns6:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns440:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:53 .
}

ns5:Thumbnail800x800 {
    ns5:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns315:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:47 .

    ns315:CmsImage1 foaf:thumbnail ns5:Thumbnail800x800 .
}

ns7:Thumbnail400x400 {
    ns355:CmsImage0 foaf:thumbnail ns7:Thumbnail400x400 .

    ns7:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns355:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:98 .
}

ns8:Thumbnail600x600 {
    ns120:CmsImage0 foaf:thumbnail ns8:Thumbnail600x600 .

    ns8:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 0 rights holder" ;
        dcterms:title "Synthetic data properties image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns120:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns429:property_group .
}

ns9:Thumbnail200x200 {
    ns172:CmsImage0 foaf:thumbnail ns9:Thumbnail200x200 .

    ns9:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns172:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:88 .
}

ns10:CmsImage1 {
    ns10:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent image 1 rights holder" ;
        dcterms:title "Extent image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:extent .
}

ns11:CmsImage1 {
    ns11:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:96 .
}

ns12:CmsImage1 {
    ns12:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:67 .
}

ns13:Thumbnail800x800 {
    ns112:CmsImage1 foaf:thumbnail ns13:Thumbnail800x800 .

    ns13:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns112:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:73 .
}

_:Ne57f6051093d483f99b1703c74d0eeaa {
    _:Ne57f6051093d483f99b1703c74d0eeaa a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N003fc003a9bf457882d5e982badffad6 ;
        dcterms:spatial _:N01928c96bb7b489282cc863045d04e04 ;
        dcterms:title "CmsCollection1CmsWork6 closing" ;
        cms:work ns116:work6 .

    _:N003fc003a9bf457882d5e982badffad6 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:N01928c96bb7b489282cc863045d04e04 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns14:CmsImage1 {
    ns14:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:34 .
}

ns15:Thumbnail200x200 {
    ns305:CmsImage0 foaf:thumbnail ns15:Thumbnail200x200 .

    ns15:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns305:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:51 .
}

ns16:Thumbnail400x400 {
    ns404:CmsImage1 foaf:thumbnail ns16:Thumbnail400x400 .

    ns16:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns404:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:81 .
}

ns17:Thumbnail800x800 {
    ns341:CmsImage0 foaf:thumbnail ns17:Thumbnail800x800 .

    ns17:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns341:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:97 .
}

ns18:Thumbnail400x400 {
    ns256:CmsImage0 foaf:thumbnail ns18:Thumbnail400x400 .

    ns18:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns256:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns116:work5 .
}

ns19:CmsImage1 {
    ns19:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:102 .
}

ns20:CmsImage0 {
    ns20:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:44 .
}

dcterms:title {
    dcterms:title a cms:Property ;
        rdfs:label "Title" ;
        cms:propertyFilterable false ;
        cms:propertyGroup ns429:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Title> .
}

ns21:Thumbnail400x400 {
    ns434:CmsImage0 foaf:thumbnail ns21:Thumbnail400x400 .

    ns21:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial image 0 rights holder" ;
        dcterms:title "Spatial image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns434:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:spatial .
}

ns22:Thumbnail600x600 {
    ns123:CmsImage1 foaf:thumbnail ns22:Thumbnail600x600 .

    ns22:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns123:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:87 .
}

ns23:Thumbnail600x600 {
    ns145:CmsImage1 foaf:thumbnail ns23:Thumbnail600x600 .

    ns23:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns145:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:85 .
}

ns24:Thumbnail200x200 {
    ns439:CmsImage1 foaf:thumbnail ns24:Thumbnail200x200 .

    ns24:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns439:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:43 .
}

ns25:Thumbnail600x600 {
    ns56:CmsImage1 foaf:thumbnail ns25:Thumbnail600x600 .

    ns25:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns56:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:61 .
}

ns26:Thumbnail600x600 {
    ns219:CmsImage1 foaf:thumbnail ns26:Thumbnail600x600 .

    ns26:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns219:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:92 .
}

ns27:Thumbnail200x200 {
    ns103:CmsImage0 foaf:thumbnail ns27:Thumbnail200x200 .

    ns27:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns103:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:76 .
}

ns28:Thumbnail400x400 {
    ns440:CmsImage1 foaf:thumbnail ns28:Thumbnail400x400 .

    ns28:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns440:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:53 .
}

ns29:Thumbnail400x400 {
    ns423:CmsImage0 foaf:thumbnail ns29:Thumbnail400x400 .

    ns29:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns423:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:68 .
}

ns30:Thumbnail200x200 {
    ns309:CmsImage0 foaf:thumbnail ns30:Thumbnail200x200 .

    ns30:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns309:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:person0 .
}

ns31:Thumbnail600x600 {
    ns387:CmsImage0 foaf:thumbnail ns31:Thumbnail600x600 .

    ns31:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns387:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:66 .
}

ns32:48 {
    ns32:48 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 8" ;
        skos:prefLabel "CmsConcept 48" .
}

ns33:Thumbnail200x200 {
    ns33:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns12:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:67 .

    ns12:CmsImage1 foaf:thumbnail ns33:Thumbnail200x200 .
}

ns34:Thumbnail800x800 {
    ns389:CmsImage1 foaf:thumbnail ns34:Thumbnail800x800 .

    ns34:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns389:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:2 .
}

ns11:CmsImage0 {
    ns11:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:96 .
}

ns35:Thumbnail200x200 {
    ns234:CmsImage0 foaf:thumbnail ns35:Thumbnail200x200 .

    ns35:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns234:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:104 .
}

ns36:CmsImage0 {
    ns36:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material image 0 rights holder" ;
        dcterms:title "Material image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts vra:material .
}

ns37:Thumbnail600x600 {
    ns392:CmsImage0 foaf:thumbnail ns37:Thumbnail600x600 .

    ns37:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:25 .
}

ns38:Thumbnail200x200 {
    ns128:CmsImage1 foaf:thumbnail ns38:Thumbnail200x200 .

    ns38:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns128:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:90 .
}

ns39:Thumbnail800x800 {
    ns421:CmsImage1 foaf:thumbnail ns39:Thumbnail800x800 .

    ns39:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns421:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:30 .
}

ns32:21 {
    ns32:21 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 1" ;
        skos:prefLabel "CmsConcept 21" .
}

ns40:Thumbnail600x600 {
    ns441:CmsImage1 foaf:thumbnail ns40:Thumbnail600x600 .

    ns40:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns441:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:9 .
}

ns41:Thumbnail600x600 {
    ns117:CmsImage0 foaf:thumbnail ns41:Thumbnail600x600 .

    ns41:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns117:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:84 .
}

ns42:CmsImage0 {
    ns42:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:100 .
}

ns43:Thumbnail400x400 {
    ns347:CmsImage1 foaf:thumbnail ns43:Thumbnail400x400 .

    ns43:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns347:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns131:work1 .
}

ns44:Thumbnail800x800 {
    ns341:CmsImage1 foaf:thumbnail ns44:Thumbnail800x800 .

    ns44:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns341:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:97 .
}

ns45:Thumbnail400x400 {
    ns332:CmsImage1 foaf:thumbnail ns45:Thumbnail400x400 .

    ns45:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns332:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:77 .
}

ns46:Thumbnail400x400 {
    ns365:CmsImage0 foaf:thumbnail ns46:Thumbnail400x400 .

    ns46:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher image 0 rights holder" ;
        dcterms:title "Publisher image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:publisher .
}

ns47:Thumbnail800x800 {
    ns224:CmsImage0 foaf:thumbnail ns47:Thumbnail800x800 .

    ns47:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns224:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:freestandingwork8 .
}

ns48:Thumbnail400x400 {
    ns377:CmsImage1 foaf:thumbnail ns48:Thumbnail400x400 .

    ns48:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns377:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns116:work7 .
}

ns49:Thumbnail200x200 {
    ns306:CmsImage0 foaf:thumbnail ns49:Thumbnail200x200 .

    ns49:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns306:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:26 .
}

ns50:Thumbnail800x800 {
    ns124:CmsImage0 foaf:thumbnail ns50:Thumbnail800x800 .

    ns50:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns124:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:37 .
}

ns51:Thumbnail200x200 {
    ns334:CmsImage0 foaf:thumbnail ns51:Thumbnail200x200 .

    ns51:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns334:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:1 .
}

ns52:Thumbnail600x600 {
    ns394:CmsImage0 foaf:thumbnail ns52:Thumbnail600x600 .

    ns52:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type image 0 rights holder" ;
        dcterms:title "Type image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns394:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:type .
}

ns53:Thumbnail800x800 {
    ns401:CmsImage1 foaf:thumbnail ns53:Thumbnail800x800 .

    ns53:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns401:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:18 .
}

ns54:CmsImage0 {
    ns54:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:89 .
}

ns3:Thumbnail800x800 {
    ns3:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns339:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:13 .

    ns339:CmsImage1 foaf:thumbnail ns3:Thumbnail800x800 .
}

ns55:Thumbnail600x600 {
    ns55:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns11:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:96 .

    ns11:CmsImage1 foaf:thumbnail ns55:Thumbnail600x600 .
}

ns21:Thumbnail800x800 {
    ns21:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial image 0 rights holder" ;
        dcterms:title "Spatial image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns434:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:spatial .

    ns434:CmsImage0 foaf:thumbnail ns21:Thumbnail800x800 .
}

ns56:CmsImage1 {
    ns56:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:61 .
}

ns57:Thumbnail800x800 {
    ns221:CmsImage0 foaf:thumbnail ns57:Thumbnail800x800 .

    ns57:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns221:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:20 .
}

ns58:Thumbnail600x600 {
    ns282:CmsImage1 foaf:thumbnail ns58:Thumbnail600x600 .

    ns58:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language image 1 rights holder" ;
        dcterms:title "Language image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns282:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:language .
}

ns59:Thumbnail600x600 {
    ns194:CmsImage0 foaf:thumbnail ns59:Thumbnail600x600 .

    ns59:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns194:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:22 .
}

ns60:Thumbnail600x600 {
    ns278:CmsImage1 foaf:thumbnail ns60:Thumbnail600x600 .

    ns60:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns278:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:94 .
}

ns61:Thumbnail600x600 {
    ns68:CmsImage0 foaf:thumbnail ns61:Thumbnail600x600 .

    ns61:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns68:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:64 .
}

ns45:Thumbnail600x600 {
    ns45:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns332:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:77 .

    ns332:CmsImage1 foaf:thumbnail ns45:Thumbnail600x600 .
}

ns62:Thumbnail800x800 {
    ns285:CmsImage0 foaf:thumbnail ns62:Thumbnail800x800 .

    ns62:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns285:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns131:work2 .
}

ns63:Thumbnail600x600 {
    ns150:CmsImage1 foaf:thumbnail ns63:Thumbnail600x600 .

    ns63:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns150:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:4 .
}

ns22:Thumbnail200x200 {
    ns22:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns123:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:87 .

    ns123:CmsImage1 foaf:thumbnail ns22:Thumbnail200x200 .
}

ns32:93 {
    ns32:93 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 3" ;
        skos:prefLabel "CmsConcept 93" .
}

ns64:Thumbnail800x800 {
    ns438:CmsImage1 foaf:thumbnail ns64:Thumbnail800x800 .

    ns64:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns438:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:49 .
}

ns65:Thumbnail200x200 {
    ns349:CmsImage1 foaf:thumbnail ns65:Thumbnail200x200 .

    ns65:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns349:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:50 .
}

ns31:Thumbnail800x800 {
    ns31:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns387:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:66 .

    ns387:CmsImage0 foaf:thumbnail ns31:Thumbnail800x800 .
}

ns66:Thumbnail600x600 {
    ns372:CmsImage0 foaf:thumbnail ns66:Thumbnail600x600 .

    ns66:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns372:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:organization1 .
}

ns67:CmsImage0 {
    ns67:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:11 .
}

ns68:CmsImage0 {
    ns68:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:64 .
}

ns69:Thumbnail400x400 {
    ns402:CmsImage1 foaf:thumbnail ns69:Thumbnail400x400 .

    ns69:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns402:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:71 .
}

ns70:Thumbnail400x400 {
    ns70:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns11:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:96 .

    ns11:CmsImage0 foaf:thumbnail ns70:Thumbnail400x400 .
}

ns71:Thumbnail400x400 {
    ns424:CmsImage0 foaf:thumbnail ns71:Thumbnail400x400 .

    ns71:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns424:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:60 .
}

ns72:Thumbnail800x800 {
    ns150:CmsImage0 foaf:thumbnail ns72:Thumbnail800x800 .

    ns72:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns150:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:4 .
}

ns49:Thumbnail600x600 {
    ns49:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns306:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:26 .

    ns306:CmsImage0 foaf:thumbnail ns49:Thumbnail600x600 .
}

ns73:Thumbnail400x400 {
    ns443:CmsImage1 foaf:thumbnail ns73:Thumbnail400x400 .

    ns73:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns443:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:36 .
}

ns74:Thumbnail200x200 {
    ns128:CmsImage0 foaf:thumbnail ns74:Thumbnail200x200 .

    ns74:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns128:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:90 .
}

ns39:Thumbnail400x400 {
    ns39:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns421:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:30 .

    ns421:CmsImage1 foaf:thumbnail ns39:Thumbnail400x400 .
}

ns75:Thumbnail600x600 {
    ns86:CmsImage1 foaf:thumbnail ns75:Thumbnail600x600 .

    ns75:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject image 1 rights holder" ;
        dcterms:title "Subject image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns86:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:subject .
}

ns76:Thumbnail200x200 {
    ns354:CmsImage1 foaf:thumbnail ns76:Thumbnail200x200 .

    ns76:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns354:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:42 .
}

ns77:Thumbnail200x200 {
    ns54:CmsImage1 foaf:thumbnail ns77:Thumbnail200x200 .

    ns77:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns54:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:89 .
}

ns78:Thumbnail800x800 {
    ns290:CmsImage0 foaf:thumbnail ns78:Thumbnail800x800 .

    ns78:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns290:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:person3 .
}

ns79:Thumbnail800x800 {
    ns390:CmsImage0 foaf:thumbnail ns79:Thumbnail800x800 .

    ns79:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns390:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:55 .
}

ns80:Thumbnail400x400 {
    ns67:CmsImage1 foaf:thumbnail ns80:Thumbnail400x400 .

    ns80:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns67:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:11 .
}

ns81:CmsImage0 {
    ns81:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:39 .
}

ns82:Thumbnail200x200 {
    ns123:CmsImage0 foaf:thumbnail ns82:Thumbnail200x200 .

    ns82:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns123:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:87 .
}

ns83:Thumbnail200x200 {
    ns224:CmsImage1 foaf:thumbnail ns83:Thumbnail200x200 .

    ns83:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns224:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:freestandingwork8 .
}

ns84:Thumbnail800x800 {
    ns119:CmsImage0 foaf:thumbnail ns84:Thumbnail800x800 .

    ns84:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns119:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:person4 .
}

ns85:Thumbnail600x600 {
    ns288:CmsImage1 foaf:thumbnail ns85:Thumbnail600x600 .

    ns85:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns288:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:organization4 .
}

ns86:CmsImage1 {
    ns86:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject image 1 rights holder" ;
        dcterms:title "Subject image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:subject .
}

ns87:Thumbnail800x800 {
    ns422:CmsImage0 foaf:thumbnail ns87:Thumbnail800x800 .

    ns87:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns422:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:organization3 .
}

ns88:Thumbnail600x600 {
    ns409:CmsImage0 foaf:thumbnail ns88:Thumbnail600x600 .

    ns88:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique image 0 rights holder" ;
        dcterms:title "Technique image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns409:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts vra:technique .
}

ns1:freestandingwork10Creation {
    ns1:freestandingwork10Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns1:organization2,
            ns1:organization3 ;
        dcterms:date _:N4cf53b87abac45e594a938e483cd09c4 ;
        dcterms:description _:N9905ada51a5f4ca2a04ec6e92626fdf9 ;
        dcterms:spatial ns1:freestandingwork10Location ;
        dcterms:title "FreestandingWork10 creation" ;
        cms:work ns1:freestandingwork10 .

    _:N4cf53b87abac45e594a938e483cd09c4 a cms:DateTimeDescription ;
        time:day "---22"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:N9905ada51a5f4ca2a04ec6e92626fdf9 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns89:Thumbnail600x600 {
    ns297:CmsImage1 foaf:thumbnail ns89:Thumbnail600x600 .

    ns89:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns297:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:52 .
}

ns90:Thumbnail600x600 {
    ns378:CmsImage1 foaf:thumbnail ns90:Thumbnail600x600 .

    ns90:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns378:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:person2 .
}

ns32:25 {
    ns32:25 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 5" ;
        skos:prefLabel "CmsConcept 25" .
}

ns91:Thumbnail600x600 {
    ns174:CmsImage1 foaf:thumbnail ns91:Thumbnail600x600 .

    ns91:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns174:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:40 .
}

ns32:4 {
    ns32:4 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 4" ;
        skos:prefLabel "CmsConcept 4" .
}

ns92:Thumbnail800x800 {
    ns311:CmsImage0 foaf:thumbnail ns92:Thumbnail800x800 .

    ns92:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns311:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:23 .
}

ns93:Thumbnail200x200 {
    ns93:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material image 0 rights holder" ;
        dcterms:title "Material image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns36:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts vra:material .

    ns36:CmsImage0 foaf:thumbnail ns93:Thumbnail200x200 .
}

ns94:Thumbnail800x800 {
    ns399:CmsImage1 foaf:thumbnail ns94:Thumbnail800x800 .

    ns94:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:12 .
}

ns95:Thumbnail200x200 {
    ns345:CmsImage1 foaf:thumbnail ns95:Thumbnail200x200 .

    ns95:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns345:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:75 .
}

ns96:CmsImage1 {
    ns96:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:65 .
}

ns83:Thumbnail600x600 {
    ns83:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns224:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:freestandingwork8 .

    ns224:CmsImage1 foaf:thumbnail ns83:Thumbnail600x600 .
}

ns43:Thumbnail200x200 {
    ns43:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns347:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns131:work1 .

    ns347:CmsImage1 foaf:thumbnail ns43:Thumbnail200x200 .
}

ns97:Thumbnail800x800 {
    ns326:CmsImage1 foaf:thumbnail ns97:Thumbnail800x800 .

    ns97:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns326:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:105 .
}

ns98:Thumbnail800x800 {
    ns145:CmsImage0 foaf:thumbnail ns98:Thumbnail800x800 .

    ns98:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns145:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:85 .
}

ns99:CmsImage1 {
    ns99:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:0 .
}

ns100:Thumbnail800x800 {
    ns125:CmsImage1 foaf:thumbnail ns100:Thumbnail800x800 .

    ns100:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium image 1 rights holder" ;
        dcterms:title "Medium image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns125:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:medium .
}

ns101:Thumbnail600x600 {
    ns431:CmsImage0 foaf:thumbnail ns101:Thumbnail600x600 .

    ns101:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns431:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:103 .
}

ns102:Thumbnail600x600 {
    ns234:CmsImage1 foaf:thumbnail ns102:Thumbnail600x600 .

    ns102:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns234:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:104 .
}

ns32:84 {
    ns32:84 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 4" ;
        skos:prefLabel "CmsConcept 84" .
}

ns103:CmsImage0 {
    ns103:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:76 .
}

ns104:Thumbnail800x800 {
    ns428:CmsImage0 foaf:thumbnail ns104:Thumbnail800x800 .

    ns104:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns428:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:freestandingwork10 .
}

ns105:Thumbnail200x200 {
    ns444:CmsImage1 foaf:thumbnail ns105:Thumbnail200x200 .

    ns105:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns444:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:31 .
}

ns7:Thumbnail200x200 {
    ns7:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns355:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:98 .

    ns355:CmsImage0 foaf:thumbnail ns7:Thumbnail200x200 .
}

ns106:Thumbnail400x400 {
    ns426:CmsImage0 foaf:thumbnail ns106:Thumbnail400x400 .

    ns106:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns426:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:3 .
}

ns26:Thumbnail800x800 {
    ns26:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns219:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:92 .

    ns219:CmsImage1 foaf:thumbnail ns26:Thumbnail800x800 .
}

ns70:Thumbnail600x600 {
    ns70:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns11:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:96 .

    ns11:CmsImage0 foaf:thumbnail ns70:Thumbnail600x600 .
}

ns40:Thumbnail800x800 {
    ns40:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns441:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:9 .

    ns441:CmsImage1 foaf:thumbnail ns40:Thumbnail800x800 .
}

ns107:Thumbnail600x600 {
    ns408:CmsImage1 foaf:thumbnail ns107:Thumbnail600x600 .

    ns107:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns408:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:82 .
}

ns23:Thumbnail800x800 {
    ns23:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns145:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:85 .

    ns145:CmsImage1 foaf:thumbnail ns23:Thumbnail800x800 .
}

ns108:Thumbnail600x600 {
    ns350:CmsImage0 foaf:thumbnail ns108:Thumbnail600x600 .

    ns108:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns350:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:48 .
}

ns32:101 {
    ns32:101 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 1" ;
        skos:prefLabel "CmsConcept 101" .
}

ns32:0 {
    ns32:0 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 0" ;
        skos:prefLabel "CmsConcept 0" .
}

ns109:Thumbnail200x200 {
    ns172:CmsImage1 foaf:thumbnail ns109:Thumbnail200x200 .

    ns109:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns172:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:88 .
}

ns110:CmsImage1 {
    ns110:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:63 .
}

ns15:Thumbnail800x800 {
    ns15:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns305:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:51 .

    ns305:CmsImage0 foaf:thumbnail ns15:Thumbnail800x800 .
}

ns111:Thumbnail600x600 {
    ns306:CmsImage1 foaf:thumbnail ns111:Thumbnail600x600 .

    ns111:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns306:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:26 .
}

ns112:CmsImage1 {
    ns112:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:73 .
}

ns113:CmsImage1 {
    ns113:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:108 .
}

ns79:Thumbnail200x200 {
    ns79:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns390:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:55 .

    ns390:CmsImage0 foaf:thumbnail ns79:Thumbnail200x200 .
}

ns114:Thumbnail600x600 {
    ns373:CmsImage0 foaf:thumbnail ns114:Thumbnail600x600 .

    ns114:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns373:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:6 .
}

ns115:Thumbnail200x200 {
    ns373:CmsImage1 foaf:thumbnail ns115:Thumbnail200x200 .

    ns115:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns373:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:6 .
}

ns1:freestandingwork10 {
    ns1:freestandingwork10 a cms:Work ;
        dcterms:alternative "FreestandingWork10 alternative title 0",
            "FreestandingWork10 alternative title 1" ;
        dcterms:contributor _:N53bea673e9e04da19f369440d9e716af,
            _:Nf2d3f5b85bb94a9291a560530b36e48a ;
        dcterms:creator ns1:organization2,
            ns1:organization3 ;
        dcterms:description _:N9905ada51a5f4ca2a04ec6e92626fdf9 ;
        dcterms:extent ns32:10,
            ns32:11 ;
        dcterms:identifier "FreestandingWork10Id0",
            "FreestandingWork10Id1" ;
        dcterms:language ns32:20,
            ns32:21 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns32:40,
            ns32:41 ;
        dcterms:provenance "FreestandingWork10 provenance 0",
            "FreestandingWork10 provenance 1" ;
        dcterms:publisher ns32:50,
            ns32:51 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 rights holder" ;
        dcterms:source ns32:60,
            ns32:61 ;
        dcterms:spatial ns1:freestandingwork10Location ;
        dcterms:subject ns32:80,
            ns32:81 ;
        dcterms:title "FreestandingWork10" ;
        dcterms:type ns32:100,
            ns32:101 ;
        vra:culturalContext ns32:0,
            ns32:1 ;
        vra:material ns32:30,
            ns32:31 ;
        vra:technique ns32:90,
            ns32:91 ;
        foaf:page <http://example.com/work/10> .

    _:N53bea673e9e04da19f369440d9e716af a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork10 contributor 0" .

    _:Nf2d3f5b85bb94a9291a560530b36e48a a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork10 contributor 1" .

    _:N9905ada51a5f4ca2a04ec6e92626fdf9 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns116:work6Opening {
    ns116:work6Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-26"^^xsd:date ;
        dcterms:description _:N003fc003a9bf457882d5e982badffad6 ;
        dcterms:spatial _:N01928c96bb7b489282cc863045d04e04 ;
        dcterms:title "CmsCollection1CmsWork6 opening" ;
        cms:work ns116:work6 .

    _:N003fc003a9bf457882d5e982badffad6 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:N01928c96bb7b489282cc863045d04e04 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns117:CmsImage1 {
    ns117:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:84 .
}

ns118:CmsImage1 {
    ns118:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source image 1 rights holder" ;
        dcterms:title "Source image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:source .
}

ns102:Thumbnail800x800 {
    ns102:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns234:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:104 .

    ns234:CmsImage1 foaf:thumbnail ns102:Thumbnail800x800 .
}

ns45:Thumbnail800x800 {
    ns45:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns332:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:77 .

    ns332:CmsImage1 foaf:thumbnail ns45:Thumbnail800x800 .
}

ns119:CmsImage0 {
    ns119:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:person4 .
}

ns120:CmsImage0 {
    ns120:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 0 rights holder" ;
        dcterms:title "Synthetic data properties image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns429:property_group .
}

ns32:45 {
    ns32:45 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 5" ;
        skos:prefLabel "CmsConcept 45" .
}

ns121:Thumbnail200x200 {
    ns425:CmsImage0 foaf:thumbnail ns121:Thumbnail200x200 .

    ns121:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns425:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:29 .
}

ns122:Thumbnail800x800 {
    ns403:CmsImage0 foaf:thumbnail ns122:Thumbnail800x800 .

    ns122:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:109 .
}

ns1:freestandingwork10Opening {
    ns1:freestandingwork10Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-22"^^xsd:date ;
        dcterms:description _:N9905ada51a5f4ca2a04ec6e92626fdf9 ;
        dcterms:spatial _:N3fdbaf17af7f472aac37a1f3f38f96ab ;
        dcterms:title "FreestandingWork10 opening" ;
        cms:work ns1:freestandingwork10 .

    _:N3fdbaf17af7f472aac37a1f3f38f96ab a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N9905ada51a5f4ca2a04ec6e92626fdf9 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns123:CmsImage0 {
    ns123:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:87 .
}

ns124:CmsImage1 {
    ns124:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:37 .
}

ns125:CmsImage1 {
    ns125:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium image 1 rights holder" ;
        dcterms:title "Medium image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:medium .
}

ns116:work7Location {
    ns116:work7Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns126:CmsImage1 {
    ns126:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:93 .
}

ns127:Thumbnail200x200 {
    ns278:CmsImage0 foaf:thumbnail ns127:Thumbnail200x200 .

    ns127:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns278:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:94 .
}

ns128:CmsImage1 {
    ns128:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:90 .
}

ns129:CmsImage0 {
    ns129:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:91 .
}

ns130:Thumbnail200x200 {
    ns96:CmsImage0 foaf:thumbnail ns130:Thumbnail200x200 .

    ns130:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns96:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:65 .
}

ns131:work0Opening {
    ns131:work0Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N4ff135455ee1493c9145d88689c3fcf5 ;
        dcterms:spatial _:Nbc1c25be09a34581ac9738a92e24f6d4 ;
        dcterms:title "CmsCollection0CmsWork0 opening" ;
        cms:work ns131:work0 .

    _:N4ff135455ee1493c9145d88689c3fcf5 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:Nbc1c25be09a34581ac9738a92e24f6d4 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns132:Thumbnail200x200 {
    ns319:CmsImage1 foaf:thumbnail ns132:Thumbnail200x200 .

    ns132:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns319:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:person1 .
}

ns133:Thumbnail800x800 {
    ns294:CmsImage0 foaf:thumbnail ns133:Thumbnail800x800 .

    ns133:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns294:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:17 .
}

ns134:Thumbnail200x200 {
    ns195:CmsImage1 foaf:thumbnail ns134:Thumbnail200x200 .

    ns134:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns195:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:69 .
}

ns32:40 {
    ns32:40 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 0" ;
        skos:prefLabel "CmsConcept 40" .
}

ns135:Thumbnail400x400 {
    ns446:CmsImage0 foaf:thumbnail ns135:Thumbnail400x400 .

    ns135:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns446:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:7 .
}

ns136:Thumbnail600x600 {
    ns236:CmsImage0 foaf:thumbnail ns136:Thumbnail600x600 .

    ns136:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns236:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns131:work0 .
}

ns133:Thumbnail400x400 {
    ns133:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns294:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:17 .

    ns294:CmsImage0 foaf:thumbnail ns133:Thumbnail400x400 .
}

ns137:Thumbnail200x200 {
    ns335:CmsImage1 foaf:thumbnail ns137:Thumbnail200x200 .

    ns137:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns335:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:46 .
}

ns34:Thumbnail200x200 {
    ns34:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns389:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:2 .

    ns389:CmsImage1 foaf:thumbnail ns34:Thumbnail200x200 .
}

ns138:CmsImage0 {
    ns138:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:72 .
}

ns139:Thumbnail400x400 {
    ns296:CmsImage0 foaf:thumbnail ns139:Thumbnail400x400 .

    ns139:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns296:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:24 .
}

ns140:Thumbnail200x200 {
    ns335:CmsImage0 foaf:thumbnail ns140:Thumbnail200x200 .

    ns140:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns335:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:46 .
}

ns141:Thumbnail600x600 {
    ns269:CmsImage0 foaf:thumbnail ns141:Thumbnail600x600 .

    ns141:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns269:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:15 .
}

ns142:Thumbnail200x200 {
    ns86:CmsImage0 foaf:thumbnail ns142:Thumbnail200x200 .

    ns142:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject image 0 rights holder" ;
        dcterms:title "Subject image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns86:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:subject .
}

ns143:Thumbnail600x600 {
    ns442:CmsImage1 foaf:thumbnail ns143:Thumbnail600x600 .

    ns143:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns442:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:106 .
}

ns144:Thumbnail800x800 {
    ns255:CmsImage1 foaf:thumbnail ns144:Thumbnail800x800 .

    ns144:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns255:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:organization2 .
}

ns120:CmsImage1 {
    ns120:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 1 rights holder" ;
        dcterms:title "Synthetic data properties image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns429:property_group .
}

ns62:Thumbnail200x200 {
    ns62:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns285:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns131:work2 .

    ns285:CmsImage0 foaf:thumbnail ns62:Thumbnail200x200 .
}

ns145:CmsImage0 {
    ns145:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:85 .
}

ns146:Thumbnail200x200 {
    ns438:CmsImage0 foaf:thumbnail ns146:Thumbnail200x200 .

    ns146:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns438:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:49 .
}

vra:culturalContext {
    vra:culturalContext a cms:Property ;
        rdfs:label "Cultural context" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns429:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> .
}

ns147:Thumbnail600x600 {
    ns350:CmsImage1 foaf:thumbnail ns147:Thumbnail600x600 .

    ns147:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns350:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:48 .
}

ns148:Thumbnail800x800 {
    ns336:CmsImage1 foaf:thumbnail ns148:Thumbnail800x800 .

    ns148:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns336:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:freestandingwork11 .
}

ns140:Thumbnail600x600 {
    ns140:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns335:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:46 .

    ns335:CmsImage0 foaf:thumbnail ns140:Thumbnail600x600 .
}

ns149:Thumbnail600x600 {
    ns42:CmsImage1 foaf:thumbnail ns149:Thumbnail600x600 .

    ns149:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns42:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:100 .
}

ns150:CmsImage1 {
    ns150:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:4 .
}

ns151:Thumbnail200x200 {
    ns346:CmsImage0 foaf:thumbnail ns151:Thumbnail200x200 .

    ns151:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns346:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:80 .
}

ns152:Thumbnail400x400 {
    ns152:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns42:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:100 .

    ns42:CmsImage0 foaf:thumbnail ns152:Thumbnail400x400 .
}

ns32:105 {
    ns32:105 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 5" ;
        skos:prefLabel "CmsConcept 105" .
}

ns62:Thumbnail400x400 {
    ns62:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns285:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns131:work2 .

    ns285:CmsImage0 foaf:thumbnail ns62:Thumbnail400x400 .
}

ns57:Thumbnail400x400 {
    ns57:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns221:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:20 .

    ns221:CmsImage0 foaf:thumbnail ns57:Thumbnail400x400 .
}

ns63:Thumbnail200x200 {
    ns63:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns150:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:4 .

    ns150:CmsImage1 foaf:thumbnail ns63:Thumbnail200x200 .
}

ns153:Thumbnail800x800 {
    ns207:CmsImage1 foaf:thumbnail ns153:Thumbnail800x800 .

    ns153:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns207:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:33 .
}

ns154:Thumbnail800x800 {
    ns315:CmsImage0 foaf:thumbnail ns154:Thumbnail800x800 .

    ns154:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns315:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:47 .
}

ns155:Thumbnail800x800 {
    ns288:CmsImage0 foaf:thumbnail ns155:Thumbnail800x800 .

    ns155:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns288:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:organization4 .
}

ns156:Thumbnail800x800 {
    ns366:CmsImage0 foaf:thumbnail ns156:Thumbnail800x800 .

    ns156:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns366:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:10 .
}

ns157:Thumbnail400x400 {
    ns380:CmsImage0 foaf:thumbnail ns157:Thumbnail400x400 .

    ns157:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns380:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:freestandingwork9 .
}

ns32:1 {
    ns32:1 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 1" ;
        skos:prefLabel "CmsConcept 1" .
}

ns158:Thumbnail800x800 {
    ns360:CmsImage0 foaf:thumbnail ns158:Thumbnail800x800 .

    ns158:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns360:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:70 .
}

ns159:Thumbnail800x800 {
    ns431:CmsImage1 foaf:thumbnail ns159:Thumbnail800x800 .

    ns159:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns431:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:103 .
}

ns119:CmsImage1 {
    ns119:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:person4 .
}

ns3:Thumbnail400x400 {
    ns3:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns339:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:13 .

    ns339:CmsImage1 foaf:thumbnail ns3:Thumbnail400x400 .
}

ns160:Thumbnail200x200 {
    ns160:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns129:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:91 .

    ns129:CmsImage0 foaf:thumbnail ns160:Thumbnail200x200 .
}

ns161:Thumbnail800x800 {
    ns161:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns81:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:39 .

    ns81:CmsImage0 foaf:thumbnail ns161:Thumbnail800x800 .
}

ns162:Thumbnail200x200 {
    ns377:CmsImage0 foaf:thumbnail ns162:Thumbnail200x200 .

    ns162:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns377:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns116:work7 .
}

ns140:Thumbnail400x400 {
    ns140:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns335:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:46 .

    ns335:CmsImage0 foaf:thumbnail ns140:Thumbnail400x400 .
}

ns163:Thumbnail200x200 {
    ns419:CmsImage0 foaf:thumbnail ns163:Thumbnail200x200 .

    ns163:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns419:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:78 .
}

ns79:Thumbnail600x600 {
    ns79:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns390:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:55 .

    ns390:CmsImage0 foaf:thumbnail ns79:Thumbnail600x600 .
}

ns81:CmsImage1 {
    ns81:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:39 .
}

ns164:CmsImage0 {
    ns164:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:54 .
}

ns165:CmsImage1 {
    ns165:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:collection1 .
}

ns166:Thumbnail800x800 {
    ns194:CmsImage1 foaf:thumbnail ns166:Thumbnail800x800 .

    ns166:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns194:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:22 .
}

ns167:Thumbnail600x600 {
    ns336:CmsImage0 foaf:thumbnail ns167:Thumbnail600x600 .

    ns167:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns336:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:freestandingwork11 .
}

ns168:Thumbnail200x200 {
    ns420:CmsImage0 foaf:thumbnail ns168:Thumbnail200x200 .

    ns168:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns420:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:56 .
}

ns32:31 {
    ns32:31 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 1" ;
        skos:prefLabel "CmsConcept 31" .
}

ns115:Thumbnail600x600 {
    ns115:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns373:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:6 .

    ns373:CmsImage1 foaf:thumbnail ns115:Thumbnail600x600 .
}

ns169:Thumbnail800x800 {
    ns239:CmsImage0 foaf:thumbnail ns169:Thumbnail800x800 .

    ns169:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns239:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:83 .
}

ns54:CmsImage1 {
    ns54:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:89 .
}

ns92:Thumbnail200x200 {
    ns92:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns311:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:23 .

    ns311:CmsImage0 foaf:thumbnail ns92:Thumbnail200x200 .
}

ns13:Thumbnail400x400 {
    ns13:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns112:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:73 .

    ns112:CmsImage1 foaf:thumbnail ns13:Thumbnail400x400 .
}

ns170:Thumbnail600x600 {
    ns423:CmsImage1 foaf:thumbnail ns170:Thumbnail600x600 .

    ns170:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns423:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:68 .
}

ns58:Thumbnail200x200 {
    ns58:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language image 1 rights holder" ;
        dcterms:title "Language image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns282:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:language .

    ns282:CmsImage1 foaf:thumbnail ns58:Thumbnail200x200 .
}

ns171:Thumbnail400x400 {
    ns401:CmsImage0 foaf:thumbnail ns171:Thumbnail400x400 .

    ns171:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns401:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:18 .
}

ns159:Thumbnail600x600 {
    ns159:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns431:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:103 .

    ns431:CmsImage1 foaf:thumbnail ns159:Thumbnail600x600 .
}

ns172:CmsImage0 {
    ns172:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:88 .
}

ns166:Thumbnail200x200 {
    ns166:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns194:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:22 .

    ns194:CmsImage1 foaf:thumbnail ns166:Thumbnail200x200 .
}

ns173:Thumbnail400x400 {
    ns422:CmsImage1 foaf:thumbnail ns173:Thumbnail400x400 .

    ns173:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns422:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:organization3 .
}

ns129:CmsImage1 {
    ns129:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:91 .
}

ns32:97 {
    ns32:97 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 7" ;
        skos:prefLabel "CmsConcept 97" .
}

ns174:CmsImage1 {
    ns174:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:40 .
}

dcterms:spatial {
    dcterms:spatial a cms:Property ;
        rdfs:label "Spatial" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns429:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> .
}

ns175:CmsImage0 {
    ns175:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:38 .
}

ns176:Thumbnail400x400 {
    ns311:CmsImage1 foaf:thumbnail ns176:Thumbnail400x400 .

    ns176:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns311:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:23 .
}

ns177:Thumbnail800x800 {
    ns287:CmsImage0 foaf:thumbnail ns177:Thumbnail800x800 .

    ns177:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns287:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:74 .
}

ns178:Thumbnail800x800 {
    ns399:CmsImage0 foaf:thumbnail ns178:Thumbnail800x800 .

    ns178:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:12 .
}

ns179:Thumbnail600x600 {
    ns305:CmsImage1 foaf:thumbnail ns179:Thumbnail600x600 .

    ns179:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns305:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:51 .
}

ns108:Thumbnail200x200 {
    ns108:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns350:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:48 .

    ns350:CmsImage0 foaf:thumbnail ns108:Thumbnail200x200 .
}

ns180:Thumbnail800x800 {
    ns2:CmsImage0 foaf:thumbnail ns180:Thumbnail800x800 .

    ns180:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns2:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:27 .
}

ns32:90 {
    ns32:90 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 0" ;
        skos:prefLabel "CmsConcept 90" .
}

ns181:Thumbnail200x200 {
    ns435:CmsImage1 foaf:thumbnail ns181:Thumbnail200x200 .

    ns181:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns435:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:86 .
}

ns55:Thumbnail800x800 {
    ns55:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns11:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:96 .

    ns11:CmsImage1 foaf:thumbnail ns55:Thumbnail800x800 .
}

ns182:CmsImage1 {
    ns182:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:19 .
}

ns183:CmsImage1 {
    ns183:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:57 .
}

ns177:Thumbnail400x400 {
    ns177:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns287:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:74 .

    ns287:CmsImage0 foaf:thumbnail ns177:Thumbnail400x400 .
}

ns150:CmsImage0 {
    ns150:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:4 .
}

ns32:8 {
    ns32:8 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 8" ;
        skos:prefLabel "CmsConcept 8" .
}

ns184:Thumbnail600x600 {
    ns251:CmsImage0 foaf:thumbnail ns184:Thumbnail600x600 .

    ns184:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context image 0 rights holder" ;
        dcterms:title "Cultural context image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns251:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts vra:culturalContext .
}

ns136:Thumbnail400x400 {
    ns136:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns236:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns131:work0 .

    ns236:CmsImage0 foaf:thumbnail ns136:Thumbnail400x400 .
}

ns92:Thumbnail400x400 {
    ns92:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns311:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:23 .

    ns311:CmsImage0 foaf:thumbnail ns92:Thumbnail400x400 .
}

ns32:98 {
    ns32:98 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 8" ;
        skos:prefLabel "CmsConcept 98" .
}

ns97:Thumbnail600x600 {
    ns97:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns326:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:105 .

    ns326:CmsImage1 foaf:thumbnail ns97:Thumbnail600x600 .
}

ns43:Thumbnail600x600 {
    ns43:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns347:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns131:work1 .

    ns347:CmsImage1 foaf:thumbnail ns43:Thumbnail600x600 .
}

ns185:Thumbnail200x200 {
    ns349:CmsImage0 foaf:thumbnail ns185:Thumbnail200x200 .

    ns185:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns349:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:50 .
}

ns186:Thumbnail400x400 {
    ns372:CmsImage1 foaf:thumbnail ns186:Thumbnail400x400 .

    ns186:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns372:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:organization1 .
}

ns71:Thumbnail800x800 {
    ns71:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns424:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:60 .

    ns424:CmsImage0 foaf:thumbnail ns71:Thumbnail800x800 .
}

ns187:Thumbnail800x800 {
    ns187:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns164:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:54 .

    ns164:CmsImage0 foaf:thumbnail ns187:Thumbnail800x800 .
}

ns188:Thumbnail200x200 {
    ns351:CmsImage0 foaf:thumbnail ns188:Thumbnail200x200 .

    ns188:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns351:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:45 .
}

ns189:Thumbnail600x600 {
    ns189:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns99:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:0 .

    ns99:CmsImage1 foaf:thumbnail ns189:Thumbnail600x600 .
}

ns190:Thumbnail200x200 {
    ns231:CmsImage1 foaf:thumbnail ns190:Thumbnail200x200 .

    ns190:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns231:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns116:work6 .
}

ns32:72 {
    ns32:72 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 2" ;
        skos:prefLabel "CmsConcept 72" .
}

ns156:Thumbnail600x600 {
    ns156:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns366:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:10 .

    ns366:CmsImage0 foaf:thumbnail ns156:Thumbnail600x600 .
}

ns191:Thumbnail200x200 {
    ns251:CmsImage1 foaf:thumbnail ns191:Thumbnail200x200 .

    ns191:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context image 1 rights holder" ;
        dcterms:title "Cultural context image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns251:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts vra:culturalContext .
}

ns192:Thumbnail400x400 {
    ns393:CmsImage1 foaf:thumbnail ns192:Thumbnail400x400 .

    ns192:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Description image 1 rights holder" ;
        dcterms:title "Description image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns393:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:description .
}

ns193:Thumbnail600x600 {
    ns219:CmsImage0 foaf:thumbnail ns193:Thumbnail600x600 .

    ns193:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns219:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:92 .
}

ns94:Thumbnail600x600 {
    ns94:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:12 .

    ns399:CmsImage1 foaf:thumbnail ns94:Thumbnail600x600 .
}

ns194:CmsImage1 {
    ns194:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:22 .
}

ns123:CmsImage1 {
    ns123:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:87 .
}

ns195:CmsImage1 {
    ns195:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:69 .
}

ns196:Thumbnail800x800 {
    ns164:CmsImage1 foaf:thumbnail ns196:Thumbnail800x800 .

    ns196:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns164:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:54 .
}

ns103:CmsImage1 {
    ns103:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:76 .
}

ns197:Thumbnail400x400 {
    ns280:CmsImage1 foaf:thumbnail ns197:Thumbnail400x400 .

    ns197:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns280:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns116:work4 .
}

ns198:Thumbnail400x400 {
    ns354:CmsImage0 foaf:thumbnail ns198:Thumbnail400x400 .

    ns198:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns354:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:42 .
}

ns199:Thumbnail200x200 {
    ns272:CmsImage0 foaf:thumbnail ns199:Thumbnail200x200 .

    ns199:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns272:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:62 .
}

ns200:Thumbnail200x200 {
    ns294:CmsImage1 foaf:thumbnail ns200:Thumbnail200x200 .

    ns200:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns294:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:17 .
}

ns201:Thumbnail800x800 {
    ns292:CmsImage0 foaf:thumbnail ns201:Thumbnail800x800 .

    ns201:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns292:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:58 .
}

ns66:Thumbnail400x400 {
    ns66:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns372:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:organization1 .

    ns372:CmsImage0 foaf:thumbnail ns66:Thumbnail400x400 .
}

ns202:Thumbnail600x600 {
    ns436:CmsImage1 foaf:thumbnail ns202:Thumbnail600x600 .

    ns202:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns436:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:101 .
}

ns203:Thumbnail400x400 {
    ns182:CmsImage0 foaf:thumbnail ns203:Thumbnail400x400 .

    ns203:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns182:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:19 .
}

ns204:Thumbnail200x200 {
    ns113:CmsImage0 foaf:thumbnail ns204:Thumbnail200x200 .

    ns204:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns113:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:108 .
}

ns33:Thumbnail600x600 {
    ns33:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns12:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:67 .

    ns12:CmsImage1 foaf:thumbnail ns33:Thumbnail600x600 .
}

ns175:CmsImage1 {
    ns175:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:38 .
}

vra:technique {
    vra:technique a cms:Property ;
        rdfs:label "Technique" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns429:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> .
}

ns205:Thumbnail200x200 {
    ns205:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns67:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:11 .

    ns67:CmsImage0 foaf:thumbnail ns205:Thumbnail200x200 .
}

ns15:Thumbnail600x600 {
    ns15:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns305:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:51 .

    ns305:CmsImage0 foaf:thumbnail ns15:Thumbnail600x600 .
}

ns206:Thumbnail200x200 {
    ns56:CmsImage0 foaf:thumbnail ns206:Thumbnail200x200 .

    ns206:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns56:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:61 .
}

ns207:CmsImage0 {
    ns207:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:33 .
}

ns208:CmsImage1 {
    ns208:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:16 .
}

ns209:Thumbnail400x400 {
    ns20:CmsImage1 foaf:thumbnail ns209:Thumbnail400x400 .

    ns209:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns20:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:44 .
}

ns71:Thumbnail600x600 {
    ns71:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns424:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:60 .

    ns424:CmsImage0 foaf:thumbnail ns71:Thumbnail600x600 .
}

ns1:freestandingwork9 {
    ns1:freestandingwork9 a cms:Work ;
        dcterms:alternative "FreestandingWork9 alternative title 0",
            "FreestandingWork9 alternative title 1" ;
        dcterms:contributor _:N93bf7f40ab864c368de72ddaffa00e6a,
            _:Nc08146a9c95e4973af6203aa63a18b83 ;
        dcterms:creator ns1:organization1,
            ns1:organization2 ;
        dcterms:extent ns32:10,
            ns32:19 ;
        dcterms:identifier "FreestandingWork9Id0",
            "FreestandingWork9Id1" ;
        dcterms:language ns32:20,
            ns32:29 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns32:40,
            ns32:49 ;
        dcterms:provenance "FreestandingWork9 provenance 0",
            "FreestandingWork9 provenance 1" ;
        dcterms:publisher ns32:50,
            ns32:59 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 rights holder" ;
        dcterms:source ns32:60,
            ns32:69 ;
        dcterms:spatial ns1:freestandingwork9Location ;
        dcterms:subject ns32:80,
            ns32:89 ;
        dcterms:title "FreestandingWork9" ;
        dcterms:type ns32:100,
            ns32:109 ;
        vra:culturalContext ns32:0,
            ns32:9 ;
        vra:material ns32:30,
            ns32:39 ;
        vra:technique ns32:90,
            ns32:99 .

    _:N93bf7f40ab864c368de72ddaffa00e6a a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork9 contributor 1" .

    _:Nc08146a9c95e4973af6203aa63a18b83 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork9 contributor 0" .
}

ns8:Thumbnail400x400 {
    ns8:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 0 rights holder" ;
        dcterms:title "Synthetic data properties image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns120:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns429:property_group .

    ns120:CmsImage0 foaf:thumbnail ns8:Thumbnail400x400 .
}

ns71:Thumbnail200x200 {
    ns71:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns424:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:60 .

    ns424:CmsImage0 foaf:thumbnail ns71:Thumbnail200x200 .
}

ns210:Thumbnail600x600 {
    ns334:CmsImage1 foaf:thumbnail ns210:Thumbnail600x600 .

    ns210:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns334:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:1 .
}

ns38:Thumbnail600x600 {
    ns38:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns128:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:90 .

    ns128:CmsImage1 foaf:thumbnail ns38:Thumbnail600x600 .
}

ns27:Thumbnail400x400 {
    ns27:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns103:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:76 .

    ns103:CmsImage0 foaf:thumbnail ns27:Thumbnail400x400 .
}

ns32:86 {
    ns32:86 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 6" ;
        skos:prefLabel "CmsConcept 86" .
}

ns211:Thumbnail200x200 {
    ns437:CmsImage1 foaf:thumbnail ns211:Thumbnail200x200 .

    ns211:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns437:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:95 .
}

ns212:Thumbnail200x200 {
    ns290:CmsImage1 foaf:thumbnail ns212:Thumbnail200x200 .

    ns212:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns290:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:person3 .
}

ns213:Thumbnail600x600 {
    ns12:CmsImage0 foaf:thumbnail ns213:Thumbnail600x600 .

    ns213:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns12:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:67 .
}

ns214:Thumbnail800x800 {
    ns214:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns182:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:19 .

    ns182:CmsImage1 foaf:thumbnail ns214:Thumbnail800x800 .
}

ns215:Thumbnail200x200 {
    ns445:CmsImage0 foaf:thumbnail ns215:Thumbnail200x200 .

    ns215:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns445:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:28 .
}

ns1:organization4 {
    ns1:organization4 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 4" ;
        foaf:page ns1:organization4page .
}

ns187:Thumbnail400x400 {
    ns187:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns164:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:54 .

    ns164:CmsImage0 foaf:thumbnail ns187:Thumbnail400x400 .
}

ns216:Thumbnail800x800 {
    ns365:CmsImage1 foaf:thumbnail ns216:Thumbnail800x800 .

    ns216:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher image 1 rights holder" ;
        dcterms:title "Publisher image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:publisher .
}

ns78:Thumbnail200x200 {
    ns78:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns290:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:person3 .

    ns290:CmsImage0 foaf:thumbnail ns78:Thumbnail200x200 .
}

ns36:CmsImage1 {
    ns36:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material image 1 rights holder" ;
        dcterms:title "Material image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts vra:material .
}

ns146:Thumbnail800x800 {
    ns146:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns438:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:49 .

    ns438:CmsImage0 foaf:thumbnail ns146:Thumbnail800x800 .
}

ns212:Thumbnail400x400 {
    ns212:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns290:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:person3 .

    ns290:CmsImage1 foaf:thumbnail ns212:Thumbnail400x400 .
}

ns217:Thumbnail200x200 {
    ns228:CmsImage0 foaf:thumbnail ns217:Thumbnail200x200 .

    ns217:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns228:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:32 .
}

ns218:Thumbnail600x600 {
    ns404:CmsImage0 foaf:thumbnail ns218:Thumbnail600x600 .

    ns218:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns404:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:81 .
}

ns55:Thumbnail200x200 {
    ns55:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns11:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:96 .

    ns11:CmsImage1 foaf:thumbnail ns55:Thumbnail200x200 .
}

ns80:Thumbnail800x800 {
    ns80:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns67:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:11 .

    ns67:CmsImage1 foaf:thumbnail ns80:Thumbnail800x800 .
}

ns219:CmsImage0 {
    ns219:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:92 .
}

ns204:Thumbnail400x400 {
    ns204:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns113:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:108 .

    ns113:CmsImage0 foaf:thumbnail ns204:Thumbnail400x400 .
}

ns220:CmsImage1 {
    ns220:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:59 .
}

ns91:Thumbnail400x400 {
    ns91:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns174:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:40 .

    ns174:CmsImage1 foaf:thumbnail ns91:Thumbnail400x400 .
}

ns188:Thumbnail600x600 {
    ns188:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns351:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:45 .

    ns351:CmsImage0 foaf:thumbnail ns188:Thumbnail600x600 .
}

ns53:Thumbnail200x200 {
    ns53:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns401:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:18 .

    ns401:CmsImage1 foaf:thumbnail ns53:Thumbnail200x200 .
}

ns32:33 {
    ns32:33 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 3" ;
        skos:prefLabel "CmsConcept 33" .
}

ns87:Thumbnail400x400 {
    ns87:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns422:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:organization3 .

    ns422:CmsImage0 foaf:thumbnail ns87:Thumbnail400x400 .
}

ns221:CmsImage1 {
    ns221:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:20 .
}

ns32:94 {
    ns32:94 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 4" ;
        skos:prefLabel "CmsConcept 94" .
}

ns82:Thumbnail400x400 {
    ns82:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns123:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:87 .

    ns123:CmsImage0 foaf:thumbnail ns82:Thumbnail400x400 .
}

ns95:Thumbnail600x600 {
    ns95:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns345:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:75 .

    ns345:CmsImage1 foaf:thumbnail ns95:Thumbnail600x600 .
}

ns222:Thumbnail200x200 {
    ns222:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns110:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:63 .

    ns110:CmsImage1 foaf:thumbnail ns222:Thumbnail200x200 .
}

ns29:Thumbnail800x800 {
    ns29:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns423:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:68 .

    ns423:CmsImage0 foaf:thumbnail ns29:Thumbnail800x800 .
}

ns116:work5Opening {
    ns116:work5Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-27"^^xsd:date ;
        dcterms:spatial _:Ne2ed338ece0746b299aa002a60a93b29 ;
        dcterms:title "CmsCollection1CmsWork5 opening" ;
        cms:work ns116:work5 .

    _:Ne2ed338ece0746b299aa002a60a93b29 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns32:29 {
    ns32:29 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 9" ;
        skos:prefLabel "CmsConcept 29" .
}

ns223:Thumbnail200x200 {
    ns434:CmsImage1 foaf:thumbnail ns223:Thumbnail200x200 .

    ns223:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial image 1 rights holder" ;
        dcterms:title "Spatial image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns434:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:spatial .
}

ns156:Thumbnail200x200 {
    ns156:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns366:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:10 .

    ns366:CmsImage0 foaf:thumbnail ns156:Thumbnail200x200 .
}

ns32:74 {
    ns32:74 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 4" ;
        skos:prefLabel "CmsConcept 74" .
}

ns32:47 {
    ns32:47 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 7" ;
        skos:prefLabel "CmsConcept 47" .
}

ns98:Thumbnail400x400 {
    ns98:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns145:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:85 .

    ns145:CmsImage0 foaf:thumbnail ns98:Thumbnail400x400 .
}

ns224:CmsImage1 {
    ns224:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:freestandingwork8 .
}

ns225:Thumbnail800x800 {
    ns225:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns165:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:collection1 .

    ns165:CmsImage1 foaf:thumbnail ns225:Thumbnail800x800 .
}

ns113:CmsImage0 {
    ns113:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:108 .
}

ns226:Thumbnail400x400 {
    ns387:CmsImage1 foaf:thumbnail ns226:Thumbnail400x400 .

    ns226:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns387:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:66 .
}

ns227:Thumbnail200x200 {
    ns297:CmsImage0 foaf:thumbnail ns227:Thumbnail200x200 .

    ns227:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns297:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:52 .
}

ns228:CmsImage1 {
    ns228:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:32 .
}

ns229:Thumbnail600x600 {
    ns220:CmsImage0 foaf:thumbnail ns229:Thumbnail600x600 .

    ns229:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns220:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:59 .
}

ns144:Thumbnail400x400 {
    ns144:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns255:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:organization2 .

    ns255:CmsImage1 foaf:thumbnail ns144:Thumbnail400x400 .
}

ns32:41 {
    ns32:41 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 1" ;
        skos:prefLabel "CmsConcept 41" .
}

ns230:Thumbnail800x800 {
    ns436:CmsImage0 foaf:thumbnail ns230:Thumbnail800x800 .

    ns230:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns436:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:101 .
}

ns231:CmsImage0 {
    ns231:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns116:work6 .
}

ns32:59 {
    ns32:59 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 9" ;
        skos:prefLabel "CmsConcept 59" .
}

ns232:Thumbnail800x800 {
    ns385:CmsImage0 foaf:thumbnail ns232:Thumbnail800x800 .

    ns232:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:8 .
}

ns32:54 {
    ns32:54 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 4" ;
        skos:prefLabel "CmsConcept 54" .
}

ns83:Thumbnail400x400 {
    ns83:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns224:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:freestandingwork8 .

    ns224:CmsImage1 foaf:thumbnail ns83:Thumbnail400x400 .
}

ns56:CmsImage0 {
    ns56:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:61 .
}

ns217:Thumbnail400x400 {
    ns217:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns228:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:32 .

    ns228:CmsImage0 foaf:thumbnail ns217:Thumbnail400x400 .
}

ns233:Thumbnail800x800 {
    ns346:CmsImage1 foaf:thumbnail ns233:Thumbnail800x800 .

    ns233:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns346:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:80 .
}

ns234:CmsImage0 {
    ns234:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:104 .
}

ns235:Thumbnail400x400 {
    ns235:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns96:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:65 .

    ns96:CmsImage1 foaf:thumbnail ns235:Thumbnail400x400 .
}

ns107:Thumbnail200x200 {
    ns107:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns408:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:82 .

    ns408:CmsImage1 foaf:thumbnail ns107:Thumbnail200x200 .
}

ns236:CmsImage0 {
    ns236:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns131:work0 .
}

ns237:Thumbnail600x600 {
    ns237:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns126:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:93 .

    ns126:CmsImage1 foaf:thumbnail ns237:Thumbnail600x600 .
}

ns238:CmsImage1 {
    ns238:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:35 .
}

ns239:CmsImage0 {
    ns239:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:83 .
}

ns240:Thumbnail600x600 {
    ns409:CmsImage1 foaf:thumbnail ns240:Thumbnail600x600 .

    ns240:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique image 1 rights holder" ;
        dcterms:title "Technique image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns409:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts vra:technique .
}

ns241:Thumbnail800x800 {
    ns443:CmsImage0 foaf:thumbnail ns241:Thumbnail800x800 .

    ns241:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns443:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:36 .
}

ns242:Thumbnail600x600 {
    ns254:CmsImage1 foaf:thumbnail ns242:Thumbnail600x600 .

    ns242:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns254:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:99 .
}

ns127:Thumbnail600x600 {
    ns127:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns278:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:94 .

    ns278:CmsImage0 foaf:thumbnail ns127:Thumbnail600x600 .
}

ns167:Thumbnail200x200 {
    ns167:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns336:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:freestandingwork11 .

    ns336:CmsImage0 foaf:thumbnail ns167:Thumbnail200x200 .
}

ns237:Thumbnail800x800 {
    ns237:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns126:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:93 .

    ns126:CmsImage1 foaf:thumbnail ns237:Thumbnail800x800 .
}

ns243:Thumbnail600x600 {
    ns435:CmsImage0 foaf:thumbnail ns243:Thumbnail600x600 .

    ns243:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns435:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:86 .
}

ns16:Thumbnail200x200 {
    ns16:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns404:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:81 .

    ns404:CmsImage1 foaf:thumbnail ns16:Thumbnail200x200 .
}

ns244:Thumbnail600x600 {
    ns295:CmsImage0 foaf:thumbnail ns244:Thumbnail600x600 .

    ns244:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns295:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:79 .
}

ns94:Thumbnail200x200 {
    ns94:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:12 .

    ns399:CmsImage1 foaf:thumbnail ns94:Thumbnail200x200 .
}

ns32:3 {
    ns32:3 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 3" ;
        skos:prefLabel "CmsConcept 3" .
}

ns245:Thumbnail400x400 {
    ns310:CmsImage1 foaf:thumbnail ns245:Thumbnail400x400 .

    ns245:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns310:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:5 .
}

ns246:Thumbnail800x800 {
    ns393:CmsImage0 foaf:thumbnail ns246:Thumbnail800x800 .

    ns246:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Description image 0 rights holder" ;
        dcterms:title "Description image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns393:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:description .
}

ns247:CmsImage1 {
    ns247:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:21 .
}

ns242:Thumbnail400x400 {
    ns242:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns254:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:99 .

    ns254:CmsImage1 foaf:thumbnail ns242:Thumbnail400x400 .
}

ns248:Thumbnail400x400 {
    ns383:CmsImage1 foaf:thumbnail ns248:Thumbnail400x400 .

    ns248:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns383:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:107 .
}

ns249:Thumbnail800x800 {
    ns19:CmsImage0 foaf:thumbnail ns249:Thumbnail800x800 .

    ns249:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns19:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:102 .
}

ns216:Thumbnail400x400 {
    ns216:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher image 1 rights holder" ;
        dcterms:title "Publisher image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:publisher .

    ns365:CmsImage1 foaf:thumbnail ns216:Thumbnail400x400 .
}

ns32:27 {
    ns32:27 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 7" ;
        skos:prefLabel "CmsConcept 27" .
}

ns250:Thumbnail600x600 {
    ns347:CmsImage0 foaf:thumbnail ns250:Thumbnail600x600 .

    ns250:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns347:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns131:work1 .
}

ns106:Thumbnail800x800 {
    ns106:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns426:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:3 .

    ns426:CmsImage0 foaf:thumbnail ns106:Thumbnail800x800 .
}

ns251:CmsImage0 {
    ns251:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context image 0 rights holder" ;
        dcterms:title "Cultural context image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts vra:culturalContext .
}

ns252:Thumbnail200x200 {
    ns413:CmsImage0 foaf:thumbnail ns252:Thumbnail200x200 .

    ns252:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns413:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns131:work3 .
}

ns40:Thumbnail400x400 {
    ns40:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns441:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:9 .

    ns441:CmsImage1 foaf:thumbnail ns40:Thumbnail400x400 .
}

ns253:Thumbnail800x800 {
    ns253:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns138:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:72 .

    ns138:CmsImage0 foaf:thumbnail ns253:Thumbnail800x800 .
}

ns200:Thumbnail400x400 {
    ns200:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns294:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:17 .

    ns294:CmsImage1 foaf:thumbnail ns200:Thumbnail400x400 .
}

ns32:15 {
    ns32:15 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 5" ;
        skos:prefLabel "CmsConcept 15" .
}

ns254:CmsImage1 {
    ns254:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:99 .
}

ns255:CmsImage1 {
    ns255:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:organization2 .
}

ns256:CmsImage0 {
    ns256:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns116:work5 .
}

ns257:Thumbnail200x200 {
    ns425:CmsImage1 foaf:thumbnail ns257:Thumbnail200x200 .

    ns257:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns425:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:29 .
}

ns258:Thumbnail400x400 {
    ns110:CmsImage0 foaf:thumbnail ns258:Thumbnail400x400 .

    ns258:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns110:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:63 .
}

ns168:Thumbnail800x800 {
    ns168:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns420:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:56 .

    ns420:CmsImage0 foaf:thumbnail ns168:Thumbnail800x800 .
}

ns169:Thumbnail600x600 {
    ns169:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns239:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:83 .

    ns239:CmsImage0 foaf:thumbnail ns169:Thumbnail600x600 .
}

ns259:Thumbnail800x800 {
    ns259:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns20:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:44 .

    ns20:CmsImage0 foaf:thumbnail ns259:Thumbnail800x800 .
}

ns41:Thumbnail400x400 {
    ns41:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns117:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:84 .

    ns117:CmsImage0 foaf:thumbnail ns41:Thumbnail400x400 .
}

ns260:Thumbnail200x200 {
    ns260:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns228:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:32 .

    ns228:CmsImage1 foaf:thumbnail ns260:Thumbnail200x200 .
}

ns261:Thumbnail600x600 {
    ns261:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns208:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:16 .

    ns208:CmsImage1 foaf:thumbnail ns261:Thumbnail600x600 .
}

ns262:Thumbnail800x800 {
    ns408:CmsImage0 foaf:thumbnail ns262:Thumbnail800x800 .

    ns262:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns408:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:82 .
}

ns261:Thumbnail800x800 {
    ns261:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns208:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:16 .

    ns208:CmsImage1 foaf:thumbnail ns261:Thumbnail800x800 .
}

ns139:Thumbnail200x200 {
    ns139:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns296:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:24 .

    ns296:CmsImage0 foaf:thumbnail ns139:Thumbnail200x200 .
}

ns263:Thumbnail600x600 {
    ns295:CmsImage1 foaf:thumbnail ns263:Thumbnail600x600 .

    ns263:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns295:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:79 .
}

ns93:Thumbnail800x800 {
    ns93:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material image 0 rights holder" ;
        dcterms:title "Material image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns36:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts vra:material .

    ns36:CmsImage0 foaf:thumbnail ns93:Thumbnail800x800 .
}

ns184:Thumbnail200x200 {
    ns184:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context image 0 rights holder" ;
        dcterms:title "Cultural context image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns251:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts vra:culturalContext .

    ns251:CmsImage0 foaf:thumbnail ns184:Thumbnail200x200 .
}

ns264:Thumbnail600x600 {
    ns165:CmsImage0 foaf:thumbnail ns264:Thumbnail600x600 .

    ns264:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns165:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:collection1 .
}

ns166:Thumbnail400x400 {
    ns166:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns194:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:22 .

    ns194:CmsImage1 foaf:thumbnail ns166:Thumbnail400x400 .
}

ns265:Thumbnail200x200 {
    ns282:CmsImage0 foaf:thumbnail ns265:Thumbnail200x200 .

    ns265:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language image 0 rights holder" ;
        dcterms:title "Language image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns282:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:language .
}

ns32:103 {
    ns32:103 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 3" ;
        skos:prefLabel "CmsConcept 103" .
}

ns25:Thumbnail800x800 {
    ns25:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns56:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:61 .

    ns56:CmsImage1 foaf:thumbnail ns25:Thumbnail800x800 .
}

ns20:CmsImage1 {
    ns20:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:44 .
}

ns12:CmsImage0 {
    ns12:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:67 .
}

ns218:Thumbnail800x800 {
    ns218:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns404:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:81 .

    ns404:CmsImage0 foaf:thumbnail ns218:Thumbnail800x800 .
}

ns78:Thumbnail600x600 {
    ns78:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns290:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:person3 .

    ns290:CmsImage0 foaf:thumbnail ns78:Thumbnail600x600 .
}

ns44:Thumbnail600x600 {
    ns44:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns341:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:97 .

    ns341:CmsImage1 foaf:thumbnail ns44:Thumbnail600x600 .
}

ns266:Thumbnail400x400 {
    ns99:CmsImage0 foaf:thumbnail ns266:Thumbnail400x400 .

    ns266:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns99:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:0 .
}

ns267:Thumbnail600x600 {
    ns421:CmsImage0 foaf:thumbnail ns267:Thumbnail600x600 .

    ns267:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns421:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:30 .
}

ns268:Thumbnail800x800 {
    ns413:CmsImage1 foaf:thumbnail ns268:Thumbnail800x800 .

    ns268:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns413:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns131:work3 .
}

ns269:CmsImage0 {
    ns269:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:15 .
}

ns176:Thumbnail600x600 {
    ns176:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns311:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:23 .

    ns311:CmsImage1 foaf:thumbnail ns176:Thumbnail600x600 .
}

ns270:CmsImage0 {
    ns270:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:14 .
}

ns271:Thumbnail400x400 {
    ns345:CmsImage0 foaf:thumbnail ns271:Thumbnail400x400 .

    ns271:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns345:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:75 .
}

ns272:CmsImage0 {
    ns272:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:62 .
}

ns26:Thumbnail200x200 {
    ns26:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns219:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:92 .

    ns219:CmsImage1 foaf:thumbnail ns26:Thumbnail200x200 .
}

ns116:work5Location {
    ns116:work5Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns273:Thumbnail600x600 {
    ns390:CmsImage1 foaf:thumbnail ns273:Thumbnail600x600 .

    ns273:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns390:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:55 .
}

ns274:Thumbnail800x800 {
    ns274:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns220:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:59 .

    ns220:CmsImage1 foaf:thumbnail ns274:Thumbnail800x800 .
}

ns1:freestandingwork11Creation {
    ns1:freestandingwork11Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns1:organization3,
            ns1:organization4 ;
        dcterms:date _:N941b6b36954c41b5b70b0d2a651b1fc8 ;
        dcterms:spatial ns1:freestandingwork11Location ;
        dcterms:title "FreestandingWork11 creation" ;
        cms:work ns1:freestandingwork11 .

    _:N941b6b36954c41b5b70b0d2a651b1fc8 a cms:DateTimeDescription ;
        time:day "---21"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns179:Thumbnail800x800 {
    ns179:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns305:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:51 .

    ns305:CmsImage1 foaf:thumbnail ns179:Thumbnail800x800 .
}

ns234:CmsImage1 {
    ns234:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:104 .
}

ns264:Thumbnail200x200 {
    ns264:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns165:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:collection1 .

    ns165:CmsImage0 foaf:thumbnail ns264:Thumbnail200x200 .
}

ns104:Thumbnail600x600 {
    ns104:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns428:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:freestandingwork10 .

    ns428:CmsImage0 foaf:thumbnail ns104:Thumbnail600x600 .
}

ns32:104 {
    ns32:104 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 4" ;
        skos:prefLabel "CmsConcept 104" .
}

ns275:Thumbnail600x600 {
    ns444:CmsImage0 foaf:thumbnail ns275:Thumbnail600x600 .

    ns275:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns444:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:31 .
}

ns114:Thumbnail400x400 {
    ns114:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns373:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:6 .

    ns373:CmsImage0 foaf:thumbnail ns114:Thumbnail400x400 .
}

ns276:Thumbnail800x800 {
    ns236:CmsImage1 foaf:thumbnail ns276:Thumbnail800x800 .

    ns276:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns236:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns131:work0 .
}

ns277:Thumbnail400x400 {
    ns296:CmsImage1 foaf:thumbnail ns277:Thumbnail400x400 .

    ns277:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns296:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:24 .
}

ns278:CmsImage0 {
    ns278:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:94 .
}

ns279:Thumbnail600x600 {
    ns14:CmsImage0 foaf:thumbnail ns279:Thumbnail600x600 .

    ns279:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns14:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:34 .
}

ns32:14 {
    ns32:14 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 4" ;
        skos:prefLabel "CmsConcept 14" .
}

ns211:Thumbnail600x600 {
    ns211:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns437:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:95 .

    ns437:CmsImage1 foaf:thumbnail ns211:Thumbnail600x600 .
}

ns280:CmsImage0 {
    ns280:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns116:work4 .
}

ns46:Thumbnail200x200 {
    ns46:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher image 0 rights holder" ;
        dcterms:title "Publisher image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:publisher .

    ns365:CmsImage0 foaf:thumbnail ns46:Thumbnail200x200 .
}

ns32:42 {
    ns32:42 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 2" ;
        skos:prefLabel "CmsConcept 42" .
}

ns75:Thumbnail200x200 {
    ns75:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject image 1 rights holder" ;
        dcterms:title "Subject image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns86:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:subject .

    ns86:CmsImage1 foaf:thumbnail ns75:Thumbnail200x200 .
}

ns281:Thumbnail800x800 {
    ns281:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns103:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:76 .

    ns103:CmsImage1 foaf:thumbnail ns281:Thumbnail800x800 .
}

ns282:CmsImage1 {
    ns282:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language image 1 rights holder" ;
        dcterms:title "Language image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:language .
}

ns283:Thumbnail800x800 {
    ns442:CmsImage0 foaf:thumbnail ns283:Thumbnail800x800 .

    ns283:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns442:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:106 .
}

ns162:Thumbnail400x400 {
    ns162:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns377:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns116:work7 .

    ns377:CmsImage0 foaf:thumbnail ns162:Thumbnail400x400 .
}

ns89:Thumbnail800x800 {
    ns89:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns297:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:52 .

    ns297:CmsImage1 foaf:thumbnail ns89:Thumbnail800x800 .
}

ns35:Thumbnail800x800 {
    ns35:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns234:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:104 .

    ns234:CmsImage0 foaf:thumbnail ns35:Thumbnail800x800 .
}

ns202:Thumbnail400x400 {
    ns202:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns436:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:101 .

    ns436:CmsImage1 foaf:thumbnail ns202:Thumbnail400x400 .
}

ns250:Thumbnail400x400 {
    ns250:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns347:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns131:work1 .

    ns347:CmsImage0 foaf:thumbnail ns250:Thumbnail400x400 .
}

ns4:Thumbnail800x800 {
    ns4:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns256:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns116:work5 .

    ns256:CmsImage1 foaf:thumbnail ns4:Thumbnail800x800 .
}

ns51:Thumbnail600x600 {
    ns51:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns334:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:1 .

    ns334:CmsImage0 foaf:thumbnail ns51:Thumbnail600x600 .
}

_:Nbb6b4d4bfd7a4207a8c3f09330a977e4 {
    _:Nbb6b4d4bfd7a4207a8c3f09330a977e4 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N9905ada51a5f4ca2a04ec6e92626fdf9 ;
        dcterms:spatial _:N3fdbaf17af7f472aac37a1f3f38f96ab ;
        dcterms:title "FreestandingWork10 closing" ;
        cms:work ns1:freestandingwork10 .

    _:N3fdbaf17af7f472aac37a1f3f38f96ab a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N9905ada51a5f4ca2a04ec6e92626fdf9 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns284:Thumbnail600x600 {
    ns284:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns183:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:57 .

    ns183:CmsImage1 foaf:thumbnail ns284:Thumbnail600x600 .
}

ns285:CmsImage0 {
    ns285:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns131:work2 .
}

ns273:Thumbnail800x800 {
    ns273:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns390:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:55 .

    ns390:CmsImage1 foaf:thumbnail ns273:Thumbnail800x800 .
}

ns61:Thumbnail200x200 {
    ns61:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns68:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:64 .

    ns68:CmsImage0 foaf:thumbnail ns61:Thumbnail200x200 .
}

ns161:Thumbnail400x400 {
    ns161:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns81:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:39 .

    ns81:CmsImage0 foaf:thumbnail ns161:Thumbnail400x400 .
}

ns286:Thumbnail200x200 {
    ns366:CmsImage1 foaf:thumbnail ns286:Thumbnail200x200 .

    ns286:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns366:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:10 .
}

ns245:Thumbnail800x800 {
    ns245:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns310:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:5 .

    ns310:CmsImage1 foaf:thumbnail ns245:Thumbnail800x800 .
}

ns32:65 {
    ns32:65 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 5" ;
        skos:prefLabel "CmsConcept 65" .
}

ns287:CmsImage1 {
    ns287:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:74 .
}

ns163:Thumbnail400x400 {
    ns163:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns419:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:78 .

    ns419:CmsImage0 foaf:thumbnail ns163:Thumbnail400x400 .
}

ns197:Thumbnail800x800 {
    ns197:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns280:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns116:work4 .

    ns280:CmsImage1 foaf:thumbnail ns197:Thumbnail800x800 .
}

ns121:Thumbnail800x800 {
    ns121:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns425:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:29 .

    ns425:CmsImage0 foaf:thumbnail ns121:Thumbnail800x800 .
}

ns288:CmsImage0 {
    ns288:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:organization4 .
}

ns230:Thumbnail400x400 {
    ns230:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns436:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:101 .

    ns436:CmsImage0 foaf:thumbnail ns230:Thumbnail400x400 .
}

ns215:Thumbnail800x800 {
    ns215:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns445:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:28 .

    ns445:CmsImage0 foaf:thumbnail ns215:Thumbnail800x800 .
}

ns250:Thumbnail200x200 {
    ns250:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns347:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns131:work1 .

    ns347:CmsImage0 foaf:thumbnail ns250:Thumbnail200x200 .
}

ns93:Thumbnail400x400 {
    ns93:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material image 0 rights holder" ;
        dcterms:title "Material image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns36:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts vra:material .

    ns36:CmsImage0 foaf:thumbnail ns93:Thumbnail400x400 .
}

ns195:CmsImage0 {
    ns195:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:69 .
}

ns263:Thumbnail400x400 {
    ns263:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns295:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:79 .

    ns295:CmsImage1 foaf:thumbnail ns263:Thumbnail400x400 .
}

ns1:collection1 {
    ns1:collection1 a cms:Collection ;
        dcterms:title "CmsCollection1" .
}

ns55:Thumbnail400x400 {
    ns55:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns11:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:96 .

    ns11:CmsImage1 foaf:thumbnail ns55:Thumbnail400x400 .
}

ns32:85 {
    ns32:85 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 5" ;
        skos:prefLabel "CmsConcept 85" .
}

dcterms:publisher {
    dcterms:publisher a cms:Property ;
        rdfs:label "Publisher" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns429:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> .
}

ns32:39 {
    ns32:39 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 9" ;
        skos:prefLabel "CmsConcept 39" .
}

ns32:22 {
    ns32:22 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 2" ;
        skos:prefLabel "CmsConcept 22" .
}

ns152:Thumbnail800x800 {
    ns152:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns42:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:100 .

    ns42:CmsImage0 foaf:thumbnail ns152:Thumbnail800x800 .
}

ns184:Thumbnail400x400 {
    ns184:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context image 0 rights holder" ;
        dcterms:title "Cultural context image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns251:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts vra:culturalContext .

    ns251:CmsImage0 foaf:thumbnail ns184:Thumbnail400x400 .
}

ns9:Thumbnail400x400 {
    ns9:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns172:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:88 .

    ns172:CmsImage0 foaf:thumbnail ns9:Thumbnail400x400 .
}

ns166:Thumbnail600x600 {
    ns166:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns194:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:22 .

    ns194:CmsImage1 foaf:thumbnail ns166:Thumbnail600x600 .
}

ns274:Thumbnail200x200 {
    ns274:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns220:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:59 .

    ns220:CmsImage1 foaf:thumbnail ns274:Thumbnail200x200 .
}

ns32:82 {
    ns32:82 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 2" ;
        skos:prefLabel "CmsConcept 82" .
}

ns30:Thumbnail400x400 {
    ns30:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns309:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:person0 .

    ns309:CmsImage0 foaf:thumbnail ns30:Thumbnail400x400 .
}

ns48:Thumbnail800x800 {
    ns48:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns377:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns116:work7 .

    ns377:CmsImage1 foaf:thumbnail ns48:Thumbnail800x800 .
}

ns289:Thumbnail200x200 {
    ns319:CmsImage0 foaf:thumbnail ns289:Thumbnail200x200 .

    ns289:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns319:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:person1 .
}

ns290:CmsImage0 {
    ns290:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:person3 .
}

ns117:CmsImage0 {
    ns117:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:84 .
}

ns278:CmsImage1 {
    ns278:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:94 .
}

ns291:Thumbnail400x400 {
    ns291:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns175:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:38 .

    ns175:CmsImage0 foaf:thumbnail ns291:Thumbnail400x400 .
}

ns115:Thumbnail800x800 {
    ns115:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns373:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:6 .

    ns373:CmsImage1 foaf:thumbnail ns115:Thumbnail800x800 .
}

ns47:Thumbnail200x200 {
    ns47:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns224:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:freestandingwork8 .

    ns224:CmsImage0 foaf:thumbnail ns47:Thumbnail200x200 .
}

ns280:CmsImage1 {
    ns280:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns116:work4 .
}

ns292:CmsImage0 {
    ns292:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:58 .
}

ns16:Thumbnail600x600 {
    ns16:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns404:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:81 .

    ns404:CmsImage1 foaf:thumbnail ns16:Thumbnail600x600 .
}

ns106:Thumbnail600x600 {
    ns106:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns426:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:3 .

    ns426:CmsImage0 foaf:thumbnail ns106:Thumbnail600x600 .
}

ns180:Thumbnail400x400 {
    ns180:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns2:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:27 .

    ns2:CmsImage0 foaf:thumbnail ns180:Thumbnail400x400 .
}

ns293:Thumbnail600x600 {
    ns414:CmsImage0 foaf:thumbnail ns293:Thumbnail600x600 .

    ns293:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns414:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:organization0 .
}

ns294:CmsImage1 {
    ns294:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:17 .
}

ns162:Thumbnail600x600 {
    ns162:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns377:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns116:work7 .

    ns377:CmsImage0 foaf:thumbnail ns162:Thumbnail600x600 .
}

ns295:CmsImage1 {
    ns295:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:79 .
}

ns296:CmsImage1 {
    ns296:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:24 .
}

ns83:Thumbnail800x800 {
    ns83:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns224:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:freestandingwork8 .

    ns224:CmsImage1 foaf:thumbnail ns83:Thumbnail800x800 .
}

ns48:Thumbnail200x200 {
    ns48:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns377:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns116:work7 .

    ns377:CmsImage1 foaf:thumbnail ns48:Thumbnail200x200 .
}

ns131:work1Location {
    ns131:work1Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns297:CmsImage0 {
    ns297:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:52 .
}

ns177:Thumbnail600x600 {
    ns177:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns287:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:74 .

    ns287:CmsImage0 foaf:thumbnail ns177:Thumbnail600x600 .
}

ns257:Thumbnail800x800 {
    ns257:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns425:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:29 .

    ns425:CmsImage1 foaf:thumbnail ns257:Thumbnail800x800 .
}

ns223:Thumbnail400x400 {
    ns223:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial image 1 rights holder" ;
        dcterms:title "Spatial image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns434:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:spatial .

    ns434:CmsImage1 foaf:thumbnail ns223:Thumbnail400x400 .
}

ns233:Thumbnail400x400 {
    ns233:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns346:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:80 .

    ns346:CmsImage1 foaf:thumbnail ns233:Thumbnail400x400 .
}

ns298:Thumbnail800x800 {
    ns298:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns117:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:84 .

    ns117:CmsImage1 foaf:thumbnail ns298:Thumbnail800x800 .
}

ns299:Thumbnail800x800 {
    ns445:CmsImage1 foaf:thumbnail ns299:Thumbnail800x800 .

    ns299:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns445:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:28 .
}

ns300:Thumbnail800x800 {
    ns426:CmsImage1 foaf:thumbnail ns300:Thumbnail800x800 .

    ns300:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns426:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:3 .
}

ns153:Thumbnail200x200 {
    ns153:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns207:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:33 .

    ns207:CmsImage1 foaf:thumbnail ns153:Thumbnail200x200 .
}

ns301:Thumbnail600x600 {
    ns402:CmsImage0 foaf:thumbnail ns301:Thumbnail600x600 .

    ns301:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns402:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:71 .
}

ns44:Thumbnail200x200 {
    ns44:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns341:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:97 .

    ns341:CmsImage1 foaf:thumbnail ns44:Thumbnail200x200 .
}

ns160:Thumbnail600x600 {
    ns160:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns129:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:91 .

    ns129:CmsImage0 foaf:thumbnail ns160:Thumbnail600x600 .
}

ns247:CmsImage0 {
    ns247:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:21 .
}

ns302:Thumbnail800x800 {
    ns68:CmsImage1 foaf:thumbnail ns302:Thumbnail800x800 .

    ns302:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns68:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:64 .
}

ns271:Thumbnail600x600 {
    ns271:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns345:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:75 .

    ns345:CmsImage0 foaf:thumbnail ns271:Thumbnail600x600 .
}

ns260:Thumbnail800x800 {
    ns260:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns228:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:32 .

    ns228:CmsImage1 foaf:thumbnail ns260:Thumbnail800x800 .
}

ns230:Thumbnail200x200 {
    ns230:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns436:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:101 .

    ns436:CmsImage0 foaf:thumbnail ns230:Thumbnail200x200 .
}

ns139:Thumbnail800x800 {
    ns139:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns296:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:24 .

    ns296:CmsImage0 foaf:thumbnail ns139:Thumbnail800x800 .
}

ns258:Thumbnail800x800 {
    ns258:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns110:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:63 .

    ns110:CmsImage0 foaf:thumbnail ns258:Thumbnail800x800 .
}

ns76:Thumbnail800x800 {
    ns76:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns354:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:42 .

    ns354:CmsImage1 foaf:thumbnail ns76:Thumbnail800x800 .
}

ns293:Thumbnail200x200 {
    ns293:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns414:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:organization0 .

    ns414:CmsImage0 foaf:thumbnail ns293:Thumbnail200x200 .
}

ns241:Thumbnail400x400 {
    ns241:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns443:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:36 .

    ns443:CmsImage0 foaf:thumbnail ns241:Thumbnail400x400 .
}

ns131:work2Creation {
    ns131:work2Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns1:organization4,
            ns1:person0 ;
        dcterms:date _:N97252f38735e44eea78ad92e0e95f146 ;
        dcterms:description _:N0f3164a794614eb694643cb4d89c751a ;
        dcterms:spatial ns131:work2Location ;
        dcterms:title "CmsCollection0CmsWork2 creation" ;
        cms:work ns131:work2 .

    _:N0f3164a794614eb694643cb4d89c751a a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:N97252f38735e44eea78ad92e0e95f146 a cms:DateTimeDescription ;
        time:day "---30"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns66:Thumbnail800x800 {
    ns66:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns372:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:organization1 .

    ns372:CmsImage0 foaf:thumbnail ns66:Thumbnail800x800 .
}

ns303:Thumbnail800x800 {
    ns10:CmsImage0 foaf:thumbnail ns303:Thumbnail800x800 .

    ns303:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent image 0 rights holder" ;
        dcterms:title "Extent image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns10:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:extent .
}

ns291:Thumbnail200x200 {
    ns291:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns175:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:38 .

    ns175:CmsImage0 foaf:thumbnail ns291:Thumbnail200x200 .
}

ns96:CmsImage0 {
    ns96:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:65 .
}

ns304:Thumbnail400x400 {
    ns304:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns207:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:33 .

    ns207:CmsImage0 foaf:thumbnail ns304:Thumbnail400x400 .
}

ns66:Thumbnail200x200 {
    ns66:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns372:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:organization1 .

    ns372:CmsImage0 foaf:thumbnail ns66:Thumbnail200x200 .
}

ns109:Thumbnail600x600 {
    ns109:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns172:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:88 .

    ns172:CmsImage1 foaf:thumbnail ns109:Thumbnail600x600 .
}

ns60:Thumbnail200x200 {
    ns60:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns278:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:94 .

    ns278:CmsImage1 foaf:thumbnail ns60:Thumbnail200x200 .
}

ns132:Thumbnail600x600 {
    ns132:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns319:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:person1 .

    ns319:CmsImage1 foaf:thumbnail ns132:Thumbnail600x600 .
}

ns305:CmsImage0 {
    ns305:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:51 .
}

ns253:Thumbnail400x400 {
    ns253:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns138:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:72 .

    ns138:CmsImage0 foaf:thumbnail ns253:Thumbnail400x400 .
}

ns306:CmsImage0 {
    ns306:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:26 .
}

ns76:Thumbnail400x400 {
    ns76:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns354:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:42 .

    ns354:CmsImage1 foaf:thumbnail ns76:Thumbnail400x400 .
}

ns307:Thumbnail800x800 {
    ns183:CmsImage0 foaf:thumbnail ns307:Thumbnail800x800 .

    ns307:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns183:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:57 .
}

ns308:Thumbnail600x600 {
    ns255:CmsImage0 foaf:thumbnail ns308:Thumbnail600x600 .

    ns308:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns255:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:organization2 .
}

ns102:Thumbnail400x400 {
    ns102:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns234:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:104 .

    ns234:CmsImage1 foaf:thumbnail ns102:Thumbnail400x400 .
}

ns48:Thumbnail600x600 {
    ns48:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns377:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns116:work7 .

    ns377:CmsImage1 foaf:thumbnail ns48:Thumbnail600x600 .
}

ns309:CmsImage0 {
    ns309:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:person0 .
}

ns310:CmsImage0 {
    ns310:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:5 .
}

ns311:CmsImage0 {
    ns311:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:23 .
}

ns50:Thumbnail200x200 {
    ns50:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns124:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:37 .

    ns124:CmsImage0 foaf:thumbnail ns50:Thumbnail200x200 .
}

ns157:Thumbnail800x800 {
    ns157:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns380:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:freestandingwork9 .

    ns380:CmsImage0 foaf:thumbnail ns157:Thumbnail800x800 .
}

ns91:Thumbnail200x200 {
    ns91:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns174:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:40 .

    ns174:CmsImage1 foaf:thumbnail ns91:Thumbnail200x200 .
}

ns158:Thumbnail400x400 {
    ns158:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns360:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:70 .

    ns360:CmsImage0 foaf:thumbnail ns158:Thumbnail400x400 .
}

ns285:CmsImage1 {
    ns285:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns131:work2 .
}

_:N6b49344603bf4bdc9ecf11f662a6ce0f {
    _:N6b49344603bf4bdc9ecf11f662a6ce0f a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N4ff135455ee1493c9145d88689c3fcf5 ;
        dcterms:spatial _:Nbc1c25be09a34581ac9738a92e24f6d4 ;
        dcterms:title "CmsCollection0CmsWork0 closing" ;
        cms:work ns131:work0 .

    _:N4ff135455ee1493c9145d88689c3fcf5 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:Nbc1c25be09a34581ac9738a92e24f6d4 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns207:CmsImage1 {
    ns207:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:33 .
}

ns151:Thumbnail600x600 {
    ns151:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns346:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:80 .

    ns346:CmsImage0 foaf:thumbnail ns151:Thumbnail600x600 .
}

ns32:109 {
    ns32:109 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 9" ;
        skos:prefLabel "CmsConcept 109" .
}

ns189:Thumbnail400x400 {
    ns189:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns99:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:0 .

    ns99:CmsImage1 foaf:thumbnail ns189:Thumbnail400x400 .
}

ns312:Thumbnail800x800 {
    ns389:CmsImage0 foaf:thumbnail ns312:Thumbnail800x800 .

    ns312:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns389:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:2 .
}

ns173:Thumbnail600x600 {
    ns173:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns422:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:organization3 .

    ns422:CmsImage1 foaf:thumbnail ns173:Thumbnail600x600 .
}

ns273:Thumbnail200x200 {
    ns273:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns390:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:55 .

    ns390:CmsImage1 foaf:thumbnail ns273:Thumbnail200x200 .
}

ns313:Thumbnail800x800 {
    ns269:CmsImage1 foaf:thumbnail ns313:Thumbnail800x800 .

    ns313:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns269:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:15 .
}

ns309:CmsImage1 {
    ns309:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:person0 .
}

ns108:Thumbnail800x800 {
    ns108:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns350:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:48 .

    ns350:CmsImage0 foaf:thumbnail ns108:Thumbnail800x800 .
}

ns314:Thumbnail200x200 {
    ns360:CmsImage1 foaf:thumbnail ns314:Thumbnail200x200 .

    ns314:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns360:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:70 .
}

ns243:Thumbnail200x200 {
    ns243:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns435:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:86 .

    ns435:CmsImage0 foaf:thumbnail ns243:Thumbnail200x200 .
}

ns315:CmsImage0 {
    ns315:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:47 .
}

ns226:Thumbnail200x200 {
    ns226:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns387:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:66 .

    ns387:CmsImage1 foaf:thumbnail ns226:Thumbnail200x200 .
}

ns204:Thumbnail600x600 {
    ns204:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns113:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:108 .

    ns113:CmsImage0 foaf:thumbnail ns204:Thumbnail600x600 .
}

ns63:Thumbnail800x800 {
    ns63:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns150:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:4 .

    ns150:CmsImage1 foaf:thumbnail ns63:Thumbnail800x800 .
}

ns316:Thumbnail600x600 {
    ns316:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns2:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:27 .

    ns2:CmsImage1 foaf:thumbnail ns316:Thumbnail600x600 .
}

ns279:Thumbnail800x800 {
    ns279:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns14:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:34 .

    ns14:CmsImage0 foaf:thumbnail ns279:Thumbnail800x800 .
}

ns198:Thumbnail200x200 {
    ns198:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns354:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:42 .

    ns354:CmsImage0 foaf:thumbnail ns198:Thumbnail200x200 .
}

ns73:Thumbnail200x200 {
    ns73:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns443:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:36 .

    ns443:CmsImage1 foaf:thumbnail ns73:Thumbnail200x200 .
}

ns185:Thumbnail800x800 {
    ns185:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns349:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:50 .

    ns349:CmsImage0 foaf:thumbnail ns185:Thumbnail800x800 .
}

ns317:Thumbnail400x400 {
    ns441:CmsImage0 foaf:thumbnail ns317:Thumbnail400x400 .

    ns317:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns441:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:9 .
}

ns318:Thumbnail200x200 {
    ns318:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns309:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:person0 .

    ns309:CmsImage1 foaf:thumbnail ns318:Thumbnail200x200 .
}

ns319:CmsImage1 {
    ns319:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:person1 .
}

ns320:Thumbnail400x400 {
    ns333:CmsImage1 foaf:thumbnail ns320:Thumbnail400x400 .

    ns320:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns333:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:41 .
}

ns143:Thumbnail200x200 {
    ns143:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns442:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:106 .

    ns442:CmsImage1 foaf:thumbnail ns143:Thumbnail200x200 .
}

ns321:Thumbnail800x800 {
    ns351:CmsImage1 foaf:thumbnail ns321:Thumbnail800x800 .

    ns321:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns351:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:45 .
}

ns322:Thumbnail400x400 {
    ns322:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns287:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:74 .

    ns287:CmsImage1 foaf:thumbnail ns322:Thumbnail400x400 .
}

ns299:Thumbnail400x400 {
    ns299:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns445:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:28 .

    ns445:CmsImage1 foaf:thumbnail ns299:Thumbnail400x400 .
}

ns257:Thumbnail600x600 {
    ns257:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns425:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:29 .

    ns425:CmsImage1 foaf:thumbnail ns257:Thumbnail600x600 .
}

ns32:60 {
    ns32:60 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 0" ;
        skos:prefLabel "CmsConcept 60" .
}

ns109:Thumbnail800x800 {
    ns109:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns172:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:88 .

    ns172:CmsImage1 foaf:thumbnail ns109:Thumbnail800x800 .
}

ns137:Thumbnail600x600 {
    ns137:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns335:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:46 .

    ns335:CmsImage1 foaf:thumbnail ns137:Thumbnail600x600 .
}

ns323:Thumbnail600x600 {
    ns254:CmsImage0 foaf:thumbnail ns323:Thumbnail600x600 .

    ns323:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns254:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:99 .
}

ns27:Thumbnail800x800 {
    ns27:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns103:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:76 .

    ns103:CmsImage0 foaf:thumbnail ns27:Thumbnail800x800 .
}

ns220:CmsImage0 {
    ns220:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:59 .
}

ns232:Thumbnail200x200 {
    ns232:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:8 .

    ns385:CmsImage0 foaf:thumbnail ns232:Thumbnail200x200 .
}

ns149:Thumbnail400x400 {
    ns149:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns42:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:100 .

    ns42:CmsImage1 foaf:thumbnail ns149:Thumbnail400x400 .
}

ns32:35 {
    ns32:35 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 5" ;
        skos:prefLabel "CmsConcept 35" .
}

ns324:Thumbnail600x600 {
    ns396:CmsImage0 foaf:thumbnail ns324:Thumbnail600x600 .

    ns324:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Title image 0 rights holder" ;
        dcterms:title "Title image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:title .
}

ns307:Thumbnail200x200 {
    ns307:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns183:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:57 .

    ns183:CmsImage0 foaf:thumbnail ns307:Thumbnail200x200 .
}

ns325:Thumbnail800x800 {
    ns419:CmsImage1 foaf:thumbnail ns325:Thumbnail800x800 .

    ns325:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns419:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:78 .
}

ns326:CmsImage1 {
    ns326:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:105 .
}

ns327:Thumbnail600x600 {
    ns439:CmsImage0 foaf:thumbnail ns327:Thumbnail600x600 .

    ns327:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns439:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:43 .
}

ns229:Thumbnail200x200 {
    ns229:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns220:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:59 .

    ns220:CmsImage0 foaf:thumbnail ns229:Thumbnail200x200 .
}

ns328:Thumbnail200x200 {
    ns385:CmsImage1 foaf:thumbnail ns328:Thumbnail200x200 .

    ns328:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:8 .
}

ns329:Thumbnail800x800 {
    ns329:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns280:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns116:work4 .

    ns280:CmsImage0 foaf:thumbnail ns329:Thumbnail800x800 .
}

ns37:Thumbnail400x400 {
    ns37:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:25 .

    ns392:CmsImage0 foaf:thumbnail ns37:Thumbnail400x400 .
}

ns73:Thumbnail800x800 {
    ns73:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns443:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:36 .

    ns443:CmsImage1 foaf:thumbnail ns73:Thumbnail800x800 .
}

ns47:Thumbnail400x400 {
    ns47:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns224:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:freestandingwork8 .

    ns224:CmsImage0 foaf:thumbnail ns47:Thumbnail400x400 .
}

ns330:Thumbnail600x600 {
    ns437:CmsImage0 foaf:thumbnail ns330:Thumbnail600x600 .

    ns330:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns437:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:95 .
}

ns1:freestandingwork9Creation {
    ns1:freestandingwork9Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns1:organization1,
            ns1:organization2 ;
        dcterms:date _:N5ed0805f5c9c47cb9021dd9b7d1152ee ;
        dcterms:spatial ns1:freestandingwork9Location ;
        dcterms:title "FreestandingWork9 creation" ;
        cms:work ns1:freestandingwork9 .

    _:N5ed0805f5c9c47cb9021dd9b7d1152ee a cms:DateTimeDescription ;
        time:day "---23"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns283:Thumbnail400x400 {
    ns283:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns442:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:106 .

    ns442:CmsImage0 foaf:thumbnail ns283:Thumbnail400x400 .
}

ns262:Thumbnail400x400 {
    ns262:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns408:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:82 .

    ns408:CmsImage0 foaf:thumbnail ns262:Thumbnail400x400 .
}

ns311:CmsImage1 {
    ns311:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:23 .
}

ns206:Thumbnail800x800 {
    ns206:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns56:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:61 .

    ns56:CmsImage0 foaf:thumbnail ns206:Thumbnail800x800 .
}

ns298:Thumbnail400x400 {
    ns298:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns117:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:84 .

    ns117:CmsImage1 foaf:thumbnail ns298:Thumbnail400x400 .
}

ns213:Thumbnail800x800 {
    ns213:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns12:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:67 .

    ns12:CmsImage0 foaf:thumbnail ns213:Thumbnail800x800 .
}

ns41:Thumbnail800x800 {
    ns41:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns117:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:84 .

    ns117:CmsImage0 foaf:thumbnail ns41:Thumbnail800x800 .
}

ns132:Thumbnail800x800 {
    ns132:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns319:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:person1 .

    ns319:CmsImage1 foaf:thumbnail ns132:Thumbnail800x800 .
}

ns331:Thumbnail800x800 {
    ns112:CmsImage0 foaf:thumbnail ns331:Thumbnail800x800 .

    ns331:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns112:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:73 .
}

ns332:CmsImage1 {
    ns332:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:77 .
}

ns32:62 {
    ns32:62 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 2" ;
        skos:prefLabel "CmsConcept 62" .
}

ns9:Thumbnail600x600 {
    ns9:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns172:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:88 .

    ns172:CmsImage0 foaf:thumbnail ns9:Thumbnail600x600 .
}

ns333:CmsImage0 {
    ns333:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:41 .
}

ns152:Thumbnail200x200 {
    ns152:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns42:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:100 .

    ns42:CmsImage0 foaf:thumbnail ns152:Thumbnail200x200 .
}

ns32:32 {
    ns32:32 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 2" ;
        skos:prefLabel "CmsConcept 32" .
}

ns97:Thumbnail400x400 {
    ns97:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns326:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:105 .

    ns326:CmsImage1 foaf:thumbnail ns97:Thumbnail400x400 .
}

ns58:Thumbnail800x800 {
    ns58:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language image 1 rights holder" ;
        dcterms:title "Language image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns282:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:language .

    ns282:CmsImage1 foaf:thumbnail ns58:Thumbnail800x800 .
}

ns334:CmsImage1 {
    ns334:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:1 .
}

ns164:CmsImage1 {
    ns164:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:54 .
}

ns178:Thumbnail200x200 {
    ns178:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:12 .

    ns399:CmsImage0 foaf:thumbnail ns178:Thumbnail200x200 .
}

ns69:Thumbnail600x600 {
    ns69:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns402:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:71 .

    ns402:CmsImage1 foaf:thumbnail ns69:Thumbnail600x600 .
}

ns335:CmsImage0 {
    ns335:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:46 .
}

ns266:Thumbnail200x200 {
    ns266:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns99:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:0 .

    ns99:CmsImage0 foaf:thumbnail ns266:Thumbnail200x200 .
}

ns336:CmsImage0 {
    ns336:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:freestandingwork11 .
}

ns24:Thumbnail800x800 {
    ns24:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns439:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:43 .

    ns439:CmsImage1 foaf:thumbnail ns24:Thumbnail800x800 .
}

ns32:23 {
    ns32:23 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 3" ;
        skos:prefLabel "CmsConcept 23" .
}

ns32:53 {
    ns32:53 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 3" ;
        skos:prefLabel "CmsConcept 53" .
}

ns53:Thumbnail600x600 {
    ns53:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns401:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:18 .

    ns401:CmsImage1 foaf:thumbnail ns53:Thumbnail600x600 .
}

ns337:Thumbnail600x600 {
    ns446:CmsImage1 foaf:thumbnail ns337:Thumbnail600x600 .

    ns337:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns446:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:7 .
}

ns338:Thumbnail600x600 {
    ns292:CmsImage1 foaf:thumbnail ns338:Thumbnail600x600 .

    ns338:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns292:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:58 .
}

ns339:CmsImage1 {
    ns339:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:13 .
}

dcterms:medium {
    dcterms:medium a cms:Property ;
        rdfs:label "Medium" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns429:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> .
}

ns72:Thumbnail400x400 {
    ns72:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns150:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:4 .

    ns150:CmsImage0 foaf:thumbnail ns72:Thumbnail400x400 .
}

ns340:Thumbnail400x400 {
    ns340:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns247:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:21 .

    ns247:CmsImage0 foaf:thumbnail ns340:Thumbnail400x400 .
}

ns241:Thumbnail200x200 {
    ns241:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns443:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:36 .

    ns443:CmsImage0 foaf:thumbnail ns241:Thumbnail200x200 .
}

ns259:Thumbnail200x200 {
    ns259:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns20:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:44 .

    ns20:CmsImage0 foaf:thumbnail ns259:Thumbnail200x200 .
}

ns155:Thumbnail600x600 {
    ns155:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns288:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:organization4 .

    ns288:CmsImage0 foaf:thumbnail ns155:Thumbnail600x600 .
}

ns341:CmsImage0 {
    ns341:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:97 .
}

ns32:10 {
    ns32:10 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 0" ;
        skos:prefLabel "CmsConcept 10" .
}

ns342:Thumbnail600x600 {
    ns270:CmsImage1 foaf:thumbnail ns342:Thumbnail600x600 .

    ns342:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns270:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:14 .
}

ns329:Thumbnail200x200 {
    ns329:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns280:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns116:work4 .

    ns280:CmsImage0 foaf:thumbnail ns329:Thumbnail200x200 .
}

ns343:Thumbnail400x400 {
    ns343:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns175:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:38 .

    ns175:CmsImage1 foaf:thumbnail ns343:Thumbnail400x400 .
}

ns344:Thumbnail200x200 {
    ns344:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns195:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:69 .

    ns195:CmsImage0 foaf:thumbnail ns344:Thumbnail200x200 .
}

ns320:Thumbnail800x800 {
    ns320:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns333:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:41 .

    ns333:CmsImage1 foaf:thumbnail ns320:Thumbnail800x800 .
}

ns187:Thumbnail200x200 {
    ns187:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns164:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:54 .

    ns164:CmsImage0 foaf:thumbnail ns187:Thumbnail200x200 .
}

ns252:Thumbnail800x800 {
    ns252:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns413:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns131:work3 .

    ns413:CmsImage0 foaf:thumbnail ns252:Thumbnail800x800 .
}

ns345:CmsImage0 {
    ns345:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:75 .
}

ns346:CmsImage0 {
    ns346:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:80 .
}

ns303:Thumbnail600x600 {
    ns303:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent image 0 rights holder" ;
        dcterms:title "Extent image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns10:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:extent .

    ns10:CmsImage0 foaf:thumbnail ns303:Thumbnail600x600 .
}

ns347:CmsImage0 {
    ns347:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns131:work1 .
}

ns348:Thumbnail800x800 {
    ns392:CmsImage1 foaf:thumbnail ns348:Thumbnail800x800 .

    ns348:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:25 .
}

ns43:Thumbnail800x800 {
    ns43:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns347:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns131:work1 .

    ns347:CmsImage1 foaf:thumbnail ns43:Thumbnail800x800 .
}

ns122:Thumbnail600x600 {
    ns122:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:109 .

    ns403:CmsImage0 foaf:thumbnail ns122:Thumbnail600x600 .
}

ns349:CmsImage1 {
    ns349:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:50 .
}

ns350:CmsImage1 {
    ns350:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:48 .
}

ns331:Thumbnail200x200 {
    ns331:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns112:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:73 .

    ns112:CmsImage0 foaf:thumbnail ns331:Thumbnail200x200 .
}

ns22:Thumbnail400x400 {
    ns22:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns123:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:87 .

    ns123:CmsImage1 foaf:thumbnail ns22:Thumbnail400x400 .
}

ns13:Thumbnail600x600 {
    ns13:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns112:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:73 .

    ns112:CmsImage1 foaf:thumbnail ns13:Thumbnail600x600 .
}

ns187:Thumbnail600x600 {
    ns187:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns164:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:54 .

    ns164:CmsImage0 foaf:thumbnail ns187:Thumbnail600x600 .
}

ns351:CmsImage0 {
    ns351:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:45 .
}

ns84:Thumbnail200x200 {
    ns84:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns119:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:person4 .

    ns119:CmsImage0 foaf:thumbnail ns84:Thumbnail200x200 .
}

ns334:CmsImage0 {
    ns334:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:1 .
}

ns32:92 {
    ns32:92 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 2" ;
        skos:prefLabel "CmsConcept 92" .
}

ns186:Thumbnail200x200 {
    ns186:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns372:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:organization1 .

    ns372:CmsImage1 foaf:thumbnail ns186:Thumbnail200x200 .
}

ns352:Thumbnail200x200 {
    ns396:CmsImage1 foaf:thumbnail ns352:Thumbnail200x200 .

    ns352:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Title image 1 rights holder" ;
        dcterms:title "Title image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:title .
}

ns32:70 {
    ns32:70 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 0" ;
        skos:prefLabel "CmsConcept 70" .
}

ns324:Thumbnail800x800 {
    ns324:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Title image 0 rights holder" ;
        dcterms:title "Title image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:title .

    ns396:CmsImage0 foaf:thumbnail ns324:Thumbnail800x800 .
}

ns353:Thumbnail600x600 {
    ns353:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent image 1 rights holder" ;
        dcterms:title "Extent image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns10:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:extent .

    ns10:CmsImage1 foaf:thumbnail ns353:Thumbnail600x600 .
}

ns34:Thumbnail400x400 {
    ns34:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns389:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:2 .

    ns389:CmsImage1 foaf:thumbnail ns34:Thumbnail400x400 .
}

ns354:CmsImage0 {
    ns354:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:42 .
}

ns130:Thumbnail800x800 {
    ns130:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns96:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:65 .

    ns96:CmsImage0 foaf:thumbnail ns130:Thumbnail800x800 .
}

ns268:Thumbnail200x200 {
    ns268:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns413:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns131:work3 .

    ns413:CmsImage1 foaf:thumbnail ns268:Thumbnail200x200 .
}

ns31:Thumbnail400x400 {
    ns31:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns387:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:66 .

    ns387:CmsImage0 foaf:thumbnail ns31:Thumbnail400x400 .
}

ns328:Thumbnail600x600 {
    ns328:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:8 .

    ns385:CmsImage1 foaf:thumbnail ns328:Thumbnail600x600 .
}

ns32:64 {
    ns32:64 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 4" ;
        skos:prefLabel "CmsConcept 64" .
}

ns98:Thumbnail600x600 {
    ns98:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns145:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:85 .

    ns145:CmsImage0 foaf:thumbnail ns98:Thumbnail600x600 .
}

ns355:CmsImage1 {
    ns355:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:98 .
}

ns131:work1Creation {
    ns131:work1Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns1:organization3,
            ns1:organization4 ;
        dcterms:date _:N82be5c414a3f42628bd07adf9187b81d ;
        dcterms:spatial ns131:work1Location ;
        dcterms:title "CmsCollection0CmsWork1 creation" ;
        cms:work ns131:work1 .

    _:N82be5c414a3f42628bd07adf9187b81d a cms:DateTimeDescription ;
        time:day "---31"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns356:Thumbnail800x800 {
    ns174:CmsImage0 foaf:thumbnail ns356:Thumbnail800x800 .

    ns356:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns174:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:40 .
}

ns1:freestandingwork9Opening {
    ns1:freestandingwork9Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-23"^^xsd:date ;
        dcterms:spatial _:N56feb0d1baac490ca2164e441f697a04 ;
        dcterms:title "FreestandingWork9 opening" ;
        cms:work ns1:freestandingwork9 .

    _:N56feb0d1baac490ca2164e441f697a04 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns178:Thumbnail400x400 {
    ns178:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:12 .

    ns399:CmsImage0 foaf:thumbnail ns178:Thumbnail400x400 .
}

ns181:Thumbnail600x600 {
    ns181:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns435:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:86 .

    ns435:CmsImage1 foaf:thumbnail ns181:Thumbnail600x600 .
}

ns121:Thumbnail400x400 {
    ns121:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns425:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:29 .

    ns425:CmsImage0 foaf:thumbnail ns121:Thumbnail400x400 .
}

ns265:Thumbnail800x800 {
    ns265:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language image 0 rights holder" ;
        dcterms:title "Language image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns282:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:language .

    ns282:CmsImage0 foaf:thumbnail ns265:Thumbnail800x800 .
}

ns38:Thumbnail400x400 {
    ns38:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns128:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:90 .

    ns128:CmsImage1 foaf:thumbnail ns38:Thumbnail400x400 .
}

ns318:Thumbnail600x600 {
    ns318:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns309:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:person0 .

    ns309:CmsImage1 foaf:thumbnail ns318:Thumbnail600x600 .
}

ns312:Thumbnail600x600 {
    ns312:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns389:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:2 .

    ns389:CmsImage0 foaf:thumbnail ns312:Thumbnail600x600 .
}

ns318:Thumbnail800x800 {
    ns318:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns309:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:person0 .

    ns309:CmsImage1 foaf:thumbnail ns318:Thumbnail800x800 .
}

ns174:CmsImage0 {
    ns174:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:40 .
}

ns357:Thumbnail200x200 {
    ns428:CmsImage1 foaf:thumbnail ns357:Thumbnail200x200 .

    ns357:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns428:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:freestandingwork10 .
}

ns358:Thumbnail600x600 {
    ns420:CmsImage1 foaf:thumbnail ns358:Thumbnail600x600 .

    ns358:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns420:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:56 .
}

ns359:Thumbnail400x400 {
    ns414:CmsImage1 foaf:thumbnail ns359:Thumbnail400x400 .

    ns359:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns414:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:organization0 .
}

ns116:work4Location {
    ns116:work4Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns157:Thumbnail200x200 {
    ns157:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns380:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:freestandingwork9 .

    ns380:CmsImage0 foaf:thumbnail ns157:Thumbnail200x200 .
}

ns116:work6 {
    ns116:work6 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork6 alternative title 0",
            "CmsCollection1CmsWork6 alternative title 1" ;
        dcterms:contributor _:N8edd308531a9488889efbc8e5d1e1175,
            _:N90b70ed6cd2240b8804a77db5638270c ;
        dcterms:creator ns1:person3,
            ns1:person4 ;
        dcterms:description _:N003fc003a9bf457882d5e982badffad6 ;
        dcterms:extent ns32:16,
            ns32:17 ;
        dcterms:identifier "CmsCollection1CmsWork6Id0",
            "CmsCollection1CmsWork6Id1" ;
        dcterms:language ns32:26,
            ns32:27 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns32:46,
            ns32:47 ;
        dcterms:provenance "CmsCollection1CmsWork6 provenance 0",
            "CmsCollection1CmsWork6 provenance 1" ;
        dcterms:publisher ns32:56,
            ns32:57 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 rights holder" ;
        dcterms:source ns32:66,
            ns32:67 ;
        dcterms:spatial ns116:work6Location ;
        dcterms:subject ns32:86,
            ns32:87 ;
        dcterms:title "CmsCollection1CmsWork6" ;
        dcterms:type ns32:106,
            ns32:107 ;
        vra:culturalContext ns32:6,
            ns32:7 ;
        vra:material ns32:36,
            ns32:37 ;
        vra:technique ns32:96,
            ns32:97 ;
        cms:collection ns1:collection1 ;
        foaf:page <http://example.com/work/6> .

    _:N8edd308531a9488889efbc8e5d1e1175 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork6 contributor 0" .

    _:N90b70ed6cd2240b8804a77db5638270c a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork6 contributor 1" .

    _:N003fc003a9bf457882d5e982badffad6 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns74:Thumbnail400x400 {
    ns74:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns128:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:90 .

    ns128:CmsImage0 foaf:thumbnail ns74:Thumbnail400x400 .
}

ns330:Thumbnail800x800 {
    ns330:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns437:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:95 .

    ns437:CmsImage0 foaf:thumbnail ns330:Thumbnail800x800 .
}

ns218:Thumbnail400x400 {
    ns218:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns404:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:81 .

    ns404:CmsImage0 foaf:thumbnail ns218:Thumbnail400x400 .
}

ns59:Thumbnail400x400 {
    ns59:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns194:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:22 .

    ns194:CmsImage0 foaf:thumbnail ns59:Thumbnail400x400 .
}

ns59:Thumbnail800x800 {
    ns59:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns194:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:22 .

    ns194:CmsImage0 foaf:thumbnail ns59:Thumbnail800x800 .
}

ns161:Thumbnail600x600 {
    ns161:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns81:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:39 .

    ns81:CmsImage0 foaf:thumbnail ns161:Thumbnail600x600 .
}

ns229:Thumbnail800x800 {
    ns229:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns220:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:59 .

    ns220:CmsImage0 foaf:thumbnail ns229:Thumbnail800x800 .
}

ns32:71 {
    ns32:71 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 1" ;
        skos:prefLabel "CmsConcept 71" .
}

ns274:Thumbnail400x400 {
    ns274:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns220:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:59 .

    ns220:CmsImage1 foaf:thumbnail ns274:Thumbnail400x400 .
}

ns360:CmsImage1 {
    ns360:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:70 .
}

ns236:CmsImage1 {
    ns236:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns131:work0 .
}

ns245:Thumbnail600x600 {
    ns245:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns310:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:5 .

    ns310:CmsImage1 foaf:thumbnail ns245:Thumbnail600x600 .
}

ns361:Thumbnail400x400 {
    ns361:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns333:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:41 .

    ns333:CmsImage0 foaf:thumbnail ns361:Thumbnail400x400 .
}

ns354:CmsImage1 {
    ns354:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:42 .
}

ns32:49 {
    ns32:49 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 9" ;
        skos:prefLabel "CmsConcept 49" .
}

ns362:Thumbnail800x800 {
    ns362:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source image 1 rights holder" ;
        dcterms:title "Source image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns118:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:source .

    ns118:CmsImage1 foaf:thumbnail ns362:Thumbnail800x800 .
}

ns101:Thumbnail200x200 {
    ns101:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns431:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:103 .

    ns431:CmsImage0 foaf:thumbnail ns101:Thumbnail200x200 .
}

ns289:Thumbnail800x800 {
    ns289:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns319:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:person1 .

    ns319:CmsImage0 foaf:thumbnail ns289:Thumbnail800x800 .
}

ns200:Thumbnail800x800 {
    ns200:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns294:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:17 .

    ns294:CmsImage1 foaf:thumbnail ns200:Thumbnail800x800 .
}

ns59:Thumbnail200x200 {
    ns59:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns194:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:22 .

    ns194:CmsImage0 foaf:thumbnail ns59:Thumbnail200x200 .
}

ns134:Thumbnail800x800 {
    ns134:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns195:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:69 .

    ns195:CmsImage1 foaf:thumbnail ns134:Thumbnail800x800 .
}

ns338:Thumbnail400x400 {
    ns338:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns292:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:58 .

    ns292:CmsImage1 foaf:thumbnail ns338:Thumbnail400x400 .
}

ns363:Thumbnail600x600 {
    ns208:CmsImage0 foaf:thumbnail ns363:Thumbnail600x600 .

    ns363:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns208:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:16 .
}

ns199:Thumbnail800x800 {
    ns199:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns272:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:62 .

    ns272:CmsImage0 foaf:thumbnail ns199:Thumbnail800x800 .
}

ns225:Thumbnail200x200 {
    ns225:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns165:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:collection1 .

    ns165:CmsImage1 foaf:thumbnail ns225:Thumbnail200x200 .
}

ns226:Thumbnail800x800 {
    ns226:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns387:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:66 .

    ns387:CmsImage1 foaf:thumbnail ns226:Thumbnail800x800 .
}

ns200:Thumbnail600x600 {
    ns200:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns294:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:17 .

    ns294:CmsImage1 foaf:thumbnail ns200:Thumbnail600x600 .
}

ns364:Thumbnail800x800 {
    ns380:CmsImage1 foaf:thumbnail ns364:Thumbnail800x800 .

    ns364:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns380:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:freestandingwork9 .
}

ns336:CmsImage1 {
    ns336:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:freestandingwork11 .
}

ns181:Thumbnail400x400 {
    ns181:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns435:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:86 .

    ns435:CmsImage1 foaf:thumbnail ns181:Thumbnail400x400 .
}

ns275:Thumbnail800x800 {
    ns275:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns444:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:31 .

    ns444:CmsImage0 foaf:thumbnail ns275:Thumbnail800x800 .
}

ns74:Thumbnail800x800 {
    ns74:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns128:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:90 .

    ns128:CmsImage0 foaf:thumbnail ns74:Thumbnail800x800 .
}

ns365:CmsImage0 {
    ns365:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher image 0 rights holder" ;
        dcterms:title "Publisher image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:publisher .
}

ns32:55 {
    ns32:55 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 5" ;
        skos:prefLabel "CmsConcept 55" .
}

ns330:Thumbnail400x400 {
    ns330:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns437:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:95 .

    ns437:CmsImage0 foaf:thumbnail ns330:Thumbnail400x400 .
}

ns314:Thumbnail800x800 {
    ns314:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns360:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:70 .

    ns360:CmsImage1 foaf:thumbnail ns314:Thumbnail800x800 .
}

ns366:CmsImage1 {
    ns366:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:10 .
}

ns367:Thumbnail600x600 {
    ns138:CmsImage1 foaf:thumbnail ns367:Thumbnail600x600 .

    ns367:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns138:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:72 .
}

ns32:76 {
    ns32:76 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 6" ;
        skos:prefLabel "CmsConcept 76" .
}

ns307:Thumbnail400x400 {
    ns307:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns183:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:57 .

    ns183:CmsImage0 foaf:thumbnail ns307:Thumbnail400x400 .
}

ns202:Thumbnail200x200 {
    ns202:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns436:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:101 .

    ns436:CmsImage1 foaf:thumbnail ns202:Thumbnail200x200 .
}

ns368:Thumbnail400x400 {
    ns394:CmsImage1 foaf:thumbnail ns368:Thumbnail400x400 .

    ns368:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type image 1 rights holder" ;
        dcterms:title "Type image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns394:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:type .
}

ns104:Thumbnail200x200 {
    ns104:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns428:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:freestandingwork10 .

    ns428:CmsImage0 foaf:thumbnail ns104:Thumbnail200x200 .
}

ns369:Thumbnail800x800 {
    ns369:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns14:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:34 .

    ns14:CmsImage1 foaf:thumbnail ns369:Thumbnail800x800 .
}

ns188:Thumbnail800x800 {
    ns188:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns351:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:45 .

    ns351:CmsImage0 foaf:thumbnail ns188:Thumbnail800x800 .
}

ns322:Thumbnail800x800 {
    ns322:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns287:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:74 .

    ns287:CmsImage1 foaf:thumbnail ns322:Thumbnail800x800 .
}

ns370:Thumbnail800x800 {
    ns370:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns310:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:5 .

    ns310:CmsImage0 foaf:thumbnail ns370:Thumbnail800x800 .
}

_:N34cf0c202d92404fa6ae28fc3523eca4 {
    _:N34cf0c202d92404fa6ae28fc3523eca4 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:Ne2ed338ece0746b299aa002a60a93b29 ;
        dcterms:title "CmsCollection1CmsWork5 closing" ;
        cms:work ns116:work5 .

    _:Ne2ed338ece0746b299aa002a60a93b29 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns32:69 {
    ns32:69 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 9" ;
        skos:prefLabel "CmsConcept 69" .
}

ns371:Thumbnail200x200 {
    ns118:CmsImage0 foaf:thumbnail ns371:Thumbnail200x200 .

    ns371:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source image 0 rights holder" ;
        dcterms:title "Source image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns118:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:source .
}

ns237:Thumbnail200x200 {
    ns237:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns126:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:93 .

    ns126:CmsImage1 foaf:thumbnail ns237:Thumbnail200x200 .
}

ns100:Thumbnail400x400 {
    ns100:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium image 1 rights holder" ;
        dcterms:title "Medium image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns125:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:medium .

    ns125:CmsImage1 foaf:thumbnail ns100:Thumbnail400x400 .
}

ns156:Thumbnail400x400 {
    ns156:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns366:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:10 .

    ns366:CmsImage0 foaf:thumbnail ns156:Thumbnail400x400 .
}

ns211:Thumbnail800x800 {
    ns211:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns437:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:95 .

    ns437:CmsImage1 foaf:thumbnail ns211:Thumbnail800x800 .
}

ns369:Thumbnail200x200 {
    ns369:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns14:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:34 .

    ns14:CmsImage1 foaf:thumbnail ns369:Thumbnail200x200 .
}

ns1:collection0 {
    ns1:collection0 a cms:Collection ;
        dcterms:description _:N1a9a0d3100a74aeab4f725ecd264d326 ;
        dcterms:title "CmsCollection0" .

    _:N1a9a0d3100a74aeab4f725ecd264d326 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns337:Thumbnail800x800 {
    ns337:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns446:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:7 .

    ns446:CmsImage1 foaf:thumbnail ns337:Thumbnail800x800 .
}

ns259:Thumbnail600x600 {
    ns259:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns20:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:44 .

    ns20:CmsImage0 foaf:thumbnail ns259:Thumbnail600x600 .
}

ns370:Thumbnail400x400 {
    ns370:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns310:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:5 .

    ns310:CmsImage0 foaf:thumbnail ns370:Thumbnail400x400 .
}

ns364:Thumbnail200x200 {
    ns364:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns380:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:freestandingwork9 .

    ns380:CmsImage1 foaf:thumbnail ns364:Thumbnail200x200 .
}

ns259:Thumbnail400x400 {
    ns259:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns20:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:44 .

    ns20:CmsImage0 foaf:thumbnail ns259:Thumbnail400x400 .
}

ns253:Thumbnail600x600 {
    ns253:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns138:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:72 .

    ns138:CmsImage0 foaf:thumbnail ns253:Thumbnail600x600 .
}

ns100:Thumbnail600x600 {
    ns100:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium image 1 rights holder" ;
        dcterms:title "Medium image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns125:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:medium .

    ns125:CmsImage1 foaf:thumbnail ns100:Thumbnail600x600 .
}

ns372:CmsImage1 {
    ns372:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:organization1 .
}

ns357:Thumbnail600x600 {
    ns357:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns428:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:freestandingwork10 .

    ns428:CmsImage1 foaf:thumbnail ns357:Thumbnail600x600 .
}

ns52:Thumbnail400x400 {
    ns52:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type image 0 rights holder" ;
        dcterms:title "Type image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns394:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:type .

    ns394:CmsImage0 foaf:thumbnail ns52:Thumbnail400x400 .
}

ns1:person4 {
    ns1:person4 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            wd:Q7251 ;
        contact:sortName "4, CmsPerson" ;
        foaf:familyName "4" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 4" ;
        foaf:page ns1:person4page .
}

ns373:CmsImage0 {
    ns373:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:6 .
}

ns374:Thumbnail600x600 {
    ns374:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns19:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:102 .

    ns19:CmsImage1 foaf:thumbnail ns374:Thumbnail600x600 .
}

ns9:Thumbnail800x800 {
    ns9:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns172:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:88 .

    ns172:CmsImage0 foaf:thumbnail ns9:Thumbnail800x800 .
}

ns375:Thumbnail600x600 {
    ns383:CmsImage0 foaf:thumbnail ns375:Thumbnail600x600 .

    ns375:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns383:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:107 .
}

ns39:Thumbnail600x600 {
    ns39:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns421:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:30 .

    ns421:CmsImage1 foaf:thumbnail ns39:Thumbnail600x600 .
}

vra:material {
    vra:material a cms:Property ;
        rdfs:label "Material" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns429:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> .
}

ns376:Thumbnail800x800 {
    ns272:CmsImage1 foaf:thumbnail ns376:Thumbnail800x800 .

    ns376:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns272:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:62 .
}

ns41:Thumbnail200x200 {
    ns41:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns117:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:84 .

    ns117:CmsImage0 foaf:thumbnail ns41:Thumbnail200x200 .
}

ns60:Thumbnail400x400 {
    ns60:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns278:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:94 .

    ns278:CmsImage1 foaf:thumbnail ns60:Thumbnail400x400 .
}

ns361:Thumbnail200x200 {
    ns361:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns333:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:41 .

    ns333:CmsImage0 foaf:thumbnail ns361:Thumbnail200x200 .
}

ns75:Thumbnail800x800 {
    ns75:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject image 1 rights holder" ;
        dcterms:title "Subject image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns86:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:subject .

    ns86:CmsImage1 foaf:thumbnail ns75:Thumbnail800x800 .
}

ns168:Thumbnail400x400 {
    ns168:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns420:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:56 .

    ns420:CmsImage0 foaf:thumbnail ns168:Thumbnail400x400 .
}

ns377:CmsImage0 {
    ns377:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns116:work7 .
}

ns279:Thumbnail400x400 {
    ns279:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns14:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:34 .

    ns14:CmsImage0 foaf:thumbnail ns279:Thumbnail400x400 .
}

ns98:Thumbnail200x200 {
    ns98:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns145:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:85 .

    ns145:CmsImage0 foaf:thumbnail ns98:Thumbnail200x200 .
}

ns343:Thumbnail800x800 {
    ns343:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns175:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:38 .

    ns175:CmsImage1 foaf:thumbnail ns343:Thumbnail800x800 .
}

ns191:Thumbnail400x400 {
    ns191:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context image 1 rights holder" ;
        dcterms:title "Cultural context image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns251:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts vra:culturalContext .

    ns251:CmsImage1 foaf:thumbnail ns191:Thumbnail400x400 .
}

ns337:Thumbnail400x400 {
    ns337:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns446:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:7 .

    ns446:CmsImage1 foaf:thumbnail ns337:Thumbnail400x400 .
}

ns378:CmsImage1 {
    ns378:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:person2 .
}

ns4:Thumbnail600x600 {
    ns4:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns256:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns116:work5 .

    ns256:CmsImage1 foaf:thumbnail ns4:Thumbnail600x600 .
}

ns29:Thumbnail200x200 {
    ns29:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns423:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:68 .

    ns423:CmsImage0 foaf:thumbnail ns29:Thumbnail200x200 .
}

ns231:CmsImage1 {
    ns231:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns116:work6 .
}

ns379:Thumbnail800x800 {
    ns326:CmsImage0 foaf:thumbnail ns379:Thumbnail800x800 .

    ns379:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns326:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:105 .
}

ns114:Thumbnail200x200 {
    ns114:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns373:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:6 .

    ns373:CmsImage0 foaf:thumbnail ns114:Thumbnail200x200 .
}

ns50:Thumbnail400x400 {
    ns50:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns124:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:37 .

    ns124:CmsImage0 foaf:thumbnail ns50:Thumbnail400x400 .
}

ns380:CmsImage0 {
    ns380:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:freestandingwork9 .
}

ns252:Thumbnail400x400 {
    ns252:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns413:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns131:work3 .

    ns413:CmsImage0 foaf:thumbnail ns252:Thumbnail400x400 .
}

ns153:Thumbnail600x600 {
    ns153:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns207:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:33 .

    ns207:CmsImage1 foaf:thumbnail ns153:Thumbnail600x600 .
}

ns32:89 {
    ns32:89 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 9" ;
        skos:prefLabel "CmsConcept 89" .
}

ns368:Thumbnail800x800 {
    ns368:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type image 1 rights holder" ;
        dcterms:title "Type image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns394:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:type .

    ns394:CmsImage1 foaf:thumbnail ns368:Thumbnail800x800 .
}

ns85:Thumbnail800x800 {
    ns85:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns288:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:organization4 .

    ns288:CmsImage1 foaf:thumbnail ns85:Thumbnail800x800 .
}

ns196:Thumbnail600x600 {
    ns196:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns164:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:54 .

    ns164:CmsImage1 foaf:thumbnail ns196:Thumbnail600x600 .
}

ns147:Thumbnail400x400 {
    ns147:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns350:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:48 .

    ns350:CmsImage1 foaf:thumbnail ns147:Thumbnail400x400 .
}

ns381:Thumbnail600x600 {
    ns332:CmsImage0 foaf:thumbnail ns381:Thumbnail600x600 .

    ns381:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns332:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:77 .
}

ns147:Thumbnail800x800 {
    ns147:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns350:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:48 .

    ns350:CmsImage1 foaf:thumbnail ns147:Thumbnail800x800 .
}

ns382:Thumbnail400x400 {
    ns382:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns247:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:21 .

    ns247:CmsImage1 foaf:thumbnail ns382:Thumbnail400x400 .
}

ns383:CmsImage0 {
    ns383:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:107 .
}

ns47:Thumbnail600x600 {
    ns47:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns224:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:freestandingwork8 .

    ns224:CmsImage0 foaf:thumbnail ns47:Thumbnail600x600 .
}

dcterms:source {
    dcterms:source a cms:Property ;
        rdfs:label "Source" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns429:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> .
}

ns375:Thumbnail400x400 {
    ns375:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns383:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:107 .

    ns383:CmsImage0 foaf:thumbnail ns375:Thumbnail400x400 .
}

ns131:work0 {
    ns131:work0 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork0 alternative title 0",
            "CmsCollection0CmsWork0 alternative title 1" ;
        dcterms:contributor _:N10603eed89484d109fe3c37b330a5e6f,
            _:Nb989fb95c0fe4d8eb44e00e3d4b5aae2 ;
        dcterms:creator ns1:organization2,
            ns1:organization3 ;
        dcterms:description _:N4ff135455ee1493c9145d88689c3fcf5 ;
        dcterms:extent ns32:10,
            ns32:11 ;
        dcterms:identifier "CmsCollection0CmsWork0Id0",
            "CmsCollection0CmsWork0Id1" ;
        dcterms:language ns32:20,
            ns32:21 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns32:40,
            ns32:41 ;
        dcterms:provenance "CmsCollection0CmsWork0 provenance 0",
            "CmsCollection0CmsWork0 provenance 1" ;
        dcterms:publisher ns32:50,
            ns32:51 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 rights holder" ;
        dcterms:source ns32:60,
            ns32:61 ;
        dcterms:spatial ns131:work0Location ;
        dcterms:subject ns32:80,
            ns32:81 ;
        dcterms:title "CmsCollection0CmsWork0" ;
        dcterms:type ns32:100,
            ns32:101 ;
        vra:culturalContext ns32:0,
            ns32:1 ;
        vra:material ns32:30,
            ns32:31 ;
        vra:technique ns32:90,
            ns32:91 ;
        cms:collection ns1:collection0 ;
        foaf:page <http://example.com/work/0> .

    _:N10603eed89484d109fe3c37b330a5e6f a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork0 contributor 1" .

    _:Nb989fb95c0fe4d8eb44e00e3d4b5aae2 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork0 contributor 0" .

    _:N4ff135455ee1493c9145d88689c3fcf5 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns32:91 {
    ns32:91 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 1" ;
        skos:prefLabel "CmsConcept 91" .
}

ns349:CmsImage0 {
    ns349:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:50 .
}

ns63:Thumbnail400x400 {
    ns63:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns150:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:4 .

    ns150:CmsImage1 foaf:thumbnail ns63:Thumbnail400x400 .
}

ns241:Thumbnail600x600 {
    ns241:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns443:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:36 .

    ns443:CmsImage0 foaf:thumbnail ns241:Thumbnail600x600 .
}

ns264:Thumbnail400x400 {
    ns264:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns165:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:collection1 .

    ns165:CmsImage0 foaf:thumbnail ns264:Thumbnail400x400 .
}

ns32:102 {
    ns32:102 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 2" ;
        skos:prefLabel "CmsConcept 102" .
}

ns343:Thumbnail200x200 {
    ns343:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns175:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:38 .

    ns175:CmsImage1 foaf:thumbnail ns343:Thumbnail200x200 .
}

ns21:Thumbnail200x200 {
    ns21:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial image 0 rights holder" ;
        dcterms:title "Spatial image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns434:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:spatial .

    ns434:CmsImage0 foaf:thumbnail ns21:Thumbnail200x200 .
}

ns255:CmsImage0 {
    ns255:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:organization2 .
}

ns384:Thumbnail200x200 {
    ns384:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 1 rights holder" ;
        dcterms:title "Synthetic data properties image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns120:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns429:property_group .

    ns120:CmsImage1 foaf:thumbnail ns384:Thumbnail200x200 .
}

ns222:Thumbnail400x400 {
    ns222:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns110:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:63 .

    ns110:CmsImage1 foaf:thumbnail ns222:Thumbnail400x400 .
}

ns274:Thumbnail600x600 {
    ns274:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns220:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:59 .

    ns220:CmsImage1 foaf:thumbnail ns274:Thumbnail600x600 .
}

ns72:Thumbnail600x600 {
    ns72:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns150:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:4 .

    ns150:CmsImage0 foaf:thumbnail ns72:Thumbnail600x600 .
}

ns205:Thumbnail400x400 {
    ns205:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns67:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:11 .

    ns67:CmsImage0 foaf:thumbnail ns205:Thumbnail400x400 .
}

ns170:Thumbnail200x200 {
    ns170:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns423:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:68 .

    ns423:CmsImage1 foaf:thumbnail ns170:Thumbnail200x200 .
}

ns244:Thumbnail400x400 {
    ns244:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns295:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:79 .

    ns295:CmsImage0 foaf:thumbnail ns244:Thumbnail400x400 .
}

ns385:CmsImage0 {
    ns385:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:8 .
}

ns37:Thumbnail200x200 {
    ns37:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:25 .

    ns392:CmsImage0 foaf:thumbnail ns37:Thumbnail200x200 .
}

ns61:Thumbnail400x400 {
    ns61:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns68:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:64 .

    ns68:CmsImage0 foaf:thumbnail ns61:Thumbnail400x400 .
}

ns276:Thumbnail400x400 {
    ns276:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns236:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns131:work0 .

    ns236:CmsImage1 foaf:thumbnail ns276:Thumbnail400x400 .
}

ns32:108 {
    ns32:108 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 8" ;
        skos:prefLabel "CmsConcept 108" .
}

ns25:Thumbnail400x400 {
    ns25:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns56:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:61 .

    ns56:CmsImage1 foaf:thumbnail ns25:Thumbnail400x400 .
}

ns32:36 {
    ns32:36 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 6" ;
        skos:prefLabel "CmsConcept 36" .
}

ns386:Thumbnail800x800 {
    ns386:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns285:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns131:work2 .

    ns285:CmsImage1 foaf:thumbnail ns386:Thumbnail800x800 .
}

ns17:Thumbnail600x600 {
    ns17:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns341:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:97 .

    ns341:CmsImage0 foaf:thumbnail ns17:Thumbnail600x600 .
}

ns374:Thumbnail200x200 {
    ns374:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns19:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:102 .

    ns19:CmsImage1 foaf:thumbnail ns374:Thumbnail200x200 .
}

ns191:Thumbnail600x600 {
    ns191:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context image 1 rights holder" ;
        dcterms:title "Cultural context image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns251:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts vra:culturalContext .

    ns251:CmsImage1 foaf:thumbnail ns191:Thumbnail600x600 .
}

ns329:Thumbnail600x600 {
    ns329:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns280:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns116:work4 .

    ns280:CmsImage0 foaf:thumbnail ns329:Thumbnail600x600 .
}

ns23:Thumbnail400x400 {
    ns23:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns145:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:85 .

    ns145:CmsImage1 foaf:thumbnail ns23:Thumbnail400x400 .
}

ns155:Thumbnail200x200 {
    ns155:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns288:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:organization4 .

    ns288:CmsImage0 foaf:thumbnail ns155:Thumbnail200x200 .
}

ns348:Thumbnail600x600 {
    ns348:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:25 .

    ns392:CmsImage1 foaf:thumbnail ns348:Thumbnail600x600 .
}

ns18:Thumbnail600x600 {
    ns18:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns256:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns116:work5 .

    ns256:CmsImage0 foaf:thumbnail ns18:Thumbnail600x600 .
}

ns134:Thumbnail600x600 {
    ns134:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns195:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:69 .

    ns195:CmsImage1 foaf:thumbnail ns134:Thumbnail600x600 .
}

ns342:Thumbnail800x800 {
    ns342:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns270:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:14 .

    ns270:CmsImage1 foaf:thumbnail ns342:Thumbnail800x800 .
}

ns226:Thumbnail600x600 {
    ns226:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns387:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:66 .

    ns387:CmsImage1 foaf:thumbnail ns226:Thumbnail600x600 .
}

ns1:freestandingwork8Creation {
    ns1:freestandingwork8Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns1:organization0,
            ns1:organization1 ;
        dcterms:date _:N8b82d19bca64455d803857a1a2359336 ;
        dcterms:description _:Na9bc19eebb7540c8a2653757af084bdb ;
        dcterms:spatial ns1:freestandingwork8Location ;
        dcterms:title "FreestandingWork8 creation" ;
        cms:work ns1:freestandingwork8 .

    _:N8b82d19bca64455d803857a1a2359336 a cms:DateTimeDescription ;
        time:day "---24"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:Na9bc19eebb7540c8a2653757af084bdb a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns118:CmsImage0 {
    ns118:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source image 0 rights holder" ;
        dcterms:title "Source image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:source .
}

ns338:Thumbnail200x200 {
    ns338:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns292:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:58 .

    ns292:CmsImage1 foaf:thumbnail ns338:Thumbnail200x200 .
}

ns290:CmsImage1 {
    ns290:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:person3 .
}

ns252:Thumbnail600x600 {
    ns252:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns413:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns131:work3 .

    ns413:CmsImage0 foaf:thumbnail ns252:Thumbnail600x600 .
}

ns387:CmsImage1 {
    ns387:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:66 .
}

ns304:Thumbnail200x200 {
    ns304:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns207:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:33 .

    ns207:CmsImage0 foaf:thumbnail ns304:Thumbnail200x200 .
}

ns160:Thumbnail800x800 {
    ns160:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns129:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:91 .

    ns129:CmsImage0 foaf:thumbnail ns160:Thumbnail800x800 .
}

ns116:work6Creation {
    ns116:work6Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns1:person3,
            ns1:person4 ;
        dcterms:date _:N7f83cb733ee24091a98f4de5e4f3e771 ;
        dcterms:description _:N003fc003a9bf457882d5e982badffad6 ;
        dcterms:spatial ns116:work6Location ;
        dcterms:title "CmsCollection1CmsWork6 creation" ;
        cms:work ns116:work6 .

    _:N7f83cb733ee24091a98f4de5e4f3e771 a cms:DateTimeDescription ;
        time:day "---26"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:N003fc003a9bf457882d5e982badffad6 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns388:Thumbnail600x600 {
    ns239:CmsImage1 foaf:thumbnail ns388:Thumbnail600x600 .

    ns388:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns239:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:83 .
}

ns209:Thumbnail200x200 {
    ns209:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns20:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:44 .

    ns20:CmsImage1 foaf:thumbnail ns209:Thumbnail200x200 .
}

ns389:CmsImage0 {
    ns389:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:2 .
}

ns246:Thumbnail400x400 {
    ns246:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Description image 0 rights holder" ;
        dcterms:title "Description image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns393:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:description .

    ns393:CmsImage0 foaf:thumbnail ns246:Thumbnail400x400 .
}

ns390:CmsImage1 {
    ns390:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:55 .
}

ns391:Thumbnail800x800 {
    ns391:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns238:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:35 .

    ns238:CmsImage1 foaf:thumbnail ns391:Thumbnail800x800 .
}

ns272:CmsImage1 {
    ns272:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:62 .
}

ns392:CmsImage1 {
    ns392:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:25 .
}

ns393:CmsImage1 {
    ns393:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Description image 1 rights holder" ;
        dcterms:title "Description image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:description .
}

ns108:Thumbnail400x400 {
    ns108:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns350:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:48 .

    ns350:CmsImage0 foaf:thumbnail ns108:Thumbnail400x400 .
}

ns359:Thumbnail600x600 {
    ns359:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns414:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:organization0 .

    ns414:CmsImage1 foaf:thumbnail ns359:Thumbnail600x600 .
}

ns265:Thumbnail600x600 {
    ns265:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language image 0 rights holder" ;
        dcterms:title "Language image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns282:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:language .

    ns282:CmsImage0 foaf:thumbnail ns265:Thumbnail600x600 .
}

ns394:CmsImage1 {
    ns394:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type image 1 rights holder" ;
        dcterms:title "Type image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:type .
}

ns87:Thumbnail200x200 {
    ns87:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns422:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:organization3 .

    ns422:CmsImage0 foaf:thumbnail ns87:Thumbnail200x200 .
}

ns395:Thumbnail800x800 {
    ns395:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns221:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:20 .

    ns221:CmsImage1 foaf:thumbnail ns395:Thumbnail800x800 .
}

ns32:13 {
    ns32:13 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 3" ;
        skos:prefLabel "CmsConcept 13" .
}

ns396:CmsImage0 {
    ns396:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Title image 0 rights holder" ;
        dcterms:title "Title image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:title .
}

ns366:CmsImage0 {
    ns366:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:10 .
}

ns373:CmsImage1 {
    ns373:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:6 .
}

ns137:Thumbnail800x800 {
    ns137:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns335:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:46 .

    ns335:CmsImage1 foaf:thumbnail ns137:Thumbnail800x800 .
}

ns1:freestandingwork8Location {
    ns1:freestandingwork8Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns227:Thumbnail600x600 {
    ns227:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns297:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:52 .

    ns297:CmsImage0 foaf:thumbnail ns227:Thumbnail600x600 .
}

ns148:Thumbnail200x200 {
    ns148:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns336:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:freestandingwork11 .

    ns336:CmsImage1 foaf:thumbnail ns148:Thumbnail200x200 .
}

ns397:Thumbnail600x600 {
    ns397:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns355:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:98 .

    ns355:CmsImage1 foaf:thumbnail ns397:Thumbnail600x600 .
}

ns398:Thumbnail600x600 {
    ns125:CmsImage0 foaf:thumbnail ns398:Thumbnail600x600 .

    ns398:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium image 0 rights holder" ;
        dcterms:title "Medium image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns125:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:medium .
}

ns242:Thumbnail800x800 {
    ns242:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns254:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:99 .

    ns254:CmsImage1 foaf:thumbnail ns242:Thumbnail800x800 .
}

ns1:freestandingwork11Location {
    ns1:freestandingwork11Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns24:Thumbnail400x400 {
    ns24:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns439:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:43 .

    ns439:CmsImage1 foaf:thumbnail ns24:Thumbnail400x400 .
}

ns180:Thumbnail200x200 {
    ns180:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns2:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:27 .

    ns2:CmsImage0 foaf:thumbnail ns180:Thumbnail200x200 .
}

ns84:Thumbnail400x400 {
    ns84:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns119:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:person4 .

    ns119:CmsImage0 foaf:thumbnail ns84:Thumbnail400x400 .
}

ns276:Thumbnail600x600 {
    ns276:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns236:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns131:work0 .

    ns236:CmsImage1 foaf:thumbnail ns276:Thumbnail600x600 .
}

ns182:CmsImage0 {
    ns182:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:19 .
}

ns386:Thumbnail600x600 {
    ns386:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns285:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns131:work2 .

    ns285:CmsImage1 foaf:thumbnail ns386:Thumbnail600x600 .
}

ns17:Thumbnail400x400 {
    ns17:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns341:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:97 .

    ns341:CmsImage0 foaf:thumbnail ns17:Thumbnail400x400 .
}

ns314:Thumbnail400x400 {
    ns314:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns360:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:70 .

    ns360:CmsImage1 foaf:thumbnail ns314:Thumbnail400x400 .
}

ns34:Thumbnail600x600 {
    ns34:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns389:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:2 .

    ns389:CmsImage1 foaf:thumbnail ns34:Thumbnail600x600 .
}

ns186:Thumbnail800x800 {
    ns186:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns372:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:organization1 .

    ns372:CmsImage1 foaf:thumbnail ns186:Thumbnail800x800 .
}

ns313:Thumbnail600x600 {
    ns313:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns269:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:15 .

    ns269:CmsImage1 foaf:thumbnail ns313:Thumbnail600x600 .
}

ns21:Thumbnail600x600 {
    ns21:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial image 0 rights holder" ;
        dcterms:title "Spatial image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns434:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:spatial .

    ns434:CmsImage0 foaf:thumbnail ns21:Thumbnail600x600 .
}

ns340:Thumbnail600x600 {
    ns340:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns247:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:21 .

    ns247:CmsImage0 foaf:thumbnail ns340:Thumbnail600x600 .
}

ns65:Thumbnail800x800 {
    ns65:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns349:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:50 .

    ns349:CmsImage1 foaf:thumbnail ns65:Thumbnail800x800 .
}

ns399:CmsImage1 {
    ns399:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:12 .
}

ns167:Thumbnail400x400 {
    ns167:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns336:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:freestandingwork11 .

    ns336:CmsImage0 foaf:thumbnail ns167:Thumbnail400x400 .
}

ns32:107 {
    ns32:107 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 7" ;
        skos:prefLabel "CmsConcept 107" .
}

ns400:Thumbnail800x800 {
    ns238:CmsImage0 foaf:thumbnail ns400:Thumbnail800x800 .

    ns400:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns238:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:35 .
}

ns401:CmsImage1 {
    ns401:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:18 .
}

ns158:Thumbnail600x600 {
    ns158:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns360:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:70 .

    ns360:CmsImage0 foaf:thumbnail ns158:Thumbnail600x600 .
}

ns402:CmsImage0 {
    ns402:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:71 .
}

ns305:CmsImage1 {
    ns305:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:51 .
}

ns216:Thumbnail200x200 {
    ns216:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher image 1 rights holder" ;
        dcterms:title "Publisher image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:publisher .

    ns365:CmsImage1 foaf:thumbnail ns216:Thumbnail200x200 .
}

ns219:CmsImage1 {
    ns219:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:92 .
}

ns192:Thumbnail800x800 {
    ns192:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Description image 1 rights holder" ;
        dcterms:title "Description image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns393:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:description .

    ns393:CmsImage1 foaf:thumbnail ns192:Thumbnail800x800 .
}

ns368:Thumbnail600x600 {
    ns368:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type image 1 rights holder" ;
        dcterms:title "Type image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns394:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:type .

    ns394:CmsImage1 foaf:thumbnail ns368:Thumbnail600x600 .
}

dcterms:type {
    dcterms:type a cms:Property ;
        rdfs:label "Type" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns429:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> .
}

ns180:Thumbnail600x600 {
    ns180:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns2:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:27 .

    ns2:CmsImage0 foaf:thumbnail ns180:Thumbnail600x600 .
}

ns352:Thumbnail600x600 {
    ns352:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Title image 1 rights holder" ;
        dcterms:title "Title image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:title .

    ns396:CmsImage1 foaf:thumbnail ns352:Thumbnail600x600 .
}

ns403:CmsImage1 {
    ns403:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:109 .
}

ns404:CmsImage0 {
    ns404:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:81 .
}

ns75:Thumbnail400x400 {
    ns75:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject image 1 rights holder" ;
        dcterms:title "Subject image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns86:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:subject .

    ns86:CmsImage1 foaf:thumbnail ns75:Thumbnail400x400 .
}

ns163:Thumbnail600x600 {
    ns163:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns419:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:78 .

    ns419:CmsImage0 foaf:thumbnail ns163:Thumbnail600x600 .
}

ns387:CmsImage0 {
    ns387:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:66 .
}

ns328:Thumbnail800x800 {
    ns328:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:8 .

    ns385:CmsImage1 foaf:thumbnail ns328:Thumbnail800x800 .
}

ns397:Thumbnail800x800 {
    ns397:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns355:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:98 .

    ns355:CmsImage1 foaf:thumbnail ns397:Thumbnail800x800 .
}

ns65:Thumbnail600x600 {
    ns65:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns349:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:50 .

    ns349:CmsImage1 foaf:thumbnail ns65:Thumbnail600x600 .
}

ns405:Thumbnail200x200 {
    ns405:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns129:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:91 .

    ns129:CmsImage1 foaf:thumbnail ns405:Thumbnail200x200 .
}

ns391:Thumbnail400x400 {
    ns391:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns238:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:35 .

    ns238:CmsImage1 foaf:thumbnail ns391:Thumbnail400x400 .
}

ns131:work1Opening {
    ns131:work1Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-31"^^xsd:date ;
        dcterms:spatial _:Nddcb2a0e20f0419db5c787193f716f15 ;
        dcterms:title "CmsCollection0CmsWork1 opening" ;
        cms:work ns131:work1 .

    _:Nddcb2a0e20f0419db5c787193f716f15 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns406:Thumbnail400x400 {
    ns406:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns113:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:108 .

    ns113:CmsImage1 foaf:thumbnail ns406:Thumbnail400x400 .
}

ns407:Thumbnail400x400 {
    ns407:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns119:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:person4 .

    ns119:CmsImage1 foaf:thumbnail ns407:Thumbnail400x400 .
}

ns344:Thumbnail800x800 {
    ns344:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns195:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:69 .

    ns195:CmsImage0 foaf:thumbnail ns344:Thumbnail800x800 .
}

_:N34499101c1eb49d9983028ba8db0a96d {
    _:N34499101c1eb49d9983028ba8db0a96d a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:Naccfccea0dc84e56bbc0c38178ce9221 ;
        dcterms:title "CmsCollection1CmsWork7 closing" ;
        cms:work ns116:work7 .

    _:Naccfccea0dc84e56bbc0c38178ce9221 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns249:Thumbnail400x400 {
    ns249:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns19:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:102 .

    ns19:CmsImage0 foaf:thumbnail ns249:Thumbnail400x400 .
}

ns27:Thumbnail600x600 {
    ns27:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns103:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:76 .

    ns103:CmsImage0 foaf:thumbnail ns27:Thumbnail600x600 .
}

ns397:Thumbnail200x200 {
    ns397:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns355:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:98 .

    ns355:CmsImage1 foaf:thumbnail ns397:Thumbnail200x200 .
}

ns173:Thumbnail200x200 {
    ns173:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns422:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:organization3 .

    ns422:CmsImage1 foaf:thumbnail ns173:Thumbnail200x200 .
}

ns194:CmsImage0 {
    ns194:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:22 .
}

ns271:Thumbnail200x200 {
    ns271:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns345:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:75 .

    ns345:CmsImage0 foaf:thumbnail ns271:Thumbnail200x200 .
}

ns223:Thumbnail800x800 {
    ns223:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial image 1 rights holder" ;
        dcterms:title "Spatial image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns434:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:spatial .

    ns434:CmsImage1 foaf:thumbnail ns223:Thumbnail800x800 .
}

ns386:Thumbnail200x200 {
    ns386:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns285:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns131:work2 .

    ns285:CmsImage1 foaf:thumbnail ns386:Thumbnail200x200 .
}

ns408:CmsImage0 {
    ns408:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:82 .
}

ns70:Thumbnail200x200 {
    ns70:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns11:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:96 .

    ns11:CmsImage0 foaf:thumbnail ns70:Thumbnail200x200 .
}

ns298:Thumbnail200x200 {
    ns298:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns117:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:84 .

    ns117:CmsImage1 foaf:thumbnail ns298:Thumbnail200x200 .
}

ns192:Thumbnail600x600 {
    ns192:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Description image 1 rights holder" ;
        dcterms:title "Description image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns393:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:description .

    ns393:CmsImage1 foaf:thumbnail ns192:Thumbnail600x600 .
}

ns379:Thumbnail200x200 {
    ns379:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns326:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:105 .

    ns326:CmsImage0 foaf:thumbnail ns379:Thumbnail200x200 .
}

ns409:CmsImage1 {
    ns409:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique image 1 rights holder" ;
        dcterms:title "Technique image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts vra:technique .
}

ns32:19 {
    ns32:19 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 9" ;
        skos:prefLabel "CmsConcept 19" .
}

ns210:Thumbnail200x200 {
    ns210:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns334:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:1 .

    ns334:CmsImage1 foaf:thumbnail ns210:Thumbnail200x200 .
}

ns410:Thumbnail400x400 {
    ns339:CmsImage0 foaf:thumbnail ns410:Thumbnail400x400 .

    ns410:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns339:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:13 .
}

ns260:Thumbnail400x400 {
    ns260:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns228:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:32 .

    ns228:CmsImage1 foaf:thumbnail ns260:Thumbnail400x400 .
}

ns340:Thumbnail800x800 {
    ns340:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns247:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:21 .

    ns247:CmsImage0 foaf:thumbnail ns340:Thumbnail800x800 .
}

ns308:Thumbnail800x800 {
    ns308:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns255:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:organization2 .

    ns255:CmsImage0 foaf:thumbnail ns308:Thumbnail800x800 .
}

ns374:Thumbnail800x800 {
    ns374:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns19:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:102 .

    ns19:CmsImage1 foaf:thumbnail ns374:Thumbnail800x800 .
}

_:N4bda910410e3424091b5213541674b4f {
    _:N4bda910410e3424091b5213541674b4f a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:Nddcb2a0e20f0419db5c787193f716f15 ;
        dcterms:title "CmsCollection0CmsWork1 closing" ;
        cms:work ns131:work1 .

    _:Nddcb2a0e20f0419db5c787193f716f15 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns381:Thumbnail200x200 {
    ns381:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns332:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:77 .

    ns332:CmsImage0 foaf:thumbnail ns381:Thumbnail200x200 .
}

ns1:freestandingwork10Location {
    ns1:freestandingwork10Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns22:Thumbnail800x800 {
    ns22:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns123:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:87 .

    ns123:CmsImage1 foaf:thumbnail ns22:Thumbnail800x800 .
}

ns19:CmsImage0 {
    ns19:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:102 .
}

ns214:Thumbnail400x400 {
    ns214:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns182:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:19 .

    ns182:CmsImage1 foaf:thumbnail ns214:Thumbnail400x400 .
}

ns142:Thumbnail600x600 {
    ns142:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject image 0 rights holder" ;
        dcterms:title "Subject image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns86:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:subject .

    ns86:CmsImage0 foaf:thumbnail ns142:Thumbnail600x600 .
}

ns227:Thumbnail800x800 {
    ns227:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns297:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:52 .

    ns297:CmsImage0 foaf:thumbnail ns227:Thumbnail800x800 .
}

ns35:Thumbnail600x600 {
    ns35:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns234:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:104 .

    ns234:CmsImage0 foaf:thumbnail ns35:Thumbnail600x600 .
}

ns411:Thumbnail800x800 {
    ns411:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:109 .

    ns403:CmsImage1 foaf:thumbnail ns411:Thumbnail800x800 .
}

ns364:Thumbnail400x400 {
    ns364:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns380:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:freestandingwork9 .

    ns380:CmsImage1 foaf:thumbnail ns364:Thumbnail400x400 .
}

ns105:Thumbnail600x600 {
    ns105:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns444:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:31 .

    ns444:CmsImage1 foaf:thumbnail ns105:Thumbnail600x600 .
}

ns95:Thumbnail400x400 {
    ns95:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns345:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:75 .

    ns345:CmsImage1 foaf:thumbnail ns95:Thumbnail400x400 .
}

ns32:17 {
    ns32:17 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 7" ;
        skos:prefLabel "CmsConcept 17" .
}

ns32:75 {
    ns32:75 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 5" ;
        skos:prefLabel "CmsConcept 75" .
}

ns362:Thumbnail400x400 {
    ns362:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source image 1 rights holder" ;
        dcterms:title "Source image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns118:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:source .

    ns118:CmsImage1 foaf:thumbnail ns362:Thumbnail400x400 .
}

ns163:Thumbnail800x800 {
    ns163:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns419:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:78 .

    ns419:CmsImage0 foaf:thumbnail ns163:Thumbnail800x800 .
}

ns327:Thumbnail400x400 {
    ns327:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns439:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:43 .

    ns439:CmsImage0 foaf:thumbnail ns327:Thumbnail400x400 .
}

ns149:Thumbnail800x800 {
    ns149:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns42:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:100 .

    ns42:CmsImage1 foaf:thumbnail ns149:Thumbnail800x800 .
}

ns277:Thumbnail200x200 {
    ns277:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns296:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:24 .

    ns296:CmsImage1 foaf:thumbnail ns277:Thumbnail200x200 .
}

ns196:Thumbnail400x400 {
    ns196:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns164:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:54 .

    ns164:CmsImage1 foaf:thumbnail ns196:Thumbnail400x400 .
}

ns135:Thumbnail800x800 {
    ns135:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns446:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:7 .

    ns446:CmsImage0 foaf:thumbnail ns135:Thumbnail800x800 .
}

ns82:Thumbnail800x800 {
    ns82:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns123:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:87 .

    ns123:CmsImage0 foaf:thumbnail ns82:Thumbnail800x800 .
}

_:Nc57f3dc0b8d441ef94f914bccdcdcc3c {
    _:Nc57f3dc0b8d441ef94f914bccdcdcc3c a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:Na9a68ea311bf49188991c470f38eddf0 ;
        dcterms:title "FreestandingWork11 closing" ;
        cms:work ns1:freestandingwork11 .

    _:Na9a68ea311bf49188991c470f38eddf0 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns237:Thumbnail400x400 {
    ns237:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns126:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:93 .

    ns126:CmsImage1 foaf:thumbnail ns237:Thumbnail400x400 .
}

ns137:Thumbnail400x400 {
    ns137:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns335:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:46 .

    ns335:CmsImage1 foaf:thumbnail ns137:Thumbnail400x400 .
}

ns8:Thumbnail800x800 {
    ns8:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 0 rights holder" ;
        dcterms:title "Synthetic data properties image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns120:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns429:property_group .

    ns120:CmsImage0 foaf:thumbnail ns8:Thumbnail800x800 .
}

ns232:Thumbnail600x600 {
    ns232:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:8 .

    ns385:CmsImage0 foaf:thumbnail ns232:Thumbnail600x600 .
}

ns185:Thumbnail600x600 {
    ns185:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns349:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:50 .

    ns349:CmsImage0 foaf:thumbnail ns185:Thumbnail600x600 .
}

ns256:CmsImage1 {
    ns256:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns116:work5 .
}

ns57:Thumbnail200x200 {
    ns57:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns221:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:20 .

    ns221:CmsImage0 foaf:thumbnail ns57:Thumbnail200x200 .
}

ns412:Thumbnail400x400 {
    ns412:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns231:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns116:work6 .

    ns231:CmsImage0 foaf:thumbnail ns412:Thumbnail400x400 .
}

ns376:Thumbnail200x200 {
    ns376:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns272:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:62 .

    ns272:CmsImage1 foaf:thumbnail ns376:Thumbnail200x200 .
}

ns275:Thumbnail400x400 {
    ns275:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns444:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:31 .

    ns444:CmsImage0 foaf:thumbnail ns275:Thumbnail400x400 .
}

ns410:Thumbnail200x200 {
    ns410:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns339:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:13 .

    ns339:CmsImage0 foaf:thumbnail ns410:Thumbnail200x200 .
}

ns314:Thumbnail600x600 {
    ns314:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns360:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:70 .

    ns360:CmsImage1 foaf:thumbnail ns314:Thumbnail600x600 .
}

ns413:CmsImage0 {
    ns413:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns131:work3 .
}

ns406:Thumbnail600x600 {
    ns406:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns113:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:108 .

    ns113:CmsImage1 foaf:thumbnail ns406:Thumbnail600x600 .
}

ns384:Thumbnail400x400 {
    ns384:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 1 rights holder" ;
        dcterms:title "Synthetic data properties image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns120:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns429:property_group .

    ns120:CmsImage1 foaf:thumbnail ns384:Thumbnail400x400 .
}

ns414:CmsImage1 {
    ns414:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:organization0 .
}

ns374:Thumbnail400x400 {
    ns374:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns19:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:102 .

    ns19:CmsImage1 foaf:thumbnail ns374:Thumbnail400x400 .
}

ns316:Thumbnail400x400 {
    ns316:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns2:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:27 .

    ns2:CmsImage1 foaf:thumbnail ns316:Thumbnail400x400 .
}

ns157:Thumbnail600x600 {
    ns157:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns380:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:freestandingwork9 .

    ns380:CmsImage0 foaf:thumbnail ns157:Thumbnail600x600 .
}

ns415:Thumbnail200x200 {
    ns415:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns124:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:37 .

    ns124:CmsImage1 foaf:thumbnail ns415:Thumbnail200x200 .
}

ns131:work1 {
    ns131:work1 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork1 alternative title 0",
            "CmsCollection0CmsWork1 alternative title 1" ;
        dcterms:contributor _:N9a983b39de5f4fce860ed27963d96d4d,
            _:Nb34f2db31dc94dbe8928d336382bd884 ;
        dcterms:creator ns1:organization3,
            ns1:organization4 ;
        dcterms:extent ns32:11,
            ns32:12 ;
        dcterms:identifier "CmsCollection0CmsWork1Id0",
            "CmsCollection0CmsWork1Id1" ;
        dcterms:language ns32:21,
            ns32:22 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns32:41,
            ns32:42 ;
        dcterms:provenance "CmsCollection0CmsWork1 provenance 0",
            "CmsCollection0CmsWork1 provenance 1" ;
        dcterms:publisher ns32:51,
            ns32:52 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 rights holder" ;
        dcterms:source ns32:61,
            ns32:62 ;
        dcterms:spatial ns131:work1Location ;
        dcterms:subject ns32:81,
            ns32:82 ;
        dcterms:title "CmsCollection0CmsWork1" ;
        dcterms:type ns32:101,
            ns32:102 ;
        vra:culturalContext ns32:1,
            ns32:2 ;
        vra:material ns32:31,
            ns32:32 ;
        vra:technique ns32:91,
            ns32:92 ;
        cms:collection ns1:collection0 .

    _:N9a983b39de5f4fce860ed27963d96d4d a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork1 contributor 1" .

    _:Nb34f2db31dc94dbe8928d336382bd884 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork1 contributor 0" .
}

ns246:Thumbnail600x600 {
    ns246:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Description image 0 rights holder" ;
        dcterms:title "Description image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns393:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:description .

    ns393:CmsImage0 foaf:thumbnail ns246:Thumbnail600x600 .
}

ns300:Thumbnail600x600 {
    ns300:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns426:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:3 .

    ns426:CmsImage1 foaf:thumbnail ns300:Thumbnail600x600 .
}

ns146:Thumbnail400x400 {
    ns146:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns438:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:49 .

    ns438:CmsImage0 foaf:thumbnail ns146:Thumbnail400x400 .
}

ns202:Thumbnail800x800 {
    ns202:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns436:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:101 .

    ns436:CmsImage1 foaf:thumbnail ns202:Thumbnail800x800 .
}

ns185:Thumbnail400x400 {
    ns185:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns349:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:50 .

    ns349:CmsImage0 foaf:thumbnail ns185:Thumbnail400x400 .
}

ns270:CmsImage1 {
    ns270:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:14 .
}

ns32:83 {
    ns32:83 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 3" ;
        skos:prefLabel "CmsConcept 83" .
}

ns304:Thumbnail600x600 {
    ns304:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns207:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:33 .

    ns207:CmsImage0 foaf:thumbnail ns304:Thumbnail600x600 .
}

ns398:Thumbnail800x800 {
    ns398:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium image 0 rights holder" ;
        dcterms:title "Medium image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns125:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:medium .

    ns125:CmsImage0 foaf:thumbnail ns398:Thumbnail800x800 .
}

ns94:Thumbnail400x400 {
    ns94:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:12 .

    ns399:CmsImage1 foaf:thumbnail ns94:Thumbnail400x400 .
}

ns111:Thumbnail800x800 {
    ns111:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns306:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:26 .

    ns306:CmsImage1 foaf:thumbnail ns111:Thumbnail800x800 .
}

ns341:CmsImage1 {
    ns341:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:97 .
}

ns133:Thumbnail600x600 {
    ns133:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns294:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:17 .

    ns294:CmsImage0 foaf:thumbnail ns133:Thumbnail600x600 .
}

ns101:Thumbnail400x400 {
    ns101:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns431:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:103 .

    ns431:CmsImage0 foaf:thumbnail ns101:Thumbnail400x400 .
}

ns32:73 {
    ns32:73 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 3" ;
        skos:prefLabel "CmsConcept 73" .
}

ns32:58 {
    ns32:58 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 8" ;
        skos:prefLabel "CmsConcept 58" .
}

ns324:Thumbnail400x400 {
    ns324:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Title image 0 rights holder" ;
        dcterms:title "Title image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:title .

    ns396:CmsImage0 foaf:thumbnail ns324:Thumbnail400x400 .
}

ns141:Thumbnail800x800 {
    ns141:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns269:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:15 .

    ns269:CmsImage0 foaf:thumbnail ns141:Thumbnail800x800 .
}

ns32:37 {
    ns32:37 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 7" ;
        skos:prefLabel "CmsConcept 37" .
}

ns5:Thumbnail400x400 {
    ns5:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns315:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:47 .

    ns315:CmsImage1 foaf:thumbnail ns5:Thumbnail400x400 .
}

ns243:Thumbnail800x800 {
    ns243:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns435:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:86 .

    ns435:CmsImage0 foaf:thumbnail ns243:Thumbnail800x800 .
}

ns394:CmsImage0 {
    ns394:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type image 0 rights holder" ;
        dcterms:title "Type image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:type .
}

ns179:Thumbnail400x400 {
    ns179:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns305:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:51 .

    ns305:CmsImage1 foaf:thumbnail ns179:Thumbnail400x400 .
}

ns201:Thumbnail600x600 {
    ns201:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns292:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:58 .

    ns292:CmsImage0 foaf:thumbnail ns201:Thumbnail600x600 .
}

ns245:Thumbnail200x200 {
    ns245:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns310:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:5 .

    ns310:CmsImage1 foaf:thumbnail ns245:Thumbnail200x200 .
}

ns358:Thumbnail800x800 {
    ns358:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns420:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:56 .

    ns420:CmsImage1 foaf:thumbnail ns358:Thumbnail800x800 .
}

ns355:CmsImage0 {
    ns355:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:98 .
}

ns287:CmsImage0 {
    ns287:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:74 .
}

ns95:Thumbnail800x800 {
    ns95:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns345:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:75 .

    ns345:CmsImage1 foaf:thumbnail ns95:Thumbnail800x800 .
}

ns258:Thumbnail200x200 {
    ns258:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns110:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:63 .

    ns110:CmsImage0 foaf:thumbnail ns258:Thumbnail200x200 .
}

ns32:5 {
    ns32:5 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 5" ;
        skos:prefLabel "CmsConcept 5" .
}

ns367:Thumbnail800x800 {
    ns367:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns138:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:72 .

    ns138:CmsImage1 foaf:thumbnail ns367:Thumbnail800x800 .
}

ns38:Thumbnail800x800 {
    ns38:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns128:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:90 .

    ns128:CmsImage1 foaf:thumbnail ns38:Thumbnail800x800 .
}

ns127:Thumbnail800x800 {
    ns127:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns278:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:94 .

    ns278:CmsImage0 foaf:thumbnail ns127:Thumbnail800x800 .
}

ns382:Thumbnail600x600 {
    ns382:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns247:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:21 .

    ns247:CmsImage1 foaf:thumbnail ns382:Thumbnail600x600 .
}

ns267:Thumbnail400x400 {
    ns267:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns421:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:30 .

    ns421:CmsImage0 foaf:thumbnail ns267:Thumbnail400x400 .
}

ns198:Thumbnail800x800 {
    ns198:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns354:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:42 .

    ns354:CmsImage0 foaf:thumbnail ns198:Thumbnail800x800 .
}

ns135:Thumbnail200x200 {
    ns135:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns446:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:7 .

    ns446:CmsImage0 foaf:thumbnail ns135:Thumbnail200x200 .
}

ns212:Thumbnail800x800 {
    ns212:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns290:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:person3 .

    ns290:CmsImage1 foaf:thumbnail ns212:Thumbnail800x800 .
}

ns416:Thumbnail600x600 {
    ns416:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns54:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:89 .

    ns54:CmsImage0 foaf:thumbnail ns416:Thumbnail600x600 .
}

ns286:Thumbnail600x600 {
    ns286:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns366:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:10 .

    ns366:CmsImage1 foaf:thumbnail ns286:Thumbnail600x600 .
}

ns302:Thumbnail600x600 {
    ns302:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns68:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:64 .

    ns68:CmsImage1 foaf:thumbnail ns302:Thumbnail600x600 .
}

ns318:Thumbnail400x400 {
    ns318:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns309:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:person0 .

    ns309:CmsImage1 foaf:thumbnail ns318:Thumbnail400x400 .
}

ns32:79 {
    ns32:79 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 9" ;
        skos:prefLabel "CmsConcept 79" .
}

ns149:Thumbnail200x200 {
    ns149:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns42:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:100 .

    ns42:CmsImage1 foaf:thumbnail ns149:Thumbnail200x200 .
}

ns307:Thumbnail600x600 {
    ns307:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns183:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:57 .

    ns183:CmsImage0 foaf:thumbnail ns307:Thumbnail600x600 .
}

ns364:Thumbnail600x600 {
    ns364:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns380:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:freestandingwork9 .

    ns380:CmsImage1 foaf:thumbnail ns364:Thumbnail600x600 .
}

ns154:Thumbnail400x400 {
    ns154:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns315:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:47 .

    ns315:CmsImage0 foaf:thumbnail ns154:Thumbnail400x400 .
}

ns417:Thumbnail600x600 {
    ns417:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns270:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:14 .

    ns270:CmsImage0 foaf:thumbnail ns417:Thumbnail600x600 .
}

ns134:Thumbnail400x400 {
    ns134:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns195:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:69 .

    ns195:CmsImage1 foaf:thumbnail ns134:Thumbnail400x400 .
}

ns121:Thumbnail600x600 {
    ns121:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns425:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:29 .

    ns425:CmsImage0 foaf:thumbnail ns121:Thumbnail600x600 .
}

ns418:Thumbnail600x600 {
    ns418:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns81:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:39 .

    ns81:CmsImage1 foaf:thumbnail ns418:Thumbnail600x600 .
}

ns301:Thumbnail400x400 {
    ns301:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns402:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:71 .

    ns402:CmsImage0 foaf:thumbnail ns301:Thumbnail400x400 .
}

ns14:CmsImage0 {
    ns14:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:34 .
}

ns419:CmsImage0 {
    ns419:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:78 .
}

ns88:Thumbnail200x200 {
    ns88:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique image 0 rights holder" ;
        dcterms:title "Technique image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns409:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts vra:technique .

    ns409:CmsImage0 foaf:thumbnail ns88:Thumbnail200x200 .
}

ns151:Thumbnail400x400 {
    ns151:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns346:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:80 .

    ns346:CmsImage0 foaf:thumbnail ns151:Thumbnail400x400 .
}

ns130:Thumbnail400x400 {
    ns130:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns96:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:65 .

    ns96:CmsImage0 foaf:thumbnail ns130:Thumbnail400x400 .
}

ns420:CmsImage1 {
    ns420:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:56 .
}

ns421:CmsImage0 {
    ns421:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:30 .
}

ns422:CmsImage1 {
    ns422:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:organization3 .
}

ns412:Thumbnail600x600 {
    ns412:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns231:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns116:work6 .

    ns231:CmsImage0 foaf:thumbnail ns412:Thumbnail600x600 .
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
        foaf:depicts ns32:68 .
}

ns32:52 {
    ns32:52 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 2" ;
        skos:prefLabel "CmsConcept 52" .
}

ns30:Thumbnail600x600 {
    ns30:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns309:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:person0 .

    ns309:CmsImage0 foaf:thumbnail ns30:Thumbnail600x600 .
}

ns316:Thumbnail200x200 {
    ns316:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns2:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:27 .

    ns2:CmsImage1 foaf:thumbnail ns316:Thumbnail200x200 .
}

ns227:Thumbnail400x400 {
    ns227:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns297:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:52 .

    ns297:CmsImage0 foaf:thumbnail ns227:Thumbnail400x400 .
}

ns397:Thumbnail400x400 {
    ns397:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns355:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:98 .

    ns355:CmsImage1 foaf:thumbnail ns397:Thumbnail400x400 .
}

ns32:87 {
    ns32:87 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 7" ;
        skos:prefLabel "CmsConcept 87" .
}

ns302:Thumbnail400x400 {
    ns302:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns68:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:64 .

    ns68:CmsImage1 foaf:thumbnail ns302:Thumbnail400x400 .
}

ns359:Thumbnail200x200 {
    ns359:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns414:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:organization0 .

    ns414:CmsImage1 foaf:thumbnail ns359:Thumbnail200x200 .
}

ns424:CmsImage1 {
    ns424:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:60 .
}

ns425:CmsImage0 {
    ns425:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:29 .
}

ns170:Thumbnail800x800 {
    ns170:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns423:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:68 .

    ns423:CmsImage1 foaf:thumbnail ns170:Thumbnail800x800 .
}

ns425:CmsImage1 {
    ns425:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:29 .
}

ns6:Thumbnail400x400 {
    ns6:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns440:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:53 .

    ns440:CmsImage0 foaf:thumbnail ns6:Thumbnail400x400 .
}

ns392:CmsImage0 {
    ns392:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:25 .
}

ns203:Thumbnail600x600 {
    ns203:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns182:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:19 .

    ns182:CmsImage0 foaf:thumbnail ns203:Thumbnail600x600 .
}

ns211:Thumbnail400x400 {
    ns211:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns437:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:95 .

    ns437:CmsImage1 foaf:thumbnail ns211:Thumbnail400x400 .
}

ns395:Thumbnail200x200 {
    ns395:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns221:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:20 .

    ns221:CmsImage1 foaf:thumbnail ns395:Thumbnail200x200 .
}

ns356:Thumbnail400x400 {
    ns356:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns174:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:40 .

    ns174:CmsImage0 foaf:thumbnail ns356:Thumbnail400x400 .
}

ns426:CmsImage0 {
    ns426:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:3 .
}

ns399:CmsImage0 {
    ns399:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:12 .
}

ns269:CmsImage1 {
    ns269:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:15 .
}

dcterms:description {
    dcterms:description a cms:Property ;
        rdfs:label "Description" ;
        cms:propertyFilterable false ;
        cms:propertyGroup ns429:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Description> .
}

ns99:CmsImage0 {
    ns99:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:0 .
}

ns230:Thumbnail600x600 {
    ns230:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns436:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:101 .

    ns436:CmsImage0 foaf:thumbnail ns230:Thumbnail600x600 .
}

ns210:Thumbnail400x400 {
    ns210:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns334:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:1 .

    ns334:CmsImage1 foaf:thumbnail ns210:Thumbnail400x400 .
}

ns421:CmsImage1 {
    ns421:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:30 .
}

ns97:Thumbnail200x200 {
    ns97:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns326:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:105 .

    ns326:CmsImage1 foaf:thumbnail ns97:Thumbnail200x200 .
}

ns32:80 {
    ns32:80 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 0" ;
        skos:prefLabel "CmsConcept 80" .
}

ns107:Thumbnail800x800 {
    ns107:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns408:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:82 .

    ns408:CmsImage1 foaf:thumbnail ns107:Thumbnail800x800 .
}

ns86:CmsImage0 {
    ns86:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject image 0 rights holder" ;
        dcterms:title "Subject image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:subject .
}

ns427:Thumbnail600x600 {
    ns427:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material image 1 rights holder" ;
        dcterms:title "Material image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns36:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts vra:material .

    ns36:CmsImage1 foaf:thumbnail ns427:Thumbnail600x600 .
}

ns144:Thumbnail600x600 {
    ns144:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns255:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:organization2 .

    ns255:CmsImage1 foaf:thumbnail ns144:Thumbnail600x600 .
}

ns428:CmsImage1 {
    ns428:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:freestandingwork10 .
}

ns208:CmsImage0 {
    ns208:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:16 .
}

ns52:Thumbnail200x200 {
    ns52:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type image 0 rights holder" ;
        dcterms:title "Type image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns394:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:type .

    ns394:CmsImage0 foaf:thumbnail ns52:Thumbnail200x200 .
}

ns171:Thumbnail800x800 {
    ns171:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns401:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:18 .

    ns401:CmsImage0 foaf:thumbnail ns171:Thumbnail800x800 .
}

ns32:99 {
    ns32:99 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 9" ;
        skos:prefLabel "CmsConcept 99" .
}

ns23:Thumbnail200x200 {
    ns23:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns145:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:85 .

    ns145:CmsImage1 foaf:thumbnail ns23:Thumbnail200x200 .
}

ns308:Thumbnail400x400 {
    ns308:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns255:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:organization2 .

    ns255:CmsImage0 foaf:thumbnail ns308:Thumbnail400x400 .
}

ns416:Thumbnail400x400 {
    ns416:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns54:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:89 .

    ns54:CmsImage0 foaf:thumbnail ns416:Thumbnail400x400 .
}

ns411:Thumbnail200x200 {
    ns411:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:109 .

    ns403:CmsImage1 foaf:thumbnail ns411:Thumbnail200x200 .
}

ns90:Thumbnail200x200 {
    ns90:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns378:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:person2 .

    ns378:CmsImage1 foaf:thumbnail ns90:Thumbnail200x200 .
}

ns419:CmsImage1 {
    ns419:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:78 .
}

ns193:Thumbnail200x200 {
    ns193:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns219:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:92 .

    ns219:CmsImage0 foaf:thumbnail ns193:Thumbnail200x200 .
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
        foaf:depicts ns32:68 .
}

ns223:Thumbnail600x600 {
    ns223:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial image 1 rights holder" ;
        dcterms:title "Spatial image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns434:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:spatial .

    ns434:CmsImage1 foaf:thumbnail ns223:Thumbnail600x600 .
}

ns427:Thumbnail400x400 {
    ns427:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material image 1 rights holder" ;
        dcterms:title "Material image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns36:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts vra:material .

    ns36:CmsImage1 foaf:thumbnail ns427:Thumbnail400x400 .
}

ns240:Thumbnail800x800 {
    ns240:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique image 1 rights holder" ;
        dcterms:title "Technique image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns409:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts vra:technique .

    ns409:CmsImage1 foaf:thumbnail ns240:Thumbnail800x800 .
}

ns116:work7Creation {
    ns116:work7Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns1:organization0,
            ns1:person4 ;
        dcterms:date _:N0930ed47a4cd4f649b264ecdd7ba6a07 ;
        dcterms:spatial ns116:work7Location ;
        dcterms:title "CmsCollection1CmsWork7 creation" ;
        cms:work ns116:work7 .

    _:N0930ed47a4cd4f649b264ecdd7ba6a07 a cms:DateTimeDescription ;
        time:day "---25"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
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

ns190:Thumbnail800x800 {
    ns190:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns231:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns116:work6 .

    ns231:CmsImage1 foaf:thumbnail ns190:Thumbnail800x800 .
}

ns32:106 {
    ns32:106 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 6" ;
        skos:prefLabel "CmsConcept 106" .
}

ns429:property_group {
    ns429:property_group a cms:PropertyGroup ;
        rdfs:label "Synthetic data properties" .
}

ns32:9 {
    ns32:9 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 9" ;
        skos:prefLabel "CmsConcept 9" .
}

ns217:Thumbnail600x600 {
    ns217:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns228:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:32 .

    ns228:CmsImage0 foaf:thumbnail ns217:Thumbnail600x600 .
}

ns77:Thumbnail600x600 {
    ns77:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns54:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:89 .

    ns54:CmsImage1 foaf:thumbnail ns77:Thumbnail600x600 .
}

_:Nc70c296107d04ea7bba096d1fa4e90b1 {
    _:Nc70c296107d04ea7bba096d1fa4e90b1 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:Na9bc19eebb7540c8a2653757af084bdb ;
        dcterms:spatial _:Ncc1caa8344a64041aff1f91b7449b77b ;
        dcterms:title "FreestandingWork8 closing" ;
        cms:work ns1:freestandingwork8 .

    _:Ncc1caa8344a64041aff1f91b7449b77b a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:Na9bc19eebb7540c8a2653757af084bdb a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns210:Thumbnail800x800 {
    ns210:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns334:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:1 .

    ns334:CmsImage1 foaf:thumbnail ns210:Thumbnail800x800 .
}

ns430:Thumbnail600x600 {
    ns378:CmsImage0 foaf:thumbnail ns430:Thumbnail600x600 .

    ns430:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns378:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:person2 .
}

ns1:person0 {
    ns1:person0 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            wd:Q7251 ;
        contact:sortName "0, CmsPerson" ;
        foaf:familyName "0" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 0" ;
        foaf:page ns1:person0page .
}

ns141:Thumbnail200x200 {
    ns141:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns269:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:15 .

    ns269:CmsImage0 foaf:thumbnail ns141:Thumbnail200x200 .
}

ns249:Thumbnail200x200 {
    ns249:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns19:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:102 .

    ns19:CmsImage0 foaf:thumbnail ns249:Thumbnail200x200 .
}

ns320:Thumbnail200x200 {
    ns320:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns333:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:41 .

    ns333:CmsImage1 foaf:thumbnail ns320:Thumbnail200x200 .
}

ns430:Thumbnail400x400 {
    ns430:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns378:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:person2 .

    ns378:CmsImage0 foaf:thumbnail ns430:Thumbnail400x400 .
}

ns348:Thumbnail200x200 {
    ns348:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:25 .

    ns392:CmsImage1 foaf:thumbnail ns348:Thumbnail200x200 .
}

ns205:Thumbnail600x600 {
    ns205:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns67:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:11 .

    ns67:CmsImage0 foaf:thumbnail ns205:Thumbnail600x600 .
}

ns367:Thumbnail400x400 {
    ns367:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns138:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:72 .

    ns138:CmsImage1 foaf:thumbnail ns367:Thumbnail400x400 .
}

ns251:CmsImage1 {
    ns251:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context image 1 rights holder" ;
        dcterms:title "Cultural context image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts vra:culturalContext .
}

ns405:Thumbnail600x600 {
    ns405:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns129:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:91 .

    ns129:CmsImage1 foaf:thumbnail ns405:Thumbnail600x600 .
}

ns317:Thumbnail200x200 {
    ns317:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns441:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:9 .

    ns441:CmsImage0 foaf:thumbnail ns317:Thumbnail200x200 .
}

ns417:Thumbnail800x800 {
    ns417:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns270:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:14 .

    ns270:CmsImage0 foaf:thumbnail ns417:Thumbnail800x800 .
}

ns369:Thumbnail600x600 {
    ns369:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns14:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:34 .

    ns14:CmsImage1 foaf:thumbnail ns369:Thumbnail600x600 .
}

ns32:66 {
    ns32:66 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 6" ;
        skos:prefLabel "CmsConcept 66" .
}

ns116:work5Creation {
    ns116:work5Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns1:person2,
            ns1:person3 ;
        dcterms:date _:N282232c2d28240ff9e847bb7f436133d ;
        dcterms:spatial ns116:work5Location ;
        dcterms:title "CmsCollection1CmsWork5 creation" ;
        cms:work ns116:work5 .

    _:N282232c2d28240ff9e847bb7f436133d a cms:DateTimeDescription ;
        time:day "---27"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns389:CmsImage1 {
    ns389:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:2 .
}

ns356:Thumbnail600x600 {
    ns356:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns174:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:40 .

    ns174:CmsImage0 foaf:thumbnail ns356:Thumbnail600x600 .
}

ns13:Thumbnail200x200 {
    ns13:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns112:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:73 .

    ns112:CmsImage1 foaf:thumbnail ns13:Thumbnail200x200 .
}

ns293:Thumbnail400x400 {
    ns293:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns414:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:organization0 .

    ns414:CmsImage0 foaf:thumbnail ns293:Thumbnail400x400 .
}

ns46:Thumbnail800x800 {
    ns46:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher image 0 rights holder" ;
        dcterms:title "Publisher image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:publisher .

    ns365:CmsImage0 foaf:thumbnail ns46:Thumbnail800x800 .
}

ns296:CmsImage0 {
    ns296:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:24 .
}

ns430:Thumbnail800x800 {
    ns430:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns378:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:person2 .

    ns378:CmsImage0 foaf:thumbnail ns430:Thumbnail800x800 .
}

ns61:Thumbnail800x800 {
    ns61:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns68:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:64 .

    ns68:CmsImage0 foaf:thumbnail ns61:Thumbnail800x800 .
}

ns82:Thumbnail600x600 {
    ns82:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns123:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:87 .

    ns123:CmsImage0 foaf:thumbnail ns82:Thumbnail600x600 .
}

ns431:CmsImage0 {
    ns431:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:103 .
}

ns415:Thumbnail400x400 {
    ns415:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns124:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:37 .

    ns124:CmsImage1 foaf:thumbnail ns415:Thumbnail400x400 .
}

ns44:Thumbnail400x400 {
    ns44:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns341:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:97 .

    ns341:CmsImage1 foaf:thumbnail ns44:Thumbnail400x400 .
}

ns320:Thumbnail600x600 {
    ns320:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns333:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:41 .

    ns333:CmsImage1 foaf:thumbnail ns320:Thumbnail600x600 .
}

ns31:Thumbnail200x200 {
    ns31:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns387:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:66 .

    ns387:CmsImage0 foaf:thumbnail ns31:Thumbnail200x200 .
}

ns254:CmsImage0 {
    ns254:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:99 .
}

ns85:Thumbnail200x200 {
    ns85:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns288:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:organization4 .

    ns288:CmsImage1 foaf:thumbnail ns85:Thumbnail200x200 .
}

ns432:Thumbnail800x800 {
    ns432:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns424:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:60 .

    ns424:CmsImage1 foaf:thumbnail ns432:Thumbnail800x800 .
}

ns261:Thumbnail200x200 {
    ns261:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns208:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:16 .

    ns208:CmsImage1 foaf:thumbnail ns261:Thumbnail200x200 .
}

ns261:Thumbnail400x400 {
    ns261:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns208:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:16 .

    ns208:CmsImage1 foaf:thumbnail ns261:Thumbnail400x400 .
}

ns380:CmsImage1 {
    ns380:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:freestandingwork9 .
}

ns217:Thumbnail800x800 {
    ns217:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns228:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:32 .

    ns228:CmsImage0 foaf:thumbnail ns217:Thumbnail800x800 .
}

ns16:Thumbnail800x800 {
    ns16:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns404:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:81 .

    ns404:CmsImage1 foaf:thumbnail ns16:Thumbnail800x800 .
}

ns402:CmsImage1 {
    ns402:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:71 .
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

ns240:Thumbnail200x200 {
    ns240:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique image 1 rights holder" ;
        dcterms:title "Technique image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns409:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts vra:technique .

    ns409:CmsImage1 foaf:thumbnail ns240:Thumbnail200x200 .
}

ns32:81 {
    ns32:81 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 1" ;
        skos:prefLabel "CmsConcept 81" .
}

dcterms:subject {
    dcterms:subject a cms:Property ;
        rdfs:label "Subject" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns429:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> .
}

ns201:Thumbnail200x200 {
    ns201:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns292:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:58 .

    ns292:CmsImage0 foaf:thumbnail ns201:Thumbnail200x200 .
}

ns65:Thumbnail400x400 {
    ns65:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns349:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:50 .

    ns349:CmsImage1 foaf:thumbnail ns65:Thumbnail400x400 .
}

ns105:Thumbnail800x800 {
    ns105:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns444:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:31 .

    ns444:CmsImage1 foaf:thumbnail ns105:Thumbnail800x800 .
}

ns225:Thumbnail400x400 {
    ns225:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns165:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:collection1 .

    ns165:CmsImage1 foaf:thumbnail ns225:Thumbnail400x400 .
}

ns172:CmsImage1 {
    ns172:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:88 .
}

ns110:CmsImage0 {
    ns110:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:63 .
}

ns184:Thumbnail800x800 {
    ns184:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context image 0 rights holder" ;
        dcterms:title "Cultural context image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns251:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts vra:culturalContext .

    ns251:CmsImage0 foaf:thumbnail ns184:Thumbnail800x800 .
}

ns32:16 {
    ns32:16 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 6" ;
        skos:prefLabel "CmsConcept 16" .
}

ns433:Thumbnail600x600 {
    ns126:CmsImage0 foaf:thumbnail ns433:Thumbnail600x600 .

    ns433:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns126:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:93 .
}

ns130:Thumbnail600x600 {
    ns130:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns96:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:65 .

    ns96:CmsImage0 foaf:thumbnail ns130:Thumbnail600x600 .
}

ns243:Thumbnail400x400 {
    ns243:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns435:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:86 .

    ns435:CmsImage0 foaf:thumbnail ns243:Thumbnail400x400 .
}

ns116:work7 {
    ns116:work7 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork7 alternative title 0",
            "CmsCollection1CmsWork7 alternative title 1" ;
        dcterms:contributor _:N01efe65cf3ee4b49b79ebd77763b4e2d,
            _:N8e749165974246f9ab44d98b6620732f ;
        dcterms:creator ns1:organization0,
            ns1:person4 ;
        dcterms:extent ns32:17,
            ns32:18 ;
        dcterms:identifier "CmsCollection1CmsWork7Id0",
            "CmsCollection1CmsWork7Id1" ;
        dcterms:language ns32:27,
            ns32:28 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns32:47,
            ns32:48 ;
        dcterms:provenance "CmsCollection1CmsWork7 provenance 0",
            "CmsCollection1CmsWork7 provenance 1" ;
        dcterms:publisher ns32:57,
            ns32:58 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 rights holder" ;
        dcterms:source ns32:67,
            ns32:68 ;
        dcterms:spatial ns116:work7Location ;
        dcterms:subject ns32:87,
            ns32:88 ;
        dcterms:title "CmsCollection1CmsWork7" ;
        dcterms:type ns32:107,
            ns32:108 ;
        vra:culturalContext ns32:7,
            ns32:8 ;
        vra:material ns32:37,
            ns32:38 ;
        vra:technique ns32:97,
            ns32:98 ;
        cms:collection ns1:collection1 .

    _:N01efe65cf3ee4b49b79ebd77763b4e2d a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork7 contributor 1" .

    _:N8e749165974246f9ab44d98b6620732f a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork7 contributor 0" .
}

ns215:Thumbnail400x400 {
    ns215:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns445:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:28 .

    ns445:CmsImage0 foaf:thumbnail ns215:Thumbnail400x400 .
}

ns353:Thumbnail800x800 {
    ns353:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent image 1 rights holder" ;
        dcterms:title "Extent image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns10:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:extent .

    ns10:CmsImage1 foaf:thumbnail ns353:Thumbnail800x800 .
}

ns116:work4Creation {
    ns116:work4Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns1:person1,
            ns1:person2 ;
        dcterms:date _:N9de064288e4d4778a7e9a511397baba1 ;
        dcterms:description _:N2e06723d616045a5b6ac9c8e84a9d2a2 ;
        dcterms:spatial ns116:work4Location ;
        dcterms:title "CmsCollection1CmsWork4 creation" ;
        cms:work ns116:work4 .

    _:N2e06723d616045a5b6ac9c8e84a9d2a2 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:N9de064288e4d4778a7e9a511397baba1 a cms:DateTimeDescription ;
        time:day "---28"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns388:Thumbnail400x400 {
    ns388:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns239:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:83 .

    ns239:CmsImage1 foaf:thumbnail ns388:Thumbnail400x400 .
}

ns33:Thumbnail400x400 {
    ns33:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns12:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:67 .

    ns12:CmsImage1 foaf:thumbnail ns33:Thumbnail400x400 .
}

ns393:CmsImage0 {
    ns393:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Description image 0 rights holder" ;
        dcterms:title "Description image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:description .
}

ns154:Thumbnail200x200 {
    ns154:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns315:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:47 .

    ns315:CmsImage0 foaf:thumbnail ns154:Thumbnail200x200 .
}

ns268:Thumbnail400x400 {
    ns268:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns413:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns131:work3 .

    ns413:CmsImage1 foaf:thumbnail ns268:Thumbnail400x400 .
}

ns344:Thumbnail400x400 {
    ns344:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns195:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:69 .

    ns195:CmsImage0 foaf:thumbnail ns344:Thumbnail400x400 .
}

ns77:Thumbnail400x400 {
    ns77:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns54:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:89 .

    ns54:CmsImage1 foaf:thumbnail ns77:Thumbnail400x400 .
}

ns316:Thumbnail800x800 {
    ns316:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns2:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:27 .

    ns2:CmsImage1 foaf:thumbnail ns316:Thumbnail800x800 .
}

ns1:person2 {
    ns1:person2 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            wd:Q7251 ;
        contact:sortName "2, CmsPerson" ;
        foaf:familyName "2" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 2" ;
        foaf:page ns1:person2page .
}

ns229:Thumbnail400x400 {
    ns229:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns220:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:59 .

    ns220:CmsImage0 foaf:thumbnail ns229:Thumbnail400x400 .
}

ns64:Thumbnail600x600 {
    ns64:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns438:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:49 .

    ns438:CmsImage1 foaf:thumbnail ns64:Thumbnail600x600 .
}

ns222:Thumbnail800x800 {
    ns222:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns110:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:63 .

    ns110:CmsImage1 foaf:thumbnail ns222:Thumbnail800x800 .
}

ns434:CmsImage1 {
    ns434:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial image 1 rights holder" ;
        dcterms:title "Spatial image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:spatial .
}

ns435:CmsImage1 {
    ns435:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:86 .
}

ns263:Thumbnail800x800 {
    ns263:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns295:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:79 .

    ns295:CmsImage1 foaf:thumbnail ns263:Thumbnail800x800 .
}

ns267:Thumbnail800x800 {
    ns267:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns421:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:30 .

    ns421:CmsImage0 foaf:thumbnail ns267:Thumbnail800x800 .
}

ns436:CmsImage0 {
    ns436:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:101 .
}

ns92:Thumbnail600x600 {
    ns92:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns311:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:23 .

    ns311:CmsImage0 foaf:thumbnail ns92:Thumbnail600x600 .
}

_:Nd0c780c62c284cc1a6c6d246192289e1 {
    _:Nd0c780c62c284cc1a6c6d246192289e1 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N56feb0d1baac490ca2164e441f697a04 ;
        dcterms:title "FreestandingWork9 closing" ;
        cms:work ns1:freestandingwork9 .

    _:N56feb0d1baac490ca2164e441f697a04 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns68:CmsImage1 {
    ns68:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:64 .
}

ns32:50 {
    ns32:50 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 0" ;
        skos:prefLabel "CmsConcept 50" .
}

ns169:Thumbnail200x200 {
    ns169:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns239:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:83 .

    ns239:CmsImage0 foaf:thumbnail ns169:Thumbnail200x200 .
}

ns126:CmsImage0 {
    ns126:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:93 .
}

ns400:Thumbnail200x200 {
    ns400:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns238:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:35 .

    ns238:CmsImage0 foaf:thumbnail ns400:Thumbnail200x200 .
}

ns266:Thumbnail600x600 {
    ns266:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns99:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:0 .

    ns99:CmsImage0 foaf:thumbnail ns266:Thumbnail600x600 .
}

ns291:Thumbnail800x800 {
    ns291:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns175:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:38 .

    ns175:CmsImage0 foaf:thumbnail ns291:Thumbnail800x800 .
}

ns109:Thumbnail400x400 {
    ns109:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns172:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:88 .

    ns172:CmsImage1 foaf:thumbnail ns109:Thumbnail400x400 .
}

ns339:CmsImage0 {
    ns339:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:13 .
}

ns85:Thumbnail400x400 {
    ns85:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns288:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:organization4 .

    ns288:CmsImage1 foaf:thumbnail ns85:Thumbnail400x400 .
}

ns146:Thumbnail600x600 {
    ns146:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns438:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:49 .

    ns438:CmsImage0 foaf:thumbnail ns146:Thumbnail600x600 .
}

ns244:Thumbnail800x800 {
    ns244:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns295:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:79 .

    ns295:CmsImage0 foaf:thumbnail ns244:Thumbnail800x800 .
}

ns190:Thumbnail600x600 {
    ns190:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns231:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns116:work6 .

    ns231:CmsImage1 foaf:thumbnail ns190:Thumbnail600x600 .
}

ns25:Thumbnail200x200 {
    ns25:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns56:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:61 .

    ns56:CmsImage1 foaf:thumbnail ns25:Thumbnail200x200 .
}

ns325:Thumbnail400x400 {
    ns325:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns419:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:78 .

    ns419:CmsImage1 foaf:thumbnail ns325:Thumbnail400x400 .
}

ns28:Thumbnail200x200 {
    ns28:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns440:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:53 .

    ns440:CmsImage1 foaf:thumbnail ns28:Thumbnail200x200 .
}

ns199:Thumbnail400x400 {
    ns199:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns272:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:62 .

    ns272:CmsImage0 foaf:thumbnail ns199:Thumbnail400x400 .
}

ns32:18 {
    ns32:18 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 8" ;
        skos:prefLabel "CmsConcept 18" .
}

ns437:CmsImage1 {
    ns437:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:95 .
}

ns308:Thumbnail200x200 {
    ns308:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns255:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:organization2 .

    ns255:CmsImage0 foaf:thumbnail ns308:Thumbnail200x200 .
}

ns301:Thumbnail800x800 {
    ns301:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns402:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:71 .

    ns402:CmsImage0 foaf:thumbnail ns301:Thumbnail800x800 .
}

ns215:Thumbnail600x600 {
    ns215:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns445:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:28 .

    ns445:CmsImage0 foaf:thumbnail ns215:Thumbnail600x600 .
}

ns124:CmsImage0 {
    ns124:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:37 .
}

ns375:Thumbnail200x200 {
    ns375:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns383:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:107 .

    ns383:CmsImage0 foaf:thumbnail ns375:Thumbnail200x200 .
}

ns338:Thumbnail800x800 {
    ns338:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns292:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:58 .

    ns292:CmsImage1 foaf:thumbnail ns338:Thumbnail800x800 .
}

ns122:Thumbnail400x400 {
    ns122:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:109 .

    ns403:CmsImage0 foaf:thumbnail ns122:Thumbnail400x400 .
}

ns343:Thumbnail600x600 {
    ns343:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns175:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:38 .

    ns175:CmsImage1 foaf:thumbnail ns343:Thumbnail600x600 .
}

ns235:Thumbnail800x800 {
    ns235:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns96:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:65 .

    ns96:CmsImage1 foaf:thumbnail ns235:Thumbnail800x800 .
}

ns330:Thumbnail200x200 {
    ns330:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns437:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:95 .

    ns437:CmsImage0 foaf:thumbnail ns330:Thumbnail200x200 .
}

ns131:work2 {
    ns131:work2 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork2 alternative title 0",
            "CmsCollection0CmsWork2 alternative title 1" ;
        dcterms:contributor _:N2488864c54794dac841370b75eb2667f,
            _:Na4cb35cb3803498099ef2f8ec583607a ;
        dcterms:creator ns1:organization4,
            ns1:person0 ;
        dcterms:description _:N0f3164a794614eb694643cb4d89c751a ;
        dcterms:extent ns32:12,
            ns32:13 ;
        dcterms:identifier "CmsCollection0CmsWork2Id0",
            "CmsCollection0CmsWork2Id1" ;
        dcterms:language ns32:22,
            ns32:23 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns32:42,
            ns32:43 ;
        dcterms:provenance "CmsCollection0CmsWork2 provenance 0",
            "CmsCollection0CmsWork2 provenance 1" ;
        dcterms:publisher ns32:52,
            ns32:53 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 rights holder" ;
        dcterms:source ns32:62,
            ns32:63 ;
        dcterms:spatial ns131:work2Location ;
        dcterms:subject ns32:82,
            ns32:83 ;
        dcterms:title "CmsCollection0CmsWork2" ;
        dcterms:type ns32:102,
            ns32:103 ;
        vra:culturalContext ns32:2,
            ns32:3 ;
        vra:material ns32:32,
            ns32:33 ;
        vra:technique ns32:92,
            ns32:93 ;
        cms:collection ns1:collection0 ;
        foaf:page <http://example.com/work/2> .

    _:N2488864c54794dac841370b75eb2667f a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork2 contributor 0" .

    _:Na4cb35cb3803498099ef2f8ec583607a a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork2 contributor 1" .

    _:N0f3164a794614eb694643cb4d89c751a a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns33:Thumbnail800x800 {
    ns33:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns12:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:67 .

    ns12:CmsImage1 foaf:thumbnail ns33:Thumbnail800x800 .
}

ns416:Thumbnail800x800 {
    ns416:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns54:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:89 .

    ns54:CmsImage0 foaf:thumbnail ns416:Thumbnail800x800 .
}

ns203:Thumbnail800x800 {
    ns203:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns182:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:19 .

    ns182:CmsImage0 foaf:thumbnail ns203:Thumbnail800x800 .
}

ns264:Thumbnail800x800 {
    ns264:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns165:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:collection1 .

    ns165:CmsImage0 foaf:thumbnail ns264:Thumbnail800x800 .
}

ns153:Thumbnail400x400 {
    ns153:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns207:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:33 .

    ns207:CmsImage1 foaf:thumbnail ns153:Thumbnail400x400 .
}

_:Nef0d0da946bc44d682862bf02bde24b6 {
    _:Nef0d0da946bc44d682862bf02bde24b6 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N2e06723d616045a5b6ac9c8e84a9d2a2 ;
        dcterms:spatial _:N8b0fd8d141574bb695172f44fda24b9c ;
        dcterms:title "CmsCollection1CmsWork4 closing" ;
        cms:work ns116:work4 .

    _:N8b0fd8d141574bb695172f44fda24b9c a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N2e06723d616045a5b6ac9c8e84a9d2a2 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns358:Thumbnail200x200 {
    ns358:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns420:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:56 .

    ns420:CmsImage1 foaf:thumbnail ns358:Thumbnail200x200 .
}

ns32:63 {
    ns32:63 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 3" ;
        skos:prefLabel "CmsConcept 63" .
}

ns212:Thumbnail600x600 {
    ns212:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns290:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:person3 .

    ns290:CmsImage1 foaf:thumbnail ns212:Thumbnail600x600 .
}

ns29:Thumbnail600x600 {
    ns29:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns423:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:68 .

    ns423:CmsImage0 foaf:thumbnail ns29:Thumbnail600x600 .
}

ns319:CmsImage0 {
    ns319:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:person1 .
}

ns317:Thumbnail600x600 {
    ns317:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns441:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:9 .

    ns441:CmsImage0 foaf:thumbnail ns317:Thumbnail600x600 .
}

ns436:CmsImage1 {
    ns436:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:101 .
}

ns101:Thumbnail800x800 {
    ns101:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns431:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:103 .

    ns431:CmsImage0 foaf:thumbnail ns101:Thumbnail800x800 .
}

ns53:Thumbnail400x400 {
    ns53:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns401:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:18 .

    ns401:CmsImage1 foaf:thumbnail ns53:Thumbnail400x400 .
}

ns370:Thumbnail600x600 {
    ns370:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns310:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:5 .

    ns310:CmsImage0 foaf:thumbnail ns370:Thumbnail600x600 .
}

ns116:work7Opening {
    ns116:work7Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-25"^^xsd:date ;
        dcterms:spatial _:Naccfccea0dc84e56bbc0c38178ce9221 ;
        dcterms:title "CmsCollection1CmsWork7 opening" ;
        cms:work ns116:work7 .

    _:Naccfccea0dc84e56bbc0c38178ce9221 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns281:Thumbnail600x600 {
    ns281:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns103:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:76 .

    ns103:CmsImage1 foaf:thumbnail ns281:Thumbnail600x600 .
}

ns233:Thumbnail600x600 {
    ns233:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns346:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:80 .

    ns346:CmsImage1 foaf:thumbnail ns233:Thumbnail600x600 .
}

ns277:Thumbnail600x600 {
    ns277:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns296:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:24 .

    ns296:CmsImage1 foaf:thumbnail ns277:Thumbnail600x600 .
}

ns306:CmsImage1 {
    ns306:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:26 .
}

ns438:CmsImage1 {
    ns438:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:49 .
}

ns10:CmsImage0 {
    ns10:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent image 0 rights holder" ;
        dcterms:title "Extent image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:extent .
}

ns198:Thumbnail600x600 {
    ns198:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns354:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:42 .

    ns354:CmsImage0 foaf:thumbnail ns198:Thumbnail600x600 .
}

ns359:Thumbnail800x800 {
    ns359:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns414:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:organization0 .

    ns414:CmsImage1 foaf:thumbnail ns359:Thumbnail800x800 .
}

ns32:68 {
    ns32:68 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 8" ;
        skos:prefLabel "CmsConcept 68" .
}

_:Ne02c4a04739a455e894edcc0f3d2d5c1 {
    _:Ne02c4a04739a455e894edcc0f3d2d5c1 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N0f3164a794614eb694643cb4d89c751a ;
        dcterms:spatial _:N74bb449e51524200978f5a798e299e75 ;
        dcterms:title "CmsCollection0CmsWork2 closing" ;
        cms:work ns131:work2 .

    _:N74bb449e51524200978f5a798e299e75 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N0f3164a794614eb694643cb4d89c751a a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns151:Thumbnail800x800 {
    ns151:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns346:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:80 .

    ns346:CmsImage0 foaf:thumbnail ns151:Thumbnail800x800 .
}

ns235:Thumbnail600x600 {
    ns235:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns96:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:65 .

    ns96:CmsImage1 foaf:thumbnail ns235:Thumbnail600x600 .
}

ns144:Thumbnail200x200 {
    ns144:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns255:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:organization2 .

    ns255:CmsImage1 foaf:thumbnail ns144:Thumbnail200x200 .
}

ns1:organization0 {
    ns1:organization0 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 0" ;
        foaf:page ns1:organization0page .
}

ns79:Thumbnail400x400 {
    ns79:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns390:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:55 .

    ns390:CmsImage0 foaf:thumbnail ns79:Thumbnail400x400 .
}

ns363:Thumbnail400x400 {
    ns363:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns208:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:16 .

    ns208:CmsImage0 foaf:thumbnail ns363:Thumbnail400x400 .
}

ns265:Thumbnail400x400 {
    ns265:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language image 0 rights holder" ;
        dcterms:title "Language image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns282:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:language .

    ns282:CmsImage0 foaf:thumbnail ns265:Thumbnail400x400 .
}

ns301:Thumbnail200x200 {
    ns301:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns402:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:71 .

    ns402:CmsImage0 foaf:thumbnail ns301:Thumbnail200x200 .
}

ns138:CmsImage1 {
    ns138:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:72 .
}

ns248:Thumbnail600x600 {
    ns248:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns383:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:107 .

    ns383:CmsImage1 foaf:thumbnail ns248:Thumbnail600x600 .
}

ns433:Thumbnail400x400 {
    ns433:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns126:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:93 .

    ns126:CmsImage0 foaf:thumbnail ns433:Thumbnail400x400 .
}

ns284:Thumbnail400x400 {
    ns284:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns183:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:57 .

    ns183:CmsImage1 foaf:thumbnail ns284:Thumbnail400x400 .
}

ns413:CmsImage1 {
    ns413:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns131:work3 .
}

ns228:CmsImage0 {
    ns228:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:32 .
}

ns218:Thumbnail200x200 {
    ns218:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns404:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:81 .

    ns404:CmsImage0 foaf:thumbnail ns218:Thumbnail200x200 .
}

ns32:95 {
    ns32:95 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 5" ;
        skos:prefLabel "CmsConcept 95" .
}

ns32:30 {
    ns32:30 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 0" ;
        skos:prefLabel "CmsConcept 30" .
}

ns122:Thumbnail200x200 {
    ns122:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:109 .

    ns403:CmsImage0 foaf:thumbnail ns122:Thumbnail200x200 .
}

ns186:Thumbnail600x600 {
    ns186:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns372:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:organization1 .

    ns372:CmsImage1 foaf:thumbnail ns186:Thumbnail600x600 .
}

ns415:Thumbnail600x600 {
    ns415:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns124:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:37 .

    ns124:CmsImage1 foaf:thumbnail ns415:Thumbnail600x600 .
}

ns371:Thumbnail600x600 {
    ns371:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source image 0 rights holder" ;
        dcterms:title "Source image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns118:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:source .

    ns118:CmsImage0 foaf:thumbnail ns371:Thumbnail600x600 .
}

ns291:Thumbnail600x600 {
    ns291:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns175:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:38 .

    ns175:CmsImage0 foaf:thumbnail ns291:Thumbnail600x600 .
}

ns15:Thumbnail400x400 {
    ns15:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns305:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:51 .

    ns305:CmsImage0 foaf:thumbnail ns15:Thumbnail400x400 .
}

ns116:work6Location {
    ns116:work6Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns199:Thumbnail600x600 {
    ns199:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns272:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:62 .

    ns272:CmsImage0 foaf:thumbnail ns199:Thumbnail600x600 .
}

ns58:Thumbnail400x400 {
    ns58:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language image 1 rights holder" ;
        dcterms:title "Language image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns282:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:language .

    ns282:CmsImage1 foaf:thumbnail ns58:Thumbnail400x400 .
}

ns2:CmsImage0 {
    ns2:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:27 .
}

ns32:77 {
    ns32:77 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 7" ;
        skos:prefLabel "CmsConcept 77" .
}

ns100:Thumbnail200x200 {
    ns100:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium image 1 rights holder" ;
        dcterms:title "Medium image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns125:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:medium .

    ns125:CmsImage1 foaf:thumbnail ns100:Thumbnail200x200 .
}

ns386:Thumbnail400x400 {
    ns386:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns285:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns131:work2 .

    ns285:CmsImage1 foaf:thumbnail ns386:Thumbnail400x400 .
}

ns331:Thumbnail400x400 {
    ns331:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns112:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:73 .

    ns112:CmsImage0 foaf:thumbnail ns331:Thumbnail400x400 .
}

ns51:Thumbnail800x800 {
    ns51:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns334:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:1 .

    ns334:CmsImage0 foaf:thumbnail ns51:Thumbnail800x800 .
}

ns325:Thumbnail200x200 {
    ns325:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns419:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:78 .

    ns419:CmsImage1 foaf:thumbnail ns325:Thumbnail200x200 .
}

ns178:Thumbnail600x600 {
    ns178:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:12 .

    ns399:CmsImage0 foaf:thumbnail ns178:Thumbnail600x600 .
}

ns313:Thumbnail200x200 {
    ns313:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns269:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:15 .

    ns269:CmsImage1 foaf:thumbnail ns313:Thumbnail200x200 .
}

ns192:Thumbnail200x200 {
    ns192:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Description image 1 rights holder" ;
        dcterms:title "Description image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns393:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:description .

    ns393:CmsImage1 foaf:thumbnail ns192:Thumbnail200x200 .
}

ns89:Thumbnail200x200 {
    ns89:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns297:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:52 .

    ns297:CmsImage1 foaf:thumbnail ns89:Thumbnail200x200 .
}

ns37:Thumbnail800x800 {
    ns37:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:25 .

    ns392:CmsImage0 foaf:thumbnail ns37:Thumbnail800x800 .
}

ns300:Thumbnail200x200 {
    ns300:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns426:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:3 .

    ns426:CmsImage1 foaf:thumbnail ns300:Thumbnail200x200 .
}

ns439:CmsImage0 {
    ns439:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:43 .
}

ns403:CmsImage0 {
    ns403:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:109 .
}

ns299:Thumbnail200x200 {
    ns299:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns445:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:28 .

    ns445:CmsImage1 foaf:thumbnail ns299:Thumbnail200x200 .
}

ns32:44 {
    ns32:44 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 4" ;
        skos:prefLabel "CmsConcept 44" .
}

ns388:Thumbnail800x800 {
    ns388:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns239:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:83 .

    ns239:CmsImage1 foaf:thumbnail ns388:Thumbnail800x800 .
}

ns289:Thumbnail400x400 {
    ns289:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns319:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:person1 .

    ns319:CmsImage0 foaf:thumbnail ns289:Thumbnail400x400 .
}

ns321:Thumbnail600x600 {
    ns321:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns351:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:45 .

    ns351:CmsImage1 foaf:thumbnail ns321:Thumbnail600x600 .
}

ns273:Thumbnail400x400 {
    ns273:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns390:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:55 .

    ns390:CmsImage1 foaf:thumbnail ns273:Thumbnail400x400 .
}

ns324:Thumbnail200x200 {
    ns324:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Title image 0 rights holder" ;
        dcterms:title "Title image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:title .

    ns396:CmsImage0 foaf:thumbnail ns324:Thumbnail200x200 .
}

ns105:Thumbnail400x400 {
    ns105:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns444:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:31 .

    ns444:CmsImage1 foaf:thumbnail ns105:Thumbnail400x400 .
}

ns418:Thumbnail200x200 {
    ns418:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns81:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:39 .

    ns81:CmsImage1 foaf:thumbnail ns418:Thumbnail200x200 .
}

dcterms:extent {
    dcterms:extent a cms:Property ;
        rdfs:label "Extent" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns429:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> .
}

ns32:20 {
    ns32:20 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 0" ;
        skos:prefLabel "CmsConcept 20" .
}

ns281:Thumbnail400x400 {
    ns281:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns103:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:76 .

    ns103:CmsImage1 foaf:thumbnail ns281:Thumbnail400x400 .
}

ns7:Thumbnail600x600 {
    ns7:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns355:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:98 .

    ns355:CmsImage0 foaf:thumbnail ns7:Thumbnail600x600 .
}

ns32:2 {
    ns32:2 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 2" ;
        skos:prefLabel "CmsConcept 2" .
}

ns340:Thumbnail200x200 {
    ns340:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns247:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:21 .

    ns247:CmsImage0 foaf:thumbnail ns340:Thumbnail200x200 .
}

ns433:Thumbnail800x800 {
    ns433:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns126:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:93 .

    ns126:CmsImage0 foaf:thumbnail ns433:Thumbnail800x800 .
}

ns88:Thumbnail800x800 {
    ns88:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique image 0 rights holder" ;
        dcterms:title "Technique image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns409:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts vra:technique .

    ns409:CmsImage0 foaf:thumbnail ns88:Thumbnail800x800 .
}

ns189:Thumbnail200x200 {
    ns189:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns99:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:0 .

    ns99:CmsImage1 foaf:thumbnail ns189:Thumbnail200x200 .
}

ns32:46 {
    ns32:46 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 6" ;
        skos:prefLabel "CmsConcept 46" .
}

ns242:Thumbnail200x200 {
    ns242:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns254:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:99 .

    ns254:CmsImage1 foaf:thumbnail ns242:Thumbnail200x200 .
}

ns191:Thumbnail800x800 {
    ns191:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context image 1 rights holder" ;
        dcterms:title "Cultural context image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns251:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts vra:culturalContext .

    ns251:CmsImage1 foaf:thumbnail ns191:Thumbnail800x800 .
}

ns106:Thumbnail200x200 {
    ns106:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns426:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:3 .

    ns426:CmsImage0 foaf:thumbnail ns106:Thumbnail200x200 .
}

ns205:Thumbnail800x800 {
    ns205:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns67:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:11 .

    ns67:CmsImage0 foaf:thumbnail ns205:Thumbnail800x800 .
}

ns214:Thumbnail200x200 {
    ns214:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns182:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:19 .

    ns182:CmsImage1 foaf:thumbnail ns214:Thumbnail200x200 .
}

ns346:CmsImage1 {
    ns346:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:80 .
}

ns440:CmsImage0 {
    ns440:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:53 .
}

ns430:Thumbnail200x200 {
    ns430:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns378:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:person2 .

    ns378:CmsImage0 foaf:thumbnail ns430:Thumbnail200x200 .
}

ns384:Thumbnail800x800 {
    ns384:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 1 rights holder" ;
        dcterms:title "Synthetic data properties image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns120:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns429:property_group .

    ns120:CmsImage1 foaf:thumbnail ns384:Thumbnail800x800 .
}

ns440:CmsImage1 {
    ns440:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:53 .
}

dcterms:language {
    dcterms:language a cms:Property ;
        rdfs:label "Language" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns429:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> .
}

ns155:Thumbnail400x400 {
    ns155:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns288:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:organization4 .

    ns288:CmsImage0 foaf:thumbnail ns155:Thumbnail400x400 .
}

ns433:Thumbnail200x200 {
    ns433:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns126:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:93 .

    ns126:CmsImage0 foaf:thumbnail ns433:Thumbnail200x200 .
}

ns240:Thumbnail400x400 {
    ns240:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique image 1 rights holder" ;
        dcterms:title "Technique image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns409:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts vra:technique .

    ns409:CmsImage1 foaf:thumbnail ns240:Thumbnail400x400 .
}

ns410:Thumbnail600x600 {
    ns410:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns339:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:13 .

    ns339:CmsImage0 foaf:thumbnail ns410:Thumbnail600x600 .
}

ns111:Thumbnail200x200 {
    ns111:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns306:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:26 .

    ns306:CmsImage1 foaf:thumbnail ns111:Thumbnail200x200 .
}

ns112:CmsImage0 {
    ns112:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:73 .
}

ns342:Thumbnail400x400 {
    ns342:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns270:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:14 .

    ns270:CmsImage1 foaf:thumbnail ns342:Thumbnail400x400 .
}

ns322:Thumbnail600x600 {
    ns322:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns287:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:74 .

    ns287:CmsImage1 foaf:thumbnail ns322:Thumbnail600x600 .
}

ns333:CmsImage1 {
    ns333:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:41 .
}

ns32:67 {
    ns32:67 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 7" ;
        skos:prefLabel "CmsConcept 67" .
}

ns114:Thumbnail800x800 {
    ns114:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns373:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:6 .

    ns373:CmsImage0 foaf:thumbnail ns114:Thumbnail800x800 .
}

ns152:Thumbnail600x600 {
    ns152:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns42:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:100 .

    ns42:CmsImage0 foaf:thumbnail ns152:Thumbnail600x600 .
}

ns441:CmsImage1 {
    ns441:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:9 .
}

ns52:Thumbnail800x800 {
    ns52:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type image 0 rights holder" ;
        dcterms:title "Type image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns394:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:type .

    ns394:CmsImage0 foaf:thumbnail ns52:Thumbnail800x800 .
}

ns80:Thumbnail600x600 {
    ns80:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns67:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:11 .

    ns67:CmsImage1 foaf:thumbnail ns80:Thumbnail600x600 .
}

ns282:CmsImage0 {
    ns282:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language image 0 rights holder" ;
        dcterms:title "Language image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:language .
}

ns32:96 {
    ns32:96 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 6" ;
        skos:prefLabel "CmsConcept 96" .
}

ns32:34 {
    ns32:34 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 4" ;
        skos:prefLabel "CmsConcept 34" .
}

ns111:Thumbnail400x400 {
    ns111:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns306:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:26 .

    ns306:CmsImage1 foaf:thumbnail ns111:Thumbnail400x400 .
}

ns214:Thumbnail600x600 {
    ns214:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns182:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:19 .

    ns182:CmsImage1 foaf:thumbnail ns214:Thumbnail600x600 .
}

ns1:organization1 {
    ns1:organization1 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 1" ;
        foaf:page ns1:organization1page .
}

ns139:Thumbnail600x600 {
    ns139:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns296:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:24 .

    ns296:CmsImage0 foaf:thumbnail ns139:Thumbnail600x600 .
}

ns91:Thumbnail800x800 {
    ns91:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns174:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:40 .

    ns174:CmsImage1 foaf:thumbnail ns91:Thumbnail800x800 .
}

ns260:Thumbnail600x600 {
    ns260:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns228:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:32 .

    ns228:CmsImage1 foaf:thumbnail ns260:Thumbnail600x600 .
}

ns408:CmsImage1 {
    ns408:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:82 .
}

ns239:CmsImage1 {
    ns239:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:83 .
}

ns168:Thumbnail600x600 {
    ns168:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns420:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:56 .

    ns420:CmsImage0 foaf:thumbnail ns168:Thumbnail600x600 .
}

ns131:work0Creation {
    ns131:work0Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns1:organization2,
            ns1:organization3 ;
        dcterms:date _:N779674f3a1374061aa5af7a8cd8da40c ;
        dcterms:description _:N4ff135455ee1493c9145d88689c3fcf5 ;
        dcterms:spatial ns131:work0Location ;
        dcterms:title "CmsCollection0CmsWork0 creation" ;
        cms:work ns131:work0 .

    _:N779674f3a1374061aa5af7a8cd8da40c a cms:DateTimeDescription ;
        time:day "---01"^^xsd:gDay ;
        time:month "--01"^^xsd:gMonth ;
        time:year "2022"^^xsd:gYear .

    _:N4ff135455ee1493c9145d88689c3fcf5 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns348:Thumbnail400x400 {
    ns348:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:25 .

    ns392:CmsImage1 foaf:thumbnail ns348:Thumbnail400x400 .
}

ns49:Thumbnail400x400 {
    ns49:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns306:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:26 .

    ns306:CmsImage0 foaf:thumbnail ns49:Thumbnail400x400 .
}

ns388:Thumbnail200x200 {
    ns388:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns239:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:83 .

    ns239:CmsImage1 foaf:thumbnail ns388:Thumbnail200x200 .
}

ns376:Thumbnail400x400 {
    ns376:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns272:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:62 .

    ns272:CmsImage1 foaf:thumbnail ns376:Thumbnail400x400 .
}

ns262:Thumbnail600x600 {
    ns262:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns408:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:82 .

    ns408:CmsImage0 foaf:thumbnail ns262:Thumbnail600x600 .
}

ns372:CmsImage0 {
    ns372:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:organization1 .
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
        foaf:depicts ns32:106 .
}

ns141:Thumbnail400x400 {
    ns141:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns269:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:15 .

    ns269:CmsImage0 foaf:thumbnail ns141:Thumbnail400x400 .
}

ns400:Thumbnail600x600 {
    ns400:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns238:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:35 .

    ns238:CmsImage0 foaf:thumbnail ns400:Thumbnail600x600 .
}

ns382:Thumbnail200x200 {
    ns382:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns247:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:21 .

    ns247:CmsImage1 foaf:thumbnail ns382:Thumbnail200x200 .
}

ns371:Thumbnail400x400 {
    ns371:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source image 0 rights holder" ;
        dcterms:title "Source image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns118:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:source .

    ns118:CmsImage0 foaf:thumbnail ns371:Thumbnail400x400 .
}

ns405:Thumbnail800x800 {
    ns405:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns129:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:91 .

    ns129:CmsImage1 foaf:thumbnail ns405:Thumbnail800x800 .
}

ns197:Thumbnail200x200 {
    ns197:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns280:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns116:work4 .

    ns280:CmsImage1 foaf:thumbnail ns197:Thumbnail200x200 .
}

ns50:Thumbnail600x600 {
    ns50:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns124:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:37 .

    ns124:CmsImage0 foaf:thumbnail ns50:Thumbnail600x600 .
}

ns104:Thumbnail400x400 {
    ns104:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns428:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:freestandingwork10 .

    ns428:CmsImage0 foaf:thumbnail ns104:Thumbnail400x400 .
}

ns405:Thumbnail400x400 {
    ns405:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns129:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:91 .

    ns129:CmsImage1 foaf:thumbnail ns405:Thumbnail400x400 .
}

ns7:Thumbnail800x800 {
    ns7:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns355:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:98 .

    ns355:CmsImage0 foaf:thumbnail ns7:Thumbnail800x800 .
}

ns398:Thumbnail200x200 {
    ns398:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium image 0 rights holder" ;
        dcterms:title "Medium image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns125:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:medium .

    ns125:CmsImage0 foaf:thumbnail ns398:Thumbnail200x200 .
}

ns1:freestandingwork8Opening {
    ns1:freestandingwork8Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-24"^^xsd:date ;
        dcterms:description _:Na9bc19eebb7540c8a2653757af084bdb ;
        dcterms:spatial _:Ncc1caa8344a64041aff1f91b7449b77b ;
        dcterms:title "FreestandingWork8 opening" ;
        cms:work ns1:freestandingwork8 .

    _:Ncc1caa8344a64041aff1f91b7449b77b a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:Na9bc19eebb7540c8a2653757af084bdb a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns275:Thumbnail200x200 {
    ns275:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns444:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:31 .

    ns444:CmsImage0 foaf:thumbnail ns275:Thumbnail200x200 .
}

ns173:Thumbnail800x800 {
    ns173:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns422:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:organization3 .

    ns422:CmsImage1 foaf:thumbnail ns173:Thumbnail800x800 .
}

ns62:Thumbnail600x600 {
    ns62:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns285:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns131:work2 .

    ns285:CmsImage0 foaf:thumbnail ns62:Thumbnail600x600 .
}

ns381:Thumbnail400x400 {
    ns381:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns332:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:77 .

    ns332:CmsImage0 foaf:thumbnail ns381:Thumbnail400x400 .
}

ns1:freestandingwork9Location {
    ns1:freestandingwork9Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

_:N712c4fed1a664137a4de71f27ab5fbb1 {
    _:N712c4fed1a664137a4de71f27ab5fbb1 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:Ne79352a07ac747378f2ad003a89aeebd ;
        dcterms:title "CmsCollection0CmsWork3 closing" ;
        cms:work ns131:work3 .

    _:Ne79352a07ac747378f2ad003a89aeebd a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns127:Thumbnail400x400 {
    ns127:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns278:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:94 .

    ns278:CmsImage0 foaf:thumbnail ns127:Thumbnail400x400 .
}

ns26:Thumbnail400x400 {
    ns26:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns219:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:92 .

    ns219:CmsImage1 foaf:thumbnail ns26:Thumbnail400x400 .
}

ns102:Thumbnail200x200 {
    ns102:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns234:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:104 .

    ns234:CmsImage1 foaf:thumbnail ns102:Thumbnail200x200 .
}

ns80:Thumbnail200x200 {
    ns80:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns67:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:11 .

    ns67:CmsImage1 foaf:thumbnail ns80:Thumbnail200x200 .
}

ns203:Thumbnail200x200 {
    ns203:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns182:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:19 .

    ns182:CmsImage0 foaf:thumbnail ns203:Thumbnail200x200 .
}

ns133:Thumbnail200x200 {
    ns133:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns294:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:17 .

    ns294:CmsImage0 foaf:thumbnail ns133:Thumbnail200x200 .
}

ns64:Thumbnail400x400 {
    ns64:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns438:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:49 .

    ns438:CmsImage1 foaf:thumbnail ns64:Thumbnail400x400 .
}

ns411:Thumbnail600x600 {
    ns411:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:109 .

    ns403:CmsImage1 foaf:thumbnail ns411:Thumbnail600x600 .
}

ns32:38 {
    ns32:38 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 8" ;
        skos:prefLabel "CmsConcept 38" .
}

ns3:Thumbnail200x200 {
    ns3:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns339:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:13 .

    ns339:CmsImage1 foaf:thumbnail ns3:Thumbnail200x200 .
}

ns249:Thumbnail600x600 {
    ns249:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns19:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:102 .

    ns19:CmsImage0 foaf:thumbnail ns249:Thumbnail600x600 .
}

ns32:24 {
    ns32:24 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 4" ;
        skos:prefLabel "CmsConcept 24" .
}

ns35:Thumbnail400x400 {
    ns35:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns234:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:104 .

    ns234:CmsImage0 foaf:thumbnail ns35:Thumbnail400x400 .
}

ns193:Thumbnail400x400 {
    ns193:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns219:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:92 .

    ns219:CmsImage0 foaf:thumbnail ns193:Thumbnail400x400 .
}

ns206:Thumbnail600x600 {
    ns206:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns56:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:61 .

    ns56:CmsImage0 foaf:thumbnail ns206:Thumbnail600x600 .
}

ns391:Thumbnail600x600 {
    ns391:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns238:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:35 .

    ns238:CmsImage1 foaf:thumbnail ns391:Thumbnail600x600 .
}

ns432:Thumbnail200x200 {
    ns432:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns424:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:60 .

    ns424:CmsImage1 foaf:thumbnail ns432:Thumbnail200x200 .
}

ns6:Thumbnail200x200 {
    ns6:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns440:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:53 .

    ns440:CmsImage0 foaf:thumbnail ns6:Thumbnail200x200 .
}

ns128:CmsImage0 {
    ns128:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:90 .
}

ns284:Thumbnail800x800 {
    ns284:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns183:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:57 .

    ns183:CmsImage1 foaf:thumbnail ns284:Thumbnail800x800 .
}

ns232:Thumbnail400x400 {
    ns232:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:8 .

    ns385:CmsImage0 foaf:thumbnail ns232:Thumbnail400x400 .
}

ns427:Thumbnail800x800 {
    ns427:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material image 1 rights holder" ;
        dcterms:title "Material image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns36:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts vra:material .

    ns36:CmsImage1 foaf:thumbnail ns427:Thumbnail800x800 .
}

ns292:CmsImage1 {
    ns292:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:58 .
}

ns326:CmsImage0 {
    ns326:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:105 .
}

ns385:CmsImage1 {
    ns385:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:8 .
}

ns361:Thumbnail800x800 {
    ns361:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns333:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:41 .

    ns333:CmsImage0 foaf:thumbnail ns361:Thumbnail800x800 .
}

ns377:CmsImage1 {
    ns377:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns116:work7 .
}

ns84:Thumbnail600x600 {
    ns84:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns119:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:person4 .

    ns119:CmsImage0 foaf:thumbnail ns84:Thumbnail600x600 .
}

ns352:Thumbnail800x800 {
    ns352:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Title image 1 rights holder" ;
        dcterms:title "Title image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:title .

    ns396:CmsImage1 foaf:thumbnail ns352:Thumbnail800x800 .
}

ns331:Thumbnail600x600 {
    ns331:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns112:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:73 .

    ns112:CmsImage0 foaf:thumbnail ns331:Thumbnail600x600 .
}

ns177:Thumbnail200x200 {
    ns177:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns287:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:74 .

    ns287:CmsImage0 foaf:thumbnail ns177:Thumbnail200x200 .
}

ns295:CmsImage0 {
    ns295:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:79 .
}

ns248:Thumbnail200x200 {
    ns248:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns383:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:107 .

    ns383:CmsImage1 foaf:thumbnail ns248:Thumbnail200x200 .
}

ns78:Thumbnail400x400 {
    ns78:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns290:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:person3 .

    ns290:CmsImage0 foaf:thumbnail ns78:Thumbnail400x400 .
}

ns358:Thumbnail400x400 {
    ns358:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns420:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:56 .

    ns420:CmsImage1 foaf:thumbnail ns358:Thumbnail400x400 .
}

ns420:CmsImage0 {
    ns420:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:56 .
}

ns143:Thumbnail400x400 {
    ns143:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns442:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:106 .

    ns442:CmsImage1 foaf:thumbnail ns143:Thumbnail400x400 .
}

ns414:CmsImage0 {
    ns414:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:organization0 .
}

ns179:Thumbnail200x200 {
    ns179:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns305:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:51 .

    ns305:CmsImage1 foaf:thumbnail ns179:Thumbnail200x200 .
}

ns443:CmsImage0 {
    ns443:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:36 .
}

ns277:Thumbnail800x800 {
    ns277:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns296:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:24 .

    ns296:CmsImage1 foaf:thumbnail ns277:Thumbnail800x800 .
}

ns315:CmsImage1 {
    ns315:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:47 .
}

ns410:Thumbnail800x800 {
    ns410:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns339:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:13 .

    ns339:CmsImage0 foaf:thumbnail ns410:Thumbnail800x800 .
}

ns304:Thumbnail800x800 {
    ns304:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns207:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:33 .

    ns207:CmsImage0 foaf:thumbnail ns304:Thumbnail800x800 .
}

ns6:Thumbnail800x800 {
    ns6:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns440:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:53 .

    ns440:CmsImage0 foaf:thumbnail ns6:Thumbnail800x800 .
}

ns148:Thumbnail400x400 {
    ns148:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns336:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:freestandingwork11 .

    ns336:CmsImage1 foaf:thumbnail ns148:Thumbnail400x400 .
}

ns73:Thumbnail600x600 {
    ns73:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns443:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:36 .

    ns443:CmsImage1 foaf:thumbnail ns73:Thumbnail600x600 .
}

ns444:CmsImage0 {
    ns444:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:31 .
}

ns312:Thumbnail200x200 {
    ns312:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns389:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:2 .

    ns389:CmsImage0 foaf:thumbnail ns312:Thumbnail200x200 .
}

ns431:CmsImage1 {
    ns431:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:103 .
}

ns1:person3 {
    ns1:person3 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            wd:Q7251 ;
        contact:sortName "3, CmsPerson" ;
        foaf:familyName "3" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 3" .
}

ns60:Thumbnail800x800 {
    ns60:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns278:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:94 .

    ns278:CmsImage1 foaf:thumbnail ns60:Thumbnail800x800 .
}

ns171:Thumbnail200x200 {
    ns171:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns401:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:18 .

    ns401:CmsImage0 foaf:thumbnail ns171:Thumbnail200x200 .
}

ns160:Thumbnail400x400 {
    ns160:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns129:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:91 .

    ns129:CmsImage0 foaf:thumbnail ns160:Thumbnail400x400 .
}

ns32:78 {
    ns32:78 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 8" ;
        skos:prefLabel "CmsConcept 78" .
}

ns327:Thumbnail800x800 {
    ns327:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns439:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:43 .

    ns439:CmsImage0 foaf:thumbnail ns327:Thumbnail800x800 .
}

ns57:Thumbnail600x600 {
    ns57:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns221:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:20 .

    ns221:CmsImage0 foaf:thumbnail ns57:Thumbnail600x600 .
}

ns131:work0Location {
    ns131:work0Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns312:Thumbnail400x400 {
    ns312:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns389:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:2 .

    ns389:CmsImage0 foaf:thumbnail ns312:Thumbnail400x400 .
}

ns342:Thumbnail200x200 {
    ns342:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns270:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:14 .

    ns270:CmsImage1 foaf:thumbnail ns342:Thumbnail200x200 .
}

ns235:Thumbnail200x200 {
    ns235:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns96:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:65 .

    ns96:CmsImage1 foaf:thumbnail ns235:Thumbnail200x200 .
}

ns17:Thumbnail200x200 {
    ns17:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns341:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:97 .

    ns341:CmsImage0 foaf:thumbnail ns17:Thumbnail200x200 .
}

ns432:Thumbnail400x400 {
    ns432:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns424:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:60 .

    ns424:CmsImage1 foaf:thumbnail ns432:Thumbnail400x400 .
}

ns362:Thumbnail200x200 {
    ns362:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source image 1 rights holder" ;
        dcterms:title "Source image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns118:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:source .

    ns118:CmsImage1 foaf:thumbnail ns362:Thumbnail200x200 .
}

ns131:work3Location {
    ns131:work3Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns206:Thumbnail400x400 {
    ns206:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns56:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:61 .

    ns56:CmsImage0 foaf:thumbnail ns206:Thumbnail400x400 .
}

ns293:Thumbnail800x800 {
    ns293:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns414:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:organization0 .

    ns414:CmsImage0 foaf:thumbnail ns293:Thumbnail800x800 .
}

ns136:Thumbnail800x800 {
    ns136:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns236:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns131:work0 .

    ns236:CmsImage0 foaf:thumbnail ns136:Thumbnail800x800 .
}

ns225:Thumbnail600x600 {
    ns225:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns165:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:collection1 .

    ns165:CmsImage1 foaf:thumbnail ns225:Thumbnail600x600 .
}

ns30:Thumbnail800x800 {
    ns30:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns309:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:person0 .

    ns309:CmsImage0 foaf:thumbnail ns30:Thumbnail800x800 .
}

ns142:Thumbnail400x400 {
    ns142:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject image 0 rights holder" ;
        dcterms:title "Subject image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns86:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:subject .

    ns86:CmsImage0 foaf:thumbnail ns142:Thumbnail400x400 .
}

ns32:61 {
    ns32:61 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 1" ;
        skos:prefLabel "CmsConcept 61" .
}

ns353:Thumbnail200x200 {
    ns353:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent image 1 rights holder" ;
        dcterms:title "Extent image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns10:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:extent .

    ns10:CmsImage1 foaf:thumbnail ns353:Thumbnail200x200 .
}

ns51:Thumbnail400x400 {
    ns51:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns334:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:1 .

    ns334:CmsImage0 foaf:thumbnail ns51:Thumbnail400x400 .
}

ns412:Thumbnail200x200 {
    ns412:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns231:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns116:work6 .

    ns231:CmsImage0 foaf:thumbnail ns412:Thumbnail200x200 .
}

ns32:43 {
    ns32:43 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 3" ;
        skos:prefLabel "CmsConcept 43" .
}

ns368:Thumbnail200x200 {
    ns368:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type image 1 rights holder" ;
        dcterms:title "Type image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns394:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:type .

    ns394:CmsImage1 foaf:thumbnail ns368:Thumbnail200x200 .
}

ns365:CmsImage1 {
    ns365:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher image 1 rights holder" ;
        dcterms:title "Publisher image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:publisher .
}

ns28:Thumbnail600x600 {
    ns28:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns440:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:53 .

    ns440:CmsImage1 foaf:thumbnail ns28:Thumbnail600x600 .
}

ns424:CmsImage0 {
    ns424:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:60 .
}

ns427:Thumbnail200x200 {
    ns427:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material image 1 rights holder" ;
        dcterms:title "Material image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns36:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts vra:material .

    ns36:CmsImage1 foaf:thumbnail ns427:Thumbnail200x200 .
}

ns382:Thumbnail800x800 {
    ns382:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns247:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:21 .

    ns247:CmsImage1 foaf:thumbnail ns382:Thumbnail800x800 .
}

ns418:Thumbnail800x800 {
    ns418:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns81:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:39 .

    ns81:CmsImage1 foaf:thumbnail ns418:Thumbnail800x800 .
}

ns325:Thumbnail600x600 {
    ns325:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns419:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:78 .

    ns419:CmsImage1 foaf:thumbnail ns325:Thumbnail600x600 .
}

ns171:Thumbnail600x600 {
    ns171:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns401:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:18 .

    ns401:CmsImage0 foaf:thumbnail ns171:Thumbnail600x600 .
}

ns193:Thumbnail800x800 {
    ns193:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns219:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:92 .

    ns219:CmsImage0 foaf:thumbnail ns193:Thumbnail800x800 .
}

ns351:CmsImage1 {
    ns351:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:45 .
}

ns310:CmsImage1 {
    ns310:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:5 .
}

ns49:Thumbnail800x800 {
    ns49:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns306:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:26 .

    ns306:CmsImage0 foaf:thumbnail ns49:Thumbnail800x800 .
}

ns321:Thumbnail200x200 {
    ns321:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns351:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:45 .

    ns351:CmsImage1 foaf:thumbnail ns321:Thumbnail200x200 .
}

ns443:CmsImage1 {
    ns443:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:36 .
}

ns147:Thumbnail200x200 {
    ns147:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns350:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:48 .

    ns350:CmsImage1 foaf:thumbnail ns147:Thumbnail200x200 .
}

ns40:Thumbnail200x200 {
    ns40:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns441:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:9 .

    ns441:CmsImage1 foaf:thumbnail ns40:Thumbnail200x200 .
}

ns376:Thumbnail600x600 {
    ns376:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns272:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:62 .

    ns272:CmsImage1 foaf:thumbnail ns376:Thumbnail600x600 .
}

ns32:51 {
    ns32:51 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 1" ;
        skos:prefLabel "CmsConcept 51" .
}

ns415:Thumbnail800x800 {
    ns415:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns124:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:37 .

    ns124:CmsImage1 foaf:thumbnail ns415:Thumbnail800x800 .
}

ns183:CmsImage0 {
    ns183:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:57 .
}

ns302:Thumbnail200x200 {
    ns302:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns68:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:64 .

    ns68:CmsImage1 foaf:thumbnail ns302:Thumbnail200x200 .
}

ns367:Thumbnail200x200 {
    ns367:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns138:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:72 .

    ns138:CmsImage1 foaf:thumbnail ns367:Thumbnail200x200 .
}

ns116:work4Opening {
    ns116:work4Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-28"^^xsd:date ;
        dcterms:description _:N2e06723d616045a5b6ac9c8e84a9d2a2 ;
        dcterms:spatial _:N8b0fd8d141574bb695172f44fda24b9c ;
        dcterms:title "CmsCollection1CmsWork4 opening" ;
        cms:work ns116:work4 .

    _:N8b0fd8d141574bb695172f44fda24b9c a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N2e06723d616045a5b6ac9c8e84a9d2a2 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns379:Thumbnail600x600 {
    ns379:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns326:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:105 .

    ns326:CmsImage0 foaf:thumbnail ns379:Thumbnail600x600 .
}

ns32:88 {
    ns32:88 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 8" ;
        skos:prefLabel "CmsConcept 88" .
}

ns159:Thumbnail400x400 {
    ns159:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns431:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:103 .

    ns431:CmsImage1 foaf:thumbnail ns159:Thumbnail400x400 .
}

ns238:CmsImage0 {
    ns238:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:35 .
}

ns258:Thumbnail600x600 {
    ns258:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns110:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:63 .

    ns110:CmsImage0 foaf:thumbnail ns258:Thumbnail600x600 .
}

ns283:Thumbnail200x200 {
    ns283:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns442:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:106 .

    ns442:CmsImage0 foaf:thumbnail ns283:Thumbnail200x200 .
}

ns284:Thumbnail200x200 {
    ns284:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns183:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:57 .

    ns183:CmsImage1 foaf:thumbnail ns284:Thumbnail200x200 .
}

ns46:Thumbnail600x600 {
    ns46:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher image 0 rights holder" ;
        dcterms:title "Publisher image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:publisher .

    ns365:CmsImage0 foaf:thumbnail ns46:Thumbnail600x600 .
}

ns390:CmsImage0 {
    ns390:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:55 .
}

ns417:Thumbnail400x400 {
    ns417:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns270:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:14 .

    ns270:CmsImage0 foaf:thumbnail ns417:Thumbnail400x400 .
}

ns74:Thumbnail600x600 {
    ns74:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns128:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:90 .

    ns128:CmsImage0 foaf:thumbnail ns74:Thumbnail600x600 .
}

ns298:Thumbnail600x600 {
    ns298:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns117:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:84 .

    ns117:CmsImage1 foaf:thumbnail ns298:Thumbnail600x600 .
}

ns328:Thumbnail400x400 {
    ns328:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:8 .

    ns385:CmsImage1 foaf:thumbnail ns328:Thumbnail400x400 .
}

ns303:Thumbnail200x200 {
    ns303:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent image 0 rights holder" ;
        dcterms:title "Extent image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns10:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:extent .

    ns10:CmsImage0 foaf:thumbnail ns303:Thumbnail200x200 .
}

ns350:CmsImage0 {
    ns350:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:48 .
}

ns417:Thumbnail200x200 {
    ns417:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns270:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:14 .

    ns270:CmsImage0 foaf:thumbnail ns417:Thumbnail200x200 .
}

ns246:Thumbnail200x200 {
    ns246:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Description image 0 rights holder" ;
        dcterms:title "Description image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns393:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts dcterms:description .

    ns393:CmsImage0 foaf:thumbnail ns246:Thumbnail200x200 .
}

ns297:CmsImage1 {
    ns297:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:52 .
}

ns428:CmsImage0 {
    ns428:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:freestandingwork10 .
}

ns406:Thumbnail800x800 {
    ns406:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns113:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:108 .

    ns113:CmsImage1 foaf:thumbnail ns406:Thumbnail800x800 .
}

ns69:Thumbnail200x200 {
    ns69:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns402:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:71 .

    ns402:CmsImage1 foaf:thumbnail ns69:Thumbnail200x200 .
}

ns322:Thumbnail200x200 {
    ns322:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns287:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:74 .

    ns287:CmsImage1 foaf:thumbnail ns322:Thumbnail200x200 .
}

ns169:Thumbnail400x400 {
    ns169:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns239:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:83 .

    ns239:CmsImage0 foaf:thumbnail ns169:Thumbnail400x400 .
}

ns435:CmsImage0 {
    ns435:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:86 .
}

ns24:Thumbnail600x600 {
    ns24:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns439:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:43 .

    ns439:CmsImage1 foaf:thumbnail ns24:Thumbnail600x600 .
}

ns107:Thumbnail400x400 {
    ns107:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns408:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:82 .

    ns408:CmsImage1 foaf:thumbnail ns107:Thumbnail400x400 .
}

ns371:Thumbnail800x800 {
    ns371:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source image 0 rights holder" ;
        dcterms:title "Source image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns118:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:source .

    ns118:CmsImage0 foaf:thumbnail ns371:Thumbnail800x800 .
}

ns445:CmsImage0 {
    ns445:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:28 .
}

ns411:Thumbnail400x400 {
    ns411:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:109 .

    ns403:CmsImage1 foaf:thumbnail ns411:Thumbnail400x400 .
}

ns224:CmsImage0 {
    ns224:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:freestandingwork8 .
}

ns189:Thumbnail800x800 {
    ns189:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns99:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:0 .

    ns99:CmsImage1 foaf:thumbnail ns189:Thumbnail800x800 .
}

ns1:organization3 {
    ns1:organization3 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 3" ;
        foaf:page ns1:organization3page .
}

ns370:Thumbnail200x200 {
    ns370:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns310:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:5 .

    ns310:CmsImage0 foaf:thumbnail ns370:Thumbnail200x200 .
}

ns432:Thumbnail600x600 {
    ns432:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns424:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:60 .

    ns424:CmsImage1 foaf:thumbnail ns432:Thumbnail600x600 .
}

ns1:organization2 {
    ns1:organization2 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 2" ;
        foaf:page ns1:organization2page .
}

ns362:Thumbnail600x600 {
    ns362:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source image 1 rights holder" ;
        dcterms:title "Source image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns118:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:source .

    ns118:CmsImage1 foaf:thumbnail ns362:Thumbnail600x600 .
}

ns196:Thumbnail200x200 {
    ns196:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns164:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:54 .

    ns164:CmsImage1 foaf:thumbnail ns196:Thumbnail200x200 .
}

ns222:Thumbnail600x600 {
    ns222:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns110:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:63 .

    ns110:CmsImage1 foaf:thumbnail ns222:Thumbnail600x600 .
}

ns381:Thumbnail800x800 {
    ns381:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns332:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:77 .

    ns332:CmsImage0 foaf:thumbnail ns381:Thumbnail800x800 .
}

ns116:work4 {
    ns116:work4 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork4 alternative title 0",
            "CmsCollection1CmsWork4 alternative title 1" ;
        dcterms:contributor _:N43a7fbe992ce47be8e37608044b7073c,
            _:N692f5004b32d4c18be1e8312e7dfac07 ;
        dcterms:creator ns1:person1,
            ns1:person2 ;
        dcterms:description _:N2e06723d616045a5b6ac9c8e84a9d2a2 ;
        dcterms:extent ns32:14,
            ns32:15 ;
        dcterms:identifier "CmsCollection1CmsWork4Id0",
            "CmsCollection1CmsWork4Id1" ;
        dcterms:language ns32:24,
            ns32:25 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns32:44,
            ns32:45 ;
        dcterms:provenance "CmsCollection1CmsWork4 provenance 0",
            "CmsCollection1CmsWork4 provenance 1" ;
        dcterms:publisher ns32:54,
            ns32:55 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 rights holder" ;
        dcterms:source ns32:64,
            ns32:65 ;
        dcterms:spatial ns116:work4Location ;
        dcterms:subject ns32:84,
            ns32:85 ;
        dcterms:title "CmsCollection1CmsWork4" ;
        dcterms:type ns32:104,
            ns32:105 ;
        vra:culturalContext ns32:4,
            ns32:5 ;
        vra:material ns32:34,
            ns32:35 ;
        vra:technique ns32:94,
            ns32:95 ;
        cms:collection ns1:collection1 ;
        foaf:page <http://example.com/work/4> .

    _:N43a7fbe992ce47be8e37608044b7073c a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork4 contributor 0" .

    _:N692f5004b32d4c18be1e8312e7dfac07 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork4 contributor 1" .

    _:N2e06723d616045a5b6ac9c8e84a9d2a2 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns357:Thumbnail800x800 {
    ns357:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns428:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:freestandingwork10 .

    ns428:CmsImage1 foaf:thumbnail ns357:Thumbnail800x800 .
}

ns426:CmsImage1 {
    ns426:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:3 .
}

ns439:CmsImage1 {
    ns439:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:43 .
}

ns1:freestandingwork11 {
    ns1:freestandingwork11 a cms:Work ;
        dcterms:alternative "FreestandingWork11 alternative title 0",
            "FreestandingWork11 alternative title 1" ;
        dcterms:contributor _:N97a19e083e054083bd94ef75041d34ce,
            _:Nc8d7f4f651844ec6ad57e18f113c54aa ;
        dcterms:creator ns1:organization3,
            ns1:organization4 ;
        dcterms:extent ns32:11,
            ns32:12 ;
        dcterms:identifier "FreestandingWork11Id0",
            "FreestandingWork11Id1" ;
        dcterms:language ns32:21,
            ns32:22 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns32:41,
            ns32:42 ;
        dcterms:provenance "FreestandingWork11 provenance 0",
            "FreestandingWork11 provenance 1" ;
        dcterms:publisher ns32:51,
            ns32:52 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 rights holder" ;
        dcterms:source ns32:61,
            ns32:62 ;
        dcterms:spatial ns1:freestandingwork11Location ;
        dcterms:subject ns32:81,
            ns32:82 ;
        dcterms:title "FreestandingWork11" ;
        dcterms:type ns32:101,
            ns32:102 ;
        vra:culturalContext ns32:1,
            ns32:2 ;
        vra:material ns32:31,
            ns32:32 ;
        vra:technique ns32:91,
            ns32:92 .

    _:N97a19e083e054083bd94ef75041d34ce a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork11 contributor 1" .

    _:Nc8d7f4f651844ec6ad57e18f113c54aa a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork11 contributor 0" .
}

ns5:Thumbnail200x200 {
    ns5:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns315:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:47 .

    ns315:CmsImage1 foaf:thumbnail ns5:Thumbnail200x200 .
}

ns289:Thumbnail600x600 {
    ns289:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns319:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:person1 .

    ns319:CmsImage0 foaf:thumbnail ns289:Thumbnail600x600 .
}

ns221:CmsImage0 {
    ns221:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:20 .
}

ns337:Thumbnail200x200 {
    ns337:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns446:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:7 .

    ns446:CmsImage1 foaf:thumbnail ns337:Thumbnail200x200 .
}

ns148:Thumbnail600x600 {
    ns148:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns336:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:freestandingwork11 .

    ns336:CmsImage1 foaf:thumbnail ns148:Thumbnail600x600 .
}

ns170:Thumbnail400x400 {
    ns170:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns423:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:68 .

    ns423:CmsImage1 foaf:thumbnail ns170:Thumbnail400x400 .
}

ns32:6 {
    ns32:6 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 6" ;
        skos:prefLabel "CmsConcept 6" .
}

ns77:Thumbnail800x800 {
    ns77:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns54:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:89 .

    ns54:CmsImage1 foaf:thumbnail ns77:Thumbnail800x800 .
}

ns181:Thumbnail800x800 {
    ns181:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns435:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:86 .

    ns435:CmsImage1 foaf:thumbnail ns181:Thumbnail800x800 .
}

ns418:Thumbnail400x400 {
    ns418:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns81:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:39 .

    ns81:CmsImage1 foaf:thumbnail ns418:Thumbnail400x400 .
}

ns391:Thumbnail200x200 {
    ns391:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns238:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:35 .

    ns238:CmsImage1 foaf:thumbnail ns391:Thumbnail200x200 .
}

ns363:Thumbnail800x800 {
    ns363:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns208:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:16 .

    ns208:CmsImage0 foaf:thumbnail ns363:Thumbnail800x800 .
}

ns438:CmsImage0 {
    ns438:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:49 .
}

ns145:CmsImage1 {
    ns145:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:85 .
}

ns154:Thumbnail600x600 {
    ns154:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns315:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:47 .

    ns315:CmsImage0 foaf:thumbnail ns154:Thumbnail600x600 .
}

ns332:CmsImage0 {
    ns332:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:77 .
}

ns131:work3Creation {
    ns131:work3Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns1:person0,
            ns1:person1 ;
        dcterms:date _:Nc7031cdf97904c22ad4592b580c501e8 ;
        dcterms:spatial ns131:work3Location ;
        dcterms:title "CmsCollection0CmsWork3 creation" ;
        cms:work ns131:work3 .

    _:Nc7031cdf97904c22ad4592b580c501e8 a cms:DateTimeDescription ;
        time:day "---29"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns131:work3 {
    ns131:work3 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork3 alternative title 0",
            "CmsCollection0CmsWork3 alternative title 1" ;
        dcterms:contributor _:N51f23b2402494ae7b4d8fd512e6ac741,
            _:N921c9cfe971042fab1accad4e52bcca9 ;
        dcterms:creator ns1:person0,
            ns1:person1 ;
        dcterms:extent ns32:13,
            ns32:14 ;
        dcterms:identifier "CmsCollection0CmsWork3Id0",
            "CmsCollection0CmsWork3Id1" ;
        dcterms:language ns32:23,
            ns32:24 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns32:43,
            ns32:44 ;
        dcterms:provenance "CmsCollection0CmsWork3 provenance 0",
            "CmsCollection0CmsWork3 provenance 1" ;
        dcterms:publisher ns32:53,
            ns32:54 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 rights holder" ;
        dcterms:source ns32:63,
            ns32:64 ;
        dcterms:spatial ns131:work3Location ;
        dcterms:subject ns32:83,
            ns32:84 ;
        dcterms:title "CmsCollection0CmsWork3" ;
        dcterms:type ns32:103,
            ns32:104 ;
        vra:culturalContext ns32:3,
            ns32:4 ;
        vra:material ns32:33,
            ns32:34 ;
        vra:technique ns32:93,
            ns32:94 ;
        cms:collection ns1:collection0 .

    _:N51f23b2402494ae7b4d8fd512e6ac741 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork3 contributor 0" .

    _:N921c9cfe971042fab1accad4e52bcca9 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork3 contributor 1" .
}

ns216:Thumbnail600x600 {
    ns216:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher image 1 rights holder" ;
        dcterms:title "Publisher image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts dcterms:publisher .

    ns365:CmsImage1 foaf:thumbnail ns216:Thumbnail600x600 .
}

ns209:Thumbnail800x800 {
    ns209:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns20:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:44 .

    ns20:CmsImage1 foaf:thumbnail ns209:Thumbnail800x800 .
}

ns67:CmsImage1 {
    ns67:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:11 .
}

ns4:Thumbnail400x400 {
    ns4:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns256:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns116:work5 .

    ns256:CmsImage1 foaf:thumbnail ns4:Thumbnail400x400 .
}

ns135:Thumbnail600x600 {
    ns135:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns446:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:7 .

    ns446:CmsImage0 foaf:thumbnail ns135:Thumbnail600x600 .
}

ns422:CmsImage0 {
    ns422:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:organization3 .
}

ns401:CmsImage0 {
    ns401:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:18 .
}

ns8:Thumbnail200x200 {
    ns8:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 0 rights holder" ;
        dcterms:title "Synthetic data properties image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns120:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns429:property_group .

    ns120:CmsImage0 foaf:thumbnail ns8:Thumbnail200x200 .
}

ns257:Thumbnail400x400 {
    ns257:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns425:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:29 .

    ns425:CmsImage1 foaf:thumbnail ns257:Thumbnail400x400 .
}

ns300:Thumbnail400x400 {
    ns300:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns426:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:3 .

    ns426:CmsImage1 foaf:thumbnail ns300:Thumbnail400x400 .
}

ns335:CmsImage1 {
    ns335:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:46 .
}

ns400:Thumbnail400x400 {
    ns400:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns238:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:35 .

    ns238:CmsImage0 foaf:thumbnail ns400:Thumbnail400x400 .
}

ns140:Thumbnail800x800 {
    ns140:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns335:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:46 .

    ns335:CmsImage0 foaf:thumbnail ns140:Thumbnail800x800 .
}

ns136:Thumbnail200x200 {
    ns136:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns236:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns131:work0 .

    ns236:CmsImage0 foaf:thumbnail ns136:Thumbnail200x200 .
}

ns250:Thumbnail800x800 {
    ns250:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns347:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns131:work1 .

    ns347:CmsImage0 foaf:thumbnail ns250:Thumbnail800x800 .
}

ns18:Thumbnail800x800 {
    ns18:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns256:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns116:work5 .

    ns256:CmsImage0 foaf:thumbnail ns18:Thumbnail800x800 .
}

ns161:Thumbnail200x200 {
    ns161:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns81:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:39 .

    ns81:CmsImage0 foaf:thumbnail ns161:Thumbnail200x200 .
}

ns398:Thumbnail400x400 {
    ns398:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium image 0 rights holder" ;
        dcterms:title "Medium image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns125:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:medium .

    ns125:CmsImage0 foaf:thumbnail ns398:Thumbnail400x400 .
}

ns209:Thumbnail600x600 {
    ns209:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns20:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:44 .

    ns20:CmsImage1 foaf:thumbnail ns209:Thumbnail600x600 .
}

ns69:Thumbnail800x800 {
    ns69:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns402:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:71 .

    ns402:CmsImage1 foaf:thumbnail ns69:Thumbnail800x800 .
}

ns345:CmsImage1 {
    ns345:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:75 .
}

ns303:Thumbnail400x400 {
    ns303:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent image 0 rights holder" ;
        dcterms:title "Extent image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns10:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:extent .

    ns10:CmsImage0 foaf:thumbnail ns303:Thumbnail400x400 .
}

ns93:Thumbnail600x600 {
    ns93:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material image 0 rights holder" ;
        dcterms:title "Material image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns36:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts vra:material .

    ns36:CmsImage0 foaf:thumbnail ns93:Thumbnail600x600 .
}

ns356:Thumbnail200x200 {
    ns356:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns174:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:40 .

    ns174:CmsImage0 foaf:thumbnail ns356:Thumbnail200x200 .
}

ns204:Thumbnail800x800 {
    ns204:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns113:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:108 .

    ns113:CmsImage0 foaf:thumbnail ns204:Thumbnail800x800 .
}

ns213:Thumbnail400x400 {
    ns213:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns12:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:67 .

    ns12:CmsImage0 foaf:thumbnail ns213:Thumbnail400x400 .
}

ns407:Thumbnail800x800 {
    ns407:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns119:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:person4 .

    ns119:CmsImage1 foaf:thumbnail ns407:Thumbnail800x800 .
}

ns317:Thumbnail800x800 {
    ns317:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns441:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:9 .

    ns441:CmsImage0 foaf:thumbnail ns317:Thumbnail800x800 .
}

ns125:CmsImage0 {
    ns125:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium image 0 rights holder" ;
        dcterms:title "Medium image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:medium .
}

ns357:Thumbnail400x400 {
    ns357:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns428:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:freestandingwork10 .

    ns428:CmsImage1 foaf:thumbnail ns357:Thumbnail400x400 .
}

ns42:CmsImage1 {
    ns42:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:100 .
}

ns244:Thumbnail200x200 {
    ns244:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns295:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:79 .

    ns295:CmsImage0 foaf:thumbnail ns244:Thumbnail200x200 .
}

ns329:Thumbnail400x400 {
    ns329:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns280:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns116:work4 .

    ns280:CmsImage0 foaf:thumbnail ns329:Thumbnail400x400 .
}

ns446:CmsImage0 {
    ns446:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:7 .
}

ns412:Thumbnail800x800 {
    ns412:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns231:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns116:work6 .

    ns231:CmsImage0 foaf:thumbnail ns412:Thumbnail800x800 .
}

ns395:Thumbnail400x400 {
    ns395:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns221:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:20 .

    ns221:CmsImage1 foaf:thumbnail ns395:Thumbnail400x400 .
}

ns445:CmsImage1 {
    ns445:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:28 .
}

ns32:11 {
    ns32:11 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 1" ;
        skos:prefLabel "CmsConcept 11" .
}

ns176:Thumbnail200x200 {
    ns176:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns311:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:23 .

    ns311:CmsImage1 foaf:thumbnail ns176:Thumbnail200x200 .
}

ns446:CmsImage1 {
    ns446:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:7 .
}

ns369:Thumbnail400x400 {
    ns369:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns14:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:34 .

    ns14:CmsImage1 foaf:thumbnail ns369:Thumbnail400x400 .
}

ns131:work2Opening {
    ns131:work2Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-30"^^xsd:date ;
        dcterms:description _:N0f3164a794614eb694643cb4d89c751a ;
        dcterms:spatial _:N74bb449e51524200978f5a798e299e75 ;
        dcterms:title "CmsCollection0CmsWork2 opening" ;
        cms:work ns131:work2 .

    _:N74bb449e51524200978f5a798e299e75 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N0f3164a794614eb694643cb4d89c751a a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns32:56 {
    ns32:56 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 6" ;
        skos:prefLabel "CmsConcept 56" .
}

ns90:Thumbnail400x400 {
    ns90:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns378:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:person2 .

    ns378:CmsImage1 foaf:thumbnail ns90:Thumbnail400x400 .
}

ns407:Thumbnail200x200 {
    ns407:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns119:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns1:person4 .

    ns119:CmsImage1 foaf:thumbnail ns407:Thumbnail200x200 .
}

ns88:Thumbnail400x400 {
    ns88:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique image 0 rights holder" ;
        dcterms:title "Technique image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns409:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts vra:technique .

    ns409:CmsImage0 foaf:thumbnail ns88:Thumbnail400x400 .
}

ns375:Thumbnail800x800 {
    ns375:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns383:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:107 .

    ns383:CmsImage0 foaf:thumbnail ns375:Thumbnail800x800 .
}

ns347:CmsImage1 {
    ns347:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns131:work1 .
}

ns197:Thumbnail600x600 {
    ns197:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns280:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns116:work4 .

    ns280:CmsImage1 foaf:thumbnail ns197:Thumbnail600x600 .
}

ns352:Thumbnail400x400 {
    ns352:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Title image 1 rights holder" ;
        dcterms:title "Title image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:title .

    ns396:CmsImage1 foaf:thumbnail ns352:Thumbnail400x400 .
}

ns201:Thumbnail400x400 {
    ns201:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns292:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:58 .

    ns292:CmsImage0 foaf:thumbnail ns201:Thumbnail400x400 .
}

ns142:Thumbnail800x800 {
    ns142:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject image 0 rights holder" ;
        dcterms:title "Subject image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns86:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts dcterms:subject .

    ns86:CmsImage0 foaf:thumbnail ns142:Thumbnail800x800 .
}

ns313:Thumbnail400x400 {
    ns313:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns269:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:15 .

    ns269:CmsImage1 foaf:thumbnail ns313:Thumbnail400x400 .
}

ns323:Thumbnail400x400 {
    ns323:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns254:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:99 .

    ns254:CmsImage0 foaf:thumbnail ns323:Thumbnail400x400 .
}

ns384:Thumbnail600x600 {
    ns384:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 1 rights holder" ;
        dcterms:title "Synthetic data properties image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns120:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns429:property_group .

    ns120:CmsImage1 foaf:thumbnail ns384:Thumbnail600x600 .
}

ns248:Thumbnail800x800 {
    ns248:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns383:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:107 .

    ns383:CmsImage1 foaf:thumbnail ns248:Thumbnail800x800 .
}

ns162:Thumbnail800x800 {
    ns162:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns377:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns116:work7 .

    ns377:CmsImage0 foaf:thumbnail ns162:Thumbnail800x800 .
}

ns266:Thumbnail800x800 {
    ns266:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns99:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:0 .

    ns99:CmsImage0 foaf:thumbnail ns266:Thumbnail800x800 .
}

ns32:28 {
    ns32:28 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 8" ;
        skos:prefLabel "CmsConcept 28" .
}

ns276:Thumbnail200x200 {
    ns276:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns236:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns131:work0 .

    ns236:CmsImage1 foaf:thumbnail ns276:Thumbnail200x200 .
}

ns437:CmsImage0 {
    ns437:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:95 .
}

ns327:Thumbnail200x200 {
    ns327:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns439:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:43 .

    ns439:CmsImage0 foaf:thumbnail ns327:Thumbnail200x200 .
}

ns363:Thumbnail200x200 {
    ns363:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns208:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:16 .

    ns208:CmsImage0 foaf:thumbnail ns363:Thumbnail200x200 .
}

ns279:Thumbnail200x200 {
    ns279:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns14:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:34 .

    ns14:CmsImage0 foaf:thumbnail ns279:Thumbnail200x200 .
}

ns379:Thumbnail400x400 {
    ns379:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns326:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:105 .

    ns326:CmsImage0 foaf:thumbnail ns379:Thumbnail400x400 .
}

ns441:CmsImage0 {
    ns441:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:9 .
}

ns39:Thumbnail200x200 {
    ns39:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns421:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:30 .

    ns421:CmsImage1 foaf:thumbnail ns39:Thumbnail200x200 .
}

ns28:Thumbnail800x800 {
    ns28:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns440:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:53 .

    ns440:CmsImage1 foaf:thumbnail ns28:Thumbnail800x800 .
}

ns396:CmsImage1 {
    ns396:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Title image 1 rights holder" ;
        dcterms:title "Title image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:title .
}

ns76:Thumbnail600x600 {
    ns76:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns354:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:42 .

    ns354:CmsImage1 foaf:thumbnail ns76:Thumbnail600x600 .
}

ns233:Thumbnail200x200 {
    ns233:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns346:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:80 .

    ns346:CmsImage1 foaf:thumbnail ns233:Thumbnail200x200 .
}

ns299:Thumbnail600x600 {
    ns299:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns445:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:28 .

    ns445:CmsImage1 foaf:thumbnail ns299:Thumbnail600x600 .
}

ns434:CmsImage0 {
    ns434:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial image 0 rights holder" ;
        dcterms:title "Spatial image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts dcterms:spatial .
}

ns395:Thumbnail600x600 {
    ns395:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns221:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:20 .

    ns221:CmsImage1 foaf:thumbnail ns395:Thumbnail600x600 .
}

ns406:Thumbnail200x200 {
    ns406:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns113:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:108 .

    ns113:CmsImage1 foaf:thumbnail ns406:Thumbnail200x200 .
}

ns253:Thumbnail200x200 {
    ns253:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns138:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:72 .

    ns138:CmsImage0 foaf:thumbnail ns253:Thumbnail200x200 .
}

ns116:work5 {
    ns116:work5 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork5 alternative title 0",
            "CmsCollection1CmsWork5 alternative title 1" ;
        dcterms:contributor _:N63b45561f8a444eeb14d295bd0497b4a,
            _:Nfce2be76ec8e4eca92e4f77f17dab2c4 ;
        dcterms:creator ns1:person2,
            ns1:person3 ;
        dcterms:extent ns32:15,
            ns32:16 ;
        dcterms:identifier "CmsCollection1CmsWork5Id0",
            "CmsCollection1CmsWork5Id1" ;
        dcterms:language ns32:25,
            ns32:26 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns32:45,
            ns32:46 ;
        dcterms:provenance "CmsCollection1CmsWork5 provenance 0",
            "CmsCollection1CmsWork5 provenance 1" ;
        dcterms:publisher ns32:55,
            ns32:56 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 rights holder" ;
        dcterms:source ns32:65,
            ns32:66 ;
        dcterms:spatial ns116:work5Location ;
        dcterms:subject ns32:85,
            ns32:86 ;
        dcterms:title "CmsCollection1CmsWork5" ;
        dcterms:type ns32:105,
            ns32:106 ;
        vra:culturalContext ns32:5,
            ns32:6 ;
        vra:material ns32:35,
            ns32:36 ;
        vra:technique ns32:95,
            ns32:96 ;
        cms:collection ns1:collection1 .

    _:N63b45561f8a444eeb14d295bd0497b4a a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork5 contributor 1" .

    _:Nfce2be76ec8e4eca92e4f77f17dab2c4 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork5 contributor 0" .
}

ns353:Thumbnail400x400 {
    ns353:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent image 1 rights holder" ;
        dcterms:title "Extent image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns10:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts dcterms:extent .

    ns10:CmsImage1 foaf:thumbnail ns353:Thumbnail400x400 .
}

ns444:CmsImage1 {
    ns444:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:31 .
}

ns268:Thumbnail600x600 {
    ns268:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns413:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns131:work3 .

    ns413:CmsImage1 foaf:thumbnail ns268:Thumbnail600x600 .
}

ns32:26 {
    ns32:26 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 6" ;
        skos:prefLabel "CmsConcept 26" .
}

ns158:Thumbnail200x200 {
    ns158:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns360:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:70 .

    ns360:CmsImage0 foaf:thumbnail ns158:Thumbnail200x200 .
}

ns263:Thumbnail200x200 {
    ns263:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns295:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:79 .

    ns295:CmsImage1 foaf:thumbnail ns263:Thumbnail200x200 .
}

ns378:CmsImage0 {
    ns378:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:person2 .
}

ns407:Thumbnail600x600 {
    ns407:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns119:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:person4 .

    ns119:CmsImage1 foaf:thumbnail ns407:Thumbnail600x600 .
}

ns115:Thumbnail400x400 {
    ns115:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns373:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:6 .

    ns373:CmsImage1 foaf:thumbnail ns115:Thumbnail400x400 .
}

ns409:CmsImage0 {
    ns409:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique image 0 rights holder" ;
        dcterms:title "Technique image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts vra:technique .
}

ns360:CmsImage0 {
    ns360:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:70 .
}

ns404:CmsImage1 {
    ns404:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:81 .
}

ns323:Thumbnail800x800 {
    ns323:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns254:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:99 .

    ns254:CmsImage0 foaf:thumbnail ns323:Thumbnail800x800 .
}

ns416:Thumbnail200x200 {
    ns416:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns54:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:89 .

    ns54:CmsImage0 foaf:thumbnail ns416:Thumbnail200x200 .
}

ns165:CmsImage0 {
    ns165:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:collection1 .
}

ns18:Thumbnail200x200 {
    ns18:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns256:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns116:work5 .

    ns256:CmsImage0 foaf:thumbnail ns18:Thumbnail200x200 .
}

ns283:Thumbnail600x600 {
    ns283:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns442:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:106 .

    ns442:CmsImage0 foaf:thumbnail ns283:Thumbnail600x600 .
}

ns267:Thumbnail200x200 {
    ns267:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns421:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:30 .

    ns421:CmsImage0 foaf:thumbnail ns267:Thumbnail200x200 .
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
        foaf:depicts ns32:106 .
}

ns321:Thumbnail400x400 {
    ns321:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns351:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:45 .

    ns351:CmsImage1 foaf:thumbnail ns321:Thumbnail400x400 .
}

ns188:Thumbnail400x400 {
    ns188:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns351:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:45 .

    ns351:CmsImage0 foaf:thumbnail ns188:Thumbnail400x400 .
}

ns32:12 {
    ns32:12 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 2" ;
        skos:prefLabel "CmsConcept 12" .
}

ns383:CmsImage1 {
    ns383:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:107 .
}

ns176:Thumbnail800x800 {
    ns176:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns311:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:23 .

    ns311:CmsImage1 foaf:thumbnail ns176:Thumbnail800x800 .
}

ns32:57 {
    ns32:57 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 7" ;
        skos:prefLabel "CmsConcept 57" .
}

ns132:Thumbnail400x400 {
    ns132:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns319:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns1:person1 .

    ns319:CmsImage1 foaf:thumbnail ns132:Thumbnail400x400 .
}

ns286:Thumbnail800x800 {
    ns286:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns366:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:10 .

    ns366:CmsImage1 foaf:thumbnail ns286:Thumbnail800x800 .
}

ns1:freestandingwork8 {
    ns1:freestandingwork8 a cms:Work ;
        dcterms:alternative "FreestandingWork8 alternative title 0",
            "FreestandingWork8 alternative title 1" ;
        dcterms:contributor _:N0dc6b835f02047029606b163a104a321,
            _:N9a785229db474d64bea2485a089ea4ce ;
        dcterms:creator ns1:organization0,
            ns1:organization1 ;
        dcterms:description _:Na9bc19eebb7540c8a2653757af084bdb ;
        dcterms:extent ns32:18,
            ns32:19 ;
        dcterms:identifier "FreestandingWork8Id0",
            "FreestandingWork8Id1" ;
        dcterms:language ns32:28,
            ns32:29 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns32:48,
            ns32:49 ;
        dcterms:provenance "FreestandingWork8 provenance 0",
            "FreestandingWork8 provenance 1" ;
        dcterms:publisher ns32:58,
            ns32:59 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 rights holder" ;
        dcterms:source ns32:68,
            ns32:69 ;
        dcterms:spatial ns1:freestandingwork8Location ;
        dcterms:subject ns32:88,
            ns32:89 ;
        dcterms:title "FreestandingWork8" ;
        dcterms:type ns32:108,
            ns32:109 ;
        vra:culturalContext ns32:8,
            ns32:9 ;
        vra:material ns32:38,
            ns32:39 ;
        vra:technique ns32:98,
            ns32:99 ;
        foaf:page <http://example.com/work/8> .

    _:N0dc6b835f02047029606b163a104a321 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork8 contributor 0" .

    _:N9a785229db474d64bea2485a089ea4ce a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork8 contributor 1" .

    _:Na9bc19eebb7540c8a2653757af084bdb a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns159:Thumbnail200x200 {
    ns159:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns431:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:103 .

    ns431:CmsImage1 foaf:thumbnail ns159:Thumbnail200x200 .
}

ns131:work2Location {
    ns131:work2Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns294:CmsImage0 {
    ns294:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns32:17 .
}

ns361:Thumbnail600x600 {
    ns361:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns333:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:41 .

    ns333:CmsImage0 foaf:thumbnail ns361:Thumbnail600x600 .
}

ns288:CmsImage1 {
    ns288:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns1:organization4 .
}

ns64:Thumbnail200x200 {
    ns64:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns438:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:49 .

    ns438:CmsImage1 foaf:thumbnail ns64:Thumbnail200x200 .
}

ns87:Thumbnail600x600 {
    ns87:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns422:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns1:organization3 .

    ns422:CmsImage0 foaf:thumbnail ns87:Thumbnail600x600 .
}

ns70:Thumbnail800x800 {
    ns70:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns11:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:96 .

    ns11:CmsImage0 foaf:thumbnail ns70:Thumbnail800x800 .
}

ns32:7 {
    ns32:7 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 7" ;
        skos:prefLabel "CmsConcept 7" .
}

ns323:Thumbnail200x200 {
    ns323:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns254:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:99 .

    ns254:CmsImage0 foaf:thumbnail ns323:Thumbnail200x200 .
}

ns281:Thumbnail200x200 {
    ns281:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns103:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:76 .

    ns103:CmsImage1 foaf:thumbnail ns281:Thumbnail200x200 .
}

ns213:Thumbnail200x200 {
    ns213:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns12:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:67 .

    ns12:CmsImage0 foaf:thumbnail ns213:Thumbnail200x200 .
}

ns167:Thumbnail800x800 {
    ns167:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns336:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:freestandingwork11 .

    ns336:CmsImage0 foaf:thumbnail ns167:Thumbnail800x800 .
}

ns271:Thumbnail800x800 {
    ns271:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns345:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:75 .

    ns345:CmsImage0 foaf:thumbnail ns271:Thumbnail800x800 .
}

ns72:Thumbnail200x200 {
    ns72:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns150:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:4 .

    ns150:CmsImage0 foaf:thumbnail ns72:Thumbnail200x200 .
}

ns262:Thumbnail200x200 {
    ns262:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns408:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:82 .

    ns408:CmsImage0 foaf:thumbnail ns262:Thumbnail200x200 .
}

ns344:Thumbnail600x600 {
    ns344:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns195:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns32:69 .

    ns195:CmsImage0 foaf:thumbnail ns344:Thumbnail600x600 .
}

ns143:Thumbnail800x800 {
    ns143:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns442:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns32:106 .

    ns442:CmsImage1 foaf:thumbnail ns143:Thumbnail800x800 .
}

ns89:Thumbnail400x400 {
    ns89:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns297:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:52 .

    ns297:CmsImage1 foaf:thumbnail ns89:Thumbnail400x400 .
}

ns286:Thumbnail400x400 {
    ns286:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns366:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns32:10 .

    ns366:CmsImage1 foaf:thumbnail ns286:Thumbnail400x400 .
}

ns45:Thumbnail200x200 {
    ns45:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns332:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns32:77 .

    ns332:CmsImage1 foaf:thumbnail ns45:Thumbnail200x200 .
}

ns90:Thumbnail800x800 {
    ns90:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns378:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns1:person2 .

    ns378:CmsImage1 foaf:thumbnail ns90:Thumbnail800x800 .
}

ns131:work3Opening {
    ns131:work3Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-29"^^xsd:date ;
        dcterms:spatial _:Ne79352a07ac747378f2ad003a89aeebd ;
        dcterms:title "CmsCollection0CmsWork3 opening" ;
        cms:work ns131:work3 .

    _:Ne79352a07ac747378f2ad003a89aeebd a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns32:100 {
    ns32:100 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 0" ;
        skos:prefLabel "CmsConcept 100" .
}

ns190:Thumbnail400x400 {
    ns190:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns231:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns116:work6 .

    ns231:CmsImage1 foaf:thumbnail ns190:Thumbnail400x400 .
}
`);
