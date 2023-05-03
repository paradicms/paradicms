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
@prefix ns1: <urn:paradicms_etl:pipeline:synthetic_data:concept:92:CmsImage0:> .
@prefix ns10: <urn:paradicms_etl:pipeline:synthetic_data:concept:36:CmsImage1:> .
@prefix ns100: <urn:paradicms_etl:pipeline:synthetic_data:concept:62:CmsImage0:> .
@prefix ns101: <urn:paradicms_etl:pipeline:synthetic_data:concept:99:> .
@prefix ns102: <http://example.com/person4:> .
@prefix ns103: <urn:paradicms_etl:pipeline:synthetic_data:concept:104:CmsImage0:> .
@prefix ns104: <urn:paradicms_etl:pipeline:synthetic_data:concept:25:CmsImage0:> .
@prefix ns105: <urn:paradicms_etl:pipeline:synthetic_data:concept:98:CmsImage0:> .
@prefix ns106: <http://example.com/collection1/work6:> .
@prefix ns107: <urn:paradicms_etl:pipeline:synthetic_data:concept:41:CmsImage1:> .
@prefix ns108: <urn:paradicms_etl:pipeline:synthetic_data:concept:91:> .
@prefix ns109: <urn:paradicms_etl:pipeline:synthetic_data:concept:6:CmsImage0:> .
@prefix ns11: <urn:paradicms_etl:pipeline:synthetic_data:concept:63:CmsImage1:> .
@prefix ns110: <http://example.com/person0:CmsImage1:> .
@prefix ns111: <urn:paradicms_etl:pipeline:synthetic_data:concept:106:CmsImage1:> .
@prefix ns112: <urn:paradicms_etl:pipeline:synthetic_data:concept:12:CmsImage0:> .
@prefix ns113: <urn:paradicms_etl:pipeline:synthetic_data:concept:100:CmsImage0:> .
@prefix ns114: <urn:paradicms_etl:pipeline:synthetic_data:concept:80:> .
@prefix ns115: <urn:paradicms_etl:pipeline:synthetic_data:concept:49:CmsImage0:> .
@prefix ns116: <urn:paradicms_etl:pipeline:synthetic_data:concept:86:CmsImage0:> .
@prefix ns117: <urn:paradicms_etl:pipeline:synthetic_data:concept:97:CmsImage1:> .
@prefix ns118: <urn:paradicms_etl:pipeline:synthetic_data:concept:77:CmsImage0:> .
@prefix ns119: <urn:paradicms_etl:pipeline:synthetic_data:concept:58:CmsImage1:> .
@prefix ns12: <urn:paradicms_etl:pipeline:synthetic_data:concept:106:> .
@prefix ns120: <urn:paradicms_etl:pipeline:synthetic_data:concept:94:CmsImage1:> .
@prefix ns121: <urn:paradicms_etl:pipeline:synthetic_data:concept:60:CmsImage1:> .
@prefix ns122: <urn:paradicms_etl:pipeline:synthetic_data:concept:84:CmsImage0:> .
@prefix ns123: <urn:paradicms_etl:pipeline:synthetic_data:concept:99:CmsImage0:> .
@prefix ns124: <urn:paradicms_etl:pipeline:synthetic_data:concept:93:CmsImage1:> .
@prefix ns125: <urn:paradicms_etl:pipeline:synthetic_data:concept:32:CmsImage1:> .
@prefix ns126: <urn:paradicms_etl:pipeline:synthetic_data:concept:2:CmsImage1:> .
@prefix ns127: <http://example.com/collection1/work5:CmsImage1:> .
@prefix ns128: <urn:paradicms_etl:pipeline:synthetic_data:concept:23:CmsImage0:> .
@prefix ns129: <urn:paradicms_etl:pipeline:synthetic_data:concept:88:CmsImage0:> .
@prefix ns13: <urn:paradicms_etl:pipeline:synthetic_data:concept:61:CmsImage1:> .
@prefix ns130: <urn:paradicms_etl:pipeline:synthetic_data:concept:33:> .
@prefix ns131: <urn:paradicms_etl:pipeline:synthetic_data:concept:33:CmsImage1:> .
@prefix ns132: <urn:paradicms_etl:pipeline:synthetic_data:concept:17:CmsImage0:> .
@prefix ns133: <urn:paradicms_etl:pipeline:synthetic_data:concept:72:CmsImage1:> .
@prefix ns134: <urn:paradicms_etl:pipeline:synthetic_data:concept:46:CmsImage0:> .
@prefix ns135: <urn:paradicms_etl:pipeline:synthetic_data:concept:95:CmsImage0:> .
@prefix ns136: <urn:paradicms_etl:pipeline:synthetic_data:concept:93:CmsImage0:> .
@prefix ns137: <urn:paradicms_etl:pipeline:synthetic_data:concept:94:> .
@prefix ns138: <urn:paradicms_etl:pipeline:synthetic_data:concept:14:CmsImage1:> .
@prefix ns139: <urn:paradicms_etl:pipeline:synthetic_data:concept:34:CmsImage1:> .
@prefix ns14: <urn:paradicms_etl:pipeline:synthetic_data:concept:101:CmsImage1:> .
@prefix ns140: <urn:paradicms_etl:pipeline:synthetic_data:concept:49:CmsImage1:> .
@prefix ns141: <urn:paradicms_etl:pipeline:synthetic_data:concept:60:CmsImage0:> .
@prefix ns142: <urn:paradicms_etl:pipeline:synthetic_data:concept:87:CmsImage0:> .
@prefix ns143: <urn:paradicms_etl:pipeline:synthetic_data:concept:35:CmsImage1:> .
@prefix ns144: <urn:paradicms_etl:pipeline:synthetic_data:concept:26:CmsImage1:> .
@prefix ns145: <urn:paradicms_etl:pipeline:synthetic_data:concept:59:CmsImage0:> .
@prefix ns146: <urn:paradicms_etl:pipeline:synthetic_data:concept:30:> .
@prefix ns147: <urn:paradicms_etl:pipeline:synthetic_data:concept:95:CmsImage1:> .
@prefix ns148: <urn:paradicms_etl:pipeline:synthetic_data:concept:38:CmsImage1:> .
@prefix ns149: <urn:paradicms_etl:pipeline:synthetic_data:concept:5:CmsImage0:> .
@prefix ns15: <urn:paradicms_etl:pipeline:synthetic_data:concept:16:CmsImage1:> .
@prefix ns150: <urn:paradicms_etl:pipeline:synthetic_data:concept:101:CmsImage0:> .
@prefix ns151: <urn:paradicms_etl:pipeline:synthetic_data:concept:97:CmsImage0:> .
@prefix ns152: <urn:paradicms_etl:pipeline:synthetic_data:concept:19:CmsImage0:> .
@prefix ns153: <urn:paradicms_etl:pipeline:synthetic_data:concept:109:CmsImage1:> .
@prefix ns154: <urn:paradicms_etl:pipeline:synthetic_data:concept:1:CmsImage1:> .
@prefix ns155: <urn:paradicms_etl:pipeline:synthetic_data:concept:86:> .
@prefix ns156: <http://example.com/freestandingwork8:> .
@prefix ns157: <http://example.com/organization1:> .
@prefix ns158: <urn:paradicms_etl:pipeline:synthetic_data:concept:29:> .
@prefix ns159: <http://example.com/collection1/work4:CmsImage1:> .
@prefix ns16: <urn:paradicms_etl:pipeline:synthetic_data:concept:67:CmsImage1:> .
@prefix ns160: <http://example.com/organization0:CmsImage0:> .
@prefix ns161: <urn:paradicms_etl:pipeline:synthetic_data:concept:75:CmsImage1:> .
@prefix ns162: <urn:paradicms_etl:pipeline:synthetic_data:concept:99:CmsImage1:> .
@prefix ns163: <urn:paradicms_etl:pipeline:synthetic_data:concept:91:CmsImage0:> .
@prefix ns164: <urn:paradicms_etl:pipeline:synthetic_data:concept:2:> .
@prefix ns165: <urn:paradicms_etl:pipeline:synthetic_data:concept:27:CmsImage0:> .
@prefix ns166: <urn:paradicms_etl:pipeline:synthetic_data:concept:22:CmsImage1:> .
@prefix ns167: <http://example.com/person3:CmsImage1:> .
@prefix ns168: <urn:paradicms_etl:pipeline:synthetic_data:concept:104:CmsImage1:> .
@prefix ns169: <urn:paradicms_etl:pipeline:synthetic_data:concept:50:CmsImage0:> .
@prefix ns17: <http://example.com/collection0/> .
@prefix ns170: <urn:paradicms_etl:pipeline:synthetic_data:concept:66:CmsImage0:> .
@prefix ns171: <urn:paradicms_etl:pipeline:synthetic_data:concept:83:CmsImage1:> .
@prefix ns172: <urn:paradicms_etl:pipeline:synthetic_data:concept:72:CmsImage0:> .
@prefix ns173: <http://example.com/collection1/work7:CmsImage0:> .
@prefix ns174: <http://example.com/freestandingwork8:CmsImage0:> .
@prefix ns175: <http://example.com/organization4:CmsImage1:> .
@prefix ns176: <urn:paradicms_etl:pipeline:synthetic_data:concept:0:CmsImage1:> .
@prefix ns177: <urn:paradicms_etl:pipeline:synthetic_data:concept:84:CmsImage1:> .
@prefix ns178: <urn:paradicms_etl:pipeline:synthetic_data:concept:43:CmsImage0:> .
@prefix ns179: <urn:paradicms_etl:pipeline:synthetic_data:concept:0:CmsImage0:> .
@prefix ns18: <urn:paradicms_etl:pipeline:synthetic_data:concept:66:CmsImage1:> .
@prefix ns180: <urn:paradicms_etl:pipeline:synthetic_data:concept:88:CmsImage1:> .
@prefix ns181: <urn:paradicms_etl:pipeline:synthetic_data:concept:37:CmsImage1:> .
@prefix ns182: <urn:paradicms_etl:pipeline:synthetic_data:concept:73:CmsImage0:> .
@prefix ns183: <urn:paradicms_etl:pipeline:synthetic_data:concept:11:CmsImage0:> .
@prefix ns184: <urn:paradicms_etl:pipeline:synthetic_data:concept:31:CmsImage0:> .
@prefix ns185: <urn:paradicms_etl:pipeline:synthetic_data:concept:42:CmsImage1:> .
@prefix ns186: <urn:paradicms_etl:pipeline:synthetic_data:concept:109:> .
@prefix ns187: <http://example.com/collection0/work0:CmsImage1:> .
@prefix ns188: <urn:paradicms_etl:pipeline:synthetic_data:concept:45:CmsImage0:> .
@prefix ns189: <urn:paradicms_etl:pipeline:synthetic_data:concept:24:> .
@prefix ns19: <urn:paradicms_etl:pipeline:synthetic_data:concept:82:CmsImage1:> .
@prefix ns190: <urn:paradicms_etl:pipeline:synthetic_data:concept:85:CmsImage1:> .
@prefix ns191: <urn:paradicms_etl:pipeline:synthetic_data:concept:14:> .
@prefix ns192: <http://example.com/collection0/work2:CmsImage1:> .
@prefix ns193: <urn:paradicms_etl:pipeline:synthetic_data:concept:100:> .
@prefix ns194: <urn:paradicms_etl:pipeline:synthetic_data:concept:95:> .
@prefix ns195: <urn:paradicms_etl:pipeline:synthetic_data:concept:13:CmsImage0:> .
@prefix ns196: <urn:paradicms_etl:pipeline:synthetic_data:concept:17:CmsImage1:> .
@prefix ns197: <urn:paradicms_etl:pipeline:synthetic_data:concept:19:CmsImage1:> .
@prefix ns198: <urn:paradicms_etl:pipeline:synthetic_data:concept:39:CmsImage1:> .
@prefix ns199: <http://example.com/person2:CmsImage1:> .
@prefix ns2: <urn:paradicms_etl:pipeline:synthetic_data:concept:69:> .
@prefix ns20: <http://example.com/organization2:CmsImage0:> .
@prefix ns200: <urn:paradicms_etl:pipeline:synthetic_data:concept:7:CmsImage0:> .
@prefix ns201: <urn:paradicms_etl:pipeline:synthetic_data:concept:64:CmsImage0:> .
@prefix ns202: <http://example.com/collection0/work3:CmsImage1:> .
@prefix ns203: <urn:paradicms_etl:pipeline:synthetic_data:concept:30:CmsImage1:> .
@prefix ns204: <urn:paradicms_etl:pipeline:synthetic_data:concept:48:CmsImage1:> .
@prefix ns205: <urn:paradicms_etl:pipeline:synthetic_data:concept:4:> .
@prefix ns206: <urn:paradicms_etl:pipeline:synthetic_data:concept:98:> .
@prefix ns207: <urn:paradicms_etl:pipeline:synthetic_data:concept:76:> .
@prefix ns208: <urn:paradicms_etl:pipeline:synthetic_data:concept:56:CmsImage1:> .
@prefix ns209: <urn:paradicms_etl:pipeline:synthetic_data:concept:69:CmsImage0:> .
@prefix ns21: <http://example.com/collection1/> .
@prefix ns210: <urn:paradicms_etl:pipeline:synthetic_data:concept:71:> .
@prefix ns211: <urn:paradicms_etl:pipeline:synthetic_data:concept:96:CmsImage0:> .
@prefix ns212: <urn:paradicms_etl:pipeline:synthetic_data:concept:71:CmsImage1:> .
@prefix ns213: <urn:paradicms_etl:pipeline:synthetic_data:concept:79:CmsImage1:> .
@prefix ns214: <urn:paradicms_etl:pipeline:synthetic_data:concept:24:CmsImage1:> .
@prefix ns215: <urn:paradicms_etl:pipeline:synthetic_data:concept:63:> .
@prefix ns216: <http://example.com/person1:CmsImage1:> .
@prefix ns217: <urn:paradicms_etl:pipeline:synthetic_data:concept:1:CmsImage0:> .
@prefix ns218: <urn:paradicms_etl:pipeline:synthetic_data:concept:45:CmsImage1:> .
@prefix ns219: <urn:paradicms_etl:pipeline:synthetic_data:concept:90:> .
@prefix ns22: <urn:paradicms_etl:pipeline:synthetic_data:concept:21:CmsImage1:> .
@prefix ns220: <urn:paradicms_etl:pipeline:synthetic_data:concept:27:CmsImage1:> .
@prefix ns221: <urn:paradicms_etl:pipeline:synthetic_data:concept:78:> .
@prefix ns222: <urn:paradicms_etl:pipeline:synthetic_data:concept:61:CmsImage0:> .
@prefix ns223: <urn:paradicms_etl:pipeline:synthetic_data:concept:47:CmsImage1:> .
@prefix ns224: <urn:paradicms_etl:pipeline:synthetic_data:concept:78:CmsImage0:> .
@prefix ns225: <urn:paradicms_etl:pipeline:synthetic_data:concept:97:> .
@prefix ns226: <urn:paradicms_etl:pipeline:synthetic_data:concept:26:CmsImage0:> .
@prefix ns227: <urn:paradicms_etl:pipeline:synthetic_data:concept:13:CmsImage1:> .
@prefix ns228: <urn:paradicms_etl:pipeline:synthetic_data:concept:102:CmsImage1:> .
@prefix ns229: <urn:paradicms_etl:pipeline:synthetic_data:concept:80:CmsImage0:> .
@prefix ns23: <urn:paradicms_etl:pipeline:synthetic_data:concept:15:CmsImage1:> .
@prefix ns230: <urn:paradicms_etl:pipeline:synthetic_data:concept:57:CmsImage1:> .
@prefix ns231: <urn:paradicms_etl:pipeline:synthetic_data:concept:75:> .
@prefix ns232: <urn:paradicms_etl:pipeline:synthetic_data:concept:91:CmsImage1:> .
@prefix ns233: <urn:paradicms_etl:pipeline:synthetic_data:concept:89:CmsImage0:> .
@prefix ns234: <urn:paradicms_etl:pipeline:synthetic_data:concept:90:CmsImage1:> .
@prefix ns235: <urn:paradicms_etl:pipeline:synthetic_data:concept:39:CmsImage0:> .
@prefix ns236: <http://example.com/collection1/work4:CmsImage0:> .
@prefix ns237: <http://example.com/organization0:> .
@prefix ns238: <urn:paradicms_etl:pipeline:synthetic_data:concept:9:> .
@prefix ns239: <urn:paradicms_etl:pipeline:synthetic_data:concept:108:CmsImage1:> .
@prefix ns24: <urn:paradicms_etl:pipeline:synthetic_data:concept:7:CmsImage1:> .
@prefix ns240: <urn:paradicms_etl:pipeline:synthetic_data:concept:31:CmsImage1:> .
@prefix ns241: <urn:paradicms_etl:pipeline:synthetic_data:concept:74:CmsImage0:> .
@prefix ns242: <urn:paradicms_etl:pipeline:synthetic_data:concept:83:CmsImage0:> .
@prefix ns243: <urn:paradicms_etl:pipeline:synthetic_data:concept:6:CmsImage1:> .
@prefix ns244: <urn:paradicms_etl:pipeline:synthetic_data:concept:51:CmsImage0:> .
@prefix ns245: <urn:paradicms_etl:pipeline:synthetic_data:concept:81:> .
@prefix ns246: <http://example.com/collection1/work5:CmsImage0:> .
@prefix ns247: <http://example.com/collection0/work1:CmsImage0:> .
@prefix ns248: <urn:paradicms_etl:pipeline:synthetic_data:concept:104:> .
@prefix ns249: <urn:paradicms_etl:pipeline:synthetic_data:concept:79:CmsImage0:> .
@prefix ns25: <urn:paradicms_etl:pipeline:synthetic_data:concept:98:CmsImage1:> .
@prefix ns250: <urn:paradicms_etl:pipeline:synthetic_data:concept:34:CmsImage0:> .
@prefix ns251: <urn:paradicms_etl:pipeline:synthetic_data:concept:52:> .
@prefix ns252: <urn:paradicms_etl:pipeline:synthetic_data:concept:73:> .
@prefix ns253: <urn:paradicms_etl:pipeline:synthetic_data:concept:89:CmsImage1:> .
@prefix ns254: <urn:paradicms_etl:pipeline:synthetic_data:concept:19:> .
@prefix ns255: <urn:paradicms_etl:pipeline:synthetic_data:concept:40:CmsImage1:> .
@prefix ns256: <urn:paradicms_etl:pipeline:synthetic_data:concept:96:CmsImage1:> .
@prefix ns257: <urn:paradicms_etl:pipeline:synthetic_data:concept:7:> .
@prefix ns258: <urn:paradicms_etl:pipeline:synthetic_data:concept:103:CmsImage0:> .
@prefix ns259: <http://example.com/freestandingwork8:CmsImage1:> .
@prefix ns26: <urn:paradicms_etl:pipeline:synthetic_data:concept:83:> .
@prefix ns260: <urn:paradicms_etl:pipeline:synthetic_data:concept:78:CmsImage1:> .
@prefix ns261: <urn:paradicms_etl:pipeline:synthetic_data:concept:85:> .
@prefix ns262: <urn:paradicms_etl:pipeline:synthetic_data:concept:30:CmsImage0:> .
@prefix ns263: <urn:paradicms_etl:pipeline:synthetic_data:> .
@prefix ns264: <urn:paradicms_etl:pipeline:synthetic_data:concept:20:CmsImage1:> .
@prefix ns265: <urn:paradicms_etl:pipeline:synthetic_data:concept:54:CmsImage1:> .
@prefix ns266: <http://example.com/collection1/work7:> .
@prefix ns267: <urn:paradicms_etl:pipeline:synthetic_data:concept:51:CmsImage1:> .
@prefix ns268: <urn:paradicms_etl:pipeline:synthetic_data:concept:20:> .
@prefix ns269: <urn:paradicms_etl:pipeline:synthetic_data:concept:22:CmsImage0:> .
@prefix ns27: <urn:paradicms_etl:pipeline:synthetic_data:concept:37:> .
@prefix ns270: <http://example.com/collection0/work2:> .
@prefix ns271: <urn:paradicms_etl:pipeline:synthetic_data:concept:68:CmsImage0:> .
@prefix ns272: <urn:paradicms_etl:pipeline:synthetic_data:concept:29:CmsImage1:> .
@prefix ns273: <http://example.com/collection0/work2:CmsImage0:> .
@prefix ns274: <urn:paradicms_etl:pipeline:synthetic_data:concept:102:> .
@prefix ns275: <urn:paradicms_etl:pipeline:synthetic_data:concept:48:CmsImage0:> .
@prefix ns276: <urn:paradicms_etl:pipeline:synthetic_data:concept:16:> .
@prefix ns277: <urn:paradicms_etl:pipeline:synthetic_data:concept:44:> .
@prefix ns278: <urn:paradicms_etl:pipeline:synthetic_data:concept:86:CmsImage1:> .
@prefix ns279: <urn:paradicms_etl:pipeline:synthetic_data:concept:56:> .
@prefix ns28: <http://example.com/collection1/work6:CmsImage0:> .
@prefix ns280: <urn:paradicms_etl:pipeline:synthetic_data:concept:58:CmsImage0:> .
@prefix ns281: <urn:paradicms_etl:pipeline:synthetic_data:concept:65:CmsImage0:> .
@prefix ns282: <urn:paradicms_etl:pipeline:synthetic_data:concept:62:CmsImage1:> .
@prefix ns283: <urn:paradicms_etl:pipeline:synthetic_data:concept:80:CmsImage1:> .
@prefix ns284: <urn:paradicms_etl:pipeline:synthetic_data:concept:67:> .
@prefix ns285: <urn:paradicms_etl:pipeline:synthetic_data:concept:35:> .
@prefix ns286: <urn:paradicms_etl:pipeline:synthetic_data:concept:63:CmsImage0:> .
@prefix ns287: <urn:paradicms_etl:pipeline:synthetic_data:concept:81:CmsImage1:> .
@prefix ns288: <urn:paradicms_etl:pipeline:synthetic_data:concept:103:CmsImage1:> .
@prefix ns289: <urn:paradicms_etl:pipeline:synthetic_data:concept:105:CmsImage0:> .
@prefix ns29: <urn:paradicms_etl:pipeline:synthetic_data:concept:15:> .
@prefix ns290: <http://example.com/organization1:CmsImage1:> .
@prefix ns291: <urn:paradicms_etl:pipeline:synthetic_data:concept:50:CmsImage1:> .
@prefix ns292: <urn:paradicms_etl:pipeline:synthetic_data:concept:32:> .
@prefix ns293: <urn:paradicms_etl:pipeline:synthetic_data:concept:29:CmsImage0:> .
@prefix ns294: <urn:paradicms_etl:pipeline:synthetic_data:concept:12:CmsImage1:> .
@prefix ns295: <urn:paradicms_etl:pipeline:synthetic_data:concept:92:> .
@prefix ns296: <urn:paradicms_etl:pipeline:synthetic_data:concept:67:CmsImage0:> .
@prefix ns297: <urn:paradicms_etl:pipeline:synthetic_data:concept:70:CmsImage0:> .
@prefix ns298: <urn:paradicms_etl:pipeline:synthetic_data:concept:3:> .
@prefix ns299: <urn:paradicms_etl:pipeline:synthetic_data:concept:82:CmsImage0:> .
@prefix ns3: <http://example.com/freestandingwork11:CmsImage0:> .
@prefix ns30: <urn:paradicms_etl:pipeline:synthetic_data:concept:76:CmsImage0:> .
@prefix ns300: <urn:paradicms_etl:pipeline:synthetic_data:concept:40:> .
@prefix ns301: <urn:paradicms_etl:pipeline:synthetic_data:concept:68:CmsImage1:> .
@prefix ns302: <urn:paradicms_etl:pipeline:synthetic_data:concept:17:> .
@prefix ns303: <urn:paradicms_etl:pipeline:synthetic_data:concept:55:CmsImage1:> .
@prefix ns304: <http://example.com/organization2:CmsImage1:> .
@prefix ns305: <urn:paradicms_etl:pipeline:synthetic_data:concept:47:> .
@prefix ns306: <urn:paradicms_etl:pipeline:synthetic_data:concept:52:CmsImage1:> .
@prefix ns307: <urn:paradicms_etl:pipeline:synthetic_data:concept:18:> .
@prefix ns308: <urn:paradicms_etl:pipeline:synthetic_data:concept:54:> .
@prefix ns309: <urn:paradicms_etl:pipeline:synthetic_data:concept:103:> .
@prefix ns31: <http://example.com/freestandingwork10:CmsImage1:> .
@prefix ns310: <http://example.com/collection1/work7:CmsImage1:> .
@prefix ns311: <urn:paradicms_etl:pipeline:synthetic_data:concept:53:CmsImage1:> .
@prefix ns312: <urn:paradicms_etl:pipeline:synthetic_data:concept:60:> .
@prefix ns313: <http://example.com/person3:> .
@prefix ns314: <urn:paradicms_etl:pipeline:synthetic_data:concept:8:> .
@prefix ns315: <urn:paradicms_etl:pipeline:synthetic_data:concept:33:CmsImage0:> .
@prefix ns316: <urn:paradicms_etl:pipeline:synthetic_data:concept:50:> .
@prefix ns317: <urn:paradicms_etl:pipeline:synthetic_data:concept:94:CmsImage0:> .
@prefix ns318: <urn:paradicms_etl:pipeline:synthetic_data:concept:31:> .
@prefix ns319: <urn:paradicms_etl:pipeline:synthetic_data:concept:4:CmsImage0:> .
@prefix ns32: <urn:paradicms_etl:pipeline:synthetic_data:concept:55:CmsImage0:> .
@prefix ns320: <urn:paradicms_etl:pipeline:synthetic_data:concept:107:CmsImage0:> .
@prefix ns321: <urn:paradicms_etl:pipeline:synthetic_data:concept:77:CmsImage1:> .
@prefix ns322: <urn:paradicms_etl:pipeline:synthetic_data:concept:9:CmsImage0:> .
@prefix ns323: <http://example.com/freestandingwork9:> .
@prefix ns324: <urn:paradicms_etl:pipeline:synthetic_data:concept:105:> .
@prefix ns325: <http://example.com/collection1:> .
@prefix ns326: <urn:paradicms_etl:pipeline:synthetic_data:concept:58:> .
@prefix ns327: <urn:paradicms_etl:pipeline:synthetic_data:concept:62:> .
@prefix ns328: <urn:paradicms_etl:pipeline:synthetic_data:concept:11:> .
@prefix ns329: <http://example.com/organization2:> .
@prefix ns33: <urn:paradicms_etl:pipeline:synthetic_data:concept:106:CmsImage0:> .
@prefix ns330: <http://example.com/freestandingwork11:CmsImage1:> .
@prefix ns331: <urn:paradicms_etl:pipeline:synthetic_data:concept:9:CmsImage1:> .
@prefix ns332: <http://example.com/person1:> .
@prefix ns333: <urn:paradicms_etl:pipeline:synthetic_data:concept:87:CmsImage1:> .
@prefix ns334: <urn:paradicms_etl:pipeline:synthetic_data:concept:108:> .
@prefix ns335: <urn:paradicms_etl:pipeline:synthetic_data:concept:36:> .
@prefix ns336: <urn:paradicms_etl:pipeline:synthetic_data:concept:8:CmsImage0:> .
@prefix ns337: <urn:paradicms_etl:pipeline:synthetic_data:concept:22:> .
@prefix ns338: <urn:paradicms_etl:pipeline:synthetic_data:concept:87:> .
@prefix ns339: <urn:paradicms_etl:pipeline:synthetic_data:concept:65:> .
@prefix ns34: <urn:paradicms_etl:pipeline:synthetic_data:concept:72:> .
@prefix ns340: <http://example.com/person0:CmsImage0:> .
@prefix ns341: <urn:paradicms_etl:pipeline:synthetic_data:concept:61:> .
@prefix ns342: <urn:paradicms_etl:pipeline:synthetic_data:concept:45:> .
@prefix ns343: <http://example.com/collection0/work3:CmsImage0:> .
@prefix ns344: <urn:paradicms_etl:pipeline:synthetic_data:concept:64:CmsImage1:> .
@prefix ns345: <urn:paradicms_etl:pipeline:synthetic_data:concept:37:CmsImage0:> .
@prefix ns346: <urn:paradicms_etl:pipeline:synthetic_data:concept:2:CmsImage0:> .
@prefix ns347: <http://example.com/collection0/work1:CmsImage1:> .
@prefix ns348: <urn:paradicms_etl:pipeline:synthetic_data:concept:51:> .
@prefix ns349: <http://example.com/collection0/work0:CmsImage0:> .
@prefix ns35: <urn:paradicms_etl:pipeline:synthetic_data:concept:66:> .
@prefix ns350: <http://example.com/organization4:> .
@prefix ns351: <urn:paradicms_etl:pipeline:synthetic_data:concept:59:> .
@prefix ns352: <urn:paradicms_etl:pipeline:synthetic_data:concept:73:CmsImage1:> .
@prefix ns353: <urn:paradicms_etl:pipeline:synthetic_data:concept:90:CmsImage0:> .
@prefix ns354: <urn:paradicms_etl:pipeline:synthetic_data:concept:84:> .
@prefix ns355: <urn:paradicms_etl:pipeline:synthetic_data:concept:5:> .
@prefix ns356: <urn:paradicms_etl:pipeline:synthetic_data:concept:46:> .
@prefix ns357: <urn:paradicms_etl:pipeline:synthetic_data:concept:74:CmsImage1:> .
@prefix ns358: <urn:paradicms_etl:pipeline:synthetic_data:concept:24:CmsImage0:> .
@prefix ns359: <urn:paradicms_etl:pipeline:synthetic_data:concept:43:> .
@prefix ns36: <urn:paradicms_etl:pipeline:synthetic_data:concept:41:CmsImage0:> .
@prefix ns360: <http://example.com/organization0:CmsImage1:> .
@prefix ns361: <http://example.com/collection1/work6:CmsImage1:> .
@prefix ns362: <urn:paradicms_etl:pipeline:synthetic_data:concept:48:> .
@prefix ns363: <urn:paradicms_etl:pipeline:synthetic_data:concept:55:> .
@prefix ns364: <urn:paradicms_etl:pipeline:synthetic_data:concept:53:CmsImage0:> .
@prefix ns365: <urn:paradicms_etl:pipeline:synthetic_data:concept:77:> .
@prefix ns366: <urn:paradicms_etl:pipeline:synthetic_data:concept:28:CmsImage1:> .
@prefix ns367: <urn:paradicms_etl:pipeline:synthetic_data:concept:27:> .
@prefix ns368: <urn:paradicms_etl:pipeline:synthetic_data:concept:59:CmsImage1:> .
@prefix ns369: <urn:paradicms_etl:pipeline:synthetic_data:concept:38:CmsImage0:> .
@prefix ns37: <urn:paradicms_etl:pipeline:synthetic_data:concept:15:CmsImage0:> .
@prefix ns370: <http://example.com/freestandingwork9:CmsImage0:> .
@prefix ns371: <urn:paradicms_etl:pipeline:synthetic_data:concept:12:> .
@prefix ns372: <http://example.com/freestandingwork11:> .
@prefix ns373: <urn:paradicms_etl:pipeline:synthetic_data:concept:68:> .
@prefix ns374: <urn:paradicms_etl:pipeline:synthetic_data:concept:28:CmsImage0:> .
@prefix ns375: <http://example.com/person0:> .
@prefix ns376: <urn:paradicms_etl:pipeline:synthetic_data:concept:34:> .
@prefix ns377: <urn:paradicms_etl:pipeline:synthetic_data:concept:105:CmsImage1:> .
@prefix ns378: <urn:paradicms_etl:pipeline:synthetic_data:concept:6:> .
@prefix ns379: <urn:paradicms_etl:pipeline:synthetic_data:concept:46:CmsImage1:> .
@prefix ns38: <urn:paradicms_etl:pipeline:synthetic_data:concept:32:CmsImage0:> .
@prefix ns380: <http://example.com/collection0/work0:> .
@prefix ns381: <urn:paradicms_etl:pipeline:synthetic_data:concept:49:> .
@prefix ns382: <urn:paradicms_etl:pipeline:synthetic_data:concept:44:CmsImage0:> .
@prefix ns383: <http://example.com/collection0/work1:> .
@prefix ns384: <http://example.com/organization3:CmsImage1:> .
@prefix ns385: <http://example.com/person2:> .
@prefix ns386: <http://example.com/collection1/work4:> .
@prefix ns387: <urn:paradicms_etl:pipeline:synthetic_data:concept:70:> .
@prefix ns388: <urn:paradicms_etl:pipeline:synthetic_data:concept:23:> .
@prefix ns389: <urn:paradicms_etl:pipeline:synthetic_data:concept:41:> .
@prefix ns39: <urn:paradicms_etl:pipeline:synthetic_data:concept:69:CmsImage1:> .
@prefix ns390: <http://example.com/organization3:CmsImage0:> .
@prefix ns391: <urn:paradicms_etl:pipeline:synthetic_data:concept:39:> .
@prefix ns392: <http://example.com/organization3:> .
@prefix ns393: <urn:paradicms_etl:pipeline:synthetic_data:concept:96:> .
@prefix ns394: <urn:paradicms_etl:pipeline:synthetic_data:concept:42:> .
@prefix ns395: <urn:paradicms_etl:pipeline:synthetic_data:concept:89:> .
@prefix ns396: <urn:paradicms_etl:pipeline:synthetic_data:concept:1:> .
@prefix ns397: <urn:paradicms_etl:pipeline:synthetic_data:concept:10:> .
@prefix ns398: <urn:paradicms_etl:pipeline:synthetic_data:concept:74:> .
@prefix ns399: <urn:paradicms_etl:pipeline:synthetic_data:concept:57:> .
@prefix ns4: <urn:paradicms_etl:pipeline:synthetic_data:concept:25:CmsImage1:> .
@prefix ns40: <urn:paradicms_etl:pipeline:synthetic_data:concept:88:> .
@prefix ns400: <urn:paradicms_etl:pipeline:synthetic_data:concept:25:> .
@prefix ns401: <urn:paradicms_etl:pipeline:synthetic_data:concept:26:> .
@prefix ns402: <urn:paradicms_etl:pipeline:synthetic_data:concept:0:> .
@prefix ns403: <urn:paradicms_etl:pipeline:synthetic_data:concept:64:> .
@prefix ns404: <http://example.com/freestandingwork10:> .
@prefix ns41: <http://example.com/organization1:CmsImage0:> .
@prefix ns42: <urn:paradicms_etl:pipeline:synthetic_data:concept:18:CmsImage1:> .
@prefix ns43: <http://example.com/person4:CmsImage1:> .
@prefix ns44: <urn:paradicms_etl:pipeline:synthetic_data:concept:10:CmsImage1:> .
@prefix ns45: <urn:paradicms_etl:pipeline:synthetic_data:concept:38:> .
@prefix ns46: <urn:paradicms_etl:pipeline:synthetic_data:concept:47:CmsImage0:> .
@prefix ns47: <urn:paradicms_etl:pipeline:synthetic_data:concept:10:CmsImage0:> .
@prefix ns48: <urn:paradicms_etl:pipeline:synthetic_data:concept:28:> .
@prefix ns49: <urn:paradicms_etl:pipeline:synthetic_data:concept:56:CmsImage0:> .
@prefix ns5: <urn:paradicms_etl:pipeline:synthetic_data:concept:100:CmsImage1:> .
@prefix ns50: <urn:paradicms_etl:pipeline:synthetic_data:concept:101:> .
@prefix ns51: <http://example.com/freestandingwork9:CmsImage1:> .
@prefix ns52: <urn:paradicms_etl:pipeline:synthetic_data:concept:82:> .
@prefix ns53: <urn:paradicms_etl:pipeline:synthetic_data:concept:11:CmsImage1:> .
@prefix ns54: <urn:paradicms_etl:pipeline:synthetic_data:concept:20:CmsImage0:> .
@prefix ns55: <urn:paradicms_etl:pipeline:synthetic_data:concept:23:CmsImage1:> .
@prefix ns56: <http://example.com/person2:CmsImage0:> .
@prefix ns57: <urn:paradicms_etl:pipeline:synthetic_data:concept:75:CmsImage0:> .
@prefix ns58: <http://example.com/person3:CmsImage0:> .
@prefix ns59: <urn:paradicms_etl:pipeline:synthetic_data:concept:70:CmsImage1:> .
@prefix ns6: <urn:paradicms_etl:pipeline:synthetic_data:concept:93:> .
@prefix ns60: <urn:paradicms_etl:pipeline:synthetic_data:concept:36:CmsImage0:> .
@prefix ns61: <http://example.com/collection0/work3:> .
@prefix ns62: <urn:paradicms_etl:pipeline:synthetic_data:concept:102:CmsImage0:> .
@prefix ns63: <urn:paradicms_etl:pipeline:synthetic_data:concept:85:CmsImage0:> .
@prefix ns64: <urn:paradicms_etl:pipeline:synthetic_data:concept:4:CmsImage1:> .
@prefix ns65: <urn:paradicms_etl:pipeline:synthetic_data:concept:18:CmsImage0:> .
@prefix ns66: <http://example.com/collection1:CmsImage1:> .
@prefix ns67: <urn:paradicms_etl:pipeline:synthetic_data:concept:8:CmsImage1:> .
@prefix ns68: <urn:paradicms_etl:pipeline:synthetic_data:concept:79:> .
@prefix ns69: <urn:paradicms_etl:pipeline:synthetic_data:concept:14:CmsImage0:> .
@prefix ns7: <urn:paradicms_etl:pipeline:synthetic_data:concept:92:CmsImage1:> .
@prefix ns70: <urn:paradicms_etl:pipeline:synthetic_data:concept:81:CmsImage0:> .
@prefix ns71: <http://example.com/person4:CmsImage0:> .
@prefix ns72: <urn:paradicms_etl:pipeline:synthetic_data:concept:109:CmsImage0:> .
@prefix ns73: <urn:paradicms_etl:pipeline:synthetic_data:concept:107:> .
@prefix ns74: <urn:paradicms_etl:pipeline:synthetic_data:concept:3:CmsImage0:> .
@prefix ns75: <urn:paradicms_etl:pipeline:synthetic_data:concept:42:CmsImage0:> .
@prefix ns76: <urn:paradicms_etl:pipeline:synthetic_data:concept:107:CmsImage1:> .
@prefix ns77: <urn:paradicms_etl:pipeline:synthetic_data:concept:52:CmsImage0:> .
@prefix ns78: <urn:paradicms_etl:pipeline:synthetic_data:concept:40:CmsImage0:> .
@prefix ns79: <http://example.com/person1:CmsImage0:> .
@prefix ns8: <urn:paradicms_etl:pipeline:synthetic_data:concept:> .
@prefix ns80: <http://example.com/> .
@prefix ns81: <urn:paradicms_etl:pipeline:synthetic_data:concept:53:> .
@prefix ns82: <urn:paradicms_etl:pipeline:synthetic_data:concept:3:CmsImage1:> .
@prefix ns83: <http://example.com/freestandingwork10:CmsImage0:> .
@prefix ns84: <urn:paradicms_etl:pipeline:synthetic_data:concept:43:CmsImage1:> .
@prefix ns85: <http://example.com/collection1:CmsImage0:> .
@prefix ns86: <urn:paradicms_etl:pipeline:synthetic_data:concept:35:CmsImage0:> .
@prefix ns87: <urn:paradicms_etl:pipeline:synthetic_data:concept:16:CmsImage0:> .
@prefix ns88: <urn:paradicms_etl:pipeline:synthetic_data:concept:44:CmsImage1:> .
@prefix ns89: <http://example.com/collection1/work5:> .
@prefix ns9: <urn:paradicms_etl:pipeline:synthetic_data:concept:21:> .
@prefix ns90: <urn:paradicms_etl:pipeline:synthetic_data:concept:57:CmsImage0:> .
@prefix ns91: <urn:paradicms_etl:pipeline:synthetic_data:concept:71:CmsImage0:> .
@prefix ns92: <urn:paradicms_etl:pipeline:synthetic_data:concept:21:CmsImage0:> .
@prefix ns93: <urn:paradicms_etl:pipeline:synthetic_data:concept:108:CmsImage0:> .
@prefix ns94: <urn:paradicms_etl:pipeline:synthetic_data:concept:54:CmsImage0:> .
@prefix ns95: <urn:paradicms_etl:pipeline:synthetic_data:concept:65:CmsImage1:> .
@prefix ns96: <urn:paradicms_etl:pipeline:synthetic_data:concept:13:> .
@prefix ns97: <urn:paradicms_etl:pipeline:synthetic_data:concept:5:CmsImage1:> .
@prefix ns98: <urn:paradicms_etl:pipeline:synthetic_data:concept:76:CmsImage1:> .
@prefix ns99: <http://example.com/organization4:CmsImage0:> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix vra: <http://purl.org/vra/> .
@prefix wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

