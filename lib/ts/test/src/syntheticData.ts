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
@prefix ns1: <urn:paradicms_etl:pipeline:synthetic_data:concept:75:CmsImage0:> .
@prefix ns10: <urn:paradicms_etl:pipeline:synthetic_data:concept:16:> .
@prefix ns100: <http://example.com/freestandingwork10:CmsImage1:> .
@prefix ns101: <urn:paradicms_etl:pipeline:synthetic_data:concept:60:CmsImage1:> .
@prefix ns102: <urn:paradicms_etl:pipeline:synthetic_data:concept:66:> .
@prefix ns103: <urn:paradicms_etl:pipeline:synthetic_data:concept:49:> .
@prefix ns104: <http://example.com/freestandingwork10:CmsImage0:> .
@prefix ns105: <urn:paradicms_etl:pipeline:synthetic_data:concept:72:CmsImage1:> .
@prefix ns106: <urn:paradicms_etl:pipeline:synthetic_data:concept:63:CmsImage1:> .
@prefix ns107: <urn:paradicms_etl:pipeline:synthetic_data:concept:61:CmsImage1:> .
@prefix ns108: <urn:paradicms_etl:pipeline:synthetic_data:concept:71:> .
@prefix ns109: <urn:paradicms_etl:pipeline:synthetic_data:concept:85:> .
@prefix ns11: <urn:paradicms_etl:pipeline:synthetic_data:concept:28:CmsImage0:> .
@prefix ns110: <urn:paradicms_etl:pipeline:synthetic_data:concept:66:CmsImage0:> .
@prefix ns111: <urn:paradicms_etl:pipeline:synthetic_data:concept:19:CmsImage1:> .
@prefix ns112: <urn:paradicms_etl:pipeline:synthetic_data:concept:90:CmsImage1:> .
@prefix ns113: <urn:paradicms_etl:pipeline:synthetic_data:concept:38:CmsImage1:> .
@prefix ns114: <http://example.com/collection1/work5:CmsImage1:> .
@prefix ns115: <urn:paradicms_etl:pipeline:synthetic_data:concept:89:CmsImage0:> .
@prefix ns116: <urn:paradicms_etl:pipeline:synthetic_data:concept:99:CmsImage1:> .
@prefix ns117: <urn:paradicms_etl:pipeline:synthetic_data:concept:21:> .
@prefix ns118: <urn:paradicms_etl:pipeline:synthetic_data:concept:93:> .
@prefix ns119: <urn:paradicms_etl:pipeline:synthetic_data:concept:24:CmsImage1:> .
@prefix ns12: <urn:paradicms_etl:pipeline:synthetic_data:concept:24:CmsImage0:> .
@prefix ns120: <http://example.com/person2:CmsImage0:> .
@prefix ns121: <urn:paradicms_etl:pipeline:synthetic_data:concept:25:CmsImage0:> .
@prefix ns122: <urn:paradicms_etl:pipeline:synthetic_data:concept:61:> .
@prefix ns123: <urn:paradicms_etl:pipeline:synthetic_data:concept:20:CmsImage1:> .
@prefix ns124: <urn:paradicms_etl:pipeline:synthetic_data:concept:76:> .
@prefix ns125: <urn:paradicms_etl:pipeline:synthetic_data:concept:83:CmsImage1:> .
@prefix ns126: <urn:paradicms_etl:pipeline:synthetic_data:concept:74:CmsImage0:> .
@prefix ns127: <urn:paradicms_etl:pipeline:synthetic_data:concept:106:CmsImage0:> .
@prefix ns128: <http://example.com/freestandingwork8:CmsImage1:> .
@prefix ns129: <urn:paradicms_etl:pipeline:synthetic_data:concept:49:CmsImage0:> .
@prefix ns13: <http://example.com/collection1/> .
@prefix ns130: <urn:paradicms_etl:pipeline:synthetic_data:concept:43:CmsImage1:> .
@prefix ns131: <urn:paradicms_etl:pipeline:synthetic_data:concept:82:CmsImage1:> .
@prefix ns132: <http://example.com/person1:CmsImage1:> .
@prefix ns133: <urn:paradicms_etl:pipeline:synthetic_data:concept:109:CmsImage1:> .
@prefix ns134: <urn:paradicms_etl:pipeline:synthetic_data:concept:7:CmsImage1:> .
@prefix ns135: <urn:paradicms_etl:pipeline:synthetic_data:concept:31:> .
@prefix ns136: <urn:paradicms_etl:pipeline:synthetic_data:concept:41:> .
@prefix ns137: <urn:paradicms_etl:pipeline:synthetic_data:concept:22:CmsImage0:> .
@prefix ns138: <urn:paradicms_etl:pipeline:synthetic_data:concept:86:CmsImage1:> .
@prefix ns139: <urn:paradicms_etl:pipeline:synthetic_data:concept:55:CmsImage0:> .
@prefix ns14: <urn:paradicms_etl:pipeline:synthetic_data:concept:21:CmsImage0:> .
@prefix ns140: <urn:paradicms_etl:pipeline:synthetic_data:concept:33:CmsImage0:> .
@prefix ns141: <http://example.com/person4:CmsImage1:> .
@prefix ns142: <urn:paradicms_etl:pipeline:synthetic_data:concept:52:> .
@prefix ns143: <urn:paradicms_etl:pipeline:synthetic_data:concept:87:> .
@prefix ns144: <urn:paradicms_etl:pipeline:synthetic_data:concept:40:> .
@prefix ns145: <urn:paradicms_etl:pipeline:synthetic_data:concept:96:CmsImage0:> .
@prefix ns146: <urn:paradicms_etl:pipeline:synthetic_data:concept:7:CmsImage0:> .
@prefix ns147: <urn:paradicms_etl:pipeline:synthetic_data:concept:66:CmsImage1:> .
@prefix ns148: <http://example.com/person0:CmsImage0:> .
@prefix ns149: <urn:paradicms_etl:pipeline:synthetic_data:concept:74:> .
@prefix ns15: <urn:paradicms_etl:pipeline:synthetic_data:concept:69:CmsImage1:> .
@prefix ns150: <http://example.com/collection1/work7:> .
@prefix ns151: <urn:paradicms_etl:pipeline:synthetic_data:concept:76:CmsImage1:> .
@prefix ns152: <urn:paradicms_etl:pipeline:synthetic_data:concept:4:CmsImage1:> .
@prefix ns153: <urn:paradicms_etl:pipeline:synthetic_data:concept:1:CmsImage1:> .
@prefix ns154: <urn:paradicms_etl:pipeline:synthetic_data:concept:43:> .
@prefix ns155: <urn:paradicms_etl:pipeline:synthetic_data:property_group:> .
@prefix ns156: <urn:paradicms_etl:pipeline:synthetic_data:concept:59:> .
@prefix ns157: <urn:paradicms_etl:pipeline:synthetic_data:concept:47:CmsImage0:> .
@prefix ns158: <urn:paradicms_etl:pipeline:synthetic_data:concept:21:CmsImage1:> .
@prefix ns159: <urn:paradicms_etl:pipeline:synthetic_data:concept:44:CmsImage0:> .
@prefix ns16: <urn:paradicms_etl:pipeline:synthetic_data:concept:58:CmsImage1:> .
@prefix ns160: <urn:paradicms_etl:pipeline:synthetic_data:concept:91:CmsImage1:> .
@prefix ns161: <http://example.com/person3:CmsImage1:> .
@prefix ns162: <urn:paradicms_etl:pipeline:synthetic_data:concept:59:CmsImage0:> .
@prefix ns163: <urn:paradicms_etl:pipeline:synthetic_data:concept:104:> .
@prefix ns164: <urn:paradicms_etl:pipeline:synthetic_data:concept:14:CmsImage1:> .
@prefix ns165: <http://example.com/collection1:CmsImage0:> .
@prefix ns166: <http://example.com/collection1/work4:CmsImage1:> .
@prefix ns167: <urn:paradicms_etl:pipeline:synthetic_data:concept:32:> .
@prefix ns168: <http://example.com/organization4:CmsImage0:> .
@prefix ns169: <urn:paradicms_etl:pipeline:synthetic_data:concept:17:CmsImage1:> .
@prefix ns17: <urn:paradicms_etl:pipeline:synthetic_data:concept:64:CmsImage1:> .
@prefix ns170: <urn:paradicms_etl:pipeline:synthetic_data:concept:7:> .
@prefix ns171: <urn:paradicms_etl:pipeline:synthetic_data:concept:28:CmsImage1:> .
@prefix ns172: <urn:paradicms_etl:pipeline:synthetic_data:concept:57:CmsImage0:> .
@prefix ns173: <urn:paradicms_etl:pipeline:synthetic_data:concept:50:CmsImage0:> .
@prefix ns174: <urn:paradicms_etl:pipeline:synthetic_data:concept:54:CmsImage0:> .
@prefix ns175: <urn:paradicms_etl:pipeline:synthetic_data:concept:47:CmsImage1:> .
@prefix ns176: <urn:paradicms_etl:pipeline:synthetic_data:concept:100:CmsImage1:> .
@prefix ns177: <urn:paradicms_etl:pipeline:synthetic_data:concept:71:CmsImage1:> .
@prefix ns178: <urn:paradicms_etl:pipeline:synthetic_data:concept:104:CmsImage1:> .
@prefix ns179: <urn:paradicms_etl:pipeline:synthetic_data:concept:13:> .
@prefix ns18: <urn:paradicms_etl:pipeline:synthetic_data:concept:94:CmsImage1:> .
@prefix ns180: <urn:paradicms_etl:pipeline:synthetic_data:concept:45:CmsImage1:> .
@prefix ns181: <urn:paradicms_etl:pipeline:synthetic_data:concept:8:CmsImage1:> .
@prefix ns182: <urn:paradicms_etl:pipeline:synthetic_data:concept:20:CmsImage0:> .
@prefix ns183: <urn:paradicms_etl:pipeline:synthetic_data:concept:9:CmsImage0:> .
@prefix ns184: <urn:paradicms_etl:pipeline:synthetic_data:concept:39:CmsImage0:> .
@prefix ns185: <urn:paradicms_etl:pipeline:synthetic_data:concept:87:CmsImage0:> .
@prefix ns186: <urn:paradicms_etl:pipeline:synthetic_data:concept:80:CmsImage0:> .
@prefix ns187: <urn:paradicms_etl:pipeline:synthetic_data:concept:27:CmsImage0:> .
@prefix ns188: <http://example.com/organization0:> .
@prefix ns189: <urn:paradicms_etl:pipeline:synthetic_data:concept:26:CmsImage1:> .
@prefix ns19: <urn:paradicms_etl:pipeline:synthetic_data:concept:90:CmsImage0:> .
@prefix ns190: <urn:paradicms_etl:pipeline:synthetic_data:concept:0:> .
@prefix ns191: <urn:paradicms_etl:pipeline:synthetic_data:concept:4:> .
@prefix ns192: <urn:paradicms_etl:pipeline:synthetic_data:concept:69:CmsImage0:> .
@prefix ns193: <urn:paradicms_etl:pipeline:synthetic_data:concept:86:CmsImage0:> .
@prefix ns194: <urn:paradicms_etl:pipeline:synthetic_data:concept:56:CmsImage0:> .
@prefix ns195: <urn:paradicms_etl:pipeline:synthetic_data:concept:82:> .
@prefix ns196: <urn:paradicms_etl:pipeline:synthetic_data:concept:3:CmsImage1:> .
@prefix ns197: <http://example.com/collection0/work0:> .
@prefix ns198: <urn:paradicms_etl:pipeline:synthetic_data:concept:34:> .
@prefix ns199: <http://example.com/collection1/work5:CmsImage0:> .
@prefix ns2: <urn:paradicms_etl:pipeline:synthetic_data:concept:39:CmsImage1:> .
@prefix ns20: <urn:paradicms_etl:pipeline:synthetic_data:concept:103:CmsImage0:> .
@prefix ns200: <urn:paradicms_etl:pipeline:synthetic_data:concept:30:CmsImage0:> .
@prefix ns201: <urn:paradicms_etl:pipeline:synthetic_data:property_group:CmsImage1:> .
@prefix ns202: <http://example.com/collection0/work3:CmsImage0:> .
@prefix ns203: <http://example.com/organization4:> .
@prefix ns204: <urn:paradicms_etl:pipeline:synthetic_data:concept:38:> .
@prefix ns205: <urn:paradicms_etl:pipeline:synthetic_data:concept:79:CmsImage0:> .
@prefix ns206: <urn:paradicms_etl:pipeline:synthetic_data:concept:38:CmsImage0:> .
@prefix ns207: <urn:paradicms_etl:pipeline:synthetic_data:concept:36:CmsImage1:> .
@prefix ns208: <urn:paradicms_etl:pipeline:synthetic_data:concept:85:CmsImage1:> .
@prefix ns209: <urn:paradicms_etl:pipeline:synthetic_data:concept:68:CmsImage1:> .
@prefix ns21: <urn:paradicms_etl:pipeline:synthetic_data:concept:95:CmsImage0:> .
@prefix ns210: <urn:paradicms_etl:pipeline:synthetic_data:property_group:CmsImage0:> .
@prefix ns211: <urn:paradicms_etl:pipeline:synthetic_data:concept:78:CmsImage1:> .
@prefix ns212: <http://example.com/freestandingwork9:CmsImage1:> .
@prefix ns213: <urn:paradicms_etl:pipeline:synthetic_data:concept:86:> .
@prefix ns214: <urn:paradicms_etl:pipeline:synthetic_data:concept:73:CmsImage0:> .
@prefix ns215: <urn:paradicms_etl:pipeline:synthetic_data:concept:5:CmsImage0:> .
@prefix ns216: <urn:paradicms_etl:pipeline:synthetic_data:concept:72:CmsImage0:> .
@prefix ns217: <http://example.com/person4:CmsImage0:> .
@prefix ns218: <urn:paradicms_etl:pipeline:synthetic_data:concept:33:CmsImage1:> .
@prefix ns219: <urn:paradicms_etl:pipeline:synthetic_data:concept:48:CmsImage0:> .
@prefix ns22: <urn:paradicms_etl:pipeline:synthetic_data:concept:12:CmsImage1:> .
@prefix ns220: <urn:paradicms_etl:pipeline:synthetic_data:concept:63:> .
@prefix ns221: <urn:paradicms_etl:pipeline:synthetic_data:concept:17:CmsImage0:> .
@prefix ns222: <urn:paradicms_etl:pipeline:synthetic_data:concept:78:CmsImage0:> .
@prefix ns223: <http://example.com/collection1/work4:> .
@prefix ns224: <http://example.com/collection1/work7:CmsImage0:> .
@prefix ns225: <urn:paradicms_etl:pipeline:synthetic_data:concept:36:CmsImage0:> .
@prefix ns226: <http://example.com/collection0/work1:CmsImage1:> .
@prefix ns227: <urn:paradicms_etl:pipeline:synthetic_data:concept:54:CmsImage1:> .
@prefix ns228: <http://example.com/collection1/work4:CmsImage0:> .
@prefix ns229: <urn:paradicms_etl:pipeline:synthetic_data:concept:93:CmsImage0:> .
@prefix ns23: <urn:paradicms_etl:pipeline:synthetic_data:concept:74:CmsImage1:> .
@prefix ns230: <urn:paradicms_etl:pipeline:synthetic_data:concept:64:CmsImage0:> .
@prefix ns231: <urn:paradicms_etl:pipeline:synthetic_data:concept:98:CmsImage0:> .
@prefix ns232: <urn:paradicms_etl:pipeline:synthetic_data:concept:105:CmsImage1:> .
@prefix ns233: <http://example.com/collection0/work3:> .
@prefix ns234: <http://example.com/organization0:CmsImage1:> .
@prefix ns235: <http://example.com/collection0/work2:CmsImage1:> .
@prefix ns236: <urn:paradicms_etl:pipeline:synthetic_data:concept:34:CmsImage0:> .
@prefix ns237: <urn:paradicms_etl:pipeline:synthetic_data:concept:42:CmsImage0:> .
@prefix ns238: <urn:paradicms_etl:pipeline:synthetic_data:concept:67:> .
@prefix ns239: <urn:paradicms_etl:pipeline:synthetic_data:concept:76:CmsImage0:> .
@prefix ns24: <urn:paradicms_etl:pipeline:synthetic_data:concept:2:CmsImage1:> .
@prefix ns240: <urn:paradicms_etl:pipeline:synthetic_data:concept:53:> .
@prefix ns241: <urn:paradicms_etl:pipeline:synthetic_data:concept:97:CmsImage0:> .
@prefix ns242: <urn:paradicms_etl:pipeline:synthetic_data:concept:88:CmsImage1:> .
@prefix ns243: <urn:paradicms_etl:pipeline:synthetic_data:concept:29:> .
@prefix ns244: <urn:paradicms_etl:pipeline:synthetic_data:concept:79:> .
@prefix ns245: <urn:paradicms_etl:pipeline:synthetic_data:concept:12:CmsImage0:> .
@prefix ns246: <urn:paradicms_etl:pipeline:synthetic_data:concept:56:CmsImage1:> .
@prefix ns247: <urn:paradicms_etl:pipeline:synthetic_data:concept:59:CmsImage1:> .
@prefix ns248: <http://example.com/person3:CmsImage0:> .
@prefix ns249: <urn:paradicms_etl:pipeline:synthetic_data:concept:71:CmsImage0:> .
@prefix ns25: <urn:paradicms_etl:pipeline:synthetic_data:concept:87:CmsImage1:> .
@prefix ns250: <http://example.com/organization4:CmsImage1:> .
@prefix ns251: <http://example.com/person1:> .
@prefix ns252: <urn:paradicms_etl:pipeline:synthetic_data:concept:2:> .
@prefix ns253: <urn:paradicms_etl:pipeline:synthetic_data:concept:80:CmsImage1:> .
@prefix ns254: <urn:paradicms_etl:pipeline:synthetic_data:concept:42:CmsImage1:> .
@prefix ns255: <urn:paradicms_etl:pipeline:synthetic_data:concept:73:CmsImage1:> .
@prefix ns256: <urn:paradicms_etl:pipeline:synthetic_data:concept:65:> .
@prefix ns257: <http://example.com/person2:> .
@prefix ns258: <urn:paradicms_etl:pipeline:synthetic_data:concept:23:CmsImage1:> .
@prefix ns259: <urn:paradicms_etl:pipeline:synthetic_data:concept:52:CmsImage0:> .
@prefix ns26: <http://example.com/freestandingwork11:CmsImage1:> .
@prefix ns260: <urn:paradicms_etl:pipeline:synthetic_data:concept:45:CmsImage0:> .
@prefix ns261: <urn:paradicms_etl:pipeline:synthetic_data:concept:25:CmsImage1:> .
@prefix ns262: <urn:paradicms_etl:pipeline:synthetic_data:concept:105:> .
@prefix ns263: <urn:paradicms_etl:pipeline:synthetic_data:concept:25:> .
@prefix ns264: <http://example.com/organization1:CmsImage1:> .
@prefix ns265: <http://example.com/organization3:CmsImage1:> .
@prefix ns266: <http://example.com/collection0/work1:CmsImage0:> .
@prefix ns267: <urn:paradicms_etl:pipeline:synthetic_data:concept:43:CmsImage0:> .
@prefix ns268: <urn:paradicms_etl:pipeline:synthetic_data:concept:96:CmsImage1:> .
@prefix ns269: <urn:paradicms_etl:pipeline:synthetic_data:concept:106:CmsImage1:> .
@prefix ns27: <urn:paradicms_etl:pipeline:synthetic_data:concept:10:CmsImage0:> .
@prefix ns270: <urn:paradicms_etl:pipeline:synthetic_data:concept:35:CmsImage0:> .
@prefix ns271: <urn:paradicms_etl:pipeline:synthetic_data:concept:44:> .
@prefix ns272: <urn:paradicms_etl:pipeline:synthetic_data:concept:109:CmsImage0:> .
@prefix ns273: <urn:paradicms_etl:pipeline:synthetic_data:concept:57:> .
@prefix ns274: <urn:paradicms_etl:pipeline:synthetic_data:concept:101:> .
@prefix ns275: <urn:paradicms_etl:pipeline:synthetic_data:concept:46:CmsImage0:> .
@prefix ns276: <urn:paradicms_etl:pipeline:synthetic_data:concept:5:> .
@prefix ns277: <urn:paradicms_etl:pipeline:synthetic_data:concept:104:CmsImage0:> .
@prefix ns278: <urn:paradicms_etl:pipeline:synthetic_data:concept:108:CmsImage1:> .
@prefix ns279: <http://example.com/collection0/work3:CmsImage1:> .
@prefix ns28: <urn:paradicms_etl:pipeline:synthetic_data:concept:14:> .
@prefix ns280: <urn:paradicms_etl:pipeline:synthetic_data:concept:75:CmsImage1:> .
@prefix ns281: <urn:paradicms_etl:pipeline:synthetic_data:concept:2:CmsImage0:> .
@prefix ns282: <urn:paradicms_etl:pipeline:synthetic_data:concept:11:CmsImage1:> .
@prefix ns283: <urn:paradicms_etl:pipeline:synthetic_data:concept:37:CmsImage1:> .
@prefix ns284: <http://example.com/organization1:CmsImage0:> .
@prefix ns285: <urn:paradicms_etl:pipeline:synthetic_data:concept:90:> .
@prefix ns286: <urn:paradicms_etl:pipeline:synthetic_data:concept:16:CmsImage1:> .
@prefix ns287: <urn:paradicms_etl:pipeline:synthetic_data:concept:46:> .
@prefix ns288: <http://example.com/freestandingwork11:> .
@prefix ns289: <urn:paradicms_etl:pipeline:synthetic_data:concept:4:CmsImage0:> .
@prefix ns29: <urn:paradicms_etl:pipeline:synthetic_data:concept:65:CmsImage1:> .
@prefix ns290: <urn:paradicms_etl:pipeline:synthetic_data:concept:47:> .
@prefix ns291: <http://example.com/collection1:> .
@prefix ns292: <urn:paradicms_etl:pipeline:synthetic_data:concept:77:> .
@prefix ns293: <urn:paradicms_etl:pipeline:synthetic_data:concept:60:CmsImage0:> .
@prefix ns294: <urn:paradicms_etl:pipeline:synthetic_data:concept:0:CmsImage1:> .
@prefix ns295: <urn:paradicms_etl:pipeline:synthetic_data:concept:28:> .
@prefix ns296: <urn:paradicms_etl:pipeline:synthetic_data:concept:78:> .
@prefix ns297: <urn:paradicms_etl:pipeline:synthetic_data:concept:85:CmsImage0:> .
@prefix ns298: <urn:paradicms_etl:pipeline:synthetic_data:concept:81:CmsImage0:> .
@prefix ns299: <http://example.com/collection1/work7:CmsImage1:> .
@prefix ns3: <urn:paradicms_etl:pipeline:synthetic_data:concept:0:CmsImage0:> .
@prefix ns30: <http://example.com/person0:CmsImage1:> .
@prefix ns300: <urn:paradicms_etl:pipeline:synthetic_data:concept:102:CmsImage0:> .
@prefix ns301: <urn:paradicms_etl:pipeline:synthetic_data:concept:54:> .
@prefix ns302: <urn:paradicms_etl:pipeline:synthetic_data:concept:6:CmsImage1:> .
@prefix ns303: <urn:paradicms_etl:pipeline:synthetic_data:concept:40:CmsImage0:> .
@prefix ns304: <urn:paradicms_etl:pipeline:synthetic_data:concept:55:CmsImage1:> .
@prefix ns305: <urn:paradicms_etl:pipeline:synthetic_data:concept:60:> .
@prefix ns306: <urn:paradicms_etl:pipeline:synthetic_data:concept:18:> .
@prefix ns307: <urn:paradicms_etl:pipeline:synthetic_data:concept:32:CmsImage0:> .
@prefix ns308: <urn:paradicms_etl:pipeline:synthetic_data:concept:49:CmsImage1:> .
@prefix ns309: <urn:paradicms_etl:pipeline:synthetic_data:concept:35:> .
@prefix ns31: <urn:paradicms_etl:pipeline:synthetic_data:concept:13:CmsImage0:> .
@prefix ns310: <urn:paradicms_etl:pipeline:synthetic_data:concept:63:CmsImage0:> .
@prefix ns311: <urn:paradicms_etl:pipeline:synthetic_data:concept:48:CmsImage1:> .
@prefix ns312: <urn:paradicms_etl:pipeline:synthetic_data:concept:91:CmsImage0:> .
@prefix ns313: <urn:paradicms_etl:pipeline:synthetic_data:concept:107:> .
@prefix ns314: <urn:paradicms_etl:pipeline:synthetic_data:concept:84:CmsImage1:> .
@prefix ns315: <urn:paradicms_etl:pipeline:synthetic_data:concept:27:CmsImage1:> .
@prefix ns316: <urn:paradicms_etl:pipeline:synthetic_data:concept:30:> .
@prefix ns317: <urn:paradicms_etl:pipeline:synthetic_data:concept:89:> .
@prefix ns318: <http://example.com/collection0/work2:CmsImage0:> .
@prefix ns319: <urn:paradicms_etl:pipeline:synthetic_data:concept:92:CmsImage0:> .
@prefix ns32: <urn:paradicms_etl:pipeline:synthetic_data:concept:22:> .
@prefix ns320: <urn:paradicms_etl:pipeline:synthetic_data:concept:51:CmsImage0:> .
@prefix ns321: <urn:paradicms_etl:pipeline:synthetic_data:concept:51:CmsImage1:> .
@prefix ns322: <urn:paradicms_etl:pipeline:synthetic_data:concept:15:CmsImage1:> .
@prefix ns323: <http://example.com/organization2:> .
@prefix ns324: <urn:paradicms_etl:pipeline:synthetic_data:concept:56:> .
@prefix ns325: <urn:paradicms_etl:pipeline:synthetic_data:concept:88:CmsImage0:> .
@prefix ns326: <urn:paradicms_etl:pipeline:synthetic_data:concept:15:> .
@prefix ns327: <urn:paradicms_etl:pipeline:synthetic_data:concept:45:> .
@prefix ns328: <urn:paradicms_etl:pipeline:synthetic_data:concept:91:> .
@prefix ns329: <urn:paradicms_etl:pipeline:synthetic_data:concept:27:> .
@prefix ns33: <urn:paradicms_etl:pipeline:synthetic_data:concept:69:> .
@prefix ns330: <urn:paradicms_etl:pipeline:synthetic_data:concept:33:> .
@prefix ns331: <urn:paradicms_etl:pipeline:synthetic_data:concept:99:CmsImage0:> .
@prefix ns332: <urn:paradicms_etl:pipeline:synthetic_data:concept:40:CmsImage1:> .
@prefix ns333: <urn:paradicms_etl:pipeline:synthetic_data:concept:92:CmsImage1:> .
@prefix ns334: <urn:paradicms_etl:pipeline:synthetic_data:concept:1:CmsImage0:> .
@prefix ns335: <urn:paradicms_etl:pipeline:synthetic_data:concept:3:CmsImage0:> .
@prefix ns336: <urn:paradicms_etl:pipeline:synthetic_data:concept:75:> .
@prefix ns337: <urn:paradicms_etl:pipeline:synthetic_data:concept:82:CmsImage0:> .
@prefix ns338: <urn:paradicms_etl:pipeline:synthetic_data:concept:13:CmsImage1:> .
@prefix ns339: <urn:paradicms_etl:pipeline:synthetic_data:concept:79:CmsImage1:> .
@prefix ns34: <urn:paradicms_etl:pipeline:synthetic_data:concept:84:> .
@prefix ns340: <urn:paradicms_etl:pipeline:synthetic_data:concept:6:CmsImage0:> .
@prefix ns341: <http://example.com/organization0:CmsImage0:> .
@prefix ns342: <urn:paradicms_etl:pipeline:synthetic_data:concept:24:> .
@prefix ns343: <urn:paradicms_etl:pipeline:synthetic_data:concept:48:> .
@prefix ns344: <http://example.com/collection0/work0:CmsImage0:> .
@prefix ns345: <http://example.com/person0:> .
@prefix ns346: <http://example.com/organization1:> .
@prefix ns347: <http://example.com/collection0/work2:> .
@prefix ns348: <urn:paradicms_etl:pipeline:synthetic_data:concept:97:> .
@prefix ns349: <http://example.com/organization3:CmsImage0:> .
@prefix ns35: <urn:paradicms_etl:pipeline:synthetic_data:concept:101:CmsImage1:> .
@prefix ns350: <urn:paradicms_etl:pipeline:synthetic_data:concept:108:CmsImage0:> .
@prefix ns351: <urn:paradicms_etl:pipeline:synthetic_data:concept:26:CmsImage0:> .
@prefix ns352: <urn:paradicms_etl:pipeline:synthetic_data:concept:100:> .
@prefix ns353: <urn:paradicms_etl:pipeline:synthetic_data:concept:50:> .
@prefix ns354: <urn:paradicms_etl:pipeline:synthetic_data:concept:37:> .
@prefix ns355: <urn:paradicms_etl:pipeline:synthetic_data:concept:103:CmsImage1:> .
@prefix ns356: <urn:paradicms_etl:pipeline:synthetic_data:concept:89:CmsImage1:> .
@prefix ns357: <urn:paradicms_etl:pipeline:synthetic_data:concept:53:CmsImage1:> .
@prefix ns358: <http://example.com/person2:CmsImage1:> .
@prefix ns359: <urn:paradicms_etl:pipeline:synthetic_data:concept:16:CmsImage0:> .
@prefix ns36: <http://example.com/person3:> .
@prefix ns360: <urn:paradicms_etl:pipeline:synthetic_data:concept:8:CmsImage0:> .
@prefix ns361: <urn:paradicms_etl:pipeline:synthetic_data:concept:55:> .
@prefix ns362: <http://example.com/collection0/work1:> .
@prefix ns363: <http://example.com/freestandingwork9:CmsImage0:> .
@prefix ns364: <http://example.com/collection1/work5:> .
@prefix ns365: <http://example.com/collection1/work6:> .
@prefix ns366: <urn:paradicms_etl:pipeline:synthetic_data:concept:70:> .
@prefix ns367: <urn:paradicms_etl:pipeline:synthetic_data:concept:107:CmsImage1:> .
@prefix ns368: <urn:paradicms_etl:pipeline:synthetic_data:concept:80:> .
@prefix ns369: <http://example.com/freestandingwork11:CmsImage0:> .
@prefix ns37: <urn:paradicms_etl:pipeline:synthetic_data:concept:100:CmsImage0:> .
@prefix ns370: <urn:paradicms_etl:pipeline:synthetic_data:concept:8:> .
@prefix ns371: <http://example.com/freestandingwork9:> .
@prefix ns372: <urn:paradicms_etl:pipeline:synthetic_data:concept:31:CmsImage0:> .
@prefix ns373: <http://example.com/collection1/work6:CmsImage0:> .
@prefix ns374: <urn:paradicms_etl:pipeline:synthetic_data:concept:9:> .
@prefix ns375: <urn:paradicms_etl:pipeline:synthetic_data:concept:3:> .
@prefix ns376: <urn:paradicms_etl:pipeline:synthetic_data:concept:11:> .
@prefix ns377: <urn:paradicms_etl:pipeline:synthetic_data:concept:68:> .
@prefix ns378: <urn:paradicms_etl:pipeline:synthetic_data:concept:94:> .
@prefix ns379: <urn:paradicms_etl:pipeline:synthetic_data:concept:1:> .
@prefix ns38: <urn:paradicms_etl:pipeline:synthetic_data:concept:29:CmsImage1:> .
@prefix ns380: <http://example.com/collection0/work0:CmsImage1:> .
@prefix ns381: <urn:paradicms_etl:pipeline:synthetic_data:concept:42:> .
@prefix ns382: <urn:paradicms_etl:pipeline:synthetic_data:concept:10:> .
@prefix ns383: <urn:paradicms_etl:pipeline:synthetic_data:> .
@prefix ns384: <http://example.com/freestandingwork8:> .
@prefix ns385: <urn:paradicms_etl:pipeline:synthetic_data:concept:64:> .
@prefix ns386: <urn:paradicms_etl:pipeline:synthetic_data:concept:29:CmsImage0:> .
@prefix ns387: <urn:paradicms_etl:pipeline:synthetic_data:concept:14:CmsImage0:> .
@prefix ns388: <urn:paradicms_etl:pipeline:synthetic_data:concept:106:> .
@prefix ns389: <urn:paradicms_etl:pipeline:synthetic_data:concept:17:> .
@prefix ns39: <http://example.com/collection0/> .
@prefix ns390: <urn:paradicms_etl:pipeline:synthetic_data:concept:19:> .
@prefix ns391: <urn:paradicms_etl:pipeline:synthetic_data:concept:62:> .
@prefix ns392: <urn:paradicms_etl:pipeline:synthetic_data:concept:108:> .
@prefix ns393: <http://example.com/collection1:CmsImage1:> .
@prefix ns394: <urn:paradicms_etl:pipeline:synthetic_data:concept:81:> .
@prefix ns395: <http://example.com/person4:> .
@prefix ns396: <http://example.com/organization3:> .
@prefix ns397: <urn:paradicms_etl:pipeline:synthetic_data:concept:39:> .
@prefix ns398: <urn:paradicms_etl:pipeline:synthetic_data:concept:92:> .
@prefix ns399: <urn:paradicms_etl:pipeline:synthetic_data:concept:102:> .
@prefix ns4: <urn:paradicms_etl:pipeline:synthetic_data:concept:37:CmsImage0:> .
@prefix ns40: <urn:paradicms_etl:pipeline:synthetic_data:concept:95:CmsImage1:> .
@prefix ns400: <urn:paradicms_etl:pipeline:synthetic_data:concept:88:> .
@prefix ns401: <urn:paradicms_etl:pipeline:synthetic_data:concept:68:CmsImage0:> .
@prefix ns402: <urn:paradicms_etl:pipeline:synthetic_data:concept:32:CmsImage1:> .
@prefix ns403: <urn:paradicms_etl:pipeline:synthetic_data:concept:99:> .
@prefix ns404: <urn:paradicms_etl:pipeline:synthetic_data:concept:23:> .
@prefix ns405: <urn:paradicms_etl:pipeline:synthetic_data:concept:20:> .
@prefix ns406: <urn:paradicms_etl:pipeline:synthetic_data:concept:96:> .
@prefix ns407: <urn:paradicms_etl:pipeline:synthetic_data:concept:83:> .
@prefix ns41: <urn:paradicms_etl:pipeline:synthetic_data:concept:70:CmsImage0:> .
@prefix ns42: <urn:paradicms_etl:pipeline:synthetic_data:concept:102:CmsImage1:> .
@prefix ns43: <urn:paradicms_etl:pipeline:synthetic_data:concept:11:CmsImage0:> .
@prefix ns44: <urn:paradicms_etl:pipeline:synthetic_data:concept:36:> .
@prefix ns45: <http://example.com/person1:CmsImage0:> .
@prefix ns46: <urn:paradicms_etl:pipeline:synthetic_data:concept:94:CmsImage0:> .
@prefix ns47: <http://example.com/freestandingwork10:> .
@prefix ns48: <urn:paradicms_etl:pipeline:synthetic_data:concept:98:> .
@prefix ns49: <urn:paradicms_etl:pipeline:synthetic_data:concept:46:CmsImage1:> .
@prefix ns5: <urn:paradicms_etl:pipeline:synthetic_data:concept:51:> .
@prefix ns50: <urn:paradicms_etl:pipeline:synthetic_data:concept:70:CmsImage1:> .
@prefix ns51: <urn:paradicms_etl:pipeline:synthetic_data:concept:22:CmsImage1:> .
@prefix ns52: <urn:paradicms_etl:pipeline:synthetic_data:concept:105:CmsImage0:> .
@prefix ns53: <urn:paradicms_etl:pipeline:synthetic_data:concept:9:CmsImage1:> .
@prefix ns54: <urn:paradicms_etl:pipeline:synthetic_data:concept:67:CmsImage0:> .
@prefix ns55: <http://example.com/freestandingwork8:CmsImage0:> .
@prefix ns56: <urn:paradicms_etl:pipeline:synthetic_data:concept:67:CmsImage1:> .
@prefix ns57: <urn:paradicms_etl:pipeline:synthetic_data:concept:18:CmsImage0:> .
@prefix ns58: <urn:paradicms_etl:pipeline:synthetic_data:concept:23:CmsImage0:> .
@prefix ns59: <urn:paradicms_etl:pipeline:synthetic_data:concept:53:CmsImage0:> .
@prefix ns6: <urn:paradicms_etl:pipeline:synthetic_data:concept:> .
@prefix ns60: <urn:paradicms_etl:pipeline:synthetic_data:concept:15:CmsImage0:> .
@prefix ns61: <urn:paradicms_etl:pipeline:synthetic_data:concept:101:CmsImage0:> .
@prefix ns62: <http://example.com/organization2:CmsImage1:> .
@prefix ns63: <http://example.com/> .
@prefix ns64: <urn:paradicms_etl:pipeline:synthetic_data:concept:52:CmsImage1:> .
@prefix ns65: <urn:paradicms_etl:pipeline:synthetic_data:concept:44:CmsImage1:> .
@prefix ns66: <urn:paradicms_etl:pipeline:synthetic_data:concept:50:CmsImage1:> .
@prefix ns67: <urn:paradicms_etl:pipeline:synthetic_data:concept:18:CmsImage1:> .
@prefix ns68: <urn:paradicms_etl:pipeline:synthetic_data:concept:34:CmsImage1:> .
@prefix ns69: <urn:paradicms_etl:pipeline:synthetic_data:concept:30:CmsImage1:> .
@prefix ns7: <urn:paradicms_etl:pipeline:synthetic_data:concept:6:> .
@prefix ns70: <urn:paradicms_etl:pipeline:synthetic_data:concept:19:CmsImage0:> .
@prefix ns71: <urn:paradicms_etl:pipeline:synthetic_data:concept:81:CmsImage1:> .
@prefix ns72: <urn:paradicms_etl:pipeline:synthetic_data:concept:107:CmsImage0:> .
@prefix ns73: <http://example.com/collection1/work6:CmsImage1:> .
@prefix ns74: <urn:paradicms_etl:pipeline:synthetic_data:concept:97:CmsImage1:> .
@prefix ns75: <urn:paradicms_etl:pipeline:synthetic_data:concept:62:CmsImage0:> .
@prefix ns76: <urn:paradicms_etl:pipeline:synthetic_data:concept:103:> .
@prefix ns77: <urn:paradicms_etl:pipeline:synthetic_data:concept:98:CmsImage1:> .
@prefix ns78: <urn:paradicms_etl:pipeline:synthetic_data:concept:35:CmsImage1:> .
@prefix ns79: <urn:paradicms_etl:pipeline:synthetic_data:concept:61:CmsImage0:> .
@prefix ns8: <http://example.com/organization2:CmsImage0:> .
@prefix ns80: <urn:paradicms_etl:pipeline:synthetic_data:concept:41:CmsImage1:> .
@prefix ns81: <urn:paradicms_etl:pipeline:synthetic_data:concept:73:> .
@prefix ns82: <urn:paradicms_etl:pipeline:synthetic_data:concept:31:CmsImage1:> .
@prefix ns83: <urn:paradicms_etl:pipeline:synthetic_data:concept:109:> .
@prefix ns84: <urn:paradicms_etl:pipeline:synthetic_data:concept:58:> .
@prefix ns85: <urn:paradicms_etl:pipeline:synthetic_data:concept:95:> .
@prefix ns86: <urn:paradicms_etl:pipeline:synthetic_data:concept:77:CmsImage0:> .
@prefix ns87: <urn:paradicms_etl:pipeline:synthetic_data:concept:57:CmsImage1:> .
@prefix ns88: <urn:paradicms_etl:pipeline:synthetic_data:concept:72:> .
@prefix ns89: <urn:paradicms_etl:pipeline:synthetic_data:concept:12:> .
@prefix ns9: <urn:paradicms_etl:pipeline:synthetic_data:concept:26:> .
@prefix ns90: <urn:paradicms_etl:pipeline:synthetic_data:concept:93:CmsImage1:> .
@prefix ns91: <urn:paradicms_etl:pipeline:synthetic_data:concept:65:CmsImage0:> .
@prefix ns92: <urn:paradicms_etl:pipeline:synthetic_data:concept:5:CmsImage1:> .
@prefix ns93: <urn:paradicms_etl:pipeline:synthetic_data:concept:77:CmsImage1:> .
@prefix ns94: <urn:paradicms_etl:pipeline:synthetic_data:concept:41:CmsImage0:> .
@prefix ns95: <urn:paradicms_etl:pipeline:synthetic_data:concept:84:CmsImage0:> .
@prefix ns96: <urn:paradicms_etl:pipeline:synthetic_data:concept:10:CmsImage1:> .
@prefix ns97: <urn:paradicms_etl:pipeline:synthetic_data:concept:83:CmsImage0:> .
@prefix ns98: <urn:paradicms_etl:pipeline:synthetic_data:concept:62:CmsImage1:> .
@prefix ns99: <urn:paradicms_etl:pipeline:synthetic_data:concept:58:CmsImage0:> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix vra: <http://purl.org/vra/> .
@prefix wd: <http://www.wikidata.org/entity/> .
@prefix wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