ns1:Thumbnail600x600 {
    ns295:CmsImage0 foaf:thumbnail ns1:Thumbnail600x600 .

    ns1:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns295:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:92 .
}

ns2:CmsImage0 {
    ns2:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:69 .
}

ns3:Thumbnail800x800 {
    ns372:CmsImage0 foaf:thumbnail ns3:Thumbnail800x800 .

    ns3:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns372:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:freestandingwork11 .
}

ns4:Thumbnail600x600 {
    ns400:CmsImage1 foaf:thumbnail ns4:Thumbnail600x600 .

    ns4:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns400:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:25 .
}

ns5:Thumbnail200x200 {
    ns193:CmsImage1 foaf:thumbnail ns5:Thumbnail200x200 .

    ns5:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns193:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:100 .
}

ns6:CmsImage1 {
    ns6:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:93 .
}

ns7:Thumbnail200x200 {
    ns295:CmsImage1 foaf:thumbnail ns7:Thumbnail200x200 .

    ns7:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns295:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:92 .
}

ns8:39 {
    ns8:39 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 9" ;
        skos:prefLabel "CmsConcept 39" .
}

dcterms:spatial {
    dcterms:spatial a cms:Property ;
        rdfs:label "Spatial" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns263:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> .
}

ns9:CmsImage1 {
    ns9:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:21 .
}

ns10:Thumbnail200x200 {
    ns335:CmsImage1 foaf:thumbnail ns10:Thumbnail200x200 .

    ns10:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns335:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:36 .
}

ns11:Thumbnail800x800 {
    ns215:CmsImage1 foaf:thumbnail ns11:Thumbnail800x800 .

    ns11:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns215:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:63 .
}

ns12:CmsImage1 {
    ns12:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:106 .
}

ns13:Thumbnail600x600 {
    ns341:CmsImage1 foaf:thumbnail ns13:Thumbnail600x600 .

    ns13:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns341:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:61 .
}

ns14:Thumbnail400x400 {
    ns50:CmsImage1 foaf:thumbnail ns14:Thumbnail400x400 .

    ns14:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns50:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:101 .
}

ns15:Thumbnail200x200 {
    ns276:CmsImage1 foaf:thumbnail ns15:Thumbnail200x200 .

    ns15:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns276:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:16 .
}

ns16:Thumbnail800x800 {
    ns284:CmsImage1 foaf:thumbnail ns16:Thumbnail800x800 .

    ns16:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns284:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:67 .
}

ns17:work0Creation {
    ns17:work0Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns80:organization2,
            ns80:organization3 ;
        dcterms:date _:Nd6410122b494411abe7f264c8960b8e1 ;
        dcterms:description _:N3bca468ca8a54482b38cdfacb74c1722 ;
        dcterms:spatial ns17:work0Location ;
        dcterms:title "CmsCollection0CmsWork0 creation" ;
        cms:work ns17:work0 .

    _:N3bca468ca8a54482b38cdfacb74c1722 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:Nd6410122b494411abe7f264c8960b8e1 a cms:DateTimeDescription ;
        time:day "---01"^^xsd:gDay ;
        time:month "--01"^^xsd:gMonth ;
        time:year "2022"^^xsd:gYear .
}

ns18:Thumbnail200x200 {
    ns35:CmsImage1 foaf:thumbnail ns18:Thumbnail200x200 .

    ns18:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns35:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:66 .
}

ns19:Thumbnail600x600 {
    ns52:CmsImage1 foaf:thumbnail ns19:Thumbnail600x600 .

    ns19:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns52:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:82 .
}

ns20:Thumbnail400x400 {
    ns329:CmsImage0 foaf:thumbnail ns20:Thumbnail400x400 .

    ns20:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns329:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:organization2 .
}

ns21:work7Location {
    ns21:work7Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns22:Thumbnail200x200 {
    ns22:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns9:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:21 .

    ns9:CmsImage1 foaf:thumbnail ns22:Thumbnail200x200 .
}

ns23:Thumbnail200x200 {
    ns29:CmsImage1 foaf:thumbnail ns23:Thumbnail200x200 .

    ns23:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns29:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:15 .
}

ns24:Thumbnail200x200 {
    ns257:CmsImage1 foaf:thumbnail ns24:Thumbnail200x200 .

    ns24:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns257:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:7 .
}

ns25:Thumbnail600x600 {
    ns206:CmsImage1 foaf:thumbnail ns25:Thumbnail600x600 .

    ns25:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns206:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:98 .
}

ns26:CmsImage0 {
    ns26:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:83 .
}

ns22:Thumbnail400x400 {
    ns22:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns9:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:21 .

    ns9:CmsImage1 foaf:thumbnail ns22:Thumbnail400x400 .
}

ns27:CmsImage1 {
    ns27:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:37 .
}

ns28:Thumbnail600x600 {
    ns106:CmsImage0 foaf:thumbnail ns28:Thumbnail600x600 .

    ns28:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns106:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns21:work6 .
}

ns29:CmsImage1 {
    ns29:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:15 .
}

ns30:Thumbnail600x600 {
    ns207:CmsImage0 foaf:thumbnail ns30:Thumbnail600x600 .

    ns30:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns207:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:76 .
}

ns31:Thumbnail600x600 {
    ns404:CmsImage1 foaf:thumbnail ns31:Thumbnail600x600 .

    ns31:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns404:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:freestandingwork10 .
}

ns32:Thumbnail800x800 {
    ns363:CmsImage0 foaf:thumbnail ns32:Thumbnail800x800 .

    ns32:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns363:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:55 .
}

ns33:Thumbnail600x600 {
    ns12:CmsImage0 foaf:thumbnail ns33:Thumbnail600x600 .

    ns33:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns12:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:106 .
}

ns34:CmsImage0 {
    ns34:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:72 .
}

ns35:CmsImage0 {
    ns35:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:66 .
}

ns17:work2 {
    ns17:work2 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork2 alternative title 0",
            "CmsCollection0CmsWork2 alternative title 1" ;
        dcterms:contributor _:N8bc0b4e0f11c45a0bc179ec45480e9a2,
            _:Nc98e776ad8454df18136e1ee2a5bc3d4 ;
        dcterms:creator ns80:organization4,
            ns80:person0 ;
        dcterms:description _:N7ff95e3fd8c24e868e10b15210745fb2 ;
        dcterms:extent ns8:12,
            ns8:13 ;
        dcterms:identifier "CmsCollection0CmsWork2Id0",
            "CmsCollection0CmsWork2Id1" ;
        dcterms:language ns8:22,
            ns8:23 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns8:42,
            ns8:43 ;
        dcterms:provenance "CmsCollection0CmsWork2 provenance 0",
            "CmsCollection0CmsWork2 provenance 1" ;
        dcterms:publisher ns8:52,
            ns8:53 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 rights holder" ;
        dcterms:source ns8:62,
            ns8:63 ;
        dcterms:spatial ns17:work2Location ;
        dcterms:subject ns8:82,
            ns8:83 ;
        dcterms:title "CmsCollection0CmsWork2" ;
        dcterms:type ns8:102,
            ns8:103 ;
        vra:culturalContext ns8:2,
            ns8:3 ;
        vra:material ns8:32,
            ns8:33 ;
        vra:technique ns8:92,
            ns8:93 ;
        cms:collection ns80:collection0 ;
        foaf:page <http://example.com/work/2> .

    _:N7ff95e3fd8c24e868e10b15210745fb2 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:N8bc0b4e0f11c45a0bc179ec45480e9a2 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork2 contributor 1" .

    _:Nc98e776ad8454df18136e1ee2a5bc3d4 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork2 contributor 0" .
}

ns36:Thumbnail600x600 {
    ns389:CmsImage0 foaf:thumbnail ns36:Thumbnail600x600 .

    ns36:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns389:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:41 .
}

ns37:Thumbnail400x400 {
    ns29:CmsImage0 foaf:thumbnail ns37:Thumbnail400x400 .

    ns37:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns29:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:15 .
}

ns8:105 {
    ns8:105 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 5" ;
        skos:prefLabel "CmsConcept 105" .
}

ns38:Thumbnail800x800 {
    ns292:CmsImage0 foaf:thumbnail ns38:Thumbnail800x800 .

    ns38:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns292:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:32 .
}

ns39:Thumbnail400x400 {
    ns2:CmsImage1 foaf:thumbnail ns39:Thumbnail400x400 .

    ns39:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns2:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:69 .
}

ns40:CmsImage1 {
    ns40:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:88 .
}

ns41:Thumbnail200x200 {
    ns157:CmsImage0 foaf:thumbnail ns41:Thumbnail200x200 .

    ns41:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns157:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:organization1 .
}

ns8:8 {
    ns8:8 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 8" ;
        skos:prefLabel "CmsConcept 8" .
}

ns42:Thumbnail200x200 {
    ns307:CmsImage1 foaf:thumbnail ns42:Thumbnail200x200 .

    ns42:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns307:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:18 .
}

ns43:Thumbnail600x600 {
    ns102:CmsImage1 foaf:thumbnail ns43:Thumbnail600x600 .

    ns43:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns102:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:person4 .
}

ns44:Thumbnail800x800 {
    ns397:CmsImage1 foaf:thumbnail ns44:Thumbnail800x800 .

    ns44:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns397:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:10 .
}

ns45:CmsImage1 {
    ns45:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:38 .
}

ns46:Thumbnail200x200 {
    ns305:CmsImage0 foaf:thumbnail ns46:Thumbnail200x200 .

    ns46:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns305:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:47 .
}

ns21:work5 {
    ns21:work5 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork5 alternative title 0",
            "CmsCollection1CmsWork5 alternative title 1" ;
        dcterms:contributor _:N58606298470241209bb2700f9e3fe503,
            _:N5fb7bf0aa54c43799a94e5befd8e9787 ;
        dcterms:creator ns80:person2,
            ns80:person3 ;
        dcterms:extent ns8:15,
            ns8:16 ;
        dcterms:identifier "CmsCollection1CmsWork5Id0",
            "CmsCollection1CmsWork5Id1" ;
        dcterms:language ns8:25,
            ns8:26 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns8:45,
            ns8:46 ;
        dcterms:provenance "CmsCollection1CmsWork5 provenance 0",
            "CmsCollection1CmsWork5 provenance 1" ;
        dcterms:publisher ns8:55,
            ns8:56 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 rights holder" ;
        dcterms:source ns8:65,
            ns8:66 ;
        dcterms:spatial ns21:work5Location ;
        dcterms:subject ns8:85,
            ns8:86 ;
        dcterms:title "CmsCollection1CmsWork5" ;
        dcterms:type ns8:105,
            ns8:106 ;
        vra:culturalContext ns8:5,
            ns8:6 ;
        vra:material ns8:35,
            ns8:36 ;
        vra:technique ns8:95,
            ns8:96 ;
        cms:collection ns80:collection1 .

    _:N58606298470241209bb2700f9e3fe503 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork5 contributor 0" .

    _:N5fb7bf0aa54c43799a94e5befd8e9787 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork5 contributor 1" .
}

ns47:Thumbnail200x200 {
    ns397:CmsImage0 foaf:thumbnail ns47:Thumbnail200x200 .

    ns47:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns397:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:10 .
}

ns48:CmsImage0 {
    ns48:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:28 .
}

ns49:Thumbnail400x400 {
    ns279:CmsImage0 foaf:thumbnail ns49:Thumbnail400x400 .

    ns49:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns279:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:56 .
}

ns50:CmsImage0 {
    ns50:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:101 .
}

ns51:Thumbnail400x400 {
    ns323:CmsImage1 foaf:thumbnail ns51:Thumbnail400x400 .

    ns51:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns323:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:freestandingwork9 .
}

ns52:CmsImage0 {
    ns52:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:82 .
}

ns53:Thumbnail800x800 {
    ns328:CmsImage1 foaf:thumbnail ns53:Thumbnail800x800 .

    ns53:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns328:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:11 .
}

ns54:Thumbnail200x200 {
    ns268:CmsImage0 foaf:thumbnail ns54:Thumbnail200x200 .

    ns54:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns268:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:20 .
}

ns55:Thumbnail200x200 {
    ns388:CmsImage1 foaf:thumbnail ns55:Thumbnail200x200 .

    ns55:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns388:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:23 .
}

ns56:Thumbnail200x200 {
    ns385:CmsImage0 foaf:thumbnail ns56:Thumbnail200x200 .

    ns56:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:person2 .
}

ns57:Thumbnail600x600 {
    ns231:CmsImage0 foaf:thumbnail ns57:Thumbnail600x600 .

    ns57:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns231:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:75 .
}

ns58:Thumbnail400x400 {
    ns313:CmsImage0 foaf:thumbnail ns58:Thumbnail400x400 .

    ns58:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns313:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:person3 .
}

ns59:Thumbnail600x600 {
    ns387:CmsImage1 foaf:thumbnail ns59:Thumbnail600x600 .

    ns59:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns387:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:70 .
}

ns60:Thumbnail200x200 {
    ns335:CmsImage0 foaf:thumbnail ns60:Thumbnail200x200 .

    ns60:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns335:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:36 .
}

ns61:CmsImage0 {
    ns61:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns17:work3 .
}

ns62:Thumbnail800x800 {
    ns274:CmsImage0 foaf:thumbnail ns62:Thumbnail800x800 .

    ns62:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns274:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:102 .
}

ns59:Thumbnail400x400 {
    ns59:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns387:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:70 .

    ns387:CmsImage1 foaf:thumbnail ns59:Thumbnail400x400 .
}

ns63:Thumbnail800x800 {
    ns261:CmsImage0 foaf:thumbnail ns63:Thumbnail800x800 .

    ns63:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns261:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:85 .
}

ns64:Thumbnail400x400 {
    ns205:CmsImage1 foaf:thumbnail ns64:Thumbnail400x400 .

    ns64:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns205:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:4 .
}

ns7:Thumbnail800x800 {
    ns7:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns295:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:92 .

    ns295:CmsImage1 foaf:thumbnail ns7:Thumbnail800x800 .
}

ns65:Thumbnail200x200 {
    ns307:CmsImage0 foaf:thumbnail ns65:Thumbnail200x200 .

    ns65:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns307:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:18 .
}

ns66:Thumbnail200x200 {
    ns325:CmsImage1 foaf:thumbnail ns66:Thumbnail200x200 .

    ns66:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns325:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:collection1 .
}

ns67:Thumbnail400x400 {
    ns314:CmsImage1 foaf:thumbnail ns67:Thumbnail400x400 .

    ns67:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns314:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:8 .
}

ns68:CmsImage1 {
    ns68:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:79 .
}

ns69:Thumbnail400x400 {
    ns191:CmsImage0 foaf:thumbnail ns69:Thumbnail400x400 .

    ns69:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns191:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:14 .
}

ns70:Thumbnail600x600 {
    ns245:CmsImage0 foaf:thumbnail ns70:Thumbnail600x600 .

    ns70:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns245:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:81 .
}

ns71:Thumbnail200x200 {
    ns102:CmsImage0 foaf:thumbnail ns71:Thumbnail200x200 .

    ns71:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns102:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:person4 .
}

ns72:Thumbnail600x600 {
    ns186:CmsImage0 foaf:thumbnail ns72:Thumbnail600x600 .

    ns72:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns186:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:109 .
}

ns73:CmsImage1 {
    ns73:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:107 .
}

ns74:Thumbnail200x200 {
    ns298:CmsImage0 foaf:thumbnail ns74:Thumbnail200x200 .

    ns74:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns298:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:3 .
}

ns20:Thumbnail800x800 {
    ns20:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns329:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:organization2 .

    ns329:CmsImage0 foaf:thumbnail ns20:Thumbnail800x800 .
}

ns75:Thumbnail800x800 {
    ns394:CmsImage0 foaf:thumbnail ns75:Thumbnail800x800 .

    ns75:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns394:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:42 .
}

ns76:Thumbnail400x400 {
    ns76:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns73:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:107 .

    ns73:CmsImage1 foaf:thumbnail ns76:Thumbnail400x400 .
}

ns65:Thumbnail600x600 {
    ns65:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns307:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:18 .

    ns307:CmsImage0 foaf:thumbnail ns65:Thumbnail600x600 .
}

ns77:Thumbnail800x800 {
    ns251:CmsImage0 foaf:thumbnail ns77:Thumbnail800x800 .

    ns77:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns251:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:52 .
}

ns78:Thumbnail600x600 {
    ns300:CmsImage0 foaf:thumbnail ns78:Thumbnail600x600 .

    ns78:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns300:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:40 .
}

ns8:106 {
    ns8:106 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 6" ;
        skos:prefLabel "CmsConcept 106" .
}

ns79:Thumbnail200x200 {
    ns332:CmsImage0 foaf:thumbnail ns79:Thumbnail200x200 .

    ns79:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns332:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:person1 .
}

ns80:person2 {
    ns80:person2 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "2, CmsPerson" ;
        foaf:familyName "2" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 2" ;
        foaf:page ns80:person2page .
}

ns81:CmsImage1 {
    ns81:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:53 .
}

ns82:Thumbnail200x200 {
    ns298:CmsImage1 foaf:thumbnail ns82:Thumbnail200x200 .

    ns82:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns298:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:3 .
}

ns46:Thumbnail400x400 {
    ns46:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns305:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:47 .

    ns305:CmsImage0 foaf:thumbnail ns46:Thumbnail400x400 .
}

ns83:Thumbnail600x600 {
    ns404:CmsImage0 foaf:thumbnail ns83:Thumbnail600x600 .

    ns83:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns404:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:freestandingwork10 .
}

ns51:Thumbnail200x200 {
    ns51:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns323:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:freestandingwork9 .

    ns323:CmsImage1 foaf:thumbnail ns51:Thumbnail200x200 .
}

ns84:Thumbnail400x400 {
    ns359:CmsImage1 foaf:thumbnail ns84:Thumbnail400x400 .

    ns84:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns359:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:43 .
}

ns85:Thumbnail800x800 {
    ns325:CmsImage0 foaf:thumbnail ns85:Thumbnail800x800 .

    ns85:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns325:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:collection1 .
}

ns8:43 {
    ns8:43 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 3" ;
        skos:prefLabel "CmsConcept 43" .
}

ns86:Thumbnail200x200 {
    ns285:CmsImage0 foaf:thumbnail ns86:Thumbnail200x200 .

    ns86:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns285:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:35 .
}

ns87:Thumbnail600x600 {
    ns276:CmsImage0 foaf:thumbnail ns87:Thumbnail600x600 .

    ns87:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns276:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:16 .
}

ns88:Thumbnail800x800 {
    ns277:CmsImage1 foaf:thumbnail ns88:Thumbnail800x800 .

    ns88:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns277:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:44 .
}

ns89:CmsImage1 {
    ns89:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns21:work5 .
}

ns90:Thumbnail200x200 {
    ns399:CmsImage0 foaf:thumbnail ns90:Thumbnail200x200 .

    ns90:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:57 .
}

ns91:Thumbnail400x400 {
    ns210:CmsImage0 foaf:thumbnail ns91:Thumbnail400x400 .

    ns91:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns210:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:71 .
}

ns92:Thumbnail200x200 {
    ns9:CmsImage0 foaf:thumbnail ns92:Thumbnail200x200 .

    ns92:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns9:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:21 .
}

ns8:33 {
    ns8:33 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 3" ;
        skos:prefLabel "CmsConcept 33" .
}

ns93:Thumbnail400x400 {
    ns334:CmsImage0 foaf:thumbnail ns93:Thumbnail400x400 .

    ns93:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns334:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:108 .
}

ns94:Thumbnail400x400 {
    ns308:CmsImage0 foaf:thumbnail ns94:Thumbnail400x400 .

    ns94:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns308:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:54 .
}

ns8:98 {
    ns8:98 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 8" ;
        skos:prefLabel "CmsConcept 98" .
}

ns95:Thumbnail600x600 {
    ns339:CmsImage1 foaf:thumbnail ns95:Thumbnail600x600 .

    ns95:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns339:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:65 .
}

ns96:CmsImage0 {
    ns96:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:13 .
}

ns8:48 {
    ns8:48 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 8" ;
        skos:prefLabel "CmsConcept 48" .
}

ns97:Thumbnail200x200 {
    ns355:CmsImage1 foaf:thumbnail ns97:Thumbnail200x200 .

    ns97:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns355:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:5 .
}

ns98:Thumbnail800x800 {
    ns207:CmsImage1 foaf:thumbnail ns98:Thumbnail800x800 .

    ns98:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns207:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:76 .
}

ns99:Thumbnail400x400 {
    ns350:CmsImage0 foaf:thumbnail ns99:Thumbnail400x400 .

    ns99:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns350:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:organization4 .
}

ns100:Thumbnail200x200 {
    ns327:CmsImage0 foaf:thumbnail ns100:Thumbnail200x200 .

    ns100:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns327:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:62 .
}

ns21:work5Opening {
    ns21:work5Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-27"^^xsd:date ;
        dcterms:spatial _:N121d882f44834070a912a6d4250668c8 ;
        dcterms:title "CmsCollection1CmsWork5 opening" ;
        cms:work ns21:work5 .

    _:N121d882f44834070a912a6d4250668c8 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns101:CmsImage0 {
    ns101:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:99 .
}

ns18:Thumbnail800x800 {
    ns18:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns35:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:66 .

    ns35:CmsImage1 foaf:thumbnail ns18:Thumbnail800x800 .
}

ns90:Thumbnail800x800 {
    ns90:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:57 .

    ns399:CmsImage0 foaf:thumbnail ns90:Thumbnail800x800 .
}

ns102:CmsImage0 {
    ns102:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:person4 .
}

dcterms:source {
    dcterms:source a cms:Property ;
        rdfs:label "Source" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns263:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> .
}

ns103:Thumbnail800x800 {
    ns248:CmsImage0 foaf:thumbnail ns103:Thumbnail800x800 .

    ns103:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns248:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:104 .
}

ns104:Thumbnail600x600 {
    ns400:CmsImage0 foaf:thumbnail ns104:Thumbnail600x600 .

    ns104:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns400:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:25 .
}

ns8:55 {
    ns8:55 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 5" ;
        skos:prefLabel "CmsConcept 55" .
}

ns105:Thumbnail400x400 {
    ns206:CmsImage0 foaf:thumbnail ns105:Thumbnail400x400 .

    ns105:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns206:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:98 .
}

ns49:Thumbnail800x800 {
    ns49:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns279:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:56 .

    ns279:CmsImage0 foaf:thumbnail ns49:Thumbnail800x800 .
}

ns106:CmsImage1 {
    ns106:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns21:work6 .
}

ns107:Thumbnail600x600 {
    ns389:CmsImage1 foaf:thumbnail ns107:Thumbnail600x600 .

    ns107:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns389:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:41 .
}

ns108:CmsImage1 {
    ns108:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:91 .
}

ns8:37 {
    ns8:37 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 7" ;
        skos:prefLabel "CmsConcept 37" .
}

ns88:Thumbnail600x600 {
    ns88:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns277:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:44 .

    ns277:CmsImage1 foaf:thumbnail ns88:Thumbnail600x600 .
}

ns109:Thumbnail800x800 {
    ns378:CmsImage0 foaf:thumbnail ns109:Thumbnail800x800 .

    ns109:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns378:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:6 .
}

ns110:Thumbnail200x200 {
    ns375:CmsImage1 foaf:thumbnail ns110:Thumbnail200x200 .

    ns110:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns375:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:person0 .
}

ns69:Thumbnail800x800 {
    ns69:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns191:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:14 .

    ns191:CmsImage0 foaf:thumbnail ns69:Thumbnail800x800 .
}

ns111:Thumbnail400x400 {
    ns111:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns12:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:106 .

    ns12:CmsImage1 foaf:thumbnail ns111:Thumbnail400x400 .
}

ns112:Thumbnail200x200 {
    ns371:CmsImage0 foaf:thumbnail ns112:Thumbnail200x200 .

    ns112:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns371:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:12 .
}

ns113:Thumbnail600x600 {
    ns193:CmsImage0 foaf:thumbnail ns113:Thumbnail600x600 .

    ns113:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns193:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:100 .
}

ns110:Thumbnail400x400 {
    ns110:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns375:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:person0 .

    ns375:CmsImage1 foaf:thumbnail ns110:Thumbnail400x400 .
}

ns112:Thumbnail400x400 {
    ns112:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns371:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:12 .

    ns371:CmsImage0 foaf:thumbnail ns112:Thumbnail400x400 .
}

ns49:Thumbnail200x200 {
    ns49:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns279:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:56 .

    ns279:CmsImage0 foaf:thumbnail ns49:Thumbnail200x200 .
}

ns114:CmsImage1 {
    ns114:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:80 .
}

ns63:Thumbnail400x400 {
    ns63:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns261:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:85 .

    ns261:CmsImage0 foaf:thumbnail ns63:Thumbnail400x400 .
}

ns8:108 {
    ns8:108 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 8" ;
        skos:prefLabel "CmsConcept 108" .
}

ns8:53 {
    ns8:53 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 3" ;
        skos:prefLabel "CmsConcept 53" .
}

ns100:Thumbnail400x400 {
    ns100:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns327:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:62 .

    ns327:CmsImage0 foaf:thumbnail ns100:Thumbnail400x400 .
}

ns115:Thumbnail800x800 {
    ns381:CmsImage0 foaf:thumbnail ns115:Thumbnail800x800 .

    ns115:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns381:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:49 .
}

ns116:Thumbnail600x600 {
    ns155:CmsImage0 foaf:thumbnail ns116:Thumbnail600x600 .

    ns116:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns155:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:86 .
}

ns117:Thumbnail400x400 {
    ns225:CmsImage1 foaf:thumbnail ns117:Thumbnail400x400 .

    ns117:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns225:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:97 .
}

ns43:Thumbnail400x400 {
    ns43:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns102:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:person4 .

    ns102:CmsImage1 foaf:thumbnail ns43:Thumbnail400x400 .
}

ns118:Thumbnail600x600 {
    ns365:CmsImage0 foaf:thumbnail ns118:Thumbnail600x600 .

    ns118:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:77 .
}

ns41:Thumbnail800x800 {
    ns41:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns157:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:organization1 .

    ns157:CmsImage0 foaf:thumbnail ns41:Thumbnail800x800 .
}

ns8:14 {
    ns8:14 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 4" ;
        skos:prefLabel "CmsConcept 14" .
}

ns119:Thumbnail600x600 {
    ns326:CmsImage1 foaf:thumbnail ns119:Thumbnail600x600 .

    ns119:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns326:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:58 .
}

_:Nb2543f5b52f54e539fe1b24c5734d6a6 {
    _:Nb2543f5b52f54e539fe1b24c5734d6a6 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N88a70d0ae292437296e8b567ae84a8f1 ;
        dcterms:title "CmsCollection1CmsWork7 closing" ;
        cms:work ns21:work7 .

    _:N88a70d0ae292437296e8b567ae84a8f1 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns8:80 {
    ns8:80 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 0" ;
        skos:prefLabel "CmsConcept 80" .
}

ns120:Thumbnail800x800 {
    ns137:CmsImage1 foaf:thumbnail ns120:Thumbnail800x800 .

    ns120:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns137:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:94 .
}

ns8:52 {
    ns8:52 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 2" ;
        skos:prefLabel "CmsConcept 52" .
}

ns121:Thumbnail800x800 {
    ns312:CmsImage1 foaf:thumbnail ns121:Thumbnail800x800 .

    ns121:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns312:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:60 .
}

ns122:Thumbnail600x600 {
    ns354:CmsImage0 foaf:thumbnail ns122:Thumbnail600x600 .

    ns122:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns354:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:84 .
}

ns123:Thumbnail800x800 {
    ns123:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns101:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:99 .

    ns101:CmsImage0 foaf:thumbnail ns123:Thumbnail800x800 .
}

ns124:Thumbnail200x200 {
    ns124:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns6:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:93 .

    ns6:CmsImage1 foaf:thumbnail ns124:Thumbnail200x200 .
}

ns107:Thumbnail200x200 {
    ns107:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns389:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:41 .

    ns389:CmsImage1 foaf:thumbnail ns107:Thumbnail200x200 .
}

ns120:Thumbnail400x400 {
    ns120:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns137:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:94 .

    ns137:CmsImage1 foaf:thumbnail ns120:Thumbnail400x400 .
}

ns125:Thumbnail600x600 {
    ns292:CmsImage1 foaf:thumbnail ns125:Thumbnail600x600 .

    ns125:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns292:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:32 .
}

ns126:Thumbnail400x400 {
    ns164:CmsImage1 foaf:thumbnail ns126:Thumbnail400x400 .

    ns126:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns164:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:2 .
}

ns127:Thumbnail600x600 {
    ns127:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns89:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns21:work5 .

    ns89:CmsImage1 foaf:thumbnail ns127:Thumbnail600x600 .
}

ns128:Thumbnail600x600 {
    ns388:CmsImage0 foaf:thumbnail ns128:Thumbnail600x600 .

    ns128:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns388:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:23 .
}

ns75:Thumbnail600x600 {
    ns75:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns394:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:42 .

    ns394:CmsImage0 foaf:thumbnail ns75:Thumbnail600x600 .
}

ns129:Thumbnail600x600 {
    ns40:CmsImage0 foaf:thumbnail ns129:Thumbnail600x600 .

    ns129:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns40:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:88 .
}

ns130:CmsImage0 {
    ns130:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:33 .
}

ns25:Thumbnail200x200 {
    ns25:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns206:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:98 .

    ns206:CmsImage1 foaf:thumbnail ns25:Thumbnail200x200 .
}

ns131:Thumbnail400x400 {
    ns130:CmsImage1 foaf:thumbnail ns131:Thumbnail400x400 .

    ns131:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns130:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:33 .
}

ns132:Thumbnail600x600 {
    ns302:CmsImage0 foaf:thumbnail ns132:Thumbnail600x600 .

    ns132:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns302:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:17 .
}

ns133:Thumbnail200x200 {
    ns34:CmsImage1 foaf:thumbnail ns133:Thumbnail200x200 .

    ns133:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns34:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:72 .
}

ns134:Thumbnail800x800 {
    ns356:CmsImage0 foaf:thumbnail ns134:Thumbnail800x800 .

    ns134:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns356:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:46 .
}

ns135:Thumbnail600x600 {
    ns194:CmsImage0 foaf:thumbnail ns135:Thumbnail600x600 .

    ns135:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns194:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:95 .
}

ns136:Thumbnail400x400 {
    ns6:CmsImage0 foaf:thumbnail ns136:Thumbnail400x400 .

    ns136:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns6:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:93 .
}

ns8:70 {
    ns8:70 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 0" ;
        skos:prefLabel "CmsConcept 70" .
}

ns8:109 {
    ns8:109 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 9" ;
        skos:prefLabel "CmsConcept 109" .
}

ns22:Thumbnail600x600 {
    ns22:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns9:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:21 .

    ns9:CmsImage1 foaf:thumbnail ns22:Thumbnail600x600 .
}

ns67:Thumbnail600x600 {
    ns67:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns314:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:8 .

    ns314:CmsImage1 foaf:thumbnail ns67:Thumbnail600x600 .
}

ns128:Thumbnail200x200 {
    ns128:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns388:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:23 .

    ns388:CmsImage0 foaf:thumbnail ns128:Thumbnail200x200 .
}

_:Naa50b8a20dd84f4488e5b1a80d471a5f {
    _:Naa50b8a20dd84f4488e5b1a80d471a5f a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N3bca468ca8a54482b38cdfacb74c1722 ;
        dcterms:spatial _:N334c7a18128943f894b9a5dad7a4ac94 ;
        dcterms:title "CmsCollection0CmsWork0 closing" ;
        cms:work ns17:work0 .

    _:N334c7a18128943f894b9a5dad7a4ac94 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N3bca468ca8a54482b38cdfacb74c1722 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns137:CmsImage1 {
    ns137:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:94 .
}

ns60:Thumbnail800x800 {
    ns60:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns335:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:36 .

    ns335:CmsImage0 foaf:thumbnail ns60:Thumbnail800x800 .
}

ns8:71 {
    ns8:71 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 1" ;
        skos:prefLabel "CmsConcept 71" .
}

ns87:Thumbnail200x200 {
    ns87:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns276:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:16 .

    ns276:CmsImage0 foaf:thumbnail ns87:Thumbnail200x200 .
}

ns138:Thumbnail400x400 {
    ns191:CmsImage1 foaf:thumbnail ns138:Thumbnail400x400 .

    ns138:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns191:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:14 .
}

ns60:Thumbnail400x400 {
    ns60:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns335:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:36 .

    ns335:CmsImage0 foaf:thumbnail ns60:Thumbnail400x400 .
}

ns139:Thumbnail400x400 {
    ns376:CmsImage1 foaf:thumbnail ns139:Thumbnail400x400 .

    ns139:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns376:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:34 .
}

ns140:Thumbnail400x400 {
    ns381:CmsImage1 foaf:thumbnail ns140:Thumbnail400x400 .

    ns140:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns381:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:49 .
}

ns141:Thumbnail200x200 {
    ns312:CmsImage0 foaf:thumbnail ns141:Thumbnail200x200 .

    ns141:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns312:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:60 .
}

ns91:Thumbnail600x600 {
    ns91:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns210:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:71 .

    ns210:CmsImage0 foaf:thumbnail ns91:Thumbnail600x600 .
}

ns135:Thumbnail800x800 {
    ns135:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns194:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:95 .

    ns194:CmsImage0 foaf:thumbnail ns135:Thumbnail800x800 .
}

ns142:Thumbnail400x400 {
    ns338:CmsImage0 foaf:thumbnail ns142:Thumbnail400x400 .

    ns142:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns338:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:87 .
}

ns143:Thumbnail200x200 {
    ns285:CmsImage1 foaf:thumbnail ns143:Thumbnail200x200 .

    ns143:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns285:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:35 .
}

ns144:Thumbnail800x800 {
    ns401:CmsImage1 foaf:thumbnail ns144:Thumbnail800x800 .

    ns144:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns401:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:26 .
}

ns145:Thumbnail800x800 {
    ns351:CmsImage0 foaf:thumbnail ns145:Thumbnail800x800 .

    ns145:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns351:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:59 .
}

ns146:CmsImage1 {
    ns146:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:30 .
}

ns1:Thumbnail800x800 {
    ns1:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns295:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:92 .

    ns295:CmsImage0 foaf:thumbnail ns1:Thumbnail800x800 .
}

ns147:Thumbnail800x800 {
    ns194:CmsImage1 foaf:thumbnail ns147:Thumbnail800x800 .

    ns147:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns194:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:95 .
}

ns31:Thumbnail800x800 {
    ns31:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns404:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:freestandingwork10 .

    ns404:CmsImage1 foaf:thumbnail ns31:Thumbnail800x800 .
}

ns21:work7 {
    ns21:work7 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork7 alternative title 0",
            "CmsCollection1CmsWork7 alternative title 1" ;
        dcterms:contributor _:N1e91d7d345d740af942a4ec3675c491f,
            _:N3f369be1399a4f249566cf049fec8236 ;
        dcterms:creator ns80:organization0,
            ns80:person4 ;
        dcterms:extent ns8:17,
            ns8:18 ;
        dcterms:identifier "CmsCollection1CmsWork7Id0",
            "CmsCollection1CmsWork7Id1" ;
        dcterms:language ns8:27,
            ns8:28 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns8:47,
            ns8:48 ;
        dcterms:provenance "CmsCollection1CmsWork7 provenance 0",
            "CmsCollection1CmsWork7 provenance 1" ;
        dcterms:publisher ns8:57,
            ns8:58 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 rights holder" ;
        dcterms:source ns8:67,
            ns8:68 ;
        dcterms:spatial ns21:work7Location ;
        dcterms:subject ns8:87,
            ns8:88 ;
        dcterms:title "CmsCollection1CmsWork7" ;
        dcterms:type ns8:107,
            ns8:108 ;
        vra:culturalContext ns8:7,
            ns8:8 ;
        vra:material ns8:37,
            ns8:38 ;
        vra:technique ns8:97,
            ns8:98 ;
        cms:collection ns80:collection1 .

    _:N1e91d7d345d740af942a4ec3675c491f a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork7 contributor 0" .

    _:N3f369be1399a4f249566cf049fec8236 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork7 contributor 1" .
}

ns8:41 {
    ns8:41 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 1" ;
        skos:prefLabel "CmsConcept 41" .
}

ns14:Thumbnail600x600 {
    ns14:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns50:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:101 .

    ns50:CmsImage1 foaf:thumbnail ns14:Thumbnail600x600 .
}

ns148:Thumbnail400x400 {
    ns148:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns45:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:38 .

    ns45:CmsImage1 foaf:thumbnail ns148:Thumbnail400x400 .
}

ns149:Thumbnail200x200 {
    ns355:CmsImage0 foaf:thumbnail ns149:Thumbnail200x200 .

    ns149:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns355:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:5 .
}

ns150:Thumbnail600x600 {
    ns150:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns50:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:101 .

    ns50:CmsImage0 foaf:thumbnail ns150:Thumbnail600x600 .
}

ns8:87 {
    ns8:87 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 7" ;
        skos:prefLabel "CmsConcept 87" .
}

ns151:Thumbnail600x600 {
    ns225:CmsImage0 foaf:thumbnail ns151:Thumbnail600x600 .

    ns151:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns225:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:97 .
}

ns70:Thumbnail800x800 {
    ns70:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns245:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:81 .

    ns245:CmsImage0 foaf:thumbnail ns70:Thumbnail800x800 .
}

ns8:84 {
    ns8:84 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 4" ;
        skos:prefLabel "CmsConcept 84" .
}

ns152:Thumbnail200x200 {
    ns254:CmsImage0 foaf:thumbnail ns152:Thumbnail200x200 .

    ns152:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns254:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:19 .
}

ns47:Thumbnail400x400 {
    ns47:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns397:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:10 .

    ns397:CmsImage0 foaf:thumbnail ns47:Thumbnail400x400 .
}

ns153:Thumbnail200x200 {
    ns186:CmsImage1 foaf:thumbnail ns153:Thumbnail200x200 .

    ns153:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns186:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:109 .
}

ns154:Thumbnail600x600 {
    ns396:CmsImage1 foaf:thumbnail ns154:Thumbnail600x600 .

    ns154:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:1 .
}

ns155:CmsImage1 {
    ns155:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:86 .
}

ns156:CmsImage1 {
    ns156:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:freestandingwork8 .
}

ns157:CmsImage0 {
    ns157:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:organization1 .
}

ns112:Thumbnail800x800 {
    ns112:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns371:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:12 .

    ns371:CmsImage0 foaf:thumbnail ns112:Thumbnail800x800 .
}

ns158:CmsImage0 {
    ns158:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:29 .
}

ns136:Thumbnail600x600 {
    ns136:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns6:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:93 .

    ns6:CmsImage0 foaf:thumbnail ns136:Thumbnail600x600 .
}

ns159:Thumbnail400x400 {
    ns386:CmsImage1 foaf:thumbnail ns159:Thumbnail400x400 .

    ns159:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns386:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns21:work4 .
}

ns138:Thumbnail200x200 {
    ns138:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns191:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:14 .

    ns191:CmsImage1 foaf:thumbnail ns138:Thumbnail200x200 .
}

ns160:Thumbnail400x400 {
    ns237:CmsImage0 foaf:thumbnail ns160:Thumbnail400x400 .

    ns160:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns237:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:organization0 .
}

ns161:Thumbnail800x800 {
    ns231:CmsImage1 foaf:thumbnail ns161:Thumbnail800x800 .

    ns161:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns231:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:75 .
}

ns28:Thumbnail200x200 {
    ns28:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns106:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns21:work6 .

    ns106:CmsImage0 foaf:thumbnail ns28:Thumbnail200x200 .
}

ns3:Thumbnail200x200 {
    ns3:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns372:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:freestandingwork11 .

    ns372:CmsImage0 foaf:thumbnail ns3:Thumbnail200x200 .
}

ns93:Thumbnail600x600 {
    ns93:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns334:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:108 .

    ns334:CmsImage0 foaf:thumbnail ns93:Thumbnail600x600 .
}

ns162:Thumbnail200x200 {
    ns101:CmsImage1 foaf:thumbnail ns162:Thumbnail200x200 .

    ns162:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns101:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:99 .
}

ns163:Thumbnail600x600 {
    ns108:CmsImage0 foaf:thumbnail ns163:Thumbnail600x600 .

    ns163:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns108:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:91 .
}

ns149:Thumbnail600x600 {
    ns149:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns355:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:5 .

    ns355:CmsImage0 foaf:thumbnail ns149:Thumbnail600x600 .
}

ns76:Thumbnail200x200 {
    ns76:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns73:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:107 .

    ns73:CmsImage1 foaf:thumbnail ns76:Thumbnail200x200 .
}

ns164:CmsImage0 {
    ns164:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:2 .
}

ns109:Thumbnail200x200 {
    ns109:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns378:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:6 .

    ns378:CmsImage0 foaf:thumbnail ns109:Thumbnail200x200 .
}

ns165:Thumbnail800x800 {
    ns367:CmsImage0 foaf:thumbnail ns165:Thumbnail800x800 .

    ns165:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns367:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:27 .
}

ns78:Thumbnail800x800 {
    ns78:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns300:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:40 .

    ns300:CmsImage0 foaf:thumbnail ns78:Thumbnail800x800 .
}

ns34:CmsImage1 {
    ns34:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:72 .
}

ns115:Thumbnail200x200 {
    ns115:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns381:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:49 .

    ns381:CmsImage0 foaf:thumbnail ns115:Thumbnail200x200 .
}

ns166:Thumbnail600x600 {
    ns337:CmsImage1 foaf:thumbnail ns166:Thumbnail600x600 .

    ns166:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns337:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:22 .
}

ns55:Thumbnail400x400 {
    ns55:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns388:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:23 .

    ns388:CmsImage1 foaf:thumbnail ns55:Thumbnail400x400 .
}

ns56:Thumbnail400x400 {
    ns56:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:person2 .

    ns385:CmsImage0 foaf:thumbnail ns56:Thumbnail400x400 .
}

ns167:Thumbnail600x600 {
    ns313:CmsImage1 foaf:thumbnail ns167:Thumbnail600x600 .

    ns167:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns313:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:person3 .
}

ns168:Thumbnail400x400 {
    ns248:CmsImage1 foaf:thumbnail ns168:Thumbnail400x400 .

    ns168:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns248:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:104 .
}

ns169:Thumbnail400x400 {
    ns316:CmsImage0 foaf:thumbnail ns169:Thumbnail400x400 .

    ns169:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns316:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:50 .
}

ns80:organization0 {
    ns80:organization0 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 0" ;
        foaf:page ns80:organization0page .
}

ns8:42 {
    ns8:42 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 2" ;
        skos:prefLabel "CmsConcept 42" .
}

ns127:Thumbnail400x400 {
    ns127:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns89:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns21:work5 .

    ns89:CmsImage1 foaf:thumbnail ns127:Thumbnail400x400 .
}

ns170:Thumbnail600x600 {
    ns170:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns35:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:66 .

    ns35:CmsImage0 foaf:thumbnail ns170:Thumbnail600x600 .
}

ns57:Thumbnail400x400 {
    ns57:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns231:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:75 .

    ns231:CmsImage0 foaf:thumbnail ns57:Thumbnail400x400 .
}

ns8:10 {
    ns8:10 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 0" ;
        skos:prefLabel "CmsConcept 10" .
}

ns171:Thumbnail600x600 {
    ns26:CmsImage1 foaf:thumbnail ns171:Thumbnail600x600 .

    ns171:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns26:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:83 .
}

ns172:Thumbnail800x800 {
    ns172:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns34:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:72 .

    ns34:CmsImage0 foaf:thumbnail ns172:Thumbnail800x800 .
}

dcterms:description {
    dcterms:description a cms:Property ;
        rdfs:label "Description" ;
        cms:propertyFilterable false ;
        cms:propertyGroup ns263:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Description> .
}

ns173:Thumbnail800x800 {
    ns266:CmsImage0 foaf:thumbnail ns173:Thumbnail800x800 .

    ns173:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns266:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns21:work7 .
}

ns174:Thumbnail200x200 {
    ns156:CmsImage0 foaf:thumbnail ns174:Thumbnail200x200 .

    ns174:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns156:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:freestandingwork8 .
}

ns175:Thumbnail400x400 {
    ns350:CmsImage1 foaf:thumbnail ns175:Thumbnail400x400 .

    ns175:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns350:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:organization4 .
}

ns176:Thumbnail600x600 {
    ns402:CmsImage1 foaf:thumbnail ns176:Thumbnail600x600 .

    ns176:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns402:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:0 .
}

ns177:Thumbnail200x200 {
    ns354:CmsImage1 foaf:thumbnail ns177:Thumbnail200x200 .

    ns177:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns354:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:84 .
}

ns178:Thumbnail200x200 {
    ns359:CmsImage0 foaf:thumbnail ns178:Thumbnail200x200 .

    ns178:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns359:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:43 .
}

ns8:25 {
    ns8:25 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 5" ;
        skos:prefLabel "CmsConcept 25" .
}

ns129:Thumbnail200x200 {
    ns129:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns40:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:88 .

    ns40:CmsImage0 foaf:thumbnail ns129:Thumbnail200x200 .
}

ns179:Thumbnail800x800 {
    ns402:CmsImage0 foaf:thumbnail ns179:Thumbnail800x800 .

    ns179:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns402:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:0 .
}

ns147:Thumbnail600x600 {
    ns147:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns194:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:95 .

    ns194:CmsImage1 foaf:thumbnail ns147:Thumbnail600x600 .
}

ns180:Thumbnail800x800 {
    ns180:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns40:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:88 .

    ns40:CmsImage1 foaf:thumbnail ns180:Thumbnail800x800 .
}

ns181:Thumbnail600x600 {
    ns181:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns27:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:37 .

    ns27:CmsImage1 foaf:thumbnail ns181:Thumbnail600x600 .
}

ns83:Thumbnail200x200 {
    ns83:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns404:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:freestandingwork10 .

    ns404:CmsImage0 foaf:thumbnail ns83:Thumbnail200x200 .
}

ns182:Thumbnail600x600 {
    ns252:CmsImage0 foaf:thumbnail ns182:Thumbnail600x600 .

    ns182:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns252:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:73 .
}

ns183:Thumbnail400x400 {
    ns328:CmsImage0 foaf:thumbnail ns183:Thumbnail400x400 .

    ns183:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns328:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:11 .
}

ns184:Thumbnail400x400 {
    ns318:CmsImage0 foaf:thumbnail ns184:Thumbnail400x400 .

    ns184:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns318:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:31 .
}

ns170:Thumbnail200x200 {
    ns170:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns35:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:66 .

    ns35:CmsImage0 foaf:thumbnail ns170:Thumbnail200x200 .
}

ns185:Thumbnail400x400 {
    ns394:CmsImage1 foaf:thumbnail ns185:Thumbnail400x400 .

    ns185:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns394:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:42 .
}

ns186:CmsImage1 {
    ns186:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:109 .
}

ns58:Thumbnail800x800 {
    ns58:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns313:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:person3 .

    ns313:CmsImage0 foaf:thumbnail ns58:Thumbnail800x800 .
}

ns121:Thumbnail200x200 {
    ns121:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns312:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:60 .

    ns312:CmsImage1 foaf:thumbnail ns121:Thumbnail200x200 .
}

ns92:Thumbnail600x600 {
    ns92:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns9:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:21 .

    ns9:CmsImage0 foaf:thumbnail ns92:Thumbnail600x600 .
}

ns168:Thumbnail200x200 {
    ns168:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns248:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:104 .

    ns248:CmsImage1 foaf:thumbnail ns168:Thumbnail200x200 .
}

ns144:Thumbnail400x400 {
    ns144:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns401:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:26 .

    ns401:CmsImage1 foaf:thumbnail ns144:Thumbnail400x400 .
}

ns79:Thumbnail400x400 {
    ns79:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns332:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:person1 .

    ns332:CmsImage0 foaf:thumbnail ns79:Thumbnail400x400 .
}

ns144:Thumbnail600x600 {
    ns144:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns401:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:26 .

    ns401:CmsImage1 foaf:thumbnail ns144:Thumbnail600x600 .
}

ns187:Thumbnail200x200 {
    ns380:CmsImage1 foaf:thumbnail ns187:Thumbnail200x200 .

    ns187:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns380:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns17:work0 .
}

ns188:Thumbnail800x800 {
    ns342:CmsImage0 foaf:thumbnail ns188:Thumbnail800x800 .

    ns188:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns342:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:45 .
}

ns189:CmsImage1 {
    ns189:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:24 .
}

ns143:Thumbnail400x400 {
    ns143:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns285:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:35 .

    ns285:CmsImage1 foaf:thumbnail ns143:Thumbnail400x400 .
}

ns190:Thumbnail400x400 {
    ns261:CmsImage1 foaf:thumbnail ns190:Thumbnail400x400 .

    ns190:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns261:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:85 .
}

ns181:Thumbnail200x200 {
    ns181:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns27:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:37 .

    ns27:CmsImage1 foaf:thumbnail ns181:Thumbnail200x200 .
}

ns191:CmsImage0 {
    ns191:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:14 .
}

ns192:Thumbnail800x800 {
    ns270:CmsImage1 foaf:thumbnail ns192:Thumbnail800x800 .

    ns192:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns270:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns17:work2 .
}

ns80:freestandingwork10 {
    ns80:freestandingwork10 a cms:Work ;
        dcterms:alternative "FreestandingWork10 alternative title 0",
            "FreestandingWork10 alternative title 1" ;
        dcterms:contributor _:Nba06344453ab4633867da4c4086c8181,
            _:Nfe410886c5d842cab00295eecade834b ;
        dcterms:creator ns80:organization2,
            ns80:organization3 ;
        dcterms:description _:N63761d7e390e4198af0e20b089d80928 ;
        dcterms:extent ns8:10,
            ns8:11 ;
        dcterms:identifier "FreestandingWork10Id0",
            "FreestandingWork10Id1" ;
        dcterms:language ns8:20,
            ns8:21 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns8:40,
            ns8:41 ;
        dcterms:provenance "FreestandingWork10 provenance 0",
            "FreestandingWork10 provenance 1" ;
        dcterms:publisher ns8:50,
            ns8:51 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 rights holder" ;
        dcterms:source ns8:60,
            ns8:61 ;
        dcterms:spatial ns80:freestandingwork10Location ;
        dcterms:subject ns8:80,
            ns8:81 ;
        dcterms:title "FreestandingWork10" ;
        dcterms:type ns8:100,
            ns8:101 ;
        vra:culturalContext ns8:0,
            ns8:1 ;
        vra:material ns8:30,
            ns8:31 ;
        vra:technique ns8:90,
            ns8:91 ;
        foaf:page <http://example.com/work/10> .

    _:N63761d7e390e4198af0e20b089d80928 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:Nba06344453ab4633867da4c4086c8181 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork10 contributor 0" .

    _:Nfe410886c5d842cab00295eecade834b a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork10 contributor 1" .
}

ns193:CmsImage0 {
    ns193:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:100 .
}

ns83:Thumbnail800x800 {
    ns83:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns404:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:freestandingwork10 .

    ns404:CmsImage0 foaf:thumbnail ns83:Thumbnail800x800 .
}

ns194:CmsImage0 {
    ns194:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:95 .
}

ns195:Thumbnail800x800 {
    ns195:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns96:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:13 .

    ns96:CmsImage0 foaf:thumbnail ns195:Thumbnail800x800 .
}

ns23:Thumbnail800x800 {
    ns23:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns29:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:15 .

    ns29:CmsImage1 foaf:thumbnail ns23:Thumbnail800x800 .
}

ns196:Thumbnail200x200 {
    ns302:CmsImage1 foaf:thumbnail ns196:Thumbnail200x200 .

    ns196:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns302:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:17 .
}

ns197:Thumbnail400x400 {
    ns254:CmsImage1 foaf:thumbnail ns197:Thumbnail400x400 .

    ns197:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns254:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:19 .
}

ns198:Thumbnail400x400 {
    ns391:CmsImage1 foaf:thumbnail ns198:Thumbnail400x400 .

    ns198:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns391:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:39 .
}

ns72:Thumbnail200x200 {
    ns72:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns186:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:109 .

    ns186:CmsImage0 foaf:thumbnail ns72:Thumbnail200x200 .
}

ns108:CmsImage0 {
    ns108:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:91 .
}

ns9:CmsImage0 {
    ns9:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:21 .
}

ns199:Thumbnail800x800 {
    ns385:CmsImage1 foaf:thumbnail ns199:Thumbnail800x800 .

    ns199:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:person2 .
}

ns114:CmsImage0 {
    ns114:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:80 .
}

ns200:Thumbnail200x200 {
    ns257:CmsImage0 foaf:thumbnail ns200:Thumbnail200x200 .

    ns200:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns257:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:7 .
}

ns201:Thumbnail400x400 {
    ns403:CmsImage0 foaf:thumbnail ns201:Thumbnail400x400 .

    ns201:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:64 .
}

ns202:Thumbnail200x200 {
    ns61:CmsImage1 foaf:thumbnail ns202:Thumbnail200x200 .

    ns202:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns61:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns17:work3 .
}

ns147:Thumbnail400x400 {
    ns147:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns194:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:95 .

    ns194:CmsImage1 foaf:thumbnail ns147:Thumbnail400x400 .
}

ns197:Thumbnail600x600 {
    ns197:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns254:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:19 .

    ns254:CmsImage1 foaf:thumbnail ns197:Thumbnail600x600 .
}

ns141:Thumbnail600x600 {
    ns141:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns312:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:60 .

    ns312:CmsImage0 foaf:thumbnail ns141:Thumbnail600x600 .
}

ns141:Thumbnail400x400 {
    ns141:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns312:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:60 .

    ns312:CmsImage0 foaf:thumbnail ns141:Thumbnail400x400 .
}

ns26:CmsImage1 {
    ns26:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:83 .
}

ns203:Thumbnail400x400 {
    ns203:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns146:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:30 .

    ns146:CmsImage1 foaf:thumbnail ns203:Thumbnail400x400 .
}

ns204:Thumbnail600x600 {
    ns362:CmsImage1 foaf:thumbnail ns204:Thumbnail600x600 .

    ns204:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns362:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:48 .
}

ns205:CmsImage0 {
    ns205:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:4 .
}

ns206:CmsImage1 {
    ns206:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:98 .
}

ns33:Thumbnail200x200 {
    ns33:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns12:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:106 .

    ns12:CmsImage0 foaf:thumbnail ns33:Thumbnail200x200 .
}

ns207:CmsImage1 {
    ns207:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:76 .
}

ns133:Thumbnail400x400 {
    ns133:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns34:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:72 .

    ns34:CmsImage1 foaf:thumbnail ns133:Thumbnail400x400 .
}

ns17:work3 {
    ns17:work3 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork3 alternative title 0",
            "CmsCollection0CmsWork3 alternative title 1" ;
        dcterms:contributor _:N510676b3d8b443a2afb2a9971c3537a6,
            _:Nbee04f2635514c00ad6d3629955b5282 ;
        dcterms:creator ns80:person0,
            ns80:person1 ;
        dcterms:extent ns8:13,
            ns8:14 ;
        dcterms:identifier "CmsCollection0CmsWork3Id0",
            "CmsCollection0CmsWork3Id1" ;
        dcterms:language ns8:23,
            ns8:24 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns8:43,
            ns8:44 ;
        dcterms:provenance "CmsCollection0CmsWork3 provenance 0",
            "CmsCollection0CmsWork3 provenance 1" ;
        dcterms:publisher ns8:53,
            ns8:54 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 rights holder" ;
        dcterms:source ns8:63,
            ns8:64 ;
        dcterms:spatial ns17:work3Location ;
        dcterms:subject ns8:83,
            ns8:84 ;
        dcterms:title "CmsCollection0CmsWork3" ;
        dcterms:type ns8:103,
            ns8:104 ;
        vra:culturalContext ns8:3,
            ns8:4 ;
        vra:material ns8:33,
            ns8:34 ;
        vra:technique ns8:93,
            ns8:94 ;
        cms:collection ns80:collection0 .

    _:N510676b3d8b443a2afb2a9971c3537a6 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork3 contributor 1" .

    _:Nbee04f2635514c00ad6d3629955b5282 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork3 contributor 0" .
}

ns208:Thumbnail600x600 {
    ns279:CmsImage1 foaf:thumbnail ns208:Thumbnail600x600 .

    ns208:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns279:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:56 .
}

ns8:27 {
    ns8:27 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 7" ;
        skos:prefLabel "CmsConcept 27" .
}

ns138:Thumbnail600x600 {
    ns138:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns191:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:14 .

    ns191:CmsImage1 foaf:thumbnail ns138:Thumbnail600x600 .
}

ns209:Thumbnail400x400 {
    ns209:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns2:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:69 .

    ns2:CmsImage0 foaf:thumbnail ns209:Thumbnail400x400 .
}

ns163:Thumbnail400x400 {
    ns163:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns108:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:91 .

    ns108:CmsImage0 foaf:thumbnail ns163:Thumbnail400x400 .
}

ns210:CmsImage1 {
    ns210:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:71 .
}

ns211:Thumbnail200x200 {
    ns393:CmsImage0 foaf:thumbnail ns211:Thumbnail200x200 .

    ns211:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns393:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:96 .
}

ns47:Thumbnail800x800 {
    ns47:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns397:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:10 .

    ns397:CmsImage0 foaf:thumbnail ns47:Thumbnail800x800 .
}

ns212:Thumbnail200x200 {
    ns212:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns210:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:71 .

    ns210:CmsImage1 foaf:thumbnail ns212:Thumbnail200x200 .
}

ns104:Thumbnail200x200 {
    ns104:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns400:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:25 .

    ns400:CmsImage0 foaf:thumbnail ns104:Thumbnail200x200 .
}

ns213:Thumbnail800x800 {
    ns213:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns68:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:79 .

    ns68:CmsImage1 foaf:thumbnail ns213:Thumbnail800x800 .
}

ns66:Thumbnail800x800 {
    ns66:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns325:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:collection1 .

    ns325:CmsImage1 foaf:thumbnail ns66:Thumbnail800x800 .
}

ns214:Thumbnail600x600 {
    ns214:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns189:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:24 .

    ns189:CmsImage1 foaf:thumbnail ns214:Thumbnail600x600 .
}

ns215:CmsImage1 {
    ns215:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:63 .
}

ns216:Thumbnail800x800 {
    ns332:CmsImage1 foaf:thumbnail ns216:Thumbnail800x800 .

    ns216:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns332:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:person1 .
}

ns4:Thumbnail200x200 {
    ns4:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns400:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:25 .

    ns400:CmsImage1 foaf:thumbnail ns4:Thumbnail200x200 .
}

ns217:Thumbnail400x400 {
    ns396:CmsImage0 foaf:thumbnail ns217:Thumbnail400x400 .

    ns217:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:1 .
}

ns218:Thumbnail400x400 {
    ns342:CmsImage1 foaf:thumbnail ns218:Thumbnail400x400 .

    ns218:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns342:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:45 .
}

ns17:work2Creation {
    ns17:work2Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns80:organization4,
            ns80:person0 ;
        dcterms:date _:N236321b1a3cc4ef4abd774b472295bfe ;
        dcterms:description _:N7ff95e3fd8c24e868e10b15210745fb2 ;
        dcterms:spatial ns17:work2Location ;
        dcterms:title "CmsCollection0CmsWork2 creation" ;
        cms:work ns17:work2 .

    _:N236321b1a3cc4ef4abd774b472295bfe a cms:DateTimeDescription ;
        time:day "---30"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:N7ff95e3fd8c24e868e10b15210745fb2 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns219:CmsImage1 {
    ns219:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:90 .
}

ns220:Thumbnail600x600 {
    ns367:CmsImage1 foaf:thumbnail ns220:Thumbnail600x600 .

    ns220:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns367:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:27 .
}

ns74:Thumbnail600x600 {
    ns74:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns298:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:3 .

    ns298:CmsImage0 foaf:thumbnail ns74:Thumbnail600x600 .
}

ns221:CmsImage1 {
    ns221:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:78 .
}

ns222:Thumbnail200x200 {
    ns341:CmsImage0 foaf:thumbnail ns222:Thumbnail200x200 .

    ns222:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns341:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:61 .
}

ns32:Thumbnail200x200 {
    ns32:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns363:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:55 .

    ns363:CmsImage0 foaf:thumbnail ns32:Thumbnail200x200 .
}

ns11:Thumbnail400x400 {
    ns11:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns215:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:63 .

    ns215:CmsImage1 foaf:thumbnail ns11:Thumbnail400x400 .
}

ns223:Thumbnail200x200 {
    ns305:CmsImage1 foaf:thumbnail ns223:Thumbnail200x200 .

    ns223:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns305:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:47 .
}

ns224:Thumbnail600x600 {
    ns221:CmsImage0 foaf:thumbnail ns224:Thumbnail600x600 .

    ns224:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns221:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:78 .
}

ns113:Thumbnail200x200 {
    ns113:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns193:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:100 .

    ns193:CmsImage0 foaf:thumbnail ns113:Thumbnail200x200 .
}

ns225:CmsImage0 {
    ns225:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:97 .
}

ns59:Thumbnail200x200 {
    ns59:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns387:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:70 .

    ns387:CmsImage1 foaf:thumbnail ns59:Thumbnail200x200 .
}

ns179:Thumbnail400x400 {
    ns179:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns402:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:0 .

    ns402:CmsImage0 foaf:thumbnail ns179:Thumbnail400x400 .
}

ns8:21 {
    ns8:21 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 1" ;
        skos:prefLabel "CmsConcept 21" .
}

ns226:Thumbnail800x800 {
    ns401:CmsImage0 foaf:thumbnail ns226:Thumbnail800x800 .

    ns226:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns401:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:26 .
}

ns8:31 {
    ns8:31 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 1" ;
        skos:prefLabel "CmsConcept 31" .
}

ns17:work2Opening {
    ns17:work2Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-30"^^xsd:date ;
        dcterms:description _:N7ff95e3fd8c24e868e10b15210745fb2 ;
        dcterms:spatial _:Nebdbe4563c9344b2851ded3a597c024a ;
        dcterms:title "CmsCollection0CmsWork2 opening" ;
        cms:work ns17:work2 .

    _:Nebdbe4563c9344b2851ded3a597c024a a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N7ff95e3fd8c24e868e10b15210745fb2 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns227:Thumbnail600x600 {
    ns96:CmsImage1 foaf:thumbnail ns227:Thumbnail600x600 .

    ns227:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns96:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:13 .
}

ns145:Thumbnail600x600 {
    ns145:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns351:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:59 .

    ns351:CmsImage0 foaf:thumbnail ns145:Thumbnail600x600 .
}

ns8:97 {
    ns8:97 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 7" ;
        skos:prefLabel "CmsConcept 97" .
}

ns208:Thumbnail400x400 {
    ns208:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns279:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:56 .

    ns279:CmsImage1 foaf:thumbnail ns208:Thumbnail400x400 .
}

ns226:Thumbnail600x600 {
    ns226:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns401:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:26 .

    ns401:CmsImage0 foaf:thumbnail ns226:Thumbnail600x600 .
}

ns8:1 {
    ns8:1 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 1" ;
        skos:prefLabel "CmsConcept 1" .
}

ns15:Thumbnail800x800 {
    ns15:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns276:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:16 .

    ns276:CmsImage1 foaf:thumbnail ns15:Thumbnail800x800 .
}

ns186:CmsImage0 {
    ns186:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:109 .
}

ns8:44 {
    ns8:44 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 4" ;
        skos:prefLabel "CmsConcept 44" .
}

ns228:Thumbnail200x200 {
    ns274:CmsImage1 foaf:thumbnail ns228:Thumbnail200x200 .

    ns228:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns274:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:102 .
}

ns8:19 {
    ns8:19 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 9" ;
        skos:prefLabel "CmsConcept 19" .
}

ns229:Thumbnail400x400 {
    ns229:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns114:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:80 .

    ns114:CmsImage0 foaf:thumbnail ns229:Thumbnail400x400 .
}

ns213:Thumbnail600x600 {
    ns213:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns68:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:79 .

    ns68:CmsImage1 foaf:thumbnail ns213:Thumbnail600x600 .
}

ns74:Thumbnail800x800 {
    ns74:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns298:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:3 .

    ns298:CmsImage0 foaf:thumbnail ns74:Thumbnail800x800 .
}

ns230:Thumbnail800x800 {
    ns399:CmsImage1 foaf:thumbnail ns230:Thumbnail800x800 .

    ns230:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:57 .
}

ns91:Thumbnail200x200 {
    ns91:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns210:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:71 .

    ns210:CmsImage0 foaf:thumbnail ns91:Thumbnail200x200 .
}

ns231:CmsImage0 {
    ns231:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:75 .
}

ns73:CmsImage0 {
    ns73:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:107 .
}

ns232:Thumbnail600x600 {
    ns232:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns108:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:91 .

    ns108:CmsImage1 foaf:thumbnail ns232:Thumbnail600x600 .
}

ns233:Thumbnail600x600 {
    ns395:CmsImage0 foaf:thumbnail ns233:Thumbnail600x600 .

    ns233:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns395:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:89 .
}

ns234:Thumbnail200x200 {
    ns234:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns219:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:90 .

    ns219:CmsImage1 foaf:thumbnail ns234:Thumbnail200x200 .
}

ns235:Thumbnail800x800 {
    ns391:CmsImage0 foaf:thumbnail ns235:Thumbnail800x800 .

    ns235:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns391:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:39 .
}

ns236:Thumbnail600x600 {
    ns386:CmsImage0 foaf:thumbnail ns236:Thumbnail600x600 .

    ns236:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns386:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns21:work4 .
}

ns190:Thumbnail200x200 {
    ns190:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns261:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:85 .

    ns261:CmsImage1 foaf:thumbnail ns190:Thumbnail200x200 .
}

ns116:Thumbnail400x400 {
    ns116:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns155:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:86 .

    ns155:CmsImage0 foaf:thumbnail ns116:Thumbnail400x400 .
}

ns118:Thumbnail200x200 {
    ns118:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:77 .

    ns365:CmsImage0 foaf:thumbnail ns118:Thumbnail200x200 .
}

ns237:CmsImage0 {
    ns237:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:organization0 .
}

ns236:Thumbnail800x800 {
    ns236:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns386:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns21:work4 .

    ns386:CmsImage0 foaf:thumbnail ns236:Thumbnail800x800 .
}

ns154:Thumbnail800x800 {
    ns154:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:1 .

    ns396:CmsImage1 foaf:thumbnail ns154:Thumbnail800x800 .
}

ns16:Thumbnail200x200 {
    ns16:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns284:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:67 .

    ns284:CmsImage1 foaf:thumbnail ns16:Thumbnail200x200 .
}

ns232:Thumbnail800x800 {
    ns232:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns108:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:91 .

    ns108:CmsImage1 foaf:thumbnail ns232:Thumbnail800x800 .
}

ns170:Thumbnail400x400 {
    ns170:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns35:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:66 .

    ns35:CmsImage0 foaf:thumbnail ns170:Thumbnail400x400 .
}

ns134:Thumbnail600x600 {
    ns134:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns356:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:46 .

    ns356:CmsImage0 foaf:thumbnail ns134:Thumbnail600x600 .
}

ns155:CmsImage0 {
    ns155:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:86 .
}

ns8:45 {
    ns8:45 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 5" ;
        skos:prefLabel "CmsConcept 45" .
}

ns134:Thumbnail200x200 {
    ns134:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns356:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:46 .

    ns356:CmsImage0 foaf:thumbnail ns134:Thumbnail200x200 .
}

ns15:Thumbnail400x400 {
    ns15:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns276:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:16 .

    ns276:CmsImage1 foaf:thumbnail ns15:Thumbnail400x400 .
}

ns238:CmsImage1 {
    ns238:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:9 .
}

ns239:Thumbnail200x200 {
    ns334:CmsImage1 foaf:thumbnail ns239:Thumbnail200x200 .

    ns239:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns334:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:108 .
}

ns240:Thumbnail200x200 {
    ns318:CmsImage1 foaf:thumbnail ns240:Thumbnail200x200 .

    ns240:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns318:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:31 .
}

ns120:Thumbnail600x600 {
    ns120:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns137:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:94 .

    ns137:CmsImage1 foaf:thumbnail ns120:Thumbnail600x600 .
}

ns204:Thumbnail800x800 {
    ns204:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns362:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:48 .

    ns362:CmsImage1 foaf:thumbnail ns204:Thumbnail800x800 .
}

ns241:Thumbnail400x400 {
    ns398:CmsImage0 foaf:thumbnail ns241:Thumbnail400x400 .

    ns241:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns398:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:74 .
}

ns8:83 {
    ns8:83 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 3" ;
        skos:prefLabel "CmsConcept 83" .
}

ns174:Thumbnail800x800 {
    ns174:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns156:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:freestandingwork8 .

    ns156:CmsImage0 foaf:thumbnail ns174:Thumbnail800x800 .
}

ns5:Thumbnail400x400 {
    ns5:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns193:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:100 .

    ns193:CmsImage1 foaf:thumbnail ns5:Thumbnail400x400 .
}

ns8:101 {
    ns8:101 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 1" ;
        skos:prefLabel "CmsConcept 101" .
}

ns115:Thumbnail400x400 {
    ns115:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns381:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:49 .

    ns381:CmsImage0 foaf:thumbnail ns115:Thumbnail400x400 .
}

ns8:17 {
    ns8:17 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 7" ;
        skos:prefLabel "CmsConcept 17" .
}

ns242:Thumbnail400x400 {
    ns242:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns26:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:83 .

    ns26:CmsImage0 foaf:thumbnail ns242:Thumbnail400x400 .
}

ns243:Thumbnail800x800 {
    ns378:CmsImage1 foaf:thumbnail ns243:Thumbnail800x800 .

    ns243:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns378:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:6 .
}

ns244:Thumbnail400x400 {
    ns348:CmsImage0 foaf:thumbnail ns244:Thumbnail400x400 .

    ns244:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns348:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:51 .
}

ns245:CmsImage1 {
    ns245:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:81 .
}

ns184:Thumbnail200x200 {
    ns184:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns318:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:31 .

    ns318:CmsImage0 foaf:thumbnail ns184:Thumbnail200x200 .
}

ns80:freestandingwork10Creation {
    ns80:freestandingwork10Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns80:organization2,
            ns80:organization3 ;
        dcterms:date _:Nf95f63cd514a47eb9c4ae092bd26f196 ;
        dcterms:description _:N63761d7e390e4198af0e20b089d80928 ;
        dcterms:spatial ns80:freestandingwork10Location ;
        dcterms:title "FreestandingWork10 creation" ;
        cms:work ns80:freestandingwork10 .

    _:Nf95f63cd514a47eb9c4ae092bd26f196 a cms:DateTimeDescription ;
        time:day "---22"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:N63761d7e390e4198af0e20b089d80928 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns22:Thumbnail800x800 {
    ns22:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 1 rights holder" ;
        dcterms:title "Language 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns9:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:21 .

    ns9:CmsImage1 foaf:thumbnail ns22:Thumbnail800x800 .
}

ns203:Thumbnail800x800 {
    ns203:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns146:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:30 .

    ns146:CmsImage1 foaf:thumbnail ns203:Thumbnail800x800 .
}

ns181:Thumbnail800x800 {
    ns181:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns27:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:37 .

    ns27:CmsImage1 foaf:thumbnail ns181:Thumbnail800x800 .
}

ns30:Thumbnail800x800 {
    ns30:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns207:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:76 .

    ns207:CmsImage0 foaf:thumbnail ns30:Thumbnail800x800 .
}

ns103:Thumbnail200x200 {
    ns103:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns248:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:104 .

    ns248:CmsImage0 foaf:thumbnail ns103:Thumbnail200x200 .
}

ns150:Thumbnail200x200 {
    ns150:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns50:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:101 .

    ns50:CmsImage0 foaf:thumbnail ns150:Thumbnail200x200 .
}

ns246:Thumbnail800x800 {
    ns89:CmsImage0 foaf:thumbnail ns246:Thumbnail800x800 .

    ns246:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns89:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns21:work5 .
}

ns40:CmsImage0 {
    ns40:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:88 .
}

ns8:12 {
    ns8:12 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 2" ;
        skos:prefLabel "CmsConcept 12" .
}

ns216:Thumbnail600x600 {
    ns216:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns332:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:person1 .

    ns332:CmsImage1 foaf:thumbnail ns216:Thumbnail600x600 .
}

ns247:Thumbnail400x400 {
    ns383:CmsImage0 foaf:thumbnail ns247:Thumbnail400x400 .

    ns247:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns383:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns17:work1 .
}

ns62:Thumbnail400x400 {
    ns62:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns274:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:102 .

    ns274:CmsImage0 foaf:thumbnail ns62:Thumbnail400x400 .
}

ns248:CmsImage1 {
    ns248:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:104 .
}

ns76:Thumbnail600x600 {
    ns76:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns73:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:107 .

    ns73:CmsImage1 foaf:thumbnail ns76:Thumbnail600x600 .
}

ns131:Thumbnail200x200 {
    ns131:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns130:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:33 .

    ns130:CmsImage1 foaf:thumbnail ns131:Thumbnail200x200 .
}

ns36:Thumbnail800x800 {
    ns36:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns389:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:41 .

    ns389:CmsImage0 foaf:thumbnail ns36:Thumbnail800x800 .
}

ns249:Thumbnail200x200 {
    ns68:CmsImage0 foaf:thumbnail ns249:Thumbnail200x200 .

    ns249:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns68:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:79 .
}

ns250:Thumbnail600x600 {
    ns376:CmsImage0 foaf:thumbnail ns250:Thumbnail600x600 .

    ns250:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns376:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:34 .
}

ns251:CmsImage0 {
    ns251:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:52 .
}

ns252:CmsImage0 {
    ns252:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:73 .
}

ns112:Thumbnail600x600 {
    ns112:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns371:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:12 .

    ns371:CmsImage0 foaf:thumbnail ns112:Thumbnail600x600 .
}

ns217:Thumbnail200x200 {
    ns217:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:1 .

    ns396:CmsImage0 foaf:thumbnail ns217:Thumbnail200x200 .
}

ns253:Thumbnail800x800 {
    ns395:CmsImage1 foaf:thumbnail ns253:Thumbnail800x800 .

    ns253:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns395:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:89 .
}

ns225:CmsImage1 {
    ns225:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:97 .
}

ns254:CmsImage1 {
    ns254:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:19 .
}

ns183:Thumbnail600x600 {
    ns183:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns328:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:11 .

    ns328:CmsImage0 foaf:thumbnail ns183:Thumbnail600x600 .
}

ns255:Thumbnail200x200 {
    ns300:CmsImage1 foaf:thumbnail ns255:Thumbnail200x200 .

    ns255:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns300:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:40 .
}

ns256:Thumbnail600x600 {
    ns393:CmsImage1 foaf:thumbnail ns256:Thumbnail600x600 .

    ns256:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns393:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:96 .
}

ns8:3 {
    ns8:3 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 3" ;
        skos:prefLabel "CmsConcept 3" .
}

ns257:CmsImage1 {
    ns257:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:7 .
}

ns17:work1Opening {
    ns17:work1Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-31"^^xsd:date ;
        dcterms:spatial _:N50223acaeda2456ab66346fcaf396f53 ;
        dcterms:title "CmsCollection0CmsWork1 opening" ;
        cms:work ns17:work1 .

    _:N50223acaeda2456ab66346fcaf396f53 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns50:CmsImage1 {
    ns50:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:101 .
}

ns72:Thumbnail800x800 {
    ns72:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns186:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:109 .

    ns186:CmsImage0 foaf:thumbnail ns72:Thumbnail800x800 .
}

ns24:Thumbnail400x400 {
    ns24:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns257:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:7 .

    ns257:CmsImage1 foaf:thumbnail ns24:Thumbnail400x400 .
}

ns97:Thumbnail800x800 {
    ns97:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns355:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:5 .

    ns355:CmsImage1 foaf:thumbnail ns97:Thumbnail800x800 .
}

ns258:Thumbnail800x800 {
    ns309:CmsImage0 foaf:thumbnail ns258:Thumbnail800x800 .

    ns258:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns309:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:103 .
}

ns48:CmsImage1 {
    ns48:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:28 .
}

ns259:Thumbnail600x600 {
    ns259:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns156:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:freestandingwork8 .

    ns156:CmsImage1 foaf:thumbnail ns259:Thumbnail600x600 .
}

ns260:Thumbnail400x400 {
    ns260:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns221:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:78 .

    ns221:CmsImage1 foaf:thumbnail ns260:Thumbnail400x400 .
}

ns261:CmsImage1 {
    ns261:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:85 .
}

ns220:Thumbnail800x800 {
    ns220:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns367:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:27 .

    ns367:CmsImage1 foaf:thumbnail ns220:Thumbnail800x800 .
}

ns17:work1Location {
    ns17:work1Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns262:Thumbnail800x800 {
    ns146:CmsImage0 foaf:thumbnail ns262:Thumbnail800x800 .

    ns262:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns146:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:30 .
}

ns211:Thumbnail800x800 {
    ns211:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns393:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:96 .

    ns393:CmsImage0 foaf:thumbnail ns211:Thumbnail800x800 .
}

ns180:Thumbnail400x400 {
    ns180:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns40:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:88 .

    ns40:CmsImage1 foaf:thumbnail ns180:Thumbnail400x400 .
}

ns150:Thumbnail400x400 {
    ns150:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns50:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:101 .

    ns50:CmsImage0 foaf:thumbnail ns150:Thumbnail400x400 .
}

ns239:Thumbnail400x400 {
    ns239:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns334:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:108 .

    ns334:CmsImage1 foaf:thumbnail ns239:Thumbnail400x400 .
}

ns263:property_group {
    ns263:property_group a cms:PropertyGroup ;
        rdfs:label "Synthetic data properties" .
}

ns21:work5Location {
    ns21:work5Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns264:Thumbnail800x800 {
    ns268:CmsImage1 foaf:thumbnail ns264:Thumbnail800x800 .

    ns264:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns268:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:20 .
}

ns142:Thumbnail800x800 {
    ns142:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns338:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:87 .

    ns338:CmsImage0 foaf:thumbnail ns142:Thumbnail800x800 .
}

ns8:100 {
    ns8:100 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 0" ;
        skos:prefLabel "CmsConcept 100" .
}

ns8:77 {
    ns8:77 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 7" ;
        skos:prefLabel "CmsConcept 77" .
}

ns265:Thumbnail400x400 {
    ns308:CmsImage1 foaf:thumbnail ns265:Thumbnail400x400 .

    ns265:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns308:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:54 .
}

ns266:CmsImage0 {
    ns266:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns21:work7 .
}

ns217:Thumbnail600x600 {
    ns217:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:1 .

    ns396:CmsImage0 foaf:thumbnail ns217:Thumbnail600x600 .
}

ns124:Thumbnail800x800 {
    ns124:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns6:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:93 .

    ns6:CmsImage1 foaf:thumbnail ns124:Thumbnail800x800 .
}

ns215:CmsImage0 {
    ns215:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:63 .
}

ns14:Thumbnail800x800 {
    ns14:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns50:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:101 .

    ns50:CmsImage1 foaf:thumbnail ns14:Thumbnail800x800 .
}

ns239:Thumbnail800x800 {
    ns239:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns334:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:108 .

    ns334:CmsImage1 foaf:thumbnail ns239:Thumbnail800x800 .
}

ns267:Thumbnail200x200 {
    ns348:CmsImage1 foaf:thumbnail ns267:Thumbnail200x200 .

    ns267:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns348:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:51 .
}

ns135:Thumbnail400x400 {
    ns135:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns194:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:95 .

    ns194:CmsImage0 foaf:thumbnail ns135:Thumbnail400x400 .
}

ns268:CmsImage0 {
    ns268:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:20 .
}

ns174:Thumbnail600x600 {
    ns174:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns156:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:freestandingwork8 .

    ns156:CmsImage0 foaf:thumbnail ns174:Thumbnail600x600 .
}

ns8:95 {
    ns8:95 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 5" ;
        skos:prefLabel "CmsConcept 95" .
}

ns23:Thumbnail400x400 {
    ns23:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns29:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:15 .

    ns29:CmsImage1 foaf:thumbnail ns23:Thumbnail400x400 .
}

ns226:Thumbnail400x400 {
    ns226:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns401:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:26 .

    ns401:CmsImage0 foaf:thumbnail ns226:Thumbnail400x400 .
}

ns269:Thumbnail400x400 {
    ns337:CmsImage0 foaf:thumbnail ns269:Thumbnail400x400 .

    ns269:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns337:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:22 .
}

ns166:Thumbnail800x800 {
    ns166:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns337:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:22 .

    ns337:CmsImage1 foaf:thumbnail ns166:Thumbnail800x800 .
}

ns270:CmsImage1 {
    ns270:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns17:work2 .
}

ns117:Thumbnail200x200 {
    ns117:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns225:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:97 .

    ns225:CmsImage1 foaf:thumbnail ns117:Thumbnail200x200 .
}

ns8:16 {
    ns8:16 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 6" ;
        skos:prefLabel "CmsConcept 16" .
}

ns271:Thumbnail800x800 {
    ns373:CmsImage0 foaf:thumbnail ns271:Thumbnail800x800 .

    ns271:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns373:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:68 .
}

ns37:Thumbnail200x200 {
    ns37:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns29:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:15 .

    ns29:CmsImage0 foaf:thumbnail ns37:Thumbnail200x200 .
}

ns152:Thumbnail400x400 {
    ns152:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns254:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:19 .

    ns254:CmsImage0 foaf:thumbnail ns152:Thumbnail400x400 .
}

ns272:Thumbnail800x800 {
    ns158:CmsImage1 foaf:thumbnail ns272:Thumbnail800x800 .

    ns272:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns158:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:29 .
}

dcterms:title {
    dcterms:title a cms:Property ;
        rdfs:label "Title" ;
        cms:propertyFilterable false ;
        cms:propertyGroup ns263:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Title> .
}

ns92:Thumbnail800x800 {
    ns92:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns9:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:21 .

    ns9:CmsImage0 foaf:thumbnail ns92:Thumbnail800x800 .
}

ns273:Thumbnail400x400 {
    ns270:CmsImage0 foaf:thumbnail ns273:Thumbnail400x400 .

    ns273:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns270:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns17:work2 .
}

ns274:CmsImage1 {
    ns274:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:102 .
}

ns275:Thumbnail200x200 {
    ns362:CmsImage0 foaf:thumbnail ns275:Thumbnail200x200 .

    ns275:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns362:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:48 .
}

ns276:CmsImage0 {
    ns276:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:16 .
}

ns277:CmsImage0 {
    ns277:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:44 .
}

ns136:Thumbnail200x200 {
    ns136:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns6:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:93 .

    ns6:CmsImage0 foaf:thumbnail ns136:Thumbnail200x200 .
}

ns218:Thumbnail800x800 {
    ns218:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns342:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:45 .

    ns342:CmsImage1 foaf:thumbnail ns218:Thumbnail800x800 .
}

ns8:76 {
    ns8:76 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 6" ;
        skos:prefLabel "CmsConcept 76" .
}

ns6:CmsImage0 {
    ns6:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:93 .
}

ns202:Thumbnail800x800 {
    ns202:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns61:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns17:work3 .

    ns61:CmsImage1 foaf:thumbnail ns202:Thumbnail800x800 .
}

ns98:Thumbnail600x600 {
    ns98:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns207:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:76 .

    ns207:CmsImage1 foaf:thumbnail ns98:Thumbnail600x600 .
}

ns38:Thumbnail600x600 {
    ns38:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns292:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:32 .

    ns292:CmsImage0 foaf:thumbnail ns38:Thumbnail600x600 .
}

ns271:Thumbnail200x200 {
    ns271:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns373:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:68 .

    ns373:CmsImage0 foaf:thumbnail ns271:Thumbnail200x200 .
}

ns278:Thumbnail600x600 {
    ns278:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns155:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:86 .

    ns155:CmsImage1 foaf:thumbnail ns278:Thumbnail600x600 .
}

ns5:Thumbnail600x600 {
    ns5:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns193:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:100 .

    ns193:CmsImage1 foaf:thumbnail ns5:Thumbnail600x600 .
}

ns279:CmsImage0 {
    ns279:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:56 .
}

ns78:Thumbnail200x200 {
    ns78:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns300:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:40 .

    ns300:CmsImage0 foaf:thumbnail ns78:Thumbnail200x200 .
}

ns63:Thumbnail600x600 {
    ns63:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns261:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:85 .

    ns261:CmsImage0 foaf:thumbnail ns63:Thumbnail600x600 .
}

ns8:63 {
    ns8:63 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 3" ;
        skos:prefLabel "CmsConcept 63" .
}

ns280:Thumbnail600x600 {
    ns326:CmsImage0 foaf:thumbnail ns280:Thumbnail600x600 .

    ns280:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns326:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:58 .
}

ns165:Thumbnail200x200 {
    ns165:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns367:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:27 .

    ns367:CmsImage0 foaf:thumbnail ns165:Thumbnail200x200 .
}

ns281:Thumbnail800x800 {
    ns339:CmsImage0 foaf:thumbnail ns281:Thumbnail800x800 .

    ns281:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns339:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:65 .
}

ns282:Thumbnail400x400 {
    ns327:CmsImage1 foaf:thumbnail ns282:Thumbnail400x400 .

    ns282:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns327:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:62 .
}

ns16:Thumbnail600x600 {
    ns16:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns284:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:67 .

    ns284:CmsImage1 foaf:thumbnail ns16:Thumbnail600x600 .
}

ns283:Thumbnail200x200 {
    ns283:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns114:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:80 .

    ns114:CmsImage1 foaf:thumbnail ns283:Thumbnail200x200 .
}

ns244:Thumbnail200x200 {
    ns244:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns348:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:51 .

    ns348:CmsImage0 foaf:thumbnail ns244:Thumbnail200x200 .
}

vra:material {
    vra:material a cms:Property ;
        rdfs:label "Material" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns263:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> .
}

ns284:CmsImage0 {
    ns284:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:67 .
}

ns113:Thumbnail400x400 {
    ns113:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns193:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:100 .

    ns193:CmsImage0 foaf:thumbnail ns113:Thumbnail400x400 .
}

ns46:Thumbnail600x600 {
    ns46:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns305:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:47 .

    ns305:CmsImage0 foaf:thumbnail ns46:Thumbnail600x600 .
}

ns285:CmsImage0 {
    ns285:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:35 .
}

ns286:Thumbnail600x600 {
    ns286:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns215:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:63 .

    ns215:CmsImage0 foaf:thumbnail ns286:Thumbnail600x600 .
}

ns278:Thumbnail800x800 {
    ns278:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns155:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:86 .

    ns155:CmsImage1 foaf:thumbnail ns278:Thumbnail800x800 .
}

ns287:Thumbnail200x200 {
    ns287:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns245:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:81 .

    ns245:CmsImage1 foaf:thumbnail ns287:Thumbnail200x200 .
}

ns146:CmsImage0 {
    ns146:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:30 .
}

ns288:Thumbnail200x200 {
    ns309:CmsImage1 foaf:thumbnail ns288:Thumbnail200x200 .

    ns288:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns309:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:103 .
}

ns289:Thumbnail600x600 {
    ns324:CmsImage0 foaf:thumbnail ns289:Thumbnail600x600 .

    ns289:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns324:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:105 .
}

ns138:Thumbnail800x800 {
    ns138:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns191:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:14 .

    ns191:CmsImage1 foaf:thumbnail ns138:Thumbnail800x800 .
}

ns290:Thumbnail800x800 {
    ns157:CmsImage1 foaf:thumbnail ns290:Thumbnail800x800 .

    ns290:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns157:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:organization1 .
}

ns291:Thumbnail600x600 {
    ns316:CmsImage1 foaf:thumbnail ns291:Thumbnail600x600 .

    ns291:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns316:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:50 .
}

ns182:Thumbnail400x400 {
    ns182:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns252:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:73 .

    ns252:CmsImage0 foaf:thumbnail ns182:Thumbnail400x400 .
}

ns226:Thumbnail200x200 {
    ns226:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns401:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:26 .

    ns401:CmsImage0 foaf:thumbnail ns226:Thumbnail200x200 .
}

ns63:Thumbnail200x200 {
    ns63:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns261:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:85 .

    ns261:CmsImage0 foaf:thumbnail ns63:Thumbnail200x200 .
}

ns227:Thumbnail400x400 {
    ns227:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns96:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:13 .

    ns96:CmsImage1 foaf:thumbnail ns227:Thumbnail400x400 .
}

ns58:Thumbnail600x600 {
    ns58:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns313:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:person3 .

    ns313:CmsImage0 foaf:thumbnail ns58:Thumbnail600x600 .
}

ns85:Thumbnail200x200 {
    ns85:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns325:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:collection1 .

    ns325:CmsImage0 foaf:thumbnail ns85:Thumbnail200x200 .
}

ns265:Thumbnail200x200 {
    ns265:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns308:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:54 .

    ns308:CmsImage1 foaf:thumbnail ns265:Thumbnail200x200 .
}

ns259:Thumbnail400x400 {
    ns259:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns156:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:freestandingwork8 .

    ns156:CmsImage1 foaf:thumbnail ns259:Thumbnail400x400 .
}

ns84:Thumbnail200x200 {
    ns84:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns359:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:43 .

    ns359:CmsImage1 foaf:thumbnail ns84:Thumbnail200x200 .
}

ns105:Thumbnail200x200 {
    ns105:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns206:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:98 .

    ns206:CmsImage0 foaf:thumbnail ns105:Thumbnail200x200 .
}

ns273:Thumbnail800x800 {
    ns273:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns270:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns17:work2 .

    ns270:CmsImage0 foaf:thumbnail ns273:Thumbnail800x800 .
}

ns8:4 {
    ns8:4 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 4" ;
        skos:prefLabel "CmsConcept 4" .
}

ns116:Thumbnail200x200 {
    ns116:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns155:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:86 .

    ns155:CmsImage0 foaf:thumbnail ns116:Thumbnail200x200 .
}

ns292:CmsImage1 {
    ns292:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:32 .
}

ns8:85 {
    ns8:85 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 5" ;
        skos:prefLabel "CmsConcept 85" .
}

ns8:74 {
    ns8:74 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 4" ;
        skos:prefLabel "CmsConcept 74" .
}

ns228:Thumbnail800x800 {
    ns228:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns274:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:102 .

    ns274:CmsImage1 foaf:thumbnail ns228:Thumbnail800x800 .
}

ns20:Thumbnail600x600 {
    ns20:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns329:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:organization2 .

    ns329:CmsImage0 foaf:thumbnail ns20:Thumbnail600x600 .
}

ns159:Thumbnail800x800 {
    ns159:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns386:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns21:work4 .

    ns386:CmsImage1 foaf:thumbnail ns159:Thumbnail800x800 .
}

ns106:CmsImage0 {
    ns106:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns21:work6 .
}

ns86:Thumbnail800x800 {
    ns86:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns285:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:35 .

    ns285:CmsImage0 foaf:thumbnail ns86:Thumbnail800x800 .
}

ns8:82 {
    ns8:82 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 2" ;
        skos:prefLabel "CmsConcept 82" .
}

ns81:CmsImage0 {
    ns81:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:53 .
}

ns38:Thumbnail400x400 {
    ns38:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns292:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:32 .

    ns292:CmsImage0 foaf:thumbnail ns38:Thumbnail400x400 .
}

ns95:Thumbnail200x200 {
    ns95:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns339:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:65 .

    ns339:CmsImage1 foaf:thumbnail ns95:Thumbnail200x200 .
}

ns293:Thumbnail800x800 {
    ns293:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns158:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:29 .

    ns158:CmsImage0 foaf:thumbnail ns293:Thumbnail800x800 .
}

ns64:Thumbnail800x800 {
    ns64:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns205:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:4 .

    ns205:CmsImage1 foaf:thumbnail ns64:Thumbnail800x800 .
}

ns194:CmsImage1 {
    ns194:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:95 .
}

ns214:Thumbnail400x400 {
    ns214:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns189:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:24 .

    ns189:CmsImage1 foaf:thumbnail ns214:Thumbnail400x400 .
}

ns294:Thumbnail800x800 {
    ns371:CmsImage1 foaf:thumbnail ns294:Thumbnail800x800 .

    ns294:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns371:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:12 .
}

ns295:CmsImage0 {
    ns295:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:92 .
}

ns296:Thumbnail800x800 {
    ns296:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns284:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:67 .

    ns284:CmsImage0 foaf:thumbnail ns296:Thumbnail800x800 .
}

ns38:Thumbnail200x200 {
    ns38:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns292:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:32 .

    ns292:CmsImage0 foaf:thumbnail ns38:Thumbnail200x200 .
}

ns154:Thumbnail200x200 {
    ns154:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:1 .

    ns396:CmsImage1 foaf:thumbnail ns154:Thumbnail200x200 .
}

ns240:Thumbnail400x400 {
    ns240:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns318:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:31 .

    ns318:CmsImage1 foaf:thumbnail ns240:Thumbnail400x400 .
}

ns297:Thumbnail200x200 {
    ns387:CmsImage0 foaf:thumbnail ns297:Thumbnail200x200 .

    ns297:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns387:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:70 .
}

ns298:CmsImage0 {
    ns298:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:3 .
}

ns299:Thumbnail600x600 {
    ns299:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns52:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:82 .

    ns52:CmsImage0 foaf:thumbnail ns299:Thumbnail600x600 .
}

ns153:Thumbnail800x800 {
    ns153:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns186:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:109 .

    ns186:CmsImage1 foaf:thumbnail ns153:Thumbnail800x800 .
}

ns17:work1 {
    ns17:work1 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork1 alternative title 0",
            "CmsCollection0CmsWork1 alternative title 1" ;
        dcterms:contributor _:N36c7bc4d92d44c88bacd037ff87ba05f,
            _:Nef39db6082e843e8bd20ad8203c26eb2 ;
        dcterms:creator ns80:organization3,
            ns80:organization4 ;
        dcterms:extent ns8:11,
            ns8:12 ;
        dcterms:identifier "CmsCollection0CmsWork1Id0",
            "CmsCollection0CmsWork1Id1" ;
        dcterms:language ns8:21,
            ns8:22 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns8:41,
            ns8:42 ;
        dcterms:provenance "CmsCollection0CmsWork1 provenance 0",
            "CmsCollection0CmsWork1 provenance 1" ;
        dcterms:publisher ns8:51,
            ns8:52 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 rights holder" ;
        dcterms:source ns8:61,
            ns8:62 ;
        dcterms:spatial ns17:work1Location ;
        dcterms:subject ns8:81,
            ns8:82 ;
        dcterms:title "CmsCollection0CmsWork1" ;
        dcterms:type ns8:101,
            ns8:102 ;
        vra:culturalContext ns8:1,
            ns8:2 ;
        vra:material ns8:31,
            ns8:32 ;
        vra:technique ns8:91,
            ns8:92 ;
        cms:collection ns80:collection0 .

    _:N36c7bc4d92d44c88bacd037ff87ba05f a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork1 contributor 1" .

    _:Nef39db6082e843e8bd20ad8203c26eb2 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork1 contributor 0" .
}

ns74:Thumbnail400x400 {
    ns74:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 0 rights holder" ;
        dcterms:title "Cultural context 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns298:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:3 .

    ns298:CmsImage0 foaf:thumbnail ns74:Thumbnail400x400 .
}

dcterms:publisher {
    dcterms:publisher a cms:Property ;
        rdfs:label "Publisher" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns263:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> .
}

ns229:Thumbnail800x800 {
    ns229:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns114:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:80 .

    ns114:CmsImage0 foaf:thumbnail ns229:Thumbnail800x800 .
}

ns230:Thumbnail200x200 {
    ns230:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:57 .

    ns399:CmsImage1 foaf:thumbnail ns230:Thumbnail200x200 .
}

_:N354ca23e310247c5944d7fe1282f23a3 {
    _:N354ca23e310247c5944d7fe1282f23a3 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N50223acaeda2456ab66346fcaf396f53 ;
        dcterms:title "CmsCollection0CmsWork1 closing" ;
        cms:work ns17:work1 .

    _:N50223acaeda2456ab66346fcaf396f53 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns300:CmsImage0 {
    ns300:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:40 .
}

ns8:18 {
    ns8:18 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 8" ;
        skos:prefLabel "CmsConcept 18" .
}

ns240:Thumbnail800x800 {
    ns240:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns318:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:31 .

    ns318:CmsImage1 foaf:thumbnail ns240:Thumbnail800x800 .
}

ns8:0 {
    ns8:0 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 0" ;
        skos:prefLabel "CmsConcept 0" .
}

ns301:Thumbnail200x200 {
    ns373:CmsImage1 foaf:thumbnail ns301:Thumbnail200x200 .

    ns301:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns373:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:68 .
}

ns19:Thumbnail400x400 {
    ns19:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns52:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:82 .

    ns52:CmsImage1 foaf:thumbnail ns19:Thumbnail400x400 .
}

ns302:CmsImage1 {
    ns302:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:17 .
}

ns87:Thumbnail400x400 {
    ns87:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns276:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:16 .

    ns276:CmsImage0 foaf:thumbnail ns87:Thumbnail400x400 .
}

ns265:Thumbnail600x600 {
    ns265:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns308:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:54 .

    ns308:CmsImage1 foaf:thumbnail ns265:Thumbnail600x600 .
}

ns76:Thumbnail800x800 {
    ns76:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 1 rights holder" ;
        dcterms:title "Type 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns73:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:107 .

    ns73:CmsImage1 foaf:thumbnail ns76:Thumbnail800x800 .
}

ns303:Thumbnail200x200 {
    ns363:CmsImage1 foaf:thumbnail ns303:Thumbnail200x200 .

    ns303:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns363:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:55 .
}

ns80:person4 {
    ns80:person4 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "4, CmsPerson" ;
        foaf:familyName "4" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 4" ;
        foaf:page ns80:person4page .
}

ns304:Thumbnail600x600 {
    ns329:CmsImage1 foaf:thumbnail ns304:Thumbnail600x600 .

    ns304:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns329:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:organization2 .
}

ns305:CmsImage1 {
    ns305:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:47 .
}

ns80:freestandingwork11Location {
    ns80:freestandingwork11Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns306:Thumbnail600x600 {
    ns251:CmsImage1 foaf:thumbnail ns306:Thumbnail600x600 .

    ns306:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns251:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:52 .
}

ns289:Thumbnail200x200 {
    ns289:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns324:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:105 .

    ns324:CmsImage0 foaf:thumbnail ns289:Thumbnail200x200 .
}

ns21:work7Creation {
    ns21:work7Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns80:organization0,
            ns80:person4 ;
        dcterms:date _:N6502d695eeb14711ab94cf19727c1485 ;
        dcterms:spatial ns21:work7Location ;
        dcterms:title "CmsCollection1CmsWork7 creation" ;
        cms:work ns21:work7 .

    _:N6502d695eeb14711ab94cf19727c1485 a cms:DateTimeDescription ;
        time:day "---25"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns178:Thumbnail600x600 {
    ns178:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns359:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:43 .

    ns359:CmsImage0 foaf:thumbnail ns178:Thumbnail600x600 .
}

ns307:CmsImage1 {
    ns307:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:18 .
}

ns164:CmsImage1 {
    ns164:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:2 .
}

ns308:CmsImage1 {
    ns308:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:54 .
}

ns119:Thumbnail400x400 {
    ns119:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns326:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:58 .

    ns326:CmsImage1 foaf:thumbnail ns119:Thumbnail400x400 .
}

ns151:Thumbnail800x800 {
    ns151:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns225:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:97 .

    ns225:CmsImage0 foaf:thumbnail ns151:Thumbnail800x800 .
}

ns309:CmsImage0 {
    ns309:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:103 .
}

ns253:Thumbnail600x600 {
    ns253:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns395:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:89 .

    ns395:CmsImage1 foaf:thumbnail ns253:Thumbnail600x600 .
}

ns180:Thumbnail600x600 {
    ns180:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns40:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:88 .

    ns40:CmsImage1 foaf:thumbnail ns180:Thumbnail600x600 .
}

ns211:Thumbnail600x600 {
    ns211:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns393:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:96 .

    ns393:CmsImage0 foaf:thumbnail ns211:Thumbnail600x600 .
}

ns223:Thumbnail400x400 {
    ns223:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns305:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:47 .

    ns305:CmsImage1 foaf:thumbnail ns223:Thumbnail400x400 .
}

ns310:Thumbnail800x800 {
    ns266:CmsImage1 foaf:thumbnail ns310:Thumbnail800x800 .

    ns310:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns266:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns21:work7 .
}

ns311:Thumbnail600x600 {
    ns311:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns81:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:53 .

    ns81:CmsImage1 foaf:thumbnail ns311:Thumbnail600x600 .
}

ns312:CmsImage1 {
    ns312:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:60 .
}

ns294:Thumbnail400x400 {
    ns294:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns371:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:12 .

    ns371:CmsImage1 foaf:thumbnail ns294:Thumbnail400x400 .
}

ns313:CmsImage0 {
    ns313:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:person3 .
}

ns224:Thumbnail800x800 {
    ns224:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns221:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:78 .

    ns221:CmsImage0 foaf:thumbnail ns224:Thumbnail800x800 .
}

ns314:CmsImage1 {
    ns314:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:8 .
}

ns180:Thumbnail200x200 {
    ns180:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 1 rights holder" ;
        dcterms:title "Subject 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns40:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:88 .

    ns40:CmsImage1 foaf:thumbnail ns180:Thumbnail200x200 .
}

ns315:Thumbnail800x800 {
    ns315:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns130:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:33 .

    ns130:CmsImage0 foaf:thumbnail ns315:Thumbnail800x800 .
}

ns120:Thumbnail200x200 {
    ns120:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 1 rights holder" ;
        dcterms:title "Technique 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns137:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:94 .

    ns137:CmsImage1 foaf:thumbnail ns120:Thumbnail200x200 .
}

ns33:Thumbnail800x800 {
    ns33:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns12:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:106 .

    ns12:CmsImage0 foaf:thumbnail ns33:Thumbnail800x800 .
}

ns128:Thumbnail800x800 {
    ns128:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns388:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:23 .

    ns388:CmsImage0 foaf:thumbnail ns128:Thumbnail800x800 .
}

ns170:Thumbnail800x800 {
    ns170:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 0 rights holder" ;
        dcterms:title "Source 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns35:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:66 .

    ns35:CmsImage0 foaf:thumbnail ns170:Thumbnail800x800 .
}

ns316:CmsImage0 {
    ns316:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:50 .
}

ns317:Thumbnail200x200 {
    ns137:CmsImage0 foaf:thumbnail ns317:Thumbnail200x200 .

    ns317:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns137:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:94 .
}

ns80:freestandingwork8Creation {
    ns80:freestandingwork8Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns80:organization0,
            ns80:organization1 ;
        dcterms:date _:N088bc231e6c74974af0344266a0700bd ;
        dcterms:description _:N2a80e4e9a1954e38a8991331545f35c7 ;
        dcterms:spatial ns80:freestandingwork8Location ;
        dcterms:title "FreestandingWork8 creation" ;
        cms:work ns80:freestandingwork8 .

    _:N088bc231e6c74974af0344266a0700bd a cms:DateTimeDescription ;
        time:day "---24"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:N2a80e4e9a1954e38a8991331545f35c7 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns17:work0Location {
    ns17:work0Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

dcterms:medium {
    dcterms:medium a cms:Property ;
        rdfs:label "Medium" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns263:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> .
}

ns318:CmsImage1 {
    ns318:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:31 .
}

ns319:Thumbnail400x400 {
    ns319:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns205:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:4 .

    ns205:CmsImage0 foaf:thumbnail ns319:Thumbnail400x400 .
}

ns8:2 {
    ns8:2 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 2" ;
        skos:prefLabel "CmsConcept 2" .
}

ns320:Thumbnail200x200 {
    ns320:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns73:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:107 .

    ns73:CmsImage0 foaf:thumbnail ns320:Thumbnail200x200 .
}

ns321:Thumbnail600x600 {
    ns365:CmsImage1 foaf:thumbnail ns321:Thumbnail600x600 .

    ns321:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:77 .
}

ns8:94 {
    ns8:94 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 4" ;
        skos:prefLabel "CmsConcept 94" .
}

ns42:Thumbnail600x600 {
    ns42:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns307:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:18 .

    ns307:CmsImage1 foaf:thumbnail ns42:Thumbnail600x600 .
}

ns21:work4Opening {
    ns21:work4Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-28"^^xsd:date ;
        dcterms:description _:N1189b82494ee49b2befb12c377dac45b ;
        dcterms:spatial _:Nc855b7d44a7c4edd989b4620bd74cf5a ;
        dcterms:title "CmsCollection1CmsWork4 opening" ;
        cms:work ns21:work4 .

    _:N1189b82494ee49b2befb12c377dac45b a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .

    _:Nc855b7d44a7c4edd989b4620bd74cf5a a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns322:Thumbnail200x200 {
    ns238:CmsImage0 foaf:thumbnail ns322:Thumbnail200x200 .

    ns322:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns238:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:9 .
}

ns8:56 {
    ns8:56 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 6" ;
        skos:prefLabel "CmsConcept 56" .
}

ns323:CmsImage1 {
    ns323:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:freestandingwork9 .
}

ns8:29 {
    ns8:29 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 9" ;
        skos:prefLabel "CmsConcept 29" .
}

ns176:Thumbnail200x200 {
    ns176:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns402:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:0 .

    ns402:CmsImage1 foaf:thumbnail ns176:Thumbnail200x200 .
}

ns265:Thumbnail800x800 {
    ns265:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 1 rights holder" ;
        dcterms:title "Publisher 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns308:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:54 .

    ns308:CmsImage1 foaf:thumbnail ns265:Thumbnail800x800 .
}

ns90:Thumbnail400x400 {
    ns90:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:57 .

    ns399:CmsImage0 foaf:thumbnail ns90:Thumbnail400x400 .
}

_:Nb4f7400cc2ab4c3cb84112006f3e2a47 {
    _:Nb4f7400cc2ab4c3cb84112006f3e2a47 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N2a80e4e9a1954e38a8991331545f35c7 ;
        dcterms:spatial _:N58f35eb48d034863a40ac92c9742a5d2 ;
        dcterms:title "FreestandingWork8 closing" ;
        cms:work ns80:freestandingwork8 .

    _:N58f35eb48d034863a40ac92c9742a5d2 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N2a80e4e9a1954e38a8991331545f35c7 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns80:collection0 {
    ns80:collection0 a cms:Collection ;
        dcterms:description _:Nec9a6eb78a7e4d8088a98ff54503ea1f ;
        dcterms:title "CmsCollection0" .

    _:Nec9a6eb78a7e4d8088a98ff54503ea1f a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns234:Thumbnail600x600 {
    ns234:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns219:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:90 .

    ns219:CmsImage1 foaf:thumbnail ns234:Thumbnail600x600 .
}

ns228:Thumbnail400x400 {
    ns228:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns274:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:102 .

    ns274:CmsImage1 foaf:thumbnail ns228:Thumbnail400x400 .
}

ns127:Thumbnail200x200 {
    ns127:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns89:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns21:work5 .

    ns89:CmsImage1 foaf:thumbnail ns127:Thumbnail200x200 .
}

ns324:CmsImage1 {
    ns324:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:105 .
}

ns325:CmsImage1 {
    ns325:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:collection1 .
}

ns326:CmsImage1 {
    ns326:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:58 .
}

ns8:73 {
    ns8:73 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 3" ;
        skos:prefLabel "CmsConcept 73" .
}

ns253:Thumbnail200x200 {
    ns253:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns395:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:89 .

    ns395:CmsImage1 foaf:thumbnail ns253:Thumbnail200x200 .
}

ns166:Thumbnail200x200 {
    ns166:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns337:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:22 .

    ns337:CmsImage1 foaf:thumbnail ns166:Thumbnail200x200 .
}

ns8:49 {
    ns8:49 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 9" ;
        skos:prefLabel "CmsConcept 49" .
}

ns49:Thumbnail600x600 {
    ns49:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 0 rights holder" ;
        dcterms:title "Publisher 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns279:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:56 .

    ns279:CmsImage0 foaf:thumbnail ns49:Thumbnail600x600 .
}

ns327:CmsImage0 {
    ns327:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:62 .
}

ns36:Thumbnail200x200 {
    ns36:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns389:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:41 .

    ns389:CmsImage0 foaf:thumbnail ns36:Thumbnail200x200 .
}

ns175:Thumbnail200x200 {
    ns175:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns350:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:organization4 .

    ns350:CmsImage1 foaf:thumbnail ns175:Thumbnail200x200 .
}

ns315:Thumbnail600x600 {
    ns315:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns130:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:33 .

    ns130:CmsImage0 foaf:thumbnail ns315:Thumbnail600x600 .
}

ns80:person3 {
    ns80:person3 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "3, CmsPerson" ;
        foaf:familyName "3" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 3" .
}

ns328:CmsImage1 {
    ns328:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:11 .
}

ns256:Thumbnail400x400 {
    ns256:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns393:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:96 .

    ns393:CmsImage1 foaf:thumbnail ns256:Thumbnail400x400 .
}

ns65:Thumbnail400x400 {
    ns65:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns307:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:18 .

    ns307:CmsImage0 foaf:thumbnail ns65:Thumbnail400x400 .
}

ns303:Thumbnail800x800 {
    ns303:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns363:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:55 .

    ns363:CmsImage1 foaf:thumbnail ns303:Thumbnail800x800 .
}

ns329:CmsImage1 {
    ns329:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:organization2 .
}

ns236:Thumbnail200x200 {
    ns236:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns386:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns21:work4 .

    ns386:CmsImage0 foaf:thumbnail ns236:Thumbnail200x200 .
}

ns15:Thumbnail600x600 {
    ns15:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns276:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:16 .

    ns276:CmsImage1 foaf:thumbnail ns15:Thumbnail600x600 .
}

ns213:Thumbnail400x400 {
    ns213:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns68:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:79 .

    ns68:CmsImage1 foaf:thumbnail ns213:Thumbnail400x400 .
}

ns223:Thumbnail800x800 {
    ns223:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns305:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:47 .

    ns305:CmsImage1 foaf:thumbnail ns223:Thumbnail800x800 .
}

ns8:91 {
    ns8:91 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 1" ;
        skos:prefLabel "CmsConcept 91" .
}

ns330:Thumbnail400x400 {
    ns372:CmsImage1 foaf:thumbnail ns330:Thumbnail400x400 .

    ns330:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns372:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:freestandingwork11 .
}

ns331:Thumbnail400x400 {
    ns331:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns238:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:9 .

    ns238:CmsImage1 foaf:thumbnail ns331:Thumbnail400x400 .
}

ns8:24 {
    ns8:24 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 4" ;
        skos:prefLabel "CmsConcept 24" .
}

ns313:CmsImage1 {
    ns313:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:person3 .
}

ns332:CmsImage0 {
    ns332:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:person1 .
}

ns124:Thumbnail400x400 {
    ns124:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns6:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:93 .

    ns6:CmsImage1 foaf:thumbnail ns124:Thumbnail400x400 .
}

ns333:Thumbnail600x600 {
    ns338:CmsImage1 foaf:thumbnail ns333:Thumbnail600x600 .

    ns333:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns338:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:87 .
}

ns334:CmsImage1 {
    ns334:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:108 .
}

ns80:freestandingwork9Opening {
    ns80:freestandingwork9Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-23"^^xsd:date ;
        dcterms:spatial _:Nc89113797dd1469e98d721b3df6945ec ;
        dcterms:title "FreestandingWork9 opening" ;
        cms:work ns80:freestandingwork9 .

    _:Nc89113797dd1469e98d721b3df6945ec a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns102:CmsImage1 {
    ns102:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:person4 .
}

ns62:Thumbnail600x600 {
    ns62:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns274:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:102 .

    ns274:CmsImage0 foaf:thumbnail ns62:Thumbnail600x600 .
}

ns312:CmsImage0 {
    ns312:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:60 .
}

ns79:Thumbnail600x600 {
    ns79:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns332:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:person1 .

    ns332:CmsImage0 foaf:thumbnail ns79:Thumbnail600x600 .
}

ns133:Thumbnail800x800 {
    ns133:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns34:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:72 .

    ns34:CmsImage1 foaf:thumbnail ns133:Thumbnail800x800 .
}

ns68:CmsImage0 {
    ns68:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:79 .
}

ns229:Thumbnail200x200 {
    ns229:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns114:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:80 .

    ns114:CmsImage0 foaf:thumbnail ns229:Thumbnail200x200 .
}

ns8:92 {
    ns8:92 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 2" ;
        skos:prefLabel "CmsConcept 92" .
}

ns80:collection1 {
    ns80:collection1 a cms:Collection ;
        dcterms:title "CmsCollection1" .
}

ns37:Thumbnail800x800 {
    ns37:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns29:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:15 .

    ns29:CmsImage0 foaf:thumbnail ns37:Thumbnail800x800 .
}

ns324:CmsImage0 {
    ns324:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:105 .
}

ns143:Thumbnail600x600 {
    ns143:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns285:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:35 .

    ns285:CmsImage1 foaf:thumbnail ns143:Thumbnail600x600 .
}

ns204:Thumbnail400x400 {
    ns204:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns362:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:48 .

    ns362:CmsImage1 foaf:thumbnail ns204:Thumbnail400x400 .
}

ns190:Thumbnail600x600 {
    ns190:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns261:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:85 .

    ns261:CmsImage1 foaf:thumbnail ns190:Thumbnail600x600 .
}

ns99:Thumbnail600x600 {
    ns99:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns350:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:organization4 .

    ns350:CmsImage0 foaf:thumbnail ns99:Thumbnail600x600 .
}

ns190:Thumbnail800x800 {
    ns190:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 1 rights holder" ;
        dcterms:title "Subject 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns261:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:85 .

    ns261:CmsImage1 foaf:thumbnail ns190:Thumbnail800x800 .
}

ns83:Thumbnail400x400 {
    ns83:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns404:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:freestandingwork10 .

    ns404:CmsImage0 foaf:thumbnail ns83:Thumbnail400x400 .
}

ns276:CmsImage1 {
    ns276:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 1 rights holder" ;
        dcterms:title "Extent 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:16 .
}

ns335:CmsImage1 {
    ns335:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:36 .
}

ns71:Thumbnail600x600 {
    ns71:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns102:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:person4 .

    ns102:CmsImage0 foaf:thumbnail ns71:Thumbnail600x600 .
}

ns336:Thumbnail200x200 {
    ns314:CmsImage0 foaf:thumbnail ns336:Thumbnail200x200 .

    ns336:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns314:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:8 .
}

ns337:CmsImage1 {
    ns337:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:22 .
}

ns140:Thumbnail800x800 {
    ns140:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns381:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:49 .

    ns381:CmsImage1 foaf:thumbnail ns140:Thumbnail800x800 .
}

ns251:CmsImage1 {
    ns251:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:52 .
}

ns37:Thumbnail600x600 {
    ns37:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns29:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:15 .

    ns29:CmsImage0 foaf:thumbnail ns37:Thumbnail600x600 .
}

ns338:CmsImage1 {
    ns338:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:87 .
}

ns339:CmsImage1 {
    ns339:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:65 .
}

ns322:Thumbnail400x400 {
    ns322:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns238:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:9 .

    ns238:CmsImage0 foaf:thumbnail ns322:Thumbnail400x400 .
}

ns109:Thumbnail600x600 {
    ns109:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns378:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:6 .

    ns378:CmsImage0 foaf:thumbnail ns109:Thumbnail600x600 .
}

ns104:Thumbnail400x400 {
    ns104:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns400:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:25 .

    ns400:CmsImage0 foaf:thumbnail ns104:Thumbnail400x400 .
}

ns259:Thumbnail200x200 {
    ns259:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns156:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:freestandingwork8 .

    ns156:CmsImage1 foaf:thumbnail ns259:Thumbnail200x200 .
}

ns340:Thumbnail600x600 {
    ns375:CmsImage0 foaf:thumbnail ns340:Thumbnail600x600 .

    ns340:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns375:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:person0 .
}

ns294:Thumbnail200x200 {
    ns294:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns371:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:12 .

    ns371:CmsImage1 foaf:thumbnail ns294:Thumbnail200x200 .
}

ns321:Thumbnail200x200 {
    ns321:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:77 .

    ns365:CmsImage1 foaf:thumbnail ns321:Thumbnail200x200 .
}

ns131:Thumbnail600x600 {
    ns131:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns130:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:33 .

    ns130:CmsImage1 foaf:thumbnail ns131:Thumbnail600x600 .
}

ns341:CmsImage1 {
    ns341:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:61 .
}

ns80:freestandingwork11Creation {
    ns80:freestandingwork11Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns80:organization3,
            ns80:organization4 ;
        dcterms:date _:Na442302eef1b4d6ea276dadc38bf2803 ;
        dcterms:spatial ns80:freestandingwork11Location ;
        dcterms:title "FreestandingWork11 creation" ;
        cms:work ns80:freestandingwork11 .

    _:Na442302eef1b4d6ea276dadc38bf2803 a cms:DateTimeDescription ;
        time:day "---21"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns336:Thumbnail800x800 {
    ns336:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns314:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:8 .

    ns314:CmsImage0 foaf:thumbnail ns336:Thumbnail800x800 .
}

ns250:Thumbnail800x800 {
    ns250:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns376:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:34 .

    ns376:CmsImage0 foaf:thumbnail ns250:Thumbnail800x800 .
}

ns10:Thumbnail600x600 {
    ns10:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns335:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:36 .

    ns335:CmsImage1 foaf:thumbnail ns10:Thumbnail600x600 .
}

ns309:CmsImage1 {
    ns309:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:103 .
}

ns8:11 {
    ns8:11 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 1" ;
        skos:prefLabel "CmsConcept 11" .
}

ns177:Thumbnail600x600 {
    ns177:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns354:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:84 .

    ns354:CmsImage1 foaf:thumbnail ns177:Thumbnail600x600 .
}

ns129:Thumbnail800x800 {
    ns129:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns40:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:88 .

    ns40:CmsImage0 foaf:thumbnail ns129:Thumbnail800x800 .
}

ns196:Thumbnail800x800 {
    ns196:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns302:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:17 .

    ns302:CmsImage1 foaf:thumbnail ns196:Thumbnail800x800 .
}

ns27:CmsImage0 {
    ns27:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:37 .
}

ns286:Thumbnail800x800 {
    ns286:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns215:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:63 .

    ns215:CmsImage0 foaf:thumbnail ns286:Thumbnail800x800 .
}

ns342:CmsImage1 {
    ns342:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:45 .
}

ns240:Thumbnail600x600 {
    ns240:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 1 rights holder" ;
        dcterms:title "Material 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns318:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:31 .

    ns318:CmsImage1 foaf:thumbnail ns240:Thumbnail600x600 .
}

ns249:Thumbnail400x400 {
    ns249:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns68:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:79 .

    ns68:CmsImage0 foaf:thumbnail ns249:Thumbnail400x400 .
}

ns343:Thumbnail800x800 {
    ns343:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns61:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns17:work3 .

    ns61:CmsImage0 foaf:thumbnail ns343:Thumbnail800x800 .
}

ns191:CmsImage1 {
    ns191:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 1 rights holder" ;
        dcterms:title "Extent 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:14 .
}

ns344:Thumbnail800x800 {
    ns403:CmsImage1 foaf:thumbnail ns344:Thumbnail800x800 .

    ns344:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:64 .
}

ns92:Thumbnail400x400 {
    ns92:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 1 image 0 rights holder" ;
        dcterms:title "Language 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns9:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:21 .

    ns9:CmsImage0 foaf:thumbnail ns92:Thumbnail400x400 .
}

ns100:Thumbnail800x800 {
    ns100:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns327:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:62 .

    ns327:CmsImage0 foaf:thumbnail ns100:Thumbnail800x800 .
}

ns60:Thumbnail600x600 {
    ns60:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns335:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:36 .

    ns335:CmsImage0 foaf:thumbnail ns60:Thumbnail600x600 .
}

ns320:Thumbnail800x800 {
    ns320:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns73:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:107 .

    ns73:CmsImage0 foaf:thumbnail ns320:Thumbnail800x800 .
}

ns321:Thumbnail400x400 {
    ns321:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:77 .

    ns365:CmsImage1 foaf:thumbnail ns321:Thumbnail400x400 .
}

ns345:Thumbnail400x400 {
    ns345:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns27:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:37 .

    ns27:CmsImage0 foaf:thumbnail ns345:Thumbnail400x400 .
}

ns213:Thumbnail200x200 {
    ns213:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 1 rights holder" ;
        dcterms:title "Spatial 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns68:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:79 .

    ns68:CmsImage1 foaf:thumbnail ns213:Thumbnail200x200 .
}

ns332:CmsImage1 {
    ns332:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:person1 .
}

ns247:Thumbnail800x800 {
    ns247:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns383:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns17:work1 .

    ns383:CmsImage0 foaf:thumbnail ns247:Thumbnail800x800 .
}

ns46:Thumbnail800x800 {
    ns46:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns305:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:47 .

    ns305:CmsImage0 foaf:thumbnail ns46:Thumbnail800x800 .
}

ns235:Thumbnail400x400 {
    ns235:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns391:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:39 .

    ns391:CmsImage0 foaf:thumbnail ns235:Thumbnail400x400 .
}

ns286:Thumbnail200x200 {
    ns286:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns215:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:63 .

    ns215:CmsImage0 foaf:thumbnail ns286:Thumbnail200x200 .
}

ns346:Thumbnail600x600 {
    ns346:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns164:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:2 .

    ns164:CmsImage0 foaf:thumbnail ns346:Thumbnail600x600 .
}

ns347:Thumbnail600x600 {
    ns383:CmsImage1 foaf:thumbnail ns347:Thumbnail600x600 .

    ns347:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns383:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns17:work1 .
}

ns211:Thumbnail400x400 {
    ns211:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns393:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:96 .

    ns393:CmsImage0 foaf:thumbnail ns211:Thumbnail400x400 .
}

ns39:Thumbnail600x600 {
    ns39:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns2:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:69 .

    ns2:CmsImage1 foaf:thumbnail ns39:Thumbnail600x600 .
}

ns300:CmsImage1 {
    ns300:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:40 .
}

ns348:CmsImage1 {
    ns348:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:51 .
}

ns341:CmsImage0 {
    ns341:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:61 .
}

ns349:Thumbnail600x600 {
    ns380:CmsImage0 foaf:thumbnail ns349:Thumbnail600x600 .

    ns349:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns380:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns17:work0 .
}

ns306:Thumbnail400x400 {
    ns306:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns251:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:52 .

    ns251:CmsImage1 foaf:thumbnail ns306:Thumbnail400x400 .
}

ns264:Thumbnail200x200 {
    ns264:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns268:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:20 .

    ns268:CmsImage1 foaf:thumbnail ns264:Thumbnail200x200 .
}

ns30:Thumbnail200x200 {
    ns30:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns207:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:76 .

    ns207:CmsImage0 foaf:thumbnail ns30:Thumbnail200x200 .
}

ns350:CmsImage1 {
    ns350:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:organization4 .
}

ns8:81 {
    ns8:81 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 1" ;
        skos:prefLabel "CmsConcept 81" .
}

ns128:Thumbnail400x400 {
    ns128:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns388:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:23 .

    ns388:CmsImage0 foaf:thumbnail ns128:Thumbnail400x400 .
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

ns131:Thumbnail800x800 {
    ns131:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns130:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:33 .

    ns130:CmsImage1 foaf:thumbnail ns131:Thumbnail800x800 .
}

ns179:Thumbnail600x600 {
    ns179:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns402:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:0 .

    ns402:CmsImage0 foaf:thumbnail ns179:Thumbnail600x600 .
}

ns59:Thumbnail800x800 {
    ns59:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns387:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:70 .

    ns387:CmsImage1 foaf:thumbnail ns59:Thumbnail800x800 .
}

ns351:CmsImage1 {
    ns351:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:59 .
}

ns352:Thumbnail600x600 {
    ns252:CmsImage1 foaf:thumbnail ns352:Thumbnail600x600 .

    ns352:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns252:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:73 .
}

ns352:Thumbnail400x400 {
    ns352:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns252:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:73 .

    ns252:CmsImage1 foaf:thumbnail ns352:Thumbnail400x400 .
}

ns4:Thumbnail400x400 {
    ns4:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns400:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:25 .

    ns400:CmsImage1 foaf:thumbnail ns4:Thumbnail400x400 .
}

ns41:Thumbnail600x600 {
    ns41:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns157:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:organization1 .

    ns157:CmsImage0 foaf:thumbnail ns41:Thumbnail600x600 .
}

ns171:Thumbnail400x400 {
    ns171:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns26:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:83 .

    ns26:CmsImage1 foaf:thumbnail ns171:Thumbnail400x400 .
}

ns19:Thumbnail200x200 {
    ns19:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns52:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:82 .

    ns52:CmsImage1 foaf:thumbnail ns19:Thumbnail200x200 .
}

ns353:Thumbnail400x400 {
    ns219:CmsImage0 foaf:thumbnail ns353:Thumbnail400x400 .

    ns353:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns219:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:90 .
}

ns25:Thumbnail800x800 {
    ns25:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns206:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:98 .

    ns206:CmsImage1 foaf:thumbnail ns25:Thumbnail800x800 .
}

ns192:Thumbnail200x200 {
    ns192:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns270:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns17:work2 .

    ns270:CmsImage1 foaf:thumbnail ns192:Thumbnail200x200 .
}

ns21:work6Opening {
    ns21:work6Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-26"^^xsd:date ;
        dcterms:description _:N1bcdf36bdc554949b54d85dae64923dc ;
        dcterms:spatial _:N0b724283180d463c846a269ce5d280d0 ;
        dcterms:title "CmsCollection1CmsWork6 opening" ;
        cms:work ns21:work6 .

    _:N0b724283180d463c846a269ce5d280d0 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N1bcdf36bdc554949b54d85dae64923dc a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns176:Thumbnail400x400 {
    ns176:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns402:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:0 .

    ns402:CmsImage1 foaf:thumbnail ns176:Thumbnail400x400 .
}

ns354:CmsImage0 {
    ns354:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:84 .
}

ns355:CmsImage1 {
    ns355:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:5 .
}

ns94:Thumbnail600x600 {
    ns94:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns308:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:54 .

    ns308:CmsImage0 foaf:thumbnail ns94:Thumbnail600x600 .
}

ns356:CmsImage0 {
    ns356:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:46 .
}

ns346:Thumbnail200x200 {
    ns346:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns164:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:2 .

    ns164:CmsImage0 foaf:thumbnail ns346:Thumbnail200x200 .
}

ns305:CmsImage0 {
    ns305:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 0 rights holder" ;
        dcterms:title "Medium 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:47 .
}

ns296:Thumbnail200x200 {
    ns296:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns284:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:67 .

    ns284:CmsImage0 foaf:thumbnail ns296:Thumbnail200x200 .
}

ns31:Thumbnail400x400 {
    ns31:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns404:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:freestandingwork10 .

    ns404:CmsImage1 foaf:thumbnail ns31:Thumbnail400x400 .
}

ns353:Thumbnail600x600 {
    ns353:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns219:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:90 .

    ns219:CmsImage0 foaf:thumbnail ns353:Thumbnail600x600 .
}

ns195:Thumbnail200x200 {
    ns195:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns96:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:13 .

    ns96:CmsImage0 foaf:thumbnail ns195:Thumbnail200x200 .
}

ns353:Thumbnail200x200 {
    ns353:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns219:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:90 .

    ns219:CmsImage0 foaf:thumbnail ns353:Thumbnail200x200 .
}

ns195:Thumbnail400x400 {
    ns195:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns96:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:13 .

    ns96:CmsImage0 foaf:thumbnail ns195:Thumbnail400x400 .
}

ns255:Thumbnail800x800 {
    ns255:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns300:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:40 .

    ns300:CmsImage1 foaf:thumbnail ns255:Thumbnail800x800 .
}

ns357:Thumbnail800x800 {
    ns398:CmsImage1 foaf:thumbnail ns357:Thumbnail800x800 .

    ns357:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns398:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:74 .
}

ns304:Thumbnail800x800 {
    ns304:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns329:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:organization2 .

    ns329:CmsImage1 foaf:thumbnail ns304:Thumbnail800x800 .
}

ns216:Thumbnail400x400 {
    ns216:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns332:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:person1 .

    ns332:CmsImage1 foaf:thumbnail ns216:Thumbnail400x400 .
}

ns269:Thumbnail600x600 {
    ns269:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns337:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:22 .

    ns337:CmsImage0 foaf:thumbnail ns269:Thumbnail600x600 .
}

ns41:Thumbnail400x400 {
    ns41:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 0 rights holder" ;
        dcterms:title "CmsOrganization 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns157:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:organization1 .

    ns157:CmsImage0 foaf:thumbnail ns41:Thumbnail400x400 .
}

ns121:Thumbnail400x400 {
    ns121:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns312:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:60 .

    ns312:CmsImage1 foaf:thumbnail ns121:Thumbnail400x400 .
}

ns358:Thumbnail200x200 {
    ns189:CmsImage0 foaf:thumbnail ns358:Thumbnail200x200 .

    ns358:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns189:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:24 .
}

ns158:CmsImage1 {
    ns158:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:29 .
}

ns161:Thumbnail600x600 {
    ns161:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns231:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:75 .

    ns231:CmsImage1 foaf:thumbnail ns161:Thumbnail600x600 .
}

ns86:Thumbnail600x600 {
    ns86:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns285:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:35 .

    ns285:CmsImage0 foaf:thumbnail ns86:Thumbnail600x600 .
}

ns359:CmsImage1 {
    ns359:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:43 .
}

ns72:Thumbnail400x400 {
    ns72:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 0 rights holder" ;
        dcterms:title "Type 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns186:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:109 .

    ns186:CmsImage0 foaf:thumbnail ns72:Thumbnail400x400 .
}

ns323:CmsImage0 {
    ns323:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:freestandingwork9 .
}

ns80:freestandingwork8Location {
    ns80:freestandingwork8Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns64:Thumbnail600x600 {
    ns64:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns205:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:4 .

    ns205:CmsImage1 foaf:thumbnail ns64:Thumbnail600x600 .
}

ns360:Thumbnail600x600 {
    ns237:CmsImage1 foaf:thumbnail ns360:Thumbnail600x600 .

    ns360:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns237:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:organization0 .
}

ns173:Thumbnail600x600 {
    ns173:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns266:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns21:work7 .

    ns266:CmsImage0 foaf:thumbnail ns173:Thumbnail600x600 .
}

ns8:78 {
    ns8:78 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 8" ;
        skos:prefLabel "CmsConcept 78" .
}

_:Ne663e7fcdc734012a5f31e7b997b00c7 {
    _:Ne663e7fcdc734012a5f31e7b997b00c7 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:Nc89113797dd1469e98d721b3df6945ec ;
        dcterms:title "FreestandingWork9 closing" ;
        cms:work ns80:freestandingwork9 .

    _:Nc89113797dd1469e98d721b3df6945ec a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns91:Thumbnail800x800 {
    ns91:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns210:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:71 .

    ns210:CmsImage0 foaf:thumbnail ns91:Thumbnail800x800 .
}

ns187:Thumbnail400x400 {
    ns187:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns380:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns17:work0 .

    ns380:CmsImage1 foaf:thumbnail ns187:Thumbnail400x400 .
}

ns80:organization4 {
    ns80:organization4 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 4" ;
        foaf:page ns80:organization4page .
}

ns17:work3Creation {
    ns17:work3Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns80:person0,
            ns80:person1 ;
        dcterms:date _:Nf6cfea1053804e4d8c6ac6451d70566e ;
        dcterms:spatial ns17:work3Location ;
        dcterms:title "CmsCollection0CmsWork3 creation" ;
        cms:work ns17:work3 .

    _:Nf6cfea1053804e4d8c6ac6451d70566e a cms:DateTimeDescription ;
        time:day "---29"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns8:9 {
    ns8:9 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 9" ;
        skos:prefLabel "CmsConcept 9" .
}

ns192:Thumbnail600x600 {
    ns192:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns270:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns17:work2 .

    ns270:CmsImage1 foaf:thumbnail ns192:Thumbnail600x600 .
}

ns199:Thumbnail200x200 {
    ns199:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:person2 .

    ns385:CmsImage1 foaf:thumbnail ns199:Thumbnail200x200 .
}

ns343:Thumbnail600x600 {
    ns343:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns61:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns17:work3 .

    ns61:CmsImage0 foaf:thumbnail ns343:Thumbnail600x600 .
}

ns361:Thumbnail200x200 {
    ns361:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns106:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns21:work6 .

    ns106:CmsImage1 foaf:thumbnail ns361:Thumbnail200x200 .
}

ns297:Thumbnail600x600 {
    ns297:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns387:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:70 .

    ns387:CmsImage0 foaf:thumbnail ns297:Thumbnail600x600 .
}

ns8:5 {
    ns8:5 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 5" ;
        skos:prefLabel "CmsConcept 5" .
}

ns242:Thumbnail200x200 {
    ns242:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns26:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:83 .

    ns26:CmsImage0 foaf:thumbnail ns242:Thumbnail200x200 .
}

ns139:Thumbnail200x200 {
    ns139:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns376:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:34 .

    ns376:CmsImage1 foaf:thumbnail ns139:Thumbnail200x200 .
}

ns360:Thumbnail800x800 {
    ns360:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns237:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:organization0 .

    ns237:CmsImage1 foaf:thumbnail ns360:Thumbnail800x800 .
}

ns162:Thumbnail800x800 {
    ns162:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns101:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:99 .

    ns101:CmsImage1 foaf:thumbnail ns162:Thumbnail800x800 .
}

ns262:Thumbnail600x600 {
    ns262:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns146:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:30 .

    ns146:CmsImage0 foaf:thumbnail ns262:Thumbnail600x600 .
}

ns140:Thumbnail600x600 {
    ns140:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns381:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:49 .

    ns381:CmsImage1 foaf:thumbnail ns140:Thumbnail600x600 .
}

ns182:Thumbnail800x800 {
    ns182:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns252:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:73 .

    ns252:CmsImage0 foaf:thumbnail ns182:Thumbnail800x800 .
}

ns184:Thumbnail600x600 {
    ns184:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns318:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:31 .

    ns318:CmsImage0 foaf:thumbnail ns184:Thumbnail600x600 .
}

ns362:CmsImage1 {
    ns362:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:48 .
}

ns122:Thumbnail200x200 {
    ns122:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns354:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:84 .

    ns354:CmsImage0 foaf:thumbnail ns122:Thumbnail200x200 .
}

ns311:Thumbnail400x400 {
    ns311:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns81:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:53 .

    ns81:CmsImage1 foaf:thumbnail ns311:Thumbnail400x400 .
}

ns262:Thumbnail400x400 {
    ns262:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns146:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:30 .

    ns146:CmsImage0 foaf:thumbnail ns262:Thumbnail400x400 .
}

ns178:Thumbnail800x800 {
    ns178:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns359:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:43 .

    ns359:CmsImage0 foaf:thumbnail ns178:Thumbnail800x800 .
}

ns363:CmsImage0 {
    ns363:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:55 .
}

ns279:CmsImage1 {
    ns279:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:56 .
}

ns347:Thumbnail800x800 {
    ns347:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns383:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns17:work1 .

    ns383:CmsImage1 foaf:thumbnail ns347:Thumbnail800x800 .
}

ns346:Thumbnail800x800 {
    ns346:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns164:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:2 .

    ns164:CmsImage0 foaf:thumbnail ns346:Thumbnail800x800 .
}

ns364:Thumbnail400x400 {
    ns364:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns81:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:53 .

    ns81:CmsImage0 foaf:thumbnail ns364:Thumbnail400x400 .
}

dcterms:language {
    dcterms:language a cms:Property ;
        rdfs:label "Language" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns263:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> .
}

ns80:freestandingwork10Location {
    ns80:freestandingwork10Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns365:CmsImage1 {
    ns365:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:77 .
}

ns185:Thumbnail800x800 {
    ns185:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns394:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:42 .

    ns394:CmsImage1 foaf:thumbnail ns185:Thumbnail800x800 .
}

ns366:Thumbnail400x400 {
    ns366:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns48:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:28 .

    ns48:CmsImage1 foaf:thumbnail ns366:Thumbnail400x400 .
}

ns209:Thumbnail800x800 {
    ns209:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns2:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:69 .

    ns2:CmsImage0 foaf:thumbnail ns209:Thumbnail800x800 .
}

ns319:Thumbnail200x200 {
    ns319:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns205:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:4 .

    ns205:CmsImage0 foaf:thumbnail ns319:Thumbnail200x200 .
}

ns264:Thumbnail600x600 {
    ns264:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns268:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:20 .

    ns268:CmsImage1 foaf:thumbnail ns264:Thumbnail600x600 .
}

ns157:CmsImage1 {
    ns157:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:organization1 .
}

ns364:Thumbnail800x800 {
    ns364:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns81:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:53 .

    ns81:CmsImage0 foaf:thumbnail ns364:Thumbnail800x800 .
}

ns8:54 {
    ns8:54 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 4" ;
        skos:prefLabel "CmsConcept 54" .
}

ns361:Thumbnail800x800 {
    ns361:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns106:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns21:work6 .

    ns106:CmsImage1 foaf:thumbnail ns361:Thumbnail800x800 .
}

ns277:CmsImage1 {
    ns277:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:44 .
}

ns4:Thumbnail800x800 {
    ns4:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns400:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:25 .

    ns400:CmsImage1 foaf:thumbnail ns4:Thumbnail800x800 .
}

ns295:CmsImage1 {
    ns295:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:92 .
}

ns367:CmsImage1 {
    ns367:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:27 .
}

ns200:Thumbnail400x400 {
    ns200:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns257:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:7 .

    ns257:CmsImage0 foaf:thumbnail ns200:Thumbnail400x400 .
}

ns366:Thumbnail800x800 {
    ns366:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns48:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:28 .

    ns48:CmsImage1 foaf:thumbnail ns366:Thumbnail800x800 .
}

ns220:Thumbnail400x400 {
    ns220:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns367:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:27 .

    ns367:CmsImage1 foaf:thumbnail ns220:Thumbnail400x400 .
}

ns110:Thumbnail800x800 {
    ns110:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns375:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:person0 .

    ns375:CmsImage1 foaf:thumbnail ns110:Thumbnail800x800 .
}

ns333:Thumbnail400x400 {
    ns333:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns338:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:87 .

    ns338:CmsImage1 foaf:thumbnail ns333:Thumbnail400x400 .
}

ns18:Thumbnail400x400 {
    ns18:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns35:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:66 .

    ns35:CmsImage1 foaf:thumbnail ns18:Thumbnail400x400 .
}

ns244:Thumbnail600x600 {
    ns244:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns348:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:51 .

    ns348:CmsImage0 foaf:thumbnail ns244:Thumbnail600x600 .
}

ns243:Thumbnail600x600 {
    ns243:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns378:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:6 .

    ns378:CmsImage1 foaf:thumbnail ns243:Thumbnail600x600 .
}

ns247:Thumbnail200x200 {
    ns247:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns383:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns17:work1 .

    ns383:CmsImage0 foaf:thumbnail ns247:Thumbnail200x200 .
}

ns368:Thumbnail400x400 {
    ns368:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns351:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:59 .

    ns351:CmsImage1 foaf:thumbnail ns368:Thumbnail400x400 .
}

ns307:CmsImage0 {
    ns307:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:18 .
}

ns369:Thumbnail400x400 {
    ns45:CmsImage0 foaf:thumbnail ns369:Thumbnail400x400 .

    ns369:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns45:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:38 .
}

ns167:Thumbnail800x800 {
    ns167:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns313:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:person3 .

    ns313:CmsImage1 foaf:thumbnail ns167:Thumbnail800x800 .
}

ns20:Thumbnail200x200 {
    ns20:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns329:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:organization2 .

    ns329:CmsImage0 foaf:thumbnail ns20:Thumbnail200x200 .
}

ns160:Thumbnail800x800 {
    ns160:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns237:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:organization0 .

    ns237:CmsImage0 foaf:thumbnail ns160:Thumbnail800x800 .
}

ns136:Thumbnail800x800 {
    ns136:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 0 rights holder" ;
        dcterms:title "Technique 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns6:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:93 .

    ns6:CmsImage0 foaf:thumbnail ns136:Thumbnail800x800 .
}

ns346:Thumbnail400x400 {
    ns346:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 0 rights holder" ;
        dcterms:title "Cultural context 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns164:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:2 .

    ns164:CmsImage0 foaf:thumbnail ns346:Thumbnail400x400 .
}

ns75:Thumbnail200x200 {
    ns75:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns394:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:42 .

    ns394:CmsImage0 foaf:thumbnail ns75:Thumbnail200x200 .
}

ns235:Thumbnail600x600 {
    ns235:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns391:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:39 .

    ns391:CmsImage0 foaf:thumbnail ns235:Thumbnail600x600 .
}

ns310:Thumbnail400x400 {
    ns310:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns266:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns21:work7 .

    ns266:CmsImage1 foaf:thumbnail ns310:Thumbnail400x400 .
}

ns293:Thumbnail200x200 {
    ns293:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns158:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:29 .

    ns158:CmsImage0 foaf:thumbnail ns293:Thumbnail200x200 .
}

ns8:47 {
    ns8:47 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 7" ;
        skos:prefLabel "CmsConcept 47" .
}

ns42:Thumbnail800x800 {
    ns42:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns307:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:18 .

    ns307:CmsImage1 foaf:thumbnail ns42:Thumbnail800x800 .
}

ns156:CmsImage0 {
    ns156:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:freestandingwork8 .
}

ns327:CmsImage1 {
    ns327:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:62 .
}

ns370:Thumbnail800x800 {
    ns370:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns323:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:freestandingwork9 .

    ns323:CmsImage0 foaf:thumbnail ns370:Thumbnail800x800 .
}

ns192:Thumbnail400x400 {
    ns192:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns270:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns17:work2 .

    ns270:CmsImage1 foaf:thumbnail ns192:Thumbnail400x400 .
}

ns173:Thumbnail400x400 {
    ns173:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns266:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns21:work7 .

    ns266:CmsImage0 foaf:thumbnail ns173:Thumbnail400x400 .
}

ns245:CmsImage0 {
    ns245:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:81 .
}

ns371:CmsImage1 {
    ns371:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:12 .
}

ns356:CmsImage1 {
    ns356:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:46 .
}

ns372:CmsImage0 {
    ns372:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:freestandingwork11 .
}

ns357:Thumbnail200x200 {
    ns357:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns398:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:74 .

    ns398:CmsImage1 foaf:thumbnail ns357:Thumbnail200x200 .
}

ns3:Thumbnail600x600 {
    ns3:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns372:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:freestandingwork11 .

    ns372:CmsImage0 foaf:thumbnail ns3:Thumbnail600x600 .
}

ns149:Thumbnail400x400 {
    ns149:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns355:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:5 .

    ns355:CmsImage0 foaf:thumbnail ns149:Thumbnail400x400 .
}

ns82:Thumbnail600x600 {
    ns82:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns298:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:3 .

    ns298:CmsImage1 foaf:thumbnail ns82:Thumbnail600x600 .
}

ns11:Thumbnail200x200 {
    ns11:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns215:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:63 .

    ns215:CmsImage1 foaf:thumbnail ns11:Thumbnail200x200 .
}

ns176:Thumbnail800x800 {
    ns176:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns402:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:0 .

    ns402:CmsImage1 foaf:thumbnail ns176:Thumbnail800x800 .
}

ns373:CmsImage1 {
    ns373:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:68 .
}

ns56:Thumbnail600x600 {
    ns56:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:person2 .

    ns385:CmsImage0 foaf:thumbnail ns56:Thumbnail600x600 .
}

ns8:40 {
    ns8:40 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 0" ;
        skos:prefLabel "CmsConcept 40" .
}

ns8:67 {
    ns8:67 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 7" ;
        skos:prefLabel "CmsConcept 67" .
}

ns374:Thumbnail200x200 {
    ns374:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns48:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:28 .

    ns48:CmsImage0 foaf:thumbnail ns374:Thumbnail200x200 .
}

ns174:Thumbnail400x400 {
    ns174:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 0 rights holder" ;
        dcterms:title "FreestandingWork8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns156:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:freestandingwork8 .

    ns156:CmsImage0 foaf:thumbnail ns174:Thumbnail400x400 .
}

ns235:Thumbnail200x200 {
    ns235:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns391:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:39 .

    ns391:CmsImage0 foaf:thumbnail ns235:Thumbnail200x200 .
}

ns217:Thumbnail800x800 {
    ns217:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns396:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:1 .

    ns396:CmsImage0 foaf:thumbnail ns217:Thumbnail800x800 .
}

ns103:Thumbnail400x400 {
    ns103:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns248:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:104 .

    ns248:CmsImage0 foaf:thumbnail ns103:Thumbnail400x400 .
}

ns18:Thumbnail600x600 {
    ns18:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns35:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:66 .

    ns35:CmsImage1 foaf:thumbnail ns18:Thumbnail600x600 .
}

ns125:Thumbnail400x400 {
    ns125:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns292:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:32 .

    ns292:CmsImage1 foaf:thumbnail ns125:Thumbnail400x400 .
}

ns54:Thumbnail400x400 {
    ns54:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns268:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:20 .

    ns268:CmsImage0 foaf:thumbnail ns54:Thumbnail400x400 .
}

ns375:CmsImage1 {
    ns375:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:person0 .
}

ns8:30 {
    ns8:30 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 0" ;
        skos:prefLabel "CmsConcept 30" .
}

ns236:Thumbnail400x400 {
    ns236:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns386:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns21:work4 .

    ns386:CmsImage0 foaf:thumbnail ns236:Thumbnail400x400 .
}

ns8:35 {
    ns8:35 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 5" ;
        skos:prefLabel "CmsConcept 35" .
}

ns162:Thumbnail600x600 {
    ns162:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns101:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:99 .

    ns101:CmsImage1 foaf:thumbnail ns162:Thumbnail600x600 .
}

ns223:Thumbnail600x600 {
    ns223:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 7 image 1 rights holder" ;
        dcterms:title "Medium 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns305:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:47 .

    ns305:CmsImage1 foaf:thumbnail ns223:Thumbnail600x600 .
}

ns153:Thumbnail400x400 {
    ns153:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns186:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:109 .

    ns186:CmsImage1 foaf:thumbnail ns153:Thumbnail400x400 .
}

ns368:Thumbnail800x800 {
    ns368:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns351:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:59 .

    ns351:CmsImage1 foaf:thumbnail ns368:Thumbnail800x800 .
}

ns55:Thumbnail600x600 {
    ns55:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns388:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:23 .

    ns388:CmsImage1 foaf:thumbnail ns55:Thumbnail600x600 .
}

ns161:Thumbnail400x400 {
    ns161:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns231:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:75 .

    ns231:CmsImage1 foaf:thumbnail ns161:Thumbnail400x400 .
}

_:N3e54fcb108594dd5b4687bf420a524b9 {
    _:N3e54fcb108594dd5b4687bf420a524b9 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N7ff95e3fd8c24e868e10b15210745fb2 ;
        dcterms:spatial _:Nebdbe4563c9344b2851ded3a597c024a ;
        dcterms:title "CmsCollection0CmsWork2 closing" ;
        cms:work ns17:work2 .

    _:Nebdbe4563c9344b2851ded3a597c024a a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N7ff95e3fd8c24e868e10b15210745fb2 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns8:79 {
    ns8:79 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 9" ;
        skos:prefLabel "CmsConcept 79" .
}

ns209:Thumbnail200x200 {
    ns209:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns2:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:69 .

    ns2:CmsImage0 foaf:thumbnail ns209:Thumbnail200x200 .
}

ns117:Thumbnail600x600 {
    ns117:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns225:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:97 .

    ns225:CmsImage1 foaf:thumbnail ns117:Thumbnail600x600 .
}

ns100:Thumbnail600x600 {
    ns100:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 0 rights holder" ;
        dcterms:title "Source 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns327:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:62 .

    ns327:CmsImage0 foaf:thumbnail ns100:Thumbnail600x600 .
}

ns267:Thumbnail600x600 {
    ns267:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns348:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:51 .

    ns348:CmsImage1 foaf:thumbnail ns267:Thumbnail600x600 .
}

ns77:Thumbnail400x400 {
    ns77:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns251:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:52 .

    ns251:CmsImage0 foaf:thumbnail ns77:Thumbnail400x400 .
}

ns280:Thumbnail800x800 {
    ns280:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns326:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:58 .

    ns326:CmsImage0 foaf:thumbnail ns280:Thumbnail800x800 .
}

ns267:Thumbnail800x800 {
    ns267:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns348:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:51 .

    ns348:CmsImage1 foaf:thumbnail ns267:Thumbnail800x800 .
}

ns105:Thumbnail800x800 {
    ns105:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns206:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:98 .

    ns206:CmsImage0 foaf:thumbnail ns105:Thumbnail800x800 .
}

ns317:Thumbnail800x800 {
    ns317:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns137:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:94 .

    ns137:CmsImage0 foaf:thumbnail ns317:Thumbnail800x800 .
}

ns97:Thumbnail600x600 {
    ns97:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns355:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:5 .

    ns355:CmsImage1 foaf:thumbnail ns97:Thumbnail600x600 .
}

ns167:Thumbnail200x200 {
    ns167:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns313:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:person3 .

    ns313:CmsImage1 foaf:thumbnail ns167:Thumbnail200x200 .
}

ns99:Thumbnail200x200 {
    ns99:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns350:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:organization4 .

    ns350:CmsImage0 foaf:thumbnail ns99:Thumbnail200x200 .
}

ns282:Thumbnail200x200 {
    ns282:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns327:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:62 .

    ns327:CmsImage1 foaf:thumbnail ns282:Thumbnail200x200 .
}

ns198:Thumbnail800x800 {
    ns198:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns391:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:39 .

    ns391:CmsImage1 foaf:thumbnail ns198:Thumbnail800x800 .
}

ns282:Thumbnail600x600 {
    ns282:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns327:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:62 .

    ns327:CmsImage1 foaf:thumbnail ns282:Thumbnail600x600 .
}

ns17:work1Creation {
    ns17:work1Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns80:organization3,
            ns80:organization4 ;
        dcterms:date _:N13ee957c35e14b17adf315c356e2a38e ;
        dcterms:spatial ns17:work1Location ;
        dcterms:title "CmsCollection0CmsWork1 creation" ;
        cms:work ns17:work1 .

    _:N13ee957c35e14b17adf315c356e2a38e a cms:DateTimeDescription ;
        time:day "---31"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns258:Thumbnail400x400 {
    ns258:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns309:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:103 .

    ns309:CmsImage0 foaf:thumbnail ns258:Thumbnail400x400 .
}

ns242:Thumbnail800x800 {
    ns242:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns26:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:83 .

    ns26:CmsImage0 foaf:thumbnail ns242:Thumbnail800x800 .
}

ns139:Thumbnail600x600 {
    ns139:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns376:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:34 .

    ns376:CmsImage1 foaf:thumbnail ns139:Thumbnail600x600 .
}

ns1:Thumbnail400x400 {
    ns1:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns295:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:92 .

    ns295:CmsImage0 foaf:thumbnail ns1:Thumbnail400x400 .
}

ns8:13 {
    ns8:13 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 3" ;
        skos:prefLabel "CmsConcept 13" .
}

ns376:CmsImage0 {
    ns376:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:34 .
}

ns47:Thumbnail600x600 {
    ns47:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns397:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:10 .

    ns397:CmsImage0 foaf:thumbnail ns47:Thumbnail600x600 .
}

ns8:34 {
    ns8:34 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 4" ;
        skos:prefLabel "CmsConcept 34" .
}

ns133:Thumbnail600x600 {
    ns133:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 1 rights holder" ;
        dcterms:title "Spatial 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns34:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:72 .

    ns34:CmsImage1 foaf:thumbnail ns133:Thumbnail600x600 .
}

ns110:Thumbnail600x600 {
    ns110:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 1 rights holder" ;
        dcterms:title "CmsPerson 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns375:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:person0 .

    ns375:CmsImage1 foaf:thumbnail ns110:Thumbnail600x600 .
}

ns182:Thumbnail200x200 {
    ns182:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 0 rights holder" ;
        dcterms:title "Spatial 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns252:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:73 .

    ns252:CmsImage0 foaf:thumbnail ns182:Thumbnail200x200 .
}

ns337:CmsImage0 {
    ns337:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:22 .
}

ns258:Thumbnail600x600 {
    ns258:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns309:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:103 .

    ns309:CmsImage0 foaf:thumbnail ns258:Thumbnail600x600 .
}

ns281:Thumbnail600x600 {
    ns281:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns339:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:65 .

    ns339:CmsImage0 foaf:thumbnail ns281:Thumbnail600x600 .
}

ns97:Thumbnail400x400 {
    ns97:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 1 rights holder" ;
        dcterms:title "Cultural context 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns355:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:5 .

    ns355:CmsImage1 foaf:thumbnail ns97:Thumbnail400x400 .
}

ns377:Thumbnail600x600 {
    ns377:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns324:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:105 .

    ns324:CmsImage1 foaf:thumbnail ns377:Thumbnail600x600 .
}

ns152:Thumbnail800x800 {
    ns152:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns254:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:19 .

    ns254:CmsImage0 foaf:thumbnail ns152:Thumbnail800x800 .
}

ns378:CmsImage1 {
    ns378:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:6 .
}

ns379:Thumbnail400x400 {
    ns379:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns356:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:46 .

    ns356:CmsImage1 foaf:thumbnail ns379:Thumbnail400x400 .
}

ns379:Thumbnail200x200 {
    ns379:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns356:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:46 .

    ns356:CmsImage1 foaf:thumbnail ns379:Thumbnail200x200 .
}

ns152:Thumbnail600x600 {
    ns152:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns254:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:19 .

    ns254:CmsImage0 foaf:thumbnail ns152:Thumbnail600x600 .
}

ns273:Thumbnail200x200 {
    ns273:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns270:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns17:work2 .

    ns270:CmsImage0 foaf:thumbnail ns273:Thumbnail200x200 .
}

ns380:CmsImage1 {
    ns380:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns17:work0 .
}

ns222:Thumbnail400x400 {
    ns222:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns341:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:61 .

    ns341:CmsImage0 foaf:thumbnail ns222:Thumbnail400x400 .
}

ns104:Thumbnail800x800 {
    ns104:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns400:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:25 .

    ns400:CmsImage0 foaf:thumbnail ns104:Thumbnail800x800 .
}

ns52:CmsImage1 {
    ns52:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:82 .
}

ns237:CmsImage1 {
    ns237:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:organization0 .
}

ns298:CmsImage1 {
    ns298:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:3 .
}

ns207:CmsImage0 {
    ns207:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:76 .
}

ns177:Thumbnail800x800 {
    ns177:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns354:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:84 .

    ns354:CmsImage1 foaf:thumbnail ns177:Thumbnail800x800 .
}

ns248:CmsImage0 {
    ns248:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:104 .
}

ns21:work4Location {
    ns21:work4Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns17:work2Location {
    ns17:work2Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns198:Thumbnail200x200 {
    ns198:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns391:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:39 .

    ns391:CmsImage1 foaf:thumbnail ns198:Thumbnail200x200 .
}

ns8:65 {
    ns8:65 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 5" ;
        skos:prefLabel "CmsConcept 65" .
}

ns82:Thumbnail800x800 {
    ns82:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns298:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:3 .

    ns298:CmsImage1 foaf:thumbnail ns82:Thumbnail800x800 .
}

ns69:Thumbnail600x600 {
    ns69:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns191:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:14 .

    ns191:CmsImage0 foaf:thumbnail ns69:Thumbnail600x600 .
}

ns288:Thumbnail400x400 {
    ns288:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns309:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:103 .

    ns309:CmsImage1 foaf:thumbnail ns288:Thumbnail400x400 .
}

ns322:Thumbnail600x600 {
    ns322:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns238:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:9 .

    ns238:CmsImage0 foaf:thumbnail ns322:Thumbnail600x600 .
}

ns301:Thumbnail400x400 {
    ns301:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns373:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:68 .

    ns373:CmsImage1 foaf:thumbnail ns301:Thumbnail400x400 .
}

ns381:CmsImage0 {
    ns381:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:49 .
}

ns13:Thumbnail200x200 {
    ns13:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns341:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:61 .

    ns341:CmsImage1 foaf:thumbnail ns13:Thumbnail200x200 .
}

ns274:CmsImage0 {
    ns274:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:102 .
}

ns42:Thumbnail400x400 {
    ns42:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 1 rights holder" ;
        dcterms:title "Extent 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns307:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:18 .

    ns307:CmsImage1 foaf:thumbnail ns42:Thumbnail400x400 .
}

ns301:Thumbnail600x600 {
    ns301:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns373:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:68 .

    ns373:CmsImage1 foaf:thumbnail ns301:Thumbnail600x600 .
}

ns148:Thumbnail800x800 {
    ns148:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns45:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:38 .

    ns45:CmsImage1 foaf:thumbnail ns148:Thumbnail800x800 .
}

ns270:CmsImage0 {
    ns270:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns17:work2 .
}

ns44:Thumbnail400x400 {
    ns44:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns397:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:10 .

    ns397:CmsImage1 foaf:thumbnail ns44:Thumbnail400x400 .
}

ns126:Thumbnail800x800 {
    ns126:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns164:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:2 .

    ns164:CmsImage1 foaf:thumbnail ns126:Thumbnail800x800 .
}

ns77:Thumbnail200x200 {
    ns77:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns251:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:52 .

    ns251:CmsImage0 foaf:thumbnail ns77:Thumbnail200x200 .
}

ns8:88 {
    ns8:88 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 8" ;
        skos:prefLabel "CmsConcept 88" .
}

ns5:Thumbnail800x800 {
    ns5:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns193:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:100 .

    ns193:CmsImage1 foaf:thumbnail ns5:Thumbnail800x800 .
}

ns197:Thumbnail800x800 {
    ns197:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns254:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:19 .

    ns254:CmsImage1 foaf:thumbnail ns197:Thumbnail800x800 .
}

ns132:Thumbnail400x400 {
    ns132:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns302:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:17 .

    ns302:CmsImage0 foaf:thumbnail ns132:Thumbnail400x400 .
}

ns8:6 {
    ns8:6 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 6" ;
        skos:prefLabel "CmsConcept 6" .
}

ns209:Thumbnail600x600 {
    ns209:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 0 rights holder" ;
        dcterms:title "Source 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns2:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:69 .

    ns2:CmsImage0 foaf:thumbnail ns209:Thumbnail600x600 .
}

dcterms:subject {
    dcterms:subject a cms:Property ;
        rdfs:label "Subject" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns263:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> .
}

ns382:Thumbnail800x800 {
    ns382:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns277:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:44 .

    ns277:CmsImage0 foaf:thumbnail ns382:Thumbnail800x800 .
}

ns44:Thumbnail600x600 {
    ns44:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns397:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:10 .

    ns397:CmsImage1 foaf:thumbnail ns44:Thumbnail600x600 .
}

ns340:Thumbnail400x400 {
    ns340:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns375:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:person0 .

    ns375:CmsImage0 foaf:thumbnail ns340:Thumbnail400x400 .
}

ns88:Thumbnail200x200 {
    ns88:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns277:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:44 .

    ns277:CmsImage1 foaf:thumbnail ns88:Thumbnail200x200 .
}

ns368:Thumbnail200x200 {
    ns368:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns351:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:59 .

    ns351:CmsImage1 foaf:thumbnail ns368:Thumbnail200x200 .
}

ns200:Thumbnail800x800 {
    ns200:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns257:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:7 .

    ns257:CmsImage0 foaf:thumbnail ns200:Thumbnail800x800 .
}

ns354:CmsImage1 {
    ns354:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:84 .
}

ns288:Thumbnail800x800 {
    ns288:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns309:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:103 .

    ns309:CmsImage1 foaf:thumbnail ns288:Thumbnail800x800 .
}

ns65:Thumbnail800x800 {
    ns65:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 8 image 0 rights holder" ;
        dcterms:title "Extent 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns307:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:18 .

    ns307:CmsImage0 foaf:thumbnail ns65:Thumbnail800x800 .
}

ns143:Thumbnail800x800 {
    ns143:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns285:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:35 .

    ns285:CmsImage1 foaf:thumbnail ns143:Thumbnail800x800 .
}

ns62:Thumbnail200x200 {
    ns62:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 0 rights holder" ;
        dcterms:title "Type 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns274:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:102 .

    ns274:CmsImage0 foaf:thumbnail ns62:Thumbnail200x200 .
}

ns272:Thumbnail600x600 {
    ns272:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns158:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:29 .

    ns158:CmsImage1 foaf:thumbnail ns272:Thumbnail600x600 .
}

ns8:23 {
    ns8:23 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 3" ;
        skos:prefLabel "CmsConcept 23" .
}

ns57:Thumbnail200x200 {
    ns57:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns231:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:75 .

    ns231:CmsImage0 foaf:thumbnail ns57:Thumbnail200x200 .
}

ns85:Thumbnail400x400 {
    ns85:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns325:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:collection1 .

    ns325:CmsImage0 foaf:thumbnail ns85:Thumbnail400x400 .
}

ns148:Thumbnail200x200 {
    ns148:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns45:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:38 .

    ns45:CmsImage1 foaf:thumbnail ns148:Thumbnail200x200 .
}

ns379:Thumbnail600x600 {
    ns379:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns356:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:46 .

    ns356:CmsImage1 foaf:thumbnail ns379:Thumbnail600x600 .
}

ns383:CmsImage0 {
    ns383:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns17:work1 .
}

ns125:Thumbnail800x800 {
    ns125:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns292:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:32 .

    ns292:CmsImage1 foaf:thumbnail ns125:Thumbnail800x800 .
}

ns66:Thumbnail600x600 {
    ns66:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns325:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:collection1 .

    ns325:CmsImage1 foaf:thumbnail ns66:Thumbnail600x600 .
}

ns345:Thumbnail200x200 {
    ns345:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns27:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:37 .

    ns27:CmsImage0 foaf:thumbnail ns345:Thumbnail200x200 .
}

ns187:Thumbnail600x600 {
    ns187:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns380:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns17:work0 .

    ns380:CmsImage1 foaf:thumbnail ns187:Thumbnail600x600 .
}

ns384:Thumbnail800x800 {
    ns392:CmsImage1 foaf:thumbnail ns384:Thumbnail800x800 .

    ns384:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:organization3 .
}

ns125:Thumbnail200x200 {
    ns125:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 1 rights holder" ;
        dcterms:title "Material 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns292:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:32 .

    ns292:CmsImage1 foaf:thumbnail ns125:Thumbnail200x200 .
}

ns99:Thumbnail800x800 {
    ns99:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns350:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:organization4 .

    ns350:CmsImage0 foaf:thumbnail ns99:Thumbnail800x800 .
}

ns280:Thumbnail400x400 {
    ns280:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns326:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:58 .

    ns326:CmsImage0 foaf:thumbnail ns280:Thumbnail400x400 .
}

ns105:Thumbnail600x600 {
    ns105:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns206:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:98 .

    ns206:CmsImage0 foaf:thumbnail ns105:Thumbnail600x600 .
}

ns385:CmsImage0 {
    ns385:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:person2 .
}

ns58:Thumbnail200x200 {
    ns58:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 0 rights holder" ;
        dcterms:title "CmsPerson 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns313:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:person3 .

    ns313:CmsImage0 foaf:thumbnail ns58:Thumbnail200x200 .
}

_:Nfd5aea41fe8b435a9168fc60922cd255 {
    _:Nfd5aea41fe8b435a9168fc60922cd255 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:Ned5bfbeb5fa94974b669000ddf126474 ;
        dcterms:title "FreestandingWork11 closing" ;
        cms:work ns80:freestandingwork11 .

    _:Ned5bfbeb5fa94974b669000ddf126474 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns386:CmsImage0 {
    ns386:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns21:work4 .
}

ns17:work3Opening {
    ns17:work3Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-29"^^xsd:date ;
        dcterms:spatial _:N1aec5af3f5b648cc86a7ad4fff4be4b9 ;
        dcterms:title "CmsCollection0CmsWork3 opening" ;
        cms:work ns17:work3 .

    _:N1aec5af3f5b648cc86a7ad4fff4be4b9 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns113:Thumbnail800x800 {
    ns113:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 0 rights holder" ;
        dcterms:title "Type 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns193:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:100 .

    ns193:CmsImage0 foaf:thumbnail ns113:Thumbnail800x800 .
}

ns222:Thumbnail800x800 {
    ns222:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns341:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:61 .

    ns341:CmsImage0 foaf:thumbnail ns222:Thumbnail800x800 .
}

ns195:Thumbnail600x600 {
    ns195:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 0 rights holder" ;
        dcterms:title "Extent 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns96:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:13 .

    ns96:CmsImage0 foaf:thumbnail ns195:Thumbnail600x600 .
}

ns257:CmsImage0 {
    ns257:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:7 .
}

ns319:Thumbnail600x600 {
    ns319:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns205:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:4 .

    ns205:CmsImage0 foaf:thumbnail ns319:Thumbnail600x600 .
}

ns293:Thumbnail400x400 {
    ns293:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns158:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:29 .

    ns158:CmsImage0 foaf:thumbnail ns293:Thumbnail400x400 .
}

ns234:Thumbnail800x800 {
    ns234:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns219:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:90 .

    ns219:CmsImage1 foaf:thumbnail ns234:Thumbnail800x800 .
}

ns380:CmsImage0 {
    ns380:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns17:work0 .
}

_:N41a47ab3a98d4767b8b45ab86ebd5947 {
    _:N41a47ab3a98d4767b8b45ab86ebd5947 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N63761d7e390e4198af0e20b089d80928 ;
        dcterms:spatial _:Nc6cbd1b542844111b3d2f0f44d9544e0 ;
        dcterms:title "FreestandingWork10 closing" ;
        cms:work ns80:freestandingwork10 .

    _:Nc6cbd1b542844111b3d2f0f44d9544e0 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N63761d7e390e4198af0e20b089d80928 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns387:CmsImage1 {
    ns387:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 1 rights holder" ;
        dcterms:title "Spatial 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:70 .
}

ns80:freestandingwork8Opening {
    ns80:freestandingwork8Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-24"^^xsd:date ;
        dcterms:description _:N2a80e4e9a1954e38a8991331545f35c7 ;
        dcterms:spatial _:N58f35eb48d034863a40ac92c9742a5d2 ;
        dcterms:title "FreestandingWork8 opening" ;
        cms:work ns80:freestandingwork8 .

    _:N58f35eb48d034863a40ac92c9742a5d2 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N2a80e4e9a1954e38a8991331545f35c7 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns325:CmsImage0 {
    ns325:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:collection1 .
}

ns302:CmsImage0 {
    ns302:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:17 .
}

ns388:CmsImage0 {
    ns388:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 0 rights holder" ;
        dcterms:title "Language 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:23 .
}

ns238:CmsImage0 {
    ns238:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:9 .
}

ns389:CmsImage0 {
    ns389:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:41 .
}

ns224:Thumbnail200x200 {
    ns224:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns221:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:78 .

    ns221:CmsImage0 foaf:thumbnail ns224:Thumbnail200x200 .
}

ns304:Thumbnail400x400 {
    ns304:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns329:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:organization2 .

    ns329:CmsImage1 foaf:thumbnail ns304:Thumbnail400x400 .
}

ns206:CmsImage0 {
    ns206:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 0 rights holder" ;
        dcterms:title "Technique 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:98 .
}

ns44:Thumbnail200x200 {
    ns44:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns397:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:10 .

    ns397:CmsImage1 foaf:thumbnail ns44:Thumbnail200x200 .
}

ns388:CmsImage1 {
    ns388:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:23 .
}

ns8:72 {
    ns8:72 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 2" ;
        skos:prefLabel "CmsConcept 72" .
}

ns8:50 {
    ns8:50 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 0" ;
        skos:prefLabel "CmsConcept 50" .
}

ns331:Thumbnail800x800 {
    ns331:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns238:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:9 .

    ns238:CmsImage1 foaf:thumbnail ns331:Thumbnail800x800 .
}

ns361:Thumbnail600x600 {
    ns361:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns106:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns21:work6 .

    ns106:CmsImage1 foaf:thumbnail ns361:Thumbnail600x600 .
}

ns360:Thumbnail400x400 {
    ns360:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns237:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:organization0 .

    ns237:CmsImage1 foaf:thumbnail ns360:Thumbnail400x400 .
}

vra:culturalContext {
    vra:culturalContext a cms:Property ;
        rdfs:label "Cultural context" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns263:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> .
}

ns90:Thumbnail600x600 {
    ns90:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns399:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:57 .

    ns399:CmsImage0 foaf:thumbnail ns90:Thumbnail600x600 .
}

ns2:CmsImage1 {
    ns2:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:69 .
}

ns376:CmsImage1 {
    ns376:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:34 .
}

ns184:Thumbnail800x800 {
    ns184:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns318:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:31 .

    ns318:CmsImage0 foaf:thumbnail ns184:Thumbnail800x800 .
}

ns378:CmsImage0 {
    ns378:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:6 .
}

ns117:Thumbnail800x800 {
    ns117:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 1 rights holder" ;
        dcterms:title "Technique 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns225:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:97 .

    ns225:CmsImage1 foaf:thumbnail ns117:Thumbnail800x800 .
}

ns43:Thumbnail200x200 {
    ns43:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns102:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:person4 .

    ns102:CmsImage1 foaf:thumbnail ns43:Thumbnail200x200 .
}

ns390:Thumbnail400x400 {
    ns392:CmsImage0 foaf:thumbnail ns390:Thumbnail400x400 .

    ns390:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:organization3 .
}

ns320:Thumbnail600x600 {
    ns320:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns73:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:107 .

    ns73:CmsImage0 foaf:thumbnail ns320:Thumbnail600x600 .
}

ns391:CmsImage0 {
    ns391:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 0 rights holder" ;
        dcterms:title "Material 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:39 .
}

ns296:Thumbnail400x400 {
    ns296:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns284:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:67 .

    ns284:CmsImage0 foaf:thumbnail ns296:Thumbnail400x400 .
}

ns8:102 {
    ns8:102 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 2" ;
        skos:prefLabel "CmsConcept 102" .
}

ns366:Thumbnail600x600 {
    ns366:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns48:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:28 .

    ns48:CmsImage1 foaf:thumbnail ns366:Thumbnail600x600 .
}

ns281:Thumbnail400x400 {
    ns281:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns339:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:65 .

    ns339:CmsImage0 foaf:thumbnail ns281:Thumbnail400x400 .
}

ns188:Thumbnail200x200 {
    ns188:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns342:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:45 .

    ns342:CmsImage0 foaf:thumbnail ns188:Thumbnail200x200 .
}

ns392:CmsImage1 {
    ns392:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:organization3 .
}

ns67:Thumbnail200x200 {
    ns67:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns314:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:8 .

    ns314:CmsImage1 foaf:thumbnail ns67:Thumbnail200x200 .
}

ns258:Thumbnail200x200 {
    ns258:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 0 rights holder" ;
        dcterms:title "Type 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns309:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:103 .

    ns309:CmsImage0 foaf:thumbnail ns258:Thumbnail200x200 .
}

ns351:CmsImage0 {
    ns351:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:59 .
}

ns208:Thumbnail200x200 {
    ns208:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns279:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:56 .

    ns279:CmsImage1 foaf:thumbnail ns208:Thumbnail200x200 .
}

ns175:Thumbnail800x800 {
    ns175:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns350:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:organization4 .

    ns350:CmsImage1 foaf:thumbnail ns175:Thumbnail800x800 .
}

ns358:Thumbnail600x600 {
    ns358:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns189:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:24 .

    ns189:CmsImage0 foaf:thumbnail ns358:Thumbnail600x600 .
}

ns198:Thumbnail600x600 {
    ns198:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns391:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:39 .

    ns391:CmsImage1 foaf:thumbnail ns198:Thumbnail600x600 .
}

ns8:22 {
    ns8:22 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 2" ;
        skos:prefLabel "CmsConcept 22" .
}

ns127:Thumbnail800x800 {
    ns127:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns89:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns21:work5 .

    ns89:CmsImage1 foaf:thumbnail ns127:Thumbnail800x800 .
}

ns393:CmsImage0 {
    ns393:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 0 rights holder" ;
        dcterms:title "Technique 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:96 .
}

ns230:Thumbnail400x400 {
    ns230:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:57 .

    ns399:CmsImage1 foaf:thumbnail ns230:Thumbnail400x400 .
}

ns233:Thumbnail400x400 {
    ns233:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns395:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:89 .

    ns395:CmsImage0 foaf:thumbnail ns233:Thumbnail400x400 .
}

ns150:Thumbnail800x800 {
    ns150:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 0 rights holder" ;
        dcterms:title "Type 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns50:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:101 .

    ns50:CmsImage0 foaf:thumbnail ns150:Thumbnail800x800 .
}

ns8:60 {
    ns8:60 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 0" ;
        skos:prefLabel "CmsConcept 60" .
}

ns350:CmsImage0 {
    ns350:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 0 rights holder" ;
        dcterms:title "CmsOrganization 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:organization4 .
}

ns212:Thumbnail800x800 {
    ns212:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns210:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:71 .

    ns210:CmsImage1 foaf:thumbnail ns212:Thumbnail800x800 .
}

ns390:Thumbnail600x600 {
    ns390:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:organization3 .

    ns392:CmsImage0 foaf:thumbnail ns390:Thumbnail600x600 .
}

ns10:Thumbnail800x800 {
    ns10:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns335:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:36 .

    ns335:CmsImage1 foaf:thumbnail ns10:Thumbnail800x800 .
}

ns252:CmsImage1 {
    ns252:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:73 .
}

ns229:Thumbnail600x600 {
    ns229:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 0 rights holder" ;
        dcterms:title "Subject 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns114:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:80 .

    ns114:CmsImage0 foaf:thumbnail ns229:Thumbnail600x600 .
}

ns8:107 {
    ns8:107 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 7" ;
        skos:prefLabel "CmsConcept 107" .
}

ns241:Thumbnail800x800 {
    ns241:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns398:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:74 .

    ns398:CmsImage0 foaf:thumbnail ns241:Thumbnail800x800 .
}

ns394:CmsImage1 {
    ns394:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:42 .
}

ns342:CmsImage0 {
    ns342:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:45 .
}

ns8:20 {
    ns8:20 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 0" ;
        skos:prefLabel "CmsConcept 20" .
}

ns8:36 {
    ns8:36 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 6" ;
        skos:prefLabel "CmsConcept 36" .
}

ns203:Thumbnail200x200 {
    ns203:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns146:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:30 .

    ns146:CmsImage1 foaf:thumbnail ns203:Thumbnail200x200 .
}

ns17:work0Opening {
    ns17:work0Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N3bca468ca8a54482b38cdfacb74c1722 ;
        dcterms:spatial _:N334c7a18128943f894b9a5dad7a4ac94 ;
        dcterms:title "CmsCollection0CmsWork0 opening" ;
        cms:work ns17:work0 .

    _:N334c7a18128943f894b9a5dad7a4ac94 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N3bca468ca8a54482b38cdfacb74c1722 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns35:CmsImage1 {
    ns35:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 6 image 1 rights holder" ;
        dcterms:title "Source 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:66 .
}

ns145:Thumbnail400x400 {
    ns145:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns351:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:59 .

    ns351:CmsImage0 foaf:thumbnail ns145:Thumbnail400x400 .
}

ns140:Thumbnail200x200 {
    ns140:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns381:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:49 .

    ns381:CmsImage1 foaf:thumbnail ns140:Thumbnail200x200 .
}

ns291:Thumbnail800x800 {
    ns291:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns316:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:50 .

    ns316:CmsImage1 foaf:thumbnail ns291:Thumbnail800x800 .
}

ns54:Thumbnail800x800 {
    ns54:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns268:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:20 .

    ns268:CmsImage0 foaf:thumbnail ns54:Thumbnail800x800 .
}

ns394:CmsImage0 {
    ns394:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:42 .
}

ns205:CmsImage1 {
    ns205:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:4 .
}

ns36:Thumbnail400x400 {
    ns36:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 0 rights holder" ;
        dcterms:title "Medium 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns389:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:41 .

    ns389:CmsImage0 foaf:thumbnail ns36:Thumbnail400x400 .
}

ns316:CmsImage1 {
    ns316:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:50 .
}

ns154:Thumbnail400x400 {
    ns154:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns396:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:1 .

    ns396:CmsImage1 foaf:thumbnail ns154:Thumbnail400x400 .
}

ns386:CmsImage1 {
    ns386:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns21:work4 .
}

ns53:Thumbnail400x400 {
    ns53:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns328:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:11 .

    ns328:CmsImage1 foaf:thumbnail ns53:Thumbnail400x400 .
}

ns7:Thumbnail400x400 {
    ns7:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns295:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:92 .

    ns295:CmsImage1 foaf:thumbnail ns7:Thumbnail400x400 .
}

ns196:Thumbnail400x400 {
    ns196:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns302:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:17 .

    ns302:CmsImage1 foaf:thumbnail ns196:Thumbnail400x400 .
}

ns261:CmsImage0 {
    ns261:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 5 image 0 rights holder" ;
        dcterms:title "Subject 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:85 .
}

ns188:Thumbnail600x600 {
    ns188:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns342:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:45 .

    ns342:CmsImage0 foaf:thumbnail ns188:Thumbnail600x600 .
}

ns395:CmsImage1 {
    ns395:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:89 .
}

ns234:Thumbnail400x400 {
    ns234:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 1 rights holder" ;
        dcterms:title "Technique 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns219:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:90 .

    ns219:CmsImage1 foaf:thumbnail ns234:Thumbnail400x400 .
}

ns94:Thumbnail200x200 {
    ns94:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns308:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:54 .

    ns308:CmsImage0 foaf:thumbnail ns94:Thumbnail200x200 .
}

ns80:organization1 {
    ns80:organization1 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 1" ;
        foaf:page ns80:organization1page .
}

ns175:Thumbnail600x600 {
    ns175:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 4 image 1 rights holder" ;
        dcterms:title "CmsOrganization 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns350:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:organization4 .

    ns350:CmsImage1 foaf:thumbnail ns175:Thumbnail600x600 .
}

_:N88c8da7c75b349b48ec25b099b752e0a {
    _:N88c8da7c75b349b48ec25b099b752e0a a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N121d882f44834070a912a6d4250668c8 ;
        dcterms:title "CmsCollection1CmsWork5 closing" ;
        cms:work ns21:work5 .

    _:N121d882f44834070a912a6d4250668c8 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

dcterms:type {
    dcterms:type a cms:Property ;
        rdfs:label "Type" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns263:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> .
}

ns230:Thumbnail600x600 {
    ns230:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns399:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:57 .

    ns399:CmsImage1 foaf:thumbnail ns230:Thumbnail600x600 .
}

ns308:CmsImage0 {
    ns308:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:54 .
}

ns377:Thumbnail200x200 {
    ns377:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns324:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:105 .

    ns324:CmsImage1 foaf:thumbnail ns377:Thumbnail200x200 .
}

ns393:CmsImage1 {
    ns393:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:96 .
}

ns227:Thumbnail800x800 {
    ns227:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns96:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:13 .

    ns96:CmsImage1 foaf:thumbnail ns227:Thumbnail800x800 .
}

ns144:Thumbnail200x200 {
    ns144:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns401:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:26 .

    ns401:CmsImage1 foaf:thumbnail ns144:Thumbnail200x200 .
}

ns142:Thumbnail600x600 {
    ns142:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns338:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:87 .

    ns338:CmsImage0 foaf:thumbnail ns142:Thumbnail600x600 .
}

ns28:Thumbnail800x800 {
    ns28:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns106:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns21:work6 .

    ns106:CmsImage0 foaf:thumbnail ns28:Thumbnail800x800 .
}

ns8:75 {
    ns8:75 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Spatial> ;
        rdf:value "Spatial 5" ;
        skos:prefLabel "CmsConcept 75" .
}

ns260:Thumbnail800x800 {
    ns260:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns221:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:78 .

    ns221:CmsImage1 foaf:thumbnail ns260:Thumbnail800x800 .
}

ns250:Thumbnail400x400 {
    ns250:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns376:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:34 .

    ns376:CmsImage0 foaf:thumbnail ns250:Thumbnail400x400 .
}

ns135:Thumbnail200x200 {
    ns135:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 0 rights holder" ;
        dcterms:title "Technique 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns194:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:95 .

    ns194:CmsImage0 foaf:thumbnail ns135:Thumbnail200x200 .
}

ns208:Thumbnail800x800 {
    ns208:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 6 image 1 rights holder" ;
        dcterms:title "Publisher 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns279:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:56 .

    ns279:CmsImage1 foaf:thumbnail ns208:Thumbnail800x800 .
}

ns344:Thumbnail600x600 {
    ns344:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:64 .

    ns403:CmsImage1 foaf:thumbnail ns344:Thumbnail600x600 .
}

ns87:Thumbnail800x800 {
    ns87:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 6 image 0 rights holder" ;
        dcterms:title "Extent 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns276:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:16 .

    ns276:CmsImage0 foaf:thumbnail ns87:Thumbnail800x800 .
}

ns287:Thumbnail800x800 {
    ns287:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns245:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:81 .

    ns245:CmsImage1 foaf:thumbnail ns287:Thumbnail800x800 .
}

ns21:work6Location {
    ns21:work6Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns396:CmsImage1 {
    ns396:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 1 rights holder" ;
        dcterms:title "Cultural context 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:1 .
}

ns80:freestandingwork8 {
    ns80:freestandingwork8 a cms:Work ;
        dcterms:alternative "FreestandingWork8 alternative title 0",
            "FreestandingWork8 alternative title 1" ;
        dcterms:contributor _:N36d997b4d27e494987e9641dcd35b444,
            _:N9a5c7471eba749278dd459cad525dcb0 ;
        dcterms:creator ns80:organization0,
            ns80:organization1 ;
        dcterms:description _:N2a80e4e9a1954e38a8991331545f35c7 ;
        dcterms:extent ns8:18,
            ns8:19 ;
        dcterms:identifier "FreestandingWork8Id0",
            "FreestandingWork8Id1" ;
        dcterms:language ns8:28,
            ns8:29 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns8:48,
            ns8:49 ;
        dcterms:provenance "FreestandingWork8 provenance 0",
            "FreestandingWork8 provenance 1" ;
        dcterms:publisher ns8:58,
            ns8:59 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 rights holder" ;
        dcterms:source ns8:68,
            ns8:69 ;
        dcterms:spatial ns80:freestandingwork8Location ;
        dcterms:subject ns8:88,
            ns8:89 ;
        dcterms:title "FreestandingWork8" ;
        dcterms:type ns8:108,
            ns8:109 ;
        vra:culturalContext ns8:8,
            ns8:9 ;
        vra:material ns8:38,
            ns8:39 ;
        vra:technique ns8:98,
            ns8:99 ;
        foaf:page <http://example.com/work/8> .

    _:N36d997b4d27e494987e9641dcd35b444 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork8 contributor 0" .

    _:N9a5c7471eba749278dd459cad525dcb0 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork8 contributor 1" .

    _:N2a80e4e9a1954e38a8991331545f35c7 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns199:Thumbnail400x400 {
    ns199:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:person2 .

    ns385:CmsImage1 foaf:thumbnail ns199:Thumbnail400x400 .
}

ns282:Thumbnail800x800 {
    ns282:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 2 image 1 rights holder" ;
        dcterms:title "Source 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns327:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:62 .

    ns327:CmsImage1 foaf:thumbnail ns282:Thumbnail800x800 .
}

ns269:Thumbnail200x200 {
    ns269:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns337:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:22 .

    ns337:CmsImage0 foaf:thumbnail ns269:Thumbnail200x200 .
}

ns397:CmsImage0 {
    ns397:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 0 rights holder" ;
        dcterms:title "Extent 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:10 .
}

ns241:Thumbnail200x200 {
    ns241:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns398:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:74 .

    ns398:CmsImage0 foaf:thumbnail ns241:Thumbnail200x200 .
}

ns340:Thumbnail800x800 {
    ns340:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns375:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:person0 .

    ns375:CmsImage0 foaf:thumbnail ns340:Thumbnail800x800 .
}

ns352:Thumbnail800x800 {
    ns352:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns252:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:73 .

    ns252:CmsImage1 foaf:thumbnail ns352:Thumbnail800x800 .
}

ns159:Thumbnail200x200 {
    ns159:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns386:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns21:work4 .

    ns386:CmsImage1 foaf:thumbnail ns159:Thumbnail200x200 .
}

ns283:Thumbnail400x400 {
    ns283:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns114:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:80 .

    ns114:CmsImage1 foaf:thumbnail ns283:Thumbnail400x400 .
}

ns163:Thumbnail200x200 {
    ns163:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns108:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:91 .

    ns108:CmsImage0 foaf:thumbnail ns163:Thumbnail200x200 .
}

ns212:Thumbnail600x600 {
    ns212:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns210:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:71 .

    ns210:CmsImage1 foaf:thumbnail ns212:Thumbnail600x600 .
}

ns377:Thumbnail800x800 {
    ns377:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns324:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:105 .

    ns324:CmsImage1 foaf:thumbnail ns377:Thumbnail800x800 .
}

ns374:Thumbnail800x800 {
    ns374:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns48:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:28 .

    ns48:CmsImage0 foaf:thumbnail ns374:Thumbnail800x800 .
}

ns16:Thumbnail400x400 {
    ns16:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns284:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:67 .

    ns284:CmsImage1 foaf:thumbnail ns16:Thumbnail400x400 .
}

ns221:CmsImage0 {
    ns221:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:78 .
}

ns187:Thumbnail800x800 {
    ns187:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns380:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns17:work0 .

    ns380:CmsImage1 foaf:thumbnail ns187:Thumbnail800x800 .
}

ns141:Thumbnail800x800 {
    ns141:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 0 rights holder" ;
        dcterms:title "Source 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns312:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:60 .

    ns312:CmsImage0 foaf:thumbnail ns141:Thumbnail800x800 .
}

ns70:Thumbnail200x200 {
    ns70:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns245:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:81 .

    ns245:CmsImage0 foaf:thumbnail ns70:Thumbnail200x200 .
}

ns123:Thumbnail200x200 {
    ns123:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns101:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:99 .

    ns101:CmsImage0 foaf:thumbnail ns123:Thumbnail200x200 .
}

ns145:Thumbnail200x200 {
    ns145:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 0 rights holder" ;
        dcterms:title "Publisher 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns351:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:59 .

    ns351:CmsImage0 foaf:thumbnail ns145:Thumbnail200x200 .
}

ns8:68 {
    ns8:68 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 8" ;
        skos:prefLabel "CmsConcept 68" .
}

ns373:CmsImage0 {
    ns373:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:68 .
}

ns398:CmsImage0 {
    ns398:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:74 .
}

ns169:Thumbnail200x200 {
    ns169:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns316:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:50 .

    ns316:CmsImage0 foaf:thumbnail ns169:Thumbnail200x200 .
}

ns364:Thumbnail200x200 {
    ns364:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns81:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:53 .

    ns81:CmsImage0 foaf:thumbnail ns364:Thumbnail200x200 .
}

ns84:Thumbnail800x800 {
    ns84:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns359:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:43 .

    ns359:CmsImage1 foaf:thumbnail ns84:Thumbnail800x800 .
}

ns399:CmsImage0 {
    ns399:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 0 rights holder" ;
        dcterms:title "Publisher 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:57 .
}

ns362:CmsImage0 {
    ns362:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:48 .
}

ns107:Thumbnail800x800 {
    ns107:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns389:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:41 .

    ns389:CmsImage1 foaf:thumbnail ns107:Thumbnail800x800 .
}

ns93:Thumbnail800x800 {
    ns93:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns334:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:108 .

    ns334:CmsImage0 foaf:thumbnail ns93:Thumbnail800x800 .
}

ns111:Thumbnail200x200 {
    ns111:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns12:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:106 .

    ns12:CmsImage1 foaf:thumbnail ns111:Thumbnail200x200 .
}

ns134:Thumbnail400x400 {
    ns134:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 0 rights holder" ;
        dcterms:title "Medium 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns356:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:46 .

    ns356:CmsImage0 foaf:thumbnail ns134:Thumbnail400x400 .
}

ns80:person0 {
    ns80:person0 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "0, CmsPerson" ;
        foaf:familyName "0" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 0" ;
        foaf:page ns80:person0page .
}

ns21:work7Opening {
    ns21:work7Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-25"^^xsd:date ;
        dcterms:spatial _:N88a70d0ae292437296e8b567ae84a8f1 ;
        dcterms:title "CmsCollection1CmsWork7 opening" ;
        cms:work ns21:work7 .

    _:N88a70d0ae292437296e8b567ae84a8f1 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns256:Thumbnail200x200 {
    ns256:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns393:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:96 .

    ns393:CmsImage1 foaf:thumbnail ns256:Thumbnail200x200 .
}

ns382:Thumbnail600x600 {
    ns382:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns277:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:44 .

    ns277:CmsImage0 foaf:thumbnail ns382:Thumbnail600x600 .
}

ns8:104 {
    ns8:104 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 4" ;
        skos:prefLabel "CmsConcept 104" .
}

ns368:Thumbnail600x600 {
    ns368:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 9 image 1 rights holder" ;
        dcterms:title "Publisher 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns351:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:59 .

    ns351:CmsImage1 foaf:thumbnail ns368:Thumbnail600x600 .
}

ns118:Thumbnail400x400 {
    ns118:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:77 .

    ns365:CmsImage0 foaf:thumbnail ns118:Thumbnail400x400 .
}

ns396:CmsImage0 {
    ns396:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 1 image 0 rights holder" ;
        dcterms:title "Cultural context 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:1 .
}

ns358:Thumbnail400x400 {
    ns358:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns189:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:24 .

    ns189:CmsImage0 foaf:thumbnail ns358:Thumbnail400x400 .
}

ns126:Thumbnail200x200 {
    ns126:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns164:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:2 .

    ns164:CmsImage1 foaf:thumbnail ns126:Thumbnail200x200 .
}

ns377:Thumbnail400x400 {
    ns377:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 1 rights holder" ;
        dcterms:title "Type 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns324:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:105 .

    ns324:CmsImage1 foaf:thumbnail ns377:Thumbnail400x400 .
}

ns231:CmsImage1 {
    ns231:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:75 .
}

ns233:Thumbnail800x800 {
    ns233:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns395:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:89 .

    ns395:CmsImage0 foaf:thumbnail ns233:Thumbnail800x800 .
}

ns160:Thumbnail200x200 {
    ns160:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns237:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:organization0 .

    ns237:CmsImage0 foaf:thumbnail ns160:Thumbnail200x200 .
}

ns183:Thumbnail800x800 {
    ns183:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns328:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:11 .

    ns328:CmsImage0 foaf:thumbnail ns183:Thumbnail800x800 .
}

ns32:Thumbnail400x400 {
    ns32:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns363:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:55 .

    ns363:CmsImage0 foaf:thumbnail ns32:Thumbnail400x400 .
}

ns330:Thumbnail800x800 {
    ns330:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns372:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:freestandingwork11 .

    ns372:CmsImage1 foaf:thumbnail ns330:Thumbnail800x800 .
}

ns264:Thumbnail400x400 {
    ns264:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns268:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:20 .

    ns268:CmsImage1 foaf:thumbnail ns264:Thumbnail400x400 .
}

ns216:Thumbnail200x200 {
    ns216:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 1 rights holder" ;
        dcterms:title "CmsPerson 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns332:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:person1 .

    ns332:CmsImage1 foaf:thumbnail ns216:Thumbnail200x200 .
}

ns8:89 {
    ns8:89 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 9" ;
        skos:prefLabel "CmsConcept 89" .
}

ns161:Thumbnail200x200 {
    ns161:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 1 rights holder" ;
        dcterms:title "Spatial 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns231:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:75 .

    ns231:CmsImage1 foaf:thumbnail ns161:Thumbnail200x200 .
}

ns21:work4 {
    ns21:work4 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork4 alternative title 0",
            "CmsCollection1CmsWork4 alternative title 1" ;
        dcterms:contributor _:Na0df41e88a16497083516b9c76925e59,
            _:Nefb91391b0834bbead43d4f45ba149b5 ;
        dcterms:creator ns80:person1,
            ns80:person2 ;
        dcterms:description _:N1189b82494ee49b2befb12c377dac45b ;
        dcterms:extent ns8:14,
            ns8:15 ;
        dcterms:identifier "CmsCollection1CmsWork4Id0",
            "CmsCollection1CmsWork4Id1" ;
        dcterms:language ns8:24,
            ns8:25 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns8:44,
            ns8:45 ;
        dcterms:provenance "CmsCollection1CmsWork4 provenance 0",
            "CmsCollection1CmsWork4 provenance 1" ;
        dcterms:publisher ns8:54,
            ns8:55 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 rights holder" ;
        dcterms:source ns8:64,
            ns8:65 ;
        dcterms:spatial ns21:work4Location ;
        dcterms:subject ns8:84,
            ns8:85 ;
        dcterms:title "CmsCollection1CmsWork4" ;
        dcterms:type ns8:104,
            ns8:105 ;
        vra:culturalContext ns8:4,
            ns8:5 ;
        vra:material ns8:34,
            ns8:35 ;
        vra:technique ns8:94,
            ns8:95 ;
        cms:collection ns80:collection1 ;
        foaf:page <http://example.com/work/4> .

    _:Na0df41e88a16497083516b9c76925e59 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork4 contributor 1" .

    _:Nefb91391b0834bbead43d4f45ba149b5 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork4 contributor 0" .

    _:N1189b82494ee49b2befb12c377dac45b a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns8:15 {
    ns8:15 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> ;
        rdf:value "Extent 5" ;
        skos:prefLabel "CmsConcept 15" .
}

ns255:Thumbnail400x400 {
    ns255:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns300:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:40 .

    ns300:CmsImage1 foaf:thumbnail ns255:Thumbnail400x400 .
}

ns260:Thumbnail200x200 {
    ns260:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns221:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:78 .

    ns221:CmsImage1 foaf:thumbnail ns260:Thumbnail200x200 .
}

ns369:Thumbnail600x600 {
    ns369:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns45:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:38 .

    ns45:CmsImage0 foaf:thumbnail ns369:Thumbnail600x600 .
}

ns130:CmsImage1 {
    ns130:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 1 rights holder" ;
        dcterms:title "Material 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:33 .
}

ns361:Thumbnail400x400 {
    ns361:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns106:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns21:work6 .

    ns106:CmsImage1 foaf:thumbnail ns361:Thumbnail400x400 .
}

ns199:Thumbnail600x600 {
    ns199:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns385:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:person2 .

    ns385:CmsImage1 foaf:thumbnail ns199:Thumbnail600x600 .
}

ns266:CmsImage1 {
    ns266:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns21:work7 .
}

ns349:Thumbnail200x200 {
    ns349:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns380:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns17:work0 .

    ns380:CmsImage0 foaf:thumbnail ns349:Thumbnail200x200 .
}

ns272:Thumbnail400x400 {
    ns272:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns158:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:29 .

    ns158:CmsImage1 foaf:thumbnail ns272:Thumbnail400x400 .
}

ns57:Thumbnail800x800 {
    ns57:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 5 image 0 rights holder" ;
        dcterms:title "Spatial 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns231:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:75 .

    ns231:CmsImage0 foaf:thumbnail ns57:Thumbnail800x800 .
}

ns250:Thumbnail200x200 {
    ns250:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 0 rights holder" ;
        dcterms:title "Material 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns376:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:34 .

    ns376:CmsImage0 foaf:thumbnail ns250:Thumbnail200x200 .
}

ns288:Thumbnail600x600 {
    ns288:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 3 image 1 rights holder" ;
        dcterms:title "Type 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns309:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:103 .

    ns309:CmsImage1 foaf:thumbnail ns288:Thumbnail600x600 .
}

ns85:Thumbnail600x600 {
    ns85:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 0 rights holder" ;
        dcterms:title "CmsCollection1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns325:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:collection1 .

    ns325:CmsImage0 foaf:thumbnail ns85:Thumbnail600x600 .
}

ns345:Thumbnail800x800 {
    ns345:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns27:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:37 .

    ns27:CmsImage0 foaf:thumbnail ns345:Thumbnail800x800 .
}

ns201:Thumbnail800x800 {
    ns201:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:64 .

    ns403:CmsImage0 foaf:thumbnail ns201:Thumbnail800x800 .
}

ns214:Thumbnail800x800 {
    ns214:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns189:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:24 .

    ns189:CmsImage1 foaf:thumbnail ns214:Thumbnail800x800 .
}

ns303:Thumbnail600x600 {
    ns303:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns363:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:55 .

    ns363:CmsImage1 foaf:thumbnail ns303:Thumbnail600x600 .
}

ns222:Thumbnail600x600 {
    ns222:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 0 rights holder" ;
        dcterms:title "Source 1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns341:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:61 .

    ns341:CmsImage0 foaf:thumbnail ns222:Thumbnail600x600 .
}

ns347:Thumbnail200x200 {
    ns347:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns383:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns17:work1 .

    ns383:CmsImage1 foaf:thumbnail ns347:Thumbnail200x200 .
}

ns355:CmsImage0 {
    ns355:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:5 .
}

ns54:Thumbnail600x600 {
    ns54:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 0 rights holder" ;
        dcterms:title "Language 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns268:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:20 .

    ns268:CmsImage0 foaf:thumbnail ns54:Thumbnail600x600 .
}

ns392:CmsImage0 {
    ns392:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:organization3 .
}

ns116:Thumbnail800x800 {
    ns116:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 0 rights holder" ;
        dcterms:title "Subject 6 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns155:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:86 .

    ns155:CmsImage0 foaf:thumbnail ns116:Thumbnail800x800 .
}

ns8:103 {
    ns8:103 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Type> ;
        rdf:value "Type 3" ;
        skos:prefLabel "CmsConcept 103" .
}

ns294:Thumbnail600x600 {
    ns294:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 1 rights holder" ;
        dcterms:title "Extent 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns371:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:12 .

    ns371:CmsImage1 foaf:thumbnail ns294:Thumbnail600x600 .
}

ns249:Thumbnail800x800 {
    ns249:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns68:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:79 .

    ns68:CmsImage0 foaf:thumbnail ns249:Thumbnail800x800 .
}

ns285:CmsImage1 {
    ns285:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 1 rights holder" ;
        dcterms:title "Material 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:35 .
}

ns379:Thumbnail800x800 {
    ns379:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 6 image 1 rights holder" ;
        dcterms:title "Medium 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns356:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:46 .

    ns356:CmsImage1 foaf:thumbnail ns379:Thumbnail800x800 .
}

ns348:CmsImage0 {
    ns348:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:51 .
}

ns385:CmsImage1 {
    ns385:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 1 rights holder" ;
        dcterms:title "CmsPerson 2 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:person2 .
}

ns397:CmsImage1 {
    ns397:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 0 image 1 rights holder" ;
        dcterms:title "Extent 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:10 .
}

ns275:Thumbnail600x600 {
    ns275:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns362:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:48 .

    ns362:CmsImage0 foaf:thumbnail ns275:Thumbnail600x600 .
}

ns254:CmsImage0 {
    ns254:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 0 rights holder" ;
        dcterms:title "Extent 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:19 .
}

ns232:Thumbnail400x400 {
    ns232:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns108:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:91 .

    ns108:CmsImage1 foaf:thumbnail ns232:Thumbnail400x400 .
}

ns306:Thumbnail800x800 {
    ns306:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns251:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:52 .

    ns251:CmsImage1 foaf:thumbnail ns306:Thumbnail800x800 .
}

ns80:freestandingwork11Opening {
    ns80:freestandingwork11Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-21"^^xsd:date ;
        dcterms:spatial _:Ned5bfbeb5fa94974b669000ddf126474 ;
        dcterms:title "FreestandingWork11 opening" ;
        cms:work ns80:freestandingwork11 .

    _:Ned5bfbeb5fa94974b669000ddf126474 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns336:Thumbnail600x600 {
    ns336:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns314:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:8 .

    ns314:CmsImage0 foaf:thumbnail ns336:Thumbnail600x600 .
}

ns372:CmsImage1 {
    ns372:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:freestandingwork11 .
}

ns297:Thumbnail400x400 {
    ns297:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns387:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:70 .

    ns387:CmsImage0 foaf:thumbnail ns297:Thumbnail400x400 .
}

ns80:freestandingwork9Creation {
    ns80:freestandingwork9Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns80:organization1,
            ns80:organization2 ;
        dcterms:date _:Ne9dcec6ac2f34e9382ad7339131eeca6 ;
        dcterms:spatial ns80:freestandingwork9Location ;
        dcterms:title "FreestandingWork9 creation" ;
        cms:work ns80:freestandingwork9 .

    _:Ne9dcec6ac2f34e9382ad7339131eeca6 a cms:DateTimeDescription ;
        time:day "---23"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns242:Thumbnail600x600 {
    ns242:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 0 rights holder" ;
        dcterms:title "Subject 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns26:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:83 .

    ns26:CmsImage0 foaf:thumbnail ns242:Thumbnail600x600 .
}

ns218:Thumbnail600x600 {
    ns218:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns342:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:45 .

    ns342:CmsImage1 foaf:thumbnail ns218:Thumbnail600x600 .
}

ns160:Thumbnail600x600 {
    ns160:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 0 rights holder" ;
        dcterms:title "CmsOrganization 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns237:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:organization0 .

    ns237:CmsImage0 foaf:thumbnail ns160:Thumbnail600x600 .
}

ns101:CmsImage1 {
    ns101:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:99 .
}

ns66:Thumbnail400x400 {
    ns66:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1 image 1 rights holder" ;
        dcterms:title "CmsCollection1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns325:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:collection1 .

    ns325:CmsImage1 foaf:thumbnail ns66:Thumbnail400x400 .
}

ns147:Thumbnail200x200 {
    ns147:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 5 image 1 rights holder" ;
        dcterms:title "Technique 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns194:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:95 .

    ns194:CmsImage1 foaf:thumbnail ns147:Thumbnail200x200 .
}

ns80:freestandingwork11 {
    ns80:freestandingwork11 a cms:Work ;
        dcterms:alternative "FreestandingWork11 alternative title 0",
            "FreestandingWork11 alternative title 1" ;
        dcterms:contributor _:Nc7caee7d32be4f18963334b9bfcfe64d,
            _:Ncd0885c7667941da907dd764fb85f66d ;
        dcterms:creator ns80:organization3,
            ns80:organization4 ;
        dcterms:extent ns8:11,
            ns8:12 ;
        dcterms:identifier "FreestandingWork11Id0",
            "FreestandingWork11Id1" ;
        dcterms:language ns8:21,
            ns8:22 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns8:41,
            ns8:42 ;
        dcterms:provenance "FreestandingWork11 provenance 0",
            "FreestandingWork11 provenance 1" ;
        dcterms:publisher ns8:51,
            ns8:52 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 rights holder" ;
        dcterms:source ns8:61,
            ns8:62 ;
        dcterms:spatial ns80:freestandingwork11Location ;
        dcterms:subject ns8:81,
            ns8:82 ;
        dcterms:title "FreestandingWork11" ;
        dcterms:type ns8:101,
            ns8:102 ;
        vra:culturalContext ns8:1,
            ns8:2 ;
        vra:material ns8:31,
            ns8:32 ;
        vra:technique ns8:91,
            ns8:92 .

    _:Nc7caee7d32be4f18963334b9bfcfe64d a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork11 contributor 0" .

    _:Ncd0885c7667941da907dd764fb85f66d a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork11 contributor 1" .
}

ns21:work5Creation {
    ns21:work5Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns80:person2,
            ns80:person3 ;
        dcterms:date _:N2437222cc26241b9b74eeece3e667fef ;
        dcterms:spatial ns21:work5Location ;
        dcterms:title "CmsCollection1CmsWork5 creation" ;
        cms:work ns21:work5 .

    _:N2437222cc26241b9b74eeece3e667fef a cms:DateTimeDescription ;
        time:day "---27"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .
}

ns166:Thumbnail400x400 {
    ns166:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 1 rights holder" ;
        dcterms:title "Language 2 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns337:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:22 .

    ns337:CmsImage1 foaf:thumbnail ns166:Thumbnail400x400 .
}

ns119:Thumbnail800x800 {
    ns119:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns326:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:58 .

    ns326:CmsImage1 foaf:thumbnail ns119:Thumbnail800x800 .
}

ns349:Thumbnail800x800 {
    ns349:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns380:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns17:work0 .

    ns380:CmsImage0 foaf:thumbnail ns349:Thumbnail800x800 .
}

ns320:Thumbnail400x400 {
    ns320:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 7 image 0 rights holder" ;
        dcterms:title "Type 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns73:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:107 .

    ns73:CmsImage0 foaf:thumbnail ns320:Thumbnail400x400 .
}

ns310:Thumbnail200x200 {
    ns310:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns266:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns21:work7 .

    ns266:CmsImage1 foaf:thumbnail ns310:Thumbnail200x200 .
}

ns137:CmsImage0 {
    ns137:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:94 .
}

ns326:CmsImage0 {
    ns326:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:58 .
}

ns51:Thumbnail600x600 {
    ns51:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns323:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:freestandingwork9 .

    ns323:CmsImage1 foaf:thumbnail ns51:Thumbnail600x600 .
}

ns400:CmsImage1 {
    ns400:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 1 rights holder" ;
        dcterms:title "Language 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:25 .
}

ns384:Thumbnail400x400 {
    ns384:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:organization3 .

    ns392:CmsImage1 foaf:thumbnail ns384:Thumbnail400x400 .
}

ns292:CmsImage0 {
    ns292:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 2 image 0 rights holder" ;
        dcterms:title "Material 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:32 .
}

ns95:Thumbnail400x400 {
    ns95:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns339:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:65 .

    ns339:CmsImage1 foaf:thumbnail ns95:Thumbnail400x400 .
}

ns123:Thumbnail600x600 {
    ns123:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns101:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:99 .

    ns101:CmsImage0 foaf:thumbnail ns123:Thumbnail600x600 .
}

ns77:Thumbnail600x600 {
    ns77:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 0 rights holder" ;
        dcterms:title "Publisher 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns251:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:52 .

    ns251:CmsImage0 foaf:thumbnail ns77:Thumbnail600x600 .
}

ns71:Thumbnail800x800 {
    ns71:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns102:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:person4 .

    ns102:CmsImage0 foaf:thumbnail ns71:Thumbnail800x800 .
}

ns253:Thumbnail400x400 {
    ns253:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 1 rights holder" ;
        dcterms:title "Subject 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns395:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:89 .

    ns395:CmsImage1 foaf:thumbnail ns253:Thumbnail400x400 .
}

ns142:Thumbnail200x200 {
    ns142:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns338:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:87 .

    ns338:CmsImage0 foaf:thumbnail ns142:Thumbnail200x200 .
}

ns330:Thumbnail600x600 {
    ns330:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns372:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:freestandingwork11 .

    ns372:CmsImage1 foaf:thumbnail ns330:Thumbnail600x600 .
}

ns169:Thumbnail800x800 {
    ns169:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns316:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:50 .

    ns316:CmsImage0 foaf:thumbnail ns169:Thumbnail800x800 .
}

ns390:Thumbnail800x800 {
    ns390:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:organization3 .

    ns392:CmsImage0 foaf:thumbnail ns390:Thumbnail800x800 .
}

ns196:Thumbnail600x600 {
    ns196:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 1 rights holder" ;
        dcterms:title "Extent 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns302:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:17 .

    ns302:CmsImage1 foaf:thumbnail ns196:Thumbnail600x600 .
}

ns299:Thumbnail400x400 {
    ns299:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns52:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:82 .

    ns52:CmsImage0 foaf:thumbnail ns299:Thumbnail400x400 .
}

ns364:Thumbnail600x600 {
    ns364:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 0 rights holder" ;
        dcterms:title "Publisher 3 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns81:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:53 .

    ns81:CmsImage0 foaf:thumbnail ns364:Thumbnail600x600 .
}

ns51:Thumbnail800x800 {
    ns51:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 1 rights holder" ;
        dcterms:title "FreestandingWork9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns323:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:freestandingwork9 .

    ns323:CmsImage1 foaf:thumbnail ns51:Thumbnail800x800 .
}

ns359:CmsImage0 {
    ns359:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:43 .
}

ns367:CmsImage0 {
    ns367:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:27 .
}

ns173:Thumbnail200x200 {
    ns173:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns266:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns21:work7 .

    ns266:CmsImage0 foaf:thumbnail ns173:Thumbnail200x200 .
}

ns268:CmsImage1 {
    ns268:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 0 image 1 rights holder" ;
        dcterms:title "Language 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:20 .
}

ns79:Thumbnail800x800 {
    ns79:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 1 image 0 rights holder" ;
        dcterms:title "CmsPerson 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns332:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:person1 .

    ns332:CmsImage0 foaf:thumbnail ns79:Thumbnail800x800 .
}

ns244:Thumbnail800x800 {
    ns244:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 0 rights holder" ;
        dcterms:title "Publisher 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns348:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:51 .

    ns348:CmsImage0 foaf:thumbnail ns244:Thumbnail800x800 .
}

ns13:Thumbnail400x400 {
    ns13:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns341:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:61 .

    ns341:CmsImage1 foaf:thumbnail ns13:Thumbnail400x400 .
}

ns340:Thumbnail200x200 {
    ns340:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns375:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:person0 .

    ns375:CmsImage0 foaf:thumbnail ns340:Thumbnail200x200 .
}

ns129:Thumbnail400x400 {
    ns129:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 8 image 0 rights holder" ;
        dcterms:title "Subject 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns40:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:88 .

    ns40:CmsImage0 foaf:thumbnail ns129:Thumbnail400x400 .
}

ns296:Thumbnail600x600 {
    ns296:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 0 rights holder" ;
        dcterms:title "Source 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns284:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:67 .

    ns284:CmsImage0 foaf:thumbnail ns296:Thumbnail600x600 .
}

ns8:32 {
    ns8:32 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 2" ;
        skos:prefLabel "CmsConcept 32" .
}

ns53:Thumbnail600x600 {
    ns53:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns328:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:11 .

    ns328:CmsImage1 foaf:thumbnail ns53:Thumbnail600x600 .
}

ns14:Thumbnail200x200 {
    ns14:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 1 image 1 rights holder" ;
        dcterms:title "Type 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns50:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:101 .

    ns50:CmsImage1 foaf:thumbnail ns14:Thumbnail200x200 .
}

ns391:CmsImage1 {
    ns391:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 9 image 1 rights holder" ;
        dcterms:title "Material 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:39 .
}

ns132:Thumbnail200x200 {
    ns132:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns302:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:17 .

    ns302:CmsImage0 foaf:thumbnail ns132:Thumbnail200x200 .
}

ns384:Thumbnail600x600 {
    ns384:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:organization3 .

    ns392:CmsImage1 foaf:thumbnail ns384:Thumbnail600x600 .
}

ns17:work0 {
    ns17:work0 a cms:Work ;
        dcterms:alternative "CmsCollection0CmsWork0 alternative title 0",
            "CmsCollection0CmsWork0 alternative title 1" ;
        dcterms:contributor _:Nd40037c9ee9e40f29094bcd50bf611ca,
            _:Nd9667bf14c1b4c049a7e1f867d94e388 ;
        dcterms:creator ns80:organization2,
            ns80:organization3 ;
        dcterms:description _:N3bca468ca8a54482b38cdfacb74c1722 ;
        dcterms:extent ns8:10,
            ns8:11 ;
        dcterms:identifier "CmsCollection0CmsWork0Id0",
            "CmsCollection0CmsWork0Id1" ;
        dcterms:language ns8:20,
            ns8:21 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns8:40,
            ns8:41 ;
        dcterms:provenance "CmsCollection0CmsWork0 provenance 0",
            "CmsCollection0CmsWork0 provenance 1" ;
        dcterms:publisher ns8:50,
            ns8:51 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 rights holder" ;
        dcterms:source ns8:60,
            ns8:61 ;
        dcterms:spatial ns17:work0Location ;
        dcterms:subject ns8:80,
            ns8:81 ;
        dcterms:title "CmsCollection0CmsWork0" ;
        dcterms:type ns8:100,
            ns8:101 ;
        vra:culturalContext ns8:0,
            ns8:1 ;
        vra:material ns8:30,
            ns8:31 ;
        vra:technique ns8:90,
            ns8:91 ;
        cms:collection ns80:collection0 ;
        foaf:page <http://example.com/work/0> .

    _:Nd40037c9ee9e40f29094bcd50bf611ca a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork0 contributor 1" .

    _:Nd9667bf14c1b4c049a7e1f867d94e388 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection0CmsWork0 contributor 0" .

    _:N3bca468ca8a54482b38cdfacb74c1722 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns267:Thumbnail400x400 {
    ns267:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 1 image 1 rights holder" ;
        dcterms:title "Publisher 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns348:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:51 .

    ns348:CmsImage1 foaf:thumbnail ns267:Thumbnail400x400 .
}

ns401:CmsImage1 {
    ns401:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 1 rights holder" ;
        dcterms:title "Language 6 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:26 .
}

ns183:Thumbnail200x200 {
    ns183:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns328:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:11 .

    ns328:CmsImage0 foaf:thumbnail ns183:Thumbnail200x200 .
}

ns67:Thumbnail800x800 {
    ns67:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 1 rights holder" ;
        dcterms:title "Cultural context 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns314:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:8 .

    ns314:CmsImage1 foaf:thumbnail ns67:Thumbnail800x800 .
}

ns80:freestandingwork9 {
    ns80:freestandingwork9 a cms:Work ;
        dcterms:alternative "FreestandingWork9 alternative title 0",
            "FreestandingWork9 alternative title 1" ;
        dcterms:contributor _:N08afce7bdde7438682cd8ed155b5ad10,
            _:N1081149d193f40c9bf030f02263d17fb ;
        dcterms:creator ns80:organization1,
            ns80:organization2 ;
        dcterms:extent ns8:10,
            ns8:19 ;
        dcterms:identifier "FreestandingWork9Id0",
            "FreestandingWork9Id1" ;
        dcterms:language ns8:20,
            ns8:29 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns8:40,
            ns8:49 ;
        dcterms:provenance "FreestandingWork9 provenance 0",
            "FreestandingWork9 provenance 1" ;
        dcterms:publisher ns8:50,
            ns8:59 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 rights holder" ;
        dcterms:source ns8:60,
            ns8:69 ;
        dcterms:spatial ns80:freestandingwork9Location ;
        dcterms:subject ns8:80,
            ns8:89 ;
        dcterms:title "FreestandingWork9" ;
        dcterms:type ns8:100,
            ns8:109 ;
        vra:culturalContext ns8:0,
            ns8:9 ;
        vra:material ns8:30,
            ns8:39 ;
        vra:technique ns8:90,
            ns8:99 .

    _:N08afce7bdde7438682cd8ed155b5ad10 a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork9 contributor 0" .

    _:N1081149d193f40c9bf030f02263d17fb a cms:Agent,
            cms:Person ;
        foaf:name "FreestandingWork9 contributor 1" .
}

ns111:Thumbnail600x600 {
    ns111:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns12:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:106 .

    ns12:CmsImage1 foaf:thumbnail ns111:Thumbnail600x600 .
}

ns402:CmsImage1 {
    ns402:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 1 rights holder" ;
        dcterms:title "Cultural context 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:0 .
}

ns315:Thumbnail400x400 {
    ns315:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns130:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:33 .

    ns130:CmsImage0 foaf:thumbnail ns315:Thumbnail400x400 .
}

ns329:CmsImage0 {
    ns329:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 0 rights holder" ;
        dcterms:title "CmsOrganization 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:organization2 .
}

ns375:CmsImage0 {
    ns375:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 0 image 0 rights holder" ;
        dcterms:title "CmsPerson 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:person0 .
}

ns260:Thumbnail600x600 {
    ns260:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 1 rights holder" ;
        dcterms:title "Spatial 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns221:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:78 .

    ns221:CmsImage1 foaf:thumbnail ns260:Thumbnail600x600 .
}

ns21:work4Creation {
    ns21:work4Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns80:person1,
            ns80:person2 ;
        dcterms:date _:N75cf96730e014b61bec81c663385855a ;
        dcterms:description _:N1189b82494ee49b2befb12c377dac45b ;
        dcterms:spatial ns21:work4Location ;
        dcterms:title "CmsCollection1CmsWork4 creation" ;
        cms:work ns21:work4 .

    _:N75cf96730e014b61bec81c663385855a a cms:DateTimeDescription ;
        time:day "---28"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:N1189b82494ee49b2befb12c377dac45b a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns21:work6Creation {
    ns21:work6Creation a cms:Event,
            cms:WorkCreation,
            cms:WorkEvent ;
        dcterms:creator ns80:person3,
            ns80:person4 ;
        dcterms:date _:Ncec7228c594b47889b0fd184c41687a5 ;
        dcterms:description _:N1bcdf36bdc554949b54d85dae64923dc ;
        dcterms:spatial ns21:work6Location ;
        dcterms:title "CmsCollection1CmsWork6 creation" ;
        cms:work ns21:work6 .

    _:Ncec7228c594b47889b0fd184c41687a5 a cms:DateTimeDescription ;
        time:day "---26"^^xsd:gDay ;
        time:month "--12"^^xsd:gMonth ;
        time:year "2021"^^xsd:gYear .

    _:N1bcdf36bdc554949b54d85dae64923dc a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns259:Thumbnail800x800 {
    ns259:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork8 image 1 rights holder" ;
        dcterms:title "FreestandingWork8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns156:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:freestandingwork8 .

    ns156:CmsImage1 foaf:thumbnail ns259:Thumbnail800x800 .
}

ns333:Thumbnail200x200 {
    ns333:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns338:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:87 .

    ns338:CmsImage1 foaf:thumbnail ns333:Thumbnail200x200 .
}

ns3:Thumbnail400x400 {
    ns3:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 0 rights holder" ;
        dcterms:title "FreestandingWork11 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns372:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:freestandingwork11 .

    ns372:CmsImage0 foaf:thumbnail ns3:Thumbnail400x400 .
}

ns331:Thumbnail600x600 {
    ns331:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns238:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:9 .

    ns238:CmsImage1 foaf:thumbnail ns331:Thumbnail600x600 .
}

ns181:Thumbnail400x400 {
    ns181:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 1 rights holder" ;
        dcterms:title "Material 7 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns27:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:37 .

    ns27:CmsImage1 foaf:thumbnail ns181:Thumbnail400x400 .
}

ns30:Thumbnail400x400 {
    ns30:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 0 rights holder" ;
        dcterms:title "Spatial 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns207:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:76 .

    ns207:CmsImage0 foaf:thumbnail ns30:Thumbnail400x400 .
}

ns232:Thumbnail200x200 {
    ns232:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 1 rights holder" ;
        dcterms:title "Technique 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns108:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:91 .

    ns108:CmsImage1 foaf:thumbnail ns232:Thumbnail200x200 .
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

ns255:Thumbnail600x600 {
    ns255:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 1 rights holder" ;
        dcterms:title "Medium 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns300:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:40 .

    ns300:CmsImage1 foaf:thumbnail ns255:Thumbnail600x600 .
}

ns369:Thumbnail800x800 {
    ns369:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns45:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:38 .

    ns45:CmsImage0 foaf:thumbnail ns369:Thumbnail800x800 .
}

ns344:Thumbnail200x200 {
    ns344:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:64 .

    ns403:CmsImage1 foaf:thumbnail ns344:Thumbnail200x200 .
}

ns301:Thumbnail800x800 {
    ns301:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 1 rights holder" ;
        dcterms:title "Source 8 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns373:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:68 .

    ns373:CmsImage1 foaf:thumbnail ns301:Thumbnail800x800 .
}

ns310:Thumbnail600x600 {
    ns310:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork7 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns266:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns21:work7 .

    ns266:CmsImage1 foaf:thumbnail ns310:Thumbnail600x600 .
}

ns233:Thumbnail200x200 {
    ns233:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns395:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:89 .

    ns395:CmsImage0 foaf:thumbnail ns233:Thumbnail200x200 .
}

ns185:Thumbnail600x600 {
    ns185:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns394:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:42 .

    ns394:CmsImage1 foaf:thumbnail ns185:Thumbnail600x600 .
}

ns403:CmsImage1 {
    ns403:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:64 .
}

ns281:Thumbnail200x200 {
    ns281:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns339:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:65 .

    ns339:CmsImage0 foaf:thumbnail ns281:Thumbnail200x200 .
}

ns344:Thumbnail400x400 {
    ns344:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 1 rights holder" ;
        dcterms:title "Source 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns403:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:64 .

    ns403:CmsImage1 foaf:thumbnail ns344:Thumbnail400x400 .
}

ns8:46 {
    ns8:46 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Medium> ;
        rdf:value "Medium 6" ;
        skos:prefLabel "CmsConcept 46" .
}

ns220:Thumbnail200x200 {
    ns220:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 1 rights holder" ;
        dcterms:title "Language 7 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns367:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:27 .

    ns367:CmsImage1 foaf:thumbnail ns220:Thumbnail200x200 .
}

ns148:Thumbnail600x600 {
    ns148:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 1 rights holder" ;
        dcterms:title "Material 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns45:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:38 .

    ns45:CmsImage1 foaf:thumbnail ns148:Thumbnail600x600 .
}

ns286:Thumbnail400x400 {
    ns286:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 0 rights holder" ;
        dcterms:title "Source 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns215:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:63 .

    ns215:CmsImage0 foaf:thumbnail ns286:Thumbnail400x400 .
}

ns343:Thumbnail400x400 {
    ns343:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns61:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns17:work3 .

    ns61:CmsImage0 foaf:thumbnail ns343:Thumbnail400x400 .
}

ns17:work3Location {
    ns17:work3Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns193:CmsImage1 {
    ns193:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 0 image 1 rights holder" ;
        dcterms:title "Type 0 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:100 .
}

ns398:CmsImage1 {
    ns398:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:74 .
}

ns322:Thumbnail800x800 {
    ns322:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 0 rights holder" ;
        dcterms:title "Cultural context 9 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns238:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:9 .

    ns238:CmsImage0 foaf:thumbnail ns322:Thumbnail800x800 .
}

ns107:Thumbnail400x400 {
    ns107:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns389:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:41 .

    ns389:CmsImage1 foaf:thumbnail ns107:Thumbnail400x400 .
}

ns357:Thumbnail600x600 {
    ns357:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns398:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:74 .

    ns398:CmsImage1 foaf:thumbnail ns357:Thumbnail600x600 .
}

ns122:Thumbnail400x400 {
    ns122:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns354:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:84 .

    ns354:CmsImage0 foaf:thumbnail ns122:Thumbnail400x400 .
}

ns124:Thumbnail600x600 {
    ns124:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 3 image 1 rights holder" ;
        dcterms:title "Technique 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns6:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:93 .

    ns6:CmsImage1 foaf:thumbnail ns124:Thumbnail600x600 .
}

ns280:Thumbnail200x200 {
    ns280:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 0 rights holder" ;
        dcterms:title "Publisher 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns326:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:58 .

    ns326:CmsImage0 foaf:thumbnail ns280:Thumbnail200x200 .
}

ns82:Thumbnail400x400 {
    ns82:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 3 image 1 rights holder" ;
        dcterms:title "Cultural context 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns298:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:3 .

    ns298:CmsImage1 foaf:thumbnail ns82:Thumbnail400x400 .
}

ns336:Thumbnail400x400 {
    ns336:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns314:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:8 .

    ns314:CmsImage0 foaf:thumbnail ns336:Thumbnail400x400 .
}

ns7:Thumbnail600x600 {
    ns7:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 1 rights holder" ;
        dcterms:title "Technique 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns295:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:92 .

    ns295:CmsImage1 foaf:thumbnail ns7:Thumbnail600x600 .
}

ns80:organization3 {
    ns80:organization3 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 3" ;
        foaf:page ns80:organization3page .
}

ns384:Thumbnail200x200 {
    ns384:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 1 rights holder" ;
        dcterms:title "CmsOrganization 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns392:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:organization3 .

    ns392:CmsImage1 foaf:thumbnail ns384:Thumbnail200x200 .
}

ns271:Thumbnail400x400 {
    ns271:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns373:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:68 .

    ns373:CmsImage0 foaf:thumbnail ns271:Thumbnail400x400 .
}

ns80:organization2 {
    ns80:organization2 a cms:Agent,
            cms:Organization ;
        foaf:name "CmsOrganization 2" ;
        foaf:page ns80:organization2page .
}

ns122:Thumbnail800x800 {
    ns122:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 0 rights holder" ;
        dcterms:title "Subject 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns354:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:84 .

    ns354:CmsImage0 foaf:thumbnail ns122:Thumbnail800x800 .
}

ns10:Thumbnail400x400 {
    ns10:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 1 rights holder" ;
        dcterms:title "Material 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns335:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:36 .

    ns335:CmsImage1 foaf:thumbnail ns10:Thumbnail400x400 .
}

ns357:Thumbnail400x400 {
    ns357:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 1 rights holder" ;
        dcterms:title "Spatial 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns398:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:74 .

    ns398:CmsImage1 foaf:thumbnail ns357:Thumbnail400x400 .
}

ns290:Thumbnail200x200 {
    ns290:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns157:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:organization1 .

    ns157:CmsImage1 foaf:thumbnail ns290:Thumbnail200x200 .
}

ns8:61 {
    ns8:61 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 1" ;
        skos:prefLabel "CmsConcept 61" .
}

ns343:Thumbnail200x200 {
    ns343:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns61:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns17:work3 .

    ns61:CmsImage0 foaf:thumbnail ns343:Thumbnail200x200 .
}

ns311:Thumbnail800x800 {
    ns311:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns81:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:53 .

    ns81:CmsImage1 foaf:thumbnail ns311:Thumbnail800x800 .
}

ns165:Thumbnail600x600 {
    ns165:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns367:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:27 .

    ns367:CmsImage0 foaf:thumbnail ns165:Thumbnail600x600 .
}

ns352:Thumbnail200x200 {
    ns352:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 3 image 1 rights holder" ;
        dcterms:title "Spatial 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns252:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:73 .

    ns252:CmsImage1 foaf:thumbnail ns352:Thumbnail200x200 .
}

ns55:Thumbnail800x800 {
    ns55:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 3 image 1 rights holder" ;
        dcterms:title "Language 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns388:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:23 .

    ns388:CmsImage1 foaf:thumbnail ns55:Thumbnail800x800 .
}

ns98:Thumbnail200x200 {
    ns98:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns207:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:76 .

    ns207:CmsImage1 foaf:thumbnail ns98:Thumbnail200x200 .
}

ns390:Thumbnail200x200 {
    ns390:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 3 image 0 rights holder" ;
        dcterms:title "CmsOrganization 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns392:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:organization3 .

    ns392:CmsImage0 foaf:thumbnail ns390:Thumbnail200x200 .
}

ns317:Thumbnail400x400 {
    ns317:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns137:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:94 .

    ns137:CmsImage0 foaf:thumbnail ns317:Thumbnail400x400 .
}

ns200:Thumbnail600x600 {
    ns200:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 0 rights holder" ;
        dcterms:title "Cultural context 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns257:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:7 .

    ns257:CmsImage0 foaf:thumbnail ns200:Thumbnail600x600 .
}

ns8:28 {
    ns8:28 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 8" ;
        skos:prefLabel "CmsConcept 28" .
}

ns363:CmsImage1 {
    ns363:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:55 .
}

ns203:Thumbnail600x600 {
    ns203:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 1 rights holder" ;
        dcterms:title "Material 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns146:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:30 .

    ns146:CmsImage1 foaf:thumbnail ns203:Thumbnail600x600 .
}

ns370:Thumbnail200x200 {
    ns370:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns323:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:freestandingwork9 .

    ns323:CmsImage0 foaf:thumbnail ns370:Thumbnail200x200 .
}

ns172:Thumbnail600x600 {
    ns172:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns34:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:72 .

    ns34:CmsImage0 foaf:thumbnail ns172:Thumbnail600x600 .
}

ns201:Thumbnail600x600 {
    ns201:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:64 .

    ns403:CmsImage0 foaf:thumbnail ns201:Thumbnail600x600 .
}

ns8:51 {
    ns8:51 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 1" ;
        skos:prefLabel "CmsConcept 51" .
}

ns8:7 {
    ns8:7 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Cultural%20context> ;
        rdf:value "Cultural context 7" ;
        skos:prefLabel "CmsConcept 7" .
}

ns318:CmsImage0 {
    ns318:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 1 image 0 rights holder" ;
        dcterms:title "Material 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:31 .
}

ns43:Thumbnail800x800 {
    ns43:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 1 rights holder" ;
        dcterms:title "CmsPerson 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns102:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:person4 .

    ns102:CmsImage1 foaf:thumbnail ns43:Thumbnail800x800 .
}

ns404:CmsImage0 {
    ns404:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 0 rights holder" ;
        dcterms:title "FreestandingWork10 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:freestandingwork10 .
}

ns86:Thumbnail400x400 {
    ns86:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 5 image 0 rights holder" ;
        dcterms:title "Material 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns285:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:35 .

    ns285:CmsImage0 foaf:thumbnail ns86:Thumbnail400x400 .
}

ns311:Thumbnail200x200 {
    ns311:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 3 image 1 rights holder" ;
        dcterms:title "Publisher 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns81:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:53 .

    ns81:CmsImage1 foaf:thumbnail ns311:Thumbnail200x200 .
}

ns172:Thumbnail200x200 {
    ns172:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns34:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:72 .

    ns34:CmsImage0 foaf:thumbnail ns172:Thumbnail200x200 .
}

ns78:Thumbnail400x400 {
    ns78:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 0 image 0 rights holder" ;
        dcterms:title "Medium 0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns300:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:40 .

    ns300:CmsImage0 foaf:thumbnail ns78:Thumbnail400x400 .
}

ns139:Thumbnail800x800 {
    ns139:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 4 image 1 rights holder" ;
        dcterms:title "Material 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns376:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:34 .

    ns376:CmsImage1 foaf:thumbnail ns139:Thumbnail800x800 .
}

ns334:CmsImage0 {
    ns334:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:108 .
}

ns202:Thumbnail600x600 {
    ns202:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns61:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns17:work3 .

    ns61:CmsImage1 foaf:thumbnail ns202:Thumbnail600x600 .
}

ns39:Thumbnail800x800 {
    ns39:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns2:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:69 .

    ns2:CmsImage1 foaf:thumbnail ns39:Thumbnail800x800 .
}

ns197:Thumbnail200x200 {
    ns197:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 9 image 1 rights holder" ;
        dcterms:title "Extent 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns254:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:19 .

    ns254:CmsImage1 foaf:thumbnail ns197:Thumbnail200x200 .
}

ns241:Thumbnail600x600 {
    ns241:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 4 image 0 rights holder" ;
        dcterms:title "Spatial 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns398:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:74 .

    ns398:CmsImage0 foaf:thumbnail ns241:Thumbnail600x600 .
}

ns291:Thumbnail200x200 {
    ns291:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns316:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:50 .

    ns316:CmsImage1 foaf:thumbnail ns291:Thumbnail200x200 .
}

ns33:Thumbnail400x400 {
    ns33:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns12:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:106 .

    ns12:CmsImage0 foaf:thumbnail ns33:Thumbnail400x400 .
}

ns246:Thumbnail400x400 {
    ns246:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns89:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns21:work5 .

    ns89:CmsImage0 foaf:thumbnail ns246:Thumbnail400x400 .
}

ns151:Thumbnail400x400 {
    ns151:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns225:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:97 .

    ns225:CmsImage0 foaf:thumbnail ns151:Thumbnail400x400 .
}

ns179:Thumbnail200x200 {
    ns179:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns402:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:0 .

    ns402:CmsImage0 foaf:thumbnail ns179:Thumbnail200x200 .
}

ns321:Thumbnail800x800 {
    ns321:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 1 rights holder" ;
        dcterms:title "Spatial 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns365:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:77 .

    ns365:CmsImage1 foaf:thumbnail ns321:Thumbnail800x800 .
}

ns249:Thumbnail600x600 {
    ns249:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 9 image 0 rights holder" ;
        dcterms:title "Spatial 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns68:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:79 .

    ns68:CmsImage0 foaf:thumbnail ns249:Thumbnail600x600 .
}

ns177:Thumbnail400x400 {
    ns177:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 4 image 1 rights holder" ;
        dcterms:title "Subject 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns354:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:84 .

    ns354:CmsImage1 foaf:thumbnail ns177:Thumbnail400x400 .
}

ns331:Thumbnail200x200 {
    ns331:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 9 image 1 rights holder" ;
        dcterms:title "Cultural context 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns238:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:9 .

    ns238:CmsImage1 foaf:thumbnail ns331:Thumbnail200x200 .
}

ns297:Thumbnail800x800 {
    ns297:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns387:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:70 .

    ns387:CmsImage0 foaf:thumbnail ns297:Thumbnail800x800 .
}

ns96:CmsImage1 {
    ns96:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:13 .
}

ns382:Thumbnail400x400 {
    ns382:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns277:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:44 .

    ns277:CmsImage0 foaf:thumbnail ns382:Thumbnail400x400 .
}

ns319:Thumbnail800x800 {
    ns319:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 0 rights holder" ;
        dcterms:title "Cultural context 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns205:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:4 .

    ns205:CmsImage0 foaf:thumbnail ns319:Thumbnail800x800 .
}

ns228:Thumbnail600x600 {
    ns228:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 2 image 1 rights holder" ;
        dcterms:title "Type 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns274:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:102 .

    ns274:CmsImage1 foaf:thumbnail ns228:Thumbnail600x600 .
}

ns88:Thumbnail400x400 {
    ns88:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 1 rights holder" ;
        dcterms:title "Medium 4 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns277:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:44 .

    ns277:CmsImage1 foaf:thumbnail ns88:Thumbnail400x400 .
}

ns387:CmsImage0 {
    ns387:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 0 image 0 rights holder" ;
        dcterms:title "Spatial 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:70 .
}

ns167:Thumbnail400x400 {
    ns167:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 3 image 1 rights holder" ;
        dcterms:title "CmsPerson 3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns313:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:person3 .

    ns313:CmsImage1 foaf:thumbnail ns167:Thumbnail400x400 .
}

ns165:Thumbnail400x400 {
    ns165:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 7 image 0 rights holder" ;
        dcterms:title "Language 7 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns367:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:27 .

    ns367:CmsImage0 foaf:thumbnail ns165:Thumbnail400x400 .
}

ns24:Thumbnail800x800 {
    ns24:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns257:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:7 .

    ns257:CmsImage1 foaf:thumbnail ns24:Thumbnail800x800 .
}

ns172:Thumbnail400x400 {
    ns172:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 2 image 0 rights holder" ;
        dcterms:title "Spatial 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns34:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:72 .

    ns34:CmsImage0 foaf:thumbnail ns172:Thumbnail400x400 .
}

ns256:Thumbnail800x800 {
    ns256:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 6 image 1 rights holder" ;
        dcterms:title "Technique 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns393:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:96 .

    ns393:CmsImage1 foaf:thumbnail ns256:Thumbnail800x800 .
}

ns293:Thumbnail600x600 {
    ns293:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 0 rights holder" ;
        dcterms:title "Language 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns158:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:29 .

    ns158:CmsImage0 foaf:thumbnail ns293:Thumbnail600x600 .
}

ns278:Thumbnail200x200 {
    ns278:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns155:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:86 .

    ns155:CmsImage1 foaf:thumbnail ns278:Thumbnail200x200 .
}

ns8:90 {
    ns8:90 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 0" ;
        skos:prefLabel "CmsConcept 90" .
}

_:N61f2e6ea207e469b89e6376baa941367 {
    _:N61f2e6ea207e469b89e6376baa941367 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:spatial _:N1aec5af3f5b648cc86a7ad4fff4be4b9 ;
        dcterms:title "CmsCollection0CmsWork3 closing" ;
        cms:work ns17:work3 .

    _:N1aec5af3f5b648cc86a7ad4fff4be4b9 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

_:N7c24d52ab4f64aadb9646cdb191dc983 {
    _:N7c24d52ab4f64aadb9646cdb191dc983 a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N1bcdf36bdc554949b54d85dae64923dc ;
        dcterms:spatial _:N0b724283180d463c846a269ce5d280d0 ;
        dcterms:title "CmsCollection1CmsWork6 closing" ;
        cms:work ns21:work6 .

    _:N0b724283180d463c846a269ce5d280d0 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N1bcdf36bdc554949b54d85dae64923dc a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns289:Thumbnail800x800 {
    ns289:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns324:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:105 .

    ns324:CmsImage0 foaf:thumbnail ns289:Thumbnail800x800 .
}

ns339:CmsImage0 {
    ns339:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 0 rights holder" ;
        dcterms:title "Source 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:65 .
}

ns290:Thumbnail600x600 {
    ns290:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns157:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:organization1 .

    ns157:CmsImage1 foaf:thumbnail ns290:Thumbnail600x600 .
}

ns366:Thumbnail200x200 {
    ns366:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 1 rights holder" ;
        dcterms:title "Language 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns48:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:28 .

    ns48:CmsImage1 foaf:thumbnail ns366:Thumbnail200x200 .
}

ns25:Thumbnail400x400 {
    ns25:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 8 image 1 rights holder" ;
        dcterms:title "Technique 8 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns206:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:98 .

    ns206:CmsImage1 foaf:thumbnail ns25:Thumbnail400x400 .
}

ns45:CmsImage0 {
    ns45:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:38 .
}

ns19:Thumbnail800x800 {
    ns19:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 1 rights holder" ;
        dcterms:title "Subject 2 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns52:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:82 .

    ns52:CmsImage1 foaf:thumbnail ns19:Thumbnail800x800 .
}

ns171:Thumbnail200x200 {
    ns171:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns26:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:83 .

    ns26:CmsImage1 foaf:thumbnail ns171:Thumbnail200x200 .
}

ns275:Thumbnail400x400 {
    ns275:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns362:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:48 .

    ns362:CmsImage0 foaf:thumbnail ns275:Thumbnail400x400 .
}

ns299:Thumbnail200x200 {
    ns299:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns52:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:82 .

    ns52:CmsImage0 foaf:thumbnail ns299:Thumbnail200x200 .
}

_:N3f9913652849437cb9aab69bbd8a7eeb {
    _:N3f9913652849437cb9aab69bbd8a7eeb a cms:Event,
            cms:WorkClosing,
            cms:WorkEvent ;
        dcterms:date "2022-01-01"^^xsd:date ;
        dcterms:description _:N1189b82494ee49b2befb12c377dac45b ;
        dcterms:spatial _:Nc855b7d44a7c4edd989b4620bd74cf5a ;
        dcterms:title "CmsCollection1CmsWork4 closing" ;
        cms:work ns21:work4 .

    _:Nc855b7d44a7c4edd989b4620bd74cf5a a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N1189b82494ee49b2befb12c377dac45b a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns8:62 {
    ns8:62 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 2" ;
        skos:prefLabel "CmsConcept 62" .
}

ns212:Thumbnail400x400 {
    ns212:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 1 rights holder" ;
        dcterms:title "Spatial 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns210:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:71 .

    ns210:CmsImage1 foaf:thumbnail ns212:Thumbnail400x400 .
}

ns21:work6 {
    ns21:work6 a cms:Work ;
        dcterms:alternative "CmsCollection1CmsWork6 alternative title 0",
            "CmsCollection1CmsWork6 alternative title 1" ;
        dcterms:contributor _:N3fb263efc9c6444984f4d34619ca8778,
            _:Nf5c25c22d1e840c7b14269840bda1ec6 ;
        dcterms:creator ns80:person3,
            ns80:person4 ;
        dcterms:description _:N1bcdf36bdc554949b54d85dae64923dc ;
        dcterms:extent ns8:16,
            ns8:17 ;
        dcterms:identifier "CmsCollection1CmsWork6Id0",
            "CmsCollection1CmsWork6Id1" ;
        dcterms:language ns8:26,
            ns8:27 ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:medium ns8:46,
            ns8:47 ;
        dcterms:provenance "CmsCollection1CmsWork6 provenance 0",
            "CmsCollection1CmsWork6 provenance 1" ;
        dcterms:publisher ns8:56,
            ns8:57 ;
        dcterms:relation <http://en.wikipedia.org/wiki/Pilot-ACE>,
            <http://www.wikidata.org/entity/Q937690> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 rights holder" ;
        dcterms:source ns8:66,
            ns8:67 ;
        dcterms:spatial ns21:work6Location ;
        dcterms:subject ns8:86,
            ns8:87 ;
        dcterms:title "CmsCollection1CmsWork6" ;
        dcterms:type ns8:106,
            ns8:107 ;
        vra:culturalContext ns8:6,
            ns8:7 ;
        vra:material ns8:36,
            ns8:37 ;
        vra:technique ns8:96,
            ns8:97 ;
        cms:collection ns80:collection1 ;
        foaf:page <http://example.com/work/6> .

    _:N3fb263efc9c6444984f4d34619ca8778 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork6 contributor 1" .

    _:Nf5c25c22d1e840c7b14269840bda1ec6 a cms:Agent,
            cms:Person ;
        foaf:name "CmsCollection1CmsWork6 contributor 0" .

    _:N1bcdf36bdc554949b54d85dae64923dc a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns275:Thumbnail800x800 {
    ns275:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 0 rights holder" ;
        dcterms:title "Medium 8 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns362:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:48 .

    ns362:CmsImage0 foaf:thumbnail ns275:Thumbnail800x800 .
}

ns84:Thumbnail600x600 {
    ns84:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 1 rights holder" ;
        dcterms:title "Medium 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns359:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:43 .

    ns359:CmsImage1 foaf:thumbnail ns84:Thumbnail600x600 .
}

ns224:Thumbnail400x400 {
    ns224:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 8 image 0 rights holder" ;
        dcterms:title "Spatial 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns221:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:78 .

    ns221:CmsImage0 foaf:thumbnail ns224:Thumbnail400x400 .
}

ns80:freestandingwork10Opening {
    ns80:freestandingwork10Opening a cms:Event,
            cms:WorkEvent,
            cms:WorkOpening ;
        dcterms:date "2021-12-22"^^xsd:date ;
        dcterms:description _:N63761d7e390e4198af0e20b089d80928 ;
        dcterms:spatial _:Nc6cbd1b542844111b3d2f0f44d9544e0 ;
        dcterms:title "FreestandingWork10 opening" ;
        cms:work ns80:freestandingwork10 .

    _:Nc6cbd1b542844111b3d2f0f44d9544e0 a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .

    _:N63761d7e390e4198af0e20b089d80928 a cms:Text ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 description rights holder" ;
        rdf:value "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae." .
}

ns28:Thumbnail400x400 {
    ns28:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork6 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns106:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns21:work6 .

    ns106:CmsImage0 foaf:thumbnail ns28:Thumbnail400x400 .
}

ns382:Thumbnail200x200 {
    ns382:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 4 image 0 rights holder" ;
        dcterms:title "Medium 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns277:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:44 .

    ns277:CmsImage0 foaf:thumbnail ns382:Thumbnail200x200 .
}

ns204:Thumbnail200x200 {
    ns204:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 8 image 1 rights holder" ;
        dcterms:title "Medium 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns362:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:48 .

    ns362:CmsImage1 foaf:thumbnail ns204:Thumbnail200x200 .
}

ns29:CmsImage0 {
    ns29:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 0 rights holder" ;
        dcterms:title "Extent 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:15 .
}

ns109:Thumbnail400x400 {
    ns109:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 0 rights holder" ;
        dcterms:title "Cultural context 6 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns378:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:6 .

    ns378:CmsImage0 foaf:thumbnail ns109:Thumbnail400x400 .
}

ns402:CmsImage0 {
    ns402:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 0 image 0 rights holder" ;
        dcterms:title "Cultural context 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:0 .
}

ns8:59 {
    ns8:59 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 9" ;
        skos:prefLabel "CmsConcept 59" .
}

ns403:CmsImage0 {
    ns403:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:64 .
}

ns262:Thumbnail200x200 {
    ns262:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 0 image 0 rights holder" ;
        dcterms:title "Material 0 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns146:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:30 .

    ns146:CmsImage0 foaf:thumbnail ns262:Thumbnail200x200 .
}

ns218:Thumbnail200x200 {
    ns218:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 1 rights holder" ;
        dcterms:title "Medium 5 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns342:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:45 .

    ns342:CmsImage1 foaf:thumbnail ns218:Thumbnail200x200 .
}

ns389:CmsImage1 {
    ns389:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 1 image 1 rights holder" ;
        dcterms:title "Medium 1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:41 .
}

ns151:Thumbnail200x200 {
    ns151:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 7 image 0 rights holder" ;
        dcterms:title "Technique 7 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns225:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:97 .

    ns225:CmsImage0 foaf:thumbnail ns151:Thumbnail200x200 .
}

ns338:CmsImage0 {
    ns338:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 0 rights holder" ;
        dcterms:title "Subject 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:87 .
}

ns70:Thumbnail400x400 {
    ns70:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 0 rights holder" ;
        dcterms:title "Subject 1 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns245:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:81 .

    ns245:CmsImage0 foaf:thumbnail ns70:Thumbnail400x400 .
}

ns159:Thumbnail600x600 {
    ns159:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork4 image 1 rights holder" ;
        dcterms:title "CmsCollection1CmsWork4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns386:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns21:work4 .

    ns386:CmsImage1 foaf:thumbnail ns159:Thumbnail600x600 .
}

ns31:Thumbnail200x200 {
    ns31:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns404:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:freestandingwork10 .

    ns404:CmsImage1 foaf:thumbnail ns31:Thumbnail200x200 .
}

ns8:99 {
    ns8:99 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 9" ;
        skos:prefLabel "CmsConcept 99" .
}

ns287:Thumbnail600x600 {
    ns287:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns245:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:81 .

    ns245:CmsImage1 foaf:thumbnail ns287:Thumbnail600x600 .
}

ns202:Thumbnail400x400 {
    ns202:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns61:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns17:work3 .

    ns61:CmsImage1 foaf:thumbnail ns202:Thumbnail400x400 .
}

ns8:57 {
    ns8:57 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 7" ;
        skos:prefLabel "CmsConcept 57" .
}

ns171:Thumbnail800x800 {
    ns171:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 3 image 1 rights holder" ;
        dcterms:title "Subject 3 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns26:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:83 .

    ns26:CmsImage1 foaf:thumbnail ns171:Thumbnail800x800 .
}

ns227:Thumbnail200x200 {
    ns227:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 3 image 1 rights holder" ;
        dcterms:title "Extent 3 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns96:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:13 .

    ns96:CmsImage1 foaf:thumbnail ns227:Thumbnail200x200 .
}

ns374:Thumbnail400x400 {
    ns374:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns48:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:28 .

    ns48:CmsImage0 foaf:thumbnail ns374:Thumbnail400x400 .
}

ns8:64 {
    ns8:64 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 4" ;
        skos:prefLabel "CmsConcept 64" .
}

ns162:Thumbnail400x400 {
    ns162:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 1 rights holder" ;
        dcterms:title "Technique 9 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns101:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:99 .

    ns101:CmsImage1 foaf:thumbnail ns162:Thumbnail400x400 .
}

ns8:96 {
    ns8:96 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 6" ;
        skos:prefLabel "CmsConcept 96" .
}

ns383:CmsImage1 {
    ns383:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns17:work1 .
}

ns11:Thumbnail600x600 {
    ns11:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 3 image 1 rights holder" ;
        dcterms:title "Source 3 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns215:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:63 .

    ns215:CmsImage1 foaf:thumbnail ns11:Thumbnail600x600 .
}

ns8:69 {
    ns8:69 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 9" ;
        skos:prefLabel "CmsConcept 69" .
}

ns287:Thumbnail400x400 {
    ns287:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 1 image 1 rights holder" ;
        dcterms:title "Subject 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns245:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:81 .

    ns245:CmsImage1 foaf:thumbnail ns287:Thumbnail400x400 .
}

ns39:Thumbnail200x200 {
    ns39:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 9 image 1 rights holder" ;
        dcterms:title "Source 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns2:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:69 .

    ns2:CmsImage1 foaf:thumbnail ns39:Thumbnail200x200 .
}

ns69:Thumbnail200x200 {
    ns69:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 4 image 0 rights holder" ;
        dcterms:title "Extent 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns191:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:14 .

    ns191:CmsImage0 foaf:thumbnail ns69:Thumbnail200x200 .
}

ns246:Thumbnail200x200 {
    ns246:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns89:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns21:work5 .

    ns89:CmsImage0 foaf:thumbnail ns246:Thumbnail200x200 .
}

ns333:Thumbnail800x800 {
    ns333:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 7 image 1 rights holder" ;
        dcterms:title "Subject 7 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns338:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:87 .

    ns338:CmsImage1 foaf:thumbnail ns333:Thumbnail800x800 .
}

ns271:Thumbnail600x600 {
    ns271:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 8 image 0 rights holder" ;
        dcterms:title "Source 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns373:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:68 .

    ns373:CmsImage0 foaf:thumbnail ns271:Thumbnail600x600 .
}

ns8:38 {
    ns8:38 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Material> ;
        rdf:value "Material 8" ;
        skos:prefLabel "CmsConcept 38" .
}

ns53:Thumbnail200x200 {
    ns53:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 1 rights holder" ;
        dcterms:title "Extent 1 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns328:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:11 .

    ns328:CmsImage1 foaf:thumbnail ns53:Thumbnail200x200 .
}

ns273:Thumbnail600x600 {
    ns273:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork2 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork2 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns270:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns17:work2 .

    ns270:CmsImage0 foaf:thumbnail ns273:Thumbnail600x600 .
}

ns118:Thumbnail800x800 {
    ns118:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns365:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:77 .

    ns365:CmsImage0 foaf:thumbnail ns118:Thumbnail800x800 .
}

ns64:Thumbnail200x200 {
    ns64:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 4 image 1 rights holder" ;
        dcterms:title "Cultural context 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns205:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:4 .

    ns205:CmsImage1 foaf:thumbnail ns64:Thumbnail200x200 .
}

ns395:CmsImage0 {
    ns395:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 9 image 0 rights holder" ;
        dcterms:title "Subject 9 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:89 .
}

ns330:Thumbnail200x200 {
    ns330:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork11 image 1 rights holder" ;
        dcterms:title "FreestandingWork11 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns372:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:freestandingwork11 .

    ns372:CmsImage1 foaf:thumbnail ns330:Thumbnail200x200 .
}

ns103:Thumbnail600x600 {
    ns103:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 0 rights holder" ;
        dcterms:title "Type 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns248:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:104 .

    ns248:CmsImage0 foaf:thumbnail ns103:Thumbnail600x600 .
}

ns404:CmsImage1 {
    ns404:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork10 image 1 rights holder" ;
        dcterms:title "FreestandingWork10 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns80:freestandingwork10 .
}

ns201:Thumbnail200x200 {
    ns201:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 4 image 0 rights holder" ;
        dcterms:title "Source 4 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns403:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:64 .

    ns403:CmsImage0 foaf:thumbnail ns201:Thumbnail200x200 .
}

ns401:CmsImage0 {
    ns401:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 6 image 0 rights holder" ;
        dcterms:title "Language 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:26 .
}

ns314:CmsImage0 {
    ns314:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 8 image 0 rights holder" ;
        dcterms:title "Cultural context 8 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:8 .
}

ns169:Thumbnail600x600 {
    ns169:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 0 rights holder" ;
        dcterms:title "Publisher 0 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns316:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:50 .

    ns316:CmsImage0 foaf:thumbnail ns169:Thumbnail600x600 .
}

ns345:Thumbnail600x600 {
    ns345:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 7 image 0 rights holder" ;
        dcterms:title "Material 7 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns27:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:37 .

    ns27:CmsImage0 foaf:thumbnail ns345:Thumbnail600x600 .
}

ns247:Thumbnail600x600 {
    ns247:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns383:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns17:work1 .

    ns383:CmsImage0 foaf:thumbnail ns247:Thumbnail600x600 .
}

ns219:CmsImage0 {
    ns219:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:90 .
}

ns168:Thumbnail800x800 {
    ns168:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns248:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:104 .

    ns248:CmsImage1 foaf:thumbnail ns168:Thumbnail800x800 .
}

dcterms:extent {
    dcterms:extent a cms:Property ;
        rdfs:label "Extent" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns263:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Extent> .
}

ns24:Thumbnail600x600 {
    ns24:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 7 image 1 rights holder" ;
        dcterms:title "Cultural context 7 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns257:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:7 .

    ns257:CmsImage1 foaf:thumbnail ns24:Thumbnail600x600 .
}

ns371:CmsImage0 {
    ns371:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 2 image 0 rights holder" ;
        dcterms:title "Extent 2 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:12 .
}

ns291:Thumbnail400x400 {
    ns291:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 0 image 1 rights holder" ;
        dcterms:title "Publisher 0 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns316:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:50 .

    ns316:CmsImage1 foaf:thumbnail ns291:Thumbnail400x400 .
}

ns347:Thumbnail400x400 {
    ns347:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork1 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns383:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns17:work1 .

    ns383:CmsImage1 foaf:thumbnail ns347:Thumbnail400x400 .
}

ns8:86 {
    ns8:86 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Subject> ;
        rdf:value "Subject 6" ;
        skos:prefLabel "CmsConcept 86" .
}

ns317:Thumbnail600x600 {
    ns317:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 4 image 0 rights holder" ;
        dcterms:title "Technique 4 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns137:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:94 .

    ns137:CmsImage0 foaf:thumbnail ns317:Thumbnail600x600 .
}

ns185:Thumbnail200x200 {
    ns185:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 1 rights holder" ;
        dcterms:title "Medium 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns394:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:42 .

    ns394:CmsImage1 foaf:thumbnail ns185:Thumbnail200x200 .
}

ns56:Thumbnail800x800 {
    ns56:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 2 image 0 rights holder" ;
        dcterms:title "CmsPerson 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns385:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns80:person2 .

    ns385:CmsImage0 foaf:thumbnail ns56:Thumbnail800x800 .
}

ns284:CmsImage1 {
    ns284:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 7 image 1 rights holder" ;
        dcterms:title "Source 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:67 .
}

ns98:Thumbnail400x400 {
    ns98:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 6 image 1 rights holder" ;
        dcterms:title "Spatial 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns207:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:76 .

    ns207:CmsImage1 foaf:thumbnail ns98:Thumbnail400x400 .
}

ns360:Thumbnail200x200 {
    ns360:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 0 image 1 rights holder" ;
        dcterms:title "CmsOrganization 0 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns237:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:organization0 .

    ns237:CmsImage1 foaf:thumbnail ns360:Thumbnail200x200 .
}

ns123:Thumbnail400x400 {
    ns123:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 9 image 0 rights holder" ;
        dcterms:title "Technique 9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns101:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:99 .

    ns101:CmsImage0 foaf:thumbnail ns123:Thumbnail400x400 .
}

ns269:Thumbnail800x800 {
    ns269:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 2 image 0 rights holder" ;
        dcterms:title "Language 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns337:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:22 .

    ns337:CmsImage0 foaf:thumbnail ns269:Thumbnail800x800 .
}

ns61:CmsImage1 {
    ns61:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork3 image 1 rights holder" ;
        dcterms:title "CmsCollection0CmsWork3 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns17:work3 .
}

ns370:Thumbnail400x400 {
    ns370:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns323:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:freestandingwork9 .

    ns323:CmsImage0 foaf:thumbnail ns370:Thumbnail400x400 .
}

ns370:Thumbnail600x600 {
    ns370:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "FreestandingWork9 image 0 rights holder" ;
        dcterms:title "FreestandingWork9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns323:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns80:freestandingwork9 .

    ns323:CmsImage0 foaf:thumbnail ns370:Thumbnail600x600 .
}

vra:technique {
    vra:technique a cms:Property ;
        rdfs:label "Technique" ;
        cms:propertyFilterable true ;
        cms:propertyGroup ns263:property_group ;
        cms:propertySearchable true ;
        rdfs:range <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> .
}

ns290:Thumbnail400x400 {
    ns290:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 1 image 1 rights holder" ;
        dcterms:title "CmsOrganization 1 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns157:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:organization1 .

    ns157:CmsImage1 foaf:thumbnail ns290:Thumbnail400x400 .
}

ns381:CmsImage1 {
    ns381:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 1 rights holder" ;
        dcterms:title "Medium 9 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:49 .
}

ns71:Thumbnail400x400 {
    ns71:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsPerson 4 image 0 rights holder" ;
        dcterms:title "CmsPerson 4 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns102:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns80:person4 .

    ns102:CmsImage0 foaf:thumbnail ns71:Thumbnail400x400 .
}

ns8:58 {
    ns8:58 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Publisher> ;
        rdf:value "Publisher 8" ;
        skos:prefLabel "CmsConcept 58" .
}

ns13:Thumbnail800x800 {
    ns13:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 1 image 1 rights holder" ;
        dcterms:title "Source 1 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns341:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:61 .

    ns341:CmsImage1 foaf:thumbnail ns13:Thumbnail800x800 .
}

ns8:26 {
    ns8:26 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Language> ;
        rdf:value "Language 6" ;
        skos:prefLabel "CmsConcept 26" .
}

ns119:Thumbnail200x200 {
    ns119:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 8 image 1 rights holder" ;
        dcterms:title "Publisher 8 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns326:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:58 .

    ns326:CmsImage1 foaf:thumbnail ns119:Thumbnail200x200 .
}

ns188:Thumbnail400x400 {
    ns188:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 5 image 0 rights holder" ;
        dcterms:title "Medium 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns342:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:45 .

    ns342:CmsImage0 foaf:thumbnail ns188:Thumbnail400x400 .
}

ns149:Thumbnail800x800 {
    ns149:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 5 image 0 rights holder" ;
        dcterms:title "Cultural context 5 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns355:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:5 .

    ns355:CmsImage0 foaf:thumbnail ns149:Thumbnail800x800 .
}

ns335:CmsImage0 {
    ns335:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 6 image 0 rights holder" ;
        dcterms:title "Material 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:36 .
}

ns75:Thumbnail400x400 {
    ns75:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 2 image 0 rights holder" ;
        dcterms:title "Medium 2 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns394:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:42 .

    ns394:CmsImage0 foaf:thumbnail ns75:Thumbnail400x400 .
}

ns115:Thumbnail600x600 {
    ns115:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 9 image 0 rights holder" ;
        dcterms:title "Medium 9 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns381:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:49 .

    ns381:CmsImage0 foaf:thumbnail ns115:Thumbnail600x600 .
}

ns80:freestandingwork9Location {
    ns80:freestandingwork9Location a cms:Location ;
        wgs:lat 4.27281e+01 ;
        wgs:long -7.368758e+01 .
}

ns349:Thumbnail400x400 {
    ns349:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection0CmsWork0 image 0 rights holder" ;
        dcterms:title "CmsCollection0CmsWork0 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns380:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns17:work0 .

    ns380:CmsImage0 foaf:thumbnail ns349:Thumbnail400x400 .
}

ns153:Thumbnail600x600 {
    ns153:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 9 image 1 rights holder" ;
        dcterms:title "Type 9 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns186:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:109 .

    ns186:CmsImage1 foaf:thumbnail ns153:Thumbnail600x600 .
}

ns178:Thumbnail400x400 {
    ns178:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Medium 3 image 0 rights holder" ;
        dcterms:title "Medium 3 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns359:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:43 .

    ns359:CmsImage0 foaf:thumbnail ns178:Thumbnail400x400 .
}

ns8:93 {
    ns8:93 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Technique> ;
        rdf:value "Technique 3" ;
        skos:prefLabel "CmsConcept 93" .
}

ns365:CmsImage0 {
    ns365:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 7 image 0 rights holder" ;
        dcterms:title "Spatial 7 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:77 .
}

ns400:CmsImage0 {
    ns400:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 5 image 0 rights holder" ;
        dcterms:title "Language 5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:25 .
}

ns283:Thumbnail600x600 {
    ns283:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns114:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:80 .

    ns114:CmsImage1 foaf:thumbnail ns283:Thumbnail600x600 .
}

ns80:person1 {
    ns80:person1 a cms:Agent,
            cms:Person ;
        dcterms:relation <http://en.wikipedia.org/wiki/Alan_Turing>,
            <http://www.wikidata.org/entity/Q7251> ;
        contact:sortName "1, CmsPerson" ;
        foaf:familyName "1" ;
        foaf:givenName "CmsPerson" ;
        foaf:name "CmsPerson 1" .
}

ns189:CmsImage0 {
    ns189:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:24 .
}

ns243:Thumbnail400x400 {
    ns243:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns378:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:6 .

    ns378:CmsImage1 foaf:thumbnail ns243:Thumbnail400x400 .
}

ns132:Thumbnail800x800 {
    ns132:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 7 image 0 rights holder" ;
        dcterms:title "Extent 7 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns302:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:17 .

    ns302:CmsImage0 foaf:thumbnail ns132:Thumbnail800x800 .
}

ns111:Thumbnail800x800 {
    ns111:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 1 rights holder" ;
        dcterms:title "Type 6 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns12:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:106 .

    ns12:CmsImage1 foaf:thumbnail ns111:Thumbnail800x800 .
}

ns315:Thumbnail200x200 {
    ns315:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 3 image 0 rights holder" ;
        dcterms:title "Material 3 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns130:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:33 .

    ns130:CmsImage0 foaf:thumbnail ns315:Thumbnail200x200 .
}

ns303:Thumbnail400x400 {
    ns303:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 1 rights holder" ;
        dcterms:title "Publisher 5 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns363:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:55 .

    ns363:CmsImage1 foaf:thumbnail ns303:Thumbnail400x400 .
}

ns12:CmsImage0 {
    ns12:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 6 image 0 rights holder" ;
        dcterms:title "Type 6 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:106 .
}

ns278:Thumbnail400x400 {
    ns278:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 6 image 1 rights holder" ;
        dcterms:title "Subject 6 image 1 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns155:CmsImage1 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:86 .

    ns155:CmsImage1 foaf:thumbnail ns278:Thumbnail400x400 .
}

ns369:Thumbnail200x200 {
    ns369:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Material 8 image 0 rights holder" ;
        dcterms:title "Material 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns45:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:38 .

    ns45:CmsImage0 foaf:thumbnail ns369:Thumbnail200x200 .
}

ns89:CmsImage0 {
    ns89:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns21:work5 .
}

ns126:Thumbnail600x600 {
    ns126:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 2 image 1 rights holder" ;
        dcterms:title "Cultural context 2 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns164:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:2 .

    ns164:CmsImage1 foaf:thumbnail ns126:Thumbnail600x600 .
}

ns289:Thumbnail400x400 {
    ns289:Thumbnail400x400 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 5 image 0 rights holder" ;
        dcterms:title "Type 5 image 0 thumbnail 400x400" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/400x400.png" ;
        cms:thumbnailOf ns324:CmsImage0 ;
        exif:height 400 ;
        exif:width 400 ;
        foaf:depicts ns8:105 .

    ns324:CmsImage0 foaf:thumbnail ns289:Thumbnail400x400 .
}

ns399:CmsImage1 {
    ns399:CmsImage1 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 7 image 1 rights holder" ;
        dcterms:title "Publisher 7 image 1" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:57 .
}

ns121:Thumbnail600x600 {
    ns121:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 0 image 1 rights holder" ;
        dcterms:title "Source 0 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns312:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:60 .

    ns312:CmsImage1 foaf:thumbnail ns121:Thumbnail600x600 .
}

ns353:Thumbnail800x800 {
    ns353:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 0 image 0 rights holder" ;
        dcterms:title "Technique 0 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns219:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:90 .

    ns219:CmsImage0 foaf:thumbnail ns353:Thumbnail800x800 .
}

ns8:66 {
    ns8:66 a cms:Concept,
            skos:Concept,
            <urn:paradicms_etl:pipeline:synthetic_data:property_range:Source> ;
        rdf:value "Source 6" ;
        skos:prefLabel "CmsConcept 66" .
}

ns163:Thumbnail800x800 {
    ns163:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 1 image 0 rights holder" ;
        dcterms:title "Technique 1 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns108:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:91 .

    ns108:CmsImage0 foaf:thumbnail ns163:Thumbnail800x800 .
}

ns23:Thumbnail600x600 {
    ns23:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 5 image 1 rights holder" ;
        dcterms:title "Extent 5 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns29:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:15 .

    ns29:CmsImage1 foaf:thumbnail ns23:Thumbnail600x600 .
}

ns328:CmsImage0 {
    ns328:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Extent 1 image 0 rights holder" ;
        dcterms:title "Extent 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:11 .
}

ns32:Thumbnail600x600 {
    ns32:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 5 image 0 rights holder" ;
        dcterms:title "Publisher 5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns363:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:55 .

    ns363:CmsImage0 foaf:thumbnail ns32:Thumbnail600x600 .
}

ns299:Thumbnail800x800 {
    ns299:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 2 image 0 rights holder" ;
        dcterms:title "Subject 2 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns52:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:82 .

    ns52:CmsImage0 foaf:thumbnail ns299:Thumbnail800x800 .
}

ns214:Thumbnail200x200 {
    ns214:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 1 rights holder" ;
        dcterms:title "Language 4 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns189:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:24 .

    ns189:CmsImage1 foaf:thumbnail ns214:Thumbnail200x200 .
}

ns306:Thumbnail200x200 {
    ns306:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 2 image 1 rights holder" ;
        dcterms:title "Publisher 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns251:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:52 .

    ns251:CmsImage1 foaf:thumbnail ns306:Thumbnail200x200 .
}

ns168:Thumbnail600x600 {
    ns168:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 4 image 1 rights holder" ;
        dcterms:title "Type 4 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns248:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:104 .

    ns248:CmsImage1 foaf:thumbnail ns168:Thumbnail600x600 .
}

ns243:Thumbnail200x200 {
    ns243:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Cultural context 6 image 1 rights holder" ;
        dcterms:title "Cultural context 6 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns378:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:6 .

    ns378:CmsImage1 foaf:thumbnail ns243:Thumbnail200x200 .
}

ns1:Thumbnail200x200 {
    ns1:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Technique 2 image 0 rights holder" ;
        dcterms:title "Technique 2 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns295:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:92 .

    ns295:CmsImage0 foaf:thumbnail ns1:Thumbnail200x200 .
}

ns95:Thumbnail800x800 {
    ns95:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Source 5 image 1 rights holder" ;
        dcterms:title "Source 5 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns339:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:65 .

    ns339:CmsImage1 foaf:thumbnail ns95:Thumbnail800x800 .
}

ns272:Thumbnail200x200 {
    ns272:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 9 image 1 rights holder" ;
        dcterms:title "Language 9 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns158:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:29 .

    ns158:CmsImage1 foaf:thumbnail ns272:Thumbnail200x200 .
}

ns246:Thumbnail600x600 {
    ns246:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsCollection1CmsWork5 image 0 rights holder" ;
        dcterms:title "CmsCollection1CmsWork5 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns89:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns21:work5 .

    ns89:CmsImage0 foaf:thumbnail ns246:Thumbnail600x600 .
}

ns210:CmsImage0 {
    ns210:CmsImage0 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Spatial 1 image 0 rights holder" ;
        dcterms:title "Spatial 1 image 0" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/1000x1000.png" ;
        exif:height 1000 ;
        exif:width 1000 ;
        foaf:depicts ns8:71 .
}

ns94:Thumbnail800x800 {
    ns94:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Publisher 4 image 0 rights holder" ;
        dcterms:title "Publisher 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns308:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:54 .

    ns308:CmsImage0 foaf:thumbnail ns94:Thumbnail800x800 .
}

ns239:Thumbnail600x600 {
    ns239:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 1 rights holder" ;
        dcterms:title "Type 8 image 1 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns334:CmsImage1 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:108 .

    ns334:CmsImage1 foaf:thumbnail ns239:Thumbnail600x600 .
}

ns358:Thumbnail800x800 {
    ns358:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 4 image 0 rights holder" ;
        dcterms:title "Language 4 image 0 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns189:CmsImage0 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:24 .

    ns189:CmsImage0 foaf:thumbnail ns358:Thumbnail800x800 .
}

ns93:Thumbnail200x200 {
    ns93:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Type 8 image 0 rights holder" ;
        dcterms:title "Type 8 image 0 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns334:CmsImage0 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns8:108 .

    ns334:CmsImage0 foaf:thumbnail ns93:Thumbnail200x200 .
}

ns283:Thumbnail800x800 {
    ns283:Thumbnail800x800 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Subject 0 image 1 rights holder" ;
        dcterms:title "Subject 0 image 1 thumbnail 800x800" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/800x800.png" ;
        cms:thumbnailOf ns114:CmsImage1 ;
        exif:height 800 ;
        exif:width 800 ;
        foaf:depicts ns8:80 .

    ns114:CmsImage1 foaf:thumbnail ns283:Thumbnail800x800 .
}

ns374:Thumbnail600x600 {
    ns374:Thumbnail600x600 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "Language 8 image 0 rights holder" ;
        dcterms:title "Language 8 image 0 thumbnail 600x600" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/600x600.png" ;
        cms:thumbnailOf ns48:CmsImage0 ;
        exif:height 600 ;
        exif:width 600 ;
        foaf:depicts ns8:28 .

    ns48:CmsImage0 foaf:thumbnail ns374:Thumbnail600x600 .
}

ns304:Thumbnail200x200 {
    ns304:Thumbnail200x200 a cms:Image ;
        dcterms:license <http://creativecommons.org/licenses/nc/1.0/> ;
        dcterms:rights <http://rightsstatements.org/vocab/InC-EDU/1.0/> ;
        dcterms:rightsHolder "CmsOrganization 2 image 1 rights holder" ;
        dcterms:title "CmsOrganization 2 image 1 thumbnail 200x200" ;
        cms:imageSrc "https://paradicms.org/img/placeholder/200x200.png" ;
        cms:thumbnailOf ns329:CmsImage1 ;
        exif:height 200 ;
        exif:width 200 ;
        foaf:depicts ns80:organization2 .

    ns329:CmsImage1 foaf:thumbnail ns304:Thumbnail200x200 .
}
`);