ns1:Thumbnail600x600 {
    ns336:CmsImage0 foaf:thumbnail ns1:Thumbnail600x600 .

    ns1:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns336:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:75 .
}

ns2:Thumbnail800x800 {
    ns397:CmsImage1 foaf:thumbnail ns2:Thumbnail800x800 .

    ns2:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns397:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:39 .
}

ns3:Thumbnail600x600 {
    ns190:CmsImage0 foaf:thumbnail ns3:Thumbnail600x600 .

    ns3:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns190:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:0 .
}

ns4:Thumbnail600x600 {
    ns354:CmsImage0 foaf:thumbnail ns4:Thumbnail600x600 .

    ns4:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns354:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:37 .
}

ns5:CmsImage0 {
    ns5:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:51 .
}

ns6:56 {
    ns6:56 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 6" ;
        skos:prefLabel "CmsConcept 56" .
}

ns7:CmsImage1 {
    ns7:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:6 .
}

ns8:Thumbnail600x600 {
    ns323:CmsImage0 foaf:thumbnail ns8:Thumbnail600x600 .

    ns8:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns323:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:organization2 .
}

ns9:CmsImage0 {
    ns9:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:26 .
}

ns10:CmsImage0 {
    ns10:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:16 .
}

ns11:Thumbnail800x800 {
    ns295:CmsImage0 foaf:thumbnail ns11:Thumbnail800x800 .

    ns11:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns295:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:28 .
}

ns12:Thumbnail600x600 {
    ns342:CmsImage0 foaf:thumbnail ns12:Thumbnail600x600 .

    ns12:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns342:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:24 .
}

ns6:78 {
    ns6:78 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 8" ;
        skos:prefLabel "CmsConcept 78" .
}

ns13:work5Creation {
    ns13:work5Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns63:person2,
            ns63:person3 ;
        dcterms:date _:N4c0b10f9ae154230a16da1a3e9ee11fc ;
        dcterms:spatial ns13:work5Location ;
        dcterms:title "CmsCollection1CmsWork5 creation" ;
        cms:work ns13:work5 .

    _:N4c0b10f9ae154230a16da1a3e9ee11fc a cms:DateTimeDescription ;
        time:day "---27"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns14:Thumbnail800x800 {
    ns117:CmsImage0 foaf:thumbnail ns14:Thumbnail800x800 .

    ns14:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns117:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:21 .
}

ns15:Thumbnail400x400 {
    ns33:CmsImage1 foaf:thumbnail ns15:Thumbnail400x400 .

    ns15:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns33:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:69 .
}

ns16:Thumbnail200x200 {
    ns84:CmsImage1 foaf:thumbnail ns16:Thumbnail200x200 .

    ns16:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns84:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:58 .
}

ns17:Thumbnail200x200 {
    ns385:CmsImage1 foaf:thumbnail ns17:Thumbnail200x200 .

    ns17:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:64 .
}

ns18:Thumbnail800x800 {
    ns378:CmsImage1 foaf:thumbnail ns18:Thumbnail800x800 .

    ns18:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns378:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:94 .
}

ns19:Thumbnail200x200 {
    ns285:CmsImage0 foaf:thumbnail ns19:Thumbnail200x200 .

    ns19:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns285:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:90 .
}

ns4:Thumbnail800x800 {
    ns4:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns354:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:37 .

    ns354:CmsImage0 foaf:thumbnail ns4:Thumbnail800x800 .
}

ns20:Thumbnail600x600 {
    ns76:CmsImage0 foaf:thumbnail ns20:Thumbnail600x600 .

    ns20:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns76:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:103 .
}

ns21:Thumbnail200x200 {
    ns85:CmsImage0 foaf:thumbnail ns21:Thumbnail200x200 .

    ns21:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns85:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:95 .
}

ns22:Thumbnail200x200 {
    ns89:CmsImage1 foaf:thumbnail ns22:Thumbnail200x200 .

    ns22:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns89:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:12 .
}

ns23:Thumbnail200x200 {
    ns149:CmsImage1 foaf:thumbnail ns23:Thumbnail200x200 .

    ns23:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns149:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:74 .
}

ns24:Thumbnail800x800 {
    ns252:CmsImage1 foaf:thumbnail ns24:Thumbnail800x800 .

    ns24:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns252:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:2 .
}

ns25:Thumbnail800x800 {
    ns143:CmsImage1 foaf:thumbnail ns25:Thumbnail800x800 .

    ns25:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns143:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:87 .
}

ns26:Thumbnail200x200 {
    ns288:CmsImage1 foaf:thumbnail ns26:Thumbnail200x200 .

    ns26:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns288:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:freestandingwork11 .
}

ns27:Thumbnail200x200 {
    ns382:CmsImage0 foaf:thumbnail ns27:Thumbnail200x200 .

    ns27:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns382:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:10 .
}

ns28:CmsImage0 {
    ns28:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:14 .
}

ns29:Thumbnail400x400 {
    ns256:CmsImage1 foaf:thumbnail ns29:Thumbnail400x400 .

    ns29:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns256:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:65 .
}

ns30:Thumbnail400x400 {
    ns345:CmsImage1 foaf:thumbnail ns30:Thumbnail400x400 .

    ns30:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns345:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:person0 .
}

ns31:Thumbnail400x400 {
    ns179:CmsImage0 foaf:thumbnail ns31:Thumbnail400x400 .

    ns31:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns179:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:13 .
}

ns32:CmsImage1 {
    ns32:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:22 .
}

ns33:CmsImage1 {
    ns33:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:69 .
}

ns6:15 {
    ns6:15 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 5" ;
        skos:prefLabel "CmsConcept 15" .
}

ns34:CmsImage0 {
    ns34:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:84 .
}

ns6:22 {
    ns6:22 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 2" ;
        skos:prefLabel "CmsConcept 22" .
}

ns35:Thumbnail400x400 {
    ns274:CmsImage1 foaf:thumbnail ns35:Thumbnail400x400 .

    ns35:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns274:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:101 .
}

ns33:CmsImage0 {
    ns33:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:69 .
}

ns36:CmsImage0 {
    ns36:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:person3 .
}

ns37:Thumbnail800x800 {
    ns352:CmsImage0 foaf:thumbnail ns37:Thumbnail800x800 .

    ns37:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns352:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:100 .
}

ns26:Thumbnail600x600 {
    ns26:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns288:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:freestandingwork11 .

    ns288:CmsImage1 foaf:thumbnail ns26:Thumbnail600x600 .
}

ns38:Thumbnail200x200 {
    ns243:CmsImage1 foaf:thumbnail ns38:Thumbnail200x200 .

    ns38:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns243:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:29 .
}

ns39:work0Location {
    ns39:work0Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns40:Thumbnail800x800 {
    ns85:CmsImage1 foaf:thumbnail ns40:Thumbnail800x800 .

    ns40:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns85:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:95 .
}

ns41:Thumbnail800x800 {
    ns366:CmsImage0 foaf:thumbnail ns41:Thumbnail800x800 .

    ns41:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns366:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:70 .
}

ns42:Thumbnail800x800 {
    ns399:CmsImage1 foaf:thumbnail ns42:Thumbnail800x800 .

    ns42:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:102 .
}

ns43:Thumbnail400x400 {
    ns376:CmsImage0 foaf:thumbnail ns43:Thumbnail400x400 .

    ns43:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns376:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:11 .
}

ns44:CmsImage0 {
    ns44:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:36 .
}

ns45:Thumbnail400x400 {
    ns251:CmsImage0 foaf:thumbnail ns45:Thumbnail400x400 .

    ns45:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns251:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:person1 .
}

ns46:Thumbnail600x600 {
    ns378:CmsImage0 foaf:thumbnail ns46:Thumbnail600x600 .

    ns46:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns378:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:94 .
}

ns47:CmsImage1 {
    ns47:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:freestandingwork10 .
}

ns13:work6Location {
    ns13:work6Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns48:CmsImage1 {
    ns48:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:98 .
}

ns49:Thumbnail600x600 {
    ns287:CmsImage1 foaf:thumbnail ns49:Thumbnail600x600 .

    ns49:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns287:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:46 .
}

ns50:Thumbnail400x400 {
    ns366:CmsImage1 foaf:thumbnail ns50:Thumbnail400x400 .

    ns50:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns366:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:70 .
}

vra:culturalContext {
    vra:culturalContext a cms:Property ;
        rdfs:label "Cultural context" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns383:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> .
}

ns51:Thumbnail400x400 {
    ns51:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns32:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:22 .

    ns32:CmsImage1 foaf:thumbnail ns51:Thumbnail400x400 .
}

ns52:Thumbnail200x200 {
    ns262:CmsImage0 foaf:thumbnail ns52:Thumbnail200x200 .

    ns52:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns262:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:105 .
}

ns53:Thumbnail200x200 {
    ns374:CmsImage1 foaf:thumbnail ns53:Thumbnail200x200 .

    ns53:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns374:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:9 .
}

ns54:Thumbnail600x600 {
    ns238:CmsImage0 foaf:thumbnail ns54:Thumbnail600x600 .

    ns54:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns238:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:67 .
}

ns55:Thumbnail600x600 {
    ns384:CmsImage0 foaf:thumbnail ns55:Thumbnail600x600 .

    ns55:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns384:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:freestandingwork8 .
}

ns56:Thumbnail400x400 {
    ns238:CmsImage1 foaf:thumbnail ns56:Thumbnail400x400 .

    ns56:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns238:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:67 .
}

ns3:Thumbnail200x200 {
    ns3:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns190:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:0 .

    ns190:CmsImage0 foaf:thumbnail ns3:Thumbnail200x200 .
}

ns57:Thumbnail400x400 {
    ns306:CmsImage0 foaf:thumbnail ns57:Thumbnail400x400 .

    ns57:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns306:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:18 .
}

ns58:Thumbnail800x800 {
    ns404:CmsImage0 foaf:thumbnail ns58:Thumbnail800x800 .

    ns58:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns404:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:23 .
}

ns59:Thumbnail800x800 {
    ns240:CmsImage0 foaf:thumbnail ns59:Thumbnail800x800 .

    ns59:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns240:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:53 .
}

ns26:Thumbnail400x400 {
    ns26:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns288:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:freestandingwork11 .

    ns288:CmsImage1 foaf:thumbnail ns26:Thumbnail400x400 .
}

ns35:Thumbnail600x600 {
    ns35:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns274:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:101 .

    ns274:CmsImage1 foaf:thumbnail ns35:Thumbnail600x600 .
}

ns60:Thumbnail600x600 {
    ns326:CmsImage0 foaf:thumbnail ns60:Thumbnail600x600 .

    ns60:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns326:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:15 .
}

ns61:Thumbnail400x400 {
    ns274:CmsImage0 foaf:thumbnail ns61:Thumbnail400x400 .

    ns61:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns274:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:101 .
}

ns62:Thumbnail400x400 {
    ns323:CmsImage1 foaf:thumbnail ns62:Thumbnail400x400 .

    ns62:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns323:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:organization2 .
}

ns63:freestandingwork8Creation {
    ns63:freestandingwork8Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns63:organization0,
            ns63:organization1 ;
        dcterms:date _:N6ba9486129af4b2b891235efba78bc50 ;
        dcterms:description _:N170a65d3df104a499fc1466eabf59008 ;
        dcterms:spatial ns63:freestandingwork8Location ;
        dcterms:title "FreestandingWork8 creation" ;
        cms:work ns63:freestandingwork8 .

    _:N170a65d3df104a499fc1466eabf59008 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:N6ba9486129af4b2b891235efba78bc50 a cms:DateTimeDescription ;
        time:day "---24"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns6:4 {
    ns6:4 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 4" ;
        skos:prefLabel "CmsConcept 4" .
}

ns63:freestandingwork9Opening {
    ns63:freestandingwork9Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-23"^^xsd:date ;
        dcterms:spatial _:Ne0e0e4c13f214a8f8abe33a07d396a27 ;
        dcterms:title "FreestandingWork9 opening" ;
        cms:work ns63:freestandingwork9 .

    _:Ne0e0e4c13f214a8f8abe33a07d396a27 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns64:Thumbnail600x600 {
    ns142:CmsImage1 foaf:thumbnail ns64:Thumbnail600x600 .

    ns64:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns142:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:52 .
}

ns65:Thumbnail200x200 {
    ns271:CmsImage1 foaf:thumbnail ns65:Thumbnail200x200 .

    ns65:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns271:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:44 .
}

ns66:Thumbnail800x800 {
    ns353:CmsImage1 foaf:thumbnail ns66:Thumbnail800x800 .

    ns66:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns353:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:50 .
}

ns67:Thumbnail600x600 {
    ns306:CmsImage1 foaf:thumbnail ns67:Thumbnail600x600 .

    ns67:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns306:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:18 .
}

ns68:Thumbnail600x600 {
    ns198:CmsImage1 foaf:thumbnail ns68:Thumbnail600x600 .

    ns68:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns198:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:34 .
}

ns69:Thumbnail800x800 {
    ns316:CmsImage1 foaf:thumbnail ns69:Thumbnail800x800 .

    ns69:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns316:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:30 .
}

ns70:Thumbnail800x800 {
    ns390:CmsImage0 foaf:thumbnail ns70:Thumbnail800x800 .

    ns70:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns390:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:19 .
}

ns71:Thumbnail800x800 {
    ns394:CmsImage1 foaf:thumbnail ns71:Thumbnail800x800 .

    ns71:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns394:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:81 .
}

ns72:Thumbnail400x400 {
    ns313:CmsImage0 foaf:thumbnail ns72:Thumbnail400x400 .

    ns72:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns313:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:107 .
}

ns73:Thumbnail800x800 {
    ns365:CmsImage1 foaf:thumbnail ns73:Thumbnail800x800 .

    ns73:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns13:work6 .
}

ns74:Thumbnail400x400 {
    ns348:CmsImage1 foaf:thumbnail ns74:Thumbnail400x400 .

    ns74:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns348:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:97 .
}

ns75:Thumbnail400x400 {
    ns391:CmsImage0 foaf:thumbnail ns75:Thumbnail400x400 .

    ns75:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns391:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:62 .
}

ns6:103 {
    ns6:103 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 3" ;
        skos:prefLabel "CmsConcept 103" .
}

ns76:CmsImage0 {
    ns76:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:103 .
}

ns62:Thumbnail600x600 {
    ns62:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns323:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:organization2 .

    ns323:CmsImage1 foaf:thumbnail ns62:Thumbnail600x600 .
}

ns77:Thumbnail400x400 {
    ns77:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns48:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:98 .

    ns48:CmsImage1 foaf:thumbnail ns77:Thumbnail400x400 .
}

ns78:Thumbnail600x600 {
    ns309:CmsImage1 foaf:thumbnail ns78:Thumbnail600x600 .

    ns78:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns309:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:35 .
}

ns15:Thumbnail600x600 {
    ns15:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns33:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:69 .

    ns33:CmsImage1 foaf:thumbnail ns15:Thumbnail600x600 .
}

ns6:52 {
    ns6:52 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 2" ;
        skos:prefLabel "CmsConcept 52" .
}

ns79:Thumbnail200x200 {
    ns122:CmsImage0 foaf:thumbnail ns79:Thumbnail200x200 .

    ns79:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns122:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:61 .
}

ns80:Thumbnail200x200 {
    ns136:CmsImage1 foaf:thumbnail ns80:Thumbnail200x200 .

    ns80:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns136:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:41 .
}

ns81:CmsImage0 {
    ns81:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:73 .
}

ns82:Thumbnail400x400 {
    ns135:CmsImage1 foaf:thumbnail ns82:Thumbnail400x400 .

    ns82:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns135:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:31 .
}

ns83:CmsImage1 {
    ns83:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:109 .
}

ns84:CmsImage0 {
    ns84:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:58 .
}

ns85:CmsImage1 {
    ns85:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:95 .
}

ns86:Thumbnail400x400 {
    ns292:CmsImage0 foaf:thumbnail ns86:Thumbnail400x400 .

    ns86:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns292:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:77 .
}

ns87:Thumbnail200x200 {
    ns273:CmsImage1 foaf:thumbnail ns87:Thumbnail200x200 .

    ns87:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns273:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:57 .
}

ns88:CmsImage0 {
    ns88:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:72 .
}

ns89:CmsImage1 {
    ns89:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:12 .
}

ns90:Thumbnail800x800 {
    ns118:CmsImage1 foaf:thumbnail ns90:Thumbnail800x800 .

    ns90:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns118:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:93 .
}

ns91:Thumbnail400x400 {
    ns256:CmsImage0 foaf:thumbnail ns91:Thumbnail400x400 .

    ns91:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns256:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:65 .
}

ns92:Thumbnail600x600 {
    ns276:CmsImage1 foaf:thumbnail ns92:Thumbnail600x600 .

    ns92:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns276:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:5 .
}

ns93:Thumbnail400x400 {
    ns292:CmsImage1 foaf:thumbnail ns93:Thumbnail400x400 .

    ns93:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns292:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:77 .
}

ns94:Thumbnail600x600 {
    ns136:CmsImage0 foaf:thumbnail ns94:Thumbnail600x600 .

    ns94:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns136:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:41 .
}

ns65:Thumbnail400x400 {
    ns65:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns271:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:44 .

    ns271:CmsImage1 foaf:thumbnail ns65:Thumbnail400x400 .
}

ns6:109 {
    ns6:109 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 9" ;
        skos:prefLabel "CmsConcept 109" .
}

ns95:Thumbnail200x200 {
    ns95:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns34:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:84 .

    ns34:CmsImage0 foaf:thumbnail ns95:Thumbnail200x200 .
}

ns96:Thumbnail400x400 {
    ns382:CmsImage1 foaf:thumbnail ns96:Thumbnail400x400 .

    ns96:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns382:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:10 .
}

ns97:Thumbnail600x600 {
    ns407:CmsImage0 foaf:thumbnail ns97:Thumbnail600x600 .

    ns97:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns407:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:83 .
}

ns98:Thumbnail200x200 {
    ns391:CmsImage1 foaf:thumbnail ns98:Thumbnail200x200 .

    ns98:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns391:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:62 .
}

ns99:Thumbnail200x200 {
    ns99:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns84:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:58 .

    ns84:CmsImage0 foaf:thumbnail ns99:Thumbnail200x200 .
}

ns41:Thumbnail600x600 {
    ns41:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns366:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:70 .

    ns366:CmsImage0 foaf:thumbnail ns41:Thumbnail600x600 .
}

ns21:Thumbnail800x800 {
    ns21:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns85:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:95 .

    ns85:CmsImage0 foaf:thumbnail ns21:Thumbnail800x800 .
}

ns100:Thumbnail600x600 {
    ns100:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns47:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:freestandingwork10 .

    ns47:CmsImage1 foaf:thumbnail ns100:Thumbnail600x600 .
}

ns101:Thumbnail400x400 {
    ns305:CmsImage1 foaf:thumbnail ns101:Thumbnail400x400 .

    ns101:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns305:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:60 .
}

ns13:work4Creation {
    ns13:work4Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns63:person1,
            ns63:person2 ;
        dcterms:date _:N8e26637337e04c02900028e334430e46 ;
        dcterms:description _:N3c72121dc1c743d5aadd7fbb7a09a55d ;
        dcterms:spatial ns13:work4Location ;
        dcterms:title "CmsCollection1CmsWork4 creation" ;
        cms:work ns13:work4 .

    _:N3c72121dc1c743d5aadd7fbb7a09a55d a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:N8e26637337e04c02900028e334430e46 a cms:DateTimeDescription ;
        time:day "---28"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns102:CmsImage0 {
    ns102:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:66 .
}

ns103:CmsImage0 {
    ns103:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:49 .
}

ns104:Thumbnail400x400 {
    ns47:CmsImage0 foaf:thumbnail ns104:Thumbnail400x400 .

    ns104:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns47:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:freestandingwork10 .
}

ns105:Thumbnail800x800 {
    ns88:CmsImage1 foaf:thumbnail ns105:Thumbnail800x800 .

    ns105:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns88:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:72 .
}

ns106:Thumbnail600x600 {
    ns220:CmsImage1 foaf:thumbnail ns106:Thumbnail600x600 .

    ns106:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns220:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:63 .
}

ns107:Thumbnail800x800 {
    ns122:CmsImage1 foaf:thumbnail ns107:Thumbnail800x800 .

    ns107:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns122:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:61 .
}

ns108:CmsImage1 {
    ns108:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:71 .
}

ns90:Thumbnail400x400 {
    ns90:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns118:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:93 .

    ns118:CmsImage1 foaf:thumbnail ns90:Thumbnail400x400 .
}

ns109:CmsImage1 {
    ns109:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:85 .
}

ns99:Thumbnail600x600 {
    ns99:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns84:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:58 .

    ns84:CmsImage0 foaf:thumbnail ns99:Thumbnail600x600 .
}

ns110:Thumbnail800x800 {
    ns110:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns102:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:66 .

    ns102:CmsImage0 foaf:thumbnail ns110:Thumbnail800x800 .
}

ns111:Thumbnail600x600 {
    ns390:CmsImage1 foaf:thumbnail ns111:Thumbnail600x600 .

    ns111:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns390:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:19 .
}

ns112:Thumbnail800x800 {
    ns285:CmsImage1 foaf:thumbnail ns112:Thumbnail800x800 .

    ns112:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns285:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:90 .
}

ns113:Thumbnail400x400 {
    ns204:CmsImage1 foaf:thumbnail ns113:Thumbnail400x400 .

    ns113:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns204:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:38 .
}

ns39:work2Opening {
    ns39:work2Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-30"^^xsd:date ;
        dcterms:description _:N2df3481b40f84c039f27a227b89ad5fa ;
        dcterms:spatial _:N79cf145d57b94d6db20902eee4807f4d ;
        dcterms:title "CmsCollection0CmsWork2 opening" ;
        cms:work ns39:work2 .

    _:N2df3481b40f84c039f27a227b89ad5fa a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:N79cf145d57b94d6db20902eee4807f4d a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns114:Thumbnail800x800 {
    ns364:CmsImage1 foaf:thumbnail ns114:Thumbnail800x800 .

    ns114:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns364:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns13:work5 .
}

ns115:Thumbnail200x200 {
    ns317:CmsImage0 foaf:thumbnail ns115:Thumbnail200x200 .

    ns115:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns317:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:89 .
}

ns116:Thumbnail800x800 {
    ns403:CmsImage1 foaf:thumbnail ns116:Thumbnail800x800 .

    ns116:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:99 .
}

ns117:CmsImage1 {
    ns117:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:21 .
}

ns118:CmsImage1 {
    ns118:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:93 .
}

ns119:Thumbnail200x200 {
    ns342:CmsImage1 foaf:thumbnail ns119:Thumbnail200x200 .

    ns119:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns342:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:24 .
}

ns6:8 {
    ns6:8 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 8" ;
        skos:prefLabel "CmsConcept 8" .
}

ns120:Thumbnail600x600 {
    ns257:CmsImage0 foaf:thumbnail ns120:Thumbnail600x600 .

    ns120:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns257:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:person2 .
}

ns16:Thumbnail800x800 {
    ns16:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns84:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:58 .

    ns84:CmsImage1 foaf:thumbnail ns16:Thumbnail800x800 .
}

ns121:Thumbnail800x800 {
    ns263:CmsImage0 foaf:thumbnail ns121:Thumbnail800x800 .

    ns121:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns263:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:25 .
}

ns122:CmsImage0 {
    ns122:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:61 .
}

ns120:Thumbnail400x400 {
    ns120:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns257:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:person2 .

    ns257:CmsImage0 foaf:thumbnail ns120:Thumbnail400x400 .
}

ns123:Thumbnail800x800 {
    ns405:CmsImage1 foaf:thumbnail ns123:Thumbnail800x800 .

    ns123:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns405:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:20 .
}

ns124:CmsImage0 {
    ns124:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:76 .
}

ns71:Thumbnail600x600 {
    ns71:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns394:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:81 .

    ns394:CmsImage1 foaf:thumbnail ns71:Thumbnail600x600 .
}

ns39:work0Opening {
    ns39:work0Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N3be1979b3c2b4b7fad9db56006aa7fef ;
        dcterms:spatial _:N1bb6f4e5736342cb90c3939277495d85 ;
        dcterms:title "CmsCollection0CmsWork0 opening" ;
        cms:work ns39:work0 .

    _:N1bb6f4e5736342cb90c3939277495d85 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N3be1979b3c2b4b7fad9db56006aa7fef a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns125:Thumbnail600x600 {
    ns407:CmsImage1 foaf:thumbnail ns125:Thumbnail600x600 .

    ns125:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns407:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:83 .
}

ns126:Thumbnail800x800 {
    ns149:CmsImage0 foaf:thumbnail ns126:Thumbnail800x800 .

    ns126:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns149:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:74 .
}

ns127:Thumbnail200x200 {
    ns388:CmsImage0 foaf:thumbnail ns127:Thumbnail200x200 .

    ns127:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns388:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:106 .
}

ns128:Thumbnail800x800 {
    ns384:CmsImage1 foaf:thumbnail ns128:Thumbnail800x800 .

    ns128:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns384:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:freestandingwork8 .
}

ns129:Thumbnail200x200 {
    ns129:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns103:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:49 .

    ns103:CmsImage0 foaf:thumbnail ns129:Thumbnail200x200 .
}

ns130:Thumbnail400x400 {
    ns154:CmsImage1 foaf:thumbnail ns130:Thumbnail400x400 .

    ns130:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns154:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:43 .
}

_:Ne5ed8295bd344764b7b371a8b0db12ff {
    _:Ne5ed8295bd344764b7b371a8b0db12ff a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N3c72121dc1c743d5aadd7fbb7a09a55d ;
        dcterms:spatial _:N90d52d953bfa4061bf89f44967aea4f8 ;
        dcterms:title "CmsCollection1CmsWork4 closing" ;
        cms:work ns13:work4 .

    _:N90d52d953bfa4061bf89f44967aea4f8 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N3c72121dc1c743d5aadd7fbb7a09a55d a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns131:Thumbnail200x200 {
    ns195:CmsImage1 foaf:thumbnail ns131:Thumbnail200x200 .

    ns131:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns195:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:82 .
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

ns132:Thumbnail200x200 {
    ns251:CmsImage1 foaf:thumbnail ns132:Thumbnail200x200 .

    ns132:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns251:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:person1 .
}

ns133:Thumbnail200x200 {
    ns133:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns83:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:109 .

    ns83:CmsImage1 foaf:thumbnail ns133:Thumbnail200x200 .
}

ns134:Thumbnail800x800 {
    ns170:CmsImage1 foaf:thumbnail ns134:Thumbnail800x800 .

    ns134:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns170:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:7 .
}

ns15:Thumbnail200x200 {
    ns15:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns33:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:69 .

    ns33:CmsImage1 foaf:thumbnail ns15:Thumbnail200x200 .
}

ns135:CmsImage0 {
    ns135:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:31 .
}

ns128:Thumbnail400x400 {
    ns128:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns384:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:freestandingwork8 .

    ns384:CmsImage1 foaf:thumbnail ns128:Thumbnail400x400 .
}

ns136:CmsImage0 {
    ns136:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:41 .
}

ns43:Thumbnail600x600 {
    ns43:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns376:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:11 .

    ns376:CmsImage0 foaf:thumbnail ns43:Thumbnail600x600 .
}

ns137:Thumbnail400x400 {
    ns32:CmsImage0 foaf:thumbnail ns137:Thumbnail400x400 .

    ns137:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns32:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:22 .
}

ns93:Thumbnail600x600 {
    ns93:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns292:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:77 .

    ns292:CmsImage1 foaf:thumbnail ns93:Thumbnail600x600 .
}

ns138:Thumbnail400x400 {
    ns213:CmsImage1 foaf:thumbnail ns138:Thumbnail400x400 .

    ns138:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns213:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:86 .
}

ns139:Thumbnail800x800 {
    ns361:CmsImage0 foaf:thumbnail ns139:Thumbnail800x800 .

    ns139:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns361:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:55 .
}

ns67:Thumbnail200x200 {
    ns67:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns306:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:18 .

    ns306:CmsImage1 foaf:thumbnail ns67:Thumbnail200x200 .
}

ns140:Thumbnail200x200 {
    ns330:CmsImage0 foaf:thumbnail ns140:Thumbnail200x200 .

    ns140:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns330:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:33 .
}

ns141:Thumbnail800x800 {
    ns395:CmsImage1 foaf:thumbnail ns141:Thumbnail800x800 .

    ns141:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns395:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:person4 .
}

ns13:work6 {
    ns13:work6 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork6 alternative title 0",
            "CmsCollection1CmsWork6 alternative title 1" ;
        dcterms:contributor _:N5836fe7883564b30b7f2b49c971234f7,
            _:Nf482b6376aa44e7ca21dba5e932b0cf5 ;
        dcterms:creator ns63:person3,
            ns63:person4 ;
        dcterms:description _:N4f5aeb2746ee4cb087c7300fff0a6d4d ;
        dcterms:extent ns6:16,
            ns6:17 ;
        dcterms:identifier "CmsCollection1CmsWork6Id0",
            "CmsCollection1CmsWork6Id1" ;
        dcterms:language ns6:26,
            ns6:27 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns6:46,
            ns6:47 ;
        dcterms:provenance "CmsCollection1CmsWork6 provenance 0",
            "CmsCollection1CmsWork6 provenance 1" ;
        dcterms:publisher ns6:56,
            ns6:57 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 rights holder" ;
        dcterms:source ns6:66,
            ns6:67 ;
        dcterms:spatial ns13:work6Location ;
        dcterms:subject ns6:86,
            ns6:87 ;
        dcterms:title "CmsCollection1CmsWork6" ;
        dcterms:type ns6:106,
            ns6:107 ;
        vra:culturalContext ns6:6,
            ns6:7 ;
        vra:material ns6:36,
            ns6:37 ;
        vra:technique ns6:96,
            ns6:97 ;
        cms:collection ns63:collection1 ;
        foaf:page <http://example.com/work/6> .

    _:N4f5aeb2746ee4cb087c7300fff0a6d4d a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:N5836fe7883564b30b7f2b49c971234f7 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork6 contributor 1" .

    _:Nf482b6376aa44e7ca21dba5e932b0cf5 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork6 contributor 0" .
}

ns23:Thumbnail400x400 {
    ns23:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns149:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:74 .

    ns149:CmsImage1 foaf:thumbnail ns23:Thumbnail400x400 .
}

ns49:Thumbnail800x800 {
    ns49:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns287:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:46 .

    ns287:CmsImage1 foaf:thumbnail ns49:Thumbnail800x800 .
}

ns142:CmsImage0 {
    ns142:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:52 .
}

ns143:CmsImage0 {
    ns143:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:87 .
}

ns70:Thumbnail400x400 {
    ns70:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns390:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:19 .

    ns390:CmsImage0 foaf:thumbnail ns70:Thumbnail400x400 .
}

ns144:CmsImage0 {
    ns144:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:40 .
}

ns145:Thumbnail800x800 {
    ns406:CmsImage0 foaf:thumbnail ns145:Thumbnail800x800 .

    ns145:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns406:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:96 .
}

ns146:Thumbnail800x800 {
    ns170:CmsImage0 foaf:thumbnail ns146:Thumbnail800x800 .

    ns146:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns170:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:7 .
}

ns147:Thumbnail200x200 {
    ns102:CmsImage1 foaf:thumbnail ns147:Thumbnail200x200 .

    ns147:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns102:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:66 .
}

ns148:Thumbnail600x600 {
    ns345:CmsImage0 foaf:thumbnail ns148:Thumbnail600x600 .

    ns148:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns345:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:person0 .
}

ns149:CmsImage1 {
    ns149:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:74 .
}

ns150:CmsImage1 {
    ns150:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns13:work7 .
}

ns55:Thumbnail200x200 {
    ns55:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns384:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:freestandingwork8 .

    ns384:CmsImage0 foaf:thumbnail ns55:Thumbnail200x200 .
}

ns151:Thumbnail800x800 {
    ns124:CmsImage1 foaf:thumbnail ns151:Thumbnail800x800 .

    ns151:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns124:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:76 .
}

ns152:Thumbnail800x800 {
    ns191:CmsImage1 foaf:thumbnail ns152:Thumbnail800x800 .

    ns152:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns191:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:4 .
}

ns153:Thumbnail800x800 {
    ns379:CmsImage1 foaf:thumbnail ns153:Thumbnail800x800 .

    ns153:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns379:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:1 .
}

ns154:CmsImage0 {
    ns154:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:43 .
}

ns151:Thumbnail600x600 {
    ns151:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns124:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:76 .

    ns124:CmsImage1 foaf:thumbnail ns151:Thumbnail600x600 .
}

ns155:CmsImage0 {
    ns155:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 0 rights holder" ;
        dcterms:title "Synthetic data properties image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns383:property_group .
}

ns156:CmsImage0 {
    ns156:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:59 .
}

ns157:Thumbnail800x800 {
    ns290:CmsImage0 foaf:thumbnail ns157:Thumbnail800x800 .

    ns157:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns290:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:47 .
}

ns112:Thumbnail600x600 {
    ns112:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns285:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:90 .

    ns285:CmsImage1 foaf:thumbnail ns112:Thumbnail600x600 .
}

ns158:Thumbnail800x800 {
    ns158:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns117:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:21 .

    ns117:CmsImage1 foaf:thumbnail ns158:Thumbnail800x800 .
}

ns63:freestandingwork10 {
    ns63:freestandingwork10 a cms:Work ;
        dcterms:alternative "FreestandingWork10 alternative title 0",
            "FreestandingWork10 alternative title 1" ;
        dcterms:contributor _:Na5bd4212b1b5447abdcb540ac14b6d6f,
            _:Ne12c460e31dd4b5da190e698bc494a7f ;
        dcterms:creator ns63:organization2,
            ns63:organization3 ;
        dcterms:description _:N850c59155a7d44e08f6b3a2544b52837 ;
        dcterms:extent ns6:10,
            ns6:11 ;
        dcterms:identifier "FreestandingWork10Id0",
            "FreestandingWork10Id1" ;
        dcterms:language ns6:20,
            ns6:21 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns6:40,
            ns6:41 ;
        dcterms:provenance "FreestandingWork10 provenance 0",
            "FreestandingWork10 provenance 1" ;
        dcterms:publisher ns6:50,
            ns6:51 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 rights holder" ;
        dcterms:source ns6:60,
            ns6:61 ;
        dcterms:spatial ns63:freestandingwork10Location ;
        dcterms:subject ns6:80,
            ns6:81 ;
        dcterms:title "FreestandingWork10" ;
        dcterms:type ns6:100,
            ns6:101 ;
        vra:culturalContext ns6:0,
            ns6:1 ;
        vra:material ns6:30,
            ns6:31 ;
        vra:technique ns6:90,
            ns6:91 ;
        foaf:page <http://example.com/work/10> .

    _:N850c59155a7d44e08f6b3a2544b52837 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:Na5bd4212b1b5447abdcb540ac14b6d6f a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork10 contributor 0" .

    _:Ne12c460e31dd4b5da190e698bc494a7f a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork10 contributor 1" .
}

ns159:Thumbnail400x400 {
    ns271:CmsImage0 foaf:thumbnail ns159:Thumbnail400x400 .

    ns159:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns271:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:44 .
}

ns160:Thumbnail600x600 {
    ns328:CmsImage1 foaf:thumbnail ns160:Thumbnail600x600 .

    ns160:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns328:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:91 .
}

ns113:Thumbnail600x600 {
    ns113:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns204:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:38 .

    ns204:CmsImage1 foaf:thumbnail ns113:Thumbnail600x600 .
}

ns161:Thumbnail200x200 {
    ns36:CmsImage1 foaf:thumbnail ns161:Thumbnail200x200 .

    ns161:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns36:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:person3 .
}

ns139:Thumbnail600x600 {
    ns139:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns361:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:55 .

    ns361:CmsImage0 foaf:thumbnail ns139:Thumbnail600x600 .
}

ns162:Thumbnail800x800 {
    ns162:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns156:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:59 .

    ns156:CmsImage0 foaf:thumbnail ns162:Thumbnail800x800 .
}

ns6:47 {
    ns6:47 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 7" ;
        skos:prefLabel "CmsConcept 47" .
}

ns163:CmsImage1 {
    ns163:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:104 .
}

ns164:Thumbnail200x200 {
    ns28:CmsImage1 foaf:thumbnail ns164:Thumbnail200x200 .

    ns164:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns28:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:14 .
}

ns159:Thumbnail800x800 {
    ns159:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns271:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:44 .

    ns271:CmsImage0 foaf:thumbnail ns159:Thumbnail800x800 .
}

ns165:Thumbnail400x400 {
    ns291:CmsImage0 foaf:thumbnail ns165:Thumbnail400x400 .

    ns165:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns291:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:collection1 .
}

ns56:Thumbnail200x200 {
    ns56:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns238:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:67 .

    ns238:CmsImage1 foaf:thumbnail ns56:Thumbnail200x200 .
}

ns27:Thumbnail400x400 {
    ns27:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns382:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:10 .

    ns382:CmsImage0 foaf:thumbnail ns27:Thumbnail400x400 .
}

ns123:Thumbnail200x200 {
    ns123:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns405:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:20 .

    ns405:CmsImage1 foaf:thumbnail ns123:Thumbnail200x200 .
}

ns166:Thumbnail400x400 {
    ns223:CmsImage1 foaf:thumbnail ns166:Thumbnail400x400 .

    ns166:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns223:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns13:work4 .
}

ns36:CmsImage1 {
    ns36:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:person3 .
}

ns167:CmsImage0 {
    ns167:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:32 .
}

ns168:Thumbnail400x400 {
    ns203:CmsImage0 foaf:thumbnail ns168:Thumbnail400x400 .

    ns168:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns203:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:organization4 .
}

ns169:Thumbnail200x200 {
    ns389:CmsImage1 foaf:thumbnail ns169:Thumbnail200x200 .

    ns169:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns389:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:17 .
}

ns170:CmsImage1 {
    ns170:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:7 .
}

ns171:Thumbnail200x200 {
    ns295:CmsImage1 foaf:thumbnail ns171:Thumbnail200x200 .

    ns171:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns295:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:28 .
}

ns164:Thumbnail800x800 {
    ns164:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns28:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:14 .

    ns28:CmsImage1 foaf:thumbnail ns164:Thumbnail800x800 .
}

ns172:Thumbnail600x600 {
    ns273:CmsImage0 foaf:thumbnail ns172:Thumbnail600x600 .

    ns172:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns273:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:57 .
}

ns37:Thumbnail400x400 {
    ns37:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns352:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:100 .

    ns352:CmsImage0 foaf:thumbnail ns37:Thumbnail400x400 .
}

ns173:Thumbnail800x800 {
    ns353:CmsImage0 foaf:thumbnail ns173:Thumbnail800x800 .

    ns173:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns353:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:50 .
}

ns174:Thumbnail800x800 {
    ns301:CmsImage0 foaf:thumbnail ns174:Thumbnail800x800 .

    ns174:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns301:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:54 .
}

ns175:Thumbnail200x200 {
    ns290:CmsImage1 foaf:thumbnail ns175:Thumbnail200x200 .

    ns175:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns290:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:47 .
}

ns62:Thumbnail800x800 {
    ns62:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns323:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:organization2 .

    ns323:CmsImage1 foaf:thumbnail ns62:Thumbnail800x800 .
}

ns63:freestandingwork11 {
    ns63:freestandingwork11 a cms:Work ;
        dcterms:alternative "FreestandingWork11 alternative title 0",
            "FreestandingWork11 alternative title 1" ;
        dcterms:contributor _:N81674d8f49204a108e06a2aa194f368a,
            _:Nae37147bef6749e9b9b6170a55fd10aa ;
        dcterms:creator ns63:organization3,
            ns63:organization4 ;
        dcterms:extent ns6:11,
            ns6:12 ;
        dcterms:identifier "FreestandingWork11Id0",
            "FreestandingWork11Id1" ;
        dcterms:language ns6:21,
            ns6:22 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns6:41,
            ns6:42 ;
        dcterms:provenance "FreestandingWork11 provenance 0",
            "FreestandingWork11 provenance 1" ;
        dcterms:publisher ns6:51,
            ns6:52 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 rights holder" ;
        dcterms:source ns6:61,
            ns6:62 ;
        dcterms:spatial ns63:freestandingwork11Location ;
        dcterms:subject ns6:81,
            ns6:82 ;
        dcterms:title "FreestandingWork11" ;
        dcterms:type ns6:101,
            ns6:102 ;
        vra:culturalContext ns6:1,
            ns6:2 ;
        vra:material ns6:31,
            ns6:32 ;
        vra:technique ns6:91,
            ns6:92 .

    _:N81674d8f49204a108e06a2aa194f368a a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork11 contributor 1" .

    _:Nae37147bef6749e9b9b6170a55fd10aa a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork11 contributor 0" .
}

ns176:Thumbnail600x600 {
    ns352:CmsImage1 foaf:thumbnail ns176:Thumbnail600x600 .

    ns176:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns352:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:100 .
}

ns177:Thumbnail400x400 {
    ns177:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns108:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:71 .

    ns108:CmsImage1 foaf:thumbnail ns177:Thumbnail400x400 .
}

ns178:Thumbnail800x800 {
    ns178:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns163:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:104 .

    ns163:CmsImage1 foaf:thumbnail ns178:Thumbnail800x800 .
}

ns179:CmsImage0 {
    ns179:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:13 .
}

ns180:Thumbnail200x200 {
    ns327:CmsImage1 foaf:thumbnail ns180:Thumbnail200x200 .

    ns180:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns327:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:45 .
}

ns181:Thumbnail400x400 {
    ns370:CmsImage1 foaf:thumbnail ns181:Thumbnail400x400 .

    ns181:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns370:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:8 .
}

ns172:Thumbnail800x800 {
    ns172:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns273:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:57 .

    ns273:CmsImage0 foaf:thumbnail ns172:Thumbnail800x800 .
}

ns143:CmsImage1 {
    ns143:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:87 .
}

ns60:Thumbnail400x400 {
    ns60:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns326:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:15 .

    ns326:CmsImage0 foaf:thumbnail ns60:Thumbnail400x400 .
}

ns182:Thumbnail400x400 {
    ns405:CmsImage0 foaf:thumbnail ns182:Thumbnail400x400 .

    ns182:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns405:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:20 .
}

ns183:Thumbnail800x800 {
    ns374:CmsImage0 foaf:thumbnail ns183:Thumbnail800x800 .

    ns183:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns374:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:9 .
}

ns91:Thumbnail200x200 {
    ns91:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns256:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:65 .

    ns256:CmsImage0 foaf:thumbnail ns91:Thumbnail200x200 .
}

ns184:Thumbnail800x800 {
    ns397:CmsImage0 foaf:thumbnail ns184:Thumbnail800x800 .

    ns184:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns397:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:39 .
}

ns185:Thumbnail200x200 {
    ns185:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns143:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:87 .

    ns143:CmsImage0 foaf:thumbnail ns185:Thumbnail200x200 .
}

ns186:Thumbnail200x200 {
    ns368:CmsImage0 foaf:thumbnail ns186:Thumbnail200x200 .

    ns186:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns368:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:80 .
}

ns6:35 {
    ns6:35 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 5" ;
        skos:prefLabel "CmsConcept 35" .
}

ns101:Thumbnail600x600 {
    ns101:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns305:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:60 .

    ns305:CmsImage1 foaf:thumbnail ns101:Thumbnail600x600 .
}

ns178:Thumbnail200x200 {
    ns178:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns163:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:104 .

    ns163:CmsImage1 foaf:thumbnail ns178:Thumbnail200x200 .
}

ns8:Thumbnail200x200 {
    ns8:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns323:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:organization2 .

    ns323:CmsImage0 foaf:thumbnail ns8:Thumbnail200x200 .
}

ns6:9 {
    ns6:9 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 9" ;
        skos:prefLabel "CmsConcept 9" .
}

ns187:Thumbnail600x600 {
    ns329:CmsImage0 foaf:thumbnail ns187:Thumbnail600x600 .

    ns187:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns329:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:27 .
}

ns69:Thumbnail600x600 {
    ns69:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns316:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:30 .

    ns316:CmsImage1 foaf:thumbnail ns69:Thumbnail600x600 .
}

ns45:Thumbnail800x800 {
    ns45:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns251:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:person1 .

    ns251:CmsImage0 foaf:thumbnail ns45:Thumbnail800x800 .
}

ns115:Thumbnail400x400 {
    ns115:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns317:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:89 .

    ns317:CmsImage0 foaf:thumbnail ns115:Thumbnail400x400 .
}

ns6:100 {
    ns6:100 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 0" ;
        skos:prefLabel "CmsConcept 100" .
}

ns188:CmsImage0 {
    ns188:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:organization0 .
}

ns189:Thumbnail600x600 {
    ns9:CmsImage1 foaf:thumbnail ns189:Thumbnail600x600 .

    ns189:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns9:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:26 .
}

ns190:CmsImage0 {
    ns190:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:0 .
}

ns191:CmsImage0 {
    ns191:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:4 .
}

ns192:Thumbnail600x600 {
    ns192:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns33:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:69 .

    ns33:CmsImage0 foaf:thumbnail ns192:Thumbnail600x600 .
}

ns127:Thumbnail400x400 {
    ns127:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns388:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:106 .

    ns388:CmsImage0 foaf:thumbnail ns127:Thumbnail400x400 .
}

ns128:Thumbnail200x200 {
    ns128:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns384:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:freestandingwork8 .

    ns384:CmsImage1 foaf:thumbnail ns128:Thumbnail200x200 .
}

ns29:Thumbnail600x600 {
    ns29:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns256:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:65 .

    ns256:CmsImage1 foaf:thumbnail ns29:Thumbnail600x600 .
}

ns193:Thumbnail200x200 {
    ns213:CmsImage0 foaf:thumbnail ns193:Thumbnail200x200 .

    ns193:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns213:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:86 .
}

ns194:Thumbnail400x400 {
    ns324:CmsImage0 foaf:thumbnail ns194:Thumbnail400x400 .

    ns194:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns324:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:56 .
}

ns159:Thumbnail600x600 {
    ns159:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns271:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:44 .

    ns271:CmsImage0 foaf:thumbnail ns159:Thumbnail600x600 .
}

ns6:98 {
    ns6:98 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 8" ;
        skos:prefLabel "CmsConcept 98" .
}

ns195:CmsImage1 {
    ns195:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:82 .
}

ns52:Thumbnail400x400 {
    ns52:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns262:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:105 .

    ns262:CmsImage0 foaf:thumbnail ns52:Thumbnail400x400 .
}

ns57:Thumbnail800x800 {
    ns57:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns306:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:18 .

    ns306:CmsImage0 foaf:thumbnail ns57:Thumbnail800x800 .
}

ns6:18 {
    ns6:18 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 8" ;
        skos:prefLabel "CmsConcept 18" .
}

ns196:Thumbnail400x400 {
    ns375:CmsImage1 foaf:thumbnail ns196:Thumbnail400x400 .

    ns196:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns375:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:3 .
}

ns6:73 {
    ns6:73 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 3" ;
        skos:prefLabel "CmsConcept 73" .
}

ns104:Thumbnail200x200 {
    ns104:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns47:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:freestandingwork10 .

    ns47:CmsImage0 foaf:thumbnail ns104:Thumbnail200x200 .
}

ns193:Thumbnail800x800 {
    ns193:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns213:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:86 .

    ns213:CmsImage0 foaf:thumbnail ns193:Thumbnail800x800 .
}

ns197:CmsImage0 {
    ns197:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns39:work0 .
}

ns198:CmsImage1 {
    ns198:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:34 .
}

ns199:Thumbnail600x600 {
    ns364:CmsImage0 foaf:thumbnail ns199:Thumbnail600x600 .

    ns199:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns364:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns13:work5 .
}

ns200:Thumbnail800x800 {
    ns316:CmsImage0 foaf:thumbnail ns200:Thumbnail800x800 .

    ns200:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns316:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:30 .
}

ns114:Thumbnail200x200 {
    ns114:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns364:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns13:work5 .

    ns364:CmsImage1 foaf:thumbnail ns114:Thumbnail200x200 .
}

ns106:Thumbnail200x200 {
    ns106:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns220:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:63 .

    ns220:CmsImage1 foaf:thumbnail ns106:Thumbnail200x200 .
}

ns2:Thumbnail200x200 {
    ns2:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns397:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:39 .

    ns397:CmsImage1 foaf:thumbnail ns2:Thumbnail200x200 .
}

ns6:97 {
    ns6:97 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 7" ;
        skos:prefLabel "CmsConcept 97" .
}

ns201:Thumbnail800x800 {
    ns155:CmsImage1 foaf:thumbnail ns201:Thumbnail800x800 .

    ns201:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 1 rights holder" ;
        dcterms:title "Synthetic data properties image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns155:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns383:property_group .
}

ns87:Thumbnail400x400 {
    ns87:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns273:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:57 .

    ns273:CmsImage1 foaf:thumbnail ns87:Thumbnail400x400 .
}

ns101:Thumbnail800x800 {
    ns101:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns305:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:60 .

    ns305:CmsImage1 foaf:thumbnail ns101:Thumbnail800x800 .
}

ns202:Thumbnail800x800 {
    ns233:CmsImage0 foaf:thumbnail ns202:Thumbnail800x800 .

    ns202:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns233:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns39:work3 .
}

ns203:CmsImage1 {
    ns203:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:organization4 .
}

ns13:work7Creation {
    ns13:work7Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns63:organization0,
            ns63:person4 ;
        dcterms:date _:N306c9b7cbced4bf0a9df81111cf13886 ;
        dcterms:spatial ns13:work7Location ;
        dcterms:title "CmsCollection1CmsWork7 creation" ;
        cms:work ns13:work7 .

    _:N306c9b7cbced4bf0a9df81111cf13886 a cms:DateTimeDescription ;
        time:day "---25"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns204:CmsImage1 {
    ns204:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:38 .
}

ns98:Thumbnail400x400 {
    ns98:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns391:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:62 .

    ns391:CmsImage1 foaf:thumbnail ns98:Thumbnail400x400 .
}

ns6:64 {
    ns6:64 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 4" ;
        skos:prefLabel "CmsConcept 64" .
}

ns205:Thumbnail200x200 {
    ns244:CmsImage0 foaf:thumbnail ns205:Thumbnail200x200 .

    ns205:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns244:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:79 .
}

ns206:Thumbnail800x800 {
    ns204:CmsImage0 foaf:thumbnail ns206:Thumbnail800x800 .

    ns206:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns204:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:38 .
}

ns207:Thumbnail200x200 {
    ns44:CmsImage1 foaf:thumbnail ns207:Thumbnail200x200 .

    ns207:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns44:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:36 .
}

ns208:Thumbnail800x800 {
    ns208:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns109:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:85 .

    ns109:CmsImage1 foaf:thumbnail ns208:Thumbnail800x800 .
}

ns209:Thumbnail600x600 {
    ns377:CmsImage1 foaf:thumbnail ns209:Thumbnail600x600 .

    ns209:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns377:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:68 .
}

ns31:Thumbnail800x800 {
    ns31:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns179:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:13 .

    ns179:CmsImage0 foaf:thumbnail ns31:Thumbnail800x800 .
}

ns17:Thumbnail400x400 {
    ns17:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:64 .

    ns385:CmsImage1 foaf:thumbnail ns17:Thumbnail400x400 .
}

ns97:Thumbnail800x800 {
    ns97:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns407:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:83 .

    ns407:CmsImage0 foaf:thumbnail ns97:Thumbnail800x800 .
}

ns82:Thumbnail200x200 {
    ns82:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns135:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:31 .

    ns135:CmsImage1 foaf:thumbnail ns82:Thumbnail200x200 .
}

ns210:Thumbnail600x600 {
    ns210:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 0 rights holder" ;
        dcterms:title "Synthetic data properties image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns155:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns383:property_group .

    ns155:CmsImage0 foaf:thumbnail ns210:Thumbnail600x600 .
}

ns211:Thumbnail200x200 {
    ns296:CmsImage1 foaf:thumbnail ns211:Thumbnail200x200 .

    ns211:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns296:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:78 .
}

ns66:Thumbnail200x200 {
    ns66:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns353:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:50 .

    ns353:CmsImage1 foaf:thumbnail ns66:Thumbnail200x200 .
}

ns122:CmsImage1 {
    ns122:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:61 .
}

ns31:Thumbnail200x200 {
    ns31:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns179:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:13 .

    ns179:CmsImage0 foaf:thumbnail ns31:Thumbnail200x200 .
}

ns160:Thumbnail800x800 {
    ns160:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns328:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:91 .

    ns328:CmsImage1 foaf:thumbnail ns160:Thumbnail800x800 .
}

ns212:Thumbnail600x600 {
    ns371:CmsImage1 foaf:thumbnail ns212:Thumbnail600x600 .

    ns212:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns371:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:freestandingwork9 .
}

ns22:Thumbnail800x800 {
    ns22:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns89:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:12 .

    ns89:CmsImage1 foaf:thumbnail ns22:Thumbnail800x800 .
}

ns213:CmsImage0 {
    ns213:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:86 .
}

ns214:Thumbnail600x600 {
    ns214:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns81:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:73 .

    ns81:CmsImage0 foaf:thumbnail ns214:Thumbnail600x600 .
}

ns215:Thumbnail600x600 {
    ns276:CmsImage0 foaf:thumbnail ns215:Thumbnail600x600 .

    ns215:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns276:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:5 .
}

ns18:Thumbnail200x200 {
    ns18:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns378:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:94 .

    ns378:CmsImage1 foaf:thumbnail ns18:Thumbnail200x200 .
}

ns94:Thumbnail400x400 {
    ns94:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns136:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:41 .

    ns136:CmsImage0 foaf:thumbnail ns94:Thumbnail400x400 .
}

ns216:Thumbnail800x800 {
    ns216:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns88:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:72 .

    ns88:CmsImage0 foaf:thumbnail ns216:Thumbnail800x800 .
}

ns217:Thumbnail200x200 {
    ns395:CmsImage0 foaf:thumbnail ns217:Thumbnail200x200 .

    ns217:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns395:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:person4 .
}

ns218:Thumbnail200x200 {
    ns330:CmsImage1 foaf:thumbnail ns218:Thumbnail200x200 .

    ns218:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns330:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:33 .
}

ns68:Thumbnail800x800 {
    ns68:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns198:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:34 .

    ns198:CmsImage1 foaf:thumbnail ns68:Thumbnail800x800 .
}

ns219:Thumbnail400x400 {
    ns343:CmsImage0 foaf:thumbnail ns219:Thumbnail400x400 .

    ns219:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns343:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:48 .
}

ns166:Thumbnail200x200 {
    ns166:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns223:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns13:work4 .

    ns223:CmsImage1 foaf:thumbnail ns166:Thumbnail200x200 .
}

ns163:CmsImage0 {
    ns163:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:104 .
}

ns63:freestandingwork11Location {
    ns63:freestandingwork11Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns220:CmsImage0 {
    ns220:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:63 .
}

ns221:Thumbnail400x400 {
    ns389:CmsImage0 foaf:thumbnail ns221:Thumbnail400x400 .

    ns221:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns389:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:17 .
}

ns222:Thumbnail400x400 {
    ns296:CmsImage0 foaf:thumbnail ns222:Thumbnail400x400 .

    ns222:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns296:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:78 .
}

ns39:work1Opening {
    ns39:work1Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-31"^^xsd:date ;
        dcterms:spatial _:N31a058f0d49a4562ab28ab004b2ed56f ;
        dcterms:title "CmsCollection0CmsWork1 opening" ;
        cms:work ns39:work1 .

    _:N31a058f0d49a4562ab28ab004b2ed56f a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns6:26 {
    ns6:26 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 6" ;
        skos:prefLabel "CmsConcept 26" .
}

ns223:CmsImage0 {
    ns223:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns13:work4 .
}

ns124:CmsImage1 {
    ns124:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:76 .
}

ns14:Thumbnail400x400 {
    ns14:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns117:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:21 .

    ns117:CmsImage0 foaf:thumbnail ns14:Thumbnail400x400 .
}

ns6:71 {
    ns6:71 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 1" ;
        skos:prefLabel "CmsConcept 71" .
}

ns224:Thumbnail800x800 {
    ns150:CmsImage0 foaf:thumbnail ns224:Thumbnail800x800 .

    ns224:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns150:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns13:work7 .
}

ns225:Thumbnail600x600 {
    ns225:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns44:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:36 .

    ns44:CmsImage0 foaf:thumbnail ns225:Thumbnail600x600 .
}

ns39:work3Location {
    ns39:work3Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns226:Thumbnail800x800 {
    ns362:CmsImage1 foaf:thumbnail ns226:Thumbnail800x800 .

    ns226:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns362:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns39:work1 .
}

ns227:Thumbnail800x800 {
    ns301:CmsImage1 foaf:thumbnail ns227:Thumbnail800x800 .

    ns227:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns301:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:54 .
}

ns228:Thumbnail800x800 {
    ns228:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns223:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns13:work4 .

    ns223:CmsImage0 foaf:thumbnail ns228:Thumbnail800x800 .
}

ns218:Thumbnail800x800 {
    ns218:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns330:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:33 .

    ns330:CmsImage1 foaf:thumbnail ns218:Thumbnail800x800 .
}

ns229:Thumbnail800x800 {
    ns118:CmsImage0 foaf:thumbnail ns229:Thumbnail800x800 .

    ns229:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns118:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:93 .
}

ns230:Thumbnail400x400 {
    ns385:CmsImage0 foaf:thumbnail ns230:Thumbnail400x400 .

    ns230:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:64 .
}

ns231:Thumbnail400x400 {
    ns48:CmsImage0 foaf:thumbnail ns231:Thumbnail400x400 .

    ns231:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns48:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:98 .
}

ns6:38 {
    ns6:38 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 8" ;
        skos:prefLabel "CmsConcept 38" .
}

ns232:Thumbnail200x200 {
    ns262:CmsImage1 foaf:thumbnail ns232:Thumbnail200x200 .

    ns232:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns262:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:105 .
}

ns107:Thumbnail400x400 {
    ns107:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns122:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:61 .

    ns122:CmsImage1 foaf:thumbnail ns107:Thumbnail400x400 .
}

ns233:CmsImage0 {
    ns233:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns39:work3 .
}

ns6:77 {
    ns6:77 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 7" ;
        skos:prefLabel "CmsConcept 77" .
}

ns234:Thumbnail400x400 {
    ns188:CmsImage1 foaf:thumbnail ns234:Thumbnail400x400 .

    ns234:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns188:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:organization0 .
}

ns235:Thumbnail600x600 {
    ns347:CmsImage1 foaf:thumbnail ns235:Thumbnail600x600 .

    ns235:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns347:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns39:work2 .
}

ns200:Thumbnail200x200 {
    ns200:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns316:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:30 .

    ns316:CmsImage0 foaf:thumbnail ns200:Thumbnail200x200 .
}

ns6:14 {
    ns6:14 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 4" ;
        skos:prefLabel "CmsConcept 14" .
}

ns236:Thumbnail800x800 {
    ns198:CmsImage0 foaf:thumbnail ns236:Thumbnail800x800 .

    ns236:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns198:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:34 .
}

ns237:Thumbnail200x200 {
    ns381:CmsImage0 foaf:thumbnail ns237:Thumbnail200x200 .

    ns237:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns381:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:42 .
}

ns184:Thumbnail200x200 {
    ns184:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns397:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:39 .

    ns397:CmsImage0 foaf:thumbnail ns184:Thumbnail200x200 .
}

ns94:Thumbnail800x800 {
    ns94:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns136:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:41 .

    ns136:CmsImage0 foaf:thumbnail ns94:Thumbnail800x800 .
}

ns180:Thumbnail800x800 {
    ns180:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns327:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:45 .

    ns327:CmsImage1 foaf:thumbnail ns180:Thumbnail800x800 .
}

dcterms:source {
    dcterms:source a cms:Property ;
        rdfs:label "Source" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns383:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> .
}

ns238:CmsImage1 {
    ns238:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:67 .
}

ns210:Thumbnail400x400 {
    ns210:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 0 rights holder" ;
        dcterms:title "Synthetic data properties image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns155:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns383:property_group .

    ns155:CmsImage0 foaf:thumbnail ns210:Thumbnail400x400 .
}

ns239:Thumbnail800x800 {
    ns239:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns124:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:76 .

    ns124:CmsImage0 foaf:thumbnail ns239:Thumbnail800x800 .
}

ns63:freestandingwork10Creation {
    ns63:freestandingwork10Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns63:organization2,
            ns63:organization3 ;
        dcterms:date _:N95751e50637e43eea7a525e2fe6d97b3 ;
        dcterms:description _:N850c59155a7d44e08f6b3a2544b52837 ;
        dcterms:spatial ns63:freestandingwork10Location ;
        dcterms:title "FreestandingWork10 creation" ;
        cms:work ns63:freestandingwork10 .

    _:N95751e50637e43eea7a525e2fe6d97b3 a cms:DateTimeDescription ;
        time:day "---22"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:N850c59155a7d44e08f6b3a2544b52837 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns72:Thumbnail600x600 {
    ns72:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns313:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:107 .

    ns313:CmsImage0 foaf:thumbnail ns72:Thumbnail600x600 .
}

ns240:CmsImage0 {
    ns240:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:53 .
}

ns236:Thumbnail600x600 {
    ns236:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns198:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:34 .

    ns198:CmsImage0 foaf:thumbnail ns236:Thumbnail600x600 .
}

ns241:Thumbnail600x600 {
    ns348:CmsImage0 foaf:thumbnail ns241:Thumbnail600x600 .

    ns241:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns348:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:97 .
}

ns62:Thumbnail200x200 {
    ns62:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns323:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:organization2 .

    ns323:CmsImage1 foaf:thumbnail ns62:Thumbnail200x200 .
}

ns4:Thumbnail400x400 {
    ns4:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns354:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:37 .

    ns354:CmsImage0 foaf:thumbnail ns4:Thumbnail400x400 .
}

ns242:Thumbnail200x200 {
    ns400:CmsImage1 foaf:thumbnail ns242:Thumbnail200x200 .

    ns242:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns400:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:88 .
}

ns162:Thumbnail200x200 {
    ns162:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns156:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:59 .

    ns156:CmsImage0 foaf:thumbnail ns162:Thumbnail200x200 .
}

ns6:80 {
    ns6:80 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 0" ;
        skos:prefLabel "CmsConcept 80" .
}

ns243:CmsImage1 {
    ns243:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:29 .
}

ns116:Thumbnail200x200 {
    ns116:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:99 .

    ns403:CmsImage1 foaf:thumbnail ns116:Thumbnail200x200 .
}

ns244:CmsImage1 {
    ns244:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:79 .
}

ns245:Thumbnail200x200 {
    ns89:CmsImage0 foaf:thumbnail ns245:Thumbnail200x200 .

    ns245:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns89:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:12 .
}

ns70:Thumbnail600x600 {
    ns70:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns390:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:19 .

    ns390:CmsImage0 foaf:thumbnail ns70:Thumbnail600x600 .
}

ns222:Thumbnail600x600 {
    ns222:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns296:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:78 .

    ns296:CmsImage0 foaf:thumbnail ns222:Thumbnail600x600 .
}

ns6:41 {
    ns6:41 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 1" ;
        skos:prefLabel "CmsConcept 41" .
}

ns232:Thumbnail400x400 {
    ns232:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns262:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:105 .

    ns262:CmsImage1 foaf:thumbnail ns232:Thumbnail400x400 .
}

ns131:Thumbnail600x600 {
    ns131:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns195:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:82 .

    ns195:CmsImage1 foaf:thumbnail ns131:Thumbnail600x600 .
}

ns6:108 {
    ns6:108 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 8" ;
        skos:prefLabel "CmsConcept 108" .
}

ns246:Thumbnail600x600 {
    ns324:CmsImage1 foaf:thumbnail ns246:Thumbnail600x600 .

    ns246:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns324:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:56 .
}

ns6:67 {
    ns6:67 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 7" ;
        skos:prefLabel "CmsConcept 67" .
}

ns30:Thumbnail200x200 {
    ns30:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns345:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:person0 .

    ns345:CmsImage1 foaf:thumbnail ns30:Thumbnail200x200 .
}

ns247:Thumbnail600x600 {
    ns156:CmsImage1 foaf:thumbnail ns247:Thumbnail600x600 .

    ns247:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns156:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:59 .
}

ns248:Thumbnail800x800 {
    ns248:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns36:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:person3 .

    ns36:CmsImage0 foaf:thumbnail ns248:Thumbnail800x800 .
}

ns245:Thumbnail400x400 {
    ns245:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns89:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:12 .

    ns89:CmsImage0 foaf:thumbnail ns245:Thumbnail400x400 .
}

ns249:Thumbnail400x400 {
    ns108:CmsImage0 foaf:thumbnail ns249:Thumbnail400x400 .

    ns249:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns108:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:71 .
}

ns250:Thumbnail800x800 {
    ns250:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns203:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:organization4 .

    ns203:CmsImage1 foaf:thumbnail ns250:Thumbnail800x800 .
}

ns251:CmsImage1 {
    ns251:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:person1 .
}

ns38:Thumbnail600x600 {
    ns38:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns243:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:29 .

    ns243:CmsImage1 foaf:thumbnail ns38:Thumbnail600x600 .
}

ns69:Thumbnail200x200 {
    ns69:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns316:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:30 .

    ns316:CmsImage1 foaf:thumbnail ns69:Thumbnail200x200 .
}

ns252:CmsImage1 {
    ns252:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:2 .
}

ns253:Thumbnail800x800 {
    ns368:CmsImage1 foaf:thumbnail ns253:Thumbnail800x800 .

    ns253:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns368:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:80 .
}

ns46:Thumbnail200x200 {
    ns46:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns378:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:94 .

    ns378:CmsImage0 foaf:thumbnail ns46:Thumbnail200x200 .
}

ns254:Thumbnail800x800 {
    ns381:CmsImage1 foaf:thumbnail ns254:Thumbnail800x800 .

    ns254:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns381:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:42 .
}

ns53:Thumbnail400x400 {
    ns53:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns374:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:9 .

    ns374:CmsImage1 foaf:thumbnail ns53:Thumbnail400x400 .
}

ns245:Thumbnail600x600 {
    ns245:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns89:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:12 .

    ns89:CmsImage0 foaf:thumbnail ns245:Thumbnail600x600 .
}

ns138:Thumbnail200x200 {
    ns138:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns213:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:86 .

    ns213:CmsImage1 foaf:thumbnail ns138:Thumbnail200x200 .
}

ns255:Thumbnail800x800 {
    ns81:CmsImage1 foaf:thumbnail ns255:Thumbnail800x800 .

    ns255:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns81:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:73 .
}

ns63:person3 {
    ns63:person3 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            wd:Q7251 ;
        contact:sortName "3, CmsPerson" ;
        foaf:familyName "3" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 3" .
}

ns216:Thumbnail200x200 {
    ns216:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns88:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:72 .

    ns88:CmsImage0 foaf:thumbnail ns216:Thumbnail200x200 .
}

ns208:Thumbnail200x200 {
    ns208:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns109:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:85 .

    ns109:CmsImage1 foaf:thumbnail ns208:Thumbnail200x200 .
}

ns252:CmsImage0 {
    ns252:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:2 .
}

ns184:Thumbnail400x400 {
    ns184:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns397:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:39 .

    ns397:CmsImage0 foaf:thumbnail ns184:Thumbnail400x400 .
}

ns6:5 {
    ns6:5 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 5" ;
        skos:prefLabel "CmsConcept 5" .
}

ns256:CmsImage1 {
    ns256:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:65 .
}

ns257:CmsImage0 {
    ns257:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:person2 .
}

ns258:Thumbnail600x600 {
    ns404:CmsImage1 foaf:thumbnail ns258:Thumbnail600x600 .

    ns258:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns404:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:23 .
}

ns82:Thumbnail800x800 {
    ns82:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns135:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:31 .

    ns135:CmsImage1 foaf:thumbnail ns82:Thumbnail800x800 .
}

ns121:Thumbnail400x400 {
    ns121:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns263:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:25 .

    ns263:CmsImage0 foaf:thumbnail ns121:Thumbnail400x400 .
}

ns259:Thumbnail600x600 {
    ns259:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns142:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:52 .

    ns142:CmsImage0 foaf:thumbnail ns259:Thumbnail600x600 .
}

ns59:Thumbnail200x200 {
    ns59:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns240:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:53 .

    ns240:CmsImage0 foaf:thumbnail ns59:Thumbnail200x200 .
}

ns6:57 {
    ns6:57 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 7" ;
        skos:prefLabel "CmsConcept 57" .
}

ns133:Thumbnail600x600 {
    ns133:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns83:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:109 .

    ns83:CmsImage1 foaf:thumbnail ns133:Thumbnail600x600 .
}

ns30:Thumbnail800x800 {
    ns30:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns345:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:person0 .

    ns345:CmsImage1 foaf:thumbnail ns30:Thumbnail800x800 .
}

ns99:Thumbnail400x400 {
    ns99:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns84:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:58 .

    ns84:CmsImage0 foaf:thumbnail ns99:Thumbnail400x400 .
}

ns260:Thumbnail600x600 {
    ns327:CmsImage0 foaf:thumbnail ns260:Thumbnail600x600 .

    ns260:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns327:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:45 .
}

ns261:Thumbnail600x600 {
    ns263:CmsImage1 foaf:thumbnail ns261:Thumbnail600x600 .

    ns261:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns263:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:25 .
}

ns262:CmsImage0 {
    ns262:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:105 .
}

ns25:Thumbnail200x200 {
    ns25:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns143:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:87 .

    ns143:CmsImage1 foaf:thumbnail ns25:Thumbnail200x200 .
}

ns6:21 {
    ns6:21 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 1" ;
        skos:prefLabel "CmsConcept 21" .
}

ns258:Thumbnail800x800 {
    ns258:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns404:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:23 .

    ns404:CmsImage1 foaf:thumbnail ns258:Thumbnail800x800 .
}

ns209:Thumbnail400x400 {
    ns209:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns377:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:68 .

    ns377:CmsImage1 foaf:thumbnail ns209:Thumbnail400x400 .
}

ns66:Thumbnail400x400 {
    ns66:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns353:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:50 .

    ns353:CmsImage1 foaf:thumbnail ns66:Thumbnail400x400 .
}

ns263:CmsImage0 {
    ns263:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:25 .
}

ns264:Thumbnail400x400 {
    ns346:CmsImage1 foaf:thumbnail ns264:Thumbnail400x400 .

    ns264:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns346:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:organization1 .
}

ns260:Thumbnail800x800 {
    ns260:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns327:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:45 .

    ns327:CmsImage0 foaf:thumbnail ns260:Thumbnail800x800 .
}

ns182:Thumbnail200x200 {
    ns182:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns405:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:20 .

    ns405:CmsImage0 foaf:thumbnail ns182:Thumbnail200x200 .
}

ns265:Thumbnail400x400 {
    ns396:CmsImage1 foaf:thumbnail ns265:Thumbnail400x400 .

    ns265:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:organization3 .
}

ns266:Thumbnail200x200 {
    ns362:CmsImage0 foaf:thumbnail ns266:Thumbnail200x200 .

    ns266:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns362:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns39:work1 .
}

ns79:Thumbnail600x600 {
    ns79:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns122:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:61 .

    ns122:CmsImage0 foaf:thumbnail ns79:Thumbnail600x600 .
}

ns267:Thumbnail600x600 {
    ns267:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns154:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:43 .

    ns154:CmsImage0 foaf:thumbnail ns267:Thumbnail600x600 .
}

ns268:Thumbnail200x200 {
    ns406:CmsImage1 foaf:thumbnail ns268:Thumbnail200x200 .

    ns268:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns406:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:96 .
}

ns269:Thumbnail400x400 {
    ns388:CmsImage1 foaf:thumbnail ns269:Thumbnail400x400 .

    ns269:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns388:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:106 .
}

ns270:Thumbnail400x400 {
    ns309:CmsImage0 foaf:thumbnail ns270:Thumbnail400x400 .

    ns270:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns309:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:35 .
}

dcterms:medium {
    dcterms:medium a cms:Property ;
        rdfs:label "Medium" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns383:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> .
}

ns221:Thumbnail200x200 {
    ns221:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns389:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:17 .

    ns389:CmsImage0 foaf:thumbnail ns221:Thumbnail200x200 .
}

ns6:13 {
    ns6:13 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 3" ;
        skos:prefLabel "CmsConcept 13" .
}

ns40:Thumbnail400x400 {
    ns40:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns85:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:95 .

    ns85:CmsImage1 foaf:thumbnail ns40:Thumbnail400x400 .
}

ns130:Thumbnail800x800 {
    ns130:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns154:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:43 .

    ns154:CmsImage1 foaf:thumbnail ns130:Thumbnail800x800 .
}

ns271:CmsImage1 {
    ns271:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:44 .
}

ns232:Thumbnail800x800 {
    ns232:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns262:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:105 .

    ns262:CmsImage1 foaf:thumbnail ns232:Thumbnail800x800 .
}

ns189:Thumbnail200x200 {
    ns189:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns9:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:26 .

    ns9:CmsImage1 foaf:thumbnail ns189:Thumbnail200x200 .
}

ns52:Thumbnail800x800 {
    ns52:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns262:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:105 .

    ns262:CmsImage0 foaf:thumbnail ns52:Thumbnail800x800 .
}

ns78:Thumbnail400x400 {
    ns78:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns309:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:35 .

    ns309:CmsImage1 foaf:thumbnail ns78:Thumbnail400x400 .
}

ns272:Thumbnail800x800 {
    ns83:CmsImage0 foaf:thumbnail ns272:Thumbnail800x800 .

    ns272:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns83:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:109 .
}

ns271:CmsImage0 {
    ns271:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:44 .
}

ns273:CmsImage1 {
    ns273:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:57 .
}

ns274:CmsImage0 {
    ns274:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:101 .
}

ns275:Thumbnail200x200 {
    ns287:CmsImage0 foaf:thumbnail ns275:Thumbnail200x200 .

    ns275:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns287:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:46 .
}

ns6:30 {
    ns6:30 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 0" ;
        skos:prefLabel "CmsConcept 30" .
}

ns276:CmsImage0 {
    ns276:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:5 .
}

ns47:CmsImage0 {
    ns47:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:freestandingwork10 .
}

ns6:54 {
    ns6:54 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 4" ;
        skos:prefLabel "CmsConcept 54" .
}

ns277:Thumbnail800x800 {
    ns277:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns163:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:104 .

    ns163:CmsImage0 foaf:thumbnail ns277:Thumbnail800x800 .
}

ns10:CmsImage1 {
    ns10:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:16 .
}

ns278:Thumbnail800x800 {
    ns392:CmsImage1 foaf:thumbnail ns278:Thumbnail800x800 .

    ns278:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:108 .
}

ns61:Thumbnail200x200 {
    ns61:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns274:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:101 .

    ns274:CmsImage0 foaf:thumbnail ns61:Thumbnail200x200 .
}

ns279:Thumbnail400x400 {
    ns233:CmsImage1 foaf:thumbnail ns279:Thumbnail400x400 .

    ns279:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns233:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns39:work3 .
}

ns280:Thumbnail600x600 {
    ns336:CmsImage1 foaf:thumbnail ns280:Thumbnail600x600 .

    ns280:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns336:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:75 .
}

ns222:Thumbnail800x800 {
    ns222:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns296:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:78 .

    ns296:CmsImage0 foaf:thumbnail ns222:Thumbnail800x800 .
}

ns193:Thumbnail400x400 {
    ns193:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns213:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:86 .

    ns213:CmsImage0 foaf:thumbnail ns193:Thumbnail400x400 .
}

ns281:Thumbnail200x200 {
    ns281:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns252:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:2 .

    ns252:CmsImage0 foaf:thumbnail ns281:Thumbnail200x200 .
}

ns282:Thumbnail200x200 {
    ns376:CmsImage1 foaf:thumbnail ns282:Thumbnail200x200 .

    ns282:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns376:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:11 .
}

ns6:20 {
    ns6:20 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 0" ;
        skos:prefLabel "CmsConcept 20" .
}

ns110:Thumbnail200x200 {
    ns110:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns102:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:66 .

    ns102:CmsImage0 foaf:thumbnail ns110:Thumbnail200x200 .
}

ns283:Thumbnail200x200 {
    ns354:CmsImage1 foaf:thumbnail ns283:Thumbnail200x200 .

    ns283:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns354:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:37 .
}

ns136:CmsImage1 {
    ns136:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:41 .
}

ns55:Thumbnail400x400 {
    ns55:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns384:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:freestandingwork8 .

    ns384:CmsImage0 foaf:thumbnail ns55:Thumbnail400x400 .
}

ns53:Thumbnail600x600 {
    ns53:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns374:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:9 .

    ns374:CmsImage1 foaf:thumbnail ns53:Thumbnail600x600 .
}

ns165:Thumbnail200x200 {
    ns165:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns291:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:collection1 .

    ns291:CmsImage0 foaf:thumbnail ns165:Thumbnail200x200 .
}

ns284:Thumbnail200x200 {
    ns346:CmsImage0 foaf:thumbnail ns284:Thumbnail200x200 .

    ns284:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns346:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:organization1 .
}

ns285:CmsImage0 {
    ns285:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:90 .
}

ns286:Thumbnail200x200 {
    ns286:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns10:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:16 .

    ns10:CmsImage1 foaf:thumbnail ns286:Thumbnail200x200 .
}

ns187:Thumbnail400x400 {
    ns187:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns329:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:27 .

    ns329:CmsImage0 foaf:thumbnail ns187:Thumbnail400x400 .
}

ns113:Thumbnail200x200 {
    ns113:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns204:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:38 .

    ns204:CmsImage1 foaf:thumbnail ns113:Thumbnail200x200 .
}

ns287:CmsImage0 {
    ns287:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:46 .
}

ns288:CmsImage0 {
    ns288:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:freestandingwork11 .
}

ns77:Thumbnail800x800 {
    ns77:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns48:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:98 .

    ns48:CmsImage1 foaf:thumbnail ns77:Thumbnail800x800 .
}

ns100:Thumbnail200x200 {
    ns100:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns47:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:freestandingwork10 .

    ns47:CmsImage1 foaf:thumbnail ns100:Thumbnail200x200 .
}

ns264:Thumbnail200x200 {
    ns264:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns346:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:organization1 .

    ns346:CmsImage1 foaf:thumbnail ns264:Thumbnail200x200 .
}

ns63:freestandingwork8 {
    ns63:freestandingwork8 a cms:Work ;
        dcterms:alternative "FreestandingWork8 alternative title 0",
            "FreestandingWork8 alternative title 1" ;
        dcterms:contributor _:N6d020c65147f49e48d075f555d37adcd,
            _:N70a8d38f977e4e0992b847f9c421bff4 ;
        dcterms:creator ns63:organization0,
            ns63:organization1 ;
        dcterms:description _:N170a65d3df104a499fc1466eabf59008 ;
        dcterms:extent ns6:18,
            ns6:19 ;
        dcterms:identifier "FreestandingWork8Id0",
            "FreestandingWork8Id1" ;
        dcterms:language ns6:28,
            ns6:29 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns6:48,
            ns6:49 ;
        dcterms:provenance "FreestandingWork8 provenance 0",
            "FreestandingWork8 provenance 1" ;
        dcterms:publisher ns6:58,
            ns6:59 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 rights holder" ;
        dcterms:source ns6:68,
            ns6:69 ;
        dcterms:spatial ns63:freestandingwork8Location ;
        dcterms:subject ns6:88,
            ns6:89 ;
        dcterms:title "FreestandingWork8" ;
        dcterms:type ns6:108,
            ns6:109 ;
        vra:culturalContext ns6:8,
            ns6:9 ;
        vra:material ns6:38,
            ns6:39 ;
        vra:technique ns6:98,
            ns6:99 ;
        foaf:page <http://example.com/work/8> .

    _:N6d020c65147f49e48d075f555d37adcd a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork8 contributor 0" .

    _:N70a8d38f977e4e0992b847f9c421bff4 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork8 contributor 1" .

    _:N170a65d3df104a499fc1466eabf59008 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns131:Thumbnail800x800 {
    ns131:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns195:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:82 .

    ns195:CmsImage1 foaf:thumbnail ns131:Thumbnail800x800 .
}

ns95:Thumbnail600x600 {
    ns95:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns34:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:84 .

    ns34:CmsImage0 foaf:thumbnail ns95:Thumbnail600x600 .
}

ns264:Thumbnail800x800 {
    ns264:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns346:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:organization1 .

    ns346:CmsImage1 foaf:thumbnail ns264:Thumbnail800x800 .
}

ns40:Thumbnail600x600 {
    ns40:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns85:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:95 .

    ns85:CmsImage1 foaf:thumbnail ns40:Thumbnail600x600 .
}

_:N88816f42903a4dc2be262a2706366a6b {
    _:N88816f42903a4dc2be262a2706366a6b a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:Na4566a7a01f9425a9a5eef10dc3dcf27 ;
        dcterms:title "CmsCollection0CmsWork3 closing" ;
        cms:work ns39:work3 .

    _:Na4566a7a01f9425a9a5eef10dc3dcf27 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns282:Thumbnail400x400 {
    ns282:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns376:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:11 .

    ns376:CmsImage1 foaf:thumbnail ns282:Thumbnail400x400 .
}

ns289:Thumbnail800x800 {
    ns289:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns191:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:4 .

    ns191:CmsImage0 foaf:thumbnail ns289:Thumbnail800x800 .
}

ns290:CmsImage0 {
    ns290:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:47 .
}

ns290:CmsImage1 {
    ns290:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:47 .
}

ns291:CmsImage0 {
    ns291:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:collection1 .
}

ns189:Thumbnail800x800 {
    ns189:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns9:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:26 .

    ns9:CmsImage1 foaf:thumbnail ns189:Thumbnail800x800 .
}

ns74:Thumbnail600x600 {
    ns74:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns348:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:97 .

    ns348:CmsImage1 foaf:thumbnail ns74:Thumbnail600x600 .
}

ns100:Thumbnail800x800 {
    ns100:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns47:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:freestandingwork10 .

    ns47:CmsImage1 foaf:thumbnail ns100:Thumbnail800x800 .
}

ns50:Thumbnail800x800 {
    ns50:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns366:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:70 .

    ns366:CmsImage1 foaf:thumbnail ns50:Thumbnail800x800 .
}

ns292:CmsImage0 {
    ns292:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:77 .
}

ns281:Thumbnail400x400 {
    ns281:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns252:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:2 .

    ns252:CmsImage0 foaf:thumbnail ns281:Thumbnail400x400 .
}

ns293:Thumbnail200x200 {
    ns305:CmsImage0 foaf:thumbnail ns293:Thumbnail200x200 .

    ns293:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns305:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:60 .
}

ns13:work4Opening {
    ns13:work4Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-28"^^xsd:date ;
        dcterms:description _:N3c72121dc1c743d5aadd7fbb7a09a55d ;
        dcterms:spatial _:N90d52d953bfa4061bf89f44967aea4f8 ;
        dcterms:title "CmsCollection1CmsWork4 opening" ;
        cms:work ns13:work4 .

    _:N90d52d953bfa4061bf89f44967aea4f8 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N3c72121dc1c743d5aadd7fbb7a09a55d a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns39:work1 {
    ns39:work1 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork1 alternative title 0",
            "CmsCollection0CmsWork1 alternative title 1" ;
        dcterms:contributor _:N707383e4a15b405498a17de566b33cfb,
            _:Na393fad3a8e2438d8bbdbe4ee08008a3 ;
        dcterms:creator ns63:organization3,
            ns63:organization4 ;
        dcterms:extent ns6:11,
            ns6:12 ;
        dcterms:identifier "CmsCollection0CmsWork1Id0",
            "CmsCollection0CmsWork1Id1" ;
        dcterms:language ns6:21,
            ns6:22 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns6:41,
            ns6:42 ;
        dcterms:provenance "CmsCollection0CmsWork1 provenance 0",
            "CmsCollection0CmsWork1 provenance 1" ;
        dcterms:publisher ns6:51,
            ns6:52 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 rights holder" ;
        dcterms:source ns6:61,
            ns6:62 ;
        dcterms:spatial ns39:work1Location ;
        dcterms:subject ns6:81,
            ns6:82 ;
        dcterms:title "CmsCollection0CmsWork1" ;
        dcterms:type ns6:101,
            ns6:102 ;
        vra:culturalContext ns6:1,
            ns6:2 ;
        vra:material ns6:31,
            ns6:32 ;
        vra:technique ns6:91,
            ns6:92 ;
        cms:collection ns63:collection0 .

    _:N707383e4a15b405498a17de566b33cfb a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork1 contributor 1" .

    _:Na393fad3a8e2438d8bbdbe4ee08008a3 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork1 contributor 0" .
}

ns294:Thumbnail400x400 {
    ns190:CmsImage1 foaf:thumbnail ns294:Thumbnail400x400 .

    ns294:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns190:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:0 .
}

ns175:Thumbnail600x600 {
    ns175:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns290:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:47 .

    ns290:CmsImage1 foaf:thumbnail ns175:Thumbnail600x600 .
}

ns254:Thumbnail200x200 {
    ns254:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns381:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:42 .

    ns381:CmsImage1 foaf:thumbnail ns254:Thumbnail200x200 .
}

ns104:Thumbnail600x600 {
    ns104:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns47:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:freestandingwork10 .

    ns47:CmsImage0 foaf:thumbnail ns104:Thumbnail600x600 .
}

ns295:CmsImage0 {
    ns295:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:28 .
}

ns123:Thumbnail600x600 {
    ns123:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns405:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:20 .

    ns405:CmsImage1 foaf:thumbnail ns123:Thumbnail600x600 .
}

ns105:Thumbnail400x400 {
    ns105:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns88:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:72 .

    ns88:CmsImage1 foaf:thumbnail ns105:Thumbnail400x400 .
}

ns210:Thumbnail200x200 {
    ns210:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 0 rights holder" ;
        dcterms:title "Synthetic data properties image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns155:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns383:property_group .

    ns155:CmsImage0 foaf:thumbnail ns210:Thumbnail200x200 .
}

ns259:Thumbnail400x400 {
    ns259:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns142:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:52 .

    ns142:CmsImage0 foaf:thumbnail ns259:Thumbnail400x400 .
}

ns173:Thumbnail600x600 {
    ns173:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns353:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:50 .

    ns353:CmsImage0 foaf:thumbnail ns173:Thumbnail600x600 .
}

ns296:CmsImage1 {
    ns296:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:78 .
}

ns248:Thumbnail200x200 {
    ns248:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns36:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:person3 .

    ns36:CmsImage0 foaf:thumbnail ns248:Thumbnail200x200 .
}

ns297:Thumbnail400x400 {
    ns109:CmsImage0 foaf:thumbnail ns297:Thumbnail400x400 .

    ns297:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns109:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:85 .
}

ns237:Thumbnail600x600 {
    ns237:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns381:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:42 .

    ns381:CmsImage0 foaf:thumbnail ns237:Thumbnail600x600 .
}

ns212:Thumbnail200x200 {
    ns212:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns371:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:freestandingwork9 .

    ns371:CmsImage1 foaf:thumbnail ns212:Thumbnail200x200 .
}

ns6:83 {
    ns6:83 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 3" ;
        skos:prefLabel "CmsConcept 83" .
}

ns218:Thumbnail400x400 {
    ns218:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns330:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:33 .

    ns330:CmsImage1 foaf:thumbnail ns218:Thumbnail400x400 .
}

ns298:Thumbnail800x800 {
    ns394:CmsImage0 foaf:thumbnail ns298:Thumbnail800x800 .

    ns298:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns394:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:81 .
}

ns6:70 {
    ns6:70 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 0" ;
        skos:prefLabel "CmsConcept 70" .
}

ns299:Thumbnail200x200 {
    ns299:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns150:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns13:work7 .

    ns150:CmsImage1 foaf:thumbnail ns299:Thumbnail200x200 .
}

ns300:Thumbnail800x800 {
    ns399:CmsImage0 foaf:thumbnail ns300:Thumbnail800x800 .

    ns300:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:102 .
}

ns301:CmsImage1 {
    ns301:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:54 .
}

ns144:CmsImage1 {
    ns144:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:40 .
}

ns34:CmsImage1 {
    ns34:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:84 .
}

ns162:Thumbnail600x600 {
    ns162:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns156:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:59 .

    ns156:CmsImage0 foaf:thumbnail ns162:Thumbnail600x600 .
}

ns6:107 {
    ns6:107 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 7" ;
        skos:prefLabel "CmsConcept 107" .
}

ns302:Thumbnail400x400 {
    ns302:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns7:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:6 .

    ns7:CmsImage1 foaf:thumbnail ns302:Thumbnail400x400 .
}

ns284:Thumbnail400x400 {
    ns284:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns346:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:organization1 .

    ns346:CmsImage0 foaf:thumbnail ns284:Thumbnail400x400 .
}

ns229:Thumbnail400x400 {
    ns229:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns118:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:93 .

    ns118:CmsImage0 foaf:thumbnail ns229:Thumbnail400x400 .
}

ns303:Thumbnail200x200 {
    ns303:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns144:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:40 .

    ns144:CmsImage0 foaf:thumbnail ns303:Thumbnail200x200 .
}

ns76:CmsImage1 {
    ns76:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:103 .
}

ns170:CmsImage0 {
    ns170:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:7 .
}

ns153:Thumbnail200x200 {
    ns153:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns379:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:1 .

    ns379:CmsImage1 foaf:thumbnail ns153:Thumbnail200x200 .
}

ns239:Thumbnail200x200 {
    ns239:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns124:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:76 .

    ns124:CmsImage0 foaf:thumbnail ns239:Thumbnail200x200 .
}

ns50:Thumbnail600x600 {
    ns50:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns366:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:70 .

    ns366:CmsImage1 foaf:thumbnail ns50:Thumbnail600x600 .
}

ns39:work0 {
    ns39:work0 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork0 alternative title 0",
            "CmsCollection0CmsWork0 alternative title 1" ;
        dcterms:contributor _:N3e3c7148e33c4f07b6c427fa2ab09f74,
            _:N47177f44f8ec486b9a4e6e1653ab451a ;
        dcterms:creator ns63:organization2,
            ns63:organization3 ;
        dcterms:description _:N3be1979b3c2b4b7fad9db56006aa7fef ;
        dcterms:extent ns6:10,
            ns6:11 ;
        dcterms:identifier "CmsCollection0CmsWork0Id0",
            "CmsCollection0CmsWork0Id1" ;
        dcterms:language ns6:20,
            ns6:21 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns6:40,
            ns6:41 ;
        dcterms:provenance "CmsCollection0CmsWork0 provenance 0",
            "CmsCollection0CmsWork0 provenance 1" ;
        dcterms:publisher ns6:50,
            ns6:51 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 rights holder" ;
        dcterms:source ns6:60,
            ns6:61 ;
        dcterms:spatial ns39:work0Location ;
        dcterms:subject ns6:80,
            ns6:81 ;
        dcterms:title "CmsCollection0CmsWork0" ;
        dcterms:type ns6:100,
            ns6:101 ;
        vra:culturalContext ns6:0,
            ns6:1 ;
        vra:material ns6:30,
            ns6:31 ;
        vra:technique ns6:90,
            ns6:91 ;
        cms:collection ns63:collection0 ;
        foaf:page <http://example.com/work/0> .

    _:N3e3c7148e33c4f07b6c427fa2ab09f74 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork0 contributor 0" .

    _:N47177f44f8ec486b9a4e6e1653ab451a a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork0 contributor 1" .

    _:N3be1979b3c2b4b7fad9db56006aa7fef a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns304:Thumbnail200x200 {
    ns361:CmsImage1 foaf:thumbnail ns304:Thumbnail200x200 .

    ns304:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns361:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:55 .
}

ns305:CmsImage0 {
    ns305:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:60 .
}

ns211:Thumbnail400x400 {
    ns211:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns296:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:78 .

    ns296:CmsImage1 foaf:thumbnail ns211:Thumbnail400x400 .
}

ns186:Thumbnail800x800 {
    ns186:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns368:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:80 .

    ns368:CmsImage0 foaf:thumbnail ns186:Thumbnail800x800 .
}

ns6:36 {
    ns6:36 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 6" ;
        skos:prefLabel "CmsConcept 36" .
}

ns306:CmsImage0 {
    ns306:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:18 .
}

ns307:Thumbnail200x200 {
    ns307:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns167:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:32 .

    ns167:CmsImage0 foaf:thumbnail ns307:Thumbnail200x200 .
}

ns205:Thumbnail800x800 {
    ns205:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns244:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:79 .

    ns244:CmsImage0 foaf:thumbnail ns205:Thumbnail800x800 .
}

ns6:23 {
    ns6:23 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 3" ;
        skos:prefLabel "CmsConcept 23" .
}

ns20:Thumbnail800x800 {
    ns20:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns76:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:103 .

    ns76:CmsImage0 foaf:thumbnail ns20:Thumbnail800x800 .
}

ns6:0 {
    ns6:0 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 0" ;
        skos:prefLabel "CmsConcept 0" .
}

ns6:17 {
    ns6:17 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 7" ;
        skos:prefLabel "CmsConcept 17" .
}

ns80:Thumbnail800x800 {
    ns80:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns136:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:41 .

    ns136:CmsImage1 foaf:thumbnail ns80:Thumbnail800x800 .
}

ns61:Thumbnail600x600 {
    ns61:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns274:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:101 .

    ns274:CmsImage0 foaf:thumbnail ns61:Thumbnail600x600 .
}

ns171:Thumbnail800x800 {
    ns171:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns295:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:28 .

    ns295:CmsImage1 foaf:thumbnail ns171:Thumbnail800x800 .
}

ns6:105 {
    ns6:105 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 5" ;
        skos:prefLabel "CmsConcept 105" .
}

ns6:31 {
    ns6:31 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 1" ;
        skos:prefLabel "CmsConcept 31" .
}

ns308:Thumbnail800x800 {
    ns103:CmsImage1 foaf:thumbnail ns308:Thumbnail800x800 .

    ns308:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns103:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:49 .
}

ns70:Thumbnail200x200 {
    ns70:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns390:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:19 .

    ns390:CmsImage0 foaf:thumbnail ns70:Thumbnail200x200 .
}

ns13:work5Location {
    ns13:work5Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns309:CmsImage1 {
    ns309:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:35 .
}

ns249:Thumbnail600x600 {
    ns249:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns108:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:71 .

    ns108:CmsImage0 foaf:thumbnail ns249:Thumbnail600x600 .
}

ns310:Thumbnail600x600 {
    ns310:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns220:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:63 .

    ns220:CmsImage0 foaf:thumbnail ns310:Thumbnail600x600 .
}

ns311:Thumbnail400x400 {
    ns343:CmsImage1 foaf:thumbnail ns311:Thumbnail400x400 .

    ns311:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns343:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:48 .
}

ns312:Thumbnail600x600 {
    ns328:CmsImage0 foaf:thumbnail ns312:Thumbnail600x600 .

    ns312:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns328:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:91 .
}

ns313:CmsImage0 {
    ns313:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:107 .
}

ns8:Thumbnail800x800 {
    ns8:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns323:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:organization2 .

    ns323:CmsImage0 foaf:thumbnail ns8:Thumbnail800x800 .
}

ns6:25 {
    ns6:25 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 5" ;
        skos:prefLabel "CmsConcept 25" .
}

ns194:Thumbnail200x200 {
    ns194:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns324:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:56 .

    ns324:CmsImage0 foaf:thumbnail ns194:Thumbnail200x200 .
}

ns6:76 {
    ns6:76 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 6" ;
        skos:prefLabel "CmsConcept 76" .
}

ns78:Thumbnail200x200 {
    ns78:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns309:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:35 .

    ns309:CmsImage1 foaf:thumbnail ns78:Thumbnail200x200 .
}

ns314:Thumbnail800x800 {
    ns314:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns34:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:84 .

    ns34:CmsImage1 foaf:thumbnail ns314:Thumbnail800x800 .
}

ns67:Thumbnail800x800 {
    ns67:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns306:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:18 .

    ns306:CmsImage1 foaf:thumbnail ns67:Thumbnail800x800 .
}

_:Neab8e708e6dc40d19587ca92a4fcaf9f {
    _:Neab8e708e6dc40d19587ca92a4fcaf9f a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:Nc1906ed2d7b94ece87be8401a8935b4b ;
        dcterms:title "CmsCollection1CmsWork7 closing" ;
        cms:work ns13:work7 .

    _:Nc1906ed2d7b94ece87be8401a8935b4b a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns27:Thumbnail600x600 {
    ns27:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns382:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:10 .

    ns382:CmsImage0 foaf:thumbnail ns27:Thumbnail600x600 .
}

ns129:Thumbnail400x400 {
    ns129:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns103:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:49 .

    ns103:CmsImage0 foaf:thumbnail ns129:Thumbnail400x400 .
}

ns48:CmsImage0 {
    ns48:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:98 .
}

ns315:Thumbnail800x800 {
    ns329:CmsImage1 foaf:thumbnail ns315:Thumbnail800x800 .

    ns315:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns329:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:27 .
}

ns63:freestandingwork9Creation {
    ns63:freestandingwork9Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns63:organization1,
            ns63:organization2 ;
        dcterms:date _:Ne1432004210142a78747017adfff374e ;
        dcterms:spatial ns63:freestandingwork9Location ;
        dcterms:title "FreestandingWork9 creation" ;
        cms:work ns63:freestandingwork9 .

    _:Ne1432004210142a78747017adfff374e a cms:DateTimeDescription ;
        time:day "---23"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns73:Thumbnail200x200 {
    ns73:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns13:work6 .

    ns365:CmsImage1 foaf:thumbnail ns73:Thumbnail200x200 .
}

ns27:Thumbnail800x800 {
    ns27:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns382:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:10 .

    ns382:CmsImage0 foaf:thumbnail ns27:Thumbnail800x800 .
}

ns6:95 {
    ns6:95 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 5" ;
        skos:prefLabel "CmsConcept 95" .
}

ns316:CmsImage1 {
    ns316:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:30 .
}

ns91:Thumbnail600x600 {
    ns91:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns256:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:65 .

    ns256:CmsImage0 foaf:thumbnail ns91:Thumbnail600x600 .
}

ns174:Thumbnail400x400 {
    ns174:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns301:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:54 .

    ns301:CmsImage0 foaf:thumbnail ns174:Thumbnail400x400 .
}

ns294:Thumbnail200x200 {
    ns294:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns190:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:0 .

    ns190:CmsImage1 foaf:thumbnail ns294:Thumbnail200x200 .
}

ns139:Thumbnail400x400 {
    ns139:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns361:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:55 .

    ns361:CmsImage0 foaf:thumbnail ns139:Thumbnail400x400 .
}

ns126:Thumbnail600x600 {
    ns126:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns149:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:74 .

    ns149:CmsImage0 foaf:thumbnail ns126:Thumbnail600x600 .
}

ns260:Thumbnail400x400 {
    ns260:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns327:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:45 .

    ns327:CmsImage0 foaf:thumbnail ns260:Thumbnail400x400 .
}

ns297:Thumbnail200x200 {
    ns297:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns109:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:85 .

    ns109:CmsImage0 foaf:thumbnail ns297:Thumbnail200x200 .
}

ns307:Thumbnail600x600 {
    ns307:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns167:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:32 .

    ns167:CmsImage0 foaf:thumbnail ns307:Thumbnail600x600 .
}

ns220:CmsImage1 {
    ns220:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:63 .
}

ns63:freestandingwork8Opening {
    ns63:freestandingwork8Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-24"^^xsd:date ;
        dcterms:description _:N170a65d3df104a499fc1466eabf59008 ;
        dcterms:spatial _:N5613a253c24849579f6acfef060b7014 ;
        dcterms:title "FreestandingWork8 opening" ;
        cms:work ns63:freestandingwork8 .

    _:N5613a253c24849579f6acfef060b7014 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N170a65d3df104a499fc1466eabf59008 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns183:Thumbnail400x400 {
    ns183:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns374:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:9 .

    ns374:CmsImage0 foaf:thumbnail ns183:Thumbnail400x400 .
}

ns261:Thumbnail800x800 {
    ns261:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns263:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:25 .

    ns263:CmsImage1 foaf:thumbnail ns261:Thumbnail800x800 .
}

ns228:Thumbnail400x400 {
    ns228:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns223:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns13:work4 .

    ns223:CmsImage0 foaf:thumbnail ns228:Thumbnail400x400 .
}

ns113:Thumbnail800x800 {
    ns113:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns204:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:38 .

    ns204:CmsImage1 foaf:thumbnail ns113:Thumbnail800x800 .
}

ns180:Thumbnail600x600 {
    ns180:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns327:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:45 .

    ns327:CmsImage1 foaf:thumbnail ns180:Thumbnail600x600 .
}

ns196:Thumbnail800x800 {
    ns196:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns375:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:3 .

    ns375:CmsImage1 foaf:thumbnail ns196:Thumbnail800x800 .
}

ns317:CmsImage0 {
    ns317:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:89 .
}

ns200:Thumbnail600x600 {
    ns200:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns316:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:30 .

    ns316:CmsImage0 foaf:thumbnail ns200:Thumbnail600x600 .
}

ns6:10 {
    ns6:10 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 0" ;
        skos:prefLabel "CmsConcept 10" .
}

ns318:Thumbnail800x800 {
    ns347:CmsImage0 foaf:thumbnail ns318:Thumbnail800x800 .

    ns318:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns347:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns39:work2 .
}

ns227:Thumbnail400x400 {
    ns227:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns301:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:54 .

    ns301:CmsImage1 foaf:thumbnail ns227:Thumbnail400x400 .
}

ns278:Thumbnail400x400 {
    ns278:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:108 .

    ns392:CmsImage1 foaf:thumbnail ns278:Thumbnail400x400 .
}

ns319:Thumbnail800x800 {
    ns398:CmsImage0 foaf:thumbnail ns319:Thumbnail800x800 .

    ns319:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns398:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:92 .
}

ns84:CmsImage1 {
    ns84:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:58 .
}

ns164:Thumbnail600x600 {
    ns164:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns28:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:14 .

    ns28:CmsImage1 foaf:thumbnail ns164:Thumbnail600x600 .
}

ns261:Thumbnail400x400 {
    ns261:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns263:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:25 .

    ns263:CmsImage1 foaf:thumbnail ns261:Thumbnail400x400 .
}

ns192:Thumbnail800x800 {
    ns192:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns33:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:69 .

    ns33:CmsImage0 foaf:thumbnail ns192:Thumbnail800x800 .
}

ns19:Thumbnail800x800 {
    ns19:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns285:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:90 .

    ns285:CmsImage0 foaf:thumbnail ns19:Thumbnail800x800 .
}

ns311:Thumbnail800x800 {
    ns311:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns343:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:48 .

    ns343:CmsImage1 foaf:thumbnail ns311:Thumbnail800x800 .
}

ns253:Thumbnail400x400 {
    ns253:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns368:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:80 .

    ns368:CmsImage1 foaf:thumbnail ns253:Thumbnail400x400 .
}

ns320:Thumbnail200x200 {
    ns320:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns5:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:51 .

    ns5:CmsImage0 foaf:thumbnail ns320:Thumbnail200x200 .
}

ns60:Thumbnail800x800 {
    ns60:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns326:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:15 .

    ns326:CmsImage0 foaf:thumbnail ns60:Thumbnail800x800 .
}

ns321:Thumbnail800x800 {
    ns5:CmsImage1 foaf:thumbnail ns321:Thumbnail800x800 .

    ns321:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns5:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:51 .
}

ns322:Thumbnail200x200 {
    ns326:CmsImage1 foaf:thumbnail ns322:Thumbnail200x200 .

    ns322:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns326:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:15 .
}

ns173:Thumbnail200x200 {
    ns173:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns353:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:50 .

    ns353:CmsImage0 foaf:thumbnail ns173:Thumbnail200x200 .
}

ns323:CmsImage0 {
    ns323:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:organization2 .
}

ns324:CmsImage0 {
    ns324:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:56 .
}

ns325:Thumbnail800x800 {
    ns400:CmsImage0 foaf:thumbnail ns325:Thumbnail800x800 .

    ns325:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns400:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:88 .
}

ns6:66 {
    ns6:66 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 6" ;
        skos:prefLabel "CmsConcept 66" .
}

ns326:CmsImage1 {
    ns326:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:15 .
}

ns302:Thumbnail600x600 {
    ns302:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns7:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:6 .

    ns7:CmsImage1 foaf:thumbnail ns302:Thumbnail600x600 .
}

ns6:51 {
    ns6:51 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 1" ;
        skos:prefLabel "CmsConcept 51" .
}

ns86:Thumbnail200x200 {
    ns86:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns292:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:77 .

    ns292:CmsImage0 foaf:thumbnail ns86:Thumbnail200x200 .
}

ns315:Thumbnail200x200 {
    ns315:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns329:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:27 .

    ns329:CmsImage1 foaf:thumbnail ns315:Thumbnail200x200 .
}

ns131:Thumbnail400x400 {
    ns131:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns195:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:82 .

    ns195:CmsImage1 foaf:thumbnail ns131:Thumbnail400x400 .
}

ns6:91 {
    ns6:91 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 1" ;
        skos:prefLabel "CmsConcept 91" .
}

ns285:CmsImage1 {
    ns285:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:90 .
}

ns327:CmsImage1 {
    ns327:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:45 .
}

ns51:Thumbnail800x800 {
    ns51:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns32:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:22 .

    ns32:CmsImage1 foaf:thumbnail ns51:Thumbnail800x800 .
}

ns328:CmsImage1 {
    ns328:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:91 .
}

ns237:Thumbnail400x400 {
    ns237:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns381:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:42 .

    ns381:CmsImage0 foaf:thumbnail ns237:Thumbnail400x400 .
}

ns253:Thumbnail600x600 {
    ns253:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns368:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:80 .

    ns368:CmsImage1 foaf:thumbnail ns253:Thumbnail600x600 .
}

ns272:Thumbnail600x600 {
    ns272:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns83:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:109 .

    ns83:CmsImage0 foaf:thumbnail ns272:Thumbnail600x600 .
}

ns329:CmsImage1 {
    ns329:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:27 .
}

ns330:CmsImage0 {
    ns330:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:33 .
}

ns331:Thumbnail600x600 {
    ns403:CmsImage0 foaf:thumbnail ns331:Thumbnail600x600 .

    ns331:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:99 .
}

ns186:Thumbnail400x400 {
    ns186:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns368:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:80 .

    ns368:CmsImage0 foaf:thumbnail ns186:Thumbnail400x400 .
}

ns55:Thumbnail800x800 {
    ns55:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns384:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:freestandingwork8 .

    ns384:CmsImage0 foaf:thumbnail ns55:Thumbnail800x800 .
}

ns32:CmsImage0 {
    ns32:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:22 .
}

ns116:Thumbnail400x400 {
    ns116:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:99 .

    ns403:CmsImage1 foaf:thumbnail ns116:Thumbnail400x400 .
}

ns201:Thumbnail400x400 {
    ns201:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 1 rights holder" ;
        dcterms:title "Synthetic data properties image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns155:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns383:property_group .

    ns155:CmsImage1 foaf:thumbnail ns201:Thumbnail400x400 .
}

ns6:62 {
    ns6:62 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 2" ;
        skos:prefLabel "CmsConcept 62" .
}

ns280:Thumbnail800x800 {
    ns280:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns336:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:75 .

    ns336:CmsImage1 foaf:thumbnail ns280:Thumbnail800x800 .
}

ns327:CmsImage0 {
    ns327:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:45 .
}

ns19:Thumbnail400x400 {
    ns19:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns285:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:90 .

    ns285:CmsImage0 foaf:thumbnail ns19:Thumbnail400x400 .
}

ns23:Thumbnail800x800 {
    ns23:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns149:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:74 .

    ns149:CmsImage1 foaf:thumbnail ns23:Thumbnail800x800 .
}

ns310:Thumbnail800x800 {
    ns310:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns220:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:63 .

    ns220:CmsImage0 foaf:thumbnail ns310:Thumbnail800x800 .
}

ns205:Thumbnail600x600 {
    ns205:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns244:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:79 .

    ns244:CmsImage0 foaf:thumbnail ns205:Thumbnail600x600 .
}

ns6:94 {
    ns6:94 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 4" ;
        skos:prefLabel "CmsConcept 94" .
}

ns6:37 {
    ns6:37 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 7" ;
        skos:prefLabel "CmsConcept 37" .
}

ns166:Thumbnail800x800 {
    ns166:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns223:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns13:work4 .

    ns223:CmsImage1 foaf:thumbnail ns166:Thumbnail800x800 .
}

ns332:Thumbnail200x200 {
    ns332:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns144:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:40 .

    ns144:CmsImage1 foaf:thumbnail ns332:Thumbnail200x200 .
}

ns104:Thumbnail800x800 {
    ns104:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns47:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:freestandingwork10 .

    ns47:CmsImage0 foaf:thumbnail ns104:Thumbnail800x800 .
}

ns333:Thumbnail800x800 {
    ns398:CmsImage1 foaf:thumbnail ns333:Thumbnail800x800 .

    ns333:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns398:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:92 .
}

ns334:Thumbnail400x400 {
    ns379:CmsImage0 foaf:thumbnail ns334:Thumbnail400x400 .

    ns334:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns379:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:1 .
}

ns63:organization0 {
    ns63:organization0 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 0" ;
        foaf:page ns63:organization0page .
}

ns6:68 {
    ns6:68 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 8" ;
        skos:prefLabel "CmsConcept 68" .
}

ns52:Thumbnail600x600 {
    ns52:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns262:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:105 .

    ns262:CmsImage0 foaf:thumbnail ns52:Thumbnail600x600 .
}

ns120:Thumbnail800x800 {
    ns120:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns257:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:person2 .

    ns257:CmsImage0 foaf:thumbnail ns120:Thumbnail800x800 .
}

ns319:Thumbnail400x400 {
    ns319:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns398:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:92 .

    ns398:CmsImage0 foaf:thumbnail ns319:Thumbnail400x400 .
}

ns335:Thumbnail600x600 {
    ns375:CmsImage0 foaf:thumbnail ns335:Thumbnail600x600 .

    ns335:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns375:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:3 .
}

ns109:CmsImage0 {
    ns109:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:85 .
}

ns66:Thumbnail600x600 {
    ns66:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns353:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:50 .

    ns353:CmsImage1 foaf:thumbnail ns66:Thumbnail600x600 .
}

ns283:Thumbnail400x400 {
    ns283:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns354:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:37 .

    ns354:CmsImage1 foaf:thumbnail ns283:Thumbnail400x400 .
}

ns22:Thumbnail600x600 {
    ns22:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns89:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:12 .

    ns89:CmsImage1 foaf:thumbnail ns22:Thumbnail600x600 .
}

ns130:Thumbnail200x200 {
    ns130:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns154:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:43 .

    ns154:CmsImage1 foaf:thumbnail ns130:Thumbnail200x200 .
}

ns169:Thumbnail400x400 {
    ns169:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns389:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:17 .

    ns389:CmsImage1 foaf:thumbnail ns169:Thumbnail400x400 .
}

ns336:CmsImage0 {
    ns336:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:75 .
}

ns42:Thumbnail200x200 {
    ns42:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:102 .

    ns399:CmsImage1 foaf:thumbnail ns42:Thumbnail200x200 .
}

ns337:Thumbnail200x200 {
    ns195:CmsImage0 foaf:thumbnail ns337:Thumbnail200x200 .

    ns337:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns195:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:82 .
}

ns187:Thumbnail200x200 {
    ns187:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns329:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:27 .

    ns329:CmsImage0 foaf:thumbnail ns187:Thumbnail200x200 .
}

ns338:Thumbnail800x800 {
    ns179:CmsImage1 foaf:thumbnail ns338:Thumbnail800x800 .

    ns338:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns179:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:13 .
}

ns339:Thumbnail400x400 {
    ns339:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns244:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:79 .

    ns244:CmsImage1 foaf:thumbnail ns339:Thumbnail400x400 .
}

ns46:Thumbnail400x400 {
    ns46:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns378:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:94 .

    ns378:CmsImage0 foaf:thumbnail ns46:Thumbnail400x400 .
}

ns298:Thumbnail400x400 {
    ns298:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns394:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:81 .

    ns394:CmsImage0 foaf:thumbnail ns298:Thumbnail400x400 .
}

ns139:Thumbnail200x200 {
    ns139:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns361:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:55 .

    ns361:CmsImage0 foaf:thumbnail ns139:Thumbnail200x200 .
}

ns74:Thumbnail800x800 {
    ns74:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns348:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:97 .

    ns348:CmsImage1 foaf:thumbnail ns74:Thumbnail800x800 .
}

ns6:87 {
    ns6:87 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 7" ;
        skos:prefLabel "CmsConcept 87" .
}

ns293:Thumbnail400x400 {
    ns293:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns305:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:60 .

    ns305:CmsImage0 foaf:thumbnail ns293:Thumbnail400x400 .
}

ns177:Thumbnail600x600 {
    ns177:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns108:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:71 .

    ns108:CmsImage1 foaf:thumbnail ns177:Thumbnail600x600 .
}

ns328:CmsImage0 {
    ns328:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:91 .
}

ns312:Thumbnail400x400 {
    ns312:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns328:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:91 .

    ns328:CmsImage0 foaf:thumbnail ns312:Thumbnail400x400 .
}

ns319:Thumbnail600x600 {
    ns319:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns398:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:92 .

    ns398:CmsImage0 foaf:thumbnail ns319:Thumbnail600x600 .
}

ns340:Thumbnail200x200 {
    ns7:CmsImage0 foaf:thumbnail ns340:Thumbnail200x200 .

    ns340:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns7:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:6 .
}

ns212:Thumbnail800x800 {
    ns212:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns371:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:freestandingwork9 .

    ns371:CmsImage1 foaf:thumbnail ns212:Thumbnail800x800 .
}

ns41:Thumbnail200x200 {
    ns41:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns366:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:70 .

    ns366:CmsImage0 foaf:thumbnail ns41:Thumbnail200x200 .
}

ns145:Thumbnail200x200 {
    ns145:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns406:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:96 .

    ns406:CmsImage0 foaf:thumbnail ns145:Thumbnail200x200 .
}

ns189:Thumbnail400x400 {
    ns189:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns9:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:26 .

    ns9:CmsImage1 foaf:thumbnail ns189:Thumbnail400x400 .
}

ns11:Thumbnail200x200 {
    ns11:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns295:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:28 .

    ns295:CmsImage0 foaf:thumbnail ns11:Thumbnail200x200 .
}

ns298:Thumbnail600x600 {
    ns298:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns394:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:81 .

    ns394:CmsImage0 foaf:thumbnail ns298:Thumbnail600x600 .
}

ns341:Thumbnail800x800 {
    ns341:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns188:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:organization0 .

    ns188:CmsImage0 foaf:thumbnail ns341:Thumbnail800x800 .
}

ns145:Thumbnail600x600 {
    ns145:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns406:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:96 .

    ns406:CmsImage0 foaf:thumbnail ns145:Thumbnail600x600 .
}

ns342:CmsImage1 {
    ns342:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:24 .
}

ns303:Thumbnail400x400 {
    ns303:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns144:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:40 .

    ns144:CmsImage0 foaf:thumbnail ns303:Thumbnail400x400 .
}

ns343:CmsImage0 {
    ns343:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:48 .
}

ns280:Thumbnail200x200 {
    ns280:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns336:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:75 .

    ns336:CmsImage1 foaf:thumbnail ns280:Thumbnail200x200 .
}

ns344:Thumbnail600x600 {
    ns344:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns197:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns39:work0 .

    ns197:CmsImage0 foaf:thumbnail ns344:Thumbnail600x600 .
}

ns207:Thumbnail600x600 {
    ns207:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns44:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:36 .

    ns44:CmsImage1 foaf:thumbnail ns207:Thumbnail600x600 .
}

ns345:CmsImage0 {
    ns345:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:person0 .
}

ns203:CmsImage0 {
    ns203:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:organization4 .
}

ns320:Thumbnail400x400 {
    ns320:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns5:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:51 .

    ns5:CmsImage0 foaf:thumbnail ns320:Thumbnail400x400 .
}

ns346:CmsImage0 {
    ns346:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:organization1 .
}

ns106:Thumbnail400x400 {
    ns106:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns220:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:63 .

    ns220:CmsImage1 foaf:thumbnail ns106:Thumbnail400x400 .
}

_:Nc4b1ece50d1340acb0305e32733707af {
    _:Nc4b1ece50d1340acb0305e32733707af a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N2df3481b40f84c039f27a227b89ad5fa ;
        dcterms:spatial _:N79cf145d57b94d6db20902eee4807f4d ;
        dcterms:title "CmsCollection0CmsWork2 closing" ;
        cms:work ns39:work2 .

    _:N2df3481b40f84c039f27a227b89ad5fa a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:N79cf145d57b94d6db20902eee4807f4d a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns347:CmsImage1 {
    ns347:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns39:work2 .
}

ns174:Thumbnail200x200 {
    ns174:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns301:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:54 .

    ns301:CmsImage0 foaf:thumbnail ns174:Thumbnail200x200 .
}

ns348:CmsImage1 {
    ns348:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:97 .
}

ns349:Thumbnail800x800 {
    ns396:CmsImage0 foaf:thumbnail ns349:Thumbnail800x800 .

    ns349:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:organization3 .
}

ns192:Thumbnail400x400 {
    ns192:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns33:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:69 .

    ns33:CmsImage0 foaf:thumbnail ns192:Thumbnail400x400 .
}

ns350:Thumbnail200x200 {
    ns392:CmsImage0 foaf:thumbnail ns350:Thumbnail200x200 .

    ns350:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:108 .
}

ns64:Thumbnail400x400 {
    ns64:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns142:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:52 .

    ns142:CmsImage1 foaf:thumbnail ns64:Thumbnail400x400 .
}

ns65:Thumbnail600x600 {
    ns65:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns271:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:44 .

    ns271:CmsImage1 foaf:thumbnail ns65:Thumbnail600x600 .
}

ns6:75 {
    ns6:75 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 5" ;
        skos:prefLabel "CmsConcept 75" .
}

ns39:work3 {
    ns39:work3 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork3 alternative title 0",
            "CmsCollection0CmsWork3 alternative title 1" ;
        dcterms:contributor _:N6968aa4f7472471e88abbaeb2cf58c93,
            _:N821019aaa8564cb2a6627a45adfcaecf ;
        dcterms:creator ns63:person0,
            ns63:person1 ;
        dcterms:extent ns6:13,
            ns6:14 ;
        dcterms:identifier "CmsCollection0CmsWork3Id0",
            "CmsCollection0CmsWork3Id1" ;
        dcterms:language ns6:23,
            ns6:24 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns6:43,
            ns6:44 ;
        dcterms:provenance "CmsCollection0CmsWork3 provenance 0",
            "CmsCollection0CmsWork3 provenance 1" ;
        dcterms:publisher ns6:53,
            ns6:54 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 rights holder" ;
        dcterms:source ns6:63,
            ns6:64 ;
        dcterms:spatial ns39:work3Location ;
        dcterms:subject ns6:83,
            ns6:84 ;
        dcterms:title "CmsCollection0CmsWork3" ;
        dcterms:type ns6:103,
            ns6:104 ;
        vra:culturalContext ns6:3,
            ns6:4 ;
        vra:material ns6:33,
            ns6:34 ;
        vra:technique ns6:93,
            ns6:94 ;
        cms:collection ns63:collection0 .

    _:N6968aa4f7472471e88abbaeb2cf58c93 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork3 contributor 1" .

    _:N821019aaa8564cb2a6627a45adfcaecf a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork3 contributor 0" .
}

ns351:Thumbnail800x800 {
    ns351:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns9:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:26 .

    ns9:CmsImage0 foaf:thumbnail ns351:Thumbnail800x800 .
}

ns39:work0Creation {
    ns39:work0Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns63:organization2,
            ns63:organization3 ;
        dcterms:date _:N0d69dac14c94482e9b783612d48fe6d5 ;
        dcterms:description _:N3be1979b3c2b4b7fad9db56006aa7fef ;
        dcterms:spatial ns39:work0Location ;
        dcterms:title "CmsCollection0CmsWork0 creation" ;
        cms:work ns39:work0 .

    _:N0d69dac14c94482e9b783612d48fe6d5 a cms:DateTimeDescription ;
        time:day "---01"^^xsd:gDay ;
        time:month "--01"^^xsd:gMonth ;
        time:year "2022"^^xsd:gYear .

    _:N3be1979b3c2b4b7fad9db56006aa7fef a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns321:Thumbnail200x200 {
    ns321:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns5:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:51 .

    ns5:CmsImage1 foaf:thumbnail ns321:Thumbnail200x200 .
}

ns315:Thumbnail400x400 {
    ns315:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns329:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:27 .

    ns329:CmsImage1 foaf:thumbnail ns315:Thumbnail400x400 .
}

ns311:Thumbnail600x600 {
    ns311:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns343:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:48 .

    ns343:CmsImage1 foaf:thumbnail ns311:Thumbnail600x600 .
}

ns133:Thumbnail400x400 {
    ns133:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns83:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:109 .

    ns83:CmsImage1 foaf:thumbnail ns133:Thumbnail400x400 .
}

ns137:Thumbnail800x800 {
    ns137:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns32:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:22 .

    ns32:CmsImage0 foaf:thumbnail ns137:Thumbnail800x800 .
}

ns129:Thumbnail800x800 {
    ns129:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns103:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:49 .

    ns103:CmsImage0 foaf:thumbnail ns129:Thumbnail800x800 .
}

ns57:Thumbnail200x200 {
    ns57:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns306:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:18 .

    ns306:CmsImage0 foaf:thumbnail ns57:Thumbnail200x200 .
}

ns317:CmsImage1 {
    ns317:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:89 .
}

ns338:Thumbnail600x600 {
    ns338:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns179:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:13 .

    ns179:CmsImage1 foaf:thumbnail ns338:Thumbnail600x600 .
}

ns332:Thumbnail400x400 {
    ns332:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns144:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:40 .

    ns144:CmsImage1 foaf:thumbnail ns332:Thumbnail400x400 .
}

ns294:Thumbnail600x600 {
    ns294:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns190:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:0 .

    ns190:CmsImage1 foaf:thumbnail ns294:Thumbnail600x600 .
}

ns75:Thumbnail800x800 {
    ns75:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns391:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:62 .

    ns391:CmsImage0 foaf:thumbnail ns75:Thumbnail800x800 .
}

ns235:Thumbnail800x800 {
    ns235:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns347:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns39:work2 .

    ns347:CmsImage1 foaf:thumbnail ns235:Thumbnail800x800 .
}

ns236:Thumbnail200x200 {
    ns236:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns198:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:34 .

    ns198:CmsImage0 foaf:thumbnail ns236:Thumbnail200x200 .
}

ns6:29 {
    ns6:29 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 9" ;
        skos:prefLabel "CmsConcept 29" .
}

ns72:Thumbnail200x200 {
    ns72:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns313:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:107 .

    ns313:CmsImage0 foaf:thumbnail ns72:Thumbnail200x200 .
}

ns352:CmsImage1 {
    ns352:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:100 .
}

ns184:Thumbnail600x600 {
    ns184:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns397:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:39 .

    ns397:CmsImage0 foaf:thumbnail ns184:Thumbnail600x600 .
}

ns106:Thumbnail800x800 {
    ns106:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns220:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:63 .

    ns220:CmsImage1 foaf:thumbnail ns106:Thumbnail800x800 .
}

ns17:Thumbnail600x600 {
    ns17:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:64 .

    ns385:CmsImage1 foaf:thumbnail ns17:Thumbnail600x600 .
}

ns6:106 {
    ns6:106 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 6" ;
        skos:prefLabel "CmsConcept 106" .
}

ns239:Thumbnail400x400 {
    ns239:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns124:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:76 .

    ns124:CmsImage0 foaf:thumbnail ns239:Thumbnail400x400 .
}

dcterms:language {
    dcterms:language a cms:Property ;
        rdfs:label "Language" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns383:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> .
}

ns79:Thumbnail400x400 {
    ns79:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns122:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:61 .

    ns122:CmsImage0 foaf:thumbnail ns79:Thumbnail400x400 .
}

ns115:Thumbnail600x600 {
    ns115:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns317:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:89 .

    ns317:CmsImage0 foaf:thumbnail ns115:Thumbnail600x600 .
}

ns353:CmsImage1 {
    ns353:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:50 .
}

ns354:CmsImage0 {
    ns354:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:37 .
}

ns20:Thumbnail200x200 {
    ns20:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns76:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:103 .

    ns76:CmsImage0 foaf:thumbnail ns20:Thumbnail200x200 .
}

ns182:Thumbnail800x800 {
    ns182:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns405:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:20 .

    ns405:CmsImage0 foaf:thumbnail ns182:Thumbnail800x800 .
}

ns199:Thumbnail400x400 {
    ns199:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns364:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns13:work5 .

    ns364:CmsImage0 foaf:thumbnail ns199:Thumbnail400x400 .
}

vra:material {
    vra:material a cms:Property ;
        rdfs:label "Material" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns383:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> .
}

ns266:Thumbnail600x600 {
    ns266:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns362:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns39:work1 .

    ns362:CmsImage0 foaf:thumbnail ns266:Thumbnail600x600 .
}

ns215:Thumbnail400x400 {
    ns215:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns276:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:5 .

    ns276:CmsImage0 foaf:thumbnail ns215:Thumbnail400x400 .
}

ns101:Thumbnail200x200 {
    ns101:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns305:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:60 .

    ns305:CmsImage1 foaf:thumbnail ns101:Thumbnail200x200 .
}

ns226:Thumbnail600x600 {
    ns226:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns362:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns39:work1 .

    ns362:CmsImage1 foaf:thumbnail ns226:Thumbnail600x600 .
}

ns348:CmsImage0 {
    ns348:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:97 .
}

ns331:Thumbnail200x200 {
    ns331:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:99 .

    ns403:CmsImage0 foaf:thumbnail ns331:Thumbnail200x200 .
}

ns4:Thumbnail200x200 {
    ns4:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns354:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:37 .

    ns354:CmsImage0 foaf:thumbnail ns4:Thumbnail200x200 .
}

ns278:Thumbnail600x600 {
    ns278:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:108 .

    ns392:CmsImage1 foaf:thumbnail ns278:Thumbnail600x600 .
}

ns281:Thumbnail800x800 {
    ns281:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns252:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:2 .

    ns252:CmsImage0 foaf:thumbnail ns281:Thumbnail800x800 .
}

ns355:Thumbnail600x600 {
    ns355:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns76:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:103 .

    ns76:CmsImage1 foaf:thumbnail ns355:Thumbnail600x600 .
}

ns125:Thumbnail800x800 {
    ns125:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns407:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:83 .

    ns407:CmsImage1 foaf:thumbnail ns125:Thumbnail800x800 .
}

ns174:Thumbnail600x600 {
    ns174:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns301:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:54 .

    ns301:CmsImage0 foaf:thumbnail ns174:Thumbnail600x600 .
}

ns277:Thumbnail600x600 {
    ns277:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns163:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:104 .

    ns163:CmsImage0 foaf:thumbnail ns277:Thumbnail600x600 .
}

ns334:Thumbnail200x200 {
    ns334:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns379:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:1 .

    ns379:CmsImage0 foaf:thumbnail ns334:Thumbnail200x200 .
}

ns356:Thumbnail600x600 {
    ns356:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns317:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:89 .

    ns317:CmsImage1 foaf:thumbnail ns356:Thumbnail600x600 .
}

ns275:Thumbnail600x600 {
    ns275:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns287:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:46 .

    ns287:CmsImage0 foaf:thumbnail ns275:Thumbnail600x600 .
}

ns67:Thumbnail400x400 {
    ns67:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns306:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:18 .

    ns306:CmsImage1 foaf:thumbnail ns67:Thumbnail400x400 .
}

ns97:Thumbnail400x400 {
    ns97:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns407:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:83 .

    ns407:CmsImage0 foaf:thumbnail ns97:Thumbnail400x400 .
}

ns6:81 {
    ns6:81 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 1" ;
        skos:prefLabel "CmsConcept 81" .
}

ns39:work3Creation {
    ns39:work3Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns63:person0,
            ns63:person1 ;
        dcterms:date _:Nff11fb1baacb49b1b6a9e7cdca87f1d8 ;
        dcterms:spatial ns39:work3Location ;
        dcterms:title "CmsCollection0CmsWork3 creation" ;
        cms:work ns39:work3 .

    _:Nff11fb1baacb49b1b6a9e7cdca87f1d8 a cms:DateTimeDescription ;
        time:day "---29"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns214:Thumbnail800x800 {
    ns214:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns81:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:73 .

    ns81:CmsImage0 foaf:thumbnail ns214:Thumbnail800x800 .
}

ns15:Thumbnail800x800 {
    ns15:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns33:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:69 .

    ns33:CmsImage1 foaf:thumbnail ns15:Thumbnail800x800 .
}

ns357:Thumbnail200x200 {
    ns240:CmsImage1 foaf:thumbnail ns357:Thumbnail200x200 .

    ns357:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns240:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:53 .
}

ns63:collection1 {
    ns63:collection1 a cms:Collection ;
        dcterms:title "CmsCollection1" .
}

ns315:Thumbnail600x600 {
    ns315:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns329:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:27 .

    ns329:CmsImage1 foaf:thumbnail ns315:Thumbnail600x600 .
}

ns341:Thumbnail400x400 {
    ns341:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns188:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:organization0 .

    ns188:CmsImage0 foaf:thumbnail ns341:Thumbnail400x400 .
}

ns116:Thumbnail600x600 {
    ns116:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:99 .

    ns403:CmsImage1 foaf:thumbnail ns116:Thumbnail600x600 .
}

ns192:Thumbnail200x200 {
    ns192:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns33:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:69 .

    ns33:CmsImage0 foaf:thumbnail ns192:Thumbnail200x200 .
}

ns140:Thumbnail600x600 {
    ns140:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns330:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:33 .

    ns330:CmsImage0 foaf:thumbnail ns140:Thumbnail600x600 .
}

ns358:Thumbnail200x200 {
    ns257:CmsImage1 foaf:thumbnail ns358:Thumbnail200x200 .

    ns358:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns257:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:person2 .
}

ns96:Thumbnail800x800 {
    ns96:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns382:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:10 .

    ns382:CmsImage1 foaf:thumbnail ns96:Thumbnail800x800 .
}

ns338:Thumbnail400x400 {
    ns338:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns179:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:13 .

    ns179:CmsImage1 foaf:thumbnail ns338:Thumbnail400x400 .
}

ns286:Thumbnail600x600 {
    ns286:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns10:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:16 .

    ns10:CmsImage1 foaf:thumbnail ns286:Thumbnail600x600 .
}

ns39:work2Location {
    ns39:work2Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns322:Thumbnail800x800 {
    ns322:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns326:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:15 .

    ns326:CmsImage1 foaf:thumbnail ns322:Thumbnail800x800 .
}

ns320:Thumbnail800x800 {
    ns320:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns5:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:51 .

    ns5:CmsImage0 foaf:thumbnail ns320:Thumbnail800x800 .
}

ns28:CmsImage1 {
    ns28:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:14 .
}

ns339:Thumbnail600x600 {
    ns339:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns244:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:79 .

    ns244:CmsImage1 foaf:thumbnail ns339:Thumbnail600x600 .
}

ns286:Thumbnail400x400 {
    ns286:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns10:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:16 .

    ns10:CmsImage1 foaf:thumbnail ns286:Thumbnail400x400 .
}

dcterms:description {
    dcterms:description a cms:Property ;
        rdfs:label "Description" ;
        cms:propertyFilterable false ;
        cms:propertyGroup ns383:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Description> .
}

ns77:Thumbnail600x600 {
    ns77:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns48:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:98 .

    ns48:CmsImage1 foaf:thumbnail ns77:Thumbnail600x600 .
}

ns278:Thumbnail200x200 {
    ns278:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:108 .

    ns392:CmsImage1 foaf:thumbnail ns278:Thumbnail200x200 .
}

ns58:Thumbnail600x600 {
    ns58:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns404:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:23 .

    ns404:CmsImage0 foaf:thumbnail ns58:Thumbnail600x600 .
}

ns262:CmsImage1 {
    ns262:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:105 .
}

ns225:Thumbnail400x400 {
    ns225:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns44:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:36 .

    ns44:CmsImage0 foaf:thumbnail ns225:Thumbnail400x400 .
}

ns185:Thumbnail400x400 {
    ns185:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns143:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:87 .

    ns143:CmsImage0 foaf:thumbnail ns185:Thumbnail400x400 .
}

ns359:Thumbnail200x200 {
    ns359:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns10:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:16 .

    ns10:CmsImage0 foaf:thumbnail ns359:Thumbnail200x200 .
}

ns157:Thumbnail400x400 {
    ns157:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns290:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:47 .

    ns290:CmsImage0 foaf:thumbnail ns157:Thumbnail400x400 .
}

ns6:53 {
    ns6:53 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 3" ;
        skos:prefLabel "CmsConcept 53" .
}

ns157:Thumbnail600x600 {
    ns157:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns290:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:47 .

    ns290:CmsImage0 foaf:thumbnail ns157:Thumbnail600x600 .
}

ns247:Thumbnail400x400 {
    ns247:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns156:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:59 .

    ns156:CmsImage1 foaf:thumbnail ns247:Thumbnail400x400 .
}

ns111:Thumbnail400x400 {
    ns111:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns390:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:19 .

    ns390:CmsImage1 foaf:thumbnail ns111:Thumbnail400x400 .
}

ns286:Thumbnail800x800 {
    ns286:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns10:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:16 .

    ns10:CmsImage1 foaf:thumbnail ns286:Thumbnail800x800 .
}

ns39:work1Location {
    ns39:work1Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns175:Thumbnail400x400 {
    ns175:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns290:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:47 .

    ns290:CmsImage1 foaf:thumbnail ns175:Thumbnail400x400 .
}

ns360:Thumbnail600x600 {
    ns370:CmsImage0 foaf:thumbnail ns360:Thumbnail600x600 .

    ns360:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns370:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:8 .
}

ns44:CmsImage1 {
    ns44:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:36 .
}

ns273:CmsImage0 {
    ns273:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:57 .
}

ns206:Thumbnail400x400 {
    ns206:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns204:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:38 .

    ns204:CmsImage0 foaf:thumbnail ns206:Thumbnail400x400 .
}

ns65:Thumbnail800x800 {
    ns65:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns271:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:44 .

    ns271:CmsImage1 foaf:thumbnail ns65:Thumbnail800x800 .
}

ns13:work7Location {
    ns13:work7Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns111:Thumbnail200x200 {
    ns111:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns390:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:19 .

    ns390:CmsImage1 foaf:thumbnail ns111:Thumbnail200x200 .
}

ns242:Thumbnail400x400 {
    ns242:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns400:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:88 .

    ns400:CmsImage1 foaf:thumbnail ns242:Thumbnail400x400 .
}

ns129:Thumbnail600x600 {
    ns129:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns103:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:49 .

    ns103:CmsImage0 foaf:thumbnail ns129:Thumbnail600x600 .
}

ns243:CmsImage0 {
    ns243:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:29 .
}

ns352:CmsImage0 {
    ns352:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:100 .
}

ns361:CmsImage1 {
    ns361:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:55 .
}

ns318:Thumbnail200x200 {
    ns318:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns347:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns39:work2 .

    ns347:CmsImage0 foaf:thumbnail ns318:Thumbnail200x200 .
}

ns63:freestandingwork10Opening {
    ns63:freestandingwork10Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-22"^^xsd:date ;
        dcterms:description _:N850c59155a7d44e08f6b3a2544b52837 ;
        dcterms:spatial _:N70132db55b0941c8bc7e2790c472a188 ;
        dcterms:title "FreestandingWork10 opening" ;
        cms:work ns63:freestandingwork10 .

    _:N70132db55b0941c8bc7e2790c472a188 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N850c59155a7d44e08f6b3a2544b52837 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns190:CmsImage1 {
    ns190:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:0 .
}

ns299:Thumbnail800x800 {
    ns299:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns150:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns13:work7 .

    ns150:CmsImage1 foaf:thumbnail ns299:Thumbnail800x800 .
}

ns172:Thumbnail200x200 {
    ns172:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns273:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:57 .

    ns273:CmsImage0 foaf:thumbnail ns172:Thumbnail200x200 .
}

ns208:Thumbnail400x400 {
    ns208:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns109:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:85 .

    ns109:CmsImage1 foaf:thumbnail ns208:Thumbnail400x400 .
}

ns125:Thumbnail200x200 {
    ns125:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns407:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:83 .

    ns407:CmsImage1 foaf:thumbnail ns125:Thumbnail200x200 .
}

ns240:CmsImage1 {
    ns240:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:53 .
}

ns6:58 {
    ns6:58 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 8" ;
        skos:prefLabel "CmsConcept 58" .
}

ns1:Thumbnail200x200 {
    ns1:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns336:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:75 .

    ns336:CmsImage0 foaf:thumbnail ns1:Thumbnail200x200 .
}

ns229:Thumbnail600x600 {
    ns229:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns118:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:93 .

    ns118:CmsImage0 foaf:thumbnail ns229:Thumbnail600x600 .
}

ns127:Thumbnail600x600 {
    ns127:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns388:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:106 .

    ns388:CmsImage0 foaf:thumbnail ns127:Thumbnail600x600 .
}

ns349:Thumbnail600x600 {
    ns349:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:organization3 .

    ns396:CmsImage0 foaf:thumbnail ns349:Thumbnail600x600 .
}

ns12:Thumbnail200x200 {
    ns12:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns342:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:24 .

    ns342:CmsImage0 foaf:thumbnail ns12:Thumbnail200x200 .
}

ns6:39 {
    ns6:39 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 9" ;
        skos:prefLabel "CmsConcept 39" .
}

ns332:Thumbnail600x600 {
    ns332:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns144:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:40 .

    ns144:CmsImage1 foaf:thumbnail ns332:Thumbnail600x600 .
}

ns61:Thumbnail800x800 {
    ns61:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns274:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:101 .

    ns274:CmsImage0 foaf:thumbnail ns61:Thumbnail800x800 .
}

ns289:Thumbnail600x600 {
    ns289:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns191:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:4 .

    ns191:CmsImage0 foaf:thumbnail ns289:Thumbnail600x600 .
}

ns6:50 {
    ns6:50 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 0" ;
        skos:prefLabel "CmsConcept 50" .
}

ns92:Thumbnail800x800 {
    ns92:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns276:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:5 .

    ns276:CmsImage1 foaf:thumbnail ns92:Thumbnail800x800 .
}

ns185:Thumbnail600x600 {
    ns185:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns143:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:87 .

    ns143:CmsImage0 foaf:thumbnail ns185:Thumbnail600x600 .
}

ns6:43 {
    ns6:43 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 3" ;
        skos:prefLabel "CmsConcept 43" .
}

ns209:Thumbnail800x800 {
    ns209:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns377:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:68 .

    ns377:CmsImage1 foaf:thumbnail ns209:Thumbnail800x800 .
}

ns362:CmsImage0 {
    ns362:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns39:work1 .
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

ns216:Thumbnail400x400 {
    ns216:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns88:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:72 .

    ns88:CmsImage0 foaf:thumbnail ns216:Thumbnail400x400 .
}

ns75:Thumbnail600x600 {
    ns75:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns391:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:62 .

    ns391:CmsImage0 foaf:thumbnail ns75:Thumbnail600x600 .
}

ns120:Thumbnail200x200 {
    ns120:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns257:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:person2 .

    ns257:CmsImage0 foaf:thumbnail ns120:Thumbnail200x200 .
}

ns202:Thumbnail600x600 {
    ns202:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns233:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns39:work3 .

    ns233:CmsImage0 foaf:thumbnail ns202:Thumbnail600x600 .
}

ns363:Thumbnail200x200 {
    ns371:CmsImage0 foaf:thumbnail ns363:Thumbnail200x200 .

    ns363:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns371:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:freestandingwork9 .
}

ns364:CmsImage0 {
    ns364:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns13:work5 .
}

ns250:Thumbnail200x200 {
    ns250:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns203:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:organization4 .

    ns203:CmsImage1 foaf:thumbnail ns250:Thumbnail200x200 .
}

ns232:Thumbnail600x600 {
    ns232:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns262:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:105 .

    ns262:CmsImage1 foaf:thumbnail ns232:Thumbnail600x600 .
}

dcterms:extent {
    dcterms:extent a cms:Property ;
        rdfs:label "Extent" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns383:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> .
}

ns93:Thumbnail800x800 {
    ns93:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns292:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:77 .

    ns292:CmsImage1 foaf:thumbnail ns93:Thumbnail800x800 .
}

ns148:Thumbnail400x400 {
    ns148:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns345:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:person0 .

    ns345:CmsImage0 foaf:thumbnail ns148:Thumbnail400x400 .
}

ns365:CmsImage0 {
    ns365:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns13:work6 .
}

_:Nb4412d765bc44adaa01ed534b41e347a {
    _:Nb4412d765bc44adaa01ed534b41e347a a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:Nf4058768232f4d38b028734823361621 ;
        dcterms:title "FreestandingWork11 closing" ;
        cms:work ns63:freestandingwork11 .

    _:Nf4058768232f4d38b028734823361621 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns357:Thumbnail600x600 {
    ns357:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns240:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:53 .

    ns240:CmsImage1 foaf:thumbnail ns357:Thumbnail600x600 .
}

ns360:Thumbnail400x400 {
    ns360:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns370:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:8 .

    ns370:CmsImage0 foaf:thumbnail ns360:Thumbnail400x400 .
}

_:N5671ab579cff48078fe488d9ec0a97ab {
    _:N5671ab579cff48078fe488d9ec0a97ab a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N3be1979b3c2b4b7fad9db56006aa7fef ;
        dcterms:spatial _:N1bb6f4e5736342cb90c3939277495d85 ;
        dcterms:title "CmsCollection0CmsWork0 closing" ;
        cms:work ns39:work0 .

    _:N1bb6f4e5736342cb90c3939277495d85 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N3be1979b3c2b4b7fad9db56006aa7fef a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns279:Thumbnail800x800 {
    ns279:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns233:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns39:work3 .

    ns233:CmsImage1 foaf:thumbnail ns279:Thumbnail800x800 .
}

ns366:CmsImage0 {
    ns366:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:70 .
}

ns171:Thumbnail400x400 {
    ns171:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns295:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:28 .

    ns295:CmsImage1 foaf:thumbnail ns171:Thumbnail400x400 .
}

ns312:Thumbnail800x800 {
    ns312:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns328:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:91 .

    ns328:CmsImage0 foaf:thumbnail ns312:Thumbnail800x800 .
}

ns132:Thumbnail400x400 {
    ns132:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns251:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:person1 .

    ns251:CmsImage1 foaf:thumbnail ns132:Thumbnail400x400 .
}

ns6:55 {
    ns6:55 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 5" ;
        skos:prefLabel "CmsConcept 55" .
}

ns2:Thumbnail400x400 {
    ns2:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns397:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:39 .

    ns397:CmsImage1 foaf:thumbnail ns2:Thumbnail400x400 .
}

ns71:Thumbnail400x400 {
    ns71:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns394:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:81 .

    ns394:CmsImage1 foaf:thumbnail ns71:Thumbnail400x400 .
}

ns26:Thumbnail800x800 {
    ns26:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns288:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:freestandingwork11 .

    ns288:CmsImage1 foaf:thumbnail ns26:Thumbnail800x800 .
}

ns235:Thumbnail200x200 {
    ns235:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns347:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns39:work2 .

    ns347:CmsImage1 foaf:thumbnail ns235:Thumbnail200x200 .
}

ns244:CmsImage0 {
    ns244:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:79 .
}

ns68:Thumbnail400x400 {
    ns68:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns198:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:34 .

    ns198:CmsImage1 foaf:thumbnail ns68:Thumbnail400x400 .
}

ns6:59 {
    ns6:59 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 9" ;
        skos:prefLabel "CmsConcept 59" .
}

ns364:CmsImage1 {
    ns364:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns13:work5 .
}

ns350:Thumbnail800x800 {
    ns350:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:108 .

    ns392:CmsImage0 foaf:thumbnail ns350:Thumbnail800x800 .
}

ns102:CmsImage1 {
    ns102:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:66 .
}

ns277:Thumbnail200x200 {
    ns277:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns163:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:104 .

    ns163:CmsImage0 foaf:thumbnail ns277:Thumbnail200x200 .
}

ns367:Thumbnail400x400 {
    ns313:CmsImage1 foaf:thumbnail ns367:Thumbnail400x400 .

    ns367:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns313:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:107 .
}

ns6:79 {
    ns6:79 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 9" ;
        skos:prefLabel "CmsConcept 79" .
}

ns63:freestandingwork9 {
    ns63:freestandingwork9 a cms:Work ;
        dcterms:alternative "FreestandingWork9 alternative title 0",
            "FreestandingWork9 alternative title 1" ;
        dcterms:contributor _:N3f44d0ccadf145e7ae52c060f8166117,
            _:Nc8b874900eb046cd9fb6c54b61958a75 ;
        dcterms:creator ns63:organization1,
            ns63:organization2 ;
        dcterms:extent ns6:10,
            ns6:19 ;
        dcterms:identifier "FreestandingWork9Id0",
            "FreestandingWork9Id1" ;
        dcterms:language ns6:20,
            ns6:29 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns6:40,
            ns6:49 ;
        dcterms:provenance "FreestandingWork9 provenance 0",
            "FreestandingWork9 provenance 1" ;
        dcterms:publisher ns6:50,
            ns6:59 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 rights holder" ;
        dcterms:source ns6:60,
            ns6:69 ;
        dcterms:spatial ns63:freestandingwork9Location ;
        dcterms:subject ns6:80,
            ns6:89 ;
        dcterms:title "FreestandingWork9" ;
        dcterms:type ns6:100,
            ns6:109 ;
        vra:culturalContext ns6:0,
            ns6:9 ;
        vra:material ns6:30,
            ns6:39 ;
        vra:technique ns6:90,
            ns6:99 .

    _:N3f44d0ccadf145e7ae52c060f8166117 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork9 contributor 1" .

    _:Nc8b874900eb046cd9fb6c54b61958a75 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork9 contributor 0" .
}

ns334:Thumbnail600x600 {
    ns334:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns379:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:1 .

    ns379:CmsImage0 foaf:thumbnail ns334:Thumbnail600x600 .
}

ns183:Thumbnail600x600 {
    ns183:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns374:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:9 .

    ns374:CmsImage0 foaf:thumbnail ns183:Thumbnail600x600 .
}

ns249:Thumbnail800x800 {
    ns249:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns108:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:71 .

    ns108:CmsImage0 foaf:thumbnail ns249:Thumbnail800x800 .
}

ns91:Thumbnail800x800 {
    ns91:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns256:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:65 .

    ns256:CmsImage0 foaf:thumbnail ns91:Thumbnail800x800 .
}

ns255:Thumbnail200x200 {
    ns255:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns81:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:73 .

    ns81:CmsImage1 foaf:thumbnail ns255:Thumbnail200x200 .
}

ns1:Thumbnail800x800 {
    ns1:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns336:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:75 .

    ns336:CmsImage0 foaf:thumbnail ns1:Thumbnail800x800 .
}

ns280:Thumbnail400x400 {
    ns280:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns336:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:75 .

    ns336:CmsImage1 foaf:thumbnail ns280:Thumbnail400x400 .
}

ns272:Thumbnail200x200 {
    ns272:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns83:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:109 .

    ns83:CmsImage0 foaf:thumbnail ns272:Thumbnail200x200 .
}

ns223:CmsImage1 {
    ns223:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns13:work4 .
}

ns255:Thumbnail600x600 {
    ns255:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns81:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:73 .

    ns81:CmsImage1 foaf:thumbnail ns255:Thumbnail600x600 .
}

ns186:Thumbnail600x600 {
    ns186:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns368:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:80 .

    ns368:CmsImage0 foaf:thumbnail ns186:Thumbnail600x600 .
}

ns368:CmsImage1 {
    ns368:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:80 .
}

ns6:28 {
    ns6:28 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 8" ;
        skos:prefLabel "CmsConcept 28" .
}

ns330:CmsImage1 {
    ns330:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:33 .
}

ns125:Thumbnail400x400 {
    ns125:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns407:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:83 .

    ns407:CmsImage1 foaf:thumbnail ns125:Thumbnail400x400 .
}

ns293:Thumbnail800x800 {
    ns293:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns305:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:60 .

    ns305:CmsImage0 foaf:thumbnail ns293:Thumbnail800x800 .
}

ns208:Thumbnail600x600 {
    ns208:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns109:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:85 .

    ns109:CmsImage1 foaf:thumbnail ns208:Thumbnail600x600 .
}

ns180:Thumbnail400x400 {
    ns180:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns327:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:45 .

    ns327:CmsImage1 foaf:thumbnail ns180:Thumbnail400x400 .
}

ns96:Thumbnail600x600 {
    ns96:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns382:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:10 .

    ns382:CmsImage1 foaf:thumbnail ns96:Thumbnail600x600 .
}

ns303:Thumbnail600x600 {
    ns303:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns144:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:40 .

    ns144:CmsImage0 foaf:thumbnail ns303:Thumbnail600x600 .
}

ns369:Thumbnail400x400 {
    ns369:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns288:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:freestandingwork11 .

    ns288:CmsImage0 foaf:thumbnail ns369:Thumbnail400x400 .
}

ns24:Thumbnail400x400 {
    ns24:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns252:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:2 .

    ns252:CmsImage1 foaf:thumbnail ns24:Thumbnail400x400 .
}

ns370:CmsImage1 {
    ns370:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:8 .
}

ns177:Thumbnail200x200 {
    ns177:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns108:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:71 .

    ns108:CmsImage1 foaf:thumbnail ns177:Thumbnail200x200 .
}

ns371:CmsImage0 {
    ns371:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:freestandingwork9 .
}

ns63:freestandingwork11Creation {
    ns63:freestandingwork11Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns63:organization3,
            ns63:organization4 ;
        dcterms:date _:Na211627879d44f889c366f2596c39c87 ;
        dcterms:spatial ns63:freestandingwork11Location ;
        dcterms:title "FreestandingWork11 creation" ;
        cms:work ns63:freestandingwork11 .

    _:Na211627879d44f889c366f2596c39c87 a cms:DateTimeDescription ;
        time:day "---21"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns153:Thumbnail400x400 {
    ns153:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns379:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:1 .

    ns379:CmsImage1 foaf:thumbnail ns153:Thumbnail400x400 .
}

ns332:Thumbnail800x800 {
    ns332:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns144:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:40 .

    ns144:CmsImage1 foaf:thumbnail ns332:Thumbnail800x800 .
}

ns200:Thumbnail400x400 {
    ns200:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns316:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:30 .

    ns316:CmsImage0 foaf:thumbnail ns200:Thumbnail400x400 .
}

ns311:Thumbnail200x200 {
    ns311:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns343:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:48 .

    ns343:CmsImage1 foaf:thumbnail ns311:Thumbnail200x200 .
}

ns73:Thumbnail600x600 {
    ns73:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns13:work6 .

    ns365:CmsImage1 foaf:thumbnail ns73:Thumbnail600x600 .
}

ns173:Thumbnail400x400 {
    ns173:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns353:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:50 .

    ns353:CmsImage0 foaf:thumbnail ns173:Thumbnail400x400 .
}

ns57:Thumbnail600x600 {
    ns57:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns306:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:18 .

    ns306:CmsImage0 foaf:thumbnail ns57:Thumbnail600x600 .
}

ns372:Thumbnail400x400 {
    ns372:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns135:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:31 .

    ns135:CmsImage0 foaf:thumbnail ns372:Thumbnail400x400 .
}

dcterms:spatial {
    dcterms:spatial a cms:Property ;
        rdfs:label "Spatial" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns383:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> .
}

ns92:Thumbnail200x200 {
    ns92:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns276:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:5 .

    ns276:CmsImage1 foaf:thumbnail ns92:Thumbnail200x200 .
}

ns6:40 {
    ns6:40 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 0" ;
        skos:prefLabel "CmsConcept 40" .
}

ns373:Thumbnail400x400 {
    ns373:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns13:work6 .

    ns365:CmsImage0 foaf:thumbnail ns373:Thumbnail400x400 .
}

ns224:Thumbnail600x600 {
    ns224:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns150:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns13:work7 .

    ns150:CmsImage0 foaf:thumbnail ns224:Thumbnail600x600 .
}

ns374:CmsImage1 {
    ns374:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:9 .
}

ns325:Thumbnail600x600 {
    ns325:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns400:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:88 .

    ns400:CmsImage0 foaf:thumbnail ns325:Thumbnail600x600 .
}

ns242:Thumbnail800x800 {
    ns242:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns400:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:88 .

    ns400:CmsImage1 foaf:thumbnail ns242:Thumbnail800x800 .
}

ns45:Thumbnail200x200 {
    ns45:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns251:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:person1 .

    ns251:CmsImage0 foaf:thumbnail ns45:Thumbnail200x200 .
}

ns6:27 {
    ns6:27 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 7" ;
        skos:prefLabel "CmsConcept 27" .
}

ns375:CmsImage0 {
    ns375:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:3 .
}

ns6:104 {
    ns6:104 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 4" ;
        skos:prefLabel "CmsConcept 104" .
}

ns373:Thumbnail200x200 {
    ns373:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns13:work6 .

    ns365:CmsImage0 foaf:thumbnail ns373:Thumbnail200x200 .
}

ns297:Thumbnail600x600 {
    ns297:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns109:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:85 .

    ns109:CmsImage0 foaf:thumbnail ns297:Thumbnail600x600 .
}

ns51:Thumbnail600x600 {
    ns51:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns32:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:22 .

    ns32:CmsImage1 foaf:thumbnail ns51:Thumbnail600x600 .
}

ns29:Thumbnail200x200 {
    ns29:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns256:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:65 .

    ns256:CmsImage1 foaf:thumbnail ns29:Thumbnail200x200 .
}

ns38:Thumbnail800x800 {
    ns38:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns243:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:29 .

    ns243:CmsImage1 foaf:thumbnail ns38:Thumbnail800x800 .
}

ns72:Thumbnail800x800 {
    ns72:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns313:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:107 .

    ns313:CmsImage0 foaf:thumbnail ns72:Thumbnail800x800 .
}

ns247:Thumbnail200x200 {
    ns247:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns156:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:59 .

    ns156:CmsImage1 foaf:thumbnail ns247:Thumbnail200x200 .
}

ns6:74 {
    ns6:74 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 4" ;
        skos:prefLabel "CmsConcept 74" .
}

ns230:Thumbnail200x200 {
    ns230:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:64 .

    ns385:CmsImage0 foaf:thumbnail ns230:Thumbnail200x200 .
}

ns371:CmsImage1 {
    ns371:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:freestandingwork9 .
}

ns13:work6Creation {
    ns13:work6Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns63:person3,
            ns63:person4 ;
        dcterms:date _:N4cca703fb39d4e04a84de2ed508e805f ;
        dcterms:description _:N4f5aeb2746ee4cb087c7300fff0a6d4d ;
        dcterms:spatial ns13:work6Location ;
        dcterms:title "CmsCollection1CmsWork6 creation" ;
        cms:work ns13:work6 .

    _:N4cca703fb39d4e04a84de2ed508e805f a cms:DateTimeDescription ;
        time:day "---26"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:N4f5aeb2746ee4cb087c7300fff0a6d4d a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns347:CmsImage0 {
    ns347:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns39:work2 .
}

ns376:CmsImage0 {
    ns376:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:11 .
}

ns249:Thumbnail200x200 {
    ns249:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns108:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:71 .

    ns108:CmsImage0 foaf:thumbnail ns249:Thumbnail200x200 .
}

ns269:Thumbnail800x800 {
    ns269:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns388:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:106 .

    ns388:CmsImage1 foaf:thumbnail ns269:Thumbnail800x800 .
}

ns344:Thumbnail800x800 {
    ns344:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns197:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns39:work0 .

    ns197:CmsImage0 foaf:thumbnail ns344:Thumbnail800x800 .
}

ns335:Thumbnail400x400 {
    ns335:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns375:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:3 .

    ns375:CmsImage0 foaf:thumbnail ns335:Thumbnail400x400 .
}

ns63:person2 {
    ns63:person2 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            wd:Q7251 ;
        contact:sortName "2, CmsPerson" ;
        foaf:familyName "2" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 2" ;
        foaf:page ns63:person2page .
}

ns94:Thumbnail200x200 {
    ns94:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns136:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:41 .

    ns136:CmsImage0 foaf:thumbnail ns94:Thumbnail200x200 .
}

ns29:Thumbnail800x800 {
    ns29:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns256:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:65 .

    ns256:CmsImage1 foaf:thumbnail ns29:Thumbnail800x800 .
}

ns151:Thumbnail400x400 {
    ns151:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns124:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:76 .

    ns124:CmsImage1 foaf:thumbnail ns151:Thumbnail400x400 .
}

ns254:Thumbnail400x400 {
    ns254:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns381:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:42 .

    ns381:CmsImage1 foaf:thumbnail ns254:Thumbnail400x400 .
}

ns157:Thumbnail200x200 {
    ns157:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns290:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:47 .

    ns290:CmsImage0 foaf:thumbnail ns157:Thumbnail200x200 .
}

ns377:CmsImage0 {
    ns377:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:68 .
}

ns71:Thumbnail200x200 {
    ns71:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns394:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:81 .

    ns394:CmsImage1 foaf:thumbnail ns71:Thumbnail200x200 .
}

ns6:72 {
    ns6:72 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 2" ;
        skos:prefLabel "CmsConcept 72" .
}

ns238:CmsImage0 {
    ns238:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:67 .
}

ns78:Thumbnail800x800 {
    ns78:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns309:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:35 .

    ns309:CmsImage1 foaf:thumbnail ns78:Thumbnail800x800 .
}

ns224:Thumbnail200x200 {
    ns224:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns150:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns13:work7 .

    ns150:CmsImage0 foaf:thumbnail ns224:Thumbnail200x200 .
}

ns83:CmsImage0 {
    ns83:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:109 .
}

ns63:freestandingwork11Opening {
    ns63:freestandingwork11Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-21"^^xsd:date ;
        dcterms:spatial _:Nf4058768232f4d38b028734823361621 ;
        dcterms:title "FreestandingWork11 opening" ;
        cms:work ns63:freestandingwork11 .

    _:Nf4058768232f4d38b028734823361621 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns63:organization4 {
    ns63:organization4 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 4" ;
        foaf:page ns63:organization4page .
}

ns6:33 {
    ns6:33 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 3" ;
        skos:prefLabel "CmsConcept 33" .
}

ns245:Thumbnail800x800 {
    ns245:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns89:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:12 .

    ns89:CmsImage0 foaf:thumbnail ns245:Thumbnail800x800 .
}

ns121:Thumbnail200x200 {
    ns121:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns263:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:25 .

    ns263:CmsImage0 foaf:thumbnail ns121:Thumbnail200x200 .
}

ns43:Thumbnail800x800 {
    ns43:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns376:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:11 .

    ns376:CmsImage0 foaf:thumbnail ns43:Thumbnail800x800 .
}

ns6:93 {
    ns6:93 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 3" ;
        skos:prefLabel "CmsConcept 93" .
}

ns56:Thumbnail600x600 {
    ns56:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns238:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:67 .

    ns238:CmsImage1 foaf:thumbnail ns56:Thumbnail600x600 .
}

ns338:Thumbnail200x200 {
    ns338:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns179:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:13 .

    ns179:CmsImage1 foaf:thumbnail ns338:Thumbnail200x200 .
}

ns246:Thumbnail400x400 {
    ns246:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns324:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:56 .

    ns324:CmsImage1 foaf:thumbnail ns246:Thumbnail400x400 .
}

ns142:CmsImage1 {
    ns142:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:52 .
}

ns171:Thumbnail600x600 {
    ns171:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns295:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:28 .

    ns295:CmsImage1 foaf:thumbnail ns171:Thumbnail600x600 .
}

ns378:CmsImage0 {
    ns378:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:94 .
}

ns8:Thumbnail400x400 {
    ns8:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns323:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:organization2 .

    ns323:CmsImage0 foaf:thumbnail ns8:Thumbnail400x400 .
}

ns134:Thumbnail600x600 {
    ns134:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns170:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:7 .

    ns170:CmsImage1 foaf:thumbnail ns134:Thumbnail600x600 .
}

ns6:49 {
    ns6:49 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 9" ;
        skos:prefLabel "CmsConcept 49" .
}

ns21:Thumbnail400x400 {
    ns21:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns85:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:95 .

    ns85:CmsImage0 foaf:thumbnail ns21:Thumbnail400x400 .
}

ns373:Thumbnail800x800 {
    ns373:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns13:work6 .

    ns365:CmsImage0 foaf:thumbnail ns373:Thumbnail800x800 .
}

ns168:Thumbnail600x600 {
    ns168:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns203:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:organization4 .

    ns203:CmsImage0 foaf:thumbnail ns168:Thumbnail600x600 .
}

ns379:CmsImage1 {
    ns379:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:1 .
}

ns147:Thumbnail800x800 {
    ns147:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns102:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:66 .

    ns102:CmsImage1 foaf:thumbnail ns147:Thumbnail800x800 .
}

ns169:Thumbnail600x600 {
    ns169:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns389:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:17 .

    ns389:CmsImage1 foaf:thumbnail ns169:Thumbnail600x600 .
}

ns63:person1 {
    ns63:person1 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            wd:Q7251 ;
        contact:sortName "1, CmsPerson" ;
        foaf:familyName "1" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 1" .
}

ns380:Thumbnail400x400 {
    ns197:CmsImage1 foaf:thumbnail ns380:Thumbnail400x400 .

    ns380:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns197:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns39:work0 .
}

ns38:Thumbnail400x400 {
    ns38:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns243:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:29 .

    ns243:CmsImage1 foaf:thumbnail ns38:Thumbnail400x400 .
}

ns267:Thumbnail200x200 {
    ns267:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns154:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:43 .

    ns154:CmsImage0 foaf:thumbnail ns267:Thumbnail200x200 .
}

ns221:Thumbnail600x600 {
    ns221:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns389:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:17 .

    ns389:CmsImage0 foaf:thumbnail ns221:Thumbnail600x600 .
}

ns185:Thumbnail800x800 {
    ns185:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns143:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:87 .

    ns143:CmsImage0 foaf:thumbnail ns185:Thumbnail800x800 .
}

ns123:Thumbnail400x400 {
    ns123:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns405:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:20 .

    ns405:CmsImage1 foaf:thumbnail ns123:Thumbnail400x400 .
}

ns381:CmsImage1 {
    ns381:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:42 .
}

ns146:Thumbnail400x400 {
    ns146:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns170:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:7 .

    ns170:CmsImage0 foaf:thumbnail ns146:Thumbnail400x400 .
}

ns196:Thumbnail600x600 {
    ns196:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns375:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:3 .

    ns375:CmsImage1 foaf:thumbnail ns196:Thumbnail600x600 .
}

ns198:CmsImage0 {
    ns198:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:34 .
}

ns152:Thumbnail600x600 {
    ns152:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns191:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:4 .

    ns191:CmsImage1 foaf:thumbnail ns152:Thumbnail600x600 .
}

ns334:Thumbnail800x800 {
    ns334:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns379:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:1 .

    ns379:CmsImage0 foaf:thumbnail ns334:Thumbnail800x800 .
}

ns382:CmsImage0 {
    ns382:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:10 .
}

ns6:65 {
    ns6:65 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 5" ;
        skos:prefLabel "CmsConcept 65" .
}

_:Naf8094bef673416787b0ec141643e5bf {
    _:Naf8094bef673416787b0ec141643e5bf a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:Ne0e0e4c13f214a8f8abe33a07d396a27 ;
        dcterms:title "FreestandingWork9 closing" ;
        cms:work ns63:freestandingwork9 .

    _:Ne0e0e4c13f214a8f8abe33a07d396a27 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns188:CmsImage1 {
    ns188:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:organization0 .
}

ns258:Thumbnail200x200 {
    ns258:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns404:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:23 .

    ns404:CmsImage1 foaf:thumbnail ns258:Thumbnail200x200 .
}

ns168:Thumbnail800x800 {
    ns168:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns203:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:organization4 .

    ns203:CmsImage0 foaf:thumbnail ns168:Thumbnail800x800 .
}

ns331:Thumbnail800x800 {
    ns331:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:99 .

    ns403:CmsImage0 foaf:thumbnail ns331:Thumbnail800x800 .
}

ns375:CmsImage1 {
    ns375:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:3 .
}

ns166:Thumbnail600x600 {
    ns166:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns223:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns13:work4 .

    ns223:CmsImage1 foaf:thumbnail ns166:Thumbnail600x600 .
}

ns215:Thumbnail200x200 {
    ns215:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns276:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:5 .

    ns276:CmsImage0 foaf:thumbnail ns215:Thumbnail200x200 .
}

ns308:Thumbnail600x600 {
    ns308:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns103:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:49 .

    ns103:CmsImage1 foaf:thumbnail ns308:Thumbnail600x600 .
}

ns324:CmsImage1 {
    ns324:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:56 .
}

ns54:Thumbnail400x400 {
    ns54:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns238:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:67 .

    ns238:CmsImage0 foaf:thumbnail ns54:Thumbnail400x400 .
}

ns339:Thumbnail200x200 {
    ns339:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns244:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:79 .

    ns244:CmsImage1 foaf:thumbnail ns339:Thumbnail200x200 .
}

ns97:Thumbnail200x200 {
    ns97:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns407:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:83 .

    ns407:CmsImage0 foaf:thumbnail ns97:Thumbnail200x200 .
}

ns126:Thumbnail400x400 {
    ns126:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns149:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:74 .

    ns149:CmsImage0 foaf:thumbnail ns126:Thumbnail400x400 .
}

ns3:Thumbnail400x400 {
    ns3:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns190:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:0 .

    ns190:CmsImage0 foaf:thumbnail ns3:Thumbnail400x400 .
}

ns73:Thumbnail400x400 {
    ns73:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns13:work6 .

    ns365:CmsImage1 foaf:thumbnail ns73:Thumbnail400x400 .
}

ns49:Thumbnail400x400 {
    ns49:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns287:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:46 .

    ns287:CmsImage1 foaf:thumbnail ns49:Thumbnail400x400 .
}

ns63:person0 {
    ns63:person0 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            wd:Q7251 ;
        contact:sortName "0, CmsPerson" ;
        foaf:familyName "0" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 0" ;
        foaf:page ns63:person0page .
}

ns235:Thumbnail400x400 {
    ns235:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns347:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns39:work2 .

    ns347:CmsImage1 foaf:thumbnail ns235:Thumbnail400x400 .
}

ns383:property_group {
    ns383:property_group a cms:PropertyGroup ;
        rdfs:label "Synthetic data properties" .
}

ns368:CmsImage0 {
    ns368:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:80 .
}

ns384:CmsImage1 {
    ns384:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:freestandingwork8 .
}

ns239:Thumbnail600x600 {
    ns239:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns124:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:76 .

    ns124:CmsImage0 foaf:thumbnail ns239:Thumbnail600x600 .
}

ns385:CmsImage1 {
    ns385:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:64 .
}

ns226:Thumbnail400x400 {
    ns226:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns362:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns39:work1 .

    ns362:CmsImage1 foaf:thumbnail ns226:Thumbnail400x400 .
}

ns134:Thumbnail200x200 {
    ns134:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns170:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:7 .

    ns170:CmsImage1 foaf:thumbnail ns134:Thumbnail200x200 .
}

ns386:Thumbnail200x200 {
    ns386:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns243:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:29 .

    ns243:CmsImage0 foaf:thumbnail ns386:Thumbnail200x200 .
}

ns193:Thumbnail600x600 {
    ns193:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns213:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:86 .

    ns213:CmsImage0 foaf:thumbnail ns193:Thumbnail600x600 .
}

ns380:Thumbnail600x600 {
    ns380:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns197:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns39:work0 .

    ns197:CmsImage1 foaf:thumbnail ns380:Thumbnail600x600 .
}

ns63:collection0 {
    ns63:collection0 a cms:Collection ;
        dcterms:description _:Nf7e3b61e803c44949fdbed375d914b5d ;
        dcterms:title "CmsCollection0" .

    _:Nf7e3b61e803c44949fdbed375d914b5d a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns261:Thumbnail200x200 {
    ns261:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns263:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:25 .

    ns263:CmsImage1 foaf:thumbnail ns261:Thumbnail200x200 .
}

ns6:85 {
    ns6:85 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 5" ;
        skos:prefLabel "CmsConcept 85" .
}

ns387:Thumbnail400x400 {
    ns387:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns28:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:14 .

    ns28:CmsImage0 foaf:thumbnail ns387:Thumbnail400x400 .
}

ns255:Thumbnail400x400 {
    ns255:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns81:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:73 .

    ns81:CmsImage1 foaf:thumbnail ns255:Thumbnail400x400 .
}

ns6:63 {
    ns6:63 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 3" ;
        skos:prefLabel "CmsConcept 63" .
}

ns35:Thumbnail200x200 {
    ns35:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns274:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:101 .

    ns274:CmsImage1 foaf:thumbnail ns35:Thumbnail200x200 .
}

ns138:Thumbnail800x800 {
    ns138:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns213:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:86 .

    ns213:CmsImage1 foaf:thumbnail ns138:Thumbnail800x800 .
}

ns13:work4Location {
    ns13:work4Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns149:CmsImage0 {
    ns149:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:74 .
}

ns11:Thumbnail400x400 {
    ns11:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns295:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:28 .

    ns295:CmsImage0 foaf:thumbnail ns11:Thumbnail400x400 .
}

ns230:Thumbnail600x600 {
    ns230:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:64 .

    ns385:CmsImage0 foaf:thumbnail ns230:Thumbnail600x600 .
}

ns297:Thumbnail800x800 {
    ns297:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns109:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:85 .

    ns109:CmsImage0 foaf:thumbnail ns297:Thumbnail800x800 .
}

ns90:Thumbnail200x200 {
    ns90:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns118:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:93 .

    ns118:CmsImage1 foaf:thumbnail ns90:Thumbnail200x200 .
}

ns6:24 {
    ns6:24 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 4" ;
        skos:prefLabel "CmsConcept 24" .
}

ns296:CmsImage0 {
    ns296:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:78 .
}

ns283:Thumbnail600x600 {
    ns283:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns354:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:37 .

    ns354:CmsImage1 foaf:thumbnail ns283:Thumbnail600x600 .
}

ns321:Thumbnail400x400 {
    ns321:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns5:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:51 .

    ns5:CmsImage1 foaf:thumbnail ns321:Thumbnail400x400 .
}

ns388:CmsImage0 {
    ns388:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:106 .
}

ns389:CmsImage0 {
    ns389:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:17 .
}

ns40:Thumbnail200x200 {
    ns40:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns85:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:95 .

    ns85:CmsImage1 foaf:thumbnail ns40:Thumbnail200x200 .
}

ns390:CmsImage1 {
    ns390:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:19 .
}

ns351:Thumbnail200x200 {
    ns351:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns9:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:26 .

    ns9:CmsImage0 foaf:thumbnail ns351:Thumbnail200x200 .
}

ns6:96 {
    ns6:96 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 6" ;
        skos:prefLabel "CmsConcept 96" .
}

ns172:Thumbnail400x400 {
    ns172:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns273:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:57 .

    ns273:CmsImage0 foaf:thumbnail ns172:Thumbnail400x400 .
}

ns228:Thumbnail600x600 {
    ns228:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns223:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns13:work4 .

    ns223:CmsImage0 foaf:thumbnail ns228:Thumbnail600x600 .
}

ns329:CmsImage0 {
    ns329:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:27 .
}

ns6:2 {
    ns6:2 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 2" ;
        skos:prefLabel "CmsConcept 2" .
}

ns306:CmsImage1 {
    ns306:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:18 .
}

ns130:Thumbnail600x600 {
    ns130:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns154:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:43 .

    ns154:CmsImage1 foaf:thumbnail ns130:Thumbnail600x600 .
}

ns351:Thumbnail600x600 {
    ns351:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns9:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:26 .

    ns9:CmsImage0 foaf:thumbnail ns351:Thumbnail600x600 .
}

ns386:Thumbnail400x400 {
    ns386:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns243:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:29 .

    ns243:CmsImage0 foaf:thumbnail ns386:Thumbnail400x400 .
}

ns230:Thumbnail800x800 {
    ns230:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:64 .

    ns385:CmsImage0 foaf:thumbnail ns230:Thumbnail800x800 .
}

ns25:Thumbnail400x400 {
    ns25:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns143:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:87 .

    ns143:CmsImage1 foaf:thumbnail ns25:Thumbnail400x400 .
}

ns165:Thumbnail800x800 {
    ns165:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns291:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:collection1 .

    ns291:CmsImage0 foaf:thumbnail ns165:Thumbnail800x800 .
}

ns194:Thumbnail600x600 {
    ns194:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns324:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:56 .

    ns324:CmsImage0 foaf:thumbnail ns194:Thumbnail600x600 .
}

ns241:Thumbnail200x200 {
    ns241:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns348:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:97 .

    ns348:CmsImage0 foaf:thumbnail ns241:Thumbnail200x200 .
}

ns391:CmsImage1 {
    ns391:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:62 .
}

ns164:Thumbnail400x400 {
    ns164:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns28:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:14 .

    ns28:CmsImage1 foaf:thumbnail ns164:Thumbnail400x400 .
}

ns392:CmsImage0 {
    ns392:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:108 .
}

ns11:Thumbnail600x600 {
    ns11:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns295:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:28 .

    ns295:CmsImage0 foaf:thumbnail ns11:Thumbnail600x600 .
}

ns132:Thumbnail600x600 {
    ns132:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns251:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:person1 .

    ns251:CmsImage1 foaf:thumbnail ns132:Thumbnail600x600 .
}

ns307:Thumbnail800x800 {
    ns307:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns167:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:32 .

    ns167:CmsImage0 foaf:thumbnail ns307:Thumbnail800x800 .
}

ns287:CmsImage1 {
    ns287:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:46 .
}

ns355:Thumbnail200x200 {
    ns355:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns76:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:103 .

    ns76:CmsImage1 foaf:thumbnail ns355:Thumbnail200x200 .
}

ns6:34 {
    ns6:34 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 4" ;
        skos:prefLabel "CmsConcept 34" .
}

ns138:Thumbnail600x600 {
    ns138:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns213:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:86 .

    ns213:CmsImage1 foaf:thumbnail ns138:Thumbnail600x600 .
}

ns360:Thumbnail200x200 {
    ns360:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns370:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:8 .

    ns370:CmsImage0 foaf:thumbnail ns360:Thumbnail200x200 .
}

ns303:Thumbnail800x800 {
    ns303:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns144:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:40 .

    ns144:CmsImage0 foaf:thumbnail ns303:Thumbnail800x800 .
}

ns199:Thumbnail800x800 {
    ns199:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns364:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns13:work5 .

    ns364:CmsImage0 foaf:thumbnail ns199:Thumbnail800x800 .
}

ns178:Thumbnail600x600 {
    ns178:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns163:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:104 .

    ns163:CmsImage1 foaf:thumbnail ns178:Thumbnail600x600 .
}

ns314:Thumbnail200x200 {
    ns314:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns34:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:84 .

    ns34:CmsImage1 foaf:thumbnail ns314:Thumbnail200x200 .
}

ns300:Thumbnail200x200 {
    ns300:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:102 .

    ns399:CmsImage0 foaf:thumbnail ns300:Thumbnail200x200 .
}

ns181:Thumbnail600x600 {
    ns181:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns370:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:8 .

    ns370:CmsImage1 foaf:thumbnail ns181:Thumbnail600x600 .
}

ns6:88 {
    ns6:88 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 8" ;
        skos:prefLabel "CmsConcept 88" .
}

ns140:Thumbnail800x800 {
    ns140:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns330:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:33 .

    ns330:CmsImage0 foaf:thumbnail ns140:Thumbnail800x800 .
}

ns213:CmsImage1 {
    ns213:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:86 .
}

ns6:84 {
    ns6:84 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 4" ;
        skos:prefLabel "CmsConcept 84" .
}

ns378:CmsImage1 {
    ns378:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:94 .
}

ns217:Thumbnail800x800 {
    ns217:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns395:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:person4 .

    ns395:CmsImage0 foaf:thumbnail ns217:Thumbnail800x800 .
}

ns13:work5 {
    ns13:work5 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork5 alternative title 0",
            "CmsCollection1CmsWork5 alternative title 1" ;
        dcterms:contributor _:N476779c6ae4a42129df0a83451f23991,
            _:Nb0f00c11271846debd1147fb8b21c122 ;
        dcterms:creator ns63:person2,
            ns63:person3 ;
        dcterms:extent ns6:15,
            ns6:16 ;
        dcterms:identifier "CmsCollection1CmsWork5Id0",
            "CmsCollection1CmsWork5Id1" ;
        dcterms:language ns6:25,
            ns6:26 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns6:45,
            ns6:46 ;
        dcterms:provenance "CmsCollection1CmsWork5 provenance 0",
            "CmsCollection1CmsWork5 provenance 1" ;
        dcterms:publisher ns6:55,
            ns6:56 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 rights holder" ;
        dcterms:source ns6:65,
            ns6:66 ;
        dcterms:spatial ns13:work5Location ;
        dcterms:subject ns6:85,
            ns6:86 ;
        dcterms:title "CmsCollection1CmsWork5" ;
        dcterms:type ns6:105,
            ns6:106 ;
        vra:culturalContext ns6:5,
            ns6:6 ;
        vra:material ns6:35,
            ns6:36 ;
        vra:technique ns6:95,
            ns6:96 ;
        cms:collection ns63:collection1 .

    _:N476779c6ae4a42129df0a83451f23991 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork5 contributor 0" .

    _:Nb0f00c11271846debd1147fb8b21c122 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork5 contributor 1" .
}

ns281:Thumbnail600x600 {
    ns281:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns252:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:2 .

    ns252:CmsImage0 foaf:thumbnail ns281:Thumbnail600x600 .
}

ns176:Thumbnail400x400 {
    ns176:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns352:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:100 .

    ns352:CmsImage1 foaf:thumbnail ns176:Thumbnail400x400 .
}

ns6:82 {
    ns6:82 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 2" ;
        skos:prefLabel "CmsConcept 82" .
}

ns158:Thumbnail200x200 {
    ns158:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns117:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:21 .

    ns117:CmsImage1 foaf:thumbnail ns158:Thumbnail200x200 .
}

ns381:CmsImage0 {
    ns381:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:42 .
}

_:N2db4067082b84dc1bb87c1018070bd79 {
    _:N2db4067082b84dc1bb87c1018070bd79 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N29e4f2b513c64cb4b2b7d78de424a805 ;
        dcterms:title "CmsCollection1CmsWork5 closing" ;
        cms:work ns13:work5 .

    _:N29e4f2b513c64cb4b2b7d78de424a805 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns6:3 {
    ns6:3 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 3" ;
        skos:prefLabel "CmsConcept 3" .
}

ns308:Thumbnail400x400 {
    ns308:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns103:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:49 .

    ns103:CmsImage1 foaf:thumbnail ns308:Thumbnail400x400 .
}

ns266:Thumbnail800x800 {
    ns266:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns362:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns39:work1 .

    ns362:CmsImage0 foaf:thumbnail ns266:Thumbnail800x800 .
}

ns182:Thumbnail600x600 {
    ns182:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns405:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:20 .

    ns405:CmsImage0 foaf:thumbnail ns182:Thumbnail600x600 .
}

ns283:Thumbnail800x800 {
    ns283:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns354:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:37 .

    ns354:CmsImage1 foaf:thumbnail ns283:Thumbnail800x800 .
}

dcterms:publisher {
    dcterms:publisher a cms:Property ;
        rdfs:label "Publisher" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns383:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> .
}

ns14:Thumbnail600x600 {
    ns14:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns117:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:21 .

    ns117:CmsImage0 foaf:thumbnail ns14:Thumbnail600x600 .
}

ns63:organization3 {
    ns63:organization3 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 3" ;
        foaf:page ns63:organization3page .
}

ns99:Thumbnail800x800 {
    ns99:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns84:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:58 .

    ns84:CmsImage0 foaf:thumbnail ns99:Thumbnail800x800 .
}

ns217:Thumbnail400x400 {
    ns217:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns395:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:person4 .

    ns395:CmsImage0 foaf:thumbnail ns217:Thumbnail400x400 .
}

ns373:Thumbnail600x600 {
    ns373:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns13:work6 .

    ns365:CmsImage0 foaf:thumbnail ns373:Thumbnail600x600 .
}

_:N55aab5722a6b4cad84528f70fb8ad910 {
    _:N55aab5722a6b4cad84528f70fb8ad910 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N4f5aeb2746ee4cb087c7300fff0a6d4d ;
        dcterms:spatial _:N322b550f08de4d24b9a2f3387a3481ba ;
        dcterms:title "CmsCollection1CmsWork6 closing" ;
        cms:work ns13:work6 .

    _:N322b550f08de4d24b9a2f3387a3481ba a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N4f5aeb2746ee4cb087c7300fff0a6d4d a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns31:Thumbnail600x600 {
    ns31:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns179:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:13 .

    ns179:CmsImage0 foaf:thumbnail ns31:Thumbnail600x600 .
}

ns151:Thumbnail200x200 {
    ns151:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns124:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:76 .

    ns124:CmsImage1 foaf:thumbnail ns151:Thumbnail200x200 .
}

ns132:Thumbnail800x800 {
    ns132:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns251:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:person1 .

    ns251:CmsImage1 foaf:thumbnail ns132:Thumbnail800x800 .
}

ns219:Thumbnail800x800 {
    ns219:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns343:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:48 .

    ns343:CmsImage0 foaf:thumbnail ns219:Thumbnail800x800 .
}

ns363:Thumbnail400x400 {
    ns363:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns371:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:freestandingwork9 .

    ns371:CmsImage0 foaf:thumbnail ns363:Thumbnail400x400 .
}

ns158:Thumbnail400x400 {
    ns158:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns117:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:21 .

    ns117:CmsImage1 foaf:thumbnail ns158:Thumbnail400x400 .
}

ns207:Thumbnail400x400 {
    ns207:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns44:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:36 .

    ns44:CmsImage1 foaf:thumbnail ns207:Thumbnail400x400 .
}

ns225:Thumbnail200x200 {
    ns225:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns44:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:36 .

    ns44:CmsImage0 foaf:thumbnail ns225:Thumbnail200x200 .
}

ns393:Thumbnail800x800 {
    ns291:CmsImage1 foaf:thumbnail ns393:Thumbnail800x800 .

    ns393:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns291:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:collection1 .
}

ns233:CmsImage1 {
    ns233:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns39:work3 .
}

ns234:Thumbnail200x200 {
    ns234:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns188:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:organization0 .

    ns188:CmsImage1 foaf:thumbnail ns234:Thumbnail200x200 .
}

ns394:CmsImage0 {
    ns394:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:81 .
}

ns336:CmsImage1 {
    ns336:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:75 .
}

ns241:Thumbnail400x400 {
    ns241:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns348:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:97 .

    ns348:CmsImage0 foaf:thumbnail ns241:Thumbnail400x400 .
}

ns268:Thumbnail800x800 {
    ns268:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns406:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:96 .

    ns406:CmsImage1 foaf:thumbnail ns268:Thumbnail800x800 .
}

ns214:Thumbnail200x200 {
    ns214:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns81:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:73 .

    ns81:CmsImage0 foaf:thumbnail ns214:Thumbnail200x200 .
}

ns337:Thumbnail600x600 {
    ns337:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns195:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:82 .

    ns195:CmsImage0 foaf:thumbnail ns337:Thumbnail600x600 .
}

ns13:work4 {
    ns13:work4 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork4 alternative title 0",
            "CmsCollection1CmsWork4 alternative title 1" ;
        dcterms:contributor _:N969846f2427b41d5a4f6dcbcf0177793,
            _:Nea01acaf31e84fe7a6a14b357bf70711 ;
        dcterms:creator ns63:person1,
            ns63:person2 ;
        dcterms:description _:N3c72121dc1c743d5aadd7fbb7a09a55d ;
        dcterms:extent ns6:14,
            ns6:15 ;
        dcterms:identifier "CmsCollection1CmsWork4Id0",
            "CmsCollection1CmsWork4Id1" ;
        dcterms:language ns6:24,
            ns6:25 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns6:44,
            ns6:45 ;
        dcterms:provenance "CmsCollection1CmsWork4 provenance 0",
            "CmsCollection1CmsWork4 provenance 1" ;
        dcterms:publisher ns6:54,
            ns6:55 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 rights holder" ;
        dcterms:source ns6:64,
            ns6:65 ;
        dcterms:spatial ns13:work4Location ;
        dcterms:subject ns6:84,
            ns6:85 ;
        dcterms:title "CmsCollection1CmsWork4" ;
        dcterms:type ns6:104,
            ns6:105 ;
        vra:culturalContext ns6:4,
            ns6:5 ;
        vra:material ns6:34,
            ns6:35 ;
        vra:technique ns6:94,
            ns6:95 ;
        cms:collection ns63:collection1 ;
        foaf:page <http://example.com/work/4> .

    _:N969846f2427b41d5a4f6dcbcf0177793 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork4 contributor 1" .

    _:Nea01acaf31e84fe7a6a14b357bf70711 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork4 contributor 0" .

    _:N3c72121dc1c743d5aadd7fbb7a09a55d a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns6:11 {
    ns6:11 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 1" ;
        skos:prefLabel "CmsConcept 11" .
}

ns147:Thumbnail400x400 {
    ns147:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns102:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:66 .

    ns102:CmsImage1 foaf:thumbnail ns147:Thumbnail400x400 .
}

ns282:Thumbnail600x600 {
    ns282:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns376:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:11 .

    ns376:CmsImage1 foaf:thumbnail ns282:Thumbnail600x600 .
}

ns89:CmsImage0 {
    ns89:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:12 .
}

ns6:90 {
    ns6:90 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 0" ;
        skos:prefLabel "CmsConcept 90" .
}

ns269:Thumbnail600x600 {
    ns269:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns388:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:106 .

    ns388:CmsImage1 foaf:thumbnail ns269:Thumbnail600x600 .
}

ns145:Thumbnail400x400 {
    ns145:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns406:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:96 .

    ns406:CmsImage0 foaf:thumbnail ns145:Thumbnail400x400 .
}

ns265:Thumbnail600x600 {
    ns265:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:organization3 .

    ns396:CmsImage1 foaf:thumbnail ns265:Thumbnail600x600 .
}

ns319:Thumbnail200x200 {
    ns319:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns398:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:92 .

    ns398:CmsImage0 foaf:thumbnail ns319:Thumbnail200x200 .
}

ns395:CmsImage1 {
    ns395:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:person4 .
}

ns114:Thumbnail600x600 {
    ns114:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns364:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns13:work5 .

    ns364:CmsImage1 foaf:thumbnail ns114:Thumbnail600x600 .
}

ns18:Thumbnail600x600 {
    ns18:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns378:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:94 .

    ns378:CmsImage1 foaf:thumbnail ns18:Thumbnail600x600 .
}

ns6:92 {
    ns6:92 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 2" ;
        skos:prefLabel "CmsConcept 92" .
}

ns161:Thumbnail600x600 {
    ns161:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns36:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:person3 .

    ns36:CmsImage1 foaf:thumbnail ns161:Thumbnail600x600 .
}

ns214:Thumbnail400x400 {
    ns214:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns81:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:73 .

    ns81:CmsImage0 foaf:thumbnail ns214:Thumbnail400x400 .
}

ns22:Thumbnail400x400 {
    ns22:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns89:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:12 .

    ns89:CmsImage1 foaf:thumbnail ns22:Thumbnail400x400 .
}

ns227:Thumbnail200x200 {
    ns227:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns301:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:54 .

    ns301:CmsImage1 foaf:thumbnail ns227:Thumbnail200x200 .
}

ns295:CmsImage1 {
    ns295:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:28 .
}

ns396:CmsImage1 {
    ns396:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:organization3 .
}

ns63:freestandingwork8Location {
    ns63:freestandingwork8Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns366:CmsImage1 {
    ns366:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:70 .
}

ns293:Thumbnail600x600 {
    ns293:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns305:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:60 .

    ns305:CmsImage0 foaf:thumbnail ns293:Thumbnail600x600 .
}

ns88:CmsImage1 {
    ns88:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:72 .
}

ns43:Thumbnail200x200 {
    ns43:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns376:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:11 .

    ns376:CmsImage0 foaf:thumbnail ns43:Thumbnail200x200 .
}

ns107:Thumbnail200x200 {
    ns107:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns122:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:61 .

    ns122:CmsImage1 foaf:thumbnail ns107:Thumbnail200x200 .
}

ns360:Thumbnail800x800 {
    ns360:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns370:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:8 .

    ns370:CmsImage0 foaf:thumbnail ns360:Thumbnail800x800 .
}

ns343:CmsImage1 {
    ns343:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:48 .
}

ns133:Thumbnail800x800 {
    ns133:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns83:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:109 .

    ns83:CmsImage1 foaf:thumbnail ns133:Thumbnail800x800 .
}

ns6:101 {
    ns6:101 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 1" ;
        skos:prefLabel "CmsConcept 101" .
}

ns92:Thumbnail400x400 {
    ns92:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns276:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:5 .

    ns276:CmsImage1 foaf:thumbnail ns92:Thumbnail400x400 .
}

ns158:Thumbnail600x600 {
    ns158:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns117:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:21 .

    ns117:CmsImage1 foaf:thumbnail ns158:Thumbnail600x600 .
}

ns237:Thumbnail800x800 {
    ns237:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns381:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:42 .

    ns381:CmsImage0 foaf:thumbnail ns237:Thumbnail800x800 .
}

ns241:Thumbnail800x800 {
    ns241:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns348:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:97 .

    ns348:CmsImage0 foaf:thumbnail ns241:Thumbnail800x800 .
}

ns187:Thumbnail800x800 {
    ns187:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns329:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:27 .

    ns329:CmsImage0 foaf:thumbnail ns187:Thumbnail800x800 .
}

ns215:Thumbnail800x800 {
    ns215:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns276:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:5 .

    ns276:CmsImage0 foaf:thumbnail ns215:Thumbnail800x800 .
}

ns270:Thumbnail800x800 {
    ns270:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns309:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:35 .

    ns309:CmsImage0 foaf:thumbnail ns270:Thumbnail800x800 .
}

ns206:Thumbnail200x200 {
    ns206:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns204:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:38 .

    ns204:CmsImage0 foaf:thumbnail ns206:Thumbnail200x200 .
}

ns114:Thumbnail400x400 {
    ns114:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns364:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns13:work5 .

    ns364:CmsImage1 foaf:thumbnail ns114:Thumbnail400x400 .
}

ns272:Thumbnail400x400 {
    ns272:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns83:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:109 .

    ns83:CmsImage0 foaf:thumbnail ns272:Thumbnail400x400 .
}

ns359:Thumbnail800x800 {
    ns359:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns10:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:16 .

    ns10:CmsImage0 foaf:thumbnail ns359:Thumbnail800x800 .
}

ns39:work1Creation {
    ns39:work1Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns63:organization3,
            ns63:organization4 ;
        dcterms:date _:N93c2085cabf041c78cbf08676e1a80dd ;
        dcterms:spatial ns39:work1Location ;
        dcterms:title "CmsCollection0CmsWork1 creation" ;
        cms:work ns39:work1 .

    _:N93c2085cabf041c78cbf08676e1a80dd a cms:DateTimeDescription ;
        time:day "---31"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns210:Thumbnail800x800 {
    ns210:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 0 rights holder" ;
        dcterms:title "Synthetic data properties image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns155:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns383:property_group .

    ns155:CmsImage0 foaf:thumbnail ns210:Thumbnail800x800 .
}

ns160:Thumbnail400x400 {
    ns160:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns328:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:91 .

    ns328:CmsImage1 foaf:thumbnail ns160:Thumbnail400x400 .
}

ns325:Thumbnail200x200 {
    ns325:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns400:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:88 .

    ns400:CmsImage0 foaf:thumbnail ns325:Thumbnail200x200 .
}

ns7:CmsImage0 {
    ns7:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:6 .
}

ns350:Thumbnail600x600 {
    ns350:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:108 .

    ns392:CmsImage0 foaf:thumbnail ns350:Thumbnail600x600 .
}

ns6:45 {
    ns6:45 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 5" ;
        skos:prefLabel "CmsConcept 45" .
}

ns211:Thumbnail600x600 {
    ns211:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns296:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:78 .

    ns296:CmsImage1 foaf:thumbnail ns211:Thumbnail600x600 .
}

ns127:Thumbnail800x800 {
    ns127:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns388:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:106 .

    ns388:CmsImage0 foaf:thumbnail ns127:Thumbnail800x800 .
}

ns397:CmsImage0 {
    ns397:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:39 .
}

ns340:Thumbnail600x600 {
    ns340:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns7:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:6 .

    ns7:CmsImage0 foaf:thumbnail ns340:Thumbnail600x600 .
}

ns96:Thumbnail200x200 {
    ns96:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns382:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:10 .

    ns382:CmsImage1 foaf:thumbnail ns96:Thumbnail200x200 .
}

_:Ndd47a18a4ab94658bb798bc3119bfe84 {
    _:Ndd47a18a4ab94658bb798bc3119bfe84 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N850c59155a7d44e08f6b3a2544b52837 ;
        dcterms:spatial _:N70132db55b0941c8bc7e2790c472a188 ;
        dcterms:title "FreestandingWork10 closing" ;
        cms:work ns63:freestandingwork10 .

    _:N70132db55b0941c8bc7e2790c472a188 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N850c59155a7d44e08f6b3a2544b52837 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns357:Thumbnail400x400 {
    ns357:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns240:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:53 .

    ns240:CmsImage1 foaf:thumbnail ns357:Thumbnail400x400 .
}

ns6:16 {
    ns6:16 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 6" ;
        skos:prefLabel "CmsConcept 16" .
}

ns270:Thumbnail600x600 {
    ns270:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns309:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:35 .

    ns309:CmsImage0 foaf:thumbnail ns270:Thumbnail600x600 .
}

ns231:Thumbnail800x800 {
    ns231:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns48:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:98 .

    ns48:CmsImage0 foaf:thumbnail ns231:Thumbnail800x800 .
}

ns207:Thumbnail800x800 {
    ns207:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns44:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:36 .

    ns44:CmsImage1 foaf:thumbnail ns207:Thumbnail800x800 .
}

ns141:Thumbnail600x600 {
    ns141:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns395:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:person4 .

    ns395:CmsImage1 foaf:thumbnail ns141:Thumbnail600x600 .
}

ns300:Thumbnail400x400 {
    ns300:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:102 .

    ns399:CmsImage0 foaf:thumbnail ns300:Thumbnail400x400 .
}

ns393:Thumbnail400x400 {
    ns393:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns291:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:collection1 .

    ns291:CmsImage1 foaf:thumbnail ns393:Thumbnail400x400 .
}

ns398:CmsImage0 {
    ns398:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:92 .
}

ns183:Thumbnail200x200 {
    ns183:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns374:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:9 .

    ns374:CmsImage0 foaf:thumbnail ns183:Thumbnail200x200 .
}

ns205:Thumbnail400x400 {
    ns205:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns244:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:79 .

    ns244:CmsImage0 foaf:thumbnail ns205:Thumbnail400x400 .
}

ns108:CmsImage0 {
    ns108:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:71 .
}

ns90:Thumbnail600x600 {
    ns90:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns118:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:93 .

    ns118:CmsImage1 foaf:thumbnail ns90:Thumbnail600x600 .
}

ns294:Thumbnail800x800 {
    ns294:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns190:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:0 .

    ns190:CmsImage1 foaf:thumbnail ns294:Thumbnail800x800 .
}

ns20:Thumbnail400x400 {
    ns20:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns76:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:103 .

    ns76:CmsImage0 foaf:thumbnail ns20:Thumbnail400x400 .
}

ns41:Thumbnail400x400 {
    ns41:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns366:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:70 .

    ns366:CmsImage0 foaf:thumbnail ns41:Thumbnail400x400 .
}

ns64:Thumbnail200x200 {
    ns64:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns142:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:52 .

    ns142:CmsImage1 foaf:thumbnail ns64:Thumbnail200x200 .
}

ns346:CmsImage1 {
    ns346:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:organization1 .
}

ns387:Thumbnail600x600 {
    ns387:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns28:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:14 .

    ns28:CmsImage0 foaf:thumbnail ns387:Thumbnail600x600 .
}

ns39:work3Opening {
    ns39:work3Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-29"^^xsd:date ;
        dcterms:spatial _:Na4566a7a01f9425a9a5eef10dc3dcf27 ;
        dcterms:title "CmsCollection0CmsWork3 opening" ;
        cms:work ns39:work3 .

    _:Na4566a7a01f9425a9a5eef10dc3dcf27 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns161:Thumbnail400x400 {
    ns161:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns36:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:person3 .

    ns36:CmsImage1 foaf:thumbnail ns161:Thumbnail400x400 .
}

ns63:organization2 {
    ns63:organization2 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 2" ;
        foaf:page ns63:organization2page .
}

ns391:CmsImage0 {
    ns391:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:62 .
}

ns341:Thumbnail600x600 {
    ns341:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns188:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:organization0 .

    ns188:CmsImage0 foaf:thumbnail ns341:Thumbnail600x600 .
}

ns204:CmsImage0 {
    ns204:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:38 .
}

ns202:Thumbnail400x400 {
    ns202:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns233:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns39:work3 .

    ns233:CmsImage0 foaf:thumbnail ns202:Thumbnail400x400 .
}

ns309:CmsImage0 {
    ns309:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:35 .
}

ns63:person4 {
    ns63:person4 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            wd:Q7251 ;
        contact:sortName "4, CmsPerson" ;
        foaf:familyName "4" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 4" ;
        foaf:page ns63:person4page .
}

ns13:work7Opening {
    ns13:work7Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-25"^^xsd:date ;
        dcterms:spatial _:Nc1906ed2d7b94ece87be8401a8935b4b ;
        dcterms:title "CmsCollection1CmsWork7 opening" ;
        cms:work ns13:work7 .

    _:Nc1906ed2d7b94ece87be8401a8935b4b a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns302:Thumbnail800x800 {
    ns302:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns7:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:6 .

    ns7:CmsImage1 foaf:thumbnail ns302:Thumbnail800x800 .
}

ns374:CmsImage0 {
    ns374:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:9 .
}

ns148:Thumbnail200x200 {
    ns148:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns345:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:person0 .

    ns345:CmsImage0 foaf:thumbnail ns148:Thumbnail200x200 .
}

ns269:Thumbnail200x200 {
    ns269:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns388:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:106 .

    ns388:CmsImage1 foaf:thumbnail ns269:Thumbnail200x200 .
}

ns6:48 {
    ns6:48 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 8" ;
        skos:prefLabel "CmsConcept 48" .
}

ns265:Thumbnail800x800 {
    ns265:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:organization3 .

    ns396:CmsImage1 foaf:thumbnail ns265:Thumbnail800x800 .
}

ns354:CmsImage1 {
    ns354:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:37 .
}

ns399:CmsImage1 {
    ns399:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:102 .
}

ns60:Thumbnail200x200 {
    ns60:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns326:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:15 .

    ns326:CmsImage0 foaf:thumbnail ns60:Thumbnail200x200 .
}

ns395:CmsImage0 {
    ns395:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:person4 .
}

ns250:Thumbnail600x600 {
    ns250:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns203:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:organization4 .

    ns203:CmsImage1 foaf:thumbnail ns250:Thumbnail600x600 .
}

ns6:32 {
    ns6:32 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 2" ;
        skos:prefLabel "CmsConcept 32" .
}

ns260:Thumbnail200x200 {
    ns260:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns327:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:45 .

    ns327:CmsImage0 foaf:thumbnail ns260:Thumbnail200x200 .
}

ns25:Thumbnail600x600 {
    ns25:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns143:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:87 .

    ns143:CmsImage1 foaf:thumbnail ns25:Thumbnail600x600 .
}

ns141:Thumbnail200x200 {
    ns141:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns395:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:person4 .

    ns395:CmsImage1 foaf:thumbnail ns141:Thumbnail200x200 .
}

ns3:Thumbnail800x800 {
    ns3:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns190:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:0 .

    ns190:CmsImage0 foaf:thumbnail ns3:Thumbnail800x800 .
}

ns337:Thumbnail800x800 {
    ns337:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns195:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:82 .

    ns195:CmsImage0 foaf:thumbnail ns337:Thumbnail800x800 .
}

ns363:Thumbnail600x600 {
    ns363:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns371:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:freestandingwork9 .

    ns371:CmsImage0 foaf:thumbnail ns363:Thumbnail600x600 .
}

ns400:CmsImage0 {
    ns400:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:88 .
}

ns16:Thumbnail400x400 {
    ns16:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns84:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:58 .

    ns84:CmsImage1 foaf:thumbnail ns16:Thumbnail400x400 .
}

ns14:Thumbnail200x200 {
    ns14:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns117:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:21 .

    ns117:CmsImage0 foaf:thumbnail ns14:Thumbnail200x200 .
}

ns216:Thumbnail600x600 {
    ns216:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns88:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:72 .

    ns88:CmsImage0 foaf:thumbnail ns216:Thumbnail600x600 .
}

ns2:Thumbnail600x600 {
    ns2:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns397:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:39 .

    ns397:CmsImage1 foaf:thumbnail ns2:Thumbnail600x600 .
}

ns393:Thumbnail600x600 {
    ns393:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns291:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:collection1 .

    ns291:CmsImage1 foaf:thumbnail ns393:Thumbnail600x600 .
}

ns199:Thumbnail200x200 {
    ns199:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns364:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns13:work5 .

    ns364:CmsImage0 foaf:thumbnail ns199:Thumbnail200x200 .
}

ns259:Thumbnail200x200 {
    ns259:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns142:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:52 .

    ns142:CmsImage0 foaf:thumbnail ns259:Thumbnail200x200 .
}

ns401:Thumbnail600x600 {
    ns401:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns377:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:68 .

    ns377:CmsImage0 foaf:thumbnail ns401:Thumbnail600x600 .
}

ns304:Thumbnail600x600 {
    ns304:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns361:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:55 .

    ns361:CmsImage1 foaf:thumbnail ns304:Thumbnail600x600 .
}

ns179:CmsImage1 {
    ns179:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:13 .
}

ns380:Thumbnail200x200 {
    ns380:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns197:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns39:work0 .

    ns197:CmsImage1 foaf:thumbnail ns380:Thumbnail200x200 .
}

ns301:CmsImage0 {
    ns301:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:54 .
}

ns304:Thumbnail800x800 {
    ns304:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns361:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:55 .

    ns361:CmsImage1 foaf:thumbnail ns304:Thumbnail800x800 .
}

ns219:Thumbnail600x600 {
    ns219:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns343:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:48 .

    ns343:CmsImage0 foaf:thumbnail ns219:Thumbnail600x600 .
}

ns159:Thumbnail200x200 {
    ns159:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns271:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:44 .

    ns271:CmsImage0 foaf:thumbnail ns159:Thumbnail200x200 .
}

ns82:Thumbnail600x600 {
    ns82:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns135:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:31 .

    ns135:CmsImage1 foaf:thumbnail ns82:Thumbnail600x600 .
}

ns402:Thumbnail200x200 {
    ns167:CmsImage1 foaf:thumbnail ns402:Thumbnail200x200 .

    ns402:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns167:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:32 .
}

ns63:organization1 {
    ns63:organization1 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 1" ;
        foaf:page ns63:organization1page .
}

ns322:Thumbnail400x400 {
    ns322:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns326:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:15 .

    ns326:CmsImage1 foaf:thumbnail ns322:Thumbnail400x400 .
}

ns284:Thumbnail600x600 {
    ns284:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns346:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:organization1 .

    ns346:CmsImage0 foaf:thumbnail ns284:Thumbnail600x600 .
}

ns299:Thumbnail400x400 {
    ns299:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns150:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns13:work7 .

    ns150:CmsImage1 foaf:thumbnail ns299:Thumbnail400x400 .
}

ns263:CmsImage1 {
    ns263:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:25 .
}

ns156:CmsImage1 {
    ns156:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:59 .
}

ns326:CmsImage0 {
    ns326:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:15 .
}

ns318:Thumbnail400x400 {
    ns318:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns347:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns39:work2 .

    ns347:CmsImage0 foaf:thumbnail ns318:Thumbnail400x400 .
}

ns50:Thumbnail200x200 {
    ns50:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns366:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:70 .

    ns366:CmsImage1 foaf:thumbnail ns50:Thumbnail200x200 .
}

ns77:Thumbnail200x200 {
    ns77:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns48:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:98 .

    ns48:CmsImage1 foaf:thumbnail ns77:Thumbnail200x200 .
}

ns6:7 {
    ns6:7 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 7" ;
        skos:prefLabel "CmsConcept 7" .
}

ns384:CmsImage0 {
    ns384:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:freestandingwork8 .
}

ns24:Thumbnail200x200 {
    ns24:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns252:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:2 .

    ns252:CmsImage1 foaf:thumbnail ns24:Thumbnail200x200 .
}

ns312:Thumbnail200x200 {
    ns312:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns328:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:91 .

    ns328:CmsImage0 foaf:thumbnail ns312:Thumbnail200x200 .
}

ns6:1 {
    ns6:1 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 1" ;
        skos:prefLabel "CmsConcept 1" .
}

ns202:Thumbnail200x200 {
    ns202:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns233:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns39:work3 .

    ns233:CmsImage0 foaf:thumbnail ns202:Thumbnail200x200 .
}

ns37:Thumbnail200x200 {
    ns37:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns352:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:100 .

    ns352:CmsImage0 foaf:thumbnail ns37:Thumbnail200x200 .
}

ns337:Thumbnail400x400 {
    ns337:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns195:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:82 .

    ns195:CmsImage0 foaf:thumbnail ns337:Thumbnail400x400 .
}

ns17:Thumbnail800x800 {
    ns17:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:64 .

    ns385:CmsImage1 foaf:thumbnail ns17:Thumbnail800x800 .
}

ns85:CmsImage0 {
    ns85:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:95 .
}

ns222:Thumbnail200x200 {
    ns222:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns296:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:78 .

    ns296:CmsImage0 foaf:thumbnail ns222:Thumbnail200x200 .
}

ns302:Thumbnail200x200 {
    ns302:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns7:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:6 .

    ns7:CmsImage1 foaf:thumbnail ns302:Thumbnail200x200 .
}

ns359:Thumbnail400x400 {
    ns359:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns10:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:16 .

    ns10:CmsImage0 foaf:thumbnail ns359:Thumbnail400x400 .
}

ns201:Thumbnail200x200 {
    ns201:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 1 rights holder" ;
        dcterms:title "Synthetic data properties image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns155:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns383:property_group .

    ns155:CmsImage1 foaf:thumbnail ns201:Thumbnail200x200 .
}

ns401:Thumbnail400x400 {
    ns401:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns377:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:68 .

    ns377:CmsImage0 foaf:thumbnail ns401:Thumbnail400x400 .
}

ns403:CmsImage1 {
    ns403:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:99 .
}

ns6:42 {
    ns6:42 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 2" ;
        skos:prefLabel "CmsConcept 42" .
}

ns137:Thumbnail600x600 {
    ns137:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns32:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:22 .

    ns32:CmsImage0 foaf:thumbnail ns137:Thumbnail600x600 .
}

ns181:Thumbnail200x200 {
    ns181:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns370:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:8 .

    ns370:CmsImage1 foaf:thumbnail ns181:Thumbnail200x200 .
}

ns275:Thumbnail800x800 {
    ns275:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns287:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:46 .

    ns287:CmsImage0 foaf:thumbnail ns275:Thumbnail800x800 .
}

ns209:Thumbnail200x200 {
    ns209:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns377:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:68 .

    ns377:CmsImage1 foaf:thumbnail ns209:Thumbnail200x200 .
}

ns211:Thumbnail800x800 {
    ns211:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns296:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:78 .

    ns296:CmsImage1 foaf:thumbnail ns211:Thumbnail800x800 .
}

ns394:CmsImage1 {
    ns394:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:81 .
}

ns259:Thumbnail800x800 {
    ns259:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns142:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:52 .

    ns142:CmsImage0 foaf:thumbnail ns259:Thumbnail800x800 .
}

ns404:CmsImage1 {
    ns404:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:23 .
}

ns372:Thumbnail600x600 {
    ns372:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns135:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:31 .

    ns135:CmsImage0 foaf:thumbnail ns372:Thumbnail600x600 .
}

ns405:CmsImage1 {
    ns405:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:20 .
}

ns100:Thumbnail400x400 {
    ns100:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns47:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:freestandingwork10 .

    ns47:CmsImage1 foaf:thumbnail ns100:Thumbnail400x400 .
}

ns152:Thumbnail400x400 {
    ns152:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns191:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:4 .

    ns191:CmsImage1 foaf:thumbnail ns152:Thumbnail400x400 .
}

ns128:Thumbnail600x600 {
    ns128:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns384:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:freestandingwork8 .

    ns384:CmsImage1 foaf:thumbnail ns128:Thumbnail600x600 .
}

ns140:Thumbnail400x400 {
    ns140:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns330:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:33 .

    ns330:CmsImage0 foaf:thumbnail ns140:Thumbnail400x400 .
}

ns229:Thumbnail200x200 {
    ns229:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns118:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:93 .

    ns118:CmsImage0 foaf:thumbnail ns229:Thumbnail200x200 .
}

ns103:CmsImage1 {
    ns103:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:49 .
}

ns349:Thumbnail400x400 {
    ns349:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:organization3 .

    ns396:CmsImage0 foaf:thumbnail ns349:Thumbnail400x400 .
}

ns386:Thumbnail800x800 {
    ns386:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns243:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:29 .

    ns243:CmsImage0 foaf:thumbnail ns386:Thumbnail800x800 .
}

ns277:Thumbnail400x400 {
    ns277:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns163:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:104 .

    ns163:CmsImage0 foaf:thumbnail ns277:Thumbnail400x400 .
}

ns318:Thumbnail600x600 {
    ns318:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns347:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns39:work2 .

    ns347:CmsImage0 foaf:thumbnail ns318:Thumbnail600x600 .
}

ns63:freestandingwork9Location {
    ns63:freestandingwork9Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns6:99 {
    ns6:99 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 9" ;
        skos:prefLabel "CmsConcept 99" .
}

ns335:Thumbnail200x200 {
    ns335:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns375:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:3 .

    ns375:CmsImage0 foaf:thumbnail ns335:Thumbnail200x200 .
}

ns98:Thumbnail600x600 {
    ns98:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns391:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:62 .

    ns391:CmsImage1 foaf:thumbnail ns98:Thumbnail600x600 .
}

ns119:Thumbnail800x800 {
    ns119:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns342:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:24 .

    ns342:CmsImage1 foaf:thumbnail ns119:Thumbnail800x800 .
}

ns322:Thumbnail600x600 {
    ns322:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns326:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:15 .

    ns326:CmsImage1 foaf:thumbnail ns322:Thumbnail600x600 .
}

ns169:Thumbnail800x800 {
    ns169:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns389:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:17 .

    ns389:CmsImage1 foaf:thumbnail ns169:Thumbnail800x800 .
}

ns313:CmsImage1 {
    ns313:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:107 .
}

ns58:Thumbnail200x200 {
    ns58:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns404:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:23 .

    ns404:CmsImage0 foaf:thumbnail ns58:Thumbnail200x200 .
}

ns276:CmsImage1 {
    ns276:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:5 .
}

ns406:CmsImage1 {
    ns406:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:96 .
}

ns257:CmsImage1 {
    ns257:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:person2 .
}

ns6:60 {
    ns6:60 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 0" ;
        skos:prefLabel "CmsConcept 60" .
}

ns79:Thumbnail800x800 {
    ns79:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns122:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:61 .

    ns122:CmsImage0 foaf:thumbnail ns79:Thumbnail800x800 .
}

ns268:Thumbnail400x400 {
    ns268:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns406:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:96 .

    ns406:CmsImage1 foaf:thumbnail ns268:Thumbnail400x400 .
}

ns6:102 {
    ns6:102 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 2" ;
        skos:prefLabel "CmsConcept 102" .
}

ns234:Thumbnail600x600 {
    ns234:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns188:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:organization0 .

    ns188:CmsImage1 foaf:thumbnail ns234:Thumbnail600x600 .
}

ns224:Thumbnail400x400 {
    ns224:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns150:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns13:work7 .

    ns150:CmsImage0 foaf:thumbnail ns224:Thumbnail400x400 .
}

ns217:Thumbnail600x600 {
    ns217:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns395:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:person4 .

    ns395:CmsImage0 foaf:thumbnail ns217:Thumbnail600x600 .
}

ns340:Thumbnail400x400 {
    ns340:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns7:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:6 .

    ns7:CmsImage0 foaf:thumbnail ns340:Thumbnail400x400 .
}

ns18:Thumbnail400x400 {
    ns18:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns378:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:94 .

    ns378:CmsImage1 foaf:thumbnail ns18:Thumbnail400x400 .
}

ns299:Thumbnail600x600 {
    ns299:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns150:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns13:work7 .

    ns150:CmsImage1 foaf:thumbnail ns299:Thumbnail600x600 .
}

ns385:CmsImage0 {
    ns385:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:64 .
}

ns228:Thumbnail200x200 {
    ns228:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns223:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns13:work4 .

    ns223:CmsImage0 foaf:thumbnail ns228:Thumbnail200x200 .
}

ns389:CmsImage1 {
    ns389:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:17 .
}

ns147:Thumbnail600x600 {
    ns147:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns102:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:66 .

    ns102:CmsImage1 foaf:thumbnail ns147:Thumbnail600x600 .
}

ns325:Thumbnail400x400 {
    ns325:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns400:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:88 .

    ns400:CmsImage0 foaf:thumbnail ns325:Thumbnail400x400 .
}

ns367:Thumbnail200x200 {
    ns367:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns313:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:107 .

    ns313:CmsImage1 foaf:thumbnail ns367:Thumbnail200x200 .
}

ns382:CmsImage1 {
    ns382:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:10 .
}

ns191:CmsImage1 {
    ns191:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:4 .
}

ns150:CmsImage0 {
    ns150:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns13:work7 .
}

ns358:Thumbnail400x400 {
    ns358:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns257:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:person2 .

    ns257:CmsImage1 foaf:thumbnail ns358:Thumbnail400x400 .
}

ns176:Thumbnail200x200 {
    ns176:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns352:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:100 .

    ns352:CmsImage1 foaf:thumbnail ns176:Thumbnail200x200 .
}

ns13:work5Opening {
    ns13:work5Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-27"^^xsd:date ;
        dcterms:spatial _:N29e4f2b513c64cb4b2b7d78de424a805 ;
        dcterms:title "CmsCollection1CmsWork5 opening" ;
        cms:work ns13:work5 .

    _:N29e4f2b513c64cb4b2b7d78de424a805 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns362:CmsImage1 {
    ns362:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns39:work1 .
}

ns402:Thumbnail600x600 {
    ns402:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns167:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:32 .

    ns167:CmsImage1 foaf:thumbnail ns402:Thumbnail600x600 .
}

ns87:Thumbnail600x600 {
    ns87:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns273:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:57 .

    ns273:CmsImage1 foaf:thumbnail ns87:Thumbnail600x600 .
}

ns355:Thumbnail400x400 {
    ns355:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns76:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:103 .

    ns76:CmsImage1 foaf:thumbnail ns355:Thumbnail400x400 .
}

ns119:Thumbnail600x600 {
    ns119:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns342:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:24 .

    ns342:CmsImage1 foaf:thumbnail ns119:Thumbnail600x600 .
}

ns267:Thumbnail400x400 {
    ns267:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns154:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:43 .

    ns154:CmsImage0 foaf:thumbnail ns267:Thumbnail400x400 .
}

ns264:Thumbnail600x600 {
    ns264:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns346:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:organization1 .

    ns346:CmsImage1 foaf:thumbnail ns264:Thumbnail600x600 .
}

ns115:Thumbnail800x800 {
    ns115:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns317:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:89 .

    ns317:CmsImage0 foaf:thumbnail ns115:Thumbnail800x800 .
}

ns13:work7 {
    ns13:work7 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork7 alternative title 0",
            "CmsCollection1CmsWork7 alternative title 1" ;
        dcterms:contributor _:N768045d2412c48cda2c0c78a673efa39,
            _:Nfe456477ecb34a7e8434a451afa13b17 ;
        dcterms:creator ns63:organization0,
            ns63:person4 ;
        dcterms:extent ns6:17,
            ns6:18 ;
        dcterms:identifier "CmsCollection1CmsWork7Id0",
            "CmsCollection1CmsWork7Id1" ;
        dcterms:language ns6:27,
            ns6:28 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns6:47,
            ns6:48 ;
        dcterms:provenance "CmsCollection1CmsWork7 provenance 0",
            "CmsCollection1CmsWork7 provenance 1" ;
        dcterms:publisher ns6:57,
            ns6:58 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 rights holder" ;
        dcterms:source ns6:67,
            ns6:68 ;
        dcterms:spatial ns13:work7Location ;
        dcterms:subject ns6:87,
            ns6:88 ;
        dcterms:title "CmsCollection1CmsWork7" ;
        dcterms:type ns6:107,
            ns6:108 ;
        vra:culturalContext ns6:7,
            ns6:8 ;
        vra:material ns6:37,
            ns6:38 ;
        vra:technique ns6:97,
            ns6:98 ;
        cms:collection ns63:collection1 .

    _:N768045d2412c48cda2c0c78a673efa39 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork7 contributor 0" .

    _:Nfe456477ecb34a7e8434a451afa13b17 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork7 contributor 1" .
}

ns282:Thumbnail800x800 {
    ns282:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns376:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:11 .

    ns376:CmsImage1 foaf:thumbnail ns282:Thumbnail800x800 .
}

ns54:Thumbnail200x200 {
    ns54:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns238:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:67 .

    ns238:CmsImage0 foaf:thumbnail ns54:Thumbnail200x200 .
}

ns339:Thumbnail800x800 {
    ns339:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns244:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:79 .

    ns244:CmsImage1 foaf:thumbnail ns339:Thumbnail800x800 .
}

ns242:Thumbnail600x600 {
    ns242:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns400:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:88 .

    ns400:CmsImage1 foaf:thumbnail ns242:Thumbnail600x600 .
}

ns333:Thumbnail200x200 {
    ns333:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns398:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:92 .

    ns398:CmsImage1 foaf:thumbnail ns333:Thumbnail200x200 .
}

ns350:Thumbnail400x400 {
    ns350:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:108 .

    ns392:CmsImage0 foaf:thumbnail ns350:Thumbnail400x400 .
}

ns270:Thumbnail200x200 {
    ns270:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns309:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:35 .

    ns309:CmsImage0 foaf:thumbnail ns270:Thumbnail200x200 .
}

ns344:Thumbnail400x400 {
    ns344:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns197:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns39:work0 .

    ns197:CmsImage0 foaf:thumbnail ns344:Thumbnail400x400 .
}

ns372:Thumbnail200x200 {
    ns372:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns135:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:31 .

    ns135:CmsImage0 foaf:thumbnail ns372:Thumbnail200x200 .
}

ns201:Thumbnail600x600 {
    ns201:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 1 rights holder" ;
        dcterms:title "Synthetic data properties image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns155:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns383:property_group .

    ns155:CmsImage1 foaf:thumbnail ns201:Thumbnail600x600 .
}

ns333:Thumbnail600x600 {
    ns333:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns398:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:92 .

    ns398:CmsImage1 foaf:thumbnail ns333:Thumbnail600x600 .
}

vra:technique {
    vra:technique a cms:Property ;
        rdfs:label "Technique" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns383:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> .
}

ns155:CmsImage1 {
    ns155:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Synthetic data properties image 1 rights holder" ;
        dcterms:title "Synthetic data properties image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns383:property_group .
}

ns341:Thumbnail200x200 {
    ns341:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns188:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:organization0 .

    ns188:CmsImage0 foaf:thumbnail ns341:Thumbnail200x200 .
}

ns387:Thumbnail800x800 {
    ns387:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns28:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:14 .

    ns28:CmsImage0 foaf:thumbnail ns387:Thumbnail800x800 .
}

ns353:CmsImage0 {
    ns353:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:50 .
}

ns119:Thumbnail400x400 {
    ns119:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns342:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:24 .

    ns342:CmsImage1 foaf:thumbnail ns119:Thumbnail400x400 .
}

ns86:Thumbnail800x800 {
    ns86:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns292:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:77 .

    ns292:CmsImage0 foaf:thumbnail ns86:Thumbnail800x800 .
}

ns379:CmsImage0 {
    ns379:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:1 .
}

ns206:Thumbnail600x600 {
    ns206:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns204:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:38 .

    ns204:CmsImage0 foaf:thumbnail ns206:Thumbnail600x600 .
}

ns289:Thumbnail200x200 {
    ns289:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns191:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:4 .

    ns191:CmsImage0 foaf:thumbnail ns289:Thumbnail200x200 .
}

ns292:CmsImage1 {
    ns292:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:77 .
}

ns81:CmsImage1 {
    ns81:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:73 .
}

ns390:CmsImage0 {
    ns390:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:19 .
}

ns42:Thumbnail600x600 {
    ns42:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:102 .

    ns399:CmsImage1 foaf:thumbnail ns42:Thumbnail600x600 .
}

ns342:CmsImage0 {
    ns342:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:24 .
}

ns250:Thumbnail400x400 {
    ns250:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns203:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:organization4 .

    ns203:CmsImage1 foaf:thumbnail ns250:Thumbnail400x400 .
}

ns64:Thumbnail800x800 {
    ns64:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns142:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:52 .

    ns142:CmsImage1 foaf:thumbnail ns64:Thumbnail800x800 .
}

ns12:Thumbnail800x800 {
    ns12:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns342:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:24 .

    ns342:CmsImage0 foaf:thumbnail ns12:Thumbnail800x800 .
}

ns369:Thumbnail800x800 {
    ns369:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns288:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:freestandingwork11 .

    ns288:CmsImage0 foaf:thumbnail ns369:Thumbnail800x800 .
}

ns141:Thumbnail400x400 {
    ns141:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns395:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:person4 .

    ns395:CmsImage1 foaf:thumbnail ns141:Thumbnail400x400 .
}

ns19:Thumbnail600x600 {
    ns19:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns285:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:90 .

    ns285:CmsImage0 foaf:thumbnail ns19:Thumbnail600x600 .
}

ns226:Thumbnail200x200 {
    ns226:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns362:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns39:work1 .

    ns362:CmsImage1 foaf:thumbnail ns226:Thumbnail200x200 .
}

ns35:Thumbnail800x800 {
    ns35:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns274:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:101 .

    ns274:CmsImage1 foaf:thumbnail ns35:Thumbnail800x800 .
}

ns370:CmsImage0 {
    ns370:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:8 .
}

ns333:Thumbnail400x400 {
    ns333:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns398:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:92 .

    ns398:CmsImage1 foaf:thumbnail ns333:Thumbnail400x400 .
}

ns246:Thumbnail800x800 {
    ns246:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns324:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:56 .

    ns324:CmsImage1 foaf:thumbnail ns246:Thumbnail800x800 .
}

ns231:Thumbnail600x600 {
    ns231:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns48:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:98 .

    ns48:CmsImage0 foaf:thumbnail ns231:Thumbnail600x600 .
}

ns308:Thumbnail200x200 {
    ns308:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns103:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:49 .

    ns103:CmsImage1 foaf:thumbnail ns308:Thumbnail200x200 .
}

ns363:Thumbnail800x800 {
    ns363:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns371:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:freestandingwork9 .

    ns371:CmsImage0 foaf:thumbnail ns363:Thumbnail800x800 .
}

ns160:Thumbnail200x200 {
    ns160:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns328:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:91 .

    ns328:CmsImage1 foaf:thumbnail ns160:Thumbnail200x200 .
}

ns93:Thumbnail200x200 {
    ns93:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns292:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:77 .

    ns292:CmsImage1 foaf:thumbnail ns93:Thumbnail200x200 .
}

ns248:Thumbnail600x600 {
    ns248:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns36:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:person3 .

    ns36:CmsImage0 foaf:thumbnail ns248:Thumbnail600x600 .
}

ns310:Thumbnail200x200 {
    ns310:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns220:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:63 .

    ns220:CmsImage0 foaf:thumbnail ns310:Thumbnail200x200 .
}

ns369:Thumbnail200x200 {
    ns369:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns288:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:freestandingwork11 .

    ns288:CmsImage0 foaf:thumbnail ns369:Thumbnail200x200 .
}

ns137:Thumbnail200x200 {
    ns137:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns32:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:22 .

    ns32:CmsImage0 foaf:thumbnail ns137:Thumbnail200x200 .
}

ns87:Thumbnail800x800 {
    ns87:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns273:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:57 .

    ns273:CmsImage1 foaf:thumbnail ns87:Thumbnail800x800 .
}

ns153:Thumbnail600x600 {
    ns153:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns379:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:1 .

    ns379:CmsImage1 foaf:thumbnail ns153:Thumbnail600x600 .
}

ns380:Thumbnail800x800 {
    ns380:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns197:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns39:work0 .

    ns197:CmsImage1 foaf:thumbnail ns380:Thumbnail800x800 .
}

ns6:19 {
    ns6:19 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 9" ;
        skos:prefLabel "CmsConcept 19" .
}

ns298:Thumbnail200x200 {
    ns298:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns394:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:81 .

    ns394:CmsImage0 foaf:thumbnail ns298:Thumbnail200x200 .
}

ns279:Thumbnail200x200 {
    ns279:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns233:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns39:work3 .

    ns233:CmsImage1 foaf:thumbnail ns279:Thumbnail200x200 .
}

ns111:Thumbnail800x800 {
    ns111:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns390:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:19 .

    ns390:CmsImage1 foaf:thumbnail ns111:Thumbnail800x800 .
}

ns321:Thumbnail600x600 {
    ns321:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns5:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:51 .

    ns5:CmsImage1 foaf:thumbnail ns321:Thumbnail600x600 .
}

ns107:Thumbnail600x600 {
    ns107:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns122:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:61 .

    ns122:CmsImage1 foaf:thumbnail ns107:Thumbnail600x600 .
}

ns194:Thumbnail800x800 {
    ns194:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns324:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:56 .

    ns324:CmsImage0 foaf:thumbnail ns194:Thumbnail800x800 .
}

ns397:CmsImage1 {
    ns397:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:39 .
}

ns227:Thumbnail600x600 {
    ns227:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns301:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:54 .

    ns301:CmsImage1 foaf:thumbnail ns227:Thumbnail600x600 .
}

ns162:Thumbnail400x400 {
    ns162:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns156:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:59 .

    ns156:CmsImage0 foaf:thumbnail ns162:Thumbnail400x400 .
}

ns126:Thumbnail200x200 {
    ns126:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns149:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:74 .

    ns149:CmsImage0 foaf:thumbnail ns126:Thumbnail200x200 .
}

ns13:work6Opening {
    ns13:work6Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-26"^^xsd:date ;
        dcterms:description _:N4f5aeb2746ee4cb087c7300fff0a6d4d ;
        dcterms:spatial _:N322b550f08de4d24b9a2f3387a3481ba ;
        dcterms:title "CmsCollection1CmsWork6 opening" ;
        cms:work ns13:work6 .

    _:N322b550f08de4d24b9a2f3387a3481ba a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N4f5aeb2746ee4cb087c7300fff0a6d4d a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns218:Thumbnail600x600 {
    ns218:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns330:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:33 .

    ns330:CmsImage1 foaf:thumbnail ns218:Thumbnail600x600 .
}

ns304:Thumbnail400x400 {
    ns304:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns361:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:55 .

    ns361:CmsImage1 foaf:thumbnail ns304:Thumbnail400x400 .
}

ns314:Thumbnail600x600 {
    ns314:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns34:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:84 .

    ns34:CmsImage1 foaf:thumbnail ns314:Thumbnail600x600 .
}

ns274:CmsImage1 {
    ns274:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:101 .
}

ns358:Thumbnail600x600 {
    ns358:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns257:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:person2 .

    ns257:CmsImage1 foaf:thumbnail ns358:Thumbnail600x600 .
}

ns168:Thumbnail200x200 {
    ns168:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns203:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:organization4 .

    ns203:CmsImage0 foaf:thumbnail ns168:Thumbnail200x200 .
}

ns56:Thumbnail800x800 {
    ns56:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns238:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:67 .

    ns238:CmsImage1 foaf:thumbnail ns56:Thumbnail800x800 .
}

ns21:Thumbnail600x600 {
    ns21:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns85:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:95 .

    ns85:CmsImage0 foaf:thumbnail ns21:Thumbnail600x600 .
}

ns367:Thumbnail800x800 {
    ns367:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns313:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:107 .

    ns313:CmsImage1 foaf:thumbnail ns367:Thumbnail800x800 .
}

dcterms:subject {
    dcterms:subject a cms:Property ;
        rdfs:label "Subject" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns383:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> .
}

ns6:89 {
    ns6:89 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 9" ;
        skos:prefLabel "CmsConcept 89" .
}

ns340:Thumbnail800x800 {
    ns340:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns7:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:6 .

    ns7:CmsImage0 foaf:thumbnail ns340:Thumbnail800x800 .
}

ns212:Thumbnail400x400 {
    ns212:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns371:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:freestandingwork9 .

    ns371:CmsImage1 foaf:thumbnail ns212:Thumbnail400x400 .
}

ns5:CmsImage1 {
    ns5:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:51 .
}

ns75:Thumbnail200x200 {
    ns75:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns391:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:62 .

    ns391:CmsImage0 foaf:thumbnail ns75:Thumbnail200x200 .
}

ns356:Thumbnail400x400 {
    ns356:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns317:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:89 .

    ns317:CmsImage1 foaf:thumbnail ns356:Thumbnail400x400 .
}

ns46:Thumbnail800x800 {
    ns46:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns378:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:94 .

    ns378:CmsImage0 foaf:thumbnail ns46:Thumbnail800x800 .
}

ns365:CmsImage1 {
    ns365:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns13:work6 .
}

ns219:Thumbnail200x200 {
    ns219:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns343:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:48 .

    ns343:CmsImage0 foaf:thumbnail ns219:Thumbnail200x200 .
}

ns110:Thumbnail600x600 {
    ns110:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns102:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:66 .

    ns102:CmsImage0 foaf:thumbnail ns110:Thumbnail600x600 .
}

ns197:CmsImage1 {
    ns197:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns39:work0 .
}

ns110:Thumbnail400x400 {
    ns110:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns102:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:66 .

    ns102:CmsImage0 foaf:thumbnail ns110:Thumbnail400x400 .
}

ns314:Thumbnail400x400 {
    ns314:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns34:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:84 .

    ns34:CmsImage1 foaf:thumbnail ns314:Thumbnail400x400 .
}

ns42:Thumbnail400x400 {
    ns42:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:102 .

    ns399:CmsImage1 foaf:thumbnail ns42:Thumbnail400x400 .
}

ns406:CmsImage0 {
    ns406:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:96 .
}

ns268:Thumbnail600x600 {
    ns268:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns406:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:96 .

    ns406:CmsImage1 foaf:thumbnail ns268:Thumbnail600x600 .
}

ns225:Thumbnail800x800 {
    ns225:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns44:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:36 .

    ns44:CmsImage0 foaf:thumbnail ns225:Thumbnail800x800 .
}

ns80:Thumbnail400x400 {
    ns80:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns136:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:41 .

    ns136:CmsImage1 foaf:thumbnail ns80:Thumbnail400x400 .
}

ns254:Thumbnail600x600 {
    ns254:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns381:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:42 .

    ns381:CmsImage1 foaf:thumbnail ns254:Thumbnail600x600 .
}

ns63:freestandingwork10Location {
    ns63:freestandingwork10Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns323:CmsImage1 {
    ns323:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:organization2 .
}

ns30:Thumbnail600x600 {
    ns30:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns345:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:person0 .

    ns345:CmsImage1 foaf:thumbnail ns30:Thumbnail600x600 .
}

ns392:CmsImage1 {
    ns392:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:108 .
}

ns148:Thumbnail800x800 {
    ns148:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns345:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:person0 .

    ns345:CmsImage0 foaf:thumbnail ns148:Thumbnail800x800 .
}

ns6:6 {
    ns6:6 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 6" ;
        skos:prefLabel "CmsConcept 6" .
}

ns39:work2 {
    ns39:work2 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork2 alternative title 0",
            "CmsCollection0CmsWork2 alternative title 1" ;
        dcterms:contributor _:N1f99ff4f47ad45e698a6341f517799e6,
            _:N867c45c08a0c4af6a210d9975048b8f7 ;
        dcterms:creator ns63:organization4,
            ns63:person0 ;
        dcterms:description _:N2df3481b40f84c039f27a227b89ad5fa ;
        dcterms:extent ns6:12,
            ns6:13 ;
        dcterms:identifier "CmsCollection0CmsWork2Id0",
            "CmsCollection0CmsWork2Id1" ;
        dcterms:language ns6:22,
            ns6:23 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns6:42,
            ns6:43 ;
        dcterms:provenance "CmsCollection0CmsWork2 provenance 0",
            "CmsCollection0CmsWork2 provenance 1" ;
        dcterms:publisher ns6:52,
            ns6:53 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            wd:Q937690 ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 rights holder" ;
        dcterms:source ns6:62,
            ns6:63 ;
        dcterms:spatial ns39:work2Location ;
        dcterms:subject ns6:82,
            ns6:83 ;
        dcterms:title "CmsCollection0CmsWork2" ;
        dcterms:type ns6:102,
            ns6:103 ;
        vra:culturalContext ns6:2,
            ns6:3 ;
        vra:material ns6:32,
            ns6:33 ;
        vra:technique ns6:92,
            ns6:93 ;
        cms:collection ns63:collection0 ;
        foaf:page <http://example.com/work/2> .

    _:N1f99ff4f47ad45e698a6341f517799e6 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork2 contributor 1" .

    _:N867c45c08a0c4af6a210d9975048b8f7 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork2 contributor 0" .

    _:N2df3481b40f84c039f27a227b89ad5fa a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns407:CmsImage1 {
    ns407:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:83 .
}

ns344:Thumbnail200x200 {
    ns344:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns197:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns39:work0 .

    ns197:CmsImage0 foaf:thumbnail ns344:Thumbnail200x200 .
}

ns234:Thumbnail800x800 {
    ns234:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns188:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:organization0 .

    ns188:CmsImage1 foaf:thumbnail ns234:Thumbnail800x800 .
}

_:N27f580313c484431b994332a613c56f8 {
    _:N27f580313c484431b994332a613c56f8 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N31a058f0d49a4562ab28ab004b2ed56f ;
        dcterms:title "CmsCollection0CmsWork1 closing" ;
        cms:work ns39:work1 .

    _:N31a058f0d49a4562ab28ab004b2ed56f a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

dcterms:type {
    dcterms:type a cms:Property ;
        rdfs:label "Type" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns383:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> .
}

ns396:CmsImage0 {
    ns396:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:organization3 .
}

ns401:Thumbnail200x200 {
    ns401:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns377:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:68 .

    ns377:CmsImage0 foaf:thumbnail ns401:Thumbnail200x200 .
}

ns361:CmsImage0 {
    ns361:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:55 .
}

ns59:Thumbnail600x600 {
    ns59:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns240:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:53 .

    ns240:CmsImage0 foaf:thumbnail ns59:Thumbnail600x600 .
}

ns146:Thumbnail600x600 {
    ns146:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns170:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:7 .

    ns170:CmsImage0 foaf:thumbnail ns146:Thumbnail600x600 .
}

ns377:CmsImage1 {
    ns377:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:68 .
}

ns45:Thumbnail600x600 {
    ns45:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns251:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:person1 .

    ns251:CmsImage0 foaf:thumbnail ns45:Thumbnail600x600 .
}

_:Na1ee881ea5d44119b5e1152847c04229 {
    _:Na1ee881ea5d44119b5e1152847c04229 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N170a65d3df104a499fc1466eabf59008 ;
        dcterms:spatial _:N5613a253c24849579f6acfef060b7014 ;
        dcterms:title "FreestandingWork8 closing" ;
        cms:work ns63:freestandingwork8 .

    _:N5613a253c24849579f6acfef060b7014 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N170a65d3df104a499fc1466eabf59008 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns74:Thumbnail200x200 {
    ns74:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns348:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:97 .

    ns348:CmsImage1 foaf:thumbnail ns74:Thumbnail200x200 .
}

ns401:Thumbnail800x800 {
    ns401:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns377:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:68 .

    ns377:CmsImage0 foaf:thumbnail ns401:Thumbnail800x800 .
}

ns403:CmsImage0 {
    ns403:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:99 .
}

ns167:CmsImage1 {
    ns167:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:32 .
}

ns1:Thumbnail400x400 {
    ns1:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns336:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:75 .

    ns336:CmsImage0 foaf:thumbnail ns1:Thumbnail400x400 .
}

ns266:Thumbnail400x400 {
    ns266:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns362:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns39:work1 .

    ns362:CmsImage0 foaf:thumbnail ns266:Thumbnail400x400 .
}

ns117:CmsImage0 {
    ns117:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:21 .
}

ns300:Thumbnail600x600 {
    ns300:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:102 .

    ns399:CmsImage0 foaf:thumbnail ns300:Thumbnail600x600 .
}

ns376:CmsImage1 {
    ns376:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:11 .
}

ns146:Thumbnail200x200 {
    ns146:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns170:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:7 .

    ns170:CmsImage0 foaf:thumbnail ns146:Thumbnail200x200 .
}

ns307:Thumbnail400x400 {
    ns307:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns167:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:32 .

    ns167:CmsImage0 foaf:thumbnail ns307:Thumbnail400x400 .
}

ns356:Thumbnail200x200 {
    ns356:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns317:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:89 .

    ns317:CmsImage1 foaf:thumbnail ns356:Thumbnail200x200 .
}

ns59:Thumbnail400x400 {
    ns59:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns240:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:53 .

    ns240:CmsImage0 foaf:thumbnail ns59:Thumbnail400x400 .
}

ns118:CmsImage0 {
    ns118:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:93 .
}

ns6:86 {
    ns6:86 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 6" ;
        skos:prefLabel "CmsConcept 86" .
}

ns359:Thumbnail600x600 {
    ns359:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns10:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:16 .

    ns10:CmsImage0 foaf:thumbnail ns359:Thumbnail600x600 .
}

ns369:Thumbnail600x600 {
    ns369:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns288:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:freestandingwork11 .

    ns288:CmsImage0 foaf:thumbnail ns369:Thumbnail600x600 .
}

ns181:Thumbnail800x800 {
    ns181:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns370:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:8 .

    ns370:CmsImage1 foaf:thumbnail ns181:Thumbnail800x800 .
}

ns310:Thumbnail400x400 {
    ns310:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns220:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:63 .

    ns220:CmsImage0 foaf:thumbnail ns310:Thumbnail400x400 .
}

ns251:CmsImage0 {
    ns251:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:person1 .
}

ns112:Thumbnail400x400 {
    ns112:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns285:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:90 .

    ns285:CmsImage1 foaf:thumbnail ns112:Thumbnail400x400 .
}

ns178:Thumbnail400x400 {
    ns178:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns163:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:104 .

    ns163:CmsImage1 foaf:thumbnail ns178:Thumbnail400x400 .
}

ns284:Thumbnail800x800 {
    ns284:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns346:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:organization1 .

    ns346:CmsImage0 foaf:thumbnail ns284:Thumbnail800x800 .
}

ns54:Thumbnail800x800 {
    ns54:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns238:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:67 .

    ns238:CmsImage0 foaf:thumbnail ns54:Thumbnail800x800 .
}

ns288:CmsImage1 {
    ns288:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:freestandingwork11 .
}

ns95:Thumbnail400x400 {
    ns95:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns34:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:84 .

    ns34:CmsImage0 foaf:thumbnail ns95:Thumbnail400x400 .
}

ns357:Thumbnail800x800 {
    ns357:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns240:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:53 .

    ns240:CmsImage1 foaf:thumbnail ns357:Thumbnail800x800 .
}

ns275:Thumbnail400x400 {
    ns275:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns287:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:46 .

    ns287:CmsImage0 foaf:thumbnail ns275:Thumbnail400x400 .
}

ns289:Thumbnail400x400 {
    ns289:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns191:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:4 .

    ns191:CmsImage0 foaf:thumbnail ns289:Thumbnail400x400 .
}

ns6:69 {
    ns6:69 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 9" ;
        skos:prefLabel "CmsConcept 69" .
}

ns398:CmsImage1 {
    ns398:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:92 .
}

ns105:Thumbnail600x600 {
    ns105:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns88:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:72 .

    ns88:CmsImage1 foaf:thumbnail ns105:Thumbnail600x600 .
}

ns320:Thumbnail600x600 {
    ns320:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns5:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:51 .

    ns5:CmsImage0 foaf:thumbnail ns320:Thumbnail600x600 .
}

ns386:Thumbnail600x600 {
    ns386:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns243:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:29 .

    ns243:CmsImage0 foaf:thumbnail ns386:Thumbnail600x600 .
}

ns6:46 {
    ns6:46 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 6" ;
        skos:prefLabel "CmsConcept 46" .
}

ns112:Thumbnail200x200 {
    ns112:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns285:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:90 .

    ns285:CmsImage1 foaf:thumbnail ns112:Thumbnail200x200 .
}

ns134:Thumbnail400x400 {
    ns134:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns170:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:7 .

    ns170:CmsImage1 foaf:thumbnail ns134:Thumbnail400x400 .
}

ns351:Thumbnail400x400 {
    ns351:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns9:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:26 .

    ns9:CmsImage0 foaf:thumbnail ns351:Thumbnail400x400 .
}

ns80:Thumbnail600x600 {
    ns80:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns136:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:41 .

    ns136:CmsImage1 foaf:thumbnail ns80:Thumbnail600x600 .
}

dcterms:title {
    dcterms:title a cms:Property ;
        rdfs:label "Title" ;
        cms:propertyFilterable false ;
        cms:propertyGroup ns383:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Title> .
}

ns105:Thumbnail200x200 {
    ns105:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns88:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:72 .

    ns88:CmsImage1 foaf:thumbnail ns105:Thumbnail200x200 .
}

ns176:Thumbnail800x800 {
    ns176:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns352:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:100 .

    ns352:CmsImage1 foaf:thumbnail ns176:Thumbnail800x800 .
}

ns58:Thumbnail400x400 {
    ns58:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns404:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:23 .

    ns404:CmsImage0 foaf:thumbnail ns58:Thumbnail400x400 .
}

ns400:CmsImage1 {
    ns400:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:88 .
}

ns6:61 {
    ns6:61 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 1" ;
        skos:prefLabel "CmsConcept 61" .
}

ns9:CmsImage1 {
    ns9:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:26 .
}

ns253:Thumbnail200x200 {
    ns253:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns368:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:80 .

    ns368:CmsImage1 foaf:thumbnail ns253:Thumbnail200x200 .
}

ns68:Thumbnail200x200 {
    ns68:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns198:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:34 .

    ns198:CmsImage1 foaf:thumbnail ns68:Thumbnail200x200 .
}

ns175:Thumbnail800x800 {
    ns175:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns290:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:47 .

    ns290:CmsImage1 foaf:thumbnail ns175:Thumbnail800x800 .
}

ns24:Thumbnail600x600 {
    ns24:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns252:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:2 .

    ns252:CmsImage1 foaf:thumbnail ns24:Thumbnail600x600 .
}

ns23:Thumbnail600x600 {
    ns23:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns149:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:74 .

    ns149:CmsImage1 foaf:thumbnail ns23:Thumbnail600x600 .
}

ns355:Thumbnail800x800 {
    ns355:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns76:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:103 .

    ns76:CmsImage1 foaf:thumbnail ns355:Thumbnail800x800 .
}

ns393:Thumbnail200x200 {
    ns393:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns291:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:collection1 .

    ns291:CmsImage1 foaf:thumbnail ns393:Thumbnail200x200 .
}

ns345:CmsImage1 {
    ns345:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:person0 .
}

ns256:CmsImage0 {
    ns256:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:65 .
}

ns37:Thumbnail600x600 {
    ns37:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns352:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:100 .

    ns352:CmsImage0 foaf:thumbnail ns37:Thumbnail600x600 .
}

ns6:44 {
    ns6:44 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 4" ;
        skos:prefLabel "CmsConcept 44" .
}

ns399:CmsImage0 {
    ns399:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:102 .
}

ns161:Thumbnail800x800 {
    ns161:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns36:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:person3 .

    ns36:CmsImage1 foaf:thumbnail ns161:Thumbnail800x800 .
}

ns407:CmsImage0 {
    ns407:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:83 .
}

ns69:Thumbnail400x400 {
    ns69:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns316:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:30 .

    ns316:CmsImage1 foaf:thumbnail ns69:Thumbnail400x400 .
}

ns195:CmsImage0 {
    ns195:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:82 .
}

ns267:Thumbnail800x800 {
    ns267:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns154:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:43 .

    ns154:CmsImage0 foaf:thumbnail ns267:Thumbnail800x800 .
}

ns231:Thumbnail200x200 {
    ns231:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns48:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:98 .

    ns48:CmsImage0 foaf:thumbnail ns231:Thumbnail200x200 .
}

ns121:Thumbnail600x600 {
    ns121:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns263:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:25 .

    ns263:CmsImage0 foaf:thumbnail ns121:Thumbnail600x600 .
}

ns402:Thumbnail800x800 {
    ns402:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns167:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:32 .

    ns167:CmsImage1 foaf:thumbnail ns402:Thumbnail800x800 .
}

ns335:Thumbnail800x800 {
    ns335:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns375:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:3 .

    ns375:CmsImage0 foaf:thumbnail ns335:Thumbnail800x800 .
}

ns196:Thumbnail200x200 {
    ns196:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns375:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:3 .

    ns375:CmsImage1 foaf:thumbnail ns196:Thumbnail200x200 .
}

ns6:12 {
    ns6:12 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 2" ;
        skos:prefLabel "CmsConcept 12" .
}

ns316:CmsImage0 {
    ns316:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:30 .
}

ns372:Thumbnail800x800 {
    ns372:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns135:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:31 .

    ns135:CmsImage0 foaf:thumbnail ns372:Thumbnail800x800 .
}

ns404:CmsImage0 {
    ns404:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:23 .
}

ns177:Thumbnail800x800 {
    ns177:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns108:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:71 .

    ns108:CmsImage1 foaf:thumbnail ns177:Thumbnail800x800 .
}

ns49:Thumbnail200x200 {
    ns49:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns287:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:46 .

    ns287:CmsImage1 foaf:thumbnail ns49:Thumbnail200x200 .
}

ns247:Thumbnail800x800 {
    ns247:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns156:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:59 .

    ns156:CmsImage1 foaf:thumbnail ns247:Thumbnail800x800 .
}

ns135:CmsImage1 {
    ns135:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:31 .
}

ns221:Thumbnail800x800 {
    ns221:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns389:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:17 .

    ns389:CmsImage0 foaf:thumbnail ns221:Thumbnail800x800 .
}

ns387:Thumbnail200x200 {
    ns387:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns28:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:14 .

    ns28:CmsImage0 foaf:thumbnail ns387:Thumbnail200x200 .
}

ns86:Thumbnail600x600 {
    ns86:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns292:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:77 .

    ns292:CmsImage0 foaf:thumbnail ns86:Thumbnail600x600 .
}

ns258:Thumbnail400x400 {
    ns258:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns404:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:23 .

    ns404:CmsImage1 foaf:thumbnail ns258:Thumbnail400x400 .
}

ns265:Thumbnail200x200 {
    ns265:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:organization3 .

    ns396:CmsImage1 foaf:thumbnail ns265:Thumbnail200x200 .
}

ns51:Thumbnail200x200 {
    ns51:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns32:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:22 .

    ns32:CmsImage1 foaf:thumbnail ns51:Thumbnail200x200 .
}

ns246:Thumbnail200x200 {
    ns246:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns324:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:56 .

    ns324:CmsImage1 foaf:thumbnail ns246:Thumbnail200x200 .
}

ns165:Thumbnail600x600 {
    ns165:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns291:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns63:collection1 .

    ns291:CmsImage0 foaf:thumbnail ns165:Thumbnail600x600 .
}

ns358:Thumbnail800x800 {
    ns358:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns257:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns63:person2 .

    ns257:CmsImage1 foaf:thumbnail ns358:Thumbnail800x800 .
}

ns248:Thumbnail400x400 {
    ns248:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns36:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns63:person3 .

    ns36:CmsImage0 foaf:thumbnail ns248:Thumbnail400x400 .
}

ns53:Thumbnail800x800 {
    ns53:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns374:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:9 .

    ns374:CmsImage1 foaf:thumbnail ns53:Thumbnail800x800 .
}

ns367:Thumbnail600x600 {
    ns367:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns313:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:107 .

    ns313:CmsImage1 foaf:thumbnail ns367:Thumbnail600x600 .
}

ns279:Thumbnail600x600 {
    ns279:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns233:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns39:work3 .

    ns233:CmsImage1 foaf:thumbnail ns279:Thumbnail600x600 .
}

ns152:Thumbnail200x200 {
    ns152:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns191:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns6:4 .

    ns191:CmsImage1 foaf:thumbnail ns152:Thumbnail200x200 .
}

ns154:CmsImage1 {
    ns154:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:43 .
}

ns16:Thumbnail600x600 {
    ns16:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns84:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns6:58 .

    ns84:CmsImage1 foaf:thumbnail ns16:Thumbnail600x600 .
}

ns236:Thumbnail400x400 {
    ns236:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns198:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:34 .

    ns198:CmsImage0 foaf:thumbnail ns236:Thumbnail400x400 .
}

ns39:work2Creation {
    ns39:work2Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns63:organization4,
            ns63:person0 ;
        dcterms:date _:N51c6688af3114bf4a1e2c0cfa23bc29a ;
        dcterms:description _:N2df3481b40f84c039f27a227b89ad5fa ;
        dcterms:spatial ns39:work2Location ;
        dcterms:title "CmsCollection0CmsWork2 creation" ;
        cms:work ns39:work2 .

    _:N51c6688af3114bf4a1e2c0cfa23bc29a a cms:DateTimeDescription ;
        time:day "---30"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:N2df3481b40f84c039f27a227b89ad5fa a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns305:CmsImage1 {
    ns305:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:60 .
}

ns331:Thumbnail400x400 {
    ns331:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:99 .

    ns403:CmsImage0 foaf:thumbnail ns331:Thumbnail400x400 .
}

ns349:Thumbnail200x200 {
    ns349:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns63:organization3 .

    ns396:CmsImage0 foaf:thumbnail ns349:Thumbnail200x200 .
}

ns405:CmsImage0 {
    ns405:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:20 .
}

ns291:CmsImage1 {
    ns291:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns63:collection1 .
}

ns12:Thumbnail400x400 {
    ns12:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns342:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:24 .

    ns342:CmsImage0 foaf:thumbnail ns12:Thumbnail400x400 .
}

ns356:Thumbnail800x800 {
    ns356:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns317:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:89 .

    ns317:CmsImage1 foaf:thumbnail ns356:Thumbnail800x800 .
}

ns402:Thumbnail400x400 {
    ns402:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns167:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns6:32 .

    ns167:CmsImage1 foaf:thumbnail ns402:Thumbnail400x400 .
}

ns95:Thumbnail800x800 {
    ns95:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns34:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:84 .

    ns34:CmsImage0 foaf:thumbnail ns95:Thumbnail800x800 .
}

ns388:CmsImage1 {
    ns388:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns6:106 .
}

ns98:Thumbnail800x800 {
    ns98:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns391:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns6:62 .

    ns391:CmsImage1 foaf:thumbnail ns98:Thumbnail800x800 .
}
`);
